import {useState} from 'react';

import './App.css';
import Body from './components/Body.js';
import TabList from './components/TabList.js';

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
