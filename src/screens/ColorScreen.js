import React, {useState} from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';

const ColorScreen = () =>{
    [newColor,setColor] = useState([]);
    console.log('%c++','background:lime',newColor);
    return (
        <View><Button 
            onPress = {
                ()=>{
                    setColor([...newColor,changeColor()]);
                }
            }
            title="Add color"
        />
            
            <FlatList 
                keyExtractor = {item=>item}
                data={newColor}
                renderItem={({item})=>{
                    return <View style={{ height: 100, width: 100, backgroundColor: item }}></View>
                }}
            />
        </View>
    );
}

const changeColor = () =>{
    let alpha = Math.random();
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgba(${red},${green},${blue},${alpha})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;