//incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');

//definicao de endereco / url
const hostname = '127.0.0.1';
const port = 3000;

//implementacao da regra de negocio / lofica de programacao
const server = http.createServer((req, res) => {

    //pegar a pergunta ns url
    const params = queryString.parse(url.parse(req.url, true).search);

    //verificar a pergunta
    let resposta;
    if(params.pergunta == 'melhor-filme'){
        resposta = 'fast and furious'
    }
    else if(params.pergunta == 'melhor-tec'){
        resposta = 'nodejs'
    }
    else {
        resposta = 'I dont know'
    }

    //retornar a resposta escolhida

    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

//execucao
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});