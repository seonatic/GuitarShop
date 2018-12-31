let admin = (req, res, next) => {
    if (req.user.role === 0) {
        return res.send('Access not allowed, no Admin permission');
    }
    next();
}

module.exports = { admin }