export const createQuickTimeInstructions = (instructions) => {
    const placeholder = instructions
        .split(" ")
        .reduce((acc) => (acc += "_ "), "");
    return `
            <div class="quickTime" id="quickTimeInstructions">${instructions}</div>
            <div class="quickTime" id="quickTimeEntry">${placeholder}</div>`;
};
