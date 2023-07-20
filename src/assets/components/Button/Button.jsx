import "./button.scss"

export default function Button({ text, icon, classStyle, on_Click, span }) {

    const buttonStyle = `geral ${classStyle}`;

    return (
        <button className={buttonStyle} onClick={on_Click}>
            {icon}
            {text}
            <span>{span}</span>
        </button>
    )
}