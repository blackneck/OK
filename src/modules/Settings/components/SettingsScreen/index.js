import React from 'react'
import { View, Text, TouchableHighlight, ScrollView } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import PropTypes from 'prop-types'

import { GREY } from 'common/styles/colors'
import BackButton from 'common/HeaderBackButton'
import styles from './styles'

const SettingsScreen = ({ navigateToSchedule, goBack }) => (
  <View style={styles.container}>
    <ScrollView style={styles.settingsList}>
      <TouchableHighlight onPress={navigateToSchedule} underlayColor={GREY[0]}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionLabel}>Schedule Notifications</Text>
          <FontAwesome5 name="chevron-right" style={styles.iconRight} />
        </View>
      </TouchableHighlight>
    </ScrollView>
    <BackButton goBack={goBack} />
  </View>
)

SettingsScreen.propTypes = {
  navigateToSchedule: PropTypes.func,
  goBack: PropTypes.func,
}

export default SettingsScreen
