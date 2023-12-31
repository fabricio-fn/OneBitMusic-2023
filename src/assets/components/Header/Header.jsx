import React, { useState, useEffect } from 'react';
import './header.scss';
import Button from '../Button/Button';

export default function Header() {
    const [showMenu, setShowMenu] = useState(true)
    const [fixed, setFixed] = useState(false)
    const [backgroundHeader, setBackgroundHeader] = useState(false);

    function ToggleMenu() {
        setShowMenu(!showMenu);
        setBackgroundHeader(!backgroundHeader);
    }

    useEffect(() => {
        function handleScroll() {
            if (window.innerWidth <= 768) {
                setShowMenu(false);
            }

            if (window.scrollY >= 100) {
                setFixed(true);
                setBackgroundHeader(true);
            } else {
                setFixed(false);
                setBackgroundHeader(false);
            }
        }

        function handleResize() {
            setShowMenu(window.innerWidth > 768);
            setBackgroundHeader(false);
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize(); // Chama handleResize() no início para configurar o estado inicial.

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className={`header ${fixed ? 'fixedHeader' : ''} ${backgroundHeader ? 'backgroundHeader' : ''}`}>

            <div className='logo'>
                <a href="">onebit<span>music</span></a>
                <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.439 2.646C16.3669 1.92163 16.0283 1.24986 15.489 0.76096C14.9496 0.272061 14.248 0.000879492 13.52 0H13.465C12.7369 0.000430879 12.035 0.27146 11.4956 0.760445C10.9561 1.24943 10.6177 1.92146 10.546 2.646C10.537 2.74 10.532 2.836 10.532 2.933V6.883H5.925V6.257C5.92421 5.47688 5.61402 4.72893 5.06248 4.17721C4.51095 3.62549 3.76312 3.31506 2.983 3.314H2.94299C2.1627 3.31479 1.4146 3.62511 0.862854 4.17686C0.311107 4.72861 0.000794187 5.47671 0 6.257V11.868C0 11.905 0 11.942 0 11.979C0.0234186 14.1411 0.889667 16.2088 2.41441 17.7419C3.93916 19.2751 6.00202 20.1527 8.164 20.188H8.226C10.4042 20.1854 12.4927 19.3203 14.0348 17.7819C15.5769 16.2436 16.4471 14.1572 16.455 11.979V2.933C16.453 2.836 16.448 2.74 16.439 2.646ZM14.523 11.957V11.977C14.5174 13.6442 13.8512 15.2413 12.6704 16.4182C11.4895 17.5951 9.89022 18.256 8.22299 18.256H8.175C6.52147 18.2273 4.94414 17.5556 3.77754 16.3834C2.61094 15.2112 1.94681 13.6307 1.92599 11.977C1.92599 11.94 1.92599 11.903 1.92599 11.866V6.257C1.92626 5.98842 2.03307 5.73091 2.22299 5.54099C2.41291 5.35108 2.67041 5.24426 2.939 5.244H2.979C3.24749 5.24426 3.5049 5.35111 3.69466 5.54105C3.88441 5.731 3.991 5.98851 3.991 6.257V11.109C3.991 11.3649 4.09266 11.6104 4.27364 11.7914C4.45461 11.9723 4.70006 12.074 4.95599 12.074C5.21193 12.074 5.45738 11.9723 5.63835 11.7914C5.81932 11.6104 5.92101 11.3649 5.92101 11.109V8.809H7.101V11.109C7.101 11.3649 7.20266 11.6104 7.38364 11.7914C7.56461 11.9723 7.81006 12.074 8.06599 12.074C8.32193 12.074 8.56738 11.9723 8.74835 11.7914C8.92932 11.6104 9.03101 11.3649 9.03101 11.109V8.809H10.531V11.109C10.5313 11.3649 10.633 11.6101 10.8139 11.7911C10.9948 11.972 11.2401 12.0737 11.496 12.074C11.6408 12.0728 11.7834 12.0386 11.913 11.974C12.0771 11.8954 12.2156 11.772 12.3125 11.6181C12.4095 11.4641 12.461 11.2859 12.461 11.104V2.933C12.4608 2.67357 12.5615 2.42423 12.7418 2.23764C12.922 2.05106 13.1677 1.94182 13.427 1.933H13.527C13.7922 1.933 14.0466 2.03835 14.2341 2.22589C14.4216 2.41343 14.527 2.66778 14.527 2.933V11.957H14.523Z" fill="#F64348" />
                </svg>
            </div>

            {showMenu ? (
                <nav>
                    <a href="#home">INICIO</a>
                    <a href="#artists">ARTISTAS</a>
                    <a href="#event">PROGRAMAÇÃO</a>
                    <a href="#contact">CONTATO</a>
                    <Button
                        text="COMPRAR INGRESSOS"
                        classStyle="btnHeader"
                    />
                </nav>
            ) : null}

            <Button
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg"
                        height="2em" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                            fill="#fefefe" />
                    </svg>
                }
                on_Click={ToggleMenu}
                classStyle="btnMenu"
            />
        </header>
    )
}