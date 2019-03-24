import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const HeaderButtonRight = ({ onPress, label }) => (
  <TouchableOpacity style={styles.headerButtonContainer} onPress={onPress}>
    <Text style={styles.headerButtonLabel}>{label}</Text>
  </TouchableOpacity>
)

HeaderButtonRight.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string.isRequired
}

export default HeaderButtonRight
