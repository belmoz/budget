import { useState } from 'react'
import { useAppSelector } from '../../../redux/hooks';
import { TabFirstWrapper } from './styled/index.styled';
import TabFirstChannel from './TabFirstChannel';

const TabFirst = () => {

    const { channels } = useAppSelector(state => state)

    const [openedChannel, setOpenedChannel] = useState<number | boolean>(false);

    const handleOpenChannel = (id: number) => {
        openedChannel === false ? setOpenedChannel(id) :
            (id === openedChannel ? setOpenedChannel(false) : setOpenedChannel(id));
    }

    return (
        <TabFirstWrapper>
            {channels.map((ch, i) => (
                <TabFirstChannel
                    key={i}
                    channel={ch}
                    openedChannel={openedChannel}
                    setOpenedChannel={setOpenedChannel}
                    handleOpenChannel={handleOpenChannel}
                />
            ))}
        </TabFirstWrapper>
    )
}

export default TabFirst