import {useState} from 'react';

import Body from './Body.js';
import TabList from './TabList.js';

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="App">
      <div>
        <TabList tabIndex={tabIndex} setTabIndex={setTabIndex}></TabList>
        <Body tabIndex={tabIndex}></Body>
      </div>
    </div>
  );
}

export default App;
