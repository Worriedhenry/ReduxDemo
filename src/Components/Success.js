import React, { Component } from "react";
import {useDispatch,useSelector} from "react-redux"
import { ChangeAge } from "../Actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Success(params) {
    const navigate=useNavigate()
    const Name=useSelector((state)=>state.rootReducer.ChangeName)
    const Age=useSelector((state)=>state.rootReducer.ChangeAge)
    return (<div className="App">
        <div>
            <img src='DoneImage.jpeg' />
        </div>
        <h1 style={{color:"green"}}>Success!!</h1>
        <h3 > Hey {Name} you are {Age} year old!! </h3>
        <button className="SuccessButton" onClick={()=>navigate("/")}>Test Again</button>
        </div>
    )
}