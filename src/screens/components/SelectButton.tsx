import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {normalize, Style} from '../../style/Style';
interface Props {
  categories: {
    id: number;
    title: string;
  };
  index: number;
}
const SelectButton: React.FC<Props> = ({categories, index}) => {
  const [check, setCheck] = useState(false);
  const [data, setData] = useState<{id: number | undefined}[]>();
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          styles.container,
          {
            borderWidth: 1,
            borderColor: Style.buttonColor,
            backgroundColor: check ? Style.buttonColor : '#fff',
            marginLeft: index == 0 ? 0 : 5,
            marginTop: 5,
          },
        ]}
        onPress={() => {
          setCheck(!check);
        }}>
        <Text
          style={[styles.title, {color: check ? '#fff' : Style.buttonColor}]}>
          {categories.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: normalize(8),
    borderRadius: 10,
    borderColor: '#6A6A8B',
    borderWidth: 1,
  },
  title: {
    fontFamily: Style.fontFamily.medium,
    fontSize: Style.fontSize.small - 2,
    color: '#6A6A8B',
  },
});
