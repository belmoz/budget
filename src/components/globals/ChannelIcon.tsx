import React, { FC } from 'react'
import { ChannelIconWrapper } from './styled/ChannelIcon.styled'


interface Props {
    icon: string
}

const ChannelIcon: FC<Props> = ({ icon }) => {
    return (
        <ChannelIconWrapper>
            <img src={icon} />
        </ChannelIconWrapper>
    )
}

export default ChannelIcon