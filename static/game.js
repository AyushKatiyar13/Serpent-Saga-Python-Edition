// Set up the canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define the size of the game board
const canvasSize = 400;
canvas.width = canvasSize;
canvas.height = canvasSize;

// Define the size of each block
const blockSize = 20;

// Initialize the game state
let snake = [{ x: 160, y: 160 }];
let food = { x: 80, y: 80 };
let direction = 'RIGHT';
let newDirection = 'RIGHT';
let score = 0;
let gameInterval;

// Handle keyboard input
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (direction !== 'DOWN') newDirection = 'UP';
            break;
        case 'ArrowDown':
            if (direction !== 'UP') newDirection = 'DOWN';
            break;
        case 'ArrowLeft':
            if (direction !== 'RIGHT') newDirection = 'LEFT';
            break;
        case 'ArrowRight':
            if (direction !== 'LEFT') newDirection = 'RIGHT';
            break;
    }
});

// Update the game state
function update() {
    direction = newDirection;

    // Calculate the new head position
    const head = { ...snake[0] };
    switch (direction) {
        case 'UP':
            head.y -= blockSize;
            break;
        case 'DOWN':
            head.y += blockSize;
            break;
        case 'LEFT':
            head.x -= blockSize;
            break;
        case 'RIGHT':
            head.x += blockSize;
            break;
    }

    // Check for collisions
    if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize || collisionWithSelf(head)) {
        clearInterval(gameInterval);
        alert('Game Over!');
        return;
    }

    // Update snake
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score++;
        placeFood();
    } else {
        snake.pop();
    }

    // Clear the canvas and redraw the game state
    draw();
}

// Check if the head collides with any part of the snake
function collisionWithSelf(head) {
    return snake.some(segment => segment.x === head.x && segment.y === head.y);
}

// Place food at a random position
function placeFood() {
    food.x = Math.floor(Math.random() * (canvasSize / blockSize)) * blockSize;
    food.y = Math.floor(Math.random() * (canvasSize / blockSize)) * blockSize;
}

// Draw the game state
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the snake
    ctx.fillStyle = 'green';
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, blockSize, blockSize);
    });

    // Draw the food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, blockSize, blockSize);

    // Draw the score
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 20);
}

// Start the game
function startGame() {
    clearInterval(gameInterval);
    snake = [{ x: 160, y: 160 }];
    direction = 'RIGHT';
    newDirection = 'RIGHT';
    score = 0;
    placeFood();
    gameInterval = setInterval(update, 100);
}

// Call the startGame function to begin
startGame();
