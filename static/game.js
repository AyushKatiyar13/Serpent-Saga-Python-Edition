// Game constants
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const SNAKE_SIZE = 20;
const APPLE_SIZE = SNAKE_SIZE;
const MANGO_SIZE = SNAKE_SIZE;
const SPEED = 130;  // Speed is constant and will not change
const KEY = { UP: 1, DOWN: 2, LEFT: 3, RIGHT: 4 };

// Game variables
let snake = [];
let apple = { x: 0, y: 0 };
let mango = { x: 0, y: 0 };
let direction = KEY.UP;
let newDirection = KEY.UP;
let score = 0;
let gameInterval;  // Variable to hold the game loop interval
let isGameOver = false; // Flag to check if the game is over
let foodType = null; // 'apple', 'mango', or null for no food

// Set up the canvas
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// Load the images
const appleImage = new Image();
appleImage.src = 'static/images/apple_no_bg.png';  // Path to your apple image

const mangoImage = new Image();
mangoImage.src = 'static/images/mango_no_bg.png';  // Path to your mango image

// Initialize the game
function init() {
    if (gameInterval) {
        clearInterval(gameInterval);  // Clear previous interval if it exists
    }
    snake = [{ x: 200, y: 200 }, { x: 180, y: 200 }, { x: 160, y: 200 }];
    direction = KEY.RIGHT;
    newDirection = KEY.RIGHT; // Initialize newDirection as direction
    score = 0;
    foodType = null; // No food initially
    placeFood(); // Place initial food
    document.addEventListener('keydown', handleKeyPress);
    gameInterval = setInterval(gameLoop, SPEED);  // Set the interval with the constant SPEED
    isGameOver = false; // Reset game over flag
}

// Handle key press events
function handleKeyPress(event) {
    if (isGameOver) {
        if (event.keyCode === 13) { // Enter key
            init(); // Restart the game
        }
        return; // Do not process other key presses if game is over
    }

    switch(event.keyCode) {
        case 37: // left arrow
            if (direction !== KEY.RIGHT) newDirection = KEY.LEFT;
            break;
        case 38: // up arrow
            if (direction !== KEY.DOWN) newDirection = KEY.UP;
            break;
        case 39: // right arrow
            if (direction !== KEY.LEFT) newDirection = KEY.RIGHT;
            break;
        case 40: // down arrow
            if (direction !== KEY.UP) newDirection = KEY.DOWN;
            break;
    }
}

// Main game loop
function gameLoop() {
    if (isGameOver) return; // Exit game loop if game is over

    direction = newDirection;
    moveSnake();
    if (checkCollision()) {
        isGameOver = true; // Set game over flag
        clearInterval(gameInterval); // Stop the game loop
        displayGameOverScreen(); // Display game over screen
        return; // Exit game loop
    }
    if (foodType === 'apple' && checkAppleCollision()) {
        score += 10;
        growSnake(1);
        placeFood(); // Place new food (apple or mango)
    } else if (foodType === 'mango' && checkMangoCollision()) {
        score += 20;
        growSnake(2);
        placeFood(); // Place new food (apple or mango)
    }
    drawGame();
}

// Move the snake
function moveSnake() {
    let head = { ...snake[0] };
    switch(direction) {
        case KEY.UP:
            head.y -= SNAKE_SIZE;
            break;
        case KEY.DOWN:
            head.y += SNAKE_SIZE;
            break;
        case KEY.LEFT:
            head.x -= SNAKE_SIZE;
            break;
        case KEY.RIGHT:
            head.x += SNAKE_SIZE;
            break;
    }
    snake.unshift(head);
    snake.pop();
}

// Check collision with walls or self
function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= CANVAS_WIDTH || head.y < 0 || head.y >= CANVAS_HEIGHT) {
        return true;
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    return false;
}

// Check collision with apple
function checkAppleCollision() {
    const head = snake[0];
    return head.x === apple.x && head.y === apple.y;
}

// Check collision with mango
function checkMangoCollision() {
    const head = snake[0];
    return head.x === mango.x && head.y === mango.y;
}

// Grow the snake
function growSnake(blocks) {
    for (let i = 0; i < blocks; i++) {
        const tail = { ...snake[snake.length - 1] };
        snake.push(tail);
    }
}

// Place food at a random location
function placeFood() {
    const foodChoice = Math.random() < 0.1 ? 'mango' : 'apple'; // 10% chance to place a mango
    foodType = foodChoice;

    if (foodChoice === 'apple') {
        apple.x = Math.floor(Math.random() * (CANVAS_WIDTH / APPLE_SIZE)) * APPLE_SIZE;
        apple.y = Math.floor(Math.random() * (CANVAS_HEIGHT / APPLE_SIZE)) * APPLE_SIZE;
    } else if (foodChoice === 'mango') {
        mango.x = Math.floor(Math.random() * (CANVAS_WIDTH / MANGO_SIZE)) * MANGO_SIZE;
        mango.y = Math.floor(Math.random() * (CANVAS_HEIGHT / MANGO_SIZE)) * MANGO_SIZE;
    }
}

// Draw the game
function drawGame() {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw apple image if it exists
    if (foodType === 'apple') {
        context.drawImage(appleImage, apple.x, apple.y, APPLE_SIZE, APPLE_SIZE);
    }

    // Draw mango image if it exists
    if (foodType === 'mango') {
        context.drawImage(mangoImage, mango.x, mango.y, MANGO_SIZE, MANGO_SIZE);
    }

    // Draw snake
    context.fillStyle = 'green';
    snake.forEach(segment => {
        context.fillRect(segment.x, segment.y, SNAKE_SIZE, SNAKE_SIZE);
    });

    // Draw score
    context.fillStyle = 'white';
    context.font = '20px Arial';
    context.textAlign = 'left';  // Ensure text is aligned to the left
    context.textBaseline = 'top';  // Ensure text is aligned to the top
    context.fillText('Score: ' + score, 10, 10); // Adjusted position
}

// Display the game over screen
function displayGameOverScreen() {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    context.fillStyle = 'rgba(0, 0, 0, 0.8)';  // Semi-transparent background
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);  // Full-screen rectangle

    context.fillStyle = 'white';
    context.font = '40px Arial';
    context.textAlign = 'center';  // Center the text horizontally
    context.textBaseline = 'middle';  // Center the text vertically
    context.fillText('Game Over!', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 20);  // Position above score

    context.font = '30px Arial';  // Smaller font for score
    context.fillText('Score: ' + score, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 20);  // Position below "Game Over"
    context.font = '20px Arial';  // Smaller font for restart instruction
    context.fillText('Press Enter to Restart', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 60);  // Position for restart instruction
}

// Initialize game
init();
