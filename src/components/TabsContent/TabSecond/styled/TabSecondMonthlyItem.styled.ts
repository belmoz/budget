import styled from "styled-components";
import { InputField } from "../../../../styled.globals/Input.styled";



export const TabSecondMonthlyItemWrapper = styled.div`
display: flex;

&:hover > .tsmi__edit-icon {
    opacity: 1;
}
`;
export const TabSecondInput = styled(InputField)`
padding: 5px;
height: 32px;
margin-left: -18px;
`;

export const EditIcon = styled.img`
margin-left: 6px;
opacity: 0;
transition: all 0.3s ease 0s;
cursor: pointer;
`;
export const TabSecondItem = styled.div`
text-overflow: ellipsis;
white-space: nowrap;
max-width: 90px;
min-width: 50px;
overflow: hidden;
cursor: pointer;
`;