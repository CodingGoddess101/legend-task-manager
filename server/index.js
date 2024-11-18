const env = require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
const connectMongo = require('connect-mongo');

//hash lib
const bcrypt = require('bcryptjs');

//security
const expressSession = require("express-session");

//models
const task = require('./models/task.js')
const userAccount = require('./models/useraccount');
const Authentication = require('./middleware/Authentication.cjs');

const secretKey = process.env.SECRET_KEY;
const mongodbConnection = process.env.MONGODB_ACCESS;
const mongoConnect = process.env.MONGO_CONNECT;
const PORT = process.env.PORT;

//Encryption is requried to protect user and company data
//Real-time apps require encryption as security best 
// practice in the case of compromised user access

const sessionDuration = 5 * 24 * 60 * 60;
//activate middleware
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(expressSession({
    secret: secretKey,
    store: connectMongo.create({
        mongoUrl: mongoConnect,
        ttl: sessionDuration,
        autoRemove: 'native',
    }),
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        sameSite: "strict",
        httpOnly: true,
        maxAge: sessionDuration * 1000,
    },

}))


//initiate connection to perform crud ops
const database = async () => {
    try {
        mongoose.connect(mongodbConnection)
            .then(() => console.warn("Connected"))
            .catch((err) => console.warn("Failed to connect: ", err.message)
            );
        setInterval(async () => {
            await mongoose.connection.collection("sessions").deleteMany({ expires: { $lt: new Date() } });

        }, sessionDuration)
    }
    catch (err) {
        console.log(err.message);
    }
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

//create an account
app.post('/register', async (req, res) => {
    try {

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
    }
    catch (err) {
        console.log(err.message);
    }
})

//login with an existing userAccount
app.post('/login', async (req, res) => {
    //if pass in auth with cookie, redirect else stay on login page
    try {
        const { email, password } = req.body;
        const userAccountFound = await userAccount.findOne({
            email
        });

        if (userAccountFound && await bcrypt.compare(password, userAccountFound.password)) {
            //create a session to store data until the session ends when logging out
            req.session.user_id = { user_id: userAccountFound._id };

            res.status(200).render('auth-redirect.ejs');
        }
        else if (!userAccountFound) {
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

//Validates the credentials of the user id and if that use exists within the mongo database
app.get('/auth-check', Authentication, (req, res) => {
    return res.status(200).json({ message: "Authentication Successfull" });
})

//post request from login redirects users to their authenticated dashboard  
app.get('/auth-redirect', Authentication, (req, res) => {
    if (!res.status(200)) {
        return res.redirect(301, '/error');
    }
    else {
        return res.redirect(301, '/dashboard/view-tasks');
    }
});

//retrieves profile name data for the authenticated user
app.get('/dashboard/my-info', Authentication, async (req, res) => {
    try {
        const userId = req.session.user_id?.user_id
        if (!userId) {
            console.log("No user data to extract");
            return res.redirect(301, "/redirect");
        }
        else {
            const foundUser = await userAccount.find({ _id: userId })
            if (!foundUser) {
                console.log(
                    "no data to display");
            }
            return res.json(foundUser);
        }
    }
    catch (err) {
        console.warn('Something went wrong', err.message);
    }
});

//Retrieves all tasks from db created by an existing, authenticated user
app.get('/dashboard/my-tasks', Authentication, async (req, res) => {
    try {
        const foundTask = await task.find();
        if (foundTask && foundTask.length > 0) {
            return res.status(200).json(foundTask);
        }
        else {
            return res.status(200).json([])
        }
    }
    catch (err) {
        console.warn('Something went wrong', err.message);
    }
});

//fetch the selected task from multi view mode window
app.get('/dashboard/view-single-task/:id', Authentication, async (req, res) => {
    try {
        const { id } = req.params;
        const convertedId = id.replace(/"/g, "");
        const foundTask = await task.find({ _id: convertedId });
        const noData = [{ message: "No Tasks to display" }]

        if (!foundTask) {
            res.status(404).json(noData)
        }
        return res.status(200).json(foundTask)
    }
    catch (err) {
        console.warn(err.message);
    }
})

//Authenticated user may create tasks which only they can modify 
app.post('/dashboard/add-new-task', Authentication, async (req, res) => {
    try {
        const {
            taskname,
            taskdescription,
            taskstatus,
            tasktodaysdate,
            taskduedate
        } = req.body;

        const userId = req.session.user_id?.user_id;
        if (userId &&
            (
                taskname &&
                taskdescription &&
                taskstatus &&
                tasktodaysdate &&
                taskduedate
            )
        ) {
            await task.create({
                taskuserId: userId,
                taskname,
                taskdescription,
                taskstatus,
                tasktodaysdate,
                taskduedate
            })
            return res.redirect(301, '/auth-redirect')

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

//Authenticated user may update the task
app.put('/dashboard/update-task/:id', Authentication, async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "User not found" })
        }

        const { taskname,
            taskdescription,
            taskstatus,
            tasktodaysdate,
            taskduedate } = req.body;

        const updateTask = {};
        if (taskname) updateTask.taskname = taskname;
        if (taskdescription) updateTask.taskdescription = taskdescription;
        if (taskstatus) updateTask.taskstatus = taskstatus;
        if (tasktodaysdate) updateTask.tasktodaysdate = tasktodaysdate;
        if (taskduedate) updateTask.taskduedate = taskduedate;

        if (Object.keys(updateTask).length === 0) {
            return res.status(400).json({ message: "Empty fields cannot update the task information!" })
        }
        const updatedTask = await task.findByIdAndUpdate(
            { _id: id },
            {
                $set: updateTask,
            }, { new: true }
        );
        if (!updatedTask) {
            return res.status(400).json({ message: "Task Id not found" })
        }
        return res.status(200).json({ message: "Task data successfully updated!" });
    }
    catch (err) {
        return res.status(500).json({ message: "Error while attempting to update your task" })
    }
});

//Authenticated user may delete task when complete
app.delete('/dashboard/delete-task/:id', Authentication, async (req, res) => {
    try {
        const { id } = req.params;
        const foundTask = await task.findOne({ _id: id })
        if (id && foundTask) {
            await task.findByIdAndDelete({ _id: id });
            return res.status(200).json({ message: "Successfuly deleted" })
        }
        else {
            return res.status(404).json({ message: "Task not found" })
        }
    }
    catch (err) {
        console.warn('Something went wrong', err.message);
    }
});

//profile routes
//Authenticated user may view(read only) their profile data 
app.post('/login/account-recovery', async (req, res) => {
    try {
        const { username, email } = req.body;
        if (username !== undefined && email !== undefined) {
            const foundProfile = await userAccount.findOne({ username, email });
            if (foundProfile) {
                const userId = foundProfile._id;
                return res.redirect(301, `/account-update-password/${userId}`)
            }
            else {
                return res.redirect(301, "/login/account-recovery")
            }
        }
        return res.redirect(301, "/login/account-recovery");
    }
    catch (err) {
        console.log(err.message);

    }
})

//Authenticated user may view(read only) their profile data 
app.put('/account-update-password/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { password } = req.body;
        if (id === null || password === null) {
            return res.status(404).redirect(301, "/login");
        }
        else if (id === null && password === null) {
            return res.status(404).redirect(301, "/login");
        }

        if (id !== null && password !== "") {
            const foundProfile = await userAccount.findOne({ _id: id });
            const hashpassword = await bcrypt.hash(password, 10);
            if (foundProfile) {
                await userAccount.findByIdAndUpdate({ _id: id }, {
                    password: hashpassword
                }, { new: true })
                return res.status(200).json({ message: "password updated" });
            }
            else {
                return res.redirect(301, "/login");
            }
        }
    }
    catch (err) {
        console.log(err.message);

    }
})


//Authenticated user may view(read only) their profile data 
app.get('/dashboard/view-profile-data/:id', Authentication, async (req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            const foundProfile = await userAccount.find({ _id: id });
            return res.status(200).json(foundProfile);
        }
    }
    catch (err) {
        console.log(err.message);

    }
})

//Authenticated user may view(read only) their profile data 
app.put('/dashboard/update-profile-data/:id', Authentication, async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            console.log("id not found");
            res.status(404);

        }
        const { username,
            biotext,
            email,
            phonenumber,
            password,
            newpassword
        } = req.body;

        const profileUpdate = {};

        if (username) profileUpdate.username = username;
        if (biotext) profileUpdate.biotext = biotext;
        if (email) profileUpdate.email = email;
        if (phonenumber) profileUpdate.phonenumber = phonenumber;
        if (password && newpassword) {
            const user = await userAccount.findById(id);
            if (!user) {
                return res.status(404).json({ message: "Userid does not exist!" })
            }

            const validatePassword = await bcrypt.compare(password, user.password)
            if (!validatePassword) {
                return res.status(400).json({ message: "Incorrect password. Please try again..." })
            }

            profileUpdate.password = await bcrypt.hash(newpassword, 10);
        }
        else if (password || newpassword) {
            return res.status(400).json({ message: "Both fields must be filled in to validate and update your profile password!" })
        }

        if (Object.keys(profileUpdate).length === 0) {
            return res.status(400).json({ message: "Cannot update your profile with empty fields!" })
        }

        const updateProfileData = await userAccount.findByIdAndUpdate(
            { _id: id },
            { $set: profileUpdate },
            { new: true }
        )

        if (!updateProfileData) {
            return res.status(404).json({ message: "User is not found!" })
        }
        res.status(200).json({ message: "Profile data successfully updated!" })
    }
    catch (err) {
        console.log(err.message);

    }
})

//Authenticated user may view(read only) their profile data 
app.delete('/dashboard/delete-profile-data/:id', Authentication, async (req, res) => {
    try {

        const { id } = req.params;
        if (!id) {
            console.log("id not found!");

            return res.status(404).json({ message: "id not found!" });
        }
        const foundProfile = await userAccount.deleteOne({ _id: id });
        if (!foundProfile) {
            console.log("No profile found!");

            return res.status(404).json({ message: "No profile found!" })
        }

        const foundTasks = await task.find({ taskuserId: id });
        if (foundProfile && foundTasks.length === 0) {
            req.session.destroy((err) => {
                if (err) {
                    console.warn("Failed to remove session: ");
                    return res.status(500).json({ message: "Something went wrong" });
                }
            })
            await userAccount.deleteOne({ _id: id });
            return res.status(200).json({ message: "Account deleted" });
        }

        if (foundProfile && foundTasks.length > 1) {
            await task.deleteMany({ taskuserId: id });
            await userAccount.deleteOne({ _id: id })
            return res.status(200).json({ message: "Account and tasks deleted" });

        }
        else if (foundProfile && foundTasks.length === 1) {
            await task.deleteOne({ taskuserId: id });
            await userAccount.deleteOne({ _id: id });
            return res.status(200).json({ message: "Account and task deleted" });
        }
    }
    catch (err) {
        console.log(err.message);
    }
})



//logout
app.post('/dashboard/auth-log-out', Authentication, async (req, res) => {
    try {
        const userId = req.session.user_id?.user_id;

        if (!userId) {
            console.log("No user id!");
            res.redirect(301, "/redirect");
        }
        const userfound = await userAccount.findOne({ _id: userId });
        if (userfound) {
            req.session.destroy((err) => {
                if (err) {
                    console.warn("Failed to remove session: ");
                    return res.status(500).json({ error: "Failed to logout!", login: "http://localhost:5500/login" });
                }
                res.redirect(301, "/redirect");
            })
        }
        else {
            console.log("Nothing to remove");
        }
    }
    catch (err) {
        console.warn(err.message);

    }
})

//if backend route not found app searches the frontend
app.get('*', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    }
    catch (err) {
        console.log("Frontend dist may be missing or broken:\n", err.message);

    }
})

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({
        message: err.message,
    })
})

app.listen(PORT, console.warn(`http://localhost:${PORT}`));
