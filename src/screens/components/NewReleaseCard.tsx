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
const NewReleaseCard: React.FC<Props> = ({index, item}) => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const {colors, dark} = useTheme() as AppTheme;
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
        resizeMode="cover"
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default NewReleaseCard;

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
