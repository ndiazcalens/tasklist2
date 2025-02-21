import React from "react";
import "../stylesheets/task.css";
import { RiDeleteBin4Fill } from "react-icons/ri";

function Task({ id, text, finished, finishTask, deleteTask }){
    return(
        <div className={finished ? 'task-container finished' : 'task-container'}>
            <div onClick= {()=> finishTask(id)} >
                {text}
            </div>
            <div className="task-icon-container"
                onClick= {()=> deleteTask(id)} >
                <RiDeleteBin4Fill className="task-icon "/>
            </div>
        </div>  
    );
};


export default Task;