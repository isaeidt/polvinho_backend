const express = require('express');
const app = express();

app.get('/admin', function(req, res){
    res.send("Page admin");
})

app.get('/aluno', function(req, res){
    res.send("Page aluno");
})

app.get('/professor', function(req, res){
    res.send("Page professor");
})

app.listen(3000);