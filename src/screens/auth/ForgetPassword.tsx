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
import {normalize, Style} from '../../style/Style';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
import {style} from '../../style/Index';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../../types/NavigationType';
import {useForgetPasswordMutation} from '../../generated/graphql';

const ForgetPassword = () => {
  const {dark} = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const [email, setEmail] = React.useState('');
  const [forgot, {loading}] = useForgetPasswordMutation();
  const _postData = async () => {
    try {
      const {data} = await forgot({
        variables: {email: email},
      });
      if (data?.forgetPassword?.error) {
        Alert.alert('ERROR', JSON.stringify(data?.forgetPassword?.message));
      } else {
        navigation.navigate('ConfirmationCode', {email: email});
      }
    } catch (error) {
      Alert.alert('ERROR', JSON.stringify(error));
    }
  };
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: dark ? Style.darkBackgroundColor : '#fff'},
      ]}>
      <View style={{width: '85%', alignSelf: 'center'}}>
        <View style={{alignSelf: 'center', marginTop: normalize(50)}}>
          <SvgXml
            xml={images.logo}
            width={normalize(100)}
            height={normalize(100)}
          />
        </View>
        <View>
          <Text
            style={[
              styles.text,
              {color: dark ? '#fff' : Style.darkColor.borderColor},
            ]}>
            Parolni tiklash
          </Text>
          <View style={{marginTop: normalize(15)}}>
            <Text
              style={[
                style.text,
                {
                  marginLeft: 8,
                  color: dark ? '#fff' : Style.darkColor.borderColor,
                },
              ]}>
              Parolni tiklash uchun iltimos email manzilingizni kiriting!
            </Text>
          </View>
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
            <CustomButton
              onPress={() => {
                _postData();
              }}
              loading={loading}
              color={Style.buttonColor}
              textColor={'#fff'}
              title="Tadiqlash"
              height={normalize(50)}
            />
          </View>
          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              onPress={() => navigation.goBack()}
              color={dark ? Style.darkTextInputColor : '#fff'}
              textColor={dark ? '#fff' : Style.buttonColor}
              title="Orqaga"
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

export default ForgetPassword;

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
