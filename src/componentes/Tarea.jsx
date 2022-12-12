import { useState } from "react"

export function Tarea (props){
    const {tarea, onActualziarTarea} = props
    const [editando, setEditando] = useState(false)
    function ModoEdicionActivado  () {
        const [valor, setValor] = useState(tarea.tarea)
        function handleChange (e){
            const text = e.target.value
            setValor(text)
        }
        function handleClick (e){
            e.preventDefault()
            onActualziarTarea(
                {
                    id: tarea.id,
                    tarea: valor,
                    completado: false
                }
            )
        }
        return (
            <>
            <input 
                type="text"
                value={valor}
                onChange={handleChange}/>
            <button
                className="btn"
                onClick={handleClick}

            >Guardar</button>
            <button
                className="btn btnBorrar"
            >Borrar</button>
            </>
        );
    }

    function ModoEdicionDesactivado (){
        return (
            <>
            <span className="spanTarea">{tarea.tarea}</span>
            <button
                className="btn btnEditar"
                onClick={()=>setEditando(true)}
            >Editar</button>
            <button
                className="btn btnBorrar"
            >Eliminar</button>
            </>
        )
    }
    return (
        <>
        <div className="contenedorTarea" id={tarea.id}>
            {
                editando 
                ?<ModoEdicionActivado/>
                :<ModoEdicionDesactivado/>
            }
        </div>
        </>
    )
}

