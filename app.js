require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()


const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
 
//middleware
app.use(express.json())

app.get('/', (req, res)=> {
    res.send("Store Application by Smith Ringtho")
})

app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const PORT = process.env.PORT || 5050
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, ()=> {
            console.log(`Server running on port ${PORT}...`)
        })

    } catch (error) {
        console.log(error)
    }
}

start()


