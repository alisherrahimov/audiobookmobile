import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppTheme, normalize} from '../../style/Style';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../../types/NavigationType';
import {URL} from '../../../App';
interface Props {
  item?: {id?: string | null; image?: string | null} | null;
  index: number;
}
const BestSellerCard: React.FC<Props> = ({index, item}) => {
  const {colors, dark} = useTheme() as AppTheme;

  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('BookDetails');
      }}
      style={[
        styles.container,
        {
          margin: index % 2 == 0 ? 18 : undefined,
          marginTop: 18,
          backgroundColor: colors.buttonColor,
        },
      ]}>
      <Image
        source={{uri: URL + `${item?.image}`}}
        resizeMode="stretch"
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default BestSellerCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: normalize(140),
    height: normalize(140),
    borderRadius: 10,
  },
  image: {
    width: normalize(140),
    height: normalize(140),
    borderRadius: 10,
  },
});
