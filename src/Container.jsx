import { Experience } from "./Experience"
import { LastProjects } from "./LastProjects"
import styled from 'styled-components'
import { Education } from "./Education"
import { Skills } from "./Skills"

const Content = styled.div`
width: 977.45px;
margin: 82.75px 0 82.75px 0;
`

export function Container() {

    return (
        <Content>
            <Experience />
            <LastProjects />
            <Education />
            <Skills />
        </Content>
    )
}