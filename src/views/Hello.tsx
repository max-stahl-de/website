import styled from "styled-components";
import Cover from "../assets/hello.jpg";
import { TypeAnimation } from "react-type-animation";
import { H1Styled, H2Styled, H2MonoStyled } from "../styles/Text.styled";
import { ButtonStyled, LinkButtonStyled } from "../styles/Button.styled";
import ContactMe from "../components/ContactMe";
import handleOnClick from "../utils";

const HelloContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;
const CoverImagerStyled = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    margin-left: 40px;
    margin-top: 70px;

    color: #fcfcfc;

    @media (max-width: 990px) {
        align-items: flex-start;
        margin-right: 60px;
    }
`;

const Intro = styled.div`
    min-height: 30%;
`;

const Claim = styled.div``;

const Navigation = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
`;

const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
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
            max-width: 5px;
        }
    }

    .type-animation::after {
        font: lighter 48px "Roboto", sans-serif;
    }
`;

const Hello: React.FC = () => {
    return (
        <HelloContainer id="hello">
            <CoverImagerStyled src={Cover}></CoverImagerStyled>
            <Content>
                <Intro>
                    <H1Styled>Hello</H1Styled>
                    <TextAnimationContainer>
                        <H2Styled>I Am </H2Styled>
                        <TypeAnimation
                            className="type-animation"
                            sequence={[
                                "Max Stahl",
                                2500,
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
                    <H2Styled>
                        I help you realize your next
                        <br /> software project!
                    </H2Styled>
                    <H1Styled>on time. sustainable.</H1Styled>
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
