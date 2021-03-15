// question 1
var outOfStock = true;

if (outOfStock === true) { 
  console.log("Out of stock"); 
} else { 
   console.log("In stock"); 
} 

// question 2
for (var i = 15; i <= 25; i++) { 
  if (i === 17 || i === 20) {
    console.log(i);
  }
} 

// question 3
var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

var ul = document.querySelector("ul");

for (var i = 0; i < games.length; i++) {
  var rating = games[i].rating;
  
  if (rating !== null && rating < 3.5) {
    ul.innerHTML = ul.innerHTML + "<li>" + games[i].title + ": " + games[i].rating + "</li>";
  }
}

// question 4
function whatIDontLike(value) {
if (typeof value === "string") {
  console.log("I don't like " + value);
} else {
  console.log("Please send in a string");
}
}

whatIDontLike("Corona Virus");

// question 5
// question 6
// question 7