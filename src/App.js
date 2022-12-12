import { useState } from 'react';
import {Tarea} from './componentes/Tarea'
import './App.css';
import {Formulario  } from "./componentes/Formulario"
function App() {
  const [tarea, setTarea] =useState('')
  const [listadoTareas, setListadoTareas] = useState([])
  function handleSubmit(e){
    e.preventDefault()
    if(tarea===''){
      alert('DEBE INGRESAR UNA TAREA')
      return
    }
    const nuevaTarea = {
      id: Date.now(), 
      tarea: tarea, 
      completado: false
    }

    const temp = [nuevaTarea, ...listadoTareas]
    setListadoTareas(temp)
    setTarea('');
    }

  function handleChange(e){
    setTarea(e.target.value)
    console.log(tarea)
  }
  function onActualziarTarea(objEditarTarea){
    const {id, tarea} = objEditarTarea
    const temp = [ ...listadoTareas]
    const elemento = temp.find(item=>item.id===id)
    elemento.tarea = tarea;
    setListadoTareas(temp)
  }

  return (
    <>
    <div className='contenedorPrincipal'>
      <h1>To Do List</h1>
      <div className='contenedorFormulario'>
        <Formulario 
          tarea={tarea}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
      <div className='contenedorTarea'>
        <h2>Lista de Tarea</h2>
        <div className='contenedorInfoTareas'>
          {
            listadoTareas.map(tarea =>(
              <Tarea
                key={tarea.id}
                id={tarea.id}
                tarea={tarea} 
                onActualziarTarea= {onActualziarTarea}/>
            ))
          }
        </div>
      </div>
    </div>
      

    </>
  );
}

export default App;
