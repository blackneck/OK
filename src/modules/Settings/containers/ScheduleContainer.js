import React, { Component } from 'react'

import ScheduleScreen from './../components/ScheduleScreen'
import {
  scheduleNotification,
  cancelNotifications
} from './../../../common/Notifications/services'
import HeaderRightButton from 'app/common/components/HeaderButtonRight'
import { frequencyValues } from 'const/time&FrequencyLabels'

class ScheduleContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Schedule Notifications',
    headerRight: (
      <HeaderRightButton
        onPress={(navigation.state.params || {}).onSave}
        label="Save"
      />
    )
  })

  state = {
    hour: 0,
    minute: 0,
    frequency: 0
  }

  componentDidMount() {
    const now = new Date()
    this.setState({
      hour: now.getHours(),
      minute: now.getMinutes(),
      frequency: frequencyValues.indexOf('day')
    })
    this.props.navigation.setParams({
      onSave: this.onSave
    })
  }

  onSave = () => {
    scheduleNotification(this.state)
    this.props.navigation.goBack()
  }

  onCancel = () => {
    cancelNotifications()
    this.props.navigation.goBack()
  }

  onHourSelected = hour => {
    this.setState({ hour })
  }

  onMinuteSelected = minute => {
    this.setState({ minute })
  }

  onFrequencySelected = frequency => {
    this.setState({ frequency })
  }

  render() {
    const { minute, hour, frequency } = this.state
    return (
      <ScheduleScreen
        onHourSelected={this.onHourSelected}
        onMinuteSelected={this.onMinuteSelected}
        onFrequencySelected={this.onFrequencySelected}
        minute={minute}
        hour={hour}
        frequency={frequency}
        onCancel={this.onCancel}
      />
    )
  }
}

export default ScheduleContainer
