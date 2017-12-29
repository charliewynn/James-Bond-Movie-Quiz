'use strict';
var Alexa = require("alexa-sdk");
var MovieManager = require("./MovieManager");

exports.handler = function (event, context) {
	var alexa = Alexa.handler(event, context);
	alexa.registerHandlers(handlers);
	alexa.execute();
};

var handlers = {
	'LaunchRequest': function () {
		this.emit("BeginGame");
	},
	'NewGameIntent': function () {
		this.emit("BeginGame");
	},
	'GuessIntent': function () {
		this.emit("DoGuess");
	},
	'HintIntent':function(){
		this.emit("GetHint");
	},
	'GiveUpIntent': function(){
		this.emit("GiveUp");
	},
	'BeginGame': function () {
		var hint = MovieManager.hint();
		var data = MovieManager.export();

		this.attributes = data;
		this.response.speak("Alright, I've thought of a Bond Movie.. Your first hint is: " +
			hint).listen("Guess a Bond Movie, or say 'Give me another hint'");
		this.emit(":responseReady");
	},
	'DoGuess': function () {
		if(Object.keys(this.attributes).length === 0){
			this.emit("BeginGame");
			return;
		}
		MovieManager.continue(this.attributes);
		var theirGuess = this.event.request.intent.slots.film.value
		var guessRes = MovieManager.guess(theirGuess);
		if (guessRes[0]) {
			//guess was good
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