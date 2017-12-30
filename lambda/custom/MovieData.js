const Connery = "Sean Connery";

const locales = "locales";
const year = "year";
const actor = "actor";
const girl = "girl";
const sidekick = "sidekick";
const villian = "villian";
const henchmen = "henchmen";
const gadgets = "gadgets";
const car = "car";

exports.hintTypes = {
	locales,
	car,
	year,
	actor,
	girl,
	sidekick,
	villian,
	henchmen,
	gadgets
}

const DrNo = {
	id : 1,
	title : "Dr. No",
	locales : "London and Jamaica",
	bondActor : Connery,
	actorsNth : 'first',
	girlActress : "Ursula Andress",
	bondGirl : "Honey Rider",
	sidekick : "Felix Leiter and Quarrel",
	year : 1962,
	allowedHints : [locales, year, actor, girl, sidekick],
	factsForWinners : [
		"In the original script writers planned to have Dr. No be played by a monkey.",
		"In the novel Bond fights a giant squid, but it was omitted in the movie"
	]
};
const FromRussiaWithLove = {
	id : 2,
	title : "From Russia With Love",
	locales : "Belgrade Istanbul and Venice",
	bondActor : Connery,
	actorsNth : 'second',
	girlActress : "Daniela Bianchi",
	bondGirl : "Tatiana Romanova",
	sidekick : "Kerim Bey, who only employees his own sons",
	gadgets : "Bond's signature Atache case with tear gas canisters and hidden gold sovereigns",
	year : 1963,
	henchmen : "Rosa Klebb with her knife-weilding shoe",
	allowedHints : [locales, year, actor, girl, gadgets, henchmen, sidekick],
	factsForWinners : [
		"From Russia with Love was Desmond Llewelyn's debut as Q, who he played for 36 years",
		"John F. Kennedy named the novel From Russia with Love as one of his top ten favorite books of all time",
		"From Russia with love is the first Bond film to introduce spy gadgets"
	]
};
const Goldfinger = {
	id : 3,
	title : "GoldFinger",
	locales : "Buckinghamshire, Miami Flordia, Fort Knok Kentucky, and Baltimore Maryland",
	bondActor : Connery,
	actorsNth : "third",
	girlActress : "Honor Blackman",
	bondGirl : "Pussy Galore",
	gadgets : "A car homing beacon with matching 'smaller brother' fitted into the heel of Bond's shoe",
	year : 1965,
	car : "Aston Martin DB5",
	henchmen : "OddJob with his lethal bowler hat",
	allowedHints : [locales, year, actor, girl, gadgets, henchmen, car],
	factsForWinners : [
		"Goldfinger actor spoke so little english that most of his lines had to be re-dubbed by someone else",
		"Stunt pilots were given permission to fly near Fort Knox if they stayed above 3000, but were instructed by Guy Hamilton to fly closer to 500 feet which made the military go quote absolutely ape"
	]
}


const Movies =
[
	DrNo,
	FromRussiaWithLove,
	Goldfinger
]

exports.Movies = Movies;
exports.ById = function(id){
	const res = Movies.filter(m=>m.id === id);
	if(res.length == 1) return res[0];
	if(res.length == 0) throw "No Movie with that ID found";
	throw "Multiple Movies with same ID found";
}