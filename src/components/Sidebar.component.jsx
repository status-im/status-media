import React, { Component, Fragment } from 'react'
import { NavLink as Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Logo from '../images/symbol.png'

import '../css/Sidebar.styles.css'

class Sidebar extends Component {
  state = {
    showSidebar: false
  }

  toggleSidebar = e => {
    this.setState(prevState => ({
      showSidebar: !prevState.showSidebar
    }))
  }

  render() {
    const { theme, switchTheme } = this.props

    return (
      <Fragment>
        <div
          className={`sidebar ${theme} ${this.state.showSidebar &&
            'sidebar-out'}`}
        >
          <ul>
            <li className='sidebar-top'>
              <Link to='/'>
                <img src={Logo} alt='Status logo' />
              </Link>
            </li>
            <li className='sidebar-link'>
              <Link to='/' activeClassName='sidebar-active' exact>
                <i className='fas fa-podcast' style={{ marginRight: '30px' }}/>
                <h4>Status Podcasts</h4>
              </Link>
            </li>
            <li className='sidebar-link'>
              <Link to='/featured' activeClassName='sidebar-active' exact>
                <i className='fas fa-bullhorn' style={{ marginRight: '30px' }}/>
                <h4>Featured on</h4>
              </Link>
            </li>
            <li className='sidebar-link'>
              <Link to='/townhall' activeClassName='sidebar-active' exact>
                <i className='fas fa-users' style={{ marginRight: '30px' }}/>
                <h4>Town Hall</h4>
              </Link>
            </li>
            <li className='sidebar-link'>
              <Link to='/upload' activeClassName='sidebar-active' exact>
                <i className='fas fa-upload' style={{ marginRight: '30px' }}/>
                <h4>Upload</h4>
              </Link>
            </li>
            <li className='sidebar-link settings'>
              <Link to='/settings' activeClassName='sidebar-active' exact>
                <i className='fas fa-cog' />
                <h4>Settings</h4>
              </Link>
            </li>
          </ul>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  theme: state.settings.theme
})

export default connect(mapStateToProps)(Sidebar)
