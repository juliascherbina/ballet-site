import React, { useState } from "react";
import '../App.css'
import { Link } from "react-router-dom";

import { Select } from "./Select";





export const Main = () => {

    return <>
        <div className="main">
            <div className="main-sessions">
                  <p>Yuliia is a proffessional ballet dancer. With huge experience in training practice. She visited a lot of countries with different ballet companies. 
                    Her lessons for adults with no experience and with huge experience in body movement. Lessons included stretching, balance, abs, back workouts also with body-ballet
                     movements. After her lessons you really start to feel relief in your muscles,strength in your body and all your body parts will be thank you for those type of workload.   </p>
                <div className="main-select">
                    <h3 className="main-header">Select your sessions</h3>
                    <div className="main-item">
                        <img></img>
                        <h4>30min</h4>
                        <span>50$</span>
                        <Link to='/pay'><button>select</button></Link>

                    </div>
                    <div className="main-item">
                        <img></img>
                        <h4>60min</h4>
                        <span>100$</span>
                        <Link to='/pay'><button >select</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </>
}