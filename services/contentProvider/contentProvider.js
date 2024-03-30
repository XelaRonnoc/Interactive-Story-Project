const contentArray = [
    {
        id: "1a",
        title: "Chapter 1 SOS",
        text: `<p>
        “Decelerating to the Last known location of the Gwydion Captain.”
        “How long till we are in visual range?”
        “3 hours 43 minutes 38 seconds, Captain” 
        “Ok, let me know when we are there Rhiannon”
        “yes , captain”
        </p>
        <p>Connor groaned as he rose from under the console he was working on. The screen had been flickering, likely a loose wire and he had decided there was no need to disturb Hyun-Ae with such a trivial fix. That however had been more than 3 hours ago and despite his repeated oaths of the pain and torment he would inflict upon the panel it had still stubbornly refused to improve and if anything was worse than when he started.</p>
        <p>“Piece of shit” he mumbled as he made his way to the door
        “What was that Captain?” came Rhiannon’s synthetic voice
        “Not you Rhiannon, just the bloody navigation panel that’s all”
        </p>
        <p>The Rhiannon was an old ship one of the oldest on Titan’s Salvage and Rescue roster, but with that age came experience. More than once she had gotten Connor and the others out of sticky situations, and so Connor was inclined to forgive the odd malfunction. Besides there was little Hyun-Ae couldn’t fix.</p>`,
        image: {
            imageRef: `images/MoonBase.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "1b",
        time: 0,
    },
    {
        id: "1b",
        title: "Decision Hyun-Ae or Mess hall",
        text: `<p>Speaking of Connor best go wake her, Rhiannon can do the nav herself however it is always good for the Captain to see where his vessel is too.</p>\
        <p>*grumble*</p>
        <p>‘God I’m hungry!’ he thought. He couldn’t remember if he had eaten anything since he woke up today or not.</p>`,
        dialog: [
            {
                id: "O1",
                text: "Wake Hyun-Ae to fix the nav panel",
                storyPoints: 0,
                nextPage: "2a",
                branchUpdate: {
                    target: "3e",
                    value: "4a",
                },
            },
            {
                id: "O2",
                text: "Go to the mess to get something to eat first",
                storyPoints: 0,
                nextPage: "2b",
                branchUpdate: {
                    target: "4d",
                    value: "3a",
                },
            },
        ],
        image: {
            imageRef: `./images/TwoPeopleOnBridgeOfSpaceShip.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "2a",
        time: 10,
    },
    {
        id: "2a",
        title: "Go To Hyun-Ae",
        text: `<p>Best get Hyun-Ae up. We are nearing the Gwydion anyway and we want the ship to be in the best possible condition before beginning the rescue operation.</p>`,
        image: {
            imageRef: `images/USASpaceSuitsBridge.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "3a",
        time: 0,
    },
    {
        id: "2b",
        title: "Go to Mess Hall",
        text: `<p>Let Hyun-Ae sleep a bit longer, there will be enough time for her to fix before the operation begins. Besides, a hungry Captain can do more harm than good.</p>`,
        image: {
            imageRef: `images/Cyberpunk.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "4a",
        time: 0,
    },
    {
        id: "3a",
        title: "Hyun-Ae",
        text: `<p>The door to Hyun-Ae’s Quarters was open and an empty can of energy syrup lay on her unmade bed. Hyun-Ae wasn’t ex-military or police like Onaje and Connor and didn’t share their affinity for a tidy room. She was a relatively recent graduate of the Scholar Technica on Venus who had joined the crew of the Rhiannon after the previous engineer had died during a salvaging operation. She had joined the Rhiannon to avoid being stuck behind some corpo desk on earth advising suits on how what bot series they should use only to be ignored. Despite her lack of experience with void salvage she had more than made up for it with her enthusiasm and smarts. Making multiple improvements and repairs to Rhiannon within the first few months on the crew.</p>
        <p>“Bloody hell does she ever sleep?” Connor muttered to himself as hew made his way to engineering.</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "3b",
        time: 0,
    },
    {
        id: "3b",
        title: "Engineering",
        text: `<p>“OI!”</p>
        <p>Connor winced as Hyun-Ae jumped with a start, wacking her head on the machine she was under.</p>
        <p>‘Whoops’ he thought</p>
        <p>“What was that for?!” she demanded rubbing her head</p>
        <p>“You were meant to be asleep! You can’t have gotten more than 3 hours since we last spoke!”</p>
        <p>“Three and a half actually” she replied</p>
        <p>“We need you rested for this, a tired brain…”</p>
        <p>“...Make mistakes yes I know” she said “But I figured out why our electronics are dying so often lately. There's a hole in the coolant piping insulation and it is dropping condensation straight onto the main switch board! No more outages and flickery screens!”</p>
        <p>“Ahhh” Connor said, shirking from the thought of telling her what he had done to the nav console.</p>
        `,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "3c",
        time: 0,
    },
    {
        id: "3c",
        title: "Reply to Hyun-Ae",
        text: `<p>“What did you need, captain?”</p>`,
        dialog: [
            {
                id: "O1",
                text: "“Nothing don’t worry about it.”",
                storyPoints: 0,
                nextPage: "3d",
            },
            {
                id: "O2",
                text: "“well… I may have tried to fix the nav console…”",
                storyPoints: 5,
                nextPage: "3e",
            },
        ],
        image: {
            imageRef: `./images/TwoPeopleOnBridgeOfSpaceShip.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "3d",
        time: 10,
    },
    {
        id: "3d",
        title: "Response from Hyun-Ae",
        text: `<p>“So you just came here to frighten the shit out of me and give me a headache?”</p>
        <p>“Tsk” he said kissing his teeth “well I might have broken the nav console, tried to fix the screen”</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "3e",
        time: 0,
    },
    {
        id: "3e",
        title: "Response from Hyun-Ae",
        text: `<p>“huuuuhhh” she sighed deeply “What have I said about leaving the repairs to the professionals? Fine, I will get on it”</p>
        <p>“Thanks Hyun, what would I do without you?”</p>
        <p>“Tear the ship to pieces by the sounds of it.”</p>
        <p>Grinning Connor turned and headed out the door.</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "5a",
        time: 0,
    },
    {
        id: "4a",
        title: "Mess Hall",
        text: `<p>As Connor entered the mess he saw Onaje seated at the small round table at the center. Onaje was a pretty big man in his mid thirties, an ex-agri-corp securities surgeon who was a veteran of many of the hostile takeovers that plague the home world of humanity. Onaje had retired from the military in order to try and seek out a more peaceful life and so had joined Connor some years prior to act as the Rhiannon's medical officer. He and Connor had become close friends over the years and so Connor was happy to see him here now.</p>
        <p>“What dinner today” Connor asked</p>
        <p>“Stew”</p>
        <p>“Ahhh good, my favourite”</p>
        <p>"Heat for Connor," he said, grabbing one of the quick meal packs and tossing it into the microwave.</p>
        <p>“Affirmative, heating Beef Stew 29983 to preference Connor” confirmed the autonuker.</p>
        <p>“We are almost at Gwydion, you still concerned about it Ona?”</p>
        <p>“Aren’t you? A crew of nearly 3 thousand and all we have received is one SOS beacon” replied Onaje “Not to mention the prototype FTL, they could all have died of some horrible unforseen radiation for all we know, hell the ship could be deadly just to be near if that's the case.”</p>
        <p>“Yeah, that’d be less than ideal, although equally could just be the communications were fried, they should have plenty of food and water and unless absolutely power source died then the air scrubbers should still be working we should be able to stabilize any situation and provide enough supplies until the main salvage fleet arrives.”</p>
        <p>“How long till they’re here?”</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "4b",
        time: 0,
    },
    {
        id: "4b",
        title: "Autonuke",
        text: `<p>“Meal Ready!” Chimed the machine voice of the autonuker”</p>`,
        dialog: [
            {
                id: "O1",
                text: "“Thanks”",
                storyPoints: 5,
                nextPage: "4c",
            },
            {
                id: "O2",
                text: "“God that thing annoys me”",
                storyPoints: 0,
                nextPage: "4c",
            },
        ],
        image: {
            imageRef: `./images/TwoPeopleOnBridgeOfSpaceShip.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "4c",
        time: 3,
    },
    {
        id: "4c",
        title: "Mess Hall",
        text: `<p>“Last message they sent said they were about 2 months behind us, they must have gotten moving pretty quick from Lunar in order to be so close on our heels” Connor said sitting down opposite Onaje.</p>
        <p>“How’d the nav console go?” Asked Onaje with a smirk</p>
        <p>“Hurgphm” grunted Connor, unable to speak with a mouthful of stew, not that he wanted to.</p>
        <p>“I can just imagine Hyun-Ae’s face” Onaje chuckled as Connor glared at him over his stew</p>
        <p>For a while they both ate in comfortable silence, enjoying the meal and the company.</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "4d",
        time: 0,
    },
    {
        id: "4d",
        title: "Mess Hall",
        text: `<p>“I best try and get an hour or two before we arrive '' said Onaje getting up to put his bowl in the autoclense dishwasher.</p>
        <p>“I’ll call you when we reach visual range”</p>
        <p>Onaje walked out giving a thumbs up over his shoulder as he left.</p>
        <p>Connor had almost finished his meal too. He scooped up the last bit and tossed it in the autocleanse also before leaving.</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "5a",
        time: 0,
    },
    {
        id: "5a",
        title: "Arrival at The Gwydion",
        text: `<p>Connor woke with a start to the sound of Rhiannon’s voice through his quarters comms</p>
        <p>“Gwydion in visual range captain, will be ready to dock in 20 minutes”</p>
        <p>“What have I told you about waking me like that!” moaned Connor</p>
        <p>“I can hardly gently shake you awake Captain” Rhiannon chided</p>
        <p>“Point taken”<p>
        <p>Pulling on his trousers and kit Connor made his way to the bridge knocking on Onaje’s door on the way.</p>
        <p>“We’re here Ona, suit up!”</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "5b",
        time: 0,
    },
    {
        id: "5b",
        title: "Arrival at The Gwydion",
        text: `<p>On the bridge Connor found Hyun-Ae under the Nav console he had torn apart earlier.</p>
        <p>“You did a number on this one captain” Hyuan-Ae said</p>
        <p>“Well good thing we have the best engineer on all of Titan on the job then isn’t it”</p>
        <p>Looking out the front view-port Connor could see the long pill-like shape of the Gwydion silhouetted against the deep blue of Neptune behind it.</p>
        <p>“Any signals from the Gwydion, Rhiannon?”</p>
        <p>“Only the SOS captain, I am picking up that the ship still has some power and there doesn’t appear to be any external damage, however there is a small debris field surrounding it, looks to be like their may have been a number of unplanned decompressions”</p>
        <p>“Stange, maybe the jump caused some electrical or system damage then, hopefully it didn’t fry Gwydion. Any radiation?” asked the captain thinking back to Onaje’s earlier comments</p>
        <p>“None above expected levels</p>
        <p>“That’s a relief” said Onaje stepping onto the bridge</p>
        <p>“So far so good!” replied Connor with a grin</p>
        <p>“Must you always tempt fate?” asked Onaje grimacing</p>
        <p>“Only on a good day!” Connor replied</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "5c",
        time: 0,
    },
    {
        id: "5c",
        title: "Arrival at The Gwydion",
        text: `<p>“Rhiannon say’s we’ll be ready to dock shortly, she will use the passkey given to us by the conglomerate to give us access to the main hangar bay”.</p>
        <p>“Okay let’s suit up” said Connor “best we are prepared for poor conditions on the Gwydion, you too Hyun, leave the panel for later, Rhiannon can sort us out for nav just fine”</p>
        <p>“Whoo!” hyun cheered jumping up “adventure time!”</p>
        <p>“Indeed”</p>
        <p>But as the Gwydion became bigger and bigger in the view port, he felt an icy finger of dread creep into his gut. What could have happened? he wondered, he had read enough science fiction stories with FTL travel that caused madness or even brought forth demons and creatures from other dimensions. He brushed it off as a fanciful notion, even so only a few short range FTL jumps had been made before and then only with tiny crews of one or two. Perhaps those ships had been lucky.</p>
        <p>Shaking his head to clear it of these imaginings he made his way to the airlock and supply compartment to get his equipment.</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "6a",
        time: 0,
    },
    {
        id: "8a",
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
        id: "8b",
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

export const updateBranchPath = (target, value) => {
    console.log(target, value);
    const targetIndex = contentArray.findIndex((item) => item.id === target);
    contentArray[targetIndex].nextPage = value;
};
