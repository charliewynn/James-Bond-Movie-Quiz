const Connery = "Sean Connery";
const Lazenby = "George Lazenby";
const Moore = "Roger Moore";
const Dalton = "Timothy Dalton";
const Brosnan = "Pierce Brosnan";
const Craig = "Daniel Craig";

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

let id = 1;
const DrNo = {
	id : id++,
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
	id : id++,
	title : "From Russia With Love",
	locales : "Belgrade, Istanbul, and Venice",
	bondActor : Connery,
	actorsNth : 'second',
	girlActress : "Daniela Bianchi",
	bondGirl : "Tatiana Romanova",
	sidekick : "Kerim Bey, who only employees his own sons",
	gadgets : "Bond's signature Atache case with tear gas canisters and hidden gold sovereigns",
	year : 1963,
	henchmen : "Rosa Klebb with her knife-wielding shoe",
	allowedHints : [locales, year, actor, girl, gadgets, henchmen, sidekick],
	factsForWinners : [
		"From Russia with Love was Desmond Llewelyn's debut as Q, who he played for 36 years",
		"John F. Kennedy named the novel From Russia with Love as one of his top ten favorite books of all time",
		"From Russia with love is the first Bond film to introduce spy gadgets"
	]
};
const Goldfinger = {
	id : id++,
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
		"Stunt pilots were given permission to fly near Fort Knox if they stayed above 3000 feet, but were instructed by Guy Hamilton to fly closer to 500 feet which made the military go quote, absolutely ape"
	]
};
const Thunderball = {
	id : id++,
	title : "Thunderball",
	bondActor : Connery,
	actorsNth : "fourth",
	year : 1965,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const YouOnlyLiveTwice = {
	id : id++,
	title : "You Only Live Twice",
	bondActor : Connery,
	actorsNth : "fifth",
	year : 1967,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const OnHerMajestysSecretService = {
	id : id++,
	title : "On Her Majesty's Secret Service",
	bondActor : Lazenby,
	actorsNth : "only",
	year : 1969,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const DiamondsAreForever = {
	id : id++,
	title : "Diamonds Are Forever",
	bondActor : Connery,
	actorsNth : "last",
	year : 1971,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const LiveAndLetDie = {
	id : id++,
	title : "Live and Let Die",
	bondActor : Moore,
	actorsNth : "fourth",
	year : 1973,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const TheManWithTheGoldenGun = {
	id : id++,
	title : "The Man with the Golden Gun",
	bondActor : Moore,
	actorsNth : "second",
	year : 1974,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const TheSpyWhoLovedMe = {
	id : id++,
	title : "The Spy who Loved Me",
	bondActor : Moore,
	actorsNth : "third",
	year : 1977,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const Moonraker = {
	id : id++,
	title : "Moonraker",
	bondActor : Moore,
	actorsNth : "fourth",
	year : 1979,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const ForYourEyesOnly = {
	id : id++,
	title : "For your Eyes Only",
	bondActor : Moore,
	actorsNth : "fifth",
	year : 1981,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const Octopussy = {
	id : id++,
	title : "Octopussy",
	bondActor : Moore,
	actorsNth : "sixth",
	year : 1983,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const AViewToAKill = {
	id : id++,
	title : "A View to a Kill",
	bondActor : Moore,
	actorsNth : "last",
	year : 1985,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const TheLivingDaylights = {
	id : id++,
	title : "The Living Daylights",
	bondActor : Dalton,
	actorsNth : "first",
	year : 1987,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const LicenceToKill = {
	id : id++,
	title : "Licence To Kill",
	bondActor : Dalton,
	actorsNth : "second and last",
	year : 1989,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const GoldenEye = {
	id : id++,
	title : "GoldenEye",
	bondActor : Brosnan,
	actorsNth : "first",
	year : 1995,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const TomorrowNeverDies = {
	id : id++,
	title : "Tomorrow Never Dies",
	bondActor : Brosnan,
	actorsNth : "second",
	year : 1997,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const TheWorldIsNotEnough = {
	id : id++,
	title : "The World is not Enough",
	bondActor : Brosnan,
	actorsNth : "third",
	year : 1999,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const DieAnotherDay = {
	id : id++,
	title : "Die Another Day",
	bondActor : Brosnan,
	actorsNth : "last",
	year : 2002,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const CasinoRoyale = {
	id : id++,
	title : "Casino Royale",
	bondActor : Craig,
	actorsNth : "first",
	year : 2006,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const QuantumOfSolace = {
	id : id++,
	title : "Quantum of Solace",
	bondActor : Craig,
	actorsNth : "second",
	year : 2008,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const Skyfall = {
	id : id++,
	title : "Skyfall",
	bondActor : Craig,
	actorsNth : "third",
	year : 2012,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};
const Spectre = {
	id : id++,
	title : "Spectre",
	bondActor : Craig,
	actorsNth : "last",
	year : 2015,
	allowedHints : [year],
	factsForWinners : [
		"Charliehasntfinishedthis",
		"IllFillTthisInLater"
	]
};

const Movies =
[
	DrNo,
	FromRussiaWithLove,
	Goldfinger,
	Thunderball,
	YouOnlyLiveTwice,
	OnHerMajestysSecretService,
	DiamondsAreForever,
	LiveAndLetDie,
	TheManWithTheGoldenGun,
	TheSpyWhoLovedMe,
	Moonraker,
	ForYourEyesOnly,
	Octopussy,
	AViewToAKill,
	TheLivingDaylights,
	LicenceToKill,
	GoldenEye,
	TomorrowNeverDies,
	TheWorldIsNotEnough,
	DieAnotherDay,
	CasinoRoyale,
	QuantumOfSolace,
	Skyfall,
	Spectre
]

exports.Movies = Movies;
exports.ById = function(id){
	const res = Movies.filter(m=>m.id === id);
	if(res.length == 1) return res[0];
	if(res.length == 0) throw "No Movie with that ID found";
	throw "Multiple Movies with same ID found";
}