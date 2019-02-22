import firebase from 'react-native-firebase'

import { frequencyValues } from './../../constants/time&FrequencyLabels'

export const scheduleNotification = ({ hour, minute, frequency }) => {
  const date = new Date()
  date.setMinutes(minute)
  date.setHours(hour)

  const notification = new firebase.notifications.Notification()
    .setNotificationId('notificationId')
    .setBody('привет, принцесса :3')

  const channel = new firebase.notifications.Android.Channel(
    'general',
    'General Channel',
    firebase.notifications.Android.Importance.Max
  ).setDescription('general channel')
  firebase.notifications().android.createChannel(channel)

  notification.android.setChannelId('general')
  notification.setNotificationId('repeated')
  firebase.notifications().scheduleNotification(notification, {
    fireDate: date.getTime(),
    repeatInterval: frequencyValues[frequency],
    exact: true
  })
}

export const cancelNotifications = () => {
  firebase.notifications().cancelNotification('repeated')
}
