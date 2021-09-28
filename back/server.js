const http = require('http');
const app = require('./app');
const fs = require('fs')


app.set('port', process.env.PORT || 4332)

const server = http.createServer(app);

server.listen(process.env.PORT || 4332)

  
// Creating a function which takes a file as input
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n')

const arr = readFileLines('./data/names.txt');


const arrMod = arr.map((name) => {
    const data = name.split(' ')
    return { firstame: data[0], lastname: data[1] }
});

console.log(arrMod)