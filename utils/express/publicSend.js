module.exports = {
    root: (req, res) => {
        const title = req.app.locals.title? req.app.locals.title: 'uknown'
        const serverStartTime = req.app.locals.startTime? req.app.locals.startTime: 'unknown'
        res.send(`<h1>${title}n</h1><p>Start Time: ${serverStartTime}</p>`)
    }
}