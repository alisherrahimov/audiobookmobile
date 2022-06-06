import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import {useNavigation} from '@react-navigation/native';
import {normalize, Style} from '../style/Style';
import {SvgXml} from 'react-native-svg';
import {images} from '../image/intro/images';

const User = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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
            <SvgXml xml={images.edit} width={20} height={20} />
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
              <Text style={[styles.author, {alignSelf: 'flex-start'}]}>
                Display Name
              </Text>
              <Text style={styles.title}>Notifications</Text>
            </View>
          </View>
        </View>
        <View style={[styles.free, {height: 3}]} />
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
              <Text style={styles.author}>Username</Text>
              <Text style={styles.title}>johndoe</Text>
            </View>
          </View>
        </View>
        <View style={[styles.free, {height: 3}]} />
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
              <Text style={styles.author}>Emaile</Text>
              <Text style={styles.title}>john@mail.com</Text>
            </View>
          </View>
        </View>
        <View style={[styles.free, {height: 3}]} />
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
              <Text style={styles.author}>Phone</Text>
              <Text style={styles.title}>+1234567890</Text>
            </View>
          </View>
        </View>
        <View style={[styles.free, {height: 3}]} />
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
              <Text style={styles.author}>Date Birth</Text>
              <Text style={styles.title}>01 January 2001</Text>
            </View>
          </View>
        </View>
        <View style={[styles.free, {height: 3}]} />
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
