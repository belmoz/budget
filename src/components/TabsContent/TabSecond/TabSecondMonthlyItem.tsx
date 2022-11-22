import React, { FC, useLayoutEffect, useState } from 'react'
import penIcon from '../../../img/pen.svg';
import dismissIcon from '../../../img/dismiss.svg';
import confirmIcon from '../../../img/confirm.svg';
import { addSplitter, removeNonNumeric } from '../../../utils/contants';
import { useAppDispatch } from '../../../redux/hooks';
import { updateLocalSumAction } from '../../../redux/slices/channelsSlice';
import { ConfirmIcons, EditIcon, TabSecondInput, TabSecondItem, TabSecondMonthlyItemWrapper } from './styled/TabSecondMonthlyItem.styled';


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