import {StyleSheet, View} from 'react-native';
import React from 'react';
import Svg, {Circle, SvgXml, Symbol, Use} from 'react-native-svg';
import {Style} from '../../style/Style';
import {images} from '../../image/intro/images';
const BackgroundImage = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <SvgXml
            xml={images.elipce}
            fill={'#4838D1'}
            width={150}
            height={150}
          />
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <SvgXml xml={images.elipce2} width={80} height={80} />
        </View>
      </View>
    </View>
  );
};

export default BackgroundImage;

const styles = StyleSheet.create({
  container: {
    height: Style.backgroundImageHeight,
    width: '100%',
    position: 'absolute',
  },
});
