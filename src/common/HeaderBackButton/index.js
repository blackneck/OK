import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import styles from './styles'

export default ({ goBack }) => (
  <TouchableOpacity style={styles.headerButtonLeft} onPress={goBack}>
    <Icon style={styles.headerButtonText} name="arrowleft" />
  </TouchableOpacity>
)
