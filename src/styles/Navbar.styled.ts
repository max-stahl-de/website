import styled from "styled-components";

export const NavbarStyled = styled.nav`
    position: fixed;
    z-index: 1000;
    top: 0px;
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(252, 252, 252, 0.6);
    backdrop-filter: blur(6px);

    p {
        color: #183819;
    }
`;

export const NavbarInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0px 80px 0px 80px;
`;

export const LogoButton = styled.button`
    flex-shrink: 1;
    border: none;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    min-width: 30%;
    padding: 10px;
`;

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    max-width: 70%;
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;

    @media (max-width: 990px) {
        display: none;
    }
`;

export const MenuButton = styled.button`
    font: 400 18px "Roboto", sans-serif;
    letter-spacing: 3px;
    transition: all ease 0.1s;
    border: none;
    padding: 3px 0px;
    margin: 20px;
    cursor: pointer;
    background-color: transparent;
    color: #2b2b2b;
    border-bottom: 1px solid transparent;

    &:active {
        opacity: 0.7;
    }

    &:hover {
        color: #555555;
        border-bottom: 1px solid #555555;
    }
`;

export const OpenMenuButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 70px;
    min-height: 80px;
    font-size: 80px;

    border: none;
    cursor: pointer;
    background-color: transparent;
    color: #183819;

    @media (min-width: 990px) {
        display: none;
    }
`;

export const NavbarMobileContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    transform: ;
    transition: transform 0.5s ease;

    @media (min-width: 990px) {
        display: none;
    }
`;

export const MenuButtonMobile = styled.button`
    color: #2b2b2b;
    border: none;
    width: 100%;
    font: 400 18px "Poppins", sans-serif;
    letter-spacing: 3px;
    padding: 10px 0px 10px 0px;
    background-color: transparent;
`;
