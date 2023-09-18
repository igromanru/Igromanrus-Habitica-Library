/*const HABITICA_QUESTS_CONTENT_PROPERTY = "HABITICA_QUESTS_CONTENT";

function getHabiticaQuestsContent() {
  const content = ScriptProperties.getProperty(HABITICA_QUESTS_CONTENT_PROPERTY);
  if (content && typeof content === "string") {
    return JSON.parse(content);
  }
  return undefined;
}

function setHabiticaQuestsContent(content) {
  if (content) {
    if (typeof content === "string") {
      ScriptProperties.setProperty(HABITICA_QUESTS_CONTENT_PROPERTY, content);
    } else if (typeof content === "object") {
      ScriptProperties.setProperty(HABITICA_QUESTS_CONTENT_PROPERTY, JSON.stringify(content));
    }
  }
}*/

function getQuestContentByKey(questKey) {
  if (typeof questKey === "string" && questKey) {
    return HabiticaQuestsContent[questKey];
  } else {
    console.error(`getQuestContentByKey error: Invalid parameter questKey: "${questKey}"`);
  }
  return undefined;
}

/**
 * 
 * Habitica Content: https://habitica.com/apidoc/#api-Content-ContentGet
 * From: 12.09.2023
 */
// The "quests" part of the habitica content
const HabiticaQuestsContent = {
  "basilist": {
	"text": "The Basi-List",
	"notes": "There's a commotion in the marketplace--the kind that should make you run away. Being a courageous adventurer, you run towards it instead, and discover a Basi-list, coalescing from a clump of incomplete To Do's! Nearby Habiticans are paralyzed with fear at the length of the Basi-list, unable to start working. From somewhere in the vicinity, you hear @Arcosine shout: \"Quick! Complete your To Do's and Dailies to defang the monster, before someone gets a paper cut!\" Strike fast, adventurer, and check something off - but beware! If you leave any Dailies undone, the Basi-list will attack you and your party!",
	"group": "questGroupEarnable",
	"completion": "The Basi-list has scattered into paper scraps, which shimmer gently in rainbow colors. \"Whew!\" says @Arcosine. \"Good thing you guys were here!\" Feeling more experienced than before, you gather up some fallen gold from among the papers.",
	"goldValue": 100,
	"category": "unlockable",
	"unlockCondition": {
	  "condition": "party invite",
	  "text": "Invite Friends"
	},
	"boss": {
	  "name": "The Basi-List",
	  "hp": 100,
	  "str": 0.5,
	  "def": 1
	},
	"drop": {
	  "gp": 8,
	  "exp": 42
	},
	"key": "basilist"
  },
  "dustbunnies": {
	"text": "The Feral Dust Bunnies",
	"notes": "It's been a while since you've done any dusting in here, but you're not too worried—a little dust never hurt anyone, right? It's not until you stick your hand into one of the dustiest corners and feel something bite that you remember @InspectorCaracal's warning: leaving harmless dust sit too long causes it to turn into vicious dust bunnies! You'd better defeat them before they cover all of Habitica in fine particles of dirt!",
	"group": "questGroupEarnable",
	"completion": "The dust bunnies vanish into a puff of... well, dust. As it clears, you look around. You'd forgotten how nice this place looks when it's clean. You spy a small pile of gold where the dust used to be. Huh, you'd been wondering where that was!",
	"value": 1,
	"category": "unlockable",
	"boss": {
	  "name": "Feral Dust Bunnies",
	  "hp": 100,
	  "str": 0.5,
	  "def": 1
	},
	"drop": {
	  "gp": 8,
	  "exp": 42
	},
	"key": "dustbunnies"
  },
  "dilatoryDistress1": {
	"text": "Dilatory Distress, Part 1: Message in a Bottle",
	"notes": "A message in a bottle arrived from the newly rebuilt city of Dilatory! It reads: \"Dear Habiticans, we need your help once again. Our princess has disappeared and the city is under siege by some unknown watery demons! The mantis shrimps are holding the attackers at bay. Please aid us!\" To make the long journey to the sunken city, one must be able to breathe water. Fortunately, the alchemists @Benga and @hazel can make it all possible! You only have to find the proper ingredients.",
	"group": "questGroupDilatoryDistress",
	"completion": "You don the finned armor and swim to Dilatory as quickly as you can. The merfolk and their mantis shrimp allies have managed to keep the monsters outside the city for the moment, but they are losing. No sooner are you within the castle walls than the horrifying siege descends!",
	"value": 4,
	"goldValue": 200,
	"category": "gold",
	"collect": {
	  "fireCoral": {
		"text": "Fire Coral",
		"count": 20
	  },
	  "blueFins": {
		"text": "Blue Fins",
		"count": 20
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "gear",
		  "key": "armor_special_finnedOceanicArmor",
		  "text": "Finned Oceanic Armor (Armor)"
		}
	  ],
	  "gp": 0,
	  "exp": 75
	},
	"key": "dilatoryDistress1"
  },
  "dilatoryDistress2": {
	"text": "Dilatory Distress, Part 2: Creatures of the Crevasse",
	"notes": "The siege can be seen from miles away: thousands of disembodied skulls rushing through a portal in the crevasse walls and making their way towards Dilatory.<br><br>When you meet King Manta in his war room, his eyes seem sunken, and his face is worried. \"My daughter Adva disappeared into the Dark Crevasse just before this siege began. Please find her and bring her back home safely! I will lend you my Fire Coral Circlet to aid you. If you succeed, it is yours.\"",
	"group": "questGroupDilatoryDistress",
	"completion": "You vanquish the nightmarish horde of skulls, but you feel no closer to finding Adva. You speak to @Kiwibot, the royal tracker, to see if she has any ideas. \"The mantis shrimps that defend the city must have seen Adva escape,\" @Kiwibot says. \"Try following them into the Dark Crevasse.\"",
	"previous": "dilatoryDistress1",
	"prereqQuests": [
	  "dilatoryDistress1"
	],
	"value": 4,
	"goldValue": 300,
	"category": "gold",
	"boss": {
	  "name": "Water Skull Swarm",
	  "hp": 500,
	  "rage": {
		"title": "Swarm Respawn",
		"description": "Swarm Respawn: This bar fills when you don't complete your Dailies. When it is full, the Water Skull Swarm will heal 30% of its remaining health!",
		"value": 50,
		"healing": 0.3,
		"effect": "`Water Skull Swarm uses SWARM RESPAWN!`\n\nEmboldened by their victories, more skulls pour forth from the crevasse, bolstering the swarm!"
	  },
	  "str": 1,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "Skeleton",
		  "text": "Skeleton Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "CottonCandyBlue",
		  "text": "Cotton Candy Blue Hatching Potion"
		},
		{
		  "type": "gear",
		  "key": "head_special_fireCoralCirclet",
		  "text": "Fire Coral Circlet (Headgear)"
		}
	  ],
	  "gp": 0,
	  "exp": 500
	},
	"key": "dilatoryDistress2"
  },
  "dilatoryDistress3": {
	"text": "Dilatory Distress, Part 3: Not a Mere Maid",
	"notes": "You follow the mantis shrimps deep into the Crevasse, and discover an underwater fortress. Princess Adva, escorted by more watery skulls, awaits you inside the main hall. \"My father has sent you, has he not? Tell him I refuse to return. I am content to stay here and practice my sorcery. Leave now, or you shall feel the wrath of the ocean's new queen!\" Adva seems very adamant, but as she speaks you notice a strange, ruby pendant on her neck glowing ominously... Perhaps her delusions would cease should you break it?",
	"group": "questGroupDilatoryDistress",
	"completion": "Finally, you manage to pull the bewitched pendant from Adva's neck and throw it away. Adva clutches her head. \"Where am I? What happened here?\" After hearing your story, she frowns. \"This necklace was given to me by a strange ambassador - a lady called 'Tzina'. I don't remember anything after that!\"<br><br>Back at Dilatory, Manta is overjoyed by your success. \"Allow me to reward you with this trident and shield! I ordered them from @aiseant and @starsystemic as a gift for Adva, but... I'd rather not put weapons in her hands any time soon.\"",
	"previous": "dilatoryDistress2",
	"prereqQuests": [
	  "dilatoryDistress1",
	  "dilatoryDistress2"
	],
	"value": 4,
	"goldValue": 400,
	"category": "gold",
	"boss": {
	  "name": "Adva, the Usurping Mermaid",
	  "hp": 1000,
	  "str": 2,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "food",
		  "key": "Fish",
		  "text": "Fish (Food)"
		},
		{
		  "type": "food",
		  "key": "Fish",
		  "text": "Fish (Food)"
		},
		{
		  "type": "food",
		  "key": "Fish",
		  "text": "Fish (Food)"
		},
		{
		  "type": "gear",
		  "key": "weapon_special_tridentOfCrashingTides",
		  "text": "Trident of Crashing Tides (Weapon)"
		},
		{
		  "type": "gear",
		  "key": "shield_special_moonpearlShield",
		  "text": "Moonpearl Shield (Off-Hand Item)"
		}
	  ],
	  "gp": 0,
	  "exp": 650
	},
	"key": "dilatoryDistress3"
  },
  "mayhemMistiflying1": {
	"text": "Mayhem in Mistiflying, Part 1: In Which Mistiflying Experiences a Dreadful Bother",
	"notes": "Although local soothsayers predicted pleasant weather, the afternoon is extremely breezy, so you gratefully follow your friend @Kiwibot into their house to escape the blustery day.<br><br>Neither of you expects to find the April Fool lounging at the kitchen table.<br><br>“Oh, hello,” he says. “Fancy seeing you here. Please, let me offer you some of this delicious tea.”<br><br>“That’s…” @Kiwibot begins. “That’s MY—“<br><br>“Yes, yes, of course,” says the April Fool, helping himself to some cookies. “Just thought I’d pop indoors and get a nice reprieve from all the tornado-summoning skulls.” He takes a casual sip from his teacup. “Incidentally, the city of Mistiflying is under attack.”<br><br>Horrified, you and your friends race to the Stables and saddle your fastest winged mounts. As you soar towards the floating city, you see that a swarm of chattering, flying skulls are laying siege to the city… and several turn their attentions towards you!",
	"group": "questGroupMayhemMistiflying",
	"completion": "The final skull drops from the sky, a shimmering set of rainbow robes clasped in its jaws, but the steady wind has not slackened. Something else is at play here. And where is that slacking April Fool? You pick up the robes, then swoop into the city.",
	"value": 4,
	"goldValue": 200,
	"category": "gold",
	"boss": {
	  "name": "Air Skull Swarm",
	  "hp": 500,
	  "rage": {
		"title": "Swarm Respawn",
		"description": "Swarm Respawn: This bar fills when you don't complete your Dailies. When it is full, the Air Skull Swarm will heal 30% of its remaining health!",
		"value": 50,
		"healing": 0.3,
		"effect": "`Air Skull Swarm uses SWARM RESPAWN!`\n\nEmboldened by their victories, more skulls come whirling out of the clouds!"
	  },
	  "str": 1,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "Skeleton",
		  "text": "Skeleton Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "White",
		  "text": "White Hatching Potion"
		},
		{
		  "type": "gear",
		  "key": "armor_special_roguishRainbowMessengerRobes",
		  "text": "Roguish Rainbow Messenger Robes (Armor)"
		}
	  ],
	  "gp": 0,
	  "exp": 500
	},
	"key": "mayhemMistiflying1"
  },
  "mayhemMistiflying2": {
	"text": "Mayhem in Mistiflying, Part 2: In Which the Wind Worsens",
	"notes": "Mistiflying dips and rocks as the magical bees keeping it afloat are buffeted by the gale. After a desperate search for the April Fool, you find him inside a cottage, blithely playing cards with an angry, trussed-up skull.<br><br>@Katy133 raises their voice over the whistling wind. “What’s causing this? We defeated the skulls, but it’s getting worse!”<br><br>“That is a pickle,” the April Fool agrees. “Please be a dear and don’t mention it to Lady Glaciate. She’s always threatening to call off our courtship on the grounds that I am ‘catastrophically irresponsible,’ and I fear that she might misread this situation.” He shuffles the deck. “Perhaps you might follow the Mistiflies? They’re immaterial, so the wind can’t blow them away, and they tend to swarm around threats.” He nods out the window, where several of the city’s patron creatures are fluttering towards the east. “Now let me concentrate — my opponent has quite the poker face.”",
	"group": "questGroupMayhemMistiflying",
	"completion": "You follow the Mistiflies to the site of a tornado, too stormy for you to enter.<br><br>“This should help,” says a voice directly in your ear, and you nearly fall off of your mount. The April Fool is somehow sitting directly behind you in the saddle. “I hear these messenger hoods emit an aura that guards against inclement weather — very useful to avoid losing missives as you fly around. Perhaps give it a try?”",
	"previous": "mayhemMistiflying1",
	"prereqQuests": [
	  "mayhemMistiflying1"
	],
	"value": 4,
	"goldValue": 300,
	"category": "gold",
	"collect": {
	  "mistifly1": {
		"text": "Red Mistiflies",
		"count": 25
	  },
	  "mistifly2": {
		"text": "Blue Mistiflies",
		"count": 15
	  },
	  "mistifly3": {
		"text": "Green Mistiflies",
		"count": 10
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "gear",
		  "key": "head_special_roguishRainbowMessengerHood",
		  "text": "Roguish Rainbow Messenger Hood (Headgear)"
		}
	  ],
	  "gp": 0,
	  "exp": 75
	},
	"key": "mayhemMistiflying2"
  },
  "mayhemMistiflying3": {
	"text": "Mayhem in Mistiflying, Part 3: In Which a Mailman is Extremely Rude",
	"notes": "The Mistiflies are whirling so thickly through the tornado that it’s hard to see. Squinting, you spot a many-winged silhouette floating at the center of the tremendous storm.<br><br>“Oh, dear,” the April Fool sighs, nearly drowned out by the howl of the weather. “Looks like Winny went and got himself possessed. Very relatable problem, that. Could happen to anybody.”<br><br>“The Wind-Worker!” @Beffymaroo hollers at you. “He’s Mistiflying’s most talented messenger-mage, since he’s so skilled with weather magic. Normally he’s a very polite mailman!”<br><br>As if to counteract this statement, the Wind-Worker lets out a scream of fury, and even with your magic robes, the storm nearly rips you from your mount.<br><br>“That gaudy mask is new,” the April Fool remarks. “Perhaps you should relieve him of it?”<br><br>It’s a good idea… but the enraged mage isn’t going to give it up without a fight.",
	"group": "questGroupMayhemMistiflying",
	"completion": "Just as you think you can’t withstand the wind any longer, you manage to snatch the mask from the Wind-Worker’s face. Instantly, the tornado is sucked away, leaving only balmy breezes and sunshine. The Wind-Worker looks around in bemusement. “Where did she go?”<br><br>“Who?” your friend @khdarkwolf asks.<br><br>“That sweet woman who offered to deliver a package for me. Tzina.” As he takes in the wind-swept city below him, his expression darkens. “Then again, maybe she wasn’t so sweet…”<br><br>The April Fool pats him on the back, then hands you two shimmering envelopes. “Here. Why don’t you let this distressed fellow rest, and take charge of the mail for a bit? I hear the magic in those envelopes will make them worth your while.”",
	"previous": "mayhemMistiflying2",
	"prereqQuests": [
	  "mayhemMistiflying1",
	  "mayhemMistiflying2"
	],
	"value": 4,
	"goldValue": 400,
	"category": "gold",
	"boss": {
	  "name": "The Wind-Worker",
	  "hp": 1000,
	  "str": 2,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "food",
		  "key": "CottonCandyPink",
		  "text": "Pink Cotton Candy (Food)"
		},
		{
		  "type": "food",
		  "key": "CottonCandyPink",
		  "text": "Pink Cotton Candy (Food)"
		},
		{
		  "type": "food",
		  "key": "CottonCandyPink",
		  "text": "Pink Cotton Candy (Food)"
		},
		{
		  "type": "gear",
		  "key": "weapon_special_roguishRainbowMessage",
		  "text": "Roguish Rainbow Message (Main-Hand Item)"
		},
		{
		  "type": "gear",
		  "key": "shield_special_roguishRainbowMessage",
		  "text": "Roguish Rainbow Message (Off-Hand Item)"
		}
	  ],
	  "gp": 0,
	  "exp": 650
	},
	"key": "mayhemMistiflying3"
  },
  "stoikalmCalamity1": {
	"text": "Stoïkalm Calamity, Part 1: Earthen Enemies",
	"notes": "A terse missive arrives from @Kiwibot, and the frost-crusted scroll chills your heart as well as your fingertips. \"Visiting Stoïkalm Steppes -- monsters bursting from earth -- send help!\" You gather your party and ride north, but as soon as you venture down from the mountains, the snow beneath your feet explodes and gruesomely grinning skulls surround you!<br><br>Suddenly, a spear sails past, burying itself in a skull that was burrowing through the snow in an attempt to catch you unawares. A tall woman in finely-crafted armor gallops into the fray on the back of a mastodon, her long braid swinging as she yanks the spear unceremoniously from the crushed beast. It's time to fight off these foes with the help of Lady Glaciate, the leader of the Mammoth Riders!",
	"group": "questGroupStoikalmCalamity",
	"completion": "As you deliver a final blow to the skulls, they dissipate in a puff of magic. \"The dratted swarm may be gone,\" Lady Glaciate says, \"but we have bigger problems. Follow me.\" She tosses you a cloak to protect you from the chill air, and you ride off after her.",
	"value": 4,
	"goldValue": 200,
	"category": "gold",
	"boss": {
	  "name": "Earth Skull Swarm",
	  "hp": 500,
	  "rage": {
		"title": "Swarm Respawn",
		"description": "Swarm Respawn: This bar fills when you don't complete your Dailies. When it is full, the Earth Skull Swarm will heal 30% of its remaining health!",
		"value": 50,
		"healing": 0.3,
		"effect": "`Earth Skull Swarm uses SWARM RESPAWN!`\n\nMore skulls break free from the ground, their teeth chattering in the cold!"
	  },
	  "str": 1,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "Skeleton",
		  "text": "Skeleton Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Desert",
		  "text": "Desert Hatching Potion"
		},
		{
		  "type": "gear",
		  "key": "armor_special_mammothRiderArmor",
		  "text": "Mammoth Rider Armor"
		}
	  ],
	  "gp": 0,
	  "exp": 500
	},
	"key": "stoikalmCalamity1"
  },
  "stoikalmCalamity2": {
	"text": "Stoïkalm Calamity, Part 2: Seek the Icicle Caverns",
	"notes": "The stately hall of the Mammoth Riders is an austere masterpiece of architecture, but it is also entirely empty. There's no furniture, the weapons are missing, and even the columns were picked clean of their inlays.<br><br>\"Those skulls scoured the place,\" Lady Glaciate says, and there is a blizzard brewing in her tone. \"Humiliating. Not a soul is to mention this to the April Fool, or I will never hear the end of it.\"<br><br>\"How mysterious!\" says @Beffymaroo. \"But where did they--\"<br><br>\"The icicle drake caverns.\" Lady Glaciate gestures at shining coins spilled in the snow outside. \"Sloppy.\"<br><br>\"But aren't icicle drakes honorable creatures with their own treasure hoards?\" @Beffymaroo asks. \"Why would they possibly--\"<br><br>\"Mind control,\" says Lady Glaciate, utterly unfazed. \"Or something equally melodramatic and inconvenient.\" She begins to stride from the hall. \"Why are you just standing there?\"<br><br>Quickly, go follow the trail of Icicle Coins!",
	"group": "questGroupStoikalmCalamity",
	"completion": "The Icicle Coins lead you straight to the buried entrance of a cleverly hidden cavern. Though the weather outside is calm and lovely, with the sunlight sparkling across the expanse of snow, there is a howling within like a fierce winter wind. Lady Glaciate grimaces and hands you a Mammoth Rider helm. \"Wear this,\" she says. \"You'll need it.\"",
	"previous": "stoikalmCalamity1",
	"prereqQuests": [
	  "stoikalmCalamity1"
	],
	"value": 4,
	"goldValue": 300,
	"category": "gold",
	"collect": {
	  "icicleCoin": {
		"text": "Icicle Coins",
		"count": 40
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "gear",
		  "key": "head_special_mammothRiderHelm",
		  "text": "Mammoth Rider Helm (Headgear)"
		}
	  ],
	  "gp": 0,
	  "exp": 75
	},
	"key": "stoikalmCalamity2"
  },
  "stoikalmCalamity3": {
	"text": "Stoïkalm Calamity, Part 3: Icicle Drake Quake",
	"notes": "The twining tunnels of the icicle drake caverns shimmer with frost... and with untold riches. You gape, but Lady Glaciate strides past without a glance. \"Excessively flashy,\" she says. \"Obtained admirably, though, from respectable mercenary work and prudent banking investments. Look further.\" Squinting, you spot a towering pile of stolen items hidden in the shadows.<br><br>A sibilant voice hisses as you approach. \"My delicious hoard! You shall not steal it back from me!\" A sinuous body slides from the heap: the Icicle Drake Queen herself! You have just enough time to note the strange bracelets glittering on her wrists and the wildness glinting in her eyes before she lets out a howl that shakes the earth around you.",
	"group": "questGroupStoikalmCalamity",
	"completion": "You subdue the Icicle Drake Queen, giving Lady Glaciate time to shatter the glowing bracelets. The Queen stiffens in apparent mortification, then quickly covers it with a haughty pose. \"Feel free to remove these extraneous items,\" she says. \"I'm afraid they simply don't fit our decor.\"<br><br>\"Also, you stole them,\" @Beffymaroo says. \"By summoning monsters from the earth.\"<br><br>The Icicle Drake Queen looks miffed. \"Take it up with that wretched bracelet saleswoman,\" she says. \"It's Tzina you want. I was essentially unaffiliated.\"<br><br>Lady Glaciate claps you on the arm. \"You did well today,\" she says, handing you a spear and a horn from the pile. \"Be proud.\"",
	"previous": "stoikalmCalamity2",
	"prereqQuests": [
	  "stoikalmCalamity1",
	  "stoikalmCalamity2"
	],
	"value": 4,
	"goldValue": 400,
	"category": "gold",
	"boss": {
	  "name": "Icicle Drake Queen",
	  "hp": 1000,
	  "str": 2,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "food",
		  "key": "CottonCandyBlue",
		  "text": "Blue Cotton Candy (Food)"
		},
		{
		  "type": "food",
		  "key": "CottonCandyBlue",
		  "text": "Blue Cotton Candy (Food)"
		},
		{
		  "type": "food",
		  "key": "CottonCandyBlue",
		  "text": "Blue Cotton Candy (Food)"
		},
		{
		  "type": "gear",
		  "key": "weapon_special_mammothRiderSpear",
		  "text": "Mammoth Rider Spear (Weapon)"
		},
		{
		  "type": "gear",
		  "key": "shield_special_mammothRiderHorn",
		  "text": "Mammoth Rider's Horn (Off-Hand Item)"
		}
	  ],
	  "gp": 0,
	  "exp": 650
	},
	"key": "stoikalmCalamity3"
  },
  "taskwoodsTerror1": {
	"text": "Terror in the Taskwoods, Part 1: The Blaze in the Taskwoods",
	"notes": "You have never seen the Joyful Reaper so agitated. The ruler of the Flourishing Fields lands her skeleton gryphon mount right in the middle of Productivity Plaza and shouts without dismounting. \"Lovely Habiticans, we need your help! Something is starting fires in the Taskwoods, and we still haven't fully recovered from our battle against Burnout. If it's not halted, the flames could engulf all of our wild orchards and berry bushes!\"<br><br>You quickly volunteer, and hasten to the Taskwoods. As you creep into Habitica’s biggest fruit-bearing forest, you suddenly hear clanking and cracking voices from far ahead, and catch the faint smell of smoke. Soon enough, a horde of cackling, flaming skull-creatures flies by you, biting off branches and setting the treetops on fire!",
	"group": "questGroupTaskwoodsTerror",
	"completion": "With the help of the Joyful Reaper and the renowned pyromancer @Beffymaroo, you manage to drive back the swarm. In a show of solidarity, Beffymaroo offers you her Pyromancer's Turban as you move deeper into the forest.",
	"value": 4,
	"goldValue": 200,
	"category": "gold",
	"boss": {
	  "name": "Fire Skull Swarm",
	  "hp": 500,
	  "rage": {
		"title": "Swarm Respawn",
		"description": "Swarm Respawn: This bar fills when you don't complete your Dailies. When it is full, the Fire Skull Swarm will heal 30% of its remaining health!",
		"value": 50,
		"healing": 0.3,
		"effect": "`Fire Skull Swarm uses SWARM RESPAWN!`\n\nEmboldened by their victories, more skulls swirl around you in a gout of flame!"
	  },
	  "str": 1,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "Skeleton",
		  "text": "Skeleton Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Red",
		  "text": "Red Hatching Potion"
		},
		{
		  "type": "gear",
		  "key": "head_special_pyromancersTurban",
		  "text": "Pyromancer's Turban (Headgear)"
		}
	  ],
	  "gp": 0,
	  "exp": 500
	},
	"key": "taskwoodsTerror1"
  },
  "taskwoodsTerror2": {
	"text": "Terror in the Taskwoods, Part 2: Finding the Flourishing Fairies",
	"notes": "Having fought through the swarm of burning skulls, you reach a large group of refugee farmers at the forest's edge. \"Their village was burnt down by a renegade autumn spirit,\" says a familiar voice. It's @Kiwibot, the legendary tracker! \"I managed to gather the survivors, but there's no sign of the Flourishing Fairies who help to grow the wild fruit of the Taskwoods. Please, you have to help me rescue them!\"",
	"group": "questGroupTaskwoodsTerror",
	"completion": "You manage to locate the last dryad and lead her away from the monsters. When you return to the refugee farmers, you are greeted by the thankful faeries, who give you a robe woven of shining magic and silk. Suddenly, a deep rumbling sound echoes through the trees, shaking the very earth. \"That must be the renegade spirit,\" the Joyful Reaper says. \"Let's hurry!\"",
	"previous": "taskwoodsTerror1",
	"prereqQuests": [
	  "taskwoodsTerror1"
	],
	"value": 4,
	"goldValue": 300,
	"category": "gold",
	"collect": {
	  "pixie": {
		"text": "Pixies",
		"count": 25
	  },
	  "brownie": {
		"text": "Brownies",
		"count": 15
	  },
	  "dryad": {
		"text": "Dryads",
		"count": 10
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "gear",
		  "key": "armor_special_pyromancersRobes",
		  "text": "Pyromancer's Robes (Armor)"
		}
	  ],
	  "gp": 0,
	  "exp": 75
	},
	"key": "taskwoodsTerror2"
  },
  "taskwoodsTerror3": {
	"text": "Terror in the Taskwoods, Part 3: Jacko of the Lantern",
	"notes": "Ready for battle, your group marches to the heart of the forest, where the renegade spirit is trying to destroy an ancient apple tree surrounded by fruitful berry bushes. His pumpkin-like head radiates a terrible light wherever it turns, and in his left hand he holds a long rod, with a lantern hanging from its tip. Instead of fire or flame, however, the lantern contains a dark crystal that chills you to the very bone.<br><br>The Joyful Reaper raises a bony hand to her mouth. \"That's -- that's Jacko, the Lantern Spirit! But he's a helpful harvest ghost who guides our farmers. What could possibly drive the dear soul to act this way?\"<br><br>\"I don't know,\" says @bridgetteempress. \"But it looks like that 'dear soul' is about to attack us!\"",
	"group": "questGroupTaskwoodsTerror",
	"completion": "After a long battle, you manage to land a well-aimed blow at the lantern that Jacko carries, and the crystal within shatters. Jacko suddenly snaps back to his senses and bursts into glowing tears. \"Oh, my beautiful forest! What have I done?!\" he wails. His tears extinguish the remaining fires, and the apple tree and wild berries are saved.<br><br>After you help him relax, he explains, \"I met this charming lady named Tzina, and she gave me this glowing crystal as a gift. At her urging, I put it in my lantern... but that's the last thing I recall.\" He turns to you with a golden smile. \"Perhaps you should take it for safekeeping while I help the wild orchards to regrow.\"",
	"previous": "taskwoodsTerror2",
	"prereqQuests": [
	  "taskwoodsTerror1",
	  "taskwoodsTerror2"
	],
	"value": 4,
	"goldValue": 400,
	"category": "gold",
	"boss": {
	  "name": "Jacko of the Lantern",
	  "hp": 1000,
	  "str": 2,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "food",
		  "key": "Strawberry",
		  "text": "Strawberry (Food)"
		},
		{
		  "type": "food",
		  "key": "Strawberry",
		  "text": "Strawberry (Food)"
		},
		{
		  "type": "food",
		  "key": "Strawberry",
		  "text": "Strawberry (Food)"
		},
		{
		  "type": "gear",
		  "key": "weapon_special_taskwoodsLantern",
		  "text": "Taskwoods Lantern (Two-Handed Weapon)"
		}
	  ],
	  "gp": 0,
	  "exp": 650
	},
	"key": "taskwoodsTerror3"
  },
  "lostMasterclasser1": {
	"text": "The Mystery of the Masterclassers, Part 1: Read Between the Lines",
	"notes": "You’re unexpectedly summoned by @beffymaroo and @Lemoness to Habit Hall, where you’re astonished to find all four of Habitica’s Masterclassers awaiting you in the wan light of dawn. Even the Joyful Reaper looks somber.<br><br>“Oho, you’re here,” says the April Fool. “Now, we would not rouse you from your rest without a truly dire—”<br><br>“Help us investigate the recent bout of possessions,” interrupts Lady Glaciate. “All the victims blamed someone named Tzina.”<br><br>The April Fool is clearly affronted by the summary. “What about my speech?” he hisses to her. “With the fog and thunderstorm effects?”<br><br>“We’re in a hurry,” she mutters back. “And my mammoths are still soggy from your incessant practicing.”<br><br>“I’m afraid that the esteemed Master of Warriors is correct,” says King Manta. “Time is of the essence. Will you aid us?”<br><br>When you nod, he waves his hands to open a portal, revealing an underwater room. “Swim down with me to Dilatory, and we will scour my library for any references that might give us a clue.” At your look of confusion, he adds, “Don’t worry, the paper was enchanted long before Dilatory sank. None of the books are the slightest bit damp!” He winks.“Unlike Lady Glaciate’s mammoths.”<br><br>“I heard that, Manta.”<br><br>As you dive into the water after the Master of Mages, your legs magically fuse into fins. Though your body is buoyant, your heart sinks when you see the thousands of bookshelves. Better start reading…",
	"group": "questGroupLostMasterclasser",
	"completion": "After hours of poring through volumes, you still haven’t found any useful information.<br><br>“It seems impossible that there isn’t even the tiniest reference to anything relevant,” says head librarian @Tuqjoi, and their assistant @stefalupagus nods in frustration.<br><br>King Manta’s eyes narrow. “Not impossible…” he says. “<em>Intentional</em>.” For a moment, the water glows around his hands, and several of the books shudder. “Something is obscuring information,” he says. “Not just a static spell, but something with a will of its own. Something… alive.” He swims up from the table. “The Joyful Reaper needs to hear about this. Let’s pack a meal for the road.”",
	"value": 4,
	"prereqQuests": [
	  "dilatoryDistress1",
	  "dilatoryDistress2",
	  "dilatoryDistress3",
	  "mayhemMistiflying1",
	  "mayhemMistiflying2",
	  "mayhemMistiflying3",
	  "stoikalmCalamity1",
	  "stoikalmCalamity2",
	  "stoikalmCalamity3",
	  "taskwoodsTerror1",
	  "taskwoodsTerror2",
	  "taskwoodsTerror3"
	],
	"goldValue": 400,
	"category": "gold",
	"collect": {
	  "ancientTome": {
		"text": "Ancient Tomes",
		"count": 40
	  },
	  "forbiddenTome": {
		"text": "Forbidden Tomes",
		"count": 40
	  },
	  "hiddenTome": {
		"text": "Hidden Tomes",
		"count": 40
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "food",
		  "key": "Potatoe",
		  "text": "Potato"
		},
		{
		  "type": "food",
		  "key": "Potatoe",
		  "text": "Potato"
		},
		{
		  "type": "food",
		  "key": "Potatoe",
		  "text": "Potato"
		},
		{
		  "type": "food",
		  "key": "Meat",
		  "text": "Meat"
		},
		{
		  "type": "food",
		  "key": "Meat",
		  "text": "Meat"
		},
		{
		  "type": "food",
		  "key": "Meat",
		  "text": "Meat"
		},
		{
		  "type": "food",
		  "key": "Milk",
		  "text": "Milk"
		},
		{
		  "type": "food",
		  "key": "Milk",
		  "text": "Milk"
		},
		{
		  "type": "food",
		  "key": "Milk",
		  "text": "Milk"
		}
	  ],
	  "gp": 0,
	  "exp": 200
	},
	"key": "lostMasterclasser1"
  },
  "lostMasterclasser2": {
	"text": "The Mystery of the Masterclassers, Part 2: Assembling the a'Voidant",
	"notes": "The Joyful Reaper drums her bony fingers on some of the books that you brought. “Oh, dear,” the Master of Healers says. “There is a malevolent life essence at work. I might have guessed, considering the attacks by reanimated skulls during each incident.” Her assistant @tricksy.fox brings in a chest, and you are startled to see the contents that @beffymaroo unloads: the very same objects once used by this mysterious Tzina to possess people.<br><br>“I’m going to use resonant healing magic to try to make this creature manifest,” the Joyful Reaper says, reminding you that the skeleton is a somewhat unconventional Healer. “You’ll need to read the revealed information quickly, in case it breaks loose.”<br><br>As she concentrates, a twisting mist begins to siphon from the books and twine around the objects. Quickly, you flip through the pages, trying to read the new lines of text that are writhing into view. You catch only a few snippets: “Sands of the Timewastes” — “the Great Disaster” —“split into four”— “permanently corrupted”— before a single name catches your eye: Zinnya.<br><br>Abruptly, the pages wrench free from your fingers and shred themselves as a howling creature explodes into being, coalescing around the possessed objects.<br><br>“It’s an a’Voidant!” the Joyful Reaper shouts, throwing up a protection spell. “They’re ancient creatures of confusion and obscurity. If this Tzina can control one, she must have a frightening command over life magic. Quickly, attack it before it escapes back into the books!”<br><br>",
	"group": "questGroupLostMasterclasser",
	"previous1": "lostMasterclasser1",
	"completion": "The a’Voidant succumbs at last, and you share the snippets that you read.<br><br>“None of those references sound familiar, even for someone as old as I,” the Joyful Reaper says. “Except… the Timewastes are a distant desert at the most hostile edge of Habitica. Portals often fail nearby, but swift mounts could get you there in no time. Lady Glaciate will be glad to assist.” Her voice grows amused. “Which means that the enamored Master of Rogues will undoubtedly tag along.” She hands you the glimmering mask. “Perhaps you should try to track the lingering magic in these items to its source. I’ll go harvest some sustenance for your journey.”",
	"prereqQuests": [
	  "lostMasterclasser1"
	],
	"value": 4,
	"goldValue": 500,
	"category": "gold",
	"boss": {
	  "name": "The a'Voidant",
	  "hp": 1500,
	  "str": 2.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "food",
		  "key": "Chocolate",
		  "text": "Chocolate"
		},
		{
		  "type": "food",
		  "key": "Chocolate",
		  "text": "Chocolate"
		},
		{
		  "type": "food",
		  "key": "Chocolate",
		  "text": "Chocolate"
		},
		{
		  "type": "food",
		  "key": "Honey",
		  "text": "Honey"
		},
		{
		  "type": "food",
		  "key": "Honey",
		  "text": "Honey"
		},
		{
		  "type": "food",
		  "key": "Honey",
		  "text": "Honey"
		},
		{
		  "type": "food",
		  "key": "RottenMeat",
		  "text": "Rotten Meat"
		},
		{
		  "type": "food",
		  "key": "RottenMeat",
		  "text": "Rotten Meat"
		},
		{
		  "type": "food",
		  "key": "RottenMeat",
		  "text": "Rotten Meat"
		},
		{
		  "type": "gear",
		  "key": "eyewear_special_aetherMask",
		  "text": "Aether Mask (Eyewear)"
		}
	  ],
	  "gp": 0,
	  "exp": 1500
	},
	"key": "lostMasterclasser2"
  },
  "lostMasterclasser3": {
	"text": "The Mystery of the Masterclassers, Part 3: City in the Sands",
	"notes": "As night unfurls over the scorching sands of the Timewastes, your guides @AnnDeLune, @Kiwibot, and @Katy133 lead you forward. Some bleached pillars poke from the shadowed dunes, and as you approach them, a strange skittering sound echoes across the seemingly-abandoned expanse.<br><br>“Invisible creatures!” says the April Fool, clearly covetous. “Oho! Just imagine the possibilities. This must be the work of a truly stealthy Rogue.”<br><br>“A Rogue who could be watching us,” says Lady Glaciate, dismounting and raising her spear. “If there’s a head-on attack, try not to irritate our opponent. I don’t want a repeat of the volcano incident.”<br><br>He beams at her. “But it was one of your most resplendent rescues.”<br><br>To your surprise, Lady Glaciate turns very pink at the compliment. She hastily stomps away to examine the ruins.<br><br>“Looks like the wreck of an ancient city,” says @AnnDeLune. “I wonder what…”<br><br>Before she can finish her sentence, a portal roars open in the sky. Wasn’t that magic supposed to be nearly impossible here? The hoofbeats of the invisible animals thunder as they flee in panic, and you steady yourself against the onslaught of shrieking skulls that flood the skies.",
	"group": "questGroupLostMasterclasser",
	"completion": "The April Fool surprises the final skull with a spray of sand, and it blunders backwards into Lady Glaciate, who smashes it expertly. As you catch your breath and look up, you see a single flash of someone’s silhouette moving on the other side of the closing portal. Thinking quickly, you snatch up the amulet from the chest of previously-possessed items, and sure enough, it’s drawn towards the unseen person. Ignoring the shouts of alarm from Lady Glaciate and the April Fool, you leap through the portal just as it snaps shut, plummeting into an inky swath of nothingness.",
	"previous": "lostMasterclasser2",
	"prereqQuests": [
	  "lostMasterclasser1",
	  "lostMasterclasser2"
	],
	"value": 4,
	"goldValue": 600,
	"category": "gold",
	"boss": {
	  "name": "Void Skull Swarm",
	  "hp": 2000,
	  "str": 3,
	  "rage": {
		"title": "Swarm Respawn",
		"description": "Swarm Respawn: This bar fills when you don't complete your Dailies. When it is full, the Void Skull Swarm will heal 30% of its remaining health!",
		"value": 25,
		"healing": 0.3,
		"effect": "`Void Skull Swarm uses SWARM RESPAWN!`\n\nEmboldened by their victories, more skulls scream down from the heavens, bolstering the swarm!"
	  },
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "Base",
		  "text": "Base Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "CottonCandyPink",
		  "text": "Cotton Candy Pink Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Golden",
		  "text": "Golden Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Shade",
		  "text": "Shade Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Zombie",
		  "text": "Zombie Hatching Potion"
		},
		{
		  "type": "gear",
		  "key": "body_special_aetherAmulet",
		  "text": "Aether Amulet (Body Accessory)"
		}
	  ],
	  "gp": 0,
	  "exp": 2000
	},
	"key": "lostMasterclasser3"
  },
  "lostMasterclasser4": {
	"text": "The Mystery of the Masterclassers, Part 4: The Lost Masterclasser",
	"notes": "You surface from the portal, but you’re still suspended in a strange, shifting netherworld. “That was bold,” says a cold voice. “I have to admit, I hadn’t planned for a direct confrontation yet.” A woman rises from the churning whirlpool of darkness. “Welcome to the Realm of Void.”<br><br>You try to fight back your rising nausea. “Are you Zinnya?” you ask.<br><br>“That old name for a young idealist,” she says, mouth twisting, and the world writhes beneath you. “No. If anything, you should call me the Anti’zinnya now, given all that I have done and undone.”<br><br>Suddenly, the portal reopens behind you, and as the four Masterclassers burst out, bolting towards you, Anti’zinnya’s eyes flash with hatred. “I see that my pathetic replacements have managed to follow you.”<br><br>You stare. “Replacements?”<br><br>“As the Master Aethermancer, I was the first Masterclasser — the only Masterclasser. These four are a mockery, each possessing only a fragment of what I once had! I commanded every spell and learned every skill. I shaped your very world to my whim — until the traitorous aether itself collapsed under the weight of my talents and my perfectly reasonable expectations. I have been trapped for millennia in this resulting void, recuperating. Imagine my disgust when I learned how my legacy had been corrupted.” She lets out a low, echoing laugh. “My plan was to destroy their domains before destroying them, but I suppose the order is irrelevant.” With a burst of uncanny strength, she charges forward, and the Realm of Void explodes into chaos.",
	"group": "questGroupLostMasterclasser",
	"completion": "Under the onslaught of your final attack, the Lost Masterclasser screams in frustration, her body flickering into translucence. The thrashing void stills around her as she slumps forward, and for a moment, she seems to change, becoming younger, calmer, with an expression of peace upon her face… but then everything melts away with scarcely a whisper, and you’re kneeling once more in the desert sand.<br><br>“It seems that we have much to learn about our own history,” King Manta says, staring at the broken ruins. “After the Master Aethermancer grew overwhelmed and lost control of her abilities, the outpouring of void must have leached the life from the entire land. Everything probably became deserts like this.”<br><br>“No wonder the ancients who founded Habitica stressed a balance of productivity and wellness,” the Joyful Reaper murmurs. “Rebuilding their world would have been a daunting task requiring considerable hard work, but they would have wanted to prevent such a catastrophe from happening again.”<br><br>“Oho, look at those formerly possessed items!” says the April Fool. Sure enough, all of them shimmer with a pale, glimmering translucence from the final burst of aether released when you laid Anti’zinnya’s spirit to rest. “What a dazzling effect. I must take notes.”<br><br>“The concentrated remnants of aether in this area probably caused these animals to go invisible, too,” says Lady Glaciate, scratching a patch of emptiness behind the ears. You feel an unseen fluffy head nudge your hand, and suspect that you’ll have to do some explaining at the Stables back home. As you look at the ruins one last time, you spot all that remains of the first Masterclasser: her shimmering cloak. Lifting it onto your shoulders, you head back to Habit City, pondering everything that you have learned.<br><br>",
	"previous": "lostMasterclasser3",
	"prereqQuests": [
	  "lostMasterclasser1",
	  "lostMasterclasser2",
	  "lostMasterclasser3"
	],
	"value": 4,
	"goldValue": 700,
	"category": "gold",
	"boss": {
	  "name": "Anti'zinnya",
	  "hp": 3000,
	  "str": 4,
	  "rage": {
		"title": "Siphoning Void",
		"description": "Siphoning Void: This bar fills when you don't complete your Dailies. When it is full, Anti'zinnya will remove the party's Mana!",
		"value": 15,
		"mpDrain": true,
		"effect": "`Anti'zinnya uses SIPHONING VOID!` In a twisted inversion of the Ethereal Surge spell, you feel your magic drain away into the darkness!"
	  },
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "mounts",
		  "key": "Aether-Invisible",
		  "text": "Invisible Aether Mount"
		},
		{
		  "type": "gear",
		  "key": "back_special_aetherCloak",
		  "text": "Aether Cloak (Back Accessory)"
		},
		{
		  "type": "gear",
		  "key": "weapon_special_aetherCrystals",
		  "text": "Aether Crystals (Two-Handed Weapon)"
		}
	  ],
	  "gp": 0,
	  "exp": 3500
	},
	"key": "lostMasterclasser4"
  },
  "alligator": {
	"text": "The Insta-Gator",
	"notes": "“Crikey!” exclaims @gully. “An Insta-Gator in its natural habitat! Careful, it distracts its prey with things that seem urgent THIS INSTANT, and it feeds on the unchecked Dailies that result.” You fall silent to avoid attracting its attention, but to no avail. The Insta-Gator spots you and charges! Distracting voices rise up from Swamps of Stagnation, grabbing for your attention: “Read this post! See this photo! Pay attention to me THIS INSTANT!” You scramble to mount a counterattack, completing your Dailies and bolstering your good Habits to fight off the dreaded Insta-Gator.",
	"completion": "With your attention focused on what’s important and not the Insta-Gator’s distractions, the Insta-Gator flees. Victory! “Are those eggs? They look like gator eggs to me,” asks @mfonda. “If we care for them correctly, they’ll be loyal pets or faithful steeds,” answers @UncommonCriminal, handing you three to care for. Let’s hope so, or else the Insta-Gator might make a return…",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Insta-Gator",
	  "hp": 1100,
	  "str": 2.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Alligator",
		  "text": "Alligator (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Alligator",
		  "text": "Alligator (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Alligator",
		  "text": "Alligator (Egg)"
		}
	  ],
	  "gp": 73,
	  "exp": 725,
	  "unlock": "Unlocks Alligator Eggs for purchase in the Market"
	},
	"key": "alligator"
  },
  "armadillo": {
	"text": "The Indulgent Armadillo",
	"notes": "It's time to get outside and start your day. You swing open your door only to be met with what looks like a sheet of rock. \"I'm just giving you the day off!\" says a muffled voice through the blocked door. \"Don't be such a bummer, just relax today!\"<br><br>Suddenly, @Beffymaroo and @PainterProphet knock on your window. \"Looks like the Indulgent Armadillo has taken a liking to you! C'mon, we'll help you get her out of your way!\"",
	"completion": "Finally, after a long morning of convincing the Indulgent Armadillo that you do, in fact, want to work, she caves. \"I'm sorry!\" She apologizes. \"I just wanted to help. I thought everyone liked lazy days!\"<br><br>You smile, and let her know that next time you've earned a day off you'll invite her over. She grins back at you. Passers-by @Tipsy and @krajzega congratulate you on the good work as she rolls away, leaving a few eggs as an apology.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Indulgent Armadillo",
	  "hp": 600,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Armadillo",
		  "text": "Armadillo (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Armadillo",
		  "text": "Armadillo (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Armadillo",
		  "text": "Armadillo (Egg)"
		}
	  ],
	  "gp": 43,
	  "exp": 350,
	  "unlock": "Unlocks Armadillo Eggs for purchase in the Market"
	},
	"key": "armadillo"
  },
  "axolotl": {
	"text": "The Magical Axolotl",
	"notes": "From the depths of Washed-Up Lake you see rising bubbles and... fire? A little axolotl rises from the murky water spewing streaks of colors. Suddenly it begins to open its mouth and @streak yells, \"Look out!\" as the Magical Axolotl starts to gulp up your willpower!<br><br>The Magical Axolotl swells with spells, taunting you. \"Have you heard of my powers of regeneration? You'll tire before I do!\"<br><br>\"We can defeat you with the good habits we've built!\" @PainterProphet defiantly shouts. You steel yourself to be productive to defeat the Magical Axolotl and regain your stolen willpower!",
	"completion": "After defeating the Magical Axolotl, you realize that you regained your willpower all on your own.<br><br>\"The willpower? The regeneration? It was all just an illusion?\" @Kiwibot asks.<br><br>\"Most magic is,\" the Magical Axolotl replies. \"I'm sorry for tricking you. Please take these eggs as an apology. I trust you to raise them to use their magic for good habits and not evil!\"<br><br>You and @hazel40 clutch your new eggs in one hand and wave goodbye with the other as the Magical Axolotl returns to the lake.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Magical Axolotl",
	  "hp": 500,
	  "str": 1.5,
	  "rage": {
		"title": "Axolotl Regeneration",
		"description": "This bar fills when you don't complete your Dailies. When it is full, the Magical Axolotl will heal 30% of its remaining health!",
		"value": 50,
		"healing": 0.3,
		"effect": "`Magical Axolotl uses AXOLOTL REGENERATION!`\n\n`A curtain of colorful bubbles obscures the monster for a moment, and when it clears, some of its wounds have vanished!`"
	  },
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Axolotl",
		  "text": "Axolotl (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Axolotl",
		  "text": "Axolotl (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Axolotl",
		  "text": "Axolotl (Egg)"
		}
	  ],
	  "gp": 37,
	  "exp": 275,
	  "unlock": "Unlocks Axolotl Eggs for purchase in the Market"
	},
	"key": "axolotl"
  },
  "badger": {
	"text": "Stop Badgering Me!",
	"notes": "Ah, winter in the Taskwoods. The softly falling snow, the branches sparkling with frost, the Flourishing Fairies… still not snoozing?<br><br>“Why are they still awake?” cries @LilithofAlfheim. “If they don't hibernate soon, they'll never have the energy for planting season.”<br><br>As you and @Willow the Witty hurry to investigate, a furry head pops up from the ground. Before you can yell, “It’s the Badgering Bother!” it’s back in its burrow—but not before snatching up the Fairies' “Hibernate”  To Do's and dropping a giant list of pesky tasks in their place!<br><br>“No wonder the fairies aren't resting, if they're constantly being badgered like that!”  @plumilla says. Can you chase off this beast and save the Taskwood’s harvest this year?",
	"completion": "You finally drive away the Badgering Bother and hurry into its burrow. At the end of a tunnel, you find its hoard of the faeries’ “Hibernate”  To Do's. The den is otherwise abandoned, except for three eggs that look ready to hatch.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "The Badgering Bother",
	  "hp": 600,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Badger",
		  "text": "Badger (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Badger",
		  "text": "Badger (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Badger",
		  "text": "Badger (Egg)"
		}
	  ],
	  "gp": 43,
	  "exp": 350,
	  "unlock": "Unlocks Badger Eggs for purchase in the Market"
	},
	"key": "badger"
  },
  "beetle": {
	"text": "The CRITICAL BUG",
	"notes": "Something in the domain of Habitica has gone awry. The Blacksmiths' forges have extinguished, and strange errors are appearing everywhere. With an ominous tremor, an insidious foe worms from the earth... a CRITICAL BUG! You brace yourself as it infects the land, and glitches begin to overtake the Habiticans around you. @starsystemic yells, \"We need to help the Blacksmiths get this Bug under control!\" It looks like you'll have to make this programmer's pest your top priority.",
	"completion": "With a final attack, you crush the CRITICAL BUG. @starsystemic and the Blacksmiths rush up to you, overjoyed. \"I can't thank you enough for smashing that bug! Here, take these.\" You are presented with three shiny beetle eggs. Hopefully these little bugs will grow up to help Habitica, not hurt it.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "CRITICAL BUG",
	  "hp": 500,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Beetle",
		  "text": "Beetle (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Beetle",
		  "text": "Beetle (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Beetle",
		  "text": "Beetle (Egg)"
		}
	  ],
	  "gp": 37,
	  "exp": 275,
	  "unlock": "Unlocks Beetle Eggs for purchase in the Market"
	},
	"key": "beetle"
  },
  "bunny": {
	"text": "The Killer Bunny",
	"notes": "After many difficult days, you reach the peak of Mount Procrastination and stand before the imposing doors of the Fortress of Neglect. You read the inscription in the stone. \"Inside resides the creature that embodies your greatest fears, the reason for your inaction. Knock and face your demon!\" You tremble, imagining the horror within and feel the urge to flee as you have done so many times before. @Draayder holds you back. \"Steady, my friend! The time has come at last. You must do this!\"<br><br>You knock and the doors swing inward. From within the gloom you hear a deafening roar, and you draw your weapon.",
	"completion": "With one final blow the killer rabbit sinks to the ground. A sparkly mist rises from her body as she shrinks down into a tiny bunny... nothing like the cruel beast you faced a moment before. Her nose twitches adorably and she hops away, leaving some eggs behind. @Gully laughs. \"Mount Procrastination has a way of making even the smallest challenges seem insurmountable. Let's gather these eggs and head for home.\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Killer Bunny",
	  "hp": 300,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Bunny",
		  "text": "Bunny (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Bunny",
		  "text": "Bunny (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Bunny",
		  "text": "Bunny (Egg)"
		}
	  ],
	  "gp": 25,
	  "exp": 125,
	  "unlock": "Unlocks Bunny Eggs for purchase in the Market"
	},
	"key": "bunny"
  },
  "butterfly": {
	"text": "Bye, Bye, Butterfry",
	"notes": "Your gardener friend @Megan sends you an invitation: “These warm days are the perfect time to visit Habitica’s butterfly garden in the Taskan countryside. Come see the butterflies migrate!” When you arrive, however, the garden is in shambles -- little more than scorched grass and dried-out weeds. It’s been so hot that the Habiticans haven’t come out to water the flowers, and the dark-red Dailies have turned it into a dry, sun-baked, fire-hazard. There's only one butterfly there, and there's something odd about it...<br><br>“Oh no! This is the perfect hatching ground for the Flaming Butterfry,” cries @Leephon.<br><br>“If we don’t catch it, it’ll destroy everything!” gasps @Eevachu.<br><br>Time to say bye, bye to Butterfry!",
	"completion": "After a blazing battle, the Flaming Butterfry is captured. “Great job catching that would-be arsonist,” says @Megan with a sigh of relief. “Still, it’s hard to vilify even the vilest butterfly. We’d better free this Butterfry someplace safe…like the desert.”<br><br>One of the other gardeners, @Beffymaroo, comes up to you, singed but smiling. “Will you help raise these foundling chrysalises we found? Perhaps next year we’ll have a greener garden for them.”",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Flaming Butterfry",
	  "hp": 400,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Butterfly",
		  "text": "Caterpillar (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Butterfly",
		  "text": "Caterpillar (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Butterfly",
		  "text": "Caterpillar (Egg)"
		}
	  ],
	  "gp": 31,
	  "exp": 200,
	  "unlock": "Unlocks Caterpillar Eggs for purchase in the Market"
	},
	"key": "butterfly"
  },
  "cheetah": {
	"text": "Such a Cheetah",
	"notes": "As you hike across the Sloensteadi Savannah with your friends @PainterProphet, @tivaquinn, @Unruly Hyena, and @Crawford, you're startled to see a Cheetah screeching past with a new Habitican clamped in its jaws. Under the Cheetah's scorching paws, tasks burn away as though complete -- before anyone has the chance to actually finish them! The Habitican sees you and yells, \"Please help me! This Cheetah is making me level too quickly, but I'm not getting anything done. I want to slow down and enjoy the game. Make it stop!\" You fondly remember your own fledgling days, and know that you have to help the newbie by stopping the Cheetah!",
	"completion": "The new Habitican is breathing heavily after the wild ride, but thanks you and your friends for your help. \"I'm glad that Cheetah won't be able to grab anyone else. It did leave some Cheetah eggs for us, so maybe we can raise them into more trustworthy pets!\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Cheetah",
	  "hp": 600,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Cheetah",
		  "text": "Cheetah (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Cheetah",
		  "text": "Cheetah (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Cheetah",
		  "text": "Cheetah (Egg)"
		}
	  ],
	  "gp": 43,
	  "exp": 350,
	  "unlock": "Unlocks Cheetah Eggs for purchase in the Market"
	},
	"key": "cheetah"
  },
  "cow": {
	"text": "The Mootant Cow",
	"notes": "It’s been a long, hot day at Sparring Farms, and there is nothing more you want than a long sip of water and some sleep. You're standing there daydreaming when @Soloana suddenly screams, \"Everyone run! The prize cow has mootated!\"<br><br>@eevachu gulps. \"It must be our bad habits that infected it.\"<br><br>\"Quick!\" @Feralem Tau says. \"Let’s do something before the udder cows mootate, too.\"<br><br>You’ve herd enough. No more daydreaming -- it's time to get those bad habits under control!",
	"completion": "You milk your good habits for all they are worth until the cow reverts to its original form. The cow looks over at you with her pretty brown eyes and nudges over three eggs.<br><br>@fuzzytrees laughs and hands you the eggs, \"Maybe it still is mootated if there are baby cows in these eggs. But I trust you to stick to your good habits when you raise them!\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Mootant Cow",
	  "hp": 400,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Cow",
		  "text": "Cow (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Cow",
		  "text": "Cow (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Cow",
		  "text": "Cow (Egg)"
		}
	  ],
	  "gp": 31,
	  "exp": 200,
	  "unlock": "Unlocks Cow Eggs for purchase in the Market"
	},
	"key": "cow"
  },
  "dilatory_derby": {
	"text": "The Dilatory Derby",
	"notes": "It's Derby Day, and Habiticans from all over the continent have traveled to Dilatory to race their pet seahorses! Suddenly, a great splashing and snarling breaks out at the racetrack, and you hear Seahorse Keeper @Kiwibot shouting above the roar of the waves. \"The gathering of seahorses has attracted a fierce Sea Stallion!\" she cries. \"He's smashing through the stables and destroying the ancient track! Can anyone calm him down?\"",
	"completion": "The now-tame Sea Stallion swims docilely to your side. \"Oh, look!\" Kiwibot says. \"He wants us to take care of his children.\" She gives you three eggs. \"Raise them well,\" she says. \"You're welcome at the Dilatory Derby any day!\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Sea Stallion",
	  "hp": 300,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Seahorse",
		  "text": "Seahorse (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Seahorse",
		  "text": "Seahorse (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Seahorse",
		  "text": "Seahorse (Egg)"
		}
	  ],
	  "gp": 25,
	  "exp": 125,
	  "unlock": "Unlocks Seahorse Eggs for purchase in the Market"
	},
	"key": "dilatory_derby"
  },
  "dolphin": {
	"text": "The Dolphin of Doubt",
	"notes": "You walk upon the shores of Inkomplete Bay, pondering the daunting work ahead of you. A splash in the water catches your eye. A magnificent dolphin arcs over the waves. Sunlight glimmers off its fins and tail. But wait...that’s not sunlight, and the dolphin doesn’t dip back into the sea. It fixes its gaze on @khdarkwolf.<br><br>“I’ll never finish all these Dailies,” said @khdarkwolf.<br><br>“I’m not good enough to reach my goals,” said @confusedcicada as the dolphin turned its glare on them.<br><br>“Why did I even bother trying?” asked @mewrose, withering under the stare of the beast.<br><br>Its eyes meet yours, and feel your mind begin to sink under the rising tide of doubt. You steel yourself; someone has to defeat this creature, and it’s going to be you!",
	"completion": "Your battle of wills with the dolphin has left you tired but victorious. With your determination and encouragement, @mewrose, @khdarkwolf, and @confusedcicada pick themselves up and shake off the dolphin’s insidious telepathy. The four of you shield yourselves with a sense of accomplishment in your consistent Dailies, strong Habits, and completed To Do's until it closes its glowing eyes in silent acknowledgment of your successes. With that, it tumbles back into the bay. As you trade high-fives and congratulations, you notice three eggs wash ashore.<br><br>“Hm, I wonder what we can do with those,” @khdarkwolf muses.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Dolphin of Doubt",
	  "hp": 300,
	  "str": 1.25,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Dolphin",
		  "text": "Dolphin (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Dolphin",
		  "text": "Dolphin (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Dolphin",
		  "text": "Dolphin (Egg)"
		}
	  ],
	  "gp": 22,
	  "exp": 110,
	  "unlock": "Unlocks Dolphin Eggs for purchase in the Market"
	},
	"key": "dolphin"
  },
  "falcon": {
	"text": "The Birds of Preycrastination",
	"notes": "Mt. Habitica is being overshadowed by a looming mountain of To Do's. It used to be a place to picnic and enjoy a sense of accomplishment, until the neglected tasks grew out of control. Now it's home to fearsome Birds of Preycrastination, foul creatures which stop Habiticans from completing their tasks!<br><br>\"It's too hard!\" they caw at @JonArinbjorn and @Onheiron. \"It'll take too long to do right now! It won't make any difference if you wait until tomorrow! Why don't you do something fun instead?\"<br><br>No more, you vow. You will climb your personal mountain of To Do's and defeat the Birds of Preycrastination!",
	"completion": "Having finally triumphed over the Birds of Preycrastination, you settle down to enjoy the view and your well-earned rest.<br><br>\"Wow!\" says @Trogdorina. \"You won!\"<br><br>@Squish adds, \"Here, take these eggs I found as a reward.\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Birds of Preycrastination",
	  "hp": 700,
	  "str": 2,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Falcon",
		  "text": "Falcon (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Falcon",
		  "text": "Falcon (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Falcon",
		  "text": "Falcon (Egg)"
		}
	  ],
	  "gp": 49,
	  "exp": 425,
	  "unlock": "Unlocks Falcon Eggs for purchase in the Market"
	},
	"key": "falcon"
  },
  "ferret": {
	"text": "The Nefarious Ferret",
	"notes": "Walking through Habit City, you see an unhappy crowd surrounding a red-robed Ferret.<br><br>\"That productivity potion you sold me is useless!\" @Beffymaroo complains. \"I watched three hours of TV last night instead of doing my chores!\"<br><br>\"Yeah!\" shouts @Pandah. \"And today I spent an hour rearranging my books instead of reading them!\"<br><br>The Nefarious Ferret spreads his hands innocently. \"That's more TV watching and book organizing than you'd normally get done, isn't it?\"<br><br>The crowd erupts in anger.<br><br>\"No refunds!\" crows the Nefarious Ferret. He fires a bolt of magic into the crowd, preparing to escape in the smoke.<br><br>\"Please, Habitican!\" @Faye says, grabbing your arm. \"Defeat the ferret and make him refund his dishonest earnings!\"",
	"completion": "You defeat the soft-furred swindler and @UncommonCriminal gives the crowd their refunds. There's even a little gold left over for you. Plus, it looks like the Nefarious Ferret dropped some eggs in his hurry to get away!",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Nefarious Ferret",
	  "hp": 400,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Ferret",
		  "text": "Ferret (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Ferret",
		  "text": "Ferret (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Ferret",
		  "text": "Ferret (Egg)"
		}
	  ],
	  "gp": 31,
	  "exp": 200,
	  "unlock": "Unlocks Ferret Eggs for purchase in the Market"
	},
	"key": "ferret"
  },
  "frog": {
	"text": "Swamp of the Clutter Frog",
	"notes": "As you and your friends are slogging through the Swamps of Stagnation, @starsystemic points at a large sign. \"Stay on the path -- if you can.\"<br><br>\"Surely that isn't hard!\" @RosemonkeyCT says. \"It's broad and clear.\"<br><br>But as you continue, you notice that path is gradually overtaken by the muck of the swamp, laced with bits of strange blue debris and clutter, until it's impossible to proceed.<br><br>As you look around, wondering how it got this messy, @Jon Arjinborn shouts, \"Look out!\" An angry frog leaps from the sludge, clad in dirty laundry and lit by blue fire. You will have to overcome this poisonous Clutter Frog to progress!",
	"completion": "The frog cowers back into the muck, defeated. As it slinks away, the blue slime fades, leaving the way ahead clear.<br><br>Sitting in the middle of the path are three pristine eggs. \"You can even see the tiny tadpoles through the clear casing!\" @Breadstrings says. \"Here, you should take them.\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Clutter Frog",
	  "hp": 300,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Frog",
		  "text": "Frog (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Frog",
		  "text": "Frog (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Frog",
		  "text": "Frog (Egg)"
		}
	  ],
	  "gp": 25,
	  "exp": 125,
	  "unlock": "Unlocks Frog Eggs for purchase in the Market"
	},
	"key": "frog"
  },
  "ghost_stag": {
	"text": "The Spirit of Spring",
	"notes": "Ahh, Spring. The time of year when color once again begins to fill the landscape. Gone are the cold, snowy mounds of winter. Where frost once stood, vibrant plant life takes its place. Luscious green leaves fill in the trees, grass returns to its former vivid hue, a rainbow of flowers rise along the plains, and a white mystical fog covers the land! ... Wait. Mystical fog? \"Oh no,\" <strong>InspectorCaracal</strong> says apprehensively, \"It would appear that some kind of spirit is the cause of this fog. Oh, and it is charging right at you.\"",
	"completion": "The spirit, seemingly unwounded, lowers its nose to the ground. A calming voice envelops your party. \"I apologize for my behavior. I have only just awoken from my slumber, and it would appear my wits have not completely returned to me. Please take these as a token of my apology.\" A cluster of eggs materialize on the grass before the spirit. Without another word, the spirit runs off into the forest with flowers falling in his wake.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Ghost Stag",
	  "hp": 1200,
	  "str": 2.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Deer",
		  "text": "Deer (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Deer",
		  "text": "Deer (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Deer",
		  "text": "Deer (Egg)"
		}
	  ],
	  "gp": 80,
	  "exp": 800,
	  "unlock": "Unlocks Deer Eggs for purchase in the Market"
	},
	"key": "ghost_stag"
  },
  "gryphon": {
	"text": "The Fiery Gryphon",
	"notes": "The grand beast master, <strong>baconsaur</strong>, has come to your party seeking help. \"Please, adventurers, you must help me! My prized gryphon has broken free and is terrorizing Habit City! If you can stop her, I could reward you with some of her eggs!\"",
	"completion": "Defeated, the mighty beast ashamedly slinks back to its master. \"My word! Well done, adventurers!\" <strong>baconsaur</strong> exclaims, \"Please, have some of the gryphon's eggs. I am sure you will raise these young ones well!\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Fiery Gryphon",
	  "hp": 300,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Gryphon",
		  "text": "Gryphon (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Gryphon",
		  "text": "Gryphon (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Gryphon",
		  "text": "Gryphon (Egg)"
		}
	  ],
	  "gp": 25,
	  "exp": 125,
	  "unlock": "Unlocks Gryphon Eggs for purchase in the Market"
	},
	"key": "gryphon"
  },
  "guineapig": {
	"text": "The Guinea Pig Gang",
	"notes": "You're casually strolling through Habit City's famous Market when @Pandah waves you down. \"Hey, check these out!\" They're holding up a brown and beige egg you don't recognize.<br><br>Alexander the Merchant frowns at it. \"I don't remember putting that out. I wonder where it came--\" A small paw cuts him off.<br><br>\"Guinea all your gold, merchant!\" squeaks a tiny voice brimming with evil.<br><br>\"Oh no, the egg was a distraction!\" @mewrose exclaims. \"It's the gritty, greedy Guinea Pig Gang! They never do their Dailies, so they constantly steal gold to buy health potions.\"<br><br>\"Robbing the Market?\" says @emmavig. \"Not on our watch!\" Without further prompting, you leap to Alexander's aid.",
	"completion": "\"We submit!\" The Guinea Pig Gang Boss waves his paws at you, fluffy head hanging in shame. From underneath his hat falls a list, and @snazzyorange quickly swipes it for evidence. \"Wait a minute,\" you say. \"It's no wonder you've been getting hurt! You've got way too many Dailies. You don't need health potions -- you just need help organizing.\"<br><br>\"Really?\" squeaks the Guinea Pig Gang Boss. \"We've robbed so many people because of this! Please take our eggs as an apology for our crooked ways.\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Guinea Pig Gang",
	  "hp": 400,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "GuineaPig",
		  "text": "Guinea Pig (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "GuineaPig",
		  "text": "Guinea Pig (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "GuineaPig",
		  "text": "Guinea Pig (Egg)"
		}
	  ],
	  "gp": 31,
	  "exp": 200,
	  "unlock": "Unlocks Guinea Pig Eggs for purchase in the Market"
	},
	"key": "guineapig"
  },
  "harpy": {
	"text": "Help! Harpy!",
	"notes": "The brave adventurer @UncommonCriminal has disappeared into the forest, following the trail of a winged monster that was sighted several days ago. You are about to begin a search when a wounded parrot lands on your arm, an ugly scar marring its beautiful plumage. Attached to its leg is a scrawled note explaining that while defending the parrots, @UncommonCriminal was captured by a vicious Harpy, and desperately needs your help to escape. Will you follow the bird, defeat the Harpy, and save @UncommonCriminal?",
	"completion": "A final blow to the Harpy brings it down, feathers flying in all directions. After a quick climb to its nest you find @UncommonCriminal, surrounded by parrot eggs. As a team, you quickly place the eggs back in the nearby nests. The scarred parrot who found you caws loudly, dropping several eggs in your arms. \"The Harpy attack has left some eggs in need of protection,\" explains @UncommonCriminal. \"It seems you have been made an honorary parrot.\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Harpy",
	  "hp": 600,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Parrot",
		  "text": "Parrot (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Parrot",
		  "text": "Parrot (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Parrot",
		  "text": "Parrot (Egg)"
		}
	  ],
	  "gp": 43,
	  "exp": 350,
	  "unlock": "Unlocks Parrot Eggs for purchase in the Market"
	},
	"key": "harpy"
  },
  "hedgehog": {
	"text": "The Hedgebeast",
	"notes": "Hedgehogs are a funny group of animals. They are some of the most affectionate pets a Habiteer could own. But rumor has it, if you feed them milk after midnight, they grow quite irritable. And fifty times their size. And <strong>InspectorCaracal</strong> did just that. Oops.",
	"completion": "Your party successfully calmed down the hedgehog! After shrinking down to a normal size, she hobbles away to her eggs. She returns squeaking and nudging some of her eggs along towards your party. Hopefully, these hedgehogs like milk better!",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Hedgebeast",
	  "hp": 400,
	  "str": 1.25,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Hedgehog",
		  "text": "Hedgehog (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Hedgehog",
		  "text": "Hedgehog (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Hedgehog",
		  "text": "Hedgehog (Egg)"
		}
	  ],
	  "gp": 30,
	  "exp": 125,
	  "unlock": "Unlocks Hedgehog Eggs for purchase in the Market"
	},
	"key": "hedgehog"
  },
  "hippo": {
	"text": "What a Hippo-Crite",
	"notes": "You and @awesomekitty collapse into the shade of a palm tree, exhausted. The sun beats down over the Sloensteadi Savannah, scorching the ground below. It’s been a productive day so far, conquering your Dailies, and this oasis looks like a nice place to take a break and refresh. Stooping near the water to get a drink, you stumble back in shock as a massive hippopotamus rises. “Resting so soon? Don’t be so lazy, get back to work.” You try and protest that you’ve been working hard and need a break, but the hippo isn’t having any of it.<br><br>@khdarkwolf whispers to you, “Notice how it’s lounging around all day but has the nerve to call you lazy? It’s the Hippo-Crite!”<br><br>Your friend @jumorales nods. “Let’s show it what hard work looks like!”",
	"completion": "The hippo bows in surrender. “I underestimated you. It seems you weren’t being lazy. My apologies. Truth be told, I may have been projecting a bit. Perhaps I should get some work done myself. Here, take these eggs as a sign of my gratitude.” Grabbing them, you settle down by the water, ready to relax at last.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "The Hippo-Crite",
	  "hp": 800,
	  "str": 2,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Hippo",
		  "text": "Hippo (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Hippo",
		  "text": "Hippo (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Hippo",
		  "text": "Hippo (Egg)"
		}
	  ],
	  "gp": 55,
	  "exp": 500,
	  "unlock": "Unlocks Hippo Eggs for purchase in the Market"
	},
	"key": "hippo"
  },
  "horse": {
	"text": "Ride the Night-Mare",
	"notes": "While relaxing in the Tavern with @beffymaroo and @JessicaChase, the talk turns to good-natured boasting about your adventuring accomplishments. Proud of your deeds, and perhaps getting a bit carried away, you brag that you can tame any task around. A nearby stranger turns toward you and smiles. One eye twinkles as he invites you to prove your claim by riding his horse.\nAs you all head for the stables, @UncommonCriminal whispers, \"You may have bitten off more than you can chew. That's no horse - that's a Night-Mare!\" Looking at its stamping hooves, you begin to regret your words...",
	"completion": "It takes all your skill, but finally the horse stamps a couple of hooves and nuzzles you in the shoulder before allowing you to mount. You ride briefly but proudly around the Tavern grounds while your friends cheer. The stranger breaks into a broad grin.\n\"I can see that was no idle boast! Your determination is truly impressive. Take these eggs to raise horses of your own, and perhaps we'll meet again one day.\" You take the eggs, the stranger tips his hat... and vanishes.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Night-Mare",
	  "hp": 500,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Horse",
		  "text": "Horse (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Horse",
		  "text": "Horse (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Horse",
		  "text": "Horse (Egg)"
		}
	  ],
	  "gp": 37,
	  "exp": 275,
	  "unlock": "Unlocks Horse Eggs for purchase in the Market"
	},
	"key": "horse"
  },
  "kangaroo": {
	"text": "Kangaroo Catastrophe",
	"notes": "Maybe you should have finished that last task… you know, the one you keep avoiding, even though it always comes back around? But @Mewrose and @LilithofAlfheim invited you and @stefalupagus to see a rare kangaroo troop hopping through the Sloensteadi Savannah; how could you say no?! As the troop comes into view, something hits you on the back of the head with a mighty <em>whack!</em><br><br>Shaking the stars from your vision, you pick up the responsible object--a dark red boomerang, with the very task you continually push back etched into its surface. A quick glance around confirms the rest of your party met a similar fate. One larger kangaroo looks at you with a smug grin, like she’s daring you to face her and that dreaded task once and for all!",
	"completion": "“NOW!” You signal your party to throw the boomerangs back at the kangaroo. The beast hops further away with each hit until she flees, leaving nothing more than a dark red cloud of dust, a few eggs, and some gold coins.<br><br>@Mewrose walks forward to where the kangaroo once stood. “Hey, where did the boomerangs go?”<br><br>“They probably dissolved into dust, making that dark red cloud, when we finished our respective tasks,” @stefalupagus speculates.<br><br>@LilithofAlfheim squints at the horizon. “Is that another kangaroo troop heading our way?”<br><br>You all break into a run back to Habit City. Better to face your difficult tasks than take another lump to the back of the head!",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Catastrophic Kangaroo",
	  "hp": 700,
	  "str": 2,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Kangaroo",
		  "text": "Kangaroo (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Kangaroo",
		  "text": "Kangaroo (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Kangaroo",
		  "text": "Kangaroo (Egg)"
		}
	  ],
	  "gp": 49,
	  "exp": 425,
	  "unlock": "Unlocks Kangaroo Eggs for purchase in the Market"
	},
	"key": "kangaroo"
  },
  "kraken": {
	"text": "The Kraken of Inkomplete",
	"notes": "It's a warm, sunny day as you sail across the Inkomplete Bay, but your thoughts are clouded with worries about everything that you still need to do. It seems that as soon as you finish one task, another crops up, and then another...<br><br>Suddenly, the boat gives a horrible jolt, and slimy tentacles burst out of the water on all sides! \"We're being attacked by the Kraken of Inkomplete!\" Wolvenhalo cries.<br><br>\"Quickly!\" Lemoness calls to you. \"Strike down as many tentacles and tasks as you can, before new ones can rise up to take their place!\"",
	"completion": "As the Kraken flees, several eggs float to the surface of the water. Lemoness examines them, and her suspicion turns to delight. \"Cuttlefish eggs!\" she says. \"Here, take them as a reward for everything you've completed.\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "The Kraken of Inkomplete",
	  "hp": 800,
	  "str": 2,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Cuttlefish",
		  "text": "Cuttlefish (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Cuttlefish",
		  "text": "Cuttlefish (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Cuttlefish",
		  "text": "Cuttlefish (Egg)"
		}
	  ],
	  "gp": 55,
	  "exp": 500,
	  "unlock": "Unlocks Cuttlefish Eggs for purchase in the Market"
	},
	"key": "kraken"
  },
  "monkey": {
	"text": "Monstrous Mandrill and the Mischief Monkeys",
	"notes": "The Sloensteadi Savannah is being torn apart by the Monstrous Mandrill and his Mischief Monkeys! They shriek loudly enough to drown out the sound of approaching deadlines, encouraging everyone to avoid their duties and keep monkeying around. Alas, plenty of people ape this bad behavior. If no one stops these primates, soon everyone's tasks will be as red as the Monstrous Mandrill's face!<br><br>\"It will take a dedicated adventurer to resist them,\" says @yamato.<br><br>\"Quick, let's get this monkey off everyone's backs!\" @Oneironaut yells, and you charge into battle.",
	"completion": "You did it! No bananas for those fiends today. Overwhelmed by your diligence, the monkeys flee in panic. \"Look,\" says @Misceo. \"They left a few eggs behind.\"<br><br>@Leephon grins. \"Maybe a well-trained pet monkey can help you as much as the wild ones hinder you!\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Monstrous Mandrill",
	  "hp": 400,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Monkey",
		  "text": "Monkey (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Monkey",
		  "text": "Monkey (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Monkey",
		  "text": "Monkey (Egg)"
		}
	  ],
	  "gp": 31,
	  "exp": 200,
	  "unlock": "Unlocks Monkey Eggs for purchase in the Market"
	},
	"key": "monkey"
  },
  "nudibranch": {
	"text": "Infestation of the NowDo Nudibranchs",
	"notes": "You finally get around to checking your To Do's on a lazy day in Habitica. Bright against your deepest red tasks are a gaggle of vibrant blue sea slugs. You are entranced! Their sapphire colors make your most intimidating tasks look as easy as your best Habits. In a feverish stupor you get to work, tackling one task after the other in a ceaseless frenzy...<br><br>The next thing you know, @LilithofAlfheim is pouring cold water over you. “The NowDo Nudibranchs have been stinging you all over! You need to take a break!”<br><br>Shocked, you see that your skin is as bright red as your To Do list was. \"Being productive is one thing,\" @beffymaroo says, \"but you've also got to take care of yourself. Hurry, let's get rid of them!\"",
	"completion": "You see the last of the NowDo Nudibranchs sliding off of a pile of completed tasks as @amadshade washes them away. One leaves behind a cloth bag, and you open it to reveal some gold and a few little ellipsoids you guess are eggs.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "NowDo Nudibranch",
	  "hp": 400,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Nudibranch",
		  "text": "Nudibranch (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Nudibranch",
		  "text": "Nudibranch (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Nudibranch",
		  "text": "Nudibranch (Egg)"
		}
	  ],
	  "gp": 31,
	  "exp": 200,
	  "unlock": "Unlocks Nudibranch Eggs for purchase in the Market"
	},
	"key": "nudibranch"
  },
  "octopus": {
	"text": "The Call of Octothulu",
	"notes": "@Urse, a wild-eyed young scribe, has asked for your help exploring a mysterious cave by the sea shore. Among the twilight tidepools stands a massive gate of stalactites and stalagmites. As you near the gate, a dark whirlpool begins to spin at its base. You stare in awe as a squid-like dragon rises through the maw. \"The sticky spawn of the stars has awakened,\" roars @Urse madly. \"After vigintillions of years, the great Octothulu is loose again, and ravening for delight!\"",
	"completion": "With a final blow, the creature slips away into the whirlpool from which it came. You cannot tell if @Urse is happy with your victory or saddened to see the beast go. Wordlessly, your companion points to three slimy, gargantuan eggs in a nearby tidepool, set in a nest of gold coins. \"Probably just octopus eggs,\" you say nervously. As you return home, @Urse frantically scribbles in a journal and you suspect this is not the last time you will hear of the great Octothulu.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Octothulu",
	  "hp": 1200,
	  "str": 2.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Octopus",
		  "text": "Octopus (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Octopus",
		  "text": "Octopus (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Octopus",
		  "text": "Octopus (Egg)"
		}
	  ],
	  "gp": 80,
	  "exp": 800,
	  "unlock": "Unlocks Octopus Eggs for purchase in the Market"
	},
	"key": "octopus"
  },
  "owl": {
	"text": "The Night-Owl",
	"notes": "The Tavern light is lit 'til dawn<br>Until one eve the glow is gone!<br>How can we see for our all-nighters?<br>@Twitching cries, \"I need some fighters!<br>See that Night-Owl, starry foe?<br>Fight with haste and do not slow!<br>We'll drive its shadow from our door,<br>And make the night shine bright once more!\"",
	"completion": "The Night-Owl fades before the dawn,<br>But even so, you feel a yawn.<br>Perhaps it's time to get some rest?<br>Then on your bed, you see a nest!<br>A Night-Owl knows it can be great<br>To finish work and stay up late,<br>But your new pets will softly peep<br>To tell you when it's time to sleep.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "The Night-Owl",
	  "hp": 500,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Owl",
		  "text": "Owl (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Owl",
		  "text": "Owl (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Owl",
		  "text": "Owl (Egg)"
		}
	  ],
	  "gp": 37,
	  "exp": 275,
	  "unlock": "Unlocks Owl Eggs for purchase in the Market"
	},
	"key": "owl"
  },
  "peacock": {
	"text": "The Push-and-Pull Peacock",
	"notes": "You trek through the Taskwoods, wondering which of the enticing new goals you should pick. As you go deeper into the forest, you realize that you're not alone in your indecision. \"I could learn a new language, or go to the gym...\" @Cecily Perez mutters. \"I could sleep more,\" muses @Lilith of Alfheim, \"or spend time with my friends...\" It looks like @PainterProphet, @Pfeffernusse, and @Draayder are equally paralyzed by the overwhelming options.<br><br>You realize that these ever-more-demanding feelings aren't really your own... you've stumbled straight into the trap of the pernicious Push-and-Pull Peacock! Before you can run, it leaps from the bushes. With each head pulling you in conflicting directions, you start to feel burnout overcoming you. You can't defeat both foes at once, so you only have one option -- concentrate on the nearest task to fight back!",
	"completion": "The Push-and-Pull Peacock is caught off guard by your sudden conviction. Defeated by your single-minded drive, its heads merge back into one, revealing the most beautiful creature you've ever seen. \"Thank you,\" the peacock says. \"I’ve spent so long pulling myself in different directions that I lost sight of what I truly wanted. Please accept these eggs as a token of my gratitude.\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Push-and-Pull Peacock",
	  "hp": 300,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Peacock",
		  "text": "Peacock (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Peacock",
		  "text": "Peacock (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Peacock",
		  "text": "Peacock (Egg)"
		}
	  ],
	  "gp": 25,
	  "exp": 125,
	  "unlock": "Unlocks Peacock Eggs for purchase in the Market"
	},
	"key": "peacock"
  },
  "penguin": {
	"text": "The Fowl Frost",
	"notes": "Although it's a hot summer day in the southernmost tip of Habitica, an unnatural chill has fallen upon Lively Lake. Strong, frigid winds rush around as the shore begins to freeze over. Ice spikes jut up from the ground, pushing grass and dirt away. @Melynnrose and @Breadstrings run up to you.<br><br>\"Help!\" says @Melynnrose. \"We brought a giant penguin in to freeze the lake so we could all go ice skating, but we ran out of fish to feed him!\"<br><br>\"He got angry and is using his freeze breath on everything he sees!\" says @Breadstrings. \"Please, you have to subdue him before all of us are covered in ice!\" Looks like you need this penguin to... <em>cool down.</em>",
	"completion": "Upon the penguin's defeat, the ice melts away. The giant penguin settles down in the sunshine, slurping up an extra bucket of fish you found. He skates off across the lake, blowing gently downwards to create smooth, sparkling ice. What an odd bird! \"It appears he left behind a few eggs, as well,\" says @Painter de Cluster. <br><br>@Rattify laughs. \"Maybe these penguins will be a little more... chill?\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Frost Penguin",
	  "hp": 400,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Penguin",
		  "text": "Penguin (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Penguin",
		  "text": "Penguin (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Penguin",
		  "text": "Penguin (Egg)"
		}
	  ],
	  "gp": 31,
	  "exp": 200,
	  "unlock": "Unlocks Penguin Eggs for purchase in the Market"
	},
	"key": "penguin"
  },
  "pterodactyl": {
	"text": "The Pterror-dactyl",
	"notes": "You're taking a stroll along the peaceful Stoïkalm Cliffs when an evil screech rends the air. You turn to find a hideous creature flying towards you and are overcome by a powerful terror. As you turn to flee, @Lilith of Alfheim grabs you. \"Don't panic! It's just a Pterror-dactyl.\"<br><br>@Procyon P nods. \"They nest nearby, but they're attracted to the scent of negative Habits and undone Dailies.\"<br><br>\"Don't worry,\" @Katy133 says. \"We just need to be extra productive to defeat it!\" You are filled with a renewed sense of purpose and turn to face your foe.",
	"completion": "With one last screech the Pterror-dactyl plummets over the side of the cliff. You run forward to watch it soar away over the distant steppes. \"Phew, I'm glad that's over,\" you say. \"Me too,\" replies @GeraldThePixel. \"But look! It's left some eggs behind for us.\" @Edge passes you three eggs, and you vow to raise them in tranquility, surrounded by positive Habits and blue Dailies.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Pterror-dactyl",
	  "hp": 1000,
	  "str": 2,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Pterodactyl",
		  "text": "Pterodactyl (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Pterodactyl",
		  "text": "Pterodactyl (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Pterodactyl",
		  "text": "Pterodactyl (Egg)"
		}
	  ],
	  "gp": 67,
	  "exp": 650,
	  "unlock": "Unlocks Pterodactyl Eggs for purchase in the Market"
	},
	"key": "pterodactyl"
  },
  "rat": {
	"text": "The Rat King",
	"notes": "Garbage! Massive piles of unchecked Dailies are lying all across Habitica. The problem has become so serious that hordes of rats are now seen everywhere. You notice @Pandah petting one of the beasts lovingly. She explains that rats are gentle creatures that feed on unchecked Dailies. The real problem is that the Dailies have fallen into the sewer, creating a dangerous pit that must be cleared. As you descend into the sewers, a massive rat, with blood red eyes and mangled yellow teeth, attacks you, defending its horde. Will you cower in fear or face the fabled Rat King?",
	"completion": "Your final strike saps the gargantuan rat's strength, his eyes fading to a dull grey. The beast splits into many tiny rats, which scurry off in fright. You notice @Pandah standing behind you, looking at the once mighty creature. She explains that the citizens of Habitica have been inspired by your courage and are quickly completing all their unchecked Dailies. She warns you that we must be vigilant, for should we let down our guard, the Rat King will return. As payment, @Pandah offers you several rat eggs. Noticing your uneasy expression, she smiles, \"They make wonderful pets.\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Rat King",
	  "hp": 1200,
	  "str": 2.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Rat",
		  "text": "Rat (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Rat",
		  "text": "Rat (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Rat",
		  "text": "Rat (Egg)"
		}
	  ],
	  "gp": 80,
	  "exp": 800,
	  "unlock": "Unlocks Rat Eggs for purchase in the Market"
	},
	"key": "rat"
  },
  "rock": {
	"text": "Escape the Cave Creature",
	"notes": "Crossing Habitica's Meandering Mountains with some friends, you make camp one night in a beautiful cave laced with shining minerals. But when you wake up the next morning, the entrance has disappeared, and the floor of the cave is shifting underneath you.<br><br>\"The mountain's alive!\" shouts your companion @pfeffernusse. \"These aren't crystals - these are teeth!\"<br><br>@Painter de Cluster grabs your hand. \"We'll have to find another way out - stay with me and don't get distracted, or we could be trapped in here forever!\"",
	"completion": "Your diligence has allowed you to find a safe path through the living mountain. Standing in the sunshine, your friend @intune notices something glinting on the ground by the cave's exit. You stoop to pick it up, and see that it's a small rock with a vein of gold running through it. Beside it are a number of other rocks with rather peculiar shapes. They almost look like... eggs?",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Crystal Colossus",
	  "hp": 400,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Rock",
		  "text": "Rock (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Rock",
		  "text": "Rock (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Rock",
		  "text": "Rock (Egg)"
		}
	  ],
	  "gp": 31,
	  "exp": 200,
	  "unlock": "Unlocks Rock Eggs for purchase in the Market"
	},
	"key": "rock"
  },
  "rooster": {
	"text": "Rooster Rampage",
	"notes": "For years the farmer @extrajordanary has used Roosters as an alarm clock. But now a giant Rooster has appeared, crowing louder than any before – and waking up everyone in Habitica! The sleep-deprived Habiticans struggle through their daily tasks. @Pandoro decides the time has come to put a stop to this. \"Please, is there anyone who can teach that Rooster to crow quietly?\" You volunteer, approaching the Rooster early one morning – but it turns, flapping its giant wings and showing its sharp claws, and crows a battle cry.",
	"completion": "With finesse and strength, you have tamed the wild beast. Its ears, once filled with feathers and half-remembered tasks, are now clear as day. It crows at you quietly, snuggling its beak into your shoulder. The next day you’re set to take your leave, but @EmeraldOx runs up to you with a covered basket. “Wait! When I went into the farmhouse this morning, the Rooster had pushed these against the door where you slept. I think he wants you to have them.” You uncover the basket to see three delicate eggs.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Rooster",
	  "hp": 300,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Rooster",
		  "text": "Rooster (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Rooster",
		  "text": "Rooster (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Rooster",
		  "text": "Rooster (Egg)"
		}
	  ],
	  "gp": 25,
	  "exp": 125,
	  "unlock": "Unlocks Rooster Eggs for purchase in the Market"
	},
	"key": "rooster"
  },
  "sabretooth": {
	"text": "The Sabre Cat",
	"notes": "A roaring monster is terrorizing Habitica! The creature stalks through the wilds and woods, then bursts forth to attack before vanishing again. It's been hunting innocent pandas and frightening the flying pigs into fleeing their pens to roost in the trees. @InspectorCaracal and @icefelis explain that the Zombie Sabre Cat was set free while they were excavating in the ancient, untouched ice-fields of the Stoïkalm Steppes. \"It was perfectly friendly at first – I don't know what happened. Please, you have to help us recapture it! Only a champion of Habitica can subdue this prehistoric beast!\"",
	"completion": "After a long and tiring battle, you wrestle the Zombie Sabre Cat to the ground. As you are finally able to approach, you notice a nasty cavity in one of its sabre teeth. Realising the true cause of the cat's wrath, you're able to get the cavity filled by @Fandekasp, and advise everyone to avoid feeding their friend sweets in future. The Sabre Cat flourishes, and in gratitude, its tamers send you a generous reward – a clutch of sabretooth eggs!",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Zombie Sabre Cat",
	  "hp": 1000,
	  "str": 2,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Sabretooth",
		  "text": "Sabretooth (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Sabretooth",
		  "text": "Sabretooth (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Sabretooth",
		  "text": "Sabretooth (Egg)"
		}
	  ],
	  "gp": 67,
	  "exp": 650,
	  "unlock": "Unlocks Sabretooth Eggs for purchase in the Market"
	},
	"key": "sabretooth"
  },
  "seaserpent": {
	"text": "Danger in the Depths: Sea Serpent Strike!",
	"notes": "Your streaks have you feeling lucky—it’s the perfect time for a trip to the seahorse racetrack. You board the submarine at Diligent Docks and settle in for the trip to Dilatory, but you’ve barely submerged when an impact rocks the sub, sending its occupants tumbling. “What’s going on?” @AriesFaries shouts.<br><br>You glance through a nearby porthole and are shocked by the wall of shimmering scales passing by it. “Sea serpent!” Captain @Witticaster calls through the intercom. “Brace yourselves, it’s coming ‘round again!” As you grip the arms of your seat, your unfinished tasks flash before your eyes. ‘Maybe if we work together and complete them,’ you think, ‘we can drive this monster away!’",
	"completion": "Battered by your commitment, the sea serpent flees, disappearing into the depths. When you arrive in Dilatory, you breathe a sigh of relief before noticing @*~Seraphina~ approaching with three translucent eggs cradled in her arms. “Here, you should have these,” she says. “You know how to handle a sea serpent!” As you accept the eggs, you vow anew to remain steadfast in completing your tasks to ensure that there’s not a repeat occurrence.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "The Mighty Sea Serpent",
	  "hp": 1200,
	  "str": 2.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "SeaSerpent",
		  "text": "Sea Serpent (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "SeaSerpent",
		  "text": "Sea Serpent (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "SeaSerpent",
		  "text": "Sea Serpent (Egg)"
		}
	  ],
	  "gp": 80,
	  "exp": 800,
	  "unlock": "Unlocks Sea Serpent Eggs for purchase in the Market"
	},
	"key": "seaserpent"
  },
  "sheep": {
	"text": "The Thunder Ram",
	"notes": "As you wander the rural Taskan countryside with friends, taking a \"quick break\" from your obligations, you find a cozy yarn shop. You are so absorbed in your procrastination that you hardly notice the ominous clouds creep over the horizon. \"I've got a ba-a-a-ad feeling about this weather,\" mutters @Misceo, and you look up. The stormy clouds are swirling together, and they look a lot like a... \"We don't have time for cloud-gazing!\" @starsystemic shouts. \"It's attacking!\" The Thunder Ram hurtles forward, slinging bolts of lightning right at you!",
	"completion": "Impressed by your diligence, the Thunder Ram is drained of its fury. It launches three huge hailstones in your direction, and then fades away with a low rumble. Upon closer inspection, you discover that the hailstones are actually three fluffy eggs. You gather them up, and then stroll home under a blue sky.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Thunder Ram",
	  "hp": 300,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Sheep",
		  "text": "Sheep (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Sheep",
		  "text": "Sheep (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Sheep",
		  "text": "Sheep (Egg)"
		}
	  ],
	  "gp": 25,
	  "exp": 125,
	  "unlock": "Unlocks Sheep Eggs for purchase in the Market"
	},
	"key": "sheep"
  },
  "slime": {
	"text": "The Jelly Regent",
	"notes": "As you work on your tasks, you notice you are moving slower and slower. \"It's like walking through molasses,\" @Leephon grumbles. \"No, like walking through jelly!\" @starsystemic says. \"That slimy Jelly Regent has slathered his stuff all over Habitica. It's gumming up the works. Everybody is slowing down.\" You look around. The streets are slowly filling with clear, colorful ooze, and Habiticans are struggling to get anything done. As others flee the area, you grab a mop and prepare for battle!",
	"completion": "With a final jab, you trap the Jelly Regent in an over-sized donut, rushed in by @Overomega, @LordDarkly, and @Shaner, the quick-thinking leaders of the pastry club. As everyone is patting you on the back, you feel someone slip something into your pocket. It’s the reward for your sweet success: three Marshmallow Slime eggs.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Jelly Regent",
	  "hp": 400,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Slime",
		  "text": "Marshmallow Slime (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Slime",
		  "text": "Marshmallow Slime (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Slime",
		  "text": "Marshmallow Slime (Egg)"
		}
	  ],
	  "gp": 31,
	  "exp": 200,
	  "unlock": "Unlocks Marshmallow Slime Eggs for purchase in the Market"
	},
	"key": "slime"
  },
  "sloth": {
	"text": "The Somnolent Sloth",
	"notes": "As you and your party venture through the Somnolent Snowforest, you're relieved to see a glimmering of green among the white snowdrifts... until an enormous sloth emerges from the frosty trees! Green emeralds shimmer hypnotically on its back.<br><br>\"Hello, adventurers... why don't you take it slow? You've been walking for a while... so why not... stop? Just lie down, and rest...\"<br><br>You feel your eyelids grow heavy, and you realize: It's the Somnolent Sloth! According to @JaizakAripaik, it got its name from the emeralds on its back which are rumored to... send people to... sleep...<br><br>You shake yourself awake, fighting drowsiness. In the nick of time, @awakebyjava and @PainterProphet begin to shout spells, forcing your party awake. \"Now's our chance!\" @Kiwibot yells.",
	"completion": "You did it! As you defeat the Somnolent Sloth, its emeralds break off. \"Thank you for freeing me of my curse,\" says the sloth. \"I can finally sleep well, without those heavy emeralds on my back. Have these eggs as thanks, and you can have the emeralds too.\" The sloth gives you three sloth eggs and heads off for warmer climates.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Somnolent Sloth",
	  "hp": 400,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Sloth",
		  "text": "Sloth (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Sloth",
		  "text": "Sloth (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Sloth",
		  "text": "Sloth (Egg)"
		}
	  ],
	  "gp": 31,
	  "exp": 200,
	  "unlock": "Unlocks Sloth Eggs for purchase in the Market"
	},
	"key": "sloth"
  },
  "snail": {
	"text": "The Snail of Drudgery Sludge",
	"notes": "You're excited to begin questing in the abandoned Dungeons of Drudgery, but as soon as you enter, you feel the ground under your feet start to suck at your boots. You look up to the path ahead and see Habiticans mired in slime. @Overomega yells, \"They have too many unimportant tasks and dailies, and they're getting stuck on things that don't matter! Pull them out!\"<br><br>\"You need to find the source of the ooze,\" @Pfeffernusse agrees, \"or the tasks that they cannot accomplish will drag them down forever!\"<br><br>Pulling out your weapon, you wade through the gooey mud.... and encounter the fearsome Snail of Drudgery Sludge.",
	"completion": "You bring your weapon down on the great Snail's shell, cracking it in two, releasing a flood of water. The slime is washed away, and the Habiticans around you rejoice. \"Look!\" says @Misceo. \"There's a small group of snail eggs in the remnants of the muck.\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Snail of Drudgery Sludge",
	  "hp": 500,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Snail",
		  "text": "Snail (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Snail",
		  "text": "Snail (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Snail",
		  "text": "Snail (Egg)"
		}
	  ],
	  "gp": 37,
	  "exp": 275,
	  "unlock": "Unlocks Snail Eggs for purchase in the Market"
	},
	"key": "snail"
  },
  "snake": {
	"text": "The Serpent of Distraction",
	"notes": "It takes a hardy soul to live in the Sand Dunes of Distraction. The arid desert is hardly a productive place, and the shimmering dunes have led many a traveler astray. However, something has even the locals spooked. The sands have been shifting and upturning entire villages. Residents claim a monster with an enormous serpentine body lies in wait under the sands, and they have all pooled together a reward for whomever will help them find and stop it. The much-lauded snake charmers @EmeraldOx and @PainterProphet have agreed to help you summon the beast. Can you stop the Serpent of Distraction?",
	"completion": "With assistance from the charmers, you banish the Serpent of Distraction. Though you were happy to help the inhabitants of the Dunes, you can't help but feel a little sad for your fallen foe. While you contemplate the sights, @LordDarkly approaches you. \"Thank you! It's not much, but I hope this can express our gratitude properly.\" He hands you some Gold and... some Snake eggs! You will see that majestic animal again after all.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Serpent of Distraction",
	  "hp": 1100,
	  "str": 2.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Snake",
		  "text": "Snake (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Snake",
		  "text": "Snake (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Snake",
		  "text": "Snake (Egg)"
		}
	  ],
	  "gp": 73,
	  "exp": 725,
	  "unlock": "Unlocks Snake Eggs for purchase in the Market"
	},
	"key": "snake"
  },
  "spider": {
	"text": "The Icy Arachnid",
	"notes": "As the weather starts cooling down, delicate frost begins appearing on Habiticans' windowpanes in lacy webs... except for @Arcosine, whose windows are frozen completely shut by the Frost Spider currently taking up residence in his home. Oh dear.",
	"completion": "The Frost Spider collapses, leaving behind a small pile of frost and a few of her enchanted egg sacs. @Arcosine rather hurriedly offers them to you as a reward--perhaps you could raise some non-threatening spiders as pets of your own?",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Spider",
	  "hp": 400,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Spider",
		  "text": "Spider (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Spider",
		  "text": "Spider (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Spider",
		  "text": "Spider (Egg)"
		}
	  ],
	  "gp": 31,
	  "exp": 200,
	  "unlock": "Unlocks Spider Eggs for purchase in the Market"
	},
	"key": "spider"
  },
  "squirrel": {
	"text": "The Sneaky Squirrel",
	"notes": "You wake up and find you’ve overslept! Why didn’t your alarm go off? … How did an acorn get stuck in the ringer?<br><br>When you try to make breakfast, the toaster is stuffed with acorns. When you go to retrieve your mount, @Shtut is there, trying unsuccessfully to unlock their stable. They look into the keyhole. “Is that an acorn in there?”<br><br>@randomdaisy cries out, “Oh no! I knew my pet squirrels had gotten out, but I didn’t know they’d made such trouble! Can you help me round them up before they make any more of a mess?”<br><br>Following the trail of mischievously placed oak nuts, you track and catch the wayward sciurines, with @Cantras helping secure each one safely at home. But just when you think your task is almost complete, an acorn bounces off your helm! You look up to see a mighty beast of a squirrel, crouched in defense of a prodigious pile of seeds.<br><br>“Oh dear,” says @randomdaisy, softly. “She’s always been something of a resource guarder. We’ll have to proceed very carefully!” You circle up with your party, ready for trouble!",
	"completion": "With a gentle approach, offers of trade, and a few soothing spells, you’re able to coax the squirrel away from its hoard and back to the stables, which @Shtut has just finished de-acorning. They’ve set aside a few of the acorns on a worktable. “These ones are squirrel eggs! Maybe you can raise some that don’t play with their food quite so much.”",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Sneaky Squirrel",
	  "hp": 700,
	  "str": 2,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Squirrel",
		  "text": "Squirrel (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Squirrel",
		  "text": "Squirrel (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Squirrel",
		  "text": "Squirrel (Egg)"
		}
	  ],
	  "gp": 49,
	  "exp": 425,
	  "unlock": "Unlocks Squirrel Eggs for purchase in the Market"
	},
	"key": "squirrel"
  },
  "treeling": {
	"text": "The Tangle Tree",
	"notes": "It's the annual Garden Competition, and everyone is talking about the mysterious project which @aurakami has promised to unveil. You join the crowd on the day of the big announcement, and marvel at the introduction of a moving tree. @fuzzytrees explains that the tree will help with garden maintenance, showing how it can mow the lawn, trim the hedge and prune the roses all at the same time – until the tree suddenly goes wild, turning its secateurs on its creator! The crowd panics as everyone tries to flee, but you aren't afraid – you leap forward, ready to do battle.",
	"completion": "You dust yourself off as the last few leaves drift to the floor. In spite of the upset, the Garden Competition is now safe – although the tree you just reduced to a heap of wood chips won't be winning any prizes! \"Still a few kinks to work out there,\" @PainterProphet says. \"Perhaps someone else would do a better job of training the saplings. Do you fancy a go?\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Tangle Tree",
	  "hp": 600,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Treeling",
		  "text": "Treeling (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Treeling",
		  "text": "Treeling (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Treeling",
		  "text": "Treeling (Egg)"
		}
	  ],
	  "gp": 43,
	  "exp": 350,
	  "unlock": "Unlocks Treeling Eggs for purchase in the Market"
	},
	"key": "treeling"
  },
  "trex": {
	"text": "King of the Dinosaurs",
	"notes": "Now that ancient creatures from the Stoïkalm Steppes are roaming throughout all of Habitica, @Urse has decided to adopt a full-grown Tyrannosaur. What could go wrong?<br><br>Everything.",
	"completion": "The wild dinosaur finally stops its rampage and settles down to make friends with the giant roosters. @Urse beams down at it. \"They're not such terrible pets, after all! They just need a little discipline. Here, take some Tyrannosaur eggs for yourself.\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Flesh Tyrannosaur",
	  "hp": 800,
	  "str": 2,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "TRex",
		  "text": "Tyrannosaur (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "TRex",
		  "text": "Tyrannosaur (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "TRex",
		  "text": "Tyrannosaur (Egg)"
		}
	  ],
	  "gp": 55,
	  "exp": 500,
	  "unlock": "Unlocks Tyrannosaur Eggs for purchase in the Market"
	},
	"key": "trex"
  },
  "trex_undead": {
	"text": "The Dinosaur Unearthed",
	"notes": "As the ancient dinosaurs from the Stoïkalm Steppes roam through Habit City, a cry of terror emanates from the Grand Museum. @Baconsaur shouts, \"The Tyrannosaur skeleton in the museum is stirring! It must have sensed its kin!\" The bony beast bares its teeth and clatters towards you. How can you defeat a creature that is already dead? You'll have to strike fast before it heals itself!",
	"completion": "The Tyrannosaur's glowing eyes grow dark, and it settles back onto its familiar pedestal. Everyone sighs with relief. \"Look!\" @Baconsaur says. \"Some of the fossilized eggs are shiny and new! Maybe they'll hatch for you.\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Skeletal Tyrannosaur",
	  "hp": 500,
	  "str": 2,
	  "rage": {
		"title": "Skeleton Healing",
		"description": "This bar fills when you don't complete your Dailies. When it is full, the Skeletal Tyrannosaur will heal 30% of its remaining health!",
		"value": 50,
		"healing": 0.3,
		"effect": "`Skeletal Tyrannosaur uses SKELETON HEALING!`\n\nThe monster lets forth an unearthly roar, and some of its damaged bones knit back together!"
	  },
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "TRex",
		  "text": "Tyrannosaur (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "TRex",
		  "text": "Tyrannosaur (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "TRex",
		  "text": "Tyrannosaur (Egg)"
		}
	  ],
	  "gp": 55,
	  "exp": 500,
	  "unlock": "Unlocks Tyrannosaur Eggs for purchase in the Market"
	},
	"key": "trex_undead"
  },
  "triceratops": {
	"text": "The Trampling Triceratops",
	"notes": "The snow-capped Stoïkalm Volcanoes are always bustling with hikers and sight-seers. One tourist, @plumilla, calls over a crowd. \"Look! I enchanted the ground to glow so that we can play field games on it for our outdoor activity Dailies!\" Sure enough, the ground is swirling with glowing red patterns. Even some of the prehistoric pets from the area come over to play.<br><br>Suddenly, there's a loud snap -- a curious Triceratops has stepped on @plumilla's wand! It's engulfed in a burst of magic energy, and the ground starts shaking and growing hot. The Triceratops' eyes shine red, and it roars and begins to stampede!<br><br>\"That's not good,\" calls @McCoyly, pointing in the distance. Each magic-fueled stomp is causing the volcanoes to erupt, and the glowing ground is turning to lava beneath the dinosaur's feet! Quickly, you must hold off the Trampling Triceratops until someone can reverse the spell!",
	"completion": "With quick thinking, you herd the creature towards the soothing Stoïkalm Steppes so that @*~Seraphina~* and @PainterProphet can reverse the lava spell without distraction. The calming aura of the Steppes takes effect, and the Triceratops curls up as the volcanoes go dormant once more. @PainterProphet passes you some eggs that were rescued from the lava. \"Without you, we wouldn't have been able to concentrate to stop the eruptions. Give these pets a good home.\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Trampling Triceratops",
	  "hp": 1200,
	  "str": 2.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Triceratops",
		  "text": "Triceratops (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Triceratops",
		  "text": "Triceratops (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Triceratops",
		  "text": "Triceratops (Egg)"
		}
	  ],
	  "gp": 80,
	  "exp": 800,
	  "unlock": "Unlocks Triceratops Eggs for purchase in the Market"
	},
	"key": "triceratops"
  },
  "turtle": {
	"text": "Guide the Turtle",
	"notes": "Help! This giant sea turtle cannot find her way to her nesting beach. She returns there every year to lay her eggs, but this year Inkomplete Bay is filled with toxic Task Flotsam made of red Dailies and unchecked To Do's. \"She's thrashing in a panic!\" @JessicaChase says.<br><br>@UncommonCriminal nods. \"It's because her guiding senses are fogged and confused.\"<br><br>@Scarabsi grabs your arm. \"Can you help clear the Task Flotsam blocking her path? It may be hazardous, but we have to help her!\"",
	"completion": "Your valiant work has cleared the waters for our sea turtle to find her beach. You, @Bambin, and @JaizakAripaik watch as she buries her brood of eggs deep in the sand so they can grow and hatch into hundreds of little sea turtles. Ever the lady, she gives you three eggs each, asking that you feed and nurture them so one day they become big sea turtles themselves.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Task Flotsam",
	  "hp": 300,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Turtle",
		  "text": "Turtle (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Turtle",
		  "text": "Turtle (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Turtle",
		  "text": "Turtle (Egg)"
		}
	  ],
	  "gp": 25,
	  "exp": 125,
	  "unlock": "Unlocks Turtle Eggs for purchase in the Market"
	},
	"key": "turtle"
  },
  "unicorn": {
	"text": "Convincing the Unicorn Queen",
	"notes": "Conquest Creek has become muddied, destroying Habit City's fresh water supply! Luckily, @Lukreja knows an old legend that claims that a unicorn's horn can purify the foulest of waters. Together with your intrepid guide @UncommonCriminal, you hike through the frozen peaks of the Meandering Mountains. Finally, at the icy summit of Mount Habitica itself, you find the Unicorn Queen amid the glittering snows. \"Your pleas are compelling,\" she tells you. \"But first you must prove that you are worthy of my aid!\"",
	"completion": "Impressed by your diligence and strength, the Unicorn Queen at last agrees that your cause is worthy. She allows you to ride on her back as she soars to the source of Conquest Creek. As she lowers her golden horn to the befouled waters, a brilliant blue light rises from the water’s surface. It is so blinding that you are forced to close your eyes. When you open them a moment later, the unicorn is gone. However, @rosiesully lets out a cry of delight: the water is now clear, and three shining eggs rest at the creek’s edge.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "The Unicorn Queen",
	  "hp": 600,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Unicorn",
		  "text": "Unicorn (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Unicorn",
		  "text": "Unicorn (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Unicorn",
		  "text": "Unicorn (Egg)"
		}
	  ],
	  "gp": 43,
	  "exp": 350,
	  "unlock": "Unlocks Unicorn Eggs for purchase in the Market"
	},
	"key": "unicorn"
  },
  "velociraptor": {
	"text": "The Veloci-Rapper",
	"notes": "You’re sharing honey cakes with @*~Seraphina~*, @Procyon P, and @Lilith of Alfheim by a lake in the Stoïkalm Steppes. Suddenly, a mournful voice interrupts your picnic.<br><br><em>My Habits took a hit, I missed my Dailies,<br>I’m losing it, sinking with doubt and maybes,<br>At the top of my game I used to be so fly,<br>But now I just let my Due Dates go by.</em><br><br>@*~Seraphina~* peers behind a stand of grass. “It’s the Veloci-Rapper. It seems... distraught?”<br><br>You pump a fist in determination. “There's only one thing to do. Rap battle time!”",
	"completion": "You burst through the grass, confronting the Veloci-Rapper.<br><br><em>See here, rapper, you’re no quitter,<br>You’re Bad Habits' hardest hitter!<br>Check off your To Do's like a boss,<br>Don’t mourn over one day’s loss!</em><br><br>Filled with renewed confidence, it bounds off to freestyle another day, leaving behind three eggs where it sat.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Veloci-Rapper",
	  "hp": 900,
	  "str": 2,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Velociraptor",
		  "text": "Velociraptor (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Velociraptor",
		  "text": "Velociraptor (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Velociraptor",
		  "text": "Velociraptor (Egg)"
		}
	  ],
	  "gp": 63,
	  "exp": 575,
	  "unlock": "Unlocks Velociraptor Eggs for purchase in the Market"
	},
	"key": "velociraptor"
  },
  "whale": {
	"text": "Wail of the Whale",
	"notes": "You arrive at the Diligent Docks, hoping to take a submarine to watch the Dilatory Derby. Suddenly, a deafening bellow forces you to stop and cover your ears. \"Thar she blows!\" cries Captain @krazjega, pointing to a huge, wailing whale. \"It's not safe to send out the submarines while she's thrashing around!\"<br><br>\"Quick,\" calls @UncommonCriminal. \"Help me calm the poor creature so we can figure out why she's making all this noise!\"",
	"completion": "After much hard work, the whale finally ceases her thunderous cry. \"Looks like she was drowning in waves of negative habits,\" @zoebeagle explains. \"Thanks to your consistent effort, we were able to turn the tides!\" As you step into the submarine, several whale eggs bob towards you, and you scoop them up.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Wailing Whale",
	  "hp": 500,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Whale",
		  "text": "Whale (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Whale",
		  "text": "Whale (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Whale",
		  "text": "Whale (Egg)"
		}
	  ],
	  "gp": 37,
	  "exp": 275,
	  "unlock": "Unlocks Whale Eggs for purchase in the Market"
	},
	"key": "whale"
  },
  "yarn": {
	"text": "A Tangled Yarn",
	"notes": "It’s such a pleasant day that you decide to take a walk through the Taskan Countryside. As you pass by its famous yarn shop, a piercing scream startles the birds into flight and scatters the butterflies into hiding. You run towards the source and see @Arcosine running up the path towards you. Behind him, a horrifying creature consisting of yarn, pins, and knitting needles is clicking and clacking ever closer.<br><br>The shopkeepers race after him, and @stefalupagus grabs your arm, out of breath. \"Looks like all of his unfinished projects\" <em>gasp gasp</em> \"have transformed the yarn from our Yarn Shop\" <em>gasp gasp</em> \"into a tangled mass of Yarnghetti!\"<br><br>\"Sometimes, life gets in the way and a project is abandoned, becoming ever more tangled and confused,\" says @khdarkwolf. \"The confusion can even spread to other projects, until there are so many half-finished works running around that no one gets anything done!\"<br><br>It’s time to make a choice: complete your stalled projects… or decide to unravel them for good. Either way, you'll have to increase your productivity quickly before the Dread Yarnghetti spreads confusion and discord to the rest of Habitica!",
	"completion": "With a feeble swipe of a pin-riddled appendage and a weak roar, the Dread Yarnghetti finally unravels into a pile of yarn balls.<br><br>\"Take care of this yarn,\" shopkeeper @JinjooHat says, handing them to you. \"If you feed them and care for them properly, they'll grow into new and exciting projects that just might make your heart take flight…\"",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "The Dread Yarnghetti",
	  "hp": 500,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Yarn",
		  "text": "Yarn (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Yarn",
		  "text": "Yarn (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Yarn",
		  "text": "Yarn (Egg)"
		}
	  ],
	  "gp": 37,
	  "exp": 275,
	  "unlock": "Unlocks Yarn Eggs for purchase in the Market"
	},
	"key": "yarn"
  },
  "amber": {
	"text": "The Amber Alliance",
	"notes": "You’re sitting in the Tavern with @beffymaroo and @-Tyr- when @Vikte bursts through the door and excitedly tells you about the rumors of another type of Magic Hatching Potion hidden in the Taskwoods. Having completed your Dailies, the three of you immediately agree to help @Vikte on their search. After all, what’s the harm in a little adventure?<br><br>After walking through the Taskwoods for hours, you’re beginning to regret joining such a wild chase. You’re about to head home, when you hear a surprised yelp and turn to see a huge lizard with shiny amber scales coiled around a tree, clutching @Vikte in her claws. @beffymaroo reaches for her sword.<br><br>“Wait!” cries @-Tyr-. “It’s the Trerezin! She’s not dangerous, just dangerously clingy!”",
	"completion": "“Trerezin?” @-Tyr- says calmly. “Could you let @Vikte go? I don’t think they’re enjoying being so high up.”<br><br>The Trerezin’s amber skin blushes crimson and she gently lowers @Vikte to the ground. “My apologies! It’s been so long since I’ve had any guests that I’ve forgotten my manners!” She slithers forward to greet you properly before disappearing into her treehouse, and returning with an armful of Amber Hatching Potions as thank-you gifts!<br><br>“Magic Potions!” @Vikte gasps.<br><br>“Oh, these old things?” The Trerezin's tongue flickers as she thinks. “How about this? I’ll give you this whole stack if you promise to visit me every so often...”<br><br>And so you leave the Taskwoods, excited to tell everyone about the new potions--and your new friend!",
	"value": 4,
	"category": "hatchingPotion",
	"boss": {
	  "name": "Trerezin",
	  "hp": 300,
	  "str": 1.25,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "Amber",
		  "text": "Amber Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Amber",
		  "text": "Amber Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Amber",
		  "text": "Amber Hatching Potion"
		}
	  ],
	  "gp": 50,
	  "exp": 100,
	  "unlock": "Unlocks Amber Hatching Potions for purchase in the Market"
	},
	"key": "amber"
  },
  "blackPearl": {
	"text": "A Startling Starry Idea",
	"notes": "You’ve been feeling uninspired lately, so when @jjgame83 suggests a trip to Lively Lake, you jump at the chance for a change of scenery. As @QuartzFox lays out a picnic on the shore, you find something glinting in the shallows. A strange black pearl.<br><br>“I wish I had a new idea,” you sigh.<br><br>A chill washes over the shore. The lake turns to black ink. The stars rise as noon becomes midnight in a heartbeat.<br><br>“Those aren’t good signs,” says @PixelStormArt.<br><br>A towering mass of arms bursts from the lake in a spray of foam, and from its beak, it booms: “BEHOLD ASTEROIDEA, THE IDEA FROM BEYOND THE STARS!”<br><br>A tentacle slams down onto the picnic basket. Good idea or not, you leap into action.",
	"completion": "As you batter and blast the beastie, it sheds black pearls across the sands. Their glistening surfaces catch your eye as you dodge another smashing tentacle.<br><br>You may be in mortal peril, but you can’t help thinking of how beautifully they glimmer. Then you can’t help thinking that this is a terrible time for a new potion idea.<br><br>Suddenly the monster freezes. @jjgame83 and @PixelStormArt exchange baffled looks and lower their weapons.<br><br>“YOU HAVE YOUR WISH, MORTAL. MY WORK IS DONE.”<br><br>Asteroidea vanishes, and the sky and waters clear. @QuartzFox stares at you. “Care to explain?”<br><br>You try your best, and together you fill the picnic basket with black pearls. An afternoon of alchemy later, you have to admit it was a pretty good idea.",
	"value": 4,
	"category": "hatchingPotion",
	"boss": {
	  "name": "Asteroidea",
	  "hp": 725,
	  "str": 1.75,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "BlackPearl",
		  "text": "Black Pearl Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "BlackPearl",
		  "text": "Black Pearl Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "BlackPearl",
		  "text": "Black Pearl Hatching Potion"
		}
	  ],
	  "gp": 50,
	  "exp": 450,
	  "unlock": "Unlocks Black Pearl Hatching Potions for purchase in the Market"
	},
	"key": "blackPearl"
  },
  "bronze": {
	"text": "Brazen Beetle Battle",
	"notes": "On a refreshing break between tasks, you and some friends take a stroll through the forest trails of the Taskwoods. You come upon a large hollow log and a sparkle from inside catches your attention.<br><br>Why, it's a cache of Magic Hatching Potions! The shimmering bronze liquid swirls gently in the bottles, and @Hachiseiko reaches to pick one up to examine it.<br><br>“Halt!” hisses a voice from behind you. It's a gigantic beetle with a carapace of gleaming bronze, raising her clawed feet in a fighting stance. “Those are my potions, and if you wish to earn them, you must prove yourself in a gentlefolks' duel!”",
	"completion": "“Well met, warrior!” says the beetle as she settles to the ground. Is she smiling? It's hard to tell from those mandibles. “You've truly earned these potions!”<br<br>“Oh wow, we’ve never gotten a reward like this for winning a battle before!” says @UncommonCriminal, turning a shimmering bottle in their hand. “Let's go hatch our new pets!”",
	"value": 4,
	"category": "hatchingPotion",
	"boss": {
	  "name": "Brazen Beetle",
	  "hp": 800,
	  "str": 2,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "Bronze",
		  "text": "Bronze Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Bronze",
		  "text": "Bronze Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Bronze",
		  "text": "Bronze Hatching Potion"
		}
	  ],
	  "gp": 63,
	  "exp": 575,
	  "unlock": "Unlocks Bronze Hatching Potions for purchase in the Market"
	},
	"key": "bronze"
  },
  "fluorite": {
	"text": "A Bright Fluorite Fright",
	"notes": "Unusual minerals are in high demand these days, so you and a few friends have trekked deep into the mines of the Meandering Mountains, in search of exciting ores. It’s a long and boring expedition, until @-Tyr- stumbles over a large rock, sitting right in the middle of the tunnel.<br><br>“This should help brighten things up,” says @nirbhao, before conjuring up an orb of light.<br><br>A warm brightness fills the tunnel, but something odd starts happening to that large rock. Feeding on the magical light, it begins to glow with fluorescent blues, greens and purples. Then it rears upright into a vaguely humanoid shape, complete with glowing red eyes fixed right on you! You jump into action with flashing spells and shining weapons.",
	"completion": "As you do battle, the crystal creature seems more and more distracted by the light show you are creating. “So shiny…” it mutters.<br><br>“Of course!” @nirbhao exclaims. “It must be a fluorite elemental. All they want is light to let them glow. Let’s help it shine.”<br><br>The elemental giggles happily and glows all the brighter as you light up torches and motes of magic. It’s so glad to be shining again that it leads you to a rich deposit of fluorite crystals.<br><br>“This is the perfect ingredient for a new hatching potion,” says @nirbhao. “One which will make our pets as bright as our new fluorescent friend.”",
	"value": 4,
	"category": "hatchingPotion",
	"boss": {
	  "name": "Fluorite Elemental",
	  "hp": 1200,
	  "str": 2,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "Fluorite",
		  "text": "Fluorite Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Fluorite",
		  "text": "Fluorite Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Fluorite",
		  "text": "Fluorite Hatching Potion"
		}
	  ],
	  "gp": 70,
	  "exp": 750,
	  "unlock": "Unlocks Fluorite Hatching Potions for purchase in the Market"
	},
	"key": "fluorite"
  },
  "onyx": {
	"text": "The Onyx Odyssey",
	"notes": "@Vikte, @aspiring_advocate, and @starsystemic know you’ve been feeling unmotivated lately and decide that a fun day out might boost your mood. However, “fun” apparently means going deep-sea diving to search the Dark Crevasse for treasure! You don your diving gear, board the boat, and row towards the ancient city of Dilatory. As you travel, you ask them what kind of treasure you’re looking for.<br><br>“Pluto runes!” says @Vikte.<br><br>“No, Leo runes!” says @aspiring_advocate.<br><br>“No, onyx stones!” says @starsystemic.<br><br>As they argue among themselves, you look into the ocean and see the cave entrance directly below you! Excited, you jump up, and dive into the sea, leaving the trio to watch as you swim towards the Dark Crevasse to search for the treasure yourself.",
	"completion": "As you enter the Dark Crevasse, the mantis shrimps that live there dart away, seemingly scared of you. However, they quickly return carrying small coloured orbs, and you realise that these are the treasures that the others wanted! You pocket a healthy collection of each type, say goodbye to the shrimps, and head back to the boat where the others help you aboard.<br><br>“Where have you been?” @Vikte exclaims. In response you show them the treasure you’ve collected.<br><br>“These ingredients make Onyx Magic Hatching Potions!”, @aspiring_advocate says excitedly as you begin to head back to shore.<br><br>“So… we can hatch Onyx pets!” @starsystemic smiles. “Didn’t we say this would be fun?”<br><br>You smile back, excited for your new pets, and ready to finish your tasks!",
	"value": 4,
	"category": "hatchingPotion",
	"collect": {
	  "onyxStone": {
		"text": "Onyx Stones",
		"count": 25
	  },
	  "plutoRune": {
		"text": "Pluto Runes",
		"count": 10
	  },
	  "leoRune": {
		"text": "Leo Runes",
		"count": 10
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "Onyx",
		  "text": "Onyx Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Onyx",
		  "text": "Onyx Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Onyx",
		  "text": "Onyx Hatching Potion"
		}
	  ],
	  "gp": 50,
	  "exp": 100,
	  "unlock": "Unlocks Onyx Hatching Potions for purchase in the Market"
	},
	"key": "onyx"
  },
  "pinkMarble": {
	"text": "Calm the Corrupted Cupid",
	"notes": "After hearing rumors about a cave in the Meandering Mountains that has pink rocks and dust shooting out of it, your party starts to investigate. As you approach the cave, there is indeed a huge pink dust cloud – and strangely, you hear a tiny voice's battle cry, followed by the sound of shattering rock.<br><br>@Empress42 accidentally inhales some of the dust and suddenly feels dreamy and less productive. “Same here!” says @QuartzFox, “I'm suddenly fantasizing about a person that I barely know!”<br><br>@a_diamond peeks into the cave and finds a little being zipping around and smashing pink marbled rock to dust. “Take cover! This Cupid has been corrupted and is using his magic to cause limerence and unrealistic infatuations! We have to subdue him!”",
	"completion": "You manage to pin the little guy down at last – he was much tougher and faster than expected. Before he stirs again, you take away his quiver of glowing arrows. He blinks and suddenly looks around in surprise. “To escape my own sorrow and heartbreak for a while I pricked myself with one of my arrows… I don't remember anything after that!”<br><br>He is just about to flee the cave, notices that @Loremi has taken a sample of the marble dust and grins. “Try using some of this pink marble dust in a potion! Nurture the pets that hatch from it and you will find that real relationships are born from communication, mutual trust and care. I wish you luck, and I wish you love!”",
	"value": 4,
	"category": "hatchingPotion",
	"boss": {
	  "name": "Cupido",
	  "hp": 1200,
	  "str": 2,
	  "rage": {
		"title": "Pink Punch",
		"description": "This bar fills when you don't complete your Dailies. When it is full, Cupido will take away some of your party's pending damage!",
		"value": 50,
		"progressDrain": 0.5,
		"effect": "`Cupido uses Pink Punch!` That wasn't affectionate at all! Your partymates are taken aback. Pending damage reduced."
	  },
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "PinkMarble",
		  "text": "Pink Marble Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "PinkMarble",
		  "text": "Pink Marble Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "PinkMarble",
		  "text": "Pink Marble Hatching Potion"
		}
	  ],
	  "gp": 75,
	  "exp": 800,
	  "unlock": "String 'questPinkMarbleUnlockText' not found."
	},
	"key": "pinkMarble"
  },
  "ruby": {
	"text": "Ruby Rapport",
	"notes": "The normally bustling peaks of the Stoïkalm Volcanoes lie silent in the snow. “I suppose the hikers and sight-seers are hibernating?” @gully says to you and @Aspiring_Advocate. “That makes our search easier.”<br><br>As you reach the summit, the chill wind merges with the steam billowing from the crater. “There!” @Aspiring_Advocate exclaims, pointing toward a hot spring. “What better place to find cool runes of Aquarius and passionate runes of Venus than where ice and fire meet?”<br><br>The three of you hurry toward the hot spring. “According to my research,” @Aspiring_Advocate says, “combining the runes with heart-shaped rubies will create a hatching potion that can foster friendship and love!”<br><br>Excited by the prospect of a new discovery, you all smile. “All right,” @gully says, “let's start searching!”",
	"completion": "With the necessary items safely packed away, the three of you rush back to Habit City and meet in @beffymaroo's lab. “Excellent work!” @beffymaroo says. “You've gathered the ingredients for the potion!”<br><br>@beffymaroo carefully combines the runes and the rubies to create a brilliant red potion and pours some of it on two pet eggs. As you observe the results, you notice that the two pets seem completely uninterested in one another!<br><br>“Did it not work?” @gully asks. But before anyone can answer, you suddenly realize that it isn't the potion that creates friendship and love, but rather it is the experience of working together toward a common goal. You come away from the quest having gained some new friends...and some flashy new pets!",
	"value": 4,
	"category": "hatchingPotion",
	"collect": {
	  "rubyGem": {
		"text": "Ruby Gems",
		"count": 25
	  },
	  "venusRune": {
		"text": "Venus Runes",
		"count": 10
	  },
	  "aquariusRune": {
		"text": "Aquarius Zodiac Runes",
		"count": 10
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "Ruby",
		  "text": "Ruby Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Ruby",
		  "text": "Ruby Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Ruby",
		  "text": "Ruby Hatching Potion"
		}
	  ],
	  "gp": 50,
	  "exp": 100,
	  "unlock": "Unlocks Ruby Hatching Potions for purchase in the Market"
	},
	"key": "ruby"
  },
  "silver": {
	"text": "The Silver Solution",
	"notes": "The recent discovery of Bronze Hatching Potions has all of Habitica talking. Could potions of even brighter metals be possible? You head to Habit City's central Public Library, accompanied by @QuartzFox and @starsystemic, and gather up great armloads of books on alchemy to study.<br><br>After hours of eye-straining labor, @QuartzFox lets out a not-quite-library-appropriate shout of triumph. “Aha! I've found it!” You hurry over to see. “A Silver Hatching Potion can be made with runes of the zodiac sign Cancer, dissolved in pure silver melted over flame infused with the power of Moon runes.”<br><br>“We'll need a lot of those ingredients,” muses @starsystemic. “In case an attempt goes wrong.”<br><br>“There's only one place to find huge quantities of such random crafting materials,” says @Edge, standing in the shadow of the stacks with arms crossed. Have they been there the whole time? “The Dungeons of Drudgery. Let's get going.”",
	"completion": "You've delved. You've dredged. You've scavenged. At last you emerge from the Dungeons, laden with runes and bars of silver, covered in sludge but exhilarated with success. You journey back to Habit City and set to work in an alchemy lab. You and @starsystemic follow the formulas @QuartzFox found, under the careful supervision of @Edge. Finally, in a great puff of glitter and smoke, your concoction settles into the familiar viscosity of a Hatching Potion!<br><br>@Edge scoops the mixture into vials and grins. “Let's give it a try, shall we? Anyone got any Eggs?”<br><br>You rush to the Stables, wondering what shining secrets may yet remain undiscovered...",
	"value": 4,
	"category": "hatchingPotion",
	"collect": {
	  "silverIngot": {
		"text": "Silver Ingots",
		"count": 20
	  },
	  "moonRune": {
		"text": "Moon Runes",
		"count": 15
	  },
	  "cancerRune": {
		"text": "Cancer Zodiac Runes",
		"count": 15
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "Silver",
		  "text": "Silver Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Silver",
		  "text": "Silver Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Silver",
		  "text": "Silver Hatching Potion"
		}
	  ],
	  "gp": 50,
	  "exp": 100,
	  "unlock": "Unlocks Silver Hatching Potions for purchase in the Market"
	},
	"key": "silver"
  },
  "stone": {
	"text": "A Maze of Moss",
	"notes": "You open the gates to the Fortress of Neglect only to be surprised by the moss that has grown all over the statues, rocks and surfaces in the garden. “Oh no, the garden has been neglected for too long!” says @jjgame83.<br><br>“Well, it's never too late to start tending to the garden,” @PixelStormArt says enthusiastically, “but where shall we start tackling the maze of moss?”<br><br>“We can make and follow a plan so we don't get lost,” says @QuartzFox.<br><br>While clearing away the mossy rocks, @starsystemic spots Mars and Capricorn runes hidden underneath. “What are these for? Let's take them back to the Habit City Library to look them up when we're finished.”<br><br>That's assuming you find your way back out of here at all, you think, but don't say aloud.",
	"completion": "The work clearing overgrowth and moving loose stones taxes you to the limits of your strength. But you divide the work among the team, and place stones in the paths behind you to help you find your way back to the others. The runes you find bolster your strength and determination, too, and in the end the garden doesn't look so neglected at all!<br><br>You convene at the Library as @starsystemic suggested, and find a Magic Potion formula that uses the runes you collected. “This is an unexpected reward for attending to our neglected tasks,” says @jjgame83.<br><br>@QuartzFox agrees, “And that is on top of having a beautiful garden to enjoy with our pets.”<br><br>“Let's start making some a-mazing Mossy Stone Hatching Potions!” says @starsystemic, and everyone joins in happily.",
	"value": 4,
	"category": "hatchingPotion",
	"collect": {
	  "mossyStone": {
		"text": "Mossy Stones",
		"count": 25
	  },
	  "marsRune": {
		"text": "Mars Runes",
		"count": 10
	  },
	  "capricornRune": {
		"text": "Capricorn Runes",
		"count": 10
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "MossyStone",
		  "text": "Mossy Stone Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "MossyStone",
		  "text": "Mossy Stone Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "MossyStone",
		  "text": "Mossy Stone Hatching Potion"
		}
	  ],
	  "gp": 50,
	  "exp": 100,
	  "unlock": "Unlocks Mossy Stone Hatching Potions for purchase in the Market"
	},
	"key": "stone"
  },
  "turquoise": {
	"text": "Turquoise Treasure Toil",
	"notes": "@gawrone runs into your room holding their Habitican Diploma in one hand and an extraordinarily large and dusty leather-bound tome in the other.<br><br>“You’ll never guess what I’ve discovered!” they say. “The reason the Flourishing Fields are so fertile is that they were once covered with a vast ocean. It’s rumored that an ancient people once inhabited that ocean floor in enchanted cities. I’ve used forgotten maps to find the most likely location! Get your shovel!”<br><br>The next evening you meet up, @QuartzFox and @starsystemic joining the party, and begin to dig. Deep in the ground you find a rune, with a turquoise gem nearby!<br><br>“Keep digging!” @gawrone urges. “If we find enough, we can make one of their ancient potions and history at the same time!”",
	"completion": "Hot and sweaty, your team finally stops to rest beside the upturned dirt and looks at the pile of runes and gems you’ve found.<br><br>“Unbelievable,” murmurs @QuartzFox. “This will rewrite the history books.”<br><br>“Let me take these materials back to Habitica University for analysis,” says @gawrone. “There should be plenty to study and to make some turquoise potions for all of us! Who knows what else we could find buried around here?”<br><br>@starsystemic chimes in: “It’s amazing how much you can get accomplished with some hard work!”",
	"value": 4,
	"category": "hatchingPotion",
	"collect": {
	  "turquoiseGem": {
		"text": "Turquoise Gems",
		"count": 25
	  },
	  "sagittariusRune": {
		"text": "Sagittarius Runes",
		"count": 10
	  },
	  "neptuneRune": {
		"text": "Neptune Runes",
		"count": 10
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "Turquoise",
		  "text": "Turquoise Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Turquoise",
		  "text": "Turquoise Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Turquoise",
		  "text": "Turquoise Hatching Potion"
		}
	  ],
	  "gp": 50,
	  "exp": 100,
	  "unlock": "Unlocks Turquoise Hatching Potions for purchase in the Market"
	},
	"key": "turquoise"
  },
  "evilsanta": {
	"event": null,
	"text": "Trapper Santa",
	"notes": "You hear agonized roars deep in the icefields. You follow the growls - punctuated by the sound of cackling - to a clearing in the woods, where you see a fully-grown polar bear. She's caged and shackled, fighting for her life. Dancing atop the cage is a malicious little imp wearing a castaway costume. Vanquish Trapper Santa, and save the beast!<br><br><strong>Note</strong>: “Trapper Santa” awards a stackable quest achievement but gives a rare mount that can only be added to your stable once.",
	"addlNotes": "Note that Trapper Santa and Find the Cub have stackable quest achievements but give a rare pet and mount that can only be added to your stable once.",
	"completion": "Trapper Santa squeals in anger, and bounces off into the night. The grateful she-bear, through roars and growls, tries to tell you something. You take her back to the stables, where Matt Boch the Beast Master listens to her tale with a gasp of horror. She has a cub! He ran off into the icefields when mama bear was captured.",
	"value": 4,
	"category": "pet",
	"boss": {
	  "name": "Trapper Santa",
	  "hp": 300,
	  "str": 1,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "mounts",
		  "key": "BearCub-Polar",
		  "text": "Polar Bear (Mount)"
		}
	  ],
	  "gp": 20,
	  "exp": 100
	},
	"key": "evilsanta"
  },
  "evilsanta2": {
	"event": null,
	"text": "Find the Cub",
	"notes": "When Trapper Santa captured the polar bear mount, her cub ran off into the icefields. You hear twig-snaps and snow crunch through the crystalline sound of the forest. Paw prints! You start racing to follow the trail. Find all the prints and broken twigs, and retrieve the cub!<br><br><strong>Note</strong>: “Find the Cub” awards a stackable quest achievement but gives a rare pet that can only be added to your stable once.",
	"addlNotes": "Note that Trapper Santa and Find the Cub have stackable quest achievements but give a rare pet and mount that can only be added to your stable once.",
	"completion": "You've found the cub! It will keep you company forever.",
	"value": 4,
	"category": "pet",
	"collect": {
	  "tracks": {
		"text": "Tracks",
		"count": 20
	  },
	  "branches": {
		"text": "Broken Twigs",
		"count": 10
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "pets",
		  "key": "BearCub-Polar",
		  "text": "Polar Bear (Pet)"
		}
	  ],
	  "gp": 20,
	  "exp": 100
	},
	"key": "evilsanta2"
  },
  "egg": {
	"event": null,
	"text": "Egg Hunt",
	"notes": "Overnight, strange plain eggs have appeared everywhere: in Matt's stables, behind the counter at the Tavern, and even among the pet eggs at the Marketplace! What a nuisance! \"Nobody knows where they came from, or what they might hatch into,\" says Megan, \"but we can't just leave them laying around! Work hard and search hard to help me gather up these mysterious eggs. Maybe if you collect enough, there will be some extras left over for you...\"",
	"completion": "You did it! In gratitude, <strong>Megan</strong> gives you ten of the eggs. \"I bet the hatching potions will dye them beautiful colors! And I wonder what will happen when they turn into mounts....\"",
	"value": 1,
	"category": "pet",
	"collect": {
	  "plainEgg": {
		"text": "Plain Eggs",
		"count": 40
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Egg",
		  "text": "Plain Egg"
		},
		{
		  "type": "eggs",
		  "key": "Egg",
		  "text": "Plain Egg"
		},
		{
		  "type": "eggs",
		  "key": "Egg",
		  "text": "Plain Egg"
		},
		{
		  "type": "eggs",
		  "key": "Egg",
		  "text": "Plain Egg"
		},
		{
		  "type": "eggs",
		  "key": "Egg",
		  "text": "Plain Egg"
		},
		{
		  "type": "eggs",
		  "key": "Egg",
		  "text": "Plain Egg"
		},
		{
		  "type": "eggs",
		  "key": "Egg",
		  "text": "Plain Egg"
		},
		{
		  "type": "eggs",
		  "key": "Egg",
		  "text": "Plain Egg"
		},
		{
		  "type": "eggs",
		  "key": "Egg",
		  "text": "Plain Egg"
		},
		{
		  "type": "eggs",
		  "key": "Egg",
		  "text": "Plain Egg"
		}
	  ],
	  "gp": 0,
	  "exp": 0
	},
	"key": "egg"
  },
  "waffle": {
	"event": null,
	"text": "Waffling with the Fool: Disaster Breakfast!",
	"notes": "“April Fool!” storms a flustered Lady Glaciate. “You said your dessert-themed prank was ‘over with and completely cleaned up’!”<br><br>“Why, it was and is, my dear,” replies the Fool, puzzled. “And I am the most honest of Fools. What's wrong?”<br><br>“There's a giant sugary monster approaching Habit City!”<br><br>“Hmm,” muses the Fool. “I did raid a few lairs for the mystic reagents for my last event. Maybe I attracted some unwanted attention. Is it the Saccharine Serpent? The Torte-oise? Tiramisu Rex?”<br><br>“No! It's some sort of... Awful Waffle!”<br><br>“Huh. That's a new one! Perhaps it spawned from all the ambient shenanigan energy.” He turns to you and @beffymaroo with a lopsided smile. “I don't suppose you'd be available for some heroics?”",
	"completion": "Battered and buttered but triumphant, you savor sweet victory as the Awful Waffle collapses into a pool of sticky goo.<br><br>“Wow, you really creamed that monster,” says Lady Glaciate, impressed.<br><br>“A piece of cake!” beams the April Fool.<br><br>“Kind of a shame, though,” says @beffymaroo. “It looked good enough to eat.”<br><br>The Fool takes a set of potion bottles from somewhere in his cape, fills them with the syrupy leavings of the Waffle, and mixes in a pinch of sparkling dust. The liquid swirls with color--new Hatching Potions! He tosses them into your arms. “All that adventure has given me an appetite. Who wants to join me for breakfast?”",
	"value": 4,
	"category": "hatchingPotion",
	"boss": {
	  "name": "Awful Waffle",
	  "hp": 500,
	  "str": 2,
	  "rage": {
		"title": "Maple Mire",
		"description": "Maple Mire: This bar fills when you don't complete your Dailies. When it is full, the Awful Waffle will subtract from the pending damage that party members have built up!",
		"value": 50,
		"progressDrain": 0.5,
		"effect": "`Awful Waffle uses MAPLE MIRE!` Sticky sappy syrup slows your swings and spells! Pending damage reduced."
	  },
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "Dessert",
		  "text": "Confection Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Dessert",
		  "text": "Confection Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Dessert",
		  "text": "Confection Hatching Potion"
		}
	  ],
	  "gp": 40,
	  "exp": 500,
	  "unlock": "Unlocks Confection Hatching Potions for purchase in the Market"
	},
	"key": "waffle"
  },
  "virtualpet": {
	"event": null,
	"text": "Virtual Mayhem with the April Fool: The Beepening",
	"notes": "It’s a quiet and pleasant spring morning in Habitica, a week past a memorable April Fool’s Day. You and @Beffymaroo are at the stables tending to your pets (who are still a bit confused from their time spent virtually!).<br><br>In the distance you hear a rumble and a beeping noise, soft at first but increasing in volume as if it’s getting closer. An egg-shape appears on the horizon and as it nears, beeping ever louder, you see that it is a gigantic virtual pet!<br><br>“Oh no,” @Beffymaroo exclaims, “I think the April Fool left some unfinished business with this big fella here, he seems to want attention!”<br><br>The virtual pet beeps angrily, throwing a virtual tantrum and whomping ever closer.",
	"completion": "Some careful button pushing seems to have fulfilled the virtual pet’s mysterious needs, and finally it has quieted down and appears content.<br><br>Suddenly in a burst of confetti, the April Fool appears with a basket full of strange potions emitting soft beeps.<br><br>“What timing, April Fool,” @Beffymaroo says with a wry smile. “I suspect this large beeping fellow is an acquaintance of yours.”<br><br>“Uh, yes,” the Fool says, sheepishly. “So sorry about that, and thank you both for taking care of Wotchimon! Take these potions in the way of thanks, they can bring your Virtual pets back anytime you like!”<br><br>You’re not 100% sure you’re on board with all the beeping, but they’re sure cute so it’s worth a shot!",
	"value": 4,
	"category": "hatchingPotion",
	"boss": {
	  "name": "Wotchimon",
	  "hp": 500,
	  "str": 2,
	  "rage": {
		"title": "The Beepening",
		"description": "This bar fills when you don't complete your Dailies. When it is full, the Wotchimon will take away some of your party's pending damage!",
		"value": 50,
		"progressDrain": 0.5,
		"effect": "`Wotchimon uses Bothersome Beep!` Wotchimon sounds a bothersome beep, and its happiness bar suddenly disappears! Pending damage reduced."
	  },
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "VirtualPet",
		  "text": "Virtual Pet Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "VirtualPet",
		  "text": "Virtual Pet Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "VirtualPet",
		  "text": "Virtual Pet Hatching Potion"
		}
	  ],
	  "gp": 40,
	  "exp": 500,
	  "unlock": "Unlocks Virtual Pet Hatching Potion for purchase in the Market"
	},
	"key": "virtualpet"
  },
  "atom1": {
	"text": "Attack of the Mundane, Part 1: Dish Disaster!",
	"notes": "You reach the shores of Washed-Up Lake for some well-earned relaxation... But the lake is polluted with unwashed dishes! How did this happen? Well, you simply cannot allow the lake to be in this state. There is only one thing you can do: clean the dishes and save your vacation spot! Better find some soap to clean up this mess. A lot of soap...",
	"completion": "After some thorough scrubbing, all the dishes are stacked safely on the shore! You stand back and proudly survey your hard work.",
	"group": "questGroupAtom",
	"prerequisite": {
	  "lvl": 15
	},
	"value": 4,
	"lvl": 15,
	"category": "unlockable",
	"collect": {
	  "soapBars": {
		"text": "Bars of Soap",
		"count": 20
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "quests",
		  "key": "atom2",
		  "text": "The SnackLess Monster (Scroll)",
		  "onlyOwner": true
		}
	  ],
	  "gp": 7,
	  "exp": 50
	},
	"key": "atom1"
  },
  "atom2": {
	"text": "Attack of the Mundane, Part 2: The SnackLess Monster",
	"notes": "Phew, this place is looking a lot nicer with all these dishes cleaned. Maybe, you can finally have some fun now. Oh - there seems to be a pizza box floating in the lake. Well, what's one more thing to clean really? But alas, it is no mere pizza box! With a sudden rush the box lifts from the water to reveal itself to be the head of a monster. It cannot be! The fabled SnackLess Monster?! It is said it has existed hidden in the lake since prehistoric times: a creature spawned from the leftover food and trash of the ancient Habiticans. Yuck!",
	"completion": "With a deafening cry, and five delicious types of cheese bursting from its mouth, the Snackless Monster falls to pieces. Well done, brave adventurer! But wait... is there something else wrong with the lake?",
	"group": "questGroupAtom",
	"previous": "atom1",
	"prereqQuests": [
	  "atom1"
	],
	"value": 4,
	"lvl": 15,
	"category": "unlockable",
	"boss": {
	  "name": "The SnackLess Monster",
	  "hp": 300,
	  "str": 1,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "quests",
		  "key": "atom3",
		  "text": "The Laundromancer (Scroll)",
		  "onlyOwner": true
		}
	  ],
	  "gp": 20,
	  "exp": 100
	},
	"key": "atom2"
  },
  "atom3": {
	"text": "Attack of the Mundane, Part 3: The Laundromancer",
	"notes": "Just when you thought that your trials had ended, Washed-Up Lake begins to froth violently. “HOW DARE YOU!” booms a voice from beneath the water's surface. A robed, blue figure emerges from the water, wielding a magic toilet brush. Filthy laundry begins to bubble up to the surface of the lake. \"I am the Laundromancer!\" he angrily announces. \"You have some nerve - washing my delightfully dirty dishes, destroying my pet, and entering my domain with such clean clothes. Prepare to feel the soggy wrath of my anti-laundry magic!\"",
	"group": "questGroupAtom",
	"previous": "atom2",
	"prereqQuests": [
	  "atom1",
	  "atom2"
	],
	"completion": "The wicked Laundromancer has been defeated! Clean laundry falls in piles all around you. Things are looking much better around here. As you begin to wade through the freshly pressed armor, a glint of metal catches your eye, and your gaze falls upon a gleaming helm. The original owner of this shining item may be unknown, but as you put it on, you feel the warming presence of a generous spirit. Too bad they didn't sew on a nametag.",
	"value": 4,
	"lvl": 15,
	"category": "unlockable",
	"boss": {
	  "name": "The Laundromancer",
	  "hp": 800,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "gear",
		  "key": "head_special_2",
		  "text": "Nameless Helm"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Base",
		  "text": "Base Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Base",
		  "text": "Base Hatching Potion"
		}
	  ],
	  "gp": 25,
	  "exp": 125
	},
	"key": "atom3"
  },
  "goldenknight1": {
	"text": "The Golden Knight, Part 1: A Stern Talking-To",
	"notes": "The Golden Knight has been getting on poor Habiticans' cases. Didn't do all of your Dailies? Checked off a negative Habit? She will use this as a reason to harass you about how you should follow her example. She is the shining example of a perfect Habitican, and you are naught but a failure. Well, that is not nice at all! Everyone makes mistakes. They should not have to be met with such negativity for it. Perhaps it is time you gather some testimonies from hurt Habiticans and give the Golden Knight a stern talking-to!",
	"completion": "Look at all these testimonies! Surely this will be enough to convince the Golden Knight. Now all you need to do is find her.",
	"group": "questGroupGoldenknight",
	"value": 4,
	"lvl": 40,
	"category": "unlockable",
	"collect": {
	  "testimony": {
		"text": "Testimonies",
		"count": 60
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "quests",
		  "key": "goldenknight2",
		  "text": "The Golden Knight Part 2: Gold Knight (Scroll)",
		  "onlyOwner": true
		}
	  ],
	  "gp": 15,
	  "exp": 120
	},
	"key": "goldenknight1"
  },
  "goldenknight2": {
	"text": "The Golden Knight, Part 2: Gold Knight",
	"notes": "Armed with dozens of Habiticans' testimonies, you finally confront the Golden Knight. You begin to recite the Habitcans' complaints to her, one by one. \"And @Pfeffernusse says that your constant bragging-\" The knight raises her hand to silence you and scoffs, \"Please, these people are merely jealous of my success. Instead of complaining, they should simply work as hard as I! Perhaps I shall show you the power you can attain through diligence such as mine!\" She raises her morningstar and prepares to attack you!",
	"completion": "The Golden Knight lowers her Morningstar in consternation. “I apologize for my rash outburst,” she says. “The truth is, it’s painful to think that I’ve been inadvertently hurting others, and it made me lash out in defense… but perhaps I can still apologize?”",
	"group": "questGroupGoldenknight",
	"value": 4,
	"previous": "goldenknight1",
	"prereqQuests": [
	  "goldenknight1"
	],
	"lvl": 40,
	"category": "unlockable",
	"boss": {
	  "name": "Gold Knight",
	  "hp": 1000,
	  "str": 3,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "quests",
		  "key": "goldenknight3",
		  "text": "The Golden Knight Part 3: The Iron Knight (Scroll)",
		  "onlyOwner": true
		}
	  ],
	  "gp": 75,
	  "exp": 750
	},
	"key": "goldenknight2"
  },
  "goldenknight3": {
	"text": "The Golden Knight, Part 3: The Iron Knight",
	"notes": "@Jon Arinbjorn cries out to you to get your attention. In the aftermath of your battle, a new figure has appeared. A knight coated in stained-black iron slowly approaches you with sword in hand. The Golden Knight shouts to the figure, \"Father, no!\" but the knight shows no signs of stopping. She turns to you and says, \"I am sorry. I have been a fool, with a head too big to see how cruel I have been. But my father is crueler than I could ever be. If he isn't stopped he'll destroy us all. Here, use my morningstar and halt the Iron Knight!\"",
	"group": "questGroupGoldenknight",
	"completion": "With a satisfying clang, the Iron Knight falls to his knees and slumps over. \"You are quite strong,\" he pants. \"I have been humbled, today.\" The Golden Knight approaches you and says, \"Thank you. I believe we have gained some humility from our encounter with you. I will speak with my father and explain the complaints against us. Perhaps, we should begin apologizing to the other Habiticans.\" She mulls over in thought before turning back to you. \"Here: as our gift to you, I want you to keep my morningstar. It is yours now.\"",
	"previous": "goldenknight2",
	"prereqQuests": [
	  "goldenknight1",
	  "goldenknight2"
	],
	"value": 4,
	"lvl": 40,
	"category": "unlockable",
	"boss": {
	  "name": "The Iron Knight",
	  "hp": 1700,
	  "str": 3.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "food",
		  "key": "Honey",
		  "text": "Honey (Food)"
		},
		{
		  "type": "food",
		  "key": "Honey",
		  "text": "Honey (Food)"
		},
		{
		  "type": "food",
		  "key": "Honey",
		  "text": "Honey (Food)"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Golden",
		  "text": "Golden Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Golden",
		  "text": "Golden Hatching Potion"
		},
		{
		  "type": "gear",
		  "key": "shield_special_goldenknight",
		  "text": "Mustaine's Milestone Mashing Morning Star (Off-hand Weapon)"
		}
	  ],
	  "gp": 900,
	  "exp": 1500
	},
	"key": "goldenknight3"
  },
  "moon1": {
	"text": "Lunar Battle, Part 1: Find the Mysterious Shards",
	"notes": "Habiticans have been distracted from their tasks by something strange: twisted shards of stone are appearing across the land. Worried, @Starsystemic the Seer summons you to her tower. She says, \"I've been reading alarming omens about these shards, which have been blighting the land and driving hardworking Habiticans to distraction. I can track the source, but first I'll need to examine the shards. Can you bring some to me?\"",
	"group": "questGroupMoon",
	"completion": "@Starsystemic disappears into her tower to examine the shards you gathered. \"This may be more complicated than we feared,\" says @Beffymaroo, her trusted assistant. \"It will take us some time to discover the cause. Keep checking in every day, and when we know more, we'll send you the next quest scroll.\"",
	"value": 4,
	"category": "unlockable",
	"unlockCondition": {
	  "condition": "login reward",
	  "incentiveThreshold": 7,
	  "text": "7 Check-ins"
	},
	"collect": {
	  "shard": {
		"text": "Lunar Shards",
		"count": 20
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "gear",
		  "key": "head_special_lunarWarriorHelm",
		  "text": "Lunar Warrior Helm (Headgear)"
		}
	  ],
	  "gp": 7,
	  "exp": 50
	},
	"key": "moon1"
  },
  "moon2": {
	"text": "Lunar Battle, Part 2: Stop the Overshadowing Stress",
	"notes": "After studying the shards, @Starsystemic the Seer has some bad news. \"An ancient monster is approaching Habitica, and it is causing terrible stress to befall the citizens. I can draw the shadow out of people's hearts and into this tower, where it will take physical form, but you’ll need to defeat it before it breaks loose and spreads again.\" You nod, and she starts to chant. Dancing shadows fill the room, pressing tightly together. The cold wind swirls, the darkness deepens. The Overshadowing Stress rises from the floor, grins like a nightmare made real... and strikes!",
	"group": "questGroupMoon",
	"completion": "The shadow explodes in a puff of dark air, leaving the room brighter and your hearts lighter. The stress blanketing Habitica is diminished, and you can all breathe a sigh of relief. Still, as you look up at the sky, you sense that this is not over: the monster knows someone destroyed its shadow. \"We'll keep careful watch in the coming weeks,\" says @Starsystemic, \"and I'll send you a quest scroll when it manifests.\"",
	"previous": "moon1",
	"prereqQuests": [
	  "moon1"
	],
	"value": 4,
	"category": "unlockable",
	"unlockCondition": {
	  "condition": "login reward",
	  "incentiveThreshold": 22,
	  "text": "22 Check-ins"
	},
	"boss": {
	  "name": "Overshadowing Stress",
	  "hp": 100,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "gear",
		  "key": "armor_special_lunarWarriorArmor",
		  "text": "Lunar Warrior Armor (Armor)"
		}
	  ],
	  "gp": 37,
	  "exp": 275
	},
	"key": "moon2"
  },
  "moon3": {
	"text": "Lunar Battle, Part 3: The Monstrous Moon",
	"notes": "You get @Starsystemic's urgent scroll at the stroke of midnight and gallop to her tower. \"The monster is using the full moon to try to cross over to our realm,\" she says. \"If it succeeds, the shockwave of stress will be overwhelming!\"<br><br>To your dismay, you see that the monster is indeed using the moon to manifest. A glowing eye opens in its rocky surface, and a long tongue rolls from a gaping, fanged mouth. There's no way you'll let it fully emerge!",
	"group": "questGroupMoon",
	"completion": "The emerging monster bursts into shadow, and the moon turns silver as the danger passes. The dragons start singing again, and the stars sparkle with a soothing light. @Starsystemic the Seer bends down and picks up a lunar shard. It shines silver in her hand, before changing into a magnificent crystal scythe.",
	"previous": "moon2",
	"prereqQuests": [
	  "moon1",
	  "moon2"
	],
	"value": 4,
	"category": "unlockable",
	"unlockCondition": {
	  "condition": "login reward",
	  "incentiveThreshold": 40,
	  "text": "40 Check-ins"
	},
	"boss": {
	  "name": "Monstrous Moon",
	  "hp": 1000,
	  "str": 2,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "gear",
		  "key": "weapon_special_lunarScythe",
		  "text": "Lunar Scythe (Two-Handed Weapon)"
		}
	  ],
	  "gp": 67,
	  "exp": 650
	},
	"key": "moon3"
  },
  "moonstone1": {
	"text": "Recidivate, Part 1: The Moonstone Chain",
	"notes": "A terrible affliction has struck Habiticans. Bad Habits thought long-dead are rising back up with a vengeance. Dishes lie unwashed, textbooks linger unread, and procrastination runs rampant!<br><br>You track some of your own returning Bad Habits to the Swamps of Stagnation and discover the culprit: the ghostly Necromancer, Recidivate. You rush in, weapons swinging, but they slide through her specter uselessly.<br><br>\"Don’t bother,\" she hisses with a dry rasp. \"Without a chain of moonstones, nothing can harm me – and master jeweler @aurakami scattered all the moonstones across Habitica long ago!\" Panting, you retreat... but you know what you must do.",
	"completion": "At last, you manage to pull the final moonstone from the swampy sludge. It’s time to go fashion your collection into a weapon that can finally defeat Recidivate!",
	"group": "questGroupMoonstone",
	"value": 4,
	"lvl": 60,
	"category": "unlockable",
	"collect": {
	  "moonstone": {
		"text": "Moonstones",
		"count": 100
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "quests",
		  "key": "moonstone2",
		  "text": "Recidivate, Part 2: Recidivate the Necromancer (Scroll)",
		  "onlyOwner": true
		}
	  ],
	  "gp": 50,
	  "exp": 100
	},
	"key": "moonstone1"
  },
  "moonstone2": {
	"text": "Recidivate, Part 2: Recidivate the Necromancer",
	"notes": "The brave weaponsmith @InspectorCaracal helps you fashion the enchanted moonstones into a chain. You’re ready to confront Recidivate at last, but as you enter the Swamps of Stagnation, a terrible chill sweeps over you.<br><br>Rotting breath whispers in your ear. \"Back again? How delightful...\" You spin and lunge, and under the light of the moonstone chain, your weapon strikes solid flesh. \"You may have bound me to the world once more,\" Recidivate snarls, \"but now it is time for you to leave it!\"",
	"completion": "Recidivate staggers backwards under your final blow, and for a moment, your heart brightens – but then she throws back her head and lets out a horrible laugh. What’s happening?",
	"group": "questGroupMoonstone",
	"value": 4,
	"lvl": 60,
	"previous": "moonstone1",
	"prereqQuests": [
	  "moonstone1"
	],
	"category": "unlockable",
	"boss": {
	  "name": "The Necromancer",
	  "hp": 1500,
	  "str": 3,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "quests",
		  "key": "moonstone3",
		  "text": "Recidivate, Part 3: Recidivate Transformed (Scroll)",
		  "onlyOwner": true
		}
	  ],
	  "gp": 500,
	  "exp": 1000
	},
	"key": "moonstone2"
  },
  "moonstone3": {
	"text": "Recidivate, Part 3: Recidivate Transformed",
	"notes": "Laughing wickedly, Recidivate crumples to the ground, and you strike at her again with the moonstone chain. To your horror, Recidivate seizes the gems, eyes burning with triumph.<br><br>\"Foolish creature of flesh!\" she shouts. \"These moonstones will restore me to a physical form, true, but not as you imagined. As the full moon waxes from the dark, so too does my power flourish, and from the shadows I summon the specter of your most feared foe!\"<br><br>A sickly green fog rises from the swamp, and Recidivate’s body writhes and contorts into a shape that fills you with dread – the undead body of Vice, horribly reborn.",
	"group": "questGroupMoonstone",
	"completion": "Your breath comes hard and sweat stings your eyes as the undead Wyrm collapses. The remains of Recidivate dissipate into a thin grey mist that clears quickly under the onslaught of a refreshing breeze, and you hear the distant, rallying cries of Habiticans defeating their Bad Habits for once and for all.<br><br>@Baconsaur the beast master swoops down on a gryphon. \"I saw the end of your battle from the sky, and I was greatly moved. Please, take this enchanted tunic – your bravery speaks of a noble heart, and I believe you were meant to have it.\"",
	"previous": "moonstone2",
	"prereqQuests": [
	  "moonstone1",
	  "moonstone2"
	],
	"value": 4,
	"lvl": 60,
	"category": "unlockable",
	"boss": {
	  "name": "Necro-Vice",
	  "hp": 2000,
	  "str": 3.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "gear",
		  "key": "armor_special_2",
		  "text": "Jean Chalard's Noble Tunic"
		},
		{
		  "type": "food",
		  "key": "RottenMeat",
		  "text": "Rotten Meat (Food)"
		},
		{
		  "type": "food",
		  "key": "RottenMeat",
		  "text": "Rotten Meat (Food)"
		},
		{
		  "type": "food",
		  "key": "RottenMeat",
		  "text": "Rotten Meat (Food)"
		},
		{
		  "type": "food",
		  "key": "RottenMeat",
		  "text": "Rotten Meat (Food)"
		},
		{
		  "type": "food",
		  "key": "RottenMeat",
		  "text": "Rotten Meat (Food)"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Zombie",
		  "text": "Zombie Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Zombie",
		  "text": "Zombie Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Zombie",
		  "text": "Zombie Hatching Potion"
		}
	  ],
	  "gp": 900,
	  "exp": 1500
	},
	"key": "moonstone3"
  },
  "vice1": {
	"text": "Vice, Part 1: Free Yourself of the Dragon's Influence",
	"notes": "They say there lies a terrible evil in the caverns of Mt. Habitica. A monster whose presence twists the wills of the strong heroes of the land, turning them towards bad habits and laziness! The beast is a grand dragon of immense power and comprised of the shadows themselves: Vice, the treacherous Shadow Wyrm. Brave Habiteers, stand up and defeat this foul beast once and for all, but only if you believe you can stand against its immense power.<br><br>How can you expect to fight the beast if it already has control over you? Don't fall victim to laziness and vice! Work hard to fight against the dragon's dark influence and dispel his hold on you!",
	"completion": "With Vice's influence over you dispelled, you feel a surge of strength you didn't know you had return to you. Congratulations! But a more frightening foe awaits...",
	"group": "questGroupVice",
	"value": 4,
	"lvl": 30,
	"category": "unlockable",
	"boss": {
	  "name": "Vice's Shade",
	  "hp": 750,
	  "str": 1.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "quests",
		  "key": "vice2",
		  "text": "Vice Part 2 (Scroll)",
		  "onlyOwner": true
		}
	  ],
	  "gp": 20,
	  "exp": 100
	},
	"key": "vice1"
  },
  "vice2": {
	"text": "Vice, Part 2: Find the Lair of the Wyrm",
	"notes": "Confident in yourselves and your ability to withstand the influence of Vice the Shadow Wyrm, your Party makes its way to Mt. Habitica. You approach the entrance to the mountain's caverns and pause. Swells of shadows, almost like fog, wisp out from the opening. It is near impossible to see anything in front of you. The light from your lanterns seem to end abruptly where the shadows begin. It is said that only magical light can pierce the dragon's infernal haze. If you can find enough light crystals, you could make your way to the dragon.",
	"completion": "As you lift the final crystal aloft, the shadows are dispelled, and your path forward is clear. With a quickening heart, you step forward into the cavern.",
	"group": "questGroupVice",
	"value": 4,
	"lvl": 30,
	"category": "unlockable",
	"previous": "vice1",
	"prereqQuests": [
	  "vice1"
	],
	"collect": {
	  "lightCrystal": {
		"text": "Light Crystals",
		"count": 30
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "quests",
		  "key": "vice3",
		  "text": "Vice Part 3 (Scroll)",
		  "onlyOwner": true
		}
	  ],
	  "gp": 20,
	  "exp": 75
	},
	"key": "vice2"
  },
  "vice3": {
	"text": "Vice, Part 3: Vice Awakens",
	"notes": "After much effort, your party has discovered Vice's lair. The hulking monster eyes your party with distaste. As shadows swirl around you, a voice whispers through your head, \"More foolish citizens of Habitica come to stop me? Cute. You'd have been wise not to come.\" The scaly titan rears back its head and prepares to attack. This is your chance! Give it everything you've got and defeat Vice once and for all!",
	"group": "questGroupVice",
	"completion": "The shadows dissipate from the cavern and a steely silence falls. My word, you've done it! You have defeated Vice! You and your party may finally breathe a sigh of relief. Enjoy your victory, brave Habiteers, but take the lessons you've learned from battling Vice and move forward. There are still Habits to be done and potentially worse evils to conquer!",
	"previous": "vice2",
	"prereqQuests": [
	  "vice1",
	  "vice2"
	],
	"value": 4,
	"lvl": 30,
	"category": "unlockable",
	"boss": {
	  "name": "Vice, the Shadow Wyrm",
	  "hp": 1500,
	  "str": 3,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "gear",
		  "key": "weapon_special_2",
		  "text": "Stephen Weber's Shaft of the Dragon"
		},
		{
		  "type": "eggs",
		  "key": "Dragon",
		  "text": "Dragon (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Dragon",
		  "text": "Dragon (Egg)"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Shade",
		  "text": "Shade Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Shade",
		  "text": "Shade Hatching Potion"
		}
	  ],
	  "gp": 100,
	  "exp": 1000
	},
	"key": "vice3"
  },
  "robot": {
	"text": "Mysterious Mechanical Marvels!",
	"notes": "At Max Capacity labs, @Rev is putting the finishing touches on their newest invention, a robotic Accountability Buddy, when a strange metal vehicle suddenly appears in a plume of smoke, inches from the robot’s Fluctuation Detector! Its occupants, two strange figures dressed in silver, emerge and remove their space helmets, revealing themselves as @FolleMente and @McCoyly.<br><br>“I hypothesize that there was an anomaly in our productivity implementation,” @FolleMente says sheepishly.<br><br>@McCoyly crosses her arms. “That means they neglected to complete their Dailies, which I postulate led to the disintegration of our Productivity Stabilizer. It’s an essential component to time travel that needs consistency to work properly. Our accomplishments power our movement through time and space! I don’t have time to explain further, @Rev. You’ll discover it in 37 years, or perhaps your allies the Mysterious Time Travelers can fill you in. For now, can you help us fix our time machine?”",
	"completion": "As @Rev and the Accountability Buddy place the last bolt in place, the time machine buzzes to life. @FolleMente and @McCoyly jump aboard. “Thanks for the assist! We’ll see you in the future! By the way, these should help you with your next invention!” With that, the time travelers disappear, but left behind in the wreckage of the old Productivity Stabilizer are three clockwork eggs. Perhaps these will be the crucial components for a new production line of Accountability Buddies!",
	"value": 1,
	"category": "timeTravelers",
	"collect": {
	  "bolt": {
		"text": "Bolts",
		"count": 15
	  },
	  "gear": {
		"text": "Gears",
		"count": 10
	  },
	  "spring": {
		"text": "Springs",
		"count": 10
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "eggs",
		  "key": "Robot",
		  "text": "Robot (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Robot",
		  "text": "Robot (Egg)"
		},
		{
		  "type": "eggs",
		  "key": "Robot",
		  "text": "Robot (Egg)"
		}
	  ],
	  "gp": 40,
	  "exp": 75,
	  "unlock": "Unlocks purchasable Robot Eggs in the Market"
	},
	"key": "robot"
  },
  "solarSystem": {
	"text": "A Voyage of Cosmic Concentration",
	"notes": "Your party is traveling through the cosmos, seeing the sights in a fantastical airship designed by talented space engineer @gawrone. Its meditationite propulsion relies on the calm of your Party to stay on course.<br><br>Up ahead in the clouds of sparkling galaxies, you spot an ominously pulsing star. “Keep your focus,” warns @beffymaroo. “If we get too distracted when we’re passing that nova, the pull between the star and our ship may veer us off course!”<br><br>As you near the star, pulses of strange energy come toward the ship.<br><br>“They’re Diversionoids, thought creatures trying to get us lost,” says @SabreCat. “If we can let them flow by without carrying us away, we should be able to stay pointed toward our goal!”",
	"completion": "Through careful practice, you and the crew manage to keep the Diversionoids from sweeping you overboard, just by noticing and acknowledging them without letting them take over. As you pass safely by the pulsing star, @gawrone notices a cluster of floating bottles and pulls them aboard. Each appears to contain a tiny solar system!<br><br>“Well, looks like our hard work has brought us some fine rewards!” says @beffymaroo. “Let’s see what celestial wonders might appear if we hatch pet eggs with these new potions.”",
	"value": 1,
	"category": "timeTravelers",
	"boss": {
	  "name": "Diversionoids",
	  "hp": 1500,
	  "str": 2.5,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "SolarSystem",
		  "text": "Solar System Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "SolarSystem",
		  "text": "Solar System Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "SolarSystem",
		  "text": "Solar System Hatching Potion"
		}
	  ],
	  "gp": 90,
	  "exp": 900,
	  "unlock": "Unlocks Solar System Hatching Potions for purchase in the Market"
	},
	"key": "solarSystem"
  },
  "windup": {
	"text": "A Whirl with a Wind-Up Warrior",
	"notes": "Habit City is seldom quiet, but you weren’t prepared for the cacophony of creaks, squeaks and screams escaping Good Timekeeping, Habitica’s finest clockwork emporium. You sigh--you just wanted your watch fixed. The proprietor, known only as “Great and Powerful”, tumbles out the door, pursued by a clanking copper colossus!<br><br>“Ki-! Ki-! Ki!” it clangs, arms smashing up and down. Its gears grind and screech in protest.<br><br>“My robot Clankton has gone mad! It’s trying to kill me!” the supposedly Powerful one shrieks.<br><br>Even with a broken watch, you can tell when it’s time to fight. You leap forward to defend the panicking watchmaker. @Vikte and @a_diamond also step up to help!<br><br>“Ki-! Ki-! Ki-!” Clankton chants with each blow. “Mew!”<br><br>Wait, was that mechanical mewling amidst the murderous monotone?",
	"completion": "As you dodge the attacks, you notice something odd: a stripy brass tail sticking out of the robot’s chassis. You plunge a hand amid the grinding gears and pull out… a trembling wind-up tiger cub. It snuggles against your shirt.<br><br>The clockwork robot immediately stops flailing and smiles, its cogs clicking back into place. “Ki-Ki-Kitty! Kitty got in me!”<br><br>“Great!” the Powerful says, blushing. “I’ve been working hard on these wind-up pet potions. I guess I lost track of my new creations. I’ve been missing my ‘Tidy the workshop’ daily a lot lately…”<br><br>You follow the tinkerer and Clankton inside. Parts, tools and potions cover every surface. “Powerful” takes your watch, but hands you a few potions.<br><br>“Take these. Clearly they’ll be safer with you!”",
	"value": 1,
	"category": "timeTravelers",
	"boss": {
	  "name": "Clankton",
	  "hp": 1000,
	  "str": 1,
	  "def": 1
	},
	"drop": {
	  "items": [
		{
		  "type": "hatchingPotions",
		  "key": "Windup",
		  "text": "Wind-Up Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Windup",
		  "text": "Wind-Up Hatching Potion"
		},
		{
		  "type": "hatchingPotions",
		  "key": "Windup",
		  "text": "Wind-Up Hatching Potion"
		}
	  ],
	  "gp": 50,
	  "exp": 425,
	  "unlock": "Unlocks Wind-Up Hatching Potions for purchase in the Market"
	},
	"key": "windup"
  },
  "bewilder": {
	"text": "The Be-Wilder",
	"notes": "The party begins like any other.<br><br>The appetizers are excellent, the music is swinging, and even the dancing elephants have become routine. Habiticans laugh and frolic amid the overflowing floral centerpieces, happy to have a distraction from their least-favorite tasks, and the April Fool whirls among them, eagerly providing an amusing trick here and a witty twist there.<br><br>As the Mistiflying clock tower strikes midnight, the April Fool leaps onto the stage to give a speech.<br><br>“Friends! Enemies! Tolerant acquaintances! Lend me your ears.” The crowd chuckles as animal ears sprout from their heads, and they pose with their new accessories.<br><br>“As you know,” the Fool continues, “my confusing illusions usually only last a single day. But I’m pleased to announce that I’ve discovered a shortcut that will guarantee us non-stop fun, without having to deal with the pesky weight of our responsibilities. Charming Habiticans, meet my magical new friend... the Be-Wilder!”<br><br>Lemoness pales suddenly, dropping her hors d'oeuvres. “Wait! Don’t trust--”<br><br>But suddenly mists are pouring into the room, glittering and thick, and they swirl around the April Fool, coalescing into cloudy feathers and a stretching neck. The crowd is speechless as a monstrous bird unfolds before them, its wings shimmering with illusions. It lets out a horrible screeching laugh.<br><br>“Oh, it has been ages since a Habitican has been foolish enough to summon me! How wonderful it feels, to have a tangible form at last.”<br><br>Buzzing in terror, the magic bees of Mistiflying flee the floating city, which sags from the sky. One by one, the brilliant spring flowers wither up and wisp away.<br><br>“My dearest friends, why so alarmed?” crows the Be-Wilder, beating its wings. “There’s no need to toil for your rewards any more. I’ll just give you all the things that you desire!”<br><br>A rain of coins pours from the sky, hammering into the ground with brutal force, and the crowd screams and flees for cover. “Is this a joke?” Baconsaur shouts, as the gold smashes through windows and shatters roof shingles.<br><br>PainterProphet ducks as lightning bolts crackle overhead, and fog blots out the sun. “No! This time, I don’t think it is!”<br><br>Quickly, Habiticans, don’t let this World Boss distract us from our goals! Stay focused on the tasks that you need to complete so we can rescue Mistiflying -- and hopefully, ourselves.",
	"completion": "<strong>The Be-Wilder is DEFEATED!</strong><br><br>We've done it! The Be-Wilder lets out a ululating cry as it twists in the air, shedding feathers like falling rain. Slowly, gradually, it coils into a cloud of sparkling mist. As the newly-revealed sun pierces the fog, it burns away, revealing the coughing, mercifully human forms of Bailey, Matt, Alex.... and the April Fool himself.<br><br><strong>Mistiflying is saved!</strong><br><br>The April Fool has enough shame to look a bit sheepish. “Oh, hm,” he says. “Perhaps I got a little…. carried away.”<br><br>The crowd mutters. Sodden flowers wash up on sidewalks. Somewhere in the distance, a roof collapses with a spectacular splash.<br><br>“Er, yes,” the April Fool says. “That is. What I meant to say was, I’m dreadfully sorry.” He heaves a sigh. “I suppose it can’t all be fun and games, after all. It might not hurt to focus occasionally. Maybe I’ll get a head start on next year’s pranking.”<br><br>Redphoenix coughs meaningfully.<br><br>“I mean, get a head start on this year’s spring cleaning!” the April Fool says. “Nothing to fear, I’ll have Habit City in spit-shape soon. Luckily nobody is better than I at dual-wielding mops.”<br><br>Encouraged, the marching band starts up.<br><br>It isn’t long before all is back to normal in Habit City. Plus, now that the Be-Wilder has evaporated, the magical bees of Mistiflying bustle back to work, and soon the flowers are blooming and the city is floating once more.<br><br>As Habiticans cuddle the magical fuzzy bees, the April Fool’s eyes light up. “Oho, I’ve had a thought! Why don’t you all keep some of these fuzzy Bee Pets and Mounts? It’s a gift that perfectly symbolizes the balance between hard work and sweet rewards, if I’m going to get all boring and allegorical on you.” He winks. “Besides, they don’t have stingers! Fool’s honor.”",
	"completionChat": "`The Be-Wilder is DEFEATED!`\n\nWe've done it! The Be-Wilder lets out a ululating cry as it twists in the air, shedding feathers like falling rain. Slowly, gradually, it coils into a cloud of sparkling mist. As the newly-revealed sun pierces the fog, it burns away, revealing the coughing, mercifully human forms of Bailey, Matt, Alex.... and the April Fool himself.\n\n`Mistiflying is saved!`\n\nThe April Fool has enough shame to look a bit sheepish. “Oh, hm,” he says. “Perhaps I got a little…. carried away.”\n\nThe crowd mutters. Sodden flowers wash up on sidewalks. Somewhere in the distance, a roof collapses with a spectacular splash.\n\n“Er, yes,” the April Fool says. “That is. What I meant to say was, I’m dreadfully sorry.” He heaves a sigh. “I suppose it can’t all be fun and games, after all. It might not hurt to focus occasionally. Maybe I’ll get a head start on next year’s pranking.”\n\nRedphoenix coughs meaningfully.\n\n“I mean, get a head start on this year’s spring cleaning!” the April Fool says. “Nothing to fear, I’ll have Habit City in spit-shape soon. Luckily nobody is better than I at dual-wielding mops.”\n\nEncouraged, the marching band starts up.\n\nIt isn’t long before all is back to normal in Habit City. Plus, now that the Be-Wilder has evaporated, the magical bees of Mistiflying bustle back to work, and soon the flowers are blooming and the city is floating once more.\n\nAs Habiticans cuddle the magical fuzzy bees, the April Fool’s eyes light up. “Oho, I’ve had a thought! Why don’t you all keep some of these fuzzy Bee Pets and Mounts? It’s a gift that perfectly symbolizes the balance between hard work and sweet rewards, if I’m going to get all boring and allegorical on you.” He winks. “Besides, they don’t have stingers! Fool’s honor.”",
	"value": 0,
	"category": "world",
	"boss": {
	  "name": "The Be-Wilder",
	  "hp": 20000000,
	  "str": 1,
	  "def": 1,
	  "rage": {
		"title": "Beguilement Strike",
		"description": "When this gauge fills, The Be-Wilder will unleash its Beguilement Strike on Habitica!",
		"value": 800000,
		"bailey": "`The Be-Wilder uses BEGUILEMENT STRIKE!`\n\nLook out! In the middle of reporting the news, Bailey the Town Crier has been possessed by the Be-Wilder! She lets out an evil, uninformative screech as she rises into the air. Now how will we know what’s going on?\n\nDon't give up... we're so close to defeating this bothersome bird for once and for all!",
		"stables": "`The Be-Wilder uses BEGUILEMENT STRIKE!`\n\nAhh!!! Once again the Be-Wilder has dazzled us into neglecting our Dailies, and now it has attacked Matt the Beast Master! With a swirl of mist, Matt transforms into a terrifying winged creature, and all the pets and mounts howl sadly in their stables. Quickly, stay focused on your tasks to defeat this dastardly distraction!",
		"market": "`The Be-Wilder uses BEGUILEMENT STRIKE!`\n\nOh no! Despite our best efforts, we've gotten distracted by the Be-Wilder’s charming illusions and have forgotten to do some of our Dailies! With a cackling cry, the shining bird beats its wings, raising a swarm of mist around Alex the Merchant. When the fog clears, he has been possessed! “Have some free samples!” he shouts gleefully, and begins to hurl exploding eggs and potions at fleeing Habiticans. Not the most favorable of sales, to be sure.\n\nHurry! Let's stay focused on our Dailies to defeat this monster before it possesses someone else."
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "pets",
		  "key": "MagicalBee-Base",
		  "text": "Magical Bee (Pet)"
		},
		{
		  "type": "mounts",
		  "key": "MagicalBee-Base",
		  "text": "Magical Bee (Mount)"
		},
		{
		  "type": "food",
		  "key": "Meat",
		  "text": "Meat"
		},
		{
		  "type": "food",
		  "key": "Milk",
		  "text": "Milk"
		},
		{
		  "type": "food",
		  "key": "Potatoe",
		  "text": "Potato"
		},
		{
		  "type": "food",
		  "key": "Strawberry",
		  "text": "Strawberry"
		},
		{
		  "type": "food",
		  "key": "Chocolate",
		  "text": "Chocolate"
		},
		{
		  "type": "food",
		  "key": "Fish",
		  "text": "Fish"
		},
		{
		  "type": "food",
		  "key": "RottenMeat",
		  "text": "Rotten Meat"
		},
		{
		  "type": "food",
		  "key": "CottonCandyPink",
		  "text": "Pink Cotton Candy"
		},
		{
		  "type": "food",
		  "key": "CottonCandyBlue",
		  "text": "Blue Cotton Candy"
		},
		{
		  "type": "food",
		  "key": "Honey",
		  "text": "Honey"
		}
	  ],
	  "gp": 0,
	  "exp": 0
	},
	"key": "bewilder"
  },
  "burnout": {
	"text": "Burnout and the Exhaust Spirits",
	"notes": "It is well past midnight, still and stiflingly hot, when Redphoenix and scout captain Kiwibot abruptly burst through the city gates. \"We need to evacuate all the wooden buildings!\" Redphoenix shouts. \"Hurry!\"<br><br>Kiwibot grips the wall as she catches her breath. \"It's draining people and turning them into Exhaust Spirits! That's why everything was delayed. That's where the missing people have gone. It's been stealing their energy!\"<br><br>\"'It'?'\" asks Lemoness.<br><br>And then the heat takes form.<br><br>It rises from the earth in a billowing, twisting mass, and the air chokes with the scent of smoke and sulphur. Flames lick across the molten ground and contort into limbs, writhing to horrific heights. Smoldering eyes snap open, and the creature lets out a deep and crackling cackle.<br><br> Kiwibot whispers a single word.<br><br><em>\"Burnout.\"</em>",
	"completion": "<strong>Burnout is DEFEATED!</strong><br><br>With a great, soft sigh, Burnout slowly releases the ardent energy that was fueling its fire. As the monster curls quietly into ashes, its stolen energy shimmers through the air, rejuvenating the Exhaust Spirits and returning them to their true forms.<br><br>Ian, Daniel, and the Seasonal Sorceress cheer as Habiticans rush to greet them, and all the missing citizens of the Flourishing Fields embrace their friends and families. The final Exhaust Spirit transforms into the Joyful Reaper herself!<br><br>\"Look!\" whispers @Baconsaur, as the ashes begin to glitter. Slowly, they resolve into hundreds of shining phoenixes!<br><br>One of the glowing birds alights on the Joyful Reaper's skeletal arm, and she grins at it. \"It has been a long time since I've had the exquisite privilege to behold a phoenix in the Flourishing Fields,\" she says. \"Although given recent occurrences, I must say, this is highly thematically appropriate!\"<br><br>Her tone sobers, although (naturally) her grin remains. \"We're known for being hard-working here, but we are also known for our feasts and festivities. Rather ironic, I suppose, that as we strove to plan a spectacular party, we refused to permit ourselves any time for fun. We certainly won't make the same mistake twice!\"<br><br>She claps her hands. \"Now - let's celebrate!\"",
	"completionChat": "`Burnout is DEFEATED!`\n\nWith a great, soft sigh, Burnout slowly releases the ardent energy that was fueling its fire. As the monster curls quietly into ashes, its stolen energy shimmers through the air, rejuvenating the Exhaust Spirits and returning them to their true forms.\n\nIan, Daniel, and the Seasonal Sorceress cheer as Habiticans rush to greet them, and all the missing citizens of the Flourishing Fields embrace their friends and families. The final Exhaust Spirit transforms into the Joyful Reaper herself!\n\n\"Look!\" whispers @Baconsaur, as the ashes begin to glitter. Slowly, they resolve into hundreds of shining phoenixes!\n\nOne of the glowing birds alights on the Joyful Reaper's skeletal arm, and she grins at it. \"It has been a long time since I've had the exquisite privilege to behold a phoenix in the Flourishing Fields,\" she says. \"Although given recent occurrences, I must say, this is highly thematically appropriate!\"\n\nHer tone sobers, although (naturally) her grin remains. \"We're known for being hard-working here, but we are also known for our feasts and festivities. Rather ironic, I suppose, that as we strove to plan a spectacular party, we refused to permit ourselves any time for fun. We certainly won't make the same mistake twice!\"\n\nShe claps her hands. \"Now - let's celebrate!\"\n\nAll Habiticans receive:\n\nPhoenix Pet\nPhoenix Mount\nAchievement: Savior of the Flourishing Fields\nBasic Candy\nVanilla Candy\nSand Candy\nCinnamon Candy\nChocolate Candy\nRotten Candy\nSour Pink Candy\nSour Blue Candy\nHoney Candy",
	"value": 0,
	"category": "world",
	"boss": {
	  "name": "Burnout",
	  "hp": 11000000,
	  "str": 2.5,
	  "def": 1,
	  "rage": {
		"title": "Exhaust Strike",
		"description": "When this gauge fills, Burnout will unleash its Exhaust Strike on Habitica!",
		"value": 1000000,
		"quests": "`Burnout uses EXHAUST STRIKE!`\n\nOh no! Despite our best efforts, we've let some Dailies get away from us, and now Burnout is inflamed with energy! With a crackling snarl, it engulfs Ian the Quest Master in a surge of spectral fire. As fallen quest scrolls smolder, the smoke clears, and you see that Ian has been drained of energy and turned into a drifting Exhaust Spirit!\n\nOnly defeating Burnout can break the spell and restore our beloved Quest Master. Let's keep our Dailies in check and defeat this monster before it attacks again!",
		"seasonalShop": "`Burnout uses EXHAUST STRIKE!`\n\nAhh!!! Our incomplete Dailies have fed the flames of Burnout, and now it has enough energy to strike again! It lets loose a gout of spectral flame that sears the Seasonal Shop. You're horrified to see that the cheery Seasonal Sorceress has been transformed into a drooping Exhaust Spirit.\n\nWe have to rescue our NPCs! Hurry, Habiticans, complete your tasks and defeat Burnout before it strikes for a third time!",
		"tavern": "`Burnout uses EXHAUST STRIKE!`\n\nMany Habiticans have been hiding from Burnout in the Tavern, but no longer! With a screeching howl, Burnout rakes the Tavern with its white-hot hands. As the Tavern patrons flee, Daniel is caught in Burnout's grip, and transforms into an Exhaust Spirit right in front of you!\n\nThis hot-headed horror has gone on for too long. Don't give up... we're so close to vanquishing Burnout for once and for all!"
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "pets",
		  "key": "Phoenix-Base",
		  "text": "Phoenix (Pet)"
		},
		{
		  "type": "mounts",
		  "key": "Phoenix-Base",
		  "text": "Phoenix (Mount)"
		},
		{
		  "type": "food",
		  "key": "Candy_Base",
		  "text": "Basic Candy"
		},
		{
		  "type": "food",
		  "key": "Candy_White",
		  "text": "Vanilla Candy"
		},
		{
		  "type": "food",
		  "key": "Candy_Desert",
		  "text": "Sand Candy"
		},
		{
		  "type": "food",
		  "key": "Candy_Red",
		  "text": "Cinnamon Candy"
		},
		{
		  "type": "food",
		  "key": "Candy_Shade",
		  "text": "Chocolate Candy"
		},
		{
		  "type": "food",
		  "key": "Candy_Skeleton",
		  "text": "Bare Bones Candy"
		},
		{
		  "type": "food",
		  "key": "Candy_Zombie",
		  "text": "Rotten Candy"
		},
		{
		  "type": "food",
		  "key": "Candy_CottonCandyPink",
		  "text": "Sour Pink Candy"
		},
		{
		  "type": "food",
		  "key": "Candy_CottonCandyBlue",
		  "text": "Sour Blue Candy"
		},
		{
		  "type": "food",
		  "key": "Candy_Golden",
		  "text": "Honey Candy"
		}
	  ],
	  "gp": 0,
	  "exp": 0
	},
	"key": "burnout"
  },
  "dilatory": {
	"text": "The Dread Drag'on of Dilatory",
	"notes": "We should have heeded the warnings.<br><br>Dark shining eyes. Ancient scales. Massive jaws, and flashing teeth. We've awoken something horrifying from the crevasse: <strong>the Dread Drag'on of Dilatory!</strong> Screaming Habiticans fled in all directions when it reared out of the sea, its terrifyingly long neck extending hundreds of feet out of the water as it shattered windows with its searing roar.<br><br>\"This must be what dragged Dilatory down!\" yells Lemoness. \"It wasn't the weight of the neglected tasks - the Dark Red Dailies just attracted its attention!\"<br><br>\"It's surging with magical energy!\" @Baconsaur cries. \"To have lived this long, it must be able to heal itself! How can we defeat it?\"<br><br>Why, the same way we defeat all beasts - with productivity! Quickly, Habitica, band together and strike through your tasks, and all of us will battle this monster together. (There's no need to abandon previous quests -  we believe in your ability to double-strike!) It won't attack us individually, but the more Dailies we skip, the closer we get to triggering its Neglect Strike - and I don't like the way it's eyeing the Tavern....",
	"completion": "`The Defeat Of The Dread Drag'On Of Dilatory`\n\nWe've done it! With a final last roar, the Dread Drag'on collapses and swims far, far away. Crowds of cheering Habiticans line the shores! We've helped Matt, Daniel, and Alex rebuild their buildings. But what's this?\n\n`The Citizens Return!`\n\nNow that the Drag'on has fled, thousands of sparkling colors are ascending through the sea. It is a rainbow swarm of Mantis Shrimp... and among them, hundreds of merpeople!\n\n\"We are the lost citizens of Dilatory!\" explains their leader, Manta. \"When Dilatory sank, the Mantis Shrimp that lived in these waters used a spell to transform us into merpeople so that we could survive. But in its rage, the Dread Drag'on trapped us all in the dark crevasse. We have been imprisoned there for hundreds of years - but now at last we are free to rebuild our city!\"\n\n\"As a thank you,\" says his friend @Ottl, \"Please accept this Mantis Shrimp pet and Mantis Shrimp mount, as well as XP, gold, and our eternal gratitude.\"\n\n`Rewards`\n * Mantis Shrimp Pet\n * Mantis Shrimp Mount\n * Chocolate, Cotton Candy Blue, Cotton Candy Pink, Fish, Honey, Meat, Milk, Potato, Rotten Meat, Strawberry",
	"value": 0,
	"category": "world",
	"boss": {
	  "name": "The Dread Drag'on of Dilatory",
	  "hp": 5000000,
	  "str": 1,
	  "def": 1,
	  "rage": {
		"title": "Neglect Strike",
		"description": "When this bar has filled up, the Dread Drag'on of Dilatory will unleash great havoc on Habitica's terrain",
		"value": 4000000,
		"tavern": "`Dread Drag'on Casts NEGLECT STRIKE!`\n\nOh no! Despite our best efforts, we've let some Dailies get away from us, and their dark-red color has attracted the Drag'on's rage! With its fearsome Neglect Strike attack, it has decimated the Tavern! Luckily, we've set up an Inn in a nearby city, and you're free to keep chatting on the shore... but poor Daniel the Barkeep just saw his beloved building crumble around him!\n\nI hope the beast doesn't attack again!",
		"stables": "`Dread Drag'on Casts NEGLECT STRIKE!`\n\nYikes! Once again we left too many Dailies undone. The Drag'on has unleashed its Neglect Strike against Matt and the stables! Pets have been fleeing in all directions. Luckily it seems like all of yours are safe!\n\nPoor Habitica! I hope this doesn't happen again. Hurry and do all your tasks!",
		"market": "`Dread Drag'on Casts NEGLECT STRIKE!`\n\nAhhh!! Alex the Merchant just had his shop smashed to smithereens by the Drag'on's Neglect Strike! But it seems like we're really wearing this beast down. I doubt it has enough energy for another strike.\n\nSo do not waver, Habitica! Let's drive this beast away from our shores!"
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "pets",
		  "key": "MantisShrimp-Base",
		  "text": "Mantis Shrimp (Pet)"
		},
		{
		  "type": "mounts",
		  "key": "MantisShrimp-Base",
		  "text": "Mantis Shrimp (Mount)"
		},
		{
		  "type": "food",
		  "key": "Meat",
		  "text": "Meat"
		},
		{
		  "type": "food",
		  "key": "Milk",
		  "text": "Milk"
		},
		{
		  "type": "food",
		  "key": "Potatoe",
		  "text": "Potato"
		},
		{
		  "type": "food",
		  "key": "Strawberry",
		  "text": "Strawberry"
		},
		{
		  "type": "food",
		  "key": "Chocolate",
		  "text": "Chocolate"
		},
		{
		  "type": "food",
		  "key": "Fish",
		  "text": "Fish"
		},
		{
		  "type": "food",
		  "key": "RottenMeat",
		  "text": "Rotten Meat"
		},
		{
		  "type": "food",
		  "key": "CottonCandyPink",
		  "text": "Pink Cotton Candy"
		},
		{
		  "type": "food",
		  "key": "CottonCandyBlue",
		  "text": "Blue Cotton Candy"
		},
		{
		  "type": "food",
		  "key": "Honey",
		  "text": "Honey"
		}
	  ],
	  "gp": 0,
	  "exp": 0
	},
	"key": "dilatory"
  },
  "dysheartener": {
	"text": "The Dysheartener",
	"notes": "The sun is rising on Valentine’s Day when a shocking crash splinters the air. A blaze of sickly pink light lances through all the buildings, and bricks crumble as a deep crack rips through Habit City’s main street. An unearthly shrieking rises through the air, shattering windows as a hulking form slithers forth from the gaping earth.<br><br>Mandibles snap and a carapace glitters; legs upon legs unfurl in the air. The crowd begins to scream as the insectoid creature rears up, revealing itself to be none other than that cruelest of creatures: the fearsome Dysheartener itself. It howls in anticipation and lunges forward, hungering to gnaw on the hopes of hard-working Habiticans. With each rasping scrape of its spiny forelegs, you feel a vise of despair tightening in your chest.<br><br>“Take heart, everyone!” Lemoness shouts. “It probably thinks that we’re easy targets because so many of us have daunting New Year’s Resolutions, but it’s about to discover that Habiticans know how to stick to their goals!”<br><br>AnnDeLune raises her staff. “Let’s tackle our tasks and take this monster down!”",
	"completion": "<strong>The Dysheartener is DEFEATED!</strong><br><br>Together, everyone in Habitica strikes a final blow to their tasks, and the Dysheartener rears back, shrieking with dismay. “What's wrong, Dysheartener?” AnnDeLune calls, eyes sparkling. “Feeling discouraged?”<br><br>Glowing pink fractures crack across the Dysheartener's carapace, and it shatters in a puff of pink smoke. As a renewed sense of vigor and determination sweeps across the land, a flurry of delightful sweets rains down upon everyone.<br><br>The crowd cheers wildly, hugging each other as their pets happily chew on the belated Valentine's treats. Suddenly, a joyful chorus of song cascades through the air, and gleaming silhouettes soar across the sky.<br><br>Our newly-invigorated optimism has attracted a flock of Hopeful Hippogriffs! The graceful creatures alight upon the ground, ruffling their feathers with interest and prancing about. “It looks like we've made some new friends to help keep our spirits high, even when our tasks are daunting,” Lemoness says.<br><br>Beffymaroo already has her arms full with feathered fluffballs. “Maybe they'll help us rebuild the damaged areas of Habitica!”<br><br>Crooning and singing, the Hippogriffs lead the way as all the Habitcans work together to restore our beloved home.",
	"completionChat": "`The Dysheartener is DEFEATED!`\n\nTogether, everyone in Habitica strikes a final blow to their tasks, and the Dysheartener rears back, shrieking with dismay. “What's wrong, Dysheartener?” AnnDeLune calls, eyes sparkling. “Feeling discouraged?”\n\nGlowing pink fractures crack across the Dysheartener's carapace, and it shatters in a puff of pink smoke. As a renewed sense of vigor and determination sweeps across the land, a flurry of delightful sweets rains down upon everyone.\n\nThe crowd cheers wildly, hugging each other as their pets happily chew on the belated Valentine's treats. Suddenly, a joyful chorus of song cascades through the air, and gleaming silhouettes soar across the sky.\n\nOur newly-invigorated optimism has attracted a flock of Hopeful Hippogriffs! The graceful creatures alight upon the ground, ruffling their feathers with interest and prancing about. “It looks like we've made some new friends to help keep our spirits high, even when our tasks are daunting,” Lemoness says.\n\nBeffymaroo already has her arms full with feathered fluffballs. “Maybe they'll help us rebuild the damaged areas of Habitica!”\n\nCrooning and singing, the Hippogriffs lead the way as all the Habitcans work together to restore our beloved home.",
	"value": 0,
	"category": "world",
	"boss": {
	  "name": "The Dysheartener",
	  "hp": 17000000,
	  "str": 1.25,
	  "def": 1,
	  "rage": {
		"title": "Shattering Heartbreak",
		"description": "The Rage Attack gauge fills when Habiticans miss their Dailies. If it fills up, the Dysheartener will unleash its Shattering Heartbreak attack on one of Habitica's shopkeepers, so be sure to do your tasks!",
		"value": 500000,
		"seasonalShop": "`The Dysheartener uses SHATTERING HEARTBREAK!`\n\nOh, no! After feasting on our undone Dailies, the Dysheartener has gained the strength to unleash its Shattering Heartbreak attack. With a shrill shriek, it brings its spiny forelegs down upon the pavilion that houses the Seasonal Shop! The concussive blast of magic shreds the wood, and the Seasonal Sorceress is overcome by sorrow at the sight.\n\nQuickly, let's keep doing our Dailies so that the beast won't strike again!",
		"market": "`The Dysheartener uses SHATTERING HEARTBREAK!`\n\nHelp! After feasting on our incomplete Dailies, the Dysheartener lets out another Shattering Heartbreak attack, smashing the walls and floor of the Market! As stone rains down, Alex the Merchant weeps at his crushed merchandise, stricken by the destruction.\n\nWe can't let this happen again! Be sure to do all our your Dailies to prevent the Dysheartener from using its final strike.",
		"quests": "`The Dysheartener uses SHATTERING HEARTBREAK!`\n\nAaaah! We've left our Dailies undone again, and the Dysheartener has mustered the energy for one final blow against our beloved shopkeepers. The countryside around Ian the Quest Master is ripped apart by its Shattering Heartbreak attack, and Ian is struck to the core by the horrific vision. We're so close to defeating this monster.... Hurry! Don't stop now!"
	  }
	},
	"colors": {
	  "dark": "#410F2A",
	  "medium": "#5C1130",
	  "light": "#931F4D",
	  "extralight": "#DC4069"
	},
	"drop": {
	  "items": [
		{
		  "type": "pets",
		  "key": "Hippogriff-Hopeful",
		  "text": "Hopeful Hippogriff (Pet)"
		},
		{
		  "type": "mounts",
		  "key": "Hippogriff-Hopeful",
		  "text": "Hopeful Hippogriff (Mount)"
		},
		{
		  "type": "food",
		  "key": "Cake_Base",
		  "text": "Basic Cake"
		},
		{
		  "type": "food",
		  "key": "Candy_White",
		  "text": "Vanilla Candy"
		},
		{
		  "type": "food",
		  "key": "Cake_Desert",
		  "text": "Sand Cake"
		},
		{
		  "type": "food",
		  "key": "Candy_Red",
		  "text": "Cinnamon Candy"
		},
		{
		  "type": "food",
		  "key": "Cake_Shade",
		  "text": "Chocolate Cake"
		},
		{
		  "type": "food",
		  "key": "Candy_Skeleton",
		  "text": "Bare Bones Candy"
		},
		{
		  "type": "food",
		  "key": "Cake_Zombie",
		  "text": "Rotten Cake"
		},
		{
		  "type": "food",
		  "key": "Candy_CottonCandyPink",
		  "text": "Sour Pink Candy"
		},
		{
		  "type": "food",
		  "key": "Candy_CottonCandyBlue",
		  "text": "Sour Blue Candy"
		},
		{
		  "type": "food",
		  "key": "Cake_Golden",
		  "text": "Honey Cake"
		}
	  ],
	  "gp": 0,
	  "exp": 0
	},
	"key": "dysheartener"
  },
  "stressbeast": {
	"text": "The Abominable Stressbeast of the Stoïkalm Steppes",
	"notes": "Complete Dailies and To Do's to damage the World Boss! Incomplete Dailies fill the Stress Strike Bar. When the Stress Strike bar is full, the World Boss will attack an NPC. A World Boss will never damage individual players or accounts in any way. Only active accounts who are not resting in the inn will have their incomplete Dailies tallied.<br><br>~*~<br><br>The first thing we hear are the footsteps, slower and more thundering than the stampede. One by one, Habiticans look outside their doors, and words fail us.<br><br>We've all seen Stressbeasts before, of course - tiny vicious creatures that attack during difficult times. But this? This towers taller than the buildings, with paws that could crush a dragon with ease. Frost swings from its stinking fur, and as it roars, the icy blast rips the roofs off our houses. A monster of this magnitude has never been mentioned outside of distant legend.<br><br>\"Beware, Habiticans!\" SabreCat cries. \"Barricade yourselves indoors - this is the Abominable Stressbeast itself!\"<br><br>\"That thing must be made of centuries of stress!\" Kiwibot says, locking the Tavern door tightly and shuttering the windows.<br><br>\"The Stoïkalm Steppes,\" Lemoness says, face grim. \"All this time, we thought they were placid and untroubled, but they must have been secretly hiding their stress somewhere. Over generations, it grew into this, and now it's broken free and attacked them - and us!\"<br><br>There's only one way to drive away a Stressbeast, Abominable or otherwise, and that's to attack it with completed Dailies and To Do's! Let's all band together and fight off this fearsome foe - but be sure not to slack on your tasks, or our undone Dailies may enrage it so much that it lashes out...",
	"completion": "<strong>The Abominable Stressbeast is DEFEATED!</strong><br><br>We've done it! With a final bellow, the Abominable Stressbeast dissipates into a cloud of snow. The flakes twinkle down through the air as cheering Habiticans embrace their pets and mounts. Our animals and our NPCs are safe once more!<br><br><strong>Stoïkalm is Saved!</strong><br><br>SabreCat speaks gently to a small sabertooth. \"Please find the citizens of the Stoïkalm Steppes and bring them to us,\" he says. Several hours later, the sabertooth returns, with a herd of mammoth riders following slowly behind. You recognize the head rider as Lady Glaciate, the leader of Stoïkalm.<br><br>\"Mighty Habiticans,\" she says, \"My citizens and I owe you the deepest thanks, and the deepest apologies. In an effort to protect our Steppes from turmoil, we began to secretly banish all of our stress into the icy mountains. We had no idea that it would build up over generations into the Stressbeast that you saw! When it broke loose, it trapped all of us in the mountains in its stead and went on a rampage against our beloved animals.\" Her sad gaze follows the falling snow. \"We put everyone at risk with our foolishness. Rest assured that in the future, we will come to you with our problems before our problems come to you.\"<br><br>She turns to where @Baconsaur is snuggling with some of the baby mammoths. \"We have brought your animals an offering of food to apologize for frightening them, and as a symbol of trust, we will leave some of our pets and mounts with you. We know that you will all take care good care of them.\"",
	"completionChat": "`The Abominable Stressbeast is DEFEATED!`\n\nWe've done it! With a final bellow, the Abominable Stressbeast dissipates into a cloud of snow. The flakes twinkle down through the air as cheering Habiticans embrace their pets and mounts. Our animals and our NPCs are safe once more!\n\n`Stoïkalm is Saved!`\n\nSabreCat speaks gently to a small sabertooth. \"Please find the citizens of the Stoïkalm Steppes and bring them to us,\" he says. Several hours later, the sabertooth returns, with a herd of mammoth riders following slowly behind. You recognize the head rider as Lady Glaciate, the leader of Stoïkalm.\n\n\"Mighty Habiticans,\" she says, \"My citizens and I owe you the deepest thanks, and the deepest apologies. In an effort to protect our Steppes from turmoil, we began to secretly banish all of our stress into the icy mountains. We had no idea that it would build up over generations into the Stressbeast that you saw! When it broke loose, it trapped all of us in the mountains in its stead and went on a rampage against our beloved animals.\" Her sad gaze follows the falling snow. \"We put everyone at risk with our foolishness. Rest assured that in the future, we will come to you with our problems before our problems come to you.\"\n\nShe turns to where @Baconsaur is snuggling with some of the baby mammoths. \"We have brought your animals an offering of food to apologize for frightening them, and as a symbol of trust, we will leave some of our pets and mounts with you. We know that you will all take care good care of them.\"",
	"value": 0,
	"category": "world",
	"boss": {
	  "name": "The Abominable Stressbeast",
	  "hp": 2750000,
	  "str": 1,
	  "def": 1,
	  "rage": {
		"title": "Stress Strike",
		"description": "When this gauge fills, the Abominable Stressbeast will unleash its Stress Strike on Habitica!",
		"value": 1450000,
		"healing": 0.3,
		"stables": "`Abominable Stressbeast uses STRESS STRIKE!`\n\nThe surge of stress heals Abominable Stressbeast!\n\nOh no! Despite our best efforts, we've let some Dailies get away from us, and their dark-red color has infuriated the Abominable Stressbeast and caused it to regain some of its health! The horrible creature lunges for the Stables, but Matt the Beast Master heroically leaps into the fray to protect the pets and mounts. The Stressbeast has seized Matt in its vicious grip, but at least it's distracted for the moment. Hurry! Let's keep our Dailies in check and defeat this monster before it attacks again!",
		"bailey": "`Abominable Stressbeast uses STRESS STRIKE!`\n\nThe surge of stress heals Abominable Stressbeast!\n\nAhh!!! Our incomplete Dailies caused the Abominable Stressbeast to become madder than ever and regain some of its health! Bailey the Town Crier was shouting for citizens to get to safety, and now it has seized her in its other hand! Look at her, valiantly reporting on the news as the Stressbeast swings her around viciously... Let's be worthy of her bravery by being as productive as we can to save our NPCs!",
		"guide": "`Abominable Stressbeast uses STRESS STRIKE!`\n\nThe surge of stress heals Abominable Stressbeast!\n\nLook out! Justin the Guide is trying to distract the Stressbeast by running around its ankles, yelling productivity tips! The Abominable Stressbeast is stomping madly, but it seems like we're really wearing this beast down. I doubt it has enough energy for another strike. Don't give up... we're so close to finishing it off!"
	  },
	  "desperation": {
		"threshold": 500000,
		"str": 3.5,
		"def": 2,
		"text": "`Abominable Stressbeast reaches 500K health! Abominable Stressbeast uses Desperate Defense!`\n\nWe're almost there, Habiticans! With diligence and Dailies, we've whittled the Stressbeast's health down to only 500K! The creature roars and flails in desperation, rage building faster than ever. Bailey and Matt yell in terror as it begins to swing them around at a terrifying pace, raising a blinding snowstorm that makes it harder to hit.\n\nWe'll have to redouble our efforts, but take heart - this is a sign that the Stressbeast knows it is about to be defeated. Don't give up now!"
	  }
	},
	"drop": {
	  "items": [
		{
		  "type": "pets",
		  "key": "Mammoth-Base",
		  "text": "Mammoth (Pet)"
		},
		{
		  "type": "mounts",
		  "key": "Mammoth-Base",
		  "text": "Mammoth (Mount)"
		},
		{
		  "type": "food",
		  "key": "Meat",
		  "text": "Meat"
		},
		{
		  "type": "food",
		  "key": "Milk",
		  "text": "Milk"
		},
		{
		  "type": "food",
		  "key": "Potatoe",
		  "text": "Potato"
		},
		{
		  "type": "food",
		  "key": "Strawberry",
		  "text": "Strawberry"
		},
		{
		  "type": "food",
		  "key": "Chocolate",
		  "text": "Chocolate"
		},
		{
		  "type": "food",
		  "key": "Fish",
		  "text": "Fish"
		},
		{
		  "type": "food",
		  "key": "RottenMeat",
		  "text": "Rotten Meat"
		},
		{
		  "type": "food",
		  "key": "CottonCandyPink",
		  "text": "Pink Cotton Candy"
		},
		{
		  "type": "food",
		  "key": "CottonCandyBlue",
		  "text": "Blue Cotton Candy"
		},
		{
		  "type": "food",
		  "key": "Honey",
		  "text": "Honey"
		}
	  ],
	  "gp": 0,
	  "exp": 0
	},
	"key": "stressbeast"
  }
};