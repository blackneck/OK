import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import styles from './styles'

export default ({ onSettingsPress, onCardPress }) => (
  <View style={styles.container}>
    <TouchableHighlight
      style={styles.cardsSection}
      onPress={onCardPress}
      underlayColor="#C7E8F3"
    >
      <Text style={styles.sectionLabel}>Cards</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.settingsSection}
      onPress={onSettingsPress}
      underlayColor="#8CFBDE"
    >
      <Text style={styles.sectionLabel}>Settings</Text>
    </TouchableHighlight>
  </View>
)
