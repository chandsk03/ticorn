from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/play')  
def play():
    return render_template('player.html')

@app.route('/report')  
def report():
    return render_template('Report.html')

@app.route('/info')  
def info():
    return render_template('SiteInfo.html')

@app.route('/Request_Upload')  
def Request_Upload():
    return render_template('video.html')

@app.route('/request')  
def request():
    return render_template('request/1.html')

@app.route('/upload')  
def upload():
    return render_template('upload/1.html')

@app.route('/Cheating')  
def cheating():
    return render_template('cheating/1.html')

@app.route('/Indian')
def indian():
    return render_template('indian/1.html')

@app.route('/College')  
def college():
    return render_template('college/1.html')


if __name__ == '__main__':
    app.run(debug=True)
