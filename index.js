/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerHeadlessTask('SomeTaskHere', () => {
  console.log('hello world - received');
});

AppRegistry.registerComponent(appName, () => App);
