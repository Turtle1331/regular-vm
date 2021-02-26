import Text from "./Table";
import Image from "./Image";
import Video from "./Video";

function Body(props) {
    return (
        <div className="Body">
            {(() => {
                switch (props.tabId) {
                    case "Home":      return <Text></Text>;
                    case "Gallery":   return <Image></Image>;
                    case "Demos":     return <Video></Video>;
                    case "Reference": return <h2>Tab 3</h2>;
                    default: return null;
                }
            })()}
        </div>
    );
}

export default Body;
