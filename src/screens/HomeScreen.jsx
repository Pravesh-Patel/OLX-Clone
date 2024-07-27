import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Home from './tabs/Home';
import Search from './tabs/Search';
import Add from './tabs/Add';
import Wish from './tabs/Wish';
import Account from './tabs/Account';

const HomeScreen = () => {
  const [selectedTab, setselectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Add
          onPost={() => {
            setselectedTab(0);
          }}
        />
      ) : selectedTab == 3 ? (
        <Wish />
      ) : (
        <Account />
      )}
      <View style={styles.bottomTab}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setselectedTab(0);
          }}>
          <Image
            source={require('../image/home.png')}
            style={[
              styles.tabIcons,
              {tintColor: selectedTab == 0 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setselectedTab(1);
          }}>
          <Image
            source={require('../image/search.png')}
            style={[
              styles.tabIcons,
              {tintColor: selectedTab == 1 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setselectedTab(2);
          }}>
          <Image
            source={require('../image/add.png')}
            style={[
              styles.tabIcons,
              {tintColor: selectedTab == 2 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setselectedTab(3);
          }}>
          <Image
            source={require('../image/heart.png')}
            style={[
              styles.tabIcons,
              {tintColor: selectedTab == 3 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setselectedTab(4);
          }}>
          <Image
            source={require('../image/user.png')}
            style={[
              styles.tabIcons,
              {tintColor: selectedTab == 4 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTab: {
    width: '100%',
    height: 70,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
  },
  tab: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcons: {
    height: 30,
    width: 30,
  },
});
