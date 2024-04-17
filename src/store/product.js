import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const productSlice = createSlice({
    name:"products",
    initialState : {
        products : [],
        carts: []
    },
    reducers : {
        initProducts(state, action){
            state.products = action.payload
        },
        addToCart(state, action){ 
            const productId = action.payload
            const existingItem = state.carts.find(item=>item.id==productId)
            if (existingItem) {
                existingItem.qty++
            } else {
                state.carts.push({ id:action.payload, qty:1})
            }
        }
    }
})

export const { initProducts, addToCart } = productSlice.actions;

export const fetchProducts = ()=> async dispatch => {
    try {
      const response =  await axios.get('./assets/data/products.json')
      dispatch(initProducts(response.data))
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

export default productSlice.reducer;