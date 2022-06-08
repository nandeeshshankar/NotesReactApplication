const initialState = [
    {title: 'Working on Demo1', body: "abcdefghijklmnopqr"},
    {title: 'Working on Demo2', body: "abcdefghijklmnopqr"},
    {title: 'Working on Demo3', body: "abcdefghijklmnopqr"}
   ];

export const reducer = function(state = initialState, action){
    switch(action.type){
        case 'ADD':
            return [...state,action.payload];
        default:
            return state;
    }
}