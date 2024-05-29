import {
    getCurrentPageTimeout,
    nextPage,
    getCurrentPage,
} from "../../containers/pageManager/pageManager.js";
import { getContentWithId } from "../../services/contentProvider/contentProvider.js";
import { clearKeyPattern } from "../quickTime/quickTime.js";

export const getTimerBarHTML = () => {
    return `
    <div class="timer-bar">
        <div class="timer-bar__inner"></div>
    </div>
    `;
};

export const animateTimerBar = (timerBarElement, pageContainer) => {
    timerBarElement.animate(
        { width: "0px" },
        {
            duration: getCurrentPageTimeout() * 1000,
            easing: "linear",
            complete: () =>
                nextPage(
                    pageContainer,
                    getContentWithId(getCurrentPage()).nextPage,
                    0
                ),
        }
    );
    clearKeyPattern();
};

export const initializeTimerBar = (pageContainer) => {
    $(".timer-bar__inner").stop();
    animateTimerBar($(".timer-bar__inner"), pageContainer);
};
