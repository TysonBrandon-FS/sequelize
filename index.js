// Load in our Express framework
const express       = require(`express`)

// Create a new Express instance called "app"
const app           = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())

const twig = require('twig')
const path = require('path')

app.set('view engine', 'twig')
app.set('views', path.join(__dirname, './views'))

// Load in our RESTful routers
const routers = require('./routers/index.js')

// Home page welcome middleware
app.get('/', (req, res) => {
  res
    .status(200)
    .send('Welcome to Star Tracker Library')
})

// Register our RESTful routers with our "app"
app.use(`/planets`,  routers.planet)
app.use(`/stars`,    routers.star)
app.use(`/galaxies`, routers.galaxy)

// Set our app to listen on port 3000
app.listen(3000)
