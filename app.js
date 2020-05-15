
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// Define paths for Express config
const publicDirectoryPath = './'

// Setup handlebars engine and views location


// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('index')
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})