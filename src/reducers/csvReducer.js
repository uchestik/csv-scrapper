export default function (state={},action){
    switch(action.type){
        case 'GET_CSV':
            return{...state, csv:action.payload};
        default:
            return state
    }
}