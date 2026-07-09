# 🎰 CLI Slot Game

A fun, interactive **slot machine game** that runs entirely in your terminal. Place bets, spin the reels, and chase the jackpot — all from the command line!

[![npm version](https://img.shields.io/npm/v/cli-slot-game)](https://www.npmjs.com/package/cli-slot-game)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

---

## ✨ Features

- 🎰 **Animated reel spinning** — watch the symbols roll before landing
- 💰 **Betting system** — wager any amount within your balance
- 🏆 **Jackpot bonus** — hit 3 matching symbols for a 10× payout
- 🎨 **Colorful output** — vibrant terminal colors powered by Chalk
- 📖 **In-game instructions** — clear rules displayed at startup
- 🖼️ **ASCII art banner** — stylish Figlet header on launch

---

## 📦 Installation

### Run instantly with npx (no install needed)

```bash
npx cli-slot-game
```

### Install globally

```bash
npm install -g cli-slot-game
```

Then run:

```bash
cli-slot-game
```

### Clone & run locally

```bash
git clone https://github.com/asinijayaweera03-arch/cli-slot-game.git
cd cli-slot-game
npm install
node index.js
```

---

## 🕹️ How to Play

1. **Launch the game** — you start with a **$100** balance.
2. **Place your bet** — enter any amount up to your current balance.
3. **Spin the reels** — three reels spin with an animated sequence.
4. **Check the result:**

| Outcome | Condition | Payout |
|---|---|---|
| 🏆 **Jackpot** | 3 matching symbols | **10×** your bet |
| ✅ **Win** | 2 matching symbols | **2×** your bet |
| ❌ **Loss** | No matches | Lose your bet |

5. **Keep playing** or **cash out** — the game continues until you quit or go bust.

### Symbols

```
🍒  🍋  🔔  💎  7️⃣
```

---

## 🖥️ Demo

```
  ____  _       _
 / ___|| | ___ | |_ ___
 \___ \| |/ _ \| __/ __|
  ___) | | (_) | |_\__ \
 |____/|_|\___/ \__|___/

═════════════════════════════════════════════════
║  🎰  HOW TO PLAY                             ║
═════════════════════════════════════════════════

? Balance: $100. How much do you want to bet? 25

🎰  💎 | 💎 | 🍋  🎰
✔ You won $50! New balance: $125

? Spin again? (Y/n)
```

---

## 🛠️ Tech Stack

| Dependency | Purpose |
|---|---|
| [Inquirer](https://www.npmjs.com/package/inquirer) | Interactive CLI prompts (bet input, play again) |
| [Chalk](https://www.npmjs.com/package/chalk) | Terminal string styling & colors |
| [Figlet](https://www.npmjs.com/package/figlet) | ASCII art text banners |

---

## 📁 Project Structure

```
cli-slot-game/
├── index.js          # Main game logic (entry point)
├── package.json      # Project metadata & dependencies
├── .gitignore        # Ignored files (node_modules)
└── README.md         # You are here
```

---

## ⚙️ Requirements

- **Node.js** ≥ 18 (uses ES Modules)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

<p align="center">
  Made with ❤️ — Now go hit that jackpot! 🎰
</p>
