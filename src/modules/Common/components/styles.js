import { StyleSheet, Platform } from 'react-native'

import { PINK_LABEL } from '../../../constants/styles/colors'

export default StyleSheet.create({
  headerButtonLeft: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 40
      },
      android: {
        top: 20
      }
    }),
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: PINK_LABEL,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8
  },
  headerButtonText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  }
})
