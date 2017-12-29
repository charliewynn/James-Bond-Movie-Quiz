const Connery = "Sean Connery";
const DrNo = {
	id : 1,
	title : "Dr. No",
	locales : "Some island and some other place",
	bondActor : Connery,
	actorsNth : 'first',
	girlActress : "Andrea Ursa",
	bondGirl : "Honey Rider",
	gadgets : "idk, and something else",
	year : 1962,
	allowedHints : ["locales", "year", "actor", "girl", "gadgets"]
};
const FromRussiaWithLove = {
	id : 2,
	title : "From Russia With Love",
	locales : "Some train and some island",
	bondActor : Connery,
	actorsNth : 'second',
	girlActress : "idk",
	bondGirl : "that spy lady",
	gadgets : "suitcase",
	year : 1964,
	villian : "some bad guy",
	allowedHints : ["locales", "year", "actor", "girl", "gadgets", "villian"]
}


const Movies =
[
	DrNo,
	FromRussiaWithLove
]

exports.Movies = Movies;
exports.ById = function(id){
	const res = Movies.filter(m=>m.id === id);
	if(res.length == 1) return res[0];
	if(res.length == 0) throw "No Movie with that ID found";
	throw "Multiple Movies with same ID found";
}