import { InputField } from '../../../styled.globals/Input.styled';
import { f_color_channel } from '../../../utils/contants';
import styled from 'styled-components';
import ConfirmButtons from '../ConfirmButtons';

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
