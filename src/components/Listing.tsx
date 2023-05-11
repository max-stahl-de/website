import styled from "styled-components";
import { Content, H6MonoStyled, Monospace, SubTitle } from "../styles/Text.styled";
import { FlexColumn } from "../styles/Utils.styled";

const ListingContainerStyled = styled(FlexColumn)`
    align-items: flex-start;
    gap: 5px;
    color: #414bb2;
`;

const ListingStyled = styled.ul`
    list-style: none;

    li {
        border-bottom: 1px solid rgba(5, 5, 5, 0.096);
        padding: 8px 0px;
        min-width: 100px;
        color: #2b2b2b;
    }
`;

interface Props {
    heading: string;
    items: string[];
}

const Listing: React.FC<Props> = (props) => {
    const { heading, items } = props;

    return (
        <ListingContainerStyled>
            <H6MonoStyled>{heading}</H6MonoStyled>
            <ListingStyled>
                {items.map((item) => (
                    <li>
                        <Monospace>{item}</Monospace>
                    </li>
                ))}
            </ListingStyled>
        </ListingContainerStyled>
    );
};

export default Listing;
