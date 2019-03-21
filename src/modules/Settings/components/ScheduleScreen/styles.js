import { StyleSheet, Platform } from 'react-native'

import { DARK_BACKGROUND, DARK_FOREGROUND, DARK_LABEL } from 'app/constants/styles/colors'

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
    color: DARK_LABEL
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
    color: DARK_LABEL,
    fontWeight: '500'
  },
  section: {
    paddingVertical: 10,
    backgroundColor: DARK_FOREGROUND,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    ...Platform.select({
      android: { borderColor: '#353535' },
      ios: { borderColor: '#141414' }
    }),
    alignItems: 'center'
  },
  cancelButton: {
    paddingVertical: 10,
    alignSelf: 'center'
  },
  cancelLabel: {
    fontSize: 17,
    color: '#fc3d39'
  }
})
