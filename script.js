import {
    getCurrentPageTimeout,
    handlePageNavigation,
} from "./containers/pageManager/pageManager.js";
import { renderPage } from "./containers/pageRenderer/pageRenderer.js";
import {
    setupMusicHTML,
    playNext,
    initializeMusicVol,
    updateMusicVol,
} from "./services/musicProvider/musicProvider.js";
import { initializeTimerBar } from "./components/barTimer/barTimer.js";
import { handleCodeEntry } from "./components/quickTime/quickTime.js";
import { initializeSessionStorage } from "./services/utils/utils.sessionStorage.js";

$(document).ready(function () {
    // initialise app and page
    if (!sessionStorage.getItem("curPage")) {
        initializeSessionStorage();
    }
    const pageContainer = $("main");
    renderPage(pageContainer);
    setupMusicHTML();
    initializeMusicVol();
    if (getCurrentPageTimeout() > 0) {
        initializeTimerBar(pageContainer);
    }

    //User active events
    $("#reset").on("click", function () {
        initializeSessionStorage();
        location.reload();
    });

    $("#musicVolume").on("input propertychange", function () {
        updateMusicVol($(this).val());
    });

    $("main").on("click", ".next-button", function () {
        handlePageNavigation($(this), pageContainer);
    });

    $(document).keypress(function (event) {
        handleCodeEntry(event, pageContainer);
    });

    //Passive events
    $("#backgroundMusic").on("ended", function () {
        playNext(this);
    });
});
