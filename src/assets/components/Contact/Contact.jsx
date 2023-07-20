import Form from "./Form/Form"
import Left from "./Left/Left"
import "./contact.scss"

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <Left />
            <Form />
        </section>
    )
}