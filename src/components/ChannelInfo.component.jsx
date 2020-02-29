import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { podcasts } from '../data/podcasts'
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

import '../css/ChannelInfo.styles.css'

class ChannelInfo extends Component {
  render() {
    const { theme } = this.props
    const { title, description, website, author } = this.props.podcast

    const podcastTitle = 'The Status Network Podcast: ' + title
    const shareUrl = window.location.href

    return (
      <div className={`ChannelInfo ${theme}`}>
        <div className='ChannelInfo-text'>
          <h1 className='ChannelInfo-title'>{title}</h1>
          <h3 className={`ChannelInfo-author ${theme}`}>{author}</h3>
          <p>{description || 'No Description Available :('}</p>
          <a href={website} target='_blank' className='ChannelInfo-website'>
            <i className='fas fa-external-link-alt' />
            Visit website
          </a>
          <div style={{ marginTop: '30px' }}>
            <TwitterShareButton url={shareUrl} title={podcastTitle} hashtags={["ethstatus"]} className="social">
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl} title={podcastTitle} className="social">
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <RedditShareButton url={shareUrl} title={podcastTitle} className="social">
              <RedditIcon size={32} round />
            </RedditShareButton>
            <TelegramShareButton url={shareUrl} title={podcastTitle} className="social">
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <WhatsappShareButton url={shareUrl} title={podcastTitle} className="social">
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <EmailShareButton url={shareUrl} className="social">
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  theme: state.settings.theme,
  podcast: state.podcast.podcast,
  nowPlaying: state.player.track.title
})

export default connect(mapStateToProps)(ChannelInfo)
