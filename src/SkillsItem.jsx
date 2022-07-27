import styled from 'styled-components'

const Skill = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
background-color: #F7F9FC;
color: ${props => props.color};
font-weight: 500;
font-size: 18.101px;
max-width: 80px;
`
const Divider = styled.div`
display: flex;
justify-content: center;
border-right: ${props => props.vis};
width:100%;
height: 63.78px;
`
const List = styled.span`
display: ${props => props.list};
list-style: inside;
white-space: nowrap;
`

export function SkillsItem({ skill, vis, color }) {
    return (
        <Divider vis={vis}>
            <Skill color={color}>
                {skill.map(item =>
                    <List
                        key={item}
                        list={skill.length > 1 ? 'list-item' : 'block'}>
                        {item}
                    </List>
                )}
            </Skill>
        </Divider>
    )
}
