import {StyleSheet, Text, useColorScheme, View} from 'react-native';
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
import {NavigationContainer} from '@react-navigation/native';
import CustomBottomTabBar from './CustomBottomTab';
import {darkSchema, lightSchema} from '../style/Style';

const TabNavigator = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator<NavigationType>();
const BottomTab = () => {
  return (
    <TabNavigator.Navigator
      tabBar={props => <CustomBottomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <TabNavigator.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: 'Home'}}
      />
      <TabNavigator.Screen
        name="Search"
        component={Search}
        options={{tabBarLabel: 'Search'}}
      />
      <TabNavigator.Screen
        name="Library"
        component={Library}
        options={{tabBarLabel: 'Library'}}
      />
    </TabNavigator.Navigator>
  );
};

const Navigation = () => {
  const color = useColorScheme() === 'dark';
  return (
    <NavigationContainer theme={color ? darkSchema : lightSchema}>
      <StackNavigator.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <StackNavigator.Screen name="BottomTab" component={BottomTab} />
        <StackNavigator.Screen name="Settings" component={Settings} />
        <StackNavigator.Screen name="User" component={User} />
        <StackNavigator.Screen name="Enter" component={Enter} />
        <StackNavigator.Screen name="Error" component={Error} />
        <StackNavigator.Screen name="Login" component={Login} />
        <StackNavigator.Screen name="Register" component={Register} />
        <StackNavigator.Screen
          name="ConfirmationCode"
          component={ConfirmationCode}
        />
        <StackNavigator.Screen
          name="ForgetPassword"
          component={ForgetPassword}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
