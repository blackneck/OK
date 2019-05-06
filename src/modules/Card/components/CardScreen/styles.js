import { StyleSheet } from 'react-native'

import { BLACK, ORANGE } from 'common/styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK[0],
    paddingTop: 40,
  },
  image: {
    flex: 1,
    marginHorizontal: 15,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 70,
    color: ORANGE[0],
  },
  iconSmall: {
    fontSize: 60,
    color: ORANGE[0],
  },
})
