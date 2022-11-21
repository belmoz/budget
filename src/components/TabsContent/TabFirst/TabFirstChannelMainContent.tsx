import { ChangeEvent, FC } from 'react'
import { IBudget } from '../../../types/channel.interface';
import { TFCMCAllocation, TFCMCDescription, TFCMCHeader, TFCMCTitle, TFCMCWrapper } from './styled/TabFirstChannelMainContent.styled';
import TabFirstMonthlyItem from './TabFirstMonthlyItem';


interface Props {
    localBudget: IBudget[],
    handleChangeLocalBudget: (indexMonth: number, e: ChangeEvent<HTMLInputElement>) => void,
}

const TabFirstChannelMainContent: FC<Props> = ({ localBudget, handleChangeLocalBudget }) => {


    return (
        <TFCMCWrapper>
            <TFCMCHeader className='tfcmc__header'>
                <TFCMCTitle className='tfcmc__title'>Budget Breakdown</TFCMCTitle>
                <TFCMCDescription className='tfcmc__description'>By default, your budget will be equally divided throughout the year.
                    You can manually change the budget allocation, either now or later.</TFCMCDescription>
            </TFCMCHeader>
            <TFCMCAllocation className="tfcmc__allocation">
                {localBudget.map((el, i) => (
                    <TabFirstMonthlyItem key={i} budget={el} index={i} handleChangeLocalBudget={handleChangeLocalBudget} />
                ))}
            </TFCMCAllocation>

        </TFCMCWrapper>
    )
}

export default TabFirstChannelMainContent