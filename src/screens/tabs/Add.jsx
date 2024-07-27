import {
  Image,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {addPost} from '../../redux/PostSlice';

const add = ({onPost}) => {
  const dispatch = useDispatch();
  const [selectedCatagory, setSelectedCatagory] = useState('0');
  const [price, setPrice] = useState(0);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [photo, setPhoto] = useState({
    assets: [
      {
        fileName: '',
        fileSize: 63442,
        height: 1920,
        originalPath:
          'file:///data/user/0/com.olx/cache/rn_image_picker_lib_temp_0403a6f1-5290-4217-8af3-a483db29592e.jpg',
        type: 'image/jpeg',
        uri: '',
        width: 1440,
      },
    ],
  });
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        openCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const openCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    if (!result.didCancel) {
      setPhoto(result);
    }
  };
  const addItem = () => {
    dispatch(
      addPost({
        name: name,
        price: price,
        desc: desc,
        image: photo.assets[0].uri,
        catagory:
          selectedCatagory == 0
            ? 'Car'
            : selectedCatagory == 1
            ? 'Bike'
            : selectedCatagory == 2
            ? 'Laptop'
            : selectedCatagory == 3
            ? 'Mobile'
            : selectedCatagory == 4
            ? 'Furniture'
            : 'House',
      }),
    );
    onPost();
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 20, color: '#000'}}>Add Post</Text>
        </View>
        <TouchableOpacity
          style={styles.imageView}
          onPress={() => {
            requestCameraPermission();
          }}>
          {photo.assets[0].uri == '' ? (
            <Image source={require('./photo.png')} style={styles.imageView} />
          ) : (
            <Image
              source={{uri: photo.assets[0].uri}}
              style={styles.imageView}
            />
          )}
        </TouchableOpacity>
        <TextInput
          placeholder="Enter Item Name"
          style={styles.input}
          value={name}
          onChangeText={txt => setName(txt)}
        />
        <TextInput
          placeholder="Enter Item Description"
          style={[styles.input, {marginTop: 15}]}
          value={desc}
          onChangeText={txt => setDesc(txt)}
        />
        <TextInput
          placeholder="Enter Item Price"
          keyboardType="numeric"
          style={[styles.input, {marginTop: 15}]}
          value={price}
          onChangeText={txt => setPrice(txt)}
        />
        <Text
          style={[
            styles.title,
            {marginLeft: 20, fontSize: 20, color: '#000', marginTop: 10},
          ]}>
          Catagory
        </Text>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              borderColor: selectedCatagory == 0 ? 'blue' : 'black',
            },
          ]}
          onPress={() => {
            setSelectedCatagory(0);
          }}>
          <Text>Car</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              borderColor: selectedCatagory == 1 ? 'blue' : 'black',
            },
          ]}
          onPress={() => {
            setSelectedCatagory(1);
          }}>
          <Text>Bike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              borderColor: selectedCatagory == 2 ? 'blue' : 'black',
            },
          ]}
          onPress={() => {
            setSelectedCatagory(2);
          }}>
          <Text>Laptop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              borderColor: selectedCatagory == 3 ? 'blue' : 'black',
            },
          ]}
          onPress={() => {
            setSelectedCatagory(3);
          }}>
          <Text>Mobile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              borderColor: selectedCatagory == 4 ? 'blue' : 'black',
            },
          ]}
          onPress={() => {
            setSelectedCatagory(4);
          }}>
          <Text>Furniture</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              borderColor: selectedCatagory == 5 ? 'blue' : 'black',
            },
          ]}
          onPress={() => {
            setSelectedCatagory(5);
          }}>
          <Text>House</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            addItem();
          }}>
          <Text style={{color: '#fff', fontSize: 20}}>Post Item</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    width: '90%',
    height: 160,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
  },
  input: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: 40,
    borderRadius: 10,
    paddingLeft: 20,
  },
  btn: {
    width: '90%',
    height: 55,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: 'blue',
    marginBottom: 100,
  },
});
