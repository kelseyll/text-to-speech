// Import app dependancies
var express = require('express'); // framework we will use for the webapp
var http = require('http'); // needed to server our webapp
var speech = require('text-to-speech-js'); //require text-to-speech-js

// initialize express
var app = express();
app.use(express.static('public')); // make files in /public available

// respond with index.html when a user performs a get request at '/'
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/:query', function(req, res) {
        var clip = TextToSpeech.talk("Hello Beautiful World!");
        if (error)
            res.send('failed');
        else
            res.send({clip: clip});
    });
});

// serves our app
var port = process.env.PORT || 3000;
app.listen(port);
