import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppTheme, normalize, Style} from '../../style/Style';
import {useTheme} from '@react-navigation/native';
interface Props {
  data: {
    title: string;
    id: number;
    author: string;
  };
  index: number;
}
const BookCard: React.FC<Props> = ({data, index}) => {
  const {colors, dark} = useTheme() as AppTheme;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      key={index}
      style={{
        marginLeft: index % 2 === 0 ? 0 : normalize(20),
        marginBottom: normalize(20),
      }}>
      <Image
        style={{
          width: normalize(135),
          height: normalize(135),
          borderRadius: 10,
        }}
        source={{
          uri: 'https://img.freepik.com/free-psd/book-mockup-with-shadow-overlay_23-2149209542.jpg?t=st=1654465604~exp=1654466204~hmac=d31c49f64c5ac8c33239cd2f729213e9ba023ebf4eaa7772b3bf53104ba4fd2c&w=740',
        }}
        resizeMode="cover"
      />
      <Text style={[styles.title, {color: colors.text}]}>{data.title}</Text>
      <Text
        style={[
          styles.author,
          {color: dark ? colors.text : colors.buttonBorderColor},
        ]}>
        {data.author}
      </Text>
    </TouchableOpacity>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.medium,
    color: '#000',
  },
  author: {
    fontSize: Style.fontSize.small - 3,
    fontFamily: Style.fontFamily.medium,
    color: Style.buttonColor,
  },
});
