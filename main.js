const prompt = require("prompt-sync")();

const question = prompt("Please enter your Color or Colors?: ").toLowerCase();

const redBlue = 'Red and Blue combine to make "Purple"';
const redYellow = 'Red and Yellow combine to make "Orange"';
const blueYellow = 'Blue and Yellow combine to make "Green"';

const purple = 'Purple is made from "Red + Blue"';
const orange = 'Orange is made from "Red + Yellow"';
const green = 'Green is made from "Blue + Yellow"';

if (question.includes("red") && question.includes("blue")) {
	console.log(redBlue);
} else if (question.includes("red") && question.includes("yellow")) {
	console.log(redYellow);
} else if (question.includes("blue") && question.includes("yellow")) {
	console.log(blueYellow);
} else if (question === "purple") {
	console.log(purple);
} else if (question === "orange") {
	console.log(orange);
} else if (question === "green") {
	console.log(green);
} else {
	console.log("Error");
}

// const question = prompt(
// 	"Would you like to Combine or Deconstruct a color?: "
// ).toLowerCase();

// if (question === "deconstruct") {
// 	const purple = 'Purple is made from "Red + Blue"';
// 	const orange = 'Orange is made from "Red + Yellow"';
// 	const green = 'Green is made from "Blue + Yellow"';

// 	const question = prompt(
// 		"What color would you like to Deconstruct?: "
// 	).toLowerCase();
// 	if (question === "purple") {
// 		console.log(purple);
// 	} else if (question === "orange") {
// 		console.log(orange);
// 	} else if (question === "green") {
// 		console.log(green);
// 	} else {
// 		console.log("Error");
// 	}
// } else if (question === "combine") {
// 	const question1 = prompt(
// 		"What is the first color you want to combine?: "
// 	).toLowerCase();
// 	const question2 = prompt(
// 		"What is the second color you want to combine?: "
// 	).toLowerCase();
// 	const redBlue = 'Red and Blue combine to make "Purple"';
// 	const redYellow = 'Red and Yellow combine to make "Orange"';
// 	const blueYellow = 'Blue and Yellow combine to make "Green"';

// 	if (
// 		(question1 === "red" && question2 === "blue") ||
// 		(question1 === "blue" && question2 === "red")
// 	) {
// 		console.log(redBlue);
// 	} else if (
// 		(question1 === "red" && question2 === "yellow") ||
// 		(question1 === "yellow" && question2 === "red")
// 	) {
// 		console.log(redYellow);
// 	} else if (
// 		(question1 === "blue" && question2 === "yellow") ||
// 		(question1 === "yellow" && question2 === "blue")
// 	) {
// 		console.log(blueYellow);
// 	} else {
// 		console.log("Error");
// 	}
// } else {
// 	console.log("Error");
// }
