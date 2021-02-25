function Body(props) {
    return (
        <div className="Body">
            <h1>Hello tab {props.tabIndex}!</h1>
            {(() => {
                switch (props.tabIndex) {
                    case 0: return <h2>Tab 0</h2>;
                    case 1: return <h2>Tab 1</h2>;
                    case 2: return <h2>Tab 2</h2>;
                    case 3: return <h2>Tab 3</h2>;
                    default: return;
                }
            })()}
        </div>
    );
}

export default Body;
