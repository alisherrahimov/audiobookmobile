import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import BookCard from './components/BookCard';

const Books = () => {
  return (
    <View style={styles.container}>
      <Header title="New Release" />
      <FlatList
        contentContainerStyle={{alignSelf: 'center'}}
        numColumns={2}
        data={[
          {id: 1, author: 'Laurie Forest', title: 'The Black Witch'},
          {id: 2, author: 'C.J Archer', title: 'The Prisoner’s Key'},
          {id: 3, author: 'Laurie Forest', title: 'Light Mage'},
          {id: 4, author: 'Emily R. King', title: 'The Fire Queen'},
        ]}
        keyExtractor={({id}) => id.toString()}
        renderItem={({index, item}) => <BookCard data={item} index={index} />}
      />
    </View>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
