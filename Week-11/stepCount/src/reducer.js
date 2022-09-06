let count = 0;

export default function reducer(state = count,action){
    const {type} = action;
    switch(type){
        case "INCREMENT":
            return state+1;
        case "RESET":
            return state=0;
        default:
            return state;
    }

}