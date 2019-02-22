import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { WheelPicker } from 'react-native-wheel-picker-android'
import PropTypes from 'prop-types'

import { frequencyValues, minutes, hours } from 'const/time&FrequencyLabels'
import { BUTTON_UNDERLAY } from 'const/colors'
import styles from './styles'

const scheduleScreen = ({
  onHourSelected,
  onMinuteSelected,
  onFrequencySelected,
  minute,
  hour,
  frequency,
  onCancel
}) => (
  <View style={styles.container}>
    <View style={styles.timeContainer}>
      <View style={styles.pickersContainer}>
        <WheelPicker
          isCyclic
          data={hours}
          style={styles.timePicker}
          itemStyle={styles.iosPickerItem}
          indicatorColor="#353535"
          selectedItemTextColor="#aaaaaa"
          selectedItem={hour}
          onItemSelected={onHourSelected}
        />
        <WheelPicker
          isCyclic
          data={minutes}
          style={styles.timePicker}
          itemStyle={styles.iosPickerItem}
          indicatorColor="#353535"
          selectedItemTextColor="#aaaaaa"
          selectedItem={minute}
          onItemSelected={onMinuteSelected}
        />
      </View>
    </View>
    <View style={styles.frequencyContainer}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Repeat Every</Text>
      </View>
      <WheelPicker
        data={frequencyValues}
        style={styles.frequencyPicker}
        itemStyle={styles.iosPickerItem}
        indicatorColor="#353535"
        selectedItemTextColor="#aaaaaa"
        selectedItem={frequency}
        onItemSelected={onFrequencySelected}
      />
      <TouchableHighlight
        style={styles.section}
        underlayColor={BUTTON_UNDERLAY}
        onPress={onCancel}
      >
        <Text style={[styles.sectionTitle, styles.redLabel]}>
          Cancel Notifications
        </Text>
      </TouchableHighlight>
    </View>
  </View>
)

scheduleScreen.propTypes = {
  onHourSelected: PropTypes.func,
  onMinuteSelected: PropTypes.func,
  onFrequencySelected: PropTypes.func,
  minute: PropTypes.number,
  hour: PropTypes.number,
  frequency: PropTypes.number,
  onCancel: PropTypes.func
}

export default scheduleScreen
