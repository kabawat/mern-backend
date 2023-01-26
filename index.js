const express = require("express");
const app = express();
const port = process.env.PORT || 2917;
const cors = require("cors");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const corsOptions = {
    origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
    ],
    credentials: true,
    exposedHeaders: ["set-cookie"],
};
app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send('cookie')
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
    const tokenStr = req.headers.cookie
    const token = tokenStr.split('=')
    console.log(token[1]);
    const data = jwt.verify(token[1], "Mukeshsinghkabawat@038403489384")
    res.send({
        data
    })
})
app.listen(port, () => {
    console.log(`http://192.168.0.5:${port}`);
})
