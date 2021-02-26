import useScript from "../hooks/useScript";

function VideoOverlay(props) {
    useScript(`https://asciinema.org/a/${props.videoId}.js`, ".overlay-content", `asciicast-${props.videoId}`);

    return (
        <div className="overlay-content" onClick={props.onClick}>
            <div className="loading-text">Loading...</div>
        </div>
    );
}

export default VideoOverlay;
