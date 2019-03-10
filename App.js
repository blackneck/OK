import React, { Component } from 'react'
import { StatusBar } from 'react-native'

import NotificationManager from 'modules/NotificationManager'
import Navigator from 'app/navigation'
import { DARK_FOREGROUND } from 'const/colors'

class App extends Component {
  render() {
    return (
      <NotificationManager>
        <StatusBar barStyle="light-content" backgroundColor={DARK_FOREGROUND} />
        <Navigator />
      </NotificationManager>
    )
  }
}

export default App
