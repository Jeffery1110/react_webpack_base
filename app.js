const path = require('path');
const express = require('express');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
const compress = require('compression');
const app = express();
const port = 3000;

app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist'), { maxAge: '7d' }));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Web server listening on port ${port}!`));
