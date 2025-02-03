import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

// Enable native screens for better performance
enableScreens();

AppRegistry.registerComponent(appName, () => App);
