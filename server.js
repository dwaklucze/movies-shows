'use strict';
const config = require('./server/config.json'),
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  http = require('http'),
  url = require('url'),
  API_PATH = 'www.omdbapi.com';

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/css', express.static('dist/css'));
app.use('/js', express.static('dist/js'));
app.use('/images', express.static('src/images'));
app.use('/templates', express.static('dist/templates')); //this is served only to prevent multiload index.html as it may cause digest on non-found template

/* simple equivalent htaccess for angular */
app.get('/*', (req, res, next) => {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('index.html', {
    root: 'dist/templates'
  });
});


app.listen(config.port, function() {
  console.log('App listening on ', +config.port);
});
