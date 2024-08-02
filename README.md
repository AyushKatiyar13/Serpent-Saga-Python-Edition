## Classic Snake Game Using Python 🐍🎮

### Motive
The goal of this project is to develop a classic Snake game utilizing Python and the Pygame library. This exercise is an excellent opportunity to practice object-oriented programming, game development concepts, and the integration of external libraries for graphics and user input. It caters to both beginners looking to strengthen their programming skills and experienced developers interested in game development.

### Output
Upon running the code, you'll experience a fully functional Snake game. The player controls a snake that grows in length every time it consumes an apple. The snake moves in four directions (up, down, left, right), and the game ends if the snake collides with itself. Features include a scoring system, a timer, and options to restart or exit the game upon completion.

### Special Modules and Functions

#### Modules Used
1. **Pygame:** A collection of Python modules for video game development, encompassing graphics and sound libraries.
   - `pygame.init()`: Initializes all Pygame modules.
   - `pygame.display.set_mode()`: Sets up the game’s display window.
   - `pygame.font.Font()`: Loads fonts for rendering text.
   - `pygame.time.Clock()`: Helps track time.

2. **Sys:** Provides access to interpreter variables and functions interacting with the interpreter.
   - `sys.exit()`: Terminates the program.

3. **Os:** Facilitates OS-dependent functionalities like file system operations.

4. **Random:** Implements pseudo-random number generators.
   - `random.randint()`: Generates a random integer within a specified range.
   - `random.uniform()`: Generates a random float within a specified range.

5. **Math:** Provides mathematical functions.
   - `math.sqrt()`: Computes the square root of a number.
   - `math.cos()`: Returns the cosine of a number.
   - `math.sin()`: Returns the sine of a number.

#### Key Classes and Functions

1. **Class: Apple**
   - **Attributes:** `x`, `y`, `state`, `color`.
   - **Methods:** `__init__()`, `draw(screen)`.
   - **Description:** Represents the apple as the snake's food, with attributes for its position, visibility, and color.

2. **Class: Segment**
   - **Attributes:** `x`, `y`, `direction`, `color`.
   - **Methods:** `__init__()`.
   - **Description:** Represents a segment of the snake’s body, with attributes for its position, direction, and color.

3. **Class: Snake**
   - **Attributes:** `x`, `y`, `direction`, `stack`.
   - **Methods:** `__init__()`, `move()`, `getHead()`, `grow()`, `setDirection(direction)`, `checkCrashing()`, `draw(screen)`.
   - **Description:** Represents the snake, including its head position, direction, and body segments. Contains methods for movement, growth, direction changes, collision checks, and drawing.

4. **Function: checkCollision(posA, As, posB, Bs)**
   - **Description:** Detects if two rectangular areas overlap, indicating a collision.

5. **Function: checkLimits(snake)**
   - **Description:** Ensures the snake wraps around screen edges and appears on the opposite side if it moves off-screen.

6. **Function: getKey()**
   - **Description:** Captures player key presses to control the snake’s direction and handle game restart/exit.

7. **Function: endGame()**
   - **Description:** Displays the game over screen and manages the player’s choice to restart or exit.

8. **Function: drawScore(score)**
   - **Description:** Displays the current score on the screen.

9. **Function: drawGameTime(gameTime)**
   - **Description:** Shows the elapsed game time on the screen.

10. **Function: respawnApple(apples, index, sx, sy)**
    - **Description:** Respawns an apple at a new random position.

11. **Function: respawnApples(apples, quantity, sx, sy)**
    - **Description:** Respawns multiple apples at new random positions.

12. **Function: main()**
    - **Description:** Contains the game loop, initializing the game, handling logic, updating positions, and rendering elements frame by frame.

### Brief Explanation of Topics

1. **Object-Oriented Programming (OOP):**
   - Utilizes classes (`Apple`, `Segment`, `Snake`) to encapsulate data and functions related to different game components.

2. **Pygame Library:**
   - A comprehensive set of tools for game development, including graphics rendering and user input handling.

3. **Collision Detection:**
   - The `checkCollision()` function is key for detecting interactions between the snake and apples, as well as self-collisions.

4. **Game Loop:**
   - The `main()` function drives the game loop, continuously updating the game state, handling input, and rendering frames.

5. **Event Handling:**
   - The `getKey()` function processes keyboard events, controlling the snake and managing game transitions.

### How to Run the Game

1. Ensure Python and Pygame are installed on your system.
2. Clone the repository or download the `snake_game.py` file.
3. Open a terminal and navigate to the directory containing `snake_game.py`.
4. Run the script using:
   ```bash
   python snake_game.py
   ```

Enjoy playing the classic Snake game! 🐍🎮
