import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  onModeChange: () => {},
  savedVideos: [],
  onUpdateSave: () => {},
  activeRoute: 'home',
  onUpdateRoute: () => {},
})
export default NxtWatchContext
