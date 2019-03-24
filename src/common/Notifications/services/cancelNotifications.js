import firebase from 'react-native-firebase'

export const cancelNotifications = () => {
  firebase.notifications().cancelNotification('repeated')
}
