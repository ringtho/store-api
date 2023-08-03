const express = require('express')
const app = express()
require('dotenv').config()


app.use(express.json())

app.get('/', (req, res)=> {
    res.send("Store Application by Smith Ringtho")
})

const PORT = process.env.PORT || 5050
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}...`)
})