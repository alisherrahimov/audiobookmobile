import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {images} from '../../image/intro/images';
import {normalize, Style} from '../../style/Style';
import Input from '../components/Input';

import MyBooksCard from '../components/MyBooksCard';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../../types/NavigationType';
import LibraryLoading from '../components/LibraryLoading';

const Library = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          alignSelf: 'center',
          alignItems: 'flex-end',
          height: normalize(80),
          paddingBottom: 10,
        }}>
        <SvgXml xml={images.logoname} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Settings');
          }}>
          <SvgXml xml={images.setting} />
        </TouchableOpacity>
      </View>
      <View
        style={[
          {
            width: '90%',
            alignSelf: 'center',
            marginTop: normalize(30),
          },
        ]}>
        <View>
          <Text style={styles.explore}>Explore</Text>
        </View>
        <View style={{marginTop: normalize(10)}}>
          <Input placeholder="Search Books and Author" />
        </View>

        <FlatList
          contentContainerStyle={{
            marginTop: normalize(15),
          }}
          data={[
            {id: 1, author: 'Laurie Forest', title: 'The Black Witch'},
            {id: 2, author: 'C.J Archer', title: 'The Prisoner’s Key'},
            {id: 3, author: 'Laurie Forest', title: 'Light Mage'},
            {id: 4, author: 'Emily R. King', title: 'The Fire Queen'},
          ]}
          keyExtractor={({id}) => id.toString()}
          renderItem={({index, item}) => (
            <MyBooksCard data={item} index={index} />
          )}
        />
      </View>
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: normalize(40),
  },
  explore: {
    fontSize: Style.fontSize.xlarge,
    fontFamily: Style.fontFamily.bold,
    color: '#000',
  },
});
