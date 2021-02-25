import {useState} from 'react';

import Header from './Header.js';
import TabList from './TabList.js';
import Body from './Body.js';
import ScrollToTop from "./ScrollToTop";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <TabList tabIndex={tabIndex} setTabIndex={setTabIndex}></TabList>
      <Body tabIndex={tabIndex}></Body>
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default App;
