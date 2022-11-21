import React, { ChangeEvent, FC, memo, useState } from 'react'
import { useAppSelector } from '../../redux/hooks';
import { InputField } from '../../styled.globals/Input.styled';
import { addSplitter } from '../../utils/contants';


interface Props {
    value: string | number,
    handleSetBaselineBudget: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input: FC<Props> = ({ value, handleSetBaselineBudget }) => {

    const onSwitcher = useAppSelector((state) => state.switcher.value)

    return (
        <InputField type='text' onChange={handleSetBaselineBudget} value={addSplitter(+value)} disabled={onSwitcher === 'Manual'} />
    )
}

export default memo(Input)