import styled from 'styled-components'
import { f_color_tab, f_color_tab_a } from '../../utils/contants';

export const TabsWrapper = styled.ul`
    display: flex;
    font-size: 20px;
    font-weight: 600;
    line-height: 16px;
    margin-bottom: 48px;
`
export const TabItem = styled.li`
    cursor: pointer;
    user-select: none;
    color: ${f_color_tab};
    transition: all 0.3s ease 0s;
    margin-right: 26px;
    &.active {
        position: relative;
        color: ${f_color_tab_a};
        &::after{
            content: '';
            position: absolute;
            bottom: -7px;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: ${f_color_tab_a};
        }
    }
    &:last-child {
        margin-right: 0px;
        
    }
    &:hover {
        color: ${f_color_tab_a};
    }
`;