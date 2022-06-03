import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Navigation from './src/navigation/Navigation';
import {StatusBar} from 'react-native';
StatusBar.setBarStyle('dark-content', true);
StatusBar.setBackgroundColor('rgba(0,0,0,0)', true);
StatusBar.setTranslucent(true);
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
