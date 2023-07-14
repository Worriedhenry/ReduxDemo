import React, { Component } from "react";
import {useDispatch,useSelector} from "react-redux"
import { ChangeAge, ChangeName } from "../Actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Home(params) {
    const Name=useSelector((state)=>state.rootReducer.ChangeName)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const Predict =async ()=>{
        let result =await axios.get("https://api.agify.io/?name="+Name)
        console.log(result.data)
        if (result.data.age){
            dispatch(ChangeAge(result.data.age))
            navigate("/success")
        }

        
    }
    return (<div className="App">
        <h1>Welcome</h1>
        <h3>Enter Your name and we will predict your age and gender</h3>
        <input type="text" value={Name} onChange={(e)=>dispatch(ChangeName(e.target.value))} placeholder="Enter Name"></input>
        <p><button onClick={Predict}>predict</button></p>
        </div>
    )
}