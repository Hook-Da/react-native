import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Box Screen 1</Text>
            <Text style={styles.textTwoStyle}>Box Screen 2</Text>
            <Text style={styles.textThreeStyle}>Box Screen 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:2,
        borderColor: 'green',
        //alignItems: 'center',//flex-end,center,streched
        flexDirection:'row',
        justifyContent:'space-between',
        height:300
    },
    textOneStyle:{
        borderWidth:3,
        borderColor:'red',
        /* flex:4 */
    },
    textTwoStyle: {
        borderWidth: 3,
        alignSelf:'center',
        borderColor: 'lime',
        /* flex:4 */
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'blue',
        /* flex:2 */
    }
});

export default BoxScreen;