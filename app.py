from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# OpenAI API key here
openai.api_key = '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'

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=data['message'],
        temperature=0.7,
        max_tokens=150,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    return jsonify({'response': response.choices[0].text.strip()})

if __name__ == '__main__':
    app.run(debug=True)