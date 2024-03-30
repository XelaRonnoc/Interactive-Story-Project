export const createDialogOption = (dialogItem) => {
    const { id, text, nextPage, storyPoints } = dialogItem;
    return `<div id=${id} data-next-page="${nextPage}" data-story-points="${storyPoints}" data-branch-target="${
        dialogItem?.branchUpdate?.target ?? ""
    }" data-branch-value="${
        dialogItem?.branchUpdate?.value ?? ""
    }" data class="dialog__option next-button">${text}</div>`;
};
