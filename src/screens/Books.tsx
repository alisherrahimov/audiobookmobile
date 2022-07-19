import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Header from './components/Header';
import BookCard from './components/BookCard';
import {useRoute} from '@react-navigation/native';
import {HomeTabScreenProps, NavigationType} from '../types/NavigationType';
import {useGetBookByCategoryMutation} from '../generated/graphql';
import Loading from './components/Loading';

const Books = () => {
  const route = useRoute<HomeTabScreenProps<'Books'>['route']>();
  const {title, id} = route.params;
  const [book, {loading, data, error}] = useGetBookByCategoryMutation();
  useEffect(() => {
    book({variables: {id: id}});
  }, []);
  if (error) {
    return <Text>{JSON.stringify(error)}</Text>;
  }
  return (
    <View style={styles.container}>
      <Header title={title} />
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          contentContainerStyle={{alignSelf: 'center', marginTop: 10}}
          numColumns={2}
          data={data?.getBookByCategory}
          keyExtractor={item => item?.id?.toString()}
          renderItem={({item, index}) => <BookCard data={item} index={index} />}
        />
      )}
    </View>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
