import styled from 'styled-components';
import { Container, Icon, Info, Header, BoldText } from './Contacts.styled.js';

const Anchor = styled.a`
text-decoration: none;
color:#47516B;
`

export function SocialsItem({ icon, title, value, bgcolor, url }) {
    return (
        <Container>
            <div>
                <Icon bgcolor={bgcolor}>
                    {icon}
                </Icon>
            </div>
            <Info>

                <Header>
                    {title}
                </Header>
                <BoldText>
                    <Anchor target='_blank' href={url}>{value}</Anchor>
                </BoldText>
            </Info>
        </Container>
    )
}