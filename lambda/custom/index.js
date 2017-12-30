'use strict';
var Alexa = require("alexa-sdk");
var MovieManager = require("./MovieManager");

exports.handler = function (event, context) {
	var alexa = Alexa.handler(event, context);
	alexa.appId = "amzn1.ask.skill.0a690982-03a0-4092-9033-88504b84245a";
	alexa.registerHandlers(handlers);
	alexa.execute();
};

var handlers = {
	'LaunchRequest': function () {
		console.log("Start Intent");
		this.emit("BeginGame");
	},
	'NewGameIntent': function () {
		this.emit("BeginGame");
	},
	'GuessIntent': function () {
		console.log("Start Guess Intent");
		this.emit("DoGuess");
	},
	'HintIntent':function(){
		this.emit("GetHint");
	},
	'GiveUpIntent': function(){
		this.emit("GiveUp");
	},
	'BeginGame': function () {
		MovieManager.NewGame(this.attributes['lastID']);
		var hint = MovieManager.hint();
		var data = MovieManager.export();

		this.attributes['movieData'] = data;
		this.attributes['lastID'] = data.MovieID;
		console.log("Saving Attrs", this.attributes);
		this.response.speak("Alright, I've thought of a Bond Movie.. Your first hint is: " +
			hint).listen("Guess a Bond Movie, or say 'Give me another hint'");
		this.emit(":responseReady");
	},
	'DoGuess': function () {
		if(Object.keys(this.attributes).length === 0){
			console.log("tried to guess with no current game");
			this.emit("BeginGame");
			return;
		}
		MovieManager.continue(this.attributes['movieData']);
		const slotdata = getSlotValues(this.event.request.intent.slots).film;
		if(!slotdata.isValidated) {
			console.log("Could not find resolution", slotdata);
			this.response.speak("I didn't quite get that. Guess a Bond Film or say 'I Give Up'").listen("Ask for another hint or say 'I Give Up'");
			this.emit(":responseReady");
			return;
		}
		var theirGuess = slotdata.id;
		if(theirGuess != parseInt(theirGuess)){
			console.log("They guessed a non number");
			this.response.speak("I didn't understand your guess ("+theirGuess+"), please guess a James Bond Movie");
			this.emit(":responseReady");
			return;
		}
		theirGuess = parseInt(theirGuess);
		var guessRes = MovieManager.guess(theirGuess);
		if (guessRes[0]) {
			//guess was good
			console.log("They got it right", guessRes);
			this.response.speak(guessRes[1]);
			this.attributes['movieData'] = undefined;
		}
		else {
			//guess was bad
			var hint = MovieManager.hint();
			//hint returns false if there aren't any more to give, otherwise it returns a a string
			if (hint) {
				this.response.speak(guessRes[1] + " Here's another hint: " + hint).listen("Guess again or say 'I give up'");
			}
			else {
				this.response.speak(guessRes[1] + " I'm all out of hints, guess another movie or say 'I give up'").listen("Guess again or say 'I give up'");
			}
		}
		this.emit(":responseReady");
	},
	'GiveUp': function () {
		this.response.speak("It's okay, your movie was " + MovieManager.MovieTitle());
		this.attributes['movieData'] = undefined;
		this.emit(':responseReady');
	},
	'GetHint': function () {
		var hint = MovieManager.hint();
		if (hint) {
			this.response.speak("Here's another hint.: " + hint).listen("Guess the Bond Movie or say 'I Give Up'");
		}
		else {
			this.response.speak("I'm all out of hints, guess the movie or say 'I give up'").listen("Guess the Bond Movie or say 'I Give Up'");
		}
		this.emit(':responseReady');
	},
	'SessionEndedRequest': function () {
		console.log('Session ended with reason: ' + this.event.request.reason);
		this.attributes['movieData'] = undefined;
	},
	'AMAZON.StopIntent': function () {
		this.response.speak('Bye');
		this.attributes['movieData'] = undefined;
		this.emit(':responseReady');
	},
	'AMAZON.HelpIntent': function () {
		this.response.speak("say 'alexa, start James Bond Movie Quiz' to start a game, if you need a hint, say 'I need a hint'")
		.listen("Say I need a hint, or I give up");
		this.emit(':responseReady');
	},
	'AMAZON.CancelIntent': function () {
		this.response.speak('Bye');
		this.attributes['movieData'] = undefined;
		this.emit(':responseReady');
	},
	'Unhandled': function () {
		this.response.speak("Sorry, I didn't get that. You can try: 'alexa, start James Bond Movie Quiz'");
		this.emit(':responseReady');
	}
};

function getSlotValues (filledSlots) {
    //given event.request.intent.slots, a slots values object so you have
    //what synonym the person said - .synonym
    //what that resolved to - .resolved
    //and if it's a word that is in your slot values - .isValidated
    let slotValues = {};

    console.log('The filled slots: ' + JSON.stringify(filledSlots));
    Object.keys(filledSlots).forEach(function(item) {
        //console.log("item in filledSlots: "+JSON.stringify(filledSlots[item]));
        var name = filledSlots[item].name;
        //console.log("name: "+name);
        if(filledSlots[item]&&
           filledSlots[item].resolutions &&
           filledSlots[item].resolutions.resolutionsPerAuthority[0] &&
           filledSlots[item].resolutions.resolutionsPerAuthority[0].status &&
           filledSlots[item].resolutions.resolutionsPerAuthority[0].status.code ) {

            switch (filledSlots[item].resolutions.resolutionsPerAuthority[0].status.code) {
                case "ER_SUCCESS_MATCH":
                    slotValues[name] = {
                        "synonym": filledSlots[item].value,
												"resolved": filledSlots[item].resolutions.resolutionsPerAuthority[0].values[0].value.name,
												"id": filledSlots[item].resolutions.resolutionsPerAuthority[0].values[0].value.id,
                        "isValidated": true
                    };
                    break;
                case "ER_SUCCESS_NO_MATCH":
                    slotValues[name] = {
                        "synonym": filledSlots[item].value,
                        "resolved": filledSlots[item].value,
                        "isValidated":false
                    };
                    break;
                }
            } else {
                slotValues[name] = {
                    "synonym": filledSlots[item].value,
                    "resolved": filledSlots[item].value,
                    "isValidated": false
                };
            }
        },this);
        //console.log("slot values: "+JSON.stringify(slotValues));
        return slotValues;
}