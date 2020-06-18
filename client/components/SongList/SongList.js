import React, { Component } from 'react';
import SpotifyContext from '../../context/SpotifyContext';
import SongItem from './SongItem';
import Pagination from './Pagination';
export class SongList extends Component {
  static contextType = SpotifyContext;

  renderItem = () => {
    return this.context.listOfSongs.map((item) => {
      return (
        <SongItem
          key={item.name + item.artistname}
          artistPhoto={item.artistimage}
          artistname={item.artistname}
          songname={item.name}
          songid={item.id}
          notecount={item.noteCount}
        />
      );
    });
  };

  render() {
    return (
     
        <div className='song-list-wrapper'>
          <h2> Songs that have notes</h2>
          {this.renderItem()}
          <Pagination />
        </div>
     
    );
  }
}

export default SongList;
