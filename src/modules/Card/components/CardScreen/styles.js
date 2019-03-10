import { StyleSheet } from 'react-native'

import { DARK_BACKGROUND, ORANGE_LABEL } from 'const/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BACKGROUND
  },
  image: {
    flex: 1,
    marginHorizontal: 15
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    fontSize: 70,
    color: ORANGE_LABEL
  },
  iconSmall: {
    fontSize: 60,
    color: ORANGE_LABEL
  }
})
