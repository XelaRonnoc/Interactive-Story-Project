import { getContentWithId } from "../../services/contentProvider/contentProvider.js";
import {
    getCurrentPage,
    nextPage,
} from "../../containers/pageManager/pageManager.js";

let keyPattern = "";

export const createQuickTimeInstructions = (instructions) => {
    const placeholder = instructions
        .split(" ")
        .reduce((acc) => (acc += "_ "), "");
    return `
            <div class="quickTime" id="quickTimeInstructions">${instructions}</div>
            <div class="quickTime" id="quickTimeEntry">${placeholder}</div>`;
};

export const handleCodeEntry = (event, pageContainer) => {
    const curSuccessCode =
        getContentWithId(getCurrentPage())?.quickTime?.successCode ?? "";
    if (curSuccessCode) {
        let key = event.keyCode ? event.keyCode : event.which;
        let character = String.fromCharCode(key).toLowerCase();
        setKeyPattern(getKeyPattern() + character);
        const keyView = getKeyPattern().toUpperCase().split("").join(" ");
        $("#quickTimeEntry").html(`${keyView}`);
        if (getKeyPattern() === curSuccessCode) {
            $(".timer-bar__inner").stop();
            nextPage(
                pageContainer,
                getContentWithId(getCurrentPage()).quickTime.passPage,
                0
            );
            clearKeyPattern();
        } else if (keyPattern.length >= curSuccessCode.length) {
            $(".timer-bar__inner").stop();
            nextPage(
                pageContainer,
                getContentWithId(getCurrentPage()).nextPage,
                0
            );
            clearKeyPattern();
        }
    }
};

const getKeyPattern = () => {
    return keyPattern;
};

const setKeyPattern = (newKey) => {
    keyPattern = newKey;
};

export const clearKeyPattern = () => {
    keyPattern = "";
};
