import {
    getCurrentPage,
    getCurrentPageTimeout,
    initialiseLocalStorage,
    nextPage,
    renderPage,
} from "./containers/pageManager/pageManager.js";
import { getContentWithId } from "./services/contentProvider/contentProvider.js";

$(document).ready(function () {
    if (!localStorage.getItem("curPage")) {
        initialiseLocalStorage();
    }
    const pageContainer = $("main");
    let timeoutId = 0;
    let keyPattern = "";
    renderPage(pageContainer);

    $("main").on("click", ".next-button", function () {
        clearTimeout(timeoutId);
        nextPage(
            pageContainer,
            $(this).attr("data-next-page"),
            parseInt($(this).attr("data-story-points")) ?? 0,
            $(this).attr("data-branch-target"),
            $(this).attr("data-branch-value")
        );
    });

    $(document).keypress(function (event) {
        const curSuccessCode =
            getContentWithId(getCurrentPage())?.quickTime?.successCode ?? "";
        if (curSuccessCode) {
            let key = event.keyCode ? event.keyCode : event.which;
            let character = String.fromCharCode(key).toLowerCase();
            keyPattern += character;
            if (keyPattern === curSuccessCode) {
                clearTimeout(timeoutId);
                nextPage(
                    pageContainer,
                    getContentWithId(getCurrentPage()).quickTime.passPage,
                    0
                );
                keyPattern = "";
            } else if (keyPattern.length >= curSuccessCode.length) {
                clearTimeout(timeoutId);
                nextPage(
                    pageContainer,
                    getContentWithId(getCurrentPage()).nextPage,
                    0
                );
                keyPattern = "";
            }
        }
    });

    $("main").on("click", function () {
        if (getCurrentPageTimeout() > 0) {
            timeoutId = setTimeout(function () {
                nextPage(
                    pageContainer,
                    getContentWithId(getCurrentPage()).nextPage,
                    0
                );
            }, getCurrentPageTimeout() * 1000);
        }
    });
});
