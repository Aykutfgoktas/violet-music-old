import React, { Component } from 'react';
import SpotifyContext from './SpotifyContext';
import Spotify from 'spotify-web-api-js';
import axios from 'axios';
import Router from 'next/router';

class SpotifyProvider extends Component {
  spotifyWebApi = new Spotify();

  constructor() {
    super();
    this.state = {
      nowPlaying: { name: '', artistname: '', artistId: '', artistImg: '', songduration: 0 },
      currentNotes: [],
      popularsongs: [],
      nowPlayinLoading: true,
      userState: 'active',
      userErrorShow: false,
    };
  }

  componentDidMount() {
    const params = this.getHashParams();
    this.state = { loggedIn: params.access_token ? true : false };
    if (params.access_token) {
      this.spotifyWebApi.setAccessToken(params.access_token);
      this.getBothNotesAndNowPlaying()
        .then(() => {
          this.getPopularSong();
        })
        .catch();
    } else {
      Router.push('/');
    }
  }

  playFavPart = async (favPart, duration) => {
    if (duration.minutes === -1 || duration.seconds === -1 || duration.minutes === '' || duration.seconds === '') {
      console.log('no play');
    } else {
      const ms = duration.minutes * 60000 + duration.seconds * 1000;
      try {
        const response = await this.spotifyWebApi.play({
          uris: ['spotify:track:' + favPart],
          offset: { uri: 'spotify:track:' + favPart },
          position_ms: ms,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  getPopularSong = async () => {
    try {
      const notes = await axios.get(process.env.GET_POPULAR_SONG);
      this.setState({ popularsongs: notes.data.popularsongs });
      return notes.data.popularsongs;
    } catch (error) {
      console.log(error);
      this.setState({ popularsongs: [] });
      return [];
    }
  };

  getBothNotesAndNowPlaying = async () => {
    this.setState({ nowPlayinLoading: true });

    const nowPlaying = await this.getNowPlaying();
    const notes = await this.getCurrentSongNotes(nowPlaying.songid);
    this.setState({ nowPlayinLoading: false });
    return notes;
  };

  getNowPlaying = async () => {
    try {
      const currentSong = await this.spotifyWebApi.getMyCurrentPlaybackState();
      const currentArtist = await this.spotifyWebApi.getArtist(currentSong.item.artists[0].id);
      this.setState({
        nowPlaying: {
          name: currentSong.item.name,
          songid: currentSong.item.id,
          songduration: currentSong.item.duration_ms,
          artistname: currentSong.item.artists[0].name,
          artistId: currentSong.item.artists[0].id,
          artistPhoto: currentArtist.images[0].url,
        },
      });
      this.setState({ userState: 'active', userErrorShow: false });
      return {
        name: currentSong.item.name,
        songid: currentSong.item.id,
        songduration: currentSong.item.duration_ms,
        artistname: currentSong.item.artists[0].name,
        artistId: currentSong.item.artists[0].id,
        artistPhoto: currentArtist.images[0].url,
      };
    } catch (error) {
      if (error.status === 401) {
        this.setState({ userState: 'sessionExpired', userErrorShow: true });
        return {};
      } else {
        this.setState({ userState: 'unactive', userErrorShow: true });
        return {};
      }
    }
  };

  getCurrentSongNotes = async (songid) => {
    try {
      const notes = await axios.get(process.env.GET_SONG_NOTES + songid);
      this.setState({ currentNotes: notes.data.notes });
      return notes.data.notes;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  render() {
    return (
      <SpotifyContext.Provider
        value={{
          nowPlaying: this.state.nowPlaying,
          currentNotes: this.state.currentNotes,
          nowPlayinLoading: this.state.nowPlayinLoading,
          userState: this.state.userState,
          userErrorShow: this.state.userErrorShow,
          popularsongs: this.state.popularsongs,
          getNowPlaying: this.getNowPlaying,
          playFavPart: this.playFavPart,
          getCurrentSongNotes: this.getCurrentSongNotes,
          getBothNotesAndNowPlaying: this.getBothNotesAndNowPlaying,
        }}
      >
        {this.props.children}
      </SpotifyContext.Provider>
    );
  }
}

export default SpotifyProvider;
