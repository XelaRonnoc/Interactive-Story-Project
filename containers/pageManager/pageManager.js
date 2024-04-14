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
    console.log(nextPageId);
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
    setCurrentPage(nextPageId);
    updateStoryPoints(storyPoints || 0);
    renderPage(pageContainer);
};

export const getCurrentPage = () => {
    return localStorage.getItem("curPage");
};

export const updateStoryPoints = (points) => {
    const newPoints = points + parseInt(localStorage.getItem("storyPoints"));
    localStorage.setItem("storyPoints", newPoints);
};

const setCurrentPage = (newPage) => {
    localStorage.setItem("curPage", newPage);
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
};

export const initialiseLocalStorage = () => {
    localStorage.setItem("curPage", "1a");
    localStorage.setItem("storyPoints", 0);
};
