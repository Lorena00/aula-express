const express = require('express');
const app = express();

app.get('/curso', function(req, res) {
    res.send('<ul><li>web</ul></li><ul><li>banco de dados</ul></li>');
});
app.get('/', function(req, res) {
    res.send('Alunos');
});
app.listen(3000, function() {
    console.log('esta sendo executado na porta 3000')
});