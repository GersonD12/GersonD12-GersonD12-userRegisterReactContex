export const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case 'login':
            
            return{
                isAuth: true,
                user: action.payload,
            };
        case 'logout':
            return{
                isAut: false 
            }
    
        default:
            return state;
    }
}