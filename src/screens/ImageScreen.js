import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () =>{
    return (
        <View>
            <ImageDetail title="Forest" sourceImage={require('../../assets/img/forest.jpg')} score="9"/>
            <ImageDetail title="Mountain" sourceImage={require('../../assets/img/mountain.jpg')} score="4"/>
            <ImageDetail title="Beach" sourceImage={require('../../assets/img/beach.jpg')} score="13"/>
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize:16
    }
});
export default ImageScreen;