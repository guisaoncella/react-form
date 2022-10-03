import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Themes";
import { Container } from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";

export const FormStep2 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
    },[])

    const handleNextStep = () => {
        navigate('/step3')
    }

    return(
        <Theme>
            <Container>
                <p>Passo 2/3 - {state.name}</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr/>

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar a menos de 2 anos"
                    icon="🥳"
                />

                <SelectOption
                    title="Sou programador"
                    description="Já programo a 2 anos ou mais"
                    icon="🤓"
                />

                <button onClick={handleNextStep}>Próximo</button>
            </Container>
        </Theme>
    )
}