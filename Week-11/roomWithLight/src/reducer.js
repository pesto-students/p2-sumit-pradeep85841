let status = false;

export default function reducer(state = status,action){
    const {type} = action;
    switch(type){
        case "ONN":
            return state = true;
        case "OFF":
            return state= false;
        default:
            return state;
    }

}