const express = require('express');
const path = require('path');
// check docs for bodyParser if issues
const bodyParser = require('body-parser');
const app = express();


app.listen(3000, function(){
  console.log('hello world');
});
app.use(express.static('public'));

var pageErr = new Error('you were warned');

app.use(logError);

function logError(err, req, res){
  console.error(pageErr);
}

app.get('/about.html', function createError(err, req,
    res, next) {
  // var err = new Error('stop doing that');
  err.status = 404;
  next(err);
});
//
app.use(function (err, req, res, next) {
  console.log(err);
  next(err);
});
