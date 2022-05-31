import { Container, Info, Header, BoldText, Img } from './Contacts.styled.js'

export function LanguagesItem({ icon, title, value }) {
    return (
        <Container>
            <div>
                <Img url={icon}>
                </Img>
            </div>
            <Info>

                <BoldText>
                    {title}
                </BoldText>
                <Header>
                    {value}
                </Header>
            </Info>
        </Container>
    )
}