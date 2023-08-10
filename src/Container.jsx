import { Experience } from "./Experience"
import { LastProjects } from "./LastProjects"
import styled from 'styled-components'
import { Education } from "./Education"
import { Skills } from "./Skills"
import { Contacts } from "./Contacts"
import { Divider } from "./Aside"
import { Socials } from "./Socials"
import { Languages } from "./Languages"

const Content = styled.div`
margin: 82.75px 0 82.75px 0;
`
const Mobile = styled.div`
display: none;
@media (max-width: 1010px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
    `

export function Container() {

    return (
        <Content>
            <Experience />
            <Skills />
            <LastProjects />
            <Education />

            <Mobile>
                <Divider />
                <Contacts
                    contacts={{
                        email: 'berezin.artem@yahoo.com',
                        phone: '(+7) 964 557 24 63',
                        address: 'Moscow, Russia'
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
            </Mobile>

        </Content>
    )
}