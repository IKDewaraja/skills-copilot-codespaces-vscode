// Create web server
const express = require('express');
const app = express();

// Create a new route
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});