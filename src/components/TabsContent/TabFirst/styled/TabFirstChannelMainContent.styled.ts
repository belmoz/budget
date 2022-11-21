import styled from 'styled-components';
import { bd_color_dark, bg_color_dark, f_color_descr, f_color_topp } from '../../../../utils/contants';

export const TFCMCWrapper = styled.div`
    background: ${bg_color_dark};
    border: ${bd_color_dark};
    border-radius: 4px;
    padding: 24px 24px 0 24px;
    max-width: 1131px;
`;
export const TFCMCHeader = styled.div`
    margin-bottom: 24px;
`;
export const TFCMCTitle = styled.h4`
    color: ${f_color_topp};
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
`;
export const TFCMCDescription = styled.p`
    color: ${f_color_descr};
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
`;
export const TFCMCAllocation = styled.div`
    display: flex;
    flex-wrap: wrap;
`;