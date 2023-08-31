const express = require('express');

require('./config/db');

const app = express();
const router = require('./routes');

app.get('/',  (req, res) => {
    res.send('Seja bem-vindo(a) a API do Classic Models!');
});

app.use(express.json());

app.use('/api/v1', router);

app.listen(3000, () => {
    console.log('A API esta funcionando!');
});

