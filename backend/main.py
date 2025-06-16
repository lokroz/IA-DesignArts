import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import replicate

app = Flask(__name__)
CORS(app)

# Initialise client replicate avec ta clé API
client = replicate.Client(api_token=os.getenv("r8_CunsiuaIdesqRN2ZUox98juTOtWIvDp26pPzX"))

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    prompt = data.get('prompt', '')
    
    # Appel au modèle Stable Diffusion via Replicate
    output = client.run(
        "stability-ai/stable-diffusion",
        input={
            "prompt": prompt,
            "width": 512,
            "height": 512,
            "num_inference_steps": 50
        }
    )
    # output est une liste d'URL, on prend la première image
    image_url = output[0]
    return jsonify({'image_url': image_url})

if __name__ == "__main__":
    app.run(debug=True)
