import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {images} from '../../image/intro/images';
import {AppTheme, normalize, Style} from '../../style/Style';
import RecommendCard from '../components/RecommendCard';
import BestSellerCard from '../components/BestSellerCard';
import NewReleaseCard from '../components/NewReleaseCard';
import {useNavigation, useRoute, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../../types/NavigationType';
import LoadingHome from '../components/LoadingHome';
import {useGetHomeQuery} from '../../generated/graphql';

const Home = () => {
  const {dark, colors} = useTheme() as AppTheme;

  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const {data, loading, error, refetch} = useGetHomeQuery();
  if (loading) {
    return <LoadingHome />;
  }

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
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
        <SvgXml
          xml={
            dark
              ? images.logoname('#fff')
              : images.logoname(colors.buttonBorderColor)
          }
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Settings');
          }}>
          <SvgXml
            xml={
              dark
                ? images.setting('#fff')
                : images.setting(colors.buttonBorderColor)
            }
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetch} />
        }
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.header}>
            <Text style={[styles.title, {color: colors.text}]}>Categories</Text>
            <TouchableOpacity>
              <Text style={[styles.seemore, {color: colors.text}]}>
                See more
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <View style={styles.category}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data?.categories?.map((item, index: number) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Books', {
                        title: item?.name,
                        id: item?.id,
                      });
                    }}
                    style={[
                      styles.TouchableOpacity,
                      {
                        backgroundColor: colors.buttonColor,
                        marginLeft: index === 0 ? 18 : undefined,
                      },
                    ]}>
                    <Text
                      style={{
                        color: '#fff',
                        fontFamily: Style.fontFamily.medium,
                      }}>
                      {item?.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={[styles.header, {marginTop: normalize(10)}]}>
            <Text style={[styles.title, {color: colors.text}]}>
              Recommended For You
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Books', {title: 'Recommended For You'});
              }}>
              <Text style={[styles.seemore, {color: colors.text}]}>
                See more
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {data?.home?.recommended?.map((item, index: number) => (
                <RecommendCard item={item} index={index} />
              ))}
            </ScrollView>
          </View>
          <View style={[styles.header, {marginTop: normalize(10)}]}>
            <Text style={[styles.title, {color: colors.text}]}>
              Best Seller
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Books', {title: 'Best Seller'});
              }}>
              <Text style={[styles.seemore, {color: colors.text}]}>
                See more
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {data?.home?.bestseller?.map((item, index: number) => (
                <BestSellerCard item={item} index={index} />
              ))}
            </ScrollView>
          </View>
          <View style={[styles.header, {marginTop: normalize(10)}]}>
            <Text style={[styles.title, {color: colors.text}]}>
              New Releases
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Books', {title: 'New Releases'});
              }}>
              <Text style={[styles.seemore, {color: colors.text}]}>
                See more
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {data?.home?.new_release?.map((item, index: number) => (
                <NewReleaseCard item={item} index={index} />
              ))}
            </ScrollView>
          </View>
          <View style={[styles.header, {marginTop: normalize(10)}]}>
            <Text style={[styles.title, {color: colors.text}]}>
              Trending Now
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Books', {title: 'Trending Now'});
              }}>
              <Text style={[styles.seemore, {color: colors.text}]}>
                See more
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {data?.home?.trend?.map((item, index: number) => (
                <NewReleaseCard item={item} index={index} />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    marginTop: normalize(20),
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
