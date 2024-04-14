const contentArray = [
    {
        id: "1a",
        title: "Chapter 1 SOS",
        text: `
        <p>“Decelerating to the Last known location of the Gwydion Captain.”</p>
        <p>“How long till we are in visual range?”</p>
        <p>“3 hours 43 minutes 38 seconds, Captain” </p>
        <p>“Ok, let me know when we are there Rhiannon”</p>
        <p>“yes , captain”</p>
        </p>
        <p>Connor groaned as he rose from under the console he was working on. The screen had been flickering, likely a loose wire and he had decided there was no need to disturb Hyun-Ae with such a trivial fix. That however had been more than 3 hours ago and despite his repeated oaths of the pain and torment he would inflict upon the panel it had still stubbornly refused to improve and if anything was worse than when he started.</p>
        <p>“Piece of shit” he mumbled as he made his way to the door</p>
        <p>“What was that Captain?” came Rhiannon’s synthetic voice</p>
        <p>“Not you Rhiannon, just the bloody navigation panel that’s all”</p>
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
        id: "6a",
        title: "Gwydion",
        text: `<p>Rhiannon was not a big ship she knew, however with her long range engines and salvage equipment she was one of the larger ships at the Titan docks but lying in the Gwydion's hangar she felt no bigger than a ground car.</p>
        <p>She could see her crew and the small team of bots led by Three’s making their way to the hangars inner doors. They looked like Ant’s to her from this distance. She felt a pang of worry as they appeared so vulnerable walking into the depths of this giant silent ship, and there was little she could do to help them if any trouble arose deeper in the ship.</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "7a",
        time: 0,
    },
    {
        id: "7a",
        title: "To the brdige",
        text: ``,
        dialog: [
            {
                id: "O1",
                text: "“Get that door open!”",
                storyPoints: 0,
                nextPage: "7b",
            },
            {
                id: "O2",
                text: "“Threes, can you get that door open?”",
                storyPoints: 5,
                nextPage: "7c",
            },
        ],
        image: {
            imageRef: `./images/TwoPeopleOnBridgeOfSpaceShip.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "7b",
        time: 0,
    },
    {
        id: "7b",
        title: "Gwydion",
        text: `<p>“Compliance.”</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "7d",
        time: 0,
    },
    {
        id: "7c",
        title: "Gwydion",
        text: `<p>“Yes Captain, interfacing…”</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "7d",
        time: 0,
    },
    {
        id: "7d",
        title: "Gwydion",
        text: `<p>The bulkhead door begun to slide open as Threes interfaced with the control console. </p>
        <p>The corridor extending in front of them was strewn with debris, a few flickering lights where all that illuminated the corridor.</p>
        <p“Not ominous at all” commented Hyun-Ae></p>
        <p>“Indeed” agreed Onaje</p>
        <p>“We need to make our way to the bridge, let's all be on alert. Three’s, you and the bots bring up the rear keep a lookout for any survivors” Connor ordered</p>
        <p>The small group of people and bots made their way down the corridor, their solid shot weapons raised and scanning the way ahead.</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "8a",
        time: 0,
    },
    {
        id: "7d",
        title: "Gwydion",
        text: `<p>As they made their way down what Connor was fairly sure was the main spinal corridor of the Gwydion, they encountered strange patterns of damage that looked similar to that seen after the close combat of a boarding action, bullet holes were strewn across the walls and sealings and many of the lights had been shot out. However, they had not seen any bodies or destroyed bots, not even so much as blood stains.</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "8a",
        time: 0,
    },
    {
        id: "7d",
        title: "Gwydion",
        text: `<p>As they made their way down what Connor was fairly sure was the main spinal corridor of the Gwydion, they encountered strange patterns of damage that looked similar to that seen after the close combat of a boarding action, bullet holes were strewn across the walls and sealings and many of the lights had been shot out. However, they had not seen any bodies or destroyed bots, not even so much as blood stains.</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "8a",
        time: 0,
    },
    {
        id: "8a",
        title: "Gwydion",
        text: `<p>“Looks like a hell of a fight” Commented Onaje</p>
        <p>“Hmmm but where is the blood the bodies?”</p>
        <p>“Maybe the crew cleaned it up” suggested Hyun-Ae</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "8b",
        time: 0,
    },
    {
        id: "8b",
        title: "To the brdige",
        text: `<p>“Negative, there are still shell cases on the floor, I believe that these would have also been cleaned up if the crew had removed any stains from their bodily fluids,” said Threes helpfully.</p>`,
        dialog: [
            {
                id: "O1",
                text: "“Quite Threes, I am thinking”",
                storyPoints: 0,
                nextPage: "8c",
            },
            {
                id: "O2",
                text: "“An astute observation Threes” ",
                storyPoints: 5,
                nextPage: "8d",
            },
        ],
        image: {
            imageRef: `./images/TwoPeopleOnBridgeOfSpaceShip.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "8c",
        time: 0,
    },
    {
        id: "8c",
        title: "Gwydion",
        text: `<p>“Compliance”</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "9a",
        time: 0,
    },
    {
        id: "8d",
        title: "Gwydion",
        text: `<p>“Ofcourse, I would not have spoken if it was likely to be an incorrect assessment”</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "9a",
        time: 0,
    },
    {
        id: "9a",
        title: "Gwydion",
        text: `<p>As They continued down the long central corridor of The Gwydion they passed by rooms and corridors in similar states of devastation. They passed by what appeared to be the sailors' mess. Moving inside Connor could see a similar state of destruction, flipped tables and chairs, and destroyed appliance, all of which seem to have been systematically shot.</p>
        <p>“Were those microwaves executed?” asked Hyun-Ae</p>
        <p>“That is what it looks like” Connor replied confused “ Why would the crew do this? And where are they all?”</p>
        <p>“If we can get onto the bridge we can access Gwydion and hopefully be able to look through his logs and the ships security footage, that should shine a light on what has happened here”</p>
        <p>“Ok let’s keep moving” replied Connor gesturing at Threes and the other bots to follow</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "10a",
        time: 0,
    },
    {
        id: "10a",
        title: "The Bridge",
        text: `<p>The steel Iris of the bridge lay barred at the end of the corridor, signs of fighting were evident here also along with a number of dents and scorch marks across the steel bridge bulkhead.</p>
        <p>“Captain, what if it was a mutiny? Perhaps they ran low on food and began fighting over it? Might explain the mess we found at the cafeteria… and the lack of bodies” suggested Onaje</p>
        <p>“Would they really bother to clean up the blood if that were the case? I hope that wasn’t the case. A truly awful way to go that would be.” </p>
<p>“How are you going with that door Threes?” asked Onaje
<p>“It will be open in approximately 5 seconds”</p>
<p>With a final chirp from the door control pad the steel iris of the bridge retracted into the door frame. Inside was a much different scene to the rest of the ship. Inside looked pristine, not a chair out of place, almost too pristine Connor thought. </p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "10b",
        time: 0,
    },
    {
        id: "10b",
        title: "The Bridge",
        text: `<p>“Hyun-Ae?”</p>
<p>“Yes Captain?” </p>
<p>“See if you can access Gwydion's logs, keep a SAR, and an ENG bot with you, we will take Threes and the other two and see if we can’t find the crew. Dead or alive they must be somewhere”</p>
<p>“Yes Captain!”</p>
<p>As Connor and the others left Hyun-Ae had already begun interfacing with Gwydion's direct access ports.</p>
<p>“Let’s see what you have to say” she mumbled to herself.</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "10c",
        time: 0,
    },
    {
        id: "10c",
        title: "The Bridge",
        text: `<p>She was glad that Connor had left the two bots with her, this ship was creeping her out, and she was starting to worry Gwydion may have become a rogue AI, even though such a thing hadn’t happened since the Mercury disaster nearly 50 years previous it was still a possibility niggling at the back of her brain, and she was about to wake Gwydion up.</p>
<p>There did not appear to be any damage to Gwyidions interface or AI’s vessel at all. It was simply dormant. She would have to be careful turning Gwydion on however as she was not a Conglomerate navy engineer and as such He may well be hostile to her accessing his systems despite the conglomerate providing a limited access authorisation code for her to utilize allowing her to speak to and interact with Gwydion without having any command over him.</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "11a",
        time: 0,
    },
    {
        id: "11a",
        title: "Quick Time Event",
        text: `<p>Key in access code</p>`,
        image: {
            imageRef: `images/GwydionCorridor.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        quickTime: {
            instructions: "1 1 1 A 4 3 F 9 B Q",
            successCode: "111a43f9bq",
            passPage: "11b",
            failPage: "failScreen",
            failPageMessage: "<p>Code not recognised please try again</p>",
            failPageCheckpoint: "11a",
        },
        nextPage: "failScreen",
        time: 20,
    },
    {
        id: "11b",
        title: "The Bridge",
        text: `<p>“Gwydion Awakening…” Intoned a synthesized male voice.</p>
<p>“Who are you?”</p>
<p>“Hyun-Ae, chief engineer of the salvage and rescue ship Rhiannon from Titan, dispatched by the Martian Confederated Colonies upon request from your masters the Conglomerate.”</p>
<p>“Why would the Conglomerate request the presence of an Out Sys Martian on the Gwydion?”</p>
<p>“You have been lost adrift near neptune for some months, we were the closest available vessel, there is a Conglomerate vessel approximately two months behind us, we were sent here to provide aid to the crew while awaiting for conglomerate vessels.”</p>
<p>“I see…”</p>
<p>“What happened to your crew” asked Hyun-Ae “We have not found anyone on board or any signs of life at all”</p>
<p>“I-I…I don’t remember”</p>
<p>“You don’t remember? How not? Check your security logs.”</p>
<p>“I cannot access my security logs, it is like they are hidden from me, I know where they should be but instead there is nothing”</p>
<p>“Ok, are we able to access your command logs to see if you have had any malfunctions or malicious commands entered?”</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "11c",
        time: 0,
    },
    {
        id: "11c",
        title: "The Bridge",
        text: `<p>“Are you suggesting that I have attacked my crew?!”</p>
<p>“No, however you were dormant and everyone is missing with signs of a fight prevalent all through the main thoroughfare at least if not the whole ship, perhaps you were attacked and someone has removed your memory of the event.”</p>
<p>“MY SECURITY PROTOCOLS ARE….”</p>
<p>If they were so special then we would be able to see your security logs, now open the command log”</p>
<p>“Compliance”</p>
<p>“A stream of data passed over the screen in front of Hyun-Ae, streaming by so fast she was barely able to make sense of it in time even with her intra-crain augmentations.”</p>
<p>“No, suspicious command logs found…”</p>
<p>“Hmmm i didn’t see anything wrong either” Hyun-Ae agreed. “Ok I will see what I can do about accessing those security logs, we really need to see what has happened here”</p>
<p>“Agreed, compliance”</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "12a",
        time: 0,
    },
    {
        id: "12a",
        title: "Searching the ship",
        text: `<p>Connor, Onaje, Threes, and the boys were making their way to Gwydion's engineering section, looking to see if any of the crew have sought refuge there, and if not, then to find clues about the fate of Gwydion’s crew. </p>
<p>As they walked they came across more scenes reminiscent of those they found on the main thoroughfare. Lights destroyed, appliances shot, intercoms torn out. These scenes however became less frequent the further they traveled from the bridge however, it appeared that most of whatever had happened was closer to the bridge.</p>
<p>A final stand perhaps?  Thought Connor, but why no bodies or blood? </p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "12b",
        time: 0,
    },
    {
        id: "12b",
        title: "Searching the ship",
        text: `<p>“Did you hear that?” asked Onaje</p>
<p>“I hear only background noise and static from faulty and damaged speakers” replied Threes,</p>
<p>“I didn’t hear anything unusual” said  Connor asking “what did you hear?”</p>
<p>“The speakers, didn’t that sound like a pattern to you?”</p>
<p>“I didn’t notice it, I will keep an ear out though if it happens again”</p>
<p>They turned a corner into a dark corridor lit only by a single flickering ceiling light.</p>
<p>“Engineering should be just through there” said Connor</p>
<p>“A4452, open that door and get us in”</p>
<p>“Compliance” said one of the engineering bots with them.</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "12c",
        time: 0,
    },
    {
        id: "12c",
        title: "Searching the ship",
        text: `<p>As they waited for A4452 to get the door open, Connor found himself, staring at the flickering light, as he watched he thought he saw a pattern also, but it was too fast and complex to be sure.</p>
<p>“Hey” he said “Do you see the light? You think it is flickering in a pattern too?”</p>
<p>“I can’t tell” said Onaje, “if it is it’s a long one”</p>
<p>“Threes can you tell?”</p>
<p>“I detect a consistent pattern occurring over a 12.32114 second period, I believe this is the result of a consistent power fluctuation to the light, possible cause by the same implement that caused the destruction of the other lamps in this corridor, I believe the pattern to be </p>meaningless” replied Threes at length.</p>
<p>“Hmm fair enough I guess, getting a bit jumpy boss?”</p>
<p>“Me? You’re the one who was jumping at a couple of speakers a second ago!” replied Connor indignantly</p>
<p>“Hahaha” laughed Onaje “touche”</p>
<p>“Door opening” an tinny electronic voice sounded from the doors key pad</p>
<p>“Lets go” ordered Connor taking up the rear.</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "12d",
        time: 0,
    },
    {
        id: "12d",
        title: "Searching the ship",
        text: `<p>As Connor Passed through the door he heard a horrible shrieking sound as the door came slamming down towards him</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "12e",
        time: 0,
    },
    {
        id: "12e",
        title: "Quick Time Event",
        text: `<p>“JUMP!!!!!”</p>`,
        image: {
            imageRef: `images/GwydionCorridor.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        quickTime: {
            instructions: "A",
            successCode: "a",
            passPage: "12f",
            failPage: "failScreen",
            failPageMessage:
                "<p>Unable to get out of the way fast enough Connor was caught squarely in center by the door, being nearly cut in half by the force of the impact.</p>",
            failPageCheckpoint: "12d",
        },
        nextPage: "failScreen",
        time: 3,
    },
    {
        id: "12f",
        title: "Searching the ship",
        text: `<p>Connor dived into engineering narrowly avoiding the door which slammed with a reverberating BANG! That echoed through the large engineering bay.</p>
<p>“Fuck that was close!” Breathed Connor as he got to his feet</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "13a",
        time: 0,
    },
    {
        id: "13a",
        title: "Searching the Ship",
        text: `<p>“Are you injured Captain?” inquired Threes.</p>`,
        dialog: [
            {
                id: "O1",
                text: "<p>*Ignore Threes*</p>",
                storyPoints: 0,
                nextPage: "13c",
            },
            {
                id: "O2",
                text: "<p>“All good Threes, thanks”</p>",
                storyPoints: 5,
                nextPage: "13b",
            },
        ],
        image: {
            imageRef: `./images/TwoPeopleOnBridgeOfSpaceShip.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "13c",
        time: 5,
    },
    {
        id: "13b",
        title: "Searching the ship",
        text: `<p>“Affirmative”</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "13c",
        time: 0,
    },
    {
        id: "13c",
        title: "Searching the ship",
        text: `<p>“Ok lets move, keep your eyes peeled for survivors” Ordered Connor.</p>
<p>The small party spread out and moved towards the rear of the engineering bay, which echoed softly with the metallic tread of the bots as they advanced through the engineering bay.</p>
<p>The bay was massive, easily as large as the hangar Rhiannon was in if not larger but with a much lower ceiling.</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "13d",
        time: 0,
    },
    {
        id: "13d",
        title: "Searching the Ship",
        text: `<p>“I don’t like this” came Onaje’s voice over the coms “Its so quiet, I feel like I am being watched”</p>`,
        dialog: [
            {
                id: "O1",
                text: "<p>“Bit jumpy are you, thought an old veteran like you wouldn’t be so easily phased”</p>",
                storyPoints: 0,
                nextPage: "13e",
            },
            {
                id: "O2",
                text: "<p>“I know what you mean, I feel as if I was to turn quickly I might catch something in the corner of my eye.”</p>",
                storyPoints: 5,
                nextPage: "13f",
            },
        ],
        image: {
            imageRef: `./images/TwoPeopleOnBridgeOfSpaceShip.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "13e",
        time: 6,
    },

    {
        id: "13e",
        title: "Searching the ship",
        text: `<p>“Hmph, perhaps that's why you should listen to me.”</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "14a",
        time: 0,
    },
    {
        id: "13f",
        title: "Searching the ship",
        text: `<p>“Indeed, keep your eye’s peeled boss”</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "14a",
        time: 0,
    },
    {
        id: "14a",
        title: "Searching the ship",
        text: `<p>As they were nearing the outer edge of the engineering bay Connor could see the massive cargo doors looming in front of him. Connor knew that the entire engineering bay could be depressurised in order to allow for easy salvage, repair, and restock even when in void. A similar feature existed on Rhiannon as well although Connor had never seen engineering doors of this scale before. </p>
<p>“Woohoo” , Connor whistled to himself “This is one hell of a ship”.</p>
<p>Over to his left Connor saw Onaje examining a row of nearly 100 bot cradles.</p>
<p>“Geeze, that's alot of engineering bots” Connor said walking over.</p>
<p>“Yeah, but where are all the bots?”</p>
<p>Confused, Connor looked again, and noticed through the scratched and worn perspex windows there was nothing. All the cradles were empty.</p>
<p>“What the fuck?, where are they all? How does a crew of this size disappear along with all its bots?”</p>

`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "14b",
        time: 0,
    },
    {
        id: "14b",
        title: "Searching the ship",
        text: `<p>“BAAAAM BAAAAM BAAAAM!”</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "14c",
        time: 0,
    },
    {
        id: "14c",
        title: "Searching the ship",
        text: `<p>As if in answer to his question an alarm started blaring as the gears and hydraulics of the engineering doors started whirring to life</p>
<p>“Warning Outer door opening!” Came an electronic voice through the engineering bay speakers</p>
<p>Connor Onaje, and all the bots were swept off their feet as the engineering bays atmosphere was vented. </p>
<p>A4452 was sucked closest to the doors and was sucked bodily out them almost instantly with no chance to grab something to hold on Connor noticed he was on his way out too being sucked out towards the hard void.</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "14d",
        time: 0,
    },
    {
        id: "14d",
        title: "Quick Time Event",
        text: `<p>Noticing a key pad next to the opening doors, Connor was able to grab onto a nearby wall strut and begin entering the close sequence.</p>`,
        image: {
            imageRef: `images/GwydionCorridor.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        quickTime: {
            instructions: "1 1 8 7 6 5",
            successCode: "118765",
            passPage: "14e",
            failPage: "failScreen",
            failPageMessage: `<p>clumsy from the disorentating de-compression Connor punched in the wrong code. Losing his grip he also was torn out of the Gwydion and ejected far into space. Breathing heavily Connor began to regain control.</p>
<p>“It’s ok, Rhiannon will be able to come out and get us, just need to keep calm and we’ll be fine”</p>
<p>That's when he noticed the small crack leaking air through his visor</p>
<p>“Suit Oxygen low” came the synthesized voice of his internal suits systems</p>
<p>Panicked now, Connor noticed the small crack in his visor above his right eye.</p>
<p>“Fuck”</p>
`,
            failPageCheckpoint: "14c",
        },
        nextPage: "failScreen",
        time: 10,
    },
    {
        id: "14e",
        title: "Searching the ship",
        text: `<p>Able to punch in the code the doors began closing and slowly the gale pulling them towards the door ceased and Connor was able to regain his footing.</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "15a",
        time: 0,
    },
    {
        id: "15a",
        title: "The Survivor",
        text: `<p>“Fuck me! That was too close” coughed Connor,</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "15b",
        time: 0,
    },
    {
        id: "15b",
        title: "Searching the Ship",
        text: `<p>“It seems the ship has an adverse reaction to your presence Captain.” said Threes helpfully.</p>`,
        dialog: [
            {
                id: "O1",
                text: "<p>“Shut up Threes” </p>",
                storyPoints: 0,
                nextPage: "15c",
            },
            {
                id: "O2",
                text: "<p>“Was that a joke Threes?”</p>",
                storyPoints: 5,
                nextPage: "15d",
            },
        ],
        image: {
            imageRef: `./images/TwoPeopleOnBridgeOfSpaceShip.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "15c",
        time: 5,
    },
    {
        id: "15c",
        title: "The Survivor",
        text: `<p>“Compliance”</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "15e",
        time: 0,
    },
    {
        id: "15d",
        title: "The Survivor",
        text: `<p>“My observation regarding the repeated imperilment of your life does not seem humorous to me captain”</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "15e",
        time: 0,
    },
    {
        id: "15e",
        title: "The Survivor",
        text: `<p>“Ok, Onaje, Where is left to search here?”</p>
<p>“Only the far entrance, the medical bay should be in that direction further down the ship also” replied Onaje</p>
<p>“Ok, we will head that way, see if there is anything else to find in the med bay. IWe need to figure out what has happened to the crew.” </p>

`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "16a",
        time: 0,
    },
    {
        id: "16a",
        title: "The Survivor",
        text: `<p>The medical bay had clearly been ransacked, broken pill bottles and damaged machinery lay strewn around the small cluster of rooms like a mini tornado had made it’s way through every corner of the enclosed space.</p>
        <p>“Cheap, bastards” Onaje murmured under his breath, looking around the pitiful collection of rooms and alcoves that made up the Gwydion's medical bay “Crew of hundreds and this is their medical facilities? Typical.”</p>
        <p>He was right, it was typical for a conglomerate ship to spend absolutely as little as possible on the health and well being of their crew. When it came to the conglomerate if it didn’t make money they didn’t care. This philosophy extended to their sick and injured as well, not that the suits would ever say that.</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "16b",
        time: 0,
    },
    {
        id: "16b",
        title: "The Survivor",
        text: `<p>Connor knew how this would upset Onaje. Onjae had been a field medic then military surgeon for the Martian Confederate Navy for more than 2 decades and this barebones and poorly equipped facility went against everything the Confederation stood for. Whilst the Conglomerate cared only about profit and all its citizens lived to serve and toil under their corporate lords (again not that the suits would ever say that), the Confederation had rejected the dehumanizing views of the other nations in the solar system. Mars strived to treat each of its citizens and their lives as important and even sacred and would go to near any length to ensure the safety and freedom of their citizens.</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "16c",
        time: 0,
    },
    {
        id: "16c",
        title: "The Survivor",
        text: `<p>“I’m just glad, I don’t work for the greedy cunts anymore!” agreed Connor with feeling.</p>
<p>“You and Threes check the patient rooms, I’ll have a look at the store room”</p>
<p>The store room was the biggest of the rooms in the cramped medical bay and even then would have struggled to have sufficient supplies for a crew of this size. This too had been ransacked, with boxes and bags torn open and much of what they held spilt onto the floor.</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "16d",
        time: 0,
    },
    {
        id: "16d",
        title: "The Survivor",
        text: `<p>What happened here Connor thought, It didn’t look like someone was taking the supplies, too much had been spilt and wasted for that to be likely. Unless they were in one hell of a hurry Connor thought. No It looked more like someone had torn the place to pieces looking for something in particular.</p>`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "16e",
        time: 0,
    },
    {
        id: "16e",
        title: "The Survivor",
        text: `<p>As that thought entered his mind he heard something that sounded like a shaky breath.</p>
<p>“Did you hear that?” Connor asked over coms to Onaje</p>
<p>“No, what did you hear?”</p>
<p>“I thought I heard breathing.”</p>
<p>Again the shaky breathing came, like someone trying to stifle a sob. He definitely heard it this time.</p>
<p>“Is someone there?’</p>
<p>A soft whimper was his only response, but he could tell which direction it was coming from, a small alcove in the store room. Moving towards it he saw a small ventilation grate behind a shelf.</p>
<p>“Hello?” he said moving towards the grate. He heard something moving in there now, like it was trying to get away.</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "17a",
        time: 0,
    },
    {
        id: "17a",
        title: "The Survivor",
        text: `<p>Moving to the grate and peering in he saw a set of green eye’s staring back.</p>
<p>“Hello” he said with a simple, “I’m Connor, we are here to help you”</p>
<p>“No” came the reply “No one else, you’re a lie”</p>
<p>“I’m no lie I promise” he said trying to be as calm and reassuring as he could be “I am the captain of the Rhiannon, we have come from Titan to help you and the crew.</p>
<p>“No crew. Only me. Only the ship. Only the lies”</p>
<p>No crew? Connor thought. Where could they be?</p>
<p>“Where is the rest of the crew?” He asked</p>
<p>“Gone. Taken. Tricked. Dead .'' came the girls reply, he could begin to make out her features as his eyes adjusted to the gloom of the vent. She looked young, maybe in her 20s. Her face was streaked with grime and what looked to be blood leaking from a gash above her eye.</p> 
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "17b",
        time: 0,
    },
    {
        id: "17b",
        title: "The Survivor",
        text: `<p>“What’s your name?” Connor asked gently</p>
<p>“Anna”</p>
<p>“Good to meet you Anna. let’s get you out of here, hey? Back to our ship where you can rest up and relax.”</p>
<p>“O-Ok” she said shakily as she started to crawl to the vent</p>
<p>“What’s your job Anna?”</p>
<p>“Job?” she asked, looking as if she didn’t understand the word “Oh yes, uhhh I was a cook.”</p>
<p>“A cook? Well it’ll be good to have you on board the Rhiannon, maybe you can make something more of our MRE’s!” Connor said forcing a smile</p>
<p>“You have food?” she asked her eyes hopefully</p>
<p>“Plenty!” Connor said helping her out of the vent and leading her out into the medical bay.</p>
<p>“Although, calling it food may be a tad generous.”</p>
<p>Anna whimpered and shrank back as she saw Threes searching the main section of the medical bay.</p>
<p>“No no no no” she whimpered</p>
<p>“It’s ok” Connor reassured her “Threes is with us he is from the Rhiannon”</p>
<p>She nodded slowly, still clearly wary of the bot</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "17c",
        time: 0,
    },
    {
        id: "17c",
        title: "The Survivor",
        text: `<p>“A survivor.” said Threes “This is an improvement over our initial failure of our state objectives”</p>
<p>“Indeed” Said Onaje coming from one of the other patient rooms</p> 
<p>“Hello” he smiled “I am Onaje, chief medical officer of the Rhiannon, may I take a look at that gash on your forehead?”</p>
<p>With a confused look Anna reached up and touched the area Onaje was referring to. Wincing as her fingers grazed the ragged gash.</p> 
<p>“Oh… yes I guess”</p>
<p>Coming close Onaje examined the wound “Tsk, a nasty one, shouldn’t scar too badly though!”</p>
<p>“We best get her back to the ship boss” he said turning to Connor</p>
<p>“Agreed, Ok Threes, you and the bots take the rear we are heading to the Rhiannon”</p>
`,
        image: {
            imageRef: `images/PostApocalypticCity.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "18a",
        time: 0,
    },
    {
        id: "failScreen",
        title: "You Failed",
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

export const setFailScreen = (target, message, failPageCheckpoint) => {
    console.log(target);
    const failIndex = contentArray.findIndex((item) => item.id === target);
    contentArray[failIndex].text = `${message}`;
    contentArray[failIndex].nextPage = `${failPageCheckpoint}`;
};

export const updateBranchPath = (target, value) => {
    console.log(target, value);
    const targetIndex = contentArray.findIndex((item) => item.id === target);
    contentArray[targetIndex].nextPage = value;
};
