import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    let strPath =  `../../assets/img/${props.title.toLowerCase()}.jpg`
    return (
        <View>
            <Image source={props.sourceImage} />
            <Text style={styles.textStyle}>Hello World!!! {props.title}</Text>
            <Text style={styles.textStyle}>Image Score - {props.score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16
    }
});
export default ImageDetail;