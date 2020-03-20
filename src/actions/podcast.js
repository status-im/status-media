import "@babel/polyfill";

export const podcastData = (category, name) => dispatch => {
  localStorage.setItem('category', category)
  localStorage.setItem('name', name)
  dispatch({
    type: 'PODCAST_DATA',
    category: category,
    name: name,
  })
}

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
    feed: ['pubDate', 'pubDate'],
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
      const pubDate = feed.pubDate

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
          description,
          pubDate
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
