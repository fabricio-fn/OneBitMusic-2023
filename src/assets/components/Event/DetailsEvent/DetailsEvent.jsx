import React from 'react';
import "./tabela.scss"

export default function DetailsEvent({ activeDay }) {
    const eventDetails = [
        [
            {
                time: '07:00 PM to 09:00 PM',
                description:
                    'Uma noite de jazz com a talentosa cantora e saxofonista, Laura Santos. Delicie-se com sua voz suave e os solos envolventes de saxofone enquanto ela interpreta clássicos do jazz e músicas originais. Prepare-se para uma experiência musical inesquecível!',
                artists: [
                    {
                        name: 'Laura Santos',
                        booth: 'Booth: 7A45',
                        image: '../../public/img/Avatar(5).svg'
                    }
                ],

                type: 'Previa',
                icon: '../../public/Icons/Clock.svg'
                
            },
            {
                time: '09:00 PM to 10:00 PM',
                description:
                    'O duo "Acoustic Vibes" vai te encantar com seu estilo acústico e harmonias vocais emocionantes. Deixe-se levar pelas melodias suaves e pela atmosfera intimista enquanto eles tocam uma seleção de músicas pop, folk e indie. Uma noite perfeita para os amantes da música.',
                artists: [
                    {
                        name: 'Julia Mendes',
                        booth: 'Booth: 2D31',
                        image: '../../public/img/Avatar(4).svg'
                    },
                    {
                        name: 'Julia Mendes',
                        booth: 'Booth: 2D31',
                        image: '../../public/img/Avatar(4).svg'
                    },
                    {
                        name: 'Pedro Silva',
                        booth: 'Booth: 8C19',
                        image: '../../public/img/Avatar(4).svg'
                    }
                ],

                type: 'Previa',
                icon: '../../public/Icons/Clock.svg'
            },
            {
                time: '10:00 PM to 12:00 AM',
                description:
                    'Prepare-se para uma explosão de energia com a banda de rock "Wildfire". Com riffs de guitarra poderosos, vocais intensos e uma presença de palco eletrizante, eles vão agitar a plateia com seus sucessos e músicas autorais. Não perca essa performance enérgica!',
                artists: [
                    {
                        name: 'Camila Costa',
                        booth: 'Booth: 5H26',
                        image: '../../public/img/Avatar(4).svg'
                    },
                    {
                        name: 'Camila Costa',
                        booth: 'Booth: 9G13',
                        image: '../../public/img/Avatar(4).svg'
                    }
                ],

                type: 'Previa',
                icon: '../../public/Icons/Clock.svg'
            }
        ],

        [
            {
                time: '07:00 PM to 09:00 PM',
                description:
                    'Uma noite de jazz com a talentosa cantora e saxofonista, Laura Santos. Delicie-se com sua voz suave e os solos envolventes de saxofone enquanto ela interpreta clássicos do jazz e músicas originais. Prepare-se para uma experiência musical inesquecível!',
                artists: [
                    {
                        name: 'Laura Santos',
                        booth: 'Booth: 7A45',
                        image: '../../public/img/BillieEilish.jpg'
                    }
                ],

                type: 'Previa',
                icon: '../../public/Icons/Clock.svg'
            },
            {
                time: '09:00 PM to 10:00 PM',
                description:
                    'O duo "Acoustic Vibes" vai te encantar com seu estilo acústico e harmonias vocais emocionantes. Deixe-se levar pelas melodias suaves e pela atmosfera intimista enquanto eles tocam uma seleção de músicas pop, folk e indie. Uma noite perfeita para os amantes da música.',
                artists: [
                    {
                        name: 'Julia Mendes',
                        booth: 'Booth: 2D31',
                        image: '../../public/img/DjSnake.jpg'
                    },
                    {
                        name: 'Julia Mendes',
                        booth: 'Booth: 2D31',
                        image: '../../public/img/CamilaCabello.jpg'
                    },
                    {
                        name: 'Dua Lipa',
                        booth: 'Booth: 2F35',
                        image: '../../public/img/EdSheeran.jpg'
                    }
                ],

                type: 'Previa',
                icon: '../../public/Icons/Clock.svg'
            },
            {
                time: '10:00 PM to 12:00 AM',
                description:
                    'Prepare-se para uma explosão de energia com a banda de rock "Wildfire". Com riffs de guitarra poderosos, vocais intensos e uma presença de palco eletrizante, eles vão agitar a plateia com seus sucessos e músicas autorais. Não perca essa performance enérgica!',
                artists: [
                    {
                        name: 'Gabriel Fernandes',
                        booth: 'Booth: 5H26',
                        image: '/../../public/img/DuaLipa.jpg'
                    },
                    {
                        name: 'Camila Costa',
                        booth: 'Booth: 9G13',
                        image: '../../public/img/Eminem.jpg'
                    }
                ],

                type: 'Previa',
                icon: '../../public/Icons/Clock.svg'
            }
        ],

        [
            {
                time: '07:00 PM to 09:00 PM',
                description:
                    'Uma noite de jazz com a talentosa cantora e saxofonista, Laura Santos. Delicie-se com sua voz suave e os solos envolventes de saxofone enquanto ela interpreta clássicos do jazz e músicas originais. Prepare-se para uma experiência musical inesquecível!',
                artists: [
                    {
                        name: 'Laura Santos',
                        booth: 'Booth: 7A45',
                        image: '../../public/img/HarryStyles.jpg'
                    }
                ],

                type: 'Previa',
                icon: '../../public/Icons/Clock.svg'
            },
            {
                time: '09:00 PM to 10:00 PM',
                description:
                    'O duo "Acoustic Vibes" vai te encantar com seu estilo acústico e harmonias vocais emocionantes. Deixe-se levar pelas melodias suaves e pela atmosfera intimista enquanto eles tocam uma seleção de músicas pop, folk e indie. Uma noite perfeita para os amantes da música.',
                artists: [
                    {
                        name: 'Julia Mendes',
                        booth: 'Booth: 2D31',
                        image: '../../public/img/KatyPerry.jpg'
                    },
                    {
                        name: 'Pedro Silva',
                        booth: 'Booth: 8C19',
                        image: '../../public/img/Rag-n-BoneMan.jpg'
                    }
                ],

                type: 'Previa',
                icon: '../../public/Icons/Clock.svg'
            },
            {
                time: '10:00 PM to 12:00 AM',
                description:
                    'Prepare-se para uma explosão de energia com a banda de rock "Wildfire". Com riffs de guitarra poderosos, vocais intensos e uma presença de palco eletrizante, eles vão agitar a plateia com seus sucessos e músicas autorais. Não perca essa performance enérgica!',
                artists: [
                    {
                        name: 'Gabriel Fernandes',
                        booth: 'Booth: 5H26',
                        image: '/../../public/img/Rihanna.jpg'
                    },
                    {
                        name: 'Camila Costa',
                        booth: 'Booth: 9G13',
                        image: '../../public/img/ShawnMendes.jpg'
                    }
                ],

                type: 'Previa',
                icon: '../../public/Icons/Clock.svg'
            }
        ]
    ];

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

            {eventDetails[activeDay].map((event, index) => (
                <div className="row" key={index}>
                    <div>
                        <p>{event.time}</p>
                    </div>

                    <div>
                        <p>{event.description}</p>
                    </div>

                    <div className='artist'>
                        {event.artists.map((artist, index) => (
                            <div key={index}>
                                <img src={artist.image} alt={artist.name} />
                                <div>
                                    <h2>{artist.name}</h2>
                                    <span>{artist.booth}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <p>{event.type}</p>
                        <img src={event.icon} alt="" srcset="" />
                    </div>
                </div>
            ))}
        </div>
    );
};