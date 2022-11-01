import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from './AuthSlice'


const store = configureStore({
    reducer : {
        AuthSlice: AuthSlice
    }
})


export default store
