import styled from 'styled-components';
import { Button } from '../../styled.globals/Button.styled';
import { InputField } from '../../styled.globals/Input.styled';
import { bd_color_dark, bg_color_dark, bg_color_light, bg_shadow, f_color_descr, f_color_topp, f_color_val } from '../../utils/contants';
export const AddChannelWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    backdrop-filter: blur(3px);
    transition: all 0.3s ease 0s;
`;
export const AddChannelModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    translate: -50% -50%;
    background-color: ${bg_color_dark};
    border: ${bd_color_dark};
    border-radius: 4px;
    box-shadow: 0px 4px 16px rgba(24, 32, 51, 0.12);
    
    display: flex;
    flex-direction: column;
    padding: 50px;
    & .add-channel {
        &__title {

        }
        &__description {
            
        }
        &__field {
            
        }
        &__close-btn {
            position: absolute;
            top: -16px;
            right: -28px;
            color: ${f_color_descr};
            font-size: 24px;
            cursor: pointer;
            text-shadow: ${bg_shadow};
        }
    }
`;
export const AddChannelTitle = styled.h4`
    font-size: 24px;
    font-weight: 500;
    line-height: 33px;
    color: ${f_color_topp};
    margin-bottom: 16px;
`;
export const AddChannelDescription = styled.span`
    color: ${f_color_descr};
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 8px;
`;
export const AddChannelField = styled.div`
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: space-between;
`;
export const AddChannelCloseBtn = styled.span`
    position: absolute;
    top: -16px;
    right: -28px;
    color: ${f_color_descr};
    font-size: 24px;
    cursor: pointer;
    text-shadow: ${bg_shadow};
`;
export const AddInput = styled(InputField)`
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: ${f_color_val};
    height: 100%;
`;
export const AddButton = styled(Button)`
    /* width: 50px; */
    height: 96%;
    margin-left: 20px;
`