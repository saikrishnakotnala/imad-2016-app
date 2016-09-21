var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/bg.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bg.png'));
});
app.get('/ui/profile.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.jpg'));
});
app.get('/ui/1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1.jpg'));
});
app.get('/ui/0stars.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/ui/0stars.png'));
});
app.get('/ui/1stars.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/ui/1stars.png'));
});
app.get('/ui/2stars.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/ui/2stars.png'));
});
app.get('/ui/3stars.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/ui/3stars.png'));
});
app.get('/ui/4stars.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/ui/4stars.png'));
});
app.get('/ui/5stars.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/ui/5stars.png'));
});
app.get('/ui/borderleft.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/ui/borderleft.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
