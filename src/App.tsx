import React, { useCallback, useState } from 'react';
import TabsContent from './components/TabsContent';
import TabSecond from './components/TabsContent/TabSecond';
import TabsRow from './components/Tabs';
import TopPanel from './components/HeaderPanel';
import { Container } from './styled.globals/Container.styled';
import TabFirst from './components/TabsContent/TabFirst';



function App() {

  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleSelectTab = useCallback((value: number) => {
    selectedTab !== value && setSelectedTab(value);
  }, [selectedTab])


  return (
    <Container>
      <TopPanel />
      <TabsRow handleSelectTab={handleSelectTab} selectedTab={selectedTab} />
      <TabsContent>
        {selectedTab === 0 && <TabFirst />}
        {selectedTab === 1 && <TabSecond />}
      </TabsContent>
    </Container>
  );
}

export default App;
