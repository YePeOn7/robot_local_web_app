from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS
import os
import subprocess

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Define the folder to save uploaded files
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/', methods=['GET'])
def ping():
    return jsonify({'message': 'Server is running'}), 200

@app.route('/api/upgradeFirmware', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file:
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        try:
            subprocess.run(
                ['st-flash', '--reset', 'write', filepath, '0x08000000'],
                check=True,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE
            )
            os.remove(filepath)
            return jsonify({'message': 'File successfully uploaded and flashed'}), 200
        except subprocess.CalledProcessError as e:
            os.remove(filepath)
            return jsonify({'error': f"Failed to flash the file: {e.stderr.decode('utf-8')}"}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
