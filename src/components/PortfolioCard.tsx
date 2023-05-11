import styled from "styled-components";
import { FlexColumn, FlexRow, ImageContainer, ImageStyled, Overlay, StyledProps } from "../styles/Utils.styled";
import { PropsWithChildren } from "react";
import { ArticleStyled, H5Styled } from "../styles/Text.styled";

const CardContainer = styled(FlexColumn)`
    align-items: flex-start;
    justify-content: flex-start;
    width: 350px;
    border-radius: 5px;
    overflow: hidden;
    gap: 10px;

    &:hover {
        .overlay {
            background: #49458146;
        }

        img.cover {
            scale: 1.02;
        }
    }
`;

const LinkStyled = styled.a<StyledProps>`
    font: lighter 14px "Roboto Mono", monospace;
    color: ${({ color }) => color || "#335eea"};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all ease 0.2s;
    padding-bottom: 2px;

    &:hover {
        border-bottom: 1px solid ${({ color }) => color || "#335eea"};
    }
`;

const Content = styled(ArticleStyled)`
    text-align: left;
`;

const LinkContainer = styled(FlexRow)`
    gap: 15px;
`;

interface Props extends PropsWithChildren {
    image: string;
    title: string;
    content: string;
    appUrl?: string;
    repoUrl?: string;
}

const PortfolioCard: React.FC<Props> = (props) => {
    return (
        <CardContainer>
            <ImageContainer>
                <ImageStyled className="cover" src={props.image}></ImageStyled>
                <Overlay className="overlay"></Overlay>
            </ImageContainer>
            <H5Styled>{props.title}</H5Styled>
            <Content>{props.content}</Content>
            {props.children}
            <LinkContainer>
                {props.appUrl && (
                    <LinkStyled href={props.appUrl} target="_blank" rel="noreferrer">
                        project &#8594;
                    </LinkStyled>
                )}
                {props.repoUrl && (
                    <LinkStyled color="#5e5e5e" href={props.repoUrl} target="_blank" rel="noreferrer">
                        view code &#8594;
                    </LinkStyled>
                )}
            </LinkContainer>
        </CardContainer>
    );
};

export default PortfolioCard;
