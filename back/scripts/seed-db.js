const fs = require('fs')

const db = require('../db')

const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n')

const arr = readFileLines('./data/names.txt');

const arrMod = arr.map((name) => {
    const data = name.split(' ')
    return { firstame: data[0] }
});

console.log(`Found ${arrMod.length} names`)

async function init() {
  const co = await db.connect()
  co.collection("names").insertMany(arrMod, function(err, res) {
    if (err) throw err;
    console.log("documents inserted");
  });
}

init()