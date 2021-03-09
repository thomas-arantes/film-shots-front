import { Button, TextField } from "@material-ui/core"
import React from "react" 
import { InputContainer } from "./styled"
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router"
import { signup } from "../../services/user"

const SignupForm = () => {

    const [form, onChange, clear] = useForm({name: "", email: "", nickname: "", password: ""})

    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signup(form, clear, history)
    }

    return (
            <InputContainer>
                <form onSubmit={onSubmitForm}>
                <TextField
                        name = {"name"}
                        value = {form.name}
                        onChange = {onChange}
                        label = {"Nome"}
                        variant = {"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type = {"name"}
                    />
                    <TextField
                        name = {"email"}
                        value = {form.email}
                        onChange = {onChange}
                        label = {"Email"}
                        variant = {"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type = {"email"}
                    />
                    <TextField
                        name = {"nickname"}
                        value = {form.nickname}
                        onChange = {onChange}
                        label = {"Apelido"}
                        variant = {"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type = {"nickname"}
                    />
                    <TextField
                        name = {"password"}
                        value = {form.password}
                        onChange = {onChange}
                        label = {"Senha"}
                        variant = {"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type = {"password"}
                    />

                    <Button
                        type = {"submit"}
                        variant = {"contained"}
                        color = {"primary"}
                        fullWidth
                    > 
                        Cadastrar
                    </Button>
                </form>
            </InputContainer>
    )
}

export default SignupForm