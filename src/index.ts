#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimtion from 'chalk-animation';

const caclulatorHex = `.-----------------------------.
| # ConnectWithNoor   Calc    |
| .-------------------------. |
| |            ./           | |
| |            +            | |
| |. . . . . ./. . . . . . .| |
| |          / .            | |
| | X=5.2   /  .   Y=0      | |
| '-------------------------' |
| [Y=][WIN][ZOOM][TRACE][GRH] |
|                  _ [ ^ ] _  |
| [__][__][__]|_|     |_| |   |
| [__][__][__]|_|   [ V ]     |
| [__][__][__]|_|[__][__][__] |
| [__][__][__]|_|[__][__][__] |
| [__][__]|_|[ ( ][ ) ][ / ]  |
| [LOG][ 7 ][ 8 ][ 9 ] [ X ]  |
| [LN ][ 4 ][ 5 ][ 6 ] [ - ]  |
| [STO>][ 1 ][ 2 ][ 3 ][ + ]  |
| [ON][ 0 ][ . ][ (-) ][ENTR] |
| ----                        |
'-----------------------------'`;

function sleep(ms: number = 2000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function welcome() {
  const title = chalkAnimtion.rainbow('Welcome to ConnectWithNoor Calculator');
  title.start();
  sleep();
  title.stop();
  console.log(caclulatorHex);
}

async function askQuestion() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      message: 'What operation would you like to perform?',
      name: 'operation',
      choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
    },
    {
      type: 'number',
      name: 'num1',
      message: 'Enter First Number',
    },
    {
      type: 'number',
      name: 'num2',
      message: 'Enter Second Number',
    },
  ]);

  switch (answers.operation) {
    case 'Addition':
      return answers.num1 + answers.num2;
      break;
    case 'Subtraction':
      return answers.num1 - answers.num2;

      break;
    case 'Multiplication':
      return answers.num1 * answers.num2;

      break;
    case 'Division':
      return answers.num1 / answers.num2;

      break;

    default:
      break;
  }
}

async function startAgain() {
  const answer = await inquirer.prompt([
    {
      name: 'restart',
      message: 'Do you want to continue?',
      type: 'list',
      choices: ['Y', 'N'],
    },
  ]);

  return answer.restart as string;
}

welcome();
do {
  const result = await askQuestion();
  console.log(result);
  var restart = await startAgain();
} while (restart.toLowerCase() === 'y');
