/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Root from './src/Root';

AppRegistry.registerComponent(appName, () => (
  <Root>
    <App />
  </Root>
));
