import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink as Link, withRouter } from 'react-router-dom'

import '../css/MobileNav.styles.css'

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    const location = {
      '/': 'Home',
      '/featured': 'Featured on',
      '/nowplaying': 'Now Playing',
      '/featured': 'Featured on',
      '/settings': 'Settings'
    }

    const { podcast = 'Loading...', theme } = this.props;
    const { pathname } = this.props.location;

    const formattedPodcastName =
      podcast.length > 15 ? podcast.substring(0, 15) + '...' : podcast

    const { isToggleOn } = this.state;

    return (
      <Fragment>
        <nav className={`MobileNav-top ${theme}`}>
          <p className='MobileNav-title'>
            {location[pathname] || formattedPodcastName}
          </p>
          {pathname !== '/' && (
            <button
              className='MobileNav-back'
              onClick={() => this.props.history.goBack()}
            >
              <i className='fas fa-arrow-left' />
              Back
            </button>
          )}
        </nav>

        <nav className={`MobileNav ${theme}`}>
          <Link to='/' exact activeClassName='active-nav-item'>
            <i className='fas fa-podcast MobileNav-icon' />
          </Link>
          <Link to='/featured' activeClassName='active-nav-item'>
            <i className='fas fa-bullhorn MobileNav-icon' />
          </Link>
          <Link to='/nowplaying' activeClassName='active-nav-item'>
            <i className='fas fa-headphones-alt MobileNav-icon' />
          </Link>
          <div onClick={this.handleClick}>
            {isToggleOn ? 
            (
              <div>
                <i className='fas fa-users MobileNav-icon' />
                <div style={{ position: 'fixed', right: '20px', bottom: '60px', background: '#d6d6d6', zIndex: '10', width: '200px', height: '90px', 
                  borderRadius: '10px', fontSize: '15px', textAlign: 'center',
                }}>
                  <Link to='/townhall' activeClassName='active-nav-item'>
                    <div style={{ margin: '10px', background: 'white', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '5px' }}>
                      Townhall Meetings
                    </div>
                  </Link>
                  <Link to='/core-dev' activeClassName='active-nav-item'>
                    <div style={{ margin: '10px', background: 'white', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '5px' }}>
                      Core Dev Meetings
                    </div>
                  </Link>
                </div>
              </div>
            )
            :
            (
              <i className='fas fa-users MobileNav-icon' />
            )
            }
          </div>

          <Link to='/settings' activeClassName='active-nav-item'>
            <i className='fas fa-cog MobileNav-icon' />
          </Link>
        </nav>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  theme: state.settings.theme,
  podcast: state.podcast.podcast.title
})

export default withRouter(connect(mapStateToProps)(MobileNav))
