export const showVolume = () => dispatch => {
  dispatch({
    type: 'SHOW_VOLUME'
  })
}

export const hideVolume = () => dispatch => {
  dispatch({
    type: 'HIDE_VOLUME'
  })
}

export const handleFinishedPlaying = () => dispatch => {
  dispatch({
    type: 'HANDLE_FINISHED_PLAYING'
  })
}

export const stopAudio = () => dispatch => {
  dispatch({
    type: 'STOP_AUDIO'
  })
}

export const setLoading = value => dispatch => {
  dispatch({
    type: 'SET_PLAYER_LOADING',
    loading: value
  })
}

export const setAudio = (audio, title, id, img, podcast) => dispatch => {
  dispatch({
    type: 'SET_AUDIO',
    title: title,
    src: audio,
    id: id,
    img: img,
    podcast: podcast
  })
}

export const skip = value => (dispatch, getState) => {
  const state = getState()

  if (state.player.position > 0) {
    dispatch({
      type: 'SKIP',
      position: (state.player.position += value)
    })
  }
}

export const setVolume = value => (dispatch, getState) => {
  const state = getState()
  const prevVolume = state.player.volume

  if (state.player.volume + value < 0 || state.player.volume + value > 100)
    return

  dispatch({
    type: 'SET_VOLUME',
    volume: prevVolume + value
  })
}
