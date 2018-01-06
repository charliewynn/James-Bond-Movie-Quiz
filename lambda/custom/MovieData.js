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
	locales : "Belgrade, Istanbul, and Venice",
	bondActor : Connery,
	actorsNth : 'second',
	girlActress : "Daniela Bianchi",
	bondGirl : "Tatiana Romanova",
	sidekick : "Kerim Bey, who only employs his own sons",
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
	id : 3,
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
	id : 4,
	title : "Thunderball",
	bondActor : Connery,
	locales : "Château d'Anet France, Paradise Island Bahamas and Florida Coast off Miami",
	actorsNth : "fourth",
	year : 1965,
	villian : "Emilio Largo",
	villianActor : "Aldolfo Celi",
	gadgets : "Homing pill and the Bell Rocket Belt jet pack",
	bondGirl : "Domino Derval",
	girlActress : "Claudine Auger",
	allowedHints : [year, actor, girl, locales, gadgets, villian],
	factsForWinners : [
		"Stuntman Bill Cumming was paid a $450 bonus to jump into a shark infested pool during the filming of Thunderball",
		"Adjusted for inflation, Thunderball is the highest grossing Bond film"
	]
};
const YouOnlyLiveTwice = {
	id : 5,
	title : "You Only Live Twice",
	bondActor : Connery,
	actorsNth : "fifth",
	gadgets : "Mini-rocket Cigarette and an automatic safe cracker",
	locales : "Hong Kong, Tokyo Japan, Northern Norway",
	year : 1967,
	sidekick : "Tiger Tanaka",
	bondGirl : "Aki",
	girlActress : "Akiko Wakabayashi",
	allowedHints : [year, actor, girl, locales, gadgets, sidekick],
	factsForWinners : [
		"You Only Live Twice was written by Roald Dahl, author of Charlie and the Chocolate Factory",
		"You only live twice is the only James bond movie where he doesn't drive a car"
	]
};
const OnHerMajestysSecretService = {
	id : 6,
	title : "On Her Majesty's Secret Service",
	bondActor : Lazenby,
	henchmen : "Fräulein Irma Bunt",
	actorsNth : "only",
	locales : "Estoril Portugal, College of Arms London, and Piz Gloria Switzerland",
	year : 1969,
	bondGirl : "Teresa di Vicenzo",
	girlActress : "Diana Rigg",
	allowedHints : [year, actor, girl, locales, henchmen],
	factsForWinners : [
		"On Her Majesty's Secret Service was the longest bond film until Casino Royale",
		"An arrangement of the escape from Piz Gloria sequence was featured as a theme in the 2004 Pixar movie The Incredibles"
	]
};
const DiamondsAreForever = {
	id : 7,
	title : "Diamonds Are Forever",
	bondActor : Connery,
	actorsNth : "last",
	henchmen : "Mr. Wint and Mr. Kidd",
	locales : "Amsterdam, Las Vegas, Los Angeles, and Baja California",
	year : 1971,
	bondGirl : "Tiffany Case",
	girlActress : "Jill Saint John",
	allowedHints : [year, actor, girl, locales, henchmen],
	factsForWinners : [
		"Diamonds are Forever originally had a cameo appearance by Sammy Davis Junior, but the scene was later cut",
		"Filming was delayed for one scene in Las Vegas while Sean Connery went to collect slot machine winnings"
	]
};
const LiveAndLetDie = {
	id : 8,
	title : "Live and Let Die",
	bondActor : Moore,
	actorsNth : "first",
	year : 1973,
	henchmen : "Tee Hee Johnson",
	villian : "Dr. Kananga a.k.a. Mr. Big",
	villianActor : "Yaphet Kotto",
	locales : "New York City, San Monique, and New Orleans",
	bondGirl : "Solitaire",
	girlActress : "Jane Seymour",
	allowedHints : [year, actor, girl, locales, villian, henchmen],
	factsForWinners : [
		"The speedboat jump scene unintentionally set the world record clearing 110 feet"
	]
};
const TheManWithTheGoldenGun = {
	id : 9,
	title : "The Man with the Golden Gun",
	bondActor : Moore,
	actorsNth : "second",
	henchmen : "Nick Nack",
	locales : "Beirut, Hong Kong, Bangkok, and Ko Tapu Thailand",
	villian : "Franscisco Scaramanga",
	villianActor : "Christopher Lee",
	year : 1974,
	bondGirl : "Mary Goodnight",
	girlActress : "Britt Ekland",
	allowedHints : [year, actor, girl, locales, villian, henchmen],
	factsForWinners : [
		"The corkscrew car jump in The Man with the Golden Gun was performed in one take",
		"The man with the golden gun is the only bond film besides the first two which doesn't involve a helicopter at some point"
	]
};

//the locales are boring so I'm leaving them out
const TheSpyWhoLovedMe = {
	id : 10,
	title : "The Spy who Loved Me",
	bondActor : Moore,
	actorsNth : "third",
	year : 1977,
	henchmen : "Jaws, in his first appearance,",
	villian : "Karl Stromberg",
	villianActor : "Curt Jürgens",
	car : "Lotus Espirit S1",
	bondGirl : "Anya Amasova, code name 'Triple X'",
	girlActress : "Barbara Bach",
	allowedHints : [year, actor, girl, car, villian, henchmen],
	factsForWinners : [
		"The actor for Jaws could only wear his metal teeth for about 30 seconds at a time"
	]
};

const Moonraker = {
	id : 11,
	title : "Moonraker",
	bondActor : Moore,
	actorsNth : "fourth",
	locales : "California, Venice Italy, Rio de Janeiro, and Outer Space",
	year : 1979,
	henchmen : "Jaws, in his second appearance,",
	villian : "Hugo Drax",
	villianActor : "Michael Lonsdale",
	bondGirl : "Holly Goodhead",
	girlActress : "Lois Chiles",
	allowedHints : [year, actor, girl, locales, villian, henchmen],
	factsForWinners : [
		"Ian Fleming originally intended Moonraker to become a movie even before he began writing the book",
		"After receiving fan mail asking for Jaws to be a good guy, director Lewis Gilbert changed the ending so Jaws saves the day",
		"The laser battle on the space station holds the world record for most number of zero gravity wires in one scene",
		"Bond is never seen holding a pistol during Moonraker"
	]
};
const ForYourEyesOnly = {
	id : 12,
	title : "For your Eyes Only",
	bondActor : Moore,
	actorsNth : "fifth",
	locales : "Madrid, St. Cyril's Greece, and Cortina d'Ampezzo Italy",
	villian : "Aristotle Kristatos",
	villianActor : "Julian Glover",
	year : 1981,
	bondGirl : "Melina Havelock",
	girlActress : "Carole Bouquet",
	allowedHints : [year, actor, girl, locales, villian],
	factsForWinners : [
		"The monks who reside at the monastery protested to the filming, but the Greek Supreme Court ruled the outside of the monastery was local gonvernment property and available for filming",
		"Roger Moore struggled to do the climbing scenes due to his fear of heights",
		"On the final day of filming the bobsleigh chase one of the stuntmen was killed after becoming trapped under the sled"
	]
};
const Octopussy = {
	id : 13,
	title : "Octopussy",
	bondActor : Moore,
	actorsNth : "sixth",
	locales : "Sotheby's London, Moscow, east and west Berlin, and Karl-Marx-Stadt Germany",
	year : 1983,
	sidekick : "Vijay",
	villian : "Prince Kamal Khan",
	villianActor : "Louis Jourdan",
	allowedHints : [year, actor, locales, villian, sidekick],
	factsForWinners : [
		"Bonds ally Vijay was a real life prfessional tennis player",
		"The Fabergé egg in the film is real, made in 1897 and called the Coronation Egg"
	]
};
const AViewToAKill = {
	id : 14,
	title : "A View to a Kill",
	bondActor : Moore,
	actorsNth : "seventh and last",
	year : 1985,
	henchmen : "May Day",
	sidekick : "Sir Godfrey Tibbett",
	villian : "Max Zorin",
	villianActor : "Christopher Walken",
	locales : "Serbia, Paris, and San Francisco",
	bondGirl : "Stacey Sutton",
	girlActress : "Tanya Roberts",
	allowedHints : [year, actor, girl, locales, villian, sidekick, henchmen],
	factsForWinners : [
		"The airship in the film is show to take two minutes to inflate, in reality it would take up to 24 hours",
		"A view to a kill was the first bond film with a premiere outside the U.K."
	]
};
const TheLivingDaylights = {
	id : 15,
	title : "The Living Daylights",
	bondActor : Dalton,
	actorsNth : "first",
	locales : "Gibralter, Bratislava Czechoslovakia, Tangier, Vienna, and Pakistan",
	year : 1987,
	henchmen : "Necros",
	sidekick : "Kamran Shah",
	villian : "Brad Whitaker",
	villianActor : "Joe Don Baker",
	bondGirl : "Kara Milovy",
	girlActress : "Maryam d'Abo",
	allowedHints : [year, actor, girl, locales, villian, sidekick, henchmen],
	factsForWinners : [
		"The macaw in the kitchen scene is the same bird featured in For your eyes only",
		"In the book, Ian Fleming modeled the woman sniper after his half sister Amaryllis Fleming"
	]
};
const LicenceToKill = {
	id : 16,
	title : "Licence To Kill",
	bondActor : Dalton,
	actorsNth : "second and last",
	locales : "Key West Florida, Bimini Islands, and Isthmus City",
	year : 1989,
	henchmen : "Milton Krest",
	sidekick : "Sharkey",
	villian : "Franz Sanchez",
	villianActor : "Robert Davi",
	bondGirl : "Pam Bouvier",
	girlActress : "Carey Lowell",
	allowedHints : [year, actor, girl, locales, villian, sidekick, henchmen],
	factsForWinners : [
		"Licence to Kill is the first bond film which did not use the title of an Ian Fleming story",
		"No part of Licence to kill was filmed in the U.K."
	]
};
const GoldenEye = {
	id : 17,
	title : "GoldenEye",
	bondActor : Brosnan,
	actorsNth : "first",
	year : 1995,
	henchmen : "Xenia Sergeyevna Onatopp",
	villian : "Alec Trevelyan",
	villianActor : "Sean Bean",
	locales : "Soviet Union, Saint Petersburg, Monte Carlo, and Cuba",
	bondGirl : "Natalya Simonova",
	girlActress: "Izabella Scorupco",
	allowedHints : [year, actor, girl, locales, villian, henchmen],
	factsForWinners : [
		"Pierce Brosnan was the deadliest Bond, killing 47 people in GoldenEye",
		"GoldenEye was what James Bond Author Ian Flemming called his Jamaican estate"
	]
};
const TomorrowNeverDies = {
	id : 18,
	title : "Tomorrow Never Dies",
	bondActor : Brosnan,
	actorsNth : "second",
	locales : "Russia, Hamburg Germany, South China Sea, and Ho Chi Minh City Vietnam",
	year : 1997,
	villian : "Elliot Carver",
	villianActor : "Jonathan Pryce",
	bondGirl : "Wai Lin",
	girlActress : "Michelle Yeoh",
	allowedHints : [year, actor, girl, locales, villian],
	factsForWinners : [
		"Over 15 BMWs were destroyed in the filming of Tomorrow Never Dies",
		"Tomorrow Never Dies opened the say day as Titanic"
	]
};
const TheWorldIsNotEnough = {
	id : 19,
	title : "The World is not Enough",
	bondActor : Brosnan,
	actorsNth : "third",
	locales : "Bilbao Spain, Azerbaijan, Istanbul Turkey",
	year : 1999,
	villian: "Renard",
	villianActor : "Ropert Carlyle",
	bondGirl : "Dr. Christmas Jones",
	girlActress : "Denise Richards",
	allowedHints : [year, actor, girl, locales, villian],
	factsForWinners : [
		"The World is not enough is the Bond family motto",
		"The pre-title sequence in The World is not Enough is the longest for bond, at 14 minutes"
	]
};
const DieAnotherDay = {
	id : 20,
	title : "Die Another Day",
	bondActor : Brosnan,
	henchmen : "Zao",
	actorsNth : "last",
	car : "Aston Martin V12 Vanquish",
	locales : "DMZ Korean Peninsula, Hong Kong, Havana Cuba, and Iceland",
	year : 2002,
	villian : "Gustav Graves a.k.a. Colonel Moon",
	villianActor : "Toby Stephens and Will Yun Lee",
	bondGirl : "Jinx",
	girlActress : "Halle Berry",
	allowedHints : [year, actor, girl, locales, villian, henchmen],
	factsForWinners : [
		"Halle Berry was injured during filming when debris from a smoke grenade flew into her eye",
		"In early drafts of the script Bond's counterpart in Tomorrow never dies, Wai Lin, was to play the hotel manager in Hong Kong"
	]
};
const CasinoRoyale = {
	id : 21,
	title : "Casino Royale",
	bondActor : Craig,
	actorsNth : "first",
	locales : "Mbale Uganda, Nassau Bahamas, Miami Florida, and Venice Italy",
	year : 2006,
	villian : "Le Chiffre",
	villianActor : "Mads Mikkelsen",
	bondGirl : "Vesper Lynd",
	girlActress : "Eva Green",
	allowedHints : [year, actor, girl, locales, villian],
	factsForWinners : [
		"The car barrel roll stunt near the end of Casino Royale broke the world record for most barrel rolls assisted by a cannon, seven complete rolls",
		"Sony Pictures Entertainment traded the rights to Casino Royale in exchange for the rights to Spider-Man"
	]
};
const QuantumOfSolace = {
	id : 22,
	title : "Quantum of Solace",
	bondActor : Craig,
	actorsNth : "second",
	locales : "London England, Port-au-Prince Haiti, La Paz Bolivia and Kazan Russia",
	year : 2008,
	sidekick : "Strawberry Fields",
	henchmen : "General Medrano",
	villian : "Dominic Greene",
	villianActor : "Mathieu Amalric",
	bondGirl : "Camille Montes",
	girlActress : "Olga Kurylenko",
	allowedHints : [year, actor, girl, locales, villian, henchmen, sidekick],
	factsForWinners : [
		"Quantum of Solace is the shortest bond film in the series at one hour and thirty six minutes",
		"Bond Actor Daniel Craig helped with the script writing, which was interupted due to a writers strike"
	]
};
const Skyfall = {
	id : 23,
	title : "Skyfall",
	bondActor : Craig,
	actorsNth : "third",
	locales : "Istanbul, London, Shanghai, and Macau",
	year : 2012,
	villian : "Raoul Silva",
	villianActor : "Javier Bardem",
	bondGirl : "Sévérine",
	girlActress : "Bérénice Marlohe",
	allowedHints : [year, actor, girl, locales, villian],
	factsForWinners : [
		"Skyfall's cast went through two hundred rounds of ammunition while undergoing training",
		"Skyfall is the first bond film to gross over one billion dollars worldwide"
	]
};
const Spectre = {
	id : 24,
	title : "Spectre",
	bondActor : Craig,
	actorsNth : "last",
	locales : "Mexico City, London, Saint Peters Square, Rome, Austria, and Tangier Morocco",
	year : 2015,
	bondGirl : "Dr. Madeleine Swann",
	girlActress : "Léa Seydoux",
	allowedHints : [year, actor, girl, locales],
	factsForWinners : [
		"Spectre's car expenses totalled 48 million dollars, smashing a record seven Aston Martins",
		"The organization, Spectre, was off limits for bond films following a 1961 legal dispute. After the owner to the rights of Spectre died in 2006 M.G.M. was able to buy back the rights from his estate"
	]
};

const Movies =
[
	DrNo,
	FromRussiaWithLove,
//];//,
//const oldMovies = [
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