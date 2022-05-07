const {
    MongoClient,
    ServerApiVersion
} = require('mongodb');

const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.DB_URI

    const client = new MongoClient(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    });
    client.connect(err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        console.log("Conectado con exito!");
        client.close();
    });
}

module.exports = {
    dbConnect
}