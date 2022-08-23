import { LProjectsItem } from "./LProjectsItem";
import { Header } from './Experience';
import { StepContent, ContentItem, ContentBox } from "./StepContent";
import { ReactComponent as Figma } from './icons/figma.svg';
import { ReactComponent as Google } from './icons/google.svg';
import { ReactComponent as LinkSVG } from './icons/little-link.svg';
import { RoundedBox } from "./Contacts.styled.js";
import resumeIMG from './images/supa_resume.jpg';
import googlebooksIMG from './images/google-books.png';
import accountingIMG from './images/accounting.png';
import quizIMG from './images/quiz.jpg';

export function LastProjects() {
    const projects = [
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
            name: 'Personal accounting',
            descr: 'Web application to record all my income and expenditure on Svelte.',
            link: 'http://212.152.40.222:50402/',
            ghlink: 'https://github.com/baaaka04/budget-app',
            linkText: 'ab-accounting.ru',
            icon: <LinkSVG />,
            jpg: accountingIMG
        },
        {
            name: 'Book finder',
            descr: 'React SPA with Google.books API searcher.',
            link: 'https://baaaka04.github.io/book-finder',
            ghlink: 'https://github.com/baaaka04/book-finder',
            linkText: 'baaaka04.github.io/book-finder',
            icon: <Google />,
            jpg: googlebooksIMG
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