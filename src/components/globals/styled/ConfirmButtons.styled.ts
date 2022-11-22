import styled from "styled-components";
import ConfirmButtons from "../ConfirmButtons";

export const ConfirmButtonsWrapper = styled.div<{ type?: 'big' }>`
    display: flex;
    align-self: center;
    height: 20px;
    margin-right: -100%;
    margin-left: ${props => props.type === 'big' ? '8px' : '4px'};
    cursor: pointer;
    & img {
        &:last-child {
            margin-left: ${props => props.type === 'big' ? '4px' : '2px'};
        }
    }
`;