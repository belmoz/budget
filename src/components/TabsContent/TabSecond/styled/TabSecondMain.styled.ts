import styled from "styled-components";
import { bd_color_dark, f_color_channel, f_color_descr, tableWidth } from "../../../../utils/contants";

export const TabSecondMainWrapper = styled.div`
display: flex;
`;
export const Table = styled.table`
    text-align: left;
    position: relative;
`;
export const TableFirst = styled(Table)`
    flex: 0 0 300px;
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(169,181,210,0) 74%, rgba(112,126,167,0.13209033613445376) 100%);
    border-right: ${bd_color_dark};
    margin-left: 22px;
`;
export const TableSecondWrapper = styled.div`
    overflow: hidden;
    position: relative;
    padding-left: 22px;
    
`;
export const TableSecond = styled(Table)`
    & th, td {
            width: ${tableWidth.item.width}px;
            position: relative;
            top: 0;
            left: 0;
            transition: all 0.3s ease 0s;
        }
    &.end {
        & th, td {
            left: -${tableWidth.item.sumWidth() * 3}px;
        }
    }
`;
export const TableHeader = styled.thead`
    display: flex;
    align-items: center;
    height: 48px;
`;
export const TableRow = styled.tr`
    display: flex;
    align-items: center;
    height: 64px;
    `;
export const TableTitle = styled.th`
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${f_color_descr};
    margin-right: 32px;
    
`;
export const TableBody = styled.tbody`
`;
export const TableItem = styled.td`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: ${f_color_channel};
    margin-right: 32px;
`;
export const ArrowIconNext = styled.img`
    position: absolute;
    /* padding: 0; */
    top: 12px;
    right: -5px;
    opacity: 0;
    scale: 0;
    padding: 10px;
    cursor: pointer;
    &.active {
        opacity: 1;
        scale: 1;
    }
`;
export const ArrowIconPrev = styled(ArrowIconNext)`
    rotate: 180deg;
    left: -5px;
    transition: all 0.5s ease 0s;
`;