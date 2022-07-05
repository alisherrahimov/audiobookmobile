import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SvgXml} from 'react-native-svg';
import {images} from '../../image/intro/images';
import {normalize, Style} from '../../style/Style';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NavigationType} from '../../types/NavigationType';
import BackgroundImage from '../components/BackgroundImage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SelectButton from '../components/SelectButton';
interface Props {
  navigation: NativeStackNavigationProp<NavigationType>;
  dark: boolean;
}
const SelectTopic = () => {
  const {dark} = useTheme();
  const [topic, setTopic] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  if (topic) {
    return <Ready navigation={navigation} dark={dark} />;
  }
  return (
    <View
      style={[styles.container, {width: Style.width, height: Style.height}]}>
      <BackgroundImage />
      <View
        style={{
          width: '85%',
          alignSelf: 'center',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={{marginTop: normalize(70)}}>
          <View>
            <Text
              style={[
                styles.welcome,

                {color: dark ? '#fff' : Style.darkColor.borderColor},
              ]}>
              O'zingizga yoqgan maqola turini tanlang!
            </Text>
          </View>
          <View style={{marginTop: normalize(10)}}>
            <Text
              style={[
                styles.by,
                {color: dark ? '#fff' : Style.darkColor.borderColor},
              ]}>
              O'zingizga yoqgan{' '}
              <Text
                style={[
                  {
                    fontFamily: Style.fontFamily.bold,
                    color: dark ? '#fff' : Style.darkColor.borderColor,
                  },
                ]}>
                minimalni 3 mavzuni tanlang
              </Text>{' '}
              va ilovani davom ettiring!
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 20,
              marginBottom: 20,
            }}>
            {[
              {id: 1, title: 'Drama'},
              {id: 2, title: 'Art'},
              {id: 3, title: 'Business'},
              {id: 4, title: 'Biography'},
              {id: 5, title: 'Comedy'},
              {id: 6, title: 'Culture'},
              {id: 7, title: 'Education'},
            ].map((item, index: number) => {
              return <SelectButton categories={item} index={index} />;
            })}
          </View>
          <View>
            <Text
              style={[
                styles.by,
                {color: dark ? '#fff' : Style.darkColor.borderColor},
              ]}>
              Bu sizga o'zingizga yoqadigan mavzularni ko'rsatishda bizga yordam
              beradi!
            </Text>
          </View>

          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              onPress={() => {
                setTopic(true);
              }}
              color={Style.buttonColor}
              textColor={'#fff'}
              title="Davom etish"
              height={normalize(50)}
            />
          </View>
          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              onPress={() => navigation.goBack()}
              color={dark ? Style.darkTextInputColor : '#fff'}
              textColor={dark ? '#fff' : Style.buttonColor}
              title="O'tkazib yuborish"
              borderColor={dark ? '#fff' : Style.buttonColor}
              borderWidth={1}
              height={normalize(50)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const Ready: React.FC<Props> = ({navigation, dark}) => {
  return (
    <View
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: dark ? Style.darkBackgroundColor : '#f5f5f5',
          flex: 1,
        },
      ]}>
      <View
        style={{
          width: '85%',
          alignSelf: 'center',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SvgXml xml={images.ready} />
        <View>
          <Text
            style={[
              styles.by,
              {
                textAlign: 'center',
                fontFamily: Style.fontFamily.bold,
                color: dark ? '#fff' : Style.darkColor.borderColor,
              },
            ]}>
            Hisobingiz saqlandi rahmat!
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.by,
              {
                textAlign: 'center',
                fontFamily: Style.fontFamily.light,
                color: dark ? '#fff' : Style.darkColor.borderColor,
              },
            ]}>
            Tabriklaymiz, qiziqishlaringiz buyicha maqolalar chiqib boradi
          </Text>
        </View>
        <View style={{marginTop: normalize(15), width: '100%'}}>
          <CustomButton
            onPress={() => {
              navigation.navigate('BottomTab');
            }}
            color={Style.buttonColor}
            textColor={'#fff'}
            title="Davom etish"
            height={normalize(50)}
          />
        </View>
      </View>
    </View>
  );
};
export default SelectTopic;

const styles = StyleSheet.create({
  container: {},
  find: {
    fontSize: Style.fontSize.xxlarge + 25,
    fontFamily: Style.fontFamily.thin,
    color: Style.buttonColor,
  },
  welcome: {
    fontSize: Style.fontSize.medium,
    fontFamily: Style.fontFamily.bold,
    color: '#000',
  },
  by: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.medium,
    color: '#000',
  },
  text: {
    fontSize: Style.fontSize.medium,
    fontFamily: Style.fontFamily.bold,
    marginLeft: 5,
  },
  forgotPassword: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.bold,
    color: Style.orangeColor,
  },
  touch: {
    width: normalize(60),
    height: normalize(50),
    borderRadius: normalize(8),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Style.buttonColor,
    borderWidth: 1,
  },
});
