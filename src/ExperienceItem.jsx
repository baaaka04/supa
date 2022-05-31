import styled from 'styled-components'
import { BoldText, Header } from './Contacts.styled'
import { ReactComponent as LocationSVG } from './icons/locate.svg'

const ExperienceElement = styled.div`
display: flex;
`
const ExperienceContent = styled.div`
display: flex;
padding-top: 7.76px;
width: 842.99px;
`
const ExperienceTitle = styled.div`
width: 310.3px;
margin-bottom: 20px;
flex: none;
`
const PeriodPLace = styled.div`
margin-bottom: 10.34px;
font-size: 12.93px;
display: flex;
align-items: center;
`
const Period = styled.div`
color: #47516B;
`
const LocationSeparatedSVG = styled(LocationSVG)`
margin: 0 5.17px;
`
const IPC = styled.div`
display: flex;
`
const Icon = styled.div`
height: 51.72px;
width: 51.72px;
background: ${props => props.bgcolor || '#E2E6EE'};
border-radius: 12.93px;
align-items: center;
justify-content: center;
margin-right: 20.69px;
background-repeat: no-repeat;
box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
`
const Descript = styled.div`
font-size: 12.93px;
font-weight: 400;
letter-spacing: 0.01em;
margin-left: 10.34px;
`
const Stepper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 20.69px;
`
const BlackCircle = styled.div`
background-color: #2E2E48;
margin: 11.47px;
height: 8.08px;
width: 8.08px;
border-radius: 50%;
`
const StepLine = styled.div`
display: ${props => props.visability || 'flex'};
width: 1.29px;
background-color: #F7F9FC;
flex-grow: 1;
`

export function ExperienceItem({ period, city, position, company, description, icon, bgcolor, view }) {

    return (
        <div>
            <ExperienceElement>
                <Stepper>
                    <BlackCircle />
                    <StepLine visability={view} />
                </Stepper>

                <ExperienceContent>
                    <ExperienceTitle>
                        <PeriodPLace>
                            <Period>
                                {period}
                            </Period>
                            <LocationSeparatedSVG />
                            {city}
                        </PeriodPLace>
                        <IPC>
                            <Icon bgcolor={bgcolor}>
                                {icon}
                            </Icon>
                            <div>
                                <Header>
                                    {position}
                                </Header>
                                <BoldText>
                                    {company}
                                </BoldText>
                            </div>
                        </IPC>
                    </ExperienceTitle>
                    <Descript>
                        {description}
                    </Descript>
                </ExperienceContent>
            </ExperienceElement>
        </div>
    );
}