import {
    getContentWithId,
    setFailScreen,
    updateBranchPath,
} from "../../services/contentProvider/contentProvider.js";
import { unpauseMusic } from "../../services/musicProvider/musicProvider.js";
import { animateTimerBar } from "../../components/barTimer/barTimer.js";
import {
    updateStoryPoints,
    getStoryPoints,
} from "../../services/utils/utils.sessionStorage.js";
import { renderPage } from "../pageRenderer/pageRenderer.js";

let currentPageTimeout = 0;

// Page navigation
export const handlePageNavigation = (element, pageContainer) => {
    unpauseMusic();
    $(".timer-bar__inner").stop();
    nextPage(
        pageContainer,
        element.attr("data-next-page"),
        parseInt(element.attr("data-story-points")) ?? 0,
        element.attr("data-branch-target"),
        element.attr("data-branch-value")
    );
    if (getCurrentPageTimeout() > 0) {
        animateTimerBar($(".timer-bar__inner"), pageContainer);
    }
};

export const nextPage = (
    pageContainer,
    nextPageId,
    storyPoints,
    updateBranchTarget = undefined,
    updateBranchValue = undefined
) => {
    const currentPageObj = getContentWithId(getCurrentPage());
    if (nextPageId === "failScreen") {
        setFailScreen(
            currentPageObj.quickTime.failPage,
            currentPageObj.quickTime.failPageMessage,
            currentPageObj.quickTime.failPageCheckpoint
        );
    }
    if (updateBranchTarget && updateBranchValue) {
        updateBranchPath(updateBranchTarget, updateBranchValue);
    }
    if (nextPageId === "Ending") {
        const storyPoints = getStoryPoints();
        if (storyPoints >= 30) {
            setCurrentPage("G1a");
        } else if (storyPoints > 10) {
            setCurrentPage("N1a");
        } else {
            setCurrentPage("B1a");
        }
    } else {
        setCurrentPage(nextPageId);
    }
    updateStoryPoints(storyPoints || 0);
    renderPage(pageContainer);
};

export const getCurrentPage = () => {
    return sessionStorage.getItem("curPage");
};

const setCurrentPage = (newPage) => {
    sessionStorage.setItem("curPage", newPage);
};

export const getCurrentPageTimeout = () => {
    return currentPageTimeout;
};

export const setCurrentPageTimeout = (timeout) => {
    currentPageTimeout = timeout;
};
