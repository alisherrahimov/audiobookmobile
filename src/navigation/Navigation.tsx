import {StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/tabs/Home';
import Search from '../screens/tabs/Search';
import Library from '../screens/tabs/Library';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import User from '../screens/User';
import Enter from '../screens/Enter';
import Error from '../screens/Error';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ConfirmationCode from '../screens/auth/ConfirmationCode';
import ForgetPassword from '../screens/auth/ForgetPassword';
import {NavigationType} from '../types/NavigationType';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import CustomBottomTabBar from './CustomBottomTab';
import {AppTheme, darkSchema, lightSchema, Style} from '../style/Style';
import Welcome from '../screens/auth/Welcome';
import SelectTopic from '../screens/auth/SelectTopic';
import {SvgXml} from 'react-native-svg';
import {images} from '../image/intro/images';
import Books from '../screens/Books';
import BookDetails from '../screens/BookDetails';
import UserActive from '../screens/auth/UserActive';
import Book from '../screens/Book';

const TabNavigator = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator<NavigationType>();
const BottomTab = () => {
  const {dark} = useTheme() as AppTheme;
  return (
    <TabNavigator.Navigator
      tabBar={props => <CustomBottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <TabNavigator.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{tabBarLabel: 'Home'}}
        initialParams={{
          Icon: () => <SvgXml xml={images.home('gray')} />,
          FocusIcon: () => (
            <SvgXml xml={dark ? images.home('#fff') : images.home('#4838D1')} />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{tabBarLabel: 'Search'}}
        initialParams={{
          Icon: () => <SvgXml xml={images.search('gray')} />,
          FocusIcon: () => (
            <SvgXml
              xml={dark ? images.search('#fff') : images.search('#4838D1')}
            />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Library"
        component={LibraryStackNavigator}
        options={{tabBarLabel: 'Library'}}
        initialParams={{
          Icon: () => <SvgXml xml={images.library('gray')} />,
          FocusIcon: () => (
            <SvgXml
              xml={dark ? images.library('#fff') : images.library('#4838D1')}
            />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <StackNavigator.Screen name="Home" component={Home} />
      <StackNavigator.Screen name="Books" component={Books} />
      <StackNavigator.Screen name="BookDetails" component={BookDetails} />
      <StackNavigator.Screen name="Settings" component={Settings} />
      <StackNavigator.Screen name="User" component={User} />
      <StackNavigator.Screen name="Error" component={Error} />
      <StackNavigator.Screen name="Book" component={Book} />
    </StackNavigator.Navigator>
  );
};
const SearchStackNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Search">
      <StackNavigator.Screen name="Search" component={Search} />
      <StackNavigator.Screen name="Books" component={Books} />
      <StackNavigator.Screen name="BookDetails" component={BookDetails} />
      <StackNavigator.Screen name="Settings" component={Settings} />
      <StackNavigator.Screen name="User" component={User} />
      <StackNavigator.Screen name="Error" component={Error} />
    </StackNavigator.Navigator>
  );
};
const LibraryStackNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Library">
      <StackNavigator.Screen name="Library" component={Library} />
      <StackNavigator.Screen name="Books" component={Books} />
      <StackNavigator.Screen name="BookDetails" component={BookDetails} />
      <StackNavigator.Screen name="Settings" component={Settings} />
      <StackNavigator.Screen name="User" component={User} />
      <StackNavigator.Screen name="Error" component={Error} />
    </StackNavigator.Navigator>
  );
};
const AuthStackNavigator = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName="Enter"
      screenOptions={{headerShown: false}}>
      <StackNavigator.Screen name="Enter" component={Enter} />
      <StackNavigator.Screen name="Login" component={Login} />
      <StackNavigator.Screen name="Register" component={Register} />
      <StackNavigator.Screen
        name="ConfirmationCode"
        component={ConfirmationCode}
      />
      <StackNavigator.Screen name="ForgetPassword" component={ForgetPassword} />
      <StackNavigator.Screen name="Welcome" component={Welcome} />
      <StackNavigator.Screen name="SelectTopic" component={SelectTopic} />
      <StackNavigator.Screen name="Error" component={Error} />
      <StackNavigator.Screen name="UserActive" component={UserActive} />
    </StackNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="BottomTab">
      <StackNavigator.Screen
        name="AuthNavigator"
        component={AuthStackNavigator}
      />
      <StackNavigator.Screen name="BottomTab" component={BottomTab} />
    </StackNavigator.Navigator>
  );
};
const Navigation = () => {
  const color = useColorScheme() === 'dark';
  return (
    <NavigationContainer theme={color ? darkSchema : lightSchema}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
