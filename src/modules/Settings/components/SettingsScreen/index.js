import React from 'react'
import { View, Text, TouchableHighlight, ScrollView } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import PropTypes from 'prop-types'

import { BUTTON_UNDERLAY } from './../../../../common/styles/colors'
import styles from './styles'

const SettingsScreen = ({ navigateSchedule }) => (
  <View style={styles.container}>
    <ScrollView style={styles.settingsList}>
      <TouchableHighlight
        onPress={navigateSchedule}
        underlayColor={BUTTON_UNDERLAY}
      >
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionLabel}>Schedule Notifications</Text>
          <FontAwesome5 name="chevron-right" style={styles.iconRight} />
        </View>
      </TouchableHighlight>
    </ScrollView>
  </View>
)

SettingsScreen.propTypes = {
  navigateSchedule: PropTypes.func
}

export default SettingsScreen
