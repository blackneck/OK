import React, { Component } from 'react'
import { StatusBar } from 'react-native'

import NotificationsManager from 'common/NotificationsManager'
import Navigator from 'app/navigation'
import { BLACK } from 'common/styles/colors'

class App extends Component {
  render() {
    return (
      <NotificationsManager>
        <StatusBar barStyle="light-content" backgroundColor={BLACK[1]} />
        <Navigator />
      </NotificationsManager>
    )
  }
}

export default App
