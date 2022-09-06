export const IncAction = () => async dispatch =>{
    dispatch({
     type:"INCREMENT"
    })
}

export const ResetAction = () => async dispatch =>{
 dispatch({
  type:"Reset"
 })
}