
var app, express, port, router;

express = require('express');

router = express.Router();

router.get('/', function(req, res) {
    res.send('Hello World.');   
});
app.use('/api', router);

app.use(express["static"](__dirname + '/'));