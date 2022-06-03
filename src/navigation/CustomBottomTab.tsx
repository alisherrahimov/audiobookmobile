import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import {normalize, Style} from '../style/Style';
interface Props {
  navigation: any;
  state: any;
  descriptors: any;
}
const CustomBottomTabBar: React.FC<Props> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            android_ripple={{color: Style.buttonColor, borderless: true}}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.TouchableOpacity}>
            <Text
              style={{
                color: isFocused ? Style.buttonColor : Style.bottomTextColor,
              }}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  TouchableOpacity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Style.bottomTabHeight,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000000',
    elevation: 4,
    shadowOpacity: 1,
  },
});

export default CustomBottomTabBar;
