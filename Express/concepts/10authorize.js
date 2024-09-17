const authorize = (req, res, next) => {
    const { user } = req.query

    if(user==='priyansh') {
        req.user={ name: 'priyansh', id: 1}
        next()
    }
    else
    {
        res.status(401).send("Unauthorized")
    }
}