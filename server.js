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
