import React, { Component } from 'react';
import EmotionalCard from '../shared/EmotionalCard';
import axios from 'axios';
import SpotifyContext from '../context/SpotifyContext';
import LoadingSegment from '../shared/LoadingSegment';

class CreateNoteFormPart extends Component {
  static contextType = SpotifyContext;

  state = {
    header: '',
    minutes: -1,
    seconds: -1,
    body: '',
    nickname: '',
    headerError: false,
    bodyError: false,
    nicknameError: false,
    dimActive: false,
    favChecked: false,
    errorBoxShow: false,
    errorMsg: [],
    loadingAnimate: { transform: '' },
    responseStatus: '',
  };
  getNowDate() {
    const d = new Date();
    const date = { day: d.getDate(), month: d.getMonth() + 1, year: d.getFullYear() };
    return date.day + '/' + date.month + '/' + date.year;
  }

  getFormValue = (event) => {
    const limit = { headerLimit: 30, bodyLimit: 298, nicknameLimit: 7 };
    if (event.target.name === 'seconds') {
      if (event.target.value <= 9 && event.target.value != 0) {
        event.target.value = '0' + event.target.value;
      } else {
        event.target.value = parseInt(event.target.value, 10);
      }
    }

    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name !== 'minutes' || event.target.name !== 'seconds') {
      if (this.state[event.target.name].length > limit[event.target.name + 'Limit']) {
        this.setState({ [event.target.name + 'Error']: true });
      } else {
        this.setState({ [event.target.name + 'Error']: false });
      }
    }
  };

  favCheckAction = () => {
    this.setState((prevState) => ({ favChecked: !prevState.favChecked }));
    this.setState({ minutes: -1, seconds: -1 });
  };

  millisToMinutesAndSeconds(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    seconds = seconds < 9 ? '0' + seconds : seconds;
    return { minutes, seconds };
  }

  isEqualMs = () => {
    if (this.millisToMinutesAndSeconds(this.context.nowPlaying.songduration).minutes == this.state.minutes) {
      return this.millisToMinutesAndSeconds(this.context.nowPlaying.songduration).seconds <= this.state.seconds ? true : false;
    } else {
      return false;
    }
  };

  closeErrorBox = () => {
    this.setState({ errorMsg: [], errorBoxShow: false });
  };

  onSubmitForm = async (event) => {
    event.preventDefault();
    if (this.isEqualMs()) {
      this.setState({ errorMsg: ['Please song duration should not exeet'], errorBoxShow: true });
    } else {
      this.setState({ favChecked: false, loadingAnimate: { transform: 'rotateY(180deg)' }, responseStatus: 'creating' });

      /**
   readonly header: string;
readonly body: string;
readonly songname: string;
  readonly songid: string;
 readonly bestPart: { minutes: number, seconds: number };
readonly artistname: string;
readonly artistimage: string;
 */
      var config = { headers: { Authorization: 'bearer ' + this.context.VAC } };
      const response = await axios.post(
        process.env.CREATE_NOTE,
        {
          header: this.state.header,
          body: this.state.body,
          /**
           * TODO: DELETE NICKNAME ON REQUEST
           * */
          nickname: this.state.nickname,
          songname: this.context.nowPlaying.name,
          artistname: this.context.nowPlaying.artistname,
          songid: this.context.nowPlaying.songid,
          artistimage: this.context.nowPlaying.artistPhoto,
          bestPart: {
            minutes: this.state.favChecked ? parseInt(this.state.minutes) : -1,
            seconds: this.state.favChecked ? parseInt(this.state.seconds) : -1,
          },
        },
        config
      );
      this.setState({
        header: '',
        body: '',
        nickname: '',
        headerError: false,
        bodyError: false,
        nicknameError: false,
        minutes: -1,
        seconds: -1,
      });
      console.log(response);
      if (response.data.errorMsg) {
        setTimeout(() => {
          this.setState({ responseStatus: 'error' });
        }, 500);
      } else {
        this.setState({ errorMsg: [], errorBoxShow: false });
        if (response) {
          this.context.getCurrentSongNotes(this.context.nowPlaying.songid);

          document.getElementById('my-form').reset();

          setTimeout(() => {
            this.setState({ responseStatus: 'success' });
          }, 500);
          setTimeout(() => {
            this.setState({ loadingAnimate: { transform: '' } });
          }, 1500);
        }
      }
    }
  };

  renderResponseStatus = () => {
    if (this.state.responseStatus === 'creating') {
      return (
        <div className='flip-card-back'>
          <h1>Creating...</h1>
        </div>
      );
    }
    if (this.state.responseStatus === 'success') {
      return (
        <div className='flip-card-back-success'>
          <h1>Success...</h1>
        </div>
      );
    }
    if (this.state.responseStatus === 'error') {
      return (
        <div className='flip-card-back-error'>
          <h1>Error...</h1>
        </div>
      );
    }
  };

  render() {
    return (
      <LoadingSegment dimActive={this.state.dimActive}>
        <section className='section-steps space-theme' id='notes'>
          <div className='row'>
            <h2>Write a note for the song: {this.context.nowPlaying.name}</h2>
          </div>
          <div onClick={this.closeErrorBox} hidden={!this.state.errorBoxShow} className='row error-msg'>
            <ul className='error-list'>
              {this.state.errorMsg.map((m) => {
                return <li>{m}</li>;
              })}
            </ul>
          </div>
          <div className='row'>
            <div className='col span-1-of-2 steps-box'>
              <EmotionalCard
                cardheader={this.state.header}
                cardbody={this.state.body}
                carddate={this.getNowDate()}
                songid={this.context.nowPlaying.songid}
                writtenby={this.state.nickname}
                duration={{ minutes: this.state.minutes, seconds: this.state.seconds }}
              />
            </div>

            <div className='col span-1-of-2 steps-box2'>
              <div className='flip-card'>
                <div style={this.state.loadingAnimate} className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <form id='my-form' onSubmit={this.onSubmitForm} className='msg-form'>
                      <input
                        value={this.state.header}
                        maxLength={40}
                        minLength={5}
                        autoComplete='off'
                        onChange={this.getFormValue}
                        required
                        placeholder='Message Header'
                        name='header'
                        className='msg-input'
                      ></input>
                      <span hidden={!this.state.headerError} className='error-message'>
                        You have {40 - this.state.header.length} character left
                      </span>

                      <textarea
                        value={this.state.body}
                        maxLength={300}
                        minLength={15}
                        autoComplete='off'
                        onChange={this.getFormValue}
                        required
                        placeholder='Words you want to say'
                        name='body'
                        className='msg-textarea'
                      ></textarea>
                      <span hidden={!this.state.bodyError} className='error-message'>
                        You have {300 - this.state.body.length} character left
                      </span>
                      <input
                        minLength={3}
                        value={this.state.nickname}
                        maxLength={15}
                        autoComplete='off'
                        onChange={this.getFormValue}
                        required
                        placeholder='Any nick-name?'
                        name='nickname'
                        className='msg-input'
                      ></input>
                      <span hidden={!this.state.nicknameError} className='error-message'>
                        You have {15 - this.state.nickname.length} character left
                      </span>

                      <div className='fav-checkbox-div'>
                        <label>
                          Add Favorite Part?
                          <input onChange={this.favCheckAction} checked={this.state.favChecked} type='checkbox' />
                        </label>
                        <br />
                        <div hidden={!this.state.favChecked}>
                          Duration of the song:
                          {this.millisToMinutesAndSeconds(this.context.nowPlaying.songduration).minutes + ':' + this.millisToMinutesAndSeconds(this.context.nowPlaying.songduration).seconds}
                        </div>
                      </div>
                      <ul className='best-part'>
                        <li style={{ marginRight: '5px' }}>
                          <input
                            disabled={!this.state.favChecked}
                            min={0}
                            max={this.millisToMinutesAndSeconds(this.context.nowPlaying.songduration).minutes}
                            required={this.state.favChecked}
                            name='minutes'
                            value={this.state.minutes === -1 ? '' : this.state.minutes}
                            onChange={this.getFormValue}
                            placeholder='Minutes'
                            type='number'
                          ></input>
                        </li>
                        <li>
                          {' '}
                          <input
                            disabled={!this.state.favChecked}
                            max={60}
                            checked={this.state.favChecked}
                            min={0}
                            value={this.state.seconds === -1 ? '' : this.state.seconds}
                            required={this.state.favChecked}
                            name='seconds'
                            onChange={this.getFormValue}
                            placeholder='Seconds'
                            type='number'
                          ></input>
                        </li>
                      </ul>
                      <button className='msg-button' type='submit'>
                        Create Note
                      </button>
                    </form>
                  </div>
                  {this.renderResponseStatus()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </LoadingSegment>
    );
  }
}

export default CreateNoteFormPart;
