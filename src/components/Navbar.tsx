import {
    LeftContainer,
    NavbarStyled,
    Menu,
    MenuButton,
    OpenMenuButton,
    LogoButton,
    NavbarInnerContainer,
    NavbarMobileContainer,
    MenuButtonMobile,
} from "../styles/Navbar.styled";
import { SubTitle, Title } from "../styles/Text.styled";
import { useState } from "react";
import Burger from "./Burger";
import handleOnClick from "../utils";

const Navbar: React.FC = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const handleClick = (elementId: string) => {
        handleOnClick(elementId, setOpenMobileMenu);
    };

    return (
        <NavbarStyled>
            <NavbarInnerContainer>
                <LogoButton onClick={() => handleOnClick("hello")}>
                    <Title margin="0px 0px -3px 0px">stahl-development</Title>
                    <SubTitle>sustainable software engineering</SubTitle>
                </LogoButton>
                <LeftContainer>
                    <Menu>
                        <MenuButton onClick={() => handleOnClick("about_me")}>about me</MenuButton>
                        <MenuButton onClick={() => handleOnClick("portfolio")}>portfolio</MenuButton>
                        <MenuButton onClick={() => handleOnClick("sustainability")}>sustainability</MenuButton>
                    </Menu>
                    <OpenMenuButton
                        onClick={() => {
                            setOpenMobileMenu((curr) => !curr);
                        }}
                    >
                        <Burger convertToCross={openMobileMenu}></Burger>
                    </OpenMenuButton>
                </LeftContainer>
            </NavbarInnerContainer>
            {openMobileMenu && (
                <NavbarMobileContainer>
                    <MenuButtonMobile onClick={() => handleOnClick("about_me")}>about me</MenuButtonMobile>
                    <MenuButtonMobile onClick={() => handleOnClick("portfolio")}>portfolio</MenuButtonMobile>
                    <MenuButtonMobile onClick={() => handleOnClick("sustainability")}>sustainability</MenuButtonMobile>
                </NavbarMobileContainer>
            )}
        </NavbarStyled>
    );
};

export default Navbar;
