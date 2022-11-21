import styled from 'styled-components';
import { bd_color_dark, bg_color_button, bg_shadow, field_height, f_color_btn } from '../utils/contants';

export const Button = styled.button`
    all: unset;
    cursor: pointer;

    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0px;
    color: ${f_color_btn};

    background: ${bg_color_button};
    border: ${bd_color_dark};
    box-shadow: ${bg_shadow};
    border-radius: 3px;
    height: ${field_height}px;
    padding: 0 16px;
`