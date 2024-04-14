
from bs4 import BeautifulSoup
from flask import Flask,jsonify,request
from flask_cors import CORS
import requests
import pandas as pd


app = Flask(__name__)
CORS(app)

@app.route('/',methods=['GET'])
def user():
        return jsonify({"message":"working....."})
    
@app.route("/search", methods=["POST"])
def search():

    if request.data:
        data = request.data.decode("utf-8")  
        json_data = request.get_json()
        id_value = json_data.get("id")
        data = ikmam(id_value)
        data1 = reyasewana(id_value)
        return jsonify({"received_data": data + data1}), 200

    else:
        return jsonify({"message": "No data received"}), 400
    
def ikmam(text):
    r = requests.get("https://ikman.lk/en/ads?query="+text)
    soup = BeautifulSoup(r.content,'html.parser')
    ads = soup.findAll('li',class_="normal--2QYVk gtm-normal-ad")
    
    titles = []
    locatios =[]
    prices =[]
    imgs = []
    links =[]
    
    for ad in ads:
        title = ad.find('h2',class_="heading--2eONR heading-2--1OnX8 title--3yncE block--3v-Ow").text
        titles.append(title)
        
        location = ad.find('div',class_="description--2-ez3").text
        locatios.append(location)
        
        pricepart = ad.find('div',class_="price--3SnqI color--t0tGX")
        price = pricepart.find('span').text
        prices.append(price)
            
        img = ad.find('div',class_="featured-member--1CQta").find('img')['src']
        imgs.append(img)
        
        link =ad.find('a',class_="card-link--3ssYv gtm-ad-item")['href']
        links.append("https://ikman.lk"+link)
   
    datas = pd.DataFrame({"title":titles,"location":locatios,"price":prices,"img":imgs,"link":links})
        
    data_dict = datas.to_dict(orient="records")
    return data_dict

def reyasewana(text):
    
    headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Language': 'en-US,en;q=0.9',
    'Connection': 'keep-alive',
    'Referer': 'https://www.google.com/'
    }

    with requests.Session() as session:
        session.headers.update(headers)
        res = session.get("https://riyasewana.com/search/"+text)

    soup = BeautifulSoup(res.content,'html.parser')
    ads = soup.findAll('li',class_="item round")
    
    titles = []
    locatios =[]
    prices =[]
    imgs = []
    links =[]
    
    
    for ad in ads:
        title = ad.find('h2',class_="more").find('a').text
        titles.append(title)
    
        location = ad.find('div',class_="boxtext").find('div',class_="boxintxt").text
        locatios.append(location)
        
        price = ad.find('div',class_="boxtext").find('div',class_="boxintxt b").text
        prices.append(price)
        
        img = ad.find('div',class_="imgbox").find('img')['src']
        imgs.append("https:"+img)
        
        link =ad.find('div',class_="imgbox").find('a')['href']
        links.append(link)
        
    datas = pd.DataFrame({"title":titles,"location":locatios,"price":prices,"img":imgs,"link":links})
            
    data_dict = datas.to_dict(orient="records")
    return data_dict
        
    
      
if __name__ == '__main__':
        app.run(debug=True)
        
        
