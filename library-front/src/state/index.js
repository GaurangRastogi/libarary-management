import { createSlice } from "@reduxjs/toolkit";
import { googleLogout } from "@react-oauth/google";

const initialState ={
    user:null
};

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setLogin:(state,action)=>{
            state.user = action.payload.user;
        },
        setLogout:(state)=>{

            if(state.user.google===1){
                googleLogout();
            }

            state.user=null;
        }
    }
})

export const {setLogin,setLogout}=authSlice.actions;
export default authSlice.reducer;