import { View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const TextScreen = () => {
    return (
        <View>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                />
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