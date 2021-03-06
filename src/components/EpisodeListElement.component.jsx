import React, { Component, Fragment } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { setAudio } from '../actions/player'
import { withRouter } from 'react-router-dom'
import { podcasts } from '../data/podcasts'

import '../css/EpisodeListElement.styles.css'

class EpisodeListElement extends Component {
  
  handleOnClick = e => {
    this.playAudio()
    if (window.innerWidth <= 600) {
      this.props.history.push('/nowplaying')
    }
    e.target.blur()
  }

  handleSetEpisode = () => {
    this.props.setEpisode(
      this.props.date,
      this.props.title,
      this.props.description
    )
  }

  playAudio = () => {
    this.props.setAudio(
      this.props.audio.replace(/http:\/\//, 'https://'),
      this.props.title,
      this.props.trackId,
      this.props.podcastImage,
      this.props.podcast
    )
  }

  formatDate = date => {
    const now = moment()
    const releaseDate = moment(date)

    return now.diff(releaseDate, 'days') > 5
      ? moment(date).format('LL')
      : moment(date).fromNow()
  }

  render() {
    const { date, title, theme, trackId, duration, nowPlayingId, podcast } = this.props
    const filteredData = podcasts.filter(element => {
      return element.creator == podcast.author
    })

    let featured = 0
    const stringToSearch = filteredData[0].featured
    // console.log(stringToSearch)
    for(let keyword of stringToSearch) {
      if (title.includes(keyword)) {
        featured = 1
        // console.log(keyword)
        break;
      }
    }

    let videoFlag = 0
    let videoURL = ''
    const videosToSearch = filteredData[0].videos
    if (videosToSearch.length !== 0) {
      for(let video of videosToSearch) {
        if (video.title === title) {
          videoFlag = 1
          videoURL = video.url
          console.log(videoURL)
          break;
        }
      }
    }

    const isPlaying = trackId === nowPlayingId
    
    const minutesLong = Math.round(
      moment.duration(duration, 'seconds').asMinutes()
    )

    return (
      <div className="episode-container">
      <div className={`EpisodeListElement ${theme}`} title={title}>
        <div
          className='EpisodeListElement-text'
          onClick={this.handleSetEpisode}
        >
          <p className='EpisodeListElement-date'>
            {this.formatDate(date)}
            <span> &#8226; </span>
            {minutesLong} mins
            <span> &#160; </span>
            { featured ? <span style={{color: '#005b96', fontWeight: 'bold'}}>Featured</span> : ''}
          </p>
          <h3 className='EpisodeListElement-title'>
            {title}
          </h3>
        </div>
        <button
          disabled={isPlaying}
          onClick={this.handleOnClick}
          className={`EpisodeListElement-play ${theme} ${isPlaying &&
            'selected'}`}
        >
          {isPlaying ? (
            <i className='material-icons'>volume_up</i>
          ) : (
            <i className='material-icons'>play_arrow</i>
          )}
        </button>
      </div>
      <div className="youtube-container">
        { videoFlag ? <a href={videoURL} target="_blank"><i className="fab fa-youtube youtube" style={{color:'#c4302b'}}></i></a> : ''}
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  nowPlayingId: state.player.track.id,
  podcastImage: state.podcast.podcast.img,
  podcast: state.podcast.podcast,
  category: state.podcast.category,
  name: state.podcast.name
})

export default withRouter(
  connect(
    mapStateToProps,
    { setAudio }
  )(EpisodeListElement)
)
