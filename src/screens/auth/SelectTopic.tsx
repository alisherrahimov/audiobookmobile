import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SvgXml} from 'react-native-svg';
import {images} from '../../image/intro/images';
import {normalize, Style} from '../../style/Style';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {NavigationType} from '../../types/NavigationType';
import BackgroundImage from '../components/BackgroundImage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SelectButton from '../components/SelectButton';
interface Props {
  navigation: NativeStackNavigationProp<NavigationType>;
}
const SelectTopic = () => {
  const [topic, setTopic] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  if (topic) {
    return <Ready navigation={navigation} />;
  }
  return (
    <View style={styles.container}>
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
            <Text style={styles.welcome}>Personalize Suggestion</Text>
          </View>
          <View>
            <Text style={styles.by}>
              Choose{' '}
              <Text style={{fontFamily: Style.fontFamily.bold}}>
                min. 3 topic
              </Text>{' '}
              you like, we will give you more often that relate to it.
            </Text>
          </View>
          <View style={{marginTop: 20, marginBottom: 20}}>
            <Input placeholder="Search Categories" />
          </View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
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
            <Text style={styles.by}>
              By personalize your account, we can help you to find what you
              like.
            </Text>
          </View>

          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              onPress={() => {
                setTopic(true);
              }}
              color={Style.buttonColor}
              textColor={'#fff'}
              title="Submit"
              height={normalize(50)}
            />
          </View>
          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              onPress={() => navigation.goBack()}
              color={'#fff'}
              textColor={Style.buttonColor}
              title="Skip"
              borderColor={Style.buttonColor}
              borderWidth={1}
              height={normalize(50)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const Ready: React.FC<Props> = ({navigation}) => {
  return (
    <View
      style={[
        styles.container,
        {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
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
              {textAlign: 'center', fontFamily: Style.fontFamily.bold},
            ]}>
            You are ready to go!
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.by,
              {textAlign: 'center', fontFamily: Style.fontFamily.light},
            ]}>
            Congratulation, any interesting topics will be shortly in your
            hands.
          </Text>
        </View>
        <View style={{marginTop: normalize(15), width: '100%'}}>
          <CustomButton
            onPress={() => {
              navigation.navigate('BottomTab');
            }}
            color={Style.buttonColor}
            textColor={'#fff'}
            title="Submit"
            height={normalize(50)}
          />
        </View>
      </View>
    </View>
  );
};
export default SelectTopic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  find: {
    fontSize: Style.fontSize.xxlarge + 25,
    fontFamily: Style.fontFamily.thin,
    color: Style.buttonColor,
  },
  welcome: {
    fontSize: Style.fontSize.small,
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
