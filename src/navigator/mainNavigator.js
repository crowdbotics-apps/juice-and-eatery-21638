import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps146963Navigator from '../features/Maps146963/navigator';
import Add-Item146962Navigator from '../features/Add-Item146962/navigator';
import Maps146958Navigator from '../features/Maps146958/navigator';
import UserProfile146954Navigator from '../features/UserProfile146954/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps146963: { screen: Maps146963Navigator },
Add-Item146962: { screen: Add-Item146962Navigator },
Maps146958: { screen: Maps146958Navigator },
UserProfile146954: { screen: UserProfile146954Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
