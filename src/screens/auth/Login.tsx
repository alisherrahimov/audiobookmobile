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
import CustomButton from '../components/CustomButton';
import {style} from '../../style/Index';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NavigationType} from '../../types/NavigationType';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useLoginMutation} from '../../generated/graphql';

const Login: React.FC = () => {
  const {colors, dark} = useTheme() as AppTheme;
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [login, {loading}] = useLoginMutation();
  const _postData = async () => {
    try {
      const {data} = await login({
        variables: {
          input: {
            email: email,
            password: password,
          },
        },
      });

      if (data?.login.error && data !== null) {
        Alert.alert('ERROR', JSON.stringify(data.login.message));
      } else {
        navigation.navigate('BottomTab');
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
          <Text style={[styles.text, {color: colors.text}]}>
            Dasturga kirish
          </Text>
          <View style={{marginTop: normalize(15)}}>
            <View>
              <TextInput
                selectionColor={Style.buttonColor}
                placeholder={'Email'}
                keyboardType="email-address"
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
                placeholder={'Parolingiz'}
                secureTextEntry={true}
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
            <CustomButton
              onPress={() => {
                _postData();
              }}
              color={Style.buttonColor}
              textColor={'#fff'}
              title="Kirish"
              loading={loading}
              height={normalize(50)}
            />
          </View>
          <View style={{marginTop: normalize(15), alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgetPassword');
              }}>
              <Text style={styles.forgotPassword}>Parolni unutdingizmi?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: normalize(25), alignSelf: 'center'}}>
          <Text style={[style.text, {color: colors.text}]}>Yoki</Text>
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
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.touch, {backgroundColor: colors.background}]}>
              <SvgXml
                xml={images.google}
                width={normalize(30)}
                height={normalize(30)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.touch, {backgroundColor: colors.background}]}>
              <SvgXml
                xml={images.facebook}
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
          <Text style={[style.text, {color: colors.text}]}>
            Hisobingiz yo'qmi ?
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
              Ro'yxatdan o'tish
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
  input: {
    height: normalize(50),
    borderRadius: 10,
    width: '100%',
    paddingLeft: normalize(10),
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.medium,
  },
});
