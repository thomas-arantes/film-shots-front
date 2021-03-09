import { Button } from "@material-ui/core"
import React from "react" 
import { InputContainer, ScreenContainer, LoginButtonContainer } from "./styled"
import { goToLogin, goToSignup } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"
import SignupForm from "./SignupForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const SignupPage = () => {

    useUnprotectedPage()

    const history = useHistory()

    return (
        <ScreenContainer>
            <InputContainer>
                <SignupForm/>
            </InputContainer>
            <LoginButtonContainer>
                <Button
                    onClick = {() => goToLogin(history)}
                    type = {"submit"}
                    variant = {"text"}
                    color = {"primary"}
                    margin={"normal"}
                    fullWidth
                >
                    Já possui conta? Faça Login
                </Button>
                </LoginButtonContainer>
        </ScreenContainer>
    )
}

export default SignupPage