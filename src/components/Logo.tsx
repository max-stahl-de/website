import styled from "styled-components";
import { FlexColumn } from "../styles/Utils.styled";

const TitleContainer = styled(FlexColumn)`
    align-items: flex-start;
    color: #2b2b2b;
`;

const TitleSpan = styled.span`
    font: 500 21px "Roboto", sans-serif;
    text-align: center;
    letter-spacing: 3px;
`;

const SubTitleSpan = styled.span`
    font: 100 11px "Roboto", sans-serif;
    text-align: center;
    letter-spacing: 2px;
`;

const title = "stahl development";
const subtitle = "sustainable software engineering";

const Logo: React.FC = () => {
    return (
        <>
            <TitleContainer>
                <TitleSpan>{title}</TitleSpan>
                <SubTitleSpan>{subtitle}</SubTitleSpan>
            </TitleContainer>
        </>
    );
};

export default Logo;
