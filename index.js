const express = require("express");
const app = express();
const port = process.env.PORT || 2917;
const cors = require("cors");
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    exposedHeaders: ["set-cookie"],
    withCredentials: true
};

app.use(cors(corsOptions));
app.use(cookieParser())
app.post("/login", (req, res) => {
    res.cookie('auth', 'myValue', {
        maxAge: 9000000,
        httpOnly: true,
        sameSite: 'None',
        secure: true,
        withCredentials: true,
    }).set("Access-Control-Allow-Credentials", "true").status(200).json(req.body);
});
app.get('/verify',(req, res)=>{
    const token =  "login"
    res.send({
        token,
        state: 'successs'
    })
})
app.get("/", (req, res) => {
    res.send("hello");
});
app.listen(port, () => {
    console.log(`http://192.168.0.5:${port}`);
})
