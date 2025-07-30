from flask import Flask, jsonify, request
from flask_cors import CORS
import sys
import ast


app = Flask(__name__)
CORS(app)  # 允許跨域請求

if __name__ == '__main__':
    app.run(debug=True, port=5000)