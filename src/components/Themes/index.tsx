import { ReactNode } from "react"
import { Header } from "../Header"
import { Container, Area, Steps, Sidebar, Page } from "./styles"

type Props = {
    children: ReactNode
}

export const Theme = ({children}: Props) => {
    return(
        <Container>
            <Area>
                <Header />

                <Steps>
                    <Sidebar>
                        ...   
                    </Sidebar>
                    <Page>
                        {children}
                    </Page>
                </Steps>
            </Area>
        </Container>
    )
}