import {
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

const Search = () => {
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
          <Text>Recommended Categories</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Text>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Business</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Text>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Business</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>Latest Search</Text>
        </View>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index: number) => (
            <NewReleaseCard item={item} index={index} />
          ))}
        </ScrollView>
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
});
