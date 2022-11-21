import { ChangeEvent, FC, useEffect, useLayoutEffect, useState } from 'react'
import TabFirstChannelMainContent from './TabFirstChannelMainContent'
import { counterBudget, removeNonNumeric, summaryBudget } from '../../../utils/contants';
import Selector from '../../globals/Selector';
import Switcher from '../../globals/Switcher';
import { IBudget } from '../../../types/channel.interface';
import { useAppDispatch } from '../../../redux/hooks';
import { updateBudgetAction } from '../../../redux/slices/channelsSlice';
import { useRefToUnmount } from '../../../hooks/useRefToUnmount';
import { InputSettings, TabFirstChannelMainSettings, TabFirstChannelMainWrapper, TFCMSAnnotation, TFCMSItem } from './styled/TabFirstChannelMain.styled';



interface Props {
    id: number,
    budget: IBudget[],
}

const TabFirstChannelMain: FC<Props> = ({ id, budget }) => {


    const dispatch = useAppDispatch();

    const [localBudget, setLocalBudget] = useState(budget);
    const [frequencyBudget, setFrequencyBudget] = useState('Annually');
    const [baselineBudget, setBaselineBudget] = useState(summaryBudget(localBudget));

    const handleChangeLocalBudget = (indexMonth: number, e: ChangeEvent<HTMLInputElement>) => {
        const budget = [...localBudget];
        budget[indexMonth] = { ...budget[indexMonth], sum: removeNonNumeric(e.target.value) }
        setLocalBudget(budget);
    }
    const handleSetFrequencyBudget = (value: string) => {
        setFrequencyBudget(value);
    }

    const handleSetBaselineBudget = (e: ChangeEvent<HTMLInputElement>) => {
        let budget: IBudget[];
        switch (frequencyBudget) {
            case 'Monthly':
                budget = localBudget.map(el => ({ ...el, sum: removeNonNumeric(e.target.value) }));
                setLocalBudget(budget);
                setBaselineBudget(removeNonNumeric(e.target.value));
                return;
            case 'Quarterly':
                budget = localBudget.map(el => ({ ...el, sum: removeNonNumeric(e.target.value) / 3 }));
                setLocalBudget(budget);
                setBaselineBudget(removeNonNumeric(e.target.value));
                return;
            default:
                budget = localBudget.map(el => ({ ...el, sum: removeNonNumeric(e.target.value) / 12 }));
                setLocalBudget(budget);
                setBaselineBudget(removeNonNumeric(e.target.value));
                return;
        }
    }


    useLayoutEffect(() => {
        counterBudget(summaryBudget(localBudget), setBaselineBudget, frequencyBudget)
    }, [frequencyBudget, localBudget])

    const refLocalBudget = useRefToUnmount(localBudget);

    useEffect(() => {
        return () => {
            const localBudget = refLocalBudget.current as unknown as IBudget[];
            dispatch(updateBudgetAction({ id, localBudget }));
        }
    }, [])

    return (
        <TabFirstChannelMainWrapper>
            <TabFirstChannelMainSettings>
                <TFCMSItem>
                    <TFCMSAnnotation>Budget Frequency<span>i</span></TFCMSAnnotation>
                    <Selector value={frequencyBudget} handleSetFrequencyBudget={handleSetFrequencyBudget} />
                </TFCMSItem>
                <TFCMSItem>
                    <TFCMSAnnotation>Baseline [{frequencyBudget}] Budget<span>i</span></TFCMSAnnotation>
                    <InputSettings value={baselineBudget} handleSetBaselineBudget={handleSetBaselineBudget} />
                </TFCMSItem>
                <TFCMSItem>
                    <TFCMSAnnotation>Budget Allocation<span>i</span></TFCMSAnnotation>
                    <Switcher />
                </TFCMSItem>
            </TabFirstChannelMainSettings>
            <TabFirstChannelMainContent localBudget={localBudget} handleChangeLocalBudget={handleChangeLocalBudget} />
        </TabFirstChannelMainWrapper>
    )
}

export default TabFirstChannelMain