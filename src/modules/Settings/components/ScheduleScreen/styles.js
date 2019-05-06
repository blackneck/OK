import { StyleSheet, Platform } from 'react-native'

import { BLACK, GREY, DANGER } from 'common/styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK[1],
  },
  frequencyPicker: {
    flex: 1,
    ...Platform.select({ android: { marginTop: 50 } }),
  },
  frequencyContainer: {
    flex: 1,
  },
  timeContainer: {
    flex: 1,
  },
  iosPickerItem: {
    color: GREY[1],
  },
  pickersContainer: {
    flex: 1,
    flexDirection: 'row',
    ...Platform.select({ android: { marginTop: 100 } }),
  },
  timePicker: {
    flex: 1,
    height: 200,
  },
  sectionTitle: {
    fontSize: 17,
    color: GREY[1],
    fontWeight: '500',
  },
  section: {
    paddingVertical: 10,
    backgroundColor: BLACK[1],
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    ...Platform.select({
      android: { borderColor: GREY[2] },
      ios: { borderColor: BLACK[2] },
    }),
    alignItems: 'center',
  },
  cancelButton: {
    paddingVertical: 10,
    alignSelf: 'center',
  },
  cancelLabel: {
    fontSize: 17,
    color: DANGER,
  },
})
