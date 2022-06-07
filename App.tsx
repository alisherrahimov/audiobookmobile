import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Navigation from './src/navigation/Navigation';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-view';
StatusBar.setBarStyle('dark-content', true);
StatusBar.setBackgroundColor('rgba(0,0,0,0)', true);
StatusBar.setTranslucent(true);
const client = new ApolloClient({
  uri: 'http://192.168.1.5:4000/graphql',
  cache: new InMemoryCache(),
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default App;
