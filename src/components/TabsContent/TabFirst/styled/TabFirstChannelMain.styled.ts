import styled from "styled-components";
import { bd_color_dark, f_color_annot, f_color_descr, f_color_val } from "../../../../utils/contants";
import Input from "../../../globals/Input";

export const TabFirstChannelMainWrapper = styled.div`
    border: ${bd_color_dark};
    border-top: none;
    border-radius: 0 0 4px 4px;
    padding: 32px 32px 145px 32px;
    transition: all 0.3s ease 0s;
`
export const TabFirstChannelMainSettings = styled.div`
    display: flex;
    margin-bottom: 48px;
`;
export const TFCMSItem = styled.div`
    margin-right: 56px;
    &:nth-child(1){
        width: 226px;
    }
    &:nth-child(2){
        width: 237px;
    }
    &:nth-child(3){
        width: 184px;
    }
    &:last-child{
        margin-right: 0;
    }
`;
export const TFCMSAnnotation = styled.span`
    display: inline-block;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${f_color_annot};
    margin-bottom: 8px;

    & span {
        font-size: 10px;
        color: ${f_color_descr};
        margin-left: 15px;
        position: relative;
        &:before {
            position: absolute;
            content: '';
            width: 10px;
            height: 10px;
            top: 0;
            left: 50%;
            translate: -50% 0;
            border: 1px solid ${f_color_descr};
            border-radius: 50%;
        }
    }
`;
export const InputSettings = styled(Input)`
    color: ${f_color_val};
`;