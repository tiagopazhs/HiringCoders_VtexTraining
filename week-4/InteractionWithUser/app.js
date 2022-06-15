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

// Create a User
  //get user info
  const params = queryString.parse(url.parse(req.url, true).search);
  //save user info
  fs.writeFile('users/mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });


//Update a User
//Select a User
//Delete User

res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('helloo Word');
});

//execucao
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});