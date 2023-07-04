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
    const [bookingDays, setBooking] = useState([])

    const [canIbook, setCanIBook] = useState(false)
    
    let firstDayOfMonth = new Date(currYear, month, 1).getDay();
    let lastDateofMonth = new Date(currYear, month + 1,0).getDate();
    let lastDaysOfMonth = new Date(currYear, month, lastDateofMonth).getDay();
    let lasDateOfLastMonth = new Date(currYear, month,0).getDate();


    for (let i = firstDayOfMonth-1; i > 0; i--){
        let day = lasDateOfLastMonth - i + 1;
        days.push({
            'value': day,
            'status': 'inactive'
        })
    }

    for(let i = 1; i <= lastDateofMonth; i++){
        days.push({
            'value': i,
            'status': 'active'
        })
    }

    for(let i = lastDaysOfMonth; i < 6; i++){
        let day = i - lastDaysOfMonth +1
        days.push({
            'value': day,
            'status':'inactive'
        })
    }
    
    const changePlusMonth = () => {
        setIntMonth(month+1)
    }

    const changeMinusMonth = () => {
        setIntMonth(month-1)
    }

    const bookingManagement = (key) => {
        if(bookingDays.length < 1){
            setBooking([...bookingDays,key])
        }else if(bookingDays.length >= 1 && bookingDays.length < 2){
            setBooking([...bookingDays, key])
        }else{
            console.log("lenght --> ", bookingDays.length)
            console.log(bookingDays)
        }      
    }

    const checkDaysStatus = () => {
        for(let i =bookingDays[0]; i <= bookingDays[1]; i++){
            days[i].status = 'selected'
        }
        setDays(days)
        setCanIBook(!canIbook)
    }


    useEffect(() => {
        setCurrentMonth(months[month])
        days.splice(0, days.length)
        let firstDayOfMonth = new Date(currYear, month, 1).getDay();
        let lastDateofMonth = new Date(currYear, month + 1,0).getDate();
        let lastDaysOfMonth = new Date(currYear, month, lastDateofMonth).getDay();
        let lasDateOfLastMonth = new Date(currYear, month,0).getDate();
        
        
    for (let i = firstDayOfMonth-1; i > 0; i--){
        let day = lasDateOfLastMonth - i + 1;
        days.push({
            'value': day,
            'status': 'inactive'
        })
    }

    for(let i = 1; i <= lastDateofMonth; i++){
        days.push({
            'value': i,
            'status': 'active'
        })
    }
    for(let i = lastDaysOfMonth; i < 6; i++){
        let day = i- lastDaysOfMonth + 1
        days.push({
            'value': day,
            'status':'inactive'
        })
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
                        (item, key) => <li className={item.status} alt={key} onClick={() => bookingManagement(key)}>{item.value}</li>
                    )}
                </ul>
            </div>
            <div className="booking-buttons">
                <button className={`btn btn-success ${canIbook}`}>Reservar</button>
                <button className='btn btn-warning' onClick={checkDaysStatus}>Comprobar fechas</button>
            </div>
        </div>
    );
}

export default Calendar;