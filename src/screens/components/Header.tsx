import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {images} from '../../image/intro/images';
import {normalize, Style} from '../../style/Style';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../../types/NavigationType';
interface Props {
  title: string;
  onPress?: () => void;
  addButton?: boolean;
  ButtonPress?: () => void;
}
const Header: React.FC<Props> = ({
  title,
  addButton = false,
  ButtonPress,
  onPress,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const {dark} = useTheme();
  const checkLength = (title: string) => {
    if (title.length > 25) {
      return title.substring(0, 25) + '...';
    }
    return title;
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: dark
            ? Style.darkColor.backgroundColor
            : Style.lightColor.backgroundColor,
          borderBottomColor: dark
            ? Style.darkColor.borderColor
            : Style.lightColor.borderColor,
        },
      ]}>
      <View style={[styles.absolute, {marginLeft: normalize(15)}]}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          activeOpacity={0.8}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: normalize(10),
            borderRadius: 15,
          }}>
          <SvgXml
            xml={images.arrowLeft}
            width={normalize(20)}
            height={normalize(20)}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.absolute, {right: 0}]}>
        <Text
          style={[
            styles.title,
            {
              color: dark
                ? Style.darkColor.textColor
                : Style.lightColor.textColor,
            },
          ]}>
          {checkLength(title)}
        </Text>
      </View>
      {addButton && (
        <View
          style={[
            {
              position: 'absolute',
              justifyContent: 'center',
              top: 0,
              right: 0,
              bottom: 0,
              marginTop: normalize(25),
              marginRight: normalize(10),
            },
          ]}>
          <TouchableOpacity
            onPress={ButtonPress}
            activeOpacity={0.8}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: normalize(10),
              borderRadius: 15,
            }}>
            <Text style={styles.author}>Save</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: normalize(80),

    borderBottomWidth: 0.8,
  },
  title: {
    fontFamily: Style.fontFamily.medium,
    fontSize: Style.fontSize.small,
    color: '#000',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(25),
  },
  author: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.medium,
    color: Style.buttonColor,
  },
});
