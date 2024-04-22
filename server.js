const express = require('express')
const { engine } = require('express-handlebars')

const app = express()
const PORT = process.env.PORT || 3333

const routes = require('./routes')

// Create a GET route for every file in public
app.use(express.static('public'))

// Setup handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Load all routes
app.use('/', routes)

// Start listening / Crank up the server or get it running
app.listen(PORT, () => console.log('Server listening on port', PORT))