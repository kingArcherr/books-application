const path = require('path');
const express = require('express');
const getBooksInfo = require('./utils/getBooksInfo');

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, './public');

app.use(express.static(publicDirectoryPath));

app.get('/books', (req, res) => {
  if (!req.query.book) return res.send({ error: 'Please provide a book' });

  getBooksInfo(req.query.book, (error, bookInfo) => {
    if (error) return res.send({ error });

    res.status(200).send({ bookInfo });
  });
});

app.listen(port, () => {
  console.log('GOD IS THE GREATEST');
});
