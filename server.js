const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + 'carstore'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + 'carstore/index.html'));

});

app.listen(process.env.PORT || 8100);