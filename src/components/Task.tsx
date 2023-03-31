import React, { FormEvent } from "react";
import { useState } from "react";

export function Task() {
    const tasks:Array<object> = [];
    var [task, setTasks] = useState();


    var [valueName, setValueName] = useState('');
    var [valueTime,setValueTime] = useState('');
    var [valueLevel, setValueLevel] = useState('');

    const HandleNameChange = (event: any) => {
        const values = event.target.value;
        setValueName(values);
    }
    const HandleTimeChange =  (event:any) => {
        const values = event.target.value;
        setValueTime(values);
    }

    const HandleLevelChange =  (event:any) => {
        const values = event.target.value;
        setValueLevel(values);
    }


    function CreateTask(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // console.log("teste");
        const newTask = {
            name:valueName,
            time:valueTime,
            level:valueLevel
        }
        tasks.push(newTask);
        console.log(newTask);   
      
    }
    return (
        <div>
            <form onSubmit={CreateTask}>
                <input type="text" name="" id="name" placeholder='Nome da tarefa' value={valueName} onChange={HandleNameChange} /> <br />
                <input type="text" name="" id="time" placeholder='hrs' value={valueTime} onChange ={HandleTimeChange} /> <br />
                <input type="text" name="" id="level" placeholder='Nivel' value ={valueLevel} onChange = {HandleLevelChange} /> <br /> <br />
                <button >Criar nova tarefa</button>
            </form>
        </div>
    )
}