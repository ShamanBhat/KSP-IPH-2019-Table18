import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import {  createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SaveImageScreen from '../screens/SaveImageScreen';
import CaptureImageScreen from '../screens/CaptureImageScreen';
import SignInScreen from '../screens/SignInScreen';

const ScreenNavigator = createStackNavigator(
    {
        
        SignInScreen : SignInScreen,
        CaptureImageScreen : CaptureImageScreen,
        SaveImageScreen : SaveImageScreen
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
      }
    }
  );

  export default createAppContainer(ScreenNavigator);