const Movies = require("./MovieData");
let MovieID = arrRandom(Movies.Movies).id;
let Guesses = []; //ids of guessed movies
let HintsUsed = [];

exports.guess = function(id){
	if(id === -1) return [false, "That's not technically a James Bond Movie, so I'll never have you try to guess it, try again.."];
	if(Guesses.indexOf(id) > -1)
		return [false, "You already Guessed that!"];
	Guesses.push(id);
	if(MovieID === id) {
		//if they get it right, return a random fact about the movie
		return [
			true,
			arrRandom([
				"Great Work!",
				"Nice Job"
			]) + " " + arrRandom(Movies.ById(MovieID).factsForWinners)
		];
	}
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

exports.NewGame = function(lastid){

	MovieID = arrRandom(Movies.Movies).id;
	while(lastid == MovieID){
		MovieID = arrRandom(Movies.Movies).id;
	}

	Guesses = []; //ids of guessed movies
	HintsUsed = [];
}

exports.MovieTitle = function(){
	return Movies.ById(MovieID).title;
}

exports.hint = function(){
	const Movie = Movies.ById(MovieID);
	let possibleHints = Movie.allowedHints.filter(h=>HintsUsed.indexOf(h) == -1);

	if(possibleHints == 0){
		//user failed to guess movie in time
		return false;
	}
	const hint = arrRandom(possibleHints);
	HintsUsed.push(hint);
	switch(hint){
		case Movies.hintTypes.car:
			return arrRandom([
				"Also appearing was Bond's famous " + Movie.car,
				"You may remember Bond driving his " + Movie.car
			]);
		case Movies.hintTypes.villian:
			return arrRandom([
				"Bond's main adversary in the film was " + Movie.villian,
				"Bond faced off with " + Movie.villian
			]);
		case Movies.hintTypes.henchmen:
			return arrRandom([
				"A memorable henchman from the movie was " + Movie.henchmen,
				"You may remember Bond outwitting " + Movie.henchmen,
				Movie.henchmen + " put up a fight in this movie, but as always, Bond prevailed"
			]);
		case Movies.hintTypes.sidekick:
			return arrRandom([
				'In the film James had some help from ' + Movie.sidekick,
				Movie.sidekick + " played a crucial role in the movie"
			]);
		case Movies.hintTypes.gadgets:
			return arrRandom([
				'Some memorable gadgets were ' + Movie.gadgets
			]);
		case Movies.hintTypes.girl:
			return arrRandom([
				`${Movie.girlActress} portrayed ${Movie.bondGirl}`,
				`${Movie.bondGirl} was played by ${Movie.girlActress}`
			]);
		case Movies.hintTypes.locales:
			return arrRandom([
				Movie.locales + " were featured in this film",
				"Some of the places featured in the film are " + Movie.locales
			]);
		case Movies.hintTypes.year:
			return arrRandom([
				"This Bond film came out in " + Movie.year,
				"The movie I'm thinking of was released in " + Movie.year
			]);
		case Movies.hintTypes.actor:
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