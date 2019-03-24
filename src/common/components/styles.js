import { StyleSheet } from 'react-native'

import { ORANGE_LABEL, DARK_SECTION } from './../../common/styles/colors'

export default StyleSheet.create({
  header: {
    backgroundColor: DARK_SECTION
  },
  headerButtonContainer: {
    marginHorizontal: 20
  },
  headerButtonLabel: {
    fontSize: 17,
    fontWeight: '900',
    color: ORANGE_LABEL
  }
})
