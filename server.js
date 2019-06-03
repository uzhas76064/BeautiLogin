const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/login.html'));

app.get('/login.html', (request, response) => {
    response.sendFile(__dirname + '/login.html');
});

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.listen(3000);