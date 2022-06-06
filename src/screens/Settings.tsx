import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import {normalize, Style} from '../style/Style';
import CustomButton from './components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        title="Settings"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={{
          marginHorizontal: normalize(25),
          marginTop: normalize(10),
          marginBottom: normalize(10),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Image
              source={{
                uri: 'https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1229901940.jpg?w=1024',
              }}
              style={styles.image}
            />
          </View>
          <View style={{marginLeft: normalize(15), justifyContent: 'center'}}>
            <Text style={[styles.title, {fontFamily: Style.fontFamily.bold}]}>
              Elon Mask
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('User');
              }}>
              <Text style={styles.author}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.free} />
      <TouchableOpacity
        style={{
          marginHorizontal: normalize(25),
          marginTop: normalize(10),
          marginBottom: normalize(10),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.title}>Notifications</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={[styles.free, {height: 3}]} />
      <TouchableOpacity
        style={{
          marginHorizontal: normalize(25),
          marginTop: normalize(10),
          marginBottom: normalize(10),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.title}>Data and Storages</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.free} />
      <TouchableOpacity
        style={{
          marginHorizontal: normalize(25),
          marginTop: normalize(10),
          marginBottom: normalize(10),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.title}>Subscription</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={[styles.free, {height: 3}]} />
      <TouchableOpacity
        style={{
          marginHorizontal: normalize(25),
          marginTop: normalize(10),
          marginBottom: normalize(10),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.title}>Linked Account</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.free} />
      <TouchableOpacity
        style={{
          marginHorizontal: normalize(25),
          marginTop: normalize(10),
          marginBottom: normalize(10),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.title}>About Audibooks</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={[styles.free, {height: 3}]} />
      <View style={{alignItems: 'center', marginTop: normalize(20)}}>
        <CustomButton
          color="#fff"
          textColor={Style.orangeColor}
          borderColor={Style.orangeColor}
          title="Log out"
          borderWidth={1}
          width={'80%'}
          height={normalize(50)}
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  free: {
    height: normalize(30),
    backgroundColor: '#F5F5FA',
    width: '100%',
  },
  image: {
    width: normalize(70),
    height: normalize(70),
    resizeMode: 'cover',
    borderRadius: normalize(40),
  },
  title: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.light,
    color: '#000',
  },
  author: {
    fontSize: Style.fontSize.small - 3,
    fontFamily: Style.fontFamily.medium,
    color: Style.buttonColor,
  },
});
