import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addToWishList} from '../../redux/WishListSlice';

const Home = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state.post);
  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(false);

  const renderHeader = () => (
    <View>
      <Text style={styles.logo}>Olx Clone</Text>
      <View style={styles.searchBox}>
        <TextInput placeholder="Search items here..." style={styles.input} />
        <Image source={require('../tabs/search.png')} style={styles.icon} />
      </View>
      <Text style={styles.heading}>What are you looking for ?...</Text>
      <View style={{marginTop: 20}}>
        <FlatList
          numColumns={3}
          data={[
            {title: 'Car', icon: require('../tabs/car.png')},
            {title: 'Bike', icon: require('../tabs/motorcycle.png')},
            {title: 'Laptop', icon: require('../tabs/laptop.png')},
            {title: 'Mobile', icon: require('../tabs/mobile.png')},
            {title: 'Furniture', icon: require('../tabs/furniture.png')},
            {title: 'House', icon: require('../tabs/house.png')},
          ]}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                width: Dimensions.get('window').width / 3,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#DEDEDEF8',
                margin: 1.5,
              }}
              onPress={() => {
                navigation.navigate('ItemsByCatagory', {
                  catagory: item.title,
                });
              }}>
              <Image source={item.icon} style={{width: 60, height: 60}} />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Text style={styles.heading}>Posted items</Text>
    </View>
  );

  return (
    <View style={{marginBottom: 80}}>
      <FlatList
        data={items.data}
        ListHeaderComponent={renderHeader}
        renderItem={({item, index}) => (
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
              <Text style={{fontSize: 18, fontWeight: '600'}}>{item.name}</Text>
              <Text>{item.desc}</Text>
              <Text style={{color: 'green', fontSize: 16}}>{item.price}</Text>
            </View>
            <TouchableOpacity
              style={styles.wishList}
              onPress={() => {
                dispatch(addToWishList(item));
                setIsDisable(true);
              }}
              disabled={isDisable}>
              <Image
                source={require('../tabs/heart.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontSize: 30,
    fontWeight: '800',
    color: 'blue',
    marginTop: 20,
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
  heading: {
    fontSize: 20,
    marginLeft: 20,
    color: '#000',
    marginTop: 30,
    fontWeight: '600',
  },
  icon: {
    width: 24,
    height: 24,
  },
  itemImage: {
    height: 50,
    width: 50,
    marginLeft: 20,
  },
  wishList: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
});
