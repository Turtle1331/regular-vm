import {useState} from "react";

import VideoItem from "./VideoItem";
import VideoOverlay from "./VideoOverlay";

function Video() {
    // useScript("https://asciinema.org/a/dDSNmkk9fw3mBvqY2PJoDAcEU.js", "#foo")

    const [overlay, setOverlay] = useState(null);
    const state = {
        overlay: overlay,
        set: setOverlay,
    }

    function overlayOnClick(event) {
        event.stopPropagation();
        setOverlay(null);
        return false;
    }

    function contentsOnClick(event) {
        event.stopPropagation();
        return false;
    }

    let overlayClassName = "overlay";
    let overlayContents = null;
    if (overlay != null) {
        overlayClassName += " visible";
        overlayContents = <VideoOverlay videoId={overlay.videoId} onClick={overlayOnClick}></VideoOverlay>;
    }

    return (
        <div className="contents">
            <h3>Demos</h3>
            <div className="grid image-grid">
                <VideoItem state={state} videoId="Did5ejGaZrfeZNztOJOp3yJXQ">Official emulator:</VideoItem>
                <VideoItem state={state} videoId="FnWqJbZ2XytbMx02yuSG8obZS">Official disassembler:</VideoItem>
                <VideoItem state={state} videoId="h38VbI2BqYq9BpyQGjY9mK9RC">regular-vm-python emulator:</VideoItem>
                <VideoItem state={state} videoId="dDSNmkk9fw3mBvqY2PJoDAcEU">regular-vm-wasm emulator:</VideoItem>
            </div>
            <div id="videoOverlay" className={overlayClassName} onClick={overlayOnClick}>
                <div className="loading-text">Loading...</div>
                {overlayContents}
            </div>
        </div>
    );
}

export default Video;
