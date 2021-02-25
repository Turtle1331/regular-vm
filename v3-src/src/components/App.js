import {useState} from 'react';

import Body from './Body.js';
import TabList from './TabList.js';
import Header from './Header.js';

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <TabList tabIndex={tabIndex} setTabIndex={setTabIndex}></TabList>
      <Body tabIndex={tabIndex}></Body>
    </div>
  );
}

export default App;
