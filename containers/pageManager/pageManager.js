import {
    getContentWithId,
    setFailScreen,
    updateBranchPath,
} from "../../services/contentProvider/contentProvider.js";
import {
    createBackgroundImageHTML,
    createPage,
    createPageWithDialog,
    createPageWithQuickTime,
} from "../../components/page/page.js";

// the holder for every page of the story
let currentPageTimeout = 0;

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

export const updateStoryPoints = (points) => {
    const newPoints = points + parseInt(sessionStorage.getItem("storyPoints"));
    sessionStorage.setItem("storyPoints", newPoints);
};
export const getStoryPoints = () => {
    return sessionStorage.getItem("storyPoints");
};

const setCurrentPage = (newPage) => {
    sessionStorage.setItem("curPage", newPage);
};

export const getCurrentPageTimeout = () => {
    return currentPageTimeout;
};

const getTextHTML = (textContent) => {
    if (textContent.dialog) {
        return createPageWithDialog(textContent);
    }
    if (textContent.quickTime) {
        return createPageWithQuickTime(textContent);
    }
    return createPage(textContent);
};

const getImageHTML = (imgInfo) => {
    return createBackgroundImageHTML(imgInfo);
};

export const renderPage = (pageContainer) => {
    const curPageContent = getContentWithId(getCurrentPage());
    currentPageTimeout = curPageContent.time;
    const imgHTML = getImageHTML(curPageContent.image);
    const textHTML = getTextHTML(curPageContent);
    pageContainer.html(imgHTML + textHTML);
    const audio = document.getElementById("sfx");
    audio ? (audio.volume = 1) : "";
};

export const initialiseSessionStorage = () => {
    sessionStorage.setItem("curPage", "intro");
    sessionStorage.setItem("storyPoints", 0);
};
