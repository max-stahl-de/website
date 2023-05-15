import styled from "styled-components";

export interface StyledProps {
    color?: string;
    bgColor?: string;
    size?: { width?: string; height?: string };
}

export const FlexCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FlexRow = styled(FlexCenter)`
    flex-direction: row;
`;

export const FlexColumn = styled(FlexCenter)`
    flex-direction: column;
`;

export const Container = styled(FlexColumn)<StyledProps>`
    justify-content: flex-start;
    width: 100vw;
    min-height: 100vh;
    max-width: 100%;
    color: ${({ color }) => color || "#2b2b2b"};
    padding: 80px 0px;
    background-color: ${({ bgColor }) => bgColor || "#fcfcfc"};
`;

export const ButtonContainer = styled(FlexRow)`
    align-items: flex-end;
    justify-content: flex-start;
    gap: 20px;
`;

export const NavigationContainer = styled(FlexRow)`
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: 990px) {
        justify-content: center;
    }
`;

export const ImageContainer = styled.div<StyledProps>`
    position: relative;
    width: ${({ size }) => size?.width || "100%"};
    height: ${({ size }) => size?.height || "250px"};
    overflow: hidden;
    margin-bottom: 5px;
`;

export const ImageStyled = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all ease 0.1s;
`;

export const Overlay = styled(FlexColumn)`
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0b028821;
    transition: all ease 0.2s;
`;
