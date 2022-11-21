import React, { FC, memo, useEffect, useState } from 'react'
import arrowDown from '../../img/arrow_down.svg';
import { useAppSelector } from '../../redux/hooks';
import { budget_frequency } from '../../utils/contants';
import { SelectorItem, SelectorMenu, SelectorRow, SelectorWrapper } from './styled/Selector.styled';


interface Props {
    value: string,
    handleSetFrequencyBudget: (data: string) => void,
}

const Selector: FC<Props> = ({ value, handleSetFrequencyBudget }) => {

    const [isOpened, setIsOpened] = useState<boolean>(false);
    const onSwitcher = useAppSelector((state) => state.switcher.value)

    const handleClose = () => {
        setIsOpened(false);
    }

    useEffect(() => {
        if (onSwitcher === 'Manual') {
            handleClose();
        }
    }, [onSwitcher])

    return (
        <SelectorWrapper className={onSwitcher === 'Manual' ? 'disabled' : ''}>
            <SelectorRow onClick={e => {
                if (onSwitcher === 'Equal') {
                    e.preventDefault();
                    setIsOpened(prev => !prev);
                }
            }}>
                {value}
                <img src={arrowDown} className={isOpened ? 'selected' : ''} />
            </SelectorRow>
            {isOpened && <SelectorMenu >
                {budget_frequency.map((el, i) => (
                    <SelectorItem
                        key={i}
                        onClick={(e) => {
                            e.preventDefault();
                            handleSetFrequencyBudget(budget_frequency[i]);
                            handleClose();
                        }}
                        className={value === el ? 'disabled' : ''}
                    >{el}</SelectorItem>
                ))}
            </SelectorMenu>}
        </SelectorWrapper>
    )
}

export default memo(Selector)