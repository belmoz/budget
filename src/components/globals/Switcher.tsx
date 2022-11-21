import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { onSwitcherAction } from '../../redux/slices/switcherSlice';
import { budget_allocation } from '../../utils/contants';
import { SwitcherItem, SwitcherSlide, SwitcherWrapper } from './styled/Switcher.styled';


interface Props {
}

const Switcher: FC<Props> = () => {

    const onSwitcher = useAppSelector((state) => state.switcher.value);
    const dispatch = useAppDispatch();

    return (
        <SwitcherWrapper>
            {budget_allocation.map((el, i) => (
                <SwitcherItem
                    key={i}
                    className={onSwitcher === el ? 'active' : ''}
                    onClick={() => dispatch(onSwitcherAction(el))}
                >{el}</SwitcherItem>
            ))}
            <SwitcherSlide className={onSwitcher === 'Manual' ? 'active' : ''}></SwitcherSlide>
        </SwitcherWrapper>
    )
}

export default Switcher