export const setupMusicHTML = () => {
    return `<audio id="backgroundMusic">
            <source
                src="audio/music/MysteriesOfTheAbyss.mp3"
                type="audio/mp3"
            />
            </audio>`;
};

export const musicList = [
    { id: 0, next: 1, song: "audio/music/MysteriesOfTheAbyss.mp3" },
    { id: 1, next: 2, song: "audio/music/ShadowsCreepUnseen.mp3" },
    { id: 2, next: 3, song: "audio/music/EchoesInDarkness.mp3" },
    { id: 3, next: 0, song: "audio/music/EldritchAbyssalDepths.mp3" },
];

export const getSong = (id) => {
    return musicList.find((music) => music.id === id);
};
