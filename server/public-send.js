module.exports = {
    root: (req, res) => {
        const serverStartTime = req.app.locals.startTime? req.app.locals.startTime: 'unknown'
        res.send(`<h1>DoveUI Server Production</h1><p>Start Time: ${serverStartTime}</p>`)
    }
}