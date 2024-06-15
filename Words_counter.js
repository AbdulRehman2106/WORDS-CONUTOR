"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.rgb(0, 255, 0)("\n\tWELCOME  TO  WORDS COUNTER\n\t"));
// promte the user to enter a sentences
let answers = await inquirer_1.default.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter A Sentence\n\n",
    }
]);
// trimming the sentences and splitting it into words based on "spaces"
let words = answers.sentence.trim().split("  ");
// Analysis of user input sentences
console.log(chalk_1.default.rgb(0, 255, 255)("\n- Sentence Words\n"));
console.log(chalk_1.default.rgb(210, 105, 30)(words));
console.log(chalk_1.default.rgb(255, 255, 0) `\n - Word Count : ${chalk_1.default.blueBright(words.length)}`);
console.log(chalk_1.default.rgb(255, 105, 180)(`\n PRESENTING  BY  ABDUL  REHMAN\n`));
