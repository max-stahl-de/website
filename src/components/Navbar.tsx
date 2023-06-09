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
import { useState } from "react";
import Burger from "./Burger";
import handleOnClick from "../utils";
import Logo from "./Logo";

const Navbar: React.FC = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const handleClick = (elementId: string) => {
        handleOnClick(elementId, () => setOpenMobileMenu((curr) => !curr));
    };

    return (
        <NavbarStyled>
            <NavbarInnerContainer>
                <LogoButton onClick={() => handleOnClick("hello")}>
                    <Logo></Logo>
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
                    <MenuButtonMobile onClick={() => handleClick("about_me")}>about me</MenuButtonMobile>
                    <MenuButtonMobile onClick={() => handleClick("portfolio")}>portfolio</MenuButtonMobile>
                    <MenuButtonMobile onClick={() => handleClick("sustainability")}>sustainability</MenuButtonMobile>
                </NavbarMobileContainer>
            )}
        </NavbarStyled>
    );
};

export default Navbar;
