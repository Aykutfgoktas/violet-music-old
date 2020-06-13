const express = require('express');
const request = require('request');
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const { Song, Note } = require('./schemas/CardSchema');
const { validateNotesForm } = require('./helpers/formValidations');
var path = require('path');
dotenv.config();
const client_id = process.env.CLIENT_ID; // Your client id
const client_secret = process.env.CLIENT_SECRET; // Your secret
const redirect_uri = process.env.REDIRECT_URI; // Your redirect uri
var generateRandomString = function (length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

var app = express();
/************************************************************** */

/**DATABASE CONNECTION*/
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function () {
    console.log('Database connected.');
  })
  .catch((err) => console.log(err));
/**DATABASE CONNECTION END*/

const corsOptions = {
  //origin: 'http://localhost:5000',
  //optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

/** MIDDLEWARE SETUP*/
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/************************************************************** */
app
  .use(express.static(__dirname + '/public'))
  .use(cors(corsOptions))
  .use(cookieParser());

app.get('/login', function (req, res) {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);
  // your application requests authorization
  var scope = 'user-read-private user-read-playback-state user-modify-playback-state';
  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

app.get('/callback', function (req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      '/#' +
        querystring.stringify({
          error: 'state_mismatch',
        })
    );
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code',
      },
      headers: {
        Authorization: 'Basic ' + new Buffer.from(client_id + ':' + client_secret).toString('base64'),
      },
      json: true,
    };

    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token,
          refresh_token = body.refresh_token;
        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { Authorization: 'Bearer ' + access_token },
          json: true,
        };

        // use the access token to access the Spotify Web API
        request.get(options, function (error, response, body) {
          console.log(body);
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect(
          /*'http://localhost:3000/mainpage#'*/ '/violet#' +
            querystring.stringify({
              access_token: access_token,
              //refresh_token: refresh_token,
            })
        );
      } else {
        res.redirect(
          '/#' +
            querystring.stringify({
              error: 'invalid_token',
            })
        );
      }
    });
  }
});

app.get('/refresh_token', function (req, res) {
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { Authorization: 'Basic ' + new Buffer(client_id + ':' + client_secret).toString('base64') },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        access_token: access_token,
      });
    }
  });
});

app.post('/createnote', async function (req, res) {
  const errorMessages = validateNotesForm(req.body);
  const { header, body, nickname, songname, songid, bestPart, artistname, artistimage } = req.body;

  if (errorMessages.length > 0) {
    return res.json({ errorMsg: errorMessages });
  } else {
    const d = new Date();
    const newnote = new Note({
      header,
      body,
      nickname,
      date: { day: d.getDate(), month: d.getMonth() + 1, year: d.getFullYear() },
      bestPart: { minutes: bestPart.minutes, seconds: bestPart.seconds },
    });
    const existSong = await Song.find({ id: songid });
    if (existSong.length === 0) {
      let newSong = new Song({ id: songid, name: songname, artistname, artistimage, $push: { notes: newnote } });
      newSong = await newSong.addNote(newnote).save();
    } else {
      existSong[0].addNote(newnote).save();
    }
    res.status(200).json({ status: 'success', msg: 'Card has been created.' });
  }
});

app.get('/getnotes/:id', async function (req, res) {
  const notes = await Song.find({ id: req.params.id });
  res.status(200).json({ status: 'success', notes });
});

app.get('/getpopularsong', async function (req, res) {
  const popularsongs = await Song.find({}).select('id name artistimage artistname -_id').sort('-noteCount').limit(5);
  res.status(200).json({ status: 'success', popularsongs });
});

app.get('/', async function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/violet', async function (req, res) {
  res.sendFile(path.join(__dirname + '/public/mainpage.html'));
});
app.get('/privacy', async function (req, res) {
  res.sendFile(path.join(__dirname + '/public/privacy.html'));
});
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname + '/public/404.html'));
});
app.listen(process.env.PORT || 3000, '0.0.0.0', function () {
  console.log('Server is in %s mode', app.settings.env);
});
