import React from 'react';
import eventDetailsData from "./eventDetailsData";
import "./tabela.scss"

export default function DetailsEvent({ activeDay }) {

    return (
        <div className="tabela">
            <div className="details">
                <div>
                    <h3>Hora</h3>
                </div>

                <div>
                    <h3>Descrição</h3>
                </div>

                <div>
                    <h3>Artistas</h3>
                </div>
            </div>

            {eventDetailsData[activeDay].map((event, index) => (
                <div className="row" key={index}>
                    <div className='time'>
                        <p>{event.time}</p>
                    </div>

                    <div className='description'>
                        <p>{event.description}</p>
                    </div>

                    <div className='artist'>
                        {event.artists.map((artist, index) => (
                            <div key={index}>
                                <img src={artist.image} alt={artist.name} />
                                <div>
                                    <h2>{artist.name}</h2>
                                    <h3>Booth: <span>{artist.booth}</span></h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <p className={event.type === 'AO VIVO' ? 'aovivo' : ''}>{event.type}</p>
                        <img src={event.icon} alt="" srcset="" />
                    </div>
                </div>
            ))}
        </div>
    );
};