const searchLocations = Object.freeze({
    spec: "https://github.com/regular-vm/specification/search?q=",
    ext: "https://github.com/regular-vm-extensions/regular-ext/search?q=",
});

function Text() {
    function onSubmit(event) {
        event.preventDefault();

        const searchForm = event.target;
        const query = searchForm.elements.searchQuery.value;
        const location = searchLocations[searchForm.elements.searchLocation.value];
        window.location.href = location + encodeURIComponent(query);

        return false;
    }

    return (
        <div>
            <div id="search" className="center">
                <form onSubmit={onSubmit}>
                    <label>
                        {"Search docs: "}
                        <input type="text" name="searchQuery" />
                    </label>
                    <label>
                        {" "}
                        <input type="radio" name="searchLocation" value="spec" defaultChecked="true" />
                        {" Specification "}
                    </label>
                    <label>
                        <input type="radio" name="searchLocation" value="ext" />
                        {" Extensions"}
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Text;
