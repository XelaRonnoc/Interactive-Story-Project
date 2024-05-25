import { getContentWithId } from "../../services/contentProvider/contentProvider.js";
import {
    getCurrentPage,
    setCurrentPageTimeout,
} from "../pageManager/pageManager.js";
import {
    createBackgroundImageHTML,
    createPage,
    createPageWithDialog,
    createPageWithQuickTime,
} from "../../components/page/page.js";

// page rendering
export const renderPage = (pageContainer) => {
    const curPageContent = getContentWithId(getCurrentPage());
    setCurrentPageTimeout(curPageContent.time);
    const imgHTML = getImageHTML(curPageContent.image);
    const textHTML = getTextHTML(curPageContent);
    pageContainer.html(imgHTML + textHTML);
};

// Getters, Setters, Initializers
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
