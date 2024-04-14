from flask import Flask,jsonify,request
app = Flask(__name__)
@app.route('/',methods=['GET'])
def user():
        return jsonify({"message":"working....."})
    
@app.route("/search", methods=["POST"])
def search():

    if request.data:
        data = request.data.decode("utf-8")  
        json_data = request.get_json()
        id_value = json_data.get("id")
        return jsonify({"received_data": json_data,"id":id_value}), 200
    else:
        return jsonify({"message": "No data received"}), 400
    
if __name__ == '__main__':
        app.run(debug=True,port=8080)