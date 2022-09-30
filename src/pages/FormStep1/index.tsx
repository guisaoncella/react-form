import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Themes";
import { Container } from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";

export const FormStep1 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    },[])

    const handleNextStep = () => {
        if(state.name == ''){
            alert('Preencha todos os campos!')
            return
        }
        navigate('/step2')
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    return(
        <Theme>
            <Container>
                <p>Passo 1/3 - {state.name}</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr/>

                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />

                    <button onClick={handleNextStep}>Próximo</button>
                </label>
            </Container>
        </Theme>
    )
}