import {useState} from "react";

import ImageItem from "./ImageItem";

import saagarjha_disassembler from "../assets/saagarjha_disassembler.png";
import saagarjha_emulator from "../assets/saagarjha_emulator.png";
import turtle1331_python from "../assets/turtle1331_python.png";
import turtle1331_wasm from "../assets/turtle1331_wasm.png";

function Image() {
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
        overlayContents = <img src={overlay.src} alt={overlay.alt} className="overlay-content" onClick={contentsOnClick} />;
    }

    return (
        <div className="contents">
            <h3>Gallery (click to zoom)</h3>
            <div className="grid image-grid">
                <div className="image-overlay">
                    <ImageItem state={state} src={saagarjha_emulator}>Saagar Jha's emulator</ImageItem>
                </div>
                <div className="image-overlay">
                    <ImageItem state={state} src={saagarjha_disassembler}>Saagar Jha's disassembler</ImageItem>
                </div>
                <div className="image-overlay">
                    <ImageItem state={state} src={turtle1331_python}>Turtle1331's Python emulator</ImageItem>
                </div>
                <div className="image-overlay">
                    <ImageItem state={state} src={turtle1331_wasm}>Turtle1331's WebAssembly emulator</ImageItem>
                </div>
            </div>
            <div id="imageOverlay" className={overlayClassName} onClick={overlayOnClick}>
                {overlayContents}
            </div>
        </div>
    );
}

export default Image;
