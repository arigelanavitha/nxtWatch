import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import NxtWatchContext from './Context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'

import Login from './components/Login'
import './App.css'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    savedVideos: [],
    activeRoute: 'HOME',
    save: false,
  }

  onUpdateRoute = routeId => {
    this.setState({
      activeRoute: routeId,
    })
  }

  onToggleSaveVideos = product => {
    const {savedVideos, save} = this.state
    if (save) {
      const updatedSavedItems = savedVideos.filter(
        each => each.id !== product.id,
      )
      this.setState({
        savedVideos: [...updatedSavedItems],
      })
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, product],
      }))
    }
  }

  onUpdateSave = videoDetails => {
    this.setState(
      prevState => ({
        save: !prevState.save,
      }),
      this.onToggleSaveVideos(videoDetails),
    )
  }

  onModeChange = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  render() {
    const {isDark, savedVideos, save, activeRoute} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          activeRoute,
          save,
          savedVideos,
          onUpdateSave: this.onUpdateSave,
          onModeChange: this.onModeChange,
          onUpdateRoute: this.onUpdateRoute,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
