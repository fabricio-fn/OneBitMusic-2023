import Cards from "./Cards/Cards"
import "./tickets.scss"

export default function Tickets() {
    return (
        <section id="tickets" className="tickets">
            <div className="tittle">
                <h2>Escolha o tipo de ingresso</h2>
            </div>
            
            <div className="cards">
                <Cards
                    title="Basico"
                    R$="R$100"
                    p1="Acesso aos shows digitais"
                    p2="Experiência musical imersiva"
                    p3="Preço acessivel"
                    button="Saber mais"
                />

                <Cards
                    title="Padrão"
                    R$="R$150"
                    p1="Acesso aos shows digitais"
                    p2="Beneficios Extras"
                    p3="Possibilidade de interagir com os artistas"
                    button="Saber mais"
                    cardStyle="padrao"
                />

                <Cards
                    title="VIP"
                    R$="R$200"
                    p1="Acesso aos shows digitais"
                    p2="Vantagens adicionais"
                    p3="Experiência VIP"
                    button="Saber mais"
                    cardStyle="vip"
                />
            </div>
        </section>
    )
}