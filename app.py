__author__ = 'JJ'


from flask import Flask, request
from hebrew import *

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, world!"

@app.route('/encode', methods=["GET", "POST"])
def encode():
    return encode_hebrew_numeral(int(request.args['input'].decode()))

@app.route('/decode', methods=["GET", "POST"])
def decode():
    return str(decode_hebrew_numeral(request.args['input']))


if __name__ == '__main__':
    app.debug = True
    app.run()