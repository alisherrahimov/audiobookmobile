import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';
import React from 'react';
import BackgroundImage from './components/BackgroundImage';
import {images} from '../image/intro/images';
import {SvgXml} from 'react-native-svg';
import {normalize, Style} from '../style/Style';
import CustomButton from './components/CustomButton';
const data: {title: string; desc: string; image: string}[] = [
  {
    title: 'Title one',
    desc: 'Lorem ipsum dolor sit amet la maryame dor sut colondeum.',
    image: images.first,
  },
  {
    title: 'Title two',
    desc: 'Lorem ipsum dolor sit amet la maryame dor sut colondeum.',
    image: images.second,
  },
  {
    title: 'Title third',
    desc: 'Lorem ipsum dolor sit amet la maryame dor sut colondeum.',
    image: images.thrid,
  },
];
const Enter = () => {
  const RenderItem = ({
    item,
  }: {
    item: {title: string; desc: string; image: string};
  }) => {
    return (
      <View
        style={{
          width: Style.width,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SvgXml xml={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackgroundImage />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          width: '100%',
          height: normalize(300),
          marginTop: normalize(200),
        }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={data}
          keyExtractor={({image}) => image}
          renderItem={RenderItem}
        />
      </View>
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 80,
          marginTop: normalize(15),
        }}>
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: Style.buttonColor,
            borderRadius: 25,
          }}
        />
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: Style.buttonColor,
            borderRadius: 25,
          }}
        />
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: Style.buttonColor,
            borderRadius: 25,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          width: '80%',
          justifyContent: 'space-around',
          marginTop: normalize(35),
          alignItems: 'center',
        }}>
        <View>
          <CustomButton
            textColor={Style.buttonColor}
            color={'#fff'}
            title="Next"
            width={normalize(120)}
            height={normalize(50)}
          />
        </View>
        <View>
          <CustomButton
            textColor="#fff"
            color={Style.buttonColor}
            title="Next"
            width={normalize(120)}
            height={normalize(50)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Enter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: normalize(17),
    fontFamily: Style.fontFamily.bold,
  },
  desc: {
    fontSize: normalize(15),
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: Style.fontFamily.medium,
  },
});
