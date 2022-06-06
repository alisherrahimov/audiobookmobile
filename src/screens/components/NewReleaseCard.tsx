import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalize} from '../../style/Style';
import {useNavigation} from '@react-navigation/native';
interface Props {
  item: number;
  index: number;
}
const NewReleaseCard: React.FC<Props> = ({index, item}) => {
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

export default NewReleaseCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: normalize(140),
    height: normalize(140),
    backgroundColor: '#F5F5FA',
  },
});
