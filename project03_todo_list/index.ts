#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { createSpinner } from 'nanospinner';

console.log(chalk.red("<=======================================================================>"));
console.log(chalk.green("<==============================TODO LIST==============================>"));
console.log(chalk.red("<=======================================================================>"));

 /////////Initializing variable of array datatype/////////////
let value:string[] = [];
let sleep = () => new Promise((r) => setTimeout(r, 2000))
 
     //Main Function//
async function Todo(){
 const todoOption = await inquirer.prompt({
    name:"todos",
    type:"list",
    message:chalk.rgb(220, 223, 230)("What do you want to do"),
    choices:["Add Todo" , "Delete Todo" ,"Display Todo"],
 }
 )
 if(todoOption.todos === "Add Todo"){
     AddTodo();
}
 else if(todoOption.todos === "Delete Todo"){
     DeleteTodo();
}
 else if(todoOption.todos === "Display Todo"){
     DisplayTodo();
}
}
        ////////ADD TODO FUNCTION/////////
const AddTodo =async () =>{
    // Taking prompt from user
   const addTodo =await inquirer.prompt({
    name:"add",
    type:"input",
    message:chalk.rgb(220, 223, 230)("Add Todo"),
   })
    // push value to an array ang give arg of the input value
     value.push(addTodo.add);
     console.log(`YOU ADDED ${value}`);
           
     const spinner = createSpinner('Adding Todo').start()
     await sleep()
     spinner.success({ text: "Todo added successfully" })

     playAgain()
   
}
               
          /////////DELTE FUNCTION///////////
const DeleteTodo = async () => {
   ///check the value length to display error
    if (value.length === 0) {
        console.log(chalk.red("No todo items found."))
        playAgain()
        return
    } 
    ///display todo through map function 
    let todo = value.map((val) => {
        //return object 
      return { name: val };
    });

       // Deleting input
    const input = await inquirer.prompt([
      {
        name: "delete",
        type: "list",
        message: "Select a todo to delete:",
        // {todo} which came from map function 
        choices: todo,
      },
    ]);
        // store index of delete input in a variable
    const index = value.indexOf(input.delete);
    if (index > -1) {
      value.splice(index, 1);
      console.log(`YOU DELETED ${input.delete}`);
    } else {
      console.log(chalk.red("Error: todo not found"));
    }
      //////////Spinner/////////
    const spinner = createSpinner('Deleting Todo').start()
    await sleep()
    spinner.success({ text: "Todo Deleted successfully" })
  
    playAgain();
  }


const DisplayTodo =async () =>{
   ///check the value length to display error
    if (value.length === 0) {
        console.log(chalk.red("No todo items found."))
        playAgain()
        return
    } 
    ///display todo through map function 
    let todo = value.map((val) => {
            return { name:val } 
    })
    const input = await inquirer.prompt([
        {
            name: chalk.rgb(255, 255, 160)('DISPLAY TODO'),
            type: "list",
            // {todo} which came from map function 
            choices: todo,
        }
    ])
    

    playAgain() 
}
 
        ///////////PLAY AGAIN FUNCTION/////////////////
const playAgain =async () =>{
    const restart = await inquirer.prompt({
             name:"again",
             type:"list",
             message:"Do you want to continue",
             choices:["YES","NO"]
    },)
    .then((restart)=>{
     if(restart.again === 'YES'){
         Todo()
     }else{
         console.log(chalk.blue("COME AGAIN SOON"))
     }
    })
 
 }

Todo()



