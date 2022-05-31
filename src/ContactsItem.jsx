import { Container, Icon, Info, Header, BoldText } from './Contacts.styled.js'

export function ContactsItem({ title, value, icon }) {
    return (
        <Container>
            <div>
                <Icon>
                    {icon}
                </Icon>
            </div>
            <Info>

                <Header>
                    {title}
                </Header>
                <BoldText>
                    {value}
                </BoldText>
            </Info>
        </Container>
    );
}
