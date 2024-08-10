import pygame
import sys
import random

pygame.init()
pygame.display.set_caption("Snake Game")
pygame.font.init()

# Constants
SPEED = 0.36
SNAKE_SIZE = 20
APPLE_SIZE = SNAKE_SIZE
FPS = 25
KEY = {"UP": 1, "DOWN": 2, "LEFT": 3, "RIGHT": 4}

# Screen setup
info = pygame.display.Info()
SCREEN_WIDTH = info.current_w
SCREEN_HEIGHT = info.current_h
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
score_font = pygame.font.Font(None, 38)
score_numb_font = pygame.font.Font(None, 28)
game_over_font = pygame.font.Font(None, 46)
score_msg = score_font.render("Score : ", True, pygame.Color("green"))
background_color = pygame.Color(0, 0, 0)

# Clock
gameClock = pygame.time.Clock()

# Helper functions
def checkCollision(posA, As, posB, Bs):
    if posA.x < posB.x + Bs and posA.x + As > posB.x and posA.y < posB.y + Bs and posA.y + As > posB.y:
        return True
    return False

def checkLimits(snake):
    if snake.x > SCREEN_WIDTH:
        snake.x = 0
    if snake.x < 0:
        snake.x = SCREEN_WIDTH - SNAKE_SIZE
    if snake.y > SCREEN_HEIGHT:
        snake.y = 0
    if snake.y < 0:
        snake.y = SCREEN_HEIGHT - SNAKE_SIZE

class Apple:
    def __init__(self, x, y, state):
        self.x = x
        self.y = y
        self.state = state
        self.color = pygame.Color("orange")

    def draw(self, screen):
        pygame.draw.rect(screen, self.color, (self.x, self.y, APPLE_SIZE, APPLE_SIZE))

class Segment:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.direction = KEY["UP"]
        self.color = "white"

class Snake:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.direction = KEY["UP"]
        self.stack = [Segment(x, y)]
        self.stack.append(Segment(x, y + SNAKE_SIZE))

    def move(self):
        last_element = len(self.stack) - 1
        while last_element > 0:
            self.stack[last_element].direction = self.stack[last_element - 1].direction
            self.stack[last_element].x = self.stack[last_element - 1].x
            self.stack[last_element].y = self.stack[last_element - 1].y
            last_element -= 1

        if len(self.stack) < 2:
            last_segment = self
        else:
            last_segment = self.stack.pop()

        last_segment.direction = self.stack[0].direction
        if self.stack[0].direction == KEY["UP"]:
            last_segment.y = self.stack[0].y - (SPEED * FPS)
        elif self.stack[0].direction == KEY["DOWN"]:
            last_segment.y = self.stack[0].y + (SPEED * FPS)
        elif self.stack[0].direction == KEY["LEFT"]:
            last_segment.x = self.stack[0].x - (SPEED * FPS)
        elif self.stack[0].direction == KEY["RIGHT"]:
            last_segment.x = self.stack[0].x + (SPEED * FPS)

        self.stack.insert(0, last_segment)

    def getHead(self):
        return self.stack[0]

    def grow(self):
        last_segment = self.stack[-1]
        if last_segment.direction == KEY["UP"]:
            new_segment = Segment(last_segment.x, last_segment.y - SNAKE_SIZE)
        elif last_segment.direction == KEY["DOWN"]:
            new_segment = Segment(last_segment.x, last_segment.y + SNAKE_SIZE)
        elif last_segment.direction == KEY["LEFT"]:
            new_segment = Segment(last_segment.x - SNAKE_SIZE, last_segment.y)
        elif last_segment.direction == KEY["RIGHT"]:
            new_segment = Segment(last_segment.x + SNAKE_SIZE, last_segment.y)

        self.stack.append(new_segment)

    def setDirection(self, direction):
        if (self.direction == KEY["RIGHT"] and direction == KEY["LEFT"]) or \
           (self.direction == KEY["LEFT"] and direction == KEY["RIGHT"]) or \
           (self.direction == KEY["UP"] and direction == KEY["DOWN"]) or \
           (self.direction == KEY["DOWN"] and direction == KEY["UP"]):
            return
        self.direction = direction

    def draw(self, screen):
        for segment in self.stack:
            pygame.draw.rect(screen, pygame.Color("green"), (segment.x, segment.y, SNAKE_SIZE, SNAKE_SIZE))

    def checkCrashing(self):
        for segment in self.stack[1:]:
            if checkCollision(self.getHead(), SNAKE_SIZE, segment, SNAKE_SIZE):
                return True
        return False

def getKey():
    for event in pygame.event.get():
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP:
                return KEY["UP"]
            elif event.key == pygame.K_DOWN:
                return KEY["DOWN"]
            elif event.key == pygame.K_LEFT:
                return KEY["LEFT"]
            elif event.key == pygame.K_RIGHT:
                return KEY["RIGHT"]
            elif event.key == pygame.K_ESCAPE:
                return "exit"
            elif event.key == pygame.K_y:
                return "yes"
            elif event.key == pygame.K_n:
                return "no"
        if event.type == pygame.QUIT:
            sys.exit(0)

def endGame():
    message = game_over_font.render("Game Over", True, pygame.Color("white"))
    message_play_again = score_numb_font.render("Play Again? (Y/N)", True, pygame.Color("green"))
    screen.blit(message, (SCREEN_WIDTH // 2 - message.get_width() // 2, SCREEN_HEIGHT // 2 - message.get_height() // 2))
    screen.blit(message_play_again, (SCREEN_WIDTH // 2 - message_play_again.get_width() // 2, SCREEN_HEIGHT // 2 + 60))
    pygame.display.flip()
    while True:
        key = getKey()
        if key == "yes":
            return True
        if key == "no":
            return False

def showStartScreen():
    screen.fill(background_color)
    start_msg = game_over_font.render("Welcome to Snake Game!", True, pygame.Color("white"))
    instructions = score_numb_font.render("Press ENTER to Start", True, pygame.Color("lightgrey"))
    screen.blit(start_msg, (SCREEN_WIDTH // 2 - start_msg.get_width() // 2, SCREEN_HEIGHT // 2 - start_msg.get_height() // 2 - 50))
    screen.blit(instructions, (SCREEN_WIDTH // 2 - instructions.get_width() // 2, SCREEN_HEIGHT // 2 + 20))
    pygame.display.flip()
    while True:
        key = getKey()
        if key == pygame.K_RETURN:
            break

def main():
    while True:
        showStartScreen()
        snake = Snake(SNAKE_SIZE, SNAKE_SIZE)
        apple = Apple(random.randint(0, SCREEN_WIDTH // APPLE_SIZE) * APPLE_SIZE,
                      random.randint(0, SCREEN_HEIGHT // APPLE_SIZE) * APPLE_SIZE,
                      1)
        score = 0

        while True:
            screen.fill(background_color)
            snake.move()
            snake.setDirection(getKey())
            checkLimits(snake.getHead())
            if checkCollision(snake.getHead(), SNAKE_SIZE, apple, APPLE_SIZE):
                snake.grow()
                apple = Apple(random.randint(0, SCREEN_WIDTH // APPLE_SIZE) * APPLE_SIZE,
                              random.randint(0, SCREEN_HEIGHT // APPLE_SIZE) * APPLE_SIZE,
                              1)
                score += 1

            snake.draw(screen)
            apple.draw(screen)

            if snake.checkCrashing():
                if not endGame():
                    pygame.quit()
                    sys.exit(0)
                break

            pygame.display.flip()
            gameClock.tick(FPS)

if __name__ == "__main__":
    main()
