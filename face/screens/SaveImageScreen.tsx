import React from 'react';
import {View, Button, Text, TextInput, StyleSheet, Image,TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';

const SaveImageScreen = props => {
    return(
        <ScrollView>
            <View>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={ require("../assets/missing_0.jpg") } /> 
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 1'}</Text>
                        <Text style={styles.address}>{'Address 1'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={require("../assets/missing_16.jpg")} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 2'}</Text>
                        <Text style={styles.address}>{'Address 2'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={ require("../assets/missing_22.jpg") } /> 
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 3'}</Text>
                        <Text style={styles.address}>{'Address 3'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={require("../assets/missing_29.jpg")} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 4'}</Text>
                        <Text style={styles.address}>{'Address 4'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={ require("../assets/missing_36.jpg") } /> 
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 5'}</Text>
                        <Text style={styles.address}>{'Address 5'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={require("../assets/missing_41.jpg")} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 6'}</Text>
                        <Text style={styles.address}>{'Address 6'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={ require("../assets/missing_2.jpg") } /> 
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 7'}</Text>
                        <Text style={styles.address}>{'Address 7'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={require("../assets/missing_3.jpg")} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 8'}</Text>
                        <Text style={styles.address}>{'Address 8'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={ require("../assets/missing_1.jpg") } /> 
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 9'}</Text>
                        <Text style={styles.address}>{'Address 9'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={require("../assets/missing_3.jpg")} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 10'}</Text>
                        <Text style={styles.address}>{'Address 10'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={ require("../assets/missing_1.jpg") } /> 
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 11'}</Text>
                        <Text style={styles.address}>{'Address 11'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={require("../assets/missing_3.jpg")} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 12'}</Text>
                        <Text style={styles.address}>{'Address 12'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={ require("../assets/missing_1.jpg") } /> 
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 13'}</Text>
                        <Text style={styles.address}>{'Address 13'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={require("../assets/missing_3.jpg")} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 14'}</Text>
                        <Text style={styles.address}>{'Address 14'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={ require("../assets/missing_1.jpg") } /> 
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 15'}</Text>
                        <Text style={styles.address}>{'Address 15'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={require("../assets/missing_3.jpg")} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 16'}</Text>
                        <Text style={styles.address}>{'Address 16'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={ require("../assets/missing_1.jpg") } /> 
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 17'}</Text>
                        <Text style={styles.address}>{'Address 17'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={require("../assets/missing_3.jpg")} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 18'}</Text>
                        <Text style={styles.address}>{'Address 18'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={ require("../assets/missing_1.jpg") } /> 
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 19'}</Text>
                        <Text style={styles.address}>{'Address 19'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
                    <Image style={styles.image} source={require("../assets/missing_3.jpg")} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{'Missing Person 20'}</Text>
                        <Text style={styles.address}>{'Address 20'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

SaveImageScreen.navigationOptions = navData =>{
    return {
        headerTitle: 'Search Results'
    }
}

const styles = StyleSheet.create({
    image:{
        width: 70,
        height: 70,
        borderRadius:35,
        backgroundColor: '#ccc',
        borderColor: Colors.primary,
        borderWidth: 1
    },
    placeItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 20,
        flexDirection: 'row',
        
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
      address: {
        color: '#666',
        fontSize: 16
    }
});

export default SaveImageScreen;