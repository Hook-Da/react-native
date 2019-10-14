import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ExerciseScreen = () =>{
    const heroes = [
        { name: 'Hook', key: '1' },
        { name: 'Hulk', key: '2' },
        { name: 'Sentry', key: '3' },
        { name: 'Xenos', key: '4' },
        { name: 'Narin', key: '5' },
        { name: 'Arsen', key: '6' },
        { name: 'Hook', key: '7' },
        { name: 'Hook', key: '8' },
        { name: 'Hook', key: '9' },
        { name: 'Hook', key: '10' },
        { name: 'Hook', key: '11' },
        { name: 'Hook', key: '12' },
        { name: 'Hook', key: '13' },
    ];
    return (<FlatList
        showsVerticalScrollIndicator={false}
        data={heroes}
        renderItem={({ item }) => {
            return <View><Text style={styles.textStyle}>{item.name} - AGE {Math.floor(Math.random() * 50)}</Text></View>;
        }}
    />);
};
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 22,
        marginBottom: 50
    }
});
export default ExerciseScreen;