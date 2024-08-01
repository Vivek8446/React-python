from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.json
    # Process the data here
    return jsonify({'message': 'Data received', 'data': data}), 200

@app.route('/api/data', methods=['GET'])
def send_data():
    data = {
        'name': 'Dwayne Johnson',
        'role': 'Actor'
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
