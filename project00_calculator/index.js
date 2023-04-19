#! /usr/bin/env node
"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
import inquirer_1 from "inquirer";
import chalk_1 from "chalk";
console.log(chalk_1.red("<=========CALCULATOR BY TALHA=========>"));
var calc = inquirer_1.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter First Number",
    },
    {
        type: "list",
        name: "opt",
        message: "Select Operator",
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Modulus'],
    },
    {
        type: "number",
        name: "num2",
        message: "Enter Second Number",
    },
])
    .then(function (calc) {
    if (calc.opt === "Addition") {
        console.log(chalk_1.blue(calc.num1 + calc.num2));
    }
    else if (calc.opt === "Subtraction") {
        console.log(chalk_1.blue(calc.num1 - calc.num2));
    }
    else if (calc.opt === "Multiplication") {
        console.log(chalk_1.blue(calc.num1 * calc.num2));
    }
    else if (calc.opt === "Division") {
        console.log(chalk_1.blue(calc.num1 / calc.num2));
    }
    else if (calc.opt === "Modulus") {
        console.log(chalk_1.blue(calc.num1 % calc.num2));
    }
    else {
        console.log(chalk_1.red("INVALID OPERATOR"));
    }
    console.log(calc);
});
