import "./artists.scss"

export default function Artists() {
    return (
        <section className="artists">
            <div className="content">
                <h3>Artistas</h3>
                <p>No evento da OneBitMusic, você terá a oportunidade de desfrutar de uma incrível variedade de artistas talentosos. Nossa seleção musical abrange diferentes gêneros e estilos, garantindo uma experiência musical diversificada e emocionante. De DJs renomados a bandas cativantes, cada artista traz sua paixão e habilidade para criar performances envolventes. Prepare-se para se surpreender com músicas cativantes, ritmos vibrantes e momentos emocionantes durante todo o evento. Os artistas da OneBitMusic estão prontos para levar você a uma jornada musical única e inesquecível.</p>
                <button>
                    Veja a lista completa
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
                </button>
            </div>

            <div class="img">
                <div class="item-01">
                    <img src="../../public/img/artists(2).svg" alt="" />
                    <img src="../../public/img/artists.svg" alt="" />
                </div>

                <div class="item-02">
                    <img src="../../public/img/artists(3).svg" alt="" />
                    <img src="../../public/img/artists(4).svg" alt="" />
                </div>
            </div>
        </section>
    )
}