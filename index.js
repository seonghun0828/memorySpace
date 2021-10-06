const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const fs = require('fs');
app.use(cors());
app.use(express.json()); // same as body-parser.json

app.post('/book_info', (res, req) => {
  console.log(res);
  console.log(req);
});
console.log(require('./book_info'));

app.use('/api/data', (req, res) => {
  const word = req.query.query;
  const clientId = 'IbndeLcL_SuBUeSSKnlx';
  const clientSecret = 'USIUkFnmuv';
  axios
    .get('https://openapi.naver.com/v1/search/movie.json', {
      params: { query: word, display: 10 },
      headers: {
        'X-Naver-Client-Id': clientId,
        'X-Naver-Client-Secret': clientSecret,
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then(function (response) {
      const items = response.data.items;
      res.send({ items: items });
    })
    .catch(function (error) {
      console.log(error);
    });
});

const port = process.env.PORT || 5000;
app.listen(port);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
console.log(`server running at http ${port}`);
