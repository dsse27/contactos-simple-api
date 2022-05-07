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
        if (!err)
            console.log("Conectado con exito a MongoDB Atlas!");
        else
            console.log("Error de Conexión => ", err);

        client.close();
    });
}

module.exports = {
    dbConnect
}