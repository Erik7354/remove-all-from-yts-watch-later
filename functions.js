/**
 * Returns the node that matches the xpath or null otherwise
 * @param {string} path XPath that should be evaluated
 * @returns {Node | null}
 */
function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

/**
 * Removes the first video from your watch-later playlist
 * @returns {Promise}
 */
async function removeFirstElement() {
    return new Promise((resolve) => {
        const button = getElementByXpath("/html/body/ytd-app/div/ytd-page-manager/ytd-browse/ytd-two-column-browse-results-renderer/div[1]/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-playlist-video-list-renderer/div[3]/ytd-playlist-video-renderer[1]/div[3]/ytd-menu-renderer/yt-icon-button/button")
        // resolve and return if no button was found
        if (button == null) { resolve("empty"); return }

        button.click();
        setTimeout(() => {
            // searching for the remove button in the context menu (third button is for removing); one could also use xpath here
            const removeButton = Array.from(document.getElementsByTagName("ytd-menu-service-item-renderer"))[2];
            // remove video
            removeButton.click();
            resolve();
        }, 1000);
    })
}
