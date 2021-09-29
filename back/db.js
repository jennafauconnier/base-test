
const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";

async function connect () {
    console.log('connecting to db')
    const dbo = await MongoClient.connect(url)
    return dbo.db('db')
}

module.exports = {
    connect,
}