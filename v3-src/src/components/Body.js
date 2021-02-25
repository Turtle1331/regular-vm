import Text from "./Table";

function Body(props) {
    return (
        <div className="Body">
            {(() => {
                switch (props.tabIndex) {
                    case 0: return <Text></Text>;
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
