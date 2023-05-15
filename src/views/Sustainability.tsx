import styled from "styled-components";
import CarbonClock from "../components/CarbonClock";
import { ArticleStyled, H1Styled, H4Styled } from "../styles/Text.styled";
import { Container, FlexColumn, FlexRow } from "../styles/Utils.styled";
import Bees from "../assets/bees.jpeg";
import Bike from "../assets/bike.jpeg";
import Mountain from "../assets/mountain.jpeg";
import ParagraphCard from "../components/ParagraphCard";

const InnerContainer = styled(FlexColumn)`
    width: 80vw;
    margin-top: 80px;

    @media (max-width: 990px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

const SloganContainer = styled(FlexRow)`
    align-items: center;
    justify-content: space-around;
    margin-top: 40px;
    width: 80%;
    @media (max-width: 990px) {
        flex-direction: column;
        gap: 20px;
        width: 100%;
        margin-top: 10px;
    }
`;

const TextContainer = styled(FlexRow)`
    align-items: flex-start;
    justify-content: center;
    margin-top: 40px;
    gap: 50px;
    width: 80%;
    @media (max-width: 990px) {
        flex-direction: column;

        width: 100%;
        margin-top: 10px;
    }
`;

const CallToAction = styled.h1`
    font: 900 55px "Roboto", sans-serif;
    font-style: italic;
    letter-spacing: 2px;
    color: #f2eb6f;
    width: 300px;
`;

const TextStyled = styled(ArticleStyled)`
    font: 300 18px "Roboto", sans-serif;
    line-height: 1.6;
    text-align: left;

    span.bold {
        font: 500 18px "Roboto", sans-serif;
    }
`;

const Slogan = styled(H4Styled)`
    width: 40%;
    @media (max-width: 990px) {
        width: 99%;
    }
`;

const TextLeft = styled(FlexColumn)`
    width: 45%;
    @media (max-width: 990px) {
        width: 99%;
    }
`;
const TextRight = styled(FlexColumn)`
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    width: 70%;
    @media (max-width: 990px) {
        width: 99%;
    }
`;

const Sustainability: React.FC = () => {
    return (
        <Container id="sustainability" bgColor="#36796C" color="#fcfcfc">
            <H1Styled>sustainability.</H1Styled>
            <InnerContainer>
                <CarbonClock></CarbonClock>
                <SloganContainer>
                    <Slogan>this is the time we have left to limit global warming to maximum 1.5°C.</Slogan>
                    <CallToAction>LET'S ACT!</CallToAction>
                </SloganContainer>
                <TextContainer>
                    <TextLeft>
                        <TextStyled>
                            Every sector in the economy can help to slow down this clock and at some point, make it stop
                            or even reverse the counter.
                            <br />
                            <br />
                            <span className="bold">Software engineering is no exception!</span> <br />
                            <br />
                            We as developers can make a difference by integrating sustainability in our work to
                            implement software more efficient and effective. There are three strategies on how we can
                            achieve this: efficiency, consistency, and sufficiency. <br />I include these strategies
                            into my work to make your next software project more sustainable.
                        </TextStyled>
                    </TextLeft>
                    <TextRight>
                        <ParagraphCard
                            image={Bees}
                            title="Efficiency"
                            content="Its the strategy we follow the most. We can optimize algorithms, so they need less computing power, use less bandwidth by using efficient messaging protocols and scale microservices up and - more importantly – down on demand."
                        ></ParagraphCard>
                        <ParagraphCard
                            image={Bike}
                            title="Sufficiency"
                            content="Only implement features which the user really needs to solve the underlying problem. Software projects can contribute to sufficiency by following the “less is more” principle. With this strategy we can provide software to stakeholders which overall use less resources."
                        ></ParagraphCard>
                        <ParagraphCard
                            image={Mountain}
                            title="Consistency"
                            content="In consumer products this can referred to the circular economy. In software engineering we can contribute to the consistency strategy by developing more projects following the open-source model or contributing to existing ones. In this way we can reuse software instead of developing it on our own which in turn saves resources."
                        ></ParagraphCard>
                    </TextRight>
                </TextContainer>
            </InnerContainer>
        </Container>
    );
};

export default Sustainability;
