import React, { ChangeEvent, FC, RefObject, useRef, useState } from 'react'
import { useAppDispatch } from '../../redux/hooks';
import dismissIcon from '../../img/dismiss.svg';
import confirmIcon from '../../img/confirm.svg';
import { renameChannelAction } from '../../redux/slices/channelsSlice';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { InputRename, InputRenameChannelWrapper } from './styled/InputRenameChannel.styled';
import ConfirmButtons from './ConfirmButtons';


interface Props {
    title: string,
    id: number,
    handleClickEditChannel: () => void,
}
const InputRenameChannel: FC<Props> = ({ title, id, handleClickEditChannel }) => {

    const disptach = useAppDispatch();

    const [renamedChannel, setRenamedChannel] = useState(title);

    const channelRef = useRef() as RefObject<HTMLDivElement>;

    const handleRenameChannel = (e: ChangeEvent<HTMLInputElement>) => {
        setRenamedChannel(e.target.value);
    }

    const handleClickConfirm = () => {
        disptach(renameChannelAction({ renamedChannel, id }));
        handleClickEditChannel();
    }
    const handleClickDismiss = () => {
        handleClickEditChannel();
        setRenamedChannel(title);
    }


    useOnClickOutside(channelRef, handleClickEditChannel);
    return (
        <InputRenameChannelWrapper ref={channelRef}>
            <InputRename
                type="text"
                value={renamedChannel}
                onChange={e => handleRenameChannel(e)}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        disptach(renameChannelAction({ renamedChannel, id }));
                        handleClickEditChannel();
                    }
                    if (e.key === 'Escape') {
                        handleClickEditChannel();
                        setRenamedChannel(title);
                    }
                }}
            />
            <ConfirmButtons
                dismissIcon={dismissIcon}
                confirmIcon={confirmIcon}
                handleClickConfirm={handleClickConfirm}
                handleClickDismiss={handleClickDismiss}
                type={'big'}
            />
        </InputRenameChannelWrapper>
    )
}

export default InputRenameChannel