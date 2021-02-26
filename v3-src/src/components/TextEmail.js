import Text from "./Text";
import Email from "./Email";

function TextEmail() {
    return (
        <div className="contents">
            <h3>Reference</h3>
            <Text embedded={true}></Text>
            <br />
            <br />
            <br />
            <br />
            <Email embedded={true}></Email>
        </div>
    );
}

export default TextEmail;
