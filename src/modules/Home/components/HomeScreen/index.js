import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import { GREEN, BLUE } from 'common/styles/colors'
import styles from './styles'

export default ({ onSettingsPress, onCardPress }) => (
  <View style={styles.container}>
    <TouchableHighlight
      style={styles.cardsSection}
      onPress={onCardPress}
      underlayColor={BLUE[0]}
    >
      <Text style={styles.sectionLabel}>Cards</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.settingsSection}
      onPress={onSettingsPress}
      underlayColor={GREEN[0]}
    >
      <Text style={styles.sectionLabel}>Settings</Text>
    </TouchableHighlight>
  </View>
)
