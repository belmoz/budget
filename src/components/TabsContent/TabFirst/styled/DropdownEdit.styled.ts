import { f_color_channel } from '../../../../utils/contants';
import styled from 'styled-components';

export const DropdownEditWrapper = styled.div`
    width: 160px;
    height: 92px;
    background: #FFFFFF;
    border: 1px solid rgba(178, 187, 213, 0.5);
    box-shadow: 0px 4px 16px rgba(24, 32, 51, 0.12);
    border-radius: 4px;
    position: absolute;
    top: 36px;
    right: 6px;
    z-index: 5;
    display: flex;
    flex-direction: column;
    padding: 7px;
`;
export const DropdownEditEdit = styled.div`
    display: flex;
    align-items: center;
    color: ${f_color_channel};
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    height: 90%;
    padding-left: 8px;
    cursor: pointer;
`;
export const DropdownEditRemove = styled.div`
    display: flex;
    align-items: center;
    color: #EE2032;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    background-color: #FDE8EA;
    height: 100%;
    padding-left: 8px;
    border-radius: 4px;
    cursor: pointer;
`;