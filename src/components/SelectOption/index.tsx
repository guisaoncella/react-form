import { Container, Icon, Info, Title, Description } from "./styles"

type Props = {
    title: string
    description: string
    icon: string
}

export const SelectOption = ({title, description, icon}: Props) => {
    return(
        <Container>
            <Icon>{icon}</Icon>
            <Info>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Info>
        </Container>
    )
}