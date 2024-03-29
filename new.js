import inquirer from "inquirer";
let todos = [];
let conditin = true;
while (conditin) {
    let add = await inquirer.prompt([{
            name: "todo",
            type: "input",
            message: "What you want to add in your todos?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more",
            default: false,
        }
    ]);
    todos.push(add.todo);
    conditin = add.addmore;
    console.log(todos);
}
