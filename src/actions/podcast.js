import "@babel/polyfill";

export const setLoading = () => dispatch => {
  dispatch({
    type: 'SET_LOADING'
  })
}

let Parser = require('rss-parser');
let parser = new Parser({
  maxRedirects: 100,
  customFields: {
    feed: ['description', 'description'],
  }
});

const CORS_PROXY = "https://cors-fix.status.im/";

export const fetchPodcast = url => dispatch => {
  dispatch({
    type: 'FETCH_PODCAST',
    loading: true,
    podcast: {
      title: undefined
    }
  })
  // Make GET request to Node service to parse RSS feed and send back JSON
  parser.parseURL(CORS_PROXY + url, function(err, feed) {
    if (feed) {
      const title = feed.title
      let website = feed.link
      const author = feed.itunes.author
      const episodes = feed.items
      const description = feed.description
      const img = feed.image

      if (website.substring(0,3) === 'www') {
        website = 'https://' + website;
      }

      dispatch({
        type: 'FETCH_PODCAST',
        loading: false,
        podcast: {
          img,
          title,
          author,
          website,
          episodes,
          description
        }
      })
    }
    else {
      let errorMsg =
      err.code == 'ECONNABORTED'
        ? 'Parsing the podcast is taking longer that usual'
        : 'Something went wrong. Please refresh this page'

      dispatch({
        type: 'SET_ERROR',
        error: errorMsg
      })    
    }
    })
}
