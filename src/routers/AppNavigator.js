import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'

import HomeScreen from '../screen/HomeScreen/HomeScreen'
import ExploreScreen from '../screen/ExploreScreen/ExploreScreen'
import DetailScreen from '../screen/DetailScreen/DetailScreen'
import NavigateOnceAction from './NavigateOnceAction';
import { colors } from '../assets/colors'


const ExploreStack = StackNavigator({
    Explore: { screen: ExploreScreen },
    Detail: { screen: DetailScreen },
  },
  {
    /* Stack Configuration */
    initialRouteName: 'Explore',
    mode: 'modal',
  }
);

ExploreStack.router.getStateForAction = NavigateOnceAction(ExploreStack.router.getStateForAction);

export const MainNavigator = TabNavigator ({
        Home: { screen: HomeScreen },
        Explore: { screen: ExploreStack },
    },
    {
    initialRoute: 'Home',
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      activeTintColor: colors.tabIconActive,
      labelStyle: {
        fontSize: 12,
      },
    }
    /* Configuration */
    /* Not to preload all screens */
    // lazyLoad: true,  
    }
);