import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SvgXml} from 'react-native-svg';
import {images} from '../../image/intro/images';
import {AppTheme, normalize, Style} from '../../style/Style';
import CustomButton from '../components/CustomButton';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../../types/NavigationType';
import {useRegisterMutation} from '../../generated/graphql';

const Register = () => {
  const {colors, dark} = useTheme() as AppTheme;
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const [register, {loading}] = useRegisterMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const _postData = async () => {
    if (username.length <= 0 || email.length <= 0 || password.length <= 0) {
      Alert.alert(
        'Xatolik',
        'Iltimos kamida foydalanuvchi nomi, email va parolni kiriting!',
      );
    } else {
      try {
        const {data} = await register({
          variables: {
            email: email,
            password: password,
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
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <ScrollView>
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
              Ro'yxatdan o'tish
            </Text>
            <View style={{marginTop: normalize(15)}}>
              <View>
                <TextInput
                  selectionColor={Style.buttonColor}
                  placeholder={'Tahallusni kiriting'}
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
                  placeholder={'Parolni kiriting'}
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
                loading={loading}
                onPress={_postData}
                color={Style.buttonColor}
                textColor={'#fff'}
                title="Ro'yxatdan o'tish"
                height={normalize(50)}
              />
            </View>
            <View style={{marginTop: normalize(15)}}>
              <CustomButton
                onPress={() => navigation.goBack()}
                color={dark ? Style.darkTextInputColor : '#fff'}
                textColor={dark ? '#fff' : Style.buttonColor}
                title="Orqaga qaytish"
                borderColor={dark ? '#fff' : Style.buttonColor}
                borderWidth={1}
                height={normalize(50)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
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
