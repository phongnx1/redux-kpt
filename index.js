var express = require('express');
var app = express();
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/home.html');
});
