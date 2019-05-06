import React from 'react'
import { Share } from 'react-native'
// import Share from 'react-native-share'
import RNFetchBlob from 'rn-fetch-blob'

import CardScreen from './../components/CardScreen'
import getImages from './../helpers/scrapWebPage'

export default class Card extends React.Component {
  state = {
    uris: [],
    current: 0,
    refreshPressedIn: false,
  }

  refresh = () => {
    this.setState((prevState) => ({
      current: Math.floor(Math.random() * (prevState.uris.length - 0 + 1) + 0),
    }))
  }

  onPressIn = () => {
    this.setState(() => ({ refreshPressedIn: true }))
  }

  onPressOut = () => {
    this.setState(() => ({ refreshPressedIn: false }))
  }

  share = async () => {
    const res = await RNFetchBlob.fetch(
      'GET',
      this.state.uris[this.state.current],
    )

    Share.share({ url: `data:image/gif;base64,${res.base64()}` })
  }

  async componentDidMount() {
    const uris = await getImages()
    this.setState(() => ({
      uris,
    }))
  }

  goBack = () => this.props.navigation.goBack()

  render() {
    const { uris, current, refreshPressedIn } = this.state
    return (
      <CardScreen
        refreshPressedIn={refreshPressedIn}
        foreground={uris[current]}
        onRefresh={this.refresh}
        onPressOut={this.onPressOut}
        onPressIn={this.onPressIn}
        goBack={this.goBack}
        onShare={this.share}
      />
    )
  }
}
