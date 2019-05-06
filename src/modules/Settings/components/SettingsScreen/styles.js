import { StyleSheet } from 'react-native'

import { BLACK, GREY } from 'common/styles/colors'

export default StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: BLACK[0],
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
    backgroundColor: BLACK[1],
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: GREY[2],
  },
  sectionLabel: {
    color: GREY[1],
    fontSize: 17,
    fontWeight: '500',
  },
  iconRight: {
    color: GREY[1],
    fontSize: 17,
  },
})
