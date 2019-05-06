import { StyleSheet } from 'react-native'

import {
  DARK_BACKGROUND,
  DARK_FOREGROUND,
  DARK_LABEL,
} from 'common/styles/colors'

export default StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: DARK_BACKGROUND,
  },
  settingsList: {
    flex: 1,
    marginTop: 70,
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 30,
    paddingRight: 20,
    backgroundColor: DARK_FOREGROUND,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#353535',
  },
  sectionLabel: {
    color: DARK_LABEL,
    fontSize: 17,
    fontWeight: '500',
  },
  iconRight: {
    color: DARK_LABEL,
    fontSize: 17,
  },
})
