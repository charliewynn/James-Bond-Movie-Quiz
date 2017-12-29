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
		if(Object.keys(this.attributes).length !== 0){
			if(this.attributes['movieData'])
				MovieManager.NewGame();
		}
		var hint = MovieManager.hint();
		var data = MovieManager.export();

		this.attributes['movieData'] = data;
		console.log("Saving Attrs", this.attributes);
		this.response.speak("Alright, I've thought of a Bond Movie.. Your first hint is: " +
			hint).listen("Guess a Bond Movie, or say 'Give me another hint'");
		this.emit(":responseReady");
	},
	'DoGuess': function () {
		console.log("Attrs", this.attributes);
		if(Object.keys(this.attributes).length === 0){
			this.emit("BeginGame");
			return;
		}
		MovieManager.continue(this.attributes['movieData']);
		var theirGuess = this.event.request.intent.slots.film.value;
		if(theirGuess != parseInt(theirGuess)){
			console.log("They guessed a non number");
			this.response.speak("I didn't understand your guess ("+theirGuess+"), please guess a James Bond Movie");
			this.emit(":responseReady");
		}
		theirGuess = parseInt(theirGuess);
		var guessRes = MovieManager.guess(theirGuess);
		if (guessRes[0]) {
			//guess was good
			console.log("They got it right", guessRes);
			this.response.speak(guessRes[1]);
		}
		else {
			//guess was bad
			var hint = MovieManager.hint();
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
		this.response.speak("It's okay, your movie was " + MovieManager.MovieTitle);
		MovieManager.NewGame();
		delete this.attributes['movieData'];
		this.emit(':responseReady');
	},
	'GetHint': function () {
		var hint = MovieManager.hint();
		if (hint) {
			this.response.speak("Here's another hint: " + hint).listen("Guess the Bond Movie or say 'I Give Up'");
		}
		else {
			this.response.speak("I'm all out of hints, guess the movie or say 'I give up'").listen("Guess the Bond Movie or say 'I Give Up'");
		}
		this.emit(':responseReady');
	},
	'SessionEndedRequest': function () {
		console.log('Session ended with reason: ' + this.event.request.reason);
	},
	'AMAZON.StopIntent': function () {
		this.response.speak('Bye');
		this.emit(':responseReady');
	},
	'AMAZON.HelpIntent': function () {
		this.response.speak("You can try: 'alexa, start James Bond Movie Quiz'");
		this.emit(':responseReady');
	},
	'AMAZON.CancelIntent': function () {
		this.response.speak('Bye');
		this.emit(':responseReady');
	},
	'Unhandled': function () {
		this.response.speak("Sorry, I didn't get that. You can try: 'alexa, start James Bond Movie Quiz'");
	}
};