import React from 'react';

function Tab(props) {
    const onClick = () => props.state.set(props.index);
    const className = (props.index === props.state.value) ? "current" : "";

    return (
        <button className={className} onClick={onClick}>
            {props.children}
        </button>
    );
}

export default Tab;
