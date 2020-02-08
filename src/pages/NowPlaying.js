import React, { Component } from 'react'
import Sound from 'react-sound'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { podcasts } from '../data/podcasts'
import Loader from '../components/Loader.component'
import ProgressiveImage from 'react-progressive-image'
import ProgressBar from '../components/ProgressBar.component'
import { pauseAudio, skip, stopAudio } from '../actions/player'

import '../css/NowPlaying.styles.css'

class NowPlaying extends Component {
  render() {
    const { playStatus, loading } = this.props.player
    const { img, title, podcast } = this.props.player.track
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
              <ProgressiveImage src={img} placeholder={podcastImage}>
                {src => (
                  <img
                    src={src}
                    alt='podcast image'
                  />
                )}
              </ProgressiveImage>
            </div>

            <div className='NowPlaying-info'>
              <Link to={`/podcast/${podcast.replace(/ /g, '_')}`}>
                <h4>{podcast}</h4>
              </Link>
            </div>


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
