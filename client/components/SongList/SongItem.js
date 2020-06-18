import React, { Component } from 'react';
import SpotifyContext from '../../context/SpotifyContext';

class SongItem extends Component {
  static contextType = SpotifyContext;

  playSong = async (songid) => {
    this.context
      .playFavPart(songid, { minutes: 0, seconds: 0 })
      .then(() => {
        this.context.getBothNotesAndNowPlaying();
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className='row song-list'>
        <div className='img-song-part'>
          <img src={this.props.artistPhoto} />
          <p>
            {this.props.songname}/ {this.props.artistname}
          </p>
        </div>
        <div className='play-count-part'>
          <p className='note-count'>Note Count:{this.props.notecount}</p>
          <button onClick={() => this.playSong(this.props.songid)}>Play</button>
        </div>
      </div>
    );
  }
}

export default SongItem;
