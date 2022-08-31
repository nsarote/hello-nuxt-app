const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from serverMiddleware', title: 'This is title from api hello' });
});

module.exports = app;