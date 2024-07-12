// A function with two arguments

var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);
showSum(56 , 74);

var showProduct = function(num1, num2) {
	var product = num1 * num2;
	console.log("The Product is " + product);
}
showProduct(1,3);
showProduct(5,9);
showProduct(30,30);

var ArithmeticOperation = function(num3, num4) {
	var division = num3 / num4;
	var subtraction = num3 + num4;
	var Quotient = num3 % num4;
	console.log(num3 + " / " + num4 + " = " + division);
	console.log(num3 + " - " + num4 + " = " + subtraction);
	console.log(num3 + " % " + num4 + " = " + Quotient);
}
ArithmeticOperation(10,20);
ArithmeticOperation(2,4);
ArithmeticOperation(200,100);

/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */