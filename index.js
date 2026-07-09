#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";

const SYMBOLS = ["🍒", "🍋", "🔔", "💎", "7️⃣"];
let balance = 100;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function spinReels() {
  return [0, 1, 2].map(() => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);
}

async function animateSpin() {
  let finalReels;
  process.stdout.write("\n");
  for (let i = 0; i < 15; i++) {
    finalReels = spinReels();
    process.stdout.write(`\r🎰  ${finalReels.join(" | ")}  🎰`);
    await sleep(80);
  }
  process.stdout.write("\n");
  return finalReels;
}

function evaluate(reels, bet) {
  const [a, b, c] = reels;
  if (a === b && b === c) return { win: true, amount: bet * 10, jackpot: true };
  if (a === b || b === c || a === c) return { win: true, amount: bet * 2, jackpot: false };
  return { win: false, amount: bet, jackpot: false };
}

function banner(text, color) {
  console.log(chalk[color](figlet.textSync(text, { font: "Standard" })));
}

async function playRound() {
  const { bet } = await inquirer.prompt([
    {
      type: "number",
      name: "bet",
      message: `Balance: $${balance}. How much do you want to bet?`,
      validate: (val) => (val > 0 && val <= balance ? true : "Enter a valid amount within your balance"),
    },
  ]);

  const reels = await animateSpin();
  const result = evaluate(reels, bet);

  if (result.win) {
    balance += result.amount - bet;
    if (result.jackpot) {
      banner("JACKPOT!", "yellowBright");
    }
    console.log(chalk.green(`✔ You won $${result.amount}! New balance: $${balance}`));
  } else {
    balance -= bet;
    console.log(chalk.red(`✘ No match. You lost $${bet}. New balance: $${balance}`));
  }
}

function showInstructions() {
  const border = chalk.yellowBright("═".repeat(48));
  const side = chalk.yellowBright("║");

  console.log(border);
  console.log(side + chalk.bold.whiteBright("  🎰  HOW TO PLAY ") + " ".repeat(27) + side);
  console.log(border);
  console.log(side + "                                                " + side);
  console.log(side + chalk.cyanBright("  Symbols: ") + SYMBOLS.join("  ") + "              " + side);
  console.log(side + "                                                " + side);
  console.log(side + chalk.bold.whiteBright("  Rules:") + "                                        " + side);
  console.log(side + chalk.green("    🎯 3 matching symbols  → Win 10x your bet") + " " + side);
  console.log(side + chalk.green("    🎯 2 matching symbols  → Win  2x your bet") + " " + side);
  console.log(side + chalk.red("    ❌ No match            → Lose your bet")     + "    " + side);
  console.log(side + "                                                " + side);
  console.log(side + chalk.bold.whiteBright("  How it works:") + "                                 " + side);
  console.log(side + chalk.gray("    1. Enter your bet amount") + "                    " + side);
  console.log(side + chalk.gray("    2. Watch the reels spin") + "                     " + side);
  console.log(side + chalk.gray("    3. Match symbols to win!") + "                    " + side);
  console.log(side + "                                                " + side);
  console.log(side + chalk.magentaBright("  💰 Starting balance: $100") + "                     " + side);
  console.log(side + chalk.magentaBright("  🏆 Go for the JACKPOT (3 of a kind)!") + "          " + side);
  console.log(side + "                                                " + side);
  console.log(border);
  console.log();
}

async function play() {
  banner("Slots", "cyanBright");
  showInstructions();

  while (balance > 0) {
    await playRound();

    if (balance <= 0) {
      banner("BUST", "redBright");
      console.log(chalk.red("You're out of money. Game over."));
      break;
    }

    const { again } = await inquirer.prompt([
      { type: "confirm", name: "again", message: "Spin again?", default: true },
    ]);
    if (!again) {
      console.log(chalk.cyan(`\nCashing out with $${balance}. Nice run.`));
      break;
    }
  }
}

play();