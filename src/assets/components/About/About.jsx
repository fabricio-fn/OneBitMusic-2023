import Button from '../Button/Button'
import './about.scss'

export default function About() {
  return (
    <section className="about">
        <div class="img">
            <div class="img-01">
                <img src="../../public/img/about.svg" alt="" />
            </div>

            <div class="img-02">
                <img src="../../public/img/about(2).svg" alt="" />
            </div>
        </div>

        
        <div className="content">
            <h3>Sobre a gente</h3>
            <p>Na onebitmusic, estamos redefinindo a maneira como experimentamos e nos envolvemos com a música, utilizando tecnologia de realidade virtual (VR) para criar shows e performances que transcendem os limites físicos e levam você a novos patamares de entretenimento musical.</p>
            <Button 
                text="Saiba mais"
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2794_126)">
                        <path d="M16.172 11L10.808 5.63598L12.222 4.22198L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z" fill="#222222"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2794_126">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                }
            />
        </div>

    </section>
  )
}