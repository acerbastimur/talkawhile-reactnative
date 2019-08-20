import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// ignore specific yellowbox warnings
YellowBox.ignoreWarnings(["Require cycle:", "Remote debugger"]);

AppRegistry.registerComponent(appName, () => App);
