import { Button } from "@material-ui/core"
import React from "react" 
import { InputContainer, ScreenContainer, SinupButtonContainer } from "./styled"
import LoginForm from "./LoginForm"
import { goToSignup } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const LoginPage = ({setRightButtonText}) => {

    useUnprotectedPage()

    const history = useHistory()

    return (

        <ScreenContainer>
                <LoginForm setRightButtonText = {setRightButtonText}/>
            <SinupButtonContainer>
                <Button
                    onClick = {() => goToSignup(history)}
                    type = {"submit"}
                    variant = {"text"}
                    color = {"primary"}
                    margin={"normal"}
                    fullWidth
                >
                    Não possui conta? Cadastre-se
                </Button>
            </SinupButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage