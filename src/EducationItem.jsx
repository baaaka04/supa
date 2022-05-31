import styled from 'styled-components';

const EducationCard = styled.div`
background-color: #F7F9FC;
width: 229.28px;
padding: 20.69px 31.03px;
`
const TitleBar = styled.div`
display: flex;
align-items: center;
margin-bottom: 10.34px;
`
const Icon = styled.div`
background-image: url(${props => props.icon});
background-size: cover;
background-position: center;
width: 62.06px;
height: 62.06px;
border-radius: 10.3434px;
margin-right: 20.69px;
`
const Title = styled.div`
font-weight: 500;
color: #2E2E48;
font-size: 15.5152px;
max-width: 145px;
`
const Description = styled.div`
font-weight: 500;
color: #2E2E48;
font-size: 18.101px;
margin-bottom: 2.59px;
`

export default function EducationItem({ title, descript, period, png }) {
    return (
        <EducationCard>
            <TitleBar>
                <Icon icon={png} />
                <Title>
                    {title}
                </Title>
            </TitleBar>
            <div>
                <Description>
                    {descript}
                </Description>
                <div>
                    {period}
                </div>
            </div>
        </EducationCard>
    )
}