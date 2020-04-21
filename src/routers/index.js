import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

// Components
import Sidebar from '../components/Sidebar.component'
import Controls from '../components/Controls.component'
import MobileNav from '../components/MobileNav.component'
import BackButton from '../components/BackButton.component'

// Pages
import HomePage from '../pages/Home'
import Featured from '../pages/Featured'
import NotFound from '../pages/NotFound'
import SettingsPage from '../pages/Settings'
import PodcastPage from '../pages/PodcastPage'
import Townhall from '../pages/Townhall'
import DevCall from '../pages/DevCall'
import Upload from '../pages/Upload'
import NowPlayingPage from '../pages/NowPlaying'

const AppRouter = ({ theme }) => (
  <HashRouter>
    <MobileNav />
    <div className={`app-wrapper ${theme}`}>
      <div>
        <Sidebar />
      </div>
      <div className='app-wrapper-content'>
        <BackButton />
        <Controls />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/featured' exact component={Featured} />
          <Route path='/settings' exact component={SettingsPage} />
          <Route path='/nowplaying' exact component={NowPlayingPage} />
          <Route path='/townhall' exact component={Townhall} />
          <Route path='/core-dev' exact component={DevCall} />
          <Route path='/upload' exact component={Upload} />
          <Route path='/podcast/:podcast' exact component={PodcastPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </HashRouter>
)

const mapStateToProps = state => ({
  theme: state.settings.theme
})

export default connect(mapStateToProps)(AppRouter)
