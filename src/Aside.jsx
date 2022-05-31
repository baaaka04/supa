import { useState } from 'react'
import { Contacts } from './Contacts.jsx'
import { Languages } from './Languages.jsx'
import { Avatar } from './Avatar.jsx'
import { Socials } from './Socials.jsx'
import styled from 'styled-components'

const Divider = styled.div`
height: 1.29px;
width: 341.33px;
background-color: #E2E6EE;
margin: 41.37px 0;
`
const Container = styled.div`
width: 341.41px;
margin: 62.06px 62.06px auto;
`


export function Aside() {

    return (
        <div>
            <Container>
                <Avatar />

                <Divider />
                <Contacts
                    contacts={{
                        email: 'berezin.artem@yahoo.com',
                        website: 'https://aldesign.it',
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
                <Languages
                />
            </Container>
        </div>
    )
}