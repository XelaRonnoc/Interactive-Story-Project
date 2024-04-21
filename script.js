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
    let keyPattern = "";
    renderPage(pageContainer);

    $("main").on("click", ".next-button", function () {
        $(".timer-bar__inner").stop();
        nextPage(
            pageContainer,
            $(this).attr("data-next-page"),
            parseInt($(this).attr("data-story-points")) ?? 0,
            $(this).attr("data-branch-target"),
            $(this).attr("data-branch-value")
        );
        if (getCurrentPageTimeout() > 0) {
            $(".timer-bar__inner").animate(
                { width: "0px" },
                {
                    duration: getCurrentPageTimeout() * 1000,
                    easing: "linear",
                    complete: () =>
                        nextPage(
                            pageContainer,
                            getContentWithId(getCurrentPage()).nextPage,
                            0
                        ),
                }
            );
        }
    });

    $(document).keypress(function (event) {
        const curSuccessCode =
            getContentWithId(getCurrentPage())?.quickTime?.successCode ?? "";
        if (curSuccessCode) {
            let key = event.keyCode ? event.keyCode : event.which;
            let character = String.fromCharCode(key).toLowerCase();
            keyPattern += character;
            if (keyPattern === curSuccessCode) {
                $(".timer-bar__inner").stop();
                nextPage(
                    pageContainer,
                    getContentWithId(getCurrentPage()).quickTime.passPage,
                    0
                );
                keyPattern = "";
            } else if (keyPattern.length >= curSuccessCode.length) {
                $(".timer-bar__inner").stop();
                nextPage(
                    pageContainer,
                    getContentWithId(getCurrentPage()).nextPage,
                    0
                );
                keyPattern = "";
            }
        }
    });

    if (getCurrentPageTimeout() > 0) {
        $(".timer-bar__inner").stop();
        $(".timer-bar__inner").animate(
            { width: "0px" },
            {
                duration: getCurrentPageTimeout() * 1000,
                easing: "linear",
                complete: () =>
                    nextPage(
                        pageContainer,
                        getContentWithId(getCurrentPage()).nextPage,
                        0
                    ),
            }
        );
    }
});
