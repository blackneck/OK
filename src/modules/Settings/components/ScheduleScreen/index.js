import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { WheelPicker } from 'react-native-wheel-picker-android'
import PropTypes from 'prop-types'

import BackButton from 'common/HeaderBackButton'
import {
  frequencyValues,
  minutes,
  hours,
} from 'app/constants/time&FrequencyLabels'
import { GREY } from 'common/styles/colors'
import styles from './styles'

const scheduleScreen = ({
  onHourSelected,
  onMinuteSelected,
  onFrequencySelected,
  minute,
  hour,
  frequency,
  onCancel,
  goBack,
}) => (
  <View style={styles.container}>
    <View style={styles.timeContainer}>
      <View style={styles.pickersContainer}>
        <WheelPicker
          isCyclic
          data={hours}
          style={styles.timePicker}
          itemStyle={styles.iosPickerItem}
          indicatorColor={GREY[2]}
          selectedItemTextColor={GREY[1]}
          selectedItem={hour}
          onItemSelected={onHourSelected}
        />
        <WheelPicker
          isCyclic
          data={minutes}
          style={styles.timePicker}
          itemStyle={styles.iosPickerItem}
          indicatorColor={GREY[2]}
          selectedItemTextColor={GREY[1]}
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
        indicatorColor={GREY[2]}
        selectedItemTextColor={GREY[1]}
        selectedItem={frequency}
        onItemSelected={onFrequencySelected}
      />
      <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
        <Text style={styles.cancelLabel}>Cancel Notifications</Text>
      </TouchableOpacity>
    </View>
    <BackButton goBack={goBack} />
  </View>
)

scheduleScreen.propTypes = {
  onHourSelected: PropTypes.func,
  onMinuteSelected: PropTypes.func,
  onFrequencySelected: PropTypes.func,
  minute: PropTypes.number,
  hour: PropTypes.number,
  frequency: PropTypes.number,
  onCancel: PropTypes.func,
}

export default scheduleScreen
