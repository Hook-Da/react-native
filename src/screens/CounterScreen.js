import React,{useState, useReducer} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const PAYLOAD = 1;

const reducer = (state,action) => {
    //state === {counter_new:0}
    //action === {amount:1} or {amount:0}
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
                    dispatch({ amount: PAYLOAD});
                }
            }
            title="Add to counter"
        />
        <Button
            onPress={
                () => {
                    /* setCounter(counter-1); */
                    dispatch({ amount: -PAYLOAD});
                }
            }
            title="Decrease counter"
        />
        <Text>{state.counter_new}</Text>
    </View>
}
export default Counter;