import { View, TextInput, StyleSheet, Text} from 'react-native';
import React,{useState} from 'react';

const TextScreen = () => {
    const [name,func] = useState('');
    return (
        <View>
            <Text>Enter your name</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue)=>{
                    func(newValue);
                }}
                />
            <Text>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        marginTop:20,
        borderWidth:5,
        borderColor:'lime',
        paddingLeft:6
    }
})

export default TextScreen;