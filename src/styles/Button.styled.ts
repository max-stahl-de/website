import styled, { css } from "styled-components";

interface Props {
    bgColor?: string;
    color?: string;
    borderColor?: string;
}

export const ButtonStyled = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    font: bolder 18px "Roboto Mono", monospace;
    border-radius: 7px;
    min-width: 150px;
    height: 50px;
    cursor: pointer;
    color: ${({ color }) => color || "#2b2b2b"};
    background-color: ${({ bgColor }) => bgColor || "#fcfcfc"};
    ${({ borderColor }) =>
        borderColor
            ? css`
                  border: 2px solid ${borderColor};
              `
            : css`
                  border: none;
              `}
    transition: all ease 0.2s;

    &:hover {
        scale: 1.02;
    }

    &:active {
        scale: 0.98;
    }
`;

export const LinkButtonStyled = styled.button<Props>`
    background: transparent;
    font: bolder 18px "Roboto Mono", monospace;
    border: none;
    border-bottom: 2px solid transparent;
    color: ${({ color }) => color || "#335eea"};
    cursor: pointer;
    transition: all ease 0.2s;

    &:hover {
        border-bottom: 2px solid ${({ color }) => color || "#335eea"};
    }
`;
