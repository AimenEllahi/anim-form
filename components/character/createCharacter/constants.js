const selectRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const STEP_NAMES = [
  "RACE",
  "CLASS",
  "ABILITIES",
  "BACKGROUND",
  "PERSONALITY",
  "ALIGNMENT",
  "EQUIPMENT",
  "STARTING GOLD",
  "CHARACTER NAME",
];
export const RACE_GENDER = ["male", "female", "diverse"];

export const RACE = [
  {
    name: "Arakocra",
    description:
      "Soaring through the skies, Arakocra are bird-like creatures from the Elemental Plane of Air, renowned for their unparalleled flight and agility. Their keen sense of vision makes them exceptional scouts and fierce combatants.",
  },
  {
    name: "Aasimar",
    description:
      "Blessed with celestial heritage, Aasimars are divine protectors, embodying the light and justice of the Upper Planes. Their radiant presence and healing abilities make them invaluable allies in any adventuring party.",
  },
  {
    name: "Air Genasi",
    description:
      "Born of the breezes, Air Genasi are part-genie beings with a close connection to the Elemental Plane of Air, granting them control over winds and superior agility. They often appear as free-spirited and unpredictable as a summer storm.",
  },
  {
    name: "Astral Elf",
    description:
      "Hailing from the enigmatic Astral Plane, Astral Elves possess otherworldly grace and longevity, often pursuing paths of both arcane and martial excellence. Their connection to astral energy grants them unique magical abilities and insights.",
  },
  {
    name: "Autognome",
    description:
      "Crafted by gnome inventors, Autognomes are mechanical beings with a heart-like drive for adventure, exhibiting both resilience and curiosity. Their intricate design often imbues them with remarkable versatility and problem-solving skills.",
  },
  {
    name: "Bugbear",
    description:
      "Lurking in shadows, Bugbears are hulking, goblinoid brutes known for their strength and stealth, often surprising foes with deadly ambushes. Their natural affinity for intimidation makes them fearsome adversaries.",
  },
  {
    name: "Centaur",
    description:
      "Half-human, half-horse, Centaurs combine the power and speed of a steed with the intellect and dexterity of a humanoid. As guardians of woodland realms, they are often skilled warriors and wise druids.",
  },
  {
    name: "Changeling",
    description:
      "Masters of disguise, Changelings possess the uncanny ability to alter their appearance at will, making them exceptional spies and infiltrators. Their fluid identities reflect a complex relationship with trust and self-expression.",
  },
  {
    name: "Deep Gnome",
    description:
      "Residing in the Underdark, Deep Gnomes are elusive, secretive beings with a deep connection to stone and minerals. Their natural camouflage and innate magical abilities make them exceptional miners and scouts.",
  },
  {
    name: "Dragonborn",
    description:
      "Proud and noble, Dragonborn are dragon-kin warriors with the power to unleash devastating breath attacks. Their clan-based societies are driven by honor and a strong sense of destiny.",
  },
  { name: "Drow", description: "" },
  {
    name: "Duergar",
    description:
      "Dark and doughty, Duergar are a subrace of dwarves that dwell deep in the Underdark, known for their grim demeanor and psionic abilities. Their mastery of stealth and stonecraft makes them formidable foes and skilled artisans.",
  },
  {
    name: "Dwarf",
    description:
      "Stout and hardy, Dwarves are resilient beings famous for their craftsmanship, combat prowess, and unyielding loyalty. Their deep connection to mountains and stone imbues them with a strong sense of tradition and community.",
  },
  {
    name: "Earth Genasi",
    description:
      "Solid and unyielding, Earth Genasi are descendants of earth elementals, possessing rocky skin and an affinity for stone and soil. Their physical strength and durability make them formidable defenders and laborers.",
  },
  {
    name: "Eladrin",
    description:
      "Hailing from the Feywild, Eladrin are fey-touched elves who embody the seasons, each granting them distinct abilities and moods. Their grace and magical prowess are as changing and enchanting as the seasons themselves.",
  },
  {
    name: "Elf",
    description:
      "Graceful and wise, Elves are immortal beings deeply connected to nature and magic, exuding both elegance and lethal skill. Their centuries-long lifespans grant them unparalleled expertise in arts, combat, and lore.",
  },
  {
    name: "Fairy",
    description:
      "Tiny and enchanting, Fairies are whimsical beings from the Feywild, with the innate ability to fly and cast charming spells. Their playful nature and boundless curiosity often lead them to grand adventures.",
  },
  {
    name: "Feral Tiefling",
    description:
      "Born of fiendish ancestry, Feral Tieflings possess a sinister beauty and a fierce independence, marked by their horns, tails, and infernal heritage. Their cunning and agility make them deadly rogues and spellcasters.",
  },
  {
    name: "Firbolg",
    description:
      "Gentle giants attuned to nature, Firbolgs reside in secluded forests, harmonizing with flora and fauna around them. Their druidic magic and enormous strength make them both guardians and protectors of the wild.",
  },
  {
    name: "Fire Genasi",
    description:
      "With hair like flames and skin that radiates warmth, Fire Genasi are descendants of fire elementals, capable of conjuring and withstanding intense heat. Their fiery temperament often matches their elemental heritage.",
  },
  {
    name: "Giff",
    description:
      "Giff are brawny, hippopotamus-like beings known for their military discipline and a penchant for gunpowder weapons. Their robust constitution and martial prowess make them formidable opponents on any battlefield.",
  },
  {
    name: "Githyanki",
    description:
      "Fierce and warlike, Githyanki are astral pirates and raiders armed with psionics and combat skill, constantly battling their ancient enemies. Their strict hierarchy and martial culture foster ruthless efficiency.",
  },
  {
    name: "Githzerai",
    description:
      "Ascetic and introspective, Githzerai dwell in Limbo's chaos, honing their psionic powers and mastering their minds. Their monastic discipline and mental prowess make them highly potent in both combat and meditation.",
  },
  {
    name: "Gnome",
    description:
      "Whimsical and inventive, Gnomes are known for their cheerful demeanor and unparalleled talent for tinkering and illusion magic. Their inexhaustible curiosity drives them to explore and create wonders of both history and magic.",
  },
  {
    name: "Goblin",
    description:
      "Small but scrappy, Goblins are cunning survivors with a knack for mischief and traps, often thriving through sheer opportunism. Their agility and resourcefulness make them expert scavengers and stealthy fighters.",
  },
  {
    name: "Goliath",
    description:
      "Towering and robust, Goliaths are mountain-dwelling nomads, embodying the relentless might of stone and ice. Their physical strength and competitive spirit make them natural athletes and warriors.",
  },
  {
    name: "Grung",
    description:
      "Frog-like and agile, Grungs are tree-dwelling amphibians with toxic skin and an affinity for guerrilla tactics. Their unique biology and combat style make them dangerous opponents in their jungle homes.",
  },
  {
    name: "Hadozee",
    description:
      "Arboreal and agile, Hadozees resemble flying primates, capable of gliding between tree canopies. Their adventurous spirit and skyward mobility make them hard to pin down and thrilling to watch.",
  },
  {
    name: "Half-Elf",
    description:
      "Blending human versatility and elven grace, Half-Elves excel in adaptability, balancing a life between two worlds. Their charisma and diverse skill set make them natural diplomats and adventurers.",
  },
  {
    name: "Half-Orc",
    description:
      "Combining human tenacity with orcish might, Half-Orcs are fierce warriors marked by their resilience and combat prowess. Their intimidating presence and inner strength make them formidable leaders and fighters.",
  },
  {
    name: "Halfling",
    description:
      "Small and spry, Halflings are eternally optimistic and lucky, bringing joy and courage to any adventuring party. Their resourcefulness and stealth are often underestimated by their larger foes.",
  },
  {
    name: "Harengon",
    description:
      "High-spirited and quick, Harengons are rabbitfolk kin to the Feywild, known for their agility and luck. Their boundless energy and sharp reflexes help them evade dangers and spring into action with ease.",
  },
  {
    name: "Hobgoblin",
    description:
      "Disciplined and martial, Hobgoblins are warlike goblinoids who value strength, hierarchy, and strategic might. Their rigid military structure and tactical brilliance make them formidable foes and commanders.",
  },
  {
    name: "Human",
    description:
      "Versatile and ambitious, Humans are known for their adaptability and the drive to achieve greatness across all endeavors. Their varied cultures and experiences make them the most diverse and influential race.",
  },
  {
    name: "Kalashtar",
    description:
      "Mystically connected to spirits from the Plane of Dreams, Kalashtar are serene and telepathic beings exceptional in psychic abilities. Their spiritual insight often guides them towards a path of peace and enlightenment.",
  },
  {
    name: "Kender",
    description:
      "Inquisitive and fearless, Kender are small humanoids known for their boundless curiosity and lack of fear, often getting into trouble. Their insatiable wanderlust and kleptomaniac tendencies lead to unexpected adventures.",
  },
  {
    name: "Kenku",
    description:
      "Mimicking birds of an eerie nature, Kenku communicate mostly through sounds they've heard, making them excellent spies and charlatans. Their lack of original speech only sharpens their creativity and cunning.",
  },
  {
    name: "Kobold",
    description:
      "Loyal and crafty, Kobolds are small draconic humanoids renowned for their trap-making and cunning tactics. Their pack mentality and ingenuity often compensate for their physical frailty.",
  },
  {
    name: "Leonin",
    description:
      "Proud and fierce, Leonin are lion-like warriors from the plains of Theros, embodying both strength and bravery. Their pride-driven culture values honor, combat prowess, and the defense of their kin.",
  },
  {
    name: "Lizardfolk",
    description:
      "Pragmatic and stoic, Lizardfolk are reptilian beings with a keen survival instinct and a unique view of the world. Their cold logic and resourcefulness make them formidable in both crafting and combat.",
  },
  {
    name: "Loxodon",
    description:
      "Wise and serene, Loxodons are elephantine beings with an unshakable sense of community and calm. Their immense strength and tranquil demeanor make them natural leaders and stalwart guardians.",
  },
  {
    name: "Minotaur",
    description:
      "Fierce and honorable, Minotaurs are powerful bovine humanoids with a labyrinthine sense of strategy and strength. Their warrior culture values strength, honor, and a clear sense of purpose.",
  },
  {
    name: "Orc",
    description:
      "Savage and fierce, Orcs are mighty warriors with a tribal society deeply rooted in strength and conquest. Their relentless aggression and brute force make them feared combatants across many lands.",
  },
  {
    name: "Plasmoid",
    description:
      "Amorphous and adaptable, Plasmoids are sentient ooze creatures capable of shifting their shape and form. Their unique biology grants them extraordinary flexibility and resilience in various environments.",
  },
  {
    name: "Satyr",
    description:
      "Joyful and mischievous, Satyrs are fey creatures embodying the wild revelry and chaos of nature. Their musical talent and carefree spirit often lead them into adventures filled with both danger and delight.",
  },
  {
    name: "Sea Elf",
    description:
      "Graceful and aquatic, Sea Elves are at home in the ocean depths, skilled in swimming and underwater combat. Their connection to the sea and its creatures makes them exceptional sailors and guardians of marine realms.",
  },
  {
    name: "Shadar-Kai",
    description:
      "Dark and elusive, Shadar-Kai are shadowy elves from the Shadowfell, marked by their affinity for necrotic energies and stealth. Their enigmatic presence and mastery of shadow magic make them both feared and revered.",
  },
  {
    name: "Shifter",
    description:
      "Wild and instinctive, Shifters are lycanthropic descendants capable of temporarily enhancing their physical abilities. Their primal nature and versatility make them formidable hunters and survivors.",
  },
  {
    name: "Simic Hybrid",
    description:
      "Genetically enhanced by the Simic Combine, Simic Hybrids are amalgamations of various life forms, possessing unique biological adaptations. Their engineered abilities often grant them unparalleled versatility and strength.",
  },
  {
    name: "Tabaxi",
    description:
      "Nimble and curious, Tabaxi are feline humanoids with an insatiable thirst for knowledge and adventure. Their agility and keen senses make them exceptional explorers and rogues.",
  },
  {
    name: "Thri-Kreen",
    description:
      "Insectoid and enigmatic, Thri-Kreen are mantis-like beings with a hive mentality and natural psionic abilities. Their alien perspective and physical prowess make them both fascinating and formidable.",
  },
  {
    name: "Tiefling",
    description:
      "Marked by infernal heritage, Tieflings are often misunderstood beings with fiendish traits and an affinity for dark magic. Their resilience and charisma often hide a tumultuous inner struggle between good and evil.",
  },
  {
    name: "Tortle",
    description:
      "Calm and contemplative, Tortles are turtle-like humanoids with a deep connection to the earth and sea. Their natural armor and serene outlook make them both sturdy defenders and wise sages.",
  },
  {
    name: "Triton",
    description:
      "Regal and aquatic, Tritons are guardians of the deep, with the ability to command sea creatures and control water. Their noble bearing and dedication to protecting the ocean make them natural leaders.",
  },
  {
    name: "Vedalken",
    description:
      "Logical and meticulous, Vedalken are blue-skinned scholars and inventors with a penchant for perfection. Their analytical minds and passion for knowledge drive them to excel in both arcane and scientific endeavors.",
  },
  {
    name: "Verdan",
    description:
      "Adaptive and ever-changing, Verdan are goblinoid beings blessed with rapid evolution, often shifting in size and abilities. Their mutable nature and curiosity lead them to constantly explore and adapt.",
  },
  {
    name: "Warforgerd",
    description:
      "Created for war but yearning for purpose, Warforged are sentient constructs with a blend of metal and organic material. Their resilience and combat prowess are matched by their quest for identity and meaning.",
  },
  {
    name: "Water Genasi",
    description:
      "Flowing and fluid, Water Genasi are beings with elemental water heritage, granting them control over aquatic environments. Their adaptability and calm demeanor often hide a deep well of power and emotion.",
  },
  {
    name: "Wood-elf",
    description:
      "Swift and reclusive, Wood Elves are forest dwellers with an unparalleled connection to nature and archery. Their agility and stealth make them exceptional scouts and guardians of the wild.",
  },
  {
    name: "Yuan-ti",
    description:
      "Cunning and serpentine, Yuan-ti Purebloods are humanoids with a serpentine heritage, often possessing innate charm and magical abilities. Their secretive and manipulative nature makes them both dangerous and alluring.",
  },
];
export const ALIGNMENT = [
  {
    name: "true good",
    description:
      "They strive to help others without bias or expectation, acting as pure beacons of benevolence in a chaotic world. Their actions seek to create a balance where good flourishes without being restricted by law or thrown into anarchy.",
  },
  {
    name: "Lawful Good",
    description:
      "They are the moral crusaders bound by honor and duty, upholding laws and traditions to champion justice. Every decision reflects a commitment to righteousness tempered by fairness and discipline.",
  },
  {
    name: "chaotic good",
    description:
      "Freedom and kindness fuel their actions, as they believe in breaking down unjust systems to bring about positive change. Their inherently rebellious nature makes them champions for personal liberty and benevolent rebels.",
  },
  {
    name: "true neutral",
    description:
      "Balance is their guiding principle, neither swinging to extremes of good or evil, law or chaos. They act as maintainers of equilibrium, ensuring no side wields too much power.",
  },
  {
    name: "lawful neutral",
    description:
      "Order and structure come above all else, adhering to laws and systems regardless of moral outcomes. They might enforce harsh rules if they believe it will preserve the stability of society.",
  },
  {
    name: "chaotic neutral",
    description:
      "They are wild spirits who value their autonomy above all, acting according to whim and personal desire. Unpredictable and free-spirited, they reject any form of constraint, whether moral or legal.",
  },
  {
    name: "true evil",
    description:
      "Pure self-interest motivates them, as they exploit any opportunity for personal gain without either societal or moral regard. They can be methodical or opportunistic, as long as their own benefit is served.",
  },
  {
    name: "lawful evil",
    description:
      "They wield power through strict hierarchies and oppressive systems, manipulating structures to achieve their own dark ambitions within the bounds of law. Their tyranny is both systematic and devastating.",
  },
  {
    name: "chaotic evil",
    description:
      "They thrive on destruction, unleashing havoc with no regard for rules, order, or the suffering they cause. Their actions are driven by pure malice, making them the embodiment of unbridled chaos and malevolence.",
  },
];

export const BACKGROUND = [
  {
    name: "Arcane Scholar",
    description:
      "You have dedicated your life to the study of the mystical arts, pouring over ancient tomes and manuscripts to unlock the secrets of the arcane. Your deep knowledge of magic makes you a valued and insightful advisor, but also places you amidst the powerful and mysterious shadows of the magical world.",
  },
  {
    name: "City Watch",
    description:
      "As a vigilant member of the city watch, you have spent years patrolling the streets, maintaining law and order, and confronting the dark underbelly of urban life. You're familiar with the rhythms of the city and have developed instincts that help you sense trouble before it starts.",
  },
  {
    name: "Criminal Underworld",
    description:
      "You grew up amidst rogues, thieves, and schemers, learning the tricks of the trade from a young age. The criminal underworld is your home, where you navigate intrigues and shadows with uncanny skill, always seeking the next big score.",
  },
  {
    name: "Dungeon Delver",
    description:
      "Exploring dark, forgotten places filled with ancient traps and treasures is your calling. Your experiences in perilous caverns and ruins have honed your senses and fighting skills, making you an invaluable companion on any adventure.",
  },
  {
    name: "Entertainer Extraordinaire",
    description:
      "With a flair for the dramatic and a talent for captivating audiences, you have performed in taverns and grand theaters alike. Your charisma and stage presence open doors and hearts, making you a beloved figure wherever you go.",
  },
  {
    name: "Far Traveler",
    description:
      "Drawn to distant lands and diverse cultures, you have wandered far from your homeland. Exposure to myriad traditions and languages has made you a repository of exotic knowledge and unique perspectives.",
  },
  {
    name: "Fey-Touched",
    description:
      "Your life has been shaped by the touch of the fey, granting you a mystical connection to the forces of nature and whimsy. This enchantment makes you a conduit of otherworldly magic, influencing fate and fortune in unpredictable ways.",
  },
  {
    name: "Folk Hero",
    description:
      "The people sing songs of your deeds, celebrating you as a savior who stood against tyranny and injustice. Your down-to-earth roots and inspirational presence rally those around you, spurring them to acts of bravery.",
  },
  {
    name: "Guild Artisan",
    description:
      "Mastering a specific trade, you have risen through the ranks of a craftsman’s guild, producing sought-after works of art and utility. Your craftsmanship and business acumen grant you access to a network of influential contacts and patrons.",
  },
  {
    name: "Haunted Survivor",
    description:
      "Having endured a tragic encounter with the supernatural, you bear the scars of your past both physically and mentally. Your ability to sense and understand eerie phenomena makes you a steadfast ally against otherworldly threats.",
  },
  {
    name: "Hermit Mystic",
    description:
      "Years of seclusion have granted you profound wisdom and inner peace, along with an intimate understanding of nature's mysteries. Your insights often provide unique solutions to problems, despite your occasional struggle with social interactions.",
  },
  {
    name: "Knight Errant",
    description:
      "Sworn to uphold chivalry and defend the innocent, you roam the land in search of wrongs to right. Your combat prowess and unwavering sense of honor make you a beacon of hope in troubled times.",
  },
  {
    name: "Mercenary Veteran",
    description:
      "Your past campaigns as a hired soldier have left you with a wealth of battlefield experience and tactical prowess. Your gritty determination and hardened demeanor make you a formidable presence in any fight.",
  },
  {
    name: "Monster Hunter",
    description:
      "Specialized in tracking and confronting fearsome beasts, you have learned the skills and courage necessary to survive against the most dangerous creatures. Your knowledge of monster lore and combat tactics makes you a crucial asset in perilous encounters.",
  },
  {
    name: "Noble Exile",
    description:
      "Once part of the ruling class, you were cast out of your aristocratic life under tragic or unjust circumstances. This fall from grace has hardened your resolve, and you now seek to reclaim your lost honor or forge a new path.",
  },
  {
    name: "Outlander Wanderer",
    description:
      "Raised in the remote wilderness, you possess unparalleled survival skills and a deep kinship with the natural world. Your knowledge of the land’s secrets allows you to navigate and thrive in terrain where others would falter.",
  },
  {
    name: "Sage Scholar",
    description:
      "With a voracious appetite for knowledge, you have pored over countless volumes in pursuit of understanding. Your encyclopedic mind and analytical skills often provide crucial information and insights in times of need.",
  },
  {
    name: "Sailor of the High Seas",
    description:
      "The call of the ocean has guided you through many adventures on the tumultuous waves. Your seafaring skills and familiarity with maritime lore help you navigate both the literal and metaphorical storms you encounter.",
  },
  {
    name: "Street Urchin",
    description:
      "Growing up in the alleys and backstreets, you have learned to survive by your wits and agility. The urban sprawl is your playground, where you evade danger and seize opportunities amidst poverty and crime.",
  },
  {
    name: "Explorer of the Unknown",
    description:
      "Driven by insatiable curiosity, you embark on expeditions to uncover the secrets of uncharted lands. Your experiences on the edges of known civilization equip you with invaluable knowledge and resilience.",
  },
  {
    name: "Lost Heir",
    description:
      "A twist of fate has hidden your true lineage, leaving you in search of your rightful place and heritage. Your quest for identity and belonging fuels your journey, uncovering secrets about both your past and your future.",
  },
  {
    name: "Shadow Agent",
    description:
      "Skilled in espionage and subterfuge, you operate in the shadows, gathering secrets and manipulating events from behind the scenes. Your covert actions have far-reaching impacts, even as you remain an enigma to most.",
  },
  {
    name: "Spiritual Guide",
    description:
      "With a deep connection to the divine or the spiritual realm, you offer wisdom and comfort to those seeking enlightenment. Your guidance is often sought in matters of faith, morality, and the unseen forces shaping the world.",
  },
  {
    name: "Wilderness Scout",
    description:
      "As a seasoned scout, you are adept at navigating and surviving the wilds, often serving as the eyes and ears of your group. Your expertise in tracking, foraging, and stealth makes you an indispensable guide in untamed regions.",
  },
];

export const CLASSES = [
  {
    name: "Artificer",
    description:
      "Innovators and tinkerers, Artificers blend magic with technology to create astonishing gadgets and potent magical items. From arcane grenades to mechanical companions, their ingenuity turns the tide of any battle.",
  },
  {
    name: "Barbarian",
    description:
      "Fueled by primal fury, Barbarians unleash devastating power and unmatched resilience in combat. Their rage makes them the eye of any storm, shrugging off blows that would fell lesser warriors.",
  },
  {
    name: "Bard",
    description:
      "Masters of music and magic, Bards weave enchanting melodies and stirring tales to inspire allies and befuddle foes. Their versatile spellcasting and charismatic presence bring both joy and chaos to any adventure.",
  },
  {
    name: "Blood Hunter",
    description:
      "Driven by dark pacts and intense discipline, Blood Hunters use hemocraft—blood magic—to hunt monstrous threats. These warriors sacrifice their own vitality to gain supernatural abilities and take down evil from within and without.",
  },
  {
    name: "Cleric",
    description:
      "Divine agents of the gods, Clerics heal, protect, and smite with holy power. Their prayers are answered by miracles, making them indispensable spiritual and martial champions against darkness.",
  },
  {
    name: "Druid",
    description:
      "Guardians of the natural world, Druids call upon the primal forces of nature to cast spells and shapeshift into beasts. Their symbiosis with the environment makes them versatile adventurers and formidable foes.",
  },
  {
    name: "Fighter",
    description:
      "Masters of weaponry and tactics, Fighters are the backbone of any combat scenario. Whether as nimble duelists or heavily armored juggernauts, their martial prowess dominates the battlefield.",
  },
  {
    name: "Monk",
    description:
      "Embodying the spirit of perfection and discipline, Monks harness their ki to perform incredible physical feats. Their mastery of martial arts allows them to strike with blinding speed and evade even the most lethal attacks.",
  },
  {
    name: "Paladin",
    description:
      "Sworn to an oath, Paladins combine martial skill with divine magic to uphold justice and fight evil. Their sacred vows grant them miraculous powers and a relentless drive to protect the innocent and punish the wicked.",
  },
  {
    name: "Ranger",
    description:
      "Expert trackers and survivalists, Rangers thrive in the wilds and bring down foes with deadly precision. Their magical bond with nature, along with their combat prowess, makes them formidable scouts and warriors.",
  },
  {
    name: "Rogue",
    description:
      "Stealthy and cunning, Rogues excel in sneaking, thievery, and striking from the shadows. Their guile and agility allow them to outmaneuver foes and deliver devastating, precise attacks.",
  },
  {
    name: "Sorcerer",
    description:
      "Innately gifted with arcane power, Sorcerers unleash wild magic or refined spells straight from their bloodline. Their raw magical talent makes them unpredictable but incredibly powerful spellcasters.",
  },
  {
    name: "Warlock",
    description:
      "Bounded by a pact with otherworldly entities, Warlocks wield arcane powers and dark secrets in exchange for servitude. Their unique connection grants them mysterious and formidable spellcasting abilities.",
  },
  {
    name: "Wizard",
    description:
      "Scholarly spellcasters of unmatched versatility, Wizards accumulate arcane knowledge to cast a vast array of powerful spells. Their deep understanding of magic makes them formidable and adaptable arcane masters.",
  },
];

export const PERSONALITIES = {
  personality: [
    "Adventurous",
    "Brave",
    "Charismatic",
    "Diplomatic",
    "Enigmatic",
    "Sociable",
    "Honorable",
    "Inquisitive",
  ],
  ideal: [
    "Freedom",
    "Harmony",
    "Justice",
    "Knowledge",
    "Power",
    "Tradition",
    "Unity",
    "Victory",
  ],
  bond: [
    "Family",
    "Honor",
    "Loyalty",
    "Redemption",
    "Revenge",
    "Service",
    "Solitude",
    "Treasure",
  ],
  flaw: [
    "Addiction",
    "Cleptomania",
    "Greed",
    "Impulsive",
    "Jealousy",
    "Paranoia",
    "Recklessness",
    "Temptation",
  ],
};

export const EQUIPMENTS = {
  weapon: [ "Wooden Club", "Dagger"
    
  ],
  secondaryweapon: ["Short Sword", "Buckler"
    
  ],
  armour: ["No Armor", "Simple Shirt"],
  "tool&ammo": ["Dice Set", "Healing Potion"
    
  ],
};

export const EQUIPMENT_BY_CLASS = {
  Artificer: {
    weapon: ["Giant Pen", "Battered Axe", "Staff", "Arcane Crossbow"],
    secondaryweapon: ["Shield", "War Drum", "Gadget Belt", "Flare Gun"],
    armour: ["Wooden Armor", "Leather Armor", "Mechanical Plate", "Arcane Robes"],
    "tool&ammo": ["Horse", "Simple Compass", "Alchemy Kit", "Portable Forge"],
  },
  Barbarian: {
    weapon: ["Novice Wand", "Staff", "Stone Greatsword", "Thunder Hammer"],
    secondaryweapon: ["Book of Shadows", "Tarot Deck", "Raging Spear", "Fury Gauntlets"],
    armour: ["Cloth Armor", "Hide Armor", "Bone Armor", "Fur Cloak"],
    "tool&ammo": ["Health Potion", "Herbalism Kit", "Totem of Strength", "War Paint"],
  },
  Bard: {
    weapon: ["Battered Dagger", "Rusty Handcannon", "Lute of Enchantment", "Whimsical Flute"],
    secondaryweapon: ["Thieves' Tools", "Cymbals", "Rapier of Grace", "Shimmering Veil"],
    armour: ["Leather Armor", "Rhapsodic Robes", "Jester's Outfit", "Dancing Cloak"],
    "tool&ammo": ["Thieves' Tools", "Disguise Kit", "Magic Mirror", "Songbook"],
  },
  "Blood Hunter": {
    weapon: ["Cursed Sword", "Bloodied Dagger", "Bloodied Scythe", "Duskblade"],
    secondaryweapon: ["Grim Tome", "Shadow Dagger", "Blood Charm", "Cursed Shield"],
    armour: ["Dark Leather Armor", "Bloodstained Chainmail", "Hallowed Vestments", "Shadow Cloak"],
    "tool&ammo": ["Vial of Blood", "Ritual Components", "Bloodstone", "Hunting Trap"],
  },
  Cleric: {
    weapon: ["Divine Mace", "Holy Staff", "Blessed Dagger", "Sacred Sword"],
    secondaryweapon: ["Shield of Faith", "Relic Tome", "Holy Symbol", "Staff of Light"],
    armour: ["Chain Mail", "Clerical Robes", "Plate Armor", "Divine Vestments"],
    "tool&ammo": ["Healing Potion", "Prayer Beads", "Holy Water", "Incense Burner"],
  },
  Druid: {
    weapon: ["Nature's Staff", "Wooden Bow", "Flame Tongue Scimitar", "Thorn Whip"],
    secondaryweapon: ["Animal Companion", "Druidic Focus", "Herbal Pouch", "Natural Bow"],
    armour: ["Leather Armor", "Hide Armor", "Cloak of Leaves", "Natural Armor"],
    "tool&ammo": ["Potion of Growth", "Herbalism Kit", "Wildshape Focus", "Nature's Journal"],
  },
  Fighter: {
    weapon: ["Broad Sword", "Heavy Crossbow", "Battle Axe", "Spear of Valor"],
    secondaryweapon: ["Shield", "Longbow", "Glaive", "Dagger"],
    armour: ["Chain Mail", "Plate Armor", "Heavy Leather Armor", "Brigandine"],
    "tool&ammo": ["Combat Manual", "Warrior's Rations", "Training Dummies", "Tactics Scroll"],
  },
  Monk: {
    weapon: ["Staff of Tranquility", "Nunchaku", "Iron Fists", "Kusarigama"],
    secondaryweapon: ["Wrist Bracers", "Meditation Stones", "Shuriken", "Throwing Knives"],
    armour: ["Robes of Serenity", "Leather Armor", "Bamboo Armor", "Cloak of the Elements"],
    "tool&ammo": ["Healing Elixir", "Focus Stones", "Spiritual Guide", "Training Mat"],
  },
  Paladin: {
    weapon: ["Divine Sword", "Holy Avenger", "Warhammer", "Flail of Justice"],
    secondaryweapon: ["Shield of Valor", "Tome of Oaths", "Blessed Shield", "Holy Symbol"],
    armour: ["Plate Armor", "Chain Mail", "Divine Chainmail", "Heavenly Robes"],
    "tool&ammo": ["Healing Potion", "Holy Water", "Oathkeeper's Codex", "Prayer Beads"],
  },
  Ranger: {
    weapon: ["Longbow", "Twin Daggers", "Short Sword", "Hunting Spear"],
    secondaryweapon: ["Quiver of Arrows", "Sling", "Camouflage Cloak", "Survival Knife"],
    armour: ["Leather Armor", "Studded Leather", "Hunter's Cloak", "Camouflage Armor"],
    "tool&ammo": ["Tracking Kit", "Herbalism Kit", "Climbing Gear", "Fishing Net"],
  },
  Rogue: {
    weapon: ["Stiletto Dagger", "Poisoned Throwing Star", "Short Sword", "Crossbow"],
    secondaryweapon: ["Thieves' Tools", "Smoke Bombs", "Grappling Hook", "Disguise Kit"],
    armour: ["Leather Armor", "Studded Leather", "Cloak of Shadows", "Silent Boots"],
    "tool&ammo": ["Lockpicking Set", "Poison Vials", "Scroll of Invisibility", "Spyglass"],
  },
  Sorcerer: {
    weapon: ["Arcane Staff", "Eldritch Wand", "Mystic Dagger", "Firebrand"],
    secondaryweapon: ["Spellbook", "Focus Crystal", "Arcane Grimoire", "Elemental Rod"],
    armour: ["Robes of Power", "Magical Cloak", "Enchanted Leather Armor", "Veil of Shadows"],
    "tool&ammo": [ "Hex Potion", "Crystal Ball", "Tome of Spells"],
  },
  Warlock: {
    weapon: ["Cursed Blade", "Wand of Shadows", "Eldritch Staff", "Hex Bow"],
    secondaryweapon: ["Dark Tome", "Pact Weapon", "Grim Amulet", "Cursed Focus"],
    armour: ["Leather Armor", "Ritual Robes", "Cloak of the Occult", "Enchanted Leather Armor"],
    "tool&ammo": ["Soul Stone", "Hexing Kit", "Eldritch Components", "Pact Tokens"],
  },
  Wizard: {
    weapon: ["Arcane Staff", "Spellbook", "Crystal Wand", "Silver Dagger"],
    secondaryweapon: ["Grimoire", "Tome of Knowledge", "Enchanted Focus", "Arcane Orb"],
    armour: ["Robes of the Archmage", "Leather Armor", "Cloak of Protection", "Mystical Garb"],
    "tool&ammo": ["Spell Components", "Potion of Wisdom", "Scrying Mirror", "Arcane Crystal"],
  },
};


export const EQUIPMENT_BY_RACE = {
  Arakocra: {
    weapon: ["Wooden Bow", "Novice Wand", "Feathered Darts", "Gust Staff"],
    secondaryweapon: ["Harp", "Wind Chimes", "Cloud Stone", "Eagle's Talon"],
    armour: ["Cloth Armor", "Leather Armor", "Feathered Cloak", "Light Armor"],
    "tool&ammo": ["Simple Compass", "Disguise Kit", "Sky Map", "Wind Essence"],
  },
  Aasimar: {
    weapon: ["Wooden Hammer", "Battered Axe", "Celestial Longsword", "Holy Staff"],
    secondaryweapon: ["Shield", "Radiant Glaive", "Divine Symbol", "Light Shield"],
    armour: ["Wooden Armor", "Plate Armor", "Celestial Armor", "Chain Mail"],
    "tool&ammo": ["Herbalism Kit", "Holy Water", "Tome of Light", "Healing Salve"],
  },
  "Air Genasi": {
    weapon: ["Big Fish", "Floating Carpet", "Whirlwind Blade", "Storm Staff"],
    secondaryweapon: ["Cloud Shield", "Urn of the Skies", "Gust Blade", "Breeze Whip"],
    armour: ["Cloth Armor", "Leather Armor", "Windbreak Cloak", "Tempest Robes"],
    "tool&ammo": ["Horse", "Health Potion", "Air Essence", "Cloudwalker Boots"],
  },
  "Astral Elf": {
    weapon: ["Starlight Bow", "Astral Blade", "Celestial Spear", "Void Dagger"],
    secondaryweapon: ["Crystal Focus", "Lunar Shield", "Astral Compass", "Dimensional Tome"],
    armour: ["Gleaming Armor", "Starlight Robes", "Cosmic Armor", "Lightweave Garb"],
    "tool&ammo": ["Astral Map", "Star Crystal", "Potion of Starlight", "Etherium Powder"],
  },
  Autognome: {
    weapon: ["Clockwork Crossbow", "Brass Knuckles", "Mechanical Hammer", "Pneumatic Axe"],
    secondaryweapon: ["Gadget Shield", "Magnetic Glove", "Energy Blaster", "Cog Shield"],
    armour: ["Iron Plating", "Steam-Powered Armor", "Brass Armor", "Reinforced Casing"],
    "tool&ammo": ["Toolkit", "Repair Kit", "Energy Cell", "Gnome's Blueprint"],
  },
  Bugbear: {
    weapon: ["Cudgel", "Spiked Club", "Giant Crossbow", "Bear Claw Staff"],
    secondaryweapon: ["Shadow Dagger", "Rugged Shield", "Bear Trap", "Bugbear Flail"],
    armour: ["Leather Armor", "Studded Leather", "Fur Cloak", "Hide Armor"],
    "tool&ammo": ["Potion of Stealth", "Rations", "Hunting Traps", "Grappling Hook"],
  },
  Centaur: {
    weapon: ["Greatbow", "Lance", "War Spear", "Hoof Shield"],
    secondaryweapon: ["Throwing Javelin", "Shield of the Herd", "Hunting Horn", "Quiver of Arrows"],
    armour: ["Hide Armor", "Leather Armor", "Centaur Plate", "Bardings"],
    "tool&ammo": ["Healing Salve", "Herbalism Kit", "Riding Gear", "Trail Map"],
  },
  Changeling: {
    weapon: ["Glamour Dagger", "Subtle Bow", "Illusionary Staff", "Poisoned Throwing Knife"],
    secondaryweapon: ["Mask of Deception", "Grappling Hook", "Cloak of Shadows", "Charm Amulet"],
    armour: ["Leather Armor", "Cloak of Invisibility", "Disguise Robes", "Soft Leather"],
    "tool&ammo": ["Disguise Kit", "Potion of Change", "Infiltration Tools", "Scrying Mirror"],
  },
  "Deep Gnome": {
    weapon: ["Cave Pick", "Shimmering Dagger", "Gnomish Blunderbuss", "Stone Slingshot"],
    secondaryweapon: ["Darkvision Goggles", "Cave Lantern", "Gemstone Shield", "Tinkerer's Tools"],
    armour: ["Stone Armor", "Toughened Leather", "Cave Armor", "Rock Shield"],
    "tool&ammo": ["Mining Kit", "Gnome's Light", "Gemstones", "Potion of Earth"],
  },
  Dragonborn: {
    weapon: ["Draconic Greatsword", "Scaled Lance", "Fire Breath Crossbow", "Claw Staff"],
    secondaryweapon: ["Dragon Shield", "War Horn", "Tail Whip", "Breath Amulet"],
    armour: ["Plate Armor", "Draconic Hide", "Leather Armor", "Scalemail"],
    "tool&ammo": ["Potion of Elemental Breath", "Dragon's Egg", "Battle Standard", "Firestone"],
  },
  Drow: {
    weapon: ["Darkblade", "Elven Shortbow", "Poisoned Dagger", "Crossbow of Shadows"],
    secondaryweapon: ["Spider Shield", "Grappling Hook", "Shadow Cloak", "Drow Wand"],
    armour: ["Black Leather Armor", "Studded Armor", "Cloak of Darkness", "Enchanted Robes"],
    "tool&ammo": ["Potion of Stealth", "Darkvision Potion", "Silken Rope", "Drow Spell Components"],
  },
  Duergar: {
    weapon: ["Warhammer", "Short Sword", "Duergar Crossbow", "Giant Hammer"],
    secondaryweapon: ["Shield of Stone", "Grappling Hook", "Duergar Pickaxe", "Dwarven Throwing Axe"],
    armour: ["Dark Iron Armor", "Chain Mail", "Stone Armor", "Heavy Plate"],
    "tool&ammo": ["Mining Kit", "Potion of Stone Skin", "Gems", "Dungeon Map"],
  },
  Dwarf: {
    weapon: ["Battle Axe", "Warhammer", "Throwing Hammer", "Dwarven Crossbow"],
    secondaryweapon: ["Shield", "Climbing Gear", "Dwarven Handaxe", "War Pick"],
    armour: ["Plate Armor", "Chain Mail", "Heavy Leather Armor", "Dwarven Forge Armor"],
    "tool&ammo": ["Mining Kit", "Potion of Strength", "Dwarven Rations", "Tinker's Tools"],
  },
  "Earth Genasi": {
    weapon: ["Stone Hammer", "Earth Shard Staff", "Boulder Shield", "Cave Bow"],
    secondaryweapon: ["Rock Gauntlet", "Stoneskin Shield", "Heavy Pick", "Quarry Knife"],
    armour: ["Stone Armor", "Clay Armor", "Heavy Leather Armor", "Earthen Robes"],
    "tool&ammo": ["Shovel", "Mining Kit", "Potion of Earth Elemental", "Rock Hammer"],
  },
  Eladrin: {
    weapon: ["Moonlit Blade", "Enchanted Bow", "Feyblade", "Elven Rapier"],
    secondaryweapon: ["Gleaming Shield", "Fey Charm", "Lunar Compass", "Wand of Seasons"],
    armour: ["Fey Armor", "Leather Armor", "Eladrin Cloak", "Robes of the Fey"],
    "tool&ammo": ["Potion of Fey Step", "Fey Dust", "Wildflower Seeds", "Glamour Kit"],
  },
  Elf: {
    weapon: ["Longbow", "Elven Sword", "Dagger of Twilight", "Whispering Staff"],
    secondaryweapon: ["Cloak of Elvenkind", "Short Sword", "Elven Shield", "Grappling Hook"],
    armour: ["Leather Armor", "Studded Armor", "Cloak of Leaves", "Forest Armor"],
    "tool&ammo": ["Herbalism Kit", "Potion of Clarity", "Elven Rations", "Tracking Tools"],
  },
  Fairy: {
    weapon: ["Pixie Wand", "Dewdrop Dagger", "Gossamer Bow", "Starlight Staff"],
    secondaryweapon: ["Sparkle Shield", "Potion Bottle", "Fairy Dust Pouch", "Glamour Cloak"],
    armour: ["Delicate Armor", "Flower Cloak", "Gossamer Robes", "Light Armor"],
    "tool&ammo": ["Potion of Flight", "Pixie Dust", "Miniature Harp", "Charm Bracelet"],
  },
  "Feral Tiefling": {
    weapon: ["Curved Dagger", "Hellfire Wand", "Spiked Club", "Bladed Whip"],
    secondaryweapon: ["Infernal Shield", "Demon Horn", "Bastard Sword", "Cursed Amulet"],
    armour: ["Studded Leather Armor", "Infernal Robes", "Light Armor", "Chain Mail"],
    "tool&ammo": ["Potion of Fire Resistance", "Infernal Tome", "Demonic Essence", "Charm of Shadows"],
  },
  Firbolg: {
    weapon: ["Greatclub", "Giant Bow", "Nature's Staff", "Stone Knife"],
    secondaryweapon: ["Animal Companion", "Wooden Shield", "Herbalism Kit", "Nature's Charm"],
    armour: ["Hide Armor", "Leaf Armor", "Robes of the Forest", "Cloak of Nature"],
    "tool&ammo": ["Potion of Growth", "Nature's Journal", "Woodland Rations", "Hiking Boots"],
  },
  "Fire Genasi": {
    weapon: ["Flame Blade", "Fire Whip", "Ignite Staff", "Lava Rock Hammer"],
    secondaryweapon: ["Ember Shield", "Fire Charm", "Volcanic Shield", "Fireball Orb"],
    armour: ["Flame Resistant Armor", "Leather Armor", "Robes of Embers", "Fire Cloak"],
    "tool&ammo": ["Potion of Fire", "Flame Stone", "Ignition Kit", "Heatwave Grenade"],
  },
  Giff: {
    weapon: ["Blunderbuss", "Heavy Pistol", "Warhammer", "Musket"],
    secondaryweapon: ["Shield of Bullets", "Grenade", "Smoke Bomb", "War Horn"],
    armour: ["Heavy Armor", "Cannon Armor", "Leather Armor", "Blast Shield"],
    "tool&ammo": ["Explosive Rounds", "Gunpowder Kit", "Tactical Map", "Alcohol Rations"],
  },
  Githyanki: {
    weapon: ["Silver Sword", "Psycho Blade", "Githyanki Spear", "Telekinetic Dagger"],
    secondaryweapon: ["Astral Shield", "Wand of Thought", "Mind Focus Amulet", "Teleportation Stone"],
    armour: ["Chain Mail", "Githyanki Robes", "Astral Armor", "Studded Leather"],
    "tool&ammo": ["Astral Components", "Potion of Mind Shielding", "Tome of Knowledge", "Battle Standard"],
  },
  Githzerai: {
    weapon: ["Mindblade", "Githzerai Staff", "Psychic Dagger", "Astral Bow"],
    secondaryweapon: ["Psionic Shield", "Grappling Hook", "Thought Amulet", "Tuning Fork"],
    armour: ["Robes of Serenity", "Mental Armor", "Light Armor", "Psychic Cloak"],
    "tool&ammo": ["Potion of Clarity", "Mind Meditation Stones", "Astral Focus", "Tome of Serenity"],
  },
  Gnome: {
    weapon: ["Gnome Handaxe", "Clockwork Crossbow", "Tinkerer's Blade", "Dart Thrower"],
    secondaryweapon: ["Shield of Gnomes", "Invention Tool", "Gnome's Magnifier", "Smoke Bomb"],
    armour: ["Leather Armor", "Gnomish Robes", "Light Armor", "Tinker's Vest"],
    "tool&ammo": ["Tinker's Kit", "Gnome Rations", "Potion of Invisibility", "Gnome Blueprint"],
  },
  Goblin: {
    weapon: ["Rusty Knife", "Club", "Slingshot", "Goblin Bow"],
    secondaryweapon: ["Shield of Scrap", "Smoke Bomb", "Goblin Crossbow", "Sickly Dagger"],
    armour: ["Leather Armor", "Tattered Clothes", "Scrap Armor", "Hide Armor"],
    "tool&ammo": ["Goblin Rations", "Potion of Sneak", "Tinkering Kit", "Grappling Hook"],
  },
  Goliath: {
    weapon: ["Great Axe", "Goliath Club", "Mountain Hammer", "Stone Spear"],
    secondaryweapon: ["Shield of Might", "Throwing Stones", "Goliath Lance", "Rugged Shield"],
    armour: ["Hide Armor", "Heavy Leather Armor", "Goliath Plate", "Stone Armor"],
    "tool&ammo": ["Potion of Strength", "Rations", "Climbing Gear", "Survival Tools"],
  },
  Grung: {
    weapon: ["Poisoned Blowdart", "Swamp Spear", "Frog Staff", "Cloak of Leaping"],
    secondaryweapon: ["Shield of Slime", "Sticky Hands", "Camouflage Cloak", "Treetop Bow"],
    armour: ["Natural Armor", "Tropical Hide Armor", "Light Armor", "Chameleon Cloak"],
    "tool&ammo": ["Potion of Leaping", "Swamp Rations", "Herbalism Kit", "Nature's Charm"],
  },
  Hadozee: {
    weapon: ["Monkey Paw Dagger", "Swinging Club", "Hadozee Sling", "Bamboo Spear"],
    secondaryweapon: ["Shield of Leaves", "Hadozee Net", "Tree Branch", "Grappling Hook"],
    armour: ["Hide Armor", "Monkey Armor", "Light Armor", "Bamboo Armor"],
    "tool&ammo": ["Potion of Agility", "Rations", "Climbing Gear", "Treetop Map"],
  },
  "Half-Elf": {
    weapon: ["Rapier", "Longbow", "Dagger", "Dual Shortswords"],
    secondaryweapon: ["Cloak of Charisma", "Elven Shield", "Diplomat's Tome", "Disguise Kit"],
    armour: ["Leather Armor", "Studded Armor", "Cloak of Shadows", "Mage Armor"],
    "tool&ammo": ["Potion of Persuasion", "Rations", "Herbalism Kit", "Magic Mirror"],
  },
  "Half-Orc": {
    weapon: ["Greataxe", "Orcish Warhammer", "Longsword", "Heavy Mace"],
    secondaryweapon: ["Shield of Fury", "Brutal Dagger", "Orcish Greatclub", "War Horn"],
    armour: ["Hide Armor", "Chain Mail", "Leather Armor", "Orcish Plate"],
    "tool&ammo": ["Potion of Might", "Battle Standard", "Orcish Rations", "Warpaint Kit"],
  },
  Halfling: {
    weapon: ["Shortbow", "Halfling Sling", "Dagger", "Staff"],
    secondaryweapon: ["Cloak of Quickness", "Halfling Shield", "Throwing Stones", "Pouch of Tricks"],
    armour: ["Leather Armor", "Light Armor", "Cloak of Hiding", "Halfling Armor"],
    "tool&ammo": ["Potion of Luck", "Rations", "Herbalism Kit", "Magic Bean"],
  },
  Harengon: {
    weapon: ["Carrot Dagger", "Bunny Bow", "Hare's Paw Staff", "Spring-loaded Sling"],
    secondaryweapon: ["Shield of Hops", "Fluffy Cloak", "Jumping Boots", "Burrow Tool"],
    armour: ["Leather Armor", "Bunny Armor", "Springy Robes", "Hide Armor"],
    "tool&ammo": ["Potion of Speed", "Rations", "Hopping Kit", "Bunny Ears"],
  },
  Hobgoblin: {
    weapon: ["Longsword", "Warhammer", "Hobgoblin Spear", "Crossbow"],
    secondaryweapon: ["Shield of Command", "War Drum", "Tactical Map", "Hobgoblin Banner"],
    armour: ["Chain Mail", "Hide Armor", "Studded Leather", "Tactical Armor"],
    "tool&ammo": ["Potion of Leadership", "Rations", "Hobgoblin Traps", "Tactics Tome"],
  },
  Human: {
    weapon: ["Sword", "Short Bow", "Dagger", "Battle Axe"],
    secondaryweapon: ["Shield", "Flail", "Javelin", "War Horn"],
    armour: ["Leather Armor", "Chain Mail", "Plate Armor", "Padded Armor"],
    "tool&ammo": ["Rations", "Herbalism Kit", "Potion of Resilience", "Map of the Kingdom"],
  },
  Kalashtar: {
    weapon: ["Mindblade", "Wand of Dreams", "Kalashtar Staff", "Telepathic Dagger"],
    secondaryweapon: ["Psionic Shield", "Dreamcatcher", "Kalashtar Charm", "Focus Crystal"],
    armour: ["Light Robes", "Psionic Armor", "Leather Armor", "Mind Shield"],
    "tool&ammo": ["Potion of Dreaming", "Tome of Insight", "Meditation Stones", "Psychic Focus"],
  },
  Kender: {
    weapon: ["Slingshot", "Dagger of Mischief", "Kender Bow", "Thieving Blade"],
    secondaryweapon: ["Trickster's Shield", "Belt of Many Pockets", "Fool's Cloak", "Lockpick Set"],
    armour: ["Leather Armor", "Light Armor", "Kender Cloak", "Hide Armor"],
    "tool&ammo": ["Potion of Luck", "Juggling Balls", "Kender Rations", "Curiosity Box"],
  },
  Kenku: {
    weapon: ["Shortbow", "Dagger", "Kenku Staff", "Razor Feather"],
    secondaryweapon: ["Feather Shield", "Disguise Mask", "Echoing Horn", "Smoke Bomb"],
    armour: ["Leather Armor", "Light Armor", "Feathered Cloak", "Cloak of Whispers"],
    "tool&ammo": ["Potion of Mimicry", "Herbalism Kit", "Climbing Gear", "Kenku Call"],
  },
  Kobold: {
    weapon: ["Spear", "Small Crossbow", "Club", "Kobold Dagger"],
    secondaryweapon: ["Shield of Scales", "Net Trap", "Kobold Sling", "Flame Lantern"],
    armour: ["Hide Armor", "Leather Armor", "Tattered Clothes", "Light Armor"],
    "tool&ammo": ["Kobold Rations", "Potion of Stealth", "Trap Kit", "Smuggler's Tools"],
  },
  Leonin: {
    weapon: ["Claw Staff", "Greatsword", "Lion's Tooth Spear", "Fangs of Fury"],
    secondaryweapon: ["Shield of Pride", "Roaring Horn", "Tactical Sword", "Fur Cloak"],
    armour: ["Hide Armor", "Leather Armor", "Lion's Mane Armor", "Plate Armor"],
    "tool&ammo": ["Potion of Courage", "Rations", "Hunter's Tools", "Battle Standard"],
  },
  Lizardfolk: {
    weapon: ["Javelin", "Lizard's Bite Club", "Trident", "Bladed Spear"],
    secondaryweapon: ["Shield of Scales", "Crocodile Tail", "Wyrm Hook", "Water Stone"],
    armour: ["Hide Armor", "Light Armor", "Scaled Armor", "Natural Armor"],
    "tool&ammo": ["Potion of Healing", "Swamp Rations", "Fishing Gear", "Crocodile Trap"],
  },
  Loxodon: {
    weapon: ["Warhammer", "Trunk Staff", "Loxodon Spear", "Great Club"],
    secondaryweapon: ["Shield of Strength", "Loxodon Horn", "Large Shield", "Battle Standard"],
    armour: ["Plate Armor", "Heavy Armor", "Hide Armor", "Loxodon Mail"],
    "tool&ammo": ["Potion of Resilience", "Rations", "Meditation Stones", "Herbalism Kit"],
  },
  Minotaur: {
    weapon: ["Great Axe", "Horned Club", "Minotaur Sword", "Heavy Trident"],
    secondaryweapon: ["Shield of the Labyrinth", "War Horn", "Climbing Gear", "Mighty Club"],
    armour: ["Hide Armor", "Leather Armor", "Heavy Armor", "Minotaur Plate"],
    "tool&ammo": ["Potion of Strength", "Rations", "Labyrinth Map", "Herbalism Kit"],
  },
  Orc: {
    weapon: ["Greataxe", "Orcish Sword", "Warhammer", "Spiked Club"],
    secondaryweapon: ["Shield of Might", "Battle Horn", "Throwing Spear", "Orcish Dagger"],
    armour: ["Hide Armor", "Leather Armor", "Heavy Armor", "Orcish Plate"],
    "tool&ammo": ["Potion of Fury", "Rations", "Tactical Map", "Warpaint Kit"],
  },
  Plasmoid: {
    weapon: ["Blob Shield", "Slime Dagger", "Malleable Whip", "Puddle Staff"],
    secondaryweapon: ["Absorb Shield", "Molded Shield", "Gelatinous Orb", "Amorphous Blade"],
    armour: ["Gelatinous Armor", "Soft Armor", "Elastic Shield", "Fluid Cloak"],
    "tool&ammo": ["Potion of Transformation", "Rations", "Slime Sample", "Form Change Kit"],
  },
  Satyr: {
    weapon: ["Pan Flute Dagger", "Staff of Revelry", "Grove Bow", "Wine Bottle Club"],
    secondaryweapon: ["Dancing Shield", "Harp of Charm", "Satyr's Horn", "Cloak of Fae"],
    armour: ["Hide Armor", "Leather Armor", "Floral Armor", "Cloak of Revels"],
    "tool&ammo": ["Potion of Joy", "Rations", "Magical Wine", "Festival Gear"],
  },
  "Sea Elf": {
    weapon: ["Trident", "Coral Bow", "Harpoon", "Spear of the Depths"],
    secondaryweapon: ["Shell Shield", "Aquatic Dagger", "Wavebreaker Shield", "Coral Net"],
    armour: ["Sea Leather Armor", "Coral Armor", "Light Armor", "Abyssal Robes"],
    "tool&ammo": ["Potion of Water Breathing", "Aquatic Rations", "Pearl Necklace", "Seafarer's Map"],
  },
  "Shadar-Kai": {
    weapon: ["Shadow Blade", "Wraith Bow", "Silent Dagger", "Phantom Staff"],
    secondaryweapon: ["Cloak of Shadows", "Night Shield", "Veil of Dreams", "Shadow Dagger"],
    armour: ["Dark Leather Armor", "Ghostly Robes", "Ethereal Armor", "Shroud of Shadows"],
    "tool&ammo": ["Potion of Night Vision", "Map of the Shadowfell", "Dreamcatcher", "Wraith Essence"],
  },
  Shifter: {
    weapon: ["Claw Blade", "Hybrid Staff", "Wild Shape Dagger", "Totemic Axe"],
    secondaryweapon: ["Shifter Shield", "Cloak of Transformation", "Wildfire Horn", "Tribal Spear"],
    armour: ["Leather Armor", "Natural Armor", "Shifting Cloak", "Hide Armor"],
    "tool&ammo": ["Potion of Shifting", "Animal Companion Gear", "Rations", "Wild Shape Kit"],
  },
  "Simic Hybrid": {
    weapon: ["Bio-Staff", "Aquatic Crossbow", "Tentacle Whip", "Nature's Blade"],
    secondaryweapon: ["Adaptive Shield", "Grappling Tentacle", "Aquatic Dagger", "Genome Amulet"],
    armour: ["Organic Armor", "Light Armor", "Natural Plates", "Hydro Robes"],
    "tool&ammo": ["Potion of Adaptation", "Simic Rations", "Research Journal", "Hybrid Essence"],
  },
  Tabaxi: {
    weapon: ["Claw Dagger", "Whisker Bow", "Staff of Prowess", "Feline Slingshot"],
    secondaryweapon: ["Tail Shield", "Charming Locket", "Tabaxi Grappling Hook", "Bouncing Ball"],
    armour: ["Leather Armor", "Light Armor", "Padded Armor", "Cloak of Stealth"],
    "tool&ammo": ["Potion of Agility", "Rations", "Tabaxi Map", "Nimble Kit"],
  },
  "Thri-kreen": {
    weapon: ["Chitinous Dagger", "Stingray Spear", "Thri-kreen Staff", "Kreen Sickle"],
    secondaryweapon: ["Shield of Chitin", "Cloak of Camouflage", "War Horn", "Throwing Stinger"],
    armour: ["Chitin Armor", "Light Armor", "Natural Armor", "Wilderness Robes"],
    "tool&ammo": ["Potion of Speed", "Thri-kreen Rations", "Scent Mask", "Camouflage Kit"],
  },
  Tiefling: {
    weapon: ["Infernal Blade", "Hellfire Staff", "Curved Dagger", "Demonic Crossbow"],
    secondaryweapon: ["Fiendish Shield", "Charm of the Inferno", "Horned Helmet", "Burning Shield"],
    armour: ["Dark Leather Armor", "Hellish Robes", "Stitched Hide Armor", "Infernal Armor"],
    "tool&ammo": ["Potion of Fire Resistance", "Infernal Rations", "Charred Tome", "Demon's Essence"],
  },
  Tortle: {
    weapon: ["Shell Shield", "Turtle Club", "Trident", "Nature's Spear"],
    secondaryweapon: ["Wooden Shield", "Turtle Dagger", "Herbalism Kit", "Tortle Staff"],
    armour: ["Turtle Shell Armor", "Hide Armor", "Natural Armor", "Robes of the Depths"],
    "tool&ammo": ["Potion of Resilience", "Tortle Rations", "Herbalism Kit", "Climbing Gear"],
  },
  Triton: {
    weapon: ["Trident", "Spear of Tides", "Harpoon", "Coral Staff"],
    secondaryweapon: ["Shield of Waves", "Sea Dagger", "Aquatic Crossbow", "Triton's Horn"],
    armour: ["Light Armor", "Coral Armor", "Wavebreaker Armor", "Sea Leather Armor"],
    "tool&ammo": ["Potion of Water Breathing", "Aquatic Rations", "Triton Shell", "Map of the Seas"],
  },
  Vedalken: {
    weapon: ["Longsword", "Vedalken Staff", "Precision Crossbow", "Arcane Dagger"],
    secondaryweapon: ["Shield of Knowledge", "Scroll of Insight", "Magic Wand", "Thoughtstone"],
    armour: ["Robes of Thought", "Light Armor", "Vedalken Armor", "Magic Cloak"],
    "tool&ammo": ["Potion of Wisdom", "Arcane Components", "Research Journal", "Tome of Knowledge"],
  },
  Verdan: {
    weapon: ["Verdan Club", "Twig Dagger", "Twig Staff", "Slingshot"],
    secondaryweapon: ["Shield of Growth", "Nature's Charm", "Wooden Shield", "Gnarled Staff"],
    armour: ["Light Armor", "Natural Armor", "Leaf Armor", "Cloak of Growth"],
    "tool&ammo": ["Potion of Growth", "Verdan Rations", "Herbalism Kit", "Nature's Seeds"],
  },
  Warforged: {
    weapon: ["Heavy Sword", "Warhammer", "Golem Fist", "Armored Crossbow"],
    secondaryweapon: ["Shield of Durability", "Integrated Shield", "Energy Blade", "Battle Standard"],
    armour: ["Plate Armor", "Warforged Armor", "Heavy Armor", "Mechanical Armor"],
    "tool&ammo": ["Potion of Durability", "Rations", "Repair Kit", "Tactical Map"],
  },
  "Yuan-ti": {
    weapon: ["Serpent's Fang", "Yuan-ti Staff", "Cursed Dagger", "Viper Bow"],
    secondaryweapon: ["Shield of Scales", "Cloak of Serpents", "Poisonous Dagger", "Yuan-ti Charm"],
    armour: ["Leather Armor", "Scaled Armor", "Yuan-ti Robes", "Hide Armor"],
    "tool&ammo": ["Potion of Poison Resistance", "Yuan-ti Rations", "Herbalism Kit", "Charm of the Serpent"],
  },
};


export const INITIAL_CHARACTER = {
  race: {
    name: RACE[0].name,
    description: RACE[0].description,
    gender: RACE_GENDER[0],
  },
  class: {
    name: CLASSES[0].name,
    description: CLASSES[0].description,
  },
  abilities: {
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8,
  },
  background: {
    name: BACKGROUND[0].name,
    description: BACKGROUND[0].description,
  },
  personality: {
    ideal: selectRandom(PERSONALITIES.ideal),
    bond: selectRandom(PERSONALITIES.bond),
    personality: selectRandom(PERSONALITIES.personality),
    flaw: selectRandom(PERSONALITIES.flaw),
  },
  alignment: {
    name: ALIGNMENT[0].name,
    description: ALIGNMENT[0].description,
  },
  equipment: {
    weapon: selectRandom(EQUIPMENTS.weapon),
    secondary: selectRandom(EQUIPMENTS.secondaryweapon),
    armor: selectRandom(EQUIPMENTS.armour),
    "tool&ammo": selectRandom(EQUIPMENTS["tool&ammo"]),
  },
  gold: null,
  name: "",
  pointsToSpend: 27,
};
export const dummy = {
  race: {
    name: "Arakocra",
    gender: "female",
  },
  class: "Barbarian",
  abilities: {
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8,
  },
  background: "Dungeon Delver",
  personality: {
    ideal: "freedom",
    bond: "family",
    personality: "Adventurous",
    flaw: "addiction",
  },
  alignment: "true good",
  equipment: {
    weapon: "Battered Dagger",
    secondary: "shield",
    armor: "cloth armor",
    "tool&ammo": "wooden arrows",
  },
  gold: 50,
  name: "Character",
};
