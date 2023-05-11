import React from "react";
import BurgerStyled from "../styles/Burger.styled";

interface BurgerProps extends React.PropsWithChildren {
    convertToCross: boolean;
}

const Burger: React.FC<BurgerProps> = (props) => {
    return (
        <BurgerStyled className={props.convertToCross ? "toggle" : ""}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </BurgerStyled>
    );
};

export default Burger;
