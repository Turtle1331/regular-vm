import {useEffect, useState} from "react";

import Header from "./Header.js";
import TabList from "./TabList.js";
import Body from "./Body.js";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [tabId, setTabId] = useState("Home");

  useEffect(() => {
    document.title = `REGULAR-VM: ${tabId}`;
  }, [tabId]);

  return (
    <div className="App">
      <Header></Header>
      <TabList tabId={tabId} setTabId={setTabId}></TabList>
      <Body tabId={tabId}></Body>
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default App;
