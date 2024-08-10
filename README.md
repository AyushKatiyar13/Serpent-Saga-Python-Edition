# Serpent Saga: Python Edition 🐍🎮

## Introduction

Welcome to **Serpent Saga: Python Edition**! This classic Snake game, developed using Python and the Pygame library, invites you to master the art of slithering. Whether you're a beginner keen on game development or an experienced coder looking for a nostalgic challenge, this game is designed to be both fun and a great learning experience.

**Note:** This game is designed for desktop play and is not optimized for mobile devices.

## 🎯 Motive

The goal of **Serpent Saga** is to create a timeless Snake game utilizing Python and Pygame. This project serves as an excellent opportunity to practice object-oriented programming, game development principles, and the integration of external libraries for graphics and user input.

## 🕹️ Gameplay

When you run the game, you’ll navigate a snake that grows longer with each apple it consumes. The snake moves in four directions: up, down, left, and right. The game ends if the snake collides with itself. Key features include:

- **Scoring System**: Keep track of your achievements.
- **Timer**: Challenge yourself to beat the clock.
- **Restart/Exit Options**: Start a new game or exit after a game over.

## 📦 Special Modules and Functions

### Modules Used

- **Pygame**: Essential for game development, handling graphics and sound.
  - `pygame.init()`: Initializes all Pygame modules.
  - `pygame.display.set_mode()`: Sets up the game window.
  - `pygame.font.Font()`: Loads fonts for text rendering.
  - `pygame.time.Clock()`: Tracks time.
- **Sys**: Manages interpreter variables and functions.
  - `sys.exit()`: Terminates the program.
- **Os**: Handles file system operations.
- **Random**: Generates random numbers.
  - `random.randint()`: Random integers.
  - `random.uniform()`: Random floats.
- **Math**: Provides mathematical functions.
  - `math.sqrt()`: Computes square roots.
  - `math.cos()`, `math.sin()`: Trigonometric functions.

### Key Classes and Functions

- **Class: Apple**
  - Attributes: `x`, `y`, `state`, `color`
  - Methods: `__init__()`, `draw(screen)`

- **Class: Segment**
  - Attributes: `x`, `y`, `direction`, `color`
  - Methods: `__init__()`

- **Class: Snake**
  - Attributes: `x`, `y`, `direction`, `stack`
  - Methods: `__init__()`, `move()`, `getHead()`, `grow()`, `setDirection(direction)`, `checkCrashing()`, `draw(screen)`

- **Functions**
  - `checkCollision(posA, As, posB, Bs)`: Detects collisions.
  - `checkLimits(snake)`: Manages screen wrapping.
  - `getKey()`: Handles user input.
  - `endGame()`: Manages game over scenarios.
  - `drawScore(score)`: Displays score.
  - `drawGameTime(gameTime)`: Shows game time.
  - `respawnApple(apples, index, sx, sy)`: Respawns a single apple.
  - `respawnApples(apples, quantity, sx, sy)`: Respawns multiple apples.
  - `main()`: Contains the game loop.

## 🛠️ How to Run the Game

1. Ensure you have Python and Pygame installed.
2. Clone the repository or download `snake_game.py`.
3. Open a terminal and navigate to the directory containing `snake_game.py`.
4. Run the script using:
   ```bash
   python snake_game.py
   ```

## 🌐 Play Online

Experience **Serpent Saga: Python Edition** live on [this link](https://snake-game-using-python.onrender.com).

## 🌟 Visit My Portfolio

For more about my projects, education background, and details, visit my portfolio at [my portfolio](https://new-portfolio-lfys.onrender.com).

## 💬 Share Your High Score

Don’t forget to comment and message me your highest score! I’d love to hear about your achievements and any feedback you have.

## Thank You! 😊⭐

Enjoy the game and have fun slithering through your challenges!
