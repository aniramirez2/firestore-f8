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
        deleteProduct: (state,action) => {
            console.log("action.payload.id", action.payload)
            const index = state.productos.findIndex(item => item.id === action.payload)
            console.log("index", index)
            if(index !== -1) {
                state.productos.splice(index, 1)
            }
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {agregarProducto,setProductos, setError, updateProduct, deleteProduct} = productosSlice.actions;
export default productosSlice