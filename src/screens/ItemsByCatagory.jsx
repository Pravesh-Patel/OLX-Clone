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
} from 'react-native';
import {useSelector} from 'react-redux';

const ItemsByCatagory = () => {
  const [itemList, setItemList] = useState([]);
  const items = useSelector(state => state.post);
  const route = useRoute();
  useEffect(() => {
    let tempData = items.data;
    let temp = [];
    tempData.map(items => {
      if (items.catagory == route.params.catagory) {
        temp.push(items);
      }
    });
    setItemList(temp);
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={itemList}
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
                <Text style={{color: 'green', fontSize: 16}}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default ItemsByCatagory;
const styles = StyleSheet.create({
  container: {flex: 1},
  itemImage: {
    height: 50,
    width: 50,
    marginLeft: 20,
  },
});
