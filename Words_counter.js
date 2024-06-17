import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.rgb(0, 255, 0)("\n\tWELCOME  TO  WORDS COUNTER\n\t"));
// promte the user to enter a sentences
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter A Sentence\n\n",
    }
]);
// trimming the sentences and splitting it into words based on "spaces"
let words = answers.sentence.trim().split("  ");
// Analysis of user input sentences
console.log(chalk.rgb(0, 255, 255)("\n- Sentence Words\n"));
console.log(chalk.rgb(210, 105, 30)(words));
console.log(chalk.rgb(255, 255, 0) `\n - Word Count : ${chalk.blueBright(words.length)}`);
console.log(chalk.rgb(255, 105, 180)(`\n PRESENTING  BY  ABDUL  REHMAN\n`));
