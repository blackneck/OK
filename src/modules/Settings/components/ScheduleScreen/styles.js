import { StyleSheet, Platform } from 'react-native'

import { DARK_BACKGROUND, DARK_SECTION } from 'const/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BACKGROUND
  },
  frequencyPicker: {
    flex: 1,
    ...Platform.select({ android: { marginTop: 50 } })
  },
  frequencyContainer: {
    flex: 1
  },
  timeContainer: {
    flex: 1
  },
  iosPickerItem: {
    color: '#aaa'
  },
  pickersContainer: {
    flex: 1,
    flexDirection: 'row',
    ...Platform.select({ android: { marginTop: 100 } })
  },
  timePicker: {
    flex: 1,
    height: 200
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: '#aaa'
  },
  redLabel: {
    color: '#fc3d39'
  },
  section: {
    paddingVertical: 10,
    backgroundColor: DARK_SECTION,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    ...Platform.select({
      android: { borderColor: '#353535' },
      ios: { borderColor: '#141414' }
    }),
    alignItems: 'center'
  }
})
