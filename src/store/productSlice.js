import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";
const initialState ={
 data:[],  
 status:StatusCode.IDLE
};
const productSlice =createSlice({
    name : 'products',
    initialState,
    reducers:{
    //   fetchProducts(state,action){
    //     state.data= action.payload;
    //   }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state, action)=>{
          state.status=StatusCode.LOADING ; 
        })
        .addCase(getProducts.fulfilled, (state,action)=>{
            state.data=action.payload;
            state.status=StatusCode.IDLE;
        })
        .addCase(getProducts.rejected,(state, action)=>{
            state.status=StatusCode.ERROR ; 
          })
    }
});


export const {fetchProducts} =productSlice.actions;
export default productSlice.reducer;
export const getProducts=createAsyncThunk('products/get',async ()=>{
    const data =  await fetch("https://fakestoreapi.com/products")
    const result =data.json();
    return result;
})
// export function getProducts(){
//     return async function getProductsThunk(dispatch,getState){
//           //api
//    const data =  await fetch("https://fakestoreapi.com/products")
//    const result =data.json();
//    dispatch(fetchProducts(result));
   
//     }
// }