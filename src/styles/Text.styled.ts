import styled from "styled-components";

interface Props {
    margin?: string;
    color?: string;
}

export const H1Styled = styled.h1`
    font: bold 48px "Roboto", sans-serif;
    letter-spacing: 2px;
`;
export const H2Styled = styled.h2`
    font: lighter 48px "Roboto", sans-serif;
    letter-spacing: 2px;
`;

export const H2MonoStyled = styled.h2`
    font: 400 30px "Roboto Mono", monospace;
`;

export const H3Styled = styled.h3`
    font: lighter 30px "Roboto", sans-serif;
    letter-spacing: 2px;
`;

export const H4Styled = styled.h4`
    font: bolder 36px "Roboto", sans-serif;
    letter-spacing: 2px;
`;

export const H5Styled = styled.h6`
    font: 300 18px "Roboto", sans-serif;
`;

export const H6Styled = styled.h6`
    font: lighter 14px "Roboto", sans-serif;
`;

export const H6MonoStyled = styled.h6`
    font: lighter 14px "Roboto Mono", monospace;
`;

export const Monospace = styled.p`
    font: lighter 12px "Roboto Mono", monospace;
`;

export const ArticleStyled = styled.article`
    font: 300 16px "Roboto", sans-serif;
    line-height: 1.6;
    text-align: justify;
`;
