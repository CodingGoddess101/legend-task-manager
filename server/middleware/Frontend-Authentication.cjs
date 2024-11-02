const Frontend_Authentication = (req, res, next) => {
    // const {username,password}=req.body;
    const auth_ok_user = req.cookies.userdata;
    const username = auth_ok_user ? auth_ok_user.username : null;
    console.log(username);

    if (username) {
        res.json({ message: "Authentication successfull" })
        next();
    }
    else {
        res.json({ message: "Authentication failed" })
        res.redirect(301, '/login');
    }
}
module.exports = Frontend_Authentication;