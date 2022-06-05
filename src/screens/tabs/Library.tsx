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
import {normalize} from '../../style/Style';
import Input from '../components/Input';
import NewReleaseCard from '../components/NewReleaseCard';
import BookCard from '../components/BookCard';

const Library = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgXml xml={images.logoname} />
        <TouchableOpacity>
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
          <Text>Explore</Text>
        </View>
        <View>
          <Input placeholder="Search Books and Author" />
        </View>
        <View>
          <Text>Search Results</Text>
        </View>
        <FlatList
          contentContainerStyle={{alignSelf: 'center'}}
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
});
