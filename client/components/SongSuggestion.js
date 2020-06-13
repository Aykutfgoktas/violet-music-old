import React, { Component } from 'react';
import SpotifyContext from '../context/SpotifyContext';
import LoadingSegment from '../shared/LoadingSegment';

class SongSuggestion extends Component {
  static contextType = SpotifyContext;

  playSong = async (songid) => {
    this.context
      .playFavPart(songid, { minutes: 0, seconds: 0 })
      .then(() => {
        this.context.getBothNotesAndNowPlaying();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderRows = () => {
    if (this.context.popularsongs.length === 5) {
      return (
        <>
          <div style={{ marginTop: '15px' }} className='row'>
            <div style={{ textAlign: 'center' }} className='col span-1-of-2 '>
              <div>
                <img
                  onClick={() => this.playSong(this.context.popularsongs[0].id)}
                  className='circle-avatar-img'
                  src={this.context.popularsongs[0].artistimage}
                />
                <p className='song-name-suggest'>{this.context.popularsongs[0].name}</p>
              </div>
            </div>
            <div style={{ textAlign: 'center' }} className='col span-1-of-2 '>
              <div>
                <img
                  onClick={() => this.playSong(this.context.popularsongs[1].id)}
                  className='circle-avatar-img'
                  src={this.context.popularsongs[1].artistimage}
                />
                <p className='song-name-suggest'>{this.context.popularsongs[1].name}</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '15px' }} className='row'>
            <div style={{ textAlign: 'center' }} className='col span-1-of-3 '>
              <div>
                <img
                  onClick={() => this.playSong(this.context.popularsongs[2].id)}
                  className='circle-avatar-img'
                  src={this.context.popularsongs[2].artistimage}
                />
                <p className='song-name-suggest'>{this.context.popularsongs[2].name}</p>
              </div>
            </div>
            <div style={{ textAlign: 'center' }} className='col span-1-of-3 '>
              <div>
                <img
                  onClick={() => this.playSong(this.context.popularsongs[3].id)}
                  className='circle-avatar-img'
                  src={this.context.popularsongs[3].artistimage}
                />
                <p className='song-name-suggest'>{this.context.popularsongs[3].name}</p>
              </div>
            </div>
            <div style={{ textAlign: 'center' }} className='col span-1-of-3 '>
              <div>
                <img
                  onClick={() => this.playSong(this.context.popularsongs[4].id)}
                  className='circle-avatar-img'
                  src={this.context.popularsongs[4].artistimage}
                />
                <p className='song-name-suggest'>{this.context.popularsongs[4].name}</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <h2>no data</h2>;
    }
  };

  render() {
    return (
      <LoadingSegment dimActive={this.context.popularsongs[0] ? false : true}>
        <section className='section-steps space-theme'>
          <div className='row'>
            {' '}
            <h2>Songs that has the most notes</h2>
          </div>
          {this.renderRows()}
        </section>
      </LoadingSegment>
    );
  }
}

export default SongSuggestion;
