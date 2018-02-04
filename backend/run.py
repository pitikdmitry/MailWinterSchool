# run.py

import os

from app import create_app
from flask_cors import CORS

config_name = os.getenv('FLASK_CONFIG')
app = create_app(config_name)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
# cors = CORS(app)
    # credentials: true,
app.config['CORS_HEADERS'] = 'Content-Type'


if __name__ == '__main__':
    app.run()
