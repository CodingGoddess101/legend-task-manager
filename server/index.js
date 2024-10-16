const express = require('express');
const app = express();
const path = require('path')
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(cookieParser());
//serve react and other files
app.use(express.static(
    path.join(__dirname, '../client/dist/'))
)

app.post('/login', (req, res) => {
    //if pass in auth with cookie, redirect else stay on login page

    res.redirect(301, '/dashboard/tasks/');
})
// app.get('/dashboard/tasks/', (req, res) => {
//     res.status(200)
// })

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})
const PORT = process.env.PORT || 5500;
app.listen(PORT, console.warn(`http://localhost:${PORT}`));
