import styled from "styled-components";

interface Props {
    margin?: string;
    color?: string;
}

export const H1Styled = styled.h1`
    font: bold 48px "Roboto", sans-serif;
    letter-spacing: 2px;

    @media (max-width: 990px) {
        font: bold 30px "Roboto", sans-serif;
    }
`;
export const H2Styled = styled.h2`
    font: lighter 48px "Roboto", sans-serif;
    letter-spacing: 2px;

    @media (max-width: 990px) {
        font: lighter 30px "Roboto", sans-serif;
    }
`;

export const H2MonoStyled = styled.h2`
    font: 400 30px "Roboto Mono", monospace;
`;

export const H3Styled = styled.h3`
    font: lighter 30px "Roboto", sans-serif;
    letter-spacing: 2px;

    @media (max-width: 990px) {
        font: lighter 15px "Roboto", sans-serif;
    }
`;

export const H4Styled = styled.h4`
    font: bolder 36px "Roboto", sans-serif;
    letter-spacing: 2px;

    @media (max-width: 990px) {
        font: lighter 15px "Roboto", sans-serif;
    }
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

const Headline = styled.h5<Props>`
    font: 900 35px "Montserrat", sans-serif;
    color: #2b2b2b;
    letter-spacing: 3px;
    margin: ${({ margin }) => margin || "0px"};
`;

export const Title = styled.h2<Props>`
    font: 900 18px "Montserrat", sans-serif;
    letter-spacing: 7px;
    color: ${({ color }) => color || "#2b2b2b"};
    margin: ${({ margin }) => margin || "10px 10px"};
`;

export const SubTitle = styled.h3<Props>`
    font: 100 15px "Poppins", sans-serif;
    letter-spacing: 2px;
    color: ${({ color }) => color || "#727272"};
    margin: ${({ margin }) => margin || "0px 0px 20px 0px"};
`;

export const Content = styled.p<Props>`
    text-align: justify;
    font: 100 16px/20px "Poppins", sans-serif;
    color: #494949;
    line-height: 1.6;
    margin: ${({ margin }) => margin || "10px 10px"};
`;

export default Headline;
