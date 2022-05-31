import styled from 'styled-components';
import AvatarIMG from './images/ava.jpg';
import { ReactComponent as QuoteSVG } from './icons/quote.svg'

export const Img = styled.div`
background-image: url(${AvatarIMG});
background-size: cover;
width: 124.12px;
height: 124.12px;
border-radius: 50%;
background-position: center;
background-repeat: no-repeat;
margin-bottom: 20.69px;
`
const Reverse = styled(QuoteSVG)`
transform: rotate(180deg);
padding: 6.5px 5.17px;
align-self: end;
`
const QuoteComma = styled(QuoteSVG)`
padding: 6.5px 5.17px;
`
const Container = styled.div`
font-family: Outfit;
font-weight: 500;
`
const Name = styled.div`
font-size:41.3737px;
color: #2E2E48;
line-height: 52px;
`
const Position = styled.div`
font-size:31.0303px;
width: 362px;

background: linear-gradient(90deg, #A478E8 0%, #516CF7 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

margin-bottom: 41px;
`
const Quote = styled.div`
font-style: normal;
font-size: 23.2727px;
line-height: 31px;
width: 341px;
display: flex;
letter-spacing: 0.02em;
color: #47516B;
`
const QuoteText = styled.div`
width: 228px;
margin: 0 5.17px;
`
const QuoteAuthor = styled.div`
font-family: DM Sans;
font-weight: 400;
margin: 5.17px 0 0 31px;
`

export function Avatar() {
    return (
        <div>
            <Container>
                <div>
                    <Img />
                    <Name>Artem Berezin</Name>
                    <Position>Frontend Developer</Position>
                </div>
                <div>
                    <Quote>
                        <QuoteComma />
                        <QuoteText>
                            I know the human being and fish can coexist peacefully.
                        </QuoteText>
                        <Reverse />
                    </Quote>
                    <QuoteAuthor> George W. Bush</QuoteAuthor>
                </div>
            </Container>
        </div>
    )
}