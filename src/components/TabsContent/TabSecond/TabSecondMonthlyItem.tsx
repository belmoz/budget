import React, { FC, useLayoutEffect, useState } from 'react'
import styled from 'styled-components';
import penIcon from '../../../img/pen.svg';
import dismissIcon from '../../../img/dismiss.svg';
import confirmIcon from '../../../img/confirm.svg';
import { InputField } from '../../../styled.globals/Input.styled';
import { addSplitter, removeNonNumeric } from '../../../utils/contants';
import { useAppDispatch } from '../../../redux/hooks';
import { updateLocalSumAction } from '../../../redux/slices/channelsSlice';


const TabSecondMonthlyItemWrapper = styled.div`
    display: flex;
    
    &:hover > .tsmi__edit-icon {
        opacity: 1;
    }
    
`;
const ConfirmIcons = styled.div`
    display: flex;
    height: 20px;
    position: absolute;
    left: 100%;
    top: 50%;
    translate: -14px -50%;
    cursor: pointer;
    & img {
        &:last-child {
            margin-left: 2px;
        }
    }
`;
const TabSecondInput = styled(InputField)`
    padding: 5px;
    height: 32px;
    margin-left: -18px;
`;

const EditIcon = styled.img`
    margin-left: 6px;
    opacity: 0;
    transition: all 0.3s ease 0s;
    cursor: pointer;
`;
const TabSecondItem = styled.div`
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 90px;
    min-width: 50px;
    overflow: hidden;
    cursor: pointer;
`;


interface Props {
    sum: number,
    id: number,
    index: number,
    isEditable: string | boolean,
    setIsEditable: (value: string | boolean) => void,
    handleSetEditable: (id: number, index: number) => void,
}

const TabSecondMonthlyItem: FC<Props> = ({ sum, id, index, isEditable, setIsEditable, handleSetEditable }) => {

    const dispatch = useAppDispatch();

    const [newData, setNewData] = useState<number>(sum);
    const [localId, setLocalId] = useState(`${id}-${index}`);

    useLayoutEffect(() => {
        setNewData(sum);
    }, [isEditable])

    return (
        <TabSecondMonthlyItemWrapper >
            {isEditable === localId ?
                <>
                    <TabSecondInput
                        value={`$${addSplitter(+newData.toFixed(2))}`}
                        onChange={e => setNewData(removeNonNumeric(e.target.value))}
                        onKeyDown={e => {
                            e.key === 'Escape' && setIsEditable(false);
                            if (e.key === 'Enter') {
                                dispatch(updateLocalSumAction({ id, index, newData }));
                                setIsEditable(false);
                            }
                        }}
                        autoFocus
                    />
                    <ConfirmIcons>
                        <img src={confirmIcon} onClick={() => {
                            dispatch(updateLocalSumAction({ id, index, newData }));
                            setIsEditable(false);
                        }} />
                        <img src={dismissIcon} onClick={() => {
                            setIsEditable(false);
                            setNewData(sum);
                        }} />
                    </ConfirmIcons>
                </> :
                <>
                    <TabSecondItem onClick={() => handleSetEditable(id, index)}>
                        ${addSplitter(+sum.toFixed(2))}
                    </TabSecondItem>
                    <EditIcon className='tsmi__edit-icon' src={penIcon} onClick={() => {
                        handleSetEditable(id, index)
                    }} />
                </>
            }
        </TabSecondMonthlyItemWrapper>
    )
}

export default TabSecondMonthlyItem