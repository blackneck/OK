import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SettingsScreen from './../components/SettingsScreen'

class SettingsContainer extends Component {
  static navigationOptions = {
    title: 'Settings'
  }

  navigateSchedule = () => {
    this.props.navigation.navigate('Schedule')
  }

  render() {
    return <SettingsScreen navigateSchedule={this.navigateSchedule} />
  }
}

SettingsContainer.propTypes = {
  navigation: PropTypes.object
}

export default SettingsContainer
