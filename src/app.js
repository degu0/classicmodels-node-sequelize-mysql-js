const express = require('express');

require('./config/db');

const app = express();

app.get('/',  (req, res) => {
    res.send('Seja bem-vindo(a) a API do Classic Models!');
});

app.listen(3000, () => {
    console.log('A API esta funcionando!');
});

