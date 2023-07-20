import Button from "../../Button/Button";
import "./cards.scss";

export default function Cards({ title, R$, p1, p2, p3, button, cardStyle }) {

    const cardClassName = ` cardItem ${cardStyle}`;

    return (
        <div className={cardClassName}>
            <div className="tittle">
                <h3>{ title }</h3>
                <h4>{ R$ }</h4>
            </div>

            <div className="content">
                <p>{ p1 }</p>
                <p>{ p2 }</p>
                <p>{ p3 }</p>
            </div>

            <div className="button">
                <Button
                    text={button}
                />
            </div>
        </div>
    )
}