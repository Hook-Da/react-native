import React,{useState, useReducer} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const reducer = (state,action) => {
    return { ...state, counter_new: state.counter_new + action.amount};
}

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const [state,dispatch] = useReducer(reducer,{counter_new:0});
    return <View>
        <Button
            onPress={
                ()=>{
                   /*  setCounter(counter+1); */
                   dispatch({amount:1});
                }
            }
            title="Add to counter"
        />
        <Button
            onPress={
                () => {
                    /* setCounter(counter-1); */
                    dispatch({amount:-1});
                }
            }
            title="Decrease counter"
        />
        <Text>{state.counter_new}</Text>
    </View>
}
export default Counter;