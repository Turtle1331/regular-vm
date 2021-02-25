import {useState, useEffect} from 'react';

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    function onScroll() {
        setVisible(window.scrollY >= 0.25 * window.innerHeight);
    }

    function onClick() {
        window.scrollTo({top: 0});
    }

    useEffect(() => {
        document.addEventListener("scroll", onScroll);
        onScroll();
        return () => document.removeEventListener("scroll", onScroll);
    }, []);

    const className = visible ? "visible" : "";
    if (visible) {
        return (
            <button id="scrollToTop" className={className} onClick={onClick}>Scroll to top</button>
        );
    }
    return null;
}

export default ScrollToTop;
