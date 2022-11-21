import { InputField } from '../../../styled.globals/Input.styled';
import { f_color_channel } from '../../../utils/contants';
import styled from 'styled-components';

export const InputRenameChannelWrapper = styled.div`
  display: flex;
  margin-right: auto;
`;
export const InputRename = styled(InputField)`
    width: 200px;
    height: 36px;
    
    font-weight: 500;
    font-size: 14px;
    color: ${f_color_channel};
`;
export const InputIcons = styled.div`
    align-self: center;
    margin-left: 8px;
    margin-right: auto;
    height: 20px;
    cursor: pointer;
    & img{
        &:last-child {
            margin-left: 5px;
        }
    }
`;