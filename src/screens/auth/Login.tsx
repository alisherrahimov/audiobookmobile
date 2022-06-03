import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {images} from '../../image/intro/images';
import {normalize, Style} from '../../style/Style';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
import {style} from '../../style/Index';
import {useNavigation} from '@react-navigation/native';
import {NativeStackType} from '../../types/NavigationType';

const Login = () => {
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
            Login to Your Account
          </Text>
          <View style={{marginTop: normalize(15)}}>
            <Input placeholder="Email" />
          </View>
          <View style={{marginTop: normalize(15)}}>
            <Input placeholder="Password" />
          </View>
          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              color={Style.buttonColor}
              textColor={'#fff'}
              title="Login"
              height={normalize(50)}
            />
          </View>
          <View style={{marginTop: normalize(15), alignItems: 'flex-end'}}>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: normalize(25), alignSelf: 'center'}}>
          <Text style={[style.text, {color: Style.darkColor.borderColor}]}>
            Or login with
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: '80%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: normalize(15),
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity activeOpacity={0.8} style={styles.touch}>
              <SvgXml
                xml={images.google}
                width={normalize(30)}
                height={normalize(30)}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.touch}>
              <SvgXml
                xml={images.facebook}
                width={normalize(30)}
                height={normalize(30)}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.touch}>
              <SvgXml
                xml={images.twitter}
                width={normalize(30)}
                height={normalize(30)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: normalize(25),
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <Text style={[style.text, {color: Style.darkColor.borderColor}]}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text
              style={[
                style.text,
                {
                  color: Style.orangeColor,
                  marginLeft: normalize(5),
                  fontFamily: Style.fontFamily.bold,
                },
              ]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
