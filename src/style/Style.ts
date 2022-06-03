import {PixelRatio, Platform, Dimensions} from 'react-native';
import {Theme} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const scale = width / 320;
export const normalize = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
export const Style = {
  fontFamily: {
    bold: 'Poppins-Bold',
    regular: 'Roboto-Regular',
    light: 'Poppins-Light',
    medium: 'Poppins-Medium',
    thin: 'Poppins-Thin',
    black: 'Poppins-Black',
    italic: 'Poppins-Italic',
  },
  fontSize: {
    xsmall: normalize(12),
    small: normalize(14),
    medium: normalize(16),
    large: normalize(18),
    xlarge: normalize(20),
    xxlarge: normalize(22),
  },
  lightColor: {
    primary: '#fff',
    textColor: '#000',
    bottomTextColor: '#6A6A8B',
    backgroundColor: '#fff',
    borderColor: '#F3F1FE',
  },
  darkColor: {
    primary: '#000',
    textColor: '#fff',
    bottomTextColor: '#6A6A8B',
    backgroundColor: '#0F0F29',
    borderColor: '#2E2E5D',
  },
  bottomTabHeight: normalize(60),
  buttonColor: '#4838D1',
  bottomTextColor: '#6A6A8B',
  enterImageSize: normalize(200),
  backgroundImageHeight: normalize(250),
  width: width,
  height: height,
  placeholderColor: '#B8B8C7',

  orangeColor: '#F77A55',
};

export const darkSchema: Theme = {
  dark: true,
  colors: {
    background: Style.darkColor.primary,
    border: Style.darkColor.primary,
    card: Style.darkColor.primary,
    text: Style.darkColor.textColor,
    primary: Style.darkColor.primary,
    notification: Style.darkColor.primary,
  },
};

export const lightSchema: Theme = {
  dark: false,
  colors: {
    background: Style.lightColor.primary,
    border: Style.lightColor.primary,
    card: Style.lightColor.primary,
    text: Style.lightColor.textColor,
    primary: Style.lightColor.primary,
    notification: Style.lightColor.primary,
  },
};