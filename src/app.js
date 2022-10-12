const express = require('express')
//importamos para manipular BD//
const db = require('./utils/database')
//importamos el model de la BD//
const initModels = require('./models/initModels')
//se importa del archivo config.js
const config = require('./config')
//se importa las rutas//
const productsRouter = require('./products/products.router')
const app = express()



const port = 9000

//!autenticacion con la base de datos sin son correctas//
db.authenticate()
    .then(() => console.log('DB Authentication Succesfully') )
    .catch((err) => console.log(err))

// //!sincronizacion con la base de datos, creando las tablas//
db.sync()
.then(() => console.log('Database synced'))
.catch((err) => console.log(err))

initModels()


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message:'OK!'})
})
//prefijo:  /products //
app.use('/products', productsRouter)

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})