import { FC, RefObject, useRef } from 'react'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { DropdownEditEdit, DropdownEditRemove, DropdownEditWrapper } from './styled/DropdownEdit.styled';


interface Props {
    id: number,
    handleClickRemoveChannel: (id: number) => void,
    handleClickEditChannel: () => void,
    closeDropdown: () => void;
}

const DropdownEdit: FC<Props> = ({ id, handleClickRemoveChannel, handleClickEditChannel, closeDropdown }) => {

    const dropdownRef = useRef() as RefObject<HTMLDivElement>;

    useOnClickOutside(dropdownRef, closeDropdown)


    return (
        <DropdownEditWrapper ref={dropdownRef}>
            <DropdownEditEdit onClick={() => handleClickEditChannel()}>Edit</DropdownEditEdit>
            <DropdownEditRemove onClick={() => handleClickRemoveChannel(id)}>Remove</DropdownEditRemove>
        </DropdownEditWrapper>
    )
}

export default DropdownEdit