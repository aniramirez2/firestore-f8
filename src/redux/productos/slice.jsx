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
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {agregarProducto,setProductos, setError} = productosSlice.actions;
export default productosSlice