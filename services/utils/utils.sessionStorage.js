export const getStoryPoints = () => {
    return sessionStorage.getItem("storyPoints");
};

export const updateStoryPoints = (points) => {
    const newPoints = points + parseInt(sessionStorage.getItem("storyPoints"));
    sessionStorage.setItem("storyPoints", newPoints);
};

export const initializeSessionStorage = () => {
    sessionStorage.setItem("curPage", "intro");
    sessionStorage.setItem("storyPoints", 0);
};
