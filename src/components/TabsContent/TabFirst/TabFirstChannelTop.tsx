import { FC } from 'react'
import arrowDown from '../../../img/arrow_down.svg';
import editIcon from '../../../img/edit_icon.svg';
import channelIcon from '../../../img/channel_icon.svg';
import InputRenameChannel from '../../globals/InputRenameChannel';
import ChannelIcon from '../../globals/ChannelIcon';
import { ArrowIcon, EditIcon, TabFirstChannelTopTitle, TabFirstChannelTopWrapper } from './styled/TabFirstChannelTop.styled';


interface Props {
    title: string,
    handleOpenChannel: (index: number) => void,
    openedChannel: boolean | number,
    id: number,
    handleOpenEdit: (index: number) => void,
    isEditableChannel: boolean,
    handleClickEditChannel: () => void,

}

const TabFirstChannelTop: FC<Props> = ({
    title,
    handleOpenChannel,
    openedChannel,
    id,
    handleOpenEdit,
    isEditableChannel,
    handleClickEditChannel
}) => {


    return (
        <TabFirstChannelTopWrapper className={openedChannel !== id ? 'closed' : ''}>
            <ArrowIcon className={openedChannel === id ? 'opened' : ''} src={arrowDown} onClick={() => handleOpenChannel(id)} />
            <ChannelIcon icon={channelIcon} />
            {isEditableChannel ?
                <InputRenameChannel title={title} id={id} handleClickEditChannel={handleClickEditChannel} /> :
                <TabFirstChannelTopTitle onClick={() => handleOpenChannel(id)}>{title}</TabFirstChannelTopTitle>
            }
            <EditIcon src={editIcon} onClick={() => handleOpenEdit(id)} />
        </TabFirstChannelTopWrapper >
    )
}

export default TabFirstChannelTop