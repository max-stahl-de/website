import { H1Styled } from "../styles/Text.styled";
import { Container, FlexColumn, FlexRow } from "../styles/Utils.styled";
import PortfolioCard from "../components/PortfolioCard";
import styled from "styled-components";
import Casama from "../assets/casama.jpg";
import Icas from "../assets/icas.jpg";
import ContactMe from "../components/ContactMe";
import { ButtonStyled } from "../styles/Button.styled";
import handleOnClick from "../utils";
import PlatformIcons from "../components/PlatformIcons";

const InnerContainer = styled(FlexColumn)`
    margin-top: 80px;
`;

const PortfolioCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    gap: 4rem;

    @media (max-width: 990px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const ButtonContainer = styled(FlexRow)`
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 20px;
    gap: 50px;
    width: 100%;
`;

const Portfolio: React.FC = () => {
    return (
        <Container id="portfolio">
            <H1Styled>portfolio.</H1Styled>
            <InnerContainer>
                <PortfolioCardsContainer>
                    <PortfolioCard
                        image={Casama}
                        title="Casama"
                        content="Casama simplifies group betting on blockchain. Create a group, set the stake, and invite friends to bet. Payouts are automatic based on agreed-upon rules. I was responsible for developing the backend of Casama, which included creating microservices for blockchain interactions and caching. These microservices significantly increased response times."
                        appUrl="https://www.casama.io"
                    ></PortfolioCard>
                    <PortfolioCard
                        image={Icas}
                        title="ICAS"
                        content="ICAS is a high-performance radio reconnaissance platform. It offers full control and operation of radio reconnaissance systems with automated sensor control and results analysis via a uniform graphical user interface. As part of the ICAS project, I implemented backend services and helped deploy the system. Additionally, I optimized the deployment process."
                        appUrl="https://www.plathgroup.com/business-divisions/radio-reconnaissance-software.html"
                    ></PortfolioCard>
                    <PortfolioCard
                        image={Casama}
                        title="This website"
                        content="I developed this website as my first complete frontend project from scratch using ReactJS, TypeScript, styled-components, and webpack. Besides learning frontend technologies, my focus was on optimizing its performance and resource efficiency to provide a seamless browsing experience."
                        repoUrl="https://github.com/max-stahl-de/website"
                    ></PortfolioCard>
                </PortfolioCardsContainer>
                <ButtonContainer>
                    <ButtonContainer>
                        <ContactMe style="black"></ContactMe>
                    </ButtonContainer>
                    <PlatformIcons></PlatformIcons>
                </ButtonContainer>
            </InnerContainer>
        </Container>
    );
};

export default Portfolio;
