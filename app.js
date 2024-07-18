//inquirer
// import inquirer from "inquirer";
// let answer = await inquirer.prompt({
//     name: "name",
//     type: "input",
//     message: "enter you name",
// });
// console.log(`hello! ${answer.name}`);
//inquirer with chalk
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt({
    name: "name",
    type: "input",
    message: chalk.yellow.italic("enter you name"),
});
console.log(`hello! ${answer.name}`);
