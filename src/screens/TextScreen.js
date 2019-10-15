import { View, TextInput, StyleSheet, Text} from 'react-native';
import React,{useState} from 'react';

const TextScreen = () => {
    const [name,func] = useState('');
    const [password, passF] = useState('');
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
            <Text>Enter password</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={
                    (part)=>{passF(part)}
                }
            />
            {password.length < 5 ? <Text>Password length should be longer than 5</Text> : null}
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