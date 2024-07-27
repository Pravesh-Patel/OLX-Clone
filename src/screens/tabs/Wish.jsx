import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Touchable,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useSelector} from 'react-redux';

const Wish = () => {
  const items = useSelector(state => state.Wish);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 20, color: '#000'}}>Favourite Items</Text>
      </View>
      <View style={{marginBottom: 150}}>
        <FlatList
          data={items.data}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 100,
                  backgroundColor: '#fff',
                  alignSelf: 'center',
                  marginTop: 5,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  borderRadius: 20,
                  marginTop: 20,
                }}>
                <Image source={{uri: item.image}} style={styles.itemImage} />
                <View
                  style={{
                    alignSelf: 'center',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    width: '80%',
                    marginLeft: 20,
                  }}>
                  <Text style={{fontSize: 18, fontWeight: '600'}}>
                    {item.name}
                  </Text>
                  <Text>{item.desc}</Text>
                  <Text style={{color: 'green', fontSize: 16}}>
                    {item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};
export default Wish;
const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    height: 50,
    width: 50,
    marginLeft: 20,
  },
  searchBox: {
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    width: '80%',
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
