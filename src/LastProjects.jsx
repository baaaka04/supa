import { LProjectsItem } from "./LProjectsItem";
import { Header } from './Experience';
import { StepContent, ContentItem, ContentBox } from "./StepContent";
import { ReactComponent as Figma } from './icons/figma.svg';
import { ReactComponent as Telegram } from './icons/telegram-2.svg';
import { ReactComponent as LinkSVG } from './icons/little-link.svg';
import { RoundedBox } from "./Contacts.styled.js";
import resumeIMG from './images/supa_resume.jpg';
import botfatherIMG from './images/botfather.jpg';
import accountingIMG from './images/accounting.png';
import quizIMG from './images/quiz.jpg';

export function LastProjects() {
    const projects = [
        {
            name: 'My own resume',
            descr: 'Figma to React practice.',
            link: 'https://figma.com',
            linkText: 'https://figma.com',
            icon: <Figma />,
            jpg: resumeIMG
        },
        {
            name: 'Notify',
            descr: 'Telegram Bot for reminders on javascript.',
            link: 'https://t.me/notify_ab_bot',
            linkText: 't.me/notify_ab_bot',
            icon: <Telegram />,
            jpg: botfatherIMG
        },
        {
            name: 'Quiz',
            descr: 'A website where you can add your own questions and play quizzes.',
            link: 'https://baaaka04.github.io/quiz',
            linkText: 'https://baaaka04.github.io/quiz',
            icon: <LinkSVG />,
            jpg: quizIMG
        },
        {
            name: 'Personal accounting',
            descr: 'Web application to record all my income and expenditure on Svelte.',
            link: 'http://212.152.40.222:50401/',
            linkText: 'https://ab-accounting.ru',
            icon: <LinkSVG />,
            jpg: accountingIMG
        }
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