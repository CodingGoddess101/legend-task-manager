const Authentication = (req, res, next) => {
    const userId = req.session.user_id?.user_id

    if (!userId) {
        return res.status(401).json({ message: "Authentication Failed" })
    }
    else {
        next();
    }
}
module.exports = Authentication;