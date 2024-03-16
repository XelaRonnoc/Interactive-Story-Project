import { getNavButtonsHTML } from "../navButton/navButton.js";
import { createDialogOption } from "../dialog/dialog.js";
import { getTimerBarHTML } from "../barTimer/barTimer.js";

export const createPage = (textInformation) => {
    const { id, title, text, nextPage } = textInformation;
    return `
    <div id='${id}' class="page">
    <h1>${title}</h1>
        <div id="paraId${id}" class='page__text-container'>
            <div>${text}</div>
        </div>
        ${getNavButtonsHTML(nextPage)}
    </div>
    `;
};

export const createPageWithDialog = (textInformation) => {
    const { id, title, text, dialog, time } = textInformation;
    const dialogOptions = dialog.reduce(
        (acc, item) => acc + createDialogOption(item),
        ""
    );
    return `
    <div id='${id}' class="page">
    <h1>${title}</h1>
        <div id="paraId${id}" class="page__text-container">
            <div>${text}</div>
            <div class="dialog">
                ${dialogOptions}
            </div>
             ${time ? getTimerBarHTML(time) : ""}
        </div>
    </div>
    `;
};

export const createBackgroundImageHTML = (imgInfo) => {
    const { imageRef, alt } = imgInfo;
    return `
    <section id="imageContainer">
        <img
            class="image"
            src="${imageRef}"
            alt="${alt}"
        /> 
    </section>       
    `;
};
