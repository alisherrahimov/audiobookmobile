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
import {normalize, Style} from '../../style/Style';

import RecommendCard from '../components/RecommendCard';
import BestSellerCard from '../components/BestSellerCard';
import NewReleaseCard from '../components/NewReleaseCard';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.header}>
            <SvgXml xml={images.logoname} />
            <TouchableOpacity>
              <SvgXml xml={images.setting} />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <Text style={styles.title}>Categories</Text>
            <TouchableOpacity>
              <Text style={styles.seemore}>See more</Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <View style={styles.category}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index: number) => (
                  <TouchableOpacity
                    style={[
                      styles.TouchableOpacity,
                      {marginLeft: index === 0 ? 18 : undefined},
                    ]}>
                    <Text>Category {item}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={[styles.header, {marginTop: normalize(20)}]}>
            <Text style={styles.title}>Recommended For You</Text>
            <TouchableOpacity>
              <Text style={styles.seemore}>See more</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index: number) => (
                <RecommendCard item={item} index={index} />
              ))}
            </ScrollView>
          </View>
          <View style={[styles.header, {marginTop: normalize(10)}]}>
            <Text style={styles.title}>Best Seller</Text>
            <TouchableOpacity>
              <Text style={styles.seemore}>See more</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index: number) => (
                <BestSellerCard item={item} index={index} />
              ))}
            </ScrollView>
          </View>
          <View style={[styles.header, {marginTop: normalize(10)}]}>
            <Text style={styles.title}>New Releases</Text>
            <TouchableOpacity>
              <Text style={styles.seemore}>See more</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index: number) => (
                <NewReleaseCard item={item} index={index} />
              ))}
            </ScrollView>
          </View>
          <View style={[styles.header, {marginTop: normalize(10)}]}>
            <Text style={styles.title}>Trending Now</Text>
            <TouchableOpacity>
              <Text style={styles.seemore}>See more</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index: number) => (
                <NewReleaseCard item={item} index={index} />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

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
  category: {},
  TouchableOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#F5F5FA',
    margin: 5,
    borderRadius: 8,
    marginTop: normalize(15),
  },
  title: {
    fontFamily: Style.fontFamily.bold,
    fontSize: Style.fontSize.small,
    color: '#000',
  },
  seemore: {
    fontFamily: Style.fontFamily.medium,
    fontSize: Style.fontSize.small,
    color: Style.buttonColor,
  },
});
