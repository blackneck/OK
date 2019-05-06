import React, { Component } from 'react'

import ScheduleScreen from './../components/ScheduleScreen'
import {
  scheduleNotification,
  cancelNotifications,
} from 'app/services/Scheduler'
import { FREQUENCY_VALUES } from 'common/constants/'

class ScheduleContainer extends Component {
  state = {
    hour: 0,
    minute: 0,
    frequency: 0,
  }

  componentDidMount() {
    const now = new Date()
    this.setState({
      hour: now.getHours(),
      minute: now.getMinutes(),
      frequency: FREQUENCY_VALUES.indexOf('day'),
    })
    this.props.navigation.setParams({
      onSave: this.onSave,
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

  onHourSelected = (hour) => {
    this.setState({ hour })
  }

  onMinuteSelected = (minute) => {
    this.setState({ minute })
  }

  onFrequencySelected = (frequency) => {
    this.setState({ frequency })
  }

  goBack = () => this.props.navigation.goBack()

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
        goBack={this.goBack}
      />
    )
  }
}

export default ScheduleContainer
