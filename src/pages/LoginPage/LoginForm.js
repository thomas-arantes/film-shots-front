import { Button, TextField } from "@material-ui/core"
import React from "react" 
import { InputContainer } from "./styled"
import useForm from "../../hooks/useForm"
import { login } from "../../services/user"
import { useHistory } from "react-router"

const LoginForm = () => {

    const [form, onChange, clear] = useForm({email: "", password: ""})

    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history)
    }

    return (
            <InputContainer>
                <form onSubmit={onSubmitForm}>
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
                        variant = {"contained"}
                        color = {"primary"}
                        type = {"submit"}
                        fullWidth
                    > 
                        Entrar
                    </Button>
                </form>
            </InputContainer>
    )
}

export default LoginForm