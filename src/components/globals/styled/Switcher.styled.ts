import styled from 'styled-components';
import { bd_color_dark, bg_color_button, bg_color_dark, bg_shadow, budget_allocation, f_color_btn, f_color_val } from '../../../utils/contants';

export const SwitcherWrapper = styled.div`
    width: 100%;
    height: 40px;
    background: ${bg_color_dark};
    border: ${bd_color_dark};
    box-shadow: ${bg_shadow};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
`;
export const SwitcherItem = styled.span`
    text-align: center;
    position: relative;
    z-index: 2;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: ${f_color_btn};
    cursor: pointer;
    width: 100%;
    line-height: 40px;
    transition: all 0.3s ease 0s;
    &.active{
        color: ${f_color_val};
    }
`;
export const SwitcherSlide = styled.div`
    box-sizing: content-box;
    position: absolute;
    top: -1px;
    left: -1px;
    translate: 0% 0%;
    width: 50%;
    height: 100%;
    background: ${bg_color_button};
    border: ${bd_color_dark};
    box-shadow: ${bg_shadow};
    border-radius: 4px;
    transition: all 0.3s ease 0s;
    &.active {
        translate: 100% 0%;
    }
`;