var express = require('express'),
    app     = express(),
    router = express.Router(),
    lspot = require('./router/route');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS'); //could accept delete value.
  
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);

app.use('/', lspot);

app.set('port', (process.env.PORT || 9090));
app.listen(app.get('port'), function (){
  console.log('listening on port.....Everywhere you go')
});