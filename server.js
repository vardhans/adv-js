const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(__dirname));

app.listen(3000, () => console.log('Example app listening on port 3000!'));