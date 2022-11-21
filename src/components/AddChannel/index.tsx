import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch } from '../../redux/hooks';
import { addChannelAction } from '../../redux/slices/channelsSlice';
import { AddButton, AddChannelCloseBtn, AddChannelDescription, AddChannelField, AddChannelModal, AddChannelTitle, AddChannelWrapper, AddInput } from './index.styled';


interface Props {
    handleCloseModal: () => void
}

const AddChannel: FC<Props> = ({ handleCloseModal }) => {
    const [channelName, setChannelName] = useState<string>('');

    const dispatch = useAppDispatch();

    const handleAddChannel = () => {
        if (channelName.length > 0) {
            dispatch(addChannelAction(channelName));
            handleCloseModal();
        }
    }



    return (
        <AddChannelWrapper>
            <AddChannelModal>
                <AddChannelTitle>Add New Channel</AddChannelTitle>
                <AddChannelDescription >Enter Channel name:</AddChannelDescription>
                <AddChannelField >
                    <AddInput
                        autoFocus
                        value={channelName}
                        onKeyDown={e => {
                            e.key === 'Enter' && handleAddChannel();
                            e.key === 'Escape' && handleCloseModal();
                        }}
                        onChange={e => setChannelName(e.target.value)}
                    />
                    <AddButton onClick={handleAddChannel}>Add</AddButton>
                </AddChannelField>
                <AddChannelCloseBtn onClick={handleCloseModal}>✖</AddChannelCloseBtn>
            </AddChannelModal>
        </AddChannelWrapper>
    )
}

export default AddChannel