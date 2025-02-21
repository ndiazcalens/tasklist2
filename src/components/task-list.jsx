import React from "react";
import Form from "../components/form.jsx";
import Task from "../components/task.jsx";
import "../stylesheets/tasklist.css"
import { useState } from "react"; 

//TODO:Agregar scroll para las tareas

function Tasklist() {
    
    
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    
    if (task.text.trim()) {
      task.text=task.text.trim();                 {/* Verifica si el texto de la tarea no está vacío después de eliminar espacios en blanco al inicio y al final. */}
      const updatedTasks = [task, ...tasks];      {/* Elimina espacios innecesarios al inicio y al final del texto de la tarea. */}
      setTasks (updatedTasks);
    };
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);      {/*Se usa .filter() porque devuelve un nuevo array sin modificar el original.*/}
    setTasks(updatedTasks);                                         {/*La logica es que devuelve la lista igual, solo que sin el id que fue pasado como parametro, por ende elimina la tarea con ese id.*/}
  };

  const finishTask = (id) => {
    const updatedTasks = tasks.map(task =>{                         {/*Se recorre el array de tareas con .map(), creando un nuevo array basado en el original.*/}
      if (task.id === id){
        task.finished = !task.finished;
      }
      return task;                                                  {/* Se devuelve la tarea (modificada o no) para que .map() genere el nuevo array.*/}
    });
    setTasks(updatedTasks);                                         {/*Se actualiza el estado con la nueva lista de tareas modificadas.*/}
  };
    
  return(
    <>
      <Form onSubmit={addTask} />
      <div className="task-list-container">
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id} 
              text={task.text}
              deleteTask={deleteTask}
              finished={task.finished}
              finishTask={finishTask}
            />
          )
        }
      </div>
    </>
  );
};

export default Tasklist;