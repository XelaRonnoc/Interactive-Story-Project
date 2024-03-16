export const getNavButtonsHTML = (nextPage) => {
    return `
        <div class="button-container">
            <button data-next-page=${nextPage} class="button-container__nav-button next-button">
                next
            </button>
        </div>`;
};
