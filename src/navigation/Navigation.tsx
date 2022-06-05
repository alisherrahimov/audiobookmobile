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
import {NavigationContainer} from '@react-navigation/native';
import CustomBottomTabBar from './CustomBottomTab';
import {darkSchema, lightSchema, Style} from '../style/Style';
import Welcome from '../screens/auth/Welcome';
import SelectTopic from '../screens/auth/SelectTopic';
import {SvgXml} from 'react-native-svg';
import {images} from '../image/intro/images';
import Books from '../screens/Books';

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
        initialParams={{
          Icon: () => <SvgXml xml={images.home('gray')} />,
          FocusIcon: () => <SvgXml xml={images.home(Style.buttonColor)} />,
        }}
      />
      <TabNavigator.Screen
        name="Search"
        component={Search}
        options={{tabBarLabel: 'Search'}}
        initialParams={{
          Icon: () => <SvgXml xml={images.search('gray')} />,
          FocusIcon: () => <SvgXml xml={images.search(Style.buttonColor)} />,
        }}
      />
      <TabNavigator.Screen
        name="Library"
        component={Library}
        options={{tabBarLabel: 'Library'}}
        initialParams={{
          Icon: () => <SvgXml xml={images.library('gray')} />,
          FocusIcon: () => <SvgXml xml={images.library(Style.buttonColor)} />,
        }}
      />
    </TabNavigator.Navigator>
  );
};

const Navigation = () => {
  const color = useColorScheme() === 'dark';
  return (
    <NavigationContainer theme={color ? darkSchema : lightSchema}>
      <StackNavigator.Navigator
        initialRouteName="BottomTab"
        screenOptions={{headerShown: false}}>
        <StackNavigator.Screen name="BottomTab" component={BottomTab} />
        <StackNavigator.Screen name="Settings" component={Settings} />
        <StackNavigator.Screen name="User" component={User} />
        <StackNavigator.Screen name="Enter" component={Enter} />
        <StackNavigator.Screen name="Error" component={Error} />
        <StackNavigator.Screen name="Login" component={Login} />
        <StackNavigator.Screen name="Register" component={Register} />
        <StackNavigator.Screen name="Welcome" component={Welcome} />
        <StackNavigator.Screen name="SelectTopic" component={SelectTopic} />
        <StackNavigator.Screen name="Books" component={Books} />
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
