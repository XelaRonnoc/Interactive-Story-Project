export const getStoryPoints = () => {
    return sessionStorage.getItem("storyPoints");
};

export const updateStoryPoints = (storyPoints) => {
    const newPoints =
        storyPoints + parseInt(sessionStorage.getItem("storyPoints"));
    sessionStorage.setItem("storyPoints", newPoints);
};

export const initializeSessionStorage = () => {
    sessionStorage.setItem("curPage", "intro");
    sessionStorage.setItem("storyPoints", 0);
};
