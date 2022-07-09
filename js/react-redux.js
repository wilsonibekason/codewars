import   {React, Fragment} from 'react';


const initialState = {
    options: [
        {id: 1, name: 'wilson', onEnabled: true, value: 10 },
        {id: 1, name: 'hydrated', onEnabled: true, value: 10 },
        {id: 1, name: 'charls', onEnabled: false, value: 23 },
    ],
    quantity: 1,
    selected: 1,
};
console.log(options.value)
const reduceButtonState = (state) => {
   return {
    ...state,
    decrementDisabled: state.quantity === 0,
    incrementDisabled: state.quantity === 10,
   };
}

const reduceTotal = (state) => {
    const options = state.options?.find(option => option?.id === state.selected);
    return {...state, quantity: state.quantity + option.value}
}

const reduce = (state, action) => {
    let newState;
    switch(action.type){
        case 1: 
        newState = reduceButtonState(state);
    }
},