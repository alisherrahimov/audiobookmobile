import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../types/NavigationType';
import {style} from '../style/Index';
import Header from './components/Header';
import {AppTheme, normalize, Style} from '../style/Style';
import Slider from '@react-native-community/slider';
import {images} from '../image/intro/images';
import {URL} from '../../App';
import {SvgXml} from 'react-native-svg';
const Book: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const {colors, dark} = useTheme() as AppTheme;
  const {params} = useRoute();
  const {item} = params;
  return (
    <View style={styles.container}>
      <Header title={item?.book.title} />
      <View style={styles.main}>
        <View
          style={{
            marginTop: normalize(10),
          }}>
          <Image
            source={{
              uri: URL + item?.book?.image,
            }}
            style={styles.image}
          />
        </View>
        <View style={{marginTop: normalize(15)}}>
          <Text style={[styles.title, {color: colors.text}]}>
            {item?.book?.title}
          </Text>
          <Text style={[styles.author, {color: colors.text}]}>
            {item?.book?.author}
          </Text>
        </View>
        <View style={{width: '100%'}}>
          <Slider
            style={{height: 40}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#4838D1"
            maximumTrackTintColor="#DDD7FC"
            thumbTintColor="#4838D1"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: normalize(18),
            }}>
            <Text style={[styles.count, {color: colors.text}]}>00.00</Text>
            <Text style={[styles.count, {color: colors.text}]}>
              {item?.book?.duration}
            </Text>
          </View>
        </View>
        <View style={{marginTop: normalize(15)}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity activeOpacity={0.8} style={styles.touch}>
              <SvgXml
                xml={images.arrowLeftIcon(dark ? '#DDD7FC' : '#4838D1')}
                width={normalize(40)}
                height={normalize(40)}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.touch}>
              <SvgXml
                xml={images.play(dark ? '#fff' : '#4838D1')}
                width={normalize(50)}
                height={normalize(50)}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.touch}>
              <SvgXml
                xml={images.arrowRightIcon(dark ? '#DDD7FC' : '#4838D1')}
                width={normalize(40)}
                height={normalize(40)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.8} style={styles.readBook}>
            <Text style={[styles.readBookText, {color: '#fff'}]}>
              Read Book
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  readBookText: {
    fontFamily: Style.fontFamily.bold,
    fontSize: Style.fontSize.small,
  },
  readBook: {
    backgroundColor: '#4838D1',
    alignSelf: 'center',
    marginTop: normalize(20),
    borderRadius: normalize(10),
    padding: normalize(10),
  },
  touch: {},
  count: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.medium,
  },
  author: {
    fontSize: Style.fontSize.medium,
    fontFamily: Style.fontFamily.medium,
  },
  main: {
    marginHorizontal: normalize(15),
    flex: 1,
  },
  title: {
    fontSize: Style.fontSize.large,
    fontFamily: Style.fontFamily.bold,
  },
  image: {
    width: '100%',
    height: normalize(258),
    borderRadius: normalize(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
});
