import { ChangeEvent, FC } from 'react'
import { IBudget } from '../../../types/channel.interface'
import { date, monthes } from '../../../utils/contants'
import InputMonthly from '../../globals/InputMonthly';
import { useAppSelector } from '../../../redux/hooks';
import { TabFirstMonthlyItemDate, TabFirstMonthlyItemWrapper } from './styled/TabFirstMonthlyItem.styled';


interface Props {
    budget: IBudget,
    index: number,
    handleChangeLocalBudget: (indexMonth: number, e: ChangeEvent<HTMLInputElement>) => void,
}

const TabFirstMonthlyItem: FC<Props> = ({ budget, index, handleChangeLocalBudget }) => {

    const onSwitcher = useAppSelector((state) => state.switcher.value);

    return (
        <TabFirstMonthlyItemWrapper>
            <TabFirstMonthlyItemDate>{monthes.en[index]} {date}</TabFirstMonthlyItemDate>
            <InputMonthly value={budget.sum} index={index} handleChangeLocalBudget={handleChangeLocalBudget} onSwitcher={onSwitcher} />
        </TabFirstMonthlyItemWrapper>
    )
}

export default TabFirstMonthlyItem