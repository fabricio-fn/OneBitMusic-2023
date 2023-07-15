import { useState } from "react"
import "./event.scss"

export default function Event() {
    const [activeButton, setActiveButton] = useState(null);
    const [description1, setDescription1] = useState("Desfrute de uma performance emocionante com Yui Ronald, um artista solo que encanta o público com sua voz cativante e letras inspiradoras. Prepare-se para uma noite de músicas envolventes e momentos emocionantes.")
    const [description2, setDescription2] = useState("O trio que vai levar você a uma jornada musical com suas harmonias vocais encantadoras e arranjos instrumentais cativantes. Prepare-se para desfrutar de um repertório diversificado que abrange diversos estilos musicais e emocione seus sentidos.")
    const [description3, setDescription3] = useState("A dupla que vai conquistar seu coração com sua música cativante e performances cheias de energia. Com sua sintonia perfeita e talento extraordinário, eles criarão um ambiente envolvente e contagiarão o público com seu estilo musical único.")
    const [time1, setTime1] = useState("11:00 AM to 12:00 PM")
    const [time2, setTime2] = useState("12:00 PM to 03:00 PM")
    const [time3, setTime3] = useState("03:00 PM to 04:00 PM")
    const [name1, setName1] = useState("Yui Ronal")
    const [booth1, setBooth1] = useState("Booth: 2A35")
    const [img, setImg] = useState("../../public/img/Avatar(6).svg")

    const handleClick = (day) => {
        setActiveButton(day);

        if (day === "dia1") {
            setDescription1("Desfrute de uma performance emocionante com Yui Ronald, um artista solo que encanta o público com sua voz cativante e letras inspiradoras. Prepare-se para uma noite de músicas envolventes e momentos emocionantes.");
            setDescription2("O trio que vai levar você a uma jornada musical com suas harmonias vocais encantadoras e arranjos instrumentais cativantes. Prepare-se para desfrutar de um repertório diversificado que abrange diversos estilos musicais e emocione seus sentidos.");
            setDescription3("A dupla que vai conquistar seu coração com sua música cativante e performances cheias de energia. Com sua sintonia perfeita e talento extraordinário, eles criarão um ambiente envolvente e contagiarão o público com seu estilo musical único.");

            setTime1("11:00 AM to 12:00 PM");
            setTime2("12:00 PM to 03:00 PM");
            setTime3("03:00 PM to 04:00 PM");

            setName1("Yui Ronal")
            setBooth1("Booth: 2A35")

            setImg("../../public/img/Avatar(6).svg")
        } else if (day === "dia2") {
            setDescription1("Desfrute de uma performance emocionante com Yui Ronald, um artista solo que encanta o público com sua voz cativante e letras inspiradoras. Prepare-se para uma noite de músicas envolventes e momentos emocionantes.");
            setDescription2("trio que vai levar você a uma jornada musical com suas harmonias vocais encantadoras e arranjos instrumentais cativantes. Prepare-se para desfrutar de um repertório diversificado que abrange diversos estilos musicais e emocione seus sentidos.");
            setDescription3("dupla que vai conquistar seu coração com sua música cativante e performances cheias de energia. Com sua sintonia perfeita e talento extraordinário, eles criarão um ambiente envolvente e contagiarão o público com seu estilo musical único.");
            
            // setTime1("11:00 AM to 12:00 PM");
            // setTime2("12:00 PM to 03:00 PM");
            // setTime3("03:00 PM to 04:00 PM");

            setName1("Dua Pipa")
            setBooth1("Booth: 4C59")

            setImg("../../public/img/Avatar(5).svg")
        } else if (day === "dia3") {
            setDescription1("Desfrute de uma performance emocionante com Yui Ronald, um artista solo que encanta o público com sua voz cativante e letras inspiradoras. Prepare-se para uma noite de músicas envolventes e momentos emocionantes.");
            setDescription2("ai levar você a uma jornada musical com suas harmonias vocais encantadoras e arranjos instrumentais cativantes. Prepare-se para desfrutar de um repertório diversificado que abrange diversos estilos musicais e emocione seus sentidos.");
            setDescription3("i conquistar seu coração com sua música cativante e performances cheias de energia. Com sua sintonia perfeita e talento extraordinário, eles criarão um ambiente envolvente e contagiarão o público com seu estilo musical único.");
            
            // setTime1("11:00 AM to 12:00 PM");
            // setTime2("12:00 PM to 03:00 PM");
            // setTime3("03:00 PM to 04:00 PM");

            setName1("Kate Perry")
            setBooth1("Booth: 2B25")

            setImg("../../public/img/Avatar(4).svg")
        }
    };

    return (
        <div className="event">
            <h3>Programação</h3>
            
            <div className="day">
                <button className={activeButton === 'dia1' ? 'active' : ''} onClick={() => handleClick('dia1')}>
                    Dia 1
                    <span>23 de setembro</span>
                </button>

                <button className={activeButton === 'dia2' ? 'active' : ''} onClick={() => handleClick('dia2')}>
                    Dia 2
                    <span>24 de setembro</span>
                </button>

                <button className={activeButton === 'dia3' ? 'active' : ''} onClick={() => handleClick('dia3')}>
                    Dia 2
                    <span>25 de setembro</span>
                </button>
            </div>

            <div className="tabela">
                <div className="row">
                    <div>
                        <p>{time1}</p>
                    </div>
                    <div>
                        <p>{description1}</p>
                    </div>

                    <div>
                        <img srcSet={img} alt="" />
                        <div>
                            <h2>{name1}</h2>
                            <span>{booth1}</span>
                        </div>
                    </div>
                    
                    <div>
                        <p>Previa</p>
                    </div>
                </div>         
                <div className="row">
                    <div>
                        <p>{time1}</p>
                    </div>
                    <div>
                        <p>{description1}</p>
                    </div>

                    <div>
                        <img srcSet={img} alt="" />
                        <div>
                            <h2>{name1}</h2>
                            <span>{booth1}</span>
                        </div>
                    </div>
                    
                    <div>
                        <p>Previa</p>
                    </div>
                </div>         
                <div className="row">
                    <div>
                        <p>{time1}</p>
                    </div>
                    <div>
                        <p>{description1}</p>
                    </div>

                    <div>
                        <img srcSet={img} alt="" />
                        <div>
                            <h2>{name1}</h2>
                            <span>{booth1}</span>
                        </div>
                    </div>
                    
                    <div>
                        <p>Previa</p>
                    </div>
                </div>         
            </div>
        </div>
    )
}