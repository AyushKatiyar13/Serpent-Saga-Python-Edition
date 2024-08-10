from flask import Flask, send_file
import os

app = Flask(__name__)

@app.route('/')
def home():
    # This is just a placeholder. You can modify it to start your game or provide instructions.
    return 'Welcome to the Snake Game! <a href="/game">Play the Game</a>'

@app.route('/game')
def game():
    # Assuming you want to provide a download link for the game script
    return send_file('Snake game.py', as_attachment=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 8000)))

