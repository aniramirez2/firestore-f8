
import { addDoc, collection, getDocs, doc, updateDoc } from "firebase/firestore"
import { firestore } from "../../firebase/firebaseConfig"
import { agregarProducto, setError, setProductos, updateProduct } from "./slice"

export const addProduct = (producto) => {
    return async (dispatch) => {
        try {
            const docRef = await addDoc(collection(firestore, 'productos'), producto)
            console.log("docref", docRef.id)
            const obj = {
                id: docRef.id,
                ...producto
            }
            console.log("producto completo", obj)
            dispatch(agregarProducto(obj))
        }catch(error){
            dispatch(setError({ error: true, code: error.code, message: error.message }))
        }
    }
}

export const getAllProducts = () => {
   return async (dispatch) => {
    try{
        const productos = await getDocs(collection(firestore, 'productos'))
        const newProducts = [];
        productos.forEach(item => newProducts.push({id: item.id, ...item.data()}))

        dispatch(setProductos(newProducts))
    } catch(error){
        dispatch(setError({ error: true, code: error.code, message: error.message })) 
    }
   } 
}

export const updateProductFirestore = (id, producto) => {
    return async (dispatch) => {
        try {
            const docRef = doc(firestore, 'productos', id)
            await updateDoc(docRef, producto)

            dispatch(updateProduct({id, ...producto}))
            console.log("update product", {id, ...producto})
        } catch (error) {
            dispatch(setError({ error: true, code: error.code, message: error.message })) 
        }
    }
}