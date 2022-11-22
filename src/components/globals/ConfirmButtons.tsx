import React, { FC } from 'react'
import { ConfirmButtonsWrapper } from './styled/ConfirmButtons.styled';


interface Props {
    confirmIcon: string,
    dismissIcon: string,
    handleClickConfirm: () => void,
    handleClickDismiss: () => void,
    type?: 'big',
}

const ConfirmButtons: FC<Props> = ({ confirmIcon, dismissIcon, handleClickConfirm, handleClickDismiss, type }) => {
    return (
        <ConfirmButtonsWrapper type={type}>
            <img src={confirmIcon} onClick={handleClickConfirm} />
            <img src={dismissIcon} onClick={handleClickDismiss} />
        </ConfirmButtonsWrapper>
    )
}

export default ConfirmButtons