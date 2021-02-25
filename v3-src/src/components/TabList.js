import React from 'react';

import Tab from './Tab';

function TabList(props) {
    function setTab(index) {
        return () => props.setTabIndex(index);
    }

    return (
        <div id="navigation">
            <nav>
                <Tab setTab={setTab(0)}>Home</Tab>
                <Tab setTab={setTab(1)}>Gallery</Tab>
                <Tab setTab={setTab(2)}>Demos</Tab>
                <Tab setTab={setTab(3)}>Reference</Tab>
            </nav>
        </div>
    );
}

export default TabList;
