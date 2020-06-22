import React, { Component } from 'react';
import SpotifyContext from '../../context/SpotifyContext';
class Pagination extends Component {
  static contextType = SpotifyContext;
  state = { activeItem: 1, pageon: '', btn1: true };

  onClickHandler = async (page) => {
    if (this.state.activeItem !== page) {
      this.setState({ [this.state.pageon]: false, ['btn' + page]: true, ['btn' + this.state.activeItem]: false, pageon: 'btn' + page, activeItem: page });
      const response = await this.context.getListOfSongs(page);
    }
  };

  onClickNext = async () => {
    if (this.state.activeItem < this.context.pageListOfSongs) {
      const newPage = this.state.activeItem + 1;
      this.setState(
        {
          [this.state.pageon]: false,
          ['btn' + this.state.activeItem]: false,
          activeItem: newPage,
          ['btn' + newPage]: true,
          pageon: 'btn' + newPage,
        },
        async () => {
          const response = await this.context.getListOfSongs(this.state.activeItem);
        }
      );
    }
  };

  onClickPrev = async () => {
    if (this.state.activeItem !== 1) {
      const newPage = this.state.activeItem - 1;
      this.setState(
        {
          [this.state.pageon]: false,
          ['btn' + this.state.activeItem]: false,
          activeItem: newPage,
          ['btn' + newPage]: true,
          pageon: 'btn' + newPage,
        },
        async () => {
          const response = await this.context.getListOfSongs(this.state.activeItem);
        }
      );
    }
  };

  renderPageButton = () => {
    const btnarray = [];
    for (let i = 1; i <= this.context.pageListOfSongs; i++) {
      btnarray.push(
        <button
          key={i}
          onClick={() => {
            this.onClickHandler(i);
          }}
          className={this.state['btn' + i] ? 'active' : ''}
        >
          {i}
        </button>
      );
    }
    return btnarray;
  };

  render() {
    return (
      <div className='row'>
        <div className='pagination'>
          <button
            onClick={() => {
              this.onClickPrev();
            }}
          >
            &laquo;
          </button>
          {this.renderPageButton()}
          <button
            onClick={() => {
              this.onClickNext();
            }}
          >
            &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default Pagination;
