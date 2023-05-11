import styled from "styled-components";
import { useCountdown } from "../hooks";
import { Content, H1Styled, Monospace, SubTitle, Title } from "../styles/Text.styled";
import { useState } from "react";
import { FlexColumn, FlexRow } from "../styles/Utils.styled";

const CarbonClockContainer = styled(FlexColumn)`
    .unit {
        display: none;
    }

    @media (max-width: 990px) {
        flex-direction: row;
        align-items: space-between;
        .title {
            display: none;
        }
        .unit {
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

const TimeRemainingContainer = styled(FlexRow)`
    align-items: space-around;
    width: 100%;
    padding: 0px 60px 0px 60px;

    @media (max-width: 990px) {
        height: 100%;
        flex-direction: column;
        justify-content: flex-end;
        padding: 10px 0px 10px 0px;
    }
`;

const TimeUnitContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100px;
`;

const CarbonClock: React.FC = () => {
    const { remainingTime } = useCountdown(1000, { temp: 1.5 });

    return (
        <CarbonClockContainer>
            <TimeRemainingContainer>
                {Object.entries(remainingTime).map(([key, value]) => (
                    <TimeUnitContainer key={key}>
                        <H1Styled>{value}</H1Styled>
                        <Monospace>{key}</Monospace>
                    </TimeUnitContainer>
                ))}
            </TimeRemainingContainer>
        </CarbonClockContainer>
    );
};

export default CarbonClock;
