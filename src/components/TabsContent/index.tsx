import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const TabsContentWrapper = styled.div`
    
`;

interface Props {
    children: ReactNode;
}

const TabsContent: FC<Props> = ({ children }) => {
    return (
        <TabsContentWrapper>
            {children}
        </TabsContentWrapper>
    )
}

export default TabsContent