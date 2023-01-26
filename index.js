const express = require('express')
const app = express()
const cookies = require('cookie-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const port = process.env.PORT || 2917
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const corsOptions = {
    origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
    ],
    credentials: true,
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
    exposedHeaders: ["set-cookie"],
};
app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send('set cookie')
})

app.post('/login', (req, res) => {
    const token = jwt.sign(req.body, "Mukeshsinghkabawat@038403489384")
    res.send({
        token,
        status: true,
        data: req.body
    })
})
app.get('/verify', (req, res) => {
    try {
        const tokenStr = req
        // const token = tokenStr.split('=')

        // if (token) {
        //     console.log(token[1]);
        //     const data = jwt.verify(token[1], "Mukeshsinghkabawat@038403489384")
        res.send({
            data: tokenStr,
            status: true
        })
        // } else {
        //     throw {
        //         error: "token not found"
        //     }
        // }
    } catch (error) {
        res.send({
            error,
            status: false
        })
    }
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})