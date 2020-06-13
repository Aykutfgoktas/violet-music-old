import React, { Component } from 'react';
import EmotionalCard from '../shared/EmotionalCard';
import AppHead from '../shared/AppHead';
import AppFooter from '../shared/AppFooter';
class Index extends Component {
  state = { visible: false };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: true });
    }, 500);
  }
  render() {
    return (
      <>
        <AppHead />
        <header>
          <nav>
            <div className='row'>
              <img src='/images/logo2.png' alt='Violet Logo' className='logo' />
              <ul className='main-nav'>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='#whatis'>What is Violet ?</a>
                </li>
                <li>
                  <a href={process.env.LOGIN}>Login</a>
                </li>
             
              </ul>
            </div>
          </nav>
          <div className='hero-text-box'>
            <h1 className={this.state.visible ? 'inspiredon' : 'inspiredoff'}>Inspired by the Violet</h1>
            <a className={this.state.visible ? 'btn btn-full' : 'btn btn-full-off'} href='#writenote'>
              Write a Note!
            </a>
            <a className={this.state.visible ? 'btn btn-ghost' : 'btn btn-ghost-off'} href='#whatis'>
              What is violet ?
            </a>
          </div>
        </header>
        <section id='whatis' className='section-features'>
          <div className='row'>
            <h2>Musics & Notes</h2>
            <p className='long-copy'>
              "It is kind a diary with music and notes. Dates are the songs, diary pages are the notes but this diary, a part from the traditional diaries, is public to everyone maybe only the one
              person knows you can understand what you want to tell on the diary pages."
            </p>
          </div>

          <div className='row'>
            <div className='col span-1-of-4 box'>
              <i className='ion-log-in icon-big' />
              <h3>Login Spotify via Violet</h3>
              <p>Violet have access to what you are listen currently on Spotify and can change music when you wanted on Violet. </p>
            </div>
            <div className='col span-1-of-4 box'>
              <i className='ion-music-note icon-big' />
              <h3>Write notes</h3>
              <p>Open the song you want to listen then write a note about it or you can just read what others write about currently listening song.</p>
            </div>
            <div className='col span-1-of-4 box'>
              <i className='ion-headphone icon-big' />
              <h3>Best Part</h3>
              <p>You can share the best part of the song by specifying time ellapses or you can ask question about what is the instrument on that part.</p>
            </div>
            <div className='col span-1-of-4 box'>
              <i className='ion-heart icon-big' />
              <h3>Share with the loved ones</h3>
              <p>Share these notes to other people. </p>
            </div>
          </div>
        </section>

        <div className='ParallaxVideo'>
          <video autoPlay muted loop>
            <source src='/videos/camp.mp4' type='video/mp4' />
          </video>
          <h1>Someone To You</h1>
          <p>"I really need somebody to call my own I wanna be somebody to someone"-BANNERS</p>
        </div>

        <section className='section-steps' id='works'>
          <div id='writenote' className='row'>
            <h2>Write a Note &mdash; Simple as 1, 2, 3</h2>
          </div>
          <div className='row'>
            <div className='col span-1-of-2 steps-box'>
              <div style={{marginTop:"30px"}} className='works-step clearfix'>
                <div>1</div>
                <p>Choose the music you want to listen on Spotify something.</p>
              </div>
              <div className='works-step clearfix'>
                <div>2</div>
                <p>Then write a note about what remembers to you or how it feels.</p>
              </div>
              <div className='works-step clearfix'>
                <div>3</div>
                <p>Choose a nickname that only some people knows who you are or just made up something.</p>
              </div>
              <div className='works-step clearfix'>
                <div>4</div>
                <p>If you prefer you can specify the part of the song that has something. </p>
              </div>
            </div>
            <div className='col span-1-of-2 steps-box'>
              <EmotionalCard
                cardheader='Happy Birthday "V"'
                cardbody='Happy birthday V, one of the most supportive, energetic, beautiful people. I hope your new age will come with beauties as you smile to me. Thank you for eveything. Im glad to meet you.'
                carddate='08/06/2020'
                duration={{ minutes: -1, seconds: -1 }}
                writtenby='BraveGazelle'
              />
            </div>
          </div>
        </section>

        <AppFooter />
      </>
    );
  }
}

export default Index;
