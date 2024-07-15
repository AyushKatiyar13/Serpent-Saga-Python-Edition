Snake Game using Python

Motive

The goal of this project is to create a classic Snake game using Python and the Pygame library. This project serves as an excellent way to practice object-oriented programming, game development concepts, and the use of an external library (Pygame) for handling graphics and user input. It's aimed at both beginners looking to solidify their programming skills and experienced developers interested in game development.

Output

The output of this code is a fully functional Snake game where the player controls a snake that grows in length each time it eats an apple. The snake can move in four directions (up, down, left, right), and the game ends if the snake collides with itself. The game includes a scoring system, a timer, and the option to restart or exit the game when it ends.

Special Modules and Functions

Modules Used
1. Pygame: A set of Python modules designed for writing video games. It includes computer graphics and sound libraries.
    - `pygame.init()`: Initializes all the Pygame modules.
    - `pygame.display.set_mode()`: Sets up the display window for the game.
    - `pygame.font.Font()`: Loads a font object for rendering text.
    - `pygame.time.Clock()`: Creates an object to help track time.

2. Sys: Provides access to some variables used or maintained by the Python interpreter and functions that interact strongly with the interpreter.
    - `sys.exit()`: Exits the program.

3. Os: Provides a way of using operating system-dependent functionality like reading or writing to the file system.

4. Random: Implements pseudo-random number generators for various distributions.
    - `random.randint()`: Returns a random integer within a specified range.
    - `random.uniform()`: Returns a random float within a specified range.

5. Math: Provides access to mathematical functions.
    - `math.sqrt()`: Returns the square root of a number.
    - `math.cos()`: Returns the cosine of a number.
    - `math.sin()`: Returns the sine of a number.

Key Classes and Functions

1. Class: Apple
    - Attributes: `x`, `y`, `state`, `color`.
    - Methods: `__init__()`, `draw(screen)`.
    - Description: Represents the food for the snake, with attributes for its position, state (visible or eaten), and color.

2. Class: Segment
    - Attributes: `x`, `y`, `direction`, `color`.
    - Methods: `__init__()`.
    - Description: Represents a segment of the snake's body, with attributes for its position, direction, and color.

3. Class: Snake
    - Attributes: `x`, `y`, `direction`, `stack`.
    - Methods: `__init__()`, `move()`, `getHead()`, `grow()`, `setDirection(direction)`, `checkCrashing()`, `draw(screen)`.
    - Description: Represents the snake, with attributes for its head position, direction, and body segments. Includes methods for moving, growing, changing direction, checking for collisions, and drawing the snake.

4. Function: checkCollision(posA, As, posB, Bs)
    - Description: Checks if two rectangular areas (e.g., the snake's head and an apple) overlap, indicating a collision.

5. Function: checkLimits(snake)
    - Description: Ensures the snake wraps around the screen edges, appearing on the opposite side if it moves off-screen.

6. Function: getKey()
    - Description: Captures and returns the player's key presses to control the snake's direction and handle game exit/restart.

7. Function: endGame()
    - Description: Displays the game over screen and handles the player's choice to restart or exit the game.

8. Function: drawScore(score)
    - Description: Draws the player's current score on the screen.

9. Function: drawGameTime(gameTime)
    - Description: Draws the elapsed game time on the screen.

10. Function: respawnApple(apples, index, sx, sy)
    - Description: Respawns an apple at a new random position.

11. Function: respawnApples(apples, quantity, sx, sy)
    - Description: Respawns multiple apples at new random positions.

12. Function: main()
    - Description: The main game loop that initializes the game, handles game logic, updates positions, and draws elements on the screen.

Brief Explanation of Topics

1. Object-Oriented Programming (OOP):
    - The use of classes (`Apple`, `Segment`, `Snake`) to represent different components of the game and encapsulate related data and functions.

2. Pygame Library:
    - A powerful set of tools for game development, handling graphics rendering, and user input. Key functions from Pygame are used to set up the game window, draw shapes and text, and manage the game clock.

3. Collision Detection:
    - The `checkCollision()` function is crucial for determining interactions between the snake and apples, as well as detecting when the snake crashes into itself.

4. Game Loop:
    - The `main()` function contains the game loop, which continuously updates the game state, handles user input, and renders the game frame by frame.

5. Event Handling:
    - The `getKey()` function captures and processes keyboard events, allowing the player to control the snake and manage game state transitions (e.g., restarting or exiting).

How to Run the Game

1. Ensure you have Python and Pygame installed on your system.
2. Clone the repository or download the `snake_game.py` file.
3. Open a terminal and navigate to the directory containing `snake_game.py`.
4. Run the script using the command:
   python snake_game.py

Enjoy playing the Snake game!

This description covers the motive, output, key components, and technical details of your Snake Game project, making it clear and comprehensive for anyone visiting your GitHub repository.
