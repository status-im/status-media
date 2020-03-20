import React, { Component } from 'react'
import { connect } from 'react-redux'
import { podcasts } from '../data/podcasts'
import ProgressiveImage from 'react-progressive-image'
import { pauseAudio, skip, stopAudio } from '../actions/player'

import '../css/NowPlaying.styles.css'

class NowPlaying extends Component {
  render() {
    const { playStatus, loading } = this.props.player
    const { img, title, podcast } = this.props.player.track
    console.log(podcast)
    const podcastLoading = playStatus === 'PLAYING' && loading
    let podcastImage = ''

    if (title) {
      podcastImage = podcasts
        .filter(p => p.name === podcast)[0]
    }

    return (
      <div>
        {title ? (
          <div className={`NowPlaying-player ${this.props.theme}`}>
            <i
              onClick={this.props.stopAudio}
              className='material-icons NowPlaying-close'
            >
              close
            </i>

            <div className='NowPlaying-img-wrapper'>
              <ProgressiveImage src={img.url} placeholder={podcastImage}>
                {src => (
                  <img
                    src={src}
                    alt='podcast image'
                  />
                )}
              </ProgressiveImage>
            </div>

            <div className='NowPlaying-info'>
                <h4>{podcast.title}</h4>
            </div>
            <br/>
            <br/>

          </div>
        ) : (
          <p className='middle'>
            There is nothing playing. Go find something awesome!
          </p>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  player: state.player,
  theme: state.settings.theme
})

export default connect(
  mapStateToProps,
  { pauseAudio, skip, stopAudio }
)(NowPlaying)
