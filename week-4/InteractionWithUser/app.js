//incluindo uma biblioteca
const http = require('http');
const queryString = require('query-string');
const url = require('url');
const fs = require('fs');

//definicao de endereco / url
const hostname = '127.0.0.1';
const port = 3000;

//implementacao da regra de negocio / lofica de programacao
const server = http.createServer((req, res) => {

  var answer;
  const urlparse = url.parse(req.url, true);
  console.log(urlparse);

  //get user info
  const params = queryString.parse(url.parse(req.url, true).search);

  // Create a User AND Update a User
  if(urlparse.pathname == '/criar-usuario'){
    
    //save user info
    fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

    answer = 'User created with success :)'
  }
  //Select a User
  else if(urlparse.pathname == '/selecionar-usuario'){
    fs.readFile('users/' + params.id + '.txt', function (err, data) {
      answer = data;
      console.log(answer);
    })
  };

//Delete User

res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(answer);
});

//execucao
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});