import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Navigation from './src/navigation/Navigation';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-view';
import {useTheme} from '@react-navigation/native';
StatusBar.setBackgroundColor('rgba(0,0,0,0)', true);
StatusBar.setTranslucent(true);
export const URL: string = 'http://192.168.1.2:5000/';
const client = new ApolloClient({
  uri: 'http://192.168.1.2:4000/graphql',
  cache: new InMemoryCache(),
});
const App = () => {
  const {dark} = useTheme();
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default App;
