import React from 'react';
import AppContainer from './src/navigations/AppNavigation';
import { Provider } from 'react-redux';
import store  from './src/screens/store';
export default function App() {
  return (
      <Provider store={store}>
         <AppContainer />
     </Provider>
  );
}
