require('dotenv').config()
const epxress = require('express')
const cors = require('cors')
const app = epxress()
const { dbConnect } = require('./config/mongo')

const PORT = process.env.PORT || 3000
app.use(cors())
app.use(epxress.json())

app.use('/api/v1', require('./app/routes'))

dbConnect()

app.listen(PORT, () => {
    console.log('API lista por el puerto ', PORT)
})