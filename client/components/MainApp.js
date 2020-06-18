import React, { Component } from 'react';
import MainPageNotes from './MainPageNotes';
import CreateNoteFormPart from './CreateNoteFormPart';
import EmptyList from './EmptyList';
import SpotifyContext from '../context/SpotifyContext';
import LoadingSegment from '../shared/LoadingSegment';
import ErrorModal from './ErrorModal';
import SongSuggestion from './SongSuggestion';
import SongList from './SongList/SongList';
class MainApp extends Component {
  static contextType = SpotifyContext;

  renderNotesOrNot = () => {
    if (!this.context.currentNotes || this.context.currentNotes.length === 0) {
      return <EmptyList />;
    } else {
      return <MainPageNotes />;
    }
  };

  getNowPlaying = async () => {
    this.context.getBothNotesAndNowPlaying();
  };

  render() {
    return (
      <>
        <LoadingSegment dimActive={this.context.nowPlayinLoading}>
          <div className='main-app'>
            <div className='row'>
              <h1 className='now-playing'>Now Playing: {this.context.nowPlaying.name}</h1>
            </div>
            <div className='row'>
              <ul className='app-nav'>
                <li>
                  <div style={{ display: 'inline', textAlign: 'center' }}>
                    <img className='square-avatar-img' src={this.context.nowPlaying.artistPhoto} />
                    <p className='album-name'>{this.context.nowPlaying.artistname}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className='row'>{this.renderNotesOrNot()}</div>
            <div className='row get-current-btn'>
              <button onClick={this.getNowPlaying}>Refresh Current Song</button>
            </div>
          </div>
        </LoadingSegment>
        <CreateNoteFormPart />

        <div className='image-paralax'>
          <ErrorModal visible={this.context.userErrorShow} />
          <h1>One more light</h1>
          <p>"Who cares If one more light goes on"-Chester Bennington</p>
        </div>
        <SongSuggestion />

        <LoadingSegment dimActive={this.context.listOfSongsLoading}>
          <SongList />
        </LoadingSegment>
      </>
    );
  }
}

export default MainApp;
