// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

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

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var quiz;
var quiz1 = {
    question : "Who is your Favourite Actor?",
    opt1 : " vijay ",
    opt2 : " ajith ",
    opt3 : " sk "
}
var quiz2 = {
    question : "national animal?",
    opt1 : " Lion ",
    opt2 : " Tiger ",
    opt3 : " Cheetah "
}
showquiz = function() {
    console.log("Question" + " : " + quiz.question);
    console.log("Options1" + quiz.opt1);
    console.log("Options2" + quiz.opt2);
    console.log("Options3" + quiz.opt3);
}

quiz = quiz1;
showquiz();

quiz = quiz2;
showquiz();
/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */