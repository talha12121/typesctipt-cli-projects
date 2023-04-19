#! /usr/bin/env node

import inquirer from "inquirer";
import chalk  from "chalk";

console.log(chalk.red("<=========CALCULATOR BY TALHA=========>"));

   const calc = inquirer.prompt([
        {
        type:"number",
        name:"num1", 
        message:"Enter First Number",
    },
    {
        type:"list",
        name:"opt", 
        message:"Select Operator",
        choices: ['Addition', 'Subtraction' ,'Multiplication' ,'Division' ,'Modulus'],
    },
    {
        type:"number",
        name:"num2", 
        message:"Enter Second Number",
    },
    
    
])

.then((calc)=>{
if(calc.opt  === "Addition"){
        console.log(chalk.blue(calc.num1 + calc.num2));
}else if(calc.opt === "Subtraction"){
    console.log(chalk.blue(calc.num1 - calc.num2));
}
else if(calc.opt === "Multiplication"){
    console.log(chalk.blue(calc.num1 * calc.num2));
    
}
else if(calc.opt === "Division"){
    console.log(chalk.blue(calc.num1 / calc.num2));
}
else if(calc.opt === "Modulus"){
    console.log(chalk.blue(calc.num1 % calc.num2));
}else{
    console.log(chalk.red("INVALID OPERATOR"))
}
console.log(calc);
}
)