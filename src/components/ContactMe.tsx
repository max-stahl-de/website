import { ButtonStyled } from "../styles/Button.styled";

interface Props {
    style: "white" | "black";
}

const ContactMe: React.FC<Props> = (props) => {
    return (
        <ButtonStyled
            onClick={() => (window.location.href = "mailto:max.stahl.de@gmail.com")}
            bgColor={props.style === "white" ? "#fcfcfc" : "#2b2b2b"}
            color={props.style === "white" ? "#2b2b2b" : "#fcfcfc"}
        >
            contact me
        </ButtonStyled>
    );
};

export default ContactMe;
