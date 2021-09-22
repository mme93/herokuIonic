const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/www'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '../www/index.html'));

});


app.set('port', process.env.PORT || 8100);
app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});