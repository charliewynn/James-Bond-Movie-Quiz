const Movies = require("./MovieData");
let MovieID = arrRandom(Movies.Movies).id;
let Guesses = []; //ids of guessed movies
let HintsUsed = [];

exports.guess = function(id){
	if(id === -1) return [false, "That's not technically a James Bond Movie, so I'll never have you try to guess it, try again.."];
	if(Guesses.indexOf(id) > -1)
		return [false, "You already Guessed that!"];
	Guesses.push(id);
	if(MovieID === id)
		return [
			true,
			arrRandom([
				"Great Work!",
				"Nice Job"
			])
		];
	const badGuessName = Movies.ById(id).title;
	return [
		false,
		arrRandom([
			"Sorry, try again",
			"Whoops, that's not right",
			"Nope, it's not " + badGuessName
		])
	];
}

exports.hint = function(){
	const Movie = Movies.ById(MovieID);
	const ProposedHints = ["locale", "year", "actor", "girl", "gadgets"];
	let possibleHints = ProposedHints.filter(h=>
		HintsUsed.indexOf(h) == -1 &&
		Movie.allowedHints.indexOf(h) > -1);

	if(possibleHints == 0){
		//user failed to guess movie in time
		return false;
	}
	const hint = arrRandom(possibleHints);
	HintsUsed.push(hint);
	switch(hint){
		case "gadgets":
			return arrRandom([
				'Some memorable gadgets were ' + Movie.gadgets
			]);
		case "girl":
			return arrRandom([
				`${Movie.girlActress} portrayed ${Movie.bondGirl}`,
				`${Movie.bondGirl} was played by ${Movie.girlActress}`
			]);
		case "locale":
			return arrRandom([
				Movie.locales + " were featured in this film",
				"Some of the places featured in the film are " + Movie.locales
			]);
		case "year":
			return arrRandom([
				"This Bond film came out in " + Movie.year,
				"The movie I'm thinking of was released in " + Movie.year
			]);
		case "actor":
			return arrRandom([
				`This was ${Movie.bondActor}'s ${Movie.actorsNth} Bond Film`,
				`${Movie.bondActor} played Bond in this film`
			]);
	}

}

exports.continue = function(data){
	MovieID = data.MovieID;
	Guesses = data.Guesses;
	HintsUsed = data.HintsUsed;
}

exports.export = function(){
	return {
		MovieID : MovieID,
		Guesses : Guesses,
		HintsUsed : HintsUsed
	}
}

function arrRandom(arr){
	return arr[Math.floor(Math.random()*arr.length)];
}