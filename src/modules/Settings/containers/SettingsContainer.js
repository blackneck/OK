import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SettingsScreen from './../components/SettingsScreen'

class SettingsContainer extends Component {
  navigateToSchedule = () => {
    this.props.navigation.navigate('Schedule')
  }

  goBack = () => this.props.navigation.goBack()

  render() {
    return (
      <SettingsScreen
        navigateToSchedule={this.navigateToSchedule}
        goBack={this.goBack}
      />
    )
  }
}

SettingsContainer.propTypes = {
  navigation: PropTypes.object
}

export default SettingsContainer
