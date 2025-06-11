from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/consejos')
def consejos():
    data = [
        "Desactiva las notificaciones innecesarias",
        "Elimina apps que no usas",
        "Usa herramientas de control de tiempo",
        "Haz descansos digitales",
        "Sigue contenido educativo o positivo"
    ]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
