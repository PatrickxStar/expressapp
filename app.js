const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Logger Middleware
app.use(morgan('dev'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root GET Route
app.get('/', (req, res) => {
  res.send('Welcome to my Express server!');
});

// Root POST Route
app.post('/', (req, res) => {
  console.log('Received data:', req.body);
  res.send('POST request received');
});

// About Route
app.get('/about', (req, res) => {
  res.send('This is an Express server for the project.');
});

// Handle Non-existent Routes
app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

// Listen on Port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
