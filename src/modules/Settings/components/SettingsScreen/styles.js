import { StyleSheet } from 'react-native'

import {
  DARK_BACKGROUND,
  DARK_SECTION
} from './../../../../common/styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BACKGROUND
  },
  settingsList: {
    flex: 1,
    marginTop: 70
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 30,
    paddingRight: 20,
    backgroundColor: DARK_SECTION,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#353535'
  },
  sectionLabel: { color: '#aaa', fontWeight: '500' },
  iconRight: { color: '#aaaaaa', fontSize: 17 }
})
