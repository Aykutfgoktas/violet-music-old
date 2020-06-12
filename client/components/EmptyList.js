import React, { Component } from 'react';

export class EmptyList extends Component {
  render() {
    return (
      <div className='empty-list'>
        <a
          onClick={() => {
            let offsetTop = document.getElementById('notes').offsetHeight;
            window.scrollTo({
              top: offsetTop + 150,
              behavior: 'smooth',
            });
          }}
        >
          No Notes have found write an one!
        </a>
      </div>
    );
  }
}

export default EmptyList;
