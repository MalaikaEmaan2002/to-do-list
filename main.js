#! usr/bin/env/node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([{
            name: "firstQuestiom",
            type: "input",
            message: " would you like to add in your todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: 'would you like to add more in your todos?',
            default: "true"
        },
    ]);
    todos.push(todoQuestions.firstQuestiom);
    console.log(todos);
    condition = todoQuestions.secondQuestion;
}
