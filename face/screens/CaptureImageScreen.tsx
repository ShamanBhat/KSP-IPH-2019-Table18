import React, {useState} from 'react';
import {View, Button, Text, Image, StyleSheet, Alert, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const CaptureImageScreen = props => {
    const data = new FormData();
    globalThis.image;
    globalThis.file;
    const [pickedImage, setPickedImage] = useState();
    const verifyPermissions = async () => {
      const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA);
      if (result.status !== 'granted') {
        Alert.alert(
          'Insufficient permissions!',
          'You need to grant camera permissions to use this app.',
          [{ text: 'Okay' }]
        );
        return false;
      }
      return true;
    };
  
    const takeImageHandler = async () => {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        return;
      }
      globalThis.image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 0.5,
        aspect :[1,1]
      });
  
      setPickedImage(globalThis.image.uri);
      
    };

    const convertImagetoBase64 = (base64string) => {
        globalThis.file = base64string;
    }

    
    async function saveImageHandler () {
        //props.navigation.navigate({routeName: 'SaveImageScreen', myImgUri:pickedImage});
        //this.props.navigation.navigate('SaveImageScreen', {myImgUri: pickedImage}); 
        
        // let result = await ImagePicker.launchCameraAsync({
        //     allowsEditing: true,
        //     aspect: [4, 3],
        //   });
        
        //   if (result.cancelled) {
        //     return;
        //   }
        
          // ImagePicker saves the taken photo to disk and returns a local URI to it
          let localUri = globalThis.image.uri;
          let filename = localUri.split('/').pop();
          
        
          // Infer the type of the image
          let match = /\.(\w+)$/.exec(filename);
          let type = match ? 'image/${match[1]}' : 'image';
          
          // Upload the image using the fetch and FormData APIs
          let formData = new FormData();
          // Assume "photo" is the name of the form field the server expects
          formData.append('file', { uri: localUri, name: filename, type });
        
          fetch('http://ec2-54-159-40-214.compute-1.amazonaws.com:5000/test', {
            method: 'GET',
           // body: formData,
            headers: {'content-type': 'multipart/form-data'}
          }).then((res)=>res.json()).then((resJson)=>{
              console.log( resJson.locations);
          }).catch((err)=>{
              console.error(err);
          });

        props.navigation.navigate({routeName: 'SaveImageScreen'});
    };

    return(
        <View style={styles.container}>
            <View style={styles.imagePreview}>
                {!pickedImage ? (
                    <Text>No image picked yet.</Text>
                ) : (
                    <Image style={styles.image} source={{ uri: pickedImage }} />
                )}
            </View>

            {!pickedImage ?(
                <Button title ="Take Picture" onPress = {takeImageHandler}  />
            ) : (
                <Button title ="Search for Person" onPress = {saveImageHandler} />
            )}
        </View>
    );  
};

CaptureImageScreen.navigationOptions = navData =>{
    return {
        headerTitle: 'Home'
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      width: '100%',
      height: '100%'
    },
    imagePreview:{
      width: '100%',
      height: '45%',
      marginBottom: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#ccc',
    },
    takeImg:{
      padding:20,
      color:'yellow',
      borderRadius:25
    }
  });

export default CaptureImageScreen;