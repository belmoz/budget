import React, { useState } from 'react'
import { Button } from '../../styled.globals/Button.styled';
import AddChannel from '../AddChannel';
import { HeaderPanelText, HeaderPanelTextDescription, HeaderPanelTextSubtitle, HeaderPanelTextTitle, HeaderPanelWrapper } from './HeaderPanel.styled';


const HeaderPanel = () => {

    const [isModal, setIsModal] = useState<boolean>(false);


    const handleCloseModal = () => {
        setIsModal(prev => !prev)
    }

    return (
        <HeaderPanelWrapper>
            <HeaderPanelText>
                <HeaderPanelTextTitle>Build your budget plan</HeaderPanelTextTitle>
                <HeaderPanelTextSubtitle>Setup channels</HeaderPanelTextSubtitle>
                <HeaderPanelTextDescription>Setup your added channels by adding baseline budgets out of your total budget. See the forecast impact with the help of tips and insights.</HeaderPanelTextDescription>
            </HeaderPanelText>
            <Button onClick={handleCloseModal}>+ Add Channel</Button>
            {isModal && <AddChannel handleCloseModal={handleCloseModal} />}
        </HeaderPanelWrapper>
    )
}

export default HeaderPanel