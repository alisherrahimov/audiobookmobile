import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {images} from '../../image/intro/images';
import {AppTheme, normalize, Style} from '../../style/Style';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
import {style} from '../../style/Index';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../../types/NavigationType';
import {useRegisterMutation} from '../../generated/graphql';

const Register = () => {
  const {colors, dark} = useTheme() as AppTheme;
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const [register, {loading}] = useRegisterMutation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [date, setDate] = React.useState('');
  const [username, setUsername] = React.useState('');

  const _postData = async () => {
    try {
      const {data} = await register({
        variables: {
          email: email,
          password: password,
          date: date,
          username: username,
        },
      });
      if (data?.register?.error) {
        Alert.alert('ERROR', JSON.stringify(data?.register?.message));
      } else {
        navigation.navigate('UserActive', {email: email});
      }
    } catch (error) {
      Alert.alert('ERROR', JSON.stringify(error));
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={{width: '85%', alignSelf: 'center'}}>
        <View style={{alignSelf: 'center', marginTop: normalize(50)}}>
          <SvgXml
            xml={images.logo}
            width={normalize(100)}
            height={normalize(100)}
          />
        </View>
        <View>
          <Text style={[styles.text, {color: colors.text}]}>Register</Text>
          <View style={{marginTop: normalize(15)}}>
            <View>
              <TextInput
                selectionColor={Style.buttonColor}
                placeholder={'Username'}
                onChangeText={text => setUsername(text)}
                placeholderTextColor={Style.placeholderColor}
                style={[
                  styles.input,
                  {
                    backgroundColor: dark
                      ? Style.darkTextInputColor
                      : '#F5F5FA',
                    color: dark ? '#fff' : Style.darkColor.borderColor,
                  },
                ]}
              />
            </View>
          </View>
          <View style={{marginTop: normalize(15)}}>
            <View>
              <TextInput
                selectionColor={Style.buttonColor}
                placeholder={'Email'}
                onChangeText={text => setEmail(text)}
                placeholderTextColor={Style.placeholderColor}
                style={[
                  styles.input,
                  {
                    backgroundColor: dark
                      ? Style.darkTextInputColor
                      : '#F5F5FA',
                    color: dark ? '#fff' : Style.darkColor.borderColor,
                  },
                ]}
              />
            </View>
          </View>
          <View style={{marginTop: normalize(15)}}>
            <View>
              <TextInput
                selectionColor={Style.buttonColor}
                placeholder={'Password'}
                onChangeText={text => setPassword(text)}
                placeholderTextColor={Style.placeholderColor}
                style={[
                  styles.input,
                  {
                    backgroundColor: dark
                      ? Style.darkTextInputColor
                      : '#F5F5FA',
                    color: dark ? '#fff' : Style.darkColor.borderColor,
                  },
                ]}
              />
            </View>
          </View>
          <View style={{marginTop: normalize(15)}}>
            <View>
              <TextInput
                selectionColor={Style.buttonColor}
                placeholder={'Date of Birth'}
                onChangeText={text => setDate(text)}
                placeholderTextColor={Style.placeholderColor}
                style={[
                  styles.input,
                  {
                    backgroundColor: dark
                      ? Style.darkTextInputColor
                      : '#F5F5FA',
                    color: dark ? '#fff' : Style.darkColor.borderColor,
                  },
                ]}
              />
            </View>
          </View>
          <View style={{marginTop: normalize(15)}}>
            <Text
              style={[
                style.text,
                {
                  marginLeft: 8,
                  color: dark ? '#fff' : Style.darkColor.borderColor,
                },
              ]}>
              By signing up, you agree to our{' '}
              <Text
                style={[
                  style.text,
                  {
                    color: Style.orangeColor,
                    fontFamily: Style.fontFamily.bold,
                  },
                ]}>
                Terms, Data Policy{' '}
              </Text>
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
              loading={loading}
              onPress={_postData}
              color={Style.buttonColor}
              textColor={'#fff'}
              title="Register"
              height={normalize(50)}
            />
          </View>
          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              onPress={() => navigation.goBack()}
              color={dark ? Style.darkTextInputColor : '#fff'}
              textColor={dark ? '#fff' : Style.buttonColor}
              title="Cancel"
              borderColor={dark ? '#fff' : Style.buttonColor}
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
  input: {
    height: normalize(50),
    borderRadius: 10,
    width: '100%',
    paddingLeft: normalize(10),
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.medium,
  },
});
