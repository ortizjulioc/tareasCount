import React from "react";
import './TodoForm.css'
import { TodoContext } from '../TodoContext'

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext( TodoContext)

    const [newtodoValue, setnewtodoValue] = React.useState('  ')

    const onSubmit = (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        // Validar que el campo no esté vacío
        if (!newtodoValue.trim()) { 
            alert("El TODO no puede estar vacío."); // Mensaje de alerta o cualquier notificación
            return; // No agregar el TODO si está vacío
        }
        addTodo(newtodoValue.trim()); // Agregar el TODO sin espacios al inicio o final
        setOpenModal(false); // Cierra el modal después de agregar
    };

    const onCancel = (event) => {
        setOpenModal(false)
    }

    const onChange = (event) => {
      setnewtodoValue(event.target.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="cortart cebolla para el almuerzo"
                value={newtodoValue}
                onChange={onChange}
                required
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>

                <button
                    type=""
                    className="TodoForm-button TodoForm-button--add"
                >Agregar</button>
            </div>
        </form>
    )
}


export { TodoForm }
