import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppTheme, normalize} from '../../style/Style';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../../types/NavigationType';
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
        source={{uri: `http://192.168.1.2:5000/${item?.image}`}}
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
    width: normalize(240),
    height: normalize(130),
    backgroundColor: 'red',
    borderRadius: 10,
  },
  image: {
    width: normalize(240),
    height: normalize(130),
    borderRadius: 10,
  },
});
