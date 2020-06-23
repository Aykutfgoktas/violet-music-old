# Violet-Music 
<img src="client/public/images/logo2.png" alt="violet-logo" title="Violet App Logo" width="150" height="150" />

Online on Heroku [Violet Music](https://violet-music.herokuapp.com/)

Violet Music is an application that user can write notes for the songs that they are currently listening on Spotify. Also users can read the notes of other people if the notes are exists on currently listening song. Application show the songs that have the notes which is written by the users.

### Technology Stack
- [NextJS](https://nextjs.org/)  
- [NestJS](https://nestjs.com/) 
- [MongoDB (Mongoose)](https://mongoosejs.com/docs/guide.html)
- [Spotify API](https://developer.spotify.com/documentation/general/guides/)
- [Semantic UI React](https://react.semantic-ui.com/)

### Instalation

Install the dependencies for the client (NextJS)

```sh
$ cd client
$ npm install
$ npm run dev
```
Install the dependencies for the server (NestJS)

Before installing dependencies you need to create .env file which should contains below variable

```sh
MONGO_URI = <Mongodb database uri>
CLIENT_ID = <Spotify client ID>
CLIENT_SECRET = <Spotify client Secret>
REDIRECT_URI = <Spotify redirect URL>
```
For more information about [Spotify API](https://developer.spotify.com/documentation/general/guides/app-settings/) 

```sh
$ cd server
$ npm install
$ npm run start:dev
```

Note: Client works on port 3000 and communicate server with port 8888. On client directory, next.config.js file server ports can be change.

# General Information About Application

### Client

Client side gets its data from Spotify API and Violet back-end (For now only getting the notes). Token for the user is gotten form url in order to use the Spotify API. Getting data operation is done SpotifyProvider which is under the client/context directory. It wraps all the component and share its state. Client side use Spotify API to get the information about users currently listening song and if user wants modify the current playing song. Creating note for the songs is done CreateNoteFormPart which is under the client/components directory and sends the post data to the Violent back-end.

### Server

Server has two module one of them is spotify-api module which redirects the user to the Spotify to login to the Spotify then after successfull login operation Spotify redirects user to Violet with users token (on URL). The other module is notes module which stores the notes to the mongodb database.

## Todos

### Server
-Chat Module
-Auth Module

### Client
-Missing Page
-Chat component





