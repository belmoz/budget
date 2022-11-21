import { FC, useState } from 'react'
import { useAppDispatch } from '../../../redux/hooks';
import { removeChannelAction } from '../../../redux/slices/channelsSlice';
import { IChannel } from '../../../types/channel.interface';
import DropdownEdit from './DropdownEdit';
import { TabFirstChannelWrapper } from './styled/TabFirstChannel.styled';
import TabFirstChannelMain from './TabFirstChannelMain';
import TabFirstChannelTop from './TabFirstChannelTop';



interface Props {
    channel: IChannel,
    openedChannel: number | boolean,
    setOpenedChannel: (value: number | boolean) => void,
    handleOpenChannel: (id: number) => void
}

const TabFirstChannel: FC<Props> = ({ channel, openedChannel, setOpenedChannel, handleOpenChannel }) => {

    const dispatch = useAppDispatch();


    const [openedDropdown, setOpenedDropdown] = useState<number | boolean>(true);
    const [isEditableChannel, setIsEditableChannel] = useState(false);


    const handleOpenEdit = (id: number) => {
        openedDropdown === false ? setOpenedDropdown(id) : (id === openedDropdown ? setOpenedDropdown(false) : setOpenedDropdown(id));
    }

    const closeDropdown = () => {
        setOpenedDropdown(false);
    }

    const handleClickRemoveChannel = (id: number) => {
        if (window.confirm('Are you shure?')) {
            dispatch(removeChannelAction(id));
            handleOpenEdit(id);
            setOpenedChannel(false);
        }
    }
    const handleClickEditChannel = () => {
        setIsEditableChannel(prev => !prev);
        setOpenedDropdown(false);
    }


    return (
        <TabFirstChannelWrapper>
            <TabFirstChannelTop
                handleOpenChannel={handleOpenChannel}
                title={channel.title}
                openedChannel={openedChannel}
                id={channel.id}
                handleOpenEdit={handleOpenEdit}
                isEditableChannel={isEditableChannel}
                handleClickEditChannel={handleClickEditChannel}
            />
            {openedDropdown === channel.id && <DropdownEdit
                id={channel.id}
                handleClickRemoveChannel={handleClickRemoveChannel}
                handleClickEditChannel={handleClickEditChannel}
                closeDropdown={closeDropdown}
            />}
            {openedChannel === channel.id && <TabFirstChannelMain
                id={channel.id}
                budget={channel.budget}
            />}
        </TabFirstChannelWrapper>
    )
}

export default TabFirstChannel