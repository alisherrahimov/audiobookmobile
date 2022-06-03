import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type NavigationType = {
  Home: undefined;
  Settings: undefined;
  Login: undefined;
  Register: undefined;
  ForgetPassword: undefined;
  User: undefined;
  Enter: undefined;
  Error: undefined;
  Library: undefined;
  Search: undefined;
  BottomTab: undefined;
  ConfirmationCode: undefined;
};

export type NativeStackType = NativeStackScreenProps<NavigationType>;
