let curSongId = 0;

export const setupMusicHTML = () => {
    $("#musicContainer").html(`<audio id="backgroundMusic">
            <source
                src="audio/music/MysteriesOfTheAbyss.mp3"
                type="audio/mp3"
            />
            </audio>`);
};

const musicList = [
    { id: 0, next: 1, song: "audio/music/MysteriesOfTheAbyss.mp3" },
    { id: 1, next: 2, song: "audio/music/ShadowsCreepUnseen.mp3" },
    { id: 2, next: 3, song: "audio/music/EchoesInDarkness.mp3" },
    { id: 3, next: 0, song: "audio/music/EldritchAbyssalDepths.mp3" },
];

export const initializeMusicVol = () => {
    document.getElementById("backgroundMusic").volume =
        $("#musicVolume").val() / 100;
};

export const updateMusicVol = (volumeAdjustment) => {
    const musicEl = document.getElementById("backgroundMusic");
    musicEl.volume = volumeAdjustment / 100;
};

const getSong = (id) => {
    return musicList.find((music) => music.id === id);
};

export const playNext = (element) => {
    curSongId = getSong(curSongId).next;
    element.setAttribute("src", getSong(curSongId).song);
    element.play();
    return curSongId;
};

export const unpauseMusic = () => {
    if (document.getElementById("backgroundMusic").paused) {
        document.getElementById("backgroundMusic").play();
    }
};
