require('dotenv').config()
const express = require('express')
const cors = require('cors')
const massive = require('massive')
const session = require('express-session')
const CTRL = require('./controller')


const {
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING

} = process.env

const app = express()

app.use(express.json())
app.use(cors())
app.use(session({
    resave:false,
    saveUninitialized:true,
    secret: SESSION_SECRET,
    cookie:{
        maxAge:60000
    }
}))


massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('much data, wow.🐕')
}).catch(error => {
    console.log(error)
})

app.get('/api/house', CTRL.getHouses)

app.post('/api/home', CTRL.createHouse)

app.delete('/api/home/:id', CTRL.deleteHome)


app.listen(SERVER_PORT, () => {
    console.log('WE UP 🔥')
})