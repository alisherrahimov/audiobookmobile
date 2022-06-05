import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '../../style/Style';
interface Props {
  item: number;
  index: number;
}
const RecommendCard: React.FC<Props> = ({index, item}) => {
  return (
    <View
      style={[
        styles.container,
        {margin: index % 2 == 0 ? 18 : undefined, marginTop: 18},
      ]}>
      <Text>{index}</Text>
    </View>
  );
};

export default RecommendCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: normalize(160),
    height: normalize(220),
    backgroundColor: '#F5F5FA',
  },
});
