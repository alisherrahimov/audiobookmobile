import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {normalize, Style} from '../../style/Style';
import {Rating, AirbnbRating} from 'react-native-ratings';
interface Props {
  item?: {
    id?: number;
    author?: string;
    rating?: number;
    image?: string;
    desc?: string;
    date?: string;
  };
  index: number;
}
const ReViewCard: React.FC<Props> = ({item, index}) => {
  return (
    <View style={{width: Style.width - 35}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            source={{
              uri: item?.image,
            }}
            style={styles.userImage}
          />
        </View>
        <View
          style={{
            marginLeft: normalize(10),
            justifyContent: 'center',
          }}>
          <Text style={styles.userName}>{item?.author}</Text>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Rating
              type="custom"
              ratingImage={require('../../image/home/Star.png')}
              ratingCount={5}
              imageSize={normalize(17)}
            />
            <Text style={[styles.desc, {marginLeft: 5}]}>{item?.date}</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: normalize(15)}}>
        <Text style={styles.desc}>{item?.desc}</Text>
      </View>
    </View>
  );
};
export default ReViewCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userImage: {
    width: normalize(50),
    height: normalize(50),
    resizeMode: 'cover',
  },
  summary: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.bold,
    color: '#000',
  },
  userName: {
    fontSize: Style.fontSize.small - 2,
    fontFamily: Style.fontFamily.bold,
    color: '#000',
  },
  desc: {
    fontFamily: Style.fontFamily.medium,
    fontSize: Style.fontSize.small - 2,
    color: '#6A6A8B',
    lineHeight: normalize(18),
  },
  image: {
    width: normalize(200),
    height: normalize(220),
    resizeMode: 'cover',
  },
  options: {
    width: '90%',
    alignSelf: 'center',
    marginTop: normalize(10),
  },
  title: {
    fontFamily: Style.fontFamily.bold,
    fontSize: Style.fontSize.large,
    color: '#000',
  },
  author: {
    fontFamily: Style.fontFamily.medium,
    fontSize: Style.fontSize.small,
    color: '#6A6A8B',
  },
  ball: {
    fontFamily: Style.fontFamily.medium,
    fontSize: Style.fontSize.small,
    color: '#6A6A8B',
    marginLeft: 5,
  },
});
