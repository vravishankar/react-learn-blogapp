const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

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
    console.log(req.body)
})

app.listen(3000, () => {
    console.log('Server running in Port 3000')
})