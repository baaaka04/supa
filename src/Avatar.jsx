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
const Name = styled.p`
font-size:41.3737px;
color: #2E2E48;
line-height: 52px;
margin: 0;
@media (max-width: 1010px) {
    font-size: 30px;
}
`
const Position = styled.p`
font-size:31.0303px;
background: linear-gradient(90deg, #A478E8 0%, #516CF7 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
margin: 0 0 41px 0;

@media (max-width: 1010px) {
    font-size: 25px;
    margin: 0;
    }
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
const QuoteBox = styled.div`
@media (max-width: 1010px) {
    display: none;
}
`
const NameBox = styled.div`
@media (max-width: 1010px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export function Avatar() {
    return (
        <Container>
            <NameBox>
                <Img />
                <Name>Artem Berezin</Name>
                <Position>iOS Developer</Position>
            </NameBox>
            <QuoteBox>
                <Quote>
                    <QuoteComma />
                    <QuoteText>
                        I know the human being and fish can coexist peacefully.
                    </QuoteText>
                    <Reverse />
                </Quote>
                <QuoteAuthor> George W. Bush</QuoteAuthor>
            </QuoteBox>
        </Container>
    )
}