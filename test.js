const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express is alive!');
});

app.listen(8080, () => {
  console.log('Test server running on port 8080');
});
