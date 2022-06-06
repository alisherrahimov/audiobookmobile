import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalize} from '../../style/Style';
import {useNavigation} from '@react-navigation/native';
interface Props {
  item: number;
  index: number;
}
const BestSellerCard: React.FC<Props> = ({index, item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('BookDetails');
      }}
      style={[
        styles.container,
        {margin: index % 2 == 0 ? 18 : undefined, marginTop: 18},
      ]}>
      <Text>{index}</Text>
    </TouchableOpacity>
  );
};

export default BestSellerCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: normalize(240),
    height: normalize(130),
    backgroundColor: 'red',
    borderRadius: 10,
  },
});
