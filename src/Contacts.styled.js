import styled from 'styled-components'

export const Container = styled.div`
margin-bottom: 31px;
width: 343px;
height: 50px;
display: flex;
align-items: center;
`
export const BoldText = styled.div`
font-weight: 500;
font-size: 18.1px;
color: #47516B;
`
export const Header = styled.div`
color: #79819A;
margin-bottom: 2px;
`
export const radius = 41;

export const Icon = styled.div`
height: ${radius}px;
width: ${radius}px;
background: ${props => props.bgcolor || '#E2E6EE'};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
`
export const Img = styled.div`
background-image: url(${props => props.url});
background-size: cover;
width: ${radius}px;
height: 31px;
border-radius: 15.52px;
background-position: center;
background-repeat: no-repeat;
`
export const Info = styled.div`
margin: 0px 0px 0px 20.69px;
`
export const RoundedBox = styled.div`
display: flex;
flex-wrap: wrap;
border-radius: 10.3434px;
overflow: hidden;
gap: 10.34px;
`