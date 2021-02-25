import React from 'react';

function Tab(props) {
    return (
        <button onClick={props.setTab}>
            {props.children}
        </button>
    );
}

export default Tab;
