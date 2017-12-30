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
	locales : "Buckinghamshire, Miami Florida, Fort Knok Kentucky, and Baltimore Maryland",
	bondActor : Connery,
	actorsNth : "third",
	girlActress : "Honor Blackman",
	bondGirl : "Pussy Galore",
	gadgets : "A car homing beacon with matching 'smaller brother' fitted into the heel of Bond's shoe",
	year : 1965,
	henchmen : "OddJob with his lethal bowler hat",
	allowedHints : [locales, year, actor, girl, gadgets, henchmen],
	factsForWinners : [
		"Goldfinger actor spoke so little english that most of his lines had to be re-dubbed by someone else",
		"Stunt pilots were given permission to fly near Fort Knox if they stayed above 3000 feet, but were instructed by Guy Hamilton to fly closer to 500 feet which made the military go quote, absolutely ape",
		"The pilots in Pussy Galore's Flying Circus were actually men wearing wigs"
	]
};
const Thunderball = {
	id : id++,
	title : "Thunderball",
	bondActor : Connery,
	locales : "Château d'Anet France, Paradise Island Bahamas and Florida Coast off Miami",
	actorsNth : "fourth",
	year : 1965,
	gadgets : "Homing pill and the Bell Rocket Belt jet pack",
	bondGirl : "Domino Derval",
	girlActress : "Claudine Auger",
	allowedHints : [year, actor, girl, locales, gadgets],
	factsForWinners : [
		"Stuntman Bill Cumming was paid a $450 bonus to jump into a shark infested pool during the filming of Thunderball",
		"Adjusted for inflation, Thunderball is the highest grossing Bond film"
	]
};
const YouOnlyLiveTwice = {
	id : id++,
	title : "You Only Live Twice",
	bondActor : Connery,
	actorsNth : "fifth",
	gadgets : "Mini-rocket Cigarette and an automatic safe cracker",
	locales : "Hong Kong, Tokyo Japan, Northern Norway",
	year : 1967,
	bondGirl : "Aki",
	girlActress : "Akiko Wakabayashi",
	allowedHints : [year, actor, girl, locales, gadgets],
	factsForWinners : [
		"You Only Live Twice was written by Roald Dahl, author of Charlie and the Chocolate Factory",
		"You only live twice is the only James bond movie where he doesn't drive a car"
	]
};
const OnHerMajestysSecretService = {
	id : id++,
	title : "On Her Majesty's Secret Service",
	bondActor : Lazenby,
	actorsNth : "only",
	locales : "Estoril Portugal, College of Arms London, and Piz Gloria Switzerland",
	year : 1969,
	bondGirl : "Teresa di Vicenzo",
	girlActress : "Diana Rigg",
	allowedHints : [year, actor, girl, locales],
	factsForWinners : [
		"On Her Majesty's Secret Service was the longest bond film until Casino Royale",
		"An arrangement of the escape from Piz Gloria sequence was featured as a theme in the 2004 Pixar movie The Incredibles"
	]
};
const DiamondsAreForever = {
	id : id++,
	title : "Diamonds Are Forever",
	bondActor : Connery,
	actorsNth : "last",
	locales : "Amsterdam, Las Vegas, Los Angeles, and Baja California",
	year : 1971,
	bondGirl : "Tiffany Case",
	girlActress : "Jill Saint John",
	allowedHints : [year, actor, girl, locales],
	factsForWinners : [
		"Diamonds are Forever originally had a cameo appearance by Sammy Davis Junior, but the scene was later cut",
		"Filming was delayed for one scene in Las Vegas while Sean Connery went to collect slot machine winnings"
	]
};
const LiveAndLetDie = {
	id : id++,
	title : "Live and Let Die",
	bondActor : Moore,
	actorsNth : "fourth",
	year : 1973,
	locales : "New York City, San Monique, and New Orleans",
	bondGirl : "Solitaire",
	girlActress : "Jane Seymour",
	allowedHints : [year, actor, girl, locales],
	factsForWinners : [
		"The speedboat jump scene unintentionally set the world record clearing 110 feet"
	]
};
const TheManWithTheGoldenGun = {
	id : id++,
	title : "The Man with the Golden Gun",
	bondActor : Moore,
	actorsNth : "second",
	locales : "Beirut, Hong Kong, Bangkok, and Ko Tapu Thailand",
	year : 1974,
	bondGirl : "Mary Goodnight",
	girlActress : "Britt Ekland",
	allowedHints : [year, actor, girl, locales],
	factsForWinners : [
		"The corkscrew car jump in The Man with the Golden Gun was performed in one take",
		"The man with the golden gun is the only bond film besides the first two which doesn't involve a helicopter at some point"
	]
};

//the locales are boring so I'm leaving them out
const TheSpyWhoLovedMe = {
	id : id++,
	title : "The Spy who Loved Me",
	bondActor : Moore,
	actorsNth : "third",
	year : 1977,
	car : "Lotus Espirit S1",
	bondGirl : "Anya Amasova code name 'Triple X'",
	girlActress : "Barbara Bach",
	allowedHints : [year, actor, girl, car],
	factsForWinners : [
		"The actor for Jaws could only wear his metal teeth for about 30 seconds at a time"
	]
};
const Moonraker = {
	id : id++,
	title : "Moonraker",
	bondActor : Moore,
	actorsNth : "fourth",
	locales : "California, Venice Italy, Rio de Janeiro, and Outer Space",
	year : 1979,
	bondGirl : "Holly Goodhead",
	girlActress : "Lois Chiles",
	allowedHints : [year, actor, girl, locales],
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
	locales : "Madrid, St. Cyril's Greece, and Cortina d'Ampezzo Italy",
	year : 1981,
	bondGirl : "Melina Havelock",
	girlActress : "Carole Bouquet",
	allowedHints : [year, actor, girl, locales],
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
	locales : "Sotheby's London, Moscow, West and East Berlin, and Karl-Marx-Stadt Germany",
	year : 1983,
	allowedHints : [year, actor, locales],
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
	locales : "Serbia, Paris, and San Francisco",
	bondGirl : "Stacey Sutton",
	girlActress : "Tanya Roberts",
	allowedHints : [year, actor, girl, locales],
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
	locales : "Gibralter, Bratislava Czechoslovakia, Tangier, Vienna, and Pakistan",
	year : 1987,
	bondGirl : "Kara Milovy",
	girlActress : "Maryam d'Abo",
	allowedHints : [year, actor, girl, locales],
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
	locales : "Key West Florida, Bimini Islands, and Isthmus City",
	year : 1989,
	bondGirl : "Pam Bouvier",
	girlActress : "Carey Lowell",
	allowedHints : [year, actor, girl, locales],
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
	locales : "Soviet Union, Saint Petersburg, Monte Carlo, and Cuba",
	bondGirl : "Natalya Simonova",
	girlActress: "Izabella Scorupco",
	allowedHints : [year, actor, girl, locales],
	factsForWinners : [
		"Pierce Brosnan was the deadliest Bond, killing 47 people in GoldenEye",
		"GoldenEye was what James Bond Author Ian Flemming called his Jamaican estate"
	]
};
const TomorrowNeverDies = {
	id : id++,
	title : "Tomorrow Never Dies",
	bondActor : Brosnan,
	actorsNth : "second",
	locales : "Russia, Hamburg Germany, South China Sea, and Ho Chi Minh City Vietnam",
	year : 1997,
	bondGirl : "Wai Lin",
	girlActress : "Michelle Yeoh",
	allowedHints : [year, actor, girl, locales],
	factsForWinners : [
		"Over 15 BMWs were destroyed in the filming of Tomorrow Never Dies"
	]
};
const TheWorldIsNotEnough = {
	id : id++,
	title : "The World is not Enough",
	bondActor : Brosnan,
	actorsNth : "third",
	locales : "Bilbao Spain, Baku Azerbaijan, Istanbul Turkey",
	year : 1999,
	bondGirl : "Dr. Christmas Jones",
	girlActress : "Denise Richards",
	allowedHints : [year, actor, girl, locales],
	factsForWinners : [
		"The World is not enough is the Bond family motto"
	]
};
const DieAnotherDay = {
	id : id++,
	title : "Die Another Day",
	bondActor : Brosnan,
	actorsNth : "last",
	car : "Aston Martin V12 Vanquish",
	locales : "DMZ Korean Peninsula, Hong Kong, Havana Cuba, and Iceland",
	year : 2002,
	bondGirl : "Jinx",
	girlActress : "Halle Berry",
	allowedHints : [year, actor, girl, locales],
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
	locales : "Mbale Uganda, Nassau Bahamas, Miami Florida, and Venice Italy",
	year : 2006,
	bondGirl : "Vesper Lynd",
	girlActress : "Eva Green",
	allowedHints : [year, actor, girl, locales],
	factsForWinners : [
		"The car barrel roll stunt near the end of Casino Royale broke the world record for most barrel rolls assisted by a cannon, seven complete rolls",
		"IllFillTthisInLater"
	]
};
const QuantumOfSolace = {
	id : id++,
	title : "Quantum of Solace",
	bondActor : Craig,
	actorsNth : "second",
	locales : "London England, Port-au-Prince Haiti, La Paz Bolivia and Kazan Russia",
	year : 2008,
	bondGirl : "Camille Montes",
	girlActress : "Olga Kurylenko",
	allowedHints : [year, actor, girl, locales],
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
	locales : "Istanbul, London, Shanghai, and Macau",
	year : 2012,
	bondGirl : "Sévérine",
	girlActress : "Bérénice Marlohe",
	allowedHints : [year, actor, girl, locales],
	factsForWinners : [
		"Skyfall's cast went through two hundred rounds of ammunition while undergoing training"
	]
};
const Spectre = {
	id : id++,
	title : "Spectre",
	bondActor : Craig,
	actorsNth : "last",
	locales : "Mexico City, London, Saint Peters Square, Rome, Austria, and Tangier Morocco",
	year : 2015,
	bondGirl : "Dr. Madeleine Swann",
	girlActress : "Léa Seydoux",
	allowedHints : [year, actor, girl, locales],
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