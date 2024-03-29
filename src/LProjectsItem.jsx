import styled from 'styled-components'

const Container = styled.div`
padding: 31.03px;
max-width: 380.12px;
flex-grow: 1;
background-color: #F7F9FC;
`
const ImageContainer = styled.div`
display: flex;
justify-content: space-between;
`
const ProjectName = styled.p`
font-size: 20.69px;
color: #2E2E48;
margin-bottom: 5.17px;
font-weight: 500;
`
const ProjectDescription = styled.p`
font-size: 18.1px;
color: #79819A;
font-weight: 400;
`
const ProjectPicture = styled.div`
background-image: url(${props => props.url});
background-size: cover;
background-position: center;
width: 165.49px;
height: 124.12px;
border-radius: 10.3434px;
margin-bottom: 20.69px;
transition: all .2s ease-in-out;
    &:hover {transform: scale(1.3)};
`
const LinkBar = styled.div`
margin-top: 20.69px;
display: flex;
flex-direction: row;
align-items: center;
`
const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 31.03px;
height: 31.03px;
border-radius: 50%;
background-color: #E1E7FE;
margin-right: 15.52px;
`
const Link = styled.a`
color: #516CF7;
font-weight: 500;
font-size: 20.69px;
text-decoration: none;
&:hover {text-decoration: underline;}
`
const GHLink = styled(Link)`
font-size: 14px;
`

export function LProjectsItem({ projectName, projectDescription, link, linkText, linkIcon, picture, ghlink }) {

    return (
        <Container>
            <ImageContainer>
                <Link target="_blank" href={link}>
                    <ProjectPicture
                        url={picture}
                    />
                </Link>
                <GHLink target="_blank" href={ghlink}>GitHub</GHLink>
            </ImageContainer>
            <ProjectName>
                {projectName}
            </ProjectName>
            <ProjectDescription>
                {projectDescription}
            </ProjectDescription>
            <LinkBar>
                <Icon>
                    {linkIcon}
                </Icon>
                <Link target="_blank" href={link}>{linkText}</Link>
            </LinkBar>
        </Container>
    )
}