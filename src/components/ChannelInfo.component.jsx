import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { css } from 'glamor';
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

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ChannelInfo extends Component {

  notify = () => toast.info('Copied to clipboard', {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    bodyClassName: css({
      fontSize: '20px',
      textAlign: 'center',
    }),
  },);

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
          <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange={false}
            draggable={false}
            pauseOnHover={false}
          />
          <div style={{ marginTop: '40px', display: 'flex'}}>
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
            <CopyToClipboard text={shareUrl} className="social">
                <button onClick={this.notify}><i className='fas fa-link link'/></button>
            </CopyToClipboard>
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
