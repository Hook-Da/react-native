import React from 'react';
import { Text, StyleSheet, Button, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View>
    <Button onPress={()=>{
      navigation.navigate('List');     
    }} 
      title="Go to List"/>

    <Button onPress={() => {
      navigation.navigate('My_img');
    }}
      title="Go to ImageScreen" />

    <Button onPress={() => {
      navigation.navigate('Counter');
    }}
      title="Go to Counter" />
    <Button onPress={() => {
      navigation.navigate('ColorScreen');
    }}
      title="Go to Color demo" />
    <Button onPress={() => {
      navigation.navigate('Square');
    }}
      title="Go to Square demo" />

    <Button onPress={() => {
      navigation.navigate('Text');
    }}
      title="Go to Text demo" />  

    <Button onPress={() => {
      navigation.navigate('Box');
    }}
      title="Go to Box demo" />  


      <TouchableOpacity onPress={(event)=>{
        console.log(event);
        navigation.navigate('Exer')
      }}>
        <Text>Hello</Text>
        <Text>Hi there</Text>
      </TouchableOpacity>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
