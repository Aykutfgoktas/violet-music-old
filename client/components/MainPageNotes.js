import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import EmotionalCard from '../shared/EmotionalCard';
import SpotifyContext from '../context/SpotifyContext';
class MainPageNotes extends Component {
  static contextType = SpotifyContext;

  renderCard() {
    return this.context.currentNotes.map((d) => {
      return d.notes.map((n) => {
        return (
          <span>
            <EmotionalCard
              cardheader={n.header}
              cardbody={n.body}
              carddate={n.date.day + '/' + n.date.month + '/' + n.date.year}
              writtenby={n.nickname}
              songid={this.context.nowPlaying.songid}
              duration={n.bestPart}
            />
          </span>
        );
      });
    });
  }

  render() {
    return (
      <Swiper style={{ zIndex: 0 }} width={400} centeredSlides={true} shouldSwiperUpdate>
        {this.renderCard()}
      </Swiper>
    );
  }
}

export default MainPageNotes;
