import styled from 'styled-components';
import { bd_color_dark, bd_color_dark_active, f_color_disabled, f_color_val } from '../utils/contants';

export const InputField = styled.input`
    display: block;
    height: 40px;
    width: 100%;
    border: ${bd_color_dark};
    border-radius: 3px;
    outline: none;
    color: ${f_color_val};
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    padding-left: 16px;
    &:focus {
        border: ${bd_color_dark_active};
    }
    &:disabled {
        color: ${f_color_disabled};
        background-color: transparent;
    }
    `;