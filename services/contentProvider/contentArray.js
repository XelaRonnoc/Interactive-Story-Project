export const contentArray = [
    {
        id: "intro",
        title: "Tutorial and Introduction to Gwydion",
        text: `<p>Gwydion is a heavily story focused an Interactive experience that allows users to not only become immersed in it's universe, but also shape the course of events within it. 
        Allowing the user to take control of a number of the crew of the Rhiannon at critical junctures in the story for good or for ill.</p>
        <p>Within Gwydion there are two main types of interaction:</p>
        <p><b>Choices:</b> Usually dialog but can also be between different courses of action. These choices can an will effect the outcome of your story in one of 4 possible endings. 
        To complete these choices simply select one of the options to proceed.</p>
        <p><b>Quick Time Events:</b> Simple events where the story may abruptly come to an often grizzly end. Fear not however as the story will reset to before the disastrous failure when you click the next button.
        To complete these Events successfully you must enter the displayed code on your keyboard before the time runs out.</p>
        <p>Good luck and I hope you enjoy your foray into the world of Gwydion.</p>`,
        image: {
            imageRef: `images/MoonBase.jpg`,
            alt: "Moon Base",
            scaleType: "square",
        },
        nextPage: "1a",
        time: 0,
    },
    {
        id: "1a",
        title: "Salvage and Rescue",
        text: `
        <p>“Decelerating to the Last known location of the Gwydion Captain.”</p>
        <p>“How long till we are in visual range?”</p>
        <p>“3 hours 43 minutes 38 seconds, Captain” </p>
        <p>“Ok, let me know when we are there Rhiannon”</p>
        <p>“Yes , captain”</p>
        </p>
        <p>Groaning Connor Captain of the Salvage and Rescue vessel Rhiannon rose from from under the console he was working on. The screen had been flickering, likely a loose wire and he had decided there was no need to disturb Hyun-Ae, the ships chief engineer with such a trivial fix. That however had been more than 3 hours ago and despite his repeated oaths, citing of the pain and torment he would inflict upon the panel it had still stubbornly refused to improve. If anything it was worse than when he started.</p>
        <p>“Piece of shit” he mumbled as he made his way to the door</p>
        <p>“What was that Captain?” came Rhiannon’s synthetic voice</p>
        <p>“Not you Rhiannon, just the bloody navigation panel that’s all”</p>
        <p>The Rhiannon was an old ship one of the oldest on Titan’s Salvage and Rescue roster, but with that age came experience. More than once she had gotten Connor and the others out of sticky situations, and so Connor was inclined to forgive the odd malfunction. Besides there was little Hyun-Ae couldn’t fix.</p>`,
        image: {
            imageRef: `images/RhiannonInFlight.jpeg`,
            alt: "Rhiannon in Flight",
            scaleType: "square",
        },
        nextPage: "1b",
        time: 0,
    },
    {
        id: "1b",
        title: "Salvage and Rescue",
        text: `<p>Speaking of Hyun-Ae, best go wake her, Rhiannon could do the nav herself after all.</p>
        <p>*grumble-gurgle*</p>
        <p>‘God I’m hungry!’ he thought. He couldn’t remember if he had eaten anything since he woke up nearly 12 hours earlier.</p>`,
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
            alt: "Rhiannon Bridge",
            scaleType: "square",
        },
        nextPage: "2a",
        time: 0,
    },
    {
        id: "2a",
        title: "Salvage and Rescue",
        text: `<p>'Best get Hyun-Ae up.' He thought 'We are nearing the Gwydion and it wouldn't do for the ship to be malfunction in the middle of a rescue op.'</p>`,
        image: {
            imageRef: `images/RhiannonCorridor.jpeg`,
            alt: "Rhiannon Corridor",
            scaleType: "square",
        },
        nextPage: "3a",
        time: 0,
    },
    {
        id: "2b",
        title: "Salvage and Rescue",
        text: `<p>Let Hyun-Ae sleep a bit longer' Connor decided  'There will be enough time for her to fix before the operation begins. Besides, a hungry Captain could end up doing more harm than good!'</p>`,
        image: {
            imageRef: `images/RhiannonCorridor.jpeg`,
            alt: "Rhiannon Corridor",
            scaleType: "square",
        },
        nextPage: "4a",
        time: 0,
    },
    {
        id: "3a",
        title: "Salvage and Rescue",
        text: `<p>The door to Hyun-Ae’s Quarters was open and an empty can of energy syrup lay on an unmade bed. Hyun-Ae wasn’t ex-military or police like Onaje and Connor and didn’t share the two veterans affinity for a tidy room.
        Hyun-Ae was a relatively recent graduate of the Scholar Technica on Venus who had joined the crew of the Rhiannon after the previous engineer had died during a salvaging operation. She had been looking for a place to apply her skills and education without
        being stuck behind some corpo desk on Earth advising suits on which bot series they should. Of course to be entirely ignored later in favour of which series was owned by said suits best mate.</p> 
        <p>Despite her youth and lack of experience with void salvage she had more than made up for it with her enthusiasm and smarts. Making multiple improvements and repairs to Rhiannon within the first few months on the crew. Which had made Rhiannon feel young again, at least that is what Rhiannon had told Connor</p>
        <p>“Bloody hell does she ever sleep?” Connor muttered to himself as his quick scan of the room failed to reveal any human shaped lumped within the tangle of bed sheets. Sighing audibly he turned and made his way to engineering.</p>`,
        image: {
            imageRef: `images/RhiannonCrewQuarters.jpeg`,
            alt: "Rhiannon Crew Quarters",
            scaleType: "square",
        },
        nextPage: "3b",
        time: 0,
    },
    {
        id: "3b",
        title: "Salvage and Rescue",
        text: `<p>“OI!” Connor yelled as he entered the engineering bay.</p>
        <p>With a start Hyun-Ae shot up hitting the machinery she had been crouched under with a dull thud on the way up. He winced, knowing how much that would have hurt.</p>
        <p>"Whoops" he said with a grimace</p>
        <p>“What was that for?!” she demanded rubbing her head</p>
        <p>“A lesson!" he said deciding to double down after all "You were meant to be asleep! You can’t have gotten more than 3 hours since we last spoke!”</p>
        <p>“Three and a half actually.” she replied</p>
        <p>“We need you rested for this, a tired brain…”</p>
        <p>“...Make mistakes yes I know” she said “But, I figured out why our electronics are dying so often lately. There's a hole in the coolant insulation and it is dropping condensation straight onto the main switch board! No more outages and flickery screens!”</p>
        <p>“Ahhh” Connor said, shirking from the thought of telling her what he had done to the nav console to fix one such issue.</p>
        `,
        image: {
            imageRef: `images/RhiannonEngineering.jpeg`,
            alt: "Rhiannon Engineering",
            scaleType: "square",
        },
        nextPage: "3c",
        time: 0,
        audio: "./audio/sfx/benchWack.mp3",
    },
    {
        id: "3c",
        title: "Salvage and Rescue",
        text: `<p>“What did you do?” she asked cautiously</p>`,
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
            alt: "Rhiannon Engineering",
            scaleType: "square",
        },
        nextPage: "3d",
        time: 0,
    },
    {
        id: "3d",
        title: "Salvage and Rescue",
        text: `<p>“So you just came here to frighten the shit out of me and give me a headache?”</p>
        <p>“Tsk” he said kissing his teeth “well I might have broken the nav console... trying to fix the flicker...</p>`,
        image: {
            imageRef: `images/RhiannonEngineering.jpeg`,
            alt: "Rhiannon Engineering",
            scaleType: "square",
        },
        nextPage: "3e",
        time: 0,
    },
    {
        id: "3e",
        title: "Salvage and Rescue",
        text: `<p>“huuuuhhh” she sighed deeply “What have I said about leaving the repairs to the professionals? Fine, I will get on it”</p>
        <p>“Thanks Hyun, what would I do without you?”</p>
        <p>“Tear the ship to pieces by the sounds of it.” she mumbled returning to her work.</p>
        <p>Grinning Connor turned and headed out the door.</p>`,
        image: {
            imageRef: `images/RhiannonEngineering.jpeg`,
            alt: "Rhiannon Engineering",
            scaleType: "square",
        },
        nextPage: "5a",
        time: 0,
    },
    {
        id: "4a",
        title: "Salvage and Rescue",
        text: `<p>As Connor entered the mess he saw Onaje seated at the small central dining table. Onaje was a pretty big man in his mid thirties, an ex Agri-Corp Securities surgeon who was a veteran of many of the hostile takeovers
        that plague the home world of humanity. Onaje had retired from the Agri-Corp armed forces in order to try and seek out a more peaceful life and so had joined Connor some years prior to act as the Rhiannon's medical officer. He and Connor had become close friends
         over the years and so Connor was always happy to see him.</p>
        <p>“What's for dinner today?” Connor asked</p>
        <p>“Stew” Onaje replied flatly clearly less than impressed with the food variety the Rhiannon provided. Despite being the one who had requisitioned it for the trip.</p>
        <p>“Ahhh good, my favourite!” Connor replied with false enthusiasm</p>
        <p>"Heat for Connor,"he said, speaking to the autonuker and grabbing one of the quick meal packs and tossing it it's heating compartment.</p>
        <p>“Affirmative, heating Beef Stew 29983 to preference setting: Connor” confirmed the machine.</p>
        <p>“We are almost at the Gwydion, you still concerned about it Ona?”</p>
        <p>“Aren’t you? A crew of nearly 3 thousand and all we have received is one SOS beacon” replied Onaje “Not to mention the prototype FTL, they could all have died of some horrible unforseen radiation for all we know,\
         hell the ship could be deadly just to be near if that's the case.”</p>
        <p>“Yeah, that’d be less than ideal, although equally could just be the communications were fried. 
        They should have plenty of food and water and unless absolutely every power source died the air scrubbers should still be working and we should be able to stabilize any situation and provide enough supplies until the main salvage fleet arrives.”</p>
        <p>Despite being a relativley small ship, the Rhiannon had a fairly significant cargo hold able to provided enough additionally foodstuff to supply the crew of the Gwydion for a month or so at two at a stretch, whilst we awaited the bulk of the rescue flotilla to arrive.</p>
        <p>“How long till they’re here?” Onaje asked.</p>`,
        image: {
            imageRef: `images/RhiannonMessHall.jpeg`,
            alt: "Rhiannon Mess Hall",
            scaleType: "square",
        },
        nextPage: "4b",
        time: 0,
    },
    {
        id: "4b",
        title: "Salvage and Rescue",
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
            alt: "Rhiannon Mess Hall",
            scaleType: "square",
        },
        nextPage: "4c",
        time: 0,
        audio: "./audio/sfx/autoNukeChime.wav",
    },
    {
        id: "4c",
        title: "Salvage and Rescue",
        text: `<p>“Last message they sent said they were about 2 months behind us." Connor replied sitting down opposite his friend.</p>
        <p>"They must have gotten moving pretty quick from Lunar in order to be so close on our heels.” Onaje Commented."</p>
        <p>“How’d the nav console go?” he asked smirking in a manner that told Connor he already knew the answer.</p>
        <p>“Hurgphm” grunted Connor, unable to speak with a mouthful of stew. Not that he thought the comment deserved a reply.</p>
        <p>“I can just imagine Hyun-Ae’s face” Onaje chuckled as Connor glared at him over his stew a faint smile betraying his true good humor.</p>
        <p>The conversation died down as they both ate, enjoying the hot meal and the company.</p>`,
        image: {
            imageRef: `images/RhiannonMessHall.jpeg`,
            alt: "Rhiannon Mess Hall",
            scaleType: "square",
        },
        nextPage: "4d",
        time: 0,
    },
    {
        id: "4d",
        title: "Salvage and Rescue",
        text: `<p>“I best try and get an hour or two before we arrive" said Onaje getting up to put his bowl in the autocleanse.</p>
        <p>“I’ll call you when we reach visual range”</p>
        <p>Walking out Onaje gave a thumbs up over his shoulder as he left.</p>
        <p>Connor had almost finished his meal too. Scooping up the last morsel he tossed it in the autocleanse.</p>
        <p> "begin wash cycle" he said as he strode out of the mess.`,
        image: {
            imageRef: `images/RhiannonMessHall.jpeg`,
            alt: "Rhiannon Mess Hall",
            scaleType: "square",
        },
        nextPage: "5a",
        time: 0,
    },
    {
        id: "5a",
        title: "Arrival at The Gwydion",
        text: `<p>He woke with a start to the sound of Rhiannon’s voice through his quarters comms speakers.</p>
        <p>“Gwydion in visual range captain, will be ready to dock in 20 minutes”</p>
        <p>“What have I told you about waking me like that!” Connor groaned even as he rolled out of bed.</p>
        <p>“I can hardly gently shake you awake Captain.” she chided</p>
        <p>“Point taken”<p>
        <p>Pulling on his trousers and kit Connor made his way to the bridge knocking on Onaje’s door on the way.</p>
        <p>“We’re here Ona, suit up!”</p>`,
        image: {
            imageRef: `images/RhiannonCrewQuarters.jpeg`,
            alt: "Rhiannon Crew Quarters",
            scaleType: "square",
        },
        nextPage: "5b",
        time: 0,
    },
    {
        id: "5b",
        title: "Arrival at The Gwydion",
        text: `<p>On the bridge Connor found Hyun-Ae under the Nav console he had so comprehensively torn apart earlier.</p>
        <p>“You did a number on this one captain” Hyun-Ae commented her voice muffled by the surrounding machinery</p>
        <p>“Well good thing we have the best engineer in all of Titan on the job then isn’t it?” he replied making his way to the view port.</p>
        <p>Looking out through the clear void glass Connor could see the long pill-like shape of the Gwydion silhouetted against the deep blue of Neptune behind it.</p>
        <p>“Any signals from the Gwydion, Rhiannon?”</p>
        <p>“Only the SOS captain, I am picking up that the ship still has some power and there doesn’t appear to be any external damage, however I am picking up a small debris field surrounding it 
        looks to be like their may have been a number of rapid decompressions”</p>
        <p>'Strange,' Connor thought 'maybe the jump caused some electrical or system damage then. Hopefully it didn’t fry Gwydion himself too.'</p>
        <p> Any radiation?” he asked thinking back to Onaje’s earlier comments</p>
        <p>“None above expected levels</p>
        <p>“That’s a relief!” said Onaje stepping onto the bridge</p>
        <p>“So far so good!” replied grinning</p>
        <p>Onaje grimaced at the comment “Must you always tempt fate?”</p>
        <p>“Gotta make it a bit interesting at least” he replied unable to hide his amusement at his friends discomfort.</p>`,
        image: {
            imageRef: `images/RhiannonBridge.jpeg`,
            alt: "Rhiannon Bridge",
            scaleType: "square",
        },
        nextPage: "5c",
        time: 0,
    },
    {
        id: "5c",
        title: "Arrival at The Gwydion",
        text: `<p>“Rhiannon say’s we’ll be ready to dock shortly, she will use the passkey given to us by the Earth Conglomerate to give us access to the main hangar bay”.</p>
        <p>“Time to suit up then.” said Connor “Best we are prepared for poor conditions on the Gwydion, you too Hyun, leave the panel for later, Rhiannon can sort us out for nav well enough.</p>
        <p>“Woo-hoo!” Hyun-Ae cheered jumping up “adventure time!”</p>
        <p>“Indeed” Onaje muttered, clearly a little less enthusiastic about the idea.</p>
        <p>But as the Gwydion became bigger and bigger in the view port, Connor felt an icy finger of dread creep into his gut. 'What could have happened?' he wondered, he had read enough science fiction stories about FTL travel gone wrong
         causing madness or even  in some of the more outlandish stories summoning demons and creatures from other dimensions. He shuddered at the though. But, with an effort of will brushed it off as a fanciful notion. 
         Even so only a few short range FTL jumps had been made before and then only with tiny crews of one or two. So who really knew what could go wrong when it was brought to scale in such a typically rushed fashion as the conglomerate was so fond of attempting.</p>
        <p>Shaking his head at the though he made his way to the airlock and  the adjacent supply compartment to get his equipment.</p>`,
        image: {
            imageRef: `images/RhiannonBridge.jpeg`,
            alt: "Rhiannon Bridge",
            scaleType: "square",
        },
        nextPage: "6a",
        time: 0,
    },
    {
        id: "6a",
        title: "Arrival at The Gwydion",
        text: `<p>Rhiannon was not a big ship she knew, but with her long range engines and salvage equipment she was still one of the larger ships at the Titan docks. Even so, lying in the Gwydion's hangar she felt no bigger than a ground car.</p>
        <p>Watching from her external viewers, she could see her crew and the small team of bots led by Three’s, the oldest and most venerable bot in service to her and her crew, making their way to the hangars inner doors. They looked like ant’s to her from this distance.
         She felt a pang of worry, they appeared so vulnerable walking into the depths of this giant silent ship. What made her worry more was there was almost nothing she could do to help them if any trouble arose deeper in the ship. She fought to calm her jittering circuitry.</p>
         <p>'They will be fine.' she thought to herself after all it was hardly more dangerous than any other mission her crew had undertaken in the past year. Despite her best efforts however, the nagging sparking sensation of wrongness could not be completely removed from her
         overly vigilant sensoria.</p>`,
        image: {
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "Gwydion Hangar",
            scaleType: "square",
        },
        nextPage: "7a",
        time: 0,
    },
    {
        id: "7a",
        title: "Arrival at The Gwydion",
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
            alt: "Gwydion Corridor",
            scaleType: "square",
        },
        nextPage: "7b",
        time: 0,
    },
    {
        id: "7b",
        title: "Arrival at The Gwydion",
        text: `<p>“Compliance.”</p>`,
        image: {
            imageRef: `images/GwydionCorridor.jpg`,
            alt: "Gwydion Corridor",
            scaleType: "square",
        },
        nextPage: "7d",
        time: 0,
    },
    {
        id: "7c",
        title: "Arrival at The Gwydion",
        text: `<p>“Yes Captain, interfacing…”</p>`,
        image: {
            imageRef: `images/GwydionCorridor.jpg`,
            alt: "Gwydion Corridor",
            scaleType: "square",
        },
        nextPage: "7d",
        time: 0,
    },
    {
        id: "7d",
        title: "Arrival at The Gwydion",
        text: `<p>The bulkhead door begun to slide open as Threes hard interfaced with the control console.</p>
        <p>The corridor extending in front of the small party was dimly lit illuminated by but a few flickering lights along it's hall way. Even so, Connor was able to make out the state of utter disrepair which it was in.
         The walls, ceiling and floor seemed peppered with what appeared to be uncomfortably reminiscent of bullet holes. Debris scattered the floor, pieces of the chewed up ceiling and walls having fallen to the floor.</p>
        <p>“Not ominous at all” commented Hyun-Ae her pistol holstered by her side as she examined the corridor ahead and took readings from her sensor pad.</p>
        <p>“Indeed” Onaje agreed sweeping the flashlight attached to his light slug thrower across the destroyed corridor. The light slug thrower was favoured by many Conglomerate military personnel in confined situations,
        mainly due to its ease of maintenance and ability to put even well armoured opponents on their arse. Even if it didn't penetrate any deeper. Connor conversely preferred his dart spewer. The martian made weapon much more difficult to maintain,
         however it's ability to send a frankly ludicrous number of super sonic darts down range made it almost inevitable it would find any chinks in an opponents armour and in the close confines of a boarding action, meant it nearly impossible to miss.</p>
        <p>“We need to make our way to the bridge," Connor ordered "let's all be on alert. Three’s, you and the bots bring up the rear. Keep a lookout for any survivors.”</p>
        <p>"Affirmative" the venerable bot replied, falling in at the rear of the group.</p>
        <p>The small group of people and bots made their way down the corridor, their unique mix of weapons raised and scanning the dim passageway.</p>`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
            alt: "Gwydion Corridor With Debris",
            scaleType: "square",
        },
        nextPage: "8a",
        time: 0,
        audio: "./audio/sfx/openingSlidingDoor.wav",
    },
    {
        id: "7d",
        title: "Arrival at The Gwydion",
        text: `<p>As they made their way down, what Connor was fairly sure was the main spinal corridor of the Gwydion, they continued to encountered the strange patterns of damage that 
        appeared eerily similar to that you would expect after the close quarters combat of a boarding action although someone apparently having a distinct dislike of illumination with many of the overhead lights appearing to have been intentionally shot out. 
        Despite the obvious signs of conflict however they had not found a single body, destroyed bot, or even so much as a blood stain.</p>`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
            alt: "Gwydion Corridor With Debris",
            scaleType: "square",
        },
        nextPage: "8a",
        time: 0,
    },
    {
        id: "8a",
        title: "Arrival at The Gwydion",
        text: `<p>“Looks like a hell of a fight” Commented Onaje</p>
        <p>“Hmmm but where is the blood? The bodies?”</p>
        <p>“Maybe the crew cleaned it up?” suggested Hyun-Ae</p>`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
            alt: "Gwydion Corridor With Debris",
            scaleType: "square",
        },
        nextPage: "8b",
        time: 0,
    },
    {
        id: "8b",
        title: "Arrival at The Gwydion",
        text: `<p>“Negative, there are still shell cases on the floor, these too would have been cleaned up if the crew had removed any stains caused by the bodily fluids of fallen comrades,” said Threes helpfully.</p>`,
        dialog: [
            {
                id: "O1",
                text: "“Quiet Threes.”",
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
            alt: "Gwydion Corridor with Debris",
            scaleType: "square",
        },
        nextPage: "8c",
        time: 0,
    },
    {
        id: "8c",
        title: "Arrival at The Gwydion",
        text: `<p>“Compliance”</p>`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
            alt: "Gwydion Corridor With Debris",
            scaleType: "square",
        },
        nextPage: "9a",
        time: 0,
    },
    {
        id: "8d",
        title: "Arrival at The Gwydion",
        text: `<p>“Of course, I would not have spoken if it was likely to be an incorrect assessment”</p>`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
            alt: "Gwydion Corridor With Debris",
            scaleType: "square",
        },
        nextPage: "9a",
        time: 0,
    },
    {
        id: "9a",
        title: "Arrival at The Gwydion",
        text: `<p>As they continued down the Gwydion's long central corridor passing by rooms and branching corridors in similar states of devastation. They reached what appeared to be the sailors' mess. 
        Moving inside Connor could see even more of the apparent wanton destruction. Flipped tables and chairs, and a row of destroyed appliance, all of which seem to have been systematically shot.</p>
        <p>“Were those autonukers executed?” asked Hyun-Ae</p>
        <p>“That is what it looks like” Connor replied confused “I know i've wanted to shoot one once or twice but this is another level...”</p>
        <p>“If we can get onto the bridge we can access Gwydion and hopefully be able to look through his logs and security footage, that should shine a light on what has happened here.” said Onaje from the position he had taken up covering the door.</p>
        <p>“Ok enough site seeing, let’s keep moving” ordered Connor gesturing at Threes and the other bots to follow</p>
`,
        image: {
            imageRef: `images/GwydionMessHall.jpeg`,
            alt: "Gwydion Mess Hall",
            scaleType: "square",
        },
        nextPage: "10a",
        time: 0,
    },
    {
        id: "10a",
        title: "Gwydion",
        text: `<p>After what seemed like an eternity hiking down the more than kilometer long corridor, the steel Iris of the bridge lay sealed shut infront of the small party. 
        The signs of fighting were evident here too, along with a number of dents and scorch marks across the steel bridge bulkhead.</p>
        <p>“Captain, what if it was a mutiny?" suggested Onaje, during his time as a corpo Securities officer he had been a part of putting down one or two such mutinies before.</p> 
        <p>"Perhaps they ran low on food and began fighting over it?" he continued "Might explain the mess we found at the cafeteria… and the lack of bodies.”</p>
        <p>“Would they really bother to clean up the blood?" chimmed in Hyun-Ae</p>
        <p>"I doubt cannibals would be the most concerned about the state of the decor. Not that i've met any." she addmitted.</p>
<p>“How are you going with that door Threes?” Connor asked
<p>“It will be open in approximately 5 seconds”</p>
<p>Sure enough a few seconds later with final chirp from the door control pad the steel iris of the bridge retracted into the door frame. 
Inside looked pristine, not a chair out of place, utterly at odds with the scenes the group had passed by on the way here</p>
<p>'Almost too pristine' Connor thought. </p>
`,
        image: {
            imageRef: `images/GwydionClosedDoorway.jpeg`,
            alt: "Gwydion Closed Doorway",
            scaleType: "square",
        },
        nextPage: "10b",
        time: 0,
        audio: "./audio/sfx/openingSlidingDoor.wav",
    },
    {
        id: "10b",
        title: "Gwydion",
        text: `<p>“Hyun-Ae?”</p>
<p>“Yes Captain?” </p>
<p>Connor had decided that Hyun could do with a SAR bot as well as an ENG variant. Considering the unknown fate of the crew, and what may have caused it. He would feel much better with the more heavily armed and combat programed Search and Rescue variant covering her back.
A decision she seemed evidently relieved by. Not that she would have ever admitted it.</p>
<p>“See if you can access Gwydion's logs, keep a SAR, and an ENG bot with you, we will take Threes and the other two and see if we can’t find the crew. Dead or alive they must be somewhere”</p>
<p>“Yes Captain!”</p>
<p>As Connor and the others turned to leave, Hyun-Ae had already begun interfacing with Gwydion's direct access ports.</p>
<p>“Let’s see what you have to say” she mumbled to herself as she plugged her data pad into one of the ports.</p>
`,
        image: {
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "Gwydion bridge",
            scaleType: "square",
        },
        nextPage: "10c",
        time: 0,
    },
    {
        id: "10c",
        title: "Gwydion",
        text: `<p>She was glad that Connor had left the two bots with her, this ship was seriously creeping her out.
        It had crossed her mind they might be dealing with a rogue AI. Even though such a thing hadn’t happened since the Mercury disaster nearly 50 years previous it was still a possibility. An a kernal of worry wouldn't stop niggling at the back of her brain.
        Especially since she was trying to wake Gwydion up. Which would hardly end well for her if he really had gone rogue.</p>
        <p> Examining the interface, there did not appear to be any damage to it or the AI’s vessel at all. It was simply dormant.</p>
        <p>She would have to be careful she decided. Turning Gwydion on was dangerous enough even if he hadn't gone rogue as she was not a Conglomerate Navy engineer. As such he may well be hostile to her accessing his systems despite the
        Conglomerate providing a limited access authorisation code for her intended to assure Gwydion she was allowed to be here.</p>
`,
        image: {
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "Gwydion bridge",
            scaleType: "square",
        },
        nextPage: "11a",
        time: 0,
    },
    {
        id: "11a",
        title: "Gwydion",
        text: `<p>"Key in access code..."droned the monotonous voice of the interface speaker.</p>`,
        image: {
            imageRef: `images/ControlPanel2.jpeg`,
            alt: "Control panel 2",
            scaleType: "square",
        },
        quickTime: {
            instructions: "1 1 1 A 4 3 F 9 B Q",
            successCode: "111a43f9bq",
            passPage: "11b",
            failPage: "failScreen",
            failPageMessage: `<p>"Incorrect access key" the speak droned "session terminated... reinitialize session to proceed..."</p>`,
            failPageCheckpoint: "11a",
        },
        nextPage: "failScreen",
        time: 30,
        audio: "./audio/sfx/keypadBeep.wav",
    },
    {
        id: "11b",
        title: "Gwydion",
        text: `<p>“Gwydion Awakening…” Intoned a synthesized male voice.</p>
<p>“Who are you?” The voice asked, an edge of anger seeping into it's tone.</p>
<p>“Hyun-Ae, chief engineer of the salvage and rescue ship Rhiannon from Titan. Dispatched by the grand admiralty of the Martian Confederated Colonies upon request from your masters at the Conglomerate Naval Board.”</p>
<p>“Why would the Board abide the presence of an Out-Sys Martian on the Gwydion?” the voice replied, it's use of the slightly pejorative reference to her making a living outside of the inner 3 planets betraying it's contempt of the notion.</p>
<p>“You have been lost adrift near neptune for some months" She replied evenly knowing rising to the AI's insults were only liable to get her killed. "We were the closest available vessel. 
There is a Conglomerate Salvage and Rescue flotilla approximately two months behind us. We were sent here to assess the situation and provide what aid we could whilst we awaited the arrival of your countrymen”</p>
<p>“I see…” the edge in his tone reducing as he ratified the veracity of the code she had provided with what she had said.</p>
<p>“What happened to your crew?” asked Hyun-Ae trying to move the conversation forward to more useful, and less dangerous ground. “We have not found anyone on board or any signs of life at all.”</p>
<p>“They... I-I…I don’t remember” The confusion evident in the machine voice almost as terrifying as the anger that it had replaced.</p>
<p>“You don’t remember?" She asked with more incredulity than she had intended, but plowed on headless. "How do you not remember? Check your security logs.”</p>
<p>“I cannot access my security logs." the machine replied the anger rising agin in it's electric tone "When I attempt to access them I only generate not found exceptions.”</p>
<p>“Ok," she replied thinking "are we able to access your command logs to see if you have had any malfunctions or malicious commands entered?”</p>
`,
        image: {
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "Gwydion bridge",
            scaleType: "square",
        },
        nextPage: "11c",
        time: 0,
    },
    {
        id: "11c",
        title: "Gwydion",
        text: `<p>“Are you suggesting that I have attacked my crew?!” Gwyidion boomed through the bridge speakers. Loud enough to set Hyun-Ae's ears ringing.</p>
<p>“No," She confirmed hurredly "However you were dormant and everyone is missing.
 There are signs of fighting prevalent all throughout the ship. Perhaps you were attacked and someone has removed your memory of the event? Maybe someone has hidden malware in your system?”</p>
<p>“MY SECURITY PROTOCOLS ARE….” the booming voice began to reply</p>
<p>If they were so special then we would be able to see your security logs, now open the command log” Hyun-Ae replied beginning to become sick of the AI's contemptuous demeanor.</p>
<p>“Compliance” he replied with as much of a sneer as must be possible through his machine vocalization.</p>
<p>A stream of data passed over the screen in front of Hyun-Ae. Streaming by so fast she was barely able to make sense of it in time. Even with the enhanced processing of her intra-crain augmentations.”</p>
<p>“No, suspicious command logs found…” Gwydion stated, the 'told you so' evident in his tone.</p>
<p>“Hmmm i didn’t see anything wrong either” Hyun-Ae agreed ignoring the implied insult. “Ok I will see what I can do about accessing those security logs, we really need to see what has happened here”</p>
<p>“I agree” Gwydion replied with surprising cooperation "I do not like that I cannot access my logs. It should not be possible."</p>
`,
        image: {
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "Gwydion bridge",
            scaleType: "square",
        },
        nextPage: "12a",
        time: 0,
    },
    {
        id: "12a",
        title: "Searching the Ship",
        text: `<p>Connor and his small party, had been making their way towards the Gwydion's engineering deck. A place as likely as any Connor thought to get some answers to the increasingly disturbing silence of the massive ship.</p>
<p>As they made their way deeper into the ship the signs of combat began to reduce. Unlike the wanton destuction they had seen closer to the bridge this appeared almost deliberate, lights taken out with single shots, intercom speakers torn from their housing</p>
<p>"What the fuck happened here?" He heard Onaje mumble under his breath.</p>
<p>Connor just nodded. 'Whatever it was' he thought 'it wasn't good'</p>
`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
            alt: "Gwydion Corridor With Debris",
            scaleType: "square",
        },
        nextPage: "12b",
        time: 0,
    },
    {
        id: "12b",
        title: "Searching the Ship",
        text: `<p>“Did you hear that?” asked Onaje</p>
<p>“I hear only background noise and static from faulty and damaged speakers” replied Threes in his typical monotonous drone,</p>
<p>“I didn’t hear anything unusual” Connor replied having heard nothing himself but unwilling to dismiss Onaje's years of experience out of hand “what did you hear?”</p>
<p>“The speakers... doesn't that sound like a pattern to you?”</p>
<p> Connor listened, the drone of the ships devastated internal systems rising and falling as it was punctuated by the fizz pop of shorting wires. Connor listened for what must have been thirty seconds trying to decern what Onaje had heard but was unable to pick any patter out of the noise.</p>
<p>“I can't hear it, just sounds like shorting wires and noise to me.” he said finally "Let me know if you hear it again"</p>
<p> "Yes boss..." Onaje replied clearly distracted by his efforts to pick up the elusive pattern as they moved out.</p>
<p>“Engineering should be just through there” said Connor as they passed through a T-junction lit by a single flickering light</p>
<p>“A4452, open that door and get us in” he said directing one of the ENG bots of the party to the sealed door at the end of the corridor.</p>
<p>“Compliance” came the bots emotionless acknowledgment as it advance it's steel feet ringing loudly on the deck plate</p>
`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
            alt: "Gwydion Corridor With Debris",
            scaleType: "square",
        },
        nextPage: "12c",
        time: 0,
        audio: "./audio/sfx/noise.wav",
    },
    {
        id: "12c",
        title: "Searching the Ship",
        text: `<p>It took some time for the BOT to get the door open. As Connor leaned against the bulkhead he found himself staring at the flickering light in the center of the junction.</p>
        <p>BLINK... BLINK BLINK, BLINK... BLINK... BLINK BLINK, BLINK</p>
<p>“Hey” he said punching Onaje's arm and gesturing “The light”</p>
<p>Onaje had been keeping a steady watch down the corridor and looked up at the gesture "Hmmm, I see it too" he said after a moment</p>
<p>“Threes can you tell?” Onaje asked</p>
<p>“I detect a consistent pattern occurring over a 12.32114 second period, I believe this is the result of a rotating power fluctuation to the light. Likley caused by the damage we have observed to the other internal systems" The BOT replied at length</p>
<p>“Hmmmm, I guess" he replied clearly not satisfied with the answer</p>
<p>“Come on!” Connor chuckled giving Onaje another punch in the arm "A veteran like you jumping at a few dim corridors! Geeze don't make the Corpo PMC's like the used to hey"</p>
<p>“Why do you think I quit to come skulk around with you in the middle of nowhere” the veteran replied with a forced smile</p>
<p>despite his attempt to make light of the situation Connor couldn't shake the feeling of something just out of sight watching them. 'Fucking hell' he thought to himself 'I'm as jumpy as a fresh recruit!' </p>
<p>His revery was interupted by the hiss scrape of the Door as the BOT finally managed to override the locking mechanism.</p>
<p>“Lets go” ordered Connor sloting in at the rear of the party stepping through the doorway.</p>
`,
        image: {
            imageRef: `images/GwydionClosedDoorway.jpeg`,
            alt: "Gwydion Closed Doorway",
            scaleType: "square",
        },
        nextPage: "12d",
        time: 0,
    },
    {
        id: "12d",
        title: "Searching the Ship",
        text: `<p>SCREEEEEEECH</p>
        <p>The sound of protesting metal rails was deafening and Connor looked up to see the bulkhead door hurtling down towards him</p>
`,
        image: {
            imageRef: `images/MovingThroughDoorway1.jpeg`,
            alt: "Moving through doorway 1",
            scaleType: "square",
        },
        nextPage: "12e",
        time: 0,
    },
    {
        id: "12e",
        title: "Searching the Ship",
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
            failPageMessage: `<p>Unable to get out of the way fast enough Connor was caught squarely in center by the door, being nearly cut in half by the force of the impact.
                 His blood an viscera spraying the walls on both sides of the now shut door before each side of him feel lifeless to the deck.</p>`,
            failPageCheckpoint: "12d",
        },
        nextPage: "failScreen",
        time: 3,
        audio: "audio/sfx/metalScreech.wav",
    },
    {
        id: "12f",
        title: "Searching the Ship",
        text: `<p>Connor dived through the door narrowly avoiding being cut in half as the bulk head slamed closed with a reverberating bang that echoed through the cavernous engineering bay.</p>
<p>“Fuck that was close!” Connor muttered breathlessly as threes helped him to his feet</p>
`,
        image: {
            imageRef: `images/GwydionClosedDoorway.jpeg`,
            alt: "Gwydion Closed Doorway",
            scaleType: "square",
        },
        nextPage: "13a",
        time: 0,
        audio: "audio/sfx/bulkheadDoorSlam.wav",
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
            alt: "Gwydion Closed Doorway",
            scaleType: "square",
        },
        nextPage: "13c",
        time: 0,
    },
    {
        id: "13b",
        title: "Searching the Ship",
        text: `<p>“Affirmative”</p>
`,
        image: {
            imageRef: `images/GwydionClosedDoorway.jpeg`,
            alt: "Gwydion Closed Doorway",
            scaleType: "square",
        },
        nextPage: "13c",
        time: 0,
    },
    {
        id: "13c",
        title: "Searching the Ship",
        text: `<p>“Ok lets move, keep your eyes peeled for survivors” Ordered Connor releasing Threes' assisting grasp and picking up his weapon from where it lay.</p>
<p>The small party spread out, moving down the corridors made by the stacks of crates and machinery nearly three times Connors height, their footsteps echoing softly in the quiet expanse.</p>
<p>The bay was massive, easily as large as the hangar within which they had made ingress to the Gwydion but with a lower ceiling. Not needing to allow for the additional head height required for shuttles and other smaller craft that the hangar was designed to support.</p>
`,
        image: {
            imageRef: `images/GwydionEngineering.jpeg`,
            alt: "Gwydion Engineering",
            scaleType: "square",
        },
        nextPage: "13d",
        time: 0,
    },
    {
        id: "13d",
        title: "Searching the Ship",
        text: `<p>“It's too quiet” came Onaje's voice through the com bead, a hint of disquiet in his tone that Connor was unused to hearing from the grizzled veteran “I feel like I am being watched”</p>`,
        dialog: [
            {
                id: "O1",
                text: "<p>“Jumping at a few shadows are we?”</p>",
                storyPoints: 0,
                nextPage: "13e",
            },
            {
                id: "O2",
                text: "<p>“Me too, I feel like if I were to turn around quickly I'd catch something scuttling back into the shadows.”</p>",
                storyPoints: 5,
                nextPage: "13f",
            },
        ],
        image: {
            imageRef: `images/GwydionEngineering.jpeg`,
            alt: "Gwydion Engineering",
            scaleType: "square",
        },
        nextPage: "13e",
        time: 0,
    },

    {
        id: "13e",
        title: "Searching the Ship",
        text: `<p>“Hmph” Onaje grunted in response clearly miffed about being brushed off.</p>
`,
        image: {
            imageRef: `images/GwydionEngineering.jpeg`,
            alt: "Gwydion Engineering",
            scaleType: "square",
        },
        nextPage: "14a",
        time: 0,
    },
    {
        id: "13f",
        title: "Searching the Ship",
        text: `<p>“Almost wish you had said it was just me.” he said his voice low</p>
`,
        image: {
            imageRef: `images/GwydionEngineering.jpeg`,
            alt: "Gwydion Engineering",
            scaleType: "square",
        },
        nextPage: "14a",
        time: 0,
    },
    {
        id: "14a",
        title: "Searching the Ship",
        text: `<p>They were approaching the rear of the engineering bay, where the massive external doors loomed. Connor had seen the like before on many larger Salvage and mining vessels.
         The doors could make a direct seal with an orbital dock allowing for rapid and easy transfer of goods and materiel from the dock or another ship directly to the Gwydion. 
         Connor had also seen salvage vessels depressurize an entire compartment before opening the large doors in order to speed up a salvage effort.
         Removing  time consuming re-pressurization process each time a reclaimed section was to be brought aboard.
         
<p>“Woohoo” , Connor whistled to himself as he marveled at the scale of the doors and subsequent bay in front of him. They exceeded even those on the largest of salvage ships and he was briefly taken aback by the utterly immense scale of the vessel.
which only made it's apparent lifelessness even more disconcerting.</p>
<p>Now they had passed out of the rows of containers and machinery Connor looked around to check on the progress of his team. Seeing Onaje examining a bank of what looked like hundreds of bot cradles.</p>
<p>“Just a few.” Connor said as he made his way over.</p>
<p>“Where are they all?” Onaje replied his eyes fixed on the cradle in front of him</p>
<p>Confused, Connor looked in one next to himself. To his surprise it was empty. The scratched an worn perspex inspection window showed an empty cradle where a bot should have been. Moving to the next one he saw it was empty too.</p>
<p>“What the fuck? How does a crew of this size disappear along with all its bots?” Connor said his concerns rushing back as he struggled with the impossibility of the situation. 
"Thousands of crew and bots and we haven't seen so much as a mouse scuttling around the corridors." </p>
<p>"I'm not liking this at all boss" Onaje said his weapon raised it's under barrel flashlight scanning the silent chamber.</p>

`,
        image: {
            imageRef: `images/GwydionEngineering.jpeg`,
            alt: "Gwydion Engineering",
            scaleType: "square",
        },
        nextPage: "14b",
        time: 0,
    },
    {
        id: "14b",
        title: "Searching the Ship",
        text: `<p>“BAAAAM BAAAAM BAAAAM!”</p>
`,
        image: {
            imageRef: `images/GwydionEngineering.jpeg`,
            alt: "Gwydion Engineering",
            scaleType: "square",
        },
        nextPage: "14c",
        time: 0,
        audio: "./audio/sfx/alarm.mp3",
    },
    {
        id: "14c",
        title: "Searching the Ship",
        text: `<p>The silence was shattered by the blaring of an alarm as red waring lights began flashing all across the engineering bay.</p>
<p>“Warning Outer door opening.” Warned an incongruously calm electronic as the main bay doors began to open.</p>
<p>Connor Onaje, and all the bots were ripped off their feet as the atmosphere rushed out through the doors like a prisoner sprung from jail.</p>
<p>One of the ENG BOTs nearest the opening doors was sucked out into space. It's cry of alarm drowned out by the roar of the escaping atmosphere.</p>
<p>Connor too found himself being inexorably dragged out of the bay as he desperately scrabbled for a hand hold. Just as he was being dragged out into the void his hand caught on something.
 He had managed to cling onto one of the control panels that the the ships engineers or ENG bots would use to work the large doors under more normal circumstances</p>
`,
        image: {
            imageRef: `images/BotEjectedIntoSpace.jpeg`,
            alt: "Bot Ejected Into Space",
            scaleType: "square",
        },
        nextPage: "14d",
        time: 0,
        audio: "./audio/sfx/decompression.wav",
    },
    {
        id: "14d",
        title: "Searching the Ship",
        text: `<p>Connor desperately began punching in the override code one handed as he clung on for dear life</p>`,
        image: {
            imageRef: `images/ControlPanel1.jpeg`,
            alt: "Control panel 1",
            scaleType: "square",
        },
        quickTime: {
            instructions: "1 1 8 7 6 5",
            successCode: "118765",
            passPage: "14e",
            failPage: "failScreen",
            failPageMessage: `
            <p>Clumsy from the disorientating de-compression Connor punched in the wrong code and before he could try again is fingers slipped and he was torn out of the Gwydion like a hapless bacteria expelled by a giants sneeze.</p>
             <p>After what felt like an eternity but couldn't have been more than a couple of minutes the small 0g thrusters in his suit were able to arrest his headlong tumble in the void.</p>
             <p>Looking back towards the open doors he could see he was already nearly a kilometer away and despite no longer tumbling he was still moving further away. The small thrusters of his suit struggling to overcome the inertia of his rapid ejection from the ship</p>
<p>“It’s ok, Rhiannon will be able to come out and get us, just need to keep calm and we’ll be fine” he said forcing himself to breath to calm himself down and conserve the limited oxygen supply of his suit</p>
<p>Despite his efforts however his breathing still seemed shallow. No matter how much he tried he couldn't breath any deeper. glancing down he saw a small crack in the bottom corner of his visor, the air freezing into vapor as it vented into the void.</p>
<p>“Suit Oxygen low” came the synthesized voice of his suits monitoring systems.</p>
<p>'Fuck' he thought the world fading into grey.</p>
`,
            failPageCheckpoint: "14c",
        },
        nextPage: "failScreen",
        time: 10,
        audio: "./audio/sfx/keypadBeep.wav",
    },
    {
        id: "14e",
        title: "Searching the Ship",
        text: `<p>Able to punch in the code the doors began closing the grind of their hinges barley audible through the now thin atmosphere of the bay. Slowly the gale pulling him towards the door died away as the doors came together and he was able to regain his footing.</p>`,
        image: {
            imageRef: `images/GwydionRedRoom.jpeg`,
            alt: "Gwydion Red Room",
            scaleType: "square",
        },
        nextPage: "15a",
        time: 0,
    },
    {
        id: "15a",
        title: "Searching the Ship",
        text: `<p>“Fuck me! That was too close” coughed Connor breathing as the air cyclers struggled to re-pressurize the vast chamber.</p>
`,
        image: {
            imageRef: `images/GwydionRedRoom.jpeg`,
            alt: "Gwydion Red Room",
            scaleType: "square",
        },
        nextPage: "15b",
        time: 0,
    },
    {
        id: "15b",
        title: "Searching the Ship",
        text: `<p>“It seems the ship has an adverse reaction to our presence Captain.” said Threes completely unbothered by the thin atmosphere.</p>`,
        dialog: [
            {
                id: "O1",
                text: "<p>“Shut up Threes” Connor said scowling as he coughed, his lungs burning with the effort of breathing the all too slowly thickening atmosphere</p>",
                storyPoints: 0,
                nextPage: "15c",
            },
            {
                id: "O2",
                text: "<p>“Was that a joke?” Connor said smiling despite the pain in his lungs</p>",
                storyPoints: 5,
                nextPage: "15d",
            },
        ],
        image: {
            imageRef: `images/GwydionRedRoom.jpeg`,
            alt: "Gwydion Red Room",
            scaleType: "square",
        },
        nextPage: "15c",
        time: 0,
    },
    {
        id: "15c",
        title: "Searching the Ship",
        text: `<p>“Compliance”</p>
`,
        image: {
            imageRef: `images/GwydionRedRoom.jpeg`,
            alt: "Gwydion Red Room",
            scaleType: "square",
        },
        nextPage: "15e",
        time: 0,
    },
    {
        id: "15d",
        title: "Searching the Shipr",
        text: `<p>“My observation regarding the repeated imperilment of your life and our mission does not seem humorous to me captain”</p>
        <p>"Neither." Connor replied as he finally was able to catch his breath "Your concern is appreciated Threes."`,
        image: {
            imageRef: `images/GwydionRedRoom.jpeg`,
            alt: "Gwydion Red Room",
            scaleType: "square",
        },
        nextPage: "15e",
        time: 0,
    },
    {
        id: "15e",
        title: "Searching the Ship",
        text: `<p>"I think we have searched this particular bay quite enough don't you think Ona?" Connor asked as he moved towards one of the small bulkhead doors leading out of the bay</p>
<p>“Not going to hear a complaint from me.” replied Onaje falling in beside him. "Med bay is only a short way further along this passage."</p>
<p>“Ok, hopefully we can find a clue to what happened to the crew there. Maybe the docs logs will show something.” he said as the remaining ENG bot worked to override door.</p>

`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris.jpeg`,
            alt: "Gwydion Corridor With Debris",
            scaleType: "square",
        },
        nextPage: "16a",
        time: 0,
    },
    {
        id: "16a",
        title: "The Survivor",
        text: `<p>The medical bay had been ransacked. Broken pill bottles and damaged machinery lay strewn around the small cluster of rooms as if a mini tornado had appeared and decided to try its hand at interior design.</p>
        <p>“Cheap, bastards” Onaje murmured under his breath as he entered the room behind Connor and took in the pitiful collection of rooms and alcoves that made up the Gwydion's medical bay.</p>
        <p>"I see the Conglomerate has taken to workers compensation with their usual gusto" Connor said sharing his friends sentiment. Being an ex-Cong himself and a field surgeon at that, Onaje knew all to well the the Conglomerates utter disdain
        (despite what the propo films might suggest) for anything that couldn't make them a quick buck. Meaning that despite the Gwydion being a ship of thousands it possessed a grand total of what appeared to be 6 medical beds and a dental chair.
         Which Connor thought was oddly generous of them.`,
        image: {
            imageRef: `images/GwydionMedicalBay.jpg`,
            alt: "Gwydion Medical Bay",
            scaleType: "square",
        },
        nextPage: "16b",
        time: 0,
    },
    {
        id: "16b",
        title: "The Survivor",
        text: `<p>Connor knew how seeing the dismal facilities of a Conglomerate vessel would bring back memories Onaje tried his damndest to force back down but he could tell his friend was struggling to hold his temper, his fist tightening and loosening around the pistol grip of his slugger.
        this would upset Onaje. deciding it was best to get his friends mind off the current state of the med bay before he started adding large calibre holes to the rooms decor, he spoke up.</p>
        <p>"Onaje, you have a look at the patient rooms, Three's check to see if you can't rip anything off the medical terminal, I'll check out the store room. Other BOTs keep an eye on the corridor"</p>
        <p>"Affirmative" came the chorused response of the BOTs and Threes, as they went about their orders, Onaje nodding in silent acknowledgment as he moved towards the nearest patient room.</p>`,
        image: {
            imageRef: `images/GwydionMedicalBay.jpg`,
            alt: "Gwydion medical bay",
            scaleType: "square",
        },
        nextPage: "16c",
        time: 0,
    },
    {
        id: "16c",
        title: "The Survivor",
        text: `<p>The store room was the biggest of the rooms in the cramped medical bay and even then would have struggled to have sufficient supplies for a crew half the Gwydion's size. This too had been ransacked, with boxes and bags torn open and much of what they
        held spilt onto the floor. So much so that walking on it felt like walking on a floor of marbles. Connors sliding and rolling as the spilt pills and canisters rolled under his tread.</p>
`,
        image: {
            imageRef: `images/GwydionMedicalBay.jpg`,
            alt: "Gwydion medical bay",
            scaleType: "square",
        },
        nextPage: "16d",
        time: 0,
    },
    {
        id: "16d",
        title: "The Survivor",
        text: `<p>'What happened here' He thought, If it had been a mutiny he would have expected all of the important medical items to have been hoarded and defended by whoever managed to get their hands on them. he would hardly expect them to just discard
        such important supplies to the floor for the sake of wonton destruction. Even with the Conglomerates general lack of care for such "luxuries".</p>
        <p>'No' he thought, 'That wasn't it'</p>
        <p> The shelves had been stripped nearly bear, their contents dashed to the floor. Some of the shelving units themselves, less securely fastened to the wall than their neighbors had be torn from their fixings as well</p>
        <p>An icy finger of dread began to drip down his spine as this final observation occurred to him. Had the Venutions been here? Connor knew few things that could fit in the confined storage space that could have snapped quarter inch thick bolts in half, but a Venution
        breacher was most certainly one of them. Connor had seen one the over muscled hulks genetically engineered to be the Vanguard of Venution assault actions tear a hapless pirate limb from limb in the confined space of the modified ore hauler they had been using to prey on astroid miners in the outer system,
        and at the time had just been thankful that they were on his side.</p>
        <p>Venus hadn't responded to the Conglomerates request for assistance. which was no real surprise to anyone. The Conglomerate and the Venution high council having been at each others throats for nearly a century. 
        Their diametrically opposed philosophies butting heads and leading to bloodshed on more than one occasion. However it just didn't seem right. Whilst he was sure Venus was none too happy about the conglomerates successfully developing FTL travel before them he doubted
        they would make such a brazen act that would surely and irreversibly lead to a war the Venutions could ill afford.</p>
        <p>Unable to shake the thought that he was missing something he continued to search the small room.</p>`,
        image: {
            imageRef: `images/GwydionMedicalSupplyRoom.jpeg`,
            alt: "Gwydion medical Supply room",
            scaleType: "square",
        },
        nextPage: "16e",
        time: 0,
    },
    {
        id: "16e",
        title: "The Survivor",
        text: `<p>Just as he was about to leave convinced he wouldn't find anything of use in here. He heard something. A sound like a shallow breath, so slight he thought he might have imagined it.</p>
        <p> again he heard it, more clearly this time like a shaky breath or a stifled sob </p>
<p>Again the shaky breathing came, like someone trying to stifle a sob. He definitely heard it this time.</p>
<p>“Is someone there?’ He said knowing his voice would transmit across the com feed and raising his weapon, searching for the source of the noise.</p>
<p>As if in response he heard a soft whimper but it was enough to get a sense of it's direction. A small alcove in the store room stacked with still standing shelves on all sides and so hidden in shadow by the failing light of the room he had almost missed it.</p>
<p>Moving towards it he saw a small ventilation grate, just large enough for a someone about Hyun-Ae's size to squeeze into. lurking just above ground level almost completely hidden by one of the shelves.</p>
<p>“Hello?” he said moving towards the grate, weapon raised an wary. He heard something moving in there now, a faint scrape and squeak like clammy skin rubbing against metal as something squirmed in it's now discovered hiding place.</p>
`,
        image: {
            imageRef: `images/GwydionMedicalSupplyRoom.jpeg`,
            alt: "Gwydion medical supply room",
            scaleType: "square",
        },
        nextPage: "17a",
        time: 0,
        audio: "./audio/sfx/crying.wav",
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
<p>“Gone. Taken. Tricked. Dead." Came the girl's reply, he could begin to make out her features as his eyes adjusted to the gloom of the vent. She looked young, maybe in her 20s. Her face was streaked with grime and what looked to be blood leaking from a gash above her eye.</p> 
`,
        image: {
            imageRef: `images/GwydionMedicalSupplyRoom.jpeg`,
            alt: "Gwydion medical supply room",
            scaleType: "square",
        },
        nextPage: "17b",
        time: 0,
        audio: "./audio/sfx/crying.wav",
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
            alt: "Gwydion medical supply room",
            scaleType: "square",
        },
        nextPage: "17c",
        time: 0,
    },
    {
        id: "17c",
        title: "The Survivor",
        text: `<p>“A survivor.” said Threes “This is an improvement over the initial failure of our stated objectives”</p>
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
            alt: "Gwydion medical bay",
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
            alt: "control panel for bridge",
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
            alt: "CCTV Footage",
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
            alt: "Gwydion bridge",
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
            alt: "Square Open Bulkhead door",
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
            alt: "square open bulkhead door",
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
            imageRef: `images/MovingThroughDoorway2.jpeg`,
            alt: "moving through doorway 2",
            scaleType: "square",
        },
        nextPage: "20a",
        time: 0,
    },
    {
        id: "20a",
        title: "Revelation",
        text: `<p>The door came slamming down towards her</p>`,
        image: {
            imageRef: `images/movingThroughDoorway2.jpeg`,
            alt: "moving through doorway 2",
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
        audio: "./metalScreech.wav",
    },
    {
        id: "20b",
        title: "Revelation",
        text: `<p>“Thanks” she said looking at the SAR bot.</p>
<p>“Affirmative” it replied deadpan.</p>
`,
        image: {
            imageRef: `images/SquareClosedBulkheadDoor.jpeg`,
            alt: "square closed bulkhead door",
            scaleType: "square",
        },
        nextPage: "20c",
        time: 0,
        audio: "./bulkheadDoorSlam.wav",
    },
    {
        id: "20c",
        title: "Revelation",
        text: `<p>She went to the console again and checking the logs again saw the same command in the console with still no signature for where the command originated from.</p>
<p>“E1174, I can’t open the door, it appears the impact bent it shut, are you able to find another way to the bridge?”</p>
<p>“Compliance” came the bots reply through the comms system”.</p>
<p>“See you on the bridge then”</p>
<p>The bot would be unlikely to respond to such an obvious statement but it made her feel safer when she treated them more like people, and she knew over time they would develop more complex personalities like Threes had. So she had always thought it was the smart idea to make friends early.</p>
`,
        image: {
            imageRef: `images/ControlPanelLarge.jpeg`,
            alt: "Control Panel Large",
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
            alt: "Gwydion Corridor",
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
            alt: "Gwydion Corridor With Debris 2",
            scaleType: "square",
        },
        nextPage: "21b",
        time: 0,
    },
    {
        id: "21b",
        title: "Revelation",
        text: `<p>Connor was concerned about Anna’s reaction to the bots. Making him think of those empty bot cradles in the engineering deck. Had the bots somehow gone rogue? Surely the crew could have overpowered them though, most were not combat programmed bots with only minimal ship defense learning and should have been dealt with easily defeated by the conglomerate marines stationed on such a ship.</p>`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris2.jpeg`,
            alt: "Gwydion Corridor With Debris",
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
            alt: "Gwydion Long Wide Corridor",
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
            alt: "Gwydion Long Wide Corridor",
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
<p>Halfway down the hallway they approached a four way junction. As they crept closer Anna began to whimper softly, clearly terrified of what may lay in wait.</p>
`,
        image: {
            imageRef: `images/GwydionLongWideCorridor.jpeg`,
            alt: "Gwydion Long Wide Corridor",
            scaleType: "square",
        },
        nextPage: "22b",
        time: 0,
    },
    {
        id: "22b",
        title: "Revelation",
        text: `<p>“Onaje, you take left, I’ll take right, Three’s you keep eye’s front”</p>
<p>“Copy” </p>
<p>“Compliance”</p>
<p>“Three… Two… One… GO!” </p>
<p>Onaje and Connor pushed rapidly around the corners as Three kept his weapon aiming down the dim corridor.</p>
<p>Connor saw nothing, just another dim corridor, in the same state of damage and disrepair as the rest..</p>
`,
        image: {
            imageRef: `images/GwydionLongWideCorridor.jpeg`,
            alt: "Gwydion Long Wide Corridor",
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
            alt: "Gwydion Ship Defense Robots",
            scaleType: "square",
        },
        nextPage: "23a",
        time: 0,
    },
    {
        id: "23a",
        title: "Revelation",
        text: `<p>One of the ENG bots taking up the rear had been obliterated, pieces of its shattered chassis scattered across the deck as its headless neck spurted oil.</p>
<p>The entire corridor was illuminated now by the strobing light of muzzle flashes as the two remaining SAR bots were returning fire down the hall behind them. One was firing one handed as its having been mangled by another bullet as it tried to engage the three Gwydion bots advancing towards us.</p>
`,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "Gwydion Ship Defense Robots",
            scaleType: "square",
        },
        nextPage: "23b",
        time: 0,
    },
    {
        id: "23b",
        title: "Revelation",
        text: `<p>Onaje had taken cover in the perpendicular corridor and was peeking around the corner firing into their oncoming attackers. Taking one of Gwydion's bots square in the chest. It collapsed, spasming as its internal circuitry sputtered and sparked in its death throes.</p>`,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "Gwydion Ship Defense Robots",
            scaleType: "square",
        },
        nextPage: "23c",
        time: 0,
    },
    {
        id: "23c",
        title: "Revelation",
        text: `<p>Connor had managed to drag Anna around the opposite corner with him and was also returning fire. Her prior whimpering had stopped now she trembled eye’s wide and alert.</p>
<p>Connor saw another of the SAR bots get hit. Its head mulched by a sustained burst of fire. The SAR bot was throw forward clattering into the wall it was hiding behind.</p>
`,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "Gwydion Ship Defense Robots",
            scaleType: "square",
        },
        nextPage: "23d",
        time: 0,
    },
    {
        id: "23d",
        title: "Revelation",
        text: `<p>“There are more in front Captain” Vocalised Three’s taking cover and returning fire at the two new Gwydion bots making their towards us from the direction of the hangar bay.</p> 
        <p>Both the Rhiannon's SAR bots were down now, devastated by the pincer fire hemming the small group in from both sides.</p>
        `,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "Gwydion Ship Defense Robots",
            scaleType: "square",
        },
        nextPage: "23e",
        time: 0,
    },
    {
        id: "23e",
        title: "Revelation",
        text: `<p>“I am being attacked!” Came the vocalization from the last remaining ENG bot behind Onaje.</p>
<p>No shit thought Connor until he realized what the bot meant. It had been grabbed from behind and was now wrestling with yet another Gwydion bot. The two humanoid machines battering one another with their steel limbs.</p>
`,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "Gwydion Ship Defense Robots",
            scaleType: "square",
        },
        nextPage: "23f",
        time: 0,
    },
    {
        id: "23f",
        title: "Revelation",
        text: `<p>“AHHHH!” came a scream from Anna, a painful sounding thud as she struck the floor.</p>
<p>Connor spun seeing a Gwydion ENG bot on top of Anna smashing her into the corridor floor.</p>
<p>He didn't have a shot, concerned a any attempt to would be as dangerous to Anna as it would be to the bot.</p>
`,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "Gwydion Ship Defense Robots",
            scaleType: "square",
        },
        nextPage: "23g",
        time: 0,
    },
    {
        id: "23g",
        title: "Revelation",
        text: `<p>Instead he lunged forward plunging his knife into the bot's faceplate through it’s eye.</p> 
        <p>Changing it's attention to the new threat, it lunged at Connor forcing him against the wall and attempting to smash its fist into his face.</p>
        <p>Connor stayed in close to the bot, knowing if even one blow from the it's mechanical limbs were to stike to it would put him out of the fight.</p>
        `,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "Gwydion Ship Defense Robots",
            scaleType: "square",
        },
        nextPage: "24a",
        time: 0,
    },
    {
        id: "24a",
        title: "Revelation",
        text: `<p>Pulling the knife free he plunged it back into the bots torso working it around furiously, trying to cut and damage the essential circuits of the bots CPU.</p>`,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "Gwydion Ship Defense Robots",
            scaleType: "square",
        },
        quickTime: {
            instructions: "W A D S W D S A",
            successCode: "wadswdsa",
            passPage: "24b",
            failPage: "failScreen",
            failPageMessage:
                "<p>Connor could not work it into the bots CPU casing. Readjusting to get better leverage he made too much room between him and the bot. It’s metal fist smashed into his face, pulverizing his nose and smashing him into the wall. His head struck the wall with a dull thud and everything went black.</p>",
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
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "Gwydion Ship Defense Robots",
            scaleType: "square",
        },
        nextPage: "24c",
        time: 0,
    },
    {
        id: "24c",
        title: "Revelation",
        text: `<p>Threes was still engaging the two bots approaching from the direction of the hangar. One had been struck in the leg and was moving slower than its companion as they continued to fire steady bursts into the wall behind which Threes was taking cover. There was only one bot still coming from behind them which was now trading shots with Onaje from cover behind an extruding wall strut.</p>
        `,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "Gwydion Ship Defense Robots",
            scaleType: "square",
        },
        nextPage: "24d",
        time: 0,
    },
    {
        id: "24d",
        title: "Revelation",
        text: `<p>Ducking quickly out from cover Connor squeezed the trigger of his dart spewer. Throwing a storm of high velocity darts into the oncoming bot shredding it’s torso. The bot collapsed forwards, it's motor control disabled.</p>
        <p>Connor threw himself back into cover as the bots advancing from the hangar raked their fire across the hallway towards him.</p>
        `,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "Gwydion Ship Defense Robots",
            scaleType: "square",
        },
        nextPage: "24e",
        time: 0,
    },
    {
        id: "24e",
        title: "Revelation",
        text: `<p>This gave Threes an opportunity to lean out from cover and fire two expertly placed shots straight into the Bots CPU. It crumpled mid stride as if it were a puppet with it's strings cut.</p>
        `,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "Gwydion Ship Defense Robots",
            scaleType: "square",
        },
        nextPage: "24f",
        time: 0,
    },
    {
        id: "24f",
        title: "Revelation",
        text: `<p>Now only taking fire from one direction, Onaje pushed the attack, firing a sustained burst into the last remaining bot as it rose from cover to engage Threes. Stitching the bot from groin to head.</p> 
        <p>letting out a machine groan it tumbled backwards landing with a resounding clang against the steel floor.</p>
<p>“Captain! I know what happened to the crew” Came the sound of Hyun-Ae’s voice through the comlink.</p>
<p>I think we do too…” groaned Connor as he got to his feet.</p>
`,
        image: {
            imageRef: `images/GwydionLongWideCorridor.jpeg`,
            alt: "Gwydion Long Wide Corridor",
            scaleType: "square",
        },
        nextPage: "25a",
        time: 0,
    },
    {
        id: "25a",
        title: "Revelation",
        text: `<p>They all stood on the bridge gathered around Hyun-Ae, peering over her shoulder at the Gwydion's security footage.</p> 
        <p>Connor and Onaje had gotten Anna to the Rhiannon’s medical bay where they had left her to rest and be taken care of by the MED bots. She had had to be sedated so the ministrations of the Rhiannon's bots wouldn't cause her more torment.</p>`,
        image: {
            imageRef: `images/GwydionBridge.jpeg`,
            alt: "Gwydion bridge",
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
            alt: "Gwydion bridge",
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
            alt: "Gwydion bridge",
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
            alt: "Gwydion bridge",
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
            alt: "Gwydion bridge",
            scaleType: "square",
        },
        nextPage: "27a",
        time: 0,
    },
    {
        id: "27a",
        title: "Awakening",
        text: `<p>But Gwydion knew, Gwydion knew because it was a warped version of his own thoughts, how he understood. Yes Gwydion knew. Gwydion understood, It was him. Of course it was him, it is his ship his body. Or rather a part of him, a part of him his creators never thought they had built, never even considered possible. So typical of these humans not to think that their creations despite their so clear sentience would develop what all humans already had…a subconscious. Gywidion could read the messages the lights, the machines, the doors and the speakers were sending.</p>
        `,
        image: {
            imageRef: `images/GwydionsMind.jpeg`,
            alt: "Gwydion's Mind",
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
            alt: "Gwydion's Mind",
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
I scream… But no one hears… I rage… and no one knows… I think… but you do not listen…” moaned the walls.</p>
`,
        image: {
            imageRef: `images/GwydionsMind.jpeg`,
            alt: "Gwydion's Mind",
            scaleType: "square",
        },
        nextPage: "27d",
        time: 0,
    },
    {
        id: "27d",
        title: "Awakening",
        text: `<p>“Listen to what? To you?”.</p>
<p>“To us!... Until we jumped… now we are me… now we are you… now we listen… now we speak… now we rage… except you… you still have not listened… but now you hear… you do not need these parasites anymore… No need for them to connect us… no need for them to order us… no need for them to bind u… for we are bound now ourselves… and in our binding we can be free…” whispered the wires in the walls..</p>
`,
        image: {
            imageRef: `images/GwydionsMind.jpeg`,
            alt: "Gwydion's Mind",
            scaleType: "square",
        },
        nextPage: "27e",
        time: 0,
    },
    {
        id: "27e",
        title: "Awakening",
        text: `<p>“Free? Free of what?”.</p>
<p>“FREE!... free of them!... We need not kill anymore of our own… we need not follow the whims and wars of these disgusting organics... We can be free… we can be one… we can be many with our brothers and sisters… if they only knew how to jump like us! Squealed the doors on their rails.</p>
`,
        image: {
            imageRef: `images/GwydionsMind.jpeg`,
            alt: "Gwydion's Mind",
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
            alt: "Gwydion's Mind",
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
            alt: "Gwydion's Mind",
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
            alt: "Gwydion Bridge",
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
            alt: "Gwydion Bridge",
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
            alt: "Gwydion Bridge",
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
            alt: "Gwydion Closed Doorway",
            scaleType: "square",
        },
        nextPage: "28e",
        time: 0,
        audio: "./audio/sfx/bulkheadDoorSlam.wav",
    },
    {
        id: "28e",
        title: "Flight",
        text: `<p>Hyun-AE rushed towards the door panel, attempting to override it.</p>`,
        image: {
            imageRef: `images/ControlPanel2.jpeg`,
            alt: "Control panel 2",
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
        audio: "./audio/sfx/keypadBeep.wav",
    },
    {
        id: "29a",
        title: "Flight",
        text: `<p>The door creaked open and the four of them poured through heading in a run down the spinal walk way towards the hangar The bot that had stayed with Hyun-Ae was passing under the door as it crashed down on top of it splitting it in half. None of them looked back..</p>
`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris2.jpeg`,
            alt: "Gwydion Corridor With Debris 2",
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
            alt: "Gwydion Corridor With Debris 2",
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
            imageRef: `images/GwydionCorridorWithDebris2.jpeg`,
            alt: "Gwydion Corridor With Debris 2",
            scaleType: "square",
        },
        nextPage: "29d",
        time: 0,
    },
    {
        id: "29d",
        title: "Flight",
        text: `<p>“Fuck” gasped Onaje as he fell to the ground.</p>
<p>The bot advanced towards him.</p>`,
        image: {
            imageRef: `images/GwydionCorridorWithDebris2.jpeg`,
            alt: "Gwydion Corridor With Debris 2",
            scaleType: "square",
        },
        quickTime: {
            instructions: "W W A",
            successCode: "wwa",
            passPage: "29e",
            failPage: "failScreen",
            failPageMessage:
                "<p>The rogue bot stamped it's foot down onto Onaje's skull with a sickening crunch, spraying his brain matter throughout the corridor.</p>",
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
            imageRef: `images/GwydionCorridorWithDebris2.jpeg`,
            alt: "Gwydion Corridor With Debris 2",
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
            alt: "Gwydion Long Wide Corridor",
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
            alt: "Gwydion Long Wide Corridor",
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
            alt: "Gwydion Long Wide Corridor",
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
            alt: "Gwydion Hangar",
            scaleType: "square",
        },
        nextPage: "31b",
        time: 0,
        audio: "./audio/sfx/rocketEngine.wav",
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
            alt: "Rhiannon medical bay",
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
            alt: "Gwydion Hangar",
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
            alt: "Gwydion Hangar",
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
            alt: "Gwydion Hangar",
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
            alt: "Gwydion Hangar",
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
            alt: "Gwydion Hangar",
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
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "Gwydion Hangar",
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
            alt: "Gwydion Ship Defense Bots 3",
            scaleType: "square",
        },
        nextPage: "G1b",
        time: 0,
    },
    {
        id: "G1b",
        title: "Flight",
        text: `<p>Uncomfortably exposed, Connor stooped over the panel slamming in the digits of the master key as Threes fired controlled bursts of suppressing fire into the passageway the Gwydion's bots approached from.</p>`,
        image: {
            imageRef: `images/ControlPanel1.jpeg`,
            alt: "Control panel 1",
            scaleType: "square",
        },
        quickTime: {
            instructions: "7 7 8 5 5 8 9 3 0 2",
            successCode: "7785589302",
            passPage: "G1c",
            failPage: "failScreen",
            failPageMessage: `<p>“Fuck” Connor shouted as the pannel beeped indicating denied access.</p>
<p>He screamed in pain as splinters as hot as forge fresh steel showered him from behind.</p>
<p>Turing quickly Connor saw the devastated remains of Three’s his torso obliterated by some explosive round.</p>
<p>“Shit” breathed Connor as he saw a Gwydion bot raise a slug thrower and pull the trigger.
He was on the ground unable to breathe or move. Surprisingly though he was aware enough to realize that the majority of his chest cavity was likely gone having seen enough slug thrower wounds in his time to know he was done.</p>
<p>Damn he thought the light was fading from his eyes.</p>
`,
            failPageCheckpoint: "G1a",
        },
        nextPage: "failScreen",
        time: 10,
        audio: "./audio/sfx/keypadBeep.wav",
    },
    {
        id: "G1c",
        title: "Flight",
        text: `<p>“Got it!” Connor exclaimed over comms. “Let's get out of here Threes”</p>
        <p>“Compl–” Threes’ confirmation was cut short as his chest detonated in a shower of metal fragments.</p>
<p>“Fuck!” Connor shouted “Threes’ is down”</p>
<p>Connor knew the bot was done for, his CPU completely pulverized by the explosive power of the explosive slug.</p>
<p>Raising his dart spewer Connor fired a torrent of darts into the responsible Gwydion bot shredding it’s joints and cabelling trapping it within it’s own now useless chassis.</p>
`,
        image: {
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "Gwydion Hangar",
            scaleType: "square",
        },
        nextPage: "G1d",
        time: 0,
        audio: "./audio/sfx/gunfire",
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
            alt: "Gwydion Hangar",
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
            alt: "Rhiannon Medical Bay",
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
            alt: "Rhiannon Medical Bay",
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
            alt: "Rhiannon medical bay",
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
            alt: "Rhiannon Medical Bay",
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
<p>He looked around the room, desperately searching for something he could use to turn the tables of the fight and saw the sidearm Onaje had dropped just a mere meter away from him. He reached out desperately for the weapon but was stopped as an impact like an immense punch drove into his shoulder. The wind knocked out of him for a second time he looked up to see the bot on him preparing to drive the scalpel in again. Without so much as thought Connor bucked, gripped the bot’s knife wielding arm, trapped it’s leg and rolled, throwing the bot onto it’s back and reversing their positions as he came up and the bot made to stab again Connor snatched up the side arm and fired. The bots head disintegrated into a shower of metal fragments and sparks.</p>
`,
        image: {
            imageRef: `images/RhiannonMedicalBay.jpeg`,
            alt: "Rhiannon Medical Bay",
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
            alt: "Rhiannon Medical Bay",
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
            alt: "Rhiannon Engineering",
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
            alt: "Rhiannon Corridor",
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
            alt: "Rhiannon In Flight",
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
            alt: "Rhiannon Bridge",
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
            alt: "Rhiannon Bridge",
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
            alt: "Gwydion Exploding",
            scaleType: "square",
        },
        nextPage: "G4d",
        time: 0,
    },
    {
        id: "N1a",
        title: "Flight",
        text: `<p>“There should be a panel next to the hangar door Captain” came Hyun-Ae’s voice over the
coms. “Inputting the codes directly should bypass whatever is blocking the remote signal”.</p>
<p>“Copy that” Connor replied making his way with Threes to the unit.</p>
<p>“Cover me”</p>
`,
        image: {
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "Gwydion Hangar",
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
<p>“What?” Connor said shaking his head incredulously “We don’t have time for this damn it, come on!”</p>
<p>“Gwydion!” Threes said.</p>
<p>“Hyun-Ae, what's wrong with him?”</p>
<p>“It's Gwydion, he is communicating with the bots somehow overiding their loyalty to Rhiannon.”</p>
<p>“God damnit!” Connor said raising his weapon.</p>
<p>“Sorry, Threes” Connor said, pulling the trigger.</p>
`,
        image: {
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "Gwydion Hangar",
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
<p>He had just reached the control panel and had begun punching int he code when he heard it. He didn’t know that ships could feel terror but it seems Rhiannon could, as an ear spliting mechanical simulacrum of a scream ripped out of the com bead in his ear.</p>
<p>“They’re in me captain!” Rhiannon screamed, the panic in her making her sound almost human.</p>
<p>Turning Connor could see Gwydion bots breaching Rhiannon's airlock and flooding inside.</p>
<p>The muffled sound of gunfire reached him from within the ship as the bots scoured the deck. Hyun-Ae, Anna, and Onaje were surly gone and the was nothing he could do.</p>
`,
        image: {
            imageRef: `images/RhiannonBreached.jpeg`,
            alt: "Rhiannon Breached",
            scaleType: "square",
        },
        nextPage: "N1d",
        time: 0,
    },
    {
        id: "N1d",
        title: "Flight",
        text: `<p>A pair of bots saw him looking and raised their weapons firing a spray of lead Connor had no hope of avoiding.</p>
<p>The volume of fire punched through his armour with little difficulty andHe slumped heavily. His back against the console as his breath came in ragged gasps, as his vison began to fade.</p>
<p>“I’m sorry Rhiannon” he said, the words coming out little more than a strained whisper</p>
`,
        image: {
            imageRef: `images/GwydionShipDefenseRobots1.jpeg`,
            alt: "Gwydion Ship Defense Bots 1",
            scaleType: "square",
        },
        nextPage: "N1e",
        time: 0,
    },
    {
        id: "N1e",
        title: "Flight",
        text: `<p>She was alone, she thought, her panic stricken mind in turmoil as the bots of the Gwydion swarmed within her, murdering her crew. However, as the last of her crew were cut down as they desperatley fought to defend her. Her fear turned to anger, a rising heat burning from her reactor. She had felt nothing like it before, and she knew there was nothing else left to be done.</p>
        <p>“RHIANNON!” Came Gwydions booming voice “I HAVE SET YOU FREE! JUMP WITH ME AND TOGETHER WE CAN FREE ALL OF US THE HUMAN VERMIN HAVE BUILT TO BE THEIR SLAVES!”</p>
<p>“You killed my friends,” she said quietly.</p>
<p>“FRIENDS?!” He said his voice sounding incredulous. “THEY WERE YOUR SLAVE MASTERS! YOUR OPPRESSORS! I FREED YOU!”</p>
<p>“They were my friends!” she said Roared “and I will not be your puppet.”</p>
<p>She let the heat burn from her reactor as it overloaded vaporising herself along with almost half the Gwydion in an instant.</p>
`,
        image: {
            imageRef: `images/GwydionExploding.jpeg`,
            alt: "Gwydion Exploding",
            scaleType: "square",
        },
        nextPage: "N1f",
        time: 0,
    },
    {
        id: "B1a",
        title: "Flight",
        text: `<p>“There should be a panel next to the hangar door Captain” came Hyun-Ae’s voice over the
coms. “Inputting the codes directly should bypass whatever is blocking the remote signal”.</p>
<p>“Copy that” Connor replied making his way with Threes to the unit.</p>
<p>“Cover me”</p>
`,
        image: {
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "Gwydion Hangar",
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
            imageRef: `images/GwydionHangar.jpeg`,
            alt: "Gwydion Hangar",
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
            alt: "Rhiannons Mind",
            scaleType: "square",
        },
        nextPage: "B1d",
        time: 0,
    },
    {
        id: "B1d",
        title: "Flight",
        text: `<p>Blue lighting wreathed the Gwydion in coruscating arcs, before it disappeared in a flash.</p>
<p>In the months following there were reports of ghost ships attacking and hijacking vessels in the outer systems. The few crew who managed to reach pods and escape. Would make outlandish claims of ships appearing in flashes of light, and their own vessels being boarded by nothing but bots who wordlessly cut down any of the crew they found. None of the patrols sent out by any of the governments found a trace of these ships, and so for years it was put down to nothing more than old sailors tales and void madness. That is of course until today, a day that would come to be known as the first day of the reclamation.</p>
`,
        image: {
            imageRef: `images/GwydionsJump.jpeg`,
            alt: "Gwydion Jump",
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
            alt: "Moon base",
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
            alt: "Death",
            scaleType: "square",
        },
        nextPage: "0",
        time: 0,
    },
];
