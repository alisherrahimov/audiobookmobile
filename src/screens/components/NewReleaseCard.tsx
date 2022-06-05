import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '../../style/Style';
interface Props {
  item: number;
  index: number;
}
const NewReleaseCard: React.FC<Props> = ({index, item}) => {
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

export default NewReleaseCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: normalize(140),
    height: normalize(140),
    backgroundColor: '#F5F5FA',
  },
});
