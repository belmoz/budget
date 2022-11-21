import { InputField } from '../../../styled.globals/Input.styled';
import styled from 'styled-components';
import { bg_color_button, bg_shadow, f_color_disabled, f_color_val } from '../../../utils/contants';
export const InputFieldWrapper = styled.div`
    position: relative;
    & span {
        position: absolute;
        top: 50%;
        left: 16px;
        translate: 0 -50%;

        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: ${f_color_val};
        &.disabled {
            color: ${f_color_disabled};
            cursor: default;
        }
    }
`;
export const InputFieldStyled = styled(InputField)`
    background: ${bg_color_button};
    box-shadow: ${bg_shadow};
    padding-left: 33px;
    &:disabled {
        background: ${bg_color_button};
        box-shadow: none;
        
    }
`;