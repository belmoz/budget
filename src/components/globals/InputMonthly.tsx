import { ChangeEvent, FC, memo } from 'react'
import { addSplitter } from '../../utils/contants';
import { InputFieldStyled, InputFieldWrapper } from './styled/InputMonthly.styled';



interface Props {
    value: number,
    onSwitcher: string,
    index: number,
    handleChangeLocalBudget: (indexMonth: number, e: ChangeEvent<HTMLInputElement>) => void,
}

const Input: FC<Props> = ({ value, onSwitcher, index, handleChangeLocalBudget }) => {

    return (
        <InputFieldWrapper>
            <span className={onSwitcher === 'Equal' ? 'disabled' : ''}>$</span>
            <InputFieldStyled
                type='text'
                value={addSplitter(+value.toFixed(2))}
                disabled={onSwitcher === 'Equal'}
                onChange={e => {
                    handleChangeLocalBudget(index, e)
                }}
            />
        </InputFieldWrapper>
    )
}

export default memo(Input)