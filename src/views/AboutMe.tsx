import styled from "styled-components";
import {
    FlexCenter,
    FlexColumn,
    FlexRow,
    Container,
    NavigationContainer,
    ButtonContainer,
} from "../styles/Utils.styled";
import { ArticleStyled, H1Styled, H4Styled, H6Styled } from "../styles/Text.styled";
import ProfileImage from "../assets/about_me.jpg";
import Listing from "../components/Listing";
import { ButtonStyled } from "../styles/Button.styled";
import PlatformIcons from "../components/PlatformIcons";
import ContactMe from "../components/ContactMe";
import handleOnClick from "../utils";

const InnerContainer = styled(FlexRow)`
    align-items: flex-start;
    gap: 40px;
    width: 100vw;
    height: 550px;
    margin-top: 80px;

    @media (max-width: 990px) {
        align-items: center;
        flex-direction: column;
    }
`;

const ImageContainer = styled(FlexCenter)`
    position: relative;
    width: 450px;
    min-height: 550px;
    border-radius: 7px;
    overflow: hidden;

    @media (max-width: 990px) {
        width: 90%;
        height: 80%;
    }
`;

const ImageStyled = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    height: 100%;
    width: 100%;
`;

const ContentContainer = styled(FlexColumn)`
    position: relative;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    height: 100%;
    gap: 10px;

    @media (max-width: 990px) {
        width: 90%;
    }
`;

const HeaderContainer = styled(FlexRow)`
    justify-content: flex-start;
    color: #2b2b2b;
    gap: 5px;
`;

const SubHeaderContainer = styled(FlexColumn)`
    align-items: flex-start;
`;

const ListingContainer = styled(FlexRow)`
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 10px;
    width: 100%;
    gap: 20px;
`;

const AboutMe: React.FC = () => {
    return (
        <Container id="about_me">
            <H1Styled>about me.</H1Styled>
            <InnerContainer>
                <ImageContainer>
                    <ImageStyled src={ProfileImage}></ImageStyled>
                </ImageContainer>
                <ContentContainer>
                    <HeaderContainer>
                        <H4Styled>Max Stahl</H4Styled>
                        <SubHeaderContainer>
                            <H6Styled>Senior Backend Developer</H6Styled>
                            <H6Styled>Sustainable Software Engineer</H6Styled>
                        </SubHeaderContainer>
                    </HeaderContainer>
                    <ArticleStyled>
                        I'm a backend developer with 8+ years of experience as a Developer, Solution Architect, and Team
                        Lead for Devs and DevOps. My diverse experience gives me a unique perspective on software
                        development, and I am a passionate advocate for sustainable and ethical practices. With strong
                        communication skills and exceptional teamwork abilities, I am committed to collaborating
                        effectively and delivering high-quality solutions. <br />
                        <br />
                        Here is a selection of technologies, tools and methods I have worked with:
                    </ArticleStyled>
                    <ListingContainer>
                        <Listing
                            heading="Methods"
                            items={[
                                "SCRUM",
                                "LESS",
                                "KANBAN",
                                "Servant Leadership",
                                "Test-Driven-Development",
                                "Sustainability",
                            ]}
                        ></Listing>
                        <Listing
                            heading="Backend"
                            items={["Java", "Spring-Boot", "REST", "Spring", "Maven", "Mockito", "JUnit"]}
                        ></Listing>
                        <Listing
                            heading="DevOps"
                            items={["Git", "Docker", "GitHub Actions", "Jenkins", "Prometheus", "Grafana"]}
                        ></Listing>
                        <Listing
                            heading="Frontend"
                            items={["React", "JavaScript", "TypeScript", "CSS / HTML"]}
                        ></Listing>
                    </ListingContainer>
                    <NavigationContainer>
                        <ButtonContainer>
                            <ContactMe style="black"></ContactMe>
                            <ButtonStyled
                                onClick={() => handleOnClick("portfolio")}
                                bgColor="transparent"
                                color="#2b2b2b"
                                borderColor="#2b2b2b"
                            >
                                portfolio
                            </ButtonStyled>
                        </ButtonContainer>
                        <PlatformIcons></PlatformIcons>
                    </NavigationContainer>
                </ContentContainer>
            </InnerContainer>
        </Container>
    );
};

export default AboutMe;
