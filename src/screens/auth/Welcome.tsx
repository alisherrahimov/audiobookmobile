import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize, Style} from '../../style/Style';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {NavigationType} from '../../types/NavigationType';
import BackgroundImage from '../components/BackgroundImage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Welcome = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  return (
    <View style={styles.container}>
      <BackgroundImage />
      <View
        style={{
          width: '85%',
          alignSelf: 'center',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={{marginTop: normalize(60)}}>
          <View>
            <Text style={styles.welcome}>WELCOME !</Text>
          </View>
          <View>
            <Text style={styles.find}>
              Find what{'\n'}you are{'\n'}looking for
            </Text>
          </View>
          <View>
            <Text style={styles.by}>
              By personalize your account, we can help you to find what you
              like.
            </Text>
          </View>

          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              onPress={() => {
                navigation.navigate('SelectTopic');
              }}
              color={Style.buttonColor}
              textColor={'#fff'}
              title="Personalize Your Account"
              height={normalize(50)}
            />
          </View>
          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              onPress={() =>
                navigation.reset([{routes: 'BottomTab', index: 0}])
              }
              color={'#fff'}
              textColor={Style.buttonColor}
              title="Skip"
              borderColor={Style.buttonColor}
              borderWidth={1}
              height={normalize(50)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  find: {
    fontSize: Style.fontSize.xxlarge + 25,
    fontFamily: Style.fontFamily.thin,
    color: Style.buttonColor,
  },
  welcome: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.bold,
    color: Style.orangeColor,
  },
  by: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.medium,
    color: Style.buttonColor,
  },
  text: {
    fontSize: Style.fontSize.medium,
    fontFamily: Style.fontFamily.bold,
    marginLeft: 5,
  },
  forgotPassword: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.bold,
    color: Style.orangeColor,
  },
  touch: {
    width: normalize(60),
    height: normalize(50),
    borderRadius: normalize(8),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Style.buttonColor,
    borderWidth: 1,
  },
});
