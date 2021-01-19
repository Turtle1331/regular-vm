document.addEventListener("DOMContentLoaded", () => {
    const searchLocations = Object.freeze({
        spec: "https://github.com/regular-vm/specification/search?q=",
        ext: "https://github.com/regular-vm-extensions/regular-ext/search?q=",
    });

    const searchForm = document.querySelector("#search > form");
    if (searchForm) {
        searchForm.addEventListener("submit", event => {
            event.preventDefault();
            const query = searchForm.elements.searchQuery.value;
            const location = searchLocations[searchForm.elements.searchLocation.value];
            window.location.href = location + encodeURIComponent(query);
            return false;
        });
    }
});
