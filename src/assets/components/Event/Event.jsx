import React, { useState } from 'react';
import DetailsEvent from './DetailsEvent/DetailsEvent';
import "./event.scss"
import Button from '../Button/Button';

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
        
        <section id="event" className="event">
            <div className='tittle'>
                <h3>Programação</h3>
            </div>

            <div className="day">
                {days.map((day, index) => (
                    <Button
                        key={index}
                        classStyle={activeDay === index ? 'active' : ''}
                        on_Click={() => handleDayChange(index)}
                        text={day.day}
                        span={day.date}
                    />
                ))}
            </div>

            <DetailsEvent activeDay={activeDay} />
        </section>
    );
};

export default Event;