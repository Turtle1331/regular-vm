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

    const imageOverlay = document.querySelector("#imageOverlay.overlay");
    if (imageOverlay) {
        imageOverlay.addEventListener("click", event => {
            event.stopPropagation();
            imageOverlay.innerHTML = "";
            imageOverlay.style.display = "none";
            return false;
        });

        document.querySelectorAll(".image-overlay").forEach(element => {
            element.addEventListener("click", event => {
                event.preventDefault();
                event.stopPropagation();

                // Copy content
                content = event.target.cloneNode(false);
                content.classList.add("overlay-content");
                content.addEventListener("click", event => {
                    event.stopPropagation();
                    return false;
                });

                // Add to overlay
                imageOverlay.appendChild(content);
                imageOverlay.style.display = "block";

                return false;
            }, true);
        });
    }

    const videoOverlay = document.querySelector("#videoOverlay.overlay");
    if (videoOverlay) {
        videoOverlay.addEventListener("click", event => {
            event.stopPropagation();
            videoOverlay.innerHTML = "";
            videoOverlay.style.display = "none";
            return false;
        });

        document.querySelectorAll(".embed-asciicast").forEach(element => {
            console.log(element);
            const videoId = element.dataset.asciicastId;
            `Id: ${videoId}`;

            const preview = document.createElement("img");
            preview.src = `https://asciinema.org/a/${videoId}.png`;
            element.appendChild(preview);

            element.addEventListener("click", event => {
                const content = document.createElement("div");
                content.classList.add("overlay-content");

                const loading = document.createElement("div");
                loading.innerText = "Loading...";
                loading.classList.add("loading-text");
                content.appendChild(loading);

                const embed = document.createElement("script");
                embed.src = `https://asciinema.org/a/${videoId}.js`;
                embed.id = `asciicast-${videoId}`;
                embed.async = true;
                content.appendChild(embed);

                videoOverlay.appendChild(content);
                videoOverlay.style.display = "block";
            });
        });
    }
});
