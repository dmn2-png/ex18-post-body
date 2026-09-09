const express = require('express');
const app = express();
app.use(express.json());

// TODO: Adicione o middleware express.json() para parsear o body
// POST /echo → 200, devolve o mesmo JSON recebido no body
// O Content-Type da resposta deve ser application/json

app.post('/echo', (req, res) => {
    res.status(200).json(req.body);
});


app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
