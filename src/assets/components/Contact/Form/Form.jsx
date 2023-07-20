import Button from "../../Button/Button"
import "./form.scss"

export default function Form() {
    return (
        <form action="">
            <h4>Preencha com seus dados</h4>

            <div>
                <label htmlFor="Nome">Nome</label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="Nome">Email</label>
                <input type="email" />
            </div>

            <div>
                <label htmlFor="Mensagem">Mensagem</label>
                <textarea name="mensage" rows="1"></textarea>
            </div>

            <Button text="Enviar" />
        </form>
    )
}