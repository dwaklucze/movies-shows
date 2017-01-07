'use strict';
const config = require('./server/config.json');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

global.mongoose = require('mongoose');
// database connection
// mongoose.connect('mongodb://'+ config.database.pass + '@' + config.database.host);

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/css', express.static('dist/css'));
app.use('/js', express.static('dist/js'));



/* simple equivalent htaccess for angular */
app.get('/*', (req, res, next) => {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', {
        root: 'dist/templates'
    });
});


app.listen(config.port, function () {
  console.log('App listening on ', +config.port);
});
