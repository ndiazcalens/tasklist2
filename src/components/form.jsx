import React from "react";
import "../stylesheets/form.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form(props){
    
    const [input, setInput] = useState('');
    
    const handleChange = (event) => {
        setInput(event.target.value);       {/* setInput actualiza el estado "input" con el valor actual del campo de texto. */}
        console.log(event.target.value);    {/* event.target.value obtiene el valor del input en el momento del evento. */}
    };


    const handleSubmit = (event) => {
        event.preventDefault();         {/* Previene que la página se recargue al enviar el formulario (comportamiento por 
                                        defecto de los formularios en HTML). */}
        const newTask = {
            id: uuidv4(),
            text: input,
            finished: false,
        };


        props.onSubmit(newTask);        {/* Llama a la funcion que se paso como prop en "onSubmit"(addTask) y le pasa
                                        como value newTask => addTask(newTask) */}
    };

    return(
        <form className="task-form"
        onSubmit={handleSubmit}>
            <input 
            className="task-input"
            type="text"
            placeholder="Write a task"
            name="text"
            onChange={handleChange}
            />
            <button className="task-button">
                Add task
            </button>
        </form>
    );
};

export default Form;