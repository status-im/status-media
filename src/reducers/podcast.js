const podcastState = {
  podcast: {
    img: '',
    title: '',
    author: '',
    website: '',
    episodes: [],
    description: ''
  },
  error: '',
  loading: true,
  category: localStorage.getItem('category') || '',
  name: localStorage.getItem('name') || ''
}

const podcastReducer = (state = podcastState, action) => {
  switch (action.type) {
    case 'FETCH_PODCAST':
      return {
        ...state,
        loading: action.loading,
        podcast: {
          ...state.podcast,
          ...action.podcast
        }
      }
    case 'PODCAST_DATA':
      return {
        ...state,
        category: action.category,
        name: action.name
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.error
      }
    case 'SET_LOADING':
      return {
        ...state,
        error: '',
        loading: true
      }
    default:
      return state
  }
}

export default podcastReducer
