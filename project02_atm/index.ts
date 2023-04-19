#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { createSpinner, Spinner } from 'nanospinner';

let sleep = () => new Promise((r) => setTimeout(r, 1000))
let value:number = 0;
const pinNum:number = 1234;
console.log(chalk.green("<==============================================>"))
console.log(chalk.green("<=======================ATM=======================>"))
console.log(chalk.green("<==============================================>"))
console.log(chalk.yellowBright(`<=======================PIN IS ${pinNum} ========================>`))
function Authentication(){
     const choosePin = inquirer.prompt({
        name:"pin",
        message:chalk.rgb(255, 148, 140)(`Enter PIN :`),
        type:"number",
       
        
    },)
    .then(async(choosePin)=>{
        const spinner: Spinner = createSpinner('Authenticating').start();
        await sleep();

        if (choosePin.pin === pinNum) {
            spinner.success({ text: chalk.green("Authentication Successfull") })
            Choice()
        }else {
            spinner.error({ text: chalk.red("Authentication Failed") })
        }
    })
}

async function Choice(){
    const choices =await inquirer.prompt({
        name:"choice",
        message:chalk.rgb(255, 148, 140)("What you want to do"),
        choices:["Deposit","Withdraw","Available Amount" ],
        type:"list",
        
    }).then(async(choices)=>{
      if(choices.choice === "Withdraw"){ 
          Withdraw();
         }
        else if(choices.choice === "Deposit"){
          Deposit();
         }
        else if(choices.choice === "Available Amount"){
          AvailableBalance();
         }
    })
};

const Deposit = async () =>{
    const despositCash = await inquirer.prompt({
        name:"deposit",
        message:"HOW MUCH MONEY DO YOU WANT TO DEPOSIT",
        type:"number",
    })
    if(despositCash.deposit){
        const spinner: Spinner = createSpinner('Depositing').start()
        await sleep()
        value += despositCash.deposit
        spinner.success({ text: chalk.green(`Successfully Deposit RS: ${despositCash.deposit}`) })
     }
     playAgain()
}
const Withdraw = async () =>{
    const withDrawCash = await inquirer.prompt({
        name:"withdraw",
        message:"HOW MUCH MONEY DO YOU WANT TO WITHDRAW",
        type:"number",
    })
    if(value>withDrawCash.withdraw){
        const spinner: Spinner = createSpinner('WITHDRAWING').start();
        await sleep ();
       value -= withDrawCash.withdraw;
       spinner.success({ text: chalk.green(`Successfully Withdraw RS: ${withDrawCash.withdraw}`) })
    }else{
        console.log(chalk.red("ENOUGH AMOUNT"))

    }
    playAgain()
}
const AvailableBalance = async () =>{
    console.log(chalk.bgBlackBright.white(`Total Amount: ${value}`))
    playAgain()
}



   
const playAgain =async () =>{
    const restart = await inquirer.prompt({
             name:"again",
             type:"list",
             message:"Do you want to continue",
             choices:["YES","NO"]
    },)
    .then((restart)=>{
     if(restart.again === 'YES'){
         Choice()
     }else{
         console.log(chalk.blue("COME AGAIN SOON"))
     }
    })
 
 }
    

 Authentication()


    