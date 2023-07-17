import React from 'react';
import "./tabela.scss"

export default function DetailsEvent({ activeDay }) {
    const eventDetails = [
        [
            {
                time: '11:00 AM to 12:00 PM',
                description:
                    'Desfrute de uma performance emocionante com Yui Ronald, um artista solo que encanta o público com sua voz cativante e letras inspiradoras. Prepare-se para uma noite de músicas envolventes e momentos emocionantes.',
                artists: [
                    {
                        name: 'yui Ronals',
                        booth: '2F12',
                        image: '../../public/img/Avatar(6).svg'
                    }
                ],

                type: 'Previa',
                icon: '../../public/Icons/Play(2).svg'
                
            },
            {
                time: '12:00 PM to 03:00 PM',
                description:
                    'O trio que vai levar você a uma jornada musical com suas harmonias vocais encantadoras e arranjos instrumentais cativantes. Prepare-se para desfrutar de um repertório diversificado que abrange diversos estilos musicais e emocione seus sentidos.',
                artists: [
                    {
                        name: 'yui Ronals',
                        booth: '2F12',
                        image: '../../public/img/Avatar(6).svg'
                    },
                    {
                        name: 'Emma Satoshi',
                        booth: '2A35',
                        image: '../../public/img/Avatar(5).svg'
                    },
                    {
                        name: 'Bob John',
                        booth: '3G12',
                        image: '../../public/img/Avatar(7).svg'
                    }
                ],

                type: 'AO VIVO',
                icon: '../../public/Icons/Live Camera.svg'
            },
            {
                time: '03:00 PM to 04:00 AM',
                description:
                    'A dupla que vai conquistar seu coração com sua música cativante e performances cheias de energia. Com sua sintonia perfeita e talento extraordinário, eles criarão um ambiente envolvente e contagiarão o público com seu estilo musical único.',
                artists: [
                    {
                        name: 'Sasha Jackson',
                        booth: '5H26',
                        image: '../../public/img/Avatar(4).svg'
                    },
                    {
                        name: 'Diana Brock',
                        booth: '2F24',
                        image: '../../public/img/Avatar(3).svg'
                    }
                ],

                type: 'Em Breve',
                icon: '../../public/Icons/Clock.svg'
            }
        ],

        [
            {
                time: '12:00 PM to 03:00 PM',
                description:
                    'O trio musical composto por DJ Snake, Camila Cabello e Ed Sheeran irá conduzi-lo por uma incrível jornada sonora, envolvendo harmonias vocais encantadoras e arranjos instrumentais cativantes. Prepare-se para se deleitar com um repertório diversificado, abrangendo diversos estilos musicais que certamente irão emocionar seus sentidos.',
                artists: [
                    {
                        name: 'Dj Snake',
                        booth: '2D31',
                        image: '../../public/img/DjSnake.jpg'
                    },
                    {
                        name: 'Camila Cabello',
                        booth: '5B52',
                        image: '../../public/img/CamilaCabello.jpg'
                    },
                    {
                        name: 'Ed Sheeran',
                        booth: '2F35',
                        image: '../../public/img/EdSheeran.jpg'
                    }
                ],
    
                type: 'AO VIVO',
                icon: '../../public/Icons/Live Camera.svg'
            },
            {
                time: '03:00 PM to 04:00 PM',
                description:
                    'Encante-se com a incrível performance de Billie Eilish, uma artista versátil que traz uma fusão única de estilos musicais. Deixe-se envolver pela sua voz cativante e pelas batidas envolventes enquanto ela apresenta suas músicas originais e interpretações únicas.',
                artists: [
                    {
                        name: 'Billie Eilish',
                        booth: '7A45',
                        image: '../../public/img/BillieEilish.jpg'
                    }
                ],

                type: 'Previa',
                icon: '../../public/Icons/Clock.svg'
            },
            {
                time: '04:00 PM to 18:00 AM',
                description:
                    'Prepare-se para uma explosão de energia com Dua Lipa e Katy Perry! Essas artistas incríveis vão incendiar o palco com vocais poderosos, coreografias cativantes e presença de palco eletrizante. Com pop envolvente e letras cativantes, elas vão agitar a plateia com seus sucessos e músicas autorais.',
                artists: [
                    {
                        name: 'Dua Lipa',
                        booth: '5H26',
                        image: '/../../public/img/DuaLipa.jpg'
                    },
                    {
                        name: 'Katy Perry',
                        booth: '4D13',
                        image: '../../public/img/KatyPerry.jpg'
                    }
                ],

                type: 'Em Breve',
                icon: '../../public/Icons/Clock.svg'
            }
        ],

        [
            {
                time: '07:00 PM to 09:00 PM',
                description:
                    'E para finalizar, junte-se a Harry Styles e Ariana Grande para uma noite de pura magia musical! Esses artistas carismáticos e talentosos vão hipnotizar a plateia com suas performances arrebatadoras e vocais impressionantes. Com músicas cativantes e personalidades únicas.',
                artists: [
                    {
                        name: 'Harry Styles',
                        booth: '7A45',
                        image: '../../public/img/HarryStyles.jpg'
                    },
                    {
                        name: 'Ariana Grande',
                        booth: '3C45',
                        image: '../../public/img/ArianaGrande.jpg'
                    }
                ],

                type: 'Em Breve',
                icon: '../../public/Icons/Clock.svg'
            },
            {
                time: '09:00 PM to 11:00 PM',
                description:
                    'Prepare-se para uma explosão de energia com Eminem e Rihanna! Esses artistas incríveis vão incendiar o palco com letras afiadas, rimas rápidas e performances eletrizantes. Com seu estilo único e carisma inegável, eles vão agitar a plateia com seus sucessos e colaborações marcantes.',
                artists: [
                    {
                        name: 'Eminem',
                        booth: '9G13',
                        image: '../../public/img/Eminem.jpg'
                    },
                    {
                        name: 'Rihanna',
                        booth: '8C19',
                        image: '../../public/img/Rihanna.jpg'
                    }
                ],

                type: 'Previa',
                icon: '../../public/Icons/Play(2).svg'
            },
            {
                time: '11:00 PM to 01:00 AM',
                description:
                    'Agora, prepare-se para uma experiência musical emocionante com Zayn e Shawn Mendes! Esses talentosos artistas vão encantar o público com suas vozes incríveis e canções apaixonantes. Com seu talento excepcional e presença magnética, eles vão levar você a uma jornada musical inesquecível.',
                artists: [
                    {
                        name: 'Zyan',
                        booth: '5H26',
                        image: '/../../public/img/Zyan.jpg'
                    },
                    {
                        name: 'Shawn Mendes',
                        booth: '2C17',
                        image: '../../public/img/ShawnMendes.jpg'
                    }
                ],

                type: 'AO VIVO',
                icon: '../../public/Icons/Live Camera.svg'
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