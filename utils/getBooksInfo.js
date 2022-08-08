const request = require('request');

const getBooksInfo = (book, callback) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${process.env.KEY}`;

  request({ url, json: true }, (error, res) => {
    if (error)
      return callback(
        '<h4 class="book-wait-text">Unable to connect to book services 😔</h4>',
        undefined
      );
    if (!res)
      return callback(
        '<h4 class="book-wait-text">Unable to get book 😔</h4>',
        undefined
      );
    if (!res.body.items)
      return callback(
        '<h4 class="book-wait-text">Unable to get book 😔</h4>',
        undefined
      );
    callback(undefined, res.body.items[0].volumeInfo);
  });
};
module.exports = getBooksInfo;
