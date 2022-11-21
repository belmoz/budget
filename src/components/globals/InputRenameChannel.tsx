import React, { ChangeEvent, FC, RefObject, useRef, useState } from 'react'
import { useAppDispatch } from '../../redux/hooks';
import dismissIcon from '../../img/dismiss.svg';
import confirmIcon from '../../img/confirm.svg';
import { renameChannelAction } from '../../redux/slices/channelsSlice';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { InputIcons, InputRename, InputRenameChannelWrapper } from './styled/InputRenameChannel.styled';


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
            <InputIcons>
                <img src={confirmIcon} alt="" onClick={() => {
                    disptach(renameChannelAction({ renamedChannel, id }));
                    handleClickEditChannel();
                }} />
                <img src={dismissIcon} alt="" onClick={() => {
                    handleClickEditChannel();
                    setRenamedChannel(title);
                }} />
            </InputIcons>
        </InputRenameChannelWrapper>
    )
}

export default InputRenameChannel