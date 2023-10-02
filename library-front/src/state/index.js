import { createSlice } from "@reduxjs/toolkit";
import { googleLogout } from "@react-oauth/google";

const initialState ={
    user:null,
    admin:null
};

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setLogin:(state,action)=>{
            state.user = action.payload.user;
        },
        setLogout:(state)=>{

            if(state.user && state.user.google===1){
                googleLogout();
            }

            state.user=null;
            state.admin=null;
        },
        setAdminLogin:(state,action)=>{
            state.admin=action.payload.admin;
        }
    }
})

export const {setLogin,setLogout,setAdminLogin}=authSlice.actions;
export default authSlice.reducer;