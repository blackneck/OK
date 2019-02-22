import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from './../modules/Home'
import Card from './../modules/Card'
import Settings from './../modules/Settings'
import Schedule from './../modules/Settings/containers/ScheduleContainer'

import { DARK_SECTION } from 'const/colors'

const AppStack = createStackNavigator(
  {
    Settings,
    Schedule,
    Home,
    Card
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#aaa',
      headerStyle: {
        backgroundColor: DARK_SECTION
      }
    }
  }
)

const AppContainer = createAppContainer(AppStack)
export default AppContainer
