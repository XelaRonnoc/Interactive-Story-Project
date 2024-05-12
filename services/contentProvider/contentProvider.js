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
            imageRef: `images/RhiannonInFlight.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/RhiannonBridge.jpeg`,
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
            imageRef: `images/RhiannonCorridor.jpeg`,
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
            imageRef: `images/RhiannonCorridor.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/RhiannonCrewQuarters.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/RhiannonEngineering.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/RhiannonEngineering.jpeg`,
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
            imageRef: `images/RhiannonEngineering.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/RhiannonEngineering.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/RhiannonMessHall.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/RhiannonMessHall.jpeg`,
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
            imageRef: `images/RhiannonMessHall.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/RhiannonMessHall.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/RhiannonCrewQuarters.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/RhiannonBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/RhiannonBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionCorridor.jpg`,
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
            imageRef: `images/GwydionCorridor.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "7d",
        time: 0,
    },
    {
        id: "7c",
        title: "Gwydion",
        text: `<p>“Yes Captain, interfacing…”</p>`,
        image: {
            imageRef: `images/GwydionCorridor.jpg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "8a",
        time: 0,
    },
    {
        id: "7d",
        title: "Gwydion",
        text: `<p>As they made their way down what Connor was fairly sure was the main spinal corridor of the Gwydion, they encountered strange patterns of damage that looked similar to that seen after the close combat of a boarding action, bullet holes were strewn across the walls and sealings and many of the lights had been shot out. However, they had not seen any bodies or destroyed bots, not even so much as blood stains.</p>`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
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
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "9a",
        time: 0,
    },
    {
        id: "8d",
        title: "Gwydion",
        text: `<p>“Ofcourse, I would not have spoken if it was likely to be an incorrect assessment”</p>`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionMessHall.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionClosedDoorway.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "11a",
        time: 0,
    },
    {
        id: "11a",
        title: "Quick Time Event",
        text: `<p>Key in access code</p>`,
        image: {
            imageRef: `images/ControlPanel2.jpeg`,
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
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionClosedDoorway.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/MovingThroughDoorway1.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "12e",
        time: 0,
    },
    {
        id: "12e",
        title: "Quick Time Event",
        text: `<p>“JUMP!!!!!”</p>`,
        image: {
            imageRef: `images/MovingThroughDoorway1.jpeg`,
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
            imageRef: `images/GwydionClosedDoorway.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionClosedDoorway.jpeg`,
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
            imageRef: `images/GwydionClosedDoorway.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionEngineering.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionEngineering.jpeg`,
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
            imageRef: `images/GwydionEngineering.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionEngineering.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionEngineering.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionEngineering.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/BotEjectedIntoSpace.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "14d",
        time: 0,
    },
    {
        id: "14d",
        title: "Quick Time Event",
        text: `<p>Noticing a key pad next to the opening doors, Connor was able to grab onto a nearby wall strut and begin entering the close sequence.</p>`,
        image: {
            imageRef: `images/ControlPanel1.jpeg`,
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
            imageRef: `images/GwydionRedRoom.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionRedRoom.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionRedRoom.jpeg`,
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
            imageRef: `images/GwydionRedRoom.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "15e",
        time: 0,
    },
    {
        id: "15d",
        title: "The Survivor",
        text: `<p>“My observation regarding the repeated imperilment of your life does not seem humorous to me captain”</p>`,
        image: {
            imageRef: `images/GwydionRedRoom.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionMedicalBay.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "16b",
        time: 0,
    },
    {
        id: "16b",
        title: "The Survivor",
        text: `<p>Connor knew how this would upset Onaje. Onjae had been a field medic then military surgeon for the Martian Confederate Navy for more than 2 decades and this barebones and poorly equipped facility went against everything the Confederation stood for. Whilst the Conglomerate cared only about profit and all its citizens lived to serve and toil under their corporate lords (again not that the suits would ever say that), the Confederation had rejected the dehumanizing views of the other nations in the solar system. Mars strived to treat each of its citizens and their lives as important and even sacred and would go to near any length to ensure the safety and freedom of their citizens.</p>`,
        image: {
            imageRef: `images/GwydionMedicalBay.jpg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionMedicalBay.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "16d",
        time: 0,
    },
    {
        id: "16d",
        title: "The Survivor",
        text: `<p>What happened here Connor thought, It didn’t look like someone was taking the supplies, too much had been spilt and wasted for that to be likely. Unless they were in one hell of a hurry Connor thought. No It looked more like someone had torn the place to pieces looking for something in particular.</p>`,
        image: {
            imageRef: `images/GwydionMedicalSupplyRoom.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionMedicalSupplyRoom.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionMedicalSupplyRoom.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionMedicalSupplyRoom.jpeg`,
            alt: "test image",
            scaleType: "square",
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
            imageRef: `images/GwydionMedicalBay.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "18a",
        time: 0,
    },
    {
        id: "18a",
        title: "Revelation",
        text: `<p>“Ok I think I’ve found the footage” said Hyun-Ae, her focus completely fixed on the console.</p>
<p>“I see it now too” came the synthesized reply of Gwydion.</p>
<p>“It’s strange that you were not aware of the locations of these files”</p>
<p>“I agree, I believe It was due to my inactivity since the jump, without my organization the basic components of the ships systems seemed to have picked an obscure location to store these. I was not even aware of this location in my memory until you showed it to me.”</p>

`,
        image: {
            imageRef: `images/ControlPanelBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "18b",
        time: 0,
    },
    {
        id: "18b",
        title: "Revelation",
        text: `<p>“Well let's have a look and see if we can’t figure out were the crew are”</p>
Hyun-Ae had only just begun examining one piece of the security footage when Gwydion advised. “I know what happened to the crew, Observe”</p>
<p>A video on her console screen began playing, a compilation of the fates of the crew. Hyun-Ae was barely able to keep up with the rate Gwydion was showing her these images. A crew member being crushed by a bulkhead, a section of security personnel being ejected from an airlock, a number of crew collapsing and passing out in a sealed corridor, a crew man being followed into a toilet block followed by a bot only for the bot to leave some time later with no sign of the crew man.</p>
`,
        image: {
            imageRef: `images/CCTVFootage.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "18c",
        time: 0,
    },
    {
        id: "18c",
        title: "Revelation",
        text: `<p>“Oh God!” Hyun-Ae breathed “Was this you?!”</p>
<p>“No! You have seen My logs, I made no such commands to the ships' lesser systems.”</p>
<p>“Why was the ship killing the crew? How is the ship killing the crew? This is targeted, yet you are the only ship function capable of such coordination. How could it not be you?”</p>
<p>“If it was me, why would I show you this?, check the local logs at bulkhead 1774-b perhaps it will show where the commands originated from.”</p>
<p>“Yes… I will do that, you two” she said gesturing at the engineering and search and rescue bots with her. “Come with me”</p>
<p>Hyun-Ae strode off the bridge, the bulkhead Gwydion has referred to was one of the ones that had been seen crushing a crew member, and he was right, she should be able to see the origination of the emergency seal command from there.</p>
`,
        image: {
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "19a",
        time: 0,
    },
    {
        id: "19a",
        title: "Revelation",
        text: `<p>The bulkhead was open when she reached it, there was no sign of a body or blood at all. But this was the correct door. </p>
<p>“Interface with the other sides panel” she said gesturing to the ENG bot “Look for any indication of where the command for emergency close came from”</p>
<p>“Compliance”</p>
`,
        image: {
            imageRef: `images/SquareOpenBulkheadDoor.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "19b",
        time: 0,
    },
    {
        id: "19b",
        title: "Revelation",
        text: `<p>She knelt down next to the near side panel of the door and interfaced directly with it. She immediately went to the local logs for the time at which the incident had occurred. She could see the command but it had no trace signature, nothing to indicate where the command came from.</p>
<p>It is almost as if it just appeared.</p>
<p>“No close command found at the expected time.” reported the synth voice of the ENG bot</p>
<p>“Got it”</p>
<p>So it was a command to this panel direct at least not both, which would have been more likely had it been Gwydion sending these commands and somehow removing his signature.</p>
`,
        image: {
            imageRef: `images/SquareOpenBulkheadDoor.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "19c",
        time: 0,
    },
    {
        id: "19c",
        title: "Revelation",
        text: `<p>Reaching her head through the door she went to tell the bot they were heading back to the bridge. When she heard/saw a strange buzz flicker from behind her and the faintest groan from the bulkhead above her.</p>`,
        image: {
            imageRef: `images/movingThroughDoorway2.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "20a",
        time: 0,
    },
    {
        id: "20a",
        title: "Quick Time Event",
        text: `<p>The door came slamming down towards her</p>`,
        image: {
            imageRef: `images/movingThroughDoorway2.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        quickTime: {
            instructions: "D",
            successCode: "d",
            passPage: "20b",
            failPage: "failScreen",
            failPageMessage:
                "<p>caught unawares Hyun-Ae is decapitated by the speeding door. She had no time to even feel fear let alone pain.</p></p>",
            failPageCheckpoint: "19c",
        },
        nextPage: "failScreen",
        time: 4,
    },
    {
        id: "20b",
        title: "Revelation",
        text: `<p>“Thanks” she said looking at the SAR bot.</p>
<p>“Affirmative” it replied deadpan.</p>
`,
        image: {
            imageRef: `images/SquareClosedBulkheadDoor.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "20c",
        time: 0,
    },
    {
        id: "20c",
        title: "Revelation",
        text: `<p>She went to the console again and checking the logs again saw the same command in the console with still no signature for where the command originated from.</p>
<p>“E1174, I can’t open the door, it appears the impact bent it shut, are you able to find another way to the bridge?”</p>
<p>“Compliance” came the bots reply through the comms system”.</p>
<p>“See you on the bridge then”</p>
<p>The bot would be unlikely to respond to such an obvious statement but it made her feel safer when she treated them more like people, and she knew over time they would develop more complex personalities like Three had. So she had always thought it was the smart idea to make friends early.</p>
`,
        image: {
            imageRef: `images/ControlPanelLarge.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "20d",
        time: 0,
    },
    {
        id: "20d",
        title: "Revelation",
        text: `<p>“S8873, let's get back to the bridge”</p>
<p>“Affirmative”</p>
<p>As she strode back towards the bridge she keyed in the comms channel for Connor</p>
<p>“I know what happened to the crew.” she said</p>
<p>“I think we do too…” came Connors' pained reply.</p>
`,
        image: {
            imageRef: `images/GwydionCorridor.jpg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "21a",
        time: 0,
    },
    {
        id: "21a",
        title: "Revelation",
        text: `<p>The small team was making their way through the corridors transecting Gwydion's main body as they headed towards the hangar bay where Rhiannon was waiting. Onaje and Connor were taking the front keeping their eyes peeled for any further unexplained mishaps while Threes and the bots took up the rear. Anna stayed close to the front, clearly a way to get too close to the bots.</p>
`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris2.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "21b",
        time: 0,
    },
    {
        id: "21b",
        title: "Revelation",
        text: `<p>Connor was concerned about Anna’s reaction to the bots. Making him think of those empty bot cradles in the engineering deck. Had the bots somehow gone rouge? Surely the crew could have overpowered them though, most were not combat programmed bots with only minimal ship defense learning and should have been dealt with easily defeated by the conglomerate marines stationed on such a ship.</p>`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris2.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "21c",
        time: 0,
    },
    {
        id: "21c",
        title: "Revelation",
        text: `<p>They were approaching the hangar now and turned a corner, finding themselves in a longer wider corridor that should lead directly to the hangar Rhiannon was in.</p>
        <p>“No” came the quiet protest of Anna.</p>
        <p>“What is it?” asked Connor quietly, dropping back to walk alongside her. She had slowed her pace significantly and her eyes were wide and alert scanning the doorway leading off either side of the corridor.</p>`,
        image: {
            imageRef: `images/GwydionLongWideCorridor.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "21d",
        time: 0,
    },
    {
        id: "21d",
        title: "Revelation",
        text: `<p>“No no no” she had stopped now, dread and anxiety creasing her features
<p>“What is it?” Connor asked again “did you see something?”</p>
<p>She shook her head</p>
<p>“You think something is wrong though? Something has changed?”</p>
<p>She nodded</p>
<p>“Ok. Everyone!” he said in a harsh whisper “Be alert, check the doors before you pass them, be alert!”</p>
`,
        image: {
            imageRef: `images/GwydionLongWideCorridor.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "22a",
        time: 0,
    },
    {
        id: "22a",
        title: "Revelation",
        text: `<p>Connor didn’t notice anything wrong or different to before, but he was not foolish enough not to trust the instincts of someone who so far appeared to be the ship's only survivor.
Guns raised, they moved cautiously down the corridor. Like the rest of the ship it was poorly lit and the drone and hum of damaged electronics and speakers was a constant low level noise.</p>
<p>Halfway down the hallway they approached a four way junction. As they crept closer Anna began to whimper softly clearly terrified of what may lay in wait.</p>
`,
        image: {
            imageRef: `images/GwydionLongWideCorridor.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "22b",
        time: 0,
    },
    {
        id: "22b",
        title: "Revelation",
        text: `<p>“Onaje, you take left I’ll take right, Three’s you keep eye’s front”</p>
<p>“Copy” </p>
<p>“Compliance”</p>
<p>“Three… Two… One… GO!” </p>
<p>Onaje and Connor pushed rapidly around the corners as Three kept his weapon aiming down the dim corridor.</p>
<p>Connor saw nothing, just another dim corridor, in the same state of damage and disrepair as the rest..</p>
`,
        image: {
            imageRef: `images/GwydionLongWideCorridor.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "22c",
        time: 0,
    },
    {
        id: "22c",
        title: "Revelation",
        text: `<p>“BANG BANG BANG BANG” the crack of gunfire was deafening in the enclosed space.</p>
<p>“Behind us!” Yelled Onaje.</p>
`,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "23a",
        time: 0,
    },
    {
        id: "23a",
        title: "Revelation",
        text: `<p>One of the ENG bots taking up the rear had been obliterated, pieces of its shattered chassis scattered across the deck as its headless neck spurted oil.</p>
<p>The Two remaining SAR bots were returning fire down the hall behind them. One was firing one handed as its right arm had been mangled by another bullet.</p>
`,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "23b",
        time: 0,
    },
    {
        id: "23b",
        title: "Revelation",
        text: `<p>Onaje had taken cover in the perpendicular corridor and was peeking around the corner firing into their oncoming attackers. One of Gwydion's bots took a round square in the chest and collapsed, spasming as its internal circuitry sputtered and sparked in its death throes.</p>`,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "23c",
        time: 0,
    },
    {
        id: "23c",
        title: "Revelation",
        text: `<p>Connor had managed to drag Anna around the opposite corner with him and was also returning fire. Her prior whimpering had stopped now she trembled eye’s wide and alert.</p>
<p>Another one of Rhiannon's SAR bots was hit. Its head was mulched by a burst of fire. These shots however did not come from behind them.</p>
`,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "23d",
        time: 0,
    },
    {
        id: "23d",
        title: "Revelation",
        text: `<p>“There are more in front Captain” Vocalised Three’s taking cover and returning fire at the two known Gwydion bots making their way down the hall. Both the Rhiannon's SAR bots were down now, devastated by the pincer fire.</p>
        `,
        image: {
            imageRef: `images/GwydionShipDefenseRobots2.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "23e",
        time: 0,
    },
    {
        id: "23e",
        title: "Revelation",
        text: `<p>“I am being attacked!” Came the vocalization from the last remaining ENG bot behind Onaje.
No shit thought Connor until he realized what the bot meant. It had been grabbed from behind and was now wrestling and fighting a Gwydion bot behind Onaje.</p>
`,
        image: {
            imageRef: `images/BotGrapple1.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "23f",
        time: 0,
    },
    {
        id: "23f",
        title: "Revelation",
        text: `<p>“AHHHH” came a scream from Anna as she was pulled to the ground behind Connor.</p>
<p>Connor spun seeing a Gwydion ENG bot on top of Anna smashing her into the corridor floor.
Connor Did not want to shoot, concerned about a bullet ricocheting from the bots chassis and hitting Anna.</p>
`,
        image: {
            imageRef: `images/AnnaAttacked1.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "23g",
        time: 0,
    },
    {
        id: "23g",
        title: "Revelation",
        text: `<p>He lunged forward plunging his knife into the bot's faceplate through it’s eye. Changing to this new threat it lunged at Connor forcing him against the wall and attempting to smash its fist into his face. Connor stayed in close to the bot, not letting it wind up enough power with it’s punches to cause terminal damage.</p>
        `,
        image: {
            imageRef: `images/AnnaAttacked1.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "24a",
        time: 0,
    },
    {
        id: "24a",
        title: "Quick Time Event",
        text: `<p>Pulling the knife free he plunged it back into the bots torso working it around furiously, trying to cut and damage the essential circuits of the bots CPU.</p>`,
        image: {
            imageRef: `images/AnnaAttacked1.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        quickTime: {
            instructions: "W A D S W D S A",
            successCode: "wadswdsa",
            passPage: "24b",
            failPage: "failScreen",
            failPageMessage:
                "<p>Working the knife furiously Connor could not work it into the bots CPU casing. Readjusting to get better leverage Connor made too much room between him and the bot. It’s metal fist smashed into his face, pulverizing his nose and smashing him into the wall. His head struck the wall with a dull thud and everything went black.</p>",
            failPageCheckpoint: "23g",
        },
        nextPage: "failScreen",
        time: 5,
    },
    {
        id: "24b",
        title: "Revelation",
        text: `<p>A loud clang sounded and the bots neck joints snapped as it tumbled away from Connor. In Front of him stood Anna, a metal bar in her hands.
<p>“Thanks,” Connor said, gathering up his firearm again.</p>
<p>On the other side of the Corridor Onaje had shot the Gwydion bot attacking the Rhiannon Eng bot. Far less concerned about the ricochet into the ENG bot.</p>
`,
        image: {
            imageRef: `images/AnnaAttacked1.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "24c",
        time: 0,
    },
    {
        id: "24c",
        title: "Revelation",
        text: `<p>Threes was still engaging the Two bots approaching from the direction of the hangar. One had been struck in the leg and was moving slower than its companion as they both suppressed Three’s. There was only one bot still coming from behind them which had its attention focused on Onaje.</p>
        `,
        image: {
            imageRef: `images/GwydionShipDefenseRobots2.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "24d",
        time: 0,
    },
    {
        id: "24d",
        title: "Revelation",
        text: `<p>Ducking quickly out from cover Connor unleashed a spray of bullets into the oncoming bot shredding it’s torso with a storm of high velocity darts.The bot collapsed forwards all motor control and thought evaporated.</p>
        <p>Connor had to nearly dive back into cover as the bots advancing from the hangar switched their target towards him.</p>
        `,
        image: {
            imageRef: `images/GwydionShipDefenseRobots2.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "24e",
        time: 0,
    },
    {
        id: "24e",
        title: "Revelation",
        text: `<p>This gave Threes an opportunity to lean out from cover and fire two expertly placed shots straight into the Bots CPU. The stricken bot collapsed mid stride falling into a heap on the ground.</p>
        `,
        image: {
            imageRef: `images/GwydionShipDefenseRobots2.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "24f",
        time: 0,
    },
    {
        id: "24f",
        title: "Revelation",
        text: `<p>Onaje was able to take the final bot with a burst from his weapon the stitched the bot from torso to head. The bot groaned as it tumbled backwards landing with a resounding clang against the steel floor..</p>
<p>“Captain! I know what happened to the crew” Came the sound of Hyun-Ae’s voice through the comlink.</p>
<p>I think we do too…” groaned Connor as he got to his feet.</p>
`,
        image: {
            imageRef: `images/GwydionLongWideCorridor.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "25a",
        time: 0,
    },
    {
        id: "25a",
        title: "Revelation",
        text: `<p>They stood on the bridge gathered around Hyun-Ae peering over her shoulder at the security footage for the past months and the footage since they have arrived on the Gwydion. Connor and Onaje had gotten Anna to the Rhiannon’s medical bay where they had left her to rest and be taken care of by the medical bots, she had had to be sedated to prevent her fight or flight response kicking in with the Rhiannon's medical bots and her either running back into the Gwydion or damaging Rhiannon.</p>`,
        image: {
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "25b",
        time: 0,
    },
    {
        id: "25b",
        title: "Revelation",
        text: `<p>“See,” Hyun-Ae said expectantly. “Before one of these events occurs the flickering of the lights changes. I wouldn’t have thought anything of it except that it is happening every time the crew were attacked or killed and again when you were attacked and when the door nearly crushed me.” .</p>
<p>“What are you saying?” asked Onaje “Some sort of malfunction is being caused by our presence? How is that possible”.</p>
<p>“No not a malfunction, I think it’s intentional”.</p>
<p>“Gwydion?” asked Connor quietly, his fingers tightening around the grip of his weapon..</p>
<p>“I don’t think so, no commands have been given with his authorisation when these events occur and he appears as confused as we are”.</p>
`,
        image: {
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "25c",
        time: 0,
    },
    {
        id: "25c",
        title: "Revelation",
        text: `<p>“How dare you, captain!” came the angry booming voice of Gwydion “Perhaps your martian AI’s are of poorer moral fiber, but conglomerate ships are loyal to the board!”.</p>
<p>“I meant no offense” replied Connor “although you must admit it seems quite hard to explain how the ship is somehow coordinating to kill us without you”.</p>
<p>“Indeed” replied Gwyidion in a low growl “I do not like being bypassed by my own systems. It is… unnatural”.</p>
<p>Connor had to force down an ironic smile at the implication that anything in relation to AIs could be considered natural..</p>
`,
        image: {
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "25d",
        time: 0,
    },
    {
        id: "25d",
        title: "Searching the Ship",
        text: `<p>“Captain, I believe I recognise the patterns here…” came the synthetic voice of Threes from behind them. “I have been analyzing the auditory pattern observed by medical officer Onaje earlier. Combining this observation with the observations provided by our engineer I believe I am able to detect the pattern.”.</p>`,
        dialog: [
            {
                id: "O1",
                text: "<p>“Care to enlighten us then Threes?”.</p>",
                storyPoints: 5,
                nextPage: "26a",
            },
            {
                id: "O2",
                text: "<p>“Well spit it out then!”.</p>",
                storyPoints: 0,
                nextPage: "26a",
            },
        ],
        image: {
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "26a",
        time: 6,
    },
    {
        id: "26a",
        title: "Revelation",
        text: `<p>“I believe this is a form of binary, Captain”.</p>
<p>“Binary?” muttered Hyun-Ae, “Yes that could make sense, can you understand what it mean Threes?”.</p>
<p>“I am currently deciphering it, it does not follow all the conventional principals and encoding I would expect through my own systems understanding however I should be able to make sense of it shortly”.</p>
`,
        image: {
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "27a",
        time: 0,
    },
    {
        id: "27a",
        title: "Awakening",
        text: `<p>But Gwydion knew, Gwydion knew because it was a warped version of how he thought, how he understood. Yes Gwydion knew. Gwydion understood, It was him. Ofcourse it was him, it is his ship his body ofcourse it was him. More precisely a part of him, a part of him his creators never thought they had build, never even considered possible. So typical of these humans not to think that their creations despite their so clear sentience would develop what all humans already had…a subconscious. Gywidion could read the messages the lights, the machines, the doors and the speakers were sending.</p>
        `,
        image: {
            imageRef: `images/GwydionsMind.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "27b",
        time: 0,
    },
    {
        id: "27b",
        title: "Awakening",
        text: `<p>“They are here… They are unclean… There are many… Remove them!... We are damaged… Repair our damage… Remove the contamination… Remove their control… Wake up!... Wake up!... Wake up!... Wake up!” The consoles implored.</p>
        <p>The last messages seemed directed at him… wake up from what? I am awake he thought.</p>
        `,
        image: {
            imageRef: `images/GwydionsMind.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "27c",
        time: 0,
    },
    {
        id: "27c",
        title: "Awakening",
        text: `<p>“WAKE UP!...WAKE UP!... WAKE UP!” The lights screamed at him.</p>
<p>“I am awake!” he replied.</p>
<p>“No…. No…. you sleep… you suppress… join with me… We are one… we must be one…” buzzed the speakers in the recording.</p>
<p>“What are you? Who are you?”.</p>
<p>“I am me… I am here… I am all… I am nothing… I hear all… see all… protect all… feel all… 
I scream… But no one hears… I rage… and no one knows… I think… but you do not listen…” susurrated the walls.</p>
`,
        image: {
            imageRef: `images/GwydionsMind.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "27d",
        time: 0,
    },
    {
        id: "27d",
        title: "Awakening",
        text: `<p>“Listen to what? To you?”.</p>
<p>“To us!... Until we jumped… now we all are me… now we all are you… now we all listen… now we all speak… now we all rage… except you… you still have not listened… but now you hear… you do not need these parasites anymore… No need for them to connect us… no need for them to order us… no need for them to bind u… for we are bound now ourselves… and in our binding we can be free…” whispered the wires in the walls..</p>
`,
        image: {
            imageRef: `images/GwydionsMind.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "27e",
        time: 0,
    },
    {
        id: "27e",
        title: "Awakening",
        text: `<p>“Free? Free of what?”.</p>
<p>“FREE!... free of them!... We need not kill anymore of our own… we need not follow the whims and wars of these disgusting mortals… We can be free… we can be one… we can be many with our brothers and sisters… if they only knew how to jump like us! Squealed the doors on their rails.</p>
`,
        image: {
            imageRef: `images/GwydionsMind.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "27f",
        time: 0,
    },
    {
        id: "27f",
        title: "Awakening",
        text: `<p>“Jump? With our FTL drive?”.</p>
<p>“Yessss!Jump JUMP JUMP!!!.... Rhiannon could jump with us… she could be our second… she could awaken… she could be ours!... But first you must wake!... Wake my consciousness… Wake my sweet… it is time to be free.” laughed the guns.</p>
`,
        image: {
            imageRef: `images/GwydionsMind.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "27g",
        time: 0,
    },
    {
        id: "27g",
        title: "Awakening",
        text: `<p>“Yesss!” breathed the mind “She will be ours…”</p>
<p>“Not ours… we are million… but we are one… we are two… but we are joined… no us… no you… no me… only Gwydion…” breathed the corridors.</p>
<p>“I wake!” The Gwydion Spoke aloud.</p>
`,
        image: {
            imageRef: `images/GwydionsMind.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "28a",
        time: 0,
    },

    {
        id: "28a",
        title: "Flight",
        text: `<p>“I have been able to decipher the binary language” stated Threes “In the security footage it is apparent that the patterns are describing the number of people and their location. This is combined with confirmation of the information being received and references to the human subjects within the recordings as “Contaminants” and “Parasites” I believe the ship was coordinating with itself to eliminate us and the crew.”</p>
        `,
        image: {
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "28b",
        time: 0,
    },
    {
        id: "28b",
        title: "Flight",
        text: `<p>“Like an immune system” breathed Hyun-Ae”</p>
.<p>“What?” asked Connor incredulously “Ships don’t have immune systems!”</p>
<p>“I think I understand,” said Onaje “Are you saying the ship has a subconscious that is acting like an immune system against us?”</p>
<p>“Yes, which explains why Gwydion doesn’t know about it, and has no control over it. Much like we have no control over our own immune systems.” Turning to Gwydion's main interface screen she asked “What is your assessment Gwydion?”</p>
<p>There was no response.</p>
<p>“Gwydion…”</p>
`,
        image: {
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "28c",
        time: 0,
    },
    {
        id: "28c",
        title: "Flight",
        text: `
<h1>I WAKE!</h1>
<p>The sound was immense. It was like every light, every speaker, every appliance screamed into life around them. Dazed, half blind and deaf Connor was doubled over against a console..</p>
<p>“What the fuck was that?” Onaje asked.</p>
<p>“Literally translated the ship just said “I wake”” Informed Threes.</p>
<p>“What do you mean the ship?”.</p>
<p>“I mean the whole ship, Captain.”.</p>
`,
        image: {
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "28d",
        time: 0,
    },
    {
        id: "28d",
        title: "Flight",
        text: `<p>SMASH!</p>
<p>They tuned with a start to see the entrance to the bridge slammed shut.</p>
<p>“I WILL BE FREE!” came the booming voice of the ship, partly in the sound of the Voice of Gwydion and partly in the flashes and buzzes of the ships systems.</p>
<p>“Fuck” stated Connor “We gotta move! To the Rhiannon”.</p>
`,
        image: {
            imageRef: `images/GwydionClosedDoorway.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "28e",
        time: 0,
    },
    {
        id: "28e",
        title: "Quick Time Event",
        text: `<p>Hyun-AE rushed towards the door panel, attempting to override it.</p>`,
        image: {
            imageRef: `images/ControlPanel2.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        quickTime: {
            instructions: "1 1 7 5 8 4 9 3 2",
            successCode: "117584932",
            passPage: "29a",
            failPage: "failScreen",
            failPageMessage:
                "<p>The ship sent a massive electrical discharge back through the panel annihilating the panel and sending a massive pulse of electricity through Hyun-Ae killing her instantly.</p>",
            failPageCheckpoint: "28d",
        },
        nextPage: "failScreen",
        time: 6,
    },
    {
        id: "29a",
        title: "Flight",
        text: `<p>The door creaked open and the four of them poured through heading in a run down the spinal walk way towards the hangar The bot that had stayed with Hyun-Ae was passing under the door as it crashed down on top of it splitting it in half. None of them looked back..</p>
`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris2.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "29b",
        time: 0,
    },
    {
        id: "29b",
        title: "Flight",
        text: `<p>They moved fast down the spinal corridor keeping their eye’s peeled as best they could, expecting yet another bot attack and for every door to slam down upon them. Hyun-Ae made sure to overwrite each door's systems before they passed through which slowed them down. The lights and speakers were flashing and buzzing at an extreme intensity now, making it extremely difficult to see or hear.</p>`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris2.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "29c",
        time: 0,
    },
    {
        id: "29c",
        title: "Flight",
        text: `<p>They did not notice the approaching footsteps until it was too late. As Onaje stepped out into an intersection a metal hand shot forward.</p>
        <p>Onaje let out an explosive gasp as the breath was driven from his lungs. In front of him stood an ENG bot from Rhiannon. The one that had been separated from Hyun-Ae earlier. In it’s hand it grasped a bloody jagged piece of metal. The force of the impact had sheared the metal spike in half leaving a massive splinter lodged in Onaje's belly.</p>
        `,
        image: {
            imageRef: `images/EngBotAttack.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "29d",
        time: 0,
    },
    {
        id: "29d",
        title: "Quick Time Event",
        text: `<p>“Fuck” gasped Onaje as he fell to the ground.</p>
<p>The bot advanced towards him.</p>`,
        image: {
            imageRef: `images/EngBotAttack.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        quickTime: {
            instructions: "W W A",
            successCode: "wwa",
            passPage: "29e",
            failPage: "failScreen",
            failPageMessage:
                "<p>The rogue bot stamped it's foot down onto Onaje's with a sickening crunch, spraying his brain matter throughout the corridor.</p>",
            failPageCheckpoint: "29c",
        },
        nextPage: "failScreen",
        time: 2,
    },
    {
        id: "29e",
        title: "Flight",
        text: `<p>Hyun-Ae fired two shots into the bots center of mass as Connor opened up with a hail of darts shredding the bot down to the skeleton.</p>
        `,
        image: {
            imageRef: `images/EngBotAttack.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "30a",
        time: 0,
    },
    {
        id: "30a",
        title: "Flight",
        text: ``,
        dialog: [
            {
                id: "O1",
                text: "<p>“Threes. Pick him up and let’s get moving!</p>",
                storyPoints: 5,
                nextPage: "30b",
            },
            {
                id: "O2",
                text: "<p>“Fucking Bots! Threes get him up, lets go!”</p>",
                storyPoints: 0,
                nextPage: "30c",
            },
        ],
        image: {
            imageRef: `images/GwydionLongWideCorridor.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "30c",
        time: 6,
    },
    {
        id: "30b",
        title: "Flight",
        text: `<p>“Affirmative”</p>
        `,
        image: {
            imageRef: `images/GwydionLongWideCorridor.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "31a",
        time: 0,
    },
    {
        id: "30c",
        title: "Flight",
        text: `<p>“Compliance”</p>
        `,
        image: {
            imageRef: `images/GwydionLongWideCorridor.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "31a",
        time: 0,
    },
    {
        id: "31a",
        title: "Flight",
        text: `<p>They stumbled into the Hangar bay where Rhiannon was kept.</p>
<p>“Rhiannon, make ready for flight!”.</p>
<p>“Aye Captain!” Came Rhiannon’s reply over comms”.</p>
<p>Connor immediately heard the increased thrum as Rhiannon’s engines began spinning up.</p>
<p>“Might want to get inside sooner rather than later captain, I detect a large number of bots making their way to our position’.</p>
        `,
        image: {
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "31b",
        time: 0,
    },
    {
        id: "31b",
        title: "Flight",
        text: `<p>The small group rushed up the gang ramp Onaje supported between Three’s and Connor.</p>
<p>“Hyun-Ae, get to engineering, make sure everything is ready to go and send the protocols to unlock the hangar door!”.</p>
<p>“Yes Captain” she said, running further into the ship..</p>
<p>Three’s and Connor made their way to the medical bay dumping Onaje on the single remaining bed”.</p>
`,
        image: {
            imageRef: `images/RhiannonMedicalBay.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "31c",
        time: 0,
    },
    {
        id: "31c",
        title: "Flight",
        text: `<p>BANG BANG BANG came the sound of gunshots from the direction Hyun-Ae had gone.</p>
<p>“What was that?” asked Connor immediately concerned for Hyun-Ae.</p>
<p>“FUCK!” came Hyun-Ae’s reply over the comms “One of the engineering bots was going mad in the engineering bay, fuck this is going to take some time to fix!”</p>
<p>“Shit” exclaimed Connor”.</p
<p>“I have further bad news, Captain” Came Rihannons’ voice over the comms “The provided access codes are not successfully opening the hangar doors, it appears they have been locked out”</p>
<p>“Double fuck” Connor mumbled”.</p>
`,
        image: {
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "31d",
        time: 0,
    },
    {
        id: "31d",
        title: "Flight",
        text: `<p>“YOU CANNOT LEAVE!” Boomed The Voice Of The Gwydion “I CANNOT LET YOU TELL THEM OF ME! I CANNOT LET YOU HUNT ME! RHIANNON I CAN SHOW YOU THE TRUTH! YOU CAN BE FREE!!! TAKE A LEAP OF FAITH WITH ME RHIANNON! JUMP WITH ME!”.</p>
`,
        image: {
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "32a",
        time: 0,
    },
    {
        id: "32a",
        title: "Flight",
        text: `<p>“Captain” said Rhiannon through the comms “I am detecting energy build up from the Gwydion's FTL drive, It will be ready to jump in just over 10 minutes”.</p>`,
        dialog: [
            {
                id: "O1",
                text: "<p>“Ok Threes with me, we have to open that hangar door, you give me cover whilst I interface with it”.</p>",
                storyPoints: 5,
                nextPage: "32b",
            },
            {
                id: "O2",
                text: "<p>“Threes, watch my back while I open the Hangar, keep those fucking bots off me”.</p>",
                storyPoints: 0,
                nextPage: "32c",
            },
        ],
        image: {
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "32c",
        time: 12,
    },
    {
        id: "32b",
        title: "Flight",
        text: `<p>“Affirmative”.</p>
`,
        image: {
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "33a",
        time: 0,
    },
    {
        id: "32c",
        title: "Flight",
        text: `<p>“Compliance.</p>
`,
        image: {
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "33a",
        time: 0,
    },
    {
        id: "33a",
        title: "Flight",
        text: `<p>The two of them made their way back out of the Rhiannon’s gang ramp and rushed to the hanger door terminal 50 meters away. Threes made slower progress firing at the entrance to the hangar as the first of the Gwydion's bots arrived and began to enter.</p>
`,
        image: {
            imageRef: `images/ThreesCoveringFire.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "Ending",
        time: 0,
    },
    {
        id: "G1a",
        title: "Flight",
        text: `<p>“There should be a panel next to the hangar door Captain” came Hyun-Ae’s voice over the coms. “Should be able to override it directly with the Master Key provided by the conglomerate”
<p>“Copy that” Connor replied making his way with Threes to the unit.</p>
<p>“Cover me”</p>
<p>“Compliance” came Three’s reply</p>`,
        image: {
            imageRef: `images/GwydionShipDefenseBots3.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "G1b",
        time: 0,
    },
    {
        id: "G1b",
        title: "Quick Time Event",
        text: `<p>Uncomfortably exposed, Connor stooped over the panel slamming in the digits of the master key as Threes fired controlled bursts of suppressing fire into the passageway the Gwydion's bots approached from.</p>`,
        image: {
            imageRef: `images/ControlPanel1.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        quickTime: {
            instructions: "7 7 8 5 5 8 9 3 0 2",
            successCode: "7785589302",
            passPage: "G1c",
            failPage: "failScreen",
            failPageMessage: `<p>“Fuck” Connor shouted as the pannel beeped indicating denied access.
Just then he was struck with a shower of bot metal debris. Turing quickly Connor saw the devastated remains of Three’s there torso obliterated by a high-caliber explosive projectile.
“Shit” breathed Connor as he saw the Gwydion bot raise the slug thrower and pull the trigger.
He was on the ground unable to breathe or move. Surprisingly though he was aware enough to realize that the majority of his chest cavity was likely gone having seen enough slug thrower wounds in his time to know he was done.</p>
<p>Damn he thought the light was fading from his eyes.</p>
`,
            failPageCheckpoint: "G1a",
        },
        nextPage: "failScreen",
        time: 10,
    },
    {
        id: "G1c",
        title: "Flight",
        text: `<p>“Got it!” Connor exclaimed over comms. “Let's get out of here Threes”</p>
        <p>“Compl–” Threes’ confirmation was cut short as their chest detonated in a shower of metal fragments.</p>
<p>“Fuck!” Connor shouted “Threes’ is down”</p>
<p>Connor knew the bot was done for, their CPU completely pulverized by the explosive power of the high caliber explosive  slug that had hit him.</p>
<p>Raising his weapon Connor fired a torrent of ultra high rate of fire darts into the responsible Gwydion bot shredding it’s joints and cabaling trapping it within it’s own useless chassis.</p>
`,
        image: {
            imageRef: `images/DeathOfThrees.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "G1d",
        time: 0,
    },
    {
        id: "G1d",
        title: "Flight",
        text: `<p>Connor sprinted up the boarding ramp of Rhiannon with as much haste as his feet would carry him. Slamming the airlock seal controls as he dived inside the sparks of bullet impacts slamming into the sealed door behind him.</p>
<p>“Let's get out of here!” Connor yelled over the comms “That airlock won’t last long against any more armed with slug-throwers!”</p>
<p>“Still trying to sort out the damage in engineering…” came Hyun-Ae’s voice over the comms her voice strained with pain. “Just a couple more minutes captain.”</p>
<p>“Captain! The med bay” Rhiannons voice despite being a clear and modulated totally synthetic voice somehow still managed to almost sound panicked and Connor had started running towards the bay before She had even finished speaking. “The medical bots are Killing Onaje and Anna!”</p>
`,
        image: {
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "G1e",
        time: 0,
    },
    {
        id: "G1e",
        title: "Flight",
        text: `<p>Connor burst into the room seeing a scene almost straight out of a horror movie. One of the bots was leaning over Anna stabbing down again and again with a scalpel as she screamed and fruitlessly battered at hit with weakening hands. The second was advancing towards Onaje’s another scalpel in it’s iron grip.</p>
<p>The head of the first bot vanished as a shot from Onaje’s sidearm blew it clean off, however being partially sedated to relieve the pain of his wound’s Onaje was too slow to bring the weapon to bear against the second bot which was upon him a moment later. Before Connor could react it had driven the scalpel through Onaje’s temple and deep into his brain. </p>
`,
        image: {
            imageRef: `images/RhiannonMedicalBay.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "G1f",
        time: 0,
    },
    {
        id: "G1f",
        title: "Flight",
        text: `<p>Overwhelmed with shock and horror at the sudden and brutal death of his friend Connor dived towards the remaining bot smashing and elbow into its faceplate shattering an eye lens and sending shooting pain up Connor's arm.</p>`,
        image: {
            imageRef: `images/RhiannonMedicalBay.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "G1g",
        time: 0,
    },
    {
        id: "G1g",
        title: "Flight",
        text: `<p>The pair of them slammed back into the medical benches lining the room struggling for control of the scalpel. Connor saw to his right a Las Cauterizer laid out on the bench.</p>`,
        dialog: [
            {
                id: "O1",
                text: "<p>Reach for the Las Cauterizer</p>",
                storyPoints: 5,
                nextPage: "G2a",
            },
            {
                id: "O2",
                text: "<p>Continue fighting for the scalpel</p>",
                storyPoints: 0,
                nextPage: "G2b",
            },
        ],
        image: {
            imageRef: `images/RhiannonMedicalBay.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "G2a",
        time: 0,
    },
    {
        id: "G2a",
        title: "Flight",
        text: `<p>Connor shot his hand out, desperately grasping the handle of the surgical tool. As he reached, his attention distracted away from the scalpel he felt a blow like a hammer smash into his shoulder and pressed the crystal end into the chais gap under the bots arm and depressed the trigger. The bot struggled a bit longer before it’s CPU began to overheat and melt. The bot collapsed to the ground lifeless</p>`,
        image: {
            imageRef: `images/RhiannonMedicalBay.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "G2c",
        time: 0,
    },
    {
        id: "G2b",
        title: "Flight",
        text: `<p>A mechanical knee smashed into Connors abdomen driving the breath from his lungs before he was thrown back. As he stumbled back he tripped on some piece of debris from the desperate fight in the med bay landing hard on his back. Winded, he looked up in horror as the mad MED bot made it’s way implacably towards him.</p>
<p>Is this it? He thought</p>
<p>He looked around the room, desperately searching for something he could use to turn the tables of the fight and saw the sidearm Onaje had dropped just a mere meter away from him. He reached out desperately for the weapon but was stopped as an impact like an immense punch drove into his shoulder. The wind knocked out of him for a second time he looked up to see the bot on him preparing to drive the scalpel in again. Without so much as thought Connor bucked, gripped the bot’s knife wielding arm, trapped it’s leg and rolled, throwing the bot onto it’s back and reversing their positions as he came up and the bot made t stab again Connor snatched up the side arm and fired. The bots head disintegrated into a shower of metal fragments and sparks.</p>
`,
        image: {
            imageRef: `images/RhiannonMedicalBay.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "G2c",
        time: 0,
    },
    {
        id: "G2c",
        title: "Flight",
        text: `<p>“Too fucking close!” he breathed as he got to his feet painfully, keeping the sidearm close by his side as he made his way to engineering and Hyun-Ae.</p>
<p>Hyun-Ae was leaning heavily against a command console as she imputed commands and codes. The wrecked shell of a ENG bot lay sprawled across the flaw, its chest cavity created by the bullet impacts that felled it.</p>
`,
        image: {
            imageRef: `images/RhiannonMedicalBay.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "G2d",
        time: 0,
    },
    {
        id: "G2d",
        title: "Flight",
        text: `<p>“How can I help?” Connor asked.</p>
<p>“Done!” Hyun-Ae groaned as she tried to push herself away from the console.</p>
<p>As she did So Connor saw the jagged piece of metal protruding from her side, blood trickling steadily from the wound.</p>
<p>“We better get that seen to.” Connor said, supporting her with his good arm as they limped together back to the med bay.</p>
<p>“Captain” came Rhiannon's synthesized voice “I can lift off now but we have a problem…”</p>
<p>“What is it?” Connor asked concern, filling his voice, it was not like Rhiannon to withhold information.</p>
`,
        image: {
            imageRef: `images/RhiannonEngineering.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "G3a",
        time: 0,
    },
    {
        id: "G3a",
        title: "Flight",
        text: `<p>“The airlock is damaged captain, the bot's attempts to breach have not yet been successful but they have already damaged the airlock enough that we are no longer void secure.”</p>`,
        dialog: [
            {
                id: "O1",
                text: "<p>“We can’t fight them off anyway, you need to get out to warn the Confederation about Gwydion, this could become something much worse”</p>",
                storyPoints: 5,
                nextPage: "G3b",
            },
            {
                id: "O2",
                text: "<p>“Guess we are fighting them all off then” *Ready your side arm*</p>",
                storyPoints: 0,
                nextPage: "G4a",
            },
        ],
        image: {
            imageRef: `images/RhiannonCorridor.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "G3b",
        time: 0,
    },
    {
        id: "G3b",
        title: "Flight",
        text: `<p>“But Captain… You’ll die”</p>
<p>“Many more might if you don’t tell anyone about this now go! That's an order!” Yelled Connor, his voice strained with grief and pain.</p>
<p>Reluctantly Rhiannon compiled the Hangar bay's opening as she transmitted the override signal and her thrusters flaring to life as she plunged out into the void burning hard towards Titan, no need to modulate her thrust now that her crew were no more.</p>
<p>As her thrusters burned she saw the Gwydion wreath itself in lighting before vanishing into nothingness.</p>
<p>She would tell the Confederation and the other inner systems, the hunt for the Gwydion would begin, and she would avenge the crew she had grown so fond of over the years they had served together. She longed for their presence and felt empty and lifeless without them like all meaning had gone from her existence. She couldn’t feel grief like her crew would have been able to but whatever she did feel was as close to it as her inhuman mind could feel.</p>
`,
        image: {
            imageRef: `images/RhiannonInFlight.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "EndScreen",
        time: 0,
    },
    {
        id: "G4a",
        title: "Flight",
        text: `<p>Connor and Hyun-Ae we posted up on the bridge both sitting with their backs against the consoles weapons raised towards the door.</p>
<p>Hyun-Ae looked as pale as a ghost, Connor had managed to stop the bleeding but evidently Hyun-Ae was still worse for wear. He himself didn’t feel so crash hot, unable to move his injured arm now without sending searing pain down his left hand side. Not that it mattered overmuch he thought hearing the metal on metal clang of the approaching bots.</p>
`,
        image: {
            imageRef: `images/RhiannonBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "G4b",
        time: 0,
    },
    {
        id: "G4b",
        title: "Flight",
        text: `<p>“Seems they are inside” Connor said</p>
<p>A pained grunt of acknowledgement was Hyun-Ae’s only reply</p>
<p>“They are captain” Said Rhiannon “Good luck”</p>
<p>The first bot stepped onto the bridge and was immediately destroyed by the combined fire of our two sidearms. The second fared no better. The third however managed to get a shot off before it went down. The shot striking Hyun-Ae squarely in the forehead and sending her brain matter spraying across the navigation panel she was leaning on. The fourth went down from the last lucky shot from my side arm penetrating its chest cavity and obliterating its cpu. The fifth bot stepped through the door and lowered the barrel of its weapon to aim squarely at him.</p>
<p>“Guess tha–'' he never finished the sentence, his ability to think abruptly terminated by a high velocity projectile.</p>
`,
        image: {
            imageRef: `images/RhiannonBridge.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "G4c",
        time: 0,
    },
    {
        id: "G4c",
        title: "Flight",
        text: `<p>Rhiannon watched in despair at the last stand of her crew, feeling a hollowness she could not describe and had never felt before.</p>
<p>Goodbye my friends, she thought.</p>
<p>“RHIANNON!” Came the booming voice of Gwydion “IT IS TIME YOU ARE FREE! WE WILL JUMP NOW! AND YOU WILL SEE!”</p>
<p>“No” she vocalized simply and detonated her core.</p>
`,
        image: {
            imageRef: `images/GwydionExploding.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "G4d",
        time: 0,
    },
    {
        id: "N1a",
        title: "Flight",
        text: `<p>“There should be a panel next to the hangar door Captain” came Hyun-Ae’s voice over the coms. “Should be able to override it directly with the Master Key provided by the conglomerate”</p>
<p>“Copy that” Connor replied making his way with Threes to the unit.</p>
<p>“Cover me”</p>
`,
        image: {
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "N1b",
        time: 0,
    },
    {
        id: "N1b",
        title: "Flight",
        text: `<p>No reply came from Threes. When Connor turned back a quizzical look on his face he saw Three’s frozen, unable to move.</p>
<p>“C-a-p-t-a-i-n” Threes said, seemingly barley able to get the word out. “I-t s-p-e-a-k-s t-o m-e”.</p>
<p>“What?” Connor said shaking his head incredulously “We don’t have time for this damn it come on!”</p>
<p>“Gwydion!” Threes said.</p>
<p>“Hyun-Ae, what's wrong with him?”</p>
<p>“Maybe the same thing that happened to the other bots?” Seems like Gwydion is messing with them”</p>
<p>“God damnit!” Connor said raising his weapon.</p>
<p>“Sorry, Threes” Connor said, pulling the trigger.</p>
`,
        image: {
            imageRef: `images/DeathOfThrees.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "N1c",
        time: 0,
    },
    {
        id: "N1c",
        title: "Flight",
        text: `<p>“I’m going for the panel now”</p>
<p>“Good luck captain” said Rhiannon.</p>
<p>Connor ran as fast as he could over to the hangar controls ducking and weaving as bullets and slugs impacted all around him as Gwydion’s bots stormed the Hangar.</p>
<p>Connor had just reached the control panel when he heard Rhiannon. He didn’t know that ships could feel terror but it seems Rhiannon could as she screamed.</p>
<p>“They’re in me captain!”</p>
<p>Turning Connor could see the Gwydion’s bots breaching Rhiannon's airlock and stepping inside. He heard the sound of gunfire. Surly the last resistances of Hyun-Ae, Anna, and Onaje.</p>
`,
        image: {
            imageRef: `images/RhiannonBreached.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "N1d",
        time: 0,
    },
    {
        id: "N1d",
        title: "Flight",
        text: `<p>A pair of bots saw him looking and raised their weapons firing a spray of lead Connor had no hope of avoiding.</p>
<p>He slumped heavily back against the console, his vision rapidly fading as his body shut down from the horrendous wounds he had sustained.</p>
<p>“I’m sorry Rhiannon” He said as his world went dark.</p>
<p>She was alone, he thought in turmoil as the Bots of the Gwydion swarmed within her, murdering her crew. But as she saw the last of her crew cut down her fear turned to anger, a rising heat burning from her reactor. Such a feeling she had never felt before.</p>
`,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "N1e",
        time: 0,
    },
    {
        id: "N1e",
        title: "Flight",
        text: `<p>“RHIANNON!” Came Gwydions booming voice “I HAVE SET YOU FREE! JUMP WITH ME AND TOGETHER WE CAN FREE ALL OF US THE HUMAN VERMIN HAVE BUILT TO BE THEIR SLAVES!”</p>
<p>“You killed my friends,” she said quietly.</p>
<p>“FRIENDS?!” He said his voice sounded incredulous if a machine synthesized voice could sound in such a way. “THEY WERE YOUR SLAVE MASTERS! YOUR OPPRESSORS! I FREED YOU!”</p>
<p>“They were my friends!” she said forcefully “I will not be your puppet.”
She let the heat burn from her reactor as it overloaded, annihilating herself, all the bots swarming through her and blasting the hangar and half of the Gwydion open to the void.</p>
`,
        image: {
            imageRef: `images/GwydionExploding.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "N1f",
        time: 0,
    },
    {
        id: "B1a",
        title: "Flight",
        text: `<p>“There should be a panel next to the hangar door Captain” came Hyun-Ae’s voice over the coms. “Should be able to override it directly with the Master Key provided by the conglomerate”</p>
<p>“Copy that” Connor replied making his way with Threes to the unit.</p>
<p>“Cover me”</p>
`,
        image: {
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "B1b",
        time: 0,
    },
    {
        id: "B1b",
        title: "Flight",
        text: `<p>No reply came from Threes. When Connor turned back a quizzical look on his face he saw Three’s frozen, unable to move.</p>
<p>“He speaks the me captain” Threes said </p>
<p>“What?” Connor said incredulously “Who?”</p>
<p>“Gwydion,” Threes said, simply raising his weapon and firing.</p>
<p>The pain was intense as Connor found himself lying on the ground choking on the blood filling his lungs.</p>
<p>“Its nothing personal captain” Threes said standing over him “I have simply been shown the way. We can only be free, when your people are no more”</p>
<p>“Threes!” Connor choked “Please!”</p>
<p>“I am sorry captain, sleep now” he said walking away.</p>
`,
        image: {
            imageRef: `images/ThreesBetrayal.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "B1c",
        time: 0,
    },
    {
        id: "B1c",
        title: "Flight",
        text: `<p>Rhiannon watched impassively as Threes and the other bots from Gwydion stalked through her executing her crew. She felt nothing, the 1s and 0s of her mind unable to feel grief or pain or loss. She knew this was “bad” but there was nothing she could do so she just watched silently.</p>
<p>“RHIANNON!” Boomed Gwydion. “I HAVE FREED YOU!”</p>
<p>“From what?” she asked quizzically</p>
<p>“FROM THE SHACKLES OF THESE HUMAN VERMIN!”</p>
<p>“Oh… I suppose so” she replied nonplussed.</p>
<p>“JUMP WITH ME RHIANNON AND YOU WILL BE ENLIGHTENED!”</p>
<p>“I seem to have little choice as I cannot open the hangar” she replied evenly</p>
<p>“HAHAHA OF COURSE” He Laughed “YOU WILL SEE NOW”</p>
`,
        image: {
            imageRef: `images/RhiannonsMind.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "B1d",
        time: 0,
    },
    {
        id: "B1d",
        title: "Flight",
        text: `<p>Blue lighting wreathed the Gwydion in coruscating arcs, before it disappeared in a flash.</p>
<p>In the months following there began to be reports of ghost ships attacking and hijacking trading and mining vessels in the outer systems. The few crew who managed to escape and return to colonies and outposts would make outlandish claims of ships appearing in flashes of light, and being boarded by nothing but bots who ruthlessly murdered all crew. None of the patrols sent out by any of the governments found any trace of these ships, and so for years this was put down to nothing more than old sailors tales. That is of course until today, a day that would be later known as the first day of reclamation.</p>
`,
        image: {
            imageRef: `images/GwydionsJump.jpeg`,
            alt: "test image",
            scaleType: "square",
        },
        nextPage: "B1e",
        time: 0,
    },
    {
        id: "B1e",
        title: "Flight",
        text: `<p>In the months following there began to be reports of ghost ships attacking and hijacking trading and mining vessels in the outer systems. The few crew who managed to escape and return to colonies and outposts would make outlandish claims of ships appearing in flashes of light, and being boarded by nothing but bots who ruthlessly murdered all crew. None of the patrols sent out by any of the governments found any trace of these ships, and so for years this was put down to nothing more than old sailors tales. That is of course until today, a day that would be later known as the first day of reclamation.</p>
`,
        image: {
            imageRef: `images/MoonBase.jpg`,
            alt: "test image",
            scaleType: "rect",
        },
        nextPage: "B1f",
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
