
import {createSlice} from '@reduxjs/toolkit' 


const AuthSlice = createSlice({
    name:'AuthSlice',
    initialState:{
        login:false,
        token:''
    },

    reducers:{
        loginHandler: (state,action) =>{
            state.login = true
            state.token = action.payload
            localStorage.setItem('token', action.payload)
        }, 
        logoutHandler: (state)=> {
            state.login = false;
            state.token = ''
            localStorage.clear()
        }  
    }
})

export const  {loginHandler , logoutHandler} = AuthSlice.actions
export default AuthSlice.reducer 