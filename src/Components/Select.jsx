import React from "react";
import '../App.css'
import { useNavigate } from "react-router";




export const Select = () => {
    const navigate = useNavigate()
    return <>
        <div className="select">
            <h1>Select a time for your 30min session</h1>
            <div className="select-list">
                <ul className="list">
                    <li>Tuesday, June 1 <button> right arrow</button></li>
                    <li>Tuesday, June 19</li>
                    <li>Tuesday, June 12</li>
                    <li>Tuesday, June 14</li>
                </ul>
                <div className="times">
                    <h2 >Available times</h2>
                    <p>here will be list of availiable times</p>
                </div>
            </div>
            <button>confirm and pay</button> <br></br>
            <button onClick={() => navigate(-1)}>go back</button>
        </div>
    </>
}