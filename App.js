import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import firebase from 'react-native-firebase'

import Navigator from 'app/navigation'
import { DARK_FOREGROUND } from 'const/colors'

class App extends Component {
  async componentDidMount() {
    const enabled = await firebase.messaging().hasPermission()
    if (!enabled) await firebase.messaging().requestPermission()

    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        firebase.notifications().displayNotification(notification)
      })
  }

  componentWillUnmount() {
    this.notificationListener()
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor={DARK_FOREGROUND} />
        <Navigator />
      </>
    )
  }
}

export default App
