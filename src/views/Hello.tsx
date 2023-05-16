import styled from "styled-components";
import Cover from "../assets/hello.jpg";
import { TypeAnimation } from "react-type-animation";
import { H1Styled, H2Styled, H2MonoStyled } from "../styles/Text.styled";
import { ButtonStyled, LinkButtonStyled } from "../styles/Button.styled";
import ContactMe from "../components/ContactMe";
import handleOnClick from "../utils";
import { FlexColumn, FlexRow, ImageContainer, ImageStyled, Overlay } from "../styles/Utils.styled";

const HelloContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    overflow: hidden;
`;

const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 80%;
    margin: 70px 40px 0px 40px;

    color: #fcfcfc;

    @media (max-width: 990px) {
        align-items: flex-start;
    }
`;

const Intro = styled.div`
    min-height: 30%;
`;

const Claim = styled.div``;

const Navigation = styled(FlexRow)`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 30px;
    width: 100%;

    @media (max-width: 990px) {
        justify-content: center;
    }
`;

const Banner = styled(FlexColumn)`
    justify-content: space-between;
    position: absolute;
    padding: 15px;
    bottom: 0;
    width: 30%;
    height: 150px;
    background-color: #fcfcfc;
    border-radius: 15px 15px 0px 0px;
    backdrop-filter: blur(7px);
    text-align: center;
    margin-bottom: -50px;
    transition: all ease 0.5s;

    &:hover {
        margin-bottom: 0px;
    }

    @media (max-width: 990px) {
        width: 80%;
        margin-bottom: 0px;
        height: 70px;
        justify-content: space-between;
    }
`;

const TextAnimationContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    @media (max-width: 990px) {
        flex-direction: column;
    }

    .type-animation {
        font: bolder 48px "Roboto", sans-serif;
        @media (max-width: 990px) {
            font: bolder 30px "Roboto", sans-serif;
        }
    }

    .type-animation::after {
        font: lighter 48px "Roboto", sans-serif;
        @media (max-width: 990px) {
            font: bolder 30px "Roboto", sans-serif;
        }
    }
`;

const HelloH2Styled = styled(H2Styled)`
    @media (max-width: 990px) {
        font: lighter 30px "Roboto", sans-serif;
    }
`;
const HelloH1Styled = styled(H1Styled)`
    @media (max-width: 990px) {
        font: bold 30px "Roboto", sans-serif;
    }
`;

const Hello: React.FC = () => {
    return (
        <HelloContainer id="hello">
            <ImageContainer size={{ width: "100vw", height: "100vh" }}>
                <ImageStyled src={Cover}></ImageStyled>
                <Overlay></Overlay>
            </ImageContainer>
            <Content>
                <Intro>
                    <HelloH1Styled>Hello</HelloH1Styled>
                    <TextAnimationContainer>
                        <HelloH2Styled>I Am </HelloH2Styled>
                        <TypeAnimation
                            className="type-animation"
                            sequence={[
                                "Max Stahl",
                                2500,
                                "Freelancer",
                                1500,
                                "Senior Backend Developer",
                                1500,
                                "Sustainable Software Engineer",
                                1500,
                            ]}
                            repeat={Infinity}
                        />
                    </TextAnimationContainer>
                </Intro>
                <Claim>
                    <HelloH2Styled>
                        Let`s collaborate and realize your next
                        <br /> software project!
                    </HelloH2Styled>
                    <HelloH1Styled>on time. sustainable.</HelloH1Styled>
                </Claim>
                <Navigation>
                    <ContactMe style="white"></ContactMe>
                    <ButtonStyled
                        onClick={() => handleOnClick("about_me")}
                        borderColor="#fcfcfc"
                        color="#fcfcfc"
                        bgColor="transparent"
                    >
                        about me
                    </ButtonStyled>
                </Navigation>
            </Content>
            <Banner>
                <H2MonoStyled>sustainability in software?</H2MonoStyled>
                <LinkButtonStyled onClick={() => handleOnClick("sustainability")}>learn more</LinkButtonStyled>
            </Banner>
        </HelloContainer>
    );
};

export default Hello;
