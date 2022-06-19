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
import {useNavigation, useRoute, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeTabScreenProps, NavigationType} from '../../types/NavigationType';
import {useActiveMutation, useCheckCodeMutation} from '../../generated/graphql';

const UserActive = () => {
  const route = useRoute<HomeTabScreenProps<['UserActive']>['route']>();
  const {dark} = useTheme();
  const {email} = route.params;
  const [code, setCode] = React.useState('');
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const [active, {loading}] = useActiveMutation();
  const _postData = async () => {
    try {
      const {data} = await active({
        variables: {
          email: email,
          code: Number(code),
        },
      });
      if (data?.active) {
        navigation.navigate('Login');
      } else {
        Alert.alert('ERROR', JSON.stringify("Code doesn't match"));
      }
    } catch (error) {
      Alert.alert('ERROR', JSON.stringify(error));
    }
  };
  const _userActive = async () => {
    try {
      const {data} = await active({
        variables: {
          email: email,
          code: Number(code),
        },
      });
      if (data?.active) {
        navigation.navigate('Login');
      } else {
        Alert.alert('ERROR', JSON.stringify("Code doesn't match"));
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
            Confirmation Code
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
              Enter the confirmation code we sent to {email}
            </Text>
          </View>
          <View style={{marginTop: normalize(15)}}>
            <View>
              <TextInput
                selectionColor={Style.buttonColor}
                placeholder={'Confirmation Code'}
                onChangeText={text => setCode(text)}
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
          <View
            style={{
              marginTop: normalize(15),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={[
                style.text,
                {
                  marginLeft: 8,
                  color: dark ? '#fff' : Style.darkColor.borderColor,
                },
              ]}>
              Didn’t receive the code?
            </Text>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 5,
              }}>
              <Text
                style={[
                  style.text,
                  {
                    color: Style.orangeColor,
                    fontFamily: Style.fontFamily.bold,
                  },
                ]}>
                Resend
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              onPress={() => {
                _postData();
              }}
              loading={loading}
              color={Style.buttonColor}
              textColor={'#fff'}
              title="Submit"
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

export default UserActive;

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
