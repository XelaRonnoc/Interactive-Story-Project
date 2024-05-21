export const getNavButtonsHTML = (nextPage) => {
    return `
        <div class="button-container">
            <button data-next-page=${nextPage} class="button-container__button next-button">
                Next
            </button>
        </div>`;
};
