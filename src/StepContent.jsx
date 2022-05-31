import styled from 'styled-components'

export const ContentItem = styled.div`
display: flex;
`
export const ContentBox = styled.div`
margin-bottom: 62.06px;
width: 894.71px;
`
const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-right: 41.37px;
height: 100%;
`
const Circle = styled.div`
width: 15.3px;
height: 15.3px;
border-radius: 50%;
background-color: #5531A7;
`
const BigCircle = styled.div`
width: 41.37px;
height: 41.37px;
border-radius: 50%;
background-color: white;
box-shadow: 0px 2.58586px 10.3434px rgba(0, 0, 0, 0.05), 0px 15.5152px 62.0606px rgba(0, 0, 0, 0.04), inset 0px 2.58586px 2.58586px rgba(0, 0, 0, 0.04);
display: flex;
align-items: center;
justify-content: center;
`
const Line = styled.div`
display: flex;
flex-grow: 1;
width: 1.29px;
background-color: #E2E6EE;
`

export function StepContent() {

    return (
        <div>
            <Container>
                <BigCircle>
                    <Circle />
                </BigCircle>
                <Line />
            </Container>
        </div>

    )
}