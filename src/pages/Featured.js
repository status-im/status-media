import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ProgressiveImage from 'react-progressive-image'
import { podcasts, categories } from '../data/podcasts'
import { switchDisplay } from '../actions/settings'
import { podcastData } from '../actions/podcast'

import '../css/HomePage.styles.css'

class Featured extends Component {

  handlePodcastData(podcast){
    this.props.podcastData(podcast.category, podcast.name )
  }

  displayGrid = () => {
    const list = []
    podcasts.map((podcast) => {
      if (podcast.category === 'featured') {
        list.push(podcast)
      }
    })

    const gridPodcasts = list.map(podcast => 
      {
        return(
          <Link
            key={podcast.name}
            className="Home-podcast"
            to={`/podcast/${podcast.name.replace(/ /g, '_')}`}
          >
            <div onClick={() => this.handlePodcastData(podcast)}>
              <ProgressiveImage
                src={podcast.img.replace(/100x100/g, '360x360')}
                placeholder={podcast.img.replace(/100x100/g, '30x30')}
              >
                {src => <img src={src} alt="podcast cover" />}
              </ProgressiveImage>

              <h3 className="Home-podcast-title">
                {podcast.name.length > 20
                  ? podcast.name.substring(0, 20) + '...'
                  : podcast.name}
              </h3>
              <h3 className="Home-podcast-creator">
                  {podcast.creator}
              </h3>
            </div>
          </Link>
      )})

    return (
      <Fragment>
        {gridPodcasts}
      </Fragment>
    )
  }

  sortByCategory = () => {
    return categories.map(category => {
      const categoryPodcasts = podcasts
        .filter(podcast => podcast.category === category.category)
        .map(podcast => (
          <Link
            key={podcast.name}
            className="Home-podcast"
            to={`/podcast/${podcast.name.replace(/ /g, '_')}`}
          >
            <div>
              <ProgressiveImage
                src={podcast.img.replace(/100x100/g, '360x360')}
                placeholder={podcast.img.replace(/100x100/g, '30x30')}
              >
                {src => <img src={src} alt="podcast cover" />}
              </ProgressiveImage>

              <h3 className="Home-podcast-title">
                {podcast.name.length > 20
                  ? podcast.name.substring(0, 20) + '...'
                  : podcast.name}
              </h3>
              <h3 className="Home-podcast-creator">
                {podcast.creator}
              </h3>
            </div>
          </Link>
        ))
      return (
        <section key={category.category} className="Home-category">
          <h2 className="Home-category-title">{category.display}</h2>
          <p className="Home-category-subtitle">{category.subtitle}</p>
          <div className="Home-podcasts">{categoryPodcasts}</div>
        </section>
      )
    })
  }

  render() {
    const { theme, display, switchDisplay } = this.props

    return (
      <div className={`Home ${theme}`}>
        <div className="Home-banner">
          <h1 className="home-title">Status featured on</h1>
        </div>
        <div className="grid">{this.displayGrid()}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  theme: state.settings.theme,
  display: state.settings.display,
})

export default connect(
  mapStateToProps,
  { switchDisplay, podcastData }
)(Featured)
