import { Contacts } from './Contacts.jsx'
import { Languages } from './Languages.jsx'
import { Avatar } from './Avatar.jsx'
import { Socials } from './Socials.jsx'
import styled from 'styled-components'

const Container = styled.div`
max-width: 341.41px;
margin: 62.06px 62.06px auto;
`
export const Divider = styled.div`
height: 1.29px;
width: 341.33px;
background-color: #E2E6EE;
margin: 41.37px 0;
@media (max-width: 1010px) {
    margin: 10px 0;
    }
`
const Desktop = styled.div`
@media (max-width: 1010px) {
  display: none;
}
`

export function Aside() {

    return (
        <Container>
            <Avatar />

            <Desktop>

                <Divider />
                <Contacts
                    contacts={{
                        email: 'berezin.artem@yahoo.com',
                        phone: '(+996) 507 747 453',
                        address: 'Bishkek, Kyrgyzstan'
                    }}
                />
                <Divider />

                <Socials
                    socials={{
                        vk: '@baaaka',
                        github: '@baaaka04',
                        telegram: '@baaaka',
                        codewars: 'baaaka04'
                    }}
                />

                <Divider />
                <Languages />
            </Desktop>
        </Container>
    )
}