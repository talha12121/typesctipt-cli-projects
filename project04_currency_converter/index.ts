#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import { createSpinner } from 'nanospinner';

console.log("<<<====================================>>>");
console.log(chalk.bold.red("<===========CURRENCY CONVERTER===========>"));
console.log("<<<====================================>>>");

let sleep = () => new Promise((r) => setTimeout(r, 2000))

const country = {
  PKR:283.48,
  USD: 1,
  IND: 74.38,
  EUR: 0.85,
  GBP: 0.73,
  JPY: 110.08
} 

async function currencyConverter(){
     let val:number;
    while (true) {
      const amount = await inquirer.prompt({
        name: "amount",
        message: chalk.rgb(412, 412, 0)("ENTER AMOUNT:"),
        type: "number",
      });
      if (isNaN(amount.amount)) {
        console.log(chalk.red("Please enter a valid number"));
      } else {
        val = amount.amount;
        break;
      }
    }
 
  const fromCountry = await inquirer.prompt({
    type:"list",
    name:"from",
    message:chalk.rgb(412,412,0)("FROM WHICH CURRENCY "), 
    choices:Object.keys(country),
  })
 
   const toCountry = await inquirer.prompt({
    type:"list",
    name:"to",
    message:chalk.rgb(412,412,0)("TO WHICH CURRENCY "), 
    choices:Object.keys(country),
  })
   const fromRate = country[fromCountry.from];
  const toRate = country[toCountry.to];
 
  const spinner = createSpinner('Converting').start()
  await sleep()
  spinner.success({ text: "Converted successfully" })
  const converter=val/ fromRate * toRate  ;
  console.log(`${val} ${fromCountry.from}  is equivalent to ${converter.toFixed(2)} ${toCountry.to} .`);
  console.log(chalk.white("*=======================================*"))
  playAgain()
}

currencyConverter()
        

            ///////////PLAY AGAIN FUNCTION/////////////////
const playAgain =async () =>{
    const restart = await inquirer.prompt([
        {
        name:"again",
        message:chalk.rgb(255, 255, 160)("Do You Want To Convert Again?"),
        type: "confirm",
    }])
   
    // let value: boolean = await input['\x1B[38;2;255;255;160mDo You Want To Exit?\x1B[39m']
     if(restart.again === true){
         currencyConverter()
     }
     else{
         console.log(chalk.blue("COME AGAIN SOON"))
     }
}


