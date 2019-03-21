import { Component } from 'react'
import firebase from 'react-native-firebase'

export default class NotificationManager extends Component {
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
    return this.props.children
  }
}
