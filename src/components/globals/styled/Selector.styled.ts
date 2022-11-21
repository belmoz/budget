import styled from 'styled-components';
import { bd_color_dark, bg_color_button, bg_color_hover, bg_shadow, f_color_disabled, f_color_val } from '../../../utils/contants';

export const SelectorWrapper = styled.div`
    
    width: 226px;
    height: 40px;
    
    background: ${bg_color_button};
    border: ${bd_color_dark};
    box-shadow: ${bg_shadow};
    border-radius: 3px;
    cursor: pointer;
    color: ${f_color_val};
    &.disabled {
        color: ${f_color_disabled};
        box-shadow: none;
        cursor: default;
    }
`;
export const SelectorRow = styled.div`
    width: 100%;
    height: 100%;
    text-align: left;
    padding: 0 16px;
    line-height: 40px;
    position: relative;
    
    & img {
        position: absolute;
        top: 50%;
        right: 16px;
        translate: 0% -50%;
        width: 9px;
        height: 6px;
        transition: all 0.3s ease 0s;
        &.selected {
            rotate: 180deg;
        }
    }
`;
export const SelectorMenu = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 5px;
    
    background: ${bg_color_button};
    border: ${bd_color_dark};
    box-shadow: ${bg_shadow};
    position: relative;
    z-index: 2;
`;
export const SelectorItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 16px;
    width: 100%;
    height: 40px;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s ease 0s;
    &.disabled {
        cursor: default;
        user-select: none;
        color: ${f_color_disabled};
    }

    &:not(.disabled):hover {
        background: ${bg_color_hover};
    }
`;