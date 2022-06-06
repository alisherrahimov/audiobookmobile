import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalize, Style} from '../../style/Style';
interface Props {
  title: string;
  color: string;
  textColor: string;
  onPress?: () => void;
  width?: number | string;
  height?: number | string;
  borderWidth?: number;
  borderColor?: string;
}
const CustomButton: React.FC<Props> = ({
  color,
  title,
  height,
  width,
  textColor,
  onPress,
  borderColor,
  borderWidth,
  children,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        width,
        height,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth,
        borderColor,
      }}
      activeOpacity={0.8}>
      <Text
        style={{
          color: textColor,
          fontFamily: Style.fontFamily.medium,
          fontSize: normalize(14),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
