/*module.exports = {
  env: {
    LOGIN: '/login',
    GET_POPULAR_SONG: '/getpopularsong',
    GET_SONG_NOTES: '/getnotes/',
    CREATE_NOTE: '/createnote',
  },
  poweredByHeader: false,
};*/

/*module.exports = {
  env: {
    LOGIN: 'http://localhost:8888/login',
    GET_POPULAR_SONG: 'http://localhost:8888/getpopularsong',
    GET_SONG_NOTES: 'http://localhost:8888/getnotes/',
    CREATE_NOTE: 'http://localhost:8888/createnote',
    GET_LIST_OF_SONGS: 'http://localhost:8888/getlistofsongs/'
  },
  poweredByHeader: false,
};*/

module.exports = {
  env: {
    LOGIN: 'http://localhost:8888/spotify-api/login',
    GET_POPULAR_SONG: 'http://localhost:8888/notes/getpopularsongs',
    GET_SONG_NOTES: 'http://localhost:8888/notes/getnotes/',
    CREATE_NOTE: 'http://localhost:8888/notes/create',
    GET_LIST_OF_SONGS: 'http://localhost:8888/notes/getlistofsongs/',
  },
  poweredByHeader: false,
};
