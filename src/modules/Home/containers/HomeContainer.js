import React from 'react'

import HomeScreen from './../components/HomeScreen'

export default class Home extends React.Component {
  onSettingsPress = () => {
    this.props.navigation.navigate('Settings')
  }

  onCardPress = () => {
    this.props.navigation.navigate('Card')
  }

  render() {
    return (
      <HomeScreen
        onSettingsPress={this.onSettingsPress}
        onCardPress={this.onCardPress}
      />
    )
  }
}
