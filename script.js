import {
    getCurrentPage,
    getCurrentPageTimeout,
    nextPage,
    renderPage,
} from "./containers/pageManager/pageManager.js";

$(document).ready(function () {
    const pageRoot = $(":root");
    const pageContainer = $("main");
    let timeoutId = 0;
    renderPage(pageContainer);

    $("main").on("click", ".next-button", function () {
        clearTimeout(timeoutId);
        nextPage(
            pageContainer,
            $(this).attr("data-next-page"),
            parseInt($(this).attr("data-story-points")) ?? 0
        );
    });

    $("main").on("click", function () {
        if (getCurrentPageTimeout() > 0) {
            timeoutId = setTimeout(function () {
                nextPage(pageContainer, "2c", 0);
            }, getCurrentPageTimeout() * 1000);
        }
    });
});
