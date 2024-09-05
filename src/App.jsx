import { useDispatch, useSelector } from "react-redux"
import { googleLogin } from "./redux/users/middleware"
import { addProduct, getAllProducts } from "./redux/productos/middleware"
import { useEffect } from "react"

function App() {
  const dispatch = useDispatch()
  const {user} = useSelector((store) => store.user)
  const {productos} = useSelector((store) => store.productos)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {};
    const formElements = e.target.elements;

    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.name) { // Solo se toman los elementos con atributo 'name'
            formData[element.name] = element.value;
        }
    }

    console.log(formData);
    dispatch(addProduct(formData))
  }

  const fetchData = () => {
    dispatch(getAllProducts())
  }

  useEffect(()=> {
   fetchData()
  }, [])


  return (
    <>
  
      <h1>Vite + React</h1>
      <button onClick={()=> dispatch(googleLogin())}>Iniciar Con google</button>
      <div className="card">
        Usuario loggeado {user?.displayName}
      </div>

      <form onSubmit={(event)=> handleSubmit(event)}>
        <div>
          <label>Nombre</label>
          <input name="nombre" type="text" placeholder="Nombre del producto"></input>
        </div>
        <div>
          <label>Precio</label>
          <input name="precio" type="text" placeholder="Precio"></input>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div>
        {productos?.map((element) => (
          <div key={element.id} className="flex w-full">
            <h5>{element.nombre} - {element.precio}</h5>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
