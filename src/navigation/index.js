import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from 'modules/Home'
import Card from 'modules/Card'
import { Settings, Schedule } from 'modules/Settings'

const AppStack = createStackNavigator(
  {
    Home,
    Card,
    Settings,
    Schedule,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
)

const AppContainer = createAppContainer(AppStack)
export default AppContainer
