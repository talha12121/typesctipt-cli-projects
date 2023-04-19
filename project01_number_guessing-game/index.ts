#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

let total = 0 ;
let guessed = 0;
function selectMode(){
    const chooseMode = inquirer.prompt({
        name:"mode",
        message:"Select Type",
        type:"list",
        choices:["Easy","Medium","Hard"]
    },)
    .then((chooseMode) => {
        if(chooseMode.mode ==="Easy"){
            easyFunc();
            total +=1;
        }
        else if(chooseMode.mode ==="Medium"){
       mediumFunc();
       total +=1;
        }
        else if(chooseMode.mode ==="Hard"){
       hardFunc();
       total +=1;
        }
    })
}
async function easyFunc(){
    const easyNum = Math.ceil(Math.random()*5);
    const easy = await inquirer.prompt({
        name:"num",
        message:"Enter Number From 1 to 5",
        type:"number"
    },)
    .then((easy)=>{
        if(easy.num === easyNum){
          console.log(chalk.green("YOU GUESSED THE CORRECT NUMBER"))
          guessed +=1
        }else{
               console.log(chalk.red("NOT GUESSED CORRECT"))
        }

    })
    console.log(easyNum);
    playAgain()
}
async function mediumFunc(){
    const mediumNum = Math.ceil(Math.random()*10);
    const medium = await inquirer.prompt({
        name:"num",
        message:"Enter Number From 1 to 10",
        type:"number"
    },)
    .then((medium)=>{
        if(medium.num === mediumNum){
          console.log(chalk.green("YOU GUESSED THE CORRECT NUMBER"))
          guessed +=1
        }else{
               console.log(chalk.red("NOT GUESSED CORRECT"))
        }

    })
    console.log(mediumNum);
    playAgain()
}
async function hardFunc(){
    const hardNum = Math.ceil(Math.random()*15);
    const hard = await inquirer.prompt({
        name:"num",
        message:"Enter Number From 1 to 15",
        type:"number"
    },)
    .then((hard)=>{
        if(hard.num === hardNum){
          console.log(chalk.green("YOU GUESSED THE CORRECT NUMBER"))
          guessed +=1;
        }else{
               console.log(chalk.red("NOT GUESSED CORRECT"))
        }

    })
    console.log(hardNum);
    playAgain()
}

 const playAgain =async () =>{
   const restart = await inquirer.prompt({
            name:"again",
            type:"list",
            message:"DO YOU WANT TO PLAY AGAIN",
            choices:["YES","NO"]
   },)
   .then((restart)=>{
    if(restart.again === 'YES'){
        selectMode()
    }else{
        console.log(chalk.blue("THANKS FOR PLAYING 😄"))
        console.log(`you guessed ${guessed} answers out of ${total} questions` )
    }
   })

}
selectMode();

   


