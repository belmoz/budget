import { FC } from 'react'
import { TabItem, TabsWrapper } from './index.styled';


interface Props {
    handleSelectTab: (value: number) => void;
    selectedTab: number;
}

const tabs = ['Tab 1', 'Tab 2']

const Tabs: FC<Props> = ({ handleSelectTab, selectedTab }) => {


    return (
        <TabsWrapper>
            {tabs.map((t, i) => (
                <TabItem
                    key={i}
                    onClick={e => {
                        e.preventDefault();
                        handleSelectTab(i);
                    }}
                    className={selectedTab === i ? 'active' : ''}
                >{t}</TabItem>
            ))}
        </TabsWrapper>
    )
}

export default Tabs