const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const users = require('./users')

const app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.validateSignIn(username, password, (result) => {
        if (result) {
            res.send('Login Success')
            console.log('Login Success')
        } else {
            res.send('Invalid User ID / Password')
            console.log('Invalid Credentials')
        }
    })
})

app.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    users.signUp(username, password, email)
})

app.listen(3000, () => {
    console.log('Server running in Port 3000')
})