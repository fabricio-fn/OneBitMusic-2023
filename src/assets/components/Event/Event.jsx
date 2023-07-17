import React, { useState } from 'react';
import DetailsEvent from './DetailsEvent/DetailsEvent';
import "./event.scss"

const Event = () => {
    const [activeDay, setActiveDay] = useState(0);

    const handleDayChange = (day) => {
        setActiveDay(day);
    };

    const days = [
        { day: 'Dia 1', date: '23 de setembro' },
        { day: 'Dia 2', date: '24 de setembro' },
        { day: 'Dia 3', date: '25 de setembro' }
    ];

    return (
        <div className="event">
            <div className='tittle'>
                <h3>Programação</h3>
            </div>

            <div className="day">
                {days.map((day, index) => (
                    <button
                        key={index}
                        className={activeDay === index ? 'active' : ''}
                        onClick={() => handleDayChange(index)}
                    >
                        {day.day}
                        <span>{day.date}</span>
                    </button>
                ))}
            </div>

            <DetailsEvent activeDay={activeDay} />
        </div>
    );
};

export default Event;