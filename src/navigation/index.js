import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from 'modules/Home'
import Card from 'modules/Card'
import Settings from 'modules/Settings'
import Schedule from 'modules/Settings/containers/ScheduleContainer'

import { DARK_FOREGROUND, DARK_LABEL } from 'const/colors'

const AppStack = createStackNavigator(
  {
    Settings,
    Schedule,
    Home,
    Card
  },
  {
    defaultNavigationOptions: {
      headerTintColor: DARK_LABEL,
      headerStyle: {
        backgroundColor: DARK_FOREGROUND,
        borderBottomColor: '#353535'
      }
    }
  }
)

const AppContainer = createAppContainer(AppStack)
export default AppContainer
