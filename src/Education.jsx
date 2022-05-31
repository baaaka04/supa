import EducationItem from './EducationItem';
import { Header } from './Experience';
import { StepContent, ContentItem, ContentBox } from "./StepContent";
import { RoundedBox } from "./Contacts.styled.js"
import queryIMG from './images/Power-Query.webp';
import meiPNG from './images/mei-hat.png';
import msuIMG from './images/msu.jpg';


export function Education() {

    const edu = [
        {
            title: 'Planeta Excel',
            descript: 'Power Query/M course',
            period: 'Dec 2018',
            png: queryIMG
        },
        {
            title: 'MSU Financial Course',
            descript: 'Company finance',
            period: 'Oct 2017',
            png: msuIMG
        },
        {
            title: 'Moscow Engineering Institute',
            descript: 'Economics degree',
            period: 'Sep 2009/14',
            png: meiPNG
        },

    ]

    return (
        <ContentItem>
            <StepContent />
            <div>
                <Header>
                    Education
                </Header>
                <ContentBox>
                    <RoundedBox>
                        {edu.map(item =>
                            <EducationItem
                                key={item.title + item.descript}
                                title={item.title}
                                descript={item.descript}
                                period={item.period}
                                png={item.png}
                            />

                        )}
                    </RoundedBox>
                </ContentBox>
            </div>
        </ContentItem>
    )
}