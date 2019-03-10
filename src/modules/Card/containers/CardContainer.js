import React from 'react'

import CardScreen from './../components/CardScreen'
import { getImages } from 'app/services/Scrapper'

export default class Card extends React.Component {
  state = {
    uris: [],
    current: 0,
    refreshPressedIn: false
  }

  onRefresh = () => {
    this.setState(prevState => ({
      current: prevState.current + 1
    }))
  }

  onPressIn = () => {
    this.setState(() => ({ refreshPressedIn: true }))
  }

  onPressOut = () => {
    this.setState(() => ({ refreshPressedIn: false }))
  }

  async componentDidMount() {
    const uris = await getImages()
    this.setState(() => ({
      uris
    }))
  }

  render() {
    const { uris, current, refreshPressedIn } = this.state
    return (
      <CardScreen
        refreshPressedIn={refreshPressedIn}
        foreground={uris[current]}
        onRefresh={this.onRefresh}
        onPressOut={this.onPressOut}
        onPressIn={this.onPressIn}
      />
    )
  }
}
