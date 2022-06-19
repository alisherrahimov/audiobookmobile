import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import {useNavigation, useTheme} from '@react-navigation/native';
import {AppTheme, normalize, Style} from '../style/Style';
import {SvgXml} from 'react-native-svg';
import {images} from '../image/intro/images';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../types/NavigationType';

const User = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const {colors, dark} = useTheme() as AppTheme;
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Header
        title="Profile"
        addButton={true}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{alignSelf: 'center', marginTop: normalize(15)}}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              zIndex: 1,
              marginRight: 5,
              marginTop: 5,
            }}>
            <SvgXml xml={images.edit(colors.text)} width={20} height={20} />
          </View>
          <Image
            source={{
              uri: 'https://i0.wp.com/www.usmagazine.com/wp-content/uploads/2022/05/Elon-Musk-Defends-His-Decision-to-Buy-Twitter.jpg?crop=0px%2C14px%2C1352px%2C764px&resize=1600%2C900&ssl=1&quality=86&strip=all',
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{
            marginHorizontal: normalize(25),
            marginTop: normalize(15),
            marginBottom: normalize(10),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                flex: 1,
              }}>
              <Text style={[styles.author, {color: colors.text}]}>
                Username
              </Text>
              <Text style={[styles.title, {color: colors.text}]}>johndoe</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.free,
            {height: 3, backgroundColor: colors.textInputBackgroundColor},
          ]}
        />
        <View
          style={{
            marginHorizontal: normalize(25),
            marginTop: normalize(15),
            marginBottom: normalize(10),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                flex: 1,
              }}>
              <Text style={[styles.author, {color: colors.text}]}>Emaile</Text>
              <Text style={[styles.title, {color: colors.text}]}>
                john@mail.com
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.free,
            {height: 3, backgroundColor: colors.textInputBackgroundColor},
          ]}
        />
        <View
          style={{
            marginHorizontal: normalize(25),
            marginTop: normalize(15),
            marginBottom: normalize(10),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                flex: 1,
              }}>
              <Text style={[styles.author, {color: colors.text}]}>Phone</Text>
              <Text style={[styles.title, {color: colors.text}]}>
                +1234567890
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.free,
            {height: 3, backgroundColor: colors.textInputBackgroundColor},
          ]}
        />
        <View
          style={{
            marginHorizontal: normalize(25),
            marginTop: normalize(15),
            marginBottom: normalize(10),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                flex: 1,
              }}>
              <Text style={[styles.author, {color: colors.text}]}>
                Date Birth
              </Text>
              <Text style={[styles.title, {color: colors.text}]}>
                01 January 2001
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.free,
            {height: 3, backgroundColor: colors.textInputBackgroundColor},
          ]}
        />
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: normalize(150),
    height: normalize(150),
    resizeMode: 'cover',
    borderRadius: 15,
  },
  free: {
    height: normalize(30),
    backgroundColor: '#F5F5FA',
    width: '100%',
  },
  title: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.light,
    color: '#000',
  },
  author: {
    fontSize: Style.fontSize.small - 1,
    fontFamily: Style.fontFamily.medium,
    color: '#000',
  },
});
