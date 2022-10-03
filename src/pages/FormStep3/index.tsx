import { useNavigate, Link } from "react-router-dom";
import { Theme } from "../../components/Themes";
import { Container } from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";

export const FormStep3 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm()

    useEffect(() => {
        if(state.name === ''){
            navigate('/')
            return
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    },[])

    const handleSend = () => {
        if(state.email === '' || state.github === ''){
            alert('Preencha os campos')
            return    
        }
        alert('Cadastrado com sucesso!')
        console.log(state)
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return(
        <Theme>
            <Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos.</p>

                <hr/>

                <label>
                    Qual seu e-mail?
                    <input type="email" value={state.email} onChange={handleEmailChange} />
                </label>

                <label>
                    Qual seu github?
                    <input type="url" value={state.github} onChange={handleGithubChange} />
                </label>

                <Link to='/step2' className="backButton">Voltar</Link>
                <button onClick={handleSend}>Enviar cadastro</button>
            </Container>
        </Theme>
    )
}