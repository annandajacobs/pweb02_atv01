const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

let contador = 0;

app.get('/', (req, res) => {
    contador++;
    res.render('index',  {title: 'Página inicial da aplicação', contador});
})

app.get('/sobre', (req, res) => {
    contador++;
  res.render('sobre', { title: 'Sobre nós', contador});
});

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})