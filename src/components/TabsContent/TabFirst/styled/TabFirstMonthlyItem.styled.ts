import styled from 'styled-components';
import { f_color_annot } from '../../../../utils/contants';

export const TabFirstMonthlyItemWrapper = styled.div`
    width: 160px;
    margin-right: 24px;
    margin-bottom: 24px;
    &:nth-child(6n){
        margin-right: 0px;
    }

`;
export const TabFirstMonthlyItemDate = styled.div`
    display: block;
    color: ${f_color_annot};
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 8px;
`;