const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use('/static', express.static('static'));

app.post('/success.html', urlencodedParser, (request, response) => {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.sendFile(__dirname +'/success.html')
});

app.get('/login.html', (request, response) => {
    response.sendFile(__dirname + '/static/login.html');
});

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/static/index.html');
});

app.listen(3000);