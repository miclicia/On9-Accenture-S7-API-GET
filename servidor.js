const express = require('express');
const app = express();
const porta = 3000;
const mulheres = require('./mulheres.json')

app.use(express.json());


app.get('/mulheres', function(requisicao, resposta){
  resposta.json(mulheres);
});

app.listen(porta, function(){
  console.log("Server running")
});


//bônus buscar apenas um ID
app.get("/mulheres/:id", (requisicao, resposta) => {
  const id = requisicao.params.id;
  const mulher = mulheres.filter((mulher) => mulher.id == id);
  if (mulher.length == 1) {
    resposta.status(200).send(mulher);
  } else {
    resposta.status(404).send("Not Found");
  }
});