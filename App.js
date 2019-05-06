import React, { Component } from 'react'
import { StatusBar } from 'react-native'

import NotificationsManager from 'common/NotificationsManager'
import Navigator from 'app/navigation'
import { DARK_FOREGROUND } from 'common/styles/colors'

class App extends Component {
  render() {
    return (
      <NotificationsManager>
        <StatusBar barStyle="light-content" backgroundColor={DARK_FOREGROUND} />
        <Navigator />
      </NotificationsManager>
    )
  }
}

export default App
