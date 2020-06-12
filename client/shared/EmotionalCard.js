import React, { Component } from 'react';
import SpotifyContext from '../context/SpotifyContext';

class EmotionalCard extends Component {
  static contextType = SpotifyContext;

  playFavPart = () => {
    if (this.context) {
      this.context.playFavPart(this.props.songid, this.props.duration);
    }
  };

  isFavPartExist = () => {
    if (this.props.duration.minutes === -1 || this.props.duration.seconds === -1) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <div className='card'>
        <div className='card-text'>
          <span className='date'>{this.props.carddate}</span>
          <h2>{this.props.cardheader}</h2>
          <p>{this.props.cardbody}</p>
        </div>
        <div className='card-stats'>
          <div className='stat'>
            <div className='type'>Click headphone for listen</div>
          </div>
          <div className='stat border'>
            <button disabled={!this.isFavPartExist()} onClick={this.playFavPart} className='card-button'>
              {' '}
              <i style={this.isFavPartExist() ? { color: 'white' } : { color: '' }} className='ion-headphone icon-like' />
            </button>
          </div>
          <div className='stat'>
            <div className='type'>Written by:</div>
            <div className='value'>{this.props.writtenby}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmotionalCard;
