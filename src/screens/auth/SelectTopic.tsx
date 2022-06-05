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
import BackgroundImage from '../components/BackgroundImage';

const SelectTopic = () => {
  const navigation = useNavigation();
  if (true) {
    return <Ready />;
  }
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
        <View style={{marginTop: normalize(70)}}>
          <View>
            <Text style={styles.welcome}>Personalize Suggestion</Text>
          </View>
          <View>
            <Text style={styles.by}>
              Choose{' '}
              <Text style={{fontFamily: Style.fontFamily.bold}}>
                min. 3 topic
              </Text>{' '}
              you like, we will give you more often that relate to it.
            </Text>
          </View>
          <View style={{marginTop: 20, marginBottom: 20}}>
            <Input placeholder="Search Categories" />
          </View>
          <View>
            <Text style={styles.by}>
              By personalize your account, we can help you to find what you
              like.
            </Text>
          </View>

          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              color={Style.buttonColor}
              textColor={'#fff'}
              title="Submit"
              height={normalize(50)}
            />
          </View>
          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              onPress={() => navigation.goBack()}
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

const Ready = () => {
  return (
    <View
      style={[
        styles.container,
        {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        },
      ]}>
      <View
        style={{
          width: '85%',
          alignSelf: 'center',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SvgXml xml={images.ready} />
        <View>
          <Text
            style={[
              styles.by,
              {textAlign: 'center', fontFamily: Style.fontFamily.bold},
            ]}>
            You are ready to go!
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.by,
              {textAlign: 'center', fontFamily: Style.fontFamily.light},
            ]}>
            Congratulation, any interesting topics will be shortly in your
            hands.
          </Text>
        </View>
        <View style={{marginTop: normalize(15), width: '100%'}}>
          <CustomButton
            color={Style.buttonColor}
            textColor={'#fff'}
            title="Submit"
            height={normalize(50)}
          />
        </View>
      </View>
    </View>
  );
};
export default SelectTopic;

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
    color: '#000',
  },
  by: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.medium,
    color: '#000',
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
