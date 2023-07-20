import Button from "../Button/Button"
import Header from "../Header/Header"
import './home.scss'

export default function Home() {
  return (
    <section id="home" className="home">
      <Header />
      <div className='content'>
        <h2>A sua melhor Experiencia 
          <br /><span>musical Digital</span></h2>
        <p>Prepare-se para uma experiência incrível e envolvente, onde a arte se une à performance para criar momentos inesquecíveis. Nossos shows artísticos são projetados para encantar, inspirar e transportar você para um mundo de criatividade e expressão.</p>
        
        <div className='buttons'>
          <Button
            text="Começar"
            classStyle="btnComecar"
          />

          <Button
            icon={
              <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_893_173)">
                  <path d="M28.5001 51.3333C15.6131 51.3333 5.16675 40.887 5.16675 28C5.16675 15.113 15.6131 4.66663 28.5001 4.66663C41.3871 4.66663 51.8334 15.113 51.8334 28C51.8334 40.887 41.3871 51.3333 28.5001 51.3333ZM28.5001 46.6666C33.4508 46.6666 38.1987 44.7 41.6994 41.1993C45.2001 37.6986 47.1667 32.9507 47.1667 28C47.1667 23.0493 45.2001 18.3013 41.6994 14.8006C38.1987 11.3 33.4508 9.33329 28.5001 9.33329C23.5494 9.33329 18.8014 11.3 15.3008 14.8006C11.8001 18.3013 9.83341 23.0493 9.83341 28C9.83341 32.9507 11.8001 37.6986 15.3008 41.1993C18.8014 44.7 23.5494 46.6666 28.5001 46.6666ZM25.2847 19.635L36.6691 27.223C36.7971 27.3082 36.9021 27.4237 36.9747 27.5592C37.0473 27.6948 37.0853 27.8462 37.0853 28C37.0853 28.1537 37.0473 28.3051 36.9747 28.4407C36.9021 28.5763 36.7971 28.6918 36.6691 28.777L25.2824 36.365C25.142 36.458 24.979 36.5114 24.8108 36.5193C24.6425 36.5273 24.4753 36.4895 24.3267 36.4101C24.1782 36.3307 24.0539 36.2125 23.967 36.0682C23.8802 35.9239 23.834 35.7587 23.8334 35.5903V20.4096C23.8337 20.2408 23.8798 20.0752 23.9668 19.9305C24.0537 19.7859 24.1783 19.6675 24.3273 19.588C24.4762 19.5085 24.6439 19.4709 24.8125 19.4791C24.9811 19.4874 25.1443 19.5413 25.2847 19.635Z" fill="#FEFEFE" />
                </g>
                <defs>
                  <clipPath id="clip0_893_173">
                    <rect width="56" height="56" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
            }
            text="Assistir Video"
            classStyle="btnVideo"
          />
        </div>
      </div>

      <div className="contador">
        <h2 id='contador'>5d 2h 26m 12s</h2>
      </div>
    </section>
  )
}