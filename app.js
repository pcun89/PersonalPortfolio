const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public'));

// Add your routes here

// Add the error handling middleware at the end, after all your routes
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});