import {
    getCurrentPage,
    getCurrentPageTimeout,
    initialiseSessionStorage,
    nextPage,
    renderPage,
} from "./containers/pageManager/pageManager.js";
import {
    setupMusicHTML,
    getSong,
} from "./services/musicProvider/musicProvider.js";
import { getContentWithId } from "./services/contentProvider/contentProvider.js";

$(document).ready(function () {
    if (!sessionStorage.getItem("curPage")) {
        initialiseSessionStorage();
    }
    const pageContainer = $("main");
    let keyPattern = "";
    let curSongId = 0;
    renderPage(pageContainer);

    $("#musicContainer").html(setupMusicHTML());
    document.getElementById("backgroundMusic").volume =
        $("#musicVolume").val() / 100;
    $("#backgroundMusic").on("ended", function () {
        curSongId = getSong(curSongId).next;
        $(this).attr("src", getSong(curSongId).song);
        this.play();
    });

    $("#reset").on("click", function () {
        initialiseSessionStorage();
        location.reload();
    });

    $("#musicVolume").on("input propertychange", function () {
        const musicEl = document.getElementById("backgroundMusic");
        musicEl.volume = $(this).val() / 100;
    });

    $("main").on("click", ".next-button", function () {
        if (document.getElementById("backgroundMusic").paused) {
            document.getElementById("backgroundMusic").play();
        }
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
            keyPattern = "";
        }
    });

    $(document).keypress(function (event) {
        const curSuccessCode =
            getContentWithId(getCurrentPage())?.quickTime?.successCode ?? "";
        if (curSuccessCode) {
            let key = event.keyCode ? event.keyCode : event.which;
            let character = String.fromCharCode(key).toLowerCase();
            keyPattern += character;
            const keyView = keyPattern.toUpperCase().split("").join(" ");
            $("#quickTimeEntry").html(`${keyView}`);
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
        keyPattern = "";
    }
});
