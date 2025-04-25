from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})


policies = []

@app.route('/', methods=['GET'])
def home():
    """
    Endpoint da raiz do servidor, retorna uma mensagem de boas-vindas.
    """
    return "Bem-vindo ao Privacy Policy Analyzer API!", 200

@app.route('/create', methods=['POST'])
def create_policy():
    """
    Endpoint para criar uma nova política. Recebe title e description no corpo da requisição.
    """
    try:
      
        data = request.get_json()

        if not data or 'title' not in data or 'description' not in data:
            return jsonify({'error': 'Os campos title e description são obrigatórios'}), 400

        policy = {
            'title': data['title'],
            'description': data['description']
        }
        policies.append(policy)

        return jsonify({'message': 'Política criada com sucesso!', 'policy': policy}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/policies', methods=['GET'])
def get_policies():
    """
    Endpoint para listar todas as políticas.
    """
    return jsonify(policies), 200

@app.route('/analyze', methods=['POST'])
def analyze_policy():
    """
    Endpoint para analisar uma política.
    Recebe uma política no corpo da requisição e retorna os resultados da análise.
    """
    try:
  
        data = request.get_json()

        if not data or 'title' not in data or 'description' not in data:
            return jsonify({'error': 'Os campos title e description são obrigatórios para análise'}), 400

        title = data['title']
        description = data['description']

 
        keywords = ['privacidade', 'dados', 'segurança', 'acesso']
        keyword_count = {keyword: description.lower().count(keyword) for keyword in keywords}

      
        score = sum(keyword_count.values())

      
        summary = description[:50] + '...' if len(description) > 50 else description

     
        analysis_result = {
            'title': title,
            'summary': summary,
            'keyword_count': keyword_count,
            'score': score,
            'recommendation': 'Aumente o uso de palavras-chave relacionadas à privacidade.' if score < 5 else 'Sua política parece bem elaborada!'
        }

        return jsonify({'message': 'Análise concluída com sucesso!', 'analysis': analysis_result}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    #Flask rodará em http://127.0.0.1:5000
    app.run(debug=True)