import styled from "styled-components";
import { ButtonContainer, FlexRow } from "../styles/Utils.styled";
import ContactMe from "./ContactMe";
import PlatformIcons from "./PlatformIcons";
import { Monospace } from "../styles/Text.styled";

const FooterStyled = styled(FlexRow)`
    width: 100vw;
    min-height: 100px;
    padding: 10px 80px;
    background-color: #2b2b2b;
    color: #fcfcfc;
    justify-content: space-between;
    @media (max-width: 990px) {
        flex-direction: column-reverse;
        gap: 10px;
    }
`;

const Footer: React.FC = () => {
    return (
        <FooterStyled>
            <Monospace>© 2023 stahl development</Monospace>
            <ButtonContainer>
                <ContactMe style="white"></ContactMe>
            </ButtonContainer>
            <PlatformIcons color="#fcfcfc"></PlatformIcons>
        </FooterStyled>
    );
};

export default Footer;
