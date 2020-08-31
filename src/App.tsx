import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import RootNavigator from './navigators/rootNavigator';
import configureStore from './store/configureStore';

declare const global: {HermesInternal: null | {}};

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
