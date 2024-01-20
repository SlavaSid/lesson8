export const ADD_USER = 'users/addUser'
export const SET_USERS = 'users/setUsers'
export const DELETE_USER = 'users/deleteUser'

const initialState = {
    users: []
}

export const usersReducer = (store = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...store, users: [...store.users, action.payload]}
            
            
        case SET_USERS:
            return {...store, users: action.payload}
            
            
        case DELETE_USER:
            return {...store, users: store.users.filter(user => user.id !== action.payload)}
            
            
    
        default: return store;
    }
}