if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.info(`Listening on port ${ port }...`);
});

if (process.env.APP_ENV === 'test') {
  app.get('/', (req, res, _next) => {
    res.send('Test.');
  });
}

if (process.env.APP_ENV === 'test2') {
  app.get('/', (req, res, _next) => {
    res.send('Test 2.');
  });
}
