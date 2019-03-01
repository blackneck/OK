import { StyleSheet } from 'react-native'

import { ORANGE_LABEL, DARK_FOREGROUND } from '../../../constants/colors'

export default StyleSheet.create({
  header: {
    backgroundColor: DARK_FOREGROUND
  },
  headerButtonContainer: {
    marginHorizontal: 20
  },
  headerButtonLabel: {
    fontSize: 17,
    color: ORANGE_LABEL
  }
})
