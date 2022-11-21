import { useState } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { date, monthes } from '../../../utils/contants';
import ChannelIcon from '../../globals/ChannelIcon';
import chIcon from '../../../img/channel_icon.svg';
import arrowIconNext from '../../../img/arrow_prev_next.svg';
import TabSecondMonthlyItem from './TabSecondMonthlyItem';
import { ArrowIconNext, ArrowIconPrev, TableBody, TableFirst, TableHeader, TableItem, TableRow, TableSecond, TableSecondWrapper, TableTitle, TabSecondMainWrapper } from './styled/TabSecondMain.styled';



const TabSecondMain = () => {

    const { channels } = useAppSelector(state => state);
    const [position, setPosition] = useState<string>('start');
    const [isEditable, setIsEditable] = useState<boolean | string>(false);

    const handleSetEditable = (id: number, index: number) => {
        const row = `${id}-${index}`;
        isEditable === false ? setIsEditable(row) :
            (row === isEditable ? setIsEditable(false) : setIsEditable(row));
    }

    return (
        <TabSecondMainWrapper>
            <TableFirst>
                <TableHeader>
                    <TableRow>
                        <TableTitle>Channel</TableTitle>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {channels.map((ch, i) => (
                        <TableRow key={i}>
                            <TableItem>
                                <ChannelIcon icon={chIcon} />
                                {ch.title}
                            </TableItem>
                        </TableRow>
                    ))}
                </TableBody>
            </TableFirst>
            <TableSecondWrapper>
                <TableSecond className={position}>
                    <TableHeader>
                        <TableRow>
                            {monthes.en.map((el, i) => <TableTitle key={i}>{el} {date}</TableTitle>)}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {channels.map((ch, i) => (
                            <TableRow key={i}>
                                {ch.budget.map((b, i) => (
                                    <TableItem key={i}>
                                        <TabSecondMonthlyItem sum={b.sum} id={ch.id} index={i} isEditable={isEditable} setIsEditable={setIsEditable} handleSetEditable={handleSetEditable} />
                                    </TableItem>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </TableSecond>
                <ArrowIconPrev
                    className={position === 'end' ? 'active' : ''}
                    src={arrowIconNext}
                    alt=""
                    onClick={() => {
                        setPosition('start');
                    }}
                />
                <ArrowIconNext
                    className={position === 'start' ? 'active' : ''}
                    src={arrowIconNext}
                    onClick={() => {
                        setPosition('end');
                    }}
                />
            </TableSecondWrapper>
        </TabSecondMainWrapper>
    )
}

export default TabSecondMain