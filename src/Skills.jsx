import styled from 'styled-components';
import { SkillsChapter } from "./SkillsChapter";
import { StepContent, ContentItem, ContentBox } from "./StepContent";
import { Header } from './Experience';
import { ReactComponent as FinanceSVG } from './icons/coin.svg'
import { ReactComponent as DevSVG } from './icons/development.svg'

const Section = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 30px;
flex-wrap: wrap;
`

export function Skills() {

    const skills = [
        {
            title: 'Development',
            icon: <DevSVG />,
            value: [
                [
                    [['React JS'], ['Svelte']],
                ],
                [
                    [['Typescript']],
                    [['Redux']],
                    [['ES6']],
                ],
                [
                    [['HTML'], ['CSS'], ['JS']],
                    [['Git', 'NodeJS', 'VS Code']]
                ]
            ],
            fontColor: '#9251F7',
            iconColor: '#EFE2F9'
        },
        {
            title: 'Finance',
            icon: <FinanceSVG />,
            value: [
                [
                    [['1C']],
                    [['Excel', 'Word', 'PowerPoint',]],
                ],
                [
                    [['SQL'], ['MS Access']],
                ],
                [
                    [['Power BI'], ['Power Query'], ['Power Pivot']]
                ]
            ],

            fontColor: '#516CF7',
            iconColor: '#E1E7FE'
        },
    ]

    return (
        <ContentItem>
            <StepContent />
            <div>
                <Header>
                    Skills
                </Header>

                <ContentBox>
                    <Section>
                        {skills.map(item =>
                            <SkillsChapter
                                key={item.title}
                                icon={item.icon}
                                titleName={item.title}
                                skills={item.value}
                                fcolor={item.fontColor}
                                icolor={item.iconColor}
                            />
                        )}
                    </Section>
                </ContentBox>

            </div>
        </ContentItem>
    )
}
