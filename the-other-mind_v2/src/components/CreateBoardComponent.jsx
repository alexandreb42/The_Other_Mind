import React, { useContext, useState } from "react"
/*
import '../styles/create.css';
import CreateGameNameComponent from "./Create/CreateGameNameComponent"
import CreateGameParamsComponent from "./Create/CreateGameParamsComponent"
import CreateGameOkComponent from "./Create/CreateGameOkComponent"
*/

export default function CreateBoardComponent({gameModules}) {
    return(
        <div className="createComponent">
            <p>La page Créer !</p>
            <ul>
                {gameModules && gameModules.map(module2 => (
                    <li>{module2.name}</li>
                ))}
            </ul>
        </div>
    )
}