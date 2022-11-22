import React, { useCallback, useState } from 'react';
import TabsContent from './components/TabsContent';
import TabsRow from './components/Tabs';
import TopPanel from './components/HeaderPanel';
import { Container } from './styled.globals/Container.styled';
import TabFirst from './components/TabsContent/TabFirst';
import TabSecond from './components/TabsContent/TabSecond';



function App() {

  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleSelectTab = useCallback((value: number) => {
    selectedTab !== value && setSelectedTab(value);
  }, [selectedTab])

  const tabsComponents = [
    <TabFirst />,
    <TabSecond />
  ]

  return (
    <Container>
      <TopPanel />
      <TabsRow handleSelectTab={handleSelectTab} selectedTab={selectedTab} />
      <TabsContent>
        {tabsComponents[selectedTab]}
      </TabsContent>
    </Container>
  );
}

export default App;
