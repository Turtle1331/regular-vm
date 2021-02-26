import Tab from "./Tab";

function TabList(props) {
    const state = {
        tabId: props.tabId,
        set: props.setTabId,
    };

    return (
        <div id="navigation">
            <nav>
                <Tab state={state} tabId="Home"></Tab>
                {" "}
                <Tab state={state} tabId="Gallery"></Tab>
                {" "}
                <Tab state={state} tabId="Demos"></Tab>
                {" "}
                <Tab state={state} tabId="Reference"></Tab>
            </nav>
        </div>
    );
}

export default TabList;
