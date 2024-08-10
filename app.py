from flask import Flask, send_file
import os

app = Flask(__name__)

@app.route('/')
def home():
    return 'Welcome to the Snake Game! <a href="/game">Play the Game</a>'

@app.route('/game')
def game():
    # Serve the game.html file from the static folder
    return send_file('static/game.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 10000)))
