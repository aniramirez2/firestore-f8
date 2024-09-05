import { useDispatch, useSelector } from "react-redux"
import { googleLogin } from "./redux/users/middleware"
import { addProduct, getAllProducts, updateProductFirestore } from "./redux/productos/middleware"
import { useEffect, useState } from "react"

function App() {
  const dispatch = useDispatch()
  const {user} = useSelector((store) => store.user)
  const {productos} = useSelector((store) => store.productos)

  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [id, setId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      nombre,
      precio
    };
    dispatch(addProduct(formData))
  }

  const fetchData = () => {
    dispatch(getAllProducts())
  }

  useEffect(()=> {
   fetchData()
  }, [])

  const handleUpdate = (id, producto) => {
    setNombre(producto.nombre)
    setPrecio(producto.precio)
    setId(id)
  }
  const sendDispatchUpdate = () => {
    dispatch(updateProductFirestore(id, {nombre, precio}))
    setId(null)
    setNombre('')
    setPrecio('')
  }
  return (
    <>
      <div className="container">
        <h1>Vite + React</h1>
        <button onClick={()=> dispatch(googleLogin())}>Iniciar Con google</button>
        <div className="card">
          Usuario loggeado {user?.displayName}
        </div>

        <form onSubmit={(event)=> handleSubmit(event)}>
          <div>
            <label>Nombre</label>
            <input name="nombre" type="text" value={nombre} placeholder="Nombre del producto" onChange={(e)=>setNombre(e.target.value)}></input>
          </div>
          <div>
            <label>Precio</label>
            <input name="precio" type="text" value={precio} placeholder="Precio" onChange={(e)=>setPrecio(e.target.value)}></input>
          </div>
          <button type="submit">Crear</button>
          <button type="button" onClick={()=>sendDispatchUpdate()}>Actualizar</button>
        </form>
        <div>
          {productos?.map((element) => (
            <div key={element.id} className="flex w-full">
              <h5>{element.nombre} - {element.precio} - <button type="button" onClick={()=> handleUpdate(element.id, element)}>Actualizar</button> - <button type="button">Eliminar</button> </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
