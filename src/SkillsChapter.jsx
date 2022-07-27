import styled from 'styled-components';
import { SkillsItem } from "./SkillsItem";
import { RoundedBox } from "./Contacts.styled.js"

const TitleBar = styled.div`
display:flex;
flex-direction:row;
align-items: center;
padding-bottom: 10.34px;
margin-bottom: 10.34px;
@media (max-width: 1010px) {
    margin-left: 1rem;
    }
`
const Icon = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 31.03px;
height: 31.03px;
border-radius: 50%;
background-color: ${props => props.color};
margin-right: 10.34px;
`
const SKillGroup = styled.div`
display: flex;
flex-grow: 1;
padding: 20.69px 0;
justify-content: space-around;
background-color: #F7F9FC;
`
const TitleText = styled.div`
font-weight: 500;
font-size: 18.101px;
color: #2E2E48;
`
const ChapterBox = styled.div`
max-width: 431.84px;
`
const SkillsRow = styled.div`
display: flex;
flex-order: ${props => props.order};
width: 100%;
gap: 10.34px;
justify-content: space-between;
`

export function SkillsChapter({ icon, titleName, skills, fcolor, icolor }) {

    return (
        <ChapterBox>
            <TitleBar>
                <Icon color={icolor}>
                    {icon}
                </Icon>
                <TitleText>
                    {titleName}
                </TitleText>
            </TitleBar>
            <RoundedBox>
                {skills.map((row, i) =>

                    <SkillsRow
                        key={row}
                        order={i + 1}>
                        {row.map(skillGroup =>

                            <SKillGroup key={skillGroup}>
                                {skillGroup.map((skill, i) =>

                                    <SkillsItem
                                        key={skill}
                                        skill={skill}
                                        color={fcolor}
                                        vis={i == skillGroup.length - 1 ? 'none' : '1.29px solid #E2E6EE'}
                                    />
                                )}
                            </SKillGroup>
                        )}
                    </SkillsRow>
                )}
            </RoundedBox>
        </ChapterBox>
    )
}
