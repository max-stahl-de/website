import styled, { css } from "styled-components";
import { FlexColumn, FlexRow, ImageContainer, ImageStyled, Overlay } from "../styles/Utils.styled";
import { ArticleStyled, H5Styled } from "../styles/Text.styled";

interface StyledProps {
    reverse?: boolean;
}

const ParagraphContainer = styled(FlexRow)<StyledProps>`
    justify-content: flex-start;
    height: 160px;
    width: 100%;
    gap: 20px;
    border-radius: 7px;
    overflow: hidden;
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
    width: 70%;
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
    reverse?: boolean;
}

const ParagraphCard: React.FC<Props> = (props) => {
    return (
        <ParagraphContainer reverse={props.reverse}>
            <ImageContainer size={{ width: "30%", height: "100%" }}>
                <ImageStyled src={props.image}></ImageStyled>
                <Overlay className="overlay"></Overlay>
            </ImageContainer>
            <ContentContainer reverse={props.reverse}>
                <H5Styled>{props.title}</H5Styled>
                <ArticleStyled>{props.content}</ArticleStyled>
            </ContentContainer>
        </ParagraphContainer>
    );
};

export default ParagraphCard;
