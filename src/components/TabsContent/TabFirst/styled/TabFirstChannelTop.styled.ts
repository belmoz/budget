import styled from 'styled-components';
import { bd_color_dark, bg_color_button, bg_shadow, f_color_channel } from '../../../../utils/contants';


export const TabFirstChannelTopWrapper = styled.div`
    display: flex;
    align-items: center;
    flex: 1 1 100%;
    height: 50px;
    min-height: 50px;
    position: relative;

    background: ${bg_color_button};
    border: ${bd_color_dark};
    box-shadow: ${bg_shadow};
    border-radius: 4px 4px 0 0;
    
    &.closed {
        border-radius: 4px;
    }
`;
export const TabFirstChannelTopTitle = styled.span`
    font-weight: 500;
    font-size: 14px;
    color: ${f_color_channel};
    width: 100%;
    line-height: 40px;
    cursor: pointer;
`;
export const ArrowIcon = styled.img`
    width: 11px;
    height: 7px;
    box-sizing: content-box;
    margin-right: 15px;
    padding: 15px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &.opened {
        rotate: 180deg;
    }
`;
export const EditIcon = styled.img`
    box-sizing: content-box;
    padding: 15px;
    cursor: pointer;
    position: relative;
    width: 16px;
`;