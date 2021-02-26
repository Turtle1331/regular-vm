function VideoItem(props) {
    const videoId = props.videoId;
    const alt = props.children;

    function onClick() {
        props.state.set({
            videoId: videoId,
            alt: alt,
        });
    }

    return (
        <div>
            <div className="caption">{alt}</div>
            <img src={`https://asciinema.org/a/${videoId}.png`} alt={alt} onClick={onClick}></img>
        </div>
    );
}

export default VideoItem;
