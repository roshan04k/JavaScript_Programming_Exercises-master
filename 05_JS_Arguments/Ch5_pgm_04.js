// Calling the same function with different arguments

var showMessage;

showMessage = function (myMessage, message) {
	console.log(myMessage + "The message is: " + message);
};

showMessage("Statement1  " , "It's full of stars!");
showMessage("Statement2  " , "Hello to Jason Isaacs");
showMessage("Statement3  " , "Hello to Jason Isaacs and Stephen Fry");




/* Further Adventures
 *
 * 1) Change the showMessage function to
 *    display its prefixed text on a
 *    separate line to the message.
 *
 * 2) Declare a myMessage variable and
 *    assign it a string value.
 *
 * 3) Call the showMessage function with
 *    myMessage as the argument.
 *
 */