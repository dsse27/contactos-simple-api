const {
    MongoClient,
    ServerApiVersion
} = require('mongodb');

const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 500
    }, (err, res) => {
        if (!err) {
            console.log('**** CONEXION CORRECTA ****')
        } else {
            console.log('***** ERROR DE CONEXION ****')
        }
    })
}

const dbConnectVersionDirecta = () => {
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