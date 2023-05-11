import styled, { css } from "styled-components";
import { FlexColumn, FlexRow, ImageContainer, ImageStyled, Overlay } from "../styles/Utils.styled";
import { ArticleStyled, H3Styled } from "../styles/Text.styled";

interface StyledProps {
    reverse?: boolean;
}

const ParagraphContainer = styled(FlexRow)<StyledProps>`
    justify-content: flex-start;
    height: 160px;
    width: 100%;
    gap: 20px;
    border-radius: 7px;
    ${({ reverse }) =>
        reverse &&
        css`
            flex-direction: row-reverse;
        `}

    &:hover {
        .overlay {
            background: #49458146;
        }

        img {
            scale: 1.02;
        }
    }
`;

const ContentContainer = styled(FlexColumn)<StyledProps>`
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
    height: 100%;

    ${({ reverse }) =>
        reverse &&
        css`
            align-items: flex-end;
        `}
`;

interface Props {
    image: string;
    title: string;
    content: string;
}

const ParagraphCard: React.FC<Props> = (props) => {
    return (
        <ContentContainer>
            <H3Styled>{props.title}</H3Styled>
            <ArticleStyled>{props.content}</ArticleStyled>
        </ContentContainer>
    );
};

export default ParagraphCard;
