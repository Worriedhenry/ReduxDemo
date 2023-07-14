import React, { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ChangeAge, ChangeName } from "../Actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Home(params) {
    const Name = useSelector((state) => state.rootReducer.ChangeName)
    const [Error, setError] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const Predict = () => {
        axios
            .get("https://api.agify.io/?name=" + Name)
            .then(result => {
                if (result.data.age) {
                    dispatch(ChangeAge(result.data.age))
                    navigate("/success")
                }
                else {
                    setError("An error ocurred! Please ensure your name is correct and does not have spaces")
                    setTimeout(() => {
                        setError("")
                    }, 3000);
                }
            })
            .catch(err => console.error(err));


    }
    return (<div className="App">
        <div>
            <img src="ThinkingBetter.jpeg" />
        </div>
        <h1 style={{ color: 'red' }} >Can I Guess Your Age !!</h1>
        <h3 style={{ color: '#0c93bf' }}>Enter Your name and we will predict your age and gender</h3>
        <input type="text" value={Name} onChange={(e) => dispatch(ChangeName(e.target.value))} style={{ 'height': '24px' }} placeholder="Enter Name"></input>
        <p style={{ color: "red" }}>{Error}</p>
        <p><button className="HomeButton" onClick={Predict}>predict</button></p>
    </div>
    )
}