from app import app
from waitress import serve
import os  # Ensure this import is included

if __name__ == '__main__':
    serve(app, host='0.0.0.0', port=int(os.environ.get('PORT', 10000)))
