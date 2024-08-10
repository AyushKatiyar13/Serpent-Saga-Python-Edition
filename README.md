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

## 🛠️ Technologies Used

- **Python**: The core language for developing game logic and functionality.
- **Pygame**: A library for creating video games with graphics and sound.
- **Flask**: A web framework for handling server-side operations, such as hosting and managing web-based interactions.
- **HTML**: Used for structuring any web-based components (if applicable in your development environment).
- **CSS**: For styling any web-based components or interfaces.
- **JavaScript**: For dynamic behavior in web-based components (if applicable).

### Key Functionality with Pygame and Flask

- **Graphics and Rendering**: Handled by Pygame's `pygame.display.set_mode()` and other rendering functions.
- **User Input**: Managed using `pygame.event.get()` and `pygame.key.get_pressed()`.
- **Game Timing**: Controlled with `pygame.time.Clock()` for consistent frame rates.
- **Server-Side Operations**: Managed by Flask to support web-based interactions and hosting.

## 📦 Special Modules and Functions

### Modules Used

- **Pygame**: Essential for game development, handling graphics and sound.
  - `pygame.init()`: Initializes all Pygame modules.
  - `pygame.display.set_mode()`: Sets up the game window.
  - `pygame.font.Font()`: Loads fonts for text rendering.
  - `pygame.time.Clock()`: Tracks time.
- **Flask**: Manages server-side operations.
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

1. Ensure you have Python, Pygame, and Flask installed.
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

## 💡 Advice for Future Development

Feel free to fork this repository and add more features to enhance the game! Here are a couple of suggestions to get you started:

1. **Change the Appearance**: Customize the look of the snake to make it more visually appealing.
2. **Record High Scores**: Implement a feature to track and display high scores, so players can compete for the top spot.

Your contributions are welcome, and I look forward to seeing how you make the game even better!

## Thank You! 😊⭐

Enjoy the game and have fun slithering through your challenges!
