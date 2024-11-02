const env = require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//security
// const Frontend_Authentication = require('./middleware/Frontend-Authentication.cjs');

//models
const task = require('./models/task.js')
const userAccount = require('./models/useraccount');

const mongodbConnection = process.env.MONGODB_ACCESS;
const PORT = process.env.PORT;

//activate middleware
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//initiate connection to perform crud ops
const database = async () => {
    mongoose.connect(mongodbConnection)
        .then(() => console.warn("Connected"))
        .catch((err) => console.warn("Failed to connect: ", err.message)
        );
}
database();

//serve client and other files
app.use(express.static(
    path.join(__dirname, '../client/dist/'))
)

//Standard redirect is used when an unauthenticated user is navigating the app   
app.get('/redirect', (req, res) => {
    res.render('redirect.ejs')
})


app.get('/route/auth-check/'/*, Frontend_Authentication*/, (req, res) => {
    const userdata = req.cookies.userdata;
    if (!userdata) {
        console.log("Authentication Failed!");
        res.status(401);
        res.redirect(301, '/login')
    }
    else {
        console.log("Authentication Successfull!");
        res.status(200);
        res.redirect(301, '/user-dashboard/view-tasks');
    }
})

//create an account
app.post('/register', async (req, res) => {
    //if pass in auth with cookie, redirect else stay on login page
    const { username, biotext, email, phonenumber, password } = req.body;

    const userFound = await userAccount.findOne({
        username,
    })
    if (userFound) {
        res.render('redirect.ejs');
    }
    const hashpassword = await bcrypt.hash(password, 10);
    await userAccount.create({
        username,
        biotext,
        email,
        phonenumber,
        password: hashpassword,
    })

    res.redirect(301, '/redirect')
})

//login with an existing userAccount
app.post('/login', async (req, res) => {
    //if pass in auth with cookie, redirect else stay on login page
    try {
        const { email, password } = req.body;
        const userAccountFound = await userAccount.findOne({
            email
        })

        if (userAccountFound && await bcrypt.compare(password, userAccountFound.password)) {
            localStorage.setItem()

            res.redirect(301, '/auth-redirect');
        }
        else if (userAccountFound && await bcrypt.compare(password, userAccountFound.password) === false) {
            res.status(404);
            res.render('error.ejs', { message: "User does not exist..." });
        }
        else {
            res.status(401);
            res.render('error.ejs', { message: "Unauthorized, please sign in..." });
        }
    }
    catch (err) {
        console.warn('Something went wrong', err.message);
    }
})

//post request from login triggers to go to /user-dashboard  
app.get('/auth-redirect', (req, res) => {
    if (!res.status(200)) {
        res.redirect(301, '/error');
    }
    else {
        res.redirect(301, '/user-dashboard/view-tasks');
    }
});

//retrieves data for the authenticated user when the post request 
// from the login page is successful
const fetchAccountData = async (res, username) => {
    try {

    }
    catch (err) {
        console.warn(err.message);
    }
}

//frontend fetched user data
app.get('/my-info', async (req, res) => {
    try {
        const userdata = req.cookies.userdata;
        if (!userdata) {
            console.log("No user data to extract");
        }
        else {
            const foundUser = await userAccount.find({ username: userdata.username })
            if (!foundUser) {
                return res.json(nodata)
            }
            else {
                return res.json(foundUser);
            }
        }
    }
    catch (err) {
        console.warn('Something went wrong', err.message);
    }
});
//Find tasks from db created by an existing, authenticated user
//frontend fetches task data
app.get('/my-tasks', async (req, res) => {
    try {
        const userdata = req.cookies.userdata;

        if (!userdata) {
            res.redirect(301, '/login');
        }
        else {
            const foundTask = await task.find({ taskuserId: userdata._id });
            if (foundTask && foundTask.length > 0) {
                return res.status(200).json(foundTask);
            }
            else {
                return res.status(200).json({ message: "No Tasks to display" });
            }
        }
    }
    catch (err) {
        console.warn('Something went wrong', err.message);
    }
});

app.post('/user-dashboard/add-new-task', async (req, res) => {
    try {
        //Encryption is requried to protect 
        //user and company data
        //real world apps require this as best practice
        const {
            taskname,
            taskdescription,
            taskstatus,
            tasktodaysdate,
            taskduedate
        } = req.body;

        const userId = req.cookies.userdata._id;
        const auth_ok_user = req.cookies.userdata;
        const username = auth_ok_user ? auth_ok_user.username : null;

        if (username &&
            (taskname &&
                taskdescription &&
                taskstatus &&
                tasktodaysdate &&
                taskduedate)
        ) {

            await task.create({
                taskuserId: userId,
                taskname,
                taskdescription,
                taskstatus,
                tasktodaysdate,
                taskduedate
            })
            res.redirect(301, '/auth-redirect')

        } else {
            if (!(taskname,
                taskdescription,
                taskstatus,
                tasktodaysdate,
                taskduedate)
            ) {
                res.render('taskerror.ejs', { message: "Something went wrong while trying to create your new task..." })

            }
        }
    }
    catch (err) {
        console.warn('Something went wrong', err.message);
    }
});

app.put('/user-dashboard/update-task', (req, res) => {
    try {
        // const userData = req.cookies.userdata;
        // console.log(userData);
        // res.status(200)
    }
    catch (err) {
        console.warn('Something went wrong', err.message);
    }
});

app.delete('/user-dashboard/delete-task', (req, res) => {
    try {
        // const userData = req.cookies.userdata;
        // console.log(userData);
        // res.redirect(301, '/tasks-dashboard');
    }
    catch (err) {
        console.warn('Something went wrong', err.message);
    }
});

app.post('/user-dashboard/auth-log-out', async (req, res) => {
    try {

        const userdata = req.cookies.userdata;
        if (!userdata) {
            res.status(500);
            console.log("Log out Failed and something broke!");
            res.redirect(301, '/login');
        }
        else {
            const userfound = await userAccount.findOne({ username: userdata.username });
            if (userfound) {
                res.clearCookie(userfound._id, {
                    id: userfound._id,
                    username: userfound.username,
                    httpOnly: true,
                    secure: false,
                    sameSite: 'strict',
                })
                res.redirect(301, '/login');
            }
            else {
                console.log("Nothing to remove");
            }
        }
    }
    catch (err) {
        console.warn(err.message);

    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({
        message: err.message,
    })
})

app.listen(PORT, console.warn(`http://localhost:${PORT}`));
