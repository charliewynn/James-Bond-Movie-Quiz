'use strict';
var Alexa = require("alexa-sdk");
var MovieManager = require("./MovieManager");
console.log("Loading v1.1");
exports.handler = function (event, context) {
	var alexa = Alexa.handler(event, context);
	alexa.appId = "amzn1.ask.skill.0a690982-03a0-4092-9033-88504b84245a";
	alexa.registerHandlers(handlers);
	alexa.execute();
};

var handlers = {
	'LaunchRequest': function () {
		console.log("Start Intent");
		MovieManager.wipe();
		this.emit("BeginGame");
	},
	'StartOverIntent' : function(){
		MovieManager.wipe();
		this.emit("BeginGame");
	},
	'NewGameIntent': function () {
		this.emit("BeginGame");
	},
	'GuessIntent': function () {
		console.log("Start Guess Intent");
		this.emit("DoGuess");
	},
	'ScoreIntent' : function(){
		this.emit("GetScore");
	},
	'HintIntent': function () {
		this.emit("GetHint");
	},
	'GiveUpIntent': function () {
		this.emit("GiveUp");
	},
	'BeginGame': function () {
		if(!MovieManager.NewGame(this.attributes['lastID'])){
			//they played all movies, and they're done
			this.response.speak("That's all of the Bond Movies, " + MovieManager.Score());
			this.emit(":responseReady");
			return;
		}
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
		if (Object.keys(this.attributes).length === 0) {
			console.log("tried to guess with no current game");
			this.emit("BeginGame");
			return;
		}
		const currMovieData = this.attributes['movieData'];
		if(!currMovieData){
			//I don't think this can happen anymore, but we'll still keep it just in case!
			console.log("tried to guess with no current game, but they might have had a last game");
			this.emit("BeginGame");
			return;
		}
		MovieManager.continue(this.attributes['movieData']);
		const slotdata = getSlotValues(this.event.request.intent.slots).film;
		if (!slotdata.isValidated) {
			console.log("Could not find resolution", slotdata);
			this.response.speak("I didn't quite get that. Guess a Bond Film or say 'I Give Up'").listen("Ask for another hint or say 'I Give Up'");
			this.emit(":responseReady");
			return;
		}
		var theirGuess = slotdata.id;
		if (theirGuess != parseInt(theirGuess)) {
			console.log("They guessed a non number");
			this.response.speak("I didn't understand your guess (" + theirGuess + "), please guess a James Bond Movie").listen("Ask for another hint or say 'I Give Up'");
			this.emit(":responseReady");
			return;
		}
		theirGuess = parseInt(theirGuess);
		if(theirGuess === -1) {
			console.log("They guessed NSNA");
			this.response.speak("While that's a film with a character named James Bond, this game is only quizzing you on EON Productions James Bond Films.")
			.listen("Ask for another hint or say 'I Give Up'");
			this.emit(":responseReady");
			return;
		}
		var guessRes = MovieManager.guess(theirGuess);
		if (guessRes[0]) {

			console.log("They guessed right");
			if(!MovieManager.NewGame(this.attributes['lastID'])){
				//they played all movies, and they're done
				this.response.speak(guessRes[1] + ". That's all of the Bond Movies, " + MovieManager.Score());
				this.emit(":responseReady");
				return;
			}
			var hint = MovieManager.hint();
			var data = MovieManager.export();

			this.attributes['movieData'] = data;
			this.attributes['lastID'] = data.MovieID;
			console.log("Saving Attrs good guess", this.attributes);

			const intro = arrRandom([
				"Let's try another one. ",
				"Here's your next one. ",
				"Ready for the next one? ",
				"Doing great so far, here's the next one. ",
				"Let's keep going. "
			]);
			this.response.speak(guessRes[1] + ". " + intro + " Your first hint is: " +
				hint).listen("Guess a Bond Movie, or say 'Give me another hint'");
			this.emit(":responseReady");
		}
		else {
			console.log("The guessed wrong", theirGuess);
			//guess was bad
			var hint = MovieManager.hint();
			//hint returns false if there aren't any more to give, otherwise it returns a a string
			if (hint) {
				this.response.speak(guessRes[1] + " Here's another hint: " + hint).listen("Guess again or say 'I give up'");
			}
			else {
				this.response.speak(guessRes[1] + " I'm all out of hints, guess another movie or say 'I give up'").listen("Guess again or say 'I give up'");
			}
			var data = MovieManager.export();

			this.attributes['movieData'] = data;
			console.log("Saving Attrs bad guess", this.attributes);
		}
		this.emit(":responseReady");
	},
	'GiveUp': function () {
		const themovietheylost = MovieManager.MovieTitle(); 
		if(!MovieManager.NewGame(this.attributes['lastID'])){
			//they played all movies, and they're done
			this.response.speak("That's all of the Bond Movies, " + MovieManager.Score());
			this.emit(":responseReady");
			return;
		}
		var hint = MovieManager.hint();
		var data = MovieManager.export();

		this.attributes['movieData'] = data;
		this.attributes['lastID'] = data.MovieID;
		console.log("Saving Attrs", this.attributes);
		this.response.speak("It's okay, your movie was " +
			themovietheylost +
			". Let's try another movie.. Your first hint is: " +
			hint).listen("Guess a Bond Movie, or say 'Give me another hint'");
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
		var data = MovieManager.export();

		this.attributes['movieData'] = data;
		this.emit(':responseReady');
	},
	'GetScore' : function(){
		console.log("they want their current score");
		const currScore = MovieManager.CurrentScore();
		this.response.speak(currScore).listen("Keep playing or say 'stop'");
		this.emit(":responseReady");
	},
	'SessionEndedRequest': function () {
		console.log('Session ended with reason: ' + this.event.request.reason);
		this.attributes['movieData'] = undefined;
	},
	'AMAZON.StopIntent': function () {
		this.response.speak('Thanks for playing, ' + MovieManager.Score());
		this.attributes['movieData'] = undefined;
		this.emit(':responseReady');
	},
	'AMAZON.HelpIntent': function () {
		this.response.speak("say 'alexa, start James Bond Movie Quiz' to start a game, if you need a hint, say 'I need a hint'. If you can't figure out a movie, say 'I give up'. Say Stop to quit and learn your score")
			.listen("Say I need a hint, or I give up");
		this.emit(':responseReady');
	},
	'AMAZON.CancelIntent': function () {
		this.response.speak('Thanks for playing, ' + MovieManager.Score());
		this.attributes['movieData'] = undefined;
		this.emit(':responseReady');
	},
	'Unhandled': function () {
		this.response.speak("Sorry, I didn't get that. You can try: 'alexa, start James Bond Movie Quiz'");
		this.emit(':responseReady');
	}
};

function getSlotValues(filledSlots) {
	//given event.request.intent.slots, a slots values object so you have
	//what synonym the person said - .synonym
	//what that resolved to - .resolved
	//and if it's a word that is in your slot values - .isValidated
	let slotValues = {};

	console.log('The filled slots: ' + JSON.stringify(filledSlots));
	Object.keys(filledSlots).forEach(function (item) {
		//console.log("item in filledSlots: "+JSON.stringify(filledSlots[item]));
		var name = filledSlots[item].name;
		//console.log("name: "+name);
		if (filledSlots[item] &&
			filledSlots[item].resolutions &&
			filledSlots[item].resolutions.resolutionsPerAuthority[0] &&
			filledSlots[item].resolutions.resolutionsPerAuthority[0].status &&
			filledSlots[item].resolutions.resolutionsPerAuthority[0].status.code) {

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
						"isValidated": false
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
	}, this);
	//console.log("slot values: "+JSON.stringify(slotValues));
	return slotValues;
}

function arrRandom(arr){
	return arr[Math.floor(Math.random()*arr.length)];
}