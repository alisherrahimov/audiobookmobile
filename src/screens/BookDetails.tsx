import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import Header from './components/Header';
import {normalize, Style} from '../style/Style';
import SelectButton from './components/SelectButton';
import {Rating, AirbnbRating} from 'react-native-ratings';
import CustomButton from './components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../types/NavigationType';
import ReViewCard from './components/ReViewCard';
const DATA = [
  {
    id: 1,
    author: 'Paulo Coelho',
    rating: 4.5,
    data: '01/01/2020',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    author: 'Paulo Coelho',
    rating: 4.5,
    data: '01/01/2020',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    author: 'Paulo Coelho',
    rating: 4.5,
    data: '01/01/2020',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];
const ReViewCardSize = Style.width - 45;
const BookDetails = () => {
  const scrollRef = useRef(null);
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, ReViewCardSize);

  return (
    <View style={styles.container}>
      <Header title="Movies Name" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: normalize(20)}}>
        <View style={{alignSelf: 'center', marginTop: normalize(15)}}>
          <Image
            source={{
              uri: 'https://images-na.ssl-images-amazon.com/images/I/91bsMwU7IzL._RI_.jpg',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.options}>
          <View>
            <Text style={styles.title}>
              {checkLength('Harry Potter and the Sorcer')}
            </Text>
          </View>
          <View>
            <Text style={styles.author}>J.K. Rowling</Text>
          </View>
          <View style={{marginTop: normalize(15)}}>
            <View
              style={{
                alignItems: 'flex-start',
                flexDirection: 'row',
              }}>
              <Rating
                type="custom"
                ratingImage={require('../image/home/Star.png')}
                ratingCount={5}
                imageSize={15}
              />
              <Text style={styles.ball}>4.4</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: normalize(10),
              }}>
              {[{id: 1, title: 'dramma'}].map((_, i) => (
                <View style={{marginLeft: i == 0 ? 0 : 5, marginTop: 5}}>
                  <SelectButton categories={_} index={i} />
                </View>
              ))}
            </View>
          </View>
          <View style={{marginTop: normalize(20)}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <CustomButton
                color={Style.buttonColor}
                title="Play Audio"
                textColor="#fff"
                width={'48%'}
                height={normalize(45)}
              />
              <CustomButton
                color={'fff'}
                title="Read Book"
                textColor={Style.buttonColor}
                borderColor={Style.buttonColor}
                borderWidth={1}
                width={'48%'}
                height={normalize(45)}
              />
            </View>
          </View>
          <View style={{marginTop: normalize(15)}}>
            <View>
              <Text style={styles.summary}>Summary</Text>
            </View>
            <View style={{marginTop: normalize(10)}}>
              <Text style={styles.desc}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt. Velit officia consequat duis enim velit mollit.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Text>
            </View>
          </View>
          <View style={{marginTop: normalize(10)}}>
            <View>
              <Text style={styles.summary}>Review</Text>
            </View>
            <View style={{marginTop: normalize(10)}}>
              <ScrollView
                ref={scrollRef}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {x: scrollX}}}],
                  {useNativeDriver: false},
                )}
                horizontal
                pagingEnabled>
                {DATA.map((item, index) => {
                  return <ReViewCard item={item} index={index} />;
                })}
              </ScrollView>
              <View style={{marginTop: normalize(10)}}>
                <View
                  style={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  {DATA.map((_, i) => {
                    let opacity = position.interpolate({
                      inputRange: [i - 1, i, i + 1],
                      outputRange: [0.3, 1, 0.3],
                      extrapolate: 'clamp',
                    });

                    return (
                      <Animated.View
                        key={i}
                        style={{
                          opacity,
                          height: 12,
                          width: 12,
                          backgroundColor: Style.buttonColor,
                          margin: 5,
                          borderRadius: 20,
                        }}
                      />
                    );
                  })}
                </View>
                <View
                  style={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    flex: 1,
                    alignItems: 'flex-end',
                  }}>
                  <TouchableOpacity>
                    <Text style={styles.viewmore}>View More</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const checkLength = (title: string) => {
  if (title.length > 30) {
    return title.substring(0, 25) + '...';
  }
  return title;
};
export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewmore: {
    fontFamily: Style.fontFamily.medium,
    color: Style.orangeColor,
    fontSize: Style.fontSize.small,
  },
  userImage: {
    width: normalize(50),
    height: normalize(50),
    resizeMode: 'cover',
  },
  summary: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.bold,
    color: '#000',
  },
  userName: {
    fontSize: Style.fontSize.small - 2,
    fontFamily: Style.fontFamily.bold,
    color: '#000',
  },
  desc: {
    fontFamily: Style.fontFamily.medium,
    fontSize: Style.fontSize.small - 2,
    color: '#6A6A8B',
    lineHeight: normalize(18),
  },
  image: {
    width: normalize(200),
    height: normalize(220),
    resizeMode: 'cover',
  },
  options: {
    width: '90%',
    alignSelf: 'center',
    marginTop: normalize(10),
  },
  title: {
    fontFamily: Style.fontFamily.bold,
    fontSize: Style.fontSize.large,
    color: '#000',
  },
  author: {
    fontFamily: Style.fontFamily.medium,
    fontSize: Style.fontSize.small,
    color: '#6A6A8B',
  },
  ball: {
    fontFamily: Style.fontFamily.medium,
    fontSize: Style.fontSize.small,
    color: '#6A6A8B',
    marginLeft: 5,
  },
});
