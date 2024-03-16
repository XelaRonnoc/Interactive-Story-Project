// a timer used for timed choices
export const getTimerBarHTML = (duration) => {
    return `
    <div class="timer-bar" style="--duration: ${duration};">
        <div></div>
    </div>
    `;
};
