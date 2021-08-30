const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.listen(2100, () =>{ console.log('Webpack practice running on port 2100'); });