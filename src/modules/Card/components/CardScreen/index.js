import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Foundation'

import styles from './styles'

export default ({
  foreground,
  onRefresh,
  onPressOut,
  refreshPressedIn,
  onPressIn
}) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      resizeMode="contain"
      source={{ uri: foreground }}
    />
    <View style={styles.iconContainer}>
      <TouchableOpacity
        onPress={onRefresh}
        onPressOut={onPressOut}
        onPressIn={onPressIn}
      >
        <Icon
          name="refresh"
          style={refreshPressedIn ? styles.iconSmall : styles.icon}
        />
      </TouchableOpacity>
    </View>
  </View>
)
