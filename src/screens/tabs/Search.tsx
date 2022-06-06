import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {images} from '../../image/intro/images';
import {normalize, Style} from '../../style/Style';
import Input from '../components/Input';

import BookCard from '../components/BookCard';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
        <SearchResult />
        {/* <View style={{marginTop: normalize(20)}}>
          <Text style={styles.reco}>Recommended Categories</Text>
        </View>
        <View style={{marginTop: normalize(20)}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={styles.touch}>
              <Text>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch}>
              <Text>Business</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity style={styles.touch}>
              <Text>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch}>
              <Text>Business</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: normalize(20)}}>
          <Text style={styles.reco}>Latest Search</Text>
        </View> */}
      </View>
      {/* <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index: number) => (
            <NewReleaseCard item={item} index={index} />
          ))}
        </ScrollView>
      </View> */}
    </View>
  );
};
const SearchResult = () => {
  return (
    <View>
      <View
        style={[
          {
            width: '100%',
            marginTop: normalize(20),
          },
        ]}>
        <View>
          <Text style={styles.reco}>Search Results</Text>
        </View>
        <FlatList
          contentContainerStyle={{marginTop: normalize(10)}}
          numColumns={2}
          data={[
            {id: 1, author: 'Laurie Forest', title: 'The Black Witch'},
            {id: 2, author: 'C.J Archer', title: 'The Prisoner’s Key'},
            {id: 3, author: 'Laurie Forest', title: 'Light Mage'},
            {id: 4, author: 'Emily R. King', title: 'The Fire Queen'},
          ]}
          keyExtractor={({id}) => id.toString()}
          renderItem={({index, item}) => <BookCard data={item} index={index} />}
        />
      </View>
    </View>
  );
};
export default Search;

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
  reco: {
    fontFamily: Style.fontFamily.medium,
    fontSize: Style.fontSize.medium,
    color: '#000',
  },
  touch: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5FA',
    borderRadius: 10,
    width: '48%',
    height: normalize(50),
  },
});
