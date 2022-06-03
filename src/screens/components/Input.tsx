import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {normalize, Style} from '../../style/Style';
interface Props {
  placeholder: string;
  secureTextEntry?: false | boolean;
  placeHolderColor?: string;
}
const Input: React.FC<Props> = ({
  secureTextEntry,
  placeHolderColor,
  placeholder,
}) => {
  return (
    <View>
      <TextInput
        selectionColor={Style.buttonColor}
        placeholder={placeholder}
        placeholderTextColor={placeHolderColor || Style.placeholderColor}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: normalize(50),
    borderRadius: 10,
    width: '100%',
    paddingLeft: normalize(10),
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.medium,
    backgroundColor: '#F5F5FA',
  },
});
