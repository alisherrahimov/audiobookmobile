import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {images} from '../../image/intro/images';
import {normalize, Style} from '../../style/Style';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
import {style} from '../../style/Index';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{width: '85%', alignSelf: 'center'}}>
        <View style={{alignSelf: 'center', marginTop: normalize(50)}}>
          <SvgXml
            xml={images.logo}
            width={normalize(100)}
            height={normalize(100)}
          />
        </View>
        <View>
          <Text style={[styles.text, {color: Style.darkColor.borderColor}]}>
            Register
          </Text>
          <View style={{marginTop: normalize(15)}}>
            <Input placeholder="Email" />
          </View>
          <View style={{marginTop: normalize(15)}}>
            <Input placeholder="Password" />
          </View>
          <View style={{marginTop: normalize(15)}}>
            <Input placeholder="Date of Birth" />
          </View>
          <View style={{marginTop: normalize(15)}}>
            <Text style={[style.text, {marginLeft: 8}]}>
              By signing up, you agree to our{' '}
              <Text
                style={[
                  style.text,
                  {color: Style.orangeColor, fontFamily: Style.fontFamily.bold},
                ]}>
                Terms, Data Policy
              </Text>{' '}
              and{' '}
              <Text
                style={[
                  style.text,
                  {color: Style.orangeColor, fontFamily: Style.fontFamily.bold},
                ]}>
                Cookies Policy
              </Text>
              .
            </Text>
          </View>
          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              color={Style.buttonColor}
              textColor={'#fff'}
              title="Register"
              height={normalize(50)}
            />
          </View>
          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              onPress={() => navigation.goBack()}
              color={'#fff'}
              textColor={Style.buttonColor}
              title="Cancel"
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

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
