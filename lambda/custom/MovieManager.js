//
//save the last hint, if they get in wrong, and the one they guessed has that hint:
//tell them what the one they guessed hint was:

//your hint is: it came out in 1962
//> goldfinger?
//no, goldfinger came out in 1965
//maybe only for year and actor?

//only let one of each movie per launch, then keep "score"
//100 points for 1 hint
//50 for two
//25 for three
//...
//max score would be 100*Movies.length 
console.log("Loading New Game");
const Movies = require("./MovieData");
let MovieID = arrRandom(Movies.Movies).id;
let Guesses = []; //ids of guessed movies
let HintsUsed = [];
let MoviesDone = [];
let score = 0;


exports.CurrentScore = function(){
	const perfect = Movies.Movies.length * 100;
	const gamePerfect = MoviesDone.length * 100 || 100;
	const roundsOrRound = MoviesDone.length == 1 ? " round" : " rounds";
	console.log('perfect',perfect, gamePerfect, score);
	score = Math.round(score);
	if(score == gamePerfect){
		return "You played for " + MoviesDone.length + roundsOrRound + " and so far have a perfect score of " + score + ". Play to the end and try to get " + perfect;
	}
	return "You played for " + MoviesDone.length + roundsOrRound + " and so far have a score of " + score + " out of " + gamePerfect + ". Keep playing to go higher, a full perfect game will score " + perfect;
}

exports.Score = function(){
	const perfect = Movies.Movies.length * 100;
	const gamePerfect = MoviesDone.length * 100 || 100;
	const roundsOrRound = MoviesDone.length == 1 ? " round" : " rounds";
	console.log('perfect',perfect, gamePerfect, score);
	score = Math.round(score);
	if(score == perfect)
		return "You scored " + score + ", a perfect score!";
	if(score == gamePerfect){
		return "You played for " + MoviesDone.length + roundsOrRound + " and got a perfect score. But you only scored " + score + " out of " + perfect + ", which is  a full perfect score";
	}
	if(MoviesDone.length == Movies.Movies.length){
		return "You scored " + score + " out of " + (MoviesDone.length * 100) + " for playing all " + MoviesDone.length + roundsOrRound;
	}
	else {
		return "You scored " + score + " out of " + (MoviesDone.length * 100) + " for playing " + MoviesDone.length + roundsOrRound + ". A perfect score would be " + perfect + " if you played all rounds.";
	}
}
exports.guess = function(id){
	if(Guesses.indexOf(id) > -1)
		return [false, "You already Guessed that!"];
	Guesses.push(id);
	if(MovieID === id) {
		//if they get it right, return a random fact about the movie
		const scoreAdd = 100/(HintsUsed.length || 1);
		console.log("Adding to score, oldscore", scoreAdd, score);
		score += scoreAdd;
		return [
			true,
			arrRandom([
				"Perfect! ",
				"You got it! ",
				"Great Work! ",
				"Nice Job. "
			]) + " " + arrRandom(Movies.ById(MovieID).factsForWinners)
		];
	}
	const badGuessName = Movies.ById(id).title;
	return [
		false,
		arrRandom([
			"Sorry, try again. ",
			"hmm, that's not right. ",
			"Nope, it's not " + badGuessName + ". "
		])
	];
}

exports.wipe = function(){
	console.log("Wiping Game");
	MoviesDone = [];
	score = 0;
}
exports.NewGame = function(lastid){

	if(lastid)
		MoviesDone.push(lastid);

	const allowedMovieIds = Movies.Movies.map(m=>m.id).filter(m=>MoviesDone.indexOf(m) === -1);

	console.log("AllowedMovieIds", allowedMovieIds);
	if(allowedMovieIds.length == 0){
		return false;
	}
	//MovieID = arrRandom(Movies.Movies).id;
	MovieID = arrRandom(allowedMovieIds);
	/*
	while(lastid == MovieID){
		MovieID = arrRandom(Movies.Movies).id;
	}
	*/

	Guesses = []; //ids of guessed movies
	HintsUsed = [];
	return true;
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
				"Bond's main adversary in the film was " + Movie.villian + " played by " + Movie.villianActor,
				"Bond faced off with " + Movie.villian + " portrayed by " + Movie.villianActor
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
				"Some of the places featured in the film are " + Movie.locales,
				"You might remember Bond visiting " + Movie.locales + " in the movie"
			]);
		case Movies.hintTypes.year:
			return arrRandom([
				"This Bond film came out in " + Movie.year,
				"The movie I'm thinking of was released in " + Movie.year
			]);
		case Movies.hintTypes.actor:
			return arrRandom([
				`This was ${Movie.bondActor}'s ${Movie.actorsNth} Bond Film`,
				`${Movie.bondActor} played Bond in this film, it was his ${Movie.actorsNth} Bond film`
			]);
	}

}

exports.continue = function(data){
	MovieID = data.MovieID;
	Guesses = data.Guesses;
	HintsUsed = data.HintsUsed;
	MoviesDone = data.MoviesDone;
}

exports.export = function(){
	return {
		MovieID : MovieID,
		Guesses : Guesses,
		HintsUsed : HintsUsed,
		MoviesDone : MoviesDone
	}
}

function arrRandom(arr){
	return arr[Math.floor(Math.random()*arr.length)];
}