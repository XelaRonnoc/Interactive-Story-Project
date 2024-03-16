import { getContentWithId } from "../../services/contentProvider/contentProvider.js";
import {
    createBackgroundImageHTML,
    createPage,
    createPageWithDialog,
} from "../../components/page/page.js";

// the holder for every page of the story
let currentPage = "0";
let currentStoryPoints = 0;
let currentPageTimeout = 0;

export const nextPage = (pageContainer, nextPageId, storyPoints) => {
    currentPage = nextPageId;
    currentStoryPoints += storyPoints || 0;
    renderPage(pageContainer);
};

export const getCurrentPage = () => {
    return currentPage;
};

export const getCurrentPageTimeout = () => {
    return currentPageTimeout;
};

const getTextHTML = (textContent) => {
    return textContent.dialog
        ? createPageWithDialog(textContent)
        : createPage(textContent);
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
