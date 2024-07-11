// Displaying information from similar objects

var movie1;
var movie2;
var movie3;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

var movie4 = {
  title: "The Lord of the Rings: The Fellowship of the Ring",
  actors: "Elijah Wood, Ian McKellen, Orlando Bloom",
  directors: "Peter Jackson"
};

function moviedetails(movie) {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
  
}

moviedetails(movie1);
moviedetails(movie2);
moviedetails(movie3);
moviedetails(movie4);

var event1 = {
  eventname : "Farwell",
  location : "IIM",
  Date : "10-07-2024"
};
var event2 = {
  eventname : "Farwell",
  location : "IIM",
  Date : "10-07-2024"
};
var event3 = {
  eventname : "Farwell",
  location : "IIM",
  Date : "10-07-2024"
};
function eventdetails() {
 console.log(event1);
 console.log(event2);
 console.log(event3);
}
eventdetails();
/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */