function ImageItem(props) {
    const src = props.src;
    const alt = props.children;

    function onClick() {
        props.state.set({
            src: src,
            alt: alt,
        });
    }

    return (
        <img src={src} alt={alt} onClick={onClick} />
    );
}

export default ImageItem;
