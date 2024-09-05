import { createSlice } from "@reduxjs/toolkit";

const productosSlice = createSlice({
    name: "productos",
    initialState: {
        productos: [],
    },
    reducers: {
        agregarProducto: (state, action) => {
            state.productos.push(action.payload)
        },
        setProductos: (state, action) => {
            state.productos = action.payload
        },
        updateProduct:(state, action) => {
            console.log("action.payload", action.payload)
            const index = state.productos.findIndex(item => item.id === action.payload.id)
            if(index !== -1) {
                state.productos[index] = action.payload
            }
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {agregarProducto,setProductos, setError, updateProduct} = productosSlice.actions;
export default productosSlice