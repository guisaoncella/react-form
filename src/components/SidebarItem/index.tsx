import { Link } from "react-router-dom"
import { Container, Info, Title, Description, Icon, Point } from "./styles"

// @ts-ignore
import { ReactComponent as ProfileIcon } from '../../assets/profile.svg'
// @ts-ignore
import { ReactComponent as MailIcon } from '../../assets/mail.svg'
// @ts-ignore
import { ReactComponent as BookIcon } from '../../assets/book.svg'

type Props = {
    title: string
    description: string
    icon: string
    path: string
    active: boolean
}

export const SidebarItem = ({title, description, icon, path, active}: Props) => {
    return(
        <Container>
            <Link to={path}>
                <Info>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Info> 
                <Icon active={active}>
                    {icon === 'profile' && <ProfileIcon fill="white" width={24} />}
                    {icon === 'book' && <BookIcon fill="white" width={24} />}
                    {icon === 'mail' && <MailIcon fill="white" width={24} />}
                </Icon> 
                <Point active={active}/>  
            </Link>
        </Container>
    )
}