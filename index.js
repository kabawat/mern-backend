const express = require("express");
const app = express();
const port = process.env.PORT || 2917;
const cors = require("cors");
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: [
        "http://localhost:3000",
        "https://cookietrytwot.netlify.app"
    ],
    credentials: true,
    exposedHeaders: ["set-cookie"],
    withCredentials: true
};

app.use(cors(corsOptions));
app.post("/login", (req, res) => {
    res.cookie('myCookie', 'myValue', {
        maxAge: 9000000,
        httpOnly: true,
        sameSite: 'None',
        secure: true,
        withCredentials: true,
         credentials: "include",
    }).status(200).json(req.body);
});
app.get("/", (req, res) => {
    res.send("hello");
});
app.use(cookieParser())
app.listen(port, () => {
    console.log(`http://192.168.0.5:${port}`);
});
