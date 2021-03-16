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
function subtract(numberStringOne, numberStringTwo) {
  var numberOne = parseFloat(numberStringOne);
  var numberTwo = parseFloat(numberStringTwo);

  if (Number.isNaN(numberOne) || Number.isNaN(numberTwo)) {
    return "Invalid argument(s)";
  }

  return numberOne - numberTwo;
}

var subtraction = document.querySelector("#subtraction");
var result = subtract("10", "6");

subtraction.innerHTML = result;

// question 6
var title = document.querySelector("title");
var buttonPage = document.querySelector(".page");
var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var ul = document.querySelector("ul");

function updatePage() {
  body.style.backgroundColor = "yellow";
  title.innerHTML = "updated title";
  h1.style.color = "green";
  h1.style.fontFamily = "impact";
  h1.innerHTML = "<a href='#'>" + h1.innerHTML + "</a>";  
  ul.style.listStyleType = "none";
  ul.style.padding = "0";
}

buttonPage.onclick = updatePage;

// question 7
var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];

function addPrices() {
  var totalPrice = 0;

  for (var i = 0; i < toys.length; i++) {
    var currentPrice = toys[i].price;
  
    if (typeof currentPrice === "string") {
      var parsedNumber = parseFloat(currentPrice);
      totalPrice = totalPrice + parsedNumber;
    } else {
      totalPrice = totalPrice + currentPrice;
    }
  }
  
  var total = document.querySelector("#total");
  total.innerHTML = totalPrice;
}

var buttonPrice = document.querySelector(".price");
buttonPrice.onclick = addPrices;