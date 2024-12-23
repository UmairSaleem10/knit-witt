
// export const create = data =>{
//     return{
//         type:'create',
//         payload:data
//     }
// }

export const  ACTION_TYPES={
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL',
}


export const fetchAll=()=> dispatch => {
    //get apo required.
    dispatch({
        type:ACTION_TYPES.FETCH_ALL,
        payload:[]
    })
}