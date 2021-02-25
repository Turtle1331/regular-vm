import Text from "./Table";

function Body(props) {
    return (
        <div className="Body">
            {(() => {
                switch (props.tabId) {
                    case "Home":      return <Text></Text>;
                    case "Gallery":   return <h2>Tab 1</h2>;
                    case "Demos":     return <h2>Tab 2</h2>;
                    case "Reference": return <h2>Tab 3</h2>;
                    default: return null;
                }
            })()}
        </div>
    );
}

export default Body;
