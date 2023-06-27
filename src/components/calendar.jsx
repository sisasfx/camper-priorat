import React, { useEffect, useState } from "react";
import "../styles/components.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Calendar = () => {
    let date = new Date();
    let currYear = date.getFullYear();
    const months = ['January', 'February', 'March', 'April', 'May', 'June','July','August','Septembre', 'October','November','December'];
    const days = [];
    
    const [month, setIntMonth] = useState(date.getMonth())
    const [daysOfMonthState, setDays] = useState(days)
    const [currentMonth, setCurrentMonth] = useState(months[month])
    
    let lastDateofMonth = new Date(currYear, month + 1,0).getDate();
    
    for(let i = 1; i <= lastDateofMonth; i++){
        days.push(i)
    }

    
    const changePlusMonth = () => {
        setIntMonth(month+1)
    }

    const changeMinusMonth = () => {
        setIntMonth(month-1)
    }

    useEffect(() => {
        setCurrentMonth(months[month])
        days.splice(0, days.length)
        let lastDateofMonth = new Date(currYear, month + 1,0).getDate();
    
        for(let i = 1; i <= lastDateofMonth; i++){
            days.push(i)
        }

        setDays(days)
    },[month])


    return(
        <div className="calendar-box">
            <header className="calendar-header">
                <p className="current-date">{currentMonth} {currYear}</p>
                <div className="icons">
                    <span className="arrow-left" >
                    <FontAwesomeIcon icon={faArrowLeft} onClick={changeMinusMonth} />
                    </span>
                    <span className="arrow-right" >
                    <FontAwesomeIcon icon={faArrowRight} onClick={changePlusMonth} />
                    </span>
                </div>
            </header>
            <div className="calendar-week-body">
                <ul className="weeks">
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                    <li>Sun</li>
                </ul>
                <ul className="days">
                    {daysOfMonthState.map(
                        (item, key) => <li alt={key}>{item}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Calendar;