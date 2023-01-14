import {createSlice} from '@reduxjs/toolkit';

var productState = createSlice(
    {
        name:"productState",
        initialState:{
            allProduct:[]
        },
        reducers:{
            setAllProductFunc:(p1,data)=>
            {
                p1.allProduct=data.payload
            }
        }
    }
)

export const {setAllProductFunc} = productState.actions;
export default productState.reducer;