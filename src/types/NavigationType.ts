import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
export type NavigationType = {
  Home: any;
  Settings: any;
  Login: any;
  Register: any;
  ForgetPassword: any;
  User: any;
  Enter: any;
  Error: any;
  Library: any;
  Search: any;
  BottomTab: any;
  ConfirmationCode: {
    email: string;
    type: number;
  };
  Welcome: any;
  SelectTopic: any;
  Books: {
    title: string;
    id: string;
  };
  BookDetails: any;
  GroupNavigator: any;
  AuthNavigator: any;
  ChangePassword: {
    email: string;
  };
  UserActive: {
    email: string;
  };
  Book: any;
};
export type RootStackScreenProps<T extends keyof NavigationType> =
  StackScreenProps<NavigationType, T>;
export type HomeTabScreenProps<T extends keyof NavigationType> =
  CompositeScreenProps<
    BottomTabScreenProps<NavigationType, T>,
    RootStackScreenProps<keyof NavigationType>
  >;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationType {}
  }
}
