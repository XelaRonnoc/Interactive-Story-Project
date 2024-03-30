import {
    getContentWithId,
    setDeathMessage,
} from "../../services/contentProvider/contentProvider.js";
import {
    createBackgroundImageHTML,
    createPage,
    createPageWithDialog,
    createPageWithQuickTime,
} from "../../components/page/page.js";
import { updateBranchPath } from "../../services/contentProvider/contentProvider.js";

// the holder for every page of the story
let currentPage = "1a";
let currentStoryPoints = 0;
let currentPageTimeout = 0;

export const nextPage = (
    pageContainer,
    nextPageId,
    storyPoints,
    updateBranchTarget = undefined,
    updateBranchValue = undefined
) => {
    const currentPageObj = getContentWithId(getCurrentPage());
    if (nextPageId === "DeathScreen") {
        setDeathMessage(currentPageObj.quickTime.failPageMessage);
    }
    if (updateBranchTarget && updateBranchValue) {
        updateBranchPath(updateBranchTarget, updateBranchValue);
    }
    setCurrentPage(nextPageId);
    currentStoryPoints += storyPoints || 0;
    renderPage(pageContainer);
};

export const getCurrentPage = () => {
    return currentPage;
};

const setCurrentPage = (newPage) => {
    currentPage = newPage;
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
    const curPageContent = getContentWithId(currentPage);
    currentPageTimeout = curPageContent.time;
    const imgHTML = getImageHTML(curPageContent.image);
    const textHTML = getTextHTML(curPageContent);
    pageContainer.html(imgHTML + textHTML);
};
