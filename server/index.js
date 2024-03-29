const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../'));
app.set('etag', 'strong');


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

