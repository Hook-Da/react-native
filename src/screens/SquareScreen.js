import React, {/* useState */ useReducer} from  'react';
import { Text, View, StyleSheet } from 'react-native';
import ColorCount from '../components/ColorCount';

const COLOR_INCREMENT = 15;

const reducer = (state,action) =>{
    const myArr = {
        1:()=>{
            return { ...state, [action.colorTochange]: state[action.colorTochange] + action.amount };
        },
        2:()=>{
            return state;
        }
    };
    const check = (color) => {
        if (state[color] === 0 && action.amount < 0){
            return 2;
        } else if (state[color] === 255 && action.amount > 0){
            return 2;
        }else{
            return 1;
        }
    }
    return myArr[check(action.colorTochange)]();
}

const SquareScreen = () =>{
    /* const [red, setRed] = useState(0);
    const [green, SetGreen] = useState(0);
    const [blue, setBlue ] = useState(0);
    console.log(red); */
    const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0});
    const {red,green,blue} = state;
    console.log(red,green,blue);
    return (
        <View>
            <Text>Square Screen</Text>
            <ColorCount color="red" 
                onIncrease={()=>{
                    dispatch({colorTochange:'red',amount:COLOR_INCREMENT});
                }}
                onDecrease={() =>{
                    dispatch({ colorTochange: 'red', amount: -COLOR_INCREMENT });
                }}
                />
            <ColorCount color="green" 
                onIncrease={() =>{
                    dispatch({ colorTochange: 'green', amount: COLOR_INCREMENT });
                }}
                onDecrease={() =>{
                    dispatch({ colorTochange: 'green', amount: -COLOR_INCREMENT });
                }}
            />
            <ColorCount color="blue" 
                onIncrease={() =>{
                    dispatch({ colorTochange: 'blue', amount: COLOR_INCREMENT });
                }}
                onDecrease={() =>{
                    dispatch({ colorTochange: 'blue', amount: -COLOR_INCREMENT });
                }}
            />
            <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}}></View>
        </View>
    );
}

const styles = StyleSheet.create({});

export default SquareScreen;