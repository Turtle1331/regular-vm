import React from 'react';

import Tab from './Tab';

function TabList(props) {
    const state = {
        value: props.tabIndex,
        set: props.setTabIndex,
    };

    return (
        <div id="navigation">
            <nav>
                <Tab state={state} index={0}>Home</Tab>
                {" "}
                <Tab state={state} index={1}>Gallery</Tab>
                {" "}
                <Tab state={state} index={2}>Demos</Tab>
                {" "}
                <Tab state={state} index={3}>Reference</Tab>
            </nav>
        </div>
    );
}

export default TabList;
