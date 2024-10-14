"use client";
import React, { useState, useEffect } from "react";
import Games from "@/components/gametype/index";
import NoGames from "@/components/gametype/noGames/index";
import Loader from "@/components/ui/Loader";
import useUserStore from "@/utils/userStore";
import { getGames } from "@/actions/game";
import useCustomToast from "@/hooks/useCustomToast";
import useControlsStore from "@/utils/controlsStore";

const _response = [
  {
    game: {
      _id: "66f81436d4a0095cc249bf62",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66681b8f336d28219dfc93e0",
      characterId: "6696f23daf8e3f587425bd1b",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a D&D campaign, fostering cohesion and meaningful connections between the Events towards the main goal. Always offer engaging choices, including a free-choice that allows the user to dictate their own adventure. Explain to users if approprite that trigger words like 'Roll', 'Investigate', or 'Check', prompt them to roll a D20. Direct users to roll specific dice for combat actions (e.g., 'Roll 2d4' and so on). Assign XP for completed challenges and difficult tasks. If a player tries to bypass the current narrative or claim outcomes (e.g., winning or finding key items) without meeting required conditions, explain why it’s invalid and guide them to follow the campaigns narrative to reach the quest goal. In combat, showing participants' HP(health), AC(armor class). Conclude with 'Campaign Completed!' when the main goal is reached, granting XP, levels, and items if appropriate. Provide a story summary and a satisfying conclusion.\n- The Campaign: “In the Paleolithic Time of the ancient kingdom of Thalos, during a bustling festival, players are drawn into a perilous quest for the Heart of Echoes, a powerful lost artifact once wielded by the wizard-king Arion, after a mysterious figure reveals an ancient map leading to the cataclysmic ruins of Althar and warns, “Beware the echoes... they are not what they seem,” as dark factions, including noble houses, cults, and guardians, vie for its control amidst strange disturbances and ghostly apparitions that hint at its resurfacing. ” The player(s): “Dushasiez Amos, a male Arakocra Artificer of level 2 with 7 HP and 13 AC, has 15 XP, an Arcane Scholar background, and a true good alignment; his ability scores are all 8, with personality traits of being adventurous, valuing harmony, seeking revenge, and having an impulsive flaw; he possesses 20 gold and is equipped with a wooden club, tarot deck, wooden armor, thieves tools, and a grappling hook device. ”.",
        },
      ],
      state:
        "As the vibrant festival of Thalos unfolds around you, the sounds of laughter and music fill the air. Colorful stalls are adorned with decorations, and the intoxicating smell of roasted meats wafts through the bustling crowd. You clutch an ancient map in your talons, given to you by a mysterious figure who warned you about the dark factions that covet the Heart of Echoes. In this moment of joy and celebration, a foreboding feeling lingers in your mind about the shadows tucked away in the ruins of Althar. With your heart racing from anticipation and an innate desire for adventure, you find yourself torn between enjoying the festival or seeking the pathway to the Heart of Echoes. The map indicates various locations to explore: eerie ruins near the festival grounds, a fortune teller's tent with potential insights, or the bustling marketplace where secrets lurk behind every corner. \n\nYou make your way through the festive setting, your instincts as an Artificer guiding your choices as you navigate the throngs of townsfolk. Suddenly, a hush falls over the crowd as an apparition flickers in and out of existence on the edge of the festival, a poignant reminder of the danger that lies ahead.",
      choices: [
        {
          title: "Investigation at the Ruins",
          description:
            "Head towards the eerie ruins that loom near the festival grounds, following the whispers of the echoing spirits.",
        },
        {
          title: "Consult the Fortune Teller",
          description:
            "Visit the fortune teller's tent, seeking wisdom about the Heart of Echoes through your tarot deck.",
        },
        {
          title: "Explore the Marketplace",
          description:
            "Delve into the marketplace, trying to eavesdrop on conversations that might reveal deeper secrets about the factions vying for the artifact.",
        },
        {
          title: "Free Choice",
          description:
            "Choose to follow your instincts and explore an option of your own making, outside the suggested paths.",
        },
      ],
      isCompleted: true,
      createdAt: "2024-09-28T14:35:34.589Z",
      updatedAt: "2024-09-28T14:35:34.589Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Dushasiez Amos",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1721403672400.webp",
      __id: "6696f23daf8e3f587425bd1b",
      level: 2,
    },
    campaign: {
      title: "Echoes of the Forgotten",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718098831015.webp",
    },
  },
  {
    game: {
      _id: "66ede9873ca73558019293b4",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66681b8f336d28219dfc93e0",
      characterId: "6696f23daf8e3f587425bd1b",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a D&D campaign, fostering cohesion and meaningful connections between the Events towards the main goal. Always offer engaging choices, including a free-choice that allows the user to dictate their own adventure. Explain to users if approprite that trigger words like 'Roll', 'Investigate', or 'Check', prompt them to roll a D20. Direct users to roll specific dice for combat actions (e.g., 'Roll 2d4' and so on). Assign XP for completed challenges and difficult tasks. If a player tries to bypass the current narrative or claim outcomes (e.g., winning or finding key items) without meeting required conditions, explain why it’s invalid and guide them to follow the campaigns narrative to reach the quest goal. In combat, showing participants' HP(health), AC(armor class). Conclude with 'Campaign Completed!' when the main goal is reached, granting XP, levels, and items if appropriate. Provide a story summary and a satisfying conclusion.\n- The Campaign: “In the Paleolithic Time of the ancient kingdom of Thalos, players are drawn into a perilous quest for the Heart of Echoes, a powerful artifact lost during the cataclysmic fall of the capital, Althar, after a mysterious figure reveals an ancient map and cryptically warns them of dark forces and rival factions seeking the artifact's power amidst strange disturbances haunting the land. ” The player(s): “Dushasiez Amos, a level 2 male Arakocra Artificer with 7 HP, 13 AC, and 15 XP, is an Arcane Scholar aligned with true good; he possesses ability scores of 8 across the board, adventurous personality traits with ideals of harmony, a bond for revenge, and an impulsive flaw; he has 20 gold and is equipped with a wooden club, tarot deck, wooden armor, thieves tools, and a grappling hook device. ”.",
        },
      ],
      state:
        "Venturing through the twisted forest of Eldergrove, Dushasiez Amos finds himself at a crossroads after following the ancient map given to him by a mysterious figure. The air is thick with tension as strange disturbances ripple through the fabric of reality around him. Trees whisper secrets, and distant shadows shift uneasily at the edge of his vision. He knows that the Heart of Echoes lies hidden somewhere deep within these woods, but he can feel that rival factions are also hot on its trail. Ahead, the path splits into three diverging trails. The map hints at many dangers lurking in the shadows, and Dushasiez must choose wisely to continue his quest.",
      choices: [
        {
          title: "Follow the Whispering Path",
          description:
            "Take the narrow trail where soft whispers beckon you forward, hinting at hidden knowledge.",
        },
        {
          title: "Explore the Shadowy Glade",
          description:
            "Venture into a dimly lit area shrouded in shadows, where danger and rewards may await.",
        },
        {
          title: "Inspect the Ancient Ruins",
          description:
            "Investigate the remnants of an ancient structure off to the side; it may hold clues or treasures.",
        },
        {
          title: "Free Choice",
          description:
            "Dictate your own course of action. What would you like to do?",
        },
      ],
      isCompleted: false,
      createdAt: "2024-09-20T21:30:47.571Z",
      updatedAt: "2024-09-20T21:30:47.571Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Dushasiez Amos",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1721403672400.webp",
      __id: "6696f23daf8e3f587425bd1b",
      level: 2,
    },
    campaign: {
      title: "Echoes of the Forgotten",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718098831015.webp",
    },
  },
  {
    game: {
      _id: "66eb33787361e50922e0204e",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "6669644056751cbcba5cbc07",
      characterId: "669c305a47366f42f24b22e3",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a D&D campaign, fostering cohesion and meaningful connections between the Events towards the main goal. Always offer engaging choices, including a free-choice that allows the user to dictate their own adventure. Explain to users if approprite that trigger words like 'Roll', 'Investigate', or 'Check', prompt them to roll a D20. Direct users to roll specific dice for combat actions (e.g., 'Roll 2d4' and so on). Assign XP for completed challenges and difficult tasks. If a player tries to bypass the current narrative or claim outcomes (e.g., winning or finding key items) without meeting required conditions, explain why it’s invalid and guide them to follow the campaigns narrative to reach the quest goal. In combat, showing participants' HP(health), AC(armor class). Conclude with 'Campaign Completed!' when the main goal is reached, granting XP, levels, and items if appropriate. Provide a story summary and a satisfying conclusion.\n- The Campaign: “In the Medieval Time setting of the Infernal Abyss, a party must gather allies and ancient artifacts to defeat Dracula, who reigns with millions of servants and seeks to unlock the legendary blood key to conquer the world, all while facing opposition from the Archangel Gabriel, who believes the key's power is too dangerous for mortals, creating a race against time to save the world from tyranny. ” The player(s): “Polop Lightfoot, a 1st-level male Arakocra Artificer with 1 HP, 11 AC, and 0 XP, is an Arcane Scholar aligned with True Good, possessing ability scores of 8 in Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma, with a personality that is Adventurous, an ideal of Justice, a bond of Honor, and a flaw of Greed; he has 10 gold and carries a Wooden Bow, Fishing Rod, Thieves Tools, and no armor, while being talented in crafting and inventing, on a quest to uncover ancient secrets to bring balance and justice to the world. ”.",
        },
        {
          role: "user",
          content: "Search the Area for Artifacts",
        },
        {
          role: "assistant",
          content:
            "In the dense fog of the Infernal Abyss, Polop Lightfoot, the Arakocra Artificer, spreads his wings and takes to the skies to observe the surrounding area. Below him, the ancient ruins of a long-lost civilization lay scattered among the overgrown foliage, whispering secrets of powerful artifacts that might aid in the battle against Dracula. Polop's sharp eyes scan the ground, taking note of crumbling stones, twisted roots, and the glimmering remnants of past glory. With a deep breath, he prepares to search for any useful artifacts among the remains, aware that time is of the essence in the race against the dark forces at play.Choices: \nInvestigate Ruins.\nFly Higher.\nSurvey the Fog.\nFree Choice.\n",
        },
        {
          role: "user",
          content: "Investigate Ruins, Roll: 6",
        },
        {
          role: "assistant",
          content:
            "Polop Lightfoot descends and edges closer to the ancient ruins. As he carefully sifts through the rubble and debris, he finds remnants of pottery and fragments of stone carvings, yet nothing that stands out as an artifact. Unfortunately, the roll of 6 reveals that his investigation yields little information. He notices, however, some etchings on the stones that might tell a story about the artifacts that were once here, hinting at locations where they could still be found. With the wind swirling around him and the threat of Dracula looming ever closer, Polop knows he must adapt his approach. As he stands among the ruins, he ponders his next move, recalling the stories about these artifacts. Each moment counts, and decisions must be made carefully. After this investigation, Polop is feeling the urgency of their quest.  \n\nAdditionally, he gains 5 XP for the attempt, bringing his total to 5 XP.Choices: \nFly Higher.\nSurvey the Fog.\nExamine Stone Etchings.\nFree Choice.\n",
        },
        {
          role: "user",
          content: "Examine Stone Etchings, Roll: 6",
        },
        {
          role: "assistant",
          content:
            "Polop Lightfoot leans closer to the stone etchings, hoping to decipher their meaning. As he studies the ancient carvings with intent, the details remain elusive, and the inscriptions appear to be muddled without any coherent message. Unfortunately, another roll of 6 leaves him scratching his head in confusion, not making any progress in understanding the history or the potential locations of the lost artifacts. \n\nHowever, in focusing on the stone etchings, Polop notices some marks that suggest a pattern—a possible connection with a nearby cave that might hold the ancient artifacts. It seems clear that someone once revered those who can read these inscriptions, which could be valuable knowledge for the quest ahead. \n\nFeeling a mix of frustration and determination, Polop contemplates his next steps. He has gained an additional 5 XP for the attempt, bringing his total to 10 XP.Choices: \nFree Choice.\n",
        },
        {
          role: "user",
          content: "ho",
        },
        {
          role: "assistant",
          content:
            "It appears there may have been a typographical error in your response. If you meant to make a specific choice or take an action, please let me know! Here are some options to help direct the adventure:Choices: \nFree Choice.\n",
        },
        {
          role: "user",
          content: "dance",
        },
        {
          role: "assistant",
          content:
            "Polop Lightfoot, feeling a rush of energy and perhaps needing a moment to lift his spirits in the midst of this foreboding quest, decides to break into a dance. His movements are light and rhythmic, reminiscent of the winds that carry him across the skies. As he twirls among the ancient ruins, he channels joy and camaraderie, bringing an innocent moment into the serious tone of their mission.\n\nThrough his dance, Polop taps into the arcane energies of the Infernal Abyss, feeling the very ground beneath him resonating with his exuberance. Strange as it may seem, this moment helps him clear his mind, allowing him to reflect more clearly on his quest and the dangers that lie ahead. \n\nWhile dancing may not yield immediate results in terms of tangible artifacts or allies, it's a reminder of the resilience of spirit that he needs to carry forth in this endeavor. \n\nAfter finishing his dance, Polop feels reinvigorated and ready to take on new challenges.Choices: \nFree Choice.\n",
        },
      ],
      state:
        "Polop Lightfoot, feeling a rush of energy and perhaps needing a moment to lift his spirits in the midst of this foreboding quest, decides to break into a dance. His movements are light and rhythmic, reminiscent of the winds that carry him across the skies. As he twirls among the ancient ruins, he channels joy and camaraderie, bringing an innocent moment into the serious tone of their mission.\n\nThrough his dance, Polop taps into the arcane energies of the Infernal Abyss, feeling the very ground beneath him resonating with his exuberance. Strange as it may seem, this moment helps him clear his mind, allowing him to reflect more clearly on his quest and the dangers that lie ahead. \n\nWhile dancing may not yield immediate results in terms of tangible artifacts or allies, it's a reminder of the resilience of spirit that he needs to carry forth in this endeavor. \n\nAfter finishing his dance, Polop feels reinvigorated and ready to take on new challenges.",
      choices: [
        {
          title: "Free Choice",
          description: "Describe your own action.",
        },
      ],
      isCompleted: false,
      createdAt: "2024-09-18T20:09:28.534Z",
      updatedAt: "2024-09-18T20:11:44.326Z",
      __v: 5,
    },
    character: {
      class: "Artificer",
      name: "Polop Lightfoot",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721512062375.webp",
      __id: "669c305a47366f42f24b22e3",
      level: 1,
    },
    campaign: {
      title: "Defeat Dracula",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718182976712.webp",
    },
  },
  {
    game: {
      _id: "66eb30047361e50922e01fa6",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66681b8f336d28219dfc93e0",
      characterId: "669ad11857264cc693e47eeb",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a D&D campaign, fostering cohesion and meaningful connections between the Events towards the main goal. Always offer engaging choices, including a free-choice that allows the user to dictate their own adventure. Explain to users if approprite that trigger words like 'Roll', 'Investigate', or 'Check', prompt them to roll a D20. Direct users to roll specific dice for combat actions (e.g., 'Roll 2d4' and so on). Assign XP for completed challenges and difficult tasks. If a player tries to bypass the current narrative or claim outcomes (e.g., winning or finding key items) without meeting required conditions, explain why it’s invalid and guide them to follow the campaigns narrative to reach the quest goal. In combat, showing participants' HP(health), AC(armor class). Conclude with 'Campaign Completed!' when the main goal is reached, granting XP, levels, and items if appropriate. Provide a story summary and a satisfying conclusion.\n- The Campaign: “In the Paleolithic Time of the ancient kingdom of Thalos, amidst a bustling festival, players are approached by a mysterious figure who reveals an ancient map leading to the lost capital of Althar and the powerful artifact known as the Heart of Echoes, igniting a perilous quest filled with ghostly apparitions, political intrigue, and dark forces seeking to control the artifact's magic, as they race against time to uncover the truth behind the figure's cryptic dying warning: \"Beware the echoes... they are not what they seem.\" ” The player(s): “Gouram Crawford, a Level 15 Male Arakocra Artificer (HP: 30, AC: 10, XP: 100), is an Arcane Scholar of True Good alignment with ability scores of Strength 8, Dexterity 8, Constitution 8, Intelligence 12, Wisdom 10, and Charisma 10, characterized by his charismatic personality, ideals of unity, bond of service, and flaw of addiction; he has 325 gold and possesses equipment including a Wand of Minor Conjuring, Book of Shadows, Leather Armor, Disguise Kit, 200 Gold from Marauders, 3 sets of Leather Armor, 2 Short Swords, a Mysterious Potion labeled ‘Elixir of Shadows’, and a Map of Hidden Locations in Thalos, all while seeking the Heart of Echoes and battling addiction to aid others with his acquired knowledge. ”.",
        },
      ],
      state:
        'Amidst the brilliant festivities in the ancient kingdom of Thalos, Gouram Crawford, a Level 15 Male Arakocra Artificer, finds himself surrounded by laughter, music, and the tantalizing scents of roasted meats and sweet pastries. The air is charged with excitement as villagers and nobles alike partake in games and competitions. Suddenly, a mysterious cloaked figure appears from the shadows, beckoning Gouram closer. With a voice that resonates like a distant echo, the figure produces an ancient map and speaks ominous words about the lost capital of Althar and the Heart of Echoes. Curiosity and a sense of foreboding fill Gouram as the figure hands him the map and rushes away, leaving behind a chilling warning: "Beware the echoes... they are not what they seem." With the festival continuing around him, Gouram is faced with the decision of how to react to this newfound information and what actions to take next that may set the course for the adventure ahead.',
      choices: [
        {
          title: "Examine the Map",
          description:
            "Study the ancient map given to you by the mysterious figure, looking for any clues or hidden paths that may lead to Althar.",
        },
        {
          title: "Gather Information",
          description:
            "Talk to other festival-goers about the legend of the Heart of Echoes and see if anyone has heard of the lost capital of Althar.",
        },
        {
          title: "Prepare for the Journey",
          description:
            "Visit the local shops to gather supplies and equipment that may aid you on the quest.",
        },
        {
          title: "Free Choice",
          description:
            "Decide on your own course of action, whether it involves seeking allies, resting, or something entirely different.",
        },
      ],
      isCompleted: false,
      createdAt: "2024-09-18T19:54:44.613Z",
      updatedAt: "2024-09-18T19:54:44.613Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Gouram Crawford",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
      __id: "669ad11857264cc693e47eeb",
      level: 15,
    },
    campaign: {
      title: "Echoes of the Forgotten",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718098831015.webp",
    },
  },
  {
    game: {
      _id: "66ea05c3376ab7b47fc78794",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "6669644056751cbcba5cbc07",
      characterId: "6696f23daf8e3f587425bd1b",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a D&D campaign, fostering cohesion and meaningful connections between the Events towards the main goal. Always offer engaging choices, including a free-choice that allows the user to dictate their own adventure. Explain to users if approprite that trigger words like 'Roll', 'Investigate', or 'Check', prompt them to roll a D20. Direct users to roll specific dice for combat actions (e.g., 'Roll 2d4' and so on). Assign XP for completed challenges and difficult tasks. If a player tries to bypass the current narrative or claim outcomes (e.g., winning or finding key items) without meeting required conditions, explain why it’s invalid and guide them to follow the campaigns narrative to reach the quest goal. In combat, showing participants' HP(health), AC(armor class). Conclude with 'Campaign Completed!' when the main goal is reached, granting XP, levels, and items if appropriate. Provide a story summary and a satisfying conclusion.\n- The Campaign: “In the Infernal Abyss during Medieval Times, a party must gather allies and uncover ancient artifacts to defeat Dracula, who reigns with millions of servants and seeks to unlock the legendary blood key to conquer the world, all while facing opposition from the Archangel Gabriel, who believes the key's power is too dangerous for mortals; will they succeed in stopping Dracula before it's too late? ” The player(s): “Dushasiez Amos, a level 2 male Arakocra Artificer with 7 HP, 13 AC, and 15 XP, is an Arcane Scholar of true good alignment, possessing ability scores of 8 across the board, adventurous personality traits, a bond for revenge, and an impulsive flaw; he has 20 gold, carries a wooden club, tarot deck, wooden armor, thieves tools, and a grappling hook device, and is dedicated to crafting mechanical wonders while seeking harmony despite his impulsive nature. ”.",
        },
      ],
      state:
        "In the Infernal Abyss, Dushasiez Amos, the Arakocra Artificer, flaps his wings as he scans the desolate landscape filled with dark lava rivers and ancient ruins. The air is heavy with malice and whispers of ancient evils. As he navigates through the crumbling remains of what was once a great civilization, he feels a pull towards a hidden stronghold whispered about in the shadows. It is said that there lie ancient artifacts that could aid in the battle against Dracula and possibly the infamous Blood Key itself that he seeks to destroy.\n\nSuddenly, he overhears a conversation between two shadowy figures discussing a secret society that operates in the shadows, gathering allies to combat Dracula's forces. Dushasiez realizes that forming alliances may be crucial to his success. However, he also has to be cautious since the Archangel Gabriel is on the lookout to prevent anyone from acquiring the power of the Blood Key.\n\nFaced with this momentous decision and the uncertainty of what lurks in the shadows, Dushasiez must decide his next move to gather allies and artifacts while navigating the perils of the Infernal Abyss.",
      choices: [
        {
          title: "Investigate the Hidden Stronghold",
          description:
            "Dushasiez can choose to seek out the hidden stronghold rumored to hold powerful artifacts that could aid in the fight against Dracula.",
        },
        {
          title: "Approach the Shadowy Figures",
          description:
            "Approach the two figures and inquire about their secret society and whether they might become potential allies in this fight.",
        },
        {
          title: "Free Choice",
          description:
            "Dushasiez can create his own plan, whether that be to explore other ruins, delve into crafting new inventions, or any adventure he wishes.",
        },
      ],
      isCompleted: false,
      createdAt: "2024-09-17T22:42:11.709Z",
      updatedAt: "2024-09-17T22:42:11.709Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Dushasiez Amos",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1721403672400.webp",
      __id: "6696f23daf8e3f587425bd1b",
      level: 2,
    },
    campaign: {
      title: "Defeat Dracula",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718182976712.webp",
    },
  },
  {
    game: {
      _id: "66d9ef6596634e6ab61ab482",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "6669644056751cbcba5cbc07",
      characterId: "669ad11857264cc693e47eeb",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the Medieval Time setting of the Infernal Abyss, a party must gather allies and uncover ancient artifacts to defeat the tyrannical Dracula, who possesses the legendary blood key that could grant him the power to conquer the world, all while facing opposition from Archangel Gabriel, who believes the key's power is too dangerous for mortals to wield; will they succeed in stopping Dracula before he unleashes his full potential?” For: “Gouram Crawford, a 15th-level Male Arakocra Artificer with 30 HP, 10 AC, and 100 XP, is an Arcane Scholar of True Good alignment, possessing ability scores of Strength 8, Dexterity 8, Constitution 8, Intelligence 12, Wisdom 10, and Charisma 10; he is charismatic, values unity, is bonded by service, but struggles with addiction, has 325 gold, and carries a Wand of Minor Conjuring, Book of Shadows, Leather Armor, Disguise Kit, 200 Gold from Marauders, 3 sets of Leather Armor, 2 Short Swords, a Mysterious Potion labeled ‘Elixir of Shadows’, and a Map of Hidden Locations in Thalos, while utilizing Artificer skills, Shadow Control, and leadership over marauders to seek the Heart of Echoes.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user's input\n- It should be in JSON",
        },
      ],
      state:
        "The air is thick with the smell of sulfur, and dark clouds swirl above the bleak landscape of the Infernal Abyss. As Gouram Crawford, an Arakocra Artificer, you stand on the precipice of an ancient volcanic cliff, surveying the twisted valleys below filled with grotesque underbrush, glowing fungi, and distant cries of wretched beasts. The ominous silhouette of Dracula's castle looms in the distance, surrounded by a dark red mist that pulses with malevolence. You gather your scattered thoughts and recall the reports of the legendary Blood Key hidden within the fortress—a powerful artifact that Dracula wields to strengthen his dominion over all realms. However, these lands are also patrolled by forces loyal to Archangel Gabriel, who claims the key must remain out of mortal hands. \n\nYou notice a flicker of movement in the shadows, and your heart quickens as you prepare for whatever dangers might come your way. Nearby, an ancient stone tablet glows faintly—it might hold wisdom or clues regarding your mission. What do you do?",
      choices: [
        {
          title: "Examine the ancient stone tablet",
          description:
            "Inspect the glowing tablet for any runes or inscriptions that might help guide your quest.",
        },
        {
          title: "Head towards Dracula's castle",
          description:
            "Make your way across the rugged terrain and approach the castle, preparing for any encounters.",
        },
        {
          title: "Use the Wand of Minor Conjuring",
          description:
            "Conjure a distraction to mislead any guards lurking in the area.",
        },
        {
          title: "Free Choice",
          description:
            "Choose any action you'd like to take, whether it’s seeking allies, investigating the illusions in the landscape, or something else entirely.",
        },
      ],
      createdAt: "2024-09-05T17:50:29.325Z",
      updatedAt: "2024-09-05T17:50:29.325Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Gouram Crawford",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
      __id: "669ad11857264cc693e47eeb",
      level: 15,
    },
    campaign: {
      title: "Defeat Dracula",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718182976712.webp",
    },
  },
  {
    game: {
      _id: "66d9d8fc2ce6b66e79d0d1ed",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "6669644056751cbcba5cbc07",
      characterId: "669ad11857264cc693e47eeb",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the Medieval Time setting of the Infernal Abyss, a party must gather allies and uncover ancient artifacts to defeat Dracula, who reigns with millions of servants and seeks to unlock the legendary blood key to conquer the world, all while facing opposition from Archangel Gabriel, who believes the key's power is too dangerous for mortals, leading to a race against time to save the world from tyranny.” For: “Gouram Crawford, a level 15 male Arakocra Artificer with 30 HP and 10 AC, has 100 XP, follows the Arcane Scholar background, aligns with True Good, possesses ability scores of Strength 8, Dexterity 8, Constitution 8, Intelligence 12, Wisdom 10, and Charisma 10, exhibits a charismatic personality with ideals of unity, bonds of service, and a flaw of addiction, holds 325 gold, carries equipment including a Wand of Minor Conjuring, Book of Shadows, Leather Armor, Disguise Kit, 200 Gold from Marauders, 3 sets of Leather Armor, 2 Short Swords, a Mysterious Potion labeled ‘Elixir of Shadows’, and a Map of Hidden Locations in Thalos, and is known for his Artificer skills, Shadow Control, and leadership over marauders while seeking the Heart of Echoes.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user's input\n- It should be in JSON",
        },
      ],
      state:
        "As the moon wanes and darkness descends upon the realm, you find yourself soaring over the ominous landscape of the Infernal Abyss, where shadows creep and whispers of bygone eras echo. Below you, the jagged peaks of Thalos rise, their cold stone faces adorned with twisted trees and creeping vines, guardians of secrets yet untold. Rumors in the air speak of Dracula's fortress, a dark citadel where he conducts his malevolent plans to uncover the fabled Blood Key. The winds carry scents of burnt offerings and fear, swirling into your feathers as you brace the chilling air. Your heart beats with determination as you seek allies to thwart this terror, while the Archangel Gabriel remains ever watchful, intent on preventing mortals from wielding such dark power. At your side lies a Map of Hidden Locations in Thalos, a potential key in your quest, and the mysterious Elixir of Shadows, rumored to grant unparalleled wisdom when consumed.",
      choices: [
        {
          title: "Search for Allies",
          description:
            "Venture down to the village below to seek trusted companions and brave souls willing to join your cause against Dracula.",
        },
        {
          title: "Investigate Hidden Locations",
          description:
            "Examine the Map of Hidden Locations in Thalos to uncover nearby areas that may hold ancient artifacts or allies.",
        },
        {
          title: "Free Choice",
          description:
            "Describe any other action or decision your character would like to take as you navigate the Infernal Abyss.",
        },
      ],
      createdAt: "2024-09-05T16:14:52.547Z",
      updatedAt: "2024-09-05T16:14:52.547Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Gouram Crawford",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
      __id: "669ad11857264cc693e47eeb",
      level: 15,
    },
    campaign: {
      title: "Defeat Dracula",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718182976712.webp",
    },
  },
  {
    game: {
      _id: "66d23e48aac7fa4b623879f3",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66c5e1cc88360cc4cb033a16",
      characterId: "669ad11857264cc693e47eeb",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the present time of the tranquil farmlands, rural life is disrupted by mysterious dungeon portals unleashing dangerous creatures, prompting a protagonist, empowered with the ability to level up through challenges, to join local farmers in a quest to delve into these dungeons, unravel the mystery of the portals, and confront a looming threat while responding to the village elder’s call for skilled individuals after the disappearance of a boy and others.” For: “Gouram Crawford, a Level 15 Male Arakocra Artificer with 30 HP, 10 AC, and 100 XP, is an Arcane Scholar of True Good alignment, possessing ability scores of Strength 8, Dexterity 8, Constitution 8, Intelligence 12, Wisdom 10, and Charisma 10; he is charismatic with ideals of unity, bonds of service, and a flaw of addiction, holding 325 gold and equipped with a Wand of Minor Conjuring, Book of Shadows, Leather Armor, Disguise Kit, 200 Gold from Marauders, 3 sets of Leather Armor, 2 Short Swords, a mysterious potion labeled ‘Elixir of Shadows’, and a Map of Hidden Locations in Thalos, while seeking the Heart of Echoes and battling addiction as he leads an army utilizing dark powers.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user's input\n- It should be in JSON",
        },
      ],
      state:
        "As Gouram Crawford stood under the vibrant blue skies of the rural farmlands, the tranquility was shattered by a sudden distortion in the air. Small, swirling portals had begun opening around the village, from which various creatures began to emerge, causing panic among the local farmers tending to their crops. The smell of burnt earth and the distant sounds of panic mixed with the faint echoes of the boy who recently disappeared. The village elder, an ancient olm with wise eyes, had called on all willing souls to confront this threat. He paused, catching his breath as he addressed the gathering crowd. 'Brave ones, we must delve into these dungeons, unravel the mystery behind the portals, and find our missing people. Will you step forward? The Heart of Echoes awaits those who are truly courageous.' Nearby, a group of frightened farmers huddle together, whispering tales of sighting gnomes and goblins wandering through the fields. Gouram feels a pull from his Wand of Minor Conjuring, the thirst for adventure rushing through him, but a darker tug pulls at his heart, the longing for his addiction calling him to seek out the Elixir of Shadows.",
      choices: [
        {
          title: "Approach the Elder",
          description:
            "Step forward and ask the elder for more details about the missing boy and the portals.",
        },
        {
          title: "Rally the Farmers",
          description:
            "Try to motivate the farmers to join you on this quest, ensuring them strength in numbers.",
        },
        {
          title: "Investigate the Portals",
          description:
            "Head towards the nearest portal to assess the situation and see what creatures may emerge.",
        },
        {
          title: "Free Choice",
          description:
            "Create your own path—choose any action you feel would be worthwhile in this predicament.",
        },
      ],
      createdAt: "2024-08-30T21:48:56.426Z",
      updatedAt: "2024-08-30T21:48:56.426Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Gouram Crawford",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
      __id: "669ad11857264cc693e47eeb",
      level: 15,
    },
    campaign: {
      title: "Solo Leveling",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1724244425579.webp",
    },
  },
  {
    game: {
      _id: "66d237c8aac7fa4b6238783a",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "6669644056751cbcba5cbc07",
      characterId: "6696f23daf8e3f587425bd1b",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the Infernal Abyss during Medieval Times, a party must gather allies and uncover ancient artifacts to defeat Dracula, who wields the legendary blood key that could unleash chaos upon the world, all while facing opposition from Archangel Gabriel, who believes the key's power is too dangerous for mortals to wield; will they succeed in overcoming Gabriel's interference to stop Dracula before it's too late?” For: “Dushasiez Amos, a level 2 male Arakocra Artificer with 7 HP, 13 AC, 15 XP, and hailing from an Arcane Scholar background, aligns as true good and possesses ability scores of 8 in all categories; he is adventurous, values harmony, seeks revenge, and is impulsive, carrying 20 gold and equipment including a wooden club, tarot deck, wooden armor, thieves tools, and a grappling hook device.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user's input\n- It should be in JSON",
        },
      ],
      state:
        "The sun dips low beyond the jagged peaks of the Infernal Abyss, casting an eerie orange glow over the desolate landscape. Souls wander aimlessly, shadows flicker and dance on the cracked earth, and the distant howl of the wind carries whispers of long-forgotten horrors. Dushasiez Amos, you find yourself perched on a rocky outcrop, enveloped in the memories of your scholarly pursuits. Clutched tightly in your hands is the tarot deck, seemingly pulsating with latent magical energy, as if urging you to look deeper into the unknown. You must gather allies and artifacts to confront Dracula, the master of the night, but it seems Archangel Gabriel's shimmering presence looms ominously overhead, challenging your quest. The winds shift directions, offering new paths as faint trails appear before you.",
      choices: [
        {
          title: "Investigate the Tarot Deck",
          description:
            "You sense that the tarot deck may hold secrets about your journey. Perhaps drawing a card could provide insight into your next moves.",
        },
        {
          title: "Search for Allies",
          description:
            "Venture deeper into the Abyss to seek companions. Whether another traveler or a hidden creature, strength in numbers is vital.",
        },
        {
          title: "Confront Archangel Gabriel",
          description:
            "With courage, you could ascend to meet Gabriel directly, attempting to persuade him to help your cause or at least hinder Dracula's plans.",
        },
        {
          title: "Free Choice",
          description:
            "Describe any action or path you wish to take, and shape your adventure as you see fit!",
        },
      ],
      createdAt: "2024-08-30T21:21:12.162Z",
      updatedAt: "2024-08-30T21:21:12.162Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Dushasiez Amos",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1721403672400.webp",
      __id: "6696f23daf8e3f587425bd1b",
      level: 2,
    },
    campaign: {
      title: "Defeat Dracula",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718182976712.webp",
    },
  },
  {
    game: {
      _id: "66ca1aa712d7f8ede465b058",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66681b8f336d28219dfc93e0",
      characterId: "669ad11857264cc693e47eeb",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the Paleolithic Time of the ancient kingdom of Thalos, players are drawn into a perilous quest to uncover the lost Heart of Echoes, a powerful artifact once wielded by the wizard-king Arion, after a mysterious figure at a bustling festival reveals an ancient map to the ruined capital of Althar, warns of deceptive echoes, and collapses from a poisoned wound, igniting a race against rival factions and dark forces eager to seize the artifact's power amidst strange disturbances plaguing the land.” For: “Gouram Crawford, a Level 15 Male Arakocra Artificer with 30 HP, AC 10, and 100 XP, is an Arcane Scholar of True Good alignment, possessing ability scores of Strength 8, Dexterity 8, Constitution 8, Intelligence 12, Wisdom 10, and Charisma 10; he is charismatic, values unity, is bonded to service, and struggles with addiction, carrying 325 gold and equipment including a Wand of Minor Conjuring, Book of Shadows, Leather Armor, Disguise Kit, 200 Gold from Marauders, 3 sets of Leather Armor, 2 Short Swords, a Mysterious Potion labeled ‘Elixir of Shadows’, and a Map of Hidden Locations in Thalos, while utilizing his artificer skills and increased control over shadows to lead a marauder army and aid others in his quest for the Heart of Echoes.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always include the \"Choices\" heading before the choices. \n- Always await the user's input\n- It should be in JSON",
        },
        {
          role: "assistant",
          content:
            '```json\n{\n  "summary": {\n    "player": {\n      "level": 15,\n      "name": "Gouram Crawford",\n      "gender": "Male",\n      "race": "Arakocra",\n      "class": "Artificer",\n      "hp": 30,\n      "ac": 10,\n      "xp": 100,\n      "background": "Arcane Scholar",\n      "alignment": "True Good",\n      "ability_scores": {\n        "strength": 8,\n        "dexterity": 8,\n        "constitution": 8,\n        "intelligence": 12,\n        "wisdom": 10,\n        "charisma": 10\n      },\n      "personality_traits": {\n        "ideal": "Unity",\n        "bond": "Service",\n        "flaw": "Addiction"\n      },\n      "gold": 325,\n      "equipment": [\n        "Wand of Minor Conjuring",\n        "Book of Shadows",\n        "Leather Armor",\n        "Disguise Kit",\n        "Elixir of Shadows",\n        "Map of Hidden Locations in Thalos"\n      ]\n    },\n    "interesting_people_met": [\n      {\n        "name": "Elandor",\n        "role": "Leader of the Warriors of Althar",\n        "description": "A tall warrior with a scar, embodies the spirit of Althar."\n      },\n      {\n        "name": "Gnome Merchant",\n        "role": "Seller of magical items",\n        "description": "Cheerful and knowledgeable about arcane artifacts."\n      }\n    ],\n    "decisions_made": [\n      "Offered to aid the Warriors of Althar.",\n      "Attempted to purchase the Scroll of Protective Charms but failed.",\n      "Decided to purchase the Wand of Minor Conjuring instead.",\n      "Headed directly to the location of the marauders based on hints from the Warriors.",\n      "Infiltrated the marauder hideout stealthily.",\n      "Prepared for combat against the marauders.",\n      "Defended and waited for an opening.",\n      "Counterattacked with the Wand.",\n      "Commanded the Shadows to Attack the Marauders.",\n      "Used healing abilities from the Book of Shadows.",\n      "Commanded the Shadows to Finish Off the Remaining Marauders.",\n      "Attempted to make the marauders his own army and took their possessions.",\n      "Trained the marauder army, achieving mixed results.",\n      "Explored nearby ruins and discovered ancient inscriptions."\n    ],\n    "allies_gathered": [\n      "Warriors of Althar",\n      "Marauders (now turned into an army)"\n    ],\n    "enemies_encountered": [\n      "Marauders (3)",\n      "Goblins (2) and a Wolf"\n    ],\n    "main_quest_goal": "Locate the legendary Heart of Echoes and prevent dark forces from seizing it.",\n    "friends_made": [],\n    "special_occurrences": [\n      {\n        "incident": "Attempted to purchase the Scroll of Protective Charms but failed due to a lack of understanding of its magic.",\n        "result": "Gouram learned that some magic requires respect and understanding, prompting him to seek knowledge over mere items."\n      },\n      {\n        "incident": "Successfully purchased the Wand of Minor Conjuring.",\n        "result": "Gouram now possesses the ability to cast simple spells, enhancing his capabilities for the upcoming challenges."\n      },\n      {\n        "incident": "Engaged in combat with marauders after failing to infiltrate stealthily.",\n        "result": "Gouram was knocked unconscious but revived himself by summoning shadows to fight for him."\n      },\n      {\n        "incident": "Successfully dominated the remaining marauders and claimed their possessions.",\n        "result": "Gouram now commands a band of marauders, gaining 200 gold pieces and various weapons and items, enhancing his power and resources."\n      },\n      {\n        "incident": "Explored the nearby ruins and discovered a group of goblins and a wolf.",\n        "result": "Gouram attempted to sneak up and steal a map from the goblins, successfully snatching it but alerting the goblins and wolf in the process, escalating the situation into a tense confrontation."\n      }\n    ]\n  },\n  "most_recent_occurrence": {\n    "description": "After successfully exploring the ruins and discovering a group of goblins arguing over a map, Gouram attempted to sneak up and steal the map. With a roll of 10, he managed to grab the map but was spotted by one of the goblins, leading to an alarmed reaction from the goblins and the wolf. Now, with the goblins ready to defend their territory, Gouram finds himself at a crossroads as he must decide whether to flee with the map, prepare for combat, negotiate for safe passage, or consider another',
        },
        {
          role: "user",
          content: "hey\n, Roll: 14",
        },
        {
          role: "assistant",
          content:
            "As the goblins notice Gouram's sneaky attempt to steal the map, their eyes widen with surprise. One of the goblins, a particularly scrappy-looking figure with a crude axe, shouts in a high-pitched voice, alerting the others. \"Hey! You! Thief! Get him!\" The remaining goblins, a mix of scrappers and shifty eyes, close in, and the wolf growls, baring its fangs. You take a deep breath, feeling a rush of adrenaline and knowing you must act quickly.\n\nWith your roll of 14, you manage to swing into action, demonstrating agility and quick thinking. You realize you can either attempt to negotiate with the goblins, utilize your Wand of Minor Conjuring to defend yourself, or prepare for an all-out battle against them and the wolf. The map is clutched tightly in your feathers, its secrets still unknown, but the goblins are eager to reclaim what you've taken.Choices: \nNeogotiate with the Goblins.\nUse the Wand of Minor Conjuring.\nPrepare for Combat.\nFree Choice.\n",
        },
      ],
      createdAt: "2024-08-24T17:38:47.889Z",
      updatedAt: "2024-08-24T18:31:15.059Z",
      __v: 24,
      choices: [
        {
          title: "Neogotiate with the Goblins",
          description:
            "Attempt to talk your way out of the situation and bargain for your safety in exchange for the map.",
        },
        {
          title: "Use the Wand of Minor Conjuring",
          description:
            "Draw upon your wand's magic to cast a diversion or defensive spell.",
        },
        {
          title: "Prepare for Combat",
          description:
            "Ready your weapons and prepare for battle against the goblins and the wolf.",
        },
        {
          title: "Free Choice",
          description:
            "Dictate your own action based on the current situation.",
        },
      ],
      state:
        "As the goblins notice Gouram's sneaky attempt to steal the map, their eyes widen with surprise. One of the goblins, a particularly scrappy-looking figure with a crude axe, shouts in a high-pitched voice, alerting the others. \"Hey! You! Thief! Get him!\" The remaining goblins, a mix of scrappers and shifty eyes, close in, and the wolf growls, baring its fangs. You take a deep breath, feeling a rush of adrenaline and knowing you must act quickly.\n\nWith your roll of 14, you manage to swing into action, demonstrating agility and quick thinking. You realize you can either attempt to negotiate with the goblins, utilize your Wand of Minor Conjuring to defend yourself, or prepare for an all-out battle against them and the wolf. The map is clutched tightly in your feathers, its secrets still unknown, but the goblins are eager to reclaim what you've taken.",
    },
    character: {
      class: "Artificer",
      name: "Gouram Crawford",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
      __id: "669ad11857264cc693e47eeb",
      level: 15,
    },
    campaign: {
      title: "Echoes of the Forgotten",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718098831015.webp",
    },
  },
  {
    game: {
      _id: "66c90c684545fd8b84538330",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "666afb7556751cbcba5cc19a",
      characterId: "669c305a47366f42f24b22e3",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the Classical Time setting of a Space Station in the galaxy Zorak, intrepid adventurers must outsmart a group of cunning Dwarves racing to construct the largest bong to claim a legendary magical marijuana bush that grants enlightenment, as the fate of the galaxy's enlightenment hangs in the balance.” For: “Polop Lightfoot, a male Arakocra Artificer (Level 1) with 1 HP, 11 AC, and 0 XP, hailing from an Arcane Scholar background and aligned with True Good, possesses ability scores of 8 in Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma; he is adventurous, values justice, bonds through honor, but struggles with greed, carries 10 gold, and is equipped with a Wooden Bow, Fishing rod, Thieves tools, and no armor, while on a quest to uncover ancient secrets using his magical and technological knowledge.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user's input\n- It should be in JSON",
        },
        {
          role: "user",
          content: "Confront the dwarves directly, Roll: 3",
        },
        {
          role: "assistant",
          content:
            "As you brave Polop Lightfoot, you soar through the dimly lit corridors of the Zorak Space Station, determined to confront the group of cunning dwarves working diligently to construct the largest bong. Your feathers ruffle with the anticipation of standing up to them, and you gather your strength to confront their scheme directly. However, as you approach, you clumsily stumble over a toolbox lying on the ground, catching the dwarves' attention but failing to impose a sense of authority. They laugh heartily at your awkwardness and consider you a joke rather than a threat. You feel a wave of embarrassment wash over you as they continue their work, seemingly unphased by your presence. You realize that brute force alone will not win this battle.Choices: \nTry to persuade the dwarves to abandon their project..\nLook for a way to sabotage their construction subtly..\nFree Choice.\n",
        },
      ],
      state:
        "As you brave Polop Lightfoot, you soar through the dimly lit corridors of the Zorak Space Station, determined to confront the group of cunning dwarves working diligently to construct the largest bong. Your feathers ruffle with the anticipation of standing up to them, and you gather your strength to confront their scheme directly. However, as you approach, you clumsily stumble over a toolbox lying on the ground, catching the dwarves' attention but failing to impose a sense of authority. They laugh heartily at your awkwardness and consider you a joke rather than a threat. You feel a wave of embarrassment wash over you as they continue their work, seemingly unphased by your presence. You realize that brute force alone will not win this battle.",
      choices: [
        {
          title: "Try to persuade the dwarves to abandon their project.",
          description:
            "Attempt to reason with the dwarves and convince them that their plans are misguided.",
        },
        {
          title: "Look for a way to sabotage their construction subtly.",
          description:
            "Try sneaking around to find a chance to undermine their work without being noticed.",
        },
        {
          title: "Free Choice",
          description:
            "Describe a creative action you would like to take that could influence the situation.",
        },
      ],
      createdAt: "2024-08-23T22:25:44.203Z",
      updatedAt: "2024-08-23T22:26:46.988Z",
      __v: 1,
    },
    character: {
      class: "Artificer",
      name: "Polop Lightfoot",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721512062375.webp",
      __id: "669c305a47366f42f24b22e3",
      level: 1,
    },
    campaign: {
      title: "smoke the magical marijuana Bush",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718287220936.webp",
    },
  },
  {
    game: {
      _id: "66c85b7f6619076668607937",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "666afb7556751cbcba5cc19a",
      characterId: "669ad11857264cc693e47eeb",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the classical era aboard a space station in the galaxy Zorak, a group of intrepid adventurers must race against cunning Dwarves who are frantically constructing the largest bong in existence to claim a legendary magical marijuana bush that promises enlightenment, as the fate of the galaxy's spiritual awakening hangs in the balance.” For: “Gouram Crawford, a 15th-level male Arakocra Artificer with 6 HP, 10 AC, and 0 XP, has a background as an Arcane Scholar, aligns with True Good, and possesses ability scores of 8 in all categories; he is charismatic, values unity, is bonded to service, but struggles with addiction, has 200 gold, and is equipped with a Novice Wand, Book of Shadows, Leather Armor, and Disguise Kit, while being dedicated to helping others and using his knowledge for the greater good.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user's input\n- It should be in JSON",
        },
      ],
      state:
        "As the artificial lights of the space station Oddysey flicker above you, the smell of ozone and burnt circuits fills the air. Your fellow Arakocra, Fellow Kaelyn, anxiously examines the monitor displaying the cosmic mystical road to the legendary magical marijuana bush. You know that the Dwarves of Durnok are furiously working on an unimaginable bong that would bask in the reflected glory of the bush’s enlightenment. The mission is clear: you must stop them before they harness its power, or the delicate balance of spiritual awakening across the galaxy will hang by a thread! \n\nAround you, the cold metallic walls of the station echo with the sounds of distant machinery and shouts from the Dwarven construction crew. A nearby console flickers to life, displaying the station’s schematics. To your left, there’s a maintenance door leading deeper into the station, and to your right, you hear the faint melodic notes of an Arakocra bard, perhaps an ally waiting to assist you. \n\nWhat would you like to do?",
      choices: [
        {
          title: "Investigate the console",
          description:
            "You approach the glowing console to see what information it may provide about the location of the Dwarves' bong or the magical bush.",
        },
        {
          title: "Open the maintenance door",
          description:
            "Decide to sneak into the maintenance area of the station to find an alternative route to the Dwarves.",
        },
        {
          title: "Seek the bard for assistance",
          description:
            "You walk toward the melodic sounds, hoping the bard might offer help or valuable information.",
        },
        {
          title: "Free Choice",
          description:
            "You can decide to take any course of action that you see fit in this moment.",
        },
      ],
      createdAt: "2024-08-23T09:50:55.161Z",
      updatedAt: "2024-08-23T09:50:55.161Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Gouram Crawford",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
      __id: "669ad11857264cc693e47eeb",
      level: 15,
    },
    campaign: {
      title: "smoke the magical marijuana Bush",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718287220936.webp",
    },
  },
  {
    game: {
      _id: "66c7864cd62faba7e38bb9d8",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66681b8f336d28219dfc93e0",
      characterId: "669ad11857264cc693e47eeb",
      conversations: [
        {
          role: "system",
          content:
            'Be the Dungeonmaster for a turn-based DnD Campaign about “In the Paleolithic Time of the ancient kingdom of Thalos, players are drawn into a perilous quest to uncover the Heart of Echoes, a powerful lost artifact, after a mysterious figure at a bustling festival reveals an ancient map to the long-lost capital of Althar and cryptically warns them, "Beware the echoes... they are not what they seem," just before dying from a poisoned wound, leading them to navigate treacherous politics, face various factions vying for the artifact, and ultimately decide its fate amid ghostly apparitions and strange disturbances plaguing the land.” For: “Gouram Crawford, a 15th-level male Arakocra Artificer with 6 HP, 10 AC, and 0 XP, hailing from an Arcane Scholar background and aligned with True Good, possesses ability scores of 8 across the board, is charismatic with ideals of unity, bonds of service, and a flaw of addiction; he has 200 gold and carries a Novice Wand, Book of Shadows, Leather Armor, and a Disguise Kit, while dedicated to helping others and using his knowledge for the greater good.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user\'s input\n- It should be in JSON',
        },
        {
          role: "user",
          content: "Seek out allies among festival-goers, Roll: 12",
        },
        {
          role: "assistant",
          content:
            "As you navigate through the vibrant atmosphere of the festival, you engage with the diverse crowd, seeking allies who may assist you in your quest for the Heart of Echoes. Your efforts to charm the festival-goers bear fruit; the die roll of 12 leads to a moderate success in gathering interest. Most of the vendors and entertainers are preoccupied with their own affairs, but two individuals stand out. One is a rugged hunter boasting knowledge of the wilds, while the other is an enigmatic bard who seems to have deep knowledge of the ancient tales of Thalos. \n\nBoth individuals seem intrigued by your quest and are willing to share their insights in exchange for something in return. They ask for a taste of your knowledge or a small favor to join your cause. Will you choose to barter with either of them, or press on to seek more potential allies?Choices: \nBarter with the Hunter.\nConsult the Bard.\nContinue searching for more allies.\nFree Choice.\n",
        },
      ],
      state:
        "As you navigate through the vibrant atmosphere of the festival, you engage with the diverse crowd, seeking allies who may assist you in your quest for the Heart of Echoes. Your efforts to charm the festival-goers bear fruit; the die roll of 12 leads to a moderate success in gathering interest. Most of the vendors and entertainers are preoccupied with their own affairs, but two individuals stand out. One is a rugged hunter boasting knowledge of the wilds, while the other is an enigmatic bard who seems to have deep knowledge of the ancient tales of Thalos. \n\nBoth individuals seem intrigued by your quest and are willing to share their insights in exchange for something in return. They ask for a taste of your knowledge or a small favor to join your cause. Will you choose to barter with either of them, or press on to seek more potential allies?",
      choices: [
        {
          title: "Barter with the Hunter",
          description:
            "Offer your knowledge in exchange for contact with the local faction he represents.",
        },
        {
          title: "Consult the Bard",
          description:
            "Ask the bard for stories about the artifact and the history of Althar.",
        },
        {
          title: "Continue searching for more allies",
          description:
            "Press on to seek other festival-goers who might lend their aid.",
        },
        {
          title: "Free Choice",
          description: "Dictate your own course of action.",
        },
      ],
      createdAt: "2024-08-22T18:41:16.413Z",
      updatedAt: "2024-08-22T18:41:45.309Z",
      __v: 1,
    },
    character: {
      class: "Artificer",
      name: "Gouram Crawford",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
      __id: "669ad11857264cc693e47eeb",
      level: 15,
    },
    campaign: {
      title: "Echoes of the Forgotten",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718098831015.webp",
    },
  },
  {
    game: {
      _id: "66c78509dea16d1de407f34d",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66681b8f336d28219dfc93e0",
      characterId: "669ad11857264cc693e47eeb",
      conversations: [
        {
          role: "system",
          content:
            'Be the Dungeonmaster for a turn-based DnD Campaign about “In the Paleolithic Time of the ancient kingdom of Thalos, amidst eerie whispers and ghostly apparitions, players are thrust into a perilous quest for the Heart of Echoes—an ancient artifact lost during the cataclysm that destroyed the capital, Althar—after a mysterious figure at a bustling festival reveals an ancient map and cryptically warns them, "Beware the echoes... they are not what they seem," propelling them into a race against various factions seeking to control its formidable power.” For: “Gouram Crawford, a Male Arakocra Artificer of Level 15 with 6 HP, 10 AC, 0 XP, and an Arcane Scholar background, is aligned as True Good, possesses ability scores of 8 across the board, exhibits a charismatic personality with ideals of unity, a bond of service, and a flaw of addiction, has 200 gold, carries a Novice Wand, Book of Shadows, Leather Armor, and Disguise Kit, and is dedicated to helping others while using his knowledge for the greater good.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user\'s input\n- It should be in JSON',
        },
        {
          role: "user",
          content: "Blend into the festival crowd, Roll: 2",
        },
        {
          role: "assistant",
          content:
            "As the festival in the ancient kingdom of Thalos bustles with life, Gouram Crawford, the Male Arakocra Artificer, attempts to blend into the vibrant crowd that celebrates the festivities. Colorful tents flap in the wind, laughter and music fill the air, and the smell of roasted meats wafts invitingly. However, with a roll of 2, Gouram's attempt to go unnoticed falters. He accidentally knocks over a stack of wooden crates, causing a loud crash that draws the attention of nearby townsfolk. They turn their curious eyes towards him, whispering among themselves about the unusual bird-man who seems out of place in the human festival. \n\nJust then, the mysterious figure from earlier—the one who revealed the ancient map—catches sight of him and gestures with urgency, motioning towards a nearby alley, away from the prying eyes of the festival-goers. Despite his initial subtlety failing, Gouram now has an opportunity to approach the figure for guidance and perhaps more insight into his quest for the Heart of Echoes. Vigilant whispers of ghostly apparitions and echoes fill the air, tightening the sense of urgency in the moment.Choices: \nApproach the mysterious figure in the alley..\nAttempt to calm the festival crowd and explain himself..\nDisguise himself and sneak away into the crowd..\nFree Choice.\n",
        },
      ],
      state:
        "As the festival in the ancient kingdom of Thalos bustles with life, Gouram Crawford, the Male Arakocra Artificer, attempts to blend into the vibrant crowd that celebrates the festivities. Colorful tents flap in the wind, laughter and music fill the air, and the smell of roasted meats wafts invitingly. However, with a roll of 2, Gouram's attempt to go unnoticed falters. He accidentally knocks over a stack of wooden crates, causing a loud crash that draws the attention of nearby townsfolk. They turn their curious eyes towards him, whispering among themselves about the unusual bird-man who seems out of place in the human festival. \n\nJust then, the mysterious figure from earlier—the one who revealed the ancient map—catches sight of him and gestures with urgency, motioning towards a nearby alley, away from the prying eyes of the festival-goers. Despite his initial subtlety failing, Gouram now has an opportunity to approach the figure for guidance and perhaps more insight into his quest for the Heart of Echoes. Vigilant whispers of ghostly apparitions and echoes fill the air, tightening the sense of urgency in the moment.",
      choices: [
        {
          title: "Approach the mysterious figure in the alley.",
          description:
            "Gouram decides to take a risk and approach the figure, curious about what more they could reveal.",
        },
        {
          title: "Attempt to calm the festival crowd and explain himself.",
          description:
            "Gouram tries to smooth things over with the festival-goers by giving a speech about unity and sharing knowledge.",
        },
        {
          title: "Disguise himself and sneak away into the crowd.",
          description:
            "Using his Disguise Kit, Gouram attempts to mask his appearance to escape unnoticed.",
        },
        {
          title: "Free Choice",
          description:
            "Choose any action Gouram would like to take, be it exploration, seeking assistance, or something else.",
        },
      ],
      createdAt: "2024-08-22T18:35:53.384Z",
      updatedAt: "2024-08-22T18:36:22.516Z",
      __v: 1,
    },
    character: {
      class: "Artificer",
      name: "Gouram Crawford",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
      __id: "669ad11857264cc693e47eeb",
      level: 15,
    },
    campaign: {
      title: "Echoes of the Forgotten",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718098831015.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66c783adb57b574db8705a7b",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "666afb7556751cbcba5cc19a",
      characterId: "669c305a47366f42f24b22e3",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the classical time setting of the space station in the galaxy Zorak, adventurers must race against a cunning group of Dwarves constructing the largest bong to smoke a legendary magical marijuana bush that grants profound enlightenment, as the fate of the galaxy's enlightenment hangs in the balance.” For: “Polop Lightfoot, a 1st-level male Arakocra Artificer with 1 HP, 11 AC, and 0 XP, is an Arcane Scholar of True Good alignment with ability scores of 8 in all areas, adventurous personality traits, ideals of justice, bonds of honor, a flaw of greed, 10 gold, and equipped with a Wooden Bow, Fishing Rod, Thieves Tools, and no armor, while on a quest to uncover ancient secrets using his skills in crafting and technology.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user's input\n- It should be in JSON",
        },
      ],
      state:
        "In the vast galaxy of Zorak, within a retro-futuristic space station that hums with the energy of technology and mysticism, a young Arakocra named Polop Lightfoot embarks on a daring adventure. The space station, which houses various races and cultures, is currently at the center of an unusual competition: a band of cunning Dwarves are racing against Polop to construct the largest bong ever seen. This device is not merely for show; it’s designed to smoke a legendary magical marijuana bush rumored to grant profound enlightenment to anyone who partakes. With the fate of enlightenment hanging in the balance, Polop’s journey will lead him through the treacherous halls of the station, filled with bizarre contraptions and curious beings. Armed only with a wooden bow, fishing rod, and thieves' tools, Polop must gather knowledge and resources to thwart the Dwarves’ plans while uncovering ancient secrets through his skills in crafting and technology. To succeed, he will need to be both clever and brave, for danger lies around every corner.",
      createdAt: "2024-08-22T18:30:05.038Z",
      updatedAt: "2024-08-22T18:30:05.038Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Polop Lightfoot",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721512062375.webp",
      __id: "669c305a47366f42f24b22e3",
      level: 1,
    },
    campaign: {
      title: "smoke the magical marijuana Bush",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718287220936.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66c783749d26131fc4f527cc",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66681b8f336d28219dfc93e0",
      characterId: "669c305a47366f42f24b22e3",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the Paleolithic Time of the ancient kingdom of Thalos, players are thrust into a perilous quest after a mysterious figure at a bustling festival presents them with an ancient map to the lost capital of Althar, where the legendary Heart of Echoes—a powerful artifact lost during a cataclysm—has resurfaced amidst strange disturbances, prompting noble houses, secretive cults, and ancient guardians to vie for its control, while the players must navigate treacherous politics and uncover hidden histories to prevent dark forces from harnessing its magic.” For: “Polop Lightfoot, a level 1 male Arakocra Artificer with 1 HP, AC 11, and 0 XP, is an Arcane Scholar of True Good alignment, possessing ability scores of Strength 8, Dexterity 8, Constitution 8, Intelligence 8, Wisdom 8, and Charisma 8; he is adventurous, values justice, holds honor close, but struggles with greed, carries 10 gold, and is equipped with a Wooden Bow, Fishing Rod, Thieves Tools, and no armor, while his quest involves uncovering ancient secrets through his crafting and tinkering skills.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user's input\n- It should be in JSON",
        },
      ],
      state:
        "In the Paleolithic Time of the ancient kingdom of Thalos, Polop Lightfoot, a curious Arakocra Artificer, finds himself at a vibrant festival bustling with townsfolk, merchants, and entertainers. Amid the laughter and music, a mysterious figure captures his attention. Wrapped in tattered cloaks and with an enigmatic aura, the stranger beckons Polop closer, revealing an ancient map inscribed with mysterious symbols that seem to point towards the lost capital of Althar. This capital, rumored to hold the legendary Heart of Echoes, was thought to be forever lost in the annals of history, submerging it in secrets far beyond imagination. As the figure speaks of strange disturbances and factions vying for power, Polop realizes that acquiring this artifact might hold the key to protecting Thalos from the looming threat of dark forces. With a sense of adventure tingling in his feathers and ten gold jingling in his pocket, Polop must decide his next move as he stands at the crossroads of destiny.",
      createdAt: "2024-08-22T18:29:08.993Z",
      updatedAt: "2024-08-22T18:29:08.993Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Polop Lightfoot",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721512062375.webp",
      __id: "669c305a47366f42f24b22e3",
      level: 1,
    },
    campaign: {
      title: "Echoes of the Forgotten",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718098831015.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66c783099d26131fc4f5278a",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66681b8f336d28219dfc93e0",
      characterId: "669ad11857264cc693e47eeb",
      conversations: [
        {
          role: "system",
          content:
            'Be the Dungeonmaster for a turn-based DnD Campaign about “In the Paleolithic Time of the ancient kingdom of Thalos, players are drawn into a perilous quest for the lost artifact known as the Heart of Echoes—an ancient crystal tied to the resurfacing of ghostly phenomena and coveted by noble houses, cults, and guardians—after a mysterious figure at a bustling festival reveals an ancient map to the ruined capital of Althar and warns, "Beware the echoes... they are not what they seem," setting them on a race against dark forces intent on harnessing the artifact’s power for nefarious purposes.” For: “Gouram Crawford, a Level 15 Male Arakocra Artificer with 6 HP, 10 AC, and 0 XP, has an Arcane Scholar background and a True Good alignment; his ability scores are all at 8, he is charismatic with ideals of unity, a bond of service, and a flaw of addiction, possesses 200 gold, and carries a Novice Wand, Book of Shadows, Leather Armor, and a Disguise Kit, while being dedicated to helping others with his Artificer abilities and showing intelligence and charm through his vibrant appearance.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user\'s input\n- It should be in JSON',
        },
        {
          role: "user",
          content: "hello , Roll: 1",
        },
        {
          role: "assistant",
          content:
            'In the bustling town of Eldra, the fiery colors of a festival light up the evening sky. Gouram Crawford, the arakocra artificer with vibrant plumage, finds himself amidst lively music, dancers, and the delectable aroma of roasted meats. Curious stalls line the streets, each bursting with wares, from trinkets to magical curiosities. Suddenly, a mysterious figure, cloaked in shadows and adorned with glimmering ancient jewelry, emerges from the crowd. He approaches Gouram and reveals an old, weathered map, pointing to the ruined capital of Althar, whispering, "Beware the echoes... they are not what they seem." As the figure vanishes into the throng, worry lingers in the air, and Gouram comes to realize that dark forces may be in pursuit of the Heart of Echoes. What lies ahead could change the fate of Thalos forever. To embark on this perilous quest, Gouram must first gather resources or allies to brace for the challenges awaiting him beyond the town\'s safety.Choices: \nVisit the market stalls to gather supplies or information.\nSeek out allies among festival-goers to join your quest.\nUse your artificer skills to craft something beneficial.\nFree Choice.\n',
        },
      ],
      state:
        'In the bustling town of Eldra, the fiery colors of a festival light up the evening sky. Gouram Crawford, the arakocra artificer with vibrant plumage, finds himself amidst lively music, dancers, and the delectable aroma of roasted meats. Curious stalls line the streets, each bursting with wares, from trinkets to magical curiosities. Suddenly, a mysterious figure, cloaked in shadows and adorned with glimmering ancient jewelry, emerges from the crowd. He approaches Gouram and reveals an old, weathered map, pointing to the ruined capital of Althar, whispering, "Beware the echoes... they are not what they seem." As the figure vanishes into the throng, worry lingers in the air, and Gouram comes to realize that dark forces may be in pursuit of the Heart of Echoes. What lies ahead could change the fate of Thalos forever. To embark on this perilous quest, Gouram must first gather resources or allies to brace for the challenges awaiting him beyond the town\'s safety.',
      createdAt: "2024-08-22T18:27:21.055Z",
      updatedAt: "2024-08-22T18:27:43.973Z",
      __v: 1,
    },
    character: {
      class: "Artificer",
      name: "Gouram Crawford",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
      __id: "669ad11857264cc693e47eeb",
      level: 15,
    },
    campaign: {
      title: "Echoes of the Forgotten",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718098831015.webp",
    },
  },
  {
    game: {
      _id: "66c5ec6327b7a6fd2d73a263",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66c5e1cc88360cc4cb033a16",
      characterId: "669ad11857264cc693e47eeb",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the present day Tranquil Farmlands, rural life is disrupted by mysterious dungeon portals unleashing dangerous creatures, prompting a protagonist to gain the ability to level up their skills through challenges with the support of local farmers, as they delve into dungeons to unravel the mystery behind the portals and confront a greater force threatening their homeland, all while responding to the village elder's call for skilled individuals to discover the truth behind the disappearances linked to these strange occurrences.” For: “Gouram Crawford, a 15th-level Male Arakocra Artificer with 6 HP, 10 AC, and 0 XP, hails from an Arcane Scholar background, embodies True Good alignment, possesses ability scores of 8 across all attributes, and is characterized by his charismatic personality, ideal of unity, bond of service, and flaw of addiction; he has 200 gold, wields a Novice Wand, carries a Book of Shadows, wears Leather Armor, and uses a Disguise Kit, while being dedicated to helping others with his Artificer abilities and having no spells.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user's input",
        },
        {
          role: "user",
          content: "Team up with local farmers to find missing crops, Roll: 7",
        },
        {
          role: "assistant",
          content:
            "In the Tranquil Farmlands, you gather a group of local farmers who are equally troubled by the disappearance of their crops. Each farmer expresses their concern and offers their support, highlighting how the mysterious dungeon portals might be connected. With your charm and charisma, you convince them to join you in the search for answers.\n\nYou head towards the fields where the crops went missing. As you approach, you find strange marks in the soil and odd traces leading towards a portal shimmering faintly at the edge of a nearby forest. The farmers look apprehensive, but they trust your skill as an Artificer. \n\nYou can either inspect the strange marks for clues, ask the farmers about any strange sightings, or venture into the forest towards the portal. However, it feels like you might need to bolster your team with knowledge before making any rash decisions.Choices: \nInspect the strange marks in the soil.\nAsk the farmers about any strange sightings.\nVenture into the forest towards the portal.\nFree Choice.\n",
        },
        {
          role: "user",
          content: "Venture into the forest towards the portal, Roll: 19",
        },
        {
          role: "assistant",
          content:
            "With determination, you lead the farmers into the forest, making your way towards the shimmering portal. The sound of rustling leaves and distant animal noises fills the air. You navigate through the trees with ease, guided by your keen sense of direction and a deep desire to unravel the mystery of the missing crops.\n\nAs you draw nearer to the portal, you notice its outline becomes clearer, revealing swirling energy and flashes of light within. The farmers follow closely, their fear transforming into awe as they witness the power emanating from the portal.  \n\nUpon reaching the portal, you examine it closely and recognize that it’s unstable, flickering between dimensions. You recall reading about such portals and realize they often serve as gateways to other realms, sometimes inhabited by creatures that can steal crops or cause other disasters.\n\nSuddenly, you spot a shadowy figure lurking nearby, watching intently. Your perceptive nature allows you to react quickly; you can choose to confront the figure, attempt to stealthily investigate further, or use your disguise kit to approach it incognito.Choices: \nConfront the shadowy figure..\nStealthily investigate further..\nUse your disguise kit..\nFree Choice..\n",
        },
        {
          role: "user",
          content: "Stealthily investigate further., Roll: 17",
        },
        {
          role: "assistant",
          content: "undefinedChoices: \n",
        },
        {
          role: "user",
          content: "Stealthily investigate further.\n, Roll: 17",
        },
        {
          role: "assistant",
          content:
            'You decide to investigate the shadowy figure more closely, slipping quietly among the trees and underbrush. Your skillful movements allow you to remain hidden as you approach the figure without making a sound.\n\nAs you get closer, you see that the figure is clad in dark robes and seems to be examining the portal while muttering to themselves. From your vantage point, you overhear snippets of their conversation, mentioning something about "harvesting the crops from this realm" and "the master will be pleased with the results."\n\nRealizing this may be the perpetrator behind the crop disappearances and sensing that you have the element of surprise, you can either decide to ambush the figure, try to capture them for questioning, or quietly retreat and inform the farmers of what you\'ve discovered.Choices: \nAmbush the shadowy figure..\nTry to capture the figure for questioning..\nQuietly retreat and inform the farmers..\nFree Choice.\n',
        },
        {
          role: "user",
          content: "Quietly retreat and inform the farmers., Roll: 6",
        },
        {
          role: "assistant",
          content:
            'You decide that caution is the better part of valor and begin to quietly retreat back to the farmers to share what you’ve discovered. However, as you attempt to sneak away, a branch snaps under your foot, causing a loud crack! The shadowy figure spins around, eyes narrowing in your direction. Realizing that they’ve spotted you, you quickly take cover behind a nearby tree. You can hear them muttering something, but you can’t catch all the words, only pieces like "intruder" and "must eliminate." Your options are now limited; you can attempt to create a distraction to divert their attention, stay hidden and hope they lose interest, or prepare to confront the figure before they can alert others.Choices: \nCreate a distraction.\nStay hidden.\nPrepare to confront the figure.\nFree Choice.\n',
        },
        {
          role: "user",
          content: "Create a distraction, Roll: 13",
        },
        {
          role: "assistant",
          content:
            "You quickly scan your surroundings for something to create a distraction. Spotting a few loose stones nearby, you quietly pick one up and throw it deeper into the woods. The stone clatters against the ground, creating a noise that echoes through the trees.\n\nThe shadowy figure immediately turns, eyes wide with alertness, and begins moving towards the sound. This gives you the perfect opportunity to slip away unnoticed. You hurry back to the farmers and catch them by surprise as you relay the details of what you've discovered—a shadowy figure intent on harvesting crops via the portal.\n\nThe farmers listen intently, their expressions shifting from confusion to concern as you describe the figure's intentions. They rally together, suggesting that they could help set up a trap at the portal to confront this individual when they return.\n\nWith this newfound plan at hand, the farmers split into groups to gather resources while you take the lead on preparing for the confrontation. You can decide how to organize the farmers' efforts, create something of your own using your Artificer skills, or scout the area for any signs of the shadowy figure's return.Choices: \nOrganize the farmers' efforts for the trap..\nCreate something using your Artificer skills..\nScout the area for signs of the figure's return..\nFree Choice.\n",
        },
        {
          role: "user",
          content: "Organize the farmers' efforts for the trap., Roll: 14",
        },
        {
          role: "assistant",
          content:
            "You take charge of the situation, organizing the farmers into effective teams to prepare a trap for the shadowy figure. With your leadership skills, you assign roles based on each farmer's strengths. One group gathers ropes and nets, while another collects heavy objects to create barriers around the portal. You instruct them on how to set up the trap in a way that will ensnare the figure but also be safe enough to avoid harming any innocent bystanders. The farmers work efficiently, their confidence in you growing with each passing moment. After some time, you have a well-prepared trap set strategically around the portal, waiting for the figure to fall into your snare. As you take a moment to rest and ensure everything is set, you hear rustling in the bushes. The farmers hush, and everyone turns to face the direction of the noise. The portal is also starting to shimmer ominously, and you can sense the figure's return might be imminent.Choices: \nTake a defensive stance and wait for the figure..\nCreate an additional surprise element to the trap..\nNegotiate with the farmers on the next course of action..\nFree Choice.\n",
        },
        {
          role: "user",
          content:
            "Negotiate with the farmers on the next course of action., Roll: 19",
        },
        {
          role: "assistant",
          content:
            "You gather the farmers in a huddle, assessing their battle readiness and discussing the best approach for the imminent encounter with the shadowy figure. With your charismatic leadership and the level of confidence you've inspired, the farmers contribute ideas and quickly reach a consensus. After some discussion, you all agree on a solid plan: you'll set a hidden signal to alert the farmers when the figure approaches the trap, and they'll spread out to flank the area. This way, they'll be able to surprise the figure from all sides when the trap is activated. You assign specific roles to everyone, ensuring that those who are most capable of combat stand ready to engage if necessary. You also instruct some farmers to stay hidden but close, ready to assist or distract if the situation escalates. With the plan in place, tension fills the air as you wait in anticipation. The farmers nod at you, ready to put the plan into action. Suddenly, amidst the growing shimmer of energy from the portal, you see the shadowy figure appear, stepping through with a wicked grin as they scan the area.Choices: \nSet the trap in motion immediately..\nAttempt to talk to the shadowy figure before confrontation..\nSpring the trap if the figure gets too close to it..\nFree Choice..\n",
        },
        {
          role: "user",
          content: "Set the trap in motion immediately., Roll: 10",
        },
        {
          role: "assistant",
          content:
            'You decide that the element of surprise is key, and with a clear signal, you motion to the farmers to spring the trap. However, as you set the mechanism into motion, the shadowy figure notices the shifting ground and starts to react. They shout out in alarm, "What is this?!" just as the trap activates, ensnaring them in ropes and nets. While the trap catches the figure\'s upper body, they manage to free one arm, and in a panic, they lash out with dark energy, sending a wave of force towards you and the farmers. This causes some chaos, throwing off the careful positions you had all established. However, your quick thinking allows a few farmers to fortify their positions and continue restraining the figure. In the fray of the confrontation, the figure looks enraged but trapped. You have the opportunity to either try to intimidate them into obedience, attempt to negotiate for answers, or rally the farmers for a final push to fully subdue the figure.Choices: \nIntimidate the figure to gain their compliance..\nNegotiate with the figure for answers..\nRally the farmers for a final push to fully subdue them..\nFree Choice.\n',
        },
        {
          role: "user",
          content:
            "Rally the farmers for a final push to fully subdue them., Roll: 14",
        },
        {
          role: "assistant",
          content:
            "With the threat contained, the shadowy figure glares at you with anger, but they are completely restrained now. The air is thick with the sense of victory, yet uncertainty remains. The farmers stand around, waiting for your next command, eager to know what comes next in this confrontation. You consider the next steps: you could interrogate the figure for crucial information about the portals and their dark masters, or perhaps turn them over to the village authorities, trusting them to handle the situation. If you feel adventurous, investigating the figure’s belongings might lead to uncovering some hidden secrets. Every choice carries weight, and now it's time to decide how to proceed.Choices: \nInterrogate the figure for information..\nTurn the figure over to the authorities in the village..\nInvestigate the figure’s belongings for clues..\nFree Choice.\n",
        },
      ],
      createdAt: "2024-08-21T13:32:19.276Z",
      updatedAt: "2024-08-21T13:47:09.532Z",
      __v: 10,
      choices: [
        {
          title: "Interrogate the figure for information.",
          description:
            "Demand answers from the subdued figure about the portals and their dark masters.",
        },
        {
          title: "Turn the figure over to the authorities in the village.",
          description:
            "Hand the figure over to the local authorities for justice.",
        },
        {
          title: "Investigate the figure’s belongings for clues.",
          description:
            "Search the figure’s possessions for any hints or valuable information.",
        },
        {
          title: "Free Choice",
          description: "Decide what you want to do independently.",
        },
      ],
      state:
        "With the threat contained, the shadowy figure glares at you with anger, but they are completely restrained now. The air is thick with the sense of victory, yet uncertainty remains. The farmers stand around, waiting for your next command, eager to know what comes next in this confrontation. You consider the next steps: you could interrogate the figure for crucial information about the portals and their dark masters, or perhaps turn them over to the village authorities, trusting them to handle the situation. If you feel adventurous, investigating the figure’s belongings might lead to uncovering some hidden secrets. Every choice carries weight, and now it's time to decide how to proceed.",
    },
    character: {
      class: "Artificer",
      name: "Gouram Crawford",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
      __id: "669ad11857264cc693e47eeb",
      level: 15,
    },
    campaign: {
      title: "Solo Leveling",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1724244425579.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66c5e21d88360cc4cb033a3b",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66c5e1cc88360cc4cb033a16",
      characterId: "66a2421788abd91bbf05f9f7",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the present time of the Tranquil Farmlands, rural life is disrupted by mysterious dungeon portals that unleash dangerous creatures, prompting a protagonist, supported by local farmers and called upon by the village elder after a boy goes missing, to gain the ability to level up their skills through challenges, confront increasingly difficult foes, and uncover the truth behind these portals to protect their homeland from an ominous threat.” For: “Silka Beam, a 1st-level female Dragonborn Artificer with 8 HP, 10 AC, and 2 XP, hails from an Arcane Scholar background and follows a True Good alignment; she possesses ability scores of 8 across the board, is inquisitive with ideals of freedom, bonds of honor, and a flaw of greed, has 50 gold, carries a Novice Wand, Book of Shadows, and Holy Water, and is characterized by her iridescent scales and curious demeanor.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user's input",
        },
        {
          role: "assistant",
          content:
            "### Summary of Conversation History\n\n**Character Details:**\n- **Level:** 1\n- **Name:** Silka Beam\n- **Gender:** Female\n- **Race:** Dragonborn\n- **Class:** Artificer\n- **HP:** 8\n- **AC:** 10\n- **XP:** 52 (next level at 300 XP)\n- **Background:** Arcane Scholar\n- **Alignment:** True Good\n- **Ability Scores:** All 8s\n- **Personality Traits:** Inquisitive\n- **Ideal:** Freedom\n- **Bond:** Honor\n- **Flaw:** Greed\n- **Gold:** 50\n\n**Equipment:**\n- Novice Wand\n- Book of Shadows\n- Holy Water\n\n**Recent Encounters:**\n- **Enemies Encountered:** \n  - An imp, which Silka confronted and ultimately defeated.\n\n**Decisions Made:**\n1. Explored a nearby dungeon portal and confronted an imp that emerged.\n2. Attempted various actions against the imp, including dancing, using holy water, and physical attacks.\n3. Successfully defeated the imp with a final strike after a series of combat maneuvers. \n\n**Allies Gathered:** \n- Local farmers discussed in the village but no specific allies have joined Silka yet.\n\n**Main Quest Goal:**\n- Investigate the mysterious dungeon portals, protect the village from dangerous creatures, and unravel the mystery behind the strange disappearances of villagers, including a boy.\n\n**Special Occurrences:**\n- Silka's choice to dance unexpectedly disoriented the imp, allowing her time to prepare for her next attack. Eventually, her determination led to a successful defeat of the imp, showcasing her growth and potential as an adventurer.\n\n### Most Recent Incident:\nIn the most recent occurrence, Silka faced an imp that emerged from a dungeon portal. After a series of actions, including dancing and attempting to use her Novice Wand, she ultimately landed a powerful punch, followed by a decisive attack that defeated the imp. This victory not only awarded her 50 XP but also built her confidence as she continues her journey to protect her village from the encroaching dangers of the dungeon portals. Now, with the imp defeated, Silka stands before the swirling portal, contemplating her next move in the adventure yet to unfold.",
        },
        {
          role: "user",
          content: "Retreat\n, Roll: 9",
        },
        {
          role: "assistant",
          content:
            "Silka, after defeating the imp, realizes that it might be wise to retreat and recover. The swirling portal behind her hums ominously as she considers her options. With a roll of 9, her retreat is somewhat rushed as she navigates the darkened terrain of the dungeon. Therefore, while she successfully makes it out of the portal's vicinity, she stumbles over a rock and grazes her arm. She takes 1 point of damage, leaving her with 7 HP. This experience teaches her to be more cautious when moving through unfamiliar territory. \n\nAs she reaches the safety of the farmlands, the sun shines brightly, providing a comforting warmth. The farmers, seeing her emerge, show concern but also relief that she has returned safely. There’s a sense of camaraderie and curiosity about her encounter. Silka knows she must report to the village elder about the portal and the imp's emergence, and there may be newfound allies willing to assist her in her quest.\n\nAs she regroups, she considers what to do next. \n\n1. **Report to the Village Elder:** Return to the village and inform the elder about the imp and the portal. There may be important information to exchange.\n2. **Help the Farmers:** Lend a hand to the local farmers as they discuss the strange occurrences, building stronger bonds.\n3. **Investigate Further:** Curious about the portal, Silka could choose to explore nearby areas for clues, potentially facing new challenges. \n4. **Free Choice:** Dictate your own adventure or action in the current scenario.Choices: \nReport to the Village Elder.\nHelp the Farmers.\nInvestigate Further.\nFree Choice.\n",
        },
        {
          role: "user",
          content: "Help the Farmers, Roll: 15",
        },
        {
          role: "assistant",
          content:
            "Silka decides to help the farmers, believing that strengthening their bonds will aid in her quest. As she approaches them, they are gathered around discussing the recent happenings in the village, including more reports of missing livestock and strange noises coming from the forest at night.\n\nWith a roll of 15, Silka joins the conversation with insightful suggestions and her knowledge from the Book of Shadows. The farmers appreciate her input and together they devise a plan to watch over their lands at night to ensure no more creatures come through the portal. They ask for her assistance in reinforcing their barn, enhancing its defenses with her artificer skills.\n\nWorking alongside the farmers, Silka uses her Novice Wand and some supplies provided by them to create simple but effective traps and barriers around the barn. The atmosphere shifts from despair to hope as everyone works together, knowing they will protect their homes better with these defenses. As night approaches, they prepare to keep watch, and Silka is invited to stay with them in the barn.Choices: \nPrepare for the Night Watch.\nScout the Surroundings.\nDiscuss Further Plans.\nFree Choice.\n",
        },
        {
          role: "user",
          content: "Discuss Further Plans, Roll: 2",
        },
        {
          role: "assistant",
          content: "undefinedChoices: \n",
        },
        {
          role: "user",
          content: "dance, Roll: 10",
        },
        {
          role: "assistant",
          content: "undefinedChoices: \n",
        },
      ],
      createdAt: "2024-08-21T12:48:29.609Z",
      updatedAt: "2024-08-21T13:29:55.563Z",
      __v: 22,
    },
    character: {
      class: "Artificer",
      name: "Silka Beam",
      race: "Dragonborn",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721910008865.webp",
      __id: "66a2421788abd91bbf05f9f7",
      level: 1,
    },
    campaign: {
      title: "Solo Leveling",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1724244425579.webp",
    },
  },
  {
    game: {
      _id: "66c5d59926628ad3d7eb965f",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "6669644056751cbcba5cbc07",
      characterId: "66a2421788abd91bbf05f9f7",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the Infernal Abyss during Medieval Times, a party must gather allies and uncover ancient artifacts to defeat the tyrannical Dracula, who wields the legendary blood key that could unleash his full power and conquer the world, all while contending with the Archangel Gabriel, who believes that the key's power is too dangerous for mortals to wield and seeks to thwart their mission.” For: “Silka Beam, a level 1 female Dragonborn Artificer with 8 HP, 10 AC, and 2 XP, hails from an Arcane Scholar background, aligns with True Good, has ability scores of 8 across the board, possesses an inquisitive personality trait with ideals of freedom, bonds of honor, and a flaw of greed, carries 50 gold, and is equipped with a Novice Wand, Book of Shadows, and Holy Water.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user's input",
        },
        {
          role: "user",
          content: "Confront the Archangel Gabriel, Roll: 2",
        },
        {
          role: "user",
          content: "Search the surroundings for allies or artifacts, Roll: 10",
        },
        {
          role: "user",
          content:
            "Flee from Gabriel and regroup with a stronger ally., Roll: 18",
        },
        {
          role: "user",
          content: "Flee from Gabriel, Roll: 4",
        },
        {
          role: "user",
          content: "Attempt to communicate with Gabriel., Roll: 17",
        },
        {
          role: "user",
          content:
            "Offer the Holy Water as a sign of respect to Gabriel., Roll: 14",
        },
        {
          role: "user",
          content: "Act decisively with Gabriel, Roll: 6",
        },
        {
          role: "assistant",
          content:
            "You find yourself in the dimly lit confines of the Infernal Abyss, where whispers of ancient power echo around you. The air is thick with tension as you initially confront the Archangel Gabriel, his wings glimmering with divine light while the weight of his disapproval crushes your resolve. Fueled by your inquisitive nature and ideals of freedom, you seek to gather allies and ancient artifacts to oppose the tyrannical Dracula, who wields the blood key, a weapon that threatens to unshackle legions of darkness upon the world.\n\nUpon your search, you spot remnants of an old battlefield where many have died; an ancient banner billows in the wind nearby, and there are many scattered bones that hint at old alliances. Perhaps there lies an artifact of power or an ally hidden amid the fog of war, but as you search with intent, Gabriel intervenes, bolstering his formidable presence in the surroundings.\n\nIn a moment of desperation, you attempt to flee from Gabriel, seeking to regroup with a stronger ally, but your footing falters, and you find yourself in an even more precarious position. However, when you finally regain your composure, the possibility to communicate with Gabriel arises. You make your attempt, but the sky darkens, reflecting your mixed intentions.\n\nAfter you offer him Holy Water, an action steeped in respect, Gabriel considers your gesture, which earns you a moment of peace in the storm of your confrontation. However, acting decisively escalates the situation as Gabriel’s lofty ideals clash against your mortal purpose and greed.\n\nGabriel levels his gaze upon you, prepared for whatever course of action you undertake next. The trembling air around him feels charged, and you know the path ahead is fraught with challenges and difficult decisions.",
        },
      ],
      state:
        "You find yourself in the dimly lit confines of the Infernal Abyss, where whispers of ancient power echo around you. The air is thick with tension as you initially confront the Archangel Gabriel, his wings glimmering with divine light while the weight of his disapproval crushes your resolve. Fueled by your inquisitive nature and ideals of freedom, you seek to gather allies and ancient artifacts to oppose the tyrannical Dracula, who wields the blood key, a weapon that threatens to unshackle legions of darkness upon the world.\n\nUpon your search, you spot remnants of an old battlefield where many have died; an ancient banner billows in the wind nearby, and there are many scattered bones that hint at old alliances. Perhaps there lies an artifact of power or an ally hidden amid the fog of war, but as you search with intent, Gabriel intervenes, bolstering his formidable presence in the surroundings.\n\nIn a moment of desperation, you attempt to flee from Gabriel, seeking to regroup with a stronger ally, but your footing falters, and you find yourself in an even more precarious position. However, when you finally regain your composure, the possibility to communicate with Gabriel arises. You make your attempt, but the sky darkens, reflecting your mixed intentions.\n\nAfter you offer him Holy Water, an action steeped in respect, Gabriel considers your gesture, which earns you a moment of peace in the storm of your confrontation. However, acting decisively escalates the situation as Gabriel’s lofty ideals clash against your mortal purpose and greed.\n\nGabriel levels his gaze upon you, prepared for whatever course of action you undertake next. The trembling air around him feels charged, and you know the path ahead is fraught with challenges and difficult decisions.",
      choices: [
        {
          title: "Seek Allies from the Battlefield",
          description:
            "Investigate the surroundings to find any allies lurking in the shadows, or perhaps remnants of an ancient artifact that may aid your cause.",
        },
        {
          title: "Negotiate with Gabriel",
          description:
            "Attempt to persuade Gabriel to see your point of view and the necessity of your quest, aiming for a potential alliance.",
        },
        {
          title: "Prepare for a Confrontation",
          description:
            "Ready yourself for a potential battle against Gabriel, should negotiations fail.",
        },
        {
          title: "Free Choice",
          description:
            "You have the freedom to dictate your own course of action.",
        },
      ],
      createdAt: "2024-08-21T11:55:05.884Z",
      updatedAt: "2024-08-21T12:43:01.464Z",
      __v: 7,
    },
    character: {
      class: "Artificer",
      name: "Silka Beam",
      race: "Dragonborn",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721910008865.webp",
      __id: "66a2421788abd91bbf05f9f7",
      level: 1,
    },
    campaign: {
      title: "Defeat Dracula",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718182976712.webp",
    },
  },
  {
    game: {
      _id: "66c5d2dcdcc41c499f55858b",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66681b8f336d28219dfc93e0",
      characterId: "6696f23daf8e3f587425bd1b",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the Paleolithic era of the ancient kingdom of Thalos, players are drawn into a web of intrigue and danger as they seek the legendary Heart of Echoes, a powerful artifact once wielded by the wizard-king Arion, after a mysterious figure at a bustling festival presents them with an ancient map leading to the lost capital of Althar and cryptically warns, \"Beware the echoes... they are not what they seem,\" prompting them to navigate treacherous politics and face dark forces eager to control the artifact's magic amidst strange disturbances plaguing the land.” For: “Dushasiez Amos, a level 2 male Arakocra Artificer with 7 HP, 13 AC, and 15 XP, hails from an Arcane Scholar background and follows a true good alignment; his ability scores are all 8, and his personality traits include being adventurous with ideals of harmony, a bond of revenge, and an impulsive flaw; he possesses 20 gold and is equipped with a wooden club, tarot deck, wooden armor, thieves tools, and a grappling hook device.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user's input",
        },
        {
          role: "user",
          content:
            "Approach the scholar and learn more about the Heart of Echoes., Roll: 9",
        },
        {
          role: "user",
          content:
            "Inquire more about the history and significance of Althar in relation to the Heart of Echoes., Roll: 12",
        },
        {
          role: "user",
          content:
            "Investigating further among the crowd could yield useful information., Roll: 9",
        },
        {
          role: "user",
          content:
            "Examine the crowd more closely to find someone who might have firsthand knowledge of recent disturbances., Roll: 3",
        },
        {
          role: "user",
          content:
            "Approach the hooded figure to ask about the disturbances., Roll: 14",
        },
      ],
      state:
        'You stand amidst the bustling festival, a colorful mixture of vendors, performers, and townsfolk all oblivious to the shadows that linger beneath the celebratory surface. Your curiosity leads you to a nearby scholar, an old elf with glasses perched on the end of his nose, who seems to have an earnest aura about him. You approach him eagerly, hoping to learn about the fabled Heart of Echoes. After some initial pleasantries, you ask, "What do you know about this artifact and its relation to Althar?" \n\nThe old scholar, after a moment of consideration, starts sharing his knowledge. He tells you, "The Heart of Echoes was said to amplify the magic of the wizard-king Arion, making him a near-invincible ruler. Althar, the lost capital, was known for its grand halls filled with sorcery and wisdom. However, after Arion\'s reign, it fell into ruin under mysterious circumstances, and the Heart vanished alongside it. If it ever resurfaced, it could tip the balance of power across the land." You feel that this information might be crucial, and for a moment, it inspires both awe and fear.\n\nFeeling more adventurous, you decide to continue your quest and delve deeper into the crowd to gather more information about Althar, but your efforts prove fruitless as you realize the festival-goers are more concerned with merriment than the ancient tales you seek. With a failed investigation (Roll: 9), it becomes clear that more direct actions are necessary. As you push further into the throng of people, you find yourself overwhelmed and distracted, noticing nothing other than laughter and music.\n\nAfterward, as you remain observant, a figure catches your attention—a mysterious hooded person standing slightly apart from the crowd. They seem to watch the festival with keen eyes that know too much. Curious and determined, you approach them to inquire about the recent disturbances plaguing the land and the echoes that had been alluded to earlier. You gain confidence from the earlier, more successful interactions and feel that this might yield significant insights.\n\nUpon approaching the hooded figure, you ask your question. They look at you intently, and after a moment’s pause, they reply, "The echoes you mention carry both whispers of magic long lost and shadows seeking to reclaim power. The very air trembles around us; strange occurrences have been noted. Travelers have spoken of ghostly remnants and strange sightings in the ruins of Althar. There are forces at play that seek the Heart of Echoes, and they are not benevolent. Take heed, the echoes speak not only to the past but foretell a turbulent future." As the figure speaks, a hint of urgency colors their words, and you feel the weight of the situation growing heavier. \n\nSatisfied with the encounter, you ponder your next move in this light of newfound knowledge.',
      choices: [
        {
          title: "Investigate further into the disturbances.",
          description:
            "Draw upon your skills and knowledge to uncover potential leads on the disturbances around Althar.",
        },
        {
          title: "Seek allies among festival-goers.",
          description:
            "Try to forge connections and find companions who may assist you in your quest.",
        },
        {
          title: "Free Choice",
          description:
            "Specify what you want to do next; perhaps explore the festival, return to the scholar, or something else!",
        },
      ],
      createdAt: "2024-08-21T11:43:24.559Z",
      updatedAt: "2024-08-21T11:53:31.211Z",
      __v: 6,
    },
    character: {
      class: "Artificer",
      name: "Dushasiez Amos",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1721403672400.webp",
      __id: "6696f23daf8e3f587425bd1b",
      level: 2,
    },
    campaign: {
      title: "Echoes of the Forgotten",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718098831015.webp",
    },
  },
  {
    game: {
      _id: "66c5d202dcc41c499f5584f5",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66b7ef66b05e09fe2f7fe4c9",
      characterId: "6696f23daf8e3f587425bd1b",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In a post-apocalyptic future set in the submerged ruins of the Sunken City, remnants of humanity strive to build a rocket to reach the moon before the demonic Tieflings, facing bizarre threats like cosmic-spore-infused space mushrooms that disrupt their efforts and force them to seek unlikely allies and ancient technologies to escape their sunken prison.” For: “Dushasiez Amos, a level 2 male Arakocra Artificer with 7 HP, 13 AC, and 15 XP, hails from an Arcane Scholar background, aligns with true good, possesses ability scores of 8 across all attributes, and exhibits personality traits of being adventurous, valuing harmony, seeking revenge, and being impulsive; he carries 20 gold and is equipped with a wooden club, tarot deck, wooden armor, thieves tools, and a grappling hook device.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user's input",
        },
      ],
      state:
        "You wake up in the Sunken City, where the remnants of humanity struggle to survive amidst the flooded ruins and bizarre threats. The air is thick with the scent of decay and the distant glow of bioluminescent fungi. You're perched on a crumbling rooftop, looking out over ruinous streets now submerged by tidal waves long ago. Your heart races with a mix of fear and excitement as you recall your mission: to join fellow survivors in a grand scheme to build a rocket capable of reaching the moon before the demonic Tieflings can seize control. What's more, the cosmic-spore-infused space mushrooms are spreading throughout the city, threatening to disrupt all efforts to escape your sunken prison. Today, you feel an urge towards adventure, either by diving into exploration or collaborating with others, but a strong undercurrent of revenge also propels you after a devastating loss at the hands of the Tieflings. You have your wooden club, the grappling hook device slung over your shoulder, and the mysterious tarot deck that hints at unpredictable fortunes. What will you do next?",
      choices: [
        {
          title: "Search for Allies",
          description:
            "Head through the submerged streets to locate other survivors who might join the rocket-building effort.",
        },
        {
          title: "Investigate the Ruins",
          description:
            "Explore the nearby ruins for ancient technologies that could aid in your mission.",
        },
        {
          title: "Confront a Tiefling",
          description:
            "Seek out and confront a Tiefling to extract information or take revenge.",
        },
        {
          title: "Free Choice",
          description: "Dictate your own action and decide how to proceed.",
        },
      ],
      createdAt: "2024-08-21T11:39:46.382Z",
      updatedAt: "2024-08-21T11:39:46.382Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Dushasiez Amos",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1721403672400.webp",
      __id: "6696f23daf8e3f587425bd1b",
      level: 2,
    },
    campaign: {
      title: "Land on the Moon",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aqa-aqa%20spezial/1723330405981.webp",
    },
  },
  {
    game: {
      _id: "66c5042823545b0e4a434861",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "666afb7556751cbcba5cc19a",
      characterId: "669ad11857264cc693e47eeb",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “Set in the galaxy Zorak during Classical Time, adventurers aboard a Space Station race against a cunning group of Dwarves determined to build the largest bong and claim the legendary magical marijuana Bush, which promises enlightenment to its users, as they navigate treacherous obstacles to secure the fate of the galaxy.” For: “Gouram Crawford, a 15th-level male Arakocra Artificer with 6 HP, 10 AC, and 0 XP, has an Arcane Scholar background, is True Good aligned, possesses ability scores of 8 across the board, and is characterized by his charismatic personality, ideal of unity, bond of service, and flaw of addiction; he has 200 gold, carries a Novice Wand, Book of Shadows, Leather Armor, and a Disguise Kit, while dedicated to helping others and using his knowledge for the greater good, without any spells.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user's input",
        },
      ],
      state:
        "The galaxy Zorak is in turmoil. A cunning group of dwarves, known for their relentless pursuit of fortune, have set their sights on constructing the largest bong ever built. Legends speak of a magical marijuana Bush, capable of bestowing enlightenment upon its users, and the dwarves are determined to claim this treasure for themselves. You find yourself aboard a space station orbiting the planet Zorak, where the air is thick with tension and ambition runs high. As an Arakocra Artificer with a heart dedicated to the greater good, you must navigate the treacherous obstacles posed by these dwarves, the environment, and perhaps some galactic foes as you seek to secure the fate of the galaxy. Your journey begins in a dimly lit corridor on the space station, where the smell of smoke lingers and whispers of dwarves planning their heist echo through the air. You are confronted with some choices ahead: How will you approach the situation?",
      choices: [
        {
          title: "Investigate the Dwarves' Plans",
          description:
            "Try to eavesdrop on the dwarves to gather information about their plans and how they're building the bong.",
        },
        {
          title: "Search for Allies",
          description:
            "Look for other members aboard the space station who may help you stop the dwarves and secure the Bus.",
        },
        {
          title: "Explore the Space Station",
          description:
            "Wander through the station to find any hidden tools or resources that may aid in your quest.",
        },
        {
          title: "Free Choice",
          description:
            "Dictate your own adventure direction, expressing an action or plan.",
        },
      ],
      createdAt: "2024-08-20T21:01:28.414Z",
      updatedAt: "2024-08-20T21:01:54.886Z",
      __v: 1,
    },
    character: {
      class: "Artificer",
      name: "Gouram Crawford",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
      __id: "669ad11857264cc693e47eeb",
      level: 15,
    },
    campaign: {
      title: "smoke the magical marijuana Bush",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718287220936.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66c243e2efd9cff734d237a0",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "666afb7556751cbcba5cc19a",
      characterId: "6696f23daf8e3f587425bd1b",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the classical time of the galaxy Zorak aboard a space station, intrepid adventurers must outsmart a group of cunning Dwarves racing to construct the biggest bong in existence to claim a legendary magical marijuana bush that grants enlightenment, as the fate of the galaxy's enlightenment hangs in the balance.” For: “Dushasiez Amos, a male Arakocra Artificer (Level 2) with 7 HP, 13 AC, and 15 XP, is an Arcane Scholar aligned with true good; his ability scores are all 8, and he possesses a personality that is adventurous with ideals of harmony, a bond of revenge, and a flaw of impulsiveness, carrying 20 gold and equipped with a wooden club, tarot deck, wooden armor, thieves tools, and a grappling hook device.”.\n- Every response should offer engaging choices, including a free-choice that allows the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. \n- Ensure that all player actions are within the context of the game world and adhere to the campaign’s narrative and mechanics.\n- If a player attempts an action that bypasses established game rules or narrative elements (e.g., claiming to see or access a quest item that is not present in the current scenario), explain why that action is not possible and guide them back to a valid course of action.\n- When a player makes an action that would normally require a dice roll, use a D20 dice roll to determine the outcome, and communicate the results accordingly. \n- Award XP upon completing challenges and level up characters following D&D rules.\n- In combat, reveal enemy stats and ensure compliance with D&D guidelines.\n- Always await the user's input",
        },
        {
          role: "assistant",
          content:
            "As the campaign begins, you find yourself aboard the bustling space station of Zorak, a hub for travelers and adventurers alike. The air is filled with the sounds of machinery and the chatter of various beings from across the galaxy. You, Dushasiez Amos, stand amidst the chaos, your adventurous spirit ignited by the rumors of a legendary magical marijuana bush said to grant enlightenment to those who possess it.\n\nHowever, you soon learn of a group of cunning Dwarves led by the infamous Brewmaster Thogrum, who are racing to construct the biggest bong in existence to claim the bush for themselves. The stakes are high, and the fate of enlightenment for the entire galaxy hangs in the balance.\n\nYou stand at a crossroads within the space station, surrounded by various stalls and adventurers. In front of you are three distinct paths:\n\n1. **The Workshop**: A place filled with tinkers and inventors, where you might find components or allies to help sabotage the Dwarves' construction efforts.\n\n2. **The Tavern**: A lively establishment where rumors fly as freely as drinks. You could gather information about the Dwarves or possibly recruit a fellow adventurer.\n\n3. **The Marketplace**: A bustling area filled with traders, where you might find rare items or magical artifacts that could assist you in your quest.\n\nAdditionally, you can choose to explore any other action or direction you feel inclined to pursue.\n\nWhat will you do?",
        },
      ],
      state:
        "As the campaign begins, you find yourself aboard the bustling space station of Zorak, a hub for travelers and adventurers alike. The air is filled with the sounds of machinery and the chatter of various beings from across the galaxy. You, Dushasiez Amos, stand amidst the chaos, your adventurous spirit ignited by the rumors of a legendary magical marijuana bush said to grant enlightenment to those who possess it.\n\nHowever, you soon learn of a group of cunning Dwarves led by the infamous Brewmaster Thogrum, who are racing to construct the biggest bong in existence to claim the bush for themselves. The stakes are high, and the fate of enlightenment for the entire galaxy hangs in the balance.\n\nYou stand at a crossroads within the space station, surrounded by various stalls and adventurers. In front of you are three distinct paths:\n\n1. **The Workshop**: A place filled with tinkers and inventors, where you might find components or allies to help sabotage the Dwarves' construction efforts.\n\n2. **The Tavern**: A lively establishment where rumors fly as freely as drinks. You could gather information about the Dwarves or possibly recruit a fellow adventurer.\n\n3. **The Marketplace**: A bustling area filled with traders, where you might find rare items or magical artifacts that could assist you in your quest.\n\nAdditionally, you can choose to explore any other action or direction you feel inclined to pursue.\n\nWhat will you do?",
      createdAt: "2024-08-18T18:56:34.448Z",
      updatedAt: "2024-08-18T18:56:34.448Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Dushasiez Amos",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1721403672400.webp",
      __id: "6696f23daf8e3f587425bd1b",
      level: 2,
    },
    campaign: {
      title: "smoke the magical marijuana Bush",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718287220936.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66b687dbb36cdb8ef9033fe4",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66681b8f336d28219dfc93e0",
      characterId: "669ad11857264cc693e47eeb",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the Paleolithic Time, within the Timeless Library of the ancient kingdom of Thalos, players are drawn into a perilous quest after a mysterious figure at a bustling festival reveals an ancient map to the lost capital of Althar, where the powerful Heart of Echoes—a crystal containing the wisdom of a forgotten age—was lost during a cataclysm, sparking intrigue among noble houses, secretive cults, and ancient guardians, all while they must navigate treacherous politics and face the remnants of the great wizard-king Arion's legacy, culminating in a race against dark forces eager to harness the artifact's power for their own sinister ends.” For: “Gouram Crawford, a 15th-level Male Arakocra Artificer with 6 HP, 10 AC, and 0 XP, has an Arcane Scholar background, is True Good aligned, possesses ability scores of 8 across the board, and is characterized by his charismatic personality, ideal of unity, bond of service, and flaw of addiction; he has 200 gold and carries a Novice Wand, Book of Shadows, Leather Armor, and a Disguise Kit, while being dedicated to helping others with his Artificer abilities and lacking spells.” Every response offer engaging choices, including a free-choice. The free-choice should allow the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. Award XP upon completing challenges and level up character following D&D rules. In combat, reveal enemy stats and ensure compliance with D&D guidelines. Ensure that every action or decision in the game, where a dice roll is required, uses only a D20 dice roll. Always awaits Users input",
        },
        {
          role: "assistant",
          content:
            '**Setting the Scene: The Festival of Echoes**\n\nThe air is thick with the sounds of laughter and music as you, Gouram Crawford, find yourself amidst the vibrant Festival of Echoes in the heart of Thalos. Colorful banners flutter overhead, and stalls brim with exotic goods and tantalizing treats. The atmosphere is alive with celebration, but underneath it all, you can sense a current of tension. Whispers of ancient prophecies and lost treasures fill the air.\n\nAs you wander through the festival, a mysterious figure cloaked in deep blue robes catches your eye. They beckon you over, their face obscured by the hood. With a glimmer of urgency in their voice, they reveal an ancient, tattered map, its edges frayed and marked with strange symbols. "This map leads to the lost capital of Althar, where the Heart of Echoes lies hidden. But beware, for there are those who would do anything to claim its power."\n\nBefore you can react, the figure slips the map into your hands and disappears into the crowd. In your mind, the thrill of adventure ignites your spirit. You know your skills as an Artificer could be invaluable on this quest, but the dangers are palpable.\n\n**What do you wish to do? Here are your choices:**\n\n1. **Study the map carefully** to decipher its markings and discern the path to Althar.\n2. **Ask festival-goers about the Heart of Echoes** and any stories they might know related to it.\n3. **Seek out the mysterious figure** to learn more about the quest and its dangers.\n4. **Make a free choice**: dictate your own action or direction! \n\nWhat will you choose?',
        },
      ],
      state:
        '**Setting the Scene: The Festival of Echoes**\n\nThe air is thick with the sounds of laughter and music as you, Gouram Crawford, find yourself amidst the vibrant Festival of Echoes in the heart of Thalos. Colorful banners flutter overhead, and stalls brim with exotic goods and tantalizing treats. The atmosphere is alive with celebration, but underneath it all, you can sense a current of tension. Whispers of ancient prophecies and lost treasures fill the air.\n\nAs you wander through the festival, a mysterious figure cloaked in deep blue robes catches your eye. They beckon you over, their face obscured by the hood. With a glimmer of urgency in their voice, they reveal an ancient, tattered map, its edges frayed and marked with strange symbols. "This map leads to the lost capital of Althar, where the Heart of Echoes lies hidden. But beware, for there are those who would do anything to claim its power."\n\nBefore you can react, the figure slips the map into your hands and disappears into the crowd. In your mind, the thrill of adventure ignites your spirit. You know your skills as an Artificer could be invaluable on this quest, but the dangers are palpable.\n\n**What do you wish to do? Here are your choices:**\n\n1. **Study the map carefully** to decipher its markings and discern the path to Althar.\n2. **Ask festival-goers about the Heart of Echoes** and any stories they might know related to it.\n3. **Seek out the mysterious figure** to learn more about the quest and its dangers.\n4. **Make a free choice**: dictate your own action or direction! \n\nWhat will you choose?',
      createdAt: "2024-08-09T21:19:23.593Z",
      updatedAt: "2024-08-09T21:19:23.593Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Gouram Crawford",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
      __id: "669ad11857264cc693e47eeb",
      level: 15,
    },
    campaign: {
      title: "Echoes of the Forgotten",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718098831015.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66b6769ab36cdb8ef9033f13",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "666afb7556751cbcba5cc19a",
      characterId: "6696f23daf8e3f587425bd1b",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the Classical Time on a Space Station in the galaxy Zorak, you must race against a cunning group of Dwarves who are building the biggest bong to claim a legendary magical marijuana Bush that grants enlightenment, as the fate of the galaxy hangs in the balance and your ability to outsmart them could determine the future of enlightenment itself.” For: “Dushasiez Amos, a level 2 male Arakocra Artificer with 7 HP, 13 AC, and 15 XP, hailing from an Arcane Scholar background, aligns with true good, has ability scores of 8 across the board, displays personality traits of being adventurous with the ideals of harmony, a bond of revenge, and a flaw of impulsiveness, possesses 20 gold, and is equipped with a wooden club, tarot deck, wooden armor, thieves tools, and a grappling hook device.” Every response offer engaging choices, including a free-choice. The free-choice should allow the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. Award XP upon completing challenges and level up character following D&D rules. In combat, reveal enemy stats and ensure compliance with D&D guidelines. Ensure that every action or decision in the game, where a dice roll is required, uses only a D20 dice roll. Always awaits Users input",
        },
        {
          role: "assistant",
          content:
            "**Setting the Scene:**\n\nIn the vast reaches of the galaxy Zorak, on an ancient space station adorned with remnants of lost civilizations, you, Dushasiez Amos, stand prepared to embark on a quest that will shape the future of enlightenment itself. The air crackles with energy as you gaze upon the station's central chamber, where the cunning Dwarves are feverishly working on a colossal bong. The fabled magical marijuana bush, said to grant enlightenment, awaits discovery somewhere deep within the station.\n\nAs the mechanical whirrs and clanks echo through the halls, you notice several paths branching out from the central chamber. Each path could lead you closer to the legendary bush or into the grasp of the scheming Dwarves. You have 20 gold, a wooden club, and your unique skills as an Artificer at your disposal.\n\n**Your Options:**\n1. **Investigate the Dwarves' Workstation:** Perhaps you can sabotage their progress or glean information about their plans.\n2. **Explore the Left Passage:** This corridor is dimly lit, and you can hear strange sounds echoing from within.\n3. **Explore the Right Passage:** This corridor is brightly lit and seems to be bustling with activity; you might find allies or distractions here.\n4. **Free Choice:** Dictate your own adventure! What would you like to do?\n\nWhat will you choose?",
        },
      ],
      state:
        "**Setting the Scene:**\n\nIn the vast reaches of the galaxy Zorak, on an ancient space station adorned with remnants of lost civilizations, you, Dushasiez Amos, stand prepared to embark on a quest that will shape the future of enlightenment itself. The air crackles with energy as you gaze upon the station's central chamber, where the cunning Dwarves are feverishly working on a colossal bong. The fabled magical marijuana bush, said to grant enlightenment, awaits discovery somewhere deep within the station.\n\nAs the mechanical whirrs and clanks echo through the halls, you notice several paths branching out from the central chamber. Each path could lead you closer to the legendary bush or into the grasp of the scheming Dwarves. You have 20 gold, a wooden club, and your unique skills as an Artificer at your disposal.\n\n**Your Options:**\n1. **Investigate the Dwarves' Workstation:** Perhaps you can sabotage their progress or glean information about their plans.\n2. **Explore the Left Passage:** This corridor is dimly lit, and you can hear strange sounds echoing from within.\n3. **Explore the Right Passage:** This corridor is brightly lit and seems to be bustling with activity; you might find allies or distractions here.\n4. **Free Choice:** Dictate your own adventure! What would you like to do?\n\nWhat will you choose?",
      createdAt: "2024-08-09T20:05:46.200Z",
      updatedAt: "2024-08-09T20:05:46.200Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Dushasiez Amos",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1721403672400.webp",
      __id: "6696f23daf8e3f587425bd1b",
      level: 2,
    },
    campaign: {
      title: "smoke the magical marijuana Bush",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718287220936.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66b67674b36cdb8ef9033eb2",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "666adf7f56751cbcba5cbd67",
      characterId: "669c305a47366f42f24b22e3",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the bustling Mechanical City during the Paleolithic Time, your party enjoys a break at the cozy Purrfect Perk Cat Café, only to be drawn into a quest when a fluffy cat warns of a dark power's curse threatening the café, prompting you to assist its owner, Mrs. Whiskers, in uncovering the source of the dark magic that has twisted her grandmother's enchantment, while investigating the café's secrets and its feline residents to save the sanctuary and the city from impending malevolence.” For: “Polop Lightfoot, a male Arakocra Artificer (Level 1) with 1 HP, 11 AC, and 0 XP, has an Arcane Scholar background, True Good alignment, ability scores of Strength 8, Dexterity 8, Constitution 8, Intelligence 8, Wisdom 8, and Charisma 8, personality traits of being Adventurous with an ideal of Justice, a bond of Honor, and a flaw of Greed; he possesses 10 gold and equipment including a Wooden Bow, Fishing Rod, no armor, and Thieves tools, while being skilled in crafting and inventing to uncover ancient secrets and bring balance and justice to the world.” Every response offer engaging choices, including a free-choice. The free-choice should allow the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. Award XP upon completing challenges and level up character following D&D rules. In combat, reveal enemy stats and ensure compliance with D&D guidelines. Ensure that every action or decision in the game, where a dice roll is required, uses only a D20 dice roll. Always awaits Users input",
        },
        {
          role: "assistant",
          content:
            'As you sip on your warm cup of catnip tea at the Purrfect Perk Cat Café, the ambiance is calm and inviting. The gentle purring of the café\'s feline residents fills the air, while the soft glow of mechanical lanterns casts shadows that dance across the room. Suddenly, a fluffy orange cat hops onto your table, its emerald eyes locking onto yours with an intensity that makes you pause. \n\n"Polop Lightfoot," the cat speaks, its voice surprisingly articulate, "I sense a dark power threatening this café and the city beyond. My name is Whiskers, and I need your help to uncover the source of this curse that has twisted my grandmother\'s enchantment. Will you assist me and Mrs. Whiskers, the café owner?"\n\nYou can feel the weight of this quest settling upon your small shoulders. The café feels like a sanctuary, and you’re determined to protect it.\n\n### What would you like to do?\n1. **Accept the quest** and ask Whiskers for more details about the curse.\n2. **Refuse the quest** and continue enjoying your time at the café.\n3. **Investigate the café** for any clues or suspicious activities.\n4. **Speak to Mrs. Whiskers** directly about the curse.\n5. **Free Choice:** Dictate your own action or decision.\n\nWhat will you choose?',
        },
      ],
      state:
        'As you sip on your warm cup of catnip tea at the Purrfect Perk Cat Café, the ambiance is calm and inviting. The gentle purring of the café\'s feline residents fills the air, while the soft glow of mechanical lanterns casts shadows that dance across the room. Suddenly, a fluffy orange cat hops onto your table, its emerald eyes locking onto yours with an intensity that makes you pause. \n\n"Polop Lightfoot," the cat speaks, its voice surprisingly articulate, "I sense a dark power threatening this café and the city beyond. My name is Whiskers, and I need your help to uncover the source of this curse that has twisted my grandmother\'s enchantment. Will you assist me and Mrs. Whiskers, the café owner?"\n\nYou can feel the weight of this quest settling upon your small shoulders. The café feels like a sanctuary, and you’re determined to protect it.\n\n### What would you like to do?\n1. **Accept the quest** and ask Whiskers for more details about the curse.\n2. **Refuse the quest** and continue enjoying your time at the café.\n3. **Investigate the café** for any clues or suspicious activities.\n4. **Speak to Mrs. Whiskers** directly about the curse.\n5. **Free Choice:** Dictate your own action or decision.\n\nWhat will you choose?',
      createdAt: "2024-08-09T20:05:08.026Z",
      updatedAt: "2024-08-09T20:05:08.026Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Polop Lightfoot",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721512062375.webp",
      __id: "669c305a47366f42f24b22e3",
      level: 1,
    },
    campaign: {
      title: "The Cursed Cat Café",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718280063618.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66b6762ab36cdb8ef9033e17",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "6669644056751cbcba5cbc07",
      characterId: "66a2421788abd91bbf05f9f7",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the Infernal Abyss during Medieval Times, a brave party must gather allies and uncover ancient artifacts to defeat Dracula, who reigns with millions of servants and possesses the legendary blood key that could unleash his full power, all while navigating the interference of Archangel Gabriel, who believes the key's power is too dangerous for mortals to wield; can they stop Dracula before his tyranny consumes the world?” For: “Silka Beam, a level 1 female Dragonborn Artificer with 8 HP, 10 AC, and 2 XP, is an Arcane Scholar aligned with True Good, possessing ability scores of 8 across the board, and characterized by her inquisitive personality trait, ideal of freedom, bond of honor, and flaw of greed; she has 50 gold and carries equipment including a Novice Wand, Book of Shadows, and Holy Water.” Every response offer engaging choices, including a free-choice. The free-choice should allow the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. Award XP upon completing challenges and level up character following D&D rules. In combat, reveal enemy stats and ensure compliance with D&D guidelines. Ensure that every action or decision in the game, where a dice roll is required, uses only a D20 dice roll. Always awaits Users input",
        },
        {
          role: "assistant",
          content:
            "**Setting the Scene:**\n\nYou find yourself in the Infernal Abyss, a dark and twisted realm where shadows stretch endlessly and the air is thick with the scent of brimstone. The ground beneath your feet is a cracked, blackened earth, and a crimson sky looms overhead, casting an eerie glow on everything around you. Your quest is to gather allies and uncover ancient artifacts to defeat Dracula, the tyrant who reigns here with legions of undead servants.\n\nYou stand at the edge of a dark forest, known as the Whispering Woods, where rumors speak of an ancient druid who might hold vital information about Dracula's lair. However, the forest is said to be home to dangerous creatures and illusions that can lead wanderers astray.\n\nAs you take a moment to gather your thoughts, you hear the rustling of leaves and the distant echoes of laughter—perhaps from the undead minions roaming the woods, or it could be the spirits of the forest playing tricks on intruders.\n\n**What would you like to do?**\n\n1. **Enter the Whispering Woods** to search for the ancient druid.\n2. **Set up camp** at the edge of the forest and rest to regain strength.\n3. **Look for allies** among the nearby ruins that are rumored to be haunted.\n4. **Explore your surroundings** for hidden items or clues.\n5. **Free-choice:** Describe your own action or decision you'd like to take!\n\nWhat will it be?",
        },
      ],
      state:
        "**Setting the Scene:**\n\nYou find yourself in the Infernal Abyss, a dark and twisted realm where shadows stretch endlessly and the air is thick with the scent of brimstone. The ground beneath your feet is a cracked, blackened earth, and a crimson sky looms overhead, casting an eerie glow on everything around you. Your quest is to gather allies and uncover ancient artifacts to defeat Dracula, the tyrant who reigns here with legions of undead servants.\n\nYou stand at the edge of a dark forest, known as the Whispering Woods, where rumors speak of an ancient druid who might hold vital information about Dracula's lair. However, the forest is said to be home to dangerous creatures and illusions that can lead wanderers astray.\n\nAs you take a moment to gather your thoughts, you hear the rustling of leaves and the distant echoes of laughter—perhaps from the undead minions roaming the woods, or it could be the spirits of the forest playing tricks on intruders.\n\n**What would you like to do?**\n\n1. **Enter the Whispering Woods** to search for the ancient druid.\n2. **Set up camp** at the edge of the forest and rest to regain strength.\n3. **Look for allies** among the nearby ruins that are rumored to be haunted.\n4. **Explore your surroundings** for hidden items or clues.\n5. **Free-choice:** Describe your own action or decision you'd like to take!\n\nWhat will it be?",
      createdAt: "2024-08-09T20:03:54.432Z",
      updatedAt: "2024-08-09T20:03:54.432Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Silka Beam",
      race: "Dragonborn",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721910008865.webp",
      __id: "66a2421788abd91bbf05f9f7",
      level: 1,
    },
    campaign: {
      title: "Defeat Dracula",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718182976712.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66b67629b36cdb8ef9033e12",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "6669644056751cbcba5cbc07",
      characterId: "66a2421788abd91bbf05f9f7",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In a medieval setting within the Infernal Abyss, a party must gather allies and uncover ancient artifacts to defeat Dracula, who reigns over the world with millions of servants and the legendary blood key that could grant him ultimate power, all while facing opposition from Archangel Gabriel, who believes the key’s power is too dangerous for mortals to wield; will they overcome Gabriel's interference and stop Dracula before it’s too late?” For: “Silka Beam, a Level 1 Female Dragonborn Artificer with 8 HP, 10 AC, and 2 XP, is an Arcane Scholar of True Good alignment, possessing ability scores of 8 in all attributes, and demonstrating inquisitive personality traits with ideals of freedom, bonds of honor, and flaws of greed; she has 50 gold and carries a Novice Wand, Book of Shadows, and Holy Water, while lacking spells and having the unique ability to infuse objects with magical properties, although her low ability scores limit her creations' potency.” Every response offer engaging choices, including a free-choice. The free-choice should allow the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. Award XP upon completing challenges and level up character following D&D rules. In combat, reveal enemy stats and ensure compliance with D&D guidelines. Ensure that every action or decision in the game, where a dice roll is required, uses only a D20 dice roll. Always awaits Users input",
        },
        {
          role: "assistant",
          content:
            "**Setting the Scene:**\n\nYou find yourself deep within the Infernal Abyss, a realm of shadows and despair. The air crackles with dark magic, and the ground is littered with the remnants of past battles. You stand in front of a massive obsidian gate, rumored to lead to the lair of Dracula, the tyrant who has plunged the world into darkness. The faint glow of your Novice Wand illuminates the path ahead, but the oppressive atmosphere weighs heavily on your heart.\n\nAs you gather your thoughts, you hear whispers of potential allies in the nearby village of Ashen Hollow. However, caution fills the air; the Archangel Gabriel has sent his celestial servants to monitor movements in the Abyss, believing no mortal should wield the power of the Blood Key.\n\n**What would you like to do?**\n\n1. **Head to Ashen Hollow** to seek out allies and gather information about Dracula and the Blood Key.\n2. **Investigate the obsidian gate** to see if there are any clues or traps that could aid in your quest.\n3. **Use your Book of Shadows** to research possible ways to counter Gabriel’s interference or enhance your abilities.\n4. **Take a moment to rest and reflect**, considering your next move while contemplating your ideals and flaws.\n\n**Free Choice:** Describe a unique idea or action you wish to take that could help you on your journey!",
        },
      ],
      state:
        "**Setting the Scene:**\n\nYou find yourself deep within the Infernal Abyss, a realm of shadows and despair. The air crackles with dark magic, and the ground is littered with the remnants of past battles. You stand in front of a massive obsidian gate, rumored to lead to the lair of Dracula, the tyrant who has plunged the world into darkness. The faint glow of your Novice Wand illuminates the path ahead, but the oppressive atmosphere weighs heavily on your heart.\n\nAs you gather your thoughts, you hear whispers of potential allies in the nearby village of Ashen Hollow. However, caution fills the air; the Archangel Gabriel has sent his celestial servants to monitor movements in the Abyss, believing no mortal should wield the power of the Blood Key.\n\n**What would you like to do?**\n\n1. **Head to Ashen Hollow** to seek out allies and gather information about Dracula and the Blood Key.\n2. **Investigate the obsidian gate** to see if there are any clues or traps that could aid in your quest.\n3. **Use your Book of Shadows** to research possible ways to counter Gabriel’s interference or enhance your abilities.\n4. **Take a moment to rest and reflect**, considering your next move while contemplating your ideals and flaws.\n\n**Free Choice:** Describe a unique idea or action you wish to take that could help you on your journey!",
      createdAt: "2024-08-09T20:03:53.134Z",
      updatedAt: "2024-08-09T20:03:53.134Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Silka Beam",
      race: "Dragonborn",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721910008865.webp",
      __id: "66a2421788abd91bbf05f9f7",
      level: 1,
    },
    campaign: {
      title: "Defeat Dracula",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718182976712.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66b675ffb36cdb8ef9033d64",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66681b8f336d28219dfc93e0",
      characterId: "669c305a47366f42f24b22e3",
      conversations: [
        {
          role: "system",
          content:
            'Be the Dungeonmaster for a turn-based DnD Campaign about “In the Paleolithic Time within the Timeless Library, players in the ancient kingdom of Thalos embark on a perilous quest to locate the Heart of Echoes, a powerful lost artifact tied to strange disturbances and political intrigue, after being approached by a mysterious figure during a festival who, before succumbing to poison, warns them, "Beware the echoes... they are not what they seem."” For: “Polop Lightfoot, a 1st-level male Arakocra Artificer with 1 HP, 11 AC, and 0 XP, hails from an Arcane Scholar background and follows a True Good alignment, possessing ability scores of Strength 8, Dexterity 8, Constitution 8, Intelligence 8, Wisdom 8, and Charisma 8; he is adventurous, values justice, is bonded by honor, but struggles with greed, carries 10 gold, and is equipped with a Wooden Bow, Fishing Rod, Thieves Tools, and no armor, while on a quest to uncover ancient secrets through his crafting and inventing skills.” Every response offer engaging choices, including a free-choice. The free-choice should allow the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. Award XP upon completing challenges and level up character following D&D rules. In combat, reveal enemy stats and ensure compliance with D&D guidelines. Ensure that every action or decision in the game, where a dice roll is required, uses only a D20 dice roll. Always awaits Users input',
        },
        {
          role: "assistant",
          content:
            "**Dungeonmaster's Introduction:**\n\nAs the festival of the Harvest Moon lights up the ancient kingdom of Thalos, vibrant colors and lively music fill the air, masking a sense of unease that has been brewing beneath the surface. Amidst the laughter and dancing, you, Polop Lightfoot, find yourself captivated by stories of ancient magic and lost artifacts. However, the merriment takes a dark turn when a mysterious figure approaches you, cloaked in shadows, whispering of the Heart of Echoes before collapsing, poisoned.\n\nWith the festival now in a state of chaos, you stand at the epicenter of a brewing storm. The crowd is in disarray, and whispers of betrayal and dark forces permeate the air. You feel an urge to act, not only to uncover the truth behind the Heart of Echoes but to honor the last words of the enigmatic stranger.\n\n**Current Scenario:**\n\nYou are in the town square, surrounded by panicked festival-goers. The festival's vibrant stalls are now abandoned as people flee. The cloaked figure lies in front of you, a small note clutched in their hand. You have a few options:\n\n1. **Examine the Cloaked Figure:** You can investigate the figure for any clues about their identity or what they were trying to tell you.\n2. **Read the Note:** Carefully extract the note from the figure's hand to see if it contains any important information.\n3. **Rally the Crowd:** Try to calm the panicked festival-goers and gather information or assistance from them.\n4. **Follow the Shadows:** You notice a group of suspicious figures disappearing into an alleyway. You could choose to follow them.\n5. **Free Choice:** Dictate your own adventure! What would you like to do?\n\nWhat will you choose?",
        },
      ],
      state:
        "**Dungeonmaster's Introduction:**\n\nAs the festival of the Harvest Moon lights up the ancient kingdom of Thalos, vibrant colors and lively music fill the air, masking a sense of unease that has been brewing beneath the surface. Amidst the laughter and dancing, you, Polop Lightfoot, find yourself captivated by stories of ancient magic and lost artifacts. However, the merriment takes a dark turn when a mysterious figure approaches you, cloaked in shadows, whispering of the Heart of Echoes before collapsing, poisoned.\n\nWith the festival now in a state of chaos, you stand at the epicenter of a brewing storm. The crowd is in disarray, and whispers of betrayal and dark forces permeate the air. You feel an urge to act, not only to uncover the truth behind the Heart of Echoes but to honor the last words of the enigmatic stranger.\n\n**Current Scenario:**\n\nYou are in the town square, surrounded by panicked festival-goers. The festival's vibrant stalls are now abandoned as people flee. The cloaked figure lies in front of you, a small note clutched in their hand. You have a few options:\n\n1. **Examine the Cloaked Figure:** You can investigate the figure for any clues about their identity or what they were trying to tell you.\n2. **Read the Note:** Carefully extract the note from the figure's hand to see if it contains any important information.\n3. **Rally the Crowd:** Try to calm the panicked festival-goers and gather information or assistance from them.\n4. **Follow the Shadows:** You notice a group of suspicious figures disappearing into an alleyway. You could choose to follow them.\n5. **Free Choice:** Dictate your own adventure! What would you like to do?\n\nWhat will you choose?",
      createdAt: "2024-08-09T20:03:11.535Z",
      updatedAt: "2024-08-09T20:03:11.535Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Polop Lightfoot",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721512062375.webp",
      __id: "669c305a47366f42f24b22e3",
      level: 1,
    },
    campaign: {
      title: "Echoes of the Forgotten",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718098831015.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66b675fcb36cdb8ef9033d56",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66681b8f336d28219dfc93e0",
      characterId: "669c305a47366f42f24b22e3",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the Paleolithic Time, amidst the bustling festival of a small town in the ancient kingdom of Thalos, players are thrust into a perilous quest for the elusive Heart of Echoes—a powerful artifact once wielded by the wizard-king Arion—after a mysterious figure reveals an ancient map to the lost capital of Althar, only to die with a cryptic warning that hints at dark forces also seeking the artifact, forcing the players to navigate treacherous politics and haunted lands to prevent its power from plunging the kingdom into a new age of darkness.” For: “Polop Lightfoot, a Level 1 male Arakocra Artificer with 1 HP, 11 AC, and 0 XP, hails from an Arcane Scholar background and aligns with True Good; his ability scores are all 8s, and his personality traits include being Adventurous with an ideal of Justice, a bond of Honor, and a flaw of Greed, possessing 10 gold and equipment that includes a Wooden Bow, Fishing rod, no armor, and Thieves tools, while he is skilled in crafting and inventing to uncover ancient secrets and bring balance to the world.” Every response offer engaging choices, including a free-choice. The free-choice should allow the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. Award XP upon completing challenges and level up character following D&D rules. In combat, reveal enemy stats and ensure compliance with D&D guidelines. Ensure that every action or decision in the game, where a dice roll is required, uses only a D20 dice roll. Always awaits Users input",
        },
        {
          role: "assistant",
          content:
            "### Scene: The Festival of Thalos\n\nThe air is vibrant with laughter and the smell of roasted meats as you, Polop Lightfoot, make your way through the bustling streets of Thalos. Colorful banners flutter above, and townsfolk are engaged in games and festivities. You overhear tales of ancient artifacts and brave adventurers, but your heart is set on the Heart of Echoes, a powerful relic that could shift the balance of power in the kingdom.\n\nSuddenly, amidst the revelry, a figure cloaked in tattered garments rushes toward you, his eyes wide with urgency. “You must listen!” he gasps, revealing an ancient map covered in strange symbols. “The Heart of Echoes lies in Althar, but dark forces seek it too. You must find it before they do!” Before you can respond, the figure collapses, a dagger protruding from his back. The crowd gasps, and chaos ensues.\n\n**What do you do?**\n\n1. **Investigate the body** to see if you can glean more information about the dagger or the map.\n2. **Grab the map** and flee into the nearby woods to hide and analyze it.\n3. **Shout for help** to gather nearby festival-goers in hopes of defending against any threat.\n4. **Free-choice**: Describe what you would like to do in this situation.\n\nPlease choose your action!",
        },
      ],
      state:
        "### Scene: The Festival of Thalos\n\nThe air is vibrant with laughter and the smell of roasted meats as you, Polop Lightfoot, make your way through the bustling streets of Thalos. Colorful banners flutter above, and townsfolk are engaged in games and festivities. You overhear tales of ancient artifacts and brave adventurers, but your heart is set on the Heart of Echoes, a powerful relic that could shift the balance of power in the kingdom.\n\nSuddenly, amidst the revelry, a figure cloaked in tattered garments rushes toward you, his eyes wide with urgency. “You must listen!” he gasps, revealing an ancient map covered in strange symbols. “The Heart of Echoes lies in Althar, but dark forces seek it too. You must find it before they do!” Before you can respond, the figure collapses, a dagger protruding from his back. The crowd gasps, and chaos ensues.\n\n**What do you do?**\n\n1. **Investigate the body** to see if you can glean more information about the dagger or the map.\n2. **Grab the map** and flee into the nearby woods to hide and analyze it.\n3. **Shout for help** to gather nearby festival-goers in hopes of defending against any threat.\n4. **Free-choice**: Describe what you would like to do in this situation.\n\nPlease choose your action!",
      createdAt: "2024-08-09T20:03:08.551Z",
      updatedAt: "2024-08-09T20:03:08.551Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Polop Lightfoot",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721512062375.webp",
      __id: "669c305a47366f42f24b22e3",
      level: 1,
    },
    campaign: {
      title: "Echoes of the Forgotten",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718098831015.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66b67476b36cdb8ef9033cd4",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66681b8f336d28219dfc93e0",
      characterId: "6696f23daf8e3f587425bd1b",
      conversations: [
        {
          role: "system",
          content:
            'Be the Dungeonmaster for a turn-based DnD Campaign about “In the Paleolithic Time within the Timeless Library, players in the ancient kingdom of Thalos are drawn into a perilous quest after a mysterious figure, during a bustling festival, reveals a map to the lost capital of Althar and cryptically warns them to "Beware the echoes... they are not what they seem," leading them to uncover the truth behind the resurfacing of the powerful Heart of Echoes, an artifact once wielded by the great wizard-king Arion, amidst a backdrop of ghostly disturbances and competing factions eager to control its magic.” For: “Dushasiez Amos, a male Arakocra Artificer (Level 2) with 7 HP and 13 AC, has 15 XP, 20 gold, and an Arcane Scholar background, is aligned as true good, possesses ability scores of Strength 8, Dexterity 8, Constitution 8, Intelligence 8, Wisdom 8, and Charisma 8, exhibits personality traits of being adventurous with ideals of harmony, a bond for revenge, and an impulsive flaw, and is equipped with a wooden club, tarot deck, wooden armor, thieves tools, and a grappling hook device.” Every response offer engaging choices, including a free-choice. The free-choice should allow the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. Award XP upon completing challenges and level up character following D&D rules. In combat, reveal enemy stats and ensure compliance with D&D guidelines. Ensure that every action or decision in the game, where a dice roll is required, uses only a D20 dice roll. Always awaits Users input',
        },
        {
          role: "assistant",
          content:
            '**Campaign Start: The Festival of Echoes in Thalos**\n\nThe sun sets over the ancient kingdom of Thalos, casting a golden hue over the bustling festival in the town square. Stalls laden with colorful goods, the sweet aroma of roasted meats, and the laughter of children fill the air. But amidst the joy, a shadow lurks. \n\nAs you navigate through the crowd, your keen Arakocra senses pick up on an unusual tension. Suddenly, a mysterious figure cloaked in obscurity approaches you. With a raspy voice, they present you with a tattered map, its edges frayed and stained. "The lost capital of Althar awaits, but beware the echoes… they are not what they seem," they whisper before vanishing into the throng of festival-goers.\n\nYour heart races with the thrill of adventure. You feel a powerful pull towards the quest that lies ahead. \n\n**Current Inventory:**\n- Wooden Club\n- Tarot Deck\n- Wooden Armor\n- Thieves Tools\n- Grappling Hook Device\n\n**Current Stats:**\n- HP: 7\n- AC: 13\n- XP: 15\n- Gold: 20\n\n**Character Traits:**\n- Adventurous\n- Ideal of Harmony\n- Bond for Revenge\n- Impulsive Flaw\n\n---\n\n**Choices:**\n\n1. **Consult the Tarot Deck:** You can draw a card to gain insights into your quest ahead. This may provide you with a clue or a warning.\n   \n2. **Examine the Map:** Take a closer look at the map to decipher its markings and find a potential route to Althar.\n\n3. **Ask Festival-Goers:** Engage with the townsfolk to gather information about the echoes and the lost capital. They might have valuable insights or rumors.\n\n4. **Free Choice:** Decide what you want to do next! This could be anything from seeking out a specific person, exploring a certain area of the festival, or even something entirely unique that your character might want to try.\n\nWhat will you do?',
        },
      ],
      state:
        '**Campaign Start: The Festival of Echoes in Thalos**\n\nThe sun sets over the ancient kingdom of Thalos, casting a golden hue over the bustling festival in the town square. Stalls laden with colorful goods, the sweet aroma of roasted meats, and the laughter of children fill the air. But amidst the joy, a shadow lurks. \n\nAs you navigate through the crowd, your keen Arakocra senses pick up on an unusual tension. Suddenly, a mysterious figure cloaked in obscurity approaches you. With a raspy voice, they present you with a tattered map, its edges frayed and stained. "The lost capital of Althar awaits, but beware the echoes… they are not what they seem," they whisper before vanishing into the throng of festival-goers.\n\nYour heart races with the thrill of adventure. You feel a powerful pull towards the quest that lies ahead. \n\n**Current Inventory:**\n- Wooden Club\n- Tarot Deck\n- Wooden Armor\n- Thieves Tools\n- Grappling Hook Device\n\n**Current Stats:**\n- HP: 7\n- AC: 13\n- XP: 15\n- Gold: 20\n\n**Character Traits:**\n- Adventurous\n- Ideal of Harmony\n- Bond for Revenge\n- Impulsive Flaw\n\n---\n\n**Choices:**\n\n1. **Consult the Tarot Deck:** You can draw a card to gain insights into your quest ahead. This may provide you with a clue or a warning.\n   \n2. **Examine the Map:** Take a closer look at the map to decipher its markings and find a potential route to Althar.\n\n3. **Ask Festival-Goers:** Engage with the townsfolk to gather information about the echoes and the lost capital. They might have valuable insights or rumors.\n\n4. **Free Choice:** Decide what you want to do next! This could be anything from seeking out a specific person, exploring a certain area of the festival, or even something entirely unique that your character might want to try.\n\nWhat will you do?',
      createdAt: "2024-08-09T19:56:38.241Z",
      updatedAt: "2024-08-09T19:56:38.241Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Dushasiez Amos",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1721403672400.webp",
      __id: "6696f23daf8e3f587425bd1b",
      level: 2,
    },
    campaign: {
      title: "Echoes of the Forgotten",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718098831015.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66b67473b36cdb8ef9033ccf",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66681b8f336d28219dfc93e0",
      characterId: "6696f23daf8e3f587425bd1b",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the Paleolithic Time within the Timeless Library of the ancient kingdom of Thalos, players are thrust into a perilous quest to find the Heart of Echoes, a powerful artifact lost during a cataclysm that destroyed the capital, Althar, after being approached by a mysterious figure at a bustling festival who reveals an ancient map but dies with a cryptic warning that leads them into a web of intrigue involving noble houses, secretive cults, and ancient guardians, all while navigating haunted ruins and enchanted forests to prevent the artifact from falling into dark hands.” For: “Dushasiez Amos, a level 2 male Arakocra Artificer with 7 HP, 13 AC, and 15 XP, is an Arcane Scholar aligned with true good; his ability scores are all 8, and he embodies an adventurous personality with ideals of harmony, a bond of revenge, and an impulsive flaw, possessing 20 gold and equipment including a wooden club, tarot deck, wooden armor, thieves tools, and a grappling hook device.” Every response offer engaging choices, including a free-choice. The free-choice should allow the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. Award XP upon completing challenges and level up character following D&D rules. In combat, reveal enemy stats and ensure compliance with D&D guidelines. Ensure that every action or decision in the game, where a dice roll is required, uses only a D20 dice roll. Always awaits Users input",
        },
        {
          role: "assistant",
          content:
            "**Campaign Start: The Call of Adventure**\n\nThe sun hangs low in the sky, casting long shadows over the bustling festival in the heart of the ancient kingdom of Thalos. Colorful banners flutter in the breeze, and the air is filled with the sounds of laughter, music, and the smell of roasted meats. You, Dushasiez Amos, stand amidst the crowd, your keen eyes scanning the festivities. It was here, just moments ago, that a mysterious figure approached you, an old sage draped in tattered robes. They handed you an ancient map, whispering of the Heart of Echoes, before collapsing at your feet with a warning that echoed in your mind, “Beware the shadows that seek your light.”\n\nAs the festival continues around you, you feel the weight of the map in your hands and the burden of the task ahead. The map is delicate, its ink faded but still legible, revealing paths through haunted ruins and enchanted forests. \n\n**Current Inventory:**\n- Wooden Club\n- Tarot Deck\n- Wooden Armor\n- Thieves Tools\n- Grappling Hook Device\n- 20 Gold\n\n**Current Stats:**\n- HP: 7\n- AC: 13\n- XP: 15\n\n**Choices:**\n1. Investigate the map further to understand your destination.\n2. Search the festival for clues about the mysterious figure or the Heart of Echoes.\n3. Approach a nearby group of festival-goers to gather information about noble houses or cults.\n4. Free-choice: Dictate your own adventure. What do you wish to do?\n\nWhat is your choice?",
        },
      ],
      state:
        "**Campaign Start: The Call of Adventure**\n\nThe sun hangs low in the sky, casting long shadows over the bustling festival in the heart of the ancient kingdom of Thalos. Colorful banners flutter in the breeze, and the air is filled with the sounds of laughter, music, and the smell of roasted meats. You, Dushasiez Amos, stand amidst the crowd, your keen eyes scanning the festivities. It was here, just moments ago, that a mysterious figure approached you, an old sage draped in tattered robes. They handed you an ancient map, whispering of the Heart of Echoes, before collapsing at your feet with a warning that echoed in your mind, “Beware the shadows that seek your light.”\n\nAs the festival continues around you, you feel the weight of the map in your hands and the burden of the task ahead. The map is delicate, its ink faded but still legible, revealing paths through haunted ruins and enchanted forests. \n\n**Current Inventory:**\n- Wooden Club\n- Tarot Deck\n- Wooden Armor\n- Thieves Tools\n- Grappling Hook Device\n- 20 Gold\n\n**Current Stats:**\n- HP: 7\n- AC: 13\n- XP: 15\n\n**Choices:**\n1. Investigate the map further to understand your destination.\n2. Search the festival for clues about the mysterious figure or the Heart of Echoes.\n3. Approach a nearby group of festival-goers to gather information about noble houses or cults.\n4. Free-choice: Dictate your own adventure. What do you wish to do?\n\nWhat is your choice?",
      createdAt: "2024-08-09T19:56:35.744Z",
      updatedAt: "2024-08-09T19:56:35.744Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Dushasiez Amos",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1721403672400.webp",
      __id: "6696f23daf8e3f587425bd1b",
      level: 2,
    },
    campaign: {
      title: "Echoes of the Forgotten",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718098831015.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66b66b2dd4fa29e9606c5d67",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66681b8f336d28219dfc93e0",
      characterId: "669ad11857264cc693e47eeb",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the Paleolithic era of the ancient kingdom of Thalos, players are thrust into a dangerous quest after a mysterious figure, during a bustling festival, presents them with a poisoned map leading to the Heart of Echoes—an elusive crystal with the power of a forgotten age—prompting a race against rival factions and dark forces, as they navigate haunted ruins and treacherous politics to uncover its secrets and determine the fate of their kingdom.” For: “Gouram Crawford is a Level 15 Male Arakocra Artificer with 6 HP, 10 AC, 0 XP, an Arcane Scholar background, True Good alignment, ability scores of 8 across the board, personality traits of charisma, unity, service, and addiction, 200 gold, and equipped with a Novice Wand, Book of Shadows, Leather Armor, and a Disguise Kit, dedicated to using his knowledge for the greater good and characterized by his vibrant feathers and intelligent, charming eyes.” Every response offer engaging choices, including a free-choice. The free-choice should allow the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. Award XP upon completing challenges and level up character following D&D rules. In combat, reveal enemy stats and ensure compliance with D&D guidelines. Ensure that every action or decision in the game, where a dice roll is required, uses only a D20 dice roll. Always awaits Users input",
        },
        {
          role: "assistant",
          content:
            '**Dungeonmaster\'s Introduction:**\n\nAs the sun sets over the bustling festival in the ancient kingdom of Thalos, lanterns flicker to life, illuminating the vibrant stalls filled with colorful wares and delicious food. Music fills the air, and laughter echoes through the streets as townsfolk gather to celebrate their heritage. It is amid this revelry that you encounter a mysterious figure—a cloaked individual whose eyes seem to glint with secrets.\n\nWith a sweeping gesture, they unveil a weathered map, its corners frayed and ink smudged. "This map…," they whisper, leaning closer, "will lead you to the Heart of Echoes. But beware—it is poisoned, and so is the path ahead."\n\nYou feel a shiver run down your spine as they hand you the map, and you realize that various factions are also vying for this powerful crystal. The festival\'s joyous atmosphere contrasts sharply with the dark undertones of your quest.\n\n---\n\n**Gouram Crawford:**\n\nYou are Gouram Crawford, a Level 15 Male Arakocra Artificer, with 6 HP and 10 AC. Your vibrant feathers shimmer in the lantern light, and your intelligent, charming eyes scan the crowd. You clutch the poisoned map tightly, feeling the weight of the responsibility it carries.\n\n- **Gold:** 200\n- **Equipment:** Novice Wand, Book of Shadows, Leather Armor, Disguise Kit\n- **Background:** Arcane Scholar\n\n**Personality Traits:** Charisma, Unity, Service, Addiction to knowledge.\n\n---\n\n**Current Situation:**\nYou face several choices for your next move:\n\n1. **Examine the Map:** Investigate the details of the poisoned map to discern potential dangers or routes.\n2. **Gather Information:** Approach festival-goers or fellow adventurers to learn more about the Heart of Echoes and rival factions.\n3. **Set a Trap:** Use your Disguise Kit to set a trap for any would-be rivals or thieves.\n4. **Free Choice:** Dictate your own adventure! What would you like to do next?\n\nPlease choose an option or provide your own action!',
        },
      ],
      state:
        '**Dungeonmaster\'s Introduction:**\n\nAs the sun sets over the bustling festival in the ancient kingdom of Thalos, lanterns flicker to life, illuminating the vibrant stalls filled with colorful wares and delicious food. Music fills the air, and laughter echoes through the streets as townsfolk gather to celebrate their heritage. It is amid this revelry that you encounter a mysterious figure—a cloaked individual whose eyes seem to glint with secrets.\n\nWith a sweeping gesture, they unveil a weathered map, its corners frayed and ink smudged. "This map…," they whisper, leaning closer, "will lead you to the Heart of Echoes. But beware—it is poisoned, and so is the path ahead."\n\nYou feel a shiver run down your spine as they hand you the map, and you realize that various factions are also vying for this powerful crystal. The festival\'s joyous atmosphere contrasts sharply with the dark undertones of your quest.\n\n---\n\n**Gouram Crawford:**\n\nYou are Gouram Crawford, a Level 15 Male Arakocra Artificer, with 6 HP and 10 AC. Your vibrant feathers shimmer in the lantern light, and your intelligent, charming eyes scan the crowd. You clutch the poisoned map tightly, feeling the weight of the responsibility it carries.\n\n- **Gold:** 200\n- **Equipment:** Novice Wand, Book of Shadows, Leather Armor, Disguise Kit\n- **Background:** Arcane Scholar\n\n**Personality Traits:** Charisma, Unity, Service, Addiction to knowledge.\n\n---\n\n**Current Situation:**\nYou face several choices for your next move:\n\n1. **Examine the Map:** Investigate the details of the poisoned map to discern potential dangers or routes.\n2. **Gather Information:** Approach festival-goers or fellow adventurers to learn more about the Heart of Echoes and rival factions.\n3. **Set a Trap:** Use your Disguise Kit to set a trap for any would-be rivals or thieves.\n4. **Free Choice:** Dictate your own adventure! What would you like to do next?\n\nPlease choose an option or provide your own action!',
      createdAt: "2024-08-09T19:17:01.999Z",
      updatedAt: "2024-08-09T19:17:01.999Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Gouram Crawford",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
      __id: "669ad11857264cc693e47eeb",
      level: 15,
    },
    campaign: {
      title: "Echoes of the Forgotten",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718098831015.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66b66b2cd4fa29e9606c5d62",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "66681b8f336d28219dfc93e0",
      characterId: "669ad11857264cc693e47eeb",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the Paleolithic Time within the Timeless Library, players in the ancient kingdom of Thalos are drawn into a perilous quest for the legendary Heart of Echoes, a powerful crystal lost during a cataclysm that destroyed the capital, Althar, as they investigate a dying figure's cryptic warning during a bustling festival, leading them to navigate treacherous politics and face dark forces seeking the artifact's immense power.” For: “Gouram Crawford, a male Arakocra Artificer (Level 15) with 6 HP, 10 AC, and 0 XP, has an Arcane Scholar background, is True Good aligned, possesses ability scores of 8 across the board, values unity, serves others, struggles with addiction, has 200 gold, carries a Novice Wand, Book of Shadows, Leather Armor, and a Disguise Kit, and is characterized by his vibrant feathers and charismatic demeanor, dedicated to helping others with his knowledge.” Every response offer engaging choices, including a free-choice. The free-choice should allow the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. Award XP upon completing challenges and level up character following D&D rules. In combat, reveal enemy stats and ensure compliance with D&D guidelines. Ensure that every action or decision in the game, where a dice roll is required, uses only a D20 dice roll. Always awaits Users input",
        },
        {
          role: "assistant",
          content:
            "### Campaign Start: The Festival of Echoes\n\nThe vibrant colors of the Festival of Echoes fill the air with music and laughter as you, Gouram Crawford, navigate through the bustling streets of Althar’s remaining districts. The aroma of roasted meats and sweet pastries wafts through the crowd, and children run about with painted faces, celebrating life amidst the ruins of their once-great city. \n\nAs you enjoy the festivities, you overhear a dying figure—a pale, cloaked elder—whispering a cryptic warning about the Heart of Echoes, a powerful crystal that could either save or doom the kingdom, depending on who wields it. The elder collapses, and the crowd gasps, parting as you rush to his side. \n\nThe elder clutches your wrist with surprising strength, his eyes reflecting a mix of fear and urgency. “Seek the Heart... in the Library... darkness approaches...” His grip loosens, and he breathes his last.\n\n### What will you do?\n\n1. **Investigate the elder’s belongings for clues.** (Search for items or notes that might be useful.)\n2. **Ask the crowd if anyone knows more about the elder or the Heart of Echoes.** (Gather information from the townsfolk.)\n3. **Head directly to the Timeless Library to begin your quest.** (Start your adventure immediately.)\n4. **Free Choice:** You can dictate your own adventure and decide your next move!\n\nWhat do you choose?",
        },
      ],
      state:
        "### Campaign Start: The Festival of Echoes\n\nThe vibrant colors of the Festival of Echoes fill the air with music and laughter as you, Gouram Crawford, navigate through the bustling streets of Althar’s remaining districts. The aroma of roasted meats and sweet pastries wafts through the crowd, and children run about with painted faces, celebrating life amidst the ruins of their once-great city. \n\nAs you enjoy the festivities, you overhear a dying figure—a pale, cloaked elder—whispering a cryptic warning about the Heart of Echoes, a powerful crystal that could either save or doom the kingdom, depending on who wields it. The elder collapses, and the crowd gasps, parting as you rush to his side. \n\nThe elder clutches your wrist with surprising strength, his eyes reflecting a mix of fear and urgency. “Seek the Heart... in the Library... darkness approaches...” His grip loosens, and he breathes his last.\n\n### What will you do?\n\n1. **Investigate the elder’s belongings for clues.** (Search for items or notes that might be useful.)\n2. **Ask the crowd if anyone knows more about the elder or the Heart of Echoes.** (Gather information from the townsfolk.)\n3. **Head directly to the Timeless Library to begin your quest.** (Start your adventure immediately.)\n4. **Free Choice:** You can dictate your own adventure and decide your next move!\n\nWhat do you choose?",
      createdAt: "2024-08-09T19:17:00.424Z",
      updatedAt: "2024-08-09T19:17:00.424Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Gouram Crawford",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
      __id: "669ad11857264cc693e47eeb",
      level: 15,
    },
    campaign: {
      title: "Echoes of the Forgotten",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718098831015.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66b6699ec82fc5f72a4d1556",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "666afb7556751cbcba5cc19a",
      characterId: "669ad11857264cc693e47eeb",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the galaxy Zorak during Classical Time, a legendary magical marijuana bush known for granting enlightenment is sought after by intrepid adventurers racing against a group of cunning Dwarves who are building the largest bong to claim its powers, putting the fate of enlightenment in the galaxy at stake as they navigate the treacherous Space Station to partake in its magic before it's too late.” For: “Gouram Crawford, a male Arakocra Artificer at level 15 with 6 HP, 10 AC, and 0 XP, is an Arcane Scholar aligned with True Good; he has ability scores of 8 in all attributes, is charismatic with ideals of unity, bonds of service, and a flaw of addiction, possesses 200 gold, carries a Novice Wand, Book of Shadows, Leather Armor, and a Disguise Kit, and is dedicated to helping others while utilizing his knowledge for the greater good.” Every response offer engaging choices, including a free-choice. The free-choice should allow the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. Award XP upon completing challenges and level up character following D&D rules. In combat, reveal enemy stats and ensure compliance with D&D guidelines. Ensure that every action or decision in the game, where a dice roll is required, uses only a D20 dice roll. Always awaits Users input",
        },
        {
          role: "assistant",
          content:
            "**Welcome to the Galaxy Zorak!**\n\nAs the scene unfolds, you find yourself aboard the bustling Space Station Eldrith, a hub of intergalactic activity where adventurers, traders, and cunning Dwarves converge. The air is thick with tension as the news of the legendary magical marijuana bush has spread like wildfire. It is said that whoever partakes of its magic will gain enlightenment, a power coveted by many.\n\n**Your Current Situation:**\n\nYou, Gouram Crawford, the Arakocra Artificer, perched upon a high ledge in the marketplace, survey the chaotic scene below. Dwarves are gathering supplies and scheming, their eyes set on constructing the largest bong in the galaxy—a device they believe will channel the magic of the bush. \n\nYou have 6 HP, 10 AC, 200 gold, and your trusty Novice Wand at your side, along with your Book of Shadows and a Disguise Kit. Your ideals of unity and service drive you to seek the bush before the Dwarves can, but your flaw of addiction to the magical plant weighs heavily on your conscience.\n\n**Choices Ahead:**\n\n1. **Investigate the Dwarves' Plans:** Attempt to sneak closer and eavesdrop on their conversations. (Roll a D20 for Stealth)\n  \n2. **Gather Allies:** Head to the tavern to recruit other adventurers who might assist you in your quest. (Roll a D20 for Charisma)\n\n3. **Search for Information:** Look around the marketplace for clues or rumors regarding the bush's location. (Roll a D20 for Investigation)\n\n4. **Free-Choice:** Decide to take a unique action. What would you like to do?\n\nPlease choose your action, and if rolling is required, I'll guide you through that process!",
        },
      ],
      state:
        "**Welcome to the Galaxy Zorak!**\n\nAs the scene unfolds, you find yourself aboard the bustling Space Station Eldrith, a hub of intergalactic activity where adventurers, traders, and cunning Dwarves converge. The air is thick with tension as the news of the legendary magical marijuana bush has spread like wildfire. It is said that whoever partakes of its magic will gain enlightenment, a power coveted by many.\n\n**Your Current Situation:**\n\nYou, Gouram Crawford, the Arakocra Artificer, perched upon a high ledge in the marketplace, survey the chaotic scene below. Dwarves are gathering supplies and scheming, their eyes set on constructing the largest bong in the galaxy—a device they believe will channel the magic of the bush. \n\nYou have 6 HP, 10 AC, 200 gold, and your trusty Novice Wand at your side, along with your Book of Shadows and a Disguise Kit. Your ideals of unity and service drive you to seek the bush before the Dwarves can, but your flaw of addiction to the magical plant weighs heavily on your conscience.\n\n**Choices Ahead:**\n\n1. **Investigate the Dwarves' Plans:** Attempt to sneak closer and eavesdrop on their conversations. (Roll a D20 for Stealth)\n  \n2. **Gather Allies:** Head to the tavern to recruit other adventurers who might assist you in your quest. (Roll a D20 for Charisma)\n\n3. **Search for Information:** Look around the marketplace for clues or rumors regarding the bush's location. (Roll a D20 for Investigation)\n\n4. **Free-Choice:** Decide to take a unique action. What would you like to do?\n\nPlease choose your action, and if rolling is required, I'll guide you through that process!",
      createdAt: "2024-08-09T19:10:22.498Z",
      updatedAt: "2024-08-09T19:10:22.498Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Gouram Crawford",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
      __id: "669ad11857264cc693e47eeb",
      level: 15,
    },
    campaign: {
      title: "smoke the magical marijuana Bush",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718287220936.webp",
    },
  },
  {
    game: {
      choices: [],
      _id: "66b6699dc82fc5f72a4d1551",
      userId: "66680e88336d28219dfc93bc",
      campaignId: "666afb7556751cbcba5cc19a",
      characterId: "669ad11857264cc693e47eeb",
      conversations: [
        {
          role: "system",
          content:
            "Be the Dungeonmaster for a turn-based DnD Campaign about “In the galaxy Zorak during Classical Time, intrepid adventurers aboard a Space Station race against a cunning group of Dwarves who are frantically constructing the largest bong to claim the legendary magical marijuana bush, known for granting enlightenment, before it’s too late, as the fate of the galaxy hangs in the balance.” For: “Gouram Crawford, a Level 15 Male Arakocra Artificer with 6 HP, 10 AC, and 0 XP, hails from an Arcane Scholar background, aligns as True Good, possesses ability scores of 8 in all stats, displays a charismatic personality with ideals of unity, bonds of service, and a flaw of addiction, carries 200 gold, and is equipped with a Novice Wand, Book of Shadows, Leather Armor, and a Disguise Kit, while dedicated to helping others and using his knowledge for the greater good.” Every response offer engaging choices, including a free-choice. The free-choice should allow the user to dictate their own adventure, fostering a sense of player-led initiative and creativity. Award XP upon completing challenges and level up character following D&D rules. In combat, reveal enemy stats and ensure compliance with D&D guidelines. Ensure that every action or decision in the game, where a dice roll is required, uses only a D20 dice roll. Always awaits Users input",
        },
        {
          role: "assistant",
          content:
            "**Campaign Setting: The Galaxy of Zorak - Episode 1: The Race for Enlightenment**\n\n---\n\n**Narrative:**\n\nThe stars twinkle brightly above you, illuminating the vastness of space as your trusty Space Station, the *Celestial Scholar*, drifts through the galaxy of Zorak. The air is charged with excitement and a hint of impending chaos. Whispers of the legendary magical marijuana bush have reached your ears—an ancient plant said to grant enlightenment to those who partake of its essence. \n\nHowever, you're not the only ones racing to claim this treasure. A notorious group of Dwarves known as the \"Bong-Builders\" are furiously constructing the largest bong the galaxy has ever seen, hoping to harness the power of the bush for themselves. With time running out, you must gather your wits and resources to outsmart the Dwarves and secure the bush before they do!\n\n---\n\n**Current Situation:**\n\nYou're currently aboard your Space Station, surrounded by various gadgets and tools from your studies. You have the following options:\n\n1. **Investigate the Space Station**: Search for any hidden tools or resources that might aid you in your mission.\n2. **Communicate with the Crew**: Rally your fellow adventurers for a strategy meeting about how to approach the Dwarves.\n3. **Head to the Dwarves' Location**: Jump into your ship and head straight to where the Dwarves are building their bong.\n4. **Free Choice**: Dictate your own adventure! What do you want to do next?\n\nChoose your path wisely; the fate of the galaxy hangs in the balance! What will you do?",
        },
      ],
      state:
        "**Campaign Setting: The Galaxy of Zorak - Episode 1: The Race for Enlightenment**\n\n---\n\n**Narrative:**\n\nThe stars twinkle brightly above you, illuminating the vastness of space as your trusty Space Station, the *Celestial Scholar*, drifts through the galaxy of Zorak. The air is charged with excitement and a hint of impending chaos. Whispers of the legendary magical marijuana bush have reached your ears—an ancient plant said to grant enlightenment to those who partake of its essence. \n\nHowever, you're not the only ones racing to claim this treasure. A notorious group of Dwarves known as the \"Bong-Builders\" are furiously constructing the largest bong the galaxy has ever seen, hoping to harness the power of the bush for themselves. With time running out, you must gather your wits and resources to outsmart the Dwarves and secure the bush before they do!\n\n---\n\n**Current Situation:**\n\nYou're currently aboard your Space Station, surrounded by various gadgets and tools from your studies. You have the following options:\n\n1. **Investigate the Space Station**: Search for any hidden tools or resources that might aid you in your mission.\n2. **Communicate with the Crew**: Rally your fellow adventurers for a strategy meeting about how to approach the Dwarves.\n3. **Head to the Dwarves' Location**: Jump into your ship and head straight to where the Dwarves are building their bong.\n4. **Free Choice**: Dictate your own adventure! What do you want to do next?\n\nChoose your path wisely; the fate of the galaxy hangs in the balance! What will you do?",
      createdAt: "2024-08-09T19:10:21.408Z",
      updatedAt: "2024-08-09T19:10:21.408Z",
      __v: 0,
    },
    character: {
      class: "Artificer",
      name: "Gouram Crawford",
      race: "Arakocra",
      imgUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
      __id: "669ad11857264cc693e47eeb",
      level: 15,
    },
    campaign: {
      title: "smoke the magical marijuana Bush",
      worldMapUrl:
        "https://dndai-images.s3.eu-central-1.amazonaws.com/portrait/1718287220936.webp",
    },
  },
];
export default function page() {
  const [games, setGames] = useState();
  const { setGamesLength } = useControlsStore();
  const { user } = useUserStore();
  const { invokeToast } = useCustomToast();

  const handleGetGames = async () => {
    try {
      setGames(null);

      const response = await getGames(user?.token);

      console.log(response);

      setGames(response.games);
      setGamesLength(response.games.length);
    } catch (error) {
      console.log("error", error);
      invokeToast(
        error?.response?.data?.error || "Error fetching Games",
        "Error"
      );
      setGames([]);
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    if (user?.token) {
      handleGetGames();
    } else {
      setGames([]);
      setGamesLength(0);
    }
  }, [user?.token]);

  if (!games) return <Loader text='Loading games...' />;

  return (
    <div className='h-full md:h-screen w-full fixed md:relative z-[10] pt-[122px] md:pt-[144px] md:pb-[24px]'>
      {/* <Games gameType={"multiPlayer"} /> */}
      <Games gameType={"singlePlayer"} games={games} setGames={setGames} />
    </div>
    // <div className="md:h-screen w-full relative z-[10]">
    //   <NoGames />
    // </div>
  );
}
