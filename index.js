const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());
app.use('/app/data', (req, res) => {
  const word = req.query.query;
  axios
    .get('https://openapi.naver.com/v1/search/movie.json', {
      params: { query: word, display: 20 },
      headers: {
        'X-Naver-Client-Id': ID_KEY,
        'X-Naver-Client-Secret': SECRET_KEY,
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
  console.log(word, 'siba');
});
console.log('michin');

// app.use('/api/data', (req, res) => {
//   res.json({ items: 'mola' });
// });

const port = process.env.PORT || 5000;
app.listen(port);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
console.log(`server running at http ${port}`);
