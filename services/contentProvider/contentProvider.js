import { contentArray } from "./contentArray.js";

export const getContentWithId = (id) => {
    return contentArray.find((item) => item.id === id);
};

export const setFailScreen = (target, message, failPageCheckpoint) => {
    const failIndex = contentArray.findIndex((item) => item.id === target);
    contentArray[failIndex].text = `${message}`;
    contentArray[failIndex].nextPage = `${failPageCheckpoint}`;
};

export const updateBranchPath = (target, value) => {
    const targetIndex = contentArray.findIndex((item) => item.id === target);
    contentArray[targetIndex].nextPage = value;
};
