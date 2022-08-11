const express = require('express');
const apiRoutes = require('./api-routes')
const bodyParser = require('body-parser');
const cors = require('cors');

// Set up port
const port = 5001;

// Initialize the app
let app = express();

// Allow for cors
app.use(cors());

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Use Api routes in the App
app.use('/api', apiRoutes)

// Welcome message for default URL
app.get('/', (req, res) => {
  res.send('Welcome to the sample Api!')
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
