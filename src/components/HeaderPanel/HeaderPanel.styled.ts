import styled from 'styled-components';
import { f_color_descr, f_color_topp } from '../../utils/contants';


export const HeaderPanelWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 0px 0px 53px 0px;
`;
export const HeaderPanelTextTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    line-height: 33px;
    letter-spacing: -0.20000000298023224px;
    color: ${f_color_topp};
    margin: 0px 0px 16px 0px;
`;
export const HeaderPanelTextSubtitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    color: ${f_color_topp};
    margin: 0px 0px 8px 0px;
`;
export const HeaderPanelTextDescription = styled.p`
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: ${f_color_descr};
`;
export const HeaderPanelText = styled.div`
    flex: 0 1 45%;
`;