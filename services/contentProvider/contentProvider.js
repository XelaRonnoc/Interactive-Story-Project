const contentArray = [
    {
        id: "0",
        title: "Introduction",
        text: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, error tempore, distinctio dolorem animi quam veritatis doloribus quasi, non iusto deleniti optio culpa rerum. Facilis soluta eaque nulla quibusdam quisquam.</p>`,
        image: {
            imageRef: `images/MoonBase.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "1a",
        time: 0,
    },
    {
        id: "1a",
        title: "Dialog With Timer",
        text: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, error tempore, distinctio dolorem animi quam veritatis doloribus quasi, non iusto deleniti optio culpa rerum. Facilis soluta eaque nulla quibusdam quisquam.</p>`,
        dialog: [
            {
                id: "O1",
                text: "Option 1",
                storyPoints: 20,
                nextPage: "2a",
            },
            {
                id: "O2",
                text: "Option 2",
                storyPoints: 10,
                nextPage: "2b",
            },
            {
                id: "O3",
                text: "Option 3",
                storyPoints: 0,
                nextPage: "2c",
            },
        ],
        image: {
            imageRef: `./images/TwoPeopleOnBridgeOfSpaceShip.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "2c",
        time: 3,
    },
    {
        id: "2a",
        title: "Option 2a 20 points",
        text: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, error tempore, distinctio dolorem animi quam veritatis doloribus quasi, non iusto deleniti optio culpa rerum. Facilis soluta eaque nulla quibusdam quisquam.</p>`,
        image: {
            imageRef: `images/USASpaceSuits.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "3a",
        time: 0,
    },
    {
        id: "2b",
        title: "Option 2b 10 points",
        text: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, error tempore, distinctio dolorem animi quam veritatis doloribus quasi, non iusto deleniti optio culpa rerum. Facilis soluta eaque nulla quibusdam quisquam.</p>`,
        image: {
            imageRef: `images/Cyberpunk.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "3a",
        time: 0,
    },
    {
        id: "2c",
        title: "Option 2c 0 points",
        text: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, error tempore, distinctio dolorem animi quam veritatis doloribus quasi, non iusto deleniti optio culpa rerum. Facilis soluta eaque nulla quibusdam quisquam.</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "3a",
        time: 0,
    },
    {
        id: "3a",
        title: "Quick Time Event",
        text: `<p>Press the Keys in the displayed order to pass </p>`,
        image: {
            imageRef: `images/GwydionCorridor.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        quickTime: {
            instructions: "W A D S",
            successCode: "wads",
            passPage: "4a",
            failPage: "DeathScreen",
            failPageMessage:
                "You failed this quick time event and died from being crushed by a door",
        },
        nextPage: "DeathScreen",
        time: 5,
    },
    {
        id: "4a",
        title: "Passed Quick Time",
        text: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, error tempore, distinctio dolorem animi quam veritatis doloribus quasi, non iusto deleniti optio culpa rerum. Facilis soluta eaque nulla quibusdam quisquam.</p>`,
        image: {
            imageRef: `images/GwydionMedicalBay.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "0",
        time: 0,
    },
    {
        id: "DeathScreen",
        title: "You Died",
        text: `<p>...</p>`,
        image: {
            imageRef: `images/Death.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "0",
        time: 0,
    },
];

export const getContentWithId = (id) => {
    return contentArray.find((item) => item.id === id);
};

export const setDeathMessage = (message) => {
    const deathIndex = contentArray.findIndex(
        (item) => item.id === "DeathScreen"
    );
    contentArray[deathIndex].text = `<p>${message}</p>`;
};
