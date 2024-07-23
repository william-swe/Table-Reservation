import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../css/Reserve.css";
import Nav from './Nav';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';

const Reserve = () => {
    const [startDate, setStartDate] = useState(new Date());
    const location = useLocation();
    const navigate = useNavigate();
    const default_times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const times = location.state?.times || default_times;
    const [time, setTime] = useState(times[0]);
    const dropdowns = ["1", "2", "3", "4", "5+"];
    const [dropdownOption, setdropdownOption] = useState("1");
    const occasions = ["Birthday", "Anniversary", "Other"];
    const [occasionOption, setoccasionOption] = useState(occasions[0]);
    const [otherText, setOtherText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/form");
    };

    return (
        <div id="reserve">
            <Nav id="reserve-nav" />
            <form id="reserve-form" onSubmit={handleSubmit}>
                <div>
                    <h1>Reserve a table</h1>
                    <div id="reserve-datepicker">
                        <label>Select Date:</label>
                        <DatePicker
                            id="datepicker"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            minDate={addDays(new Date(), 0)}
                        />
                    </div>
                    <div id="reserve-timepicker">
                        <label>Select Time:</label>
                        <select
                            id="timepicker"
                            value={time}
                            onChange={(event) => setTime(event.target.value)}
                        >
                            {times.map((timeOption, index) => (
                                <option key={index} value={timeOption}>
                                    {timeOption}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div id="reserve-guests-no">
                        <label>Select number of guest(s):</label>
                        <select
                            id="reserve-dropdown"
                            value={dropdownOption}
                            onChange={(event) => setdropdownOption(event.target.value)}
                        >
                            {dropdowns.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div id="reserve-occasion">
                        <label>Select occasion:</label>
                        {occasions.map((option, index) => (
                            <div key={index}>
                                <input
                                    type="radio"
                                    id={`radio-${option}`}
                                    value={option}
                                    checked={occasionOption === option}
                                    onChange={(event) => setoccasionOption(event.target.value)}
                                />
                                <label htmlFor={`radio-${option}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                    {occasionOption === "Other" && (
                        <textarea
                            id="reserve-textarea"
                            placeholder="Please specify your occasion"
                            value={otherText}
                            onChange={(event) => setOtherText(event.target.value)}
                        />
                    )}
                    <button id="reserve-button" type="submit">Next</button>
                </div>
            </form>
        </div>
    );
};

export default Reserve;
