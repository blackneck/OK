import { StyleSheet } from 'react-native'
import { DARK_BACKGROUND, DARK_LABEL } from 'app/constants/styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BACKGROUND
  },
  cardsSection: {
    flex: 1,
    backgroundColor: '#593f62'
  },
  settingsSection: {
    flex: 1,
    backgroundColor: '#7b6d8d'
  },
  sectionLabel: {
    textAlign: 'right',
    textAlignVertical: 'center',
    color: DARK_LABEL,
    fontWeight: 'bold',
    fontSize: 150,
    lineHeight: 150
  }
})
