import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
    const name = <Text style={styles.nameStyle}>My name is Timur</Text>;
    return <View>
        <Text style={styles.textStyle}>Getting started with React Native</Text>
        {name}
    </View>
}

const styles = StyleSheet.create({
    textStyle:{
        backgroundColor:'lime',
        fontSize:45
    },
    nameStyle:{
        fontSize:20
    }
});

export default ComponentsScreen;