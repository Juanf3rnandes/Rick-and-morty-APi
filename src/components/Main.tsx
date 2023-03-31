import React from "react";
import { useState } from 'react';
import { TaskMenu } from "./TaskMenu";
import './styles/main.css'
import Personagem from "./api";
import { Task } from "./Task";
import Busca from './Busca'


export class Main extends React.Component {
    render(): React.ReactNode {
        return (
          <div>
            <ul className="characters-list">
            <Busca/>
            </ul>
          </div>
        )
    }
}