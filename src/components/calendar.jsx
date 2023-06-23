import React from "react";
import "../styles/components.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Calendar = () => {
    return(
        <div className="calendar-box">
            <header className="calendar-header">
                <p className="current-date">June 2023</p>
                <div className="icons">
                    <span className="arrow-left">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    </span>
                    <span className="arrow-right">
                    <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </div>
            </header>
            <div className="calendar-week-body">
                <ul className="weeks">
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </ul>
                <ul className="days">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>27</li>
                    <li>28</li>
                    <li>29</li>
                    <li>30</li>
                    <li>1</li>
                </ul>
            </div>
        </div>
    );
}

export default Calendar;