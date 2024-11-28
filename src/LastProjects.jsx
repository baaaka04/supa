import { LProjectsItem } from "./LProjectsItem";
import { Header } from './Experience';
import { StepContent, ContentItem, ContentBox } from "./StepContent";
import { ReactComponent as Figma } from './icons/figma.svg';
import { ReactComponent as LinkSVG } from './icons/little-link.svg';
import { RoundedBox } from "./Contacts.styled.js";
import resumeIMG from './images/supa_resume.jpg';
import neoschoolIMG from './images/neoschool.jpg';
import quizIMG from './images/quiz.jpg';
import expensifyIMG from './images/expensify.jpg';

export function LastProjects() {
    const projects = [
        {
            name: 'Expensify iOS App',
            descr: 'Figma to SwiftUI practice.',
            link: 'https://www.figma.com/community/file/1150405975570017109',
            ghlink: 'https://github.com/baaaka04/mokpon',
            linkText: 'figma.com/expensify',
            icon: <Figma />,
            jpg: expensifyIMG
        },
        {
            name: 'NeoSchool iOS App',
            descr: 'Application for schools on UIKit.',
            link: 'https://www.figma.com/design/R5kqngkhbp3E6dlAEzkrzG/NeoSchool-(Copy)?node-id=60-185&node-type=canvas&t=dIWNhCUBHrVaS8TK-0',
            ghlink: 'https://github.com/baaaka04/NeoSchool',
            linkText: 'figma.com/NeoSchool',
            icon: <Figma />,
            jpg: neoschoolIMG
        },
        {
            name: 'My own resume',
            descr: 'Figma to React practice.',
            link: 'https://www.figma.com/community/file/1087586245868299560',
            ghlink: 'https://github.com/baaaka04/supa',
            linkText: 'figma.com/supa-resume',
            icon: <Figma />,
            jpg: resumeIMG
        },
        {
            name: 'Quiz',
            descr: 'A website where you can add your own questions and play quizzes.',
            link: 'https://baaaka04.github.io/quiz',
            ghlink: 'https://github.com/baaaka04/quiz',
            linkText: 'baaaka04.github.io/quiz',
            icon: <LinkSVG />,
            jpg: quizIMG
        },
    ]

    return (
        <ContentItem>
            <StepContent />
            <div>
                <Header>
                    Latest projects
                </Header>

                <ContentBox>
                    <RoundedBox>
                        {projects.map(item =>
                            <LProjectsItem
                                key={item.descr}
                                projectName={item.name}
                                projectDescription={item.descr}
                                link={item.link}
                                ghlink={item.ghlink}
                                linkText={item.linkText}
                                linkIcon={item.icon}
                                picture={item.jpg}
                            />
                        )}
                    </RoundedBox>
                </ContentBox>

            </div>
        </ContentItem>
    )
}