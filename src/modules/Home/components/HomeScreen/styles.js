import { StyleSheet } from 'react-native'
import { BLACK, GREY, PURPLE } from 'common/styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK[0],
  },
  cardsSection: {
    flex: 1,
    backgroundColor: PURPLE[0],
  },
  settingsSection: {
    flex: 1,
    backgroundColor: PURPLE[1],
  },
  sectionLabel: {
    textAlign: 'right',
    textAlignVertical: 'center',
    color: GREY[1],
    fontWeight: 'bold',
    fontSize: 150,
    lineHeight: 150,
  },
})
