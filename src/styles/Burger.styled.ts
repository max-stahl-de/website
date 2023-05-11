import styled from "styled-components";

const BurgerStyled = styled.div`
    flex-shrink: 0;
    min-width: 25px;
    div {
        min-width: 25px;
        min-height: 3px;
        background-color: #183819;
        margin: 5px;
        transition: all 0.3s ease;
    }

    &.toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    &.toggle .line2 {
        opacity: 0;
    }

    &.toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;

export default BurgerStyled;
