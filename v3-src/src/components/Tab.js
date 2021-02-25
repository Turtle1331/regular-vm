import React from 'react';

function Tab(props) {
    const onClick = () => props.state.set(props.tabId);
    const className = (props.tabId === props.state.tabId) ? "current" : "";

    return (
        <button className={className} onClick={onClick}>
            {props.tabId}
        </button>
    );
}

export default Tab;
