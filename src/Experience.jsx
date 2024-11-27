import styled from 'styled-components';
import { ExperienceItem } from './ExperienceItem';
import { StepContent, ContentItem } from './StepContent';
import malltech from './icons/malltech.png';
import swift from './icons/swift.png';

export const Header = styled.span`
display: inline-block;
font-family: 'Outfit';
font-weight: 500;
font-size: 31px;
color: #2E2E48;
margin-bottom: 41.37px;
@media (max-width: 1010px) {
    margin-left: 1.5rem;
    }
`
const ExperienceBox = styled.div`
margin-bottom: 62.06px;
max-width: 894.71px;
`

export function Experience() {
    const jobs = [
        {
            period: 'since Jan 2022',
            city: 'Bishkek',
            position: 'iOS developer',
            company: 'Learning',
            description: 'I am learning and practicing swift programming with a mentor. I have realized projects on UIKit and SwiftUI.',
            bgcolor: `center/100% url(${swift})`,
            icon: '',
        },
        {
            period: 'since Aug 2018',
            city: 'Moscow',
            position: 'Economist',
            company: 'Malltech',
            description: 'Budgeting and financial control of budget execution. Preparation of monthly management accounts and Power BI presentation to shareholders (bilingual monthly). Preparation of reports for creditor banks (cash sweep etc.). Providing data and liaising with a property market valuation consultancy.',
            bgcolor: `center/50% #31e5f733 url(${malltech})`,
            icon: '',
        },
        {
            period: 'Oct 2015 - Aug 2018',
            city: 'Podolsk',
            position: 'Accountant',
            company: 'Public School',
            description: 'Preparation of accounting, statistical and tax reports to the tax inspectorate, the Social Insurance Fund and the FIU. Preparation of accounting, statistical and tax reporting to FTS, FSS and Pension Fund. Inventory and write-off procedures for fixed assets, preparation of reports on accounts receivable and payable, cash flow control.',
            bgcolor: 'center/75% url(https://upload.wikimedia.org/wikipedia/commons/6/66/Emblem_of_Ministry_of_Education_and_Science_of_Russia.svg)',
            icon: '',
        },
        {
            period: 'Aug 2013 - Nov 2013',
            city: 'Domodedovo',
            position: 'Service Center Specialist',
            company: 'MTS',
            description: 'Receiving and diagnosing devices, carrying out documentation via 1C and SAP, assigning the devices a markdown category.',
            bgcolor: 'url(https://finrange.com/storage/companies/logo/svg/MOEX_MTSS.svg)',
            icon: '',
        }
    ]
    return (
        <ContentItem>
            <StepContent />
            <div>
                <Header>
                    Experience
                </Header>
                <ExperienceBox>
                    {jobs.map((item, i) =>
                        <ExperienceItem
                            key={item.description}
                            period={item.period}
                            city={item.city}
                            position={item.position}
                            company={item.company}
                            description={item.description}
                            icon={item.icon}
                            bgcolor={item.bgcolor}
                            view={i == jobs.length - 1 ? 'none' : false}
                        />
                    )}
                </ExperienceBox>
            </div>
        </ContentItem>
    )
}