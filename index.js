#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter a number:", type: "number", name: "firstNumber" },
    { message: "Enter another number", type: "number", name: "secondNumber" },
    {
        message: "Which Operation would you like to perform?",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log("Your Answer Is:", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log("Your Answer Is:", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("Your Answer Is:", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("Your Answer Is:", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please Choose The Correct Opeartor");
}
