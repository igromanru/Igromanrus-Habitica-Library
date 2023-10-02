/**
 * Author: Igromanru
 * Source: https://github.com/igromanru/Igromanrus-Habitica-Library
 */

function getQuestContentByKey(questKey) {
	if (typeof questKey === "string" && questKey) {
	  return HabiticaQuestsContent[questKey];
	} else {
	  console.error(`getQuestContentByKey error: Invalid parameter questKey: "${questKey}"`);
	}
	return undefined;
  }
  
  function getGearContentByKey(gearKey) {
	if (typeof gearKey === "string" && gearKey) {
	  try {
		return HabiticaFlatGearContent[gearKey];
	  } catch (error) {
		console.error(error);
	  }
	} else {
	  console.error(`getGearContentByKey error: Invalid parameter gearKey: "${gearKey}"`);
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
  
  // The "gear.flat" part of the habitica content
  const HabiticaFlatGearContent = {
	"weapon_warrior_0": {
	  "text": "Training Sword",
	  "notes": "Practice weapon. Confers no benefit. ",
	  "value": 1,
	  "type": "weapon",
	  "key": "weapon_warrior_0",
	  "set": "warrior-0",
	  "klass": "warrior",
	  "index": "0",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_warrior_1": {
	  "text": "Sword",
	  "notes": "Common soldier's blade. Increases Strength by 3. ",
	  "str": 3,
	  "value": 20,
	  "type": "weapon",
	  "key": "weapon_warrior_1",
	  "set": "warrior-1",
	  "klass": "warrior",
	  "index": "1",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_warrior_2": {
	  "text": "Axe",
	  "notes": "Double-bitted chopping weapon. Increases Strength by 6. ",
	  "str": 6,
	  "value": 30,
	  "type": "weapon",
	  "key": "weapon_warrior_2",
	  "set": "warrior-2",
	  "klass": "warrior",
	  "index": "2",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_warrior_3": {
	  "text": "Morning Star",
	  "notes": "Heavy club with brutal spikes. Increases Strength by 9. ",
	  "str": 9,
	  "value": 45,
	  "type": "weapon",
	  "key": "weapon_warrior_3",
	  "set": "warrior-3",
	  "klass": "warrior",
	  "index": "3",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_warrior_4": {
	  "text": "Sapphire Blade",
	  "notes": "Sword whose edge bites like the north wind. Increases Strength by 12. ",
	  "str": 12,
	  "value": 65,
	  "type": "weapon",
	  "key": "weapon_warrior_4",
	  "set": "warrior-4",
	  "klass": "warrior",
	  "index": "4",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_warrior_5": {
	  "text": "Ruby Sword",
	  "notes": "Weapon whose forge-glow never fades. Increases Strength by 15. ",
	  "str": 15,
	  "value": 90,
	  "type": "weapon",
	  "key": "weapon_warrior_5",
	  "set": "warrior-5",
	  "klass": "warrior",
	  "index": "5",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_warrior_6": {
	  "text": "Golden Sword",
	  "notes": "Bane of creatures of darkness. Increases Strength by 18. ",
	  "str": 18,
	  "value": 120,
	  "last": true,
	  "type": "weapon",
	  "key": "weapon_warrior_6",
	  "set": "warrior-6",
	  "klass": "warrior",
	  "index": "6",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_rogue_0": {
	  "text": "Dagger",
	  "notes": "A rogue's most basic weapon. Confers no benefit. ",
	  "str": 0,
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_rogue_0",
	  "set": "rogue-0",
	  "klass": "rogue",
	  "index": "0",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_rogue_1": {
	  "text": "Short Sword",
	  "notes": "Light, concealable blade. Increases Strength by 2. ",
	  "str": 2,
	  "value": 20,
	  "type": "weapon",
	  "key": "weapon_rogue_1",
	  "set": "rogue-1",
	  "klass": "rogue",
	  "index": "1",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_rogue_2": {
	  "text": "Scimitar",
	  "notes": "Slashing sword, swift to deliver a killing blow. Increases Strength by 3. ",
	  "str": 3,
	  "value": 35,
	  "type": "weapon",
	  "key": "weapon_rogue_2",
	  "set": "rogue-2",
	  "klass": "rogue",
	  "index": "2",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_rogue_3": {
	  "text": "Kukri",
	  "notes": "Distinctive bush knife, both survival tool and weapon. Increases Strength by 4. ",
	  "str": 4,
	  "value": 50,
	  "type": "weapon",
	  "key": "weapon_rogue_3",
	  "set": "rogue-3",
	  "klass": "rogue",
	  "index": "3",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_rogue_4": {
	  "text": "Nunchaku",
	  "notes": "Heavy batons whirled about on a length of chain. Increases Strength by 6. ",
	  "str": 6,
	  "value": 70,
	  "type": "weapon",
	  "key": "weapon_rogue_4",
	  "set": "rogue-4",
	  "klass": "rogue",
	  "index": "4",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_rogue_5": {
	  "text": "Ninja-to",
	  "notes": "Sleek and deadly as the ninja themselves. Increases Strength by 8. ",
	  "str": 8,
	  "value": 90,
	  "type": "weapon",
	  "key": "weapon_rogue_5",
	  "set": "rogue-5",
	  "klass": "rogue",
	  "index": "5",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_rogue_6": {
	  "text": "Hook Sword",
	  "notes": "Complex weapon adept at ensnaring and disarming opponents. Increases Strength by 10. ",
	  "str": 10,
	  "value": 120,
	  "last": true,
	  "type": "weapon",
	  "key": "weapon_rogue_6",
	  "set": "rogue-6",
	  "klass": "rogue",
	  "index": "6",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_healer_0": {
	  "text": "Novice Rod",
	  "notes": "For healers in training. Confers no benefit. ",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_healer_0",
	  "set": "healer-0",
	  "klass": "healer",
	  "index": "0",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_healer_1": {
	  "text": "Acolyte Rod",
	  "notes": "Crafted during a healer's initiation. Increases Intelligence by 2. ",
	  "int": 2,
	  "value": 20,
	  "type": "weapon",
	  "key": "weapon_healer_1",
	  "set": "healer-1",
	  "klass": "healer",
	  "index": "1",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_healer_2": {
	  "text": "Quartz Rod",
	  "notes": "Topped with a gem bearing curative properties. Increases Intelligence by 3. ",
	  "int": 3,
	  "value": 30,
	  "type": "weapon",
	  "key": "weapon_healer_2",
	  "set": "healer-2",
	  "klass": "healer",
	  "index": "2",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_healer_3": {
	  "text": "Amethyst Rod",
	  "notes": "Purifies poison at a touch. Increases Intelligence by 5. ",
	  "int": 5,
	  "value": 45,
	  "type": "weapon",
	  "key": "weapon_healer_3",
	  "set": "healer-3",
	  "klass": "healer",
	  "index": "3",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_healer_4": {
	  "text": "Physician Rod",
	  "notes": "As much a badge of office as a healing tool. Increases Intelligence by 7. ",
	  "int": 7,
	  "value": 65,
	  "type": "weapon",
	  "key": "weapon_healer_4",
	  "set": "healer-4",
	  "klass": "healer",
	  "index": "4",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_healer_5": {
	  "text": "Royal Scepter",
	  "notes": "Fit to grace the hand of a monarch, or of one who stands at a monarch's right hand. Increases Intelligence by 9. ",
	  "int": 9,
	  "value": 90,
	  "type": "weapon",
	  "key": "weapon_healer_5",
	  "set": "healer-5",
	  "klass": "healer",
	  "index": "5",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_healer_6": {
	  "text": "Golden Scepter",
	  "notes": "Soothes the pain of all who look upon it. Increases Intelligence by 11. ",
	  "int": 11,
	  "value": 120,
	  "last": true,
	  "type": "weapon",
	  "key": "weapon_healer_6",
	  "set": "healer-6",
	  "klass": "healer",
	  "index": "6",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_wizard_0": {
	  "twoHanded": true,
	  "text": "Apprentice Staff",
	  "notes": "Practice staff. Confers no benefit. Two-handed item.",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_wizard_0",
	  "set": "wizard-0",
	  "klass": "wizard",
	  "index": "0",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_wizard_1": {
	  "twoHanded": true,
	  "text": "Wooden Staff",
	  "notes": "Basic implement of carven wood. Increases Intelligence by 3 and Perception by 1. Two-handed item.",
	  "int": 3,
	  "per": 1,
	  "value": 30,
	  "type": "weapon",
	  "key": "weapon_wizard_1",
	  "set": "wizard-1",
	  "klass": "wizard",
	  "index": "1",
	  "str": 0,
	  "con": 0
	},
	"weapon_wizard_2": {
	  "twoHanded": true,
	  "text": "Jeweled Staff",
	  "notes": "Focuses power through a precious stone. Increases Intelligence by 6 and Perception by 2. Two-handed item.",
	  "int": 6,
	  "per": 2,
	  "value": 50,
	  "type": "weapon",
	  "key": "weapon_wizard_2",
	  "set": "wizard-2",
	  "klass": "wizard",
	  "index": "2",
	  "str": 0,
	  "con": 0
	},
	"weapon_wizard_3": {
	  "twoHanded": true,
	  "text": "Iron Staff",
	  "notes": "Plated in metal to channel heat, cold, and lightning. Increases Intelligence by 9 and Perception by 3. Two-handed item.",
	  "int": 9,
	  "per": 3,
	  "value": 80,
	  "type": "weapon",
	  "key": "weapon_wizard_3",
	  "set": "wizard-3",
	  "klass": "wizard",
	  "index": "3",
	  "str": 0,
	  "con": 0
	},
	"weapon_wizard_4": {
	  "twoHanded": true,
	  "text": "Brass Staff",
	  "notes": "As powerful as it is heavy. Increases Intelligence by 12 and Perception by 5. Two-handed item.",
	  "int": 12,
	  "per": 5,
	  "value": 120,
	  "type": "weapon",
	  "key": "weapon_wizard_4",
	  "set": "wizard-4",
	  "klass": "wizard",
	  "index": "4",
	  "str": 0,
	  "con": 0
	},
	"weapon_wizard_5": {
	  "twoHanded": true,
	  "text": "Archmage Staff",
	  "notes": "Assists in weaving the most complex of spells. Increases Intelligence by 15 and Perception by 7. Two-handed item.",
	  "int": 15,
	  "per": 7,
	  "value": 160,
	  "type": "weapon",
	  "key": "weapon_wizard_5",
	  "set": "wizard-5",
	  "klass": "wizard",
	  "index": "5",
	  "str": 0,
	  "con": 0
	},
	"weapon_wizard_6": {
	  "twoHanded": true,
	  "text": "Golden Staff",
	  "notes": "Fashioned of orichalcum, the alchemic gold, mighty and rare. Increases Intelligence by 18 and Perception by 10. Two-handed item.",
	  "int": 18,
	  "per": 10,
	  "value": 200,
	  "last": true,
	  "type": "weapon",
	  "key": "weapon_wizard_6",
	  "set": "wizard-6",
	  "klass": "wizard",
	  "index": "6",
	  "str": 0,
	  "con": 0
	},
	"weapon_base_0": {
	  "text": "No Weapon",
	  "notes": "No Weapon. ",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_base_0",
	  "set": "base-0",
	  "klass": "base",
	  "index": "0",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_0": {
	  "text": "Dark Souls Blade",
	  "notes": "Feasts upon foes' life essence to power its wicked strokes. Increases Strength by 20. ",
	  "str": 20,
	  "value": 150,
	  "type": "weapon",
	  "key": "weapon_special_0",
	  "set": "special-0",
	  "klass": "special",
	  "index": "0",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_1": {
	  "text": "Crystal Blade",
	  "notes": "Its glittering facets tell the tale of a hero. Increases all Stats by 6. ",
	  "str": 6,
	  "per": 6,
	  "con": 6,
	  "int": 6,
	  "value": 170,
	  "type": "weapon",
	  "key": "weapon_special_1",
	  "set": "special-1",
	  "klass": "special",
	  "index": "1"
	},
	"weapon_special_2": {
	  "text": "Stephen Weber's Shaft of the Dragon",
	  "notes": "Feel the potency of the dragon surge from within! Increases Strength and Perception by 25 each. ",
	  "str": 25,
	  "per": 25,
	  "value": 200,
	  "type": "weapon",
	  "key": "weapon_special_2",
	  "set": "special-2",
	  "klass": "special",
	  "index": "2",
	  "int": 0,
	  "con": 0
	},
	"weapon_special_3": {
	  "text": "Mustaine's Milestone Mashing Morning Star",
	  "notes": "Meetings, monsters, malaise: managed! Mash! Increases Strength, Intelligence, and Constitution by 17 each. ",
	  "str": 17,
	  "int": 17,
	  "con": 17,
	  "value": 200,
	  "type": "weapon",
	  "key": "weapon_special_3",
	  "set": "special-3",
	  "klass": "special",
	  "index": "3",
	  "per": 0
	},
	"weapon_special_critical": {
	  "text": "Critical Hammer of Bug-Crushing",
	  "notes": "This champion slew a critical GitHub foe where many warriors fell. Fashioned from the bones of Bug, this hammer deals a mighty critical hit. Increases Strength and Perception by 40 each. ",
	  "str": 40,
	  "per": 40,
	  "value": 200,
	  "type": "weapon",
	  "key": "weapon_special_critical",
	  "set": "special-critical",
	  "klass": "special",
	  "index": "critical",
	  "int": 0,
	  "con": 0
	},
	"weapon_special_takeThis": {
	  "text": "Take This Sword",
	  "notes": "This sword was earned by participating in a sponsored Challenge made by Take This. Congratulations! Increases all Stats by 5. ",
	  "value": 0,
	  "con": 5,
	  "int": 5,
	  "per": 5,
	  "str": 5,
	  "type": "weapon",
	  "key": "weapon_special_takeThis",
	  "set": "special-takeThis",
	  "klass": "special",
	  "index": "takeThis"
	},
	"weapon_special_tridentOfCrashingTides": {
	  "text": "Trident of Crashing Tides",
	  "notes": "Gives you the ability to command fish, and also deliver some mighty stabs to your tasks. Increases Intelligence by 15. ",
	  "int": 15,
	  "value": 130,
	  "type": "weapon",
	  "key": "weapon_special_tridentOfCrashingTides",
	  "set": "special-tridentOfCrashingTides",
	  "klass": "special",
	  "index": "tridentOfCrashingTides",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_taskwoodsLantern": {
	  "text": "Taskwoods Lantern",
	  "notes": "Given at the dawn of time to the guardian ghost of the Taskwood Orchards, this lantern can illuminate the deepest darkness and weave powerful spells. Increases Perception and Intelligence by 15 each. Two-handed item.",
	  "twoHanded": true,
	  "per": 15,
	  "int": 15,
	  "value": 130,
	  "type": "weapon",
	  "key": "weapon_special_taskwoodsLantern",
	  "set": "special-taskwoodsLantern",
	  "klass": "special",
	  "index": "taskwoodsLantern",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_bardInstrument": {
	  "text": "Bardic Lute",
	  "notes": "Strum a merry tune on this magical lute! Increases Intelligence and Perception by 4 each. Two-handed item.",
	  "twoHanded": true,
	  "per": 4,
	  "int": 4,
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_special_bardInstrument",
	  "set": "special-bardInstrument",
	  "klass": "special",
	  "index": "bardInstrument",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_lunarScythe": {
	  "text": "Lunar Scythe",
	  "notes": "Wax this scythe regularly, or its power will wane. Increases Strength and Perception by 7 each. Two-handed item.",
	  "twoHanded": true,
	  "str": 7,
	  "per": 7,
	  "value": 130,
	  "type": "weapon",
	  "key": "weapon_special_lunarScythe",
	  "set": "special-lunarScythe",
	  "klass": "special",
	  "index": "lunarScythe",
	  "int": 0,
	  "con": 0
	},
	"weapon_special_mammothRiderSpear": {
	  "text": "Mammoth Rider Spear",
	  "notes": "This rose quartz-tipped spear will imbue you with ancient spell-casting power. Increases Intelligence by 15. ",
	  "int": 15,
	  "value": 130,
	  "type": "weapon",
	  "key": "weapon_special_mammothRiderSpear",
	  "set": "special-mammothRiderSpear",
	  "klass": "special",
	  "index": "mammothRiderSpear",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_roguishRainbowMessage": {
	  "text": "Roguish Rainbow Message",
	  "notes": "This sparkly envelope contains messages of encouragement from Habiticans, and a touch of magic to help speed your deliveries! Increases Perception by 15. ",
	  "per": 15,
	  "value": 130,
	  "type": "weapon",
	  "key": "weapon_special_roguishRainbowMessage",
	  "set": "special-roguishRainbowMessage",
	  "klass": "special",
	  "index": "roguishRainbowMessage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"weapon_special_pageBanner": {
	  "text": "Page Banner",
	  "notes": "Wave your banner high to inspire confidence! Increases Strength by 16. ",
	  "str": 16,
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_special_pageBanner",
	  "set": "special-pageBanner",
	  "klass": "special",
	  "index": "pageBanner",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_skeletonKey": {
	  "text": "Skeleton Key",
	  "notes": "All the best Sneakthieves carry a key that can open any lock! Increases Constitution by 16. ",
	  "con": 16,
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_special_skeletonKey",
	  "set": "special-skeletonKey",
	  "klass": "special",
	  "index": "skeletonKey",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"weapon_special_nomadsScimitar": {
	  "text": "Nomad's Scimitar",
	  "notes": "The curved blade of this Scimitar is perfect for attacking Tasks from the back of a mount! Increases Intelligence by 16. ",
	  "int": 16,
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_special_nomadsScimitar",
	  "set": "special-nomadsScimitar",
	  "klass": "special",
	  "index": "nomadsScimitar",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fencingFoil": {
	  "text": "Fencing Foil",
	  "notes": "Should anyone dare to impugn your honor, you'll be ready with this fine foil! Increases Strength by 16. ",
	  "str": 16,
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_special_fencingFoil",
	  "set": "special-fencingFoil",
	  "klass": "special",
	  "index": "fencingFoil",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_tachi": {
	  "text": "Tachi",
	  "notes": "This light and curved sword will shred your tasks to ribbons! Increases Strength by 17. ",
	  "str": 17,
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_special_tachi",
	  "set": "special-tachi",
	  "klass": "special",
	  "index": "tachi",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_aetherCrystals": {
	  "text": "Aether Crystals",
	  "notes": "These bracers and crystals once belonged to the Lost Masterclasser herself. Increases all Stats by 10. Two-handed item.",
	  "con": 10,
	  "int": 10,
	  "per": 10,
	  "str": 10,
	  "value": 175,
	  "twoHanded": true,
	  "type": "weapon",
	  "key": "weapon_special_aetherCrystals",
	  "set": "special-aetherCrystals",
	  "klass": "special",
	  "index": "aetherCrystals"
	},
	"weapon_special_yeti": {
	  "specialClass": "warrior",
	  "set": "yetiSet",
	  "text": "Yeti-Tamer Spear",
	  "notes": "This spear allows its user to command any yeti. Increases Strength by 15. Limited Edition 2013-2014 Winter Gear. ",
	  "str": 15,
	  "value": 90,
	  "type": "weapon",
	  "key": "weapon_special_yeti",
	  "klass": "special",
	  "index": "yeti",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_ski": {
	  "specialClass": "rogue",
	  "set": "skiSet",
	  "text": "Ski-sassin Pole",
	  "notes": "A weapon capable of destroying hordes of enemies! It also helps the user make very nice parallel turns. Increases Strength by 8. Limited Edition 2013-2014 Winter Gear. ",
	  "str": 8,
	  "value": 90,
	  "type": "weapon",
	  "key": "weapon_special_ski",
	  "klass": "special",
	  "index": "ski",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_candycane": {
	  "specialClass": "wizard",
	  "set": "candycaneSet",
	  "twoHanded": true,
	  "text": "Candy Cane Staff",
	  "notes": "A powerful mage's staff. Powerfully DELICIOUS, we mean! Increases Intelligence by 15 and Perception by 7. Limited Edition 2013-2014 Winter Gear. Two-handed item.",
	  "int": 15,
	  "per": 7,
	  "value": 160,
	  "type": "weapon",
	  "key": "weapon_special_candycane",
	  "klass": "special",
	  "index": "candycane",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_snowflake": {
	  "specialClass": "healer",
	  "set": "snowflakeSet",
	  "text": "Snowflake Wand",
	  "notes": "This wand sparkles with unlimited healing power. Increases Intelligence by 9. Limited Edition 2013-2014 Winter Gear. ",
	  "int": 9,
	  "value": 90,
	  "type": "weapon",
	  "key": "weapon_special_snowflake",
	  "klass": "special",
	  "index": "snowflake",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_springRogue": {
	  "set": "stealthyKittySet",
	  "event": {
		"start": "2014-03-21",
		"end": "2014-05-01",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Hook Claws",
	  "notes": "Great for scaling tall buildings, and also for shredding carpets. Increases Strength by 8. Limited Edition 2014 Spring Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_springRogue",
	  "klass": "special",
	  "index": "springRogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_springWarrior": {
	  "set": "mightyBunnySet",
	  "event": {
		"start": "2014-03-21",
		"end": "2014-05-01",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Carrot Sword",
	  "notes": "This mighty sword can slice foes with ease! It also makes a delicious mid-battle snack. Increases Strength by 15. Limited Edition 2014 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_springWarrior",
	  "klass": "special",
	  "index": "springWarrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_springMage": {
	  "set": "magicMouseSet",
	  "event": {
		"start": "2014-03-21",
		"end": "2014-05-01",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Swiss Cheese Staff",
	  "notes": "Only the most powerful rodents can brave their hunger to wield this potent staff. Increases Intelligence by 15 and Perception by 7. Limited Edition 2014 Spring Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_springMage",
	  "klass": "special",
	  "index": "springMage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_springHealer": {
	  "set": "lovingPupSet",
	  "event": {
		"start": "2014-03-21",
		"end": "2014-05-01",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Lovely Bone",
	  "notes": "FETCH! Increases Intelligence by 9. Limited Edition 2014 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_springHealer",
	  "klass": "special",
	  "index": "springHealer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summerRogue": {
	  "set": "roguishPirateSet",
	  "event": {
		"start": "2014-06-20",
		"end": "2014-08-01",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Pirate Cutlass",
	  "notes": "Avast! You'll make those Dailies walk the plank! Increases Strength by 8. Limited Edition 2014 Summer Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_summerRogue",
	  "klass": "special",
	  "index": "summerRogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summerWarrior": {
	  "set": "daringSwashbucklerSet",
	  "event": {
		"start": "2014-06-20",
		"end": "2014-08-01",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Seafaring Slicer",
	  "notes": "There isn't a task in any To Do list willing to tangle with this gnarly knife! Increases Strength by 15. Limited Edition 2014 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_summerWarrior",
	  "klass": "special",
	  "index": "summerWarrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summerMage": {
	  "set": "emeraldMermageSet",
	  "event": {
		"start": "2014-06-20",
		"end": "2014-08-01",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Kelp Catcher",
	  "notes": "This trident is used to spear seaweed effectively, for extra-productive kelp harvesting! Increases Intelligence by 15 and Perception by 7. Limited Edition 2014 Summer Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_summerMage",
	  "klass": "special",
	  "index": "summerMage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_summerHealer": {
	  "set": "reefSeahealerSet",
	  "event": {
		"start": "2014-06-20",
		"end": "2014-08-01",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Wand of the Shallows",
	  "notes": "This wand, made of aquamarine and live coral, is very attractive to schools of fish. Increases Intelligence by 9. Limited Edition 2014 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_summerHealer",
	  "klass": "special",
	  "index": "summerHealer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fallRogue": {
	  "set": "vampireSmiterSet",
	  "event": {
		"start": "2014-09-21",
		"end": "2014-11-01",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Silver Stake",
	  "notes": "Dispatches undead. Also grants a bonus against werewolves, because you can never be too careful. Increases Strength by 8. Limited Edition 2014 Autumn Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_fallRogue",
	  "klass": "special",
	  "index": "fallRogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fallWarrior": {
	  "set": "monsterOfScienceSet",
	  "event": {
		"start": "2014-09-21",
		"end": "2014-11-01",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Grabby Claw of Science",
	  "notes": "This grabby claw is at the very cutting edge of technology. Increases Strength by 15. Limited Edition 2014 Autumn Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_fallWarrior",
	  "klass": "special",
	  "index": "fallWarrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fallMage": {
	  "set": "witchyWizardSet",
	  "event": {
		"start": "2014-09-21",
		"end": "2014-11-01",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Magic Broom",
	  "notes": "This enchanted broom flies faster than a dragon! Increases Intelligence by 15 and Perception by 7. Limited Edition 2014 Autumn Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_fallMage",
	  "klass": "special",
	  "index": "fallMage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_fallHealer": {
	  "set": "mummyMedicSet",
	  "event": {
		"start": "2014-09-21",
		"end": "2014-11-01",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Scarab Wand",
	  "notes": "The scarab on this wand protects and heals its wielder. Increases Intelligence by 9. Limited Edition 2014 Autumn Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_fallHealer",
	  "klass": "special",
	  "index": "fallHealer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2015Rogue": {
	  "set": "icicleDrakeSet",
	  "event": {
		"start": "2014-12-21",
		"end": "2015-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Ice Spike",
	  "notes": "You truly, definitely, absolutely just picked these up off of the ground. Increases Strength by 8. Limited Edition 2014-2015 Winter Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_winter2015Rogue",
	  "klass": "special",
	  "index": "winter2015Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2015Warrior": {
	  "set": "gingerbreadSet",
	  "event": {
		"start": "2014-12-21",
		"end": "2015-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Gumdrop Sword",
	  "notes": "This delicious sword probably attracts monsters... but you're up for the challenge! Increases Strength by 15. Limited Edition 2014-2015 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_winter2015Warrior",
	  "klass": "special",
	  "index": "winter2015Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2015Mage": {
	  "set": "northMageSet",
	  "event": {
		"start": "2014-12-21",
		"end": "2015-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Winter-lit Staff",
	  "notes": "The light of this crystal staff fills hearts with cheer. Increases Intelligence by 15 and Perception by 7. Limited Edition 2014-2015 Winter Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_winter2015Mage",
	  "klass": "special",
	  "index": "winter2015Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_winter2015Healer": {
	  "set": "soothingSkaterSet",
	  "event": {
		"start": "2014-12-21",
		"end": "2015-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Soothing Scepter",
	  "notes": "This scepter warms sore muscles and soothes away stress. Increases Intelligence by 9. Limited Edition 2014-2015 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_winter2015Healer",
	  "klass": "special",
	  "index": "winter2015Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2015Rogue": {
	  "set": "sneakySqueakerSet",
	  "event": {
		"start": "2015-03-20",
		"end": "2015-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Exploding Squeak",
	  "notes": "Don't let the sound fool you - these explosives pack a punch. Increases Strength by 8. Limited Edition 2015 Spring Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_spring2015Rogue",
	  "klass": "special",
	  "index": "spring2015Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2015Warrior": {
	  "set": "bewareDogSet",
	  "event": {
		"start": "2015-03-20",
		"end": "2015-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Bone Club",
	  "notes": "It is a real bone club for real fierce doggies and is definitely not a chew toy that the Seasonal Sorceress gave you because who's a good doggy? Whoooo's a good doggy?? It's you!!! You're a good doggy!!! Increases Strength by 15. Limited Edition 2015 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_spring2015Warrior",
	  "klass": "special",
	  "index": "spring2015Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2015Mage": {
	  "set": "magicianBunnySet",
	  "event": {
		"start": "2015-03-20",
		"end": "2015-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Magician's Wand",
	  "notes": "Conjure up a carrot for yourself with this fancy wand. Increases Intelligence by 15 and Perception by 7. Limited Edition 2015 Spring Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_spring2015Mage",
	  "klass": "special",
	  "index": "spring2015Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_spring2015Healer": {
	  "set": "comfortingKittySet",
	  "event": {
		"start": "2015-03-20",
		"end": "2015-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Cat Rattle",
	  "notes": "When you wave it, it makes a fascinating clickety noise that would keep ANYONE entertained for hours. Increases Intelligence by 9. Limited Edition 2015 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_spring2015Healer",
	  "klass": "special",
	  "index": "spring2015Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2015Rogue": {
	  "set": "reefRenegadeSet",
	  "event": {
		"start": "2015-06-20",
		"end": "2015-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Firing Coral",
	  "notes": "This relative of fire coral has the ability to propel its venom through the water. Increases Strength by 8. Limited Edition 2015 Summer Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_summer2015Rogue",
	  "klass": "special",
	  "index": "summer2015Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2015Warrior": {
	  "set": "sunfishWarriorSet",
	  "event": {
		"start": "2015-06-20",
		"end": "2015-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Sun Swordfish",
	  "notes": "The Sun Swordfish is a fearsome weapon, provided that it can be induced to stop wriggling. Increases Strength by 15. Limited Edition 2015 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_summer2015Warrior",
	  "klass": "special",
	  "index": "summer2015Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2015Mage": {
	  "set": "shipSoothsayerSet",
	  "event": {
		"start": "2015-06-20",
		"end": "2015-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Soothsayer Staff",
	  "notes": "Hidden power glimmers in the jewels of this staff. Increases Intelligence by 15 and Perception by 7. Limited Edition 2015 Summer Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_summer2015Mage",
	  "klass": "special",
	  "index": "summer2015Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_summer2015Healer": {
	  "set": "strappingSailorSet",
	  "event": {
		"start": "2015-06-20",
		"end": "2015-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Wand of the Waves",
	  "notes": "Cures seasickness and sea sickness! Increases Intelligence by 9. Limited Edition 2015 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_summer2015Healer",
	  "klass": "special",
	  "index": "summer2015Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2015Rogue": {
	  "set": "battleRogueSet",
	  "event": {
		"start": "2015-09-21",
		"end": "2015-11-01",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Bat-tle Ax",
	  "notes": "Fearsome To Do's cower before the flapping of this ax. Increases Strength by 8. Limited Edition 2015 Autumn Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_fall2015Rogue",
	  "klass": "special",
	  "index": "fall2015Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2015Warrior": {
	  "set": "scarecrowWarriorSet",
	  "event": {
		"start": "2015-09-21",
		"end": "2015-11-01",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Wooden Plank",
	  "notes": "Great for elevating things in cornfields and/or smacking tasks. Increases Strength by 15. Limited Edition 2015 Autumn Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_fall2015Warrior",
	  "klass": "special",
	  "index": "fall2015Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2015Mage": {
	  "set": "stitchWitchSet",
	  "event": {
		"start": "2015-09-21",
		"end": "2015-11-01",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Enchanted Thread",
	  "notes": "A powerful Stitch Witch can control this enchanted thread without even touching it! Increases Intelligence by 15 and Perception by 7. Limited Edition 2015 Autumn Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_fall2015Mage",
	  "klass": "special",
	  "index": "fall2015Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_fall2015Healer": {
	  "set": "potionerSet",
	  "event": {
		"start": "2015-09-21",
		"end": "2015-11-01",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Swamp-Slime Potion",
	  "notes": "Brewed to perfection! Now you just have to convince yourself to drink it. Increases Intelligence by 9. Limited Edition 2015 Autumn Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_fall2015Healer",
	  "klass": "special",
	  "index": "fall2015Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2016Rogue": {
	  "set": "cocoaSet",
	  "event": {
		"start": "2015-12-18",
		"end": "2016-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Cocoa Mug",
	  "notes": "Warming drink, or boiling projectile? You decide... Increases Strength by 8. Limited Edition 2015-2016 Winter Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_winter2016Rogue",
	  "klass": "special",
	  "index": "winter2016Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2016Warrior": {
	  "set": "snowDaySet",
	  "event": {
		"start": "2015-12-18",
		"end": "2016-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Sturdy Shovel",
	  "notes": "Shovel overdue tasks out of the way! Increases Strength by 15. Limited Edition 2015-2016 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_winter2016Warrior",
	  "klass": "special",
	  "index": "winter2016Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2016Mage": {
	  "set": "snowboardingSet",
	  "event": {
		"start": "2015-12-18",
		"end": "2016-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Sorcerous Snowboard",
	  "notes": "Your moves are so sick, they must be magic! Increases Intelligence by 15 and Perception by 7. Limited Edition 2015-2016 Winter Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_winter2016Mage",
	  "klass": "special",
	  "index": "winter2016Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_winter2016Healer": {
	  "set": "festiveFairySet",
	  "event": {
		"start": "2015-12-18",
		"end": "2016-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Confetti Cannon",
	  "notes": "WHEEEEEEEEEE!!!!!!! HAPPY WINTER WONDERLAND!!!!!!!! Increases Intelligence by 9. Limited Edition 2015-2016 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_winter2016Healer",
	  "klass": "special",
	  "index": "winter2016Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2016Rogue": {
	  "set": "cleverDogSet",
	  "event": {
		"start": "2016-03-18",
		"end": "2016-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Fire Bolas",
	  "notes": "You've mastered the ball, the club, and the knife. Now you advance to juggling fire! Awoo! Increases Strength by 8. Limited Edition 2016 Spring Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_spring2016Rogue",
	  "klass": "special",
	  "index": "spring2016Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2016Warrior": {
	  "set": "braveMouseSet",
	  "event": {
		"start": "2016-03-18",
		"end": "2016-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Cheese Mallet",
	  "notes": "No one has as many friends as the mouse with tender cheeses. Increases Strength by 15. Limited Edition 2016 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_spring2016Warrior",
	  "klass": "special",
	  "index": "spring2016Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2016Mage": {
	  "set": "grandMalkinSet",
	  "event": {
		"start": "2016-03-18",
		"end": "2016-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Staff of Bells",
	  "notes": "Abra-cat-abra! So dazzling, you might mesmerize yourself! Ooh... it jingles... Increases Intelligence by 15 and Perception by 7. Limited Edition 2016 Spring Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_spring2016Mage",
	  "klass": "special",
	  "index": "spring2016Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_spring2016Healer": {
	  "set": "springingBunnySet",
	  "event": {
		"start": "2016-03-18",
		"end": "2016-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Spring Flower Wand",
	  "notes": "With a wave and a wink, you bring the fields and forests into bloom! Or bop troublesome mice on the head. Increases Intelligence by 9. Limited Edition 2016 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_spring2016Healer",
	  "klass": "special",
	  "index": "spring2016Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2016Rogue": {
	  "set": "summer2016EelSet",
	  "event": {
		"start": "2016-06-21",
		"end": "2016-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Electric Rod",
	  "notes": "Anyone who battles you is in for a shocking surprise... Increases Strength by 8. Limited Edition 2016 Summer Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_summer2016Rogue",
	  "klass": "special",
	  "index": "summer2016Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2016Warrior": {
	  "set": "summer2016SharkWarriorSet",
	  "event": {
		"start": "2016-06-21",
		"end": "2016-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Hooked Sword",
	  "notes": "Bite those tough tasks with this hooked sword! Increases Strength by 15. Limited Edition 2016 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_summer2016Warrior",
	  "klass": "special",
	  "index": "summer2016Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2016Mage": {
	  "set": "summer2016DolphinMageSet",
	  "event": {
		"start": "2016-06-21",
		"end": "2016-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Seafoam Staff",
	  "notes": "All the power of the seas filters through this staff. Increases Intelligence by 15 and Perception by 7. Limited Edition 2016 Summer Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_summer2016Mage",
	  "klass": "special",
	  "index": "summer2016Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_summer2016Healer": {
	  "set": "summer2016SeahorseHealerSet",
	  "event": {
		"start": "2016-06-21",
		"end": "2016-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Healing Trident",
	  "notes": "One spike harms, the other heals. Increases Intelligence by 9. Limited Edition 2016 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_summer2016Healer",
	  "klass": "special",
	  "index": "summer2016Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2016Rogue": {
	  "set": "fall2016BlackWidowSet",
	  "event": {
		"start": "2016-09-20",
		"end": "2016-11-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Spiderbite Dagger",
	  "notes": "Feel the sting of the spider's bite! Increases Strength by 8. Limited Edition 2016 Autumn Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_fall2016Rogue",
	  "klass": "special",
	  "index": "fall2016Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2016Warrior": {
	  "set": "fall2016SwampThingSet",
	  "event": {
		"start": "2016-09-20",
		"end": "2016-11-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Attacking Roots",
	  "notes": "Attack your tasks with these twisting roots! Increases Strength by 15. Limited Edition 2016 Autumn Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_fall2016Warrior",
	  "klass": "special",
	  "index": "fall2016Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2016Mage": {
	  "set": "fall2016WickedSorcererSet",
	  "event": {
		"start": "2016-09-20",
		"end": "2016-11-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Ominous Orb",
	  "notes": "Don't ask this orb to tell your future... Increases Intelligence by 15 and Perception by 7. Limited Edition 2016 Autumn Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_fall2016Mage",
	  "klass": "special",
	  "index": "fall2016Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_fall2016Healer": {
	  "set": "fall2016GorgonHealerSet",
	  "event": {
		"start": "2016-09-20",
		"end": "2016-11-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Venomous Serpent",
	  "notes": "One bite harms, and another bite heals. Increases Intelligence by 9. Limited Edition 2016 Autumn Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_fall2016Healer",
	  "klass": "special",
	  "index": "fall2016Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2017Rogue": {
	  "set": "winter2017FrostyRogueSet",
	  "event": {
		"start": "2016-12-16",
		"end": "2017-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Ice Axe",
	  "notes": "This axe is great for attack, defense, and ice-climbing! Increases Strength by 8. Limited Edition 2016-2017 Winter Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_winter2017Rogue",
	  "klass": "special",
	  "index": "winter2017Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2017Warrior": {
	  "set": "winter2017IceHockeySet",
	  "event": {
		"start": "2016-12-16",
		"end": "2017-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Stick of Might",
	  "notes": "Conquer your goals by whacking them with this mighty stick! Increases Strength by 15. Limited Edition 2016-2017 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_winter2017Warrior",
	  "klass": "special",
	  "index": "winter2017Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2017Mage": {
	  "set": "winter2017WinterWolfSet",
	  "event": {
		"start": "2016-12-16",
		"end": "2017-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Winter Wolf Crystal Staff",
	  "notes": "The glowing blue crystal set in the end of this staff is called the Winter Wolf's Eye! It channels magic from snow and ice. Increases Intelligence by 15 and Perception by 7. Limited Edition 2016-2017 Winter Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_winter2017Mage",
	  "klass": "special",
	  "index": "winter2017Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_winter2017Healer": {
	  "set": "winter2017SugarPlumSet",
	  "event": {
		"start": "2016-12-16",
		"end": "2017-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Sugar-Spun Wand",
	  "notes": "This wand can reach into your dreams and bring you visions of dancing sugarplums. Increases Intelligence by 9. Limited Edition 2016-2017 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_winter2017Healer",
	  "klass": "special",
	  "index": "winter2017Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2017Rogue": {
	  "set": "spring2017SneakyBunnySet",
	  "event": {
		"start": "2017-03-21",
		"end": "2017-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Karrotana",
	  "notes": "These blades will make quick work of tasks, but also are handy for slicing vegetables! Yum! Increases Strength by 8. Limited Edition 2017 Spring Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_spring2017Rogue",
	  "klass": "special",
	  "index": "spring2017Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2017Warrior": {
	  "set": "spring2017FelineWarriorSet",
	  "event": {
		"start": "2017-03-21",
		"end": "2017-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Feathery Whip",
	  "notes": "This mighty whip will tame the unruliest task. But.. It's also… So FUN AND DISTRACTING!! Increases Strength by 15. Limited Edition 2017 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_spring2017Warrior",
	  "klass": "special",
	  "index": "spring2017Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2017Mage": {
	  "set": "spring2017CanineConjurorSet",
	  "event": {
		"start": "2017-03-21",
		"end": "2017-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Magic Fetching Stick",
	  "notes": "When you're not crafting spells with it, you can throw it and then bring it back! What fun!! Increases Intelligence by 15 and Perception by 7. Limited Edition 2017 Spring Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_spring2017Mage",
	  "klass": "special",
	  "index": "spring2017Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_spring2017Healer": {
	  "set": "spring2017FloralMouseSet",
	  "event": {
		"start": "2017-03-21",
		"end": "2017-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Egg Wand",
	  "notes": "The true magic of this wand is the secret of new life inside the colorful shell. Increases Intelligence by 9. Limited Edition 2017 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_spring2017Healer",
	  "klass": "special",
	  "index": "spring2017Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2017Rogue": {
	  "set": "summer2017SeaDragonSet",
	  "event": {
		"start": "2017-06-20",
		"end": "2017-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Sea Dragon Fins",
	  "notes": "The edges of these fins are razor-sharp. Increases Strength by 8. Limited Edition 2017 Summer Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_summer2017Rogue",
	  "klass": "special",
	  "index": "summer2017Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2017Warrior": {
	  "set": "summer2017SandcastleWarriorSet",
	  "event": {
		"start": "2017-06-20",
		"end": "2017-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Mightiest Beach Umbrella",
	  "notes": "All fear it. Increases Strength by 15. Limited Edition 2017 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_summer2017Warrior",
	  "klass": "special",
	  "index": "summer2017Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2017Mage": {
	  "set": "summer2017WhirlpoolMageSet",
	  "event": {
		"start": "2017-06-20",
		"end": "2017-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Whirlpool Whips",
	  "notes": "Summon up magical whips of boiling water to smite your tasks! Increases Intelligence by 15 and Perception by 7. Limited Edition 2017 Summer Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_summer2017Mage",
	  "klass": "special",
	  "index": "summer2017Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_summer2017Healer": {
	  "set": "summer2017SeashellSeahealerSet",
	  "event": {
		"start": "2017-06-20",
		"end": "2017-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Pearl Wand",
	  "notes": "A single touch from this pearl-tipped wand soothes away all wounds. Increases Intelligence by 9. Limited Edition 2017 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_summer2017Healer",
	  "klass": "special",
	  "index": "summer2017Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2017Rogue": {
	  "set": "fall2017TrickOrTreatSet",
	  "event": {
		"start": "2017-09-21",
		"end": "2017-11-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Candied Apple Mace",
	  "notes": "Defeat your foes with sweetness! Increases Strength by 8. Limited Edition 2017 Autumn Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_fall2017Rogue",
	  "klass": "special",
	  "index": "fall2017Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2017Warrior": {
	  "set": "fall2017HabitoweenSet",
	  "event": {
		"start": "2017-09-21",
		"end": "2017-11-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Candy Corn Lance",
	  "notes": "All your foes will cower before this tasty-looking lance, regardless of whether they're ghosts, monsters, or red To Do's. Increases Strength by 15. Limited Edition 2017 Autumn Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_fall2017Warrior",
	  "klass": "special",
	  "index": "fall2017Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2017Mage": {
	  "set": "fall2017MasqueradeSet",
	  "event": {
		"start": "2017-09-21",
		"end": "2017-11-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Spooky Staff",
	  "notes": "The eyes of the glowing skull on this staff radiate magic and mystery. Increases Intelligence by 15 and Perception by 7. Limited Edition 2017 Autumn Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_fall2017Mage",
	  "klass": "special",
	  "index": "fall2017Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_fall2017Healer": {
	  "set": "fall2017HauntedHouseSet",
	  "event": {
		"start": "2017-09-21",
		"end": "2017-11-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Creepy Candelabra",
	  "notes": "This light dispels fear and lets others know you're here to help. Increases Intelligence by 9. Limited Edition 2017 Autumn Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_fall2017Healer",
	  "klass": "special",
	  "index": "fall2017Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2018Rogue": {
	  "set": "winter2018ReindeerSet",
	  "event": {
		"start": "2017-12-19",
		"end": "2018-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Peppermint Hook",
	  "notes": "Perfect for climbing walls or distracting your foes with sweet, sweet candy. Increases Strength by 8. Limited Edition 2017-2018 Winter Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_winter2018Rogue",
	  "klass": "special",
	  "index": "winter2018Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2018Warrior": {
	  "set": "winter2018GiftWrappedSet",
	  "event": {
		"start": "2017-12-19",
		"end": "2018-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Holiday Bow Hammer",
	  "notes": "The sparkly appearance of this bright weapon will dazzle your enemies as you swing it! Increases Strength by 15. Limited Edition 2017-2018 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_winter2018Warrior",
	  "klass": "special",
	  "index": "winter2018Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2018Mage": {
	  "set": "winter2018ConfettiSet",
	  "event": {
		"start": "2017-12-19",
		"end": "2018-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Holiday Confetti",
	  "notes": "Magic--and glitter--is in the air! Increases Intelligence by 15 and Perception by 7. Limited Edition 2017-2018 Winter Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_winter2018Mage",
	  "klass": "special",
	  "index": "winter2018Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_winter2018Healer": {
	  "set": "winter2018MistletoeSet",
	  "event": {
		"start": "2017-12-19",
		"end": "2018-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Mistletoe Wand",
	  "notes": "This mistletoe ball is sure to enchant and delight passersby! Increases Intelligence by 9. Limited Edition 2017-2018 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_winter2018Healer",
	  "klass": "special",
	  "index": "winter2018Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2018Rogue": {
	  "set": "spring2018DucklingRogueSet",
	  "event": {
		"start": "2018-03-20",
		"end": "2018-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Buoyant Bullrush",
	  "notes": "What might appear to be cute cattails are actually quite effective weapons in the right wings. Increases Strength by 8. Limited Edition 2018 Spring Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_spring2018Rogue",
	  "klass": "special",
	  "index": "spring2018Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2018Warrior": {
	  "set": "spring2018SunriseWarriorSet",
	  "event": {
		"start": "2018-03-20",
		"end": "2018-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Axe of Daybreak",
	  "notes": "Made of bright gold, this axe is mighty enough to attack the reddest task! Increases Strength by 15. Limited Edition 2018 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_spring2018Warrior",
	  "klass": "special",
	  "index": "spring2018Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2018Mage": {
	  "set": "spring2018TulipMageSet",
	  "event": {
		"start": "2018-03-20",
		"end": "2018-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Tulip Stave",
	  "notes": "This magic flower never wilts! Increases Intelligence by 15 and Perception by 7. Limited Edition 2018 Spring Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_spring2018Mage",
	  "klass": "special",
	  "index": "spring2018Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_spring2018Healer": {
	  "set": "spring2018GarnetHealerSet",
	  "event": {
		"start": "2018-03-20",
		"end": "2018-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Garnet Rod",
	  "notes": "The stones in this staff will focus your power when you cast healing spells! Increases Intelligence by 9. Limited Edition 2018 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_spring2018Healer",
	  "klass": "special",
	  "index": "spring2018Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2018Rogue": {
	  "set": "summer2018FisherRogueSet",
	  "event": {
		"start": "2018-06-19",
		"end": "2018-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Fishing Rod",
	  "notes": "This lightweight, practically unbreakable rod and reel can be dual-wielded to maximize your DPS (Dragonfish Per Summer). Increases Strength by 8. Limited Edition 2018 Summer Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_summer2018Rogue",
	  "klass": "special",
	  "index": "summer2018Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2018Warrior": {
	  "set": "summer2018BettaFishWarriorSet",
	  "event": {
		"start": "2018-06-19",
		"end": "2018-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Betta Fish Spear",
	  "notes": "Mighty enough for battle, elegant enough for ceremony, this exquisitely crafted spear shows you will protect your home surf no matter what! Increases Strength by 15. Limited Edition 2018 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_summer2018Warrior",
	  "klass": "special",
	  "index": "summer2018Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2018Mage": {
	  "set": "summer2018LionfishMageSet",
	  "event": {
		"start": "2018-06-19",
		"end": "2018-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Lionfish Fin Rays",
	  "notes": "Underwater, magic based on fire, ice, or electricity can prove hazardous to the Mage wielding it. Conjuring poisonous spines, however, works brilliantly! Increases Intelligence by 15 and Perception by 7. Limited Edition 2018 Summer Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_summer2018Mage",
	  "klass": "special",
	  "index": "summer2018Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_summer2018Healer": {
	  "set": "summer2018MerfolkMonarchSet",
	  "event": {
		"start": "2018-06-19",
		"end": "2018-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Merfolk Monarch Trident",
	  "notes": "With a benevolent gesture, you command healing water to flow through your dominions in waves. Increases Intelligence by 9. Limited Edition 2018 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_summer2018Healer",
	  "klass": "special",
	  "index": "summer2018Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2018Rogue": {
	  "set": "fall2018AlterEgoSet",
	  "event": {
		"start": "2018-09-20",
		"end": "2018-11-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Vial of Clarity",
	  "notes": "When you need to come back to your senses, when you need a little boost to make the right decision, take a deep breath and a sip. It'll be OK! Increases Strength by 8. Limited Edition 2018 Autumn Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_fall2018Rogue",
	  "klass": "special",
	  "index": "fall2018Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2018Warrior": {
	  "set": "fall2018MinotaurWarriorSet",
	  "event": {
		"start": "2018-09-20",
		"end": "2018-11-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Whip of Minos",
	  "notes": "Not quite long enough to unwind behind you for keeping your bearings in a maze. Well, maybe a very small maze. Increases Strength by 15. Limited Edition 2018 Autumn Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_fall2018Warrior",
	  "klass": "special",
	  "index": "fall2018Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2018Mage": {
	  "set": "fall2018CandymancerMageSet",
	  "event": {
		"start": "2018-09-20",
		"end": "2018-11-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Staff of Sweetness",
	  "notes": "This is no ordinary lollipop! The glowing orb of magic sugar atop this staff has the power to make good habits stick to you. Increases Intelligence by 15 and Perception by 7. Limited Edition 2018 Autumn Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_fall2018Mage",
	  "klass": "special",
	  "index": "fall2018Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_fall2018Healer": {
	  "set": "fall2018CarnivorousPlantSet",
	  "event": {
		"start": "2018-09-20",
		"end": "2018-11-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Starving Staff",
	  "notes": "Just keep this staff fed, and it will bestow Blessings. If you forget to feed it, keep your fingers out of reach. Increases Intelligence by 9. Limited Edition 2018 Autumn Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_fall2018Healer",
	  "klass": "special",
	  "index": "fall2018Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2019Rogue": {
	  "set": "winter2019PoinsettiaSet",
	  "event": {
		"start": "2018-12-19",
		"end": "2019-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Poinsettia Bouquet",
	  "notes": "Use this festive bouquet to further camouflage yourself, or generously gift it to brighten a friend's day! Increases Strength by 8. Limited Edition 2018-2019 Winter Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_winter2019Rogue",
	  "klass": "special",
	  "index": "winter2019Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2019Warrior": {
	  "set": "winter2019BlizzardSet",
	  "event": {
		"start": "2018-12-19",
		"end": "2019-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Snowflake Halberd",
	  "notes": "This snowflake was grown, ice crystal by ice crystal, into a diamond-hard blade! Increases Strength by 15. Limited Edition 2018-2019 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_winter2019Warrior",
	  "klass": "special",
	  "index": "winter2019Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2019Mage": {
	  "set": "winter2019PyrotechnicSet",
	  "event": {
		"start": "2018-12-19",
		"end": "2019-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Fiery Dragon Staff",
	  "notes": "Watch out! This explosive staff is ready to help you take on all comers. Increases Intelligence by 15 and Perception by 7. Limited Edition 2018-2019 Winter Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_winter2019Mage",
	  "klass": "special",
	  "index": "winter2019Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_winter2019Healer": {
	  "set": "winter2019WinterStarSet",
	  "event": {
		"start": "2018-12-19",
		"end": "2019-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Wand of Winter",
	  "notes": "Winter can be a time of rest and healing, and so this wand of winter magic can help to soothe the most grievous hurts. Increases Intelligence by 9. Limited Edition 2018-2019 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_winter2019Healer",
	  "klass": "special",
	  "index": "winter2019Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2019Rogue": {
	  "set": "spring2019CloudRogueSet",
	  "event": {
		"start": "2019-03-19",
		"end": "2019-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Lightning Bolt",
	  "notes": "These weapons contain the power of the sky and rain. We recommend that you not use them while immersed in water. Increases Strength by 8. Limited Edition 2019 Spring Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_spring2019Rogue",
	  "klass": "special",
	  "index": "spring2019Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2019Warrior": {
	  "set": "spring2019OrchidWarriorSet",
	  "event": {
		"start": "2019-03-19",
		"end": "2019-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Stem Sword",
	  "notes": "Bad habits cower before this verdant blade. Increases Strength by 15. Limited Edition 2019 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_spring2019Warrior",
	  "klass": "special",
	  "index": "spring2019Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2019Mage": {
	  "set": "spring2019AmberMageSet",
	  "event": {
		"start": "2019-03-19",
		"end": "2019-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Amber Staff",
	  "notes": "There's a mosquito embedded in the stone at the end of this staff! May or may not include Dino DNA. Increases Intelligence by 15 and Perception by 7. Limited Edition 2019 Spring Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_spring2019Mage",
	  "klass": "special",
	  "index": "spring2019Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_spring2019Healer": {
	  "set": "spring2019RobinHealerSet",
	  "event": {
		"start": "2019-03-19",
		"end": "2019-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Spring Song",
	  "notes": "Your song of flowers and rain will soothe the spirits of all who hear. Increases Intelligence by 9. Limited Edition 2019 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_spring2019Healer",
	  "klass": "special",
	  "index": "spring2019Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2019Rogue": {
	  "set": "summer2019HammerheadRogueSet",
	  "event": {
		"start": "2019-06-18",
		"end": "2019-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Antiquated Anchor",
	  "notes": "This ancient and formidable weapon will help you win any undersea battle. Increases Strength by 8. Limited Edition 2019 Summer Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_summer2019Rogue",
	  "klass": "special",
	  "index": "summer2019Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2019Warrior": {
	  "set": "summer2019SeaTurtleWarriorSet",
	  "event": {
		"start": "2019-06-18",
		"end": "2019-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Red Coral",
	  "notes": "Now you're fighting with fractals! Increases Strength by 15. Limited Edition 2019 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_summer2019Warrior",
	  "klass": "special",
	  "index": "summer2019Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2019Mage": {
	  "specialClass": "wizard",
	  "set": "summer2019WaterLilyMageSet",
	  "text": "Brilliant Bloom",
	  "notes": "Fruit of your labors, first picked from the pool, this little treasure empowers and inspires. Increases Intelligence by 15. Limited Edition 2019 Summer Gear. ",
	  "value": 90,
	  "int": 15,
	  "per": 0,
	  "twoHanded": false,
	  "event": {
		"start": "2019-06-18",
		"end": "2019-08-02",
		"gear": true
	  },
	  "type": "weapon",
	  "key": "weapon_special_summer2019Mage",
	  "klass": "special",
	  "index": "summer2019Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_summer2019Healer": {
	  "set": "summer2019ConchHealerSet",
	  "event": {
		"start": "2019-06-18",
		"end": "2019-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Bubble Wand",
	  "notes": "The bubbles from this wand capture healing energy and ancient oceanic magic. Increases Intelligence by 9. Limited Edition 2019 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_summer2019Healer",
	  "klass": "special",
	  "index": "summer2019Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2019Rogue": {
	  "set": "fall2019OperaticSpecterSet",
	  "event": {
		"start": "2019-09-24",
		"end": "2019-11-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Music Stand",
	  "notes": "Whether you're conducting the orchestra or singing an aria, this helpful device keeps your hands free for dramatic gestures! Increases Strength by 8. Limited Edition 2019 Autumn Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_fall2019Rogue",
	  "klass": "special",
	  "index": "fall2019Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2019Warrior": {
	  "set": "fall2019RavenSet",
	  "event": {
		"start": "2019-09-24",
		"end": "2019-11-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Talon Trident",
	  "notes": "Prepare to rend your foes with the talons of a raven! Increases Strength by 15. Limited Edition 2019 Autumn Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_fall2019Warrior",
	  "klass": "special",
	  "index": "fall2019Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2019Mage": {
	  "set": "fall2019CyclopsSet",
	  "event": {
		"start": "2019-09-24",
		"end": "2019-11-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "One-Eyed Staff",
	  "notes": "Be it forging thunderbolts, raising fortifications, or simply striking terror into the hearts of mortals, this staff lends the power of giants to work wonders. Increases Intelligence by 15 and Perception by 7. Limited Edition 2019 Autumn Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_fall2019Mage",
	  "klass": "special",
	  "index": "fall2019Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_fall2019Healer": {
	  "set": "fall2019LichSet",
	  "event": {
		"start": "2019-09-24",
		"end": "2019-11-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Fearsome Phylactery",
	  "notes": "This phylactery can call on the spirits of tasks long slain and use their healing power. Increases Intelligence by 9. Limited Edition 2019 Autumn Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_fall2019Healer",
	  "klass": "special",
	  "index": "fall2019Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_ks2019": {
	  "text": "Mythic Gryphon Glaive",
	  "notes": "Curved as a gryphon's beak and talons, this ornate polearm reminds you to power through when the task ahead feels daunting. Increases Strength by 20. ",
	  "value": 0,
	  "str": 20,
	  "type": "weapon",
	  "key": "weapon_special_ks2019",
	  "set": "special-ks2019",
	  "klass": "special",
	  "index": "ks2019",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2020Rogue": {
	  "set": "winter2020LanternSet",
	  "event": {
		"start": "2019-12-19",
		"end": "2020-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Lantern Rod",
	  "notes": "Darkness is a Rogue's element. Who better, then, to light the way in the darkest time of year? Increases Strength by 8. Limited Edition 2019-2020 Winter Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_winter2020Rogue",
	  "klass": "special",
	  "index": "winter2020Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2020Warrior": {
	  "set": "winter2020EvergreenSet",
	  "event": {
		"start": "2019-12-19",
		"end": "2020-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Pointy Conifer Cone",
	  "notes": "Back, squirrels! You will take no piece of this! ...But if you all want to hang out and have cocoa, that's cool. Increases Strength by 15. Limited Edition 2019-2020 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_winter2020Warrior",
	  "klass": "special",
	  "index": "winter2020Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2020Mage": {
	  "set": "winter2020CarolOfTheMageSet",
	  "event": {
		"start": "2019-12-19",
		"end": "2020-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Rippling Sound Waves",
	  "notes": "With practice, you can project this aural magic at any desired frequency: a meditative hum, a festive chime, or a RED TASK OVERDUE ALARM. Increases Intelligence by 15 and Perception by 7. Limited Edition 2019-2020 Winter Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_winter2020Mage",
	  "klass": "special",
	  "index": "winter2020Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_winter2020Healer": {
	  "set": "winter2020WinterSpiceSet",
	  "event": {
		"start": "2019-12-19",
		"end": "2020-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Clove Scepter",
	  "notes": "Wave it about, and its aroma will summon your friends and helpers to begin cooking and baking! Increases Intelligence by 9. Limited Edition 2019-2020 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_winter2020Healer",
	  "klass": "special",
	  "index": "winter2020Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2020Rogue": {
	  "set": "spring2020LapisLazuliRogueSet",
	  "event": {
		"start": "2020-03-17",
		"end": "2020-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Lazurite Blade",
	  "notes": "You'll strike so fast it'll look even MORE blue! Increases Strength by 8. Limited Edition 2020 Spring Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_spring2020Rogue",
	  "klass": "special",
	  "index": "spring2020Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2020Warrior": {
	  "set": "spring2020BeetleWarriorSet",
	  "event": {
		"start": "2020-03-17",
		"end": "2020-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Sharpened Wing",
	  "notes": "Fight or flight, this wing will serve you well! Increases Strength by 15. Limited Edition 2020 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_spring2020Warrior",
	  "klass": "special",
	  "index": "spring2020Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2020Mage": {
	  "set": "spring2020PuddleMageSet",
	  "event": {
		"start": "2020-03-17",
		"end": "2020-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Raindrops",
	  "notes": "They keep falling on your head! But you'll never stop them by complaining. Increases Intelligence by 15 and Perception by 7. Limited Edition 2020 Spring Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_spring2020Mage",
	  "klass": "special",
	  "index": "spring2020Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_spring2020Healer": {
	  "set": "spring2020IrisHealerSet",
	  "event": {
		"start": "2020-03-17",
		"end": "2020-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Sword-Lily Staff",
	  "notes": "An iris is beautiful, but the leaves are like swords... don't be deceived by the flowers, this staff is tough as steel! Increases Intelligence by 9. Limited Edition 2020 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_spring2020Healer",
	  "klass": "special",
	  "index": "spring2020Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2020Rogue": {
	  "set": "summer2020CrocodileRogueSet",
	  "event": {
		"start": "2020-06-18",
		"end": "2020-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Fang Blade",
	  "notes": "Your enemies don't see you coming, but your Fangs are inescapable! Increases Strength by 8. Limited Edition 2020 Summer Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_summer2020Rogue",
	  "klass": "special",
	  "index": "summer2020Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2020Warrior": {
	  "set": "summer2020RainbowTroutWarriorSet",
	  "event": {
		"start": "2020-06-18",
		"end": "2020-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Fish Hook",
	  "notes": "If your foes mock your choice of weapon, don't take the bait. This wicked hook is the reel deal! Increases Strength by 15. Limited Edition 2020 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_summer2020Warrior",
	  "klass": "special",
	  "index": "summer2020Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2020Mage": {
	  "set": "summer2020OarfishMageSet",
	  "event": {
		"start": "2020-06-18",
		"end": "2020-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Mighty Oar",
	  "notes": "Steer your way through the most treacherous seas and turbulent battles. Increases Intelligence by 15 and Perception by 7. Limited Edition 2020 Summer Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_summer2020Mage",
	  "klass": "special",
	  "index": "summer2020Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_summer2020Healer": {
	  "set": "summer2020SeaGlassHealerSet",
	  "event": {
		"start": "2020-06-18",
		"end": "2020-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Frosted Glass Rod",
	  "notes": "As the currents wear away sharp edges, so shall your magic soften your friends' pain. Increases Intelligence by 9. Limited Edition 2020 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_summer2020Healer",
	  "klass": "special",
	  "index": "summer2020Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2020Rogue": {
	  "set": "fall2020TwoHeadedRogueSet",
	  "event": {
		"start": "2020-09-22T08:00-04:00",
		"end": "2020-10-31T20:00-04:00",
		"gear": true,
		"gemsPromo": {
		  "4gems": 5,
		  "21gems": 30,
		  "42gems": 60,
		  "84gems": 125
		}
	  },
	  "specialClass": "rogue",
	  "text": "Sharp Katar",
	  "notes": "Pierce your foe with one sharp strike! Even the thickest armor will give way to your blade. Increases Strength by 8. Limited Edition 2020 Autumn Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_fall2020Rogue",
	  "klass": "special",
	  "index": "fall2020Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2020Warrior": {
	  "set": "fall2020WraithWarriorSet",
	  "event": {
		"start": "2020-09-22T08:00-04:00",
		"end": "2020-10-31T20:00-04:00",
		"gear": true,
		"gemsPromo": {
		  "4gems": 5,
		  "21gems": 30,
		  "42gems": 60,
		  "84gems": 125
		}
	  },
	  "specialClass": "warrior",
	  "text": "Spectre's Sword",
	  "notes": "This sword went into the afterlife with a powerful Warrior, and returns for you to wield! Increases Strength by 15. Limited Edition 2020 Autumn Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_fall2020Warrior",
	  "klass": "special",
	  "index": "fall2020Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2020Mage": {
	  "set": "fall2020ThirdEyeMageSet",
	  "event": {
		"start": "2020-09-22T08:00-04:00",
		"end": "2020-10-31T20:00-04:00",
		"gear": true,
		"gemsPromo": {
		  "4gems": 5,
		  "21gems": 30,
		  "42gems": 60,
		  "84gems": 125
		}
	  },
	  "specialClass": "wizard",
	  "text": "Three Visions",
	  "notes": "If aught should escape your mage sight, the brilliant crystals atop this staff shall illuminate what you overlooked. Increases Intelligence by 15 and Perception by 7. Limited Edition 2020 Autumn Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_fall2020Mage",
	  "klass": "special",
	  "index": "fall2020Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_fall2020Healer": {
	  "set": "fall2020DeathsHeadMothHealerSet",
	  "event": {
		"start": "2020-09-22T08:00-04:00",
		"end": "2020-10-31T20:00-04:00",
		"gear": true,
		"gemsPromo": {
		  "4gems": 5,
		  "21gems": 30,
		  "42gems": 60,
		  "84gems": 125
		}
	  },
	  "specialClass": "healer",
	  "text": "Cocoon Cane",
	  "notes": "Now that your transformation is complete, this remnant of your life as a pupa now serves as the divining rod with which you measure destinies. Increases Intelligence by 9. Limited Edition 2020 Autumn Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_fall2020Healer",
	  "klass": "special",
	  "index": "fall2020Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2021Rogue": {
	  "set": "winter2021HollyIvyRogueSet",
	  "event": {
		"start": "2020-12-17T08:00-05:00",
		"end": "2021-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "winter",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Holly Berry Flail",
	  "notes": "Both disguise and weapon, this holly flail will help you handle the toughest tasks. Increases Strength by 8. Limited Edition 2020-2021 Winter Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_winter2021Rogue",
	  "klass": "special",
	  "index": "winter2021Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2021Warrior": {
	  "set": "winter2021IceFishingWarriorSet",
	  "event": {
		"start": "2020-12-17T08:00-05:00",
		"end": "2021-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "winter",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Mighty Fishing Rod",
	  "notes": "You can reel in the big one using this! Increases Strength by 15. Limited Edition 2020-2021 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_winter2021Warrior",
	  "klass": "special",
	  "index": "winter2021Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2021Mage": {
	  "set": "winter2021WinterMoonMageSet",
	  "event": {
		"start": "2020-12-17T08:00-05:00",
		"end": "2021-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "winter",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Magical Moon Phaser",
	  "notes": "This mighty weapon is definitely more than a phase. Channel your energy, focus on the flow of a month, and study time and space. Increases Intelligence by 15 and Perception by 7. Limited Edition 2020-2021 Winter Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_winter2021Mage",
	  "klass": "special",
	  "index": "winter2021Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_winter2021Healer": {
	  "set": "winter2021ArcticExplorerHealerSet",
	  "event": {
		"start": "2020-12-17T08:00-05:00",
		"end": "2021-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "winter",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Flake-Flanged Rod",
	  "notes": "Conduct your battles with a flourish and a flurry! Increases Intelligence by 9. Limited Edition 2020-2021 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_winter2021Healer",
	  "klass": "special",
	  "index": "winter2021Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2021Rogue": {
	  "set": "spring2021TwinFlowerRogueSet",
	  "event": {
		"start": "2021-03-23T08:00-05:00",
		"end": "2021-04-30T20:00-05:00",
		"npcImageSuffix": "spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Twin Flower Bloom",
	  "notes": "You know what's better than dual-wielding flowers? QUADRUPLE wielding flowers! Increases Strength by 8. Limited Edition 2021 Spring Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_spring2021Rogue",
	  "klass": "special",
	  "index": "spring2021Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2021Warrior": {
	  "set": "spring2021SunstoneWarriorSet",
	  "event": {
		"start": "2021-03-23T08:00-05:00",
		"end": "2021-04-30T20:00-05:00",
		"npcImageSuffix": "spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Hammer of the Sun",
	  "notes": "Harness the power of the sun against your enemies, and let the sunstone bring you luck! Increases Strength by 15. Limited Edition 2021 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_spring2021Warrior",
	  "klass": "special",
	  "index": "spring2021Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2021Mage": {
	  "set": "spring2021SwanMageSet",
	  "event": {
		"start": "2021-03-23T08:00-05:00",
		"end": "2021-04-30T20:00-05:00",
		"npcImageSuffix": "spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Swan Plume",
	  "notes": "Throw, beat, treadle, rest! Swish this magnificent feather in time to conduct the music of your magic. Increases Intelligence by 15 and Perception by 7. Limited Edition 2021 Spring Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_spring2021Mage",
	  "klass": "special",
	  "index": "spring2021Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_spring2021Healer": {
	  "set": "spring2021WillowHealerSet",
	  "event": {
		"start": "2021-03-23T08:00-05:00",
		"end": "2021-04-30T20:00-05:00",
		"npcImageSuffix": "spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Willow Branch",
	  "notes": "The bark and leaves of this fresh cutting are known for their ability to relieve pain. Or you can plant it and watch it grow! Increases Intelligence by 9. Limited Edition 2021 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_spring2021Healer",
	  "klass": "special",
	  "index": "spring2021Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2021Rogue": {
	  "set": "summer2021ClownfishRogueSet",
	  "event": {
		"start": "2021-06-23T08:00-04:00",
		"end": "2021-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "summer",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Anemone Tentacles",
	  "notes": "Any predatory monster that dares approach will feel the sting of your protective friends! Increases Strength by 8. Limited Edition 2021 Summer Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_summer2021Rogue",
	  "klass": "special",
	  "index": "summer2021Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2021Warrior": {
	  "set": "summer2021FlyingFishWarriorSet",
	  "event": {
		"start": "2021-06-23T08:00-04:00",
		"end": "2021-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "summer",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Watery Blade",
	  "notes": "This shimmering blade may flow like water, but it can cut to the heart of the trickiest problems! Increases Strength by 15. Limited Edition 2021 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_summer2021Warrior",
	  "klass": "special",
	  "index": "summer2021Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2021Mage": {
	  "set": "summer2021NautilusMageSet",
	  "event": {
		"start": "2021-06-23T08:00-04:00",
		"end": "2021-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "summer",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Nautiloid Cane",
	  "notes": "Whether your magical ambitions run twenty thousand leagues deep, or if you intend only to dip in the shallows of the art, this shining implement will serve you well! Increases Intelligence by 15 and Perception by 7. Limited Edition 2021 Summer Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_summer2021Mage",
	  "klass": "special",
	  "index": "summer2021Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_summer2021Healer": {
	  "set": "summer2021ParrotHealerSet",
	  "event": {
		"start": "2021-06-23T08:00-04:00",
		"end": "2021-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "summer",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Staff of Corn",
	  "notes": "Not to get corny, but this staff is a lifesaver. Increases Intelligence by 9. Limited Edition 2021 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_summer2021Healer",
	  "klass": "special",
	  "index": "summer2021Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2021Rogue": {
	  "set": "fall2021OozeRogueSet",
	  "event": {
		"start": "2021-09-21T08:00-04:00",
		"end": "2021-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Dripping Goo",
	  "notes": "What on Earth did you get into? When people say Rogues have sticky fingers, this is not what they mean! Increases Strength by 8. Limited Edition 2021 Autumn Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_fall2021Rogue",
	  "klass": "special",
	  "index": "fall2021Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2021Warrior": {
	  "set": "fall2021HeadlessWarriorSet",
	  "event": {
		"start": "2021-09-21T08:00-04:00",
		"end": "2021-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Horse Rider's Axe",
	  "notes": "This stylized, single-bladed axe is ideal for chopping... pumpkins! Increases Strength by 15. Limited Edition 2021 Autumn Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_fall2021Warrior",
	  "klass": "special",
	  "index": "fall2021Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2021Mage": {
	  "set": "fall2021BrainEaterMageSet",
	  "event": {
		"start": "2021-09-21T08:00-04:00",
		"end": "2021-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Staff of Pure Thought",
	  "notes": "Knowledge seeks knowledge. Formed of memories and desires, this fearsome hand grasps for more. Increases Intelligence by 15 and Perception by 7. Limited Edition 2021 Autumn Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_fall2021Mage",
	  "klass": "special",
	  "index": "fall2021Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_fall2021Healer": {
	  "set": "fall2021FlameSummonerHealerSet",
	  "event": {
		"start": "2021-09-21T08:00-04:00",
		"end": "2021-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Summoning Wand",
	  "notes": "Use this wand to summon healing flames and a ghostly creature to help you. Increases Intelligence by 9. Limited Edition 2021 Autumn Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_fall2021Healer",
	  "klass": "special",
	  "index": "fall2021Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2022Rogue": {
	  "set": "winter2022FireworksRogueSet",
	  "event": {
		"start": "2021-12-21T08:00-05:00",
		"end": "2022-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "_winter",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Shooting Star Firework",
	  "notes": "Silver and gold are beloved of Rogues, right? These are totally on theme. Increases Strength by 8. Limited Edition 2021-2022 Winter Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_winter2022Rogue",
	  "klass": "special",
	  "index": "winter2022Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2022Warrior": {
	  "set": "winter2022StockingWarriorSet",
	  "event": {
		"start": "2021-12-21T08:00-05:00",
		"end": "2022-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "_winter",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Candy Cane Sword",
	  "notes": "How many licks does it take to sharpen this candy cane into the perfect sword? Increases Strength by 15. Limited Edition 2021-2022 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_winter2022Warrior",
	  "klass": "special",
	  "index": "winter2022Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2022Mage": {
	  "set": "winter2022PomegranateMageSet",
	  "event": {
		"start": "2021-12-21T08:00-05:00",
		"end": "2022-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "_winter",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Pomegranate Staff",
	  "notes": "The berries on this staff contain an ancient magic to be wielded in winter. Increases Intelligence by 15 and Perception by 7. Limited Edition 2021-2022 Winter Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_winter2022Mage",
	  "klass": "special",
	  "index": "winter2022Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_winter2022Healer": {
	  "set": "winter2022IceCrystalHealerSet",
	  "event": {
		"start": "2021-12-21T08:00-05:00",
		"end": "2022-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "_winter",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Crystalline Ice Wand",
	  "notes": "Touch this solid-water implement to a friend's neck and they'll jump out of their chair! But they'll feel better afterward. Hopefully. Increases Intelligence by 9. Limited Edition 2021-2022 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_winter2022Healer",
	  "klass": "special",
	  "index": "winter2022Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2022Rogue": {
	  "set": "spring2022MagpieRogueSet",
	  "event": {
		"start": "2022-03-22T08:00-05:00",
		"end": "2022-04-30T20:00-05:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Giant Earring Stud",
	  "notes": "A shiny! It’s so shiny and gleaming and pretty and nice and all yours! Increases Strength by 8. Limited Edition 2022 Spring Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_spring2022Rogue",
	  "klass": "special",
	  "index": "spring2022Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2022Warrior": {
	  "set": "spring2022RainstormWarriorSet",
	  "event": {
		"start": "2022-03-22T08:00-05:00",
		"end": "2022-04-30T20:00-05:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Inside-Out Umbrella",
	  "notes": "Yikes! Guess that wind was a little stronger than you thought, huh? Increases Strength by 15. Limited Edition 2022 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_spring2022Warrior",
	  "klass": "special",
	  "index": "spring2022Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2022Mage": {
	  "set": "spring2022ForsythiaMageSet",
	  "event": {
		"start": "2022-03-22T08:00-05:00",
		"end": "2022-04-30T20:00-05:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Forsythia Staff",
	  "notes": "These bright yellow bells are ready to channel your powerful springtime magic. Increases Intelligence by 15 and Perception by 7. Limited Edition 2022 Spring Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_spring2022Mage",
	  "klass": "special",
	  "index": "spring2022Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_spring2022Healer": {
	  "set": "spring2022PeridotHealerSet",
	  "event": {
		"start": "2022-03-22T08:00-05:00",
		"end": "2022-04-30T20:00-05:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Peridot Wand",
	  "notes": "Use this wand to tap into peridot’s healing properties, whether it be to bring calm, positivity, or kindheartedness. Increases Intelligence by 9. Limited Edition 2022 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_spring2022Healer",
	  "klass": "special",
	  "index": "spring2022Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2022Rogue": {
	  "set": "summer2022CrabRogueSet",
	  "event": {
		"start": "2022-06-21T08:00-04:00",
		"end": "2022-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "_summer",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Crab Claw",
	  "notes": "If you're in a pinch, don't hesitate to show these fearsome claws! Increases Strength by 8. Limited Edition 2022 Summer Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_summer2022Rogue",
	  "klass": "special",
	  "index": "summer2022Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2022Warrior": {
	  "set": "summer2022WaterspoutWarriorSet",
	  "event": {
		"start": "2022-06-21T08:00-04:00",
		"end": "2022-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "_summer",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Whirling Cyclone",
	  "notes": "It spins! It redirects! And it brings the storm! Increases Strength by 15. Limited Edition 2022 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_summer2022Warrior",
	  "klass": "special",
	  "index": "summer2022Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2022Mage": {
	  "set": "summer2022MantaRayMageSet",
	  "event": {
		"start": "2022-06-21T08:00-04:00",
		"end": "2022-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "_summer",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Manta Ray Staff",
	  "notes": "Magically clear the waters ahead of you with one swirl of this staff. Increases Intelligence by 15 and Perception by 7. Limited Edition 2022 Summer Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_summer2022Mage",
	  "klass": "special",
	  "index": "summer2022Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_summer2022Healer": {
	  "set": "summer2022AngelfishHealerSet",
	  "event": {
		"start": "2022-06-21T08:00-04:00",
		"end": "2022-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "_summer",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Beneficial Bubbles",
	  "notes": "These bubbles release healing magic into the water with a satisfying pop! Increases Intelligence by 9. Limited Edition 2022 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_summer2022Healer",
	  "klass": "special",
	  "index": "summer2022Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2022Rogue": {
	  "set": "fall2022KappaRogueSet",
	  "event": {
		"start": "2022-09-20T08:00-04:00",
		"end": "2022-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Cucumber Blade",
	  "notes": "Not only can you defend yourself with this cucumber, it also makes for a tasty meal. Increases Strength by 8. Limited Edition 2022 Fall Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_fall2022Rogue",
	  "klass": "special",
	  "index": "fall2022Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2022Warrior": {
	  "set": "fall2022OrcWarriorSet",
	  "event": {
		"start": "2022-09-20T08:00-04:00",
		"end": "2022-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Orcish Ripsword",
	  "notes": "Maybe more suited for cutting logs or crusty loaves of bread than enemy armor, but RAWR! It sure looks fearsome! Increases Strength by 15. Limited Edition 2022 Fall Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_fall2022Warrior",
	  "klass": "special",
	  "index": "fall2022Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2022Mage": {
	  "set": "fall2022HarpyMageSet",
	  "event": {
		"start": "2022-09-20T08:00-04:00",
		"end": "2022-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Wind Blasts",
	  "notes": "These mighty gusts remain in your wake as you take off toward the skies. Increases Intelligence by 15 and Perception by 7. Limited Edition 2022 Fall Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_fall2022Mage",
	  "klass": "special",
	  "index": "fall2022Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_fall2022Healer": {
	  "set": "fall2022WatcherHealerSet",
	  "event": {
		"start": "2022-09-20T08:00-04:00",
		"end": "2022-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Right Peeker Eye",
	  "notes": "To claim victory, hold it forth and utter the words of command: 'Eye One!' Increases Intelligence by 9. Limited Edition 2022 Fall Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_fall2022Healer",
	  "klass": "special",
	  "index": "fall2022Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2023Rogue": {
	  "set": "winter2023RibbonRogueSet",
	  "event": {
		"start": "2022-12-20T08:00-05:00",
		"end": "2023-01-31T23:59-05:00",
		"npcImageSuffix": "_winter",
		"season": "winter",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Green Satin Sash",
	  "notes": "Legends tell of Rogues who snare their opponents' weapons, disarm them, then gift the item back just to be cute. Increases Strength by 8. Limited Edition 2022-2023 Winter Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_winter2023Rogue",
	  "klass": "special",
	  "index": "winter2023Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2023Warrior": {
	  "set": "winter2023WalrusWarriorSet",
	  "event": {
		"start": "2022-12-20T08:00-05:00",
		"end": "2023-01-31T23:59-05:00",
		"npcImageSuffix": "_winter",
		"season": "winter",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Tusk Spear",
	  "notes": "The two prongs of this spear are shaped like walrus tusks but are twice as powerful. Jab at doubts and at silly poems until they back off! Increases Strength by 15. Limited Edition 2022-2023 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_winter2023Warrior",
	  "klass": "special",
	  "index": "winter2023Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_winter2023Mage": {
	  "set": "winter2023FairyLightsMageSet",
	  "event": {
		"start": "2022-12-20T08:00-05:00",
		"end": "2023-01-31T23:59-05:00",
		"npcImageSuffix": "_winter",
		"season": "winter",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Foxfire",
	  "notes": "Neither fox nor fire, but plenty festive! Increases Intelligence by 15 and Perception by 7. Limited Edition 2022-2023 Winter Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_winter2023Mage",
	  "klass": "special",
	  "index": "winter2023Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_winter2023Healer": {
	  "set": "winter2023CardinalHealerSet",
	  "event": {
		"start": "2022-12-20T08:00-05:00",
		"end": "2023-01-31T23:59-05:00",
		"npcImageSuffix": "_winter",
		"season": "winter",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Throwing Wreath",
	  "notes": "Watch this festive, prickly wreath spin through the air toward your enemy or obstacles and return to you like a boomerang for another throw. Increases Intelligence by 9. Limited Edition 2022-2023 Winter Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_winter2023Healer",
	  "klass": "special",
	  "index": "winter2023Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2023Rogue": {
	  "set": "spring2023CaterpillarRogueSet",
	  "event": {
		"start": "2023-03-21T08:00-04:00",
		"end": "2023-04-30T23:59-04:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Nibbled Leaf",
	  "notes": "Slash! Swat! Snack! Get strong and ready for your coming metamorphosis. Increases Strength by 8. Limited Edition 2023 Spring Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_spring2023Rogue",
	  "klass": "special",
	  "index": "spring2023Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2023Warrior": {
	  "set": "spring2023HummingbirdWarriorSet",
	  "event": {
		"start": "2023-03-21T08:00-04:00",
		"end": "2023-04-30T23:59-04:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Hummingbird Foil",
	  "notes": "En garde! Fend off foes from your flowers with this foil! Increases Strength by 15. Limited Edition 2023 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_spring2023Warrior",
	  "klass": "special",
	  "index": "spring2023Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_spring2023Mage": {
	  "set": "spring2023MoonstoneMageSet",
	  "event": {
		"start": "2023-03-21T08:00-04:00",
		"end": "2023-04-30T23:59-04:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Moonstone Magic",
	  "notes": "The greater their glow, the more potent is their power. Increases Intelligence by 15. Limited Edition 2023 Spring Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_spring2023Mage",
	  "klass": "special",
	  "index": "spring2023Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_spring2023Healer": {
	  "set": "spring2023LilyHealerSet",
	  "event": {
		"start": "2023-03-21T08:00-04:00",
		"end": "2023-04-30T23:59-04:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Lilium Pollen",
	  "notes": "With a puff and a sparkle, you deploy new growth, joy, and color. Increases Intelligence by 9. Limited Edition 2023 Spring Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_spring2023Healer",
	  "klass": "special",
	  "index": "spring2023Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2023Rogue": {
	  "set": "summer2023GuppyRogueSet",
	  "event": {
		"start": "2023-06-20T08:00-04:00",
		"end": "2023-07-31T23:59-04:00",
		"npcImageSuffix": "_summer",
		"season": "summer",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Guppy Fan",
	  "notes": "No gup, these things are tricky to learn. But impressive when you do! Increases Strength by 8. Limited Edition 2023 Summer Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_summer2023Rogue",
	  "klass": "special",
	  "index": "summer2023Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2023Warrior": {
	  "set": "summer2023GoldfishWarriorSet",
	  "event": {
		"start": "2023-06-20T08:00-04:00",
		"end": "2023-07-31T23:59-04:00",
		"npcImageSuffix": "_summer",
		"season": "summer",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Water Elemental Sword",
	  "notes": "Summon powerful sprays of water to clear your path of obstacles. Increases Strength by 15. Limited Edition 2023 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_summer2023Warrior",
	  "klass": "special",
	  "index": "summer2023Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_summer2023Mage": {
	  "set": "summer2023CoralMageSet",
	  "event": {
		"start": "2023-06-20T08:00-04:00",
		"end": "2023-07-31T23:59-04:00",
		"npcImageSuffix": "_summer",
		"season": "summer",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Fish",
	  "notes": "These friendly fish will stay by your side as the best accountability buddies in the ocean. Increases Intelligence by 15. Limited Edition 2023 Summer Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_summer2023Mage",
	  "klass": "special",
	  "index": "summer2023Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_special_summer2023Healer": {
	  "set": "summer2023KelpHealerSet",
	  "event": {
		"start": "2023-06-20T08:00-04:00",
		"end": "2023-07-31T23:59-04:00",
		"npcImageSuffix": "_summer",
		"season": "summer",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Swaying Kelp",
	  "notes": "They may look frondly, but they get quite grumpy if you call them 'plants'. Increases Intelligence by 9. Limited Edition 2023 Summer Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_summer2023Healer",
	  "klass": "special",
	  "index": "summer2023Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2023Rogue": {
	  "set": "fall2023WitchsBrewRogueSet",
	  "event": {
		"start": "2023-09-21T08:00-04:00",
		"end": "2023-10-31T23:59-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Soupernatural Spoon",
	  "notes": "It takes an exceptionally strong stirrer to cook up bubbles and toiling troubles. Increases Strength by 8. Limited Edition 2023 Fall Gear. ",
	  "value": 80,
	  "twoHanded": false,
	  "str": 8,
	  "type": "weapon",
	  "key": "weapon_special_fall2023Rogue",
	  "klass": "special",
	  "index": "fall2023Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2023Healer": {
	  "set": "fall2023BogCreatureHealerSet",
	  "event": {
		"start": "2023-09-21T08:00-04:00",
		"end": "2023-10-31T23:59-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Log Great Hammer",
	  "notes": "With slow, heavy attacks, this gnarled hammer deals out healing blows instead of damage. Increases Intelligence by 9. Limited Edition 2023 Fall Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "int": 9,
	  "type": "weapon",
	  "key": "weapon_special_fall2023Healer",
	  "klass": "special",
	  "index": "fall2023Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2023Warrior": {
	  "set": "fall2023ScaryMovieWarriorSet",
	  "event": {
		"start": "2023-09-21T08:00-04:00",
		"end": "2023-10-31T23:59-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Tasty Popcorn",
	  "notes": "The most terrifying thing of all is the thought of a scary movie night with no snacks! Increases Strength by 15. Limited Edition 2023 Fall Gear. ",
	  "value": 90,
	  "twoHanded": false,
	  "str": 15,
	  "type": "weapon",
	  "key": "weapon_special_fall2023Warrior",
	  "klass": "special",
	  "index": "fall2023Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_special_fall2023Mage": {
	  "set": "fall2023ScarletWarlockMageSet",
	  "event": {
		"start": "2023-09-21T08:00-04:00",
		"end": "2023-10-31T23:59-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Shining Staff",
	  "notes": "With a crystal at its core, this shining staff makes magic emerge from the mundane. Increases Intelligence by 15. Limited Edition 2023 Fall Gear. Two-handed item.",
	  "value": 160,
	  "twoHanded": true,
	  "int": 15,
	  "per": 7,
	  "type": "weapon",
	  "key": "weapon_special_fall2023Mage",
	  "klass": "special",
	  "index": "fall2023Mage",
	  "str": 0,
	  "con": 0
	},
	"weapon_mystery_201411": {
	  "text": "Pitchfork of Feasting",
	  "notes": "Stab your enemies or dig in to your favorite foods - this versatile pitchfork does it all! Confers no benefit. November 2014 Subscriber Item. ",
	  "mystery": "201411",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_201411",
	  "set": "mystery-201411",
	  "klass": "mystery",
	  "index": "201411",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_mystery_201502": {
	  "text": "Shimmery Winged Staff of Love and Also Truth",
	  "notes": "For WINGS! For LOVE! For ALSO TRUTH! Confers no benefit. February 2015 Subscriber Item. ",
	  "mystery": "201502",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_201502",
	  "set": "mystery-201502",
	  "klass": "mystery",
	  "index": "201502",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_mystery_201505": {
	  "text": "Green Knight Lance",
	  "notes": "This green and silver lance has unseated many opponents from their mounts. Confers no benefit. May 2015 Subscriber Item. ",
	  "mystery": "201505",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_201505",
	  "set": "mystery-201505",
	  "klass": "mystery",
	  "index": "201505",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_mystery_201611": {
	  "text": "Copious Cornucopia",
	  "notes": "All manner of delicious and wholesome foods spill forth from this horn. Enjoy the feast! Confers no benefit. November 2016 Subscriber Item. ",
	  "mystery": "201611",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_201611",
	  "set": "mystery-201611",
	  "klass": "mystery",
	  "index": "201611",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_mystery_201708": {
	  "text": "Lava Sword",
	  "notes": "The fiery glow of this sword will make quick work of even dark red Tasks! Confers no benefit. August 2017 Subscriber Item. ",
	  "mystery": "201708",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_201708",
	  "set": "mystery-201708",
	  "klass": "mystery",
	  "index": "201708",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_mystery_201811": {
	  "text": "Splendid Sorcerer's Staff",
	  "notes": "This magical stave is as powerful as it is elegant. Confers no benefit. November 2018 Subscriber Item. ",
	  "mystery": "201811",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_201811",
	  "set": "mystery-201811",
	  "klass": "mystery",
	  "index": "201811",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_mystery_201911": {
	  "text": "Charmed Crystal Staff",
	  "notes": "The crystal ball atop this staff can show you the future, but beware! Using such dangerous knowledge can change a person in unexpected ways. Confers no benefit. November 2019 Subscriber Item. ",
	  "mystery": "201911",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_201911",
	  "set": "mystery-201911",
	  "klass": "mystery",
	  "index": "201911",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_mystery_202002": {
	  "text": "Stylish Sweetheart Parasol",
	  "notes": "An accessory that lends you an air of mystery and romance. Sun protection is a bonus! Confers no benefit. February 2020 Subscriber Item. ",
	  "mystery": "202002",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_202002",
	  "set": "mystery-202002",
	  "klass": "mystery",
	  "index": "202002",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_mystery_202102": {
	  "text": "Charming Wand",
	  "notes": "The glowing pink gem in this wand holds the power to spread joy and friendship far and wide! Confers no benefit. February 2021 Subscriber Item. ",
	  "mystery": "202102",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_202102",
	  "set": "mystery-202102",
	  "klass": "mystery",
	  "index": "202102",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_mystery_202104": {
	  "twoHanded": true,
	  "text": "Thorny Thistle Staff",
	  "notes": "Your enemies had better look out- you've got powerful and prickly defenses! Confers no benefit. April 2021 Subscriber Item. Two-handed item.",
	  "mystery": "202104",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_202104",
	  "set": "mystery-202104",
	  "klass": "mystery",
	  "index": "202104",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_mystery_202111": {
	  "twoHanded": true,
	  "text": "Chronomancer's Staff",
	  "notes": "Shape the flow of time with this mysterious and powerful staff. Confers no benefit. November 2021 Subscriber Item. Two-handed item.",
	  "mystery": "202111",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_202111",
	  "set": "mystery-202111",
	  "klass": "mystery",
	  "index": "202111",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_mystery_202201": {
	  "text": "Midnight Confetti Cannon",
	  "notes": "Unleash a cloud of gold and silver glitter when the clock strikes midnight. Happy New Year! Now who's cleaning this up? Confers no benefit. January 2022 Subscriber Item. ",
	  "mystery": "202201",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_202201",
	  "set": "mystery-202201",
	  "klass": "mystery",
	  "index": "202201",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_mystery_202209": {
	  "text": "Magic Manual",
	  "notes": "This book will guide you through your journey into magic-making. Confers no benefit. September 2022 Subscriber Item. ",
	  "mystery": "202209",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_202209",
	  "set": "mystery-202209",
	  "klass": "mystery",
	  "index": "202209",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_mystery_202211": {
	  "twoHanded": true,
	  "text": "Electromancer Staff",
	  "notes": "Harness the awesome power of a lightning storm with this staff. Confers no benefit. November 2022 Subscriber Item. Two-handed item.",
	  "mystery": "202211",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_202211",
	  "set": "mystery-202211",
	  "klass": "mystery",
	  "index": "202211",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_mystery_202212": {
	  "text": "Glacial Wand",
	  "notes": "The glowing snowflake in this wand holds the power to warm hearts on even the coldest winter night! Confers no benefit. December 2022 Subscriber Item. ",
	  "mystery": "202212",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_202212",
	  "set": "mystery-202212",
	  "klass": "mystery",
	  "index": "202212",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_mystery_202306": {
	  "text": "Rainbow Umbrella",
	  "notes": "Shine proud and bring a shimmering prism of color wherever you go! Confers no benefit. June 2023 Subscriber Item. ",
	  "mystery": "202306",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_202306",
	  "set": "mystery-202306",
	  "klass": "mystery",
	  "index": "202306",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_mystery_301404": {
	  "text": "Steampunk Cane",
	  "notes": "Excellent for taking a turn about town. March 3015 Subscriber Item. Confers no benefit. ",
	  "mystery": "301404",
	  "value": 0,
	  "type": "weapon",
	  "key": "weapon_mystery_301404",
	  "set": "mystery-301404",
	  "klass": "mystery",
	  "index": "301404",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_basicCrossbow": {
	  "notes": "This crossbow can pierce a task's armor from very far away! Increases Strength by 5, Perception by 5, and Constitution by 5. Enchanted Armoire: Independent Item. ",
	  "str": 5,
	  "per": 5,
	  "con": 5,
	  "text": "Basic Crossbow",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_basicCrossbow",
	  "set": "armoire-basicCrossbow",
	  "klass": "armoire",
	  "index": "basicCrossbow",
	  "int": 0
	},
	"weapon_armoire_lunarSceptre": {
	  "notes": "The healing power of this wand waxes and wanes. Increases Constitution by 7 and Intelligence by 7. Enchanted Armoire: Soothing Lunar Set (Item 3 of 3). ",
	  "con": 7,
	  "int": 7,
	  "set": "soothing",
	  "text": "Soothing Lunar Sceptre",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_lunarSceptre",
	  "klass": "armoire",
	  "index": "lunarSceptre",
	  "str": 0,
	  "per": 0
	},
	"weapon_armoire_rancherLasso": {
	  "twoHanded": true,
	  "notes": "Lassos: the ideal tool for rounding up and wrangling. Increases Strength by 5, Perception by 5, and Intelligence by 5. Enchanted Armoire: Rancher Set (Item 3 of 3). Two-handed item.",
	  "str": 5,
	  "per": 5,
	  "int": 5,
	  "set": "rancher",
	  "text": "Rancher Lasso",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_rancherLasso",
	  "klass": "armoire",
	  "index": "rancherLasso",
	  "con": 0
	},
	"weapon_armoire_mythmakerSword": {
	  "str": 6,
	  "per": 6,
	  "set": "goldenToga",
	  "notes": "Though it may seem humble, this sword has made many mythic heroes. Increases Perception and Strength by 6 each. Enchanted Armoire: Golden Toga Set (Item 3 of 3). ",
	  "text": "Mythmaker Sword",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_mythmakerSword",
	  "klass": "armoire",
	  "index": "mythmakerSword",
	  "int": 0,
	  "con": 0
	},
	"weapon_armoire_ironCrook": {
	  "str": 7,
	  "per": 7,
	  "set": "hornedIron",
	  "notes": "Fiercely hammered from iron, this iron crook is good at herding sheep. Increases Perception and Strength by 7 each. Enchanted Armoire: Horned Iron Set (Item 3 of 3). ",
	  "text": "Iron Crook",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_ironCrook",
	  "klass": "armoire",
	  "index": "ironCrook",
	  "int": 0,
	  "con": 0
	},
	"weapon_armoire_goldWingStaff": {
	  "con": 4,
	  "int": 4,
	  "per": 4,
	  "str": 4,
	  "notes": "The wings on this staff constantly flutter and twist. Increases all Stats by 4 each. Enchanted Armoire: Independent Item. ",
	  "text": "Gold Wing Staff",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_goldWingStaff",
	  "set": "armoire-goldWingStaff",
	  "klass": "armoire",
	  "index": "goldWingStaff"
	},
	"weapon_armoire_batWand": {
	  "int": 10,
	  "per": 2,
	  "notes": "This wand can turn any task into a bat! Wave it about and watch them fly away. Increases Intelligence by 10 and Perception by 2. Enchanted Armoire: Independent Item. ",
	  "text": "Bat Wand",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_batWand",
	  "set": "armoire-batWand",
	  "klass": "armoire",
	  "index": "batWand",
	  "str": 0,
	  "con": 0
	},
	"weapon_armoire_shepherdsCrook": {
	  "con": 9,
	  "set": "shepherd",
	  "notes": "Useful for herding gryphons. Increases Constitution by 9. Enchanted Armoire: Shepherd Set (Item 1 of 3). ",
	  "text": "Shepherd's Crook",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_shepherdsCrook",
	  "klass": "armoire",
	  "index": "shepherdsCrook",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"weapon_armoire_crystalCrescentStaff": {
	  "int": 7,
	  "str": 7,
	  "set": "crystalCrescent",
	  "notes": "Summon the power of the crescent moon with this shining staff! Increases Intelligence and Strength by 7 each. Enchanted Armoire: Crystal Crescent Set (Item 3 of 3). ",
	  "text": "Crystal Crescent Staff",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_crystalCrescentStaff",
	  "klass": "armoire",
	  "index": "crystalCrescentStaff",
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_blueLongbow": {
	  "per": 9,
	  "con": 8,
	  "str": 7,
	  "twoHanded": true,
	  "set": "blueArcher",
	  "notes": "Ready... Aim... Fire! This bow has great range. Increases Perception by 9, Constitution by 8, and Strength by 7. Enchanted Armoire: Iron Archer Set (Item 3 of 3). Two-handed item.",
	  "text": "Blue Longbow",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_blueLongbow",
	  "klass": "armoire",
	  "index": "blueLongbow",
	  "int": 0
	},
	"weapon_armoire_glowingSpear": {
	  "str": 15,
	  "notes": "This spear hypnotizes wild tasks so you can attack them. Increases Strength by 15. Enchanted Armoire: Independent Item. ",
	  "text": "Glowing Spear",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_glowingSpear",
	  "set": "armoire-glowingSpear",
	  "klass": "armoire",
	  "index": "glowingSpear",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_barristerGavel": {
	  "str": 5,
	  "con": 5,
	  "set": "barrister",
	  "notes": "Order! Increases Strength and Constitution by 5 each. Enchanted Armoire: Barrister Set (Item 3 of 3). ",
	  "text": "Barrister Gavel",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_barristerGavel",
	  "klass": "armoire",
	  "index": "barristerGavel",
	  "int": 0,
	  "per": 0
	},
	"weapon_armoire_jesterBaton": {
	  "int": 8,
	  "per": 8,
	  "set": "jester",
	  "notes": "With a wave of your baton and some witty repartee, even the most complicated situations become clear. Increases Intelligence and Perception by 8 each. Enchanted Armoire: Jester Set (Item 3 of 3). ",
	  "text": "Jester Baton",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_jesterBaton",
	  "klass": "armoire",
	  "index": "jesterBaton",
	  "str": 0,
	  "con": 0
	},
	"weapon_armoire_miningPickax": {
	  "per": 15,
	  "set": "miner",
	  "notes": "Mine the maximum amount of gold from your tasks! Increases Perception by 15. Enchanted Armoire: Miner Set (Item 3 of 3). ",
	  "text": "Mining Pickax",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_miningPickax",
	  "klass": "armoire",
	  "index": "miningPickax",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"weapon_armoire_basicLongbow": {
	  "str": 6,
	  "twoHanded": true,
	  "set": "basicArcher",
	  "notes": "A serviceable hand-me-down bow. Increases Strength by 6. Enchanted Armoire: Basic Archer Set (Item 1 of 3). Two-handed item.",
	  "text": "Basic Longbow",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_basicLongbow",
	  "klass": "armoire",
	  "index": "basicLongbow",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_habiticanDiploma": {
	  "int": 11,
	  "set": "graduate",
	  "notes": "A certificate of significant achievement -- well done! Increases Intelligence by 11. Enchanted Armoire: Graduate Set (Item 1 of 3). ",
	  "text": "Habitican Diploma",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_habiticanDiploma",
	  "klass": "armoire",
	  "index": "habiticanDiploma",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_sandySpade": {
	  "str": 10,
	  "set": "seaside",
	  "notes": "A tool for digging, as well as flicking sand into the eyes of enemy monsters. Increases Strength by 10. Enchanted Armoire: Seaside Set (Item 1 of 3). ",
	  "text": "Sandy Spade",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_sandySpade",
	  "klass": "armoire",
	  "index": "sandySpade",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_cannon": {
	  "str": 15,
	  "set": "cannoneer",
	  "notes": "Arr! Set your aim with determination. Increases Strength by 15. Enchanted Armoire: Cannoneer Set (Item 1 of 3). ",
	  "text": "Cannon",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_cannon",
	  "klass": "armoire",
	  "index": "cannon",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_vermilionArcherBow": {
	  "str": 15,
	  "twoHanded": true,
	  "set": "vermilionArcher",
	  "notes": "Your arrow will fly like a shooting star from this brilliant red bow! Increases Strength by 15. Enchanted Armoire: Vermilion Archer Set (Item 1 of 3). Two-handed item.",
	  "text": "Vermilion Archer Bow",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_vermilionArcherBow",
	  "klass": "armoire",
	  "index": "vermilionArcherBow",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_ogreClub": {
	  "str": 15,
	  "set": "ogre",
	  "notes": "This club was salvaged from an actual Ogre's lair. Increases Strength by 15. Enchanted Armoire: Ogre Outfit (Item 2 of 3). ",
	  "text": "Ogre Club",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_ogreClub",
	  "klass": "armoire",
	  "index": "ogreClub",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_woodElfStaff": {
	  "int": 12,
	  "set": "woodElf",
	  "notes": "Made from a fallen limb of an ancient tree, this staff will help you communicate with forest denizens great and small. Increases Intelligence by 12. Enchanted Armoire: Wood Elf Set (Item 3 of 3). ",
	  "text": "Wood Elf Staff",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_woodElfStaff",
	  "klass": "armoire",
	  "index": "woodElfStaff",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_wandOfHearts": {
	  "int": 13,
	  "set": "queenOfHearts",
	  "notes": "This wand sparkles with a warm red light. It will also grant your heart wisdom. Increases Intelligence by 13. Enchanted Armoire: Queen of Hearts Set (Item 3 of 3). ",
	  "text": "Wand of Hearts",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_wandOfHearts",
	  "klass": "armoire",
	  "index": "wandOfHearts",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_forestFungusStaff": {
	  "int": 8,
	  "per": 9,
	  "notes": "Use this gnarled staff to work mycological magic! Increases Intelligence by 8 and Perception by 9. Enchanted Armoire: Independent Item. ",
	  "text": "Forest Fungus Staff",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_forestFungusStaff",
	  "set": "armoire-forestFungusStaff",
	  "klass": "armoire",
	  "index": "forestFungusStaff",
	  "str": 0,
	  "con": 0
	},
	"weapon_armoire_festivalFirecracker": {
	  "per": 8,
	  "set": "festivalAttire",
	  "notes": "Enjoy this delightful sparkler responsibly. Increases Perception by 8. Enchanted Armoire: Festival Attire Set (Item 3 of 3). ",
	  "text": "Festival Firecracker",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_festivalFirecracker",
	  "klass": "armoire",
	  "index": "festivalFirecracker",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"weapon_armoire_merchantsDisplayTray": {
	  "int": 10,
	  "set": "merchant",
	  "notes": "Use this lacquered tray to show the fine goods you're offering for sale. Increases Intelligence by 10. Enchanted Armoire: Merchant Set (Item 3 of 3). ",
	  "text": "Merchant's Display Tray",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_merchantsDisplayTray",
	  "klass": "armoire",
	  "index": "merchantsDisplayTray",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_battleAxe": {
	  "int": 6,
	  "con": 8,
	  "notes": "This fine iron axe is well-suited to battling your fiercest foes or your most difficult tasks. Increases Intelligence by 6 and Constitution by 8. Enchanted Armoire: Independent Item. ",
	  "text": "Ancient Axe",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_battleAxe",
	  "set": "armoire-battleAxe",
	  "klass": "armoire",
	  "index": "battleAxe",
	  "str": 0,
	  "per": 0
	},
	"weapon_armoire_hoofClippers": {
	  "con": 6,
	  "int": 6,
	  "str": 6,
	  "set": "farrier",
	  "notes": "Trim the hooves of your hard-working mounts to help them stay healthy as they carry you to adventure! Increases Strength, Intelligence, and Constitution by 6 each. Enchanted Armoire: Farrier Set (Item 1 of 3). ",
	  "text": "Hoof Clippers",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_hoofClippers",
	  "klass": "armoire",
	  "index": "hoofClippers",
	  "per": 0
	},
	"weapon_armoire_weaversComb": {
	  "per": 8,
	  "str": 9,
	  "set": "weaver",
	  "notes": "Use this comb to pack your weft threads together to make a tightly woven fabric. Increases Perception by 8 and Strength by 9. Enchanted Armoire: Weaver Set (Item 2 of 3). ",
	  "text": "Weaver's Comb",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_weaversComb",
	  "klass": "armoire",
	  "index": "weaversComb",
	  "int": 0,
	  "con": 0
	},
	"weapon_armoire_lamplighter": {
	  "per": 6,
	  "con": 8,
	  "set": "lamplighter",
	  "notes": "This long pole has a wick on one end for lighting lamps, and a hook on the other end for putting them out. Increases Constitution by 8 and Perception by 6. Enchanted Armoire: Lamplighter's Set (Item 1 of 4). ",
	  "text": "Lamplighter",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_lamplighter",
	  "klass": "armoire",
	  "index": "lamplighter",
	  "str": 0,
	  "int": 0
	},
	"weapon_armoire_coachDriversWhip": {
	  "str": 6,
	  "int": 8,
	  "set": "coachDriver",
	  "notes": "Your steeds know what they're doing, so this whip is just for show (and the neat snapping sound!). Increases Intelligence by 8 and Strength by 6. Enchanted Armoire: Coach Driver Set (Item 3 of 3). ",
	  "text": "Coach Driver's Whip",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_coachDriversWhip",
	  "klass": "armoire",
	  "index": "coachDriversWhip",
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_scepterOfDiamonds": {
	  "str": 13,
	  "set": "kingOfDiamonds",
	  "notes": "This scepter shines with a warm red glow as it grants you increased willpower. Increases Strength by 13. Enchanted Armoire: King of Diamonds Set (Item 3 of 4). ",
	  "text": "Scepter of Diamonds",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_scepterOfDiamonds",
	  "klass": "armoire",
	  "index": "scepterOfDiamonds",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_flutteryArmy": {
	  "con": 5,
	  "int": 5,
	  "str": 5,
	  "set": "fluttery",
	  "notes": "This group of scrappy lepidopterans is ready to flap fiercely and cool down your reddest tasks! Increases Constitution, Intelligence, and Strength by 5 each. Enchanted Armoire: Fluttery Frock Set (Item 3 of 4). ",
	  "text": "Fluttery Army",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_flutteryArmy",
	  "klass": "armoire",
	  "index": "flutteryArmy",
	  "per": 0
	},
	"weapon_armoire_cobblersHammer": {
	  "con": 7,
	  "str": 7,
	  "set": "cobbler",
	  "notes": "This hammer is specially made for leatherwork. It can do a real number on a red Daily in a pinch, though. Increases Constitution and Strength by 7 each. Enchanted Armoire: Cobbler Set (Item 2 of 3). ",
	  "text": "Cobbler's Hammer",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_cobblersHammer",
	  "klass": "armoire",
	  "index": "cobblersHammer",
	  "int": 0,
	  "per": 0
	},
	"weapon_armoire_glassblowersBlowpipe": {
	  "str": 6,
	  "set": "glassblower",
	  "notes": "Use this tube to blow molten glass into beautiful vases, ornaments, and other fancy things. Increases Strength by 6. Enchanted Armoire: Glassblower Set (Item 1 of 4). ",
	  "text": "Glassblower's Blowpipe",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_glassblowersBlowpipe",
	  "klass": "armoire",
	  "index": "glassblowersBlowpipe",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_poisonedGoblet": {
	  "int": 7,
	  "set": "piraticalPrincess",
	  "notes": "Use this to build your resistance to iocane powder and other inconceivably dangerous poisons. Increases Intelligence by 7. Enchanted Armoire: Piratical Princess Set (Item 3 of 4). ",
	  "text": "Poisoned Goblet",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_poisonedGoblet",
	  "klass": "armoire",
	  "index": "poisonedGoblet",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_jeweledArcherBow": {
	  "twoHanded": true,
	  "int": 15,
	  "set": "jeweledArcher",
	  "notes": "This bow of gold and gems will send your arrows to their targets at incredible speed. Increases Intelligence by 15. Enchanted Armoire: Jeweled Archer Set (Item 3 of 3). Two-handed item.",
	  "text": "Jeweled Archer Bow",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_jeweledArcherBow",
	  "klass": "armoire",
	  "index": "jeweledArcherBow",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_needleOfBookbinding": {
	  "str": 8,
	  "set": "bookbinder",
	  "notes": "You'd be surprised at how tough books can be. This needle can pierce right to the heart of your chores. Increases Strength by 8. Enchanted Armoire: Bookbinder Set (Item 3 of 4). ",
	  "text": "Needle of Bookbinding",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_needleOfBookbinding",
	  "klass": "armoire",
	  "index": "needleOfBookbinding",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_spearOfSpades": {
	  "con": 13,
	  "set": "aceOfSpades",
	  "notes": "This knightly lance is perfect for attacking your reddest Habits and Dailies. Increases Constitution by 13. Enchanted Armoire: Ace of Spades Set (Item 3 of 3). ",
	  "text": "Spear of Spades",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_spearOfSpades",
	  "klass": "armoire",
	  "index": "spearOfSpades",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"weapon_armoire_arcaneScroll": {
	  "int": 9,
	  "set": "scribe",
	  "notes": "This ancient To Do list is filled with strange symbols and spells from a forgotten age. Increases Intelligence by 9. Enchanted Armoire: Scribe Set (Item 3 of 3). ",
	  "text": "Arcane Scroll",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_arcaneScroll",
	  "klass": "armoire",
	  "index": "arcaneScroll",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_chefsSpoon": {
	  "int": 8,
	  "set": "chef",
	  "notes": "Raise it as you release your battle cry: “SPOOOON!!” Increases Intelligence by 8. Enchanted Armoire: Chef Set (Item 3 of 4). ",
	  "text": "Chef's Spoon",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_chefsSpoon",
	  "klass": "armoire",
	  "index": "chefsSpoon",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_vernalTaper": {
	  "con": 8,
	  "set": "vernalVestments",
	  "notes": "The days are getting longer, but this candle will help you find your way before sunrise. Increases Constitution by 8. Enchanted Armoire: Vernal Vestments Set (Item 3 of 3). ",
	  "text": "Vernal Taper",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_vernalTaper",
	  "klass": "armoire",
	  "index": "vernalTaper",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"weapon_armoire_jugglingBalls": {
	  "int": 10,
	  "notes": "Habiticans are master multi-taskers, so you should have no trouble keeping all these balls in the air! Increases Intelligence by 10. Enchanted Armoire: Independent Item. ",
	  "text": "Juggling Balls",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_jugglingBalls",
	  "set": "armoire-jugglingBalls",
	  "klass": "armoire",
	  "index": "jugglingBalls",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_slingshot": {
	  "str": 10,
	  "notes": "Take aim at your red Dailies! Increases Strength by 10. Enchanted Armoire: Independent Item. ",
	  "text": "Slingshot",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_slingshot",
	  "set": "armoire-slingshot",
	  "klass": "armoire",
	  "index": "slingshot",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_nephriteBow": {
	  "int": 7,
	  "str": 6,
	  "set": "nephrite",
	  "twoHanded": true,
	  "notes": "This bow shoots special jade-tipped arrows that will take down even your most stubborn bad habits! Increases Intelligence by 7 and Strength by 6. Enchanted Armoire: Nephrite Archer Set (Item 1 of 3). Two-handed item.",
	  "text": "Nephrite Bow",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_nephriteBow",
	  "klass": "armoire",
	  "index": "nephriteBow",
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_bambooCane": {
	  "int": 6,
	  "per": 6,
	  "con": 6,
	  "set": "boating",
	  "notes": "Perfect for assisting you in a stroll, or for dancing the Charleston. Increases Intelligence, Perception, and Constitution by 6 each. Enchanted Armoire: Boating Set (Item 3 of 3). ",
	  "text": "Bamboo Cane",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_bambooCane",
	  "klass": "armoire",
	  "index": "bambooCane",
	  "str": 0
	},
	"weapon_armoire_astronomersTelescope": {
	  "per": 10,
	  "set": "astronomer",
	  "notes": "An instrument that will allow you to observe the stars' ancient dance. Increases Perception by 10. Enchanted Armoire: Astronomer Mage Set (Item 3 of 3). ",
	  "text": "Astronomer's Telescope",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_astronomersTelescope",
	  "klass": "armoire",
	  "index": "astronomersTelescope",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"weapon_armoire_magnifyingGlass": {
	  "per": 7,
	  "set": "detective",
	  "notes": "Aha! A piece of evidence! Examine it closely with this fine magnifier. Increases Perception by 7. Enchanted Armoire: Detective Set (Item 3 of 4). ",
	  "text": "Magnifying Glass",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_magnifyingGlass",
	  "klass": "armoire",
	  "index": "magnifyingGlass",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"weapon_armoire_floridFan": {
	  "con": 9,
	  "notes": "This lovely silk fan folds when not in use. Increases Constitution by 9. Enchanted Armoire: Independent Item. ",
	  "text": "Florid Fan",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_floridFan",
	  "set": "armoire-floridFan",
	  "klass": "armoire",
	  "index": "floridFan",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"weapon_armoire_resplendentRapier": {
	  "per": 9,
	  "notes": "Demonstrate your swordsmanship with this sharply pointed weapon. Increases Perception by 9. Enchanted Armoire: Independent Item. ",
	  "text": "Resplendent Rapier",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_resplendentRapier",
	  "set": "armoire-resplendentRapier",
	  "klass": "armoire",
	  "index": "resplendentRapier",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"weapon_armoire_shadowMastersMace": {
	  "per": 12,
	  "set": "shadowMaster",
	  "notes": "Creatures of darkness will obey your every command when you wave this glowing mace. Increases Perception by 12. Enchanted Armoire: Shadow Master Set (Item 3 of 4). ",
	  "text": "Shadow Master's Mace",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_shadowMastersMace",
	  "klass": "armoire",
	  "index": "shadowMastersMace",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"weapon_armoire_alchemistsDistiller": {
	  "str": 8,
	  "int": 5,
	  "set": "alchemist",
	  "notes": "Purify metals and other magical compounds with this shiny brass instrument. Increases Strength by 8 and Intelligence by 5. Enchanted Armoire: Alchemist Set (Item 3 of 4). ",
	  "text": "Alchemist's Distiller",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_alchemistsDistiller",
	  "klass": "armoire",
	  "index": "alchemistsDistiller",
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_happyBanner": {
	  "per": 7,
	  "set": "birthday",
	  "notes": "Is the “H” for Happy, or Habitica? Your choice! Increases Perception by 7. Enchanted Armoire: Happy Birthday Set (Item 3 of 4). ",
	  "text": "Happy Banner",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_happyBanner",
	  "klass": "armoire",
	  "index": "happyBanner",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"weapon_armoire_livelyMatch": {
	  "str": 15,
	  "set": "matchMaker",
	  "notes": "When you're holding this, you're sure to spark someone's interest! Increases Strength by 15. Enchanted Armoire: Match Maker Set (Item 3 of 4). ",
	  "text": "A Lively Match",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_livelyMatch",
	  "klass": "armoire",
	  "index": "livelyMatch",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_baseballBat": {
	  "con": 9,
	  "set": "baseball",
	  "notes": "Get a home run on those good habits! Increases Constitution by 9. Enchanted Armoire: Baseball Set (Item 3 of 4). ",
	  "text": "Baseball Bat",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_baseballBat",
	  "klass": "armoire",
	  "index": "baseballBat",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"weapon_armoire_paperCutter": {
	  "str": 9,
	  "set": "paperKnight",
	  "notes": "This may not look fearsome, but have you never had a papercut? Increases Strength by 9. Enchanted Armoire: Paper Knight Set (Item 1 of 3). ",
	  "text": "Paper Cutter",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_paperCutter",
	  "klass": "armoire",
	  "index": "paperCutter",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_fiddlersBow": {
	  "str": 6,
	  "set": "fiddler",
	  "notes": "You can coax music out of anything with this! ...A violin might work best, though. Increases Strength by 6. Enchanted Armoire: Fiddler Set (Item 3 of 4). ",
	  "text": "Fiddler's Bow",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_fiddlersBow",
	  "klass": "armoire",
	  "index": "fiddlersBow",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_beachFlag": {
	  "per": 12,
	  "set": "lifeguard",
	  "notes": "Rally the troops around your sandcastle and let everyone know where to come for help! Increases Perception by 12. Enchanted Armoire: Lifeguard Set (Item 1 of 3). ",
	  "text": "Beach Flag",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_beachFlag",
	  "klass": "armoire",
	  "index": "beachFlag",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"weapon_armoire_handyHook": {
	  "str": 8,
	  "set": "pirate",
	  "notes": "Who needs opposable thumbs? This hook is “handy” enough for anyone. Increases Strength by 8. Enchanted Armoire: Pirate Set (Item 1 of 3). ",
	  "text": "Handy Hook",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_handyHook",
	  "klass": "armoire",
	  "index": "handyHook",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_guardiansCrook": {
	  "str": 10,
	  "set": "grazerGuardian",
	  "notes": "This shepherd's crook could come in handy next time you take your Pets for a stroll in the countryside... Increases Strength by 10. Enchanted Armoire: Guardian of the Grazers Set (Item 2 of 3). ",
	  "text": "Guardian's Crook",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_guardiansCrook",
	  "klass": "armoire",
	  "index": "guardiansCrook",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_enchantersStaff": {
	  "per": 12,
	  "set": "autumnEnchanter",
	  "notes": "The green stones on this staff are filled with the power of change that flows strong through the autumn wind. Increases Perception by 12. Enchanted Armoire: Autumn Enchanter Set (Item 3 of 4). ",
	  "text": "Enchanter's Staff",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_enchantersStaff",
	  "klass": "armoire",
	  "index": "enchantersStaff",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"weapon_armoire_clubOfClubs": {
	  "str": 10,
	  "set": "jackOfClubs",
	  "notes": "This stylish club won't tip your hand too early about your intentions toward those sneaky old tasks. Increases Strength by 10. Enchanted Armoire: Jack of Clubs Set (Item 2 of 3). ",
	  "text": "Club of... Clubs",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_clubOfClubs",
	  "klass": "armoire",
	  "index": "clubOfClubs",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_eveningTea": {
	  "int": 12,
	  "set": "dressingGown",
	  "notes": "This panacea will help you relax so those big tasks don't look so threatening. Increases Intelligence by 12. Enchanted Armoire: Dressing Gown Set (Item 3 of 3). ",
	  "text": "Cup of Tea",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_eveningTea",
	  "klass": "armoire",
	  "index": "eveningTea",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_blueMoonSai": {
	  "str": 8,
	  "set": "blueMoon",
	  "notes": "This sai is a traditional weapon, imbued with the powers of the dark side of the moon. Increases Strength by 8. Enchanted Armoire: Blue Moon Rogue Set (item 1 of 4). ",
	  "text": "Dark Lunar Sai",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_blueMoonSai",
	  "klass": "armoire",
	  "index": "blueMoonSai",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_jadeGlaive": {
	  "str": 10,
	  "set": "jadeWarrior",
	  "notes": "The reach of this glaive will keep you far from your enemies! Also, you can knock things off high shelves. Increases Strength by 10. Enchanted Armoire: Jade Warrior Set (Item 3 of 3). ",
	  "text": "Jade Glaive",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_jadeGlaive",
	  "klass": "armoire",
	  "index": "jadeGlaive",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_medievalWashboard": {
	  "str": 6,
	  "set": "medievalLaunderers",
	  "notes": "Scrub-a-dub-dub! It's time to apply some elbow grease and get that laundry clean. Increases Strength by 6. Enchanted Armoire: Medieval Launderers Set (Item 5 of 6). ",
	  "text": "Washboard",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_medievalWashboard",
	  "klass": "armoire",
	  "index": "medievalWashboard",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_buoyantBubbles": {
	  "per": 5,
	  "set": "bath",
	  "notes": "These bubbles just keep on floating forever, somehow... Increases Perception by 5. Enchanted Armoire: Bubble Bath Set (Item 3 of 4). ",
	  "text": "Buoyant Bubbles",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_buoyantBubbles",
	  "klass": "armoire",
	  "index": "buoyantBubbles",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"weapon_armoire_heraldsBuisine": {
	  "str": 6,
	  "set": "herald",
	  "notes": "Any announcement will sound so much better following fanfare from this trumpet. Increases Strength by 6. Enchanted Armoire: Herald Set (Item 3 of 4). ",
	  "text": "Herald's Buisine",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_heraldsBuisine",
	  "klass": "armoire",
	  "index": "heraldsBuisine",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_skullLantern": {
	  "int": 10,
	  "notes": "Let its glow be your guide throughout the darkest nights of your adventures. Increases Intelligence by 10. Enchanted Armoire: Independent Item. ",
	  "text": "Skull Lantern",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_skullLantern",
	  "set": "armoire-skullLantern",
	  "klass": "armoire",
	  "index": "skullLantern",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_potionBase": {
	  "str": 3,
	  "int": 3,
	  "con": 3,
	  "per": 3,
	  "set": "hatchingPotions",
	  "notes": "The pets you hatch with this potion are anything but basic! Increases Strength, Intelligence, Constitution, and Perception by 3 each. Enchanted Armoire: Potion Set (Item 1 of 10) ",
	  "text": "Decorative Base Potion",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_potionBase",
	  "klass": "armoire",
	  "index": "potionBase"
	},
	"weapon_armoire_potionBlue": {
	  "int": 4,
	  "con": 8,
	  "set": "hatchingPotions",
	  "notes": "Life is a little bit fluffier and a whole lot bluer with this potion to make cotton candy blue beasts! Increases Intelligence by 4 and Constitution by 8. Enchanted Armoire: Potion Set (Item 9 of 10) ",
	  "text": "Decorative Cotton Candy Blue Potion",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_potionBlue",
	  "klass": "armoire",
	  "index": "potionBlue",
	  "str": 0,
	  "per": 0
	},
	"weapon_armoire_potionDesert": {
	  "str": 4,
	  "con": 8,
	  "set": "hatchingPotions",
	  "notes": "With this potion in hand, you don’t have to be stranded on a deserted island to find a desert-colored pet to share your dessert with! Increases Strength by 4 and Constitution by 8. Enchanted Armoire: Potion Set (Item 3 of 10) ",
	  "text": "Decorative Desert Potion",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_potionDesert",
	  "klass": "armoire",
	  "index": "potionDesert",
	  "int": 0,
	  "per": 0
	},
	"weapon_armoire_potionGolden": {
	  "str": 6,
	  "int": 6,
	  "set": "hatchingPotions",
	  "notes": "With this potion, your pet can have a heart of gold… and ears of gold… and a tail of gold… Increases Strength and Intelligence by 6 each. Enchanted Armoire: Potion Set (Item 10 of 10) ",
	  "text": "Decorative Golden Potion",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_potionGolden",
	  "klass": "armoire",
	  "index": "potionGolden",
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_potionPink": {
	  "int": 4,
	  "con": 8,
	  "set": "hatchingPotions",
	  "notes": "Life is a little bit sweeter and a whole lot pinker with this cotton candy pink pet potion! Increases Intelligence by 4 and Constitution by 8. Enchanted Armoire: Potion Set (Item 8 of 10) ",
	  "text": "Decorative Cotton Candy Pink Potion",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_potionPink",
	  "klass": "armoire",
	  "index": "potionPink",
	  "str": 0,
	  "per": 0
	},
	"weapon_armoire_potionRed": {
	  "str": 6,
	  "con": 6,
	  "set": "hatchingPotions",
	  "notes": "It’s a red-letter day because this hatching potion is no red herring! Increases Strength and Constitution by 6 each. Enchanted Armoire: Potion Set (Item 4 of 10) ",
	  "text": "Decorative Red Potion",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_potionRed",
	  "klass": "armoire",
	  "index": "potionRed",
	  "int": 0,
	  "per": 0
	},
	"weapon_armoire_potionShade": {
	  "int": 9,
	  "per": 3,
	  "set": "hatchingPotions",
	  "notes": "Time to throw some shade (potion) on an egg to hatch yourself a shady pet! Increases Intelligence by 9 and Perception by 3. Enchanted Armoire: Potion Set (Item 5 of 10) ",
	  "text": "Decorative Shade Potion",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_potionShade",
	  "klass": "armoire",
	  "index": "potionShade",
	  "str": 0,
	  "con": 0
	},
	"weapon_armoire_potionSkeleton": {
	  "str": 9,
	  "int": 3,
	  "set": "hatchingPotions",
	  "notes": "Are you feeling productive? Is today a bones day? Be sure to carry this skeleton hatching potion with you! Increases Strength by 9 and Intelligence by 3. Enchanted Armoire: Potion Set (Item 6 of 10) ",
	  "text": "Decorative Skeleton Potion",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_potionSkeleton",
	  "klass": "armoire",
	  "index": "potionSkeleton",
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_potionWhite": {
	  "con": 5,
	  "per": 7,
	  "set": "hatchingPotions",
	  "notes": "You could almost lose a pet hatched with this potion in a snowstorm! Increases Constitution by 5 and Perception by 7. Enchanted Armoire: Potion Set (Item 2 of 10) ",
	  "text": "Decorative White Potion",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_potionWhite",
	  "klass": "armoire",
	  "index": "potionWhite",
	  "str": 0,
	  "int": 0
	},
	"weapon_armoire_potionZombie": {
	  "con": 4,
	  "per": 8,
	  "set": "hatchingPotions",
	  "notes": "Use this to hatch a zombie pet, but stay vigilant in case it starts nibbling on you! Increases Constitution by 4 and Perception by 8. Enchanted Armoire: Potion Set (Item 7 of 10) ",
	  "text": "Decorative Zombie Potion",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_potionZombie",
	  "klass": "armoire",
	  "index": "potionZombie",
	  "str": 0,
	  "int": 0
	},
	"weapon_armoire_regalSceptre": {
	  "per": 7,
	  "set": "regal",
	  "notes": "Display your regal authority by taking this bejeweled staff in hand. Increases Perception by 7. Enchanted Armoire: Regal Set (Item 2 of 2). ",
	  "text": "Regal Sceptre",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_regalSceptre",
	  "klass": "armoire",
	  "index": "regalSceptre",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"weapon_armoire_shootingStarSpell": {
	  "str": 5,
	  "int": 5,
	  "set": "shootingStar",
	  "twoHanded": true,
	  "notes": "Surround yourself in a spell of stardust magic to help you make all your wishes come true. Increases Strength and Intelligence by 5 each. Enchanted Armoire: Stardust Set (Item 3 of 3). Two-handed item.",
	  "text": "Stardust Sparkles",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_shootingStarSpell",
	  "klass": "armoire",
	  "index": "shootingStarSpell",
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_pinkLongbow": {
	  "per": 6,
	  "str": 5,
	  "twoHanded": true,
	  "notes": "Be a cupid-in-training, mastering both archery and matters of the heart with this beautiful bow. Increases Perception by 6 and Strength by 5. Enchanted Armoire: Independent Item. Two-handed item.",
	  "text": "Pink Longbow",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_pinkLongbow",
	  "set": "armoire-pinkLongbow",
	  "klass": "armoire",
	  "index": "pinkLongbow",
	  "int": 0,
	  "con": 0
	},
	"weapon_armoire_gardenersWateringCan": {
	  "int": 8,
	  "set": "gardenerSet",
	  "notes": "You can’t get far without water! Have an infinite supply on hand with this magic, refilling watering can. Increases Intelligence by 8. Enchanted Armoire: Gardener Set (Item 4 of 4). ",
	  "text": "Watering Can",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_gardenersWateringCan",
	  "klass": "armoire",
	  "index": "gardenersWateringCan",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_huntingHorn": {
	  "str": 5,
	  "int": 6,
	  "set": "musicalInstrumentOne",
	  "notes": "Twooooo! Twoo! Twoo! Gather your party for an adventure or quest by playing this horn. Increases Strength by 5 and Intelligence by 6. Enchanted Armoire: Musical Instrument Set 1 (Item 1 of 3) ",
	  "text": "Hunting Horn",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_huntingHorn",
	  "klass": "armoire",
	  "index": "huntingHorn",
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_blueKite": {
	  "str": 3,
	  "con": 3,
	  "int": 3,
	  "per": 3,
	  "set": "kite",
	  "notes": "Sailing high up in the blue, what tricks can you make your kite do? Increases all stats by 3 each. Enchanted Armoire: Kite Set (Item 1 of 5) ",
	  "text": "Blue Kite",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_blueKite",
	  "klass": "armoire",
	  "index": "blueKite"
	},
	"weapon_armoire_greenKite": {
	  "str": 3,
	  "con": 3,
	  "int": 3,
	  "per": 3,
	  "set": "kite",
	  "notes": "A more stunning kite you’ve never seen, with its shades of yellow and green. Increases all stats by 3 each. Enchanted Armoire: Kite Set (Item 2 of 5) ",
	  "text": "Green Kite",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_greenKite",
	  "klass": "armoire",
	  "index": "greenKite"
	},
	"weapon_armoire_orangeKite": {
	  "str": 3,
	  "con": 3,
	  "int": 3,
	  "per": 3,
	  "set": "kite",
	  "notes": "With colors like sunrise and sunset, let’s see how high your kite can get! Increases all stats by 3 each. Enchanted Armoire: Kite Set (Item 3 of 5) ",
	  "text": "Orange Kite",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_orangeKite",
	  "klass": "armoire",
	  "index": "orangeKite"
	},
	"weapon_armoire_pinkKite": {
	  "str": 3,
	  "con": 3,
	  "int": 3,
	  "per": 3,
	  "set": "kite",
	  "notes": "Diving, twirling, soaring high, your kite stands out against the sky. Increases all stats by 3 each. Enchanted Armoire: Kite Set (Item 4 of 5) ",
	  "text": "Pink Kite",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_pinkKite",
	  "klass": "armoire",
	  "index": "pinkKite"
	},
	"weapon_armoire_yellowKite": {
	  "str": 3,
	  "con": 3,
	  "int": 3,
	  "per": 3,
	  "set": "kite",
	  "notes": "Swooping and swerving to and fro, watch your cheerful kite go. Increases all stats by 3 each. Enchanted Armoire: Kite Set (Item 5 of 5) ",
	  "text": "Yellow Kite",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_yellowKite",
	  "klass": "armoire",
	  "index": "yellowKite"
	},
	"weapon_armoire_pushBroom": {
	  "str": 4,
	  "int": 4,
	  "set": "cleaningSupplies",
	  "notes": "Take this tidying tool on your adventures and always be able to sweep a sooty stoop or clear cobwebs from corners. Increases Strength and Intelligence by 4 each. Enchanted Armoire: Cleaning Supplies Set (Item 1 of 3) ",
	  "text": "Push Broom",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_pushBroom",
	  "klass": "armoire",
	  "index": "pushBroom",
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_featherDuster": {
	  "con": 4,
	  "per": 4,
	  "set": "cleaningSupplies",
	  "notes": "Let these fancy feathers fly over all your old objects to make them shine like new. Just beware of the disturbed dust so you don’t sneeze! Increases Constitution and Perception by 4 each. Enchanted Armoire: Cleaning Supplies Set (Item 2 of 3) ",
	  "text": "Feather Duster",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_featherDuster",
	  "klass": "armoire",
	  "index": "featherDuster",
	  "str": 0,
	  "int": 0
	},
	"weapon_armoire_magicSpatula": {
	  "per": 8,
	  "set": "cookingImplements",
	  "notes": "Watch your food fly and flip in the air. You get good luck for the day if it magically flips over three times and then lands back on your spatula. Increases Perception by 8. Enchanted Armoire: Cooking Implements Set (Item 1 of 2). ",
	  "text": "Magic Spatula",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_magicSpatula",
	  "klass": "armoire",
	  "index": "magicSpatula",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"weapon_armoire_finelyCutGem": {
	  "con": 10,
	  "set": "jewelers",
	  "notes": "What a find! This stunning, precision-cut gem will be the prize of your collection. And it might contain some special magic, just waiting for you to tap into it. Increases Constitution by 10. Enchanted Armoire: Jeweler Set (Item 4 of 4). ",
	  "text": "Finely Cut Gem",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_finelyCutGem",
	  "klass": "armoire",
	  "index": "finelyCutGem",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"weapon_armoire_paintbrush": {
	  "int": 8,
	  "set": "painters",
	  "notes": "A jolt of pure inspiration rushes through you when you pick up this brush, allowing you to paint anything you can imagine. Increases Intelligence by 8. Enchanted Armoire: Painter Set (Item 3 of 4). ",
	  "text": "Paintbrush",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_paintbrush",
	  "klass": "armoire",
	  "index": "paintbrush",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"weapon_armoire_mop": {
	  "con": 4,
	  "per": 4,
	  "set": "cleaningSuppliesTwo",
	  "notes": "Step 1: Dunk the mop in a bucket of water and suds. Step 2: Drag the mop along the floor. Step 3: Pretend the end of the mop handle is a microphone and sing your heart out. Step 4: Repeat Steps 1-3 until floor is clean. Increases Constitution and Perception by 4 each. Enchanted Armoire: Cleaning Supplies Set Two (Item 2 of 3) ",
	  "text": "Mop",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_mop",
	  "klass": "armoire",
	  "index": "mop",
	  "str": 0,
	  "int": 0
	},
	"weapon_armoire_cleaningCloth": {
	  "str": 4,
	  "con": 4,
	  "set": "cleaningSuppliesTwo",
	  "notes": "Take this tidying tool on your adventures and always be able to polish a pretty plaque or wipe a wooden windowsill. Increases Strength and Constitution by 4 each. Enchanted Armoire: Cleaning Supplies Set Two (Item 3 of 3) ",
	  "text": "Cleaning Cloth",
	  "value": 100,
	  "type": "weapon",
	  "key": "weapon_armoire_cleaningCloth",
	  "klass": "armoire",
	  "index": "cleaningCloth",
	  "int": 0,
	  "per": 0
	},
	"armor_warrior_1": {
	  "text": "Leather Armor",
	  "notes": "Jerkin of sturdy boiled hide. Increases Constitution by 3.",
	  "con": 3,
	  "value": 30,
	  "type": "armor",
	  "key": "armor_warrior_1",
	  "set": "warrior-1",
	  "klass": "warrior",
	  "index": "1",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_warrior_2": {
	  "text": "Chain Mail",
	  "notes": "Armor of interlocked metal rings. Increases Constitution by 5.",
	  "con": 5,
	  "value": 45,
	  "type": "armor",
	  "key": "armor_warrior_2",
	  "set": "warrior-2",
	  "klass": "warrior",
	  "index": "2",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_warrior_3": {
	  "text": "Plate Armor",
	  "notes": "Suit of all-encasing steel, the pride of knights. Increases Constitution by 7.",
	  "con": 7,
	  "value": 65,
	  "type": "armor",
	  "key": "armor_warrior_3",
	  "set": "warrior-3",
	  "klass": "warrior",
	  "index": "3",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_warrior_4": {
	  "text": "Red Armor",
	  "notes": "Heavy plate glowing with defensive enchantments. Increases Constitution by 9.",
	  "con": 9,
	  "value": 90,
	  "type": "armor",
	  "key": "armor_warrior_4",
	  "set": "warrior-4",
	  "klass": "warrior",
	  "index": "4",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_warrior_5": {
	  "text": "Golden Armor",
	  "notes": "Looks ceremonial, but no known blade can pierce it. Increases Constitution by 11.",
	  "con": 11,
	  "value": 120,
	  "last": true,
	  "type": "armor",
	  "key": "armor_warrior_5",
	  "set": "warrior-5",
	  "klass": "warrior",
	  "index": "5",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_rogue_1": {
	  "text": "Oiled Leather",
	  "notes": "Leather armor treated to reduce noise. Increases Perception by 6.",
	  "per": 6,
	  "value": 30,
	  "type": "armor",
	  "key": "armor_rogue_1",
	  "set": "rogue-1",
	  "klass": "rogue",
	  "index": "1",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_rogue_2": {
	  "text": "Black Leather",
	  "notes": "Colored with dark dye to blend into shadows. Increases Perception by 9.",
	  "per": 9,
	  "value": 45,
	  "type": "armor",
	  "key": "armor_rogue_2",
	  "set": "rogue-2",
	  "klass": "rogue",
	  "index": "2",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_rogue_3": {
	  "text": "Camouflage Vest",
	  "notes": "Equally discreet in dungeon or wilderness. Increases Perception by 12.",
	  "per": 12,
	  "value": 65,
	  "type": "armor",
	  "key": "armor_rogue_3",
	  "set": "rogue-3",
	  "klass": "rogue",
	  "index": "3",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_rogue_4": {
	  "text": "Penumbral Armor",
	  "notes": "Wraps the wearer in a veil of twilight. Increases Perception by 15.",
	  "per": 15,
	  "value": 90,
	  "type": "armor",
	  "key": "armor_rogue_4",
	  "set": "rogue-4",
	  "klass": "rogue",
	  "index": "4",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_rogue_5": {
	  "text": "Umbral Armor",
	  "notes": "Allows stealth in the open in broad daylight. Increases Perception by 18.",
	  "per": 18,
	  "value": 120,
	  "last": true,
	  "type": "armor",
	  "key": "armor_rogue_5",
	  "set": "rogue-5",
	  "klass": "rogue",
	  "index": "5",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_healer_1": {
	  "text": "Acolyte Robe",
	  "notes": "Garment showing humility and purpose. Increases Constitution by 6.",
	  "con": 6,
	  "value": 30,
	  "type": "armor",
	  "key": "armor_healer_1",
	  "set": "healer-1",
	  "klass": "healer",
	  "index": "1",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_healer_2": {
	  "text": "Medic Robe",
	  "notes": "Worn by those dedicated to tending the wounded in battle. Increases Constitution by 9.",
	  "con": 9,
	  "value": 45,
	  "type": "armor",
	  "key": "armor_healer_2",
	  "set": "healer-2",
	  "klass": "healer",
	  "index": "2",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_healer_3": {
	  "text": "Defender Mantle",
	  "notes": "Turns the healer's own magics inward to fend off harm. Increases Constitution by 12.",
	  "con": 12,
	  "value": 65,
	  "type": "armor",
	  "key": "armor_healer_3",
	  "set": "healer-3",
	  "klass": "healer",
	  "index": "3",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_healer_4": {
	  "text": "Physician Mantle",
	  "notes": "Projects authority and dissipates curses. Increases Constitution by 15.",
	  "con": 15,
	  "value": 90,
	  "type": "armor",
	  "key": "armor_healer_4",
	  "set": "healer-4",
	  "klass": "healer",
	  "index": "4",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_healer_5": {
	  "text": "Royal Mantle",
	  "notes": "Attire of those who have saved the lives of kings. Increases Constitution by 18.",
	  "con": 18,
	  "value": 120,
	  "last": true,
	  "type": "armor",
	  "key": "armor_healer_5",
	  "set": "healer-5",
	  "klass": "healer",
	  "index": "5",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_wizard_1": {
	  "text": "Magician Robe",
	  "notes": "Hedge-mage's outfit. Increases Intelligence by 2.",
	  "int": 2,
	  "value": 30,
	  "type": "armor",
	  "key": "armor_wizard_1",
	  "set": "wizard-1",
	  "klass": "wizard",
	  "index": "1",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_wizard_2": {
	  "text": "Wizard Robe",
	  "notes": "Clothes for a wandering wonder-worker. Increases Intelligence by 4.",
	  "int": 4,
	  "value": 45,
	  "type": "armor",
	  "key": "armor_wizard_2",
	  "set": "wizard-2",
	  "klass": "wizard",
	  "index": "2",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_wizard_3": {
	  "text": "Robe of Mysteries",
	  "notes": "Denotes initiation into elite secrets. Increases Intelligence by 6.",
	  "int": 6,
	  "value": 65,
	  "type": "armor",
	  "key": "armor_wizard_3",
	  "set": "wizard-3",
	  "klass": "wizard",
	  "index": "3",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_wizard_4": {
	  "text": "Archmage Robe",
	  "notes": "Spirits and elementals bow before it. Increases Intelligence by 9.",
	  "int": 9,
	  "value": 90,
	  "type": "armor",
	  "key": "armor_wizard_4",
	  "set": "wizard-4",
	  "klass": "wizard",
	  "index": "4",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_wizard_5": {
	  "text": "Royal Magus Robe",
	  "notes": "Symbol of the power behind the throne. Increases Intelligence by 12.",
	  "int": 12,
	  "value": 120,
	  "last": true,
	  "type": "armor",
	  "key": "armor_wizard_5",
	  "set": "wizard-5",
	  "klass": "wizard",
	  "index": "5",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_base_0": {
	  "text": "Plain Clothing",
	  "notes": "Ordinary clothing. Confers no benefit.",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_base_0",
	  "set": "base-0",
	  "klass": "base",
	  "index": "0",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_0": {
	  "text": "Shade Armor",
	  "notes": "Screams when struck, for it feels pain in its wearer's place. Increases Constitution by 20.",
	  "con": 20,
	  "value": 150,
	  "type": "armor",
	  "key": "armor_special_0",
	  "set": "special-0",
	  "klass": "special",
	  "index": "0",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_1": {
	  "text": "Crystal Armor",
	  "notes": "Its tireless power inures the wearer to mundane discomfort. Increases all Stats by 6.",
	  "con": 6,
	  "str": 6,
	  "per": 6,
	  "int": 6,
	  "value": 170,
	  "type": "armor",
	  "key": "armor_special_1",
	  "set": "special-1",
	  "klass": "special",
	  "index": "1"
	},
	"armor_special_2": {
	  "text": "Jean Chalard's Noble Tunic",
	  "notes": "Makes you extra fluffy! Increases Constitution and Intelligence by 25 each.",
	  "int": 25,
	  "con": 25,
	  "value": 200,
	  "type": "armor",
	  "key": "armor_special_2",
	  "set": "special-2",
	  "klass": "special",
	  "index": "2",
	  "str": 0,
	  "per": 0
	},
	"armor_special_takeThis": {
	  "text": "Take This Armor",
	  "notes": "This armor was earned by participating in a sponsored Challenge made by Take This. Congratulations! Increases all Stats by 5.",
	  "value": 0,
	  "con": 5,
	  "int": 5,
	  "per": 5,
	  "str": 5,
	  "type": "armor",
	  "key": "armor_special_takeThis",
	  "set": "special-takeThis",
	  "klass": "special",
	  "index": "takeThis"
	},
	"armor_special_heroicTunic": {
	  "text": "Heroic Tunic",
	  "notes": "They say heroes shouldn't rest on their laurels but you can rest in this comfortable and fashionable raiment. Increases all stats by 7.",
	  "con": 7,
	  "str": 7,
	  "per": 7,
	  "int": 7,
	  "value": 175,
	  "type": "armor",
	  "key": "armor_special_heroicTunic",
	  "set": "special-heroicTunic",
	  "klass": "special",
	  "index": "heroicTunic"
	},
	"armor_special_finnedOceanicArmor": {
	  "text": "Finned Oceanic Armor",
	  "notes": "Although delicate, this armor makes your skin as harmful to the touch as a fire coral. Increases Strength by 15.",
	  "str": 15,
	  "value": 130,
	  "type": "armor",
	  "key": "armor_special_finnedOceanicArmor",
	  "set": "special-finnedOceanicArmor",
	  "klass": "special",
	  "index": "finnedOceanicArmor",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_pyromancersRobes": {
	  "text": "Pyromancer's Robes",
	  "notes": "These elegant robes bestow each strike and spell with a burst of ethereal fire. Increases Constitution by 15.",
	  "con": 15,
	  "value": 130,
	  "type": "armor",
	  "key": "armor_special_pyromancersRobes",
	  "set": "special-pyromancersRobes",
	  "klass": "special",
	  "index": "pyromancersRobes",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_bardRobes": {
	  "text": "Bardic Robes",
	  "notes": "These colorful robes may be conspicuous, but you can sing your way out of any situation. Increases Perception by 3.",
	  "per": 3,
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_bardRobes",
	  "set": "special-bardRobes",
	  "klass": "special",
	  "index": "bardRobes",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_lunarWarriorArmor": {
	  "text": "Lunar Warrior Armor",
	  "notes": "This armor is forged of moonstone and magical steel. Increases Strength and Constitution by 7 each.",
	  "str": 7,
	  "con": 7,
	  "value": 130,
	  "type": "armor",
	  "key": "armor_special_lunarWarriorArmor",
	  "set": "special-lunarWarriorArmor",
	  "klass": "special",
	  "index": "lunarWarriorArmor",
	  "int": 0,
	  "per": 0
	},
	"armor_special_mammothRiderArmor": {
	  "text": "Mammoth Rider Armor",
	  "notes": "This suit of fur and leather includes a snazzy cape studded with rose quartz gems. It will protect you from bitter winds as you adventure in the coldest climes. Increases Constitution by 15.",
	  "con": 15,
	  "value": 130,
	  "type": "armor",
	  "key": "armor_special_mammothRiderArmor",
	  "set": "special-mammothRiderArmor",
	  "klass": "special",
	  "index": "mammothRiderArmor",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_roguishRainbowMessengerRobes": {
	  "text": "Roguish Rainbow Messenger Robes",
	  "notes": "These vividly striped robes will allow you to fly through gale-force winds smoothly and safely. Increases Strength by 15.",
	  "str": 15,
	  "value": 130,
	  "type": "armor",
	  "key": "armor_special_roguishRainbowMessengerRobes",
	  "set": "special-roguishRainbowMessengerRobes",
	  "klass": "special",
	  "index": "roguishRainbowMessengerRobes",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_pageArmor": {
	  "text": "Page Armor",
	  "notes": "Carry everything you need in your perfect pack! Increases Constitution by 16.",
	  "con": 16,
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_pageArmor",
	  "set": "special-pageArmor",
	  "klass": "special",
	  "index": "pageArmor",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_sneakthiefRobes": {
	  "text": "Sneakthief Robes",
	  "notes": "These robes will help hide you in the dead of night, but will also allow freedom of movement as you silently sneak about! Increases Intelligence by 16.",
	  "int": 16,
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_sneakthiefRobes",
	  "set": "special-sneakthiefRobes",
	  "klass": "special",
	  "index": "sneakthiefRobes",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_snowSovereignRobes": {
	  "text": "Snow Sovereign Robes",
	  "notes": "These robes are elegant enough for court, yet warm enough for the coldest winter day. Increases Perception by 17.",
	  "per": 17,
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_snowSovereignRobes",
	  "set": "special-snowSovereignRobes",
	  "klass": "special",
	  "index": "snowSovereignRobes",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_dandySuit": {
	  "text": "Dandy Suit",
	  "notes": "You're undeniably dressed for success! Increases Perception by 17.",
	  "per": 17,
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_dandySuit",
	  "set": "special-dandySuit",
	  "klass": "special",
	  "index": "dandySuit",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_nomadsCuirass": {
	  "text": "Nomad's Cuirass",
	  "notes": "This armor features a strong chest-plate to protect your heart! Increases Constitution by 17.",
	  "con": 17,
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_nomadsCuirass",
	  "set": "special-nomadsCuirass",
	  "klass": "special",
	  "index": "nomadsCuirass",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_samuraiArmor": {
	  "text": "Samurai Armor",
	  "notes": "This strong, scaled armor is held together by elegant silk cords. Increases Perception by 17.",
	  "per": 17,
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_samuraiArmor",
	  "set": "special-samuraiArmor",
	  "klass": "special",
	  "index": "samuraiArmor",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_turkeyArmorBase": {
	  "text": "Turkey Armor",
	  "notes": "Keep your drumsticks warm and cozy in this feathery armor! Confers no benefit.",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_turkeyArmorBase",
	  "set": "special-turkeyArmorBase",
	  "klass": "special",
	  "index": "turkeyArmorBase",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_yeti": {
	  "specialClass": "warrior",
	  "set": "yetiSet",
	  "text": "Yeti-Tamer Robe",
	  "notes": "Fuzzy and fierce. Increases Constitution by 9. Limited Edition 2013-2014 Winter Gear.",
	  "con": 9,
	  "value": 90,
	  "type": "armor",
	  "key": "armor_special_yeti",
	  "klass": "special",
	  "index": "yeti",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_ski": {
	  "specialClass": "rogue",
	  "set": "skiSet",
	  "text": "Ski-sassin Parka",
	  "notes": "Full of secret daggers and ski trail maps. Increases Perception by 15. Limited Edition 2013-2014 Winter Gear.",
	  "per": 15,
	  "value": 90,
	  "type": "armor",
	  "key": "armor_special_ski",
	  "klass": "special",
	  "index": "ski",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_candycane": {
	  "specialClass": "wizard",
	  "set": "candycaneSet",
	  "text": "Candy Cane Robe",
	  "notes": "Spun from sugar and silk. Increases Intelligence by 9. Limited Edition 2013-2014 Winter Gear.",
	  "int": 9,
	  "value": 90,
	  "type": "armor",
	  "key": "armor_special_candycane",
	  "klass": "special",
	  "index": "candycane",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_snowflake": {
	  "specialClass": "healer",
	  "set": "snowflakeSet",
	  "text": "Snowflake Robe",
	  "notes": "A robe to keep you warm, even in a blizzard. Increases Constitution by 15. Limited Edition 2013-2014 Winter Gear.",
	  "con": 15,
	  "value": 90,
	  "type": "armor",
	  "key": "armor_special_snowflake",
	  "klass": "special",
	  "index": "snowflake",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_birthday": {
	  "event": {
		"start": "2017-01-31",
		"end": "2017-02-02"
	  },
	  "text": "Absurd Party Robes",
	  "notes": "Happy Birthday, Habitica! Wear these Absurd Party Robes to celebrate this wonderful day. Confers no benefit.",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_birthday",
	  "set": "special-birthday",
	  "klass": "special",
	  "index": "birthday",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_springRogue": {
	  "set": "stealthyKittySet",
	  "event": {
		"start": "2014-03-21",
		"end": "2014-05-01",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Sleek Cat Suit",
	  "notes": "Impeccably groomed. Increases Perception by 15. Limited Edition 2014 Spring Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_springRogue",
	  "klass": "special",
	  "index": "springRogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_springWarrior": {
	  "set": "mightyBunnySet",
	  "event": {
		"start": "2014-03-21",
		"end": "2014-05-01",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Clover-steel Armor",
	  "notes": "Soft as clover, strong as steel! Increases Constitution by 9. Limited Edition 2014 Spring Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_springWarrior",
	  "klass": "special",
	  "index": "springWarrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_springMage": {
	  "set": "magicMouseSet",
	  "event": {
		"start": "2014-03-21",
		"end": "2014-05-01",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Rodentia Robes",
	  "notes": "Mice are nice! Increases Intelligence by 9. Limited Edition 2014 Spring Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_springMage",
	  "klass": "special",
	  "index": "springMage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_springHealer": {
	  "set": "lovingPupSet",
	  "event": {
		"start": "2014-03-21",
		"end": "2014-05-01",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Fuzzy Puppy Robes",
	  "notes": "Warm and snuggly, but protects its owner from harm. Increases Constitution by 15. Limited Edition 2014 Spring Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_springHealer",
	  "klass": "special",
	  "index": "springHealer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summerRogue": {
	  "set": "roguishPirateSet",
	  "event": {
		"start": "2014-06-20",
		"end": "2014-08-01",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Pirate Robes",
	  "notes": "These robes be very cozy, yarrrr! Increases Perception by 15. Limited Edition 2014 Summer Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_summerRogue",
	  "klass": "special",
	  "index": "summerRogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_summerWarrior": {
	  "set": "daringSwashbucklerSet",
	  "event": {
		"start": "2014-06-20",
		"end": "2014-08-01",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Swashbuckler Robes",
	  "notes": "Complete with buckle, as well as swash. Increases Constitution by 9. Limited Edition 2014 Summer Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_summerWarrior",
	  "klass": "special",
	  "index": "summerWarrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summerMage": {
	  "set": "emeraldMermageSet",
	  "event": {
		"start": "2014-06-20",
		"end": "2014-08-01",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Emerald Tail",
	  "notes": "This garment of shimmering scales transforms its wearer into a real Mermage! Increases Intelligence by 9. Limited Edition 2014 Summer Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_summerMage",
	  "klass": "special",
	  "index": "summerMage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_summerHealer": {
	  "set": "reefSeahealerSet",
	  "event": {
		"start": "2014-06-20",
		"end": "2014-08-01",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Seahealer Tail",
	  "notes": "This garment of shimmering scales transforms its wearer into a real Seahealer! Increases Constitution by 15. Limited Edition 2014 Summer Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_summerHealer",
	  "klass": "special",
	  "index": "summerHealer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fallRogue": {
	  "set": "vampireSmiterSet",
	  "event": {
		"start": "2014-09-21",
		"end": "2014-11-01",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Bloodred Robes",
	  "notes": "Vivid. Velvet. Vampiric. Increases Perception by 15. Limited Edition 2014 Autumn Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_fallRogue",
	  "klass": "special",
	  "index": "fallRogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_fallWarrior": {
	  "set": "monsterOfScienceSet",
	  "event": {
		"start": "2014-09-21",
		"end": "2014-11-01",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Lab-coat of Science",
	  "notes": "Protects you from mysterious potion spills. Increases Constitution by 9. Limited Edition 2014 Autumn Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_fallWarrior",
	  "klass": "special",
	  "index": "fallWarrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fallMage": {
	  "set": "witchyWizardSet",
	  "event": {
		"start": "2014-09-21",
		"end": "2014-11-01",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Witchy Wizard Robes",
	  "notes": "This robe has plenty of pockets to hold extra helpings of eye of newt and tongue of frog. Increases Intelligence by 9. Limited Edition 2014 Autumn Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_fallMage",
	  "klass": "special",
	  "index": "fallMage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_fallHealer": {
	  "set": "mummyMedicSet",
	  "event": {
		"start": "2014-09-21",
		"end": "2014-11-01",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Gauzy Gear",
	  "notes": "Charge into battle pre-bandaged! Increases Constitution by 15. Limited Edition 2014 Autumn Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_fallHealer",
	  "klass": "special",
	  "index": "fallHealer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_winter2015Rogue": {
	  "set": "icicleDrakeSet",
	  "event": {
		"start": "2014-12-21",
		"end": "2015-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Icicle Drake Armor",
	  "notes": "This armor is freezing cold, but it will definitely be worth it when you uncover the untold riches at the center of the Icicle Drake hives. Not that you are looking for any such untold riches, because you are truly, definitely, absolutely a genuine Icicle Drake, okay?! Stop asking questions! Increases Perception by 15. Limited Edition 2014-2015 Winter Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_winter2015Rogue",
	  "klass": "special",
	  "index": "winter2015Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_winter2015Warrior": {
	  "set": "gingerbreadSet",
	  "event": {
		"start": "2014-12-21",
		"end": "2015-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Gingerbread Armor",
	  "notes": "Cozy and warm, straight from the oven! Increases Constitution by 9. Limited Edition 2014-2015 Winter Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_winter2015Warrior",
	  "klass": "special",
	  "index": "winter2015Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_winter2015Mage": {
	  "set": "northMageSet",
	  "event": {
		"start": "2014-12-21",
		"end": "2015-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Boreal Robe",
	  "notes": "You can see the glimmering lights of the north in this robe. Increases Intelligence by 9. Limited Edition 2014-2015 Winter Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_winter2015Mage",
	  "klass": "special",
	  "index": "winter2015Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_winter2015Healer": {
	  "set": "soothingSkaterSet",
	  "event": {
		"start": "2014-12-21",
		"end": "2015-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Skating Outfit",
	  "notes": "Ice-skating is very relaxing, but you shouldn't try it without this protective gear in case you get attacked by the icicle drakes. Increases Constitution by 15. Limited Edition 2014-2015 Winter Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_winter2015Healer",
	  "klass": "special",
	  "index": "winter2015Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_birthday2015": {
	  "text": "Silly Party Robes",
	  "notes": "Happy Birthday, Habitica! Wear these Silly Party Robes to celebrate this wonderful day. Confers no benefit.",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_birthday2015",
	  "set": "special-birthday2015",
	  "klass": "special",
	  "index": "birthday2015",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2015Rogue": {
	  "set": "sneakySqueakerSet",
	  "event": {
		"start": "2015-03-20",
		"end": "2015-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Squeaker Robes",
	  "notes": "Furry, soft, and definitely not flammable. Increases Perception by 15. Limited Edition 2015 Spring Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_spring2015Rogue",
	  "klass": "special",
	  "index": "spring2015Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_spring2015Warrior": {
	  "set": "bewareDogSet",
	  "event": {
		"start": "2015-03-20",
		"end": "2015-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Beware Armor",
	  "notes": "Only the fiercest doggy is allowed to be this fluffy. Increases Constitution by 9. Limited Edition 2015 Spring Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_spring2015Warrior",
	  "klass": "special",
	  "index": "spring2015Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_spring2015Mage": {
	  "set": "magicianBunnySet",
	  "event": {
		"start": "2015-03-20",
		"end": "2015-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Magician's Bunny Suit",
	  "notes": "Your coattails match your cottontail! Increases Intelligence by 9. Limited Edition 2015 Spring Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_spring2015Mage",
	  "klass": "special",
	  "index": "spring2015Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2015Healer": {
	  "set": "comfortingKittySet",
	  "event": {
		"start": "2015-03-20",
		"end": "2015-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Comforting Catsuit",
	  "notes": "This soft catsuit is comfortable, and as comforting as mint tea. Increases Constitution by 15. Limited Edition 2015 Spring Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_spring2015Healer",
	  "klass": "special",
	  "index": "spring2015Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2015Rogue": {
	  "set": "reefRenegadeSet",
	  "event": {
		"start": "2015-06-20",
		"end": "2015-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Ruby Tail",
	  "notes": "This garment of shimmering scales transforms its wearer into a real Reef Renegade! Increases Perception by 15. Limited Edition 2015 Summer Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_summer2015Rogue",
	  "klass": "special",
	  "index": "summer2015Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_summer2015Warrior": {
	  "set": "sunfishWarriorSet",
	  "event": {
		"start": "2015-06-20",
		"end": "2015-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Golden Tail",
	  "notes": "This garment of shimmering scales transforms its wearer into a real Sunfish Warrior! Increases Constitution by 9. Limited Edition 2015 Summer Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_summer2015Warrior",
	  "klass": "special",
	  "index": "summer2015Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2015Mage": {
	  "set": "shipSoothsayerSet",
	  "event": {
		"start": "2015-06-20",
		"end": "2015-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Soothsayer Robes",
	  "notes": "Hidden power resides in the puffs of these sleeves. Increases Intelligence by 9. Limited Edition 2015 Summer Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_summer2015Mage",
	  "klass": "special",
	  "index": "summer2015Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_summer2015Healer": {
	  "set": "strappingSailorSet",
	  "event": {
		"start": "2015-06-20",
		"end": "2015-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Sailor's Armor",
	  "notes": "This armor lets everyone know that you are an honest merchant sailor who would never dream of behaving like a scalawag. Increases Constitution by 15. Limited Edition 2015 Summer Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_summer2015Healer",
	  "klass": "special",
	  "index": "summer2015Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2015Rogue": {
	  "set": "battleRogueSet",
	  "event": {
		"start": "2015-09-21",
		"end": "2015-11-01",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Bat-tle Armor",
	  "notes": "Fly into bat-tle! Increases Perception by 15. Limited Edition 2015 Autumn Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_fall2015Rogue",
	  "klass": "special",
	  "index": "fall2015Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_fall2015Warrior": {
	  "set": "scarecrowWarriorSet",
	  "event": {
		"start": "2015-09-21",
		"end": "2015-11-01",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Scarecrow Armor",
	  "notes": "Despite being stuffed with straw, this armor is extremely hefty! Increases Constitution by 9. Limited Edition 2015 Autumn Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_fall2015Warrior",
	  "klass": "special",
	  "index": "fall2015Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2015Mage": {
	  "set": "stitchWitchSet",
	  "event": {
		"start": "2015-09-21",
		"end": "2015-11-01",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Stitched Robes",
	  "notes": "Every stitch in this armor shimmers with enchantment. Increases Intelligence by 9. Limited Edition 2015 Autumn Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_fall2015Mage",
	  "klass": "special",
	  "index": "fall2015Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_fall2015Healer": {
	  "set": "potionerSet",
	  "event": {
		"start": "2015-09-21",
		"end": "2015-11-01",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Potioner Robes",
	  "notes": "What? Of course that was a potion of constitution. No, you are definitely not turning into a frog! Don't be ribbiticulous. Increases Constitution by 15. Limited Edition 2015 Autumn Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_fall2015Healer",
	  "klass": "special",
	  "index": "fall2015Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_gaymerx": {
	  "event": {
		"start": "2016-09-29",
		"end": "2016-10-03"
	  },
	  "text": "Rainbow Warrior Armor",
	  "notes": "In celebration of the GaymerX Conference, this special armor is decorated with a radiant, colorful rainbow pattern! GaymerX is a game convention celebrating LGTBQ and gaming and is open to everyone.",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_gaymerx",
	  "set": "special-gaymerx",
	  "klass": "special",
	  "index": "gaymerx",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_winter2016Rogue": {
	  "set": "cocoaSet",
	  "event": {
		"start": "2015-12-18",
		"end": "2016-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Cocoa Armor",
	  "notes": "This leather armor keeps you nice and toasty. Is it actually made from cocoa? You'll never tell. Increases Perception by 15. Limited Edition 2015-2016 Winter Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_winter2016Rogue",
	  "klass": "special",
	  "index": "winter2016Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_winter2016Warrior": {
	  "set": "snowDaySet",
	  "event": {
		"start": "2015-12-18",
		"end": "2016-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Snowman Suit",
	  "notes": "Brr! This padded armor is truly powerful... until it melts. Increases Constitution by 9. Limited Edition 2015-2016 Winter Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_winter2016Warrior",
	  "klass": "special",
	  "index": "winter2016Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_winter2016Mage": {
	  "set": "snowboardingSet",
	  "event": {
		"start": "2015-12-18",
		"end": "2016-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Snowboarder Parka",
	  "notes": "The wisest wizard keeps well-bundled in the winter wind. Increases Intelligence by 9. Limited Edition 2015-2016 Winter Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_winter2016Mage",
	  "klass": "special",
	  "index": "winter2016Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_winter2016Healer": {
	  "set": "festiveFairySet",
	  "event": {
		"start": "2015-12-18",
		"end": "2016-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Festive Fairy Cloak",
	  "notes": "Festive Fairies wrap their body wings around themselves for protection as they use their head wings to catch headwinds and fly around Habitica at speeds of up to 100 mph, delivering gifts and spraying everyone with confetti. How droll. Increases Constitution by 15. Limited Edition 2015-2016 Winter Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_winter2016Healer",
	  "klass": "special",
	  "index": "winter2016Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_birthday2016": {
	  "text": "Ridiculous Party Robes",
	  "notes": "Happy Birthday, Habitica! Wear these Ridiculous Party Robes to celebrate this wonderful day. Confers no benefit.",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_birthday2016",
	  "set": "special-birthday2016",
	  "klass": "special",
	  "index": "birthday2016",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2016Rogue": {
	  "set": "cleverDogSet",
	  "event": {
		"start": "2016-03-18",
		"end": "2016-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Canine Camo Suit",
	  "notes": "A clever pup knows to choose a brighter guise for concealment when everything is green and vibrant. Increases Perception by 15. Limited Edition 2016 Spring Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_spring2016Rogue",
	  "klass": "special",
	  "index": "spring2016Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_spring2016Warrior": {
	  "set": "braveMouseSet",
	  "event": {
		"start": "2016-03-18",
		"end": "2016-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Mighty Mail",
	  "notes": "Though you be but little, you are fierce! Increases Constitution by 9. Limited Edition 2016 Spring Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_spring2016Warrior",
	  "klass": "special",
	  "index": "spring2016Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_spring2016Mage": {
	  "set": "grandMalkinSet",
	  "event": {
		"start": "2016-03-18",
		"end": "2016-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Grand Malkin Robes",
	  "notes": "Brightly colored, so you won't be mistaken for a necromouser. Increases Intelligence by 9. Limited Edition 2016 Spring Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_spring2016Mage",
	  "klass": "special",
	  "index": "spring2016Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2016Healer": {
	  "set": "springingBunnySet",
	  "event": {
		"start": "2016-03-18",
		"end": "2016-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Fluffy Bunny Breeches",
	  "notes": "Hippity hop! Bound from hill to hill, healing those in need. Increases Constitution by 15. Limited Edition 2016 Spring Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_spring2016Healer",
	  "klass": "special",
	  "index": "spring2016Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2016Rogue": {
	  "set": "summer2016EelSet",
	  "event": {
		"start": "2016-06-21",
		"end": "2016-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Eel Tail",
	  "notes": "This electrifying garment transforms its wearer into a real Eel Rogue! Increases Perception by 15. Limited Edition 2016 Summer Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_summer2016Rogue",
	  "klass": "special",
	  "index": "summer2016Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_summer2016Warrior": {
	  "set": "summer2016SharkWarriorSet",
	  "event": {
		"start": "2016-06-21",
		"end": "2016-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Shark Tail",
	  "notes": "This rough garment transforms its wearer into a real Shark Warrior! Increases Constitution by 9. Limited Edition 2016 Summer Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_summer2016Warrior",
	  "klass": "special",
	  "index": "summer2016Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2016Mage": {
	  "set": "summer2016DolphinMageSet",
	  "event": {
		"start": "2016-06-21",
		"end": "2016-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Dolphin Tail",
	  "notes": "This slippery garment transforms its wearer into a real Dolphin Mage! Increases Intelligence by 9. Limited Edition 2016 Summer Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_summer2016Mage",
	  "klass": "special",
	  "index": "summer2016Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_summer2016Healer": {
	  "set": "summer2016SeahorseHealerSet",
	  "event": {
		"start": "2016-06-21",
		"end": "2016-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Seahorse Tail",
	  "notes": "This spiky garment transforms its wearer into a real Seahorse Healer! Increases Constitution by 15. Limited Edition 2016 Summer Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_summer2016Healer",
	  "klass": "special",
	  "index": "summer2016Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2016Rogue": {
	  "set": "fall2016BlackWidowSet",
	  "event": {
		"start": "2016-09-20",
		"end": "2016-11-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Black Widow Armor",
	  "notes": "The eyes on this armor are constantly blinking. Increases Perception by 15. Limited Edition 2016 Autumn Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_fall2016Rogue",
	  "klass": "special",
	  "index": "fall2016Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_fall2016Warrior": {
	  "set": "fall2016SwampThingSet",
	  "event": {
		"start": "2016-09-20",
		"end": "2016-11-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Slime-Streaked Armor",
	  "notes": "Mysteriously moist and mossy! Increases Constitution by 9. Limited Edition 2016 Autumn Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_fall2016Warrior",
	  "klass": "special",
	  "index": "fall2016Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2016Mage": {
	  "set": "fall2016WickedSorcererSet",
	  "event": {
		"start": "2016-09-20",
		"end": "2016-11-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Cloak of Wickedness",
	  "notes": "When your cloak flaps, you hear the sound of cackling laughter. Increases Intelligence by 9. Limited Edition 2016 Autumn Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_fall2016Mage",
	  "klass": "special",
	  "index": "fall2016Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_fall2016Healer": {
	  "set": "fall2016GorgonHealerSet",
	  "event": {
		"start": "2016-09-20",
		"end": "2016-11-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Gorgon Robes",
	  "notes": "These robes are actually made of stone. How are they so comfortable? Increases Constitution by 15. Limited Edition 2016 Autumn Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_fall2016Healer",
	  "klass": "special",
	  "index": "fall2016Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_winter2017Rogue": {
	  "set": "winter2017FrostyRogueSet",
	  "event": {
		"start": "2016-12-16",
		"end": "2017-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Frosty Armor",
	  "notes": "This stealthy suit reflects light to dazzle unsuspecting tasks as you take your rewards from them! Increases Perception by 15. Limited Edition 2016-2017 Winter Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_winter2017Rogue",
	  "klass": "special",
	  "index": "winter2017Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_winter2017Warrior": {
	  "set": "winter2017IceHockeySet",
	  "event": {
		"start": "2016-12-16",
		"end": "2017-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Ice Hockey Armor",
	  "notes": "Show your team spirit and strength in this warm, padded armor. Increases Constitution by 9. Limited Edition 2016-2017 Winter Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_winter2017Warrior",
	  "klass": "special",
	  "index": "winter2017Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_winter2017Mage": {
	  "set": "winter2017WinterWolfSet",
	  "event": {
		"start": "2016-12-16",
		"end": "2017-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Wolfish Armor",
	  "notes": "Made of winter's warmest wool and woven with spells by the mystical Winter Wolf, these robes stave off the chill and keep your mind alert! Increases Intelligence by 9. Limited Edition 2016-2017 Winter Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_winter2017Mage",
	  "klass": "special",
	  "index": "winter2017Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_winter2017Healer": {
	  "set": "winter2017SugarPlumSet",
	  "event": {
		"start": "2016-12-16",
		"end": "2017-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Shimmer Petal Armor",
	  "notes": "Though soft, this armor of petals has fantastic protective power. Increases Constitution by 15. Limited Edition 2016-2017 Winter Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_winter2017Healer",
	  "klass": "special",
	  "index": "winter2017Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_birthday2017": {
	  "text": "Whimsical Party Robes",
	  "notes": "Happy Birthday, Habitica! Wear these Whimsical Party Robes to celebrate this wonderful day. Confers no benefit.",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_birthday2017",
	  "set": "special-birthday2017",
	  "klass": "special",
	  "index": "birthday2017",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2017Rogue": {
	  "set": "spring2017SneakyBunnySet",
	  "event": {
		"start": "2017-03-21",
		"end": "2017-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Sneaky Bunny Suit",
	  "notes": "Soft but strong, this suit helps you move through gardens with extra stealth. Increases Perception by 15. Limited Edition 2017 Spring Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_spring2017Rogue",
	  "klass": "special",
	  "index": "spring2017Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_spring2017Warrior": {
	  "set": "spring2017FelineWarriorSet",
	  "event": {
		"start": "2017-03-21",
		"end": "2017-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Pawsome Armor",
	  "notes": "This fancy armor is as shiny as your finely groomed coat, but with added resistance to attack. Increases Constitution by 9. Limited Edition 2017 Spring Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_spring2017Warrior",
	  "klass": "special",
	  "index": "spring2017Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_spring2017Mage": {
	  "set": "spring2017CanineConjurorSet",
	  "event": {
		"start": "2017-03-21",
		"end": "2017-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Canine Conjuror Robes",
	  "notes": "Magical by design, fluffy by choice. Increases Intelligence by 9. Limited Edition 2017 Spring Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_spring2017Mage",
	  "klass": "special",
	  "index": "spring2017Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2017Healer": {
	  "set": "spring2017FloralMouseSet",
	  "event": {
		"start": "2017-03-21",
		"end": "2017-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Robes of Repose",
	  "notes": "The softness of these robes comforts you as well as any who need your healing help! Increases Constitution by 15. Limited Edition 2017 Spring Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_spring2017Healer",
	  "klass": "special",
	  "index": "spring2017Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2017Rogue": {
	  "set": "summer2017SeaDragonSet",
	  "event": {
		"start": "2017-06-20",
		"end": "2017-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Sea Dragon Tail",
	  "notes": "This colorful garment transforms its wearer into a real Sea Dragon! Increases Perception by 15. Limited Edition 2017 Summer Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_summer2017Rogue",
	  "klass": "special",
	  "index": "summer2017Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_summer2017Warrior": {
	  "set": "summer2017SandcastleWarriorSet",
	  "event": {
		"start": "2017-06-20",
		"end": "2017-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Sandy Armor",
	  "notes": "Don't be fooled by the crumbly exterior: this armor is harder than steel. Increases Constitution by 9. Limited Edition 2017 Summer Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_summer2017Warrior",
	  "klass": "special",
	  "index": "summer2017Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2017Mage": {
	  "set": "summer2017WhirlpoolMageSet",
	  "event": {
		"start": "2017-06-20",
		"end": "2017-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Whirlpool Robes",
	  "notes": "Careful not to get splashed by these robes woven of enchanted water! Increases Intelligence by 9. Limited Edition 2017 Summer Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_summer2017Mage",
	  "klass": "special",
	  "index": "summer2017Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_summer2017Healer": {
	  "set": "summer2017SeashellSeahealerSet",
	  "event": {
		"start": "2017-06-20",
		"end": "2017-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Silversea Tail",
	  "notes": "This garment of silvery scales transforms its wearer into a real Seahealer! Increases Constitution by 15. Limited Edition 2017 Summer Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_summer2017Healer",
	  "klass": "special",
	  "index": "summer2017Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2017Rogue": {
	  "set": "fall2017TrickOrTreatSet",
	  "event": {
		"start": "2017-09-21",
		"end": "2017-11-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Pumpkin Patch Robes",
	  "notes": "Need to hide out? Crouch among the Jack o' Lanterns and these robes will conceal you! Increases Perception by 15. Limited Edition 2017 Autumn Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_fall2017Rogue",
	  "klass": "special",
	  "index": "fall2017Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_fall2017Warrior": {
	  "set": "fall2017HabitoweenSet",
	  "event": {
		"start": "2017-09-21",
		"end": "2017-11-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Strong and Sweet Armor",
	  "notes": "This armor will protect you like a delicious candy shell. Increases Constitution by 9. Limited Edition 2017 Autumn Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_fall2017Warrior",
	  "klass": "special",
	  "index": "fall2017Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2017Mage": {
	  "set": "fall2017MasqueradeSet",
	  "event": {
		"start": "2017-09-21",
		"end": "2017-11-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Masquerade Robes",
	  "notes": "What masquerade ensemble would be complete without dramatic and sweeping robes? Increases Intelligence by 9. Limited Edition 2017 Autumn Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_fall2017Mage",
	  "klass": "special",
	  "index": "fall2017Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_fall2017Healer": {
	  "set": "fall2017HauntedHouseSet",
	  "event": {
		"start": "2017-09-21",
		"end": "2017-11-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Haunted House Armor",
	  "notes": "Your heart is an open door. And your shoulders are roofing tiles! Increases Constitution by 15. Limited Edition 2017 Autumn Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_fall2017Healer",
	  "klass": "special",
	  "index": "fall2017Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_winter2018Rogue": {
	  "set": "winter2018ReindeerSet",
	  "event": {
		"start": "2017-12-19",
		"end": "2018-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Reindeer Costume",
	  "notes": "You look so cute and fuzzy, who could suspect you are after holiday loot? Increases Perception by 15. Limited Edition 2017-2018 Winter Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_winter2018Rogue",
	  "klass": "special",
	  "index": "winter2018Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_winter2018Warrior": {
	  "set": "winter2018GiftWrappedSet",
	  "event": {
		"start": "2017-12-19",
		"end": "2018-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Wrapping Paper Armor",
	  "notes": "Don't let the papery feel of this armor fool you. It's nearly impossible to rip! Increases Constitution by 9. Limited Edition 2017-2018 Winter Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_winter2018Warrior",
	  "klass": "special",
	  "index": "winter2018Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_winter2018Mage": {
	  "set": "winter2018ConfettiSet",
	  "event": {
		"start": "2017-12-19",
		"end": "2018-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Sparkly Tuxedo",
	  "notes": "The ultimate in magical formalwear. Increases Intelligence by 9. Limited Edition 2017-2018 Winter Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_winter2018Mage",
	  "klass": "special",
	  "index": "winter2018Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_winter2018Healer": {
	  "set": "winter2018MistletoeSet",
	  "event": {
		"start": "2017-12-19",
		"end": "2018-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Mistletoe Robes",
	  "notes": "These robes are woven with spells for extra holiday joy. Increases Constitution by 15. Limited Edition 2017-2018 Winter Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_winter2018Healer",
	  "klass": "special",
	  "index": "winter2018Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_birthday2018": {
	  "text": "Fanciful Party Robes",
	  "notes": "Happy Birthday, Habitica! Wear these Fanciful Party Robes to celebrate this wonderful day. Confers no benefit.",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_birthday2018",
	  "set": "special-birthday2018",
	  "klass": "special",
	  "index": "birthday2018",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2018Rogue": {
	  "set": "spring2018DucklingRogueSet",
	  "event": {
		"start": "2018-03-20",
		"end": "2018-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Feather Suit",
	  "notes": "This fluffy yellow costume will trick your enemies into thinking you're just a harmless ducky! Increases Perception by 15. Limited Edition 2018 Spring Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_spring2018Rogue",
	  "klass": "special",
	  "index": "spring2018Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_spring2018Warrior": {
	  "set": "spring2018SunriseWarriorSet",
	  "event": {
		"start": "2018-03-20",
		"end": "2018-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Armor of Dawn",
	  "notes": "This colorful plate is forged with the sunrise's fire. Increases Constitution by 9. Limited Edition 2018 Spring Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_spring2018Warrior",
	  "klass": "special",
	  "index": "spring2018Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_spring2018Mage": {
	  "set": "spring2018TulipMageSet",
	  "event": {
		"start": "2018-03-20",
		"end": "2018-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Tulip Robe",
	  "notes": "Your spell casting can only improve while clad in these soft, silky petals. Increases Intelligence by 9. Limited Edition 2018 Spring Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_spring2018Mage",
	  "klass": "special",
	  "index": "spring2018Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2018Healer": {
	  "set": "spring2018GarnetHealerSet",
	  "event": {
		"start": "2018-03-20",
		"end": "2018-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Garnet Armor",
	  "notes": "Let this bright armor infuse your heart with power for healing. Increases Constitution by 15. Limited Edition 2018 Spring Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_spring2018Healer",
	  "klass": "special",
	  "index": "spring2018Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2018Rogue": {
	  "set": "summer2018FisherRogueSet",
	  "event": {
		"start": "2018-06-19",
		"end": "2018-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Pocket Fishing Vest",
	  "notes": "Bobbers? Boxes of hooks? Spare line? Lockpicks? Smoke bombs? Whatever you need on hand for your summer fishing getaway, there's a pocket for it! Increases Perception by 15. Limited Edition 2018 Summer Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_summer2018Rogue",
	  "klass": "special",
	  "index": "summer2018Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_summer2018Warrior": {
	  "set": "summer2018BettaFishWarriorSet",
	  "event": {
		"start": "2018-06-19",
		"end": "2018-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Betta Tail Armor",
	  "notes": "Dazzle onlookers with whorls of magnificent color as you spin and dart through the water. How could any opponent dare strike at this beauty? Increases Constitution by 9. Limited Edition 2018 Summer Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_summer2018Warrior",
	  "klass": "special",
	  "index": "summer2018Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2018Mage": {
	  "set": "summer2018LionfishMageSet",
	  "event": {
		"start": "2018-06-19",
		"end": "2018-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Lionfish Scale Hauberk",
	  "notes": "Venom magic has a reputation for subtlety. Not so this colorful armor, whose message is clear to beast and task alike: watch out! Increases Intelligence by 9. Limited Edition 2018 Summer Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_summer2018Mage",
	  "klass": "special",
	  "index": "summer2018Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_summer2018Healer": {
	  "set": "summer2018MerfolkMonarchSet",
	  "event": {
		"start": "2018-06-19",
		"end": "2018-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Merfolk Monarch Robes",
	  "notes": "These cerulean vestments reveal that you have land-walking feet... well. Not even a monarch can be expected to be perfect. Increases Constitution by 15. Limited Edition 2018 Summer Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_summer2018Healer",
	  "klass": "special",
	  "index": "summer2018Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2018Rogue": {
	  "set": "fall2018AlterEgoSet",
	  "event": {
		"start": "2018-09-20",
		"end": "2018-11-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Alter Ego Frock Coat",
	  "notes": "Style for the day. Comfort and protection for the night. Increases Perception by 15. Limited Edition 2018 Autumn Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_fall2018Rogue",
	  "klass": "special",
	  "index": "fall2018Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_fall2018Warrior": {
	  "set": "fall2018MinotaurWarriorSet",
	  "event": {
		"start": "2018-09-20",
		"end": "2018-11-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Minotaur Platemail",
	  "notes": "Complete with hooves to drum a soothing cadence as you walk your meditative labyrinth. Increases Constitution by 9. Limited Edition 2018 Autumn Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_fall2018Warrior",
	  "klass": "special",
	  "index": "fall2018Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2018Mage": {
	  "set": "fall2018CandymancerMageSet",
	  "event": {
		"start": "2018-09-20",
		"end": "2018-11-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Candymancer's Robes",
	  "notes": "The fabric of these robes has magic candy woven right in! However, we recommend you not attempt to eat them. Increases Intelligence by 9. Limited Edition 2018 Autumn Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_fall2018Mage",
	  "klass": "special",
	  "index": "fall2018Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_fall2018Healer": {
	  "set": "fall2018CarnivorousPlantSet",
	  "event": {
		"start": "2018-09-20",
		"end": "2018-11-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Robes of Carnivory",
	  "notes": "It's made from plants, but that doesn't mean it's vegetarian. Bad habits are afraid to come within miles of these robes. Increases Constitution by 15. Limited Edition 2018 Autumn Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_fall2018Healer",
	  "klass": "special",
	  "index": "fall2018Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_turkeyArmorGilded": {
	  "text": "Gilded Turkey Armor",
	  "notes": "Strut your stuff in this seasonally shiny armor! Confers no benefit.",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_turkeyArmorGilded",
	  "set": "special-turkeyArmorGilded",
	  "klass": "special",
	  "index": "turkeyArmorGilded",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_winter2019Rogue": {
	  "set": "winter2019PoinsettiaSet",
	  "event": {
		"start": "2018-12-19",
		"end": "2019-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Poinsettia Armor",
	  "notes": "With holiday greenery all about, no one will notice an extra shrubbery! You can move through seasonal gatherings with ease and stealth. Increases Perception by 15. Limited Edition 2018-2019 Winter Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_winter2019Rogue",
	  "klass": "special",
	  "index": "winter2019Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_winter2019Warrior": {
	  "set": "winter2019BlizzardSet",
	  "event": {
		"start": "2018-12-19",
		"end": "2019-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Glacial Armor",
	  "notes": "In the heat of battle, this armor will keep you ice cool and ready for action. Increases Constitution by 9. Limited Edition 2018-2019 Winter Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_winter2019Warrior",
	  "klass": "special",
	  "index": "winter2019Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_winter2019Mage": {
	  "set": "winter2019PyrotechnicSet",
	  "event": {
		"start": "2018-12-19",
		"end": "2019-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Robes of Burning Inspiration",
	  "notes": "This fireproof garb will help protect you if any of your flashes of brilliance should happen to backfire! Increases Intelligence by 9. Limited Edition 2018-2019 Winter Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_winter2019Mage",
	  "klass": "special",
	  "index": "winter2019Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_winter2019Healer": {
	  "set": "winter2019WinterStarSet",
	  "event": {
		"start": "2018-12-19",
		"end": "2019-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Midnight Robe",
	  "notes": "Without darkness, there wouldn't be any light. These dark robes help bring peace and rest to promote healing. Increases Constitution by 15. Limited Edition 2018-2019 Winter Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_winter2019Healer",
	  "klass": "special",
	  "index": "winter2019Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_birthday2019": {
	  "text": "Outlandish Party Robes",
	  "notes": "Happy Birthday, Habitica! Wear these Outlandish Party Robes to celebrate this wonderful day. Confers no benefit.",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_birthday2019",
	  "set": "special-birthday2019",
	  "klass": "special",
	  "index": "birthday2019",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2019Rogue": {
	  "set": "spring2019CloudRogueSet",
	  "event": {
		"start": "2019-03-19",
		"end": "2019-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Cloud Armor",
	  "notes": "Some very tuff fluff. Increases Perception by 15. Limited Edition 2019 Spring Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_spring2019Rogue",
	  "klass": "special",
	  "index": "spring2019Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_spring2019Warrior": {
	  "set": "spring2019OrchidWarriorSet",
	  "event": {
		"start": "2019-03-19",
		"end": "2019-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Orchid Armor",
	  "notes": "Steely armor of reinforced petals protects your heart and also looks pretty snazzy. Increases Constitution by 9. Limited Edition 2019 Spring Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_spring2019Warrior",
	  "klass": "special",
	  "index": "spring2019Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_spring2019Mage": {
	  "set": "spring2019AmberMageSet",
	  "event": {
		"start": "2019-03-19",
		"end": "2019-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Amber Robes",
	  "notes": "These robes gather power from magic resin embedded in the fibers of ancient bark that compose the cloth. Increases Intelligence by 9. Limited Edition 2019 Spring Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_spring2019Mage",
	  "klass": "special",
	  "index": "spring2019Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2019Healer": {
	  "set": "spring2019RobinHealerSet",
	  "event": {
		"start": "2019-03-19",
		"end": "2019-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Robin Costume",
	  "notes": "Your bright feathers will let everyone know that the cold and dark of winter has passed. Increases Constitution by 15. Limited Edition 2019 Spring Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_spring2019Healer",
	  "klass": "special",
	  "index": "spring2019Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2019Rogue": {
	  "set": "summer2019HammerheadRogueSet",
	  "event": {
		"start": "2019-06-18",
		"end": "2019-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Hammerhead Tail",
	  "notes": "This sinuous tail is perfect for making tight turns during daring aquatic escapes. Increases Perception by 15. Limited Edition 2019 Summer Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_summer2019Rogue",
	  "klass": "special",
	  "index": "summer2019Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_summer2019Warrior": {
	  "set": "summer2019SeaTurtleWarriorSet",
	  "event": {
		"start": "2019-06-18",
		"end": "2019-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Carapace Armor",
	  "notes": "Warriors are known for their sturdy defenses. Turtles are known for their thick shells. It's a perfect match! Just... try not to fall over backward, ever. Increases Constitution by 9. Limited Edition 2019 Summer Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_summer2019Warrior",
	  "klass": "special",
	  "index": "summer2019Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2019Mage": {
	  "set": "summer2019WaterLilyMageSet",
	  "event": {
		"start": "2019-06-18",
		"end": "2019-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Floral Frock",
	  "notes": "The lilies will know you as one of their own, and will not fear your approach. Increases Intelligence by 9. Limited Edition 2019 Summer Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_summer2019Mage",
	  "klass": "special",
	  "index": "summer2019Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_summer2019Healer": {
	  "set": "summer2019ConchHealerSet",
	  "event": {
		"start": "2019-06-18",
		"end": "2019-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Tropical Tides Tail",
	  "notes": "Glide sleekly through warm coastal waters with this elegant tail. Increases Constitution by 15. Limited Edition 2019 Summer Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_summer2019Healer",
	  "klass": "special",
	  "index": "summer2019Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2019Rogue": {
	  "set": "fall2019OperaticSpecterSet",
	  "event": {
		"start": "2019-09-24",
		"end": "2019-11-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Caped Opera Coat",
	  "notes": "This outfit comes complete with white gloves, and is ideal for brooding in your private box above the stage or making startling entrances down grand staircases. Increases Perception by 15. Limited Edition 2019 Autumn Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_fall2019Rogue",
	  "klass": "special",
	  "index": "fall2019Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_fall2019Warrior": {
	  "set": "fall2019RavenSet",
	  "event": {
		"start": "2019-09-24",
		"end": "2019-11-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Wings of Night",
	  "notes": "These feathered robes grant the power of flight, allowing you to soar over any battle. Increases Constitution by 9. Limited Edition 2019 Autumn Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_fall2019Warrior",
	  "klass": "special",
	  "index": "fall2019Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2019Mage": {
	  "set": "fall2019CyclopsSet",
	  "event": {
		"start": "2019-09-24",
		"end": "2019-11-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Smock of Polyphemus",
	  "notes": "Its namesake met a terrible fate. But you will not be so easily tricked! Garb yourself in this mantle of legend and nobody will surpass you. Increases Intelligence by 9. Limited Edition 2019 Autumn Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_fall2019Mage",
	  "klass": "special",
	  "index": "fall2019Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_fall2019Healer": {
	  "set": "fall2019LichSet",
	  "event": {
		"start": "2019-09-24",
		"end": "2019-11-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Robes of Darkness",
	  "notes": "It's said these robes are made of pure night. Use the dark power wisely! Increases Constitution by 15. Limited Edition 2019 Autumn Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_fall2019Healer",
	  "klass": "special",
	  "index": "fall2019Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_ks2019": {
	  "text": "Mythic Gryphon Armor",
	  "notes": "Glowing from within like a gryphon's noble heart, this resplendent armor encourages you to take pride in your accomplishments. Increases Constitution by 20.",
	  "value": 0,
	  "con": 20,
	  "type": "armor",
	  "key": "armor_special_ks2019",
	  "set": "special-ks2019",
	  "klass": "special",
	  "index": "ks2019",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_winter2020Rogue": {
	  "set": "winter2020LanternSet",
	  "event": {
		"start": "2019-12-19",
		"end": "2020-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Poofy Parka",
	  "notes": "While no doubt you can brave storms with the inner warmth of your drive and devotion, it doesn't hurt to dress for the weather. Increases Perception by 15. Limited Edition 2019-2020 Winter Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_winter2020Rogue",
	  "klass": "special",
	  "index": "winter2020Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_winter2020Warrior": {
	  "set": "winter2020EvergreenSet",
	  "event": {
		"start": "2019-12-19",
		"end": "2020-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Bark Armor",
	  "notes": "O mighty pine, o towering fir, lend your strength. Or rather, your Constitution! Increases Constitution by 9. Limited Edition 2019-2020 Winter Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_winter2020Warrior",
	  "klass": "special",
	  "index": "winter2020Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_winter2020Mage": {
	  "set": "winter2020CarolOfTheMageSet",
	  "event": {
		"start": "2019-12-19",
		"end": "2020-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Curvy Coat",
	  "notes": "Ring in the new year warm, comfy, and buffered against excessive vibration. Increases Intelligence by 9. Limited Edition 2019-2020 Winter Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_winter2020Mage",
	  "klass": "special",
	  "index": "winter2020Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_winter2020Healer": {
	  "set": "winter2020WinterSpiceSet",
	  "event": {
		"start": "2019-12-19",
		"end": "2020-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Orange Peel Gown",
	  "notes": "An opulent gown for those with festive zest! Increases Constitution by 15. Limited Edition 2019-2020 Winter Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_winter2020Healer",
	  "klass": "special",
	  "index": "winter2020Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_birthday2020": {
	  "text": "Outrageous Party Robes",
	  "notes": "Happy Birthday, Habitica! Wear these Outrageous Party Robes to celebrate this wonderful day. Confers no benefit.",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_birthday2020",
	  "set": "special-birthday2020",
	  "klass": "special",
	  "index": "birthday2020",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2020Rogue": {
	  "set": "spring2020LapisLazuliRogueSet",
	  "event": {
		"start": "2020-03-17",
		"end": "2020-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Ultramarine Armor",
	  "notes": "The color of twilight, of a multitude of precious stones, of the deepest sea! Increases Perception by 15. Limited Edition 2020 Spring Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_spring2020Rogue",
	  "klass": "special",
	  "index": "spring2020Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_spring2020Warrior": {
	  "set": "spring2020BeetleWarriorSet",
	  "event": {
		"start": "2020-03-17",
		"end": "2020-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Exoskeleton Armor",
	  "notes": "This rigid carapace can keep you safe from even the most crushing attacks. Increases Constitution by 9. Limited Edition 2020 Spring Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_spring2020Warrior",
	  "klass": "special",
	  "index": "spring2020Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_spring2020Mage": {
	  "set": "spring2020PuddleMageSet",
	  "event": {
		"start": "2020-03-17",
		"end": "2020-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Whirlpuddle Gown",
	  "notes": "If you can't resist stomping through the leavings of rainstorms, this armor is for you! Turn a childish impulse into a display of mystic artistry. Increases Intelligence by 9. Limited Edition 2020 Spring Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_spring2020Mage",
	  "klass": "special",
	  "index": "spring2020Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2020Healer": {
	  "set": "spring2020IrisHealerSet",
	  "event": {
		"start": "2020-03-17",
		"end": "2020-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Protective Petals",
	  "notes": "Wrap yourself in soft iris leaves and petals to fool enemies into underestimating your healing power. Increases Constitution by 15. Limited Edition 2020 Spring Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_spring2020Healer",
	  "klass": "special",
	  "index": "spring2020Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2020Rogue": {
	  "set": "summer2020CrocodileRogueSet",
	  "event": {
		"start": "2020-06-18",
		"end": "2020-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Crocodile Disguise",
	  "notes": "A crocodile makes the perfect Rogue, waiting for the perfect moment to strike. Borrow their skills--and their explosive speed. Increases Perception by 15. Limited Edition 2020 Summer Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_summer2020Rogue",
	  "klass": "special",
	  "index": "summer2020Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_summer2020Warrior": {
	  "set": "summer2020RainbowTroutWarriorSet",
	  "event": {
		"start": "2020-06-18",
		"end": "2020-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Rainbow Trout Tail",
	  "notes": "You'll be the bright fish in a dull stream, with these dazzling scales! Increases Constitution by 9. Limited Edition 2020 Summer Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_summer2020Warrior",
	  "klass": "special",
	  "index": "summer2020Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2020Mage": {
	  "set": "summer2020OarfishMageSet",
	  "event": {
		"start": "2020-06-18",
		"end": "2020-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Oarfish Armor",
	  "notes": "Harness the power of the sea's depths with this oar-mazing armor. Increases Intelligence by 9. Limited Edition 2020 Summer Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_summer2020Mage",
	  "klass": "special",
	  "index": "summer2020Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_summer2020Healer": {
	  "set": "summer2020SeaGlassHealerSet",
	  "event": {
		"start": "2020-06-18",
		"end": "2020-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Regalia of Tumbling Waves",
	  "notes": "You are as patient as the ocean, as strong as the currents, as dependable as the tides. Increases Constitution by 15. Limited Edition 2020 Summer Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_summer2020Healer",
	  "klass": "special",
	  "index": "summer2020Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2020Rogue": {
	  "set": "fall2020TwoHeadedRogueSet",
	  "event": {
		"start": "2020-09-22T08:00-04:00",
		"end": "2020-10-31T20:00-04:00",
		"gear": true,
		"gemsPromo": {
		  "4gems": 5,
		  "21gems": 30,
		  "42gems": 60,
		  "84gems": 125
		}
	  },
	  "specialClass": "rogue",
	  "text": "Statuesque Armor",
	  "notes": "Take on the strength of stone with this armor, guaranteed to repel the fiercest attacks. Increases Perception by 15. Limited Edition 2020 Autumn Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_fall2020Rogue",
	  "klass": "special",
	  "index": "fall2020Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_fall2020Warrior": {
	  "set": "fall2020WraithWarriorSet",
	  "event": {
		"start": "2020-09-22T08:00-04:00",
		"end": "2020-10-31T20:00-04:00",
		"gear": true,
		"gemsPromo": {
		  "4gems": 5,
		  "21gems": 30,
		  "42gems": 60,
		  "84gems": 125
		}
	  },
	  "specialClass": "warrior",
	  "text": "Revenant's Robes",
	  "notes": "These robes once guarded a powerful Warrior from harm. They say the Warrior's spirit lingers in the cloth to guard a worthy successor. Increases Constitution by 9. Limited Edition 2020 Autumn Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_fall2020Warrior",
	  "klass": "special",
	  "index": "fall2020Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2020Mage": {
	  "set": "fall2020ThirdEyeMageSet",
	  "event": {
		"start": "2020-09-22T08:00-04:00",
		"end": "2020-10-31T20:00-04:00",
		"gear": true,
		"gemsPromo": {
		  "4gems": 5,
		  "21gems": 30,
		  "42gems": 60,
		  "84gems": 125
		}
	  },
	  "specialClass": "wizard",
	  "text": "Aloft Upon Enlightenment",
	  "notes": "These wide-winged robes give the impression of hovering or flight, symbolizing the far-seeing perspective granted by vast knowledge. Increases Intelligence by 9. Limited Edition 2020 Autumn Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_fall2020Mage",
	  "klass": "special",
	  "index": "fall2020Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_fall2020Healer": {
	  "set": "fall2020DeathsHeadMothHealerSet",
	  "event": {
		"start": "2020-09-22T08:00-04:00",
		"end": "2020-10-31T20:00-04:00",
		"gear": true,
		"gemsPromo": {
		  "4gems": 5,
		  "21gems": 30,
		  "42gems": 60,
		  "84gems": 125
		}
	  },
	  "specialClass": "healer",
	  "text": "Hawkmoth Wings",
	  "notes": "Your splendor unfurls by night, and those who witness you in flight wonder at what this omen could mean. Increases Constitution by 15. Limited Edition 2020 Autumn Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_fall2020Healer",
	  "klass": "special",
	  "index": "fall2020Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_winter2021Rogue": {
	  "set": "winter2021HollyIvyRogueSet",
	  "event": {
		"start": "2020-12-17T08:00-05:00",
		"end": "2021-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "winter",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Ivy-Green Garb",
	  "notes": "Melt into the shadows of the evergreen wood! Increases Perception by 15. Limited Edition 2020-2021 Winter Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_winter2021Rogue",
	  "klass": "special",
	  "index": "winter2021Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_winter2021Warrior": {
	  "set": "winter2021IceFishingWarriorSet",
	  "event": {
		"start": "2020-12-17T08:00-05:00",
		"end": "2021-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "winter",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Insulated Jacket",
	  "notes": "If you're going to go out in this weather, you'd better wrap up warm. Increases Constitution by 9. Limited Edition 2020-2021 Winter Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_winter2021Warrior",
	  "klass": "special",
	  "index": "winter2021Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_winter2021Mage": {
	  "set": "winter2021WinterMoonMageSet",
	  "event": {
		"start": "2020-12-17T08:00-05:00",
		"end": "2021-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "winter",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Flowing Moonlight Robes",
	  "notes": "These warm Winter Robes will keep you cozy during the cold time of the year. A fancy flowing fabric on the outside reflects the silver moonlight and lets you go with the flow, you know? Increases Intelligence by 9. Limited Edition 2020-2021 Winter Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_winter2021Mage",
	  "klass": "special",
	  "index": "winter2021Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_winter2021Healer": {
	  "set": "winter2021ArcticExplorerHealerSet",
	  "event": {
		"start": "2020-12-17T08:00-05:00",
		"end": "2021-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "winter",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Arctic Parka",
	  "notes": "Defy the chill winds with the best protection available north of the Circle! Increases Constitution by 15. Limited Edition 2020-2021 Winter Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_winter2021Healer",
	  "klass": "special",
	  "index": "winter2021Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_birthday2021": {
	  "text": "Extravagant Party Robes",
	  "notes": "Happy Birthday, Habitica! Wear these Extravagant Party Robes to celebrate this wonderful day. Confers no benefit.",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_birthday2021",
	  "set": "special-birthday2021",
	  "klass": "special",
	  "index": "birthday2021",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2021Rogue": {
	  "set": "spring2021TwinFlowerRogueSet",
	  "event": {
		"start": "2021-03-23T08:00-05:00",
		"end": "2021-04-30T20:00-05:00",
		"npcImageSuffix": "spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Twin Flower Stem",
	  "notes": "No one will see you waiting in amBUSH with this cunning armor; you look like a plant from every angle. Increases Perception by 15. Limited Edition 2021 Spring Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_spring2021Rogue",
	  "klass": "special",
	  "index": "spring2021Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_spring2021Warrior": {
	  "set": "spring2021SunstoneWarriorSet",
	  "event": {
		"start": "2021-03-23T08:00-05:00",
		"end": "2021-04-30T20:00-05:00",
		"npcImageSuffix": "spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Armor of the Sun",
	  "notes": "Be careful you don't dazzle yourself as this sunstone armor catches the light! Increases Constitution by 9. Limited Edition 2021 Spring Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_spring2021Warrior",
	  "klass": "special",
	  "index": "spring2021Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_spring2021Mage": {
	  "set": "spring2021SwanMageSet",
	  "event": {
		"start": "2021-03-23T08:00-05:00",
		"end": "2021-04-30T20:00-05:00",
		"npcImageSuffix": "spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "White Swan's Splendor",
	  "notes": "Your transformation is complete! Take to the sky, or to the lake, and sing for joy! Increases Intelligence by 9. Limited Edition 2021 Spring Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_spring2021Mage",
	  "klass": "special",
	  "index": "spring2021Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2021Healer": {
	  "set": "spring2021WillowHealerSet",
	  "event": {
		"start": "2021-03-23T08:00-05:00",
		"end": "2021-04-30T20:00-05:00",
		"npcImageSuffix": "spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Willow Bark Coat",
	  "notes": "This armor helps you bend instead of break when buffeted by wind or weapon. Increases Constitution by 15. Limited Edition 2021 Spring Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_spring2021Healer",
	  "klass": "special",
	  "index": "spring2021Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2021Rogue": {
	  "set": "summer2021ClownfishRogueSet",
	  "event": {
		"start": "2021-06-23T08:00-04:00",
		"end": "2021-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "summer",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Clownfish Fins",
	  "notes": "Do you want to be found? These draw attention! Rather not? They also help you flit away into the deep! Increases Perception by 15. Limited Edition 2021 Summer Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_summer2021Rogue",
	  "klass": "special",
	  "index": "summer2021Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_summer2021Warrior": {
	  "set": "summer2021FlyingFishWarriorSet",
	  "event": {
		"start": "2021-06-23T08:00-04:00",
		"end": "2021-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "summer",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Finny Armor",
	  "notes": "Sleek and swift, this flying fish costume will help you swim through the most turbulent waters. Increases Constitution by 9. Limited Edition 2021 Summer Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_summer2021Warrior",
	  "klass": "special",
	  "index": "summer2021Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2021Mage": {
	  "set": "summer2021NautilusMageSet",
	  "event": {
		"start": "2021-06-23T08:00-04:00",
		"end": "2021-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "summer",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Spiraled Shell",
	  "notes": "Ever-tightening whirls of nacre provide an arcane geometry that focuses protective spellwork. Increases Intelligence by 9. Limited Edition 2021 Summer Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_summer2021Mage",
	  "klass": "special",
	  "index": "summer2021Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_summer2021Healer": {
	  "set": "summer2021ParrotHealerSet",
	  "event": {
		"start": "2021-06-23T08:00-04:00",
		"end": "2021-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "summer",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Parrot Plumage",
	  "notes": "Your enemies might suspect you're a featherweight, but this armor will keep you safe while you help your Party. Increases Constitution by 15. Limited Edition 2021 Summer Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_summer2021Healer",
	  "klass": "special",
	  "index": "summer2021Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2021Rogue": {
	  "set": "fall2021OozeRogueSet",
	  "event": {
		"start": "2021-09-21T08:00-04:00",
		"end": "2021-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Unfortunately Not Slimeproof Armor",
	  "notes": "It's got a skullcap, leather tunic, and metal rivets! It's great! But it does not provide a hermetic seal against goop! Increases Perception by 15. Limited Edition 2021 Autumn Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_fall2021Rogue",
	  "klass": "special",
	  "index": "fall2021Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_fall2021Warrior": {
	  "set": "fall2021HeadlessWarriorSet",
	  "event": {
		"start": "2021-09-21T08:00-04:00",
		"end": "2021-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Formal Wool Suit",
	  "notes": "A stunning suit that’s perfect to wear when crossing bridges in the dead of night. Increases Constitution by 9. Limited Edition 2021 Autumn Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_fall2021Warrior",
	  "klass": "special",
	  "index": "fall2021Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2021Mage": {
	  "set": "fall2021BrainEaterMageSet",
	  "event": {
		"start": "2021-09-21T08:00-04:00",
		"end": "2021-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Gown of the Darkness Beneath",
	  "notes": "Collars with many pointy protrusions are the high fashion of low villains. Increases Intelligence by 9. Limited Edition 2021 Autumn Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_fall2021Mage",
	  "klass": "special",
	  "index": "fall2021Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_fall2021Healer": {
	  "set": "fall2021FlameSummonerHealerSet",
	  "event": {
		"start": "2021-09-21T08:00-04:00",
		"end": "2021-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Summoner's Robes",
	  "notes": "Made of durable, flame-resistant fabric, these robes are perfect to wear when conjuring healing flames. Increases Constitution by 15. Limited Edition 2021 Autumn Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_fall2021Healer",
	  "klass": "special",
	  "index": "fall2021Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_winter2022Rogue": {
	  "set": "winter2022FireworksRogueSet",
	  "event": {
		"start": "2021-12-21T08:00-05:00",
		"end": "2022-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "_winter",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Dazzling Explosion",
	  "notes": "If they're seeing stars, they're not seeing you! Yes, let's go with that. Increases Perception by 15. Limited Edition 2021-2022 Winter Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_winter2022Rogue",
	  "klass": "special",
	  "index": "winter2022Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_winter2022Warrior": {
	  "set": "winter2022StockingWarriorSet",
	  "event": {
		"start": "2021-12-21T08:00-05:00",
		"end": "2022-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "_winter",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Fuzzy Stocking",
	  "notes": "Who says you can’t be snug and cozy while doing battle with everyday tasks? Increases Constitution by 9. Limited Edition 2021-2022 Winter Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_winter2022Warrior",
	  "klass": "special",
	  "index": "winter2022Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_winter2022Mage": {
	  "set": "winter2022PomegranateMageSet",
	  "event": {
		"start": "2021-12-21T08:00-05:00",
		"end": "2022-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "_winter",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Pomegranate Protection",
	  "notes": "Enemies should watch out for fruit juice stains when you approach! Increases Intelligence by 9. Limited Edition 2021-2022 Winter Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_winter2022Mage",
	  "klass": "special",
	  "index": "winter2022Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_winter2022Healer": {
	  "set": "winter2022IceCrystalHealerSet",
	  "event": {
		"start": "2021-12-21T08:00-05:00",
		"end": "2022-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "_winter",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Crystalline Ice Armor",
	  "notes": "Glide as if skating, just above the ground, a glittering ethereal figure come to bring cool and calm. Increases Constitution by 15. Limited Edition 2021-2022 Winter Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_winter2022Healer",
	  "klass": "special",
	  "index": "winter2022Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_spring2022Rogue": {
	  "set": "spring2022MagpieRogueSet",
	  "event": {
		"start": "2022-03-22T08:00-05:00",
		"end": "2022-04-30T20:00-05:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Magpie Costume",
	  "notes": "With iridescent metallic blue-gray and lighter patches on your feathers, you will be the finest flying friend at the spring fling! Increases Perception by 15. Limited Edition 2022 Spring Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_spring2022Rogue",
	  "klass": "special",
	  "index": "spring2022Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_spring2022Warrior": {
	  "set": "spring2022RainstormWarriorSet",
	  "event": {
		"start": "2022-03-22T08:00-05:00",
		"end": "2022-04-30T20:00-05:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Rain Slicker",
	  "notes": "This slicker and boots are so formidable you could sing in the rain or jump in every puddle but still be warm and dry! Increases Constitution by 9. Limited Edition 2022 Spring Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_spring2022Warrior",
	  "klass": "special",
	  "index": "spring2022Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_spring2022Mage": {
	  "set": "spring2022ForsythiaMageSet",
	  "event": {
		"start": "2022-03-22T08:00-05:00",
		"end": "2022-04-30T20:00-05:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Forsythia Robe",
	  "notes": "Show you’re ready to spring forward into the season with this robe adorned with forsythia flower petals. Increases Intelligence by 9. Limited Edition 2022 Spring Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_spring2022Mage",
	  "klass": "special",
	  "index": "spring2022Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2022Healer": {
	  "set": "spring2022PeridotHealerSet",
	  "event": {
		"start": "2022-03-22T08:00-05:00",
		"end": "2022-04-30T20:00-05:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Peridot Armor",
	  "notes": "Drive away fears and nightmares simply by wearing this green gem garment. Increases Constitution by 15. Limited Edition 2022 Spring Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_spring2022Healer",
	  "klass": "special",
	  "index": "spring2022Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_birthday2022": {
	  "text": "Preposterous Party Robes",
	  "notes": "Happy Birthday, Habitica! Wear these Proposterous Party Robes to celebrate this wonderful day. Confers no benefit.",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_birthday2022",
	  "set": "special-birthday2022",
	  "klass": "special",
	  "index": "birthday2022",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_summer2022Rogue": {
	  "set": "summer2022CrabRogueSet",
	  "event": {
		"start": "2022-06-21T08:00-04:00",
		"end": "2022-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "_summer",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Crab Armor",
	  "notes": "Perfect for a casual scuttle down the beach. Increases Perception by 15. Limited Edition 2022 Summer Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_summer2022Rogue",
	  "klass": "special",
	  "index": "summer2022Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_summer2022Warrior": {
	  "set": "summer2022WaterspoutWarriorSet",
	  "event": {
		"start": "2022-06-21T08:00-04:00",
		"end": "2022-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "_summer",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Waterspout Armor",
	  "notes": "Get ready for a watery battle as you surround yourself with this twirling, whirling column of air and mist. Increases Constitution by 9. Limited Edition 2022 Summer Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_summer2022Warrior",
	  "klass": "special",
	  "index": "summer2022Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2022Mage": {
	  "set": "summer2022MantaRayMageSet",
	  "event": {
		"start": "2022-06-21T08:00-04:00",
		"end": "2022-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "_summer",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Manta Ray Armor",
	  "notes": "When wearing this armor, you will glide easily through your work like the manta ray glides through water. Increases Intelligence by 9. Limited Edition 2022 Summer Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_summer2022Mage",
	  "klass": "special",
	  "index": "summer2022Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_summer2022Healer": {
	  "set": "summer2022AngelfishHealerSet",
	  "event": {
		"start": "2022-06-21T08:00-04:00",
		"end": "2022-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "_summer",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Angelfish Tail",
	  "notes": "Use your colorful fins to scoot about the reef and help those in need of rest and healing. Increases Constitution by 15. Limited Edition 2022 Summer Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_summer2022Healer",
	  "klass": "special",
	  "index": "summer2022Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2022Rogue": {
	  "set": "fall2022KappaRogueSet",
	  "event": {
		"start": "2022-09-20T08:00-04:00",
		"end": "2022-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Kappa Armor",
	  "notes": "Whether you’re swimming, sneaking, or wrestling, you will be safe in this armor. Increases Perception by 15. Limited Edition 2022 Fall Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_fall2022Rogue",
	  "klass": "special",
	  "index": "fall2022Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_fall2022Warrior": {
	  "set": "fall2022OrcWarriorSet",
	  "event": {
		"start": "2022-09-20T08:00-04:00",
		"end": "2022-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Orcish Armor",
	  "notes": "RAWR! BIG SHOULDERS mean you are BIG STRONG! Increases Constitution by 9. Limited Edition 2022 Fall Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_fall2022Warrior",
	  "klass": "special",
	  "index": "fall2022Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2022Mage": {
	  "set": "fall2022HarpyMageSet",
	  "event": {
		"start": "2022-09-20T08:00-04:00",
		"end": "2022-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Harpy Armor",
	  "notes": "Fly as fast as the wind with these wonderful wings and hold what you care most about tight in these terrifying talons. Increases Intelligence by 9. Limited Edition 2022 Fall Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_fall2022Mage",
	  "klass": "special",
	  "index": "fall2022Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_fall2022Healer": {
	  "set": "fall2022WatcherHealerSet",
	  "event": {
		"start": "2022-09-20T08:00-04:00",
		"end": "2022-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Profusion of Peeker Pods",
	  "notes": "How many peeps could a Peeker peep, if a Peeker could peep peeps? Increases Constitution by 15. Limited Edition 2022 Fall Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_fall2022Healer",
	  "klass": "special",
	  "index": "fall2022Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_winter2023Rogue": {
	  "set": "winter2023RibbonRogueSet",
	  "event": {
		"start": "2022-12-20T08:00-05:00",
		"end": "2023-01-31T23:59-05:00",
		"npcImageSuffix": "_winter",
		"season": "winter",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Ribbon Wrap",
	  "notes": "Obtain items. Bundle them up in pretty paper. And give them to your local Rogue! The season demands it. Increases Perception by 15. Limited Edition 2022-2023 Winter Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_winter2023Rogue",
	  "klass": "special",
	  "index": "winter2023Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_winter2023Warrior": {
	  "set": "winter2023WalrusWarriorSet",
	  "event": {
		"start": "2022-12-20T08:00-05:00",
		"end": "2023-01-31T23:59-05:00",
		"npcImageSuffix": "_winter",
		"season": "winter",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Walrus Suit",
	  "notes": "This tough walrus suit is perfect for a walk along a beach in the middle of the night. Increases Constitution by 9. Limited Edition 2022-2023 Winter Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_winter2023Warrior",
	  "klass": "special",
	  "index": "winter2023Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_winter2023Mage": {
	  "set": "winter2023FairyLightsMageSet",
	  "event": {
		"start": "2022-12-20T08:00-05:00",
		"end": "2023-01-31T23:59-05:00",
		"npcImageSuffix": "_winter",
		"season": "winter",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Fairy Light Gown",
	  "notes": "Just because you have lights on, that doesn't make you a tree! ...maybe some other year. Increases Intelligence by 9. Limited Edition 2022-2023 Winter Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_winter2023Mage",
	  "klass": "special",
	  "index": "winter2023Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_winter2023Healer": {
	  "set": "winter2023CardinalHealerSet",
	  "event": {
		"start": "2022-12-20T08:00-05:00",
		"end": "2023-01-31T23:59-05:00",
		"npcImageSuffix": "_winter",
		"season": "winter",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Cardinal Suit",
	  "notes": "This bright cardinal suit is perfect for flying high above your problems. Increases Constitution by 15. Limited Edition 2022-2023 Winter Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_winter2023Healer",
	  "klass": "special",
	  "index": "winter2023Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_birthday2023": {
	  "text": "Fabulous Party Robes",
	  "notes": "Happy Birthday, Habitica! Wear these Fabulous Party Robes to celebrate this wonderful day. Confers no benefit.",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_special_birthday2023",
	  "set": "special-birthday2023",
	  "klass": "special",
	  "index": "birthday2023",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2023Rogue": {
	  "set": "spring2023CaterpillarRogueSet",
	  "event": {
		"start": "2023-03-21T08:00-04:00",
		"end": "2023-04-30T23:59-04:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Caterpillar Cape",
	  "notes": "You may only have four limbs to work with, but you can climb and crawl with the greatest of grubs. Increases Perception by 15. Limited Edition 2023 Spring Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_spring2023Rogue",
	  "klass": "special",
	  "index": "spring2023Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_spring2023Warrior": {
	  "set": "spring2023HummingbirdWarriorSet",
	  "event": {
		"start": "2023-03-21T08:00-04:00",
		"end": "2023-04-30T23:59-04:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Hummingbird Armor",
	  "notes": "That humming sound you hear is your wings beating faster than you can imagine. Increases Constitution by 9. Limited Edition 2023 Spring Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_spring2023Warrior",
	  "klass": "special",
	  "index": "spring2023Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_spring2023Mage": {
	  "set": "spring2023MoonstoneMageSet",
	  "event": {
		"start": "2023-03-21T08:00-04:00",
		"end": "2023-04-30T23:59-04:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Moonstone Suit",
	  "notes": "This snazzy spring suit magnifies moonstone magic. Increases Intelligence by 9. Limited Edition 2023 Spring Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_spring2023Mage",
	  "klass": "special",
	  "index": "spring2023Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_spring2023Healer": {
	  "set": "spring2023LilyHealerSet",
	  "event": {
		"start": "2023-03-21T08:00-04:00",
		"end": "2023-04-30T23:59-04:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Lily Leaf Gown",
	  "notes": "A sweep of verdant glory to make you the envy of the Party. Increases Constitution by 15. Limited Edition 2023 Spring Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_spring2023Healer",
	  "klass": "special",
	  "index": "spring2023Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2023Rogue": {
	  "set": "summer2023GuppyRogueSet",
	  "event": {
		"start": "2023-06-20T08:00-04:00",
		"end": "2023-07-31T23:59-04:00",
		"npcImageSuffix": "_summer",
		"season": "summer",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Guppy Wrap",
	  "notes": "Gup top! Down low! Too slow... Increases Perception by 15. Limited Edition 2023 Summer Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_summer2023Rogue",
	  "klass": "special",
	  "index": "summer2023Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_special_summer2023Warrior": {
	  "set": "summer2023GoldfishWarriorSet",
	  "event": {
		"start": "2023-06-20T08:00-04:00",
		"end": "2023-07-31T23:59-04:00",
		"npcImageSuffix": "_summer",
		"season": "summer",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Goldfish Armor",
	  "notes": "Goldfish Warriors actually have excellent memories because they always keep their Dailies and To Do's organized in lists. Increases Constitution by 9. Limited Edition 2023 Summer Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_summer2023Warrior",
	  "klass": "special",
	  "index": "summer2023Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_summer2023Mage": {
	  "set": "summer2023CoralMageSet",
	  "event": {
		"start": "2023-06-20T08:00-04:00",
		"end": "2023-07-31T23:59-04:00",
		"npcImageSuffix": "_summer",
		"season": "summer",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Coral Robes",
	  "notes": "Feel protected and comfortable in these flowing robes, perfectly colored for underwater adventures. Increases Intelligence by 9. Limited Edition 2023 Summer Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_summer2023Mage",
	  "klass": "special",
	  "index": "summer2023Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_summer2023Healer": {
	  "set": "summer2023KelpHealerSet",
	  "event": {
		"start": "2023-06-20T08:00-04:00",
		"end": "2023-07-31T23:59-04:00",
		"npcImageSuffix": "_summer",
		"season": "summer",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Kelp Kirtle",
	  "notes": "Hold fast to your goals and convictions in this elegant green gown. Increases Constitution by 15. Limited Edition 2023 Summer Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_summer2023Healer",
	  "klass": "special",
	  "index": "summer2023Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2023Warrior": {
	  "set": "fall2023ScaryMovieWarriorSet",
	  "event": {
		"start": "2023-09-21T08:00-04:00",
		"end": "2023-10-31T23:59-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Video Player Armor",
	  "notes": "Does it play DVDs? VHS?? What kind of cables does this need to plug into the TV?! Turns out this is the scariest part of the whole thing! Increases Constitution by 9. Limited Edition 2023 Summer Gear.",
	  "value": 90,
	  "con": 9,
	  "type": "armor",
	  "key": "armor_special_fall2023Warrior",
	  "klass": "special",
	  "index": "fall2023Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2023Healer": {
	  "set": "fall2023BogCreatureHealerSet",
	  "event": {
		"start": "2023-09-21T08:00-04:00",
		"end": "2023-10-31T23:59-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Bog Creature Body",
	  "notes": "With moss, rock, wood, and bog water merged into one, this outfit is sometimes tough and sometimes spongey (but always intimidating). Increases Constitution by 15. Limited Edition 2023 Fall Gear.",
	  "value": 90,
	  "con": 15,
	  "type": "armor",
	  "key": "armor_special_fall2023Healer",
	  "klass": "special",
	  "index": "fall2023Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_special_fall2023Mage": {
	  "set": "fall2023ScarletWarlockMageSet",
	  "event": {
		"start": "2023-09-21T08:00-04:00",
		"end": "2023-10-31T23:59-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Scarlet Warlock Robe",
	  "notes": "With scarlet threads and gold accents, this outfit is a wonder for the senses. Increases Intelligence by 9. Limited Edition 2023 Fall Gear.",
	  "value": 90,
	  "int": 9,
	  "type": "armor",
	  "key": "armor_special_fall2023Mage",
	  "klass": "special",
	  "index": "fall2023Mage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_special_fall2023Rogue": {
	  "set": "fall2023WitchsBrewRogueSet",
	  "event": {
		"start": "2023-09-21T08:00-04:00",
		"end": "2023-10-31T23:59-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Cursed Cauldron",
	  "notes": "You were lured with the promise of a nice hot soak... Joke's on you! Increases Perception by 15. Limited Edition 2023 Fall Gear.",
	  "value": 90,
	  "per": 15,
	  "type": "armor",
	  "key": "armor_special_fall2023Rogue",
	  "klass": "special",
	  "index": "fall2023Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_mystery_201402": {
	  "text": "Messenger Robes",
	  "notes": "Shimmering and strong, these robes have many pockets to carry letters. Confers no benefit. February 2014 Subscriber Item.",
	  "mystery": "201402",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201402",
	  "set": "mystery-201402",
	  "klass": "mystery",
	  "index": "201402",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201403": {
	  "text": "Forest Walker Armor",
	  "notes": "This mossy armor of woven wood bends with the movement of the wearer. Confers no benefit. March 2014 Subscriber Item.",
	  "mystery": "201403",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201403",
	  "set": "mystery-201403",
	  "klass": "mystery",
	  "index": "201403",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201405": {
	  "text": "Flame of Heart",
	  "notes": "Nothing can hurt you when you are swathed in flames! Confers no benefit. May 2014 Subscriber Item.",
	  "mystery": "201405",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201405",
	  "set": "mystery-201405",
	  "klass": "mystery",
	  "index": "201405",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201406": {
	  "text": "Octopus Robe",
	  "notes": "This flexible robe makes it possible for its wearer to slip through even the tiniest cracks. Confers no benefit. June 2014 Subscriber Item.",
	  "mystery": "201406",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201406",
	  "set": "mystery-201406",
	  "klass": "mystery",
	  "index": "201406",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201407": {
	  "text": "Undersea Explorer Suit",
	  "notes": "Described alternatively as \"splooshy\", \"overly thick\" and \"frankly, kind of cumbersome\", this suit is the best friend of any intrepid undersea explorer. Confers no benefit. July 2014 Subscriber Item.",
	  "mystery": "201407",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201407",
	  "set": "mystery-201407",
	  "klass": "mystery",
	  "index": "201407",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201408": {
	  "text": "Sun Robes",
	  "notes": "These robes are woven with sunlight and gold. Confers no benefit. August 2014 Subscriber Item.",
	  "mystery": "201408",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201408",
	  "set": "mystery-201408",
	  "klass": "mystery",
	  "index": "201408",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201409": {
	  "text": "Strider Vest",
	  "notes": "A leaf-covered vest that camouflages the wearer. Confers no benefit. September 2014 Subscriber Item.",
	  "mystery": "201409",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201409",
	  "set": "mystery-201409",
	  "klass": "mystery",
	  "index": "201409",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201410": {
	  "text": "Goblin Gear",
	  "notes": "Scaly, slimy, and strong! Confers no benefit. October 2014 Subscriber Item.",
	  "mystery": "201410",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201410",
	  "set": "mystery-201410",
	  "klass": "mystery",
	  "index": "201410",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201412": {
	  "text": "Penguin Suit",
	  "notes": "You're a penguin! Confers no benefit. December 2014 Subscriber Item.",
	  "mystery": "201412",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201412",
	  "set": "mystery-201412",
	  "klass": "mystery",
	  "index": "201412",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201501": {
	  "text": "Starry Armor",
	  "notes": "Galaxies shimmer in the metal of this armor, strengthening the wearer's resolve. Confers no benefit. January 2015 Subscriber Item.",
	  "mystery": "201501",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201501",
	  "set": "mystery-201501",
	  "klass": "mystery",
	  "index": "201501",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201503": {
	  "text": "Aquamarine Armor",
	  "notes": "This blue mineral symbolizes good luck, happiness, and eternal productivity. Confers no benefit. March 2015 Subscriber Item.",
	  "mystery": "201503",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201503",
	  "set": "mystery-201503",
	  "klass": "mystery",
	  "index": "201503",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201504": {
	  "text": "Busy Bee Robe",
	  "notes": "You'll be productive as a busy bee in this fetching robe! Confers no benefit. April 2015 Subscriber Item.",
	  "mystery": "201504",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201504",
	  "set": "mystery-201504",
	  "klass": "mystery",
	  "index": "201504",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201506": {
	  "text": "Snorkel Suit",
	  "notes": "Snorkel through a coral reef in this brightly-colored swim suit! Confers no benefit. June 2015 Subscriber Item.",
	  "mystery": "201506",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201506",
	  "set": "mystery-201506",
	  "klass": "mystery",
	  "index": "201506",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201508": {
	  "text": "Cheetah Costume",
	  "notes": "Run fast as a flash in the fluffy Cheetah Costume! Confers no benefit. August 2015 Subscriber Item.",
	  "mystery": "201508",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201508",
	  "set": "mystery-201508",
	  "klass": "mystery",
	  "index": "201508",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201509": {
	  "text": "Werewolf Costume",
	  "notes": "This IS a costume, right? Confers no benefit. September 2015 Subscriber Item.",
	  "mystery": "201509",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201509",
	  "set": "mystery-201509",
	  "klass": "mystery",
	  "index": "201509",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201511": {
	  "text": "Wooden Armor",
	  "notes": "Considering this armor was carved directly from a magical log, it's surprisingly comfortable. Confers no benefit. November 2015 Subscriber Item.",
	  "mystery": "201511",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201511",
	  "set": "mystery-201511",
	  "klass": "mystery",
	  "index": "201511",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201512": {
	  "text": "Cold Fire Armor",
	  "notes": "Summon the icy flames of winter! Confers no benefit. December 2015 Subscriber Item.",
	  "mystery": "201512",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201512",
	  "set": "mystery-201512",
	  "klass": "mystery",
	  "index": "201512",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201603": {
	  "text": "Lucky Suit",
	  "notes": "This suit is sewn from thousands of four-leafed clovers! Confers no benefit. March 2016 Subscriber Item.",
	  "mystery": "201603",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201603",
	  "set": "mystery-201603",
	  "klass": "mystery",
	  "index": "201603",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201604": {
	  "text": "Armor o' Leaves",
	  "notes": "You, too, can be a small but fearsome leaf puff. Confers no benefit. April 2016 Subscriber Item.",
	  "mystery": "201604",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201604",
	  "set": "mystery-201604",
	  "klass": "mystery",
	  "index": "201604",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201605": {
	  "text": "Marching Bard Uniform",
	  "notes": "Unlike the traditional bards who join adventuring parties, bards who join Habitican marching bands are known for grand parades, not dungeon raids. Confers no benefit. May 2016 Subscriber Item.",
	  "mystery": "201605",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201605",
	  "set": "mystery-201605",
	  "klass": "mystery",
	  "index": "201605",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201606": {
	  "text": "Selkie Tail",
	  "notes": "This strong tail shimmers like sea foam crashing upon the shore. Confers no benefit. June 2016 Subscriber Item.",
	  "mystery": "201606",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201606",
	  "set": "mystery-201606",
	  "klass": "mystery",
	  "index": "201606",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201607": {
	  "text": "Seafloor Rogue Armor",
	  "notes": "Blend into the sea floor with this stealthy aquatic armor. Confers no benefit. July 2016 Subscriber Item.",
	  "mystery": "201607",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201607",
	  "set": "mystery-201607",
	  "klass": "mystery",
	  "index": "201607",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201609": {
	  "text": "Cow Armor",
	  "notes": "Fit in with the rest of the herd in this snuggly armor! Confers no benefit. September 2016 Subscriber Item.",
	  "mystery": "201609",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201609",
	  "set": "mystery-201609",
	  "klass": "mystery",
	  "index": "201609",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201610": {
	  "text": "Spectral Armor",
	  "notes": "Mysterious armor that will cause you to float like a ghost! Confers no benefit. October 2016 Subscriber Item.",
	  "mystery": "201610",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201610",
	  "set": "mystery-201610",
	  "klass": "mystery",
	  "index": "201610",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201612": {
	  "text": "Nutcracker Armor",
	  "notes": "Crack nuts in style in this spectacular holiday ensemble. Be careful not to pinch your fingers! Confers no benefit. December 2016 Subscriber Item.",
	  "mystery": "201612",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201612",
	  "set": "mystery-201612",
	  "klass": "mystery",
	  "index": "201612",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201703": {
	  "text": "Shimmer Armor",
	  "notes": "Though its colors are reminiscent of spring petals, this armor is stronger than steel! Confers no benefit. March 2017 Subscriber Item.",
	  "mystery": "201703",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201703",
	  "set": "mystery-201703",
	  "klass": "mystery",
	  "index": "201703",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201704": {
	  "text": "Fairytale Armor",
	  "notes": "Fairy folk crafted this armor from morning dew to capture the colors of the sunrise. Confers no benefit. April 2017 Subscriber Item.",
	  "mystery": "201704",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201704",
	  "set": "mystery-201704",
	  "klass": "mystery",
	  "index": "201704",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201707": {
	  "text": "Jellymancer Armor",
	  "notes": "This armor will help you blend in with the creatures of the ocean while you pursue undersea quests and adventures. Confers no benefit. July 2017 Subscriber Item.",
	  "mystery": "201707",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201707",
	  "set": "mystery-201707",
	  "klass": "mystery",
	  "index": "201707",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201710": {
	  "text": "Imperious Imp Apparel",
	  "notes": "Scaly, shiny, and strong! Confers no benefit. October 2017 Subscriber Item.",
	  "mystery": "201710",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201710",
	  "set": "mystery-201710",
	  "klass": "mystery",
	  "index": "201710",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201711": {
	  "text": "Carpet Rider Outfit",
	  "notes": "This cozy sweater set will help keep you warm as you ride through the sky! Confers no benefit. November 2017 Subscriber Item.",
	  "mystery": "201711",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201711",
	  "set": "mystery-201711",
	  "klass": "mystery",
	  "index": "201711",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201712": {
	  "text": "Candlemancer Armor",
	  "notes": "The heat and light generated by this magic armor will warm your heart but never burn your skin! Confers no benefit. December 2017 Subscriber Item.",
	  "mystery": "201712",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201712",
	  "set": "mystery-201712",
	  "klass": "mystery",
	  "index": "201712",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201802": {
	  "text": "Love Bug Armor",
	  "notes": "This shiny armor reflects your strength of heart and infuses it into any Habiticans nearby who may need encouragement! Confers no benefit. February 2018 Subscriber Item.",
	  "mystery": "201802",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201802",
	  "set": "mystery-201802",
	  "klass": "mystery",
	  "index": "201802",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201806": {
	  "text": "Alluring Anglerfish Tail",
	  "notes": "This sinuous tail features glowing spots to light your way through the deep. Confers no benefit. June 2018 Subscriber Item.",
	  "mystery": "201806",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201806",
	  "set": "mystery-201806",
	  "klass": "mystery",
	  "index": "201806",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201807": {
	  "text": "Sea Serpent Tail",
	  "notes": "This powerful tail will propel you through the sea at incredible speeds! Confers no benefit. July 2018 Subscriber Item.",
	  "mystery": "201807",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201807",
	  "set": "mystery-201807",
	  "klass": "mystery",
	  "index": "201807",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201808": {
	  "text": "Lava Dragon Armor",
	  "notes": "This armor is made from the shed scales of the elusive (and extremely warm) Lava Dragon. Confers no benefit. August 2018 Subscriber Item.",
	  "mystery": "201808",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201808",
	  "set": "mystery-201808",
	  "klass": "mystery",
	  "index": "201808",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201809": {
	  "text": "Armor of Autumn Leaves",
	  "notes": "You are not only a small and fearsome leaf puff, you are sporting the most beautiful colors of the season! Confers no benefit. September 2018 Subscriber Item.",
	  "mystery": "201809",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201809",
	  "set": "mystery-201809",
	  "klass": "mystery",
	  "index": "201809",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201810": {
	  "text": "Dark Forest Robes",
	  "notes": "These robes are extra warm to protect you from the ghastly cold of haunted realms. Confers no benefit. October 2018 Subscriber Item.",
	  "mystery": "201810",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201810",
	  "set": "mystery-201810",
	  "klass": "mystery",
	  "index": "201810",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201903": {
	  "text": "Shell-ebration Armor",
	  "notes": "People are dye-ing to know where you got this egg-cellent outfit! Confers no benefit. March 2019 Subscriber Item.",
	  "mystery": "201903",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201903",
	  "set": "mystery-201903",
	  "klass": "mystery",
	  "index": "201903",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201904": {
	  "text": "Opalescent Outfit",
	  "notes": "This shining garment has opals sewn into the front panel to grant you arcane powers and a fabulous look. Confers no benefit. April 2019 Subscriber Item.",
	  "mystery": "201904",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201904",
	  "set": "mystery-201904",
	  "klass": "mystery",
	  "index": "201904",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201906": {
	  "text": "Kindly Koi Tail",
	  "notes": "We will spare you a pun about “playing koi.” Oh wait, oops. Confers no benefit. June 2019 Subscriber Item.",
	  "mystery": "201906",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201906",
	  "set": "mystery-201906",
	  "klass": "mystery",
	  "index": "201906",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201907": {
	  "text": "Flowery Shirt",
	  "notes": "Stay cool and look cool on even the hottest summer day. Confers no benefit. July 2019 Subscriber Item.",
	  "mystery": "201907",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201907",
	  "set": "mystery-201907",
	  "klass": "mystery",
	  "index": "201907",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201908": {
	  "text": "Footloose Faun Costume",
	  "notes": "These legs were made for dancing! And that's just what they'll do. Confers no benefit. August 2019 Subscriber Item.",
	  "mystery": "201908",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201908",
	  "set": "mystery-201908",
	  "klass": "mystery",
	  "index": "201908",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201909": {
	  "text": "Affable Acorn Armor",
	  "notes": "Your tough exterior is protective, but it's still best to keep an eye out for squirrels... Confers no benefit. September 2019 Subscriber Item.",
	  "mystery": "201909",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201909",
	  "set": "mystery-201909",
	  "klass": "mystery",
	  "index": "201909",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_201910": {
	  "text": "Cryptic Armor",
	  "notes": "This enigmatic armor will protect you from terrors seen and unseen. Confers no benefit. October 2019 Subscriber Item.",
	  "mystery": "201910",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_201910",
	  "set": "mystery-201910",
	  "klass": "mystery",
	  "index": "201910",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_202006": {
	  "text": "Multichrome Merfolk Tail",
	  "notes": "Even among the brightest corals and anemones, this tail proudly stands out from the crowd! Confers no benefit. June 2020 Subscriber Item.",
	  "mystery": "202006",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_202006",
	  "set": "mystery-202006",
	  "klass": "mystery",
	  "index": "202006",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_202007": {
	  "text": "Outstanding Orca Costume",
	  "notes": "Swim, flip, dive, and race with this handsome and powerful tail! Confers no benefit. July 2020 Subscriber Item.",
	  "mystery": "202007",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_202007",
	  "set": "mystery-202007",
	  "klass": "mystery",
	  "index": "202007",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_202101": {
	  "text": "Snazzy Snow Leopard Suit",
	  "notes": "Wrap yourself in warm fur and nearly endless tail floof! Confers no benefit. January 2021 Subscriber Item.",
	  "mystery": "202101",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_202101",
	  "set": "mystery-202101",
	  "klass": "mystery",
	  "index": "202101",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_202102": {
	  "text": "Charming Dress",
	  "notes": "Sail across the universe in fine style in this buoyantly bright dress. Confers no benefit. February 2021 Subscriber Item.",
	  "mystery": "202102",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_202102",
	  "set": "mystery-202102",
	  "klass": "mystery",
	  "index": "202102",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_202103": {
	  "text": "Blossom Viewing Robes",
	  "notes": "These soft and breezy robes are perfect for a tea party beneath the showy spring trees. Confers no benefit. March 2021 Subscriber Item.",
	  "mystery": "202103",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_202103",
	  "set": "mystery-202103",
	  "klass": "mystery",
	  "index": "202103",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_202104": {
	  "text": "Downy Thistle Armor",
	  "notes": "Soft on the inside, spiky on the outside, stylish everywhere! Confers no benefit. April 2021 Subscriber Item.",
	  "mystery": "202104",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_202104",
	  "set": "mystery-202104",
	  "klass": "mystery",
	  "index": "202104",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_202106": {
	  "text": "Sunset Tail",
	  "notes": "With this mighty yet elegant tail you can cruise through warm seas all the way to the horizon. Confers no benefit. June 2021 Subscriber Item.",
	  "mystery": "202106",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_202106",
	  "set": "mystery-202106",
	  "klass": "mystery",
	  "index": "202106",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_202110": {
	  "text": "Mossy Gargoyle Armor",
	  "notes": "Velvety moss makes you seem soft on the outside, but you're protected by solid stone. Confers no benefit. October 2021 Subscriber Item.",
	  "mystery": "202110",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_202110",
	  "set": "mystery-202110",
	  "klass": "mystery",
	  "index": "202110",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_202112": {
	  "text": "Antarctic Undine Tail",
	  "notes": "Glide through icy seas and never get cold with this glimmering tail. Confers no benefit. December 2021 Subscriber Item.",
	  "mystery": "202112",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_202112",
	  "set": "mystery-202112",
	  "klass": "mystery",
	  "index": "202112",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_202204": {
	  "text": "Virtual Adventurer Capsule",
	  "notes": "Looks like doing your tasks now requires pushing these mysterious buttons! What could they do? Confers no benefit. April 2022 Subscriber Item.",
	  "mystery": "202204",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_202204",
	  "set": "mystery-202204",
	  "klass": "mystery",
	  "index": "202204",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_202207": {
	  "text": "Jammin' Jelly Armor",
	  "notes": "This armor will have you looking glamorous and gelatinous. Confers no benefit. July 2022 Subscriber Item.",
	  "mystery": "202207",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_202207",
	  "set": "mystery-202207",
	  "klass": "mystery",
	  "index": "202207",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_202210": {
	  "text": "Ominous Ophidian Armor",
	  "notes": "Try slithering for a change, you may find it's quite an efficient mode of transportation! Confers no benefit. October 2022 Subscriber Item.",
	  "mystery": "202210",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_202210",
	  "set": "mystery-202210",
	  "klass": "mystery",
	  "index": "202210",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_202212": {
	  "text": "Glacial Dress",
	  "notes": "The universe can be cold, but this charming dress will keep you cozy as you fly. Confers no benefit. December 2022 Subscriber Item.",
	  "mystery": "202212",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_202212",
	  "set": "mystery-202212",
	  "klass": "mystery",
	  "index": "202212",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_202304": {
	  "text": "Tiptop Teapot Armor",
	  "notes": "Here is your handle and here is your spout! Confers no benefit. April 2023 Subscriber Item.",
	  "mystery": "202304",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_202304",
	  "set": "mystery-202304",
	  "klass": "mystery",
	  "index": "202304",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_202306": {
	  "text": "Rainbow Parka",
	  "notes": "No one’s going to rain on your parade! And if they try, you’ll stay colorful and dry! Confers no benefit. June 2023 Subscriber Item.",
	  "mystery": "202306",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_202306",
	  "set": "mystery-202306",
	  "klass": "mystery",
	  "index": "202306",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_202307": {
	  "text": "Kraken's Tentacles",
	  "notes": "Suction cups have the best traction on the sea floor and on the sides of wayward ships. Confers no benefit. July 2023 Subscriber Item.",
	  "mystery": "202307",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_202307",
	  "set": "mystery-202307",
	  "klass": "mystery",
	  "index": "202307",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_301404": {
	  "text": "Steampunk Suit",
	  "notes": "Dapper and dashing, wot! Confers no benefit. February 3015 Subscriber Item.",
	  "mystery": "301404",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_301404",
	  "set": "mystery-301404",
	  "klass": "mystery",
	  "index": "301404",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_301703": {
	  "text": "Steampunk Peacock Gown",
	  "notes": "This elegant gown is well-suited for even the most extravagant gala! Confers no benefit. March 3017 Subscriber Item.",
	  "mystery": "301703",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_301703",
	  "set": "mystery-301703",
	  "klass": "mystery",
	  "index": "301703",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_mystery_301704": {
	  "text": "Steampunk Pheasant Dress",
	  "notes": "This fine outfit is perfect for a night out and about or a day in your gadget workshop! Confers no benefit. April 3017 Subscriber Item.",
	  "mystery": "301704",
	  "value": 0,
	  "type": "armor",
	  "key": "armor_mystery_301704",
	  "set": "mystery-301704",
	  "klass": "mystery",
	  "index": "301704",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_lunarArmor": {
	  "notes": "The light of the moon will make you strong and savvy. Increases Strength by 7 and Intelligence by 7. Enchanted Armoire: Soothing Lunar Set (Item 2 of 3).",
	  "str": 7,
	  "int": 7,
	  "set": "soothing",
	  "text": "Soothing Lunar Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_lunarArmor",
	  "klass": "armoire",
	  "index": "lunarArmor",
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_gladiatorArmor": {
	  "notes": "To be a gladiator you must be not only cunning... but strong. Increases Perception by 7 and Strength by 7. Enchanted Armoire: Gladiator Set (Item 2 of 3).",
	  "str": 7,
	  "per": 7,
	  "set": "gladiator",
	  "text": "Gladiator Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_gladiatorArmor",
	  "klass": "armoire",
	  "index": "gladiatorArmor",
	  "int": 0,
	  "con": 0
	},
	"armor_armoire_rancherRobes": {
	  "notes": "Wrangle your mounts and round up your pets while wearing these magical Rancher Robes! Increases Strength by 5, Perception by 5, and Intelligence by 5. Enchanted Armoire: Rancher Set (Item 2 of 3).",
	  "str": 5,
	  "per": 5,
	  "int": 5,
	  "set": "rancher",
	  "text": "Rancher Robes",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_rancherRobes",
	  "klass": "armoire",
	  "index": "rancherRobes",
	  "con": 0
	},
	"armor_armoire_goldenToga": {
	  "str": 8,
	  "con": 8,
	  "set": "goldenToga",
	  "notes": "This glimmering toga is only worn by true heroes. Increases Strength and Constitution by 8 each. Enchanted Armoire: Golden Toga Set (Item 1 of 3).",
	  "text": "Golden Toga",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_goldenToga",
	  "klass": "armoire",
	  "index": "goldenToga",
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_hornedIronArmor": {
	  "con": 9,
	  "per": 7,
	  "set": "hornedIron",
	  "notes": "Fiercely hammered from iron, this horned armor is nearly impossible to break. Increases Constitution by 9 and Perception by 7. Enchanted Armoire: Horned Iron Set (Item 2 of 3).",
	  "text": "Horned Iron Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_hornedIronArmor",
	  "klass": "armoire",
	  "index": "hornedIronArmor",
	  "str": 0,
	  "int": 0
	},
	"armor_armoire_plagueDoctorOvercoat": {
	  "int": 6,
	  "str": 5,
	  "con": 6,
	  "set": "plagueDoctor",
	  "notes": "An authentic overcoat worn by the doctors who battle the Plague of Procrastination! Increases Intelligence by 6, Strength by 5, and Constitution by 6. Enchanted Armoire: Plague Doctor Set (Item 3 of 3).",
	  "text": "Plague Doctor Overcoat",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_plagueDoctorOvercoat",
	  "klass": "armoire",
	  "index": "plagueDoctorOvercoat",
	  "per": 0
	},
	"armor_armoire_shepherdRobes": {
	  "str": 9,
	  "per": 9,
	  "set": "shepherd",
	  "notes": "The fabric is cool and breathable, perfect for a hot day herding gryphons in the desert. Increases Strength and Perception by 9 each. Enchanted Armoire: Shepherd Set (Item 2 of 3).",
	  "text": "Shepherd Robes",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_shepherdRobes",
	  "klass": "armoire",
	  "index": "shepherdRobes",
	  "int": 0,
	  "con": 0
	},
	"armor_armoire_royalRobes": {
	  "con": 5,
	  "per": 5,
	  "int": 5,
	  "set": "royal",
	  "notes": "Wonderful ruler, rule all day long! Increases Constitution, Intelligence, and Perception by 5 each. Enchanted Armoire: Royal Set (Item 3 of 3).",
	  "text": "Royal Robes",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_royalRobes",
	  "klass": "armoire",
	  "index": "royalRobes",
	  "str": 0
	},
	"armor_armoire_crystalCrescentRobes": {
	  "per": 7,
	  "con": 7,
	  "set": "crystalCrescent",
	  "notes": "These magical robes are luminescent at night. Increases Constitution and Perception by 7 each. Enchanted Armoire: Crystal Crescent Set (Item 2 of 3).",
	  "text": "Crystal Crescent Robes",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_crystalCrescentRobes",
	  "klass": "armoire",
	  "index": "crystalCrescentRobes",
	  "str": 0,
	  "int": 0
	},
	"armor_armoire_dragonTamerArmor": {
	  "con": 15,
	  "set": "dragonTamer",
	  "notes": "This tough armor is impenetrable to flame. Increases Constitution by 15. Enchanted Armoire: Dragon Tamer Set (Item 3 of 3).",
	  "text": "Dragon Tamer Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_dragonTamerArmor",
	  "klass": "armoire",
	  "index": "dragonTamerArmor",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_barristerRobes": {
	  "con": 10,
	  "set": "barrister",
	  "notes": "Very serious and stately. Increases Constitution by 10. Enchanted Armoire: Barrister Set (Item 2 of 3).",
	  "text": "Barrister Robes",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_barristerRobes",
	  "klass": "armoire",
	  "index": "barristerRobes",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_jesterCostume": {
	  "int": 15,
	  "set": "jester",
	  "notes": "Tra-la-la! Despite the look of this costume, you are no fool. Increases Intelligence by 15. Enchanted Armoire: Jester Set (Item 2 of 3).",
	  "text": "Jester Costume",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_jesterCostume",
	  "klass": "armoire",
	  "index": "jesterCostume",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_minerOveralls": {
	  "con": 10,
	  "set": "miner",
	  "notes": "They may seem worn, but they are enchanted to repel dirt. Increases Constitution by 10. Enchanted Armoire: Miner Set (Item 2 of 3).",
	  "text": "Miner Overalls",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_minerOveralls",
	  "klass": "armoire",
	  "index": "minerOveralls",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_basicArcherArmor": {
	  "per": 12,
	  "set": "basicArcher",
	  "notes": "This camouflaged vest lets you slip unnoticed through the forests. Increases Perception by 12. Enchanted Armoire: Basic Archer Set (Item 2 of 3).",
	  "text": "Basic Archer Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_basicArcherArmor",
	  "klass": "armoire",
	  "index": "basicArcherArmor",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_armoire_graduateRobe": {
	  "int": 10,
	  "set": "graduate",
	  "notes": "Congratulations! This weighty robe hangs heavy with all the knowledge you have accrued. Increases Intelligence by 10. Enchanted Armoire: Graduate Set (Item 2 of 3).",
	  "text": "Graduate Robe",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_graduateRobe",
	  "klass": "armoire",
	  "index": "graduateRobe",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_stripedSwimsuit": {
	  "con": 13,
	  "set": "seaside",
	  "notes": "What could be more fun than battling sea monsters on the beach? Increases Constitution by 13. Enchanted Armoire: Seaside Set (Item 2 of 3).",
	  "text": "Striped Swimsuit",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_stripedSwimsuit",
	  "klass": "armoire",
	  "index": "stripedSwimsuit",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_cannoneerRags": {
	  "con": 15,
	  "set": "cannoneer",
	  "notes": "These rags be tougher than they look. Increases Constitution by 15. Enchanted Armoire: Cannoneer Set (Item 2 of 3).",
	  "text": "Cannoneer Rags",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_cannoneerRags",
	  "klass": "armoire",
	  "index": "cannoneerRags",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_falconerArmor": {
	  "con": 10,
	  "set": "falconer",
	  "notes": "Keep away talon attacks with this sturdy armor! Increases Constitution by 10. Enchanted Armoire: Falconer Set (Item 1 of 3).",
	  "text": "Falconer Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_falconerArmor",
	  "klass": "armoire",
	  "index": "falconerArmor",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_vermilionArcherArmor": {
	  "per": 15,
	  "set": "vermilionArcher",
	  "notes": "This armor is made of a specially enchanted red metal for maximum protection, minimal restriction, and maximum flair! Increases Perception by 15. Enchanted Armoire: Vermilion Archer Set (Item 2 of 3).",
	  "text": "Vermilion Archer Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_vermilionArcherArmor",
	  "klass": "armoire",
	  "index": "vermilionArcherArmor",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_armoire_ogreArmor": {
	  "con": 15,
	  "set": "ogre",
	  "notes": "This armor imitates an Ogre's tough skin, but it's lined with fleece for human comfort! Increases Constitution by 15. Enchanted Armoire: Ogre Outfit (Item 3 of 3).",
	  "text": "Ogre Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_ogreArmor",
	  "klass": "armoire",
	  "index": "ogreArmor",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_ironBlueArcherArmor": {
	  "str": 12,
	  "set": "blueArcher",
	  "notes": "This armor will protect you from flying arrows on the battlefield! Increases Strength by 12. Enchanted Armoire: Iron Archer Set (Item 2 of 3).",
	  "text": "Iron Blue Archer Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_ironBlueArcherArmor",
	  "klass": "armoire",
	  "index": "ironBlueArcherArmor",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_redPartyDress": {
	  "str": 7,
	  "con": 7,
	  "int": 7,
	  "set": "redHairbow",
	  "notes": "You're strong, tough, smart, and so fashionable! Increases Strength, Constitution, and Intelligence by 7 each. Enchanted Armoire: Red Hairbow Set (Item 2 of 2).",
	  "text": "Red Party Dress",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_redPartyDress",
	  "klass": "armoire",
	  "index": "redPartyDress",
	  "per": 0
	},
	"armor_armoire_woodElfArmor": {
	  "per": 12,
	  "set": "woodElf",
	  "notes": "This armor of bark and leaves will serve as durable camouflage in the forest. Increases Perception by 12. Enchanted Armoire: Wood Elf Set (Item 2 of 3).",
	  "text": "Wood Elf Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_woodElfArmor",
	  "klass": "armoire",
	  "index": "woodElfArmor",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_armoire_ramFleeceRobes": {
	  "con": 9,
	  "str": 7,
	  "set": "ramBarbarian",
	  "notes": "These robes keep you warm even through the fiercest blizzard. Increases Constitution by 9 and Strength by 7. Enchanted Armoire: Ram Barbarian Set (Item 2 of 3).",
	  "text": "Ram Fleece Robes",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_ramFleeceRobes",
	  "klass": "armoire",
	  "index": "ramFleeceRobes",
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_gownOfHearts": {
	  "con": 13,
	  "set": "queenOfHearts",
	  "notes": "This gown has all the frills! But that's not all, it will also increase your heart's fortitude. Increases Constitution by 13. Enchanted Armoire: Queen of Hearts Set (Item 2 of 3).",
	  "text": "Gown of Hearts",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_gownOfHearts",
	  "klass": "armoire",
	  "index": "gownOfHearts",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_mushroomDruidArmor": {
	  "con": 7,
	  "per": 8,
	  "set": "mushroomDruid",
	  "notes": "This woody brown armor, capped with tiny mushrooms, will help you hear the whispers of forest life. Increases Constitution by 7 and Perception by 8. Enchanted Armoire: Mushroom Druid Set (Item 2 of 3).",
	  "text": "Mushroom Druid Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_mushroomDruidArmor",
	  "klass": "armoire",
	  "index": "mushroomDruidArmor",
	  "str": 0,
	  "int": 0
	},
	"armor_armoire_greenFestivalYukata": {
	  "con": 8,
	  "per": 8,
	  "set": "festivalAttire",
	  "notes": "This fine lightweight yukata will keep you cool while you enjoy any festive occasion. Increases Constitution and Perception by 8 each. Enchanted Armoire: Festival Attire Set (Item 1 of 3).",
	  "text": "Green Festival Yukata",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_greenFestivalYukata",
	  "klass": "armoire",
	  "index": "greenFestivalYukata",
	  "str": 0,
	  "int": 0
	},
	"armor_armoire_merchantTunic": {
	  "per": 10,
	  "set": "merchant",
	  "notes": "The wide sleeves of this tunic are perfect for stashing the coins you've earned! Increases Perception by 10. Enchanted Armoire: Merchant Set (Item 2 of 3).",
	  "text": "Merchant Tunic",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_merchantTunic",
	  "klass": "armoire",
	  "index": "merchantTunic",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_armoire_vikingTunic": {
	  "con": 6,
	  "str": 8,
	  "set": "viking",
	  "notes": "This warm woolen tunic includes a cloak for extra coziness even in ocean gales. Increases Constitution by 6 and Strength by 8. Enchanted Armoire: Viking Set (Item 1 of 3).",
	  "text": "Viking Tunic",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_vikingTunic",
	  "klass": "armoire",
	  "index": "vikingTunic",
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_swanDancerTutu": {
	  "int": 8,
	  "str": 8,
	  "set": "swanDancer",
	  "notes": "You just might fly away into the air as you spin in this gorgeous feathered tutu. Increases Intelligence and Strength by 8 each. Enchanted Armoire: Swan Dancer Set (Item 2 of 3).",
	  "text": "Swan Dancer Tutu",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_swanDancerTutu",
	  "klass": "armoire",
	  "index": "swanDancerTutu",
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_yellowPartyDress": {
	  "per": 7,
	  "int": 7,
	  "str": 7,
	  "set": "yellowHairbow",
	  "notes": "You're perceptive, strong, smart, and so fashionable! Increases Perception, Strength, and Intelligence by 7 each. Enchanted Armoire: Yellow Hairbow Set (Item 2 of 2).",
	  "text": "Yellow Party Dress",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_yellowPartyDress",
	  "klass": "armoire",
	  "index": "yellowPartyDress",
	  "con": 0
	},
	"armor_armoire_antiProcrastinationArmor": {
	  "str": 15,
	  "set": "antiProcrastination",
	  "notes": "Infused with ancient productivity spells, this steel armor will give you extra strength to battle your tasks. Increases Strength by 15. Enchanted Armoire: Anti-Procrastination Set (Item 2 of 3).",
	  "text": "Anti-Procrastination Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_antiProcrastinationArmor",
	  "klass": "armoire",
	  "index": "antiProcrastinationArmor",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_farrierOutfit": {
	  "con": 6,
	  "int": 6,
	  "per": 6,
	  "set": "farrier",
	  "notes": "These sturdy work clothes can stand up to the messiest Stable. Increases Intelligence, Constitution, and Perception by 6 each. Enchanted Armoire: Farrier Set (Item 2 of 3).",
	  "text": "Farrier Outfit",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_farrierOutfit",
	  "klass": "armoire",
	  "index": "farrierOutfit",
	  "str": 0
	},
	"armor_armoire_candlestickMakerOutfit": {
	  "con": 12,
	  "set": "candlestickMaker",
	  "notes": "This sturdy set of clothes will protect you from hot wax spills as you ply your craft! Increases Constitution by 12. Enchanted Armoire: Candlestick Maker Set (Item 1 of 3).",
	  "text": "Candlestick Maker Outfit",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_candlestickMakerOutfit",
	  "klass": "armoire",
	  "index": "candlestickMakerOutfit",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_wovenRobes": {
	  "con": 8,
	  "int": 9,
	  "set": "weaver",
	  "notes": "Display your weaving work proudly by wearing this colorful robe! Increases Constitution by 8 and Intelligence by 9. Enchanted Armoire: Weaver Set (Item 1 of 3).",
	  "text": "Woven Robes",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_wovenRobes",
	  "klass": "armoire",
	  "index": "wovenRobes",
	  "str": 0,
	  "per": 0
	},
	"armor_armoire_lamplightersGreatcoat": {
	  "per": 14,
	  "set": "lamplighter",
	  "notes": "This heavy woolen coat can stand up to the harshest wintry night! Increases Perception by 14. Enchanted Armoire: Lamplighter's Set (Item 2 of 4).",
	  "text": "Lamplighter's Greatcoat",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_lamplightersGreatcoat",
	  "klass": "armoire",
	  "index": "lamplightersGreatcoat",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_armoire_coachDriverLivery": {
	  "str": 12,
	  "set": "coachDriver",
	  "notes": "This heavy overcoat will protect you from the weather as you drive. Plus it looks pretty snazzy, too! Increases Strength by 12. Enchanted Armoire: Coach Driver Set (Item 1 of 3).",
	  "text": "Coach Driver's Livery",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_coachDriverLivery",
	  "klass": "armoire",
	  "index": "coachDriverLivery",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_robeOfDiamonds": {
	  "per": 13,
	  "set": "kingOfDiamonds",
	  "notes": "These royal robes not only make you appear noble, they allow you to see the nobility within others. Increases Perception by 13. Enchanted Armoire: King of Diamonds Set (Item 1 of 4).",
	  "text": "Robe of Diamonds",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_robeOfDiamonds",
	  "klass": "armoire",
	  "index": "robeOfDiamonds",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_armoire_flutteryFrock": {
	  "con": 5,
	  "per": 5,
	  "str": 5,
	  "set": "fluttery",
	  "notes": "A light and airy gown with a wide skirt the butterflies might mistake for a giant blossom! Increases Constitution, Perception, and Strength by 5 each. Enchanted Armoire: Fluttery Frock Set (Item 1 of 4).",
	  "text": "Fluttery Frock",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_flutteryFrock",
	  "klass": "armoire",
	  "index": "flutteryFrock",
	  "int": 0
	},
	"armor_armoire_cobblersCoveralls": {
	  "per": 7,
	  "str": 7,
	  "set": "cobbler",
	  "notes": "These sturdy coveralls have lots of pockets for tools, leather scraps, and other useful items! Increases Perception and Strength by 7 each. Enchanted Armoire: Cobbler Set (Item 1 of 3).",
	  "text": "Cobbler's Coveralls",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_cobblersCoveralls",
	  "klass": "armoire",
	  "index": "cobblersCoveralls",
	  "int": 0,
	  "con": 0
	},
	"armor_armoire_glassblowersCoveralls": {
	  "con": 8,
	  "set": "glassblower",
	  "notes": "These coveralls will protect you while you're making masterpieces with hot molten glass. Increases Constitution by 8. Enchanted Armoire: Glassblower Set (Item 2 of 4).",
	  "text": "Glassblower's Coveralls",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_glassblowersCoveralls",
	  "klass": "armoire",
	  "index": "glassblowersCoveralls",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_bluePartyDress": {
	  "con": 7,
	  "per": 7,
	  "str": 7,
	  "set": "blueHairbow",
	  "notes": "You're perceptive, tough, smart, and so fashionable! Increases Perception, Strength, and Constitution by 7 each. Enchanted Armoire: Blue Hairbow Set (Item 2 of 2).",
	  "text": "Blue Party Dress",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_bluePartyDress",
	  "klass": "armoire",
	  "index": "bluePartyDress",
	  "int": 0
	},
	"armor_armoire_piraticalPrincessGown": {
	  "per": 7,
	  "set": "piraticalPrincess",
	  "notes": "This luxuriant garment has many pockets for concealing weapons and loot! Increases Perception by 7. Enchanted Armoire: Piratical Princess Set (Item 2 of 4).",
	  "text": "Piratical Princess Gown",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_piraticalPrincessGown",
	  "klass": "armoire",
	  "index": "piraticalPrincessGown",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_armoire_jeweledArcherArmor": {
	  "con": 15,
	  "set": "jeweledArcher",
	  "notes": "This finely crafted armor will protect you from projectiles or errant red Dailies! Increases Constitution by 15. Enchanted Armoire: Jeweled Archer Set (Item 2 of 3).",
	  "text": "Jeweled Archer Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_jeweledArcherArmor",
	  "klass": "armoire",
	  "index": "jeweledArcherArmor",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_coverallsOfBookbinding": {
	  "con": 10,
	  "per": 5,
	  "set": "bookbinder",
	  "notes": "Everything you need in a set of coveralls, including pockets for everything. A pair of goggles, loose change, a golden ring... Increases Constitution by 10 and Perception by 5. Enchanted Armoire: Bookbinder Set (Item 2 of 4).",
	  "text": "Coveralls of Bookbinding",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_coverallsOfBookbinding",
	  "klass": "armoire",
	  "index": "coverallsOfBookbinding",
	  "str": 0,
	  "int": 0
	},
	"armor_armoire_robeOfSpades": {
	  "str": 13,
	  "set": "aceOfSpades",
	  "notes": "These luxuriant robes conceal hidden pockets for treasures or weapons--your choice! Increases Strength by 13. Enchanted Armoire: Ace of Spades Set (Item 2 of 3).",
	  "text": "Robe of Spades",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_robeOfSpades",
	  "klass": "armoire",
	  "index": "robeOfSpades",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_softBlueSuit": {
	  "int": 10,
	  "per": 5,
	  "set": "blueLoungewear",
	  "notes": "Blue is a calming colour. So calming, some even wear this soft outfit to sleep... zZz. Increases Intelligence by 10 and Perception by 5. Enchanted Armoire: Blue Loungewear Set (Item 2 of 3).",
	  "text": "Soft Blue Suit",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_softBlueSuit",
	  "klass": "armoire",
	  "index": "softBlueSuit",
	  "str": 0,
	  "con": 0
	},
	"armor_armoire_softGreenSuit": {
	  "int": 7,
	  "con": 7,
	  "set": "greenLoungewear",
	  "notes": "Green is the most refreshing color! Ideal for resting those tired eyes... mmm, or even a nap... Increases Constitution and Intelligence by 7 each. Enchanted Armoire: Green Loungewear Set (Item 2 of 3).",
	  "text": "Soft Green Suit",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_softGreenSuit",
	  "klass": "armoire",
	  "index": "softGreenSuit",
	  "str": 0,
	  "per": 0
	},
	"armor_armoire_softRedSuit": {
	  "int": 8,
	  "str": 5,
	  "set": "redLoungewear",
	  "notes": "Red is such an invigorating color. If you need to wake up bright and early, this suit could make the perfect pajamas... Increases Intelligence by 8 and Strength by 5. Enchanted Armoire: Red Loungewear Set (Item 2 of 3).",
	  "text": "Soft Red Suit",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_softRedSuit",
	  "klass": "armoire",
	  "index": "softRedSuit",
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_scribesRobe": {
	  "int": 7,
	  "per": 7,
	  "set": "scribe",
	  "notes": "These velvety robes are woven with inspirational and motivational magic. Increases Perception and Intelligence by 7 each. Enchanted Armoire: Scribe Set (Item 1 of 3).",
	  "text": "Scribe's Robes",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_scribesRobe",
	  "klass": "armoire",
	  "index": "scribesRobe",
	  "str": 0,
	  "con": 0
	},
	"armor_armoire_chefsJacket": {
	  "int": 10,
	  "set": "chef",
	  "notes": "This thick cotton jacket is double-breasted to protect you from spills (and conveniently reversible…). Increases Intelligence by 10. Enchanted Armoire: Chef Set (Item 2 of 4).",
	  "text": "Chef's Jacket",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_chefsJacket",
	  "klass": "armoire",
	  "index": "chefsJacket",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_vernalVestment": {
	  "str": 6,
	  "int": 6,
	  "set": "vernalVestments",
	  "notes": "This silky garment is perfect for enjoying mild spring weather in style. Increases Strength and Intelligence by 6 each. Enchanted Armoire: Vernal Vestments Set (Item 2 of 3).",
	  "text": "Vernal Vestment",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_vernalVestment",
	  "klass": "armoire",
	  "index": "vernalVestment",
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_nephriteArmor": {
	  "str": 7,
	  "per": 6,
	  "set": "nephrite",
	  "notes": "Made from strong steel rings and decorated with jade, this armor will protect you from procrastination! Increases Strength by 7 and Perception by 6. Enchanted Armoire: Nephrite Archer Set (Item 3 of 3).",
	  "text": "Nephrite Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_nephriteArmor",
	  "klass": "armoire",
	  "index": "nephriteArmor",
	  "int": 0,
	  "con": 0
	},
	"armor_armoire_boatingJacket": {
	  "int": 6,
	  "per": 6,
	  "str": 6,
	  "set": "boating",
	  "notes": "Whether you're on a swanky yacht or in a jalopy, you'll be the cat's meow in this jacket and tie. Increases Strength, Intelligence, and Perception by 6 each. Enchanted Armoire: Boating Set (Item 1 of 3).",
	  "text": "Boating Jacket",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_boatingJacket",
	  "klass": "armoire",
	  "index": "boatingJacket",
	  "con": 0
	},
	"armor_armoire_astronomersRobe": {
	  "per": 8,
	  "con": 8,
	  "set": "astronomer",
	  "notes": "Turns out silk and starlight make a fabric that is not only magical, but very breathable. Increases Perception and Constitution by 8 each. Enchanted Armoire: Astronomer Mage Set (Item 1 of 3).",
	  "text": "Astronomer's Robe",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_astronomersRobe",
	  "klass": "armoire",
	  "index": "astronomersRobe",
	  "str": 0,
	  "int": 0
	},
	"armor_armoire_invernessCape": {
	  "per": 7,
	  "int": 7,
	  "set": "detective",
	  "notes": "This sturdy garment will let you search for clues in any type of weather. Increases Perception and Intelligence by 7 each. Enchanted Armoire: Detective Set (Item 2 of 4).",
	  "text": "Inverness Cape",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_invernessCape",
	  "klass": "armoire",
	  "index": "invernessCape",
	  "str": 0,
	  "con": 0
	},
	"armor_armoire_shadowMastersRobe": {
	  "con": 12,
	  "set": "shadowMaster",
	  "notes": "The fabric of this flowy robe is woven from the darkest shadows in the deepest caves of Habitica. Increases Constitution by 12. Enchanted Armoire: Shadow Master Set (Item 1 of 4).",
	  "text": "Shadow Master's Robe",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_shadowMastersRobe",
	  "klass": "armoire",
	  "index": "shadowMastersRobe",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_alchemistsRobe": {
	  "con": 8,
	  "per": 5,
	  "set": "alchemist",
	  "notes": "Any number of dangerous elixirs are involved in creating arcane metals and gems, and these heavy robes will protect you from harm and unintended side effects! Increases Constitution by 8 and Perception by 5. Enchanted Armoire: Alchemist Set (Item 1 of 4).",
	  "text": "Alchemist's Robe",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_alchemistsRobe",
	  "klass": "armoire",
	  "index": "alchemistsRobe",
	  "str": 0,
	  "int": 0
	},
	"armor_armoire_duffleCoat": {
	  "con": 7,
	  "per": 7,
	  "set": "duffle",
	  "notes": "Travel frosty realms in style with this cozy wool coat. Increases Constitution and Perception by 7 each. Enchanted Armoire: Duffle Coat Set (Item 1 of 2).",
	  "text": "Duffle Coat",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_duffleCoat",
	  "klass": "armoire",
	  "index": "duffleCoat",
	  "str": 0,
	  "int": 0
	},
	"armor_armoire_layerCakeArmor": {
	  "con": 13,
	  "set": "birthday",
	  "notes": "It's protective and tasty! Increases Constitution by 13. Enchanted Armoire: Happy Birthday Set (Item 2 of 4).",
	  "text": "Layer Cake Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_layerCakeArmor",
	  "klass": "armoire",
	  "index": "layerCakeArmor",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_matchMakersApron": {
	  "con": 7,
	  "str": 7,
	  "int": 7,
	  "set": "matchMaker",
	  "notes": "This apron is for safety, but for humor's sake we can make light of it. Increases Constitution, Strength, and Intelligence by 7 each. Enchanted Armoire: Match Maker Set (Item 1 of 4).",
	  "text": "Match Maker's Apron",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_matchMakersApron",
	  "klass": "armoire",
	  "index": "matchMakersApron",
	  "per": 0
	},
	"armor_armoire_baseballUniform": {
	  "con": 10,
	  "str": 10,
	  "set": "baseball",
	  "notes": "Pinstripes never go out of style. Increases Constitution and Strength by 10 each. Enchanted Armoire: Baseball Set (Item 2 of 4).",
	  "text": "Baseball Uniform",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_baseballUniform",
	  "klass": "armoire",
	  "index": "baseballUniform",
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_boxArmor": {
	  "per": 5,
	  "con": 5,
	  "set": "paperKnight",
	  "notes": "Box Armor: It fits, therefore you sits... uh, therefore you wear it into battle, like the bold knight you are! Increases Perception and Constitution by 5 each. Enchanted Armoire: Paper Knight Set (Item 3 of 3).",
	  "text": "Box Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_boxArmor",
	  "klass": "armoire",
	  "index": "boxArmor",
	  "str": 0,
	  "int": 0
	},
	"armor_armoire_fiddlersCoat": {
	  "con": 6,
	  "set": "fiddler",
	  "notes": "A practical outfit to give you plenty of room to move! Increases Constitution by 6. Enchanted Armoire: Fiddler Set (Item 2 of 4).",
	  "text": "Fiddler's Coat",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_fiddlersCoat",
	  "klass": "armoire",
	  "index": "fiddlersCoat",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_pirateOutfit": {
	  "con": 4,
	  "int": 4,
	  "set": "pirate",
	  "notes": "Avast, ye landlubbers! The perfect outfit for swabbing the deck and counting your spoils. Increases Constitution and Intelligence by 4 each. Enchanted Armoire: Pirate Set (Item 2 of 3).",
	  "text": "Pirate Outfit",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_pirateOutfit",
	  "klass": "armoire",
	  "index": "pirateOutfit",
	  "str": 0,
	  "per": 0
	},
	"armor_armoire_heroicHerbalistRobe": {
	  "con": 7,
	  "int": 7,
	  "set": "herbalist",
	  "notes": "Always smells pleasantly of all kinds of herbs. Increases Constitution and Intelligence by 7 each. Enchanted Armoire: Heroic Herbalist Set (Item 1 of 3).",
	  "text": "Heroic Herbalist Robe",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_heroicHerbalistRobe",
	  "klass": "armoire",
	  "index": "heroicHerbalistRobe",
	  "str": 0,
	  "per": 0
	},
	"armor_armoire_guardiansGown": {
	  "int": 7,
	  "set": "grazerGuardian",
	  "notes": "A lovely rustic gown, with surprisingly sturdy seams! Increases Intelligence by 7. Enchanted Armoire: Guardian of the Grazers Set (Item 3 of 3).",
	  "text": "Guardian's Gown",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_guardiansGown",
	  "klass": "armoire",
	  "index": "guardiansGown",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_autumnEnchantersCloak": {
	  "int": 12,
	  "set": "autumnEnchanter",
	  "notes": "A sorcerer as skilled as you needs to look as powerful as they feel. Increases Intelligence by 12. Enchanted Armoire: Autumn Enchanter Set (Item 2 of 4).",
	  "text": "Autumn Enchanter's Cloak",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_autumnEnchantersCloak",
	  "klass": "armoire",
	  "index": "autumnEnchantersCloak",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_doubletOfClubs": {
	  "con": 10,
	  "set": "jackOfClubs",
	  "notes": "Who knows what's in the cards, but you'll look stylish at any event in this doublet and cape! Increases Constitution by 10. Enchanted Armoire: Jack of Clubs Set (Item 3 of 3).",
	  "text": "Doublet Of Clubs",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_doubletOfClubs",
	  "klass": "armoire",
	  "index": "doubletOfClubs",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_dressingGown": {
	  "con": 12,
	  "set": "dressingGown",
	  "notes": "Relax in style with this beautiful traditional dressing gown. Increases Constitution by 12. Enchanted Armoire: Dressing Gown Set (Item 1 of 3).",
	  "text": "Comfy Dressing Gown",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_dressingGown",
	  "klass": "armoire",
	  "index": "dressingGown",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_blueMoonShozoku": {
	  "con": 8,
	  "set": "blueMoon",
	  "notes": "A strange serenity surrounds the wearer of this armor. Increases Constitution by 8. Enchanted Armoire: Blue Moon Rogue Set (item 4 of 4).",
	  "text": "Blue Moon Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_blueMoonShozoku",
	  "klass": "armoire",
	  "index": "blueMoonShozoku",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_softPinkSuit": {
	  "per": 12,
	  "set": "pinkLoungewear",
	  "notes": "Pink is a soothing color. Slip into this loungewear set for a bit of peace during the daily grind! Increases Perception by 12. Enchanted Armoire: Pink Loungewear Set (item 2 of 3).",
	  "text": "Soft Pink Suit",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_softPinkSuit",
	  "klass": "armoire",
	  "index": "softPinkSuit",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_armoire_jadeArmor": {
	  "per": 8,
	  "set": "jadeWarrior",
	  "notes": "This jade armor is both beautiful and functional. Protect yourself, and know that you look fabulous! Increases Perception by 8. Enchanted Armoire: Jade Warrior Set (Item 2 of 3).",
	  "text": "Jade Armor",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_jadeArmor",
	  "klass": "armoire",
	  "index": "jadeArmor",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_armoire_clownsMotley": {
	  "str": 7,
	  "set": "clown",
	  "notes": "The clothes fit beautifully, but filling these shoes is no small feat. Increases Strength by 7. Enchanted Armoire: Clown Set (Item 1 of 5).",
	  "text": "Clown's Motley",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_clownsMotley",
	  "klass": "armoire",
	  "index": "clownsMotley",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_medievalLaundryOutfit": {
	  "con": 6,
	  "set": "medievalLaunderers",
	  "notes": "Put on your working clothes and roll up your sleeves: it's time to get the laundry done! Increases Constitution by 6. Enchanted Armoire: Medieval Launderers Set (Item 1 of 6).",
	  "text": "Laundry Outfit",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_medievalLaundryOutfit",
	  "klass": "armoire",
	  "index": "medievalLaundryOutfit",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_medievalLaundryDress": {
	  "con": 6,
	  "set": "medievalLaunderers",
	  "notes": "Put on your apron and roll up your sleeves: it's time to get the laundry done! Increases Constitution by 6. Enchanted Armoire: Medieval Launderers Set (Item 2 of 6).",
	  "text": "Laundry Dress",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_medievalLaundryDress",
	  "klass": "armoire",
	  "index": "medievalLaundryDress",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_bathtub": {
	  "con": 8,
	  "set": "bath",
	  "notes": "Time for a little R&R? Here's your own personal bathtub -- and a guarantee that the water is always the right temperature! Increases Constitution by 8. Enchanted Armoire: Bubble Bath Set (Item 2 of 4).",
	  "text": "Bathtub",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_bathtub",
	  "klass": "armoire",
	  "index": "bathtub",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_bagpipersKilt": {
	  "con": 6,
	  "set": "bonnieBagpiper",
	  "notes": "A good sturdy kilt will serve you well. Increases Constitution by 6. Enchanted Armoire: Bagpiper Set (Item 2 of 3).",
	  "text": "Bagpiper's Kilt",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_bagpipersKilt",
	  "klass": "armoire",
	  "index": "bagpipersKilt",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_heraldsTunic": {
	  "con": 6,
	  "set": "herald",
	  "notes": "Get ready to spread good news far and wide in this colorful, royal outfit. Increases Constitution by 6. Enchanted Armoire: Herald Set (Item 1 of 4).",
	  "text": "Herald's Tunic",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_heraldsTunic",
	  "klass": "armoire",
	  "index": "heraldsTunic",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_softBlackSuit": {
	  "con": 7,
	  "per": 7,
	  "set": "blackLoungewear",
	  "notes": "Black is a mysterious colour. It’s sure to inspire the most interesting dreams. Increases Constitution and Perception by 7 each. Enchanted Armoire: Black Loungewear Set (Item 2 of 3).",
	  "text": "Soft Black Suit",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_softBlackSuit",
	  "klass": "armoire",
	  "index": "softBlackSuit",
	  "str": 0,
	  "int": 0
	},
	"armor_armoire_shootingStarCostume": {
	  "con": 10,
	  "set": "shootingStar",
	  "notes": "Rumored to have been spun out of the night sky itself, this flowy gown lets you rise above all obstacles in your path. Increases Constitution by 10. Enchanted Armoire: Stardust Set (Item 2 of 3).",
	  "text": "Star Gown",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_shootingStarCostume",
	  "klass": "armoire",
	  "index": "shootingStarCostume",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_softVioletSuit": {
	  "con": 7,
	  "str": 7,
	  "set": "violetLoungewear",
	  "notes": "Purple is a luxurious color. Relax in style after you’ve accomplished all your daily tasks. Increases Constitution and Strength by 7 each. Enchanted Armoire: Violet Loungewear Set (Item 2 of 3).",
	  "text": "Soft Violet Suit",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_softVioletSuit",
	  "klass": "armoire",
	  "index": "softVioletSuit",
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_gardenersOveralls": {
	  "con": 7,
	  "set": "gardenerSet",
	  "notes": "Don’t be afraid to work down in the dirt when you’re wearing these durable overalls. Increases Constitution by 7. Enchanted Armoire: Gardener Set (Item 1 of 4).",
	  "text": "Gardener's Overalls",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_gardenersOveralls",
	  "klass": "armoire",
	  "index": "gardenersOveralls",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_strawRaincoat": {
	  "con": 9,
	  "set": "strawRaincoat",
	  "notes": "This woven straw cape will keep you dry and your armor from rusting while on your quest. Just don’t venture too near a candle! Increases Constitution by 9. Enchanted Armoire: Straw Raincoat Set (Item 1 of 2).",
	  "text": "Straw Raincoat",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_strawRaincoat",
	  "klass": "armoire",
	  "index": "strawRaincoat",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_fancyPirateSuit": {
	  "con": 4,
	  "int": 4,
	  "set": "fancyPirate",
	  "notes": "Wear this fine jacket well as you organize your ship’s library or talk it through as a crew. Increases Constitution and Intelligence by 4 each. Enchanted Armoire: Fancy Pirate Set (Item 1 of 3).",
	  "text": "Fancy Pirate Jacket",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_fancyPirateSuit",
	  "klass": "armoire",
	  "index": "fancyPirateSuit",
	  "str": 0,
	  "per": 0
	},
	"armor_armoire_sheetGhostCostume": {
	  "con": 10,
	  "notes": "Boo! This is the scariest costume in all of Habitica, so wear it wisely... and watch your step so you don’t trip. Increases Constitution by 10. Enchanted Armoire: Independent Item.",
	  "text": "Sheet Ghost Costume",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_sheetGhostCostume",
	  "set": "armoire-sheetGhostCostume",
	  "klass": "armoire",
	  "index": "sheetGhostCostume",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_jewelersApron": {
	  "int": 10,
	  "set": "jewelers",
	  "notes": "This heavy-duty apron is just the thing to wear when you feel creative. Best of all, there are dozens of small pockets to hold everything you need. Increases Intelligence by 10. Enchanted Armoire: Jeweler Set (Item 1 of 4).",
	  "text": "Jeweler's Apron",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_jewelersApron",
	  "klass": "armoire",
	  "index": "jewelersApron",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_shawlCollarCoat": {
	  "con": 8,
	  "notes": "A wise wizard once said there’s nothing better than being both cozy and productive! Wear this warm and stylish coat as you conquer the year’s challenges. Increases Constitution by 8. Enchanted Armoire: Independent Item.",
	  "text": "Shawl-Collar Coat",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_shawlCollarCoat",
	  "set": "armoire-shawlCollarCoat",
	  "klass": "armoire",
	  "index": "shawlCollarCoat",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_teaGown": {
	  "str": 5,
	  "int": 5,
	  "set": "teaParty",
	  "notes": "You’re resilient, creative, brilliant, and so fashionable! Increases Strength and Intelligence by 5 each. Enchanted Armoire: Tea Party Set (Item 1 of 3).",
	  "text": "Tea Party Gown",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_teaGown",
	  "klass": "armoire",
	  "index": "teaGown",
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_basketballUniform": {
	  "per": 10,
	  "set": "oldTimeyBasketball",
	  "notes": "Wondering what’s printed on the back of this uniform? It’s your lucky number, of course! Increases Perception by . Enchanted Armoire: Old Timey Basketball Set (Item 1 of 2).",
	  "text": "Basketball Uniform",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_basketballUniform",
	  "klass": "armoire",
	  "index": "basketballUniform",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"armor_armoire_paintersApron": {
	  "con": 10,
	  "set": "painters",
	  "notes": "This apron can protect your clothes from paint and your creative projects from harsh critiques. Increases Constitution by 10. Enchanted Armoire: Painter Set (Item 1 of 4).",
	  "text": "Painter's Apron",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_paintersApron",
	  "klass": "armoire",
	  "index": "paintersApron",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_stripedRainbowShirt": {
	  "str": 7,
	  "int": 7,
	  "set": "rainbow",
	  "notes": "The colors of the rainbow have never looked so good before. Be bold! Increases Strength and Intelligence by 7 each. Enchanted Armoire: Rainbow Set (Item 1 of 2).",
	  "text": "Striped Rainbow Shirt",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_stripedRainbowShirt",
	  "klass": "armoire",
	  "index": "stripedRainbowShirt",
	  "per": 0,
	  "con": 0
	},
	"armor_armoire_diagonalRainbowShirt": {
	  "con": 7,
	  "per": 7,
	  "set": "rainbow",
	  "notes": "A splash of color with a dash of style. Be joyful! Increases Constitution and Perception by 7 each. Enchanted Armoire: Rainbow Set (Item 2 of 2).",
	  "text": "Diagonal Rainbow Shirt",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_diagonalRainbowShirt",
	  "klass": "armoire",
	  "index": "diagonalRainbowShirt",
	  "str": 0,
	  "int": 0
	},
	"armor_armoire_admiralsUniform": {
	  "con": 7,
	  "str": 7,
	  "set": "admiralsSet",
	  "notes": "We salute you! This naval uniform signals that you’re ready to take command of your tasks as well as a ship. Increases Constitution and Strength by 7 each. Enchanted Armoire: Admiral’s Set (Item 2 of 2).",
	  "text": "Admiral's Uniform",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_admiralsUniform",
	  "klass": "armoire",
	  "index": "admiralsUniform",
	  "int": 0,
	  "per": 0
	},
	"armor_armoire_karateGi": {
	  "str": 10,
	  "set": "karateSet",
	  "notes": "This lightweight karate uniform is perfect for practice or competition. Increases Strength by 10. Enchanted Armoire: Karate Set (Item 1 of 10).",
	  "text": "Karate Gi",
	  "value": 100,
	  "type": "armor",
	  "key": "armor_armoire_karateGi",
	  "klass": "armoire",
	  "index": "karateGi",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_warrior_1": {
	  "text": "Leather Helm",
	  "notes": "Cap of sturdy boiled hide. Increases Strength by 2.",
	  "str": 2,
	  "value": 15,
	  "type": "head",
	  "key": "head_warrior_1",
	  "set": "warrior-1",
	  "klass": "warrior",
	  "index": "1",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_warrior_2": {
	  "text": "Chain Coif",
	  "notes": "Hood of interlocked metal rings. Increases Strength by 4.",
	  "str": 4,
	  "value": 25,
	  "type": "head",
	  "key": "head_warrior_2",
	  "set": "warrior-2",
	  "klass": "warrior",
	  "index": "2",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_warrior_3": {
	  "text": "Plate Helm",
	  "notes": "Thick steel helmet, proof against any blow. Increases Strength by 6.",
	  "str": 6,
	  "value": 40,
	  "type": "head",
	  "key": "head_warrior_3",
	  "set": "warrior-3",
	  "klass": "warrior",
	  "index": "3",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_warrior_4": {
	  "text": "Red Helm",
	  "notes": "Set with rubies for power, and glows when the wearer is angered. Increases Strength by 9.",
	  "str": 9,
	  "value": 60,
	  "type": "head",
	  "key": "head_warrior_4",
	  "set": "warrior-4",
	  "klass": "warrior",
	  "index": "4",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_warrior_5": {
	  "text": "Golden Helm",
	  "notes": "Regal crown bound to shining armor. Increases Strength by 12.",
	  "str": 12,
	  "value": 80,
	  "last": true,
	  "type": "head",
	  "key": "head_warrior_5",
	  "set": "warrior-5",
	  "klass": "warrior",
	  "index": "5",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_rogue_1": {
	  "text": "Leather Hood",
	  "notes": "Basic protective cowl. Increases Perception by 2.",
	  "per": 2,
	  "value": 15,
	  "type": "head",
	  "key": "head_rogue_1",
	  "set": "rogue-1",
	  "klass": "rogue",
	  "index": "1",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_rogue_2": {
	  "text": "Black Leather Hood",
	  "notes": "Useful for both defense and disguise. Increases Perception by 4.",
	  "per": 4,
	  "value": 25,
	  "type": "head",
	  "key": "head_rogue_2",
	  "set": "rogue-2",
	  "klass": "rogue",
	  "index": "2",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_rogue_3": {
	  "text": "Camouflage Hood",
	  "notes": "Rugged, but doesn't impede hearing. Increases Perception by 6.",
	  "per": 6,
	  "value": 40,
	  "type": "head",
	  "key": "head_rogue_3",
	  "set": "rogue-3",
	  "klass": "rogue",
	  "index": "3",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_rogue_4": {
	  "text": "Penumbral Hood",
	  "notes": "Grants perfect vision in darkness. Increases Perception by 9.",
	  "per": 9,
	  "value": 60,
	  "type": "head",
	  "key": "head_rogue_4",
	  "set": "rogue-4",
	  "klass": "rogue",
	  "index": "4",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_rogue_5": {
	  "text": "Umbral Hood",
	  "notes": "Conceals even thoughts from those who would probe them. Increases Perception by 12.",
	  "per": 12,
	  "value": 80,
	  "last": true,
	  "type": "head",
	  "key": "head_rogue_5",
	  "set": "rogue-5",
	  "klass": "rogue",
	  "index": "5",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_healer_1": {
	  "text": "Quartz Circlet",
	  "notes": "Jeweled headpiece, for focus on the task at hand. Increases Intelligence by 2.",
	  "int": 2,
	  "value": 15,
	  "type": "head",
	  "key": "head_healer_1",
	  "set": "healer-1",
	  "klass": "healer",
	  "index": "1",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_healer_2": {
	  "text": "Amethyst Circlet",
	  "notes": "A taste of luxury for a humble profession. Increases Intelligence by 3.",
	  "int": 3,
	  "value": 25,
	  "type": "head",
	  "key": "head_healer_2",
	  "set": "healer-2",
	  "klass": "healer",
	  "index": "2",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_healer_3": {
	  "text": "Sapphire Circlet",
	  "notes": "Shines to let sufferers know their salvation is at hand. Increases Intelligence by 5.",
	  "int": 5,
	  "value": 40,
	  "type": "head",
	  "key": "head_healer_3",
	  "set": "healer-3",
	  "klass": "healer",
	  "index": "3",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_healer_4": {
	  "text": "Emerald Diadem",
	  "notes": "Emits an aura of life and growth. Increases Intelligence by 7.",
	  "int": 7,
	  "value": 60,
	  "type": "head",
	  "key": "head_healer_4",
	  "set": "healer-4",
	  "klass": "healer",
	  "index": "4",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_healer_5": {
	  "text": "Royal Diadem",
	  "notes": "For king, queen, or miracle-worker. Increases Intelligence by 9.",
	  "int": 9,
	  "value": 80,
	  "last": true,
	  "type": "head",
	  "key": "head_healer_5",
	  "set": "healer-5",
	  "klass": "healer",
	  "index": "5",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_wizard_1": {
	  "text": "Magician Hat",
	  "notes": "Simple, comfortable, and fashionable. Increases Perception by 2.",
	  "per": 2,
	  "value": 15,
	  "type": "head",
	  "key": "head_wizard_1",
	  "set": "wizard-1",
	  "klass": "wizard",
	  "index": "1",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_wizard_2": {
	  "text": "Cornuthaum",
	  "notes": "Traditional headgear of the itinerant wizard. Increases Perception by 3.",
	  "per": 3,
	  "value": 25,
	  "type": "head",
	  "key": "head_wizard_2",
	  "set": "wizard-2",
	  "klass": "wizard",
	  "index": "2",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_wizard_3": {
	  "text": "Astrologer Hat",
	  "notes": "Adorned with the rings of Saturn. Increases Perception by 5.",
	  "per": 5,
	  "value": 40,
	  "type": "head",
	  "key": "head_wizard_3",
	  "set": "wizard-3",
	  "klass": "wizard",
	  "index": "3",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_wizard_4": {
	  "text": "Archmage Hat",
	  "notes": "Focuses the mind for intensive spellcasting. Increases Perception by 7.",
	  "per": 7,
	  "value": 60,
	  "type": "head",
	  "key": "head_wizard_4",
	  "set": "wizard-4",
	  "klass": "wizard",
	  "index": "4",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_wizard_5": {
	  "text": "Royal Magus Hat",
	  "notes": "Shows authority over fortune, weather, and lesser mages. Increases Perception by 10.",
	  "per": 10,
	  "value": 80,
	  "last": true,
	  "type": "head",
	  "key": "head_wizard_5",
	  "set": "wizard-5",
	  "klass": "wizard",
	  "index": "5",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_base_0": {
	  "text": "No Headgear",
	  "notes": "No headgear.",
	  "value": 0,
	  "type": "head",
	  "key": "head_base_0",
	  "set": "base-0",
	  "klass": "base",
	  "index": "0",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_0": {
	  "text": "Shade Helm",
	  "notes": "Blood and ash, lava and obsidian give this helm its imagery and power. Increases Intelligence by 20.",
	  "int": 20,
	  "value": 150,
	  "type": "head",
	  "key": "head_special_0",
	  "set": "special-0",
	  "klass": "special",
	  "index": "0",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_1": {
	  "text": "Crystal Helm",
	  "notes": "The favored crown of those who lead by example. Increases all Stats by 6.",
	  "con": 6,
	  "str": 6,
	  "per": 6,
	  "int": 6,
	  "value": 170,
	  "type": "head",
	  "key": "head_special_1",
	  "set": "special-1",
	  "klass": "special",
	  "index": "1"
	},
	"head_special_2": {
	  "text": "Nameless Helm",
	  "notes": "A testament to those who gave of themselves while asking nothing in return. Increases Intelligence and Strength by 25 each.",
	  "int": 25,
	  "str": 25,
	  "value": 200,
	  "type": "head",
	  "key": "head_special_2",
	  "set": "special-2",
	  "klass": "special",
	  "index": "2",
	  "per": 0,
	  "con": 0
	},
	"head_special_takeThis": {
	  "text": "Take This Helm",
	  "notes": "This helm was earned by participating in a sponsored Challenge made by Take This. Congratulations! Increases all Stats by 5.",
	  "value": 0,
	  "con": 5,
	  "int": 5,
	  "per": 5,
	  "str": 5,
	  "type": "head",
	  "key": "head_special_takeThis",
	  "set": "special-takeThis",
	  "klass": "special",
	  "index": "takeThis"
	},
	"head_special_fireCoralCirclet": {
	  "text": "Fire Coral Circlet",
	  "notes": "This circlet, designed by Habitica's greatest alchemists, allows you to breathe water and dive for treasure! Increases Perception by 15.",
	  "per": 15,
	  "value": 130,
	  "type": "head",
	  "key": "head_special_fireCoralCirclet",
	  "set": "special-fireCoralCirclet",
	  "klass": "special",
	  "index": "fireCoralCirclet",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_pyromancersTurban": {
	  "text": "Pyromancer's Turban",
	  "notes": "This magical turban will help you breathe even in the thickest smoke! Plus it's extremely cozy! Increases Strength by 15.",
	  "str": 15,
	  "value": 130,
	  "type": "head",
	  "key": "head_special_pyromancersTurban",
	  "set": "special-pyromancersTurban",
	  "klass": "special",
	  "index": "pyromancersTurban",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_bardHat": {
	  "text": "Bardic Cap",
	  "notes": "Stick a feather in your cap and call it \"productivity\"! Increases Intelligence by 3.",
	  "int": 3,
	  "value": 0,
	  "type": "head",
	  "key": "head_special_bardHat",
	  "set": "special-bardHat",
	  "klass": "special",
	  "index": "bardHat",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_lunarWarriorHelm": {
	  "text": "Lunar Warrior Helm",
	  "notes": "The power of the moon will strengthen you in battle! Increases Strength and Intelligence by 7 each.",
	  "int": 7,
	  "str": 7,
	  "value": 130,
	  "type": "head",
	  "key": "head_special_lunarWarriorHelm",
	  "set": "special-lunarWarriorHelm",
	  "klass": "special",
	  "index": "lunarWarriorHelm",
	  "per": 0,
	  "con": 0
	},
	"head_special_mammothRiderHelm": {
	  "text": "Mammoth Rider Helm",
	  "notes": "Don't let its fluffiness fool you--this hat will grant you piercing powers of perception! Increases Perception by 15.",
	  "per": 15,
	  "value": 130,
	  "type": "head",
	  "key": "head_special_mammothRiderHelm",
	  "set": "special-mammothRiderHelm",
	  "klass": "special",
	  "index": "mammothRiderHelm",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_roguishRainbowMessengerHood": {
	  "text": "Roguish Rainbow Messenger Hood",
	  "notes": "This bright hood emits a colorful glow that will protect you from unpleasant weather! Increases Constitution by 15.",
	  "con": 15,
	  "value": 130,
	  "type": "head",
	  "key": "head_special_roguishRainbowMessengerHood",
	  "set": "special-roguishRainbowMessengerHood",
	  "klass": "special",
	  "index": "roguishRainbowMessengerHood",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"head_special_pageHelm": {
	  "text": "Page Helm",
	  "notes": "Chainmail: for the stylish AND the practical. Increases Perception by 16.",
	  "per": 16,
	  "value": 0,
	  "type": "head",
	  "key": "head_special_pageHelm",
	  "set": "special-pageHelm",
	  "klass": "special",
	  "index": "pageHelm",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_clandestineCowl": {
	  "text": "Clandestine Cowl",
	  "notes": "Take care to conceal your face as you rob your Tasks of gold and loot! Increases Perception by 16.",
	  "per": 16,
	  "value": 0,
	  "type": "head",
	  "key": "head_special_clandestineCowl",
	  "set": "special-clandestineCowl",
	  "klass": "special",
	  "index": "clandestineCowl",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_snowSovereignCrown": {
	  "text": "Snow Sovereign Crown",
	  "notes": "The jewels in this crown sparkle like new-fallen snowflakes. Increases Constitution by 16.",
	  "con": 16,
	  "value": 0,
	  "type": "head",
	  "key": "head_special_snowSovereignCrown",
	  "set": "special-snowSovereignCrown",
	  "klass": "special",
	  "index": "snowSovereignCrown",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"head_special_spikedHelm": {
	  "text": "Spiked Helm",
	  "notes": "You'll be well protected from stray Dailies and bad Habits with this functional (and neat-looking!) helm. Increases Strength by 16.",
	  "str": 16,
	  "value": 0,
	  "type": "head",
	  "key": "head_special_spikedHelm",
	  "set": "special-spikedHelm",
	  "klass": "special",
	  "index": "spikedHelm",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_dandyHat": {
	  "text": "Dandy Hat",
	  "notes": "What a merry chapeau! You'll look quite fine enjoying a stroll in it. Increases Constitution by 17.",
	  "con": 17,
	  "value": 0,
	  "type": "head",
	  "key": "head_special_dandyHat",
	  "set": "special-dandyHat",
	  "klass": "special",
	  "index": "dandyHat",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"head_special_kabuto": {
	  "text": "Kabuto",
	  "notes": "This helm is functional and beautiful! Your enemies will become distracted admiring it. Increases Intelligence by 17.",
	  "int": 17,
	  "value": 0,
	  "type": "head",
	  "key": "head_special_kabuto",
	  "set": "special-kabuto",
	  "klass": "special",
	  "index": "kabuto",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_nye": {
	  "text": "Absurd Party Hat",
	  "notes": "You've received an Absurd Party Hat! Wear it with pride while ringing in the New Year! Confers no benefit.",
	  "value": 0,
	  "type": "head",
	  "key": "head_special_nye",
	  "set": "special-nye",
	  "klass": "special",
	  "index": "nye",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_turkeyHelmBase": {
	  "text": "Turkey Helm",
	  "notes": "Your Turkey Day look will be complete when you don this beaked helm! Confers no benefit.",
	  "value": 0,
	  "type": "head",
	  "key": "head_special_turkeyHelmBase",
	  "set": "special-turkeyHelmBase",
	  "klass": "special",
	  "index": "turkeyHelmBase",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_yeti": {
	  "specialClass": "warrior",
	  "set": "yetiSet",
	  "text": "Yeti-Tamer Helm",
	  "notes": "An adorably fearsome hat. Increases Strength by 9. Limited Edition 2013-2014 Winter Gear.",
	  "str": 9,
	  "value": 60,
	  "type": "head",
	  "key": "head_special_yeti",
	  "klass": "special",
	  "index": "yeti",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_ski": {
	  "specialClass": "rogue",
	  "set": "skiSet",
	  "text": "Ski-sassin Helm",
	  "notes": "Keeps the wearer's identity secret... and their face toasty. Increases Perception by 9. Limited Edition 2013-2014 Winter Gear.",
	  "per": 9,
	  "value": 60,
	  "type": "head",
	  "key": "head_special_ski",
	  "klass": "special",
	  "index": "ski",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_candycane": {
	  "specialClass": "wizard",
	  "set": "candycaneSet",
	  "text": "Candy Cane Hat",
	  "notes": "This is the most delicious hat in the world. It's also known to appear and disappear mysteriously. Increases Perception by 7. Limited Edition 2013-2014 Winter Gear.",
	  "per": 7,
	  "value": 60,
	  "type": "head",
	  "key": "head_special_candycane",
	  "klass": "special",
	  "index": "candycane",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_snowflake": {
	  "specialClass": "healer",
	  "set": "snowflakeSet",
	  "text": "Snowflake Crown",
	  "notes": "The wearer of this crown is never cold. Increases Intelligence by 7. Limited Edition 2013-2014 Winter Gear.",
	  "int": 7,
	  "value": 60,
	  "type": "head",
	  "key": "head_special_snowflake",
	  "klass": "special",
	  "index": "snowflake",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_springRogue": {
	  "set": "stealthyKittySet",
	  "event": {
		"start": "2014-03-21",
		"end": "2014-05-01",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Stealthy Kitty Mask",
	  "notes": "Nobody will EVER guess that you are a cat burglar! Increases Perception by 9. Limited Edition 2014 Spring Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_springRogue",
	  "klass": "special",
	  "index": "springRogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_springWarrior": {
	  "set": "mightyBunnySet",
	  "event": {
		"start": "2014-03-21",
		"end": "2014-05-01",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Clover-steel Helmet",
	  "notes": "Welded from sweet meadow clover, this helmet can resist even the mightiest blow. Increases Strength by 9. Limited Edition 2014 Spring Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_springWarrior",
	  "klass": "special",
	  "index": "springWarrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_springMage": {
	  "set": "magicMouseSet",
	  "event": {
		"start": "2014-03-21",
		"end": "2014-05-01",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Swiss Cheese Hat",
	  "notes": "This hat stores lots of powerful magic! Try not to nibble it. Increases Perception by 7. Limited Edition 2014 Spring Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_springMage",
	  "klass": "special",
	  "index": "springMage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_springHealer": {
	  "set": "lovingPupSet",
	  "event": {
		"start": "2014-03-21",
		"end": "2014-05-01",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Crown of Friendship",
	  "notes": "This crown symbolizes loyalty and companionship. A dog is an adventurer's best friend, after all! Increases Intelligence by 7. Limited Edition 2014 Spring Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_springHealer",
	  "klass": "special",
	  "index": "springHealer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summerRogue": {
	  "set": "roguishPirateSet",
	  "event": {
		"start": "2014-06-20",
		"end": "2014-08-01",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Pirate Hat",
	  "notes": "Only the most productive of pirates can wear this fine hat. Increases Perception by 9. Limited Edition 2014 Summer Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_summerRogue",
	  "klass": "special",
	  "index": "summerRogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summerWarrior": {
	  "set": "daringSwashbucklerSet",
	  "event": {
		"start": "2014-06-20",
		"end": "2014-08-01",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Swashbuckler Bandana",
	  "notes": "This soft, salty cloth fills its wearer with strength. Increases Strength by 9. Limited Edition 2014 Summer Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_summerWarrior",
	  "klass": "special",
	  "index": "summerWarrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summerMage": {
	  "set": "emeraldMermageSet",
	  "event": {
		"start": "2014-06-20",
		"end": "2014-08-01",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Kelp-Wrapped Hat",
	  "notes": "What could be more magical than a hat wrapped in seaweed? Increases Perception by 7. Limited Edition 2014 Summer Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_summerMage",
	  "klass": "special",
	  "index": "summerMage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summerHealer": {
	  "set": "reefSeahealerSet",
	  "event": {
		"start": "2014-06-20",
		"end": "2014-08-01",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Coral Crown",
	  "notes": "Enables its wearer to heal damaged reefs. Increases Intelligence by 7. Limited Edition 2014 Summer Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_summerHealer",
	  "klass": "special",
	  "index": "summerHealer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fallRogue": {
	  "set": "vampireSmiterSet",
	  "event": {
		"start": "2014-09-21",
		"end": "2014-11-01",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Bloodred Hood",
	  "notes": "A Vampire Smiter's identity must always be hidden. Increases Perception by 9. Limited Edition 2014 Autumn Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_fallRogue",
	  "klass": "special",
	  "index": "fallRogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fallWarrior": {
	  "set": "monsterOfScienceSet",
	  "event": {
		"start": "2014-09-21",
		"end": "2014-11-01",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Monster Scalp of Science",
	  "notes": "Graft on this helm! It's only SLIGHTLY used. Increases Strength by 9. Limited Edition 2014 Autumn Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_fallWarrior",
	  "klass": "special",
	  "index": "fallWarrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fallMage": {
	  "set": "witchyWizardSet",
	  "event": {
		"start": "2014-09-21",
		"end": "2014-11-01",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Pointy Hat",
	  "notes": "Magic is woven into every thread of this hat. Increases Perception by 7. Limited Edition 2014 Autumn Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_fallMage",
	  "klass": "special",
	  "index": "fallMage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fallHealer": {
	  "set": "mummyMedicSet",
	  "event": {
		"start": "2014-09-21",
		"end": "2014-11-01",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Head Bandages",
	  "notes": "Highly sanitary and very fashionable. Increases Intelligence by 7. Limited Edition 2014 Autumn Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_fallHealer",
	  "klass": "special",
	  "index": "fallHealer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2015Rogue": {
	  "set": "icicleDrakeSet",
	  "event": {
		"start": "2014-12-21",
		"end": "2015-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Icicle Drake Mask",
	  "notes": "You are truly, definitely, absolutely a genuine Icicle Drake. You are not infiltrating the Icicle Drake hives. You have no interest at all in the hoards of riches rumored to lie in their frigid tunnels. Rawr. Increases Perception by 9. Limited Edition 2014-2015 Winter Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_winter2015Rogue",
	  "klass": "special",
	  "index": "winter2015Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2015Warrior": {
	  "set": "gingerbreadSet",
	  "event": {
		"start": "2014-12-21",
		"end": "2015-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Gingerbread Helm",
	  "notes": "Think, think, think as hard as you can. Increases Strength by 9. Limited Edition 2014-2015 Winter Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_winter2015Warrior",
	  "klass": "special",
	  "index": "winter2015Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2015Mage": {
	  "set": "northMageSet",
	  "event": {
		"start": "2014-12-21",
		"end": "2015-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Aurora Hat",
	  "notes": "The fabric of this hat shifts and glows when the wearer studies. Increases Perception by 7. Limited Edition 2014-2015 Winter Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_winter2015Mage",
	  "klass": "special",
	  "index": "winter2015Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2015Healer": {
	  "set": "soothingSkaterSet",
	  "event": {
		"start": "2014-12-21",
		"end": "2015-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Snuggly Earmuffs",
	  "notes": "These warm earmuffs keep out chills and distracting noises. Increases Intelligence by 7. Limited Edition 2014-2015 Winter Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_winter2015Healer",
	  "klass": "special",
	  "index": "winter2015Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_nye2014": {
	  "text": "Silly Party Hat",
	  "notes": "You've received a Silly Party Hat! Wear it with pride while ringing in the New Year! Confers no benefit.",
	  "value": 0,
	  "type": "head",
	  "key": "head_special_nye2014",
	  "set": "special-nye2014",
	  "klass": "special",
	  "index": "nye2014",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2015Rogue": {
	  "set": "sneakySqueakerSet",
	  "event": {
		"start": "2015-03-20",
		"end": "2015-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Fireproof Helm",
	  "notes": "Fire? HAH! You squeak fiercely in the face of fire! Increases Perception by 9. Limited Edition 2015 Spring Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_spring2015Rogue",
	  "klass": "special",
	  "index": "spring2015Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2015Warrior": {
	  "set": "bewareDogSet",
	  "event": {
		"start": "2015-03-20",
		"end": "2015-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Beware Helm",
	  "notes": "Beware the Helm! Only a fierce doggy can wear it. Stop laughing. Increases Strength by 9. Limited Edition 2015 Spring Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_spring2015Warrior",
	  "klass": "special",
	  "index": "spring2015Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2015Mage": {
	  "set": "magicianBunnySet",
	  "event": {
		"start": "2015-03-20",
		"end": "2015-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Stage Mage Hat",
	  "notes": "Which came first, the bunny or the hat? Increases Perception by 7. Limited Edition 2015 Spring Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_spring2015Mage",
	  "klass": "special",
	  "index": "spring2015Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2015Healer": {
	  "set": "comfortingKittySet",
	  "event": {
		"start": "2015-03-20",
		"end": "2015-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Comforting Crown",
	  "notes": "The pearl at the center of this crown calms and comforts those around it. Increases Intelligence by 7. Limited Edition 2015 Spring Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_spring2015Healer",
	  "klass": "special",
	  "index": "spring2015Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2015Rogue": {
	  "set": "reefRenegadeSet",
	  "event": {
		"start": "2015-06-20",
		"end": "2015-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Renegade Hat",
	  "notes": "This pirate hat fell overboard and has been decorated with scraps of fire coral. Increases Perception by 9. Limited Edition 2015 Summer Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_summer2015Rogue",
	  "klass": "special",
	  "index": "summer2015Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2015Warrior": {
	  "set": "sunfishWarriorSet",
	  "event": {
		"start": "2015-06-20",
		"end": "2015-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Jeweled Oceanic Helm",
	  "notes": "Crafted of deep-ocean metal by the artisans of Dilatory, this helm is strong and handsome. Increases Strength by 9. Limited Edition 2015 Summer Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_summer2015Warrior",
	  "klass": "special",
	  "index": "summer2015Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2015Mage": {
	  "set": "shipSoothsayerSet",
	  "event": {
		"start": "2015-06-20",
		"end": "2015-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Soothsayer Scarf",
	  "notes": "Hidden power shines in the threads of this scarf. Increases Perception by 7. Limited Edition 2015 Summer Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_summer2015Mage",
	  "klass": "special",
	  "index": "summer2015Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2015Healer": {
	  "set": "strappingSailorSet",
	  "event": {
		"start": "2015-06-20",
		"end": "2015-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Sailor's Cap",
	  "notes": "With your sailor's cap set firmly on your head, you can navigate even the stormiest seas! Increases Intelligence by 7. Limited Edition 2015 Summer Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_summer2015Healer",
	  "klass": "special",
	  "index": "summer2015Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2015Rogue": {
	  "set": "battleRogueSet",
	  "event": {
		"start": "2015-09-21",
		"end": "2015-11-01",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Bat-tle Wings",
	  "notes": "Echolocate your enemies with this powerful helm! Increases Perception by 9. Limited Edition 2015 Autumn Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_fall2015Rogue",
	  "klass": "special",
	  "index": "fall2015Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2015Warrior": {
	  "set": "scarecrowWarriorSet",
	  "event": {
		"start": "2015-09-21",
		"end": "2015-11-01",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Scarecrow Hat",
	  "notes": "Everyone would want this hat--if they only had a brain. Increases Strength by 9. Limited Edition 2015 Autumn Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_fall2015Warrior",
	  "klass": "special",
	  "index": "fall2015Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2015Mage": {
	  "set": "stitchWitchSet",
	  "event": {
		"start": "2015-09-21",
		"end": "2015-11-01",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Stitched Hat",
	  "notes": "Every stitch in this hat augments its power. Increases Perception by 7. Limited Edition 2015 Autumn Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_fall2015Mage",
	  "klass": "special",
	  "index": "fall2015Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2015Healer": {
	  "set": "potionerSet",
	  "event": {
		"start": "2015-09-21",
		"end": "2015-11-01",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Hat of Frog",
	  "notes": "This is an extremely serious hat that is worthy of only the most advanced potioners. Increases Intelligence by 7. Limited Edition 2015 Autumn Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_fall2015Healer",
	  "klass": "special",
	  "index": "fall2015Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_gaymerx": {
	  "event": {
		"start": "2016-09-29",
		"end": "2016-10-03"
	  },
	  "text": "Rainbow Warrior Helm",
	  "notes": "In celebration of the GaymerX Conference, this special helmet is decorated with a radiant, colorful rainbow pattern! GaymerX is a game convention celebrating LGTBQ and gaming and is open to everyone.",
	  "value": 0,
	  "type": "head",
	  "key": "head_special_gaymerx",
	  "set": "special-gaymerx",
	  "klass": "special",
	  "index": "gaymerx",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2016Rogue": {
	  "set": "cocoaSet",
	  "event": {
		"start": "2015-12-18",
		"end": "2016-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Cocoa Helm",
	  "notes": "The protective scarf on this cozy helm is only removed to sip warm winter beverages. Increases Perception by 9. Limited Edition 2015-2016 Winter Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_winter2016Rogue",
	  "klass": "special",
	  "index": "winter2016Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2016Warrior": {
	  "set": "snowDaySet",
	  "event": {
		"start": "2015-12-18",
		"end": "2016-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Snowman Cap",
	  "notes": "Brr! This mighty helm is truly powerful... until it melts. Increases Strength by 9. Limited Edition 2015-2016 Winter Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_winter2016Warrior",
	  "klass": "special",
	  "index": "winter2016Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2016Mage": {
	  "set": "snowboardingSet",
	  "event": {
		"start": "2015-12-18",
		"end": "2016-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Snowboarder Hood",
	  "notes": "Keeps the snow out of your eyes while you're casting spells. Increases Perception by 7. Limited Edition 2015-2016 Winter Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_winter2016Mage",
	  "klass": "special",
	  "index": "winter2016Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2016Healer": {
	  "set": "festiveFairySet",
	  "event": {
		"start": "2015-12-18",
		"end": "2016-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Fairy Wing Helm",
	  "notes": "Thesewingsfluttersoquicklythattheyblur! Increases Intelligence by 7. Limited Edition 2015-2016 Winter Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_winter2016Healer",
	  "klass": "special",
	  "index": "winter2016Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_nye2015": {
	  "text": "Ridiculous Party Hat",
	  "notes": "You've received a Ridiculous Party Hat! Wear it with pride while ringing in the New Year! Confers no benefit.",
	  "value": 0,
	  "type": "head",
	  "key": "head_special_nye2015",
	  "set": "special-nye2015",
	  "klass": "special",
	  "index": "nye2015",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2016Rogue": {
	  "set": "cleverDogSet",
	  "event": {
		"start": "2016-03-18",
		"end": "2016-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Good Doggy Mask",
	  "notes": "Aww, what a cute puppy! Come here and let me pet your head. ...Hey, where did all my Gold go? Increases Perception by 9. Limited Edition 2016 Spring Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_spring2016Rogue",
	  "klass": "special",
	  "index": "spring2016Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2016Warrior": {
	  "set": "braveMouseSet",
	  "event": {
		"start": "2016-03-18",
		"end": "2016-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Mouse Guard Helm",
	  "notes": "Never again shall you be bopped on the head! Let them try! Increases Strength by 9. Limited Edition 2016 Spring Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_spring2016Warrior",
	  "klass": "special",
	  "index": "spring2016Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2016Mage": {
	  "set": "grandMalkinSet",
	  "event": {
		"start": "2016-03-18",
		"end": "2016-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Grand Malkin Hat",
	  "notes": "Apparel to set you above the mere alley-mages of the world. Increases Perception by 7. Limited Edition 2016 Spring Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_spring2016Mage",
	  "klass": "special",
	  "index": "spring2016Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2016Healer": {
	  "set": "springingBunnySet",
	  "event": {
		"start": "2016-03-18",
		"end": "2016-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Blossom Diadem",
	  "notes": "It glints with the potential of new life ready to burst forth. Increases Intelligence by 7. Limited Edition 2016 Spring Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_spring2016Healer",
	  "klass": "special",
	  "index": "spring2016Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2016Rogue": {
	  "set": "summer2016EelSet",
	  "event": {
		"start": "2016-06-21",
		"end": "2016-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Eel Helm",
	  "notes": "Peek out from rocky crevices while wearing this stealthy helm. Increases Perception by 9. Limited Edition 2016 Summer Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_summer2016Rogue",
	  "klass": "special",
	  "index": "summer2016Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2016Warrior": {
	  "set": "summer2016SharkWarriorSet",
	  "event": {
		"start": "2016-06-21",
		"end": "2016-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Shark Helmet",
	  "notes": "Bite those tough tasks with this fearsome helm! Increases Strength by 9. Limited Edition 2016 Summer Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_summer2016Warrior",
	  "klass": "special",
	  "index": "summer2016Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2016Mage": {
	  "set": "summer2016DolphinMageSet",
	  "event": {
		"start": "2016-06-21",
		"end": "2016-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Blowspout Hat",
	  "notes": "Magical water constantly sprays from this hat. Increases Perception by 7. Limited Edition 2016 Summer Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_summer2016Mage",
	  "klass": "special",
	  "index": "summer2016Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2016Healer": {
	  "set": "summer2016SeahorseHealerSet",
	  "event": {
		"start": "2016-06-21",
		"end": "2016-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Seahorse Helm",
	  "notes": "This helm indicates that the wearer was trained by the magical healing seahorses of Dilatory. Increases Intelligence by 7. Limited Edition 2016 Summer Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_summer2016Healer",
	  "klass": "special",
	  "index": "summer2016Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2016Rogue": {
	  "set": "fall2016BlackWidowSet",
	  "event": {
		"start": "2016-09-20",
		"end": "2016-11-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Black Widow Helm",
	  "notes": "The legs on this helm are constantly twitching. Increases Perception by 9. Limited Edition 2016 Autumn Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_fall2016Rogue",
	  "klass": "special",
	  "index": "fall2016Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2016Warrior": {
	  "set": "fall2016SwampThingSet",
	  "event": {
		"start": "2016-09-20",
		"end": "2016-11-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Gnarled Bark Helm",
	  "notes": "This swamp-sogged helm is covered with bits of bog. Increases Strength by 9. Limited Edition 2016 Autumn Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_fall2016Warrior",
	  "klass": "special",
	  "index": "fall2016Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2016Mage": {
	  "set": "fall2016WickedSorcererSet",
	  "event": {
		"start": "2016-09-20",
		"end": "2016-11-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Hood of Wickedness",
	  "notes": "Conceal your plotting beneath this shadowy hood. Increases Perception by 7. Limited Edition 2016 Autumn Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_fall2016Mage",
	  "klass": "special",
	  "index": "fall2016Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2016Healer": {
	  "set": "fall2016GorgonHealerSet",
	  "event": {
		"start": "2016-09-20",
		"end": "2016-11-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Medusa's Crown",
	  "notes": "Woe to anyone who looks you in the eyes... Increases Intelligence by 7. Limited Edition 2016 Autumn Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_fall2016Healer",
	  "klass": "special",
	  "index": "fall2016Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2017Rogue": {
	  "set": "winter2017FrostyRogueSet",
	  "event": {
		"start": "2016-12-16",
		"end": "2017-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Frosty Helm",
	  "notes": "Fashioned from ice crystals, this helm will help you move unnoticed through wintry landscapes. Increases Perception by 9. Limited Edition 2016-2017 Winter Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_winter2017Rogue",
	  "klass": "special",
	  "index": "winter2017Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2017Warrior": {
	  "set": "winter2017IceHockeySet",
	  "event": {
		"start": "2016-12-16",
		"end": "2017-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Hockey Helm",
	  "notes": "This is a hard and durable helmet, made to withstand impacts from ice or even dark red dailies! Increases Strength by 9. Limited Edition 2016-2017 Winter Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_winter2017Warrior",
	  "klass": "special",
	  "index": "winter2017Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2017Mage": {
	  "set": "winter2017WinterWolfSet",
	  "event": {
		"start": "2016-12-16",
		"end": "2017-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Winter Wolf Helm",
	  "notes": "This helm, fashioned in the image of the legendary Winter Wolf, will keep your head warm and your vision sharp. Increases Perception by 7. Limited Edition 2016-2017 Winter Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_winter2017Mage",
	  "klass": "special",
	  "index": "winter2017Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2017Healer": {
	  "set": "winter2017SugarPlumSet",
	  "event": {
		"start": "2016-12-16",
		"end": "2017-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Sparkling Blossom Helm",
	  "notes": "These glittering petals focus brainpower! Increases Intelligence by 7. Limited Edition 2016-2017 Winter Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_winter2017Healer",
	  "klass": "special",
	  "index": "winter2017Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_nye2016": {
	  "text": "Whimsical Party Hat",
	  "notes": "You've received a Whimsical Party Hat! Wear it with pride while ringing in the New Year! Confers no benefit.",
	  "value": 0,
	  "type": "head",
	  "key": "head_special_nye2016",
	  "set": "special-nye2016",
	  "klass": "special",
	  "index": "nye2016",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2017Rogue": {
	  "set": "spring2017SneakyBunnySet",
	  "event": {
		"start": "2017-03-21",
		"end": "2017-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Sneaky Bunny Helm",
	  "notes": "This mask will prevent your cuteness from giving you away as you sneak up on Dailies (or clovers)! Increases Perception by 9. Limited Edition 2017 Spring Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_spring2017Rogue",
	  "klass": "special",
	  "index": "spring2017Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2017Warrior": {
	  "set": "spring2017FelineWarriorSet",
	  "event": {
		"start": "2017-03-21",
		"end": "2017-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Feline Helm",
	  "notes": "Protect your adorable, fuzzy noggin with this finely decorated helm. Increases Strength by 9. Limited Edition 2017 Spring Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_spring2017Warrior",
	  "klass": "special",
	  "index": "spring2017Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2017Mage": {
	  "set": "spring2017CanineConjurorSet",
	  "event": {
		"start": "2017-03-21",
		"end": "2017-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Canine Conjuror Hat",
	  "notes": "This hat can help you cast mighty spells… Or you can just use it to summon tennis balls. Your choice. Increases Perception by 7. Limited Edition 2017 Spring Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_spring2017Mage",
	  "klass": "special",
	  "index": "spring2017Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2017Healer": {
	  "set": "spring2017FloralMouseSet",
	  "event": {
		"start": "2017-03-21",
		"end": "2017-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Petal Circlet",
	  "notes": "This delicate crown emits the comforting scent of new Spring blooms. Increases Intelligence by 7. Limited Edition 2017 Spring Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_spring2017Healer",
	  "klass": "special",
	  "index": "spring2017Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2017Rogue": {
	  "set": "summer2017SeaDragonSet",
	  "event": {
		"start": "2017-06-20",
		"end": "2017-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Sea Dragon Helm",
	  "notes": "This helm changes colors to help you blend in with your surroundings. Increases Perception by 9. Limited Edition 2017 Summer Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_summer2017Rogue",
	  "klass": "special",
	  "index": "summer2017Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2017Warrior": {
	  "set": "summer2017SandcastleWarriorSet",
	  "event": {
		"start": "2017-06-20",
		"end": "2017-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Sandcastle Helm",
	  "notes": "The finest helm anyone could hope to wear... at least, until the tide comes in. Increases Strength by 9. Limited Edition 2017 Summer Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_summer2017Warrior",
	  "klass": "special",
	  "index": "summer2017Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2017Mage": {
	  "set": "summer2017WhirlpoolMageSet",
	  "event": {
		"start": "2017-06-20",
		"end": "2017-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Whirlpool Hat",
	  "notes": "This hat is composed entirely of a swirling, inverted whirlpool. Increases Perception by 7. Limited Edition 2017 Summer Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_summer2017Mage",
	  "klass": "special",
	  "index": "summer2017Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2017Healer": {
	  "set": "summer2017SeashellSeahealerSet",
	  "event": {
		"start": "2017-06-20",
		"end": "2017-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Crown of Sea Creatures",
	  "notes": "This helm is made up of friendly sea creatures who are temporarily resting on your head, giving you sage advice. Increases Intelligence by 7. Limited Edition 2017 Summer Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_summer2017Healer",
	  "klass": "special",
	  "index": "summer2017Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_namingDay2017": {
	  "text": "Royal Purple Gryphon Helm",
	  "notes": "Happy Naming Day! Wear this fierce and feathery helm as you celebrate Habitica. Confers no benefit.",
	  "value": 0,
	  "type": "head",
	  "key": "head_special_namingDay2017",
	  "set": "special-namingDay2017",
	  "klass": "special",
	  "index": "namingDay2017",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2017Rogue": {
	  "set": "fall2017TrickOrTreatSet",
	  "event": {
		"start": "2017-09-21",
		"end": "2017-11-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Jack-o-Lantern Helm",
	  "notes": "Ready for treats? Time to don this festive, glowing helm! Increases Perception by 9. Limited Edition 2017 Autumn Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_fall2017Rogue",
	  "klass": "special",
	  "index": "fall2017Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2017Warrior": {
	  "set": "fall2017HabitoweenSet",
	  "event": {
		"start": "2017-09-21",
		"end": "2017-11-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Candy Corn Helm",
	  "notes": "This helm might look like a treat, but wayward tasks won't find it so sweet! Increases Strength by 9. Limited Edition 2017 Autumn Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_fall2017Warrior",
	  "klass": "special",
	  "index": "fall2017Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2017Mage": {
	  "set": "fall2017MasqueradeSet",
	  "event": {
		"start": "2017-09-21",
		"end": "2017-11-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Masquerade Helm",
	  "notes": "When you appear in this feathery hat, everyone will be left guessing the identity of the magical stranger in the room! Increases Perception by 7. Limited Edition 2017 Autumn Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_fall2017Mage",
	  "klass": "special",
	  "index": "fall2017Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2017Healer": {
	  "set": "fall2017HauntedHouseSet",
	  "event": {
		"start": "2017-09-21",
		"end": "2017-11-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Haunted House Helm",
	  "notes": "Invite spooky spirits and friendly creatures to seek your healing powers in this helm! Increases Intelligence by 7. Limited Edition 2017 Autumn Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_fall2017Healer",
	  "klass": "special",
	  "index": "fall2017Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_nye2017": {
	  "text": "Fanciful Party Hat",
	  "notes": "You've received a Fanciful Party Hat! Wear it with pride while ringing in the New Year! Confers no benefit.",
	  "value": 0,
	  "type": "head",
	  "key": "head_special_nye2017",
	  "set": "special-nye2017",
	  "klass": "special",
	  "index": "nye2017",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2018Rogue": {
	  "set": "winter2018ReindeerSet",
	  "event": {
		"start": "2017-12-19",
		"end": "2018-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Reindeer Helm",
	  "notes": "The perfect holiday disguise, with a built-in headlight! Increases Perception by 9. Limited Edition 2017-2018 Winter Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_winter2018Rogue",
	  "klass": "special",
	  "index": "winter2018Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2018Warrior": {
	  "set": "winter2018GiftWrappedSet",
	  "event": {
		"start": "2017-12-19",
		"end": "2018-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Giftbox Helm",
	  "notes": "This jaunty box top and bow are not only festive, but quite sturdy. Increases Strength by 9. Limited Edition 2017-2018 Winter Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_winter2018Warrior",
	  "klass": "special",
	  "index": "winter2018Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2018Mage": {
	  "set": "winter2018ConfettiSet",
	  "event": {
		"start": "2017-12-19",
		"end": "2018-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Sparkly Top Hat",
	  "notes": "Ready for some extra special magic? This glittery hat is sure to boost all your spells! Increases Perception by 7. Limited Edition 2017-2018 Winter Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_winter2018Mage",
	  "klass": "special",
	  "index": "winter2018Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2018Healer": {
	  "set": "winter2018MistletoeSet",
	  "event": {
		"start": "2017-12-19",
		"end": "2018-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Mistletoe Hood",
	  "notes": "This fancy hood will keep you warm with happy holiday feelings! Increases Intelligence by 7. Limited Edition 2017-2018 Winter Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_winter2018Healer",
	  "klass": "special",
	  "index": "winter2018Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2018Rogue": {
	  "set": "spring2018DucklingRogueSet",
	  "event": {
		"start": "2018-03-20",
		"end": "2018-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Duck-Billed Helm",
	  "notes": "Quack quack! Your cuteness belies your clever and sneaky nature. Increases Perception by 9. Limited Edition 2018 Spring Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_spring2018Rogue",
	  "klass": "special",
	  "index": "spring2018Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2018Warrior": {
	  "set": "spring2018SunriseWarriorSet",
	  "event": {
		"start": "2018-03-20",
		"end": "2018-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Helm of Rays",
	  "notes": "The brightness of this helm will dazzle any enemies nearby! Increases Strength by 9. Limited Edition 2018 Spring Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_spring2018Warrior",
	  "klass": "special",
	  "index": "spring2018Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2018Mage": {
	  "set": "spring2018TulipMageSet",
	  "event": {
		"start": "2018-03-20",
		"end": "2018-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Tulip Helm",
	  "notes": "The fancy petals of this helm will grant you special springtime magic. Increases Perception by 7. Limited Edition 2018 Spring Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_spring2018Mage",
	  "klass": "special",
	  "index": "spring2018Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2018Healer": {
	  "set": "spring2018GarnetHealerSet",
	  "event": {
		"start": "2018-03-20",
		"end": "2018-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Garnet Circlet",
	  "notes": "The polished gems of this circlet will enhance your mental energy. Increases Intelligence by 7. Limited Edition 2018 Spring Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_spring2018Healer",
	  "klass": "special",
	  "index": "spring2018Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2018Rogue": {
	  "set": "summer2018FisherRogueSet",
	  "event": {
		"start": "2018-06-19",
		"end": "2018-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Fishing Sun Hat",
	  "notes": "Provides comfort and protection from the harsh glare of the summer sun over the water. Especially important if you're more accustomed to staying stealthy in the shadows! Increases Perception by 9. Limited Edition 2018 Summer Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_summer2018Rogue",
	  "klass": "special",
	  "index": "summer2018Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2018Warrior": {
	  "set": "summer2018BettaFishWarriorSet",
	  "event": {
		"start": "2018-06-19",
		"end": "2018-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Betta Fish Barbute",
	  "notes": "Show everyone you're the alpha betta with this flamboyant helm! Increases Strength by 9. Limited Edition 2018 Summer Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_summer2018Warrior",
	  "klass": "special",
	  "index": "summer2018Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2018Mage": {
	  "set": "summer2018LionfishMageSet",
	  "event": {
		"start": "2018-06-19",
		"end": "2018-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Lionfish Crest",
	  "notes": "Glare dolorously upon anyone who dares say you look like a “tastyfish”. Increases Perception by 7. Limited Edition 2018 Summer Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_summer2018Mage",
	  "klass": "special",
	  "index": "summer2018Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2018Healer": {
	  "set": "summer2018MerfolkMonarchSet",
	  "event": {
		"start": "2018-06-19",
		"end": "2018-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Merfolk Monarch Crown",
	  "notes": "Adorned with aquamarine, this finned diadem marks leadership of folk, fish, and those who are a bit of both! Increases Intelligence by 7. Limited Edition 2018 Summer Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_summer2018Healer",
	  "klass": "special",
	  "index": "summer2018Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2018Rogue": {
	  "set": "fall2018AlterEgoSet",
	  "event": {
		"start": "2018-09-20",
		"end": "2018-11-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Alter Ego Face",
	  "notes": "Most of us hide away our inward struggles. This mask shows that we all experience tension between our good and bad impulses. Plus it comes with a sweet hat! Increases Perception by 9. Limited Edition 2018 Autumn Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_fall2018Rogue",
	  "klass": "special",
	  "index": "fall2018Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2018Warrior": {
	  "set": "fall2018MinotaurWarriorSet",
	  "event": {
		"start": "2018-09-20",
		"end": "2018-11-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Minotaur Visage",
	  "notes": "This fearsome mask shows you can really take your tasks by the horns! Increases Strength by 9. Limited Edition 2018 Autumn Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_fall2018Warrior",
	  "klass": "special",
	  "index": "fall2018Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2018Mage": {
	  "set": "fall2018CandymancerMageSet",
	  "event": {
		"start": "2018-09-20",
		"end": "2018-11-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Candymancer's Hat",
	  "notes": "This pointy hat is imbued with powerful spells of sweetness. Careful, if it gets wet it may become sticky! Increases Perception by 7. Limited Edition 2018 Autumn Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_fall2018Mage",
	  "klass": "special",
	  "index": "fall2018Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2018Healer": {
	  "set": "fall2018CarnivorousPlantSet",
	  "event": {
		"start": "2018-09-20",
		"end": "2018-11-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Ravenous Helm",
	  "notes": "This helm is fashioned from a carnivorous plant renowned for its ability to dispatch zombies and other inconveniences. Just watch out that it doesn't chew on your head. Increases Intelligence by 7. Limited Edition 2018 Autumn Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_fall2018Healer",
	  "klass": "special",
	  "index": "fall2018Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_turkeyHelmGilded": {
	  "text": "Gilded Turkey Helm",
	  "notes": "Gobble gobble! Bling bling! Confers no benefit.",
	  "value": 0,
	  "type": "head",
	  "key": "head_special_turkeyHelmGilded",
	  "set": "special-turkeyHelmGilded",
	  "klass": "special",
	  "index": "turkeyHelmGilded",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2019Rogue": {
	  "set": "winter2019PoinsettiaSet",
	  "event": {
		"start": "2018-12-19",
		"end": "2019-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Poinsettia Helm",
	  "notes": "This leafy helm will attain its brightest red color right around the darkest days of winter, helping you blend in with holiday decor! Increases Perception by 9. Limited Edition 2018-2019 Winter Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_winter2019Rogue",
	  "klass": "special",
	  "index": "winter2019Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2019Warrior": {
	  "set": "winter2019BlizzardSet",
	  "event": {
		"start": "2018-12-19",
		"end": "2019-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Glacial Helm",
	  "notes": "It's important to keep a cool head! This icy helm will protect you from any opponent's blows. Increases Strength by 9. Limited Edition 2018-2019 Winter Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_winter2019Warrior",
	  "klass": "special",
	  "index": "winter2019Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2019Mage": {
	  "set": "winter2019PyrotechnicSet",
	  "event": {
		"start": "2018-12-19",
		"end": "2019-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Flaming Fireworks",
	  "notes": "Stand well back and watch the sparks fly! Your tasks cannot stand against this might! Increases Perception by 7. Limited Edition 2018-2019 Winter Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_winter2019Mage",
	  "klass": "special",
	  "index": "winter2019Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2019Healer": {
	  "set": "winter2019WinterStarSet",
	  "event": {
		"start": "2018-12-19",
		"end": "2019-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Starry Crown",
	  "notes": "On the darkest, coldest winter night, one particular star shines its brightest. This crown is made from metal from that star, to help you shine! Increases Intelligence by 7. Limited Edition 2018-2019 Winter Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_winter2019Healer",
	  "klass": "special",
	  "index": "winter2019Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_nye2018": {
	  "text": "Outlandish Party Hat",
	  "notes": "You've received an Outlandish Party Hat! Wear it with pride while ringing in the New Year! Confers no benefit.",
	  "value": 0,
	  "type": "head",
	  "key": "head_special_nye2018",
	  "set": "special-nye2018",
	  "klass": "special",
	  "index": "nye2018",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_piDay": {
	  "text": "Pi Hat",
	  "notes": "Try to balance this slice of delicious pie on your head while walking in a circle. Or throw it at a red Daily! Or you could just eat it. Your choice! Confers no benefit.",
	  "value": 0,
	  "type": "head",
	  "key": "head_special_piDay",
	  "set": "special-piDay",
	  "klass": "special",
	  "index": "piDay",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2019Rogue": {
	  "set": "spring2019CloudRogueSet",
	  "event": {
		"start": "2019-03-19",
		"end": "2019-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Cloud Helm",
	  "notes": "No one will notice a cloud quietly drifting toward their stash of Gold, right? Increases Perception by 9. Limited Edition 2019 Spring Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_spring2019Rogue",
	  "klass": "special",
	  "index": "spring2019Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2019Warrior": {
	  "set": "spring2019OrchidWarriorSet",
	  "event": {
		"start": "2019-03-19",
		"end": "2019-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Orchid Helm",
	  "notes": "This helm is unbreakable and tough! Also it attracts butterflies. Increases Strength by 9. Limited Edition 2019 Spring Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_spring2019Warrior",
	  "klass": "special",
	  "index": "spring2019Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2019Mage": {
	  "set": "spring2019AmberMageSet",
	  "event": {
		"start": "2019-03-19",
		"end": "2019-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Amber Hat",
	  "notes": "A glowing amber gem grants this hat the power of arcane natural forces. Increases Perception by 7. Limited Edition 2019 Spring Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_spring2019Mage",
	  "klass": "special",
	  "index": "spring2019Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2019Healer": {
	  "set": "spring2019RobinHealerSet",
	  "event": {
		"start": "2019-03-19",
		"end": "2019-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Robin Helm",
	  "notes": "Be ready for the first day of spring with this cute beaky helm. Increases Intelligence by 7. Limited Edition 2019 Spring Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_spring2019Healer",
	  "klass": "special",
	  "index": "spring2019Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2019Rogue": {
	  "set": "summer2019HammerheadRogueSet",
	  "event": {
		"start": "2019-06-18",
		"end": "2019-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Hammerhead Helm",
	  "notes": "This helm gives you a 360 degree view of surrounding waters, which is perfect for sneaking up on unsuspecting red Dailies. Increases Perception by 9. Limited Edition 2019 Summer Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_summer2019Rogue",
	  "klass": "special",
	  "index": "summer2019Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2019Warrior": {
	  "set": "summer2019SeaTurtleWarriorSet",
	  "event": {
		"start": "2019-06-18",
		"end": "2019-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Turtle Helm",
	  "notes": "It won't let you pull your head down between your shoulders, but it will protect you if you bonk the bottom of a boat. Increases Strength by 9. Limited Edition 2019 Summer Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_summer2019Warrior",
	  "klass": "special",
	  "index": "summer2019Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2019Mage": {
	  "set": "summer2019WaterLilyMageSet",
	  "event": {
		"start": "2019-06-18",
		"end": "2019-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Lily Pad Hat",
	  "notes": "Contrary to popular belief, your head is not an appropriate place for frogs to perch. Increases Perception by 7. Limited Edition 2019 Summer Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_summer2019Mage",
	  "klass": "special",
	  "index": "summer2019Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2019Healer": {
	  "set": "summer2019ConchHealerSet",
	  "event": {
		"start": "2019-06-18",
		"end": "2019-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Conch Crown",
	  "notes": "The spiraling structure of this shell will help you hear any cry for help across the seven seas. Increases Intelligence by 7. Limited Edition 2019 Summer Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_summer2019Healer",
	  "klass": "special",
	  "index": "summer2019Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2019Rogue": {
	  "set": "fall2019OperaticSpecterSet",
	  "event": {
		"start": "2019-09-24",
		"end": "2019-11-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Antique Opera Hat",
	  "notes": "Did you find this headpiece at an auction of possibly-cursed costume pieces, or in the attic of an eccentric grandparent? Whatever its origin, its age and wear add to your air of mystery. Increases Perception by 9. Limited Edition 2019 Autumn Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_fall2019Rogue",
	  "klass": "special",
	  "index": "fall2019Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2019Warrior": {
	  "set": "fall2019RavenSet",
	  "event": {
		"start": "2019-09-24",
		"end": "2019-11-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Obsidian Skull Helmet",
	  "notes": "The dark eye-sockets of this skull helmet will daunt the bravest of your enemies. Increases Strength by 9. Limited Edition 2019 Autumn Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_fall2019Warrior",
	  "klass": "special",
	  "index": "fall2019Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2019Mage": {
	  "set": "fall2019CyclopsSet",
	  "event": {
		"start": "2019-09-24",
		"end": "2019-11-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Cyclops Mask",
	  "notes": "Its single baleful eye does inhibit depth perception, but that is a small price to pay for the way it hones your focus to a single, intense point. Increases Perception by 7. Limited Edition 2019 Autumn Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_fall2019Mage",
	  "klass": "special",
	  "index": "fall2019Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2019Healer": {
	  "set": "fall2019LichSet",
	  "event": {
		"start": "2019-09-24",
		"end": "2019-11-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Dark Miter",
	  "notes": "Don this dark miter to harness the powers of the fearsome Lich. Increases Intelligence by 7. Limited Edition 2019 Autumn Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_fall2019Healer",
	  "klass": "special",
	  "index": "fall2019Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_ks2019": {
	  "text": "Mythic Gryphon Helm",
	  "notes": "Adorned with a gryphon's likeness and plumage, this glorious helmet symbolizes the way your skills and bearing stand as an example to others. Increases Intelligence by 20.",
	  "value": 0,
	  "int": 20,
	  "type": "head",
	  "key": "head_special_ks2019",
	  "set": "special-ks2019",
	  "klass": "special",
	  "index": "ks2019",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2020Rogue": {
	  "set": "winter2020LanternSet",
	  "event": {
		"start": "2019-12-19",
		"end": "2020-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Floofy Stocking Cap",
	  "notes": "A Rogue walks down the street in that hat, people know they're not afraid of anything. Increases Perception by 9. Limited Edition 2019-2020 Winter Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_winter2020Rogue",
	  "klass": "special",
	  "index": "winter2020Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2020Warrior": {
	  "set": "winter2020EvergreenSet",
	  "event": {
		"start": "2019-12-19",
		"end": "2020-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Snow-Dusted Headdress",
	  "notes": "A prickly feeling on your scalp is a small price to pay for seasonal magnificence. Increases Strength by 9. Limited Edition 2019-2020 Winter Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_winter2020Warrior",
	  "klass": "special",
	  "index": "winter2020Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2020Mage": {
	  "set": "winter2020CarolOfTheMageSet",
	  "event": {
		"start": "2019-12-19",
		"end": "2020-02-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Bell Crown",
	  "notes": "Oh! How the bells / Sweet golden bells / All seem to say, / “Cast ‘Burst of Flames’” Increases Perception by 7. Limited Edition 2019-2020 Winter Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_winter2020Mage",
	  "klass": "special",
	  "index": "winter2020Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2020Healer": {
	  "set": "winter2020WinterSpiceSet",
	  "event": {
		"start": "2019-12-19",
		"end": "2020-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Star Anise Emblem",
	  "notes": "Please remove it from your head before attempting to brew chai or coffee with it. Increases Intelligence by 7. Limited Edition 2019-2020 Winter Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_winter2020Healer",
	  "klass": "special",
	  "index": "winter2020Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_nye2019": {
	  "text": "Outrageous Party Hat",
	  "notes": "You've received an Outrageous Party Hat! Wear it with pride while ringing in the New Year! Confers no benefit.",
	  "value": 0,
	  "type": "head",
	  "key": "head_special_nye2019",
	  "set": "special-nye2019",
	  "klass": "special",
	  "index": "nye2019",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2020Rogue": {
	  "set": "spring2020LapisLazuliRogueSet",
	  "event": {
		"start": "2020-03-17",
		"end": "2020-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Lapis Kabuto",
	  "notes": "So vibrant and valuable, you'll be tempted to steal it off your own head. Increases Perception by 9. Limited Edition 2020 Spring Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_spring2020Rogue",
	  "klass": "special",
	  "index": "spring2020Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2020Warrior": {
	  "set": "spring2020BeetleWarriorSet",
	  "event": {
		"start": "2020-03-17",
		"end": "2020-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Beetle Helm",
	  "notes": "Your enemies' blows will glance off this beetle-inspired helm! Increases Strength by 9. Limited Edition 2020 Spring Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_spring2020Warrior",
	  "klass": "special",
	  "index": "spring2020Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2020Mage": {
	  "set": "spring2020PuddleMageSet",
	  "event": {
		"start": "2020-03-17",
		"end": "2020-05-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Drip Top Cap",
	  "notes": "Is the sky clear? Humidity low? Don't worry, we've got you. Moisten your magic without dampening your spirits! Increases Perception by 7. Limited Edition 2020 Spring Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_spring2020Mage",
	  "klass": "special",
	  "index": "spring2020Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2020Healer": {
	  "set": "spring2020IrisHealerSet",
	  "event": {
		"start": "2020-03-17",
		"end": "2020-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Iris Fascinator",
	  "notes": "Beguile your foes with this headpiece made of flowers! Increases Intelligence by 7. Limited Edition 2020 Spring Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_spring2020Healer",
	  "klass": "special",
	  "index": "spring2020Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2020Rogue": {
	  "set": "summer2020CrocodileRogueSet",
	  "event": {
		"start": "2020-06-18",
		"end": "2020-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Crocodile Helm",
	  "notes": "Complete your Rogue-ish disguise with this helm! Maybe you can fool your enemies with your crocodile tears... Increases Perception by 9. Limited Edition 2020 Summer Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_summer2020Rogue",
	  "klass": "special",
	  "index": "summer2020Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2020Warrior": {
	  "set": "summer2020RainbowTroutWarriorSet",
	  "event": {
		"start": "2020-06-18",
		"end": "2020-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Flashy Fishy Cap",
	  "notes": "Trout your strength and skill with this highly visible headgear. Increases Strength by 9. Limited Edition 2020 Summer Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_summer2020Warrior",
	  "klass": "special",
	  "index": "summer2020Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2020Mage": {
	  "set": "summer2020OarfishMageSet",
	  "event": {
		"start": "2020-06-18",
		"end": "2020-08-02",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Oarfish Crest",
	  "notes": "Who needs a crown with this crest? Increases Perception by 7. Limited Edition 2020 Summer Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_summer2020Mage",
	  "klass": "special",
	  "index": "summer2020Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2020Healer": {
	  "set": "summer2020SeaGlassHealerSet",
	  "event": {
		"start": "2020-06-18",
		"end": "2020-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Glass-Studded Helm",
	  "notes": "Stand tall, that beachcombers may keep their hands out of your hair. Increases Intelligence by 7. Limited Edition 2020 Summer Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_summer2020Healer",
	  "klass": "special",
	  "index": "summer2020Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2020Rogue": {
	  "set": "fall2020TwoHeadedRogueSet",
	  "event": {
		"start": "2020-09-22T08:00-04:00",
		"end": "2020-10-31T20:00-04:00",
		"gear": true,
		"gemsPromo": {
		  "4gems": 5,
		  "21gems": 30,
		  "42gems": 60,
		  "84gems": 125
		}
	  },
	  "specialClass": "rogue",
	  "text": "Two-Headed Stone Mask",
	  "notes": "Look twice, act once: this mask makes it easy. Increases Perception by 9. Limited Edition 2020 Autumn Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_fall2020Rogue",
	  "klass": "special",
	  "index": "fall2020Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2020Warrior": {
	  "set": "fall2020WraithWarriorSet",
	  "event": {
		"start": "2020-09-22T08:00-04:00",
		"end": "2020-10-31T20:00-04:00",
		"gear": true,
		"gemsPromo": {
		  "4gems": 5,
		  "21gems": 30,
		  "42gems": 60,
		  "84gems": 125
		}
	  },
	  "specialClass": "warrior",
	  "text": "Creepy Cowl",
	  "notes": "The Warrior who once wore this never flinched from the weightiest tasks! But others may flinch from you when you wear it... Increases Strength by 9. Limited Edition 2020 Autumn Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_fall2020Warrior",
	  "klass": "special",
	  "index": "fall2020Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2020Mage": {
	  "set": "fall2020ThirdEyeMageSet",
	  "event": {
		"start": "2020-09-22T08:00-04:00",
		"end": "2020-10-31T20:00-04:00",
		"gear": true,
		"gemsPromo": {
		  "4gems": 5,
		  "21gems": 30,
		  "42gems": 60,
		  "84gems": 125
		}
	  },
	  "specialClass": "wizard",
	  "text": "Awakened Clarity",
	  "notes": "With this cap seated perfectly on your brow, your third eye opens, allowing you to focus on what is otherwise invisible: mana flows, restless spirits, and forgotten To-Dos. Increases Perception by 7. Limited Edition 2020 Autumn Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_fall2020Mage",
	  "klass": "special",
	  "index": "fall2020Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2020Healer": {
	  "set": "fall2020DeathsHeadMothHealerSet",
	  "event": {
		"start": "2020-09-22T08:00-04:00",
		"end": "2020-10-31T20:00-04:00",
		"gear": true,
		"gemsPromo": {
		  "4gems": 5,
		  "21gems": 30,
		  "42gems": 60,
		  "84gems": 125
		}
	  },
	  "specialClass": "healer",
	  "text": "Death's Head Mask",
	  "notes": "The dreadful pallor of this skull-like visage shines as a warning to all mortals: Time is fleeting! Attend to thy deadlines, before it is too late! Increases Intelligence by 7. Limited Edition 2020 Autumn Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_fall2020Healer",
	  "klass": "special",
	  "index": "fall2020Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2021Rogue": {
	  "set": "winter2021HollyIvyRogueSet",
	  "event": {
		"start": "2020-12-17T08:00-05:00",
		"end": "2021-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "winter",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Ivy Mask",
	  "notes": "A rogue can go unseen in the woods with a mask like this. Increases Perception by 9. Limited Edition 2020-2021 Winter Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_winter2021Rogue",
	  "klass": "special",
	  "index": "winter2021Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2021Warrior": {
	  "set": "winter2021IceFishingWarriorSet",
	  "event": {
		"start": "2020-12-17T08:00-05:00",
		"end": "2021-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "winter",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Insulated Hood",
	  "notes": "Wrap up against the cold weather in this cozy hood. Increases Strength by 9. Limited Edition 2020-2021 Winter Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_winter2021Warrior",
	  "klass": "special",
	  "index": "winter2021Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2021Mage": {
	  "set": "winter2021WinterMoonMageSet",
	  "event": {
		"start": "2020-12-17T08:00-05:00",
		"end": "2021-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "winter",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Moonlight Shadow Hood",
	  "notes": "Let your mind get carried away, while you feel safely tucked in, under this huge homely hood. Increases Perception by 7. Limited Edition 2020-2021 Winter Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_winter2021Mage",
	  "klass": "special",
	  "index": "winter2021Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2021Healer": {
	  "set": "winter2021ArcticExplorerHealerSet",
	  "event": {
		"start": "2020-12-17T08:00-05:00",
		"end": "2021-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "winter",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Arctic Exploration Headgear",
	  "notes": "A surprising amount of heat escapes through the head! Not if you're wearing this thick hood and goggles, though. There'll be no icicles on YOUR eyelashes! Increases Intelligence by 7. Limited Edition 2020-2021 Winter Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_winter2021Healer",
	  "klass": "special",
	  "index": "winter2021Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_nye2020": {
	  "text": "Extravagant Party Hat",
	  "notes": "You've received an Extravagant Party Hat! Wear it with pride while ringing in the New Year! Confers no benefit.",
	  "value": 0,
	  "type": "head",
	  "key": "head_special_nye2020",
	  "set": "special-nye2020",
	  "klass": "special",
	  "index": "nye2020",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2021Rogue": {
	  "set": "spring2021TwinFlowerRogueSet",
	  "event": {
		"start": "2021-03-23T08:00-05:00",
		"end": "2021-04-30T20:00-05:00",
		"npcImageSuffix": "spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Twin Flower Hat",
	  "notes": "Let's keep the flowery language to a minimum: this hat will help you blend in with the spring flowers! Increases Perception by 9. Limited Edition 2021 Spring Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_spring2021Rogue",
	  "klass": "special",
	  "index": "spring2021Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2021Warrior": {
	  "set": "spring2021SunstoneWarriorSet",
	  "event": {
		"start": "2021-03-23T08:00-05:00",
		"end": "2021-04-30T20:00-05:00",
		"npcImageSuffix": "spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Helm of the Sun",
	  "notes": "Don't fear! The sunstone in this helm will help you bring to light those deepest, darkest red to-dos. Increases Strength by 9. Limited Edition 2021 Spring Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_spring2021Warrior",
	  "klass": "special",
	  "index": "spring2021Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2021Mage": {
	  "set": "spring2021SwanMageSet",
	  "event": {
		"start": "2021-03-23T08:00-05:00",
		"end": "2021-04-30T20:00-05:00",
		"npcImageSuffix": "spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Cygnet Circlet",
	  "notes": "Set this airy crown upon your brow, and the birds of the water will come attend to you. To what quest will you call them? Increases Perception by 7. Limited Edition 2021 Spring Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_spring2021Mage",
	  "klass": "special",
	  "index": "spring2021Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2021Healer": {
	  "set": "spring2021WillowHealerSet",
	  "event": {
		"start": "2021-03-23T08:00-05:00",
		"end": "2021-04-30T20:00-05:00",
		"npcImageSuffix": "spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Salix Wreath",
	  "notes": "Weep not, friends! A Healer is here to soothe your suffering! Increases Intelligence by 7. Limited Edition 2021 Spring Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_spring2021Healer",
	  "klass": "special",
	  "index": "spring2021Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2021Rogue": {
	  "set": "summer2021ClownfishRogueSet",
	  "event": {
		"start": "2021-06-23T08:00-04:00",
		"end": "2021-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "summer",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Clownfish Hood",
	  "notes": "It's bold, bright, and funny. Just like you! Increases Perception by 9. Limited Edition 2021 Summer Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_summer2021Rogue",
	  "klass": "special",
	  "index": "summer2021Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2021Warrior": {
	  "set": "summer2021FlyingFishWarriorSet",
	  "event": {
		"start": "2021-06-23T08:00-04:00",
		"end": "2021-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "summer",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Fishy Helm",
	  "notes": "This helm can keep you safe and its magic will help you breathe underwater as well! Increases Strength by 9. Limited Edition 2021 Summer Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_summer2021Warrior",
	  "klass": "special",
	  "index": "summer2021Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2021Mage": {
	  "set": "summer2021NautilusMageSet",
	  "event": {
		"start": "2021-06-23T08:00-04:00",
		"end": "2021-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "summer",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Nautilus Crest",
	  "notes": "The pinhole eyes set upon this speckled cap may not improve your underwater vision all that much, but they sure can unnerve your opponents. Increases Perception by 7. Limited Edition 2021 Summer Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_summer2021Mage",
	  "klass": "special",
	  "index": "summer2021Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2021Healer": {
	  "set": "summer2021ParrotHealerSet",
	  "event": {
		"start": "2021-06-23T08:00-04:00",
		"end": "2021-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "summer",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Parrot Mask",
	  "notes": "Borrow the plumage of a parrot to help you in your daily battles! Increases Intelligence by 7. Limited Edition 2021 Summer Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_summer2021Healer",
	  "klass": "special",
	  "index": "summer2021Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2021Rogue": {
	  "set": "fall2021OozeRogueSet",
	  "event": {
		"start": "2021-09-21T08:00-04:00",
		"end": "2021-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "You Have Been Engulfed",
	  "notes": "Welp, you're stuck. Now you are doomed to roam dungeon corridors, collecting debris. DOOOOMED! Increases Perception by 9. Limited Edition 2021 Autumn Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_fall2021Rogue",
	  "klass": "special",
	  "index": "fall2021Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2021Warrior": {
	  "set": "fall2021HeadlessWarriorSet",
	  "event": {
		"start": "2021-09-21T08:00-04:00",
		"end": "2021-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Headless Cravat",
	  "notes": "Lose your head over this formal collar and tie that complete your suit. Increases Strength by 9. Limited Edition 2021 Autumn Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_fall2021Warrior",
	  "klass": "special",
	  "index": "fall2021Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2021Mage": {
	  "set": "fall2021BrainEaterMageSet",
	  "event": {
		"start": "2021-09-21T08:00-04:00",
		"end": "2021-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Brain Eater Mask",
	  "notes": "The tentacles surrounding the mouth grab prey and hold its delicious thoughts close for you to savor. Increases Perception by 7. Limited Edition 2021 Autumn Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_fall2021Mage",
	  "klass": "special",
	  "index": "fall2021Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2021Healer": {
	  "set": "fall2021FlameSummonerHealerSet",
	  "event": {
		"start": "2021-09-21T08:00-04:00",
		"end": "2021-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Summoner's Mask",
	  "notes": "Your own magic turns your hair into shocking, bright flames when you don this mask. Increases Intelligence by 7. Limited Edition 2021 Autumn Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_fall2021Healer",
	  "klass": "special",
	  "index": "fall2021Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2022Rogue": {
	  "set": "winter2022FireworksRogueSet",
	  "event": {
		"start": "2021-12-21T08:00-05:00",
		"end": "2022-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "_winter",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Thundering Finale",
	  "notes": "What? Huh? There's a Rogue where? I'm sorry, I can't hear anything over these fireworks! Increases Perception by 9. Limited Edition 2021-2022 Winter Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_winter2022Rogue",
	  "klass": "special",
	  "index": "winter2022Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2022Warrior": {
	  "set": "winter2022StockingWarriorSet",
	  "event": {
		"start": "2021-12-21T08:00-05:00",
		"end": "2022-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "_winter",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Fuzzy Stocking Cap",
	  "notes": "In festive green with soft red trim, this hat is guaranteed to keep you warm all winter. Increases Strength by 9. Limited Edition 2021-2022 Winter Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_winter2022Warrior",
	  "klass": "special",
	  "index": "winter2022Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2022Mage": {
	  "set": "winter2022PomegranateMageSet",
	  "event": {
		"start": "2021-12-21T08:00-05:00",
		"end": "2022-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "_winter",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Pomegranate Helm",
	  "notes": "Due to its thick husk, this festive, fruity helmet is berry strong. Increases Perception by 7. Limited Edition 2021-2022 Winter Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_winter2022Mage",
	  "klass": "special",
	  "index": "winter2022Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2022Healer": {
	  "set": "winter2022IceCrystalHealerSet",
	  "event": {
		"start": "2021-12-21T08:00-05:00",
		"end": "2022-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "_winter",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Crystalline Ice Crown",
	  "notes": "Minute imperfections and impurities send the arms of this headdress branching out in unpredictable directions. It's symbolic! And also very, very pretty. Increases Intelligence by 7. Limited Edition 2021-2022 Winter Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_winter2022Healer",
	  "klass": "special",
	  "index": "winter2022Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_nye2021": {
	  "text": "Preposterous Party Hat",
	  "notes": "You've received a Preposterous Party Hat! Wear it with pride while ringing in the New Year! Confers no benefit.",
	  "value": 0,
	  "type": "head",
	  "key": "head_special_nye2021",
	  "set": "special-nye2021",
	  "klass": "special",
	  "index": "nye2021",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2022Rogue": {
	  "set": "spring2022MagpieRogueSet",
	  "event": {
		"start": "2022-03-22T08:00-05:00",
		"end": "2022-04-30T20:00-05:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Magpie Mask",
	  "notes": "Be as clever as a magpie when wearing this mask. Maybe you’ll even be able to whistle, trill, and mimic as well as one, too. Increases Perception by 9. Limited Edition 2022 Spring Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_spring2022Rogue",
	  "klass": "special",
	  "index": "spring2022Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2022Warrior": {
	  "set": "spring2022RainstormWarriorSet",
	  "event": {
		"start": "2022-03-22T08:00-05:00",
		"end": "2022-04-30T20:00-05:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Rain Slicker Hood",
	  "notes": "Tut tut, it looks like rain! Stand tall and pull up your hood to stay dry. Increases Strength by 9. Limited Edition 2022 Spring Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_spring2022Warrior",
	  "klass": "special",
	  "index": "spring2022Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2022Mage": {
	  "set": "spring2022ForsythiaMageSet",
	  "event": {
		"start": "2022-03-22T08:00-05:00",
		"end": "2022-04-30T20:00-05:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Forsythia Helmet",
	  "notes": "Stay dry during a rainstorm with this protective helmet of downturned petals. Increases Perception by 7. Limited Edition 2022 Spring Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_spring2022Mage",
	  "klass": "special",
	  "index": "spring2022Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2022Healer": {
	  "set": "spring2022PeridotHealerSet",
	  "event": {
		"start": "2022-03-22T08:00-05:00",
		"end": "2022-04-30T20:00-05:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Peridot Helmet",
	  "notes": "This mysterious helmet preserves your privacy as you tackle your tasks. Increases Intelligence by 7. Limited Edition 2022 Spring Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_spring2022Healer",
	  "klass": "special",
	  "index": "spring2022Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2022Rogue": {
	  "set": "summer2022CrabRogueSet",
	  "event": {
		"start": "2022-06-21T08:00-04:00",
		"end": "2022-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "_summer",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Crab Helm",
	  "notes": "No time to be crabby, we're out here shellebrating the summer's hottest crustacean puns. Increases Perception by 9. Limited Edition 2022 Summer Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_summer2022Rogue",
	  "klass": "special",
	  "index": "summer2022Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2022Warrior": {
	  "set": "summer2022WaterspoutWarriorSet",
	  "event": {
		"start": "2022-06-21T08:00-04:00",
		"end": "2022-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "_summer",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Waterspout Helm",
	  "notes": "Channel the power of water as you center yourself in this intense vortex. Increases Strength by 9. Limited Edition 2022 Summer Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_summer2022Warrior",
	  "klass": "special",
	  "index": "summer2022Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2022Mage": {
	  "set": "summer2022MantaRayMageSet",
	  "event": {
		"start": "2022-06-21T08:00-04:00",
		"end": "2022-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "_summer",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Manta Ray Helm",
	  "notes": "Keep your head protected as you dive into your tasks or into the deepest waters. Increases Perception by 7. Limited Edition 2022 Summer Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_summer2022Mage",
	  "klass": "special",
	  "index": "summer2022Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2022Healer": {
	  "set": "summer2022AngelfishHealerSet",
	  "event": {
		"start": "2022-06-21T08:00-04:00",
		"end": "2022-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "_summer",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Angelfish Ear Fins",
	  "notes": "Fish don't have ears, you say? Wait til you tell them the news. Increases Intelligence by 7. Limited Edition 2022 Summer Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_summer2022Healer",
	  "klass": "special",
	  "index": "summer2022Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2022Rogue": {
	  "set": "fall2022KappaRogueSet",
	  "event": {
		"start": "2022-09-20T08:00-04:00",
		"end": "2022-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Kappa Mask",
	  "notes": "With this metal cap upon your head, you will have extra protection when you venture onto land. Increases Perception by 9. Limited Edition 2022 Fall Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_fall2022Rogue",
	  "klass": "special",
	  "index": "fall2022Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2022Warrior": {
	  "set": "fall2022OrcWarriorSet",
	  "event": {
		"start": "2022-09-20T08:00-04:00",
		"end": "2022-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Orc Mask",
	  "notes": "Tusks tough and sharp enough to pierce pumpkins! RAWR! Increases Strength by 9. Limited Edition 2022 Fall Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_fall2022Warrior",
	  "klass": "special",
	  "index": "fall2022Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2022Mage": {
	  "set": "fall2022HarpyMageSet",
	  "event": {
		"start": "2022-09-20T08:00-04:00",
		"end": "2022-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Harpy Mask",
	  "notes": "Entrance and lure others close with this magical maiden mask. Increases Perception by 7. Limited Edition 2022 Fall Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_fall2022Mage",
	  "klass": "special",
	  "index": "fall2022Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2022Healer": {
	  "set": "fall2022WatcherHealerSet",
	  "event": {
		"start": "2022-09-20T08:00-04:00",
		"end": "2022-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Peeker Mask",
	  "notes": "Beauty is in there. Somewhere! Increases Intelligence by 7. Limited Edition 2022 Fall Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_fall2022Healer",
	  "klass": "special",
	  "index": "fall2022Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2023Rogue": {
	  "set": "winter2023RibbonRogueSet",
	  "event": {
		"start": "2022-12-20T08:00-05:00",
		"end": "2023-01-31T23:59-05:00",
		"npcImageSuffix": "_winter",
		"season": "winter",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Gift Bow",
	  "notes": "People's temptations to “unwrap” your hair will give you opportunities to practice your ducks and dodges. Increases Perception by 9. Limited Edition 2022-2023 Winter Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_winter2023Rogue",
	  "klass": "special",
	  "index": "winter2023Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2023Warrior": {
	  "set": "winter2023WalrusWarriorSet",
	  "event": {
		"start": "2022-12-20T08:00-05:00",
		"end": "2023-01-31T23:59-05:00",
		"npcImageSuffix": "_winter",
		"season": "winter",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Walrus Helm",
	  "notes": "This walrus helm is perfect for chatting with a friend or partaking in a clever meal. Increases Strength by 9. Limited Edition 2022-2023 Winter Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_winter2023Warrior",
	  "klass": "special",
	  "index": "winter2023Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_winter2023Mage": {
	  "set": "winter2023FairyLightsMageSet",
	  "event": {
		"start": "2022-12-20T08:00-05:00",
		"end": "2023-01-31T23:59-05:00",
		"npcImageSuffix": "_winter",
		"season": "winter",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Fairy-Lit Tiara",
	  "notes": "Were you hatched with a Starry Night potion? Because I've got stars in my eyes for you. Increases Perception by 7. Limited Edition 2022-2023 Winter Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_winter2023Mage",
	  "klass": "special",
	  "index": "winter2023Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_winter2023Healer": {
	  "set": "winter2023CardinalHealerSet",
	  "event": {
		"start": "2022-12-20T08:00-05:00",
		"end": "2023-01-31T23:59-05:00",
		"npcImageSuffix": "_winter",
		"season": "winter",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Cardinal Helm",
	  "notes": "This cardinal helm is perfect for whistling and singing to herald the winter season. Increases Intelligence by 7. Limited Edition 2022-2023 Winter Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_winter2023Healer",
	  "klass": "special",
	  "index": "winter2023Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_nye2022": {
	  "text": "Fabulous Party Hat",
	  "notes": "You've received a Fabulous Party Hat! Wear it with pride while ringing in the New Year! Confers no benefit.",
	  "value": 0,
	  "type": "head",
	  "key": "head_special_nye2022",
	  "set": "special-nye2022",
	  "klass": "special",
	  "index": "nye2022",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2023Rogue": {
	  "set": "spring2023CaterpillarRogueSet",
	  "event": {
		"start": "2023-03-21T08:00-04:00",
		"end": "2023-04-30T23:59-04:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Caterpillar Cowl",
	  "notes": "Be sure to tuck in those tempting antennae when birds are hunting overhead! Increases Perception by 9. Limited Edition 2023 Spring Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_spring2023Rogue",
	  "klass": "special",
	  "index": "spring2023Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2023Warrior": {
	  "set": "spring2023HummingbirdWarriorSet",
	  "event": {
		"start": "2023-03-21T08:00-04:00",
		"end": "2023-04-30T23:59-04:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Hummingbird Helmet",
	  "notes": "Cover your visage in iridescent feathers when you fly into battle. Increases Strength by 9. Limited Edition 2023 Spring Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_spring2023Warrior",
	  "klass": "special",
	  "index": "spring2023Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_spring2023Mage": {
	  "set": "spring2023MoonstoneMageSet",
	  "event": {
		"start": "2023-03-21T08:00-04:00",
		"end": "2023-04-30T23:59-04:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Moonstone Visor",
	  "notes": "You’ll want to wear these glasses at night so you can see clearly by the light of the moon. Increases Perception by 7. Limited Edition 2023 Spring Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_spring2023Mage",
	  "klass": "special",
	  "index": "spring2023Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_spring2023Healer": {
	  "set": "spring2023LilyHealerSet",
	  "event": {
		"start": "2023-03-21T08:00-04:00",
		"end": "2023-04-30T23:59-04:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Lily Bloom",
	  "notes": "This brilliant and colorful display shares a color scheme with the Orb of Rebirth! How symbolic! Increases Intelligence by 7. Limited Edition 2023 Spring Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_spring2023Healer",
	  "klass": "special",
	  "index": "spring2023Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2023Rogue": {
	  "set": "summer2023GuppyRogueSet",
	  "event": {
		"start": "2023-06-20T08:00-04:00",
		"end": "2023-07-31T23:59-04:00",
		"npcImageSuffix": "_summer",
		"season": "summer",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Guppy Cap",
	  "notes": "Gup, two, three, four! Can't get eaten, got tasks to score! Increases Perception by 9. Limited Edition 2023 Summer Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_summer2023Rogue",
	  "klass": "special",
	  "index": "summer2023Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2023Warrior": {
	  "set": "summer2023GoldfishWarriorSet",
	  "event": {
		"start": "2023-06-20T08:00-04:00",
		"end": "2023-07-31T23:59-04:00",
		"npcImageSuffix": "_summer",
		"season": "summer",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Goldfish Fin",
	  "notes": "This fabulous fin provides stability as you swim toward troublesome tasks ahead of you. Increases Strength by 9. Limited Edition 2023 Summer Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_summer2023Warrior",
	  "klass": "special",
	  "index": "summer2023Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_summer2023Mage": {
	  "set": "summer2023CoralMageSet",
	  "event": {
		"start": "2023-06-20T08:00-04:00",
		"end": "2023-07-31T23:59-04:00",
		"npcImageSuffix": "_summer",
		"season": "summer",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Coral Antlers",
	  "notes": "The wisdom of an entire ecosystem is with you when you work your marine magic. Increases Perception by 7. Limited Edition 2023 Summer Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_summer2023Mage",
	  "klass": "special",
	  "index": "summer2023Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_summer2023Healer": {
	  "set": "summer2023KelpHealerSet",
	  "event": {
		"start": "2023-06-20T08:00-04:00",
		"end": "2023-07-31T23:59-04:00",
		"npcImageSuffix": "_summer",
		"season": "summer",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Kelp Crown",
	  "notes": "They're not snakes! You can open your eyes, it's safe! Increases Intelligence by 7. Limited Edition 2023 Summer Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_summer2023Healer",
	  "klass": "special",
	  "index": "summer2023Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2023Healer": {
	  "set": "fall2023BogCreatureHealerSet",
	  "event": {
		"start": "2023-09-21T08:00-04:00",
		"end": "2023-10-31T23:59-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Bog Creature Mask",
	  "notes": "With eyes as dark as the bog it emerged from, it fixes its gaze upon enemies. Increases Intelligence by 7. Limited Edition 2023 Fall Gear.",
	  "value": 60,
	  "int": 7,
	  "type": "head",
	  "key": "head_special_fall2023Healer",
	  "klass": "special",
	  "index": "fall2023Healer",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_special_fall2023Mage": {
	  "set": "fall2023ScarletWarlockMageSet",
	  "event": {
		"start": "2023-09-21T08:00-04:00",
		"end": "2023-10-31T23:59-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "wizard",
	  "text": "Scarlet Warlock Mask",
	  "notes": "With piercing eyes and pointed flair, it makes any illusion a sudden possibility. Increases Perception by 7. Limited Edition 2023 Fall Gear.",
	  "value": 60,
	  "per": 7,
	  "type": "head",
	  "key": "head_special_fall2023Mage",
	  "klass": "special",
	  "index": "fall2023Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2023Rogue": {
	  "set": "fall2023WitchsBrewRogueSet",
	  "event": {
		"start": "2023-09-21T08:00-04:00",
		"end": "2023-10-31T23:59-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Enchanted Visage",
	  "notes": "This jinxed stew has given you the fuzzy face and long ears of a donkey! How very Shakespearean. Increases Perception by 9. Limited Edition 2023 Fall Gear.",
	  "value": 60,
	  "per": 9,
	  "type": "head",
	  "key": "head_special_fall2023Rogue",
	  "klass": "special",
	  "index": "fall2023Rogue",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_special_fall2023Warrior": {
	  "set": "fall2023ScaryMovieWarriorSet",
	  "event": {
		"start": "2023-09-21T08:00-04:00",
		"end": "2023-10-31T23:59-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Haunted Screen",
	  "notes": "What horror lurks in this realm of distortion and static? You'll have to stay tuned to find out! Increases Strength by 9. Limited Edition 2023 Fall Gear.",
	  "value": 60,
	  "str": 9,
	  "type": "head",
	  "key": "head_special_fall2023Warrior",
	  "klass": "special",
	  "index": "fall2023Warrior",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201402": {
	  "text": "Winged Helm",
	  "notes": "This winged circlet imbues the wearer with the speed of the wind! Confers no benefit. February 2014 Subscriber Item.",
	  "mystery": "201402",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201402",
	  "set": "mystery-201402",
	  "klass": "mystery",
	  "index": "201402",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201405": {
	  "text": "Flame of Mind",
	  "notes": "Burn away the procrastination! Confers no benefit. May 2014 Subscriber Item.",
	  "mystery": "201405",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201405",
	  "set": "mystery-201405",
	  "klass": "mystery",
	  "index": "201405",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201406": {
	  "text": "Crown of Tentacles",
	  "notes": "The tentacles of this helm gather up magical energy from the water. Confers no benefit. June 2014 Subscriber Item.",
	  "mystery": "201406",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201406",
	  "set": "mystery-201406",
	  "klass": "mystery",
	  "index": "201406",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201407": {
	  "text": "Undersea Explorer Helm",
	  "notes": "This helm makes it easy to explore underwater! It sort of makes you look like a googly-eyed fish, too. Very retro! Confers no benefit. July 2014 Subscriber Item.",
	  "mystery": "201407",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201407",
	  "set": "mystery-201407",
	  "klass": "mystery",
	  "index": "201407",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201408": {
	  "text": "Sun Crown",
	  "notes": "This blazing crown gives its wearer great strength of will. Confers no benefit. August 2014 Subscriber Item.",
	  "mystery": "201408",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201408",
	  "set": "mystery-201408",
	  "klass": "mystery",
	  "index": "201408",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201411": {
	  "text": "Steel Helm of Sporting",
	  "notes": "This is the traditional helmet worn in the beloved Habitican sport of Balance Ball, which consists of covering yourself with heavy protective gear and then committing to a healthy work-life balance..... WHILE PURSUED BY HIPPOGRIFFS. Confers no benefit. November 2014 Subscriber Item.",
	  "mystery": "201411",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201411",
	  "set": "mystery-201411",
	  "klass": "mystery",
	  "index": "201411",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201412": {
	  "text": "Penguin Hat",
	  "notes": "Who's a penguin? Confers no benefit. December 2014 Subscriber Item.",
	  "mystery": "201412",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201412",
	  "set": "mystery-201412",
	  "klass": "mystery",
	  "index": "201412",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201501": {
	  "text": "Starry Helm",
	  "notes": "The constellations flicker and swirl in this helm, guiding the wearer's thoughts towards focus. Confers no benefit. January 2015 Subscriber Item.",
	  "mystery": "201501",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201501",
	  "set": "mystery-201501",
	  "klass": "mystery",
	  "index": "201501",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201505": {
	  "text": "Green Knight Helm",
	  "notes": "The green plume on this iron helm waves proudly. Confers no benefit. May 2015 Subscriber Item.",
	  "mystery": "201505",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201505",
	  "set": "mystery-201505",
	  "klass": "mystery",
	  "index": "201505",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201508": {
	  "text": "Cheetah Hat",
	  "notes": "This cozy cheetah hat is very fuzzy! Confers no benefit. August 2015 Subscriber Item.",
	  "mystery": "201508",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201508",
	  "set": "mystery-201508",
	  "klass": "mystery",
	  "index": "201508",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201509": {
	  "text": "Werewolf Mask",
	  "notes": "This IS a mask, right? Confers no benefit. September 2015 Subscriber Item.",
	  "mystery": "201509",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201509",
	  "set": "mystery-201509",
	  "klass": "mystery",
	  "index": "201509",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201511": {
	  "text": "Log Crown",
	  "notes": "Count the number of rings to learn how old this crown is. Confers no benefit. November 2015 Subscriber Item.",
	  "mystery": "201511",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201511",
	  "set": "mystery-201511",
	  "klass": "mystery",
	  "index": "201511",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201512": {
	  "text": "Winter Flame",
	  "notes": "These flames burn cold with pure intellect. Confers no benefit. December 2015 Subscriber Item.",
	  "mystery": "201512",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201512",
	  "set": "mystery-201512",
	  "klass": "mystery",
	  "index": "201512",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201601": {
	  "text": "Helm of True Resolve",
	  "notes": "Stay resolute, brave champion! Confers no benefit. January 2016 Subscriber Item.",
	  "mystery": "201601",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201601",
	  "set": "mystery-201601",
	  "klass": "mystery",
	  "index": "201601",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201602": {
	  "text": "Heartbreaker Hood",
	  "notes": "Shield your identity from all your admirers. Confers no benefit. February 2016 Subscriber Item.",
	  "mystery": "201602",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201602",
	  "set": "mystery-201602",
	  "klass": "mystery",
	  "index": "201602",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201603": {
	  "text": "Lucky Hat",
	  "notes": "This top hat is a magical good-luck charm. Confers no benefit. March 2016 Subscriber Item.",
	  "mystery": "201603",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201603",
	  "set": "mystery-201603",
	  "klass": "mystery",
	  "index": "201603",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201604": {
	  "text": "Crown o' Flowers",
	  "notes": "These woven flowers make a surprisingly strong helm! Confers no benefit. April 2016 Subscriber Item.",
	  "mystery": "201604",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201604",
	  "set": "mystery-201604",
	  "klass": "mystery",
	  "index": "201604",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201605": {
	  "text": "Marching Bard Hat",
	  "notes": "Seventy-six dragons led the big parade, with a hundred and ten gryphons close at hand! Confers no benefit. May 2016 Subscriber Item.",
	  "mystery": "201605",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201605",
	  "set": "mystery-201605",
	  "klass": "mystery",
	  "index": "201605",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201606": {
	  "text": "Selkie Cap",
	  "notes": "Hum the tune of the ocean as you blend in with the frolicking seals! Confers no benefit. June 2016 Subscriber Item.",
	  "mystery": "201606",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201606",
	  "set": "mystery-201606",
	  "klass": "mystery",
	  "index": "201606",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201607": {
	  "text": "Seafloor Rogue Helm",
	  "notes": "The kelp growing from this helm helps camouflage you. Confers no benefit. July 2016 Subscriber Item.",
	  "mystery": "201607",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201607",
	  "set": "mystery-201607",
	  "klass": "mystery",
	  "index": "201607",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201608": {
	  "text": "Helm of Lightning",
	  "notes": "This crackling helm conducts electricity! Confers no benefit. August 2016 Subscriber Item.",
	  "mystery": "201608",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201608",
	  "set": "mystery-201608",
	  "klass": "mystery",
	  "index": "201608",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201609": {
	  "text": "Cow Hat",
	  "notes": "You'll never want to remooooove this cow hat. Confers no benefit. September 2016 Subscriber Item.",
	  "mystery": "201609",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201609",
	  "set": "mystery-201609",
	  "klass": "mystery",
	  "index": "201609",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201610": {
	  "text": "Spectral Flame",
	  "notes": "These flames will awaken your ghostly power. Confers no benefit. October 2016 Subscriber Item.",
	  "mystery": "201610",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201610",
	  "set": "mystery-201610",
	  "klass": "mystery",
	  "index": "201610",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201611": {
	  "text": "Fancy Feasting Hat",
	  "notes": "You're guaranteed to be the fanciest person at the feast in this plumed chapeau. Confers no benefit. November 2016 Subscriber Item.",
	  "mystery": "201611",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201611",
	  "set": "mystery-201611",
	  "klass": "mystery",
	  "index": "201611",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201612": {
	  "text": "Nutcracker Helm",
	  "notes": "This tall and splendid helm adds a magnificent element to your holiday apparel! Confers no benefit. December 2016 Subscriber Item.",
	  "mystery": "201612",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201612",
	  "set": "mystery-201612",
	  "klass": "mystery",
	  "index": "201612",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201702": {
	  "text": "Heartstealer Hood",
	  "notes": "Though this hood conceals your face, it only magnifies your powers of attraction! Confers no benefit. February 2017 Subscriber Item.",
	  "mystery": "201702",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201702",
	  "set": "mystery-201702",
	  "klass": "mystery",
	  "index": "201702",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201703": {
	  "text": "Shimmer Helm",
	  "notes": "The soft light reflected from this horned helm will soothe even the most enraged foe. Confers no benefit. March 2017 Subscriber Item.",
	  "mystery": "201703",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201703",
	  "set": "mystery-201703",
	  "klass": "mystery",
	  "index": "201703",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201705": {
	  "text": "Feathered Fighter Helm",
	  "notes": "Habitica is known for its fierce and productive Gryphon Warriors! Join their prestigious ranks when you don this feathery helm. Confers no benefit. May 2017 Subscriber Item.",
	  "mystery": "201705",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201705",
	  "set": "mystery-201705",
	  "klass": "mystery",
	  "index": "201705",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201707": {
	  "text": "Jellymancer Helm",
	  "notes": "Need some extra hands for your tasks? This translucent jelly helm has quite a few tentacles to lend you help! Confers no benefit. July 2017 Subscriber Item.",
	  "mystery": "201707",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201707",
	  "set": "mystery-201707",
	  "klass": "mystery",
	  "index": "201707",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201710": {
	  "text": "Imperious Imp Helm",
	  "notes": "This helm makes you look intimidating... but it won't do any favors for your depth perception! Confers no benefit. October 2017 Subscriber Item.",
	  "mystery": "201710",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201710",
	  "set": "mystery-201710",
	  "klass": "mystery",
	  "index": "201710",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201712": {
	  "text": "Candlemancer Crown",
	  "notes": "This crown will bring light and warmth to even the darkest winter night. Confers no benefit. December 2017 Subscriber Item.",
	  "mystery": "201712",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201712",
	  "set": "mystery-201712",
	  "klass": "mystery",
	  "index": "201712",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201802": {
	  "text": "Love Bug Helm",
	  "notes": "The antennae on this helm act as cute dowsing rods, detecting feelings of love and support nearby. Confers no benefit. February 2018 Subscriber Item.",
	  "mystery": "201802",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201802",
	  "set": "mystery-201802",
	  "klass": "mystery",
	  "index": "201802",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201803": {
	  "text": "Daring Dragonfly Circlet",
	  "notes": "Although its appearance is quite decorative, you can engage the wings on this circlet for extra lift! Confers no benefit. March 2018 Subscriber Item.",
	  "mystery": "201803",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201803",
	  "set": "mystery-201803",
	  "klass": "mystery",
	  "index": "201803",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201805": {
	  "text": "Phenomenal Peacock Helm",
	  "notes": "This helm will make you the proudest and prettiest (possibly also the loudest) bird in town. Confers no benefit. May 2018 Subscriber Item.",
	  "mystery": "201805",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201805",
	  "set": "mystery-201805",
	  "klass": "mystery",
	  "index": "201805",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201806": {
	  "text": "Alluring Anglerfish Helm",
	  "notes": "The mesmerizing light atop this helm will call all the creatures of the sea to your side. We urge you to use your glowy powers of attraction for good! Confers no benefit. June 2018 Subscriber Item.",
	  "mystery": "201806",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201806",
	  "set": "mystery-201806",
	  "klass": "mystery",
	  "index": "201806",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201807": {
	  "text": "Sea Serpent Helm",
	  "notes": "The strong scales on this helm will protect you from any manner of oceanic foe. Confers no benefit. July 2018 Subscriber Item.",
	  "mystery": "201807",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201807",
	  "set": "mystery-201807",
	  "klass": "mystery",
	  "index": "201807",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201808": {
	  "text": "Lava Dragon Cowl",
	  "notes": "The glowing horns on this cowl will light your way through underground caverns. Confers no benefit. August 2018 Subscriber Item.",
	  "mystery": "201808",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201808",
	  "set": "mystery-201808",
	  "klass": "mystery",
	  "index": "201808",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201809": {
	  "text": "Crown of Autumn Flowers",
	  "notes": "The last flowers of autumn's warm days are a reminder of the beauty of the season. Confers no benefit. September 2018 Subscriber Item.",
	  "mystery": "201809",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201809",
	  "set": "mystery-201809",
	  "klass": "mystery",
	  "index": "201809",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201810": {
	  "text": "Dark Forest Helm",
	  "notes": "If you find yourself traveling through a spooky place, the glowing red eyes of this helm will surely scare away any enemies in your path. Confers no benefit. October 2018 Subscriber Item.",
	  "mystery": "201810",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201810",
	  "set": "mystery-201810",
	  "klass": "mystery",
	  "index": "201810",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201811": {
	  "text": "Splendid Sorcerer's Hat",
	  "notes": "Wear this feathered hat to stand out at even the fanciest wizardly gatherings! Confers no benefit. November 2018 Subscriber Item.",
	  "mystery": "201811",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201811",
	  "set": "mystery-201811",
	  "klass": "mystery",
	  "index": "201811",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201901": {
	  "text": "Polaris Helm",
	  "notes": "The glowing gems on this helm contain light magically captured from winter auroras. Confers no benefit. January 2019 Subscriber Item.",
	  "mystery": "201901",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201901",
	  "set": "mystery-201901",
	  "klass": "mystery",
	  "index": "201901",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201903": {
	  "text": "Sunny Side Up Helm",
	  "notes": "Some may call you an egghead, but that's OK because you know how to take a yolk. Confers no benefit. March 2019 Subscriber Item.",
	  "mystery": "201903",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201903",
	  "set": "mystery-201903",
	  "klass": "mystery",
	  "index": "201903",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201904": {
	  "text": "Opulent Opal Circlet",
	  "notes": "The opals in this circlet shine in every color of the rainbow, giving it a variety of magical properties. Confers no benefit. April 2019 Subscriber Item.",
	  "mystery": "201904",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201904",
	  "set": "mystery-201904",
	  "klass": "mystery",
	  "index": "201904",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201907": {
	  "text": "Backwards Cap",
	  "notes": "Nothing says “I'm relaxing here!” like a backwards cap. Confers no benefit. July 2019 Subscriber Item.",
	  "mystery": "201907",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201907",
	  "set": "mystery-201907",
	  "klass": "mystery",
	  "index": "201907",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201909": {
	  "text": "Affable Acorn Hat",
	  "notes": "Every acorn needs a hat! Er, cupule, if you want to get technical about it. Confers no benefit. September 2019 Subscriber Item.",
	  "mystery": "201909",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201909",
	  "set": "mystery-201909",
	  "klass": "mystery",
	  "index": "201909",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201910": {
	  "text": "Cryptic Flame",
	  "notes": "These flames reveal arcane secrets before your very eyes! Confers no benefit. October 2019 Subscriber Item.",
	  "mystery": "201910",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201910",
	  "set": "mystery-201910",
	  "klass": "mystery",
	  "index": "201910",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201911": {
	  "text": "Charmed Crystal Hat",
	  "notes": "Each of the crystal points attached to this hat endows you with a special power: mystic clairvoyance, arcane wisdom, and... sorcerous plate spinning? All right then. Confers no benefit. November 2019 Subscriber Item.",
	  "mystery": "201911",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201911",
	  "set": "mystery-201911",
	  "klass": "mystery",
	  "index": "201911",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_201912": {
	  "text": "Polar Pixie Crown",
	  "notes": "This glittering snowflake grants you resistance to the biting cold no matter how high you fly! Confers no benefit. December 2019 Subscriber Item.",
	  "mystery": "201912",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_201912",
	  "set": "mystery-201912",
	  "klass": "mystery",
	  "index": "201912",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202001": {
	  "text": "Fabled Fox Ears",
	  "notes": "Your hearing will be so sharp, you'll hear the stars twinkling and the moon spinning. Confers no benefit. January 2020 Subscriber Item.",
	  "mystery": "202001",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202001",
	  "set": "mystery-202001",
	  "klass": "mystery",
	  "index": "202001",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202003": {
	  "text": "Barbed Helm",
	  "notes": "Be careful, this helm is sharp in more ways than one! Confers no benefit. March 2020 Subscriber Item.",
	  "mystery": "202003",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202003",
	  "set": "mystery-202003",
	  "klass": "mystery",
	  "index": "202003",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202006": {
	  "text": "Sugilite Circlet",
	  "notes": "The positive energy of these radiant purple stones will draw the sea's friendliest creatures to your side. Confers no benefit. June 2020 Subscriber Item.",
	  "mystery": "202006",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202006",
	  "set": "mystery-202006",
	  "klass": "mystery",
	  "index": "202006",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202007": {
	  "text": "Outstanding Orca Helm",
	  "notes": "This helm will tune you in to the complex and beautiful songs of your fellow cetaceans. Confers no benefit. July 2020 Subscriber Item.",
	  "mystery": "202007",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202007",
	  "set": "mystery-202007",
	  "klass": "mystery",
	  "index": "202007",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202008": {
	  "text": "Owlish Oracle Headdress",
	  "notes": "WHO? WHO? WHO approaches, seeking your counsel? Confers no benefit. August 2020 Subscriber Item.",
	  "mystery": "202008",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202008",
	  "set": "mystery-202008",
	  "klass": "mystery",
	  "index": "202008",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202010": {
	  "text": "Batty Ears",
	  "notes": "We'll spare you another joke about echolocation... cation... cation. Confers no benefit. October 2020 Subscriber Item.",
	  "mystery": "202010",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202010",
	  "set": "mystery-202010",
	  "klass": "mystery",
	  "index": "202010",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202011": {
	  "text": "Foliated Magus Hat",
	  "notes": "Wield the power of the changing seasons while also looking very stylish! Confers no benefit. November 2020 Subscriber Item.",
	  "mystery": "202011",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202011",
	  "set": "mystery-202011",
	  "klass": "mystery",
	  "index": "202011",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202012": {
	  "text": "Frostfire Mask",
	  "notes": "This imposing mask features piercing eyes that will blind foes like the glare of sunlight on fresh snow. Confers no benefit. December 2020 Subscriber Item.",
	  "mystery": "202012",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202012",
	  "set": "mystery-202012",
	  "klass": "mystery",
	  "index": "202012",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202101": {
	  "text": "Snazzy Snow Leopard Helm",
	  "notes": "The icy blue eyes on this feline helm will freeze even the most intimidating task on your list. Confers no benefit. January 2021 Subscriber Item.",
	  "mystery": "202101",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202101",
	  "set": "mystery-202101",
	  "klass": "mystery",
	  "index": "202101",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202103": {
	  "text": "Blossom Viewing Circlet",
	  "notes": "Greet spring in style in this circlet woven from the first blooming branches. Confers no benefit. March 2021 Subscriber Item.",
	  "mystery": "202103",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202103",
	  "set": "mystery-202103",
	  "klass": "mystery",
	  "index": "202103",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202106": {
	  "text": "Sunset Aureole",
	  "notes": "This crown captures the beauty of the sun’s last summer light. Confers no benefit. June 2021 Subscriber Item.",
	  "mystery": "202106",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202106",
	  "set": "mystery-202106",
	  "klass": "mystery",
	  "index": "202106",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202107": {
	  "text": "Sublime Sun Hat",
	  "notes": "Perfect for enjoying but also protecting yourself from our powerful frenemy, the sun. Confers no benefit. July 2021 Subscriber Item.",
	  "mystery": "202107",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202107",
	  "set": "mystery-202107",
	  "klass": "mystery",
	  "index": "202107",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202108": {
	  "text": "Fiery Shounen Hair",
	  "notes": "You're looking super fresh, just sayin'. Confers no benefit. August 2021 Subscriber Item.",
	  "mystery": "202108",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202108",
	  "set": "mystery-202108",
	  "klass": "mystery",
	  "index": "202108",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202110": {
	  "text": "Mossy Gargoyle Helm",
	  "notes": "The frightening visage of this stony helm will surely repel malevolent forces or even bad habits! Confers no benefit. October 2021 Subscriber Item.",
	  "mystery": "202110",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202110",
	  "set": "mystery-202110",
	  "klass": "mystery",
	  "index": "202110",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202111": {
	  "text": "Chronovision Hat",
	  "notes": "A fine and fancy hat, with goggles that let you see through time. Pretty cool, right? Confers no benefit. November 2021 Subscriber Item.",
	  "mystery": "202111",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202111",
	  "set": "mystery-202111",
	  "klass": "mystery",
	  "index": "202111",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202112": {
	  "text": "Antarctic Undine Crown",
	  "notes": "This frozen crown shimmers like the hidden depths of an iceberg. Confers no benefit. December 2021 Subscriber Item.",
	  "mystery": "202112",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202112",
	  "set": "mystery-202112",
	  "klass": "mystery",
	  "index": "202112",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202202": {
	  "text": "Turquoise Twintails",
	  "notes": "You gotta have blue hair! Confers no benefit. February 2022 Subscriber Item.",
	  "mystery": "202202",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202202",
	  "set": "mystery-202202",
	  "klass": "mystery",
	  "index": "202202",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202206": {
	  "text": "Sea Sprite Circlet",
	  "notes": "The blue pearl in this circlet grants you waterbending powers. Use them wisely! Confers no benefit. June 2022 Subscriber Item.",
	  "mystery": "202206",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202206",
	  "set": "mystery-202206",
	  "klass": "mystery",
	  "index": "202206",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202207": {
	  "text": "Jammin' Jelly Helm",
	  "notes": "Need a hand with your tasks? Will several dozen bioluminescent tentacles do? Confers no benefit. July 2022 Subscriber Item.",
	  "mystery": "202207",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202207",
	  "set": "mystery-202207",
	  "klass": "mystery",
	  "index": "202207",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202208": {
	  "text": "Perky Ponytail",
	  "notes": "Enjoy showing off this voluminous hair - it can double as a whip in a pinch! Confers no benefit. August 2022 Subscriber Item.",
	  "mystery": "202208",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202208",
	  "set": "mystery-202208",
	  "klass": "mystery",
	  "index": "202208",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202210": {
	  "text": "Ominous Ophidian Helm",
	  "notes": "This scaly hood will surely terrify your To-Do list into submission! Confers no benefit. October 2022 Subscriber Item.",
	  "mystery": "202210",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202210",
	  "set": "mystery-202210",
	  "klass": "mystery",
	  "index": "202210",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202211": {
	  "text": "Electromancer Hat",
	  "notes": "Be careful with this powerful hat, its effect on admirers can be quite shocking! Confers no benefit. November 2022 Subscriber Item.",
	  "mystery": "202211",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202211",
	  "set": "mystery-202211",
	  "klass": "mystery",
	  "index": "202211",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202301": {
	  "text": "Valiant Vulpine Ears",
	  "notes": "Your hearing will be so sharp you'll hear the dawn breaking and the dew sparkling. Confers no benefit. January 2023 Subscriber Item.",
	  "mystery": "202301",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202301",
	  "set": "mystery-202301",
	  "klass": "mystery",
	  "index": "202301",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202303": {
	  "text": "Mane Character Hair",
	  "notes": "What better way to let everyone know you’re the star of this tale than to have blue and improbably spiky hair? Confers no benefit. March 2023 Subscriber Item.",
	  "mystery": "202303",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202303",
	  "set": "mystery-202303",
	  "klass": "mystery",
	  "index": "202303",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202304": {
	  "text": "Tiptop Teapot Lid",
	  "notes": "Wear this helm for your own safe-tea. Confers no benefit. April 2023 Subscriber Item.",
	  "mystery": "202304",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202304",
	  "set": "mystery-202304",
	  "klass": "mystery",
	  "index": "202304",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_202308": {
	  "text": "Purple Protagonist Hair",
	  "notes": "Does the unruly cowlick sticking up from the middle of your head represent your persistence or your penchant for mischief? Confers no benefit. August 2023 Subscriber Item.",
	  "mystery": "202308",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_202308",
	  "set": "mystery-202308",
	  "klass": "mystery",
	  "index": "202308",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_301404": {
	  "text": "Fancy Top Hat",
	  "notes": "A fancy top hat for the finest of gentlefolk! January 3015 Subscriber Item. Confers no benefit.",
	  "mystery": "301404",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_301404",
	  "set": "mystery-301404",
	  "klass": "mystery",
	  "index": "301404",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_301405": {
	  "text": "Basic Top Hat",
	  "notes": "A basic top hat, just begging to be paired with some fancy head accessories. Confers no benefit. May 3015 Subscriber Item.",
	  "mystery": "301405",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_301405",
	  "set": "mystery-301405",
	  "klass": "mystery",
	  "index": "301405",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_301703": {
	  "text": "Fancy Feather Hat",
	  "notes": "The feathers for this hat were donated by Miss Prue's Finishing School for Fancy Peacocks. Wear them with pride! Confers no benefit. March 3017 Subscriber Item.",
	  "mystery": "301703",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_301703",
	  "set": "mystery-301703",
	  "klass": "mystery",
	  "index": "301703",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_mystery_301704": {
	  "text": "Pheasant Plume Hat",
	  "notes": "What could be more pleasant than a plume from a pheasant? Confers no benefit. April 3017 Subscriber Item.",
	  "mystery": "301704",
	  "value": 0,
	  "type": "head",
	  "key": "head_mystery_301704",
	  "set": "mystery-301704",
	  "klass": "mystery",
	  "index": "301704",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_lunarCrown": {
	  "notes": "This crown strengthens health and sharpens senses, especially when the moon is full. Increases Constitution by 7 and Perception by 7. Enchanted Armoire: Soothing Lunar Set (Item 1 of 3).",
	  "con": 7,
	  "per": 7,
	  "set": "soothing",
	  "text": "Soothing Lunar Crown",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_lunarCrown",
	  "klass": "armoire",
	  "index": "lunarCrown",
	  "str": 0,
	  "int": 0
	},
	"head_armoire_redHairbow": {
	  "notes": "Become strong, tough, and smart while wearing this beautiful Red Hairbow! Increases Strength by 5, Constitution by 5, and Intelligence by 5. Enchanted Armoire: Red Hairbow Set (Item 1 of 2).",
	  "str": 5,
	  "int": 5,
	  "con": 5,
	  "set": "redHairbow",
	  "text": "Red Hairbow",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_redHairbow",
	  "klass": "armoire",
	  "index": "redHairbow",
	  "per": 0
	},
	"head_armoire_violetFloppyHat": {
	  "notes": "Many spells have been sewn into this simple hat, giving it a pleasing purple color. Increases Perception by 5, Intelligence by 5, and Constitution by 5. Enchanted Armoire: Violet Loungewear Set (Item 1 of 3).",
	  "per": 5,
	  "int": 5,
	  "con": 5,
	  "set": "violetLoungewear",
	  "text": "Violet Floppy Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_violetFloppyHat",
	  "klass": "armoire",
	  "index": "violetFloppyHat",
	  "str": 0
	},
	"head_armoire_gladiatorHelm": {
	  "notes": "To be a gladiator you must be not only strong.... but cunning. Increases Intelligence by 7 and Perception by 7. Enchanted Armoire: Gladiator Set (Item 1 of 3).",
	  "per": 7,
	  "int": 7,
	  "set": "gladiator",
	  "text": "Gladiator Helm",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_gladiatorHelm",
	  "klass": "armoire",
	  "index": "gladiatorHelm",
	  "str": 0,
	  "con": 0
	},
	"head_armoire_rancherHat": {
	  "notes": "Round up your pets and wrangle your mounts while wearing this magical Rancher Hat! Increases Strength by 5, Perception by 5, and Intelligence by 5. Enchanted Armoire: Rancher Set (Item 1 of 3).",
	  "str": 5,
	  "per": 5,
	  "int": 5,
	  "set": "rancher",
	  "text": "Rancher Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_rancherHat",
	  "klass": "armoire",
	  "index": "rancherHat",
	  "con": 0
	},
	"head_armoire_royalCrown": {
	  "str": 10,
	  "set": "royal",
	  "notes": "Hooray for the ruler, mighty and strong! Increases Strength by 10. Enchanted Armoire: Royal Set (Item 1 of 3).",
	  "text": "Royal Crown",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_royalCrown",
	  "klass": "armoire",
	  "index": "royalCrown",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_blueHairbow": {
	  "notes": "Become perceptive, tough, and smart while wearing this beautiful Blue Hairbow! Increases Perception by 5, Constitution by 5, and Intelligence by 5. Enchanted Armoire: Blue Hairbow Set (Item 1 of 2).",
	  "per": 5,
	  "int": 5,
	  "con": 5,
	  "set": "blueHairbow",
	  "text": "Blue Hairbow",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_blueHairbow",
	  "klass": "armoire",
	  "index": "blueHairbow",
	  "str": 0
	},
	"head_armoire_goldenLaurels": {
	  "per": 8,
	  "con": 8,
	  "set": "goldenToga",
	  "notes": "These golden laurels reward those who have conquered bad habits. Increases Perception and Constitution by 8 each. Enchanted Armoire: Golden Toga Set (Item 2 of 3).",
	  "text": "Golden Laurels",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_goldenLaurels",
	  "klass": "armoire",
	  "index": "goldenLaurels",
	  "str": 0,
	  "int": 0
	},
	"head_armoire_hornedIronHelm": {
	  "con": 9,
	  "str": 7,
	  "set": "hornedIron",
	  "notes": "Fiercely hammered from iron, this horned helmet is nearly impossible to break. Increases Constitution by 9 and Strength by 7. Enchanted Armoire: Horned Iron Set (Item 1 of 3).",
	  "text": "Horned Iron Helm",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_hornedIronHelm",
	  "klass": "armoire",
	  "index": "hornedIronHelm",
	  "int": 0,
	  "per": 0
	},
	"head_armoire_yellowHairbow": {
	  "int": 5,
	  "per": 5,
	  "str": 5,
	  "set": "yellowHairbow",
	  "notes": "Become perceptive, strong, and smart while wearing this beautiful Yellow Hairbow! Increases Perception, Strength, and Intelligence by 5 each. Enchanted Armoire: Yellow Hairbow Set (Item 1 of 2).",
	  "text": "Yellow Hairbow",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_yellowHairbow",
	  "klass": "armoire",
	  "index": "yellowHairbow",
	  "con": 0
	},
	"head_armoire_redFloppyHat": {
	  "con": 6,
	  "int": 6,
	  "per": 6,
	  "set": "redLoungewear",
	  "notes": "Many spells have been sewn into this simple hat, giving it a radiant red color. Increases Constitution, Intelligence, and Perception by 6 each. Enchanted Armoire: Red Loungewear Set (Item 1 of 3).",
	  "text": "Red Floppy Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_redFloppyHat",
	  "klass": "armoire",
	  "index": "redFloppyHat",
	  "str": 0
	},
	"head_armoire_plagueDoctorHat": {
	  "int": 5,
	  "str": 6,
	  "con": 5,
	  "set": "plagueDoctor",
	  "notes": "An authentic hat worn by the doctors who battle the Plague of Procrastination! Increases Strength by 6, Intelligence by 5, and Constitution by 5. Enchanted Armoire: Plague Doctor Set (Item 1 of 3).",
	  "text": "Plague Doctor Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_plagueDoctorHat",
	  "klass": "armoire",
	  "index": "plagueDoctorHat",
	  "per": 0
	},
	"head_armoire_blackCat": {
	  "int": 9,
	  "per": 9,
	  "notes": "This black hat is... purring. And twitching its tail. And breathing? Yeah, you just have a sleeping cat on your head. Increases Intelligence and Perception by 9 each. Enchanted Armoire: Independent Item.",
	  "text": "Black Cat Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_blackCat",
	  "set": "armoire-blackCat",
	  "klass": "armoire",
	  "index": "blackCat",
	  "str": 0,
	  "con": 0
	},
	"head_armoire_orangeCat": {
	  "con": 9,
	  "str": 9,
	  "notes": "This orange hat is... purring. And twitching its tail. And breathing? Yeah, you just have a sleeping cat on your head. Increases Strength and Constitution by 9 each. Enchanted Armoire: Independent Item.",
	  "text": "Orange Cat Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_orangeCat",
	  "set": "armoire-orangeCat",
	  "klass": "armoire",
	  "index": "orangeCat",
	  "int": 0,
	  "per": 0
	},
	"head_armoire_blueFloppyHat": {
	  "per": 7,
	  "int": 7,
	  "con": 7,
	  "set": "blueLoungewear",
	  "notes": "Many spells have been sewn into this simple hat, giving it a brilliant blue color. Increases Constitution, Intelligence, and Perception by 7 each. Enchanted Armoire: Blue Loungewear Set (Item 1 of 3).",
	  "text": "Blue Floppy Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_blueFloppyHat",
	  "klass": "armoire",
	  "index": "blueFloppyHat",
	  "str": 0
	},
	"head_armoire_shepherdHeaddress": {
	  "int": 9,
	  "set": "shepherd",
	  "notes": "Sometimes the gryphons that you herd like to chew on this headdress, but it makes you seem more intelligent nonetheless. Increases Intelligence by 9. Enchanted Armoire: Shepherd Set (Item 3 of 3).",
	  "text": "Shepherd Headdress",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_shepherdHeaddress",
	  "klass": "armoire",
	  "index": "shepherdHeaddress",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_crystalCrescentHat": {
	  "int": 7,
	  "per": 7,
	  "set": "crystalCrescent",
	  "notes": "The design on this hat waxes and wanes with the phases of the moon. Increases Intelligence and Perception by 7 each. Enchanted Armoire: Crystal Crescent Set (Item 1 of 3).",
	  "text": "Crystal Crescent Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_crystalCrescentHat",
	  "klass": "armoire",
	  "index": "crystalCrescentHat",
	  "str": 0,
	  "con": 0
	},
	"head_armoire_dragonTamerHelm": {
	  "int": 15,
	  "set": "dragonTamer",
	  "notes": "You look exactly like a dragon. The perfect camouflage... Increases Intelligence by 15. Enchanted Armoire: Dragon Tamer Set (Item 1 of 3).",
	  "text": "Dragon Tamer Helm",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_dragonTamerHelm",
	  "klass": "armoire",
	  "index": "dragonTamerHelm",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_barristerWig": {
	  "str": 10,
	  "set": "barrister",
	  "notes": "This bouncy wig is enough to frighten away even the fiercest foe. Increases Strength by 10. Enchanted Armoire: Barrister Set (Item 1 of 3).",
	  "text": "Barrister Wig",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_barristerWig",
	  "klass": "armoire",
	  "index": "barristerWig",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_jesterCap": {
	  "per": 15,
	  "set": "jester",
	  "notes": "The bells on this hat might distract your opponents, but they just help you focus. Increases Perception by 15. Enchanted Armoire: Jester Set (Item 1 of 3).",
	  "text": "Jester Cap",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_jesterCap",
	  "klass": "armoire",
	  "index": "jesterCap",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_minerHelmet": {
	  "int": 5,
	  "set": "miner",
	  "notes": "Protect your head from falling tasks! Increases Intelligence by 5. Enchanted Armoire: Miner Set (Item 1 of 3).",
	  "text": "Miner Helmet",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_minerHelmet",
	  "klass": "armoire",
	  "index": "minerHelmet",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_basicArcherCap": {
	  "per": 6,
	  "set": "basicArcher",
	  "notes": "No archer would be complete without a jaunty cap! Increases Perception by 6. Enchanted Armoire: Basic Archer Set (Item 3 of 3).",
	  "text": "Basic Archer Cap",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_basicArcherCap",
	  "klass": "armoire",
	  "index": "basicArcherCap",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_graduateCap": {
	  "int": 9,
	  "set": "graduate",
	  "notes": "Congratulations! Your deep thoughts have earned you this thinking cap. Increases Intelligence by 9. Enchanted Armoire: Graduate Set (Item 3 of 3).",
	  "text": "Graduate Cap",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_graduateCap",
	  "klass": "armoire",
	  "index": "graduateCap",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_greenFloppyHat": {
	  "per": 8,
	  "int": 8,
	  "con": 8,
	  "set": "greenLoungewear",
	  "notes": "Many spells have been sewn into this simple hat, giving it a gorgeous green color. Increases Constitution, Intelligence, and Perception by 8 each. Enchanted Armoire: Green Loungewear Set (Item 1 of 3).",
	  "text": "Green Floppy Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_greenFloppyHat",
	  "klass": "armoire",
	  "index": "greenFloppyHat",
	  "str": 0
	},
	"head_armoire_cannoneerBandanna": {
	  "int": 15,
	  "per": 15,
	  "set": "cannoneer",
	  "notes": "'Tis a cannoneer's life for me! Increases Intelligence and Perception by 15 each. Enchanted Armoire: Cannoneer Set (Item 3 of 3).",
	  "text": "Cannoneer Bandanna",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_cannoneerBandanna",
	  "klass": "armoire",
	  "index": "cannoneerBandanna",
	  "str": 0,
	  "con": 0
	},
	"head_armoire_falconerCap": {
	  "int": 10,
	  "set": "falconer",
	  "notes": "This jaunty cap helps you better understand birds of prey. Increases Intelligence by 10. Enchanted Armoire: Falconer Set (Item 2 of 3).",
	  "text": "Falconer Cap",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_falconerCap",
	  "klass": "armoire",
	  "index": "falconerCap",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_vermilionArcherHelm": {
	  "per": 12,
	  "set": "vermilionArcher",
	  "notes": "The magic ruby in this helm will help you aim with laser focus! Increases Perception by 12. Enchanted Armoire: Vermilion Archer Set (Item 3 of 3).",
	  "text": "Vermilion Archer Helm",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_vermilionArcherHelm",
	  "klass": "armoire",
	  "index": "vermilionArcherHelm",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_ogreMask": {
	  "con": 7,
	  "str": 7,
	  "set": "ogre",
	  "notes": "Your enemies will run for the hills when they see an Ogre coming their way! Increases Constitution and Strength by 7 each. Enchanted Armoire: Ogre Outfit (Item 1 of 3).",
	  "text": "Ogre Mask",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_ogreMask",
	  "klass": "armoire",
	  "index": "ogreMask",
	  "int": 0,
	  "per": 0
	},
	"head_armoire_ironBlueArcherHelm": {
	  "con": 9,
	  "set": "blueArcher",
	  "notes": "Hard-headed? No, you're just well protected. Increases Constitution by 9. Enchanted Armoire: Iron Archer Set (Item 1 of 3).",
	  "text": "Iron Blue Archer Helm",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_ironBlueArcherHelm",
	  "klass": "armoire",
	  "index": "ironBlueArcherHelm",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"head_armoire_woodElfHelm": {
	  "con": 12,
	  "set": "woodElf",
	  "notes": "This helm of leaves may look delicate, but it can protect you from inclement weather and dangerous foes. Increases Constitution by 12. Enchanted Armoire: Wood Elf Set (Item 1 of 3).",
	  "text": "Wood Elf Helm",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_woodElfHelm",
	  "klass": "armoire",
	  "index": "woodElfHelm",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"head_armoire_ramHeaddress": {
	  "con": 9,
	  "per": 7,
	  "set": "ramBarbarian",
	  "notes": "This elaborate helm is fashioned to look like a ram's head. Increases Constitution by 9 and Perception by 7. Enchanted Armoire: Ram Barbarian Set (Item 1 of 3).",
	  "text": "Ram Headdress",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_ramHeaddress",
	  "klass": "armoire",
	  "index": "ramHeaddress",
	  "str": 0,
	  "int": 0
	},
	"head_armoire_crownOfHearts": {
	  "str": 13,
	  "set": "queenOfHearts",
	  "notes": "This rosy red crown isn't just eye-catching! It will also strengthen your heart against tough tasks. Increases Strength by 13. Enchanted Armoire: Queen of Hearts Set (Item 1 of 3).",
	  "text": "Crown of Hearts",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_crownOfHearts",
	  "klass": "armoire",
	  "index": "crownOfHearts",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_mushroomDruidCap": {
	  "int": 6,
	  "str": 7,
	  "set": "mushroomDruid",
	  "notes": "Harvested deep in a misty forest, this cap grants the wearer knowledge of medicinal plants. Increases Intelligence by 6 and Strength by 7. Enchanted Armoire: Mushroom Druid Set (Item 1 of 3).",
	  "text": "Mushroom Druid Cap",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_mushroomDruidCap",
	  "klass": "armoire",
	  "index": "mushroomDruidCap",
	  "per": 0,
	  "con": 0
	},
	"head_armoire_merchantChaperon": {
	  "int": 7,
	  "per": 7,
	  "set": "merchant",
	  "notes": "This versatile wrapped wool hat will surely make you the most stylish seller in the market! Increases Perception and Intelligence by 7 each. Enchanted Armoire: Merchant Set (Item 1 of 3).",
	  "text": "Merchant Chaperon",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_merchantChaperon",
	  "klass": "armoire",
	  "index": "merchantChaperon",
	  "str": 0,
	  "con": 0
	},
	"head_armoire_vikingHelm": {
	  "str": 6,
	  "per": 8,
	  "set": "viking",
	  "notes": "No horns or wings are found on this helm: those are too easy for enemies to grab! Increases Strength by 6 and Perception by 8. Enchanted Armoire: Viking Set (Item 2 of 3).",
	  "text": "Viking Helm",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_vikingHelm",
	  "klass": "armoire",
	  "index": "vikingHelm",
	  "int": 0,
	  "con": 0
	},
	"head_armoire_swanFeatherCrown": {
	  "int": 8,
	  "set": "swanDancer",
	  "notes": "This tiara is lovely and light as a swan's feather! Increases Intelligence by 8. Enchanted Armoire: Swan Dancer Set (Item 1 of 3).",
	  "text": "Swan Feather Crown",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_swanFeatherCrown",
	  "klass": "armoire",
	  "index": "swanFeatherCrown",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_antiProcrastinationHelm": {
	  "per": 15,
	  "set": "antiProcrastination",
	  "notes": "This mighty steel helm will help you win the fight to be healthy, happy, and productive! Increases Perception by 15. Enchanted Armoire: Anti-Procrastination Set (Item 1 of 3).",
	  "text": "Anti-Procrastination Helm",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_antiProcrastinationHelm",
	  "klass": "armoire",
	  "index": "antiProcrastinationHelm",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_candlestickMakerHat": {
	  "int": 6,
	  "per": 6,
	  "set": "candlestickMaker",
	  "notes": "A jaunty hat makes every job more fun, and candlemaking is no exception! Increases Perception and Intelligence by 6 each. Enchanted Armoire: Candlestick Maker Set (Item 2 of 3).",
	  "text": "Candlestick Maker Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_candlestickMakerHat",
	  "klass": "armoire",
	  "index": "candlestickMakerHat",
	  "str": 0,
	  "con": 0
	},
	"head_armoire_lamplightersTopHat": {
	  "con": 14,
	  "set": "lamplighter",
	  "notes": "This jaunty black hat completes your lamp-lighting ensemble! Increases Constitution by 14. Enchanted Armoire: Lamplighter's Set (Item 3 of 4).",
	  "text": "Lamplighter's Top Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_lamplightersTopHat",
	  "klass": "armoire",
	  "index": "lamplightersTopHat",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"head_armoire_coachDriversHat": {
	  "int": 12,
	  "set": "coachDriver",
	  "notes": "This hat is dressy, but not quite so dressy as a top hat. Make sure you don't lose it as you drive speedily across the land! Increases Intelligence by 12. Enchanted Armoire: Coach Driver Set (Item 2 of 3).",
	  "text": "Coach Driver's Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_coachDriversHat",
	  "klass": "armoire",
	  "index": "coachDriversHat",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_crownOfDiamonds": {
	  "int": 13,
	  "set": "kingOfDiamonds",
	  "notes": "This shining crown isn't just a great hat; it will also sharpen your mind! Increases Intelligence by 13. Enchanted Armoire: King of Diamonds Set (Item 2 of 4).",
	  "text": "Crown of Diamonds",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_crownOfDiamonds",
	  "klass": "armoire",
	  "index": "crownOfDiamonds",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_flutteryWig": {
	  "int": 5,
	  "per": 5,
	  "str": 5,
	  "set": "fluttery",
	  "notes": "This fine powdered wig has plenty of room for your butterflies to rest if they get tired while doing your bidding. Increases Intelligence, Perception, and Strength by 5 each. Enchanted Armoire: Fluttery Frock Set (Item 2 of 4).",
	  "text": "Fluttery Wig",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_flutteryWig",
	  "klass": "armoire",
	  "index": "flutteryWig",
	  "con": 0
	},
	"head_armoire_bigWig": {
	  "str": 10,
	  "notes": "Some powdered wigs are for looking more authoritative, but this one is just for laughs! Increases Strength by 10. Enchanted Armoire: Independent Item.",
	  "text": "Big Wig",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_bigWig",
	  "set": "armoire-bigWig",
	  "klass": "armoire",
	  "index": "bigWig",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_paperBag": {
	  "con": 10,
	  "notes": "This bag is a hilarious but surprisingly protective helm (don't worry, we know you look good under there!). Increases Constitution by 10. Enchanted Armoire: Independent Item.",
	  "text": "Paper Bag",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_paperBag",
	  "set": "armoire-paperBag",
	  "klass": "armoire",
	  "index": "paperBag",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"head_armoire_birdsNest": {
	  "int": 10,
	  "notes": "If you start feeling movement and hearing chirps, your new hat might have turned into new friends. Increases Intelligence by 10. Enchanted Armoire: Independent Item.",
	  "text": "Bird's Nest",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_birdsNest",
	  "set": "armoire-birdsNest",
	  "klass": "armoire",
	  "index": "birdsNest",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_glassblowersHat": {
	  "per": 8,
	  "set": "glassblower",
	  "notes": "This hat mainly just looks good with your other protective glassblowing gear! Increases Perception by 8. Enchanted Armoire: Glassblower Set (Item 3 of 4).",
	  "text": "Glassblower's Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_glassblowersHat",
	  "klass": "armoire",
	  "index": "glassblowersHat",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_piraticalPrincessHeaddress": {
	  "per": 8,
	  "int": 8,
	  "set": "piraticalPrincess",
	  "notes": "Fancy buccaneers are known for their fancy headwear! Increases Perception and Intelligence by 8 each. Enchanted Armoire: Piratical Princess Set (Item 1 of 4).",
	  "text": "Piratical Princess Headdress",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_piraticalPrincessHeaddress",
	  "klass": "armoire",
	  "index": "piraticalPrincessHeaddress",
	  "str": 0,
	  "con": 0
	},
	"head_armoire_jeweledArcherHelm": {
	  "int": 15,
	  "set": "jeweledArcher",
	  "notes": "This helm may look ornate, but it's also exceedingly light and strong. Increases Intelligence by 15. Enchanted Armoire: Jeweled Archer Set (Item 1 of 3).",
	  "text": "Jeweled Archer Helm",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_jeweledArcherHelm",
	  "klass": "armoire",
	  "index": "jeweledArcherHelm",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_veilOfSpades": {
	  "per": 13,
	  "set": "aceOfSpades",
	  "notes": "A shadowy and mysterious veil that will boost your stealth. Increases Perception by 13. Enchanted Armoire: Ace of Spades Set (Item 1 of 3).",
	  "text": "Veil of Spades",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_veilOfSpades",
	  "klass": "armoire",
	  "index": "veilOfSpades",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_toqueBlanche": {
	  "per": 10,
	  "set": "chef",
	  "notes": "According to legend, the number of folds in this hat indicate the number of ways you know how to cook an egg! Is it accurate? Increases Perception by 10. Enchanted Armoire: Chef Set (Item 1 of 4).",
	  "text": "Toque Blanche",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_toqueBlanche",
	  "klass": "armoire",
	  "index": "toqueBlanche",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_vernalHennin": {
	  "per": 12,
	  "set": "vernalVestments",
	  "notes": "More than just a pretty hat, this conical chapeau can also hold a rolled-up To Do list inside. Increases Perception by 12. Enchanted Armoire: Vernal Vestments Set (Item 1 of 3).",
	  "text": "Vernal Hennin",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_vernalHennin",
	  "klass": "armoire",
	  "index": "vernalHennin",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_tricornHat": {
	  "per": 10,
	  "notes": "Become a revolutionary jokester! Increases Perception by 10. Enchanted Armoire: Independent Item.",
	  "text": "Tricorn Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_tricornHat",
	  "set": "armoire-tricornHat",
	  "klass": "armoire",
	  "index": "tricornHat",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_nephriteHelm": {
	  "per": 7,
	  "int": 6,
	  "set": "nephrite",
	  "notes": "The carved jade plume atop this helm is enchanted to enhance your aim. Increases Perception by 7 and Intelligence by 6. Enchanted Armoire: Nephrite Archer Set (Item 2 of 3).",
	  "text": "Nephrite Helm",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_nephriteHelm",
	  "klass": "armoire",
	  "index": "nephriteHelm",
	  "str": 0,
	  "con": 0
	},
	"head_armoire_boaterHat": {
	  "str": 6,
	  "con": 6,
	  "per": 6,
	  "set": "boating",
	  "notes": "This straw chapeau is the bee's knees! Increases Strength, Constitution, and Perception by 6 each. Enchanted Armoire: Boating Set (Item 2 of 3).",
	  "text": "Boater Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_boaterHat",
	  "klass": "armoire",
	  "index": "boaterHat",
	  "int": 0
	},
	"head_armoire_astronomersHat": {
	  "con": 10,
	  "set": "astronomer",
	  "notes": "A perfect hat for celestial observation or a fancy wizard brunch. Increases Constitution by 10. Enchanted Armoire: Astronomer Mage Set (Item 2 of 3).",
	  "text": "Astronomer's Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_astronomersHat",
	  "klass": "armoire",
	  "index": "astronomersHat",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"head_armoire_deerstalkerCap": {
	  "int": 14,
	  "set": "detective",
	  "notes": "This cap is perfect for rural excursions, but also is acceptable gear for mystery-solving! Increases Intelligence by 14. Enchanted Armoire: Detective Set (Item 1 of 4).",
	  "text": "Deerstalker Cap",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_deerstalkerCap",
	  "klass": "armoire",
	  "index": "deerstalkerCap",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_shadowMastersHood": {
	  "per": 5,
	  "con": 5,
	  "set": "shadowMaster",
	  "notes": "This hood grants you the power to see through even the deepest darkness. It may occasionally require eyedrops, though. Increases Perception and Constitution by 5 each. Enchanted Armoire: Shadow Master Set (Item 2 of 4).",
	  "text": "Shadow Master's Hood",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_shadowMastersHood",
	  "klass": "armoire",
	  "index": "shadowMastersHood",
	  "str": 0,
	  "int": 0
	},
	"head_armoire_alchemistsHat": {
	  "per": 7,
	  "set": "alchemist",
	  "notes": "While hats are not strictly necessary for alchemical practice, looking cool certainly doesn't hurt anything! Increases Perception by 7. Enchanted Armoire: Alchemist Set (Item 2 of 4).",
	  "text": "Alchemist's Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_alchemistsHat",
	  "klass": "armoire",
	  "index": "alchemistsHat",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_earflapHat": {
	  "int": 7,
	  "str": 7,
	  "set": "duffle",
	  "notes": "If you're looking to keep your head toasty warm, this hat has you covered! Increases Intelligence and Strength by 7 each. Enchanted Armoire: Duffle Coat Set (Item 2 of 2).",
	  "text": "Earflap Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_earflapHat",
	  "klass": "armoire",
	  "index": "earflapHat",
	  "per": 0,
	  "con": 0
	},
	"head_armoire_frostedHelm": {
	  "int": 13,
	  "set": "birthday",
	  "notes": "The perfect headgear for any celebration! Increases Intelligence by 13. Enchanted Armoire: Happy Birthday Set (Item 1 of 4).",
	  "text": "Frosted Helm",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_frostedHelm",
	  "klass": "armoire",
	  "index": "frostedHelm",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_matchMakersBeret": {
	  "con": 15,
	  "set": "matchMaker",
	  "notes": "You'll look striking wearing this lovely hat! Increases Constitution by 15. Enchanted Armoire: Match Maker Set (Item 2 of 4).",
	  "text": "Match Maker's Beret",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_matchMakersBeret",
	  "klass": "armoire",
	  "index": "matchMakersBeret",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"head_armoire_baseballCap": {
	  "con": 8,
	  "str": 8,
	  "set": "baseball",
	  "notes": "Let everyone know that you're on Team Habitica! Increases Constitution and Strength by 8 each. Enchanted Armoire: Baseball Set (Item 1 of 4).",
	  "text": "Baseball Cap",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_baseballCap",
	  "klass": "armoire",
	  "index": "baseballCap",
	  "int": 0,
	  "per": 0
	},
	"head_armoire_fiddlersCap": {
	  "per": 6,
	  "set": "fiddler",
	  "notes": "Put on this jaunty cap to let everyone know who's dancing to whose tune! Increases Perception by 6. Enchanted Armoire: Fiddler Set (Item 1 of 4).",
	  "text": "Fiddler's Cap",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_fiddlersCap",
	  "klass": "armoire",
	  "index": "fiddlersCap",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_heroicHerbalistCrispinette": {
	  "int": 9,
	  "set": "herbalist",
	  "notes": "This handy headdress will help you keep your hair out of the way... It doesn't hurt that it also adds to the mystique. Increases Intelligence by 9. Enchanted Armoire: Heroic Herbalist Set (Item 3 of 3).",
	  "text": "Heroic Herbalist Crispinette",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_heroicHerbalistCrispinette",
	  "klass": "armoire",
	  "index": "heroicHerbalistCrispinette",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_guardiansBonnet": {
	  "con": 8,
	  "set": "grazerGuardian",
	  "notes": "Don this fetching bonnet to help you herd your tasks! Increases Constitution by 8. Enchanted Armoire: Guardian of the Grazers Set (Item 1 of 3).",
	  "text": "Guardian's Bonnet",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_guardiansBonnet",
	  "klass": "armoire",
	  "index": "guardiansBonnet",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"head_armoire_hornsOfAutumn": {
	  "str": 12,
	  "set": "autumnEnchanter",
	  "notes": "Draw the power of the season's brisk air and channel it through your magic! Increases Strength by 12. Enchanted Armoire: Autumn Enchanter Set (Item 1 of 4).",
	  "text": "Horns of Autumn",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_hornsOfAutumn",
	  "klass": "armoire",
	  "index": "hornsOfAutumn",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_capOfClubs": {
	  "int": 10,
	  "set": "jackOfClubs",
	  "notes": "Let everyone know about your latest achievements with this literal feather in your cap! Increases Intelligence by 10. Enchanted Armoire: Jack of Clubs Set (Item 1 of 3).",
	  "text": "Cap of Clubs",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_capOfClubs",
	  "klass": "armoire",
	  "index": "capOfClubs",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_nightcap": {
	  "per": 12,
	  "set": "dressingGown",
	  "notes": "Your new nightcap even has a nice bouncy pompom! Increases Perception by 12. Enchanted Armoire: Dressing Gown Set (Item 2 of 3).",
	  "text": "Nightcap",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_nightcap",
	  "klass": "armoire",
	  "index": "nightcap",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_blueMoonHelm": {
	  "int": 8,
	  "set": "blueMoon",
	  "notes": "This helm offers an astonishing amount of luck to its wearer, and exceptional events follow its use. Increases Intelligence by 8. Enchanted Armoire: Blue Moon Rogue Set (item 3 of 4).",
	  "text": "Blue Moon Helm",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_blueMoonHelm",
	  "klass": "armoire",
	  "index": "blueMoonHelm",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_pinkFloppyHat": {
	  "int": 12,
	  "set": "pinkLoungewear",
	  "notes": "Many spells have been sewn into this simple hat, giving it a perfect pink color. Increases Intelligence by 12. Enchanted Armoire: Pink Loungewear Set (item 1 of 3).",
	  "text": "Pink Floppy Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_pinkFloppyHat",
	  "klass": "armoire",
	  "index": "pinkFloppyHat",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_jadeHelm": {
	  "con": 8,
	  "set": "jadeWarrior",
	  "notes": "Some say jade decreases fear and anxiety. With this beautiful helm, you definitely have no cause to worry! Increases Constitution by 8. Enchanted Armoire: Jade Warrior Set (Item 1 of 3).",
	  "text": "Jade Helm",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_jadeHelm",
	  "klass": "armoire",
	  "index": "jadeHelm",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"head_armoire_clownsWig": {
	  "con": 5,
	  "set": "clown",
	  "notes": "No bad tasks can bite you now! You'll taste funny. Increases Constitution by 5. Enchanted Armoire: Clown Set (Item 3 of 5).",
	  "text": "Clown's Wig",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_clownsWig",
	  "klass": "armoire",
	  "index": "clownsWig",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"head_armoire_medievalLaundryCap": {
	  "int": 6,
	  "set": "medievalLaunderers",
	  "notes": "It's not quite a thinking cap, but for laundry, it will do... Increases Intelligence by 6. Enchanted Armoire: Medieval Launderers Set (Item 3 of 6).",
	  "text": "Laundry Cap",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_medievalLaundryCap",
	  "klass": "armoire",
	  "index": "medievalLaundryCap",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_medievalLaundryHat": {
	  "int": 6,
	  "set": "medievalLaunderers",
	  "notes": "It's not quite a thinking cap, but for laundry, it will do... Increases Intelligence by 6. Enchanted Armoire: Medieval Launderers Set (Item 4 of 6).",
	  "text": "Laundry Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_medievalLaundryHat",
	  "klass": "armoire",
	  "index": "medievalLaundryHat",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_rubberDucky": {
	  "int": 10,
	  "set": "bath",
	  "notes": "The perfect companion for an indulgent spa day! Also surprisingly knowledgeable about a range of software issues. Increases Intelligence by 10. Enchanted Armoire: Bubble Bath Set (Item 1 of 4).",
	  "text": "Rubber Ducky",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_rubberDucky",
	  "klass": "armoire",
	  "index": "rubberDucky",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_glengarry": {
	  "int": 6,
	  "set": "bonnieBagpiper",
	  "notes": "A traditional cap full of pride and history. Increases Intelligence by 6. Enchanted Armoire: Bagpiper Set (Item 1 of 3).",
	  "text": "Glengarry",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_glengarry",
	  "klass": "armoire",
	  "index": "glengarry",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_heraldsCap": {
	  "int": 6,
	  "set": "herald",
	  "notes": "This herald’s hat includes a perky plume. Increases Intelligence by 6. Enchanted Armoire: Herald Set (Item 2 of 4).",
	  "text": "Herald's Cap",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_heraldsCap",
	  "klass": "armoire",
	  "index": "heraldsCap",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_blackFloppyHat": {
	  "con": 7,
	  "per": 7,
	  "str": 7,
	  "set": "blackLoungewear",
	  "notes": "Many spells have been sewn into this simple hat, giving it a bold black color. Increases Constitution, Perception, and Strength by 7 each. Enchanted Armoire: Black Loungewear Set (Item 1 of 3).",
	  "text": "Black Floppy Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_blackFloppyHat",
	  "klass": "armoire",
	  "index": "blackFloppyHat",
	  "int": 0
	},
	"head_armoire_regalCrown": {
	  "int": 7,
	  "set": "regal",
	  "notes": "Any monarch would be lucky to have such a majestic, smart-looking crown. Increases Intelligence by 7. Enchanted Armoire: Regal Set (Item 1 of 2).",
	  "text": "Regal Crown",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_regalCrown",
	  "klass": "armoire",
	  "index": "regalCrown",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"head_armoire_shootingStarCrown": {
	  "per": 10,
	  "set": "shootingStar",
	  "notes": "With this brightly shining headpiece, you will literally be the star of your own adventure! Increases Perception by 10. Enchanted Armoire: Stardust Set (Item 1 of 3).",
	  "text": "Star Crown",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_shootingStarCrown",
	  "klass": "armoire",
	  "index": "shootingStarCrown",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_gardenersSunHat": {
	  "per": 7,
	  "set": "gardenerSet",
	  "notes": "The bright light of the day star won’t shine in your eyes when you wear this wide-brimmed hat. Increases Perception by 7. Enchanted Armoire: Gardener Set (Item 2 of 4).",
	  "text": "Gardener's Sun Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_gardenersSunHat",
	  "klass": "armoire",
	  "index": "gardenersSunHat",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_strawRainHat": {
	  "per": 9,
	  "set": "strawRaincoat",
	  "notes": "You’ll be able to spot every obstacle in your path when you wear this water-resistant, conical hat. Increases Perception by 9. Enchanted Armoire: Straw Raincoat Set (Item 2 of 2).",
	  "text": "Straw Rain Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_strawRainHat",
	  "klass": "armoire",
	  "index": "strawRainHat",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_fancyPirateHat": {
	  "per": 8,
	  "set": "fancyPirate",
	  "notes": "Be protected from the sun and any seagulls flying overhead as you drink tea on the deck of your ship. Increases Perception by 8. Enchanted Armoire: Fancy Pirate Set (Item 2 of 3).",
	  "text": "Fancy Pirate Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_fancyPirateHat",
	  "klass": "armoire",
	  "index": "fancyPirateHat",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_teaHat": {
	  "per": 10,
	  "set": "teaParty",
	  "notes": "This elegant hat is both fancy and functional. Increases Perception by 10. Enchanted Armoire: Tea Party Set (Item 2 of 3).",
	  "text": "Tea Party Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_teaHat",
	  "klass": "armoire",
	  "index": "teaHat",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_beaniePropellerHat": {
	  "con": 3,
	  "per": 3,
	  "str": 3,
	  "int": 3,
	  "notes": "This isn’t the time to keep your feet on the ground! Spin this little propeller and rise as high as your ambitions will take you. Increases all stats by 3. Enchanted Armoire: Independent Item.",
	  "text": "Beanie Propeller Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_beaniePropellerHat",
	  "set": "armoire-beaniePropellerHat",
	  "klass": "armoire",
	  "index": "beaniePropellerHat"
	},
	"head_armoire_paintersBeret": {
	  "per": 9,
	  "set": "painters",
	  "notes": "See the world with a more artistic eye when you wear this jaunty beret. Increases Perception by 9. Enchanted Armoire: Painter Set (Item 2 of 4).",
	  "text": "Painter's Beret",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_paintersBeret",
	  "klass": "armoire",
	  "index": "paintersBeret",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"head_armoire_admiralsBicorne": {
	  "int": 7,
	  "per": 7,
	  "set": "admiralsSet",
	  "notes": "Hats off to you! Wearing this two-cornered hat will make you wiser, brighter, braver...and taller. Increases Intelligence and Perception by 7 each. Enchanted Armoire: Admiral’s Set (Item 1 of 2).",
	  "text": "Admiral's Bicorne Hat",
	  "value": 100,
	  "type": "head",
	  "key": "head_armoire_admiralsBicorne",
	  "klass": "armoire",
	  "index": "admiralsBicorne",
	  "str": 0,
	  "con": 0
	},
	"shield_warrior_1": {
	  "text": "Wooden Shield",
	  "notes": "Round shield of thick wood. Increases Constitution by 2.",
	  "con": 2,
	  "value": 20,
	  "type": "shield",
	  "key": "shield_warrior_1",
	  "set": "warrior-1",
	  "klass": "warrior",
	  "index": "1",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_warrior_2": {
	  "text": "Buckler",
	  "notes": "Light and sturdy, quick to bring to the defense. Increases Constitution by 3.",
	  "con": 3,
	  "value": 35,
	  "type": "shield",
	  "key": "shield_warrior_2",
	  "set": "warrior-2",
	  "klass": "warrior",
	  "index": "2",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_warrior_3": {
	  "text": "Reinforced Shield",
	  "notes": "Made of wood but bolstered with metal bands. Increases Constitution by 5.",
	  "con": 5,
	  "value": 50,
	  "type": "shield",
	  "key": "shield_warrior_3",
	  "set": "warrior-3",
	  "klass": "warrior",
	  "index": "3",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_warrior_4": {
	  "text": "Red Shield",
	  "notes": "Rebukes blows with a burst of flame. Increases Constitution by 7.",
	  "con": 7,
	  "value": 70,
	  "type": "shield",
	  "key": "shield_warrior_4",
	  "set": "warrior-4",
	  "klass": "warrior",
	  "index": "4",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_warrior_5": {
	  "text": "Golden Shield",
	  "notes": "Shining badge of the vanguard. Increases Constitution by 9.",
	  "con": 9,
	  "value": 90,
	  "last": true,
	  "type": "shield",
	  "key": "shield_warrior_5",
	  "set": "warrior-5",
	  "klass": "warrior",
	  "index": "5",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_rogue_0": {
	  "text": "Dagger",
	  "notes": "A rogue's most basic weapon. Confers no benefit. ",
	  "str": 0,
	  "value": 0,
	  "type": "shield",
	  "key": "shield_rogue_0",
	  "set": "rogue-0",
	  "klass": "rogue",
	  "index": "0",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_rogue_1": {
	  "text": "Short Sword",
	  "notes": "Light, concealable blade. Increases Strength by 2. ",
	  "str": 2,
	  "value": 20,
	  "type": "shield",
	  "key": "shield_rogue_1",
	  "set": "rogue-1",
	  "klass": "rogue",
	  "index": "1",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_rogue_2": {
	  "text": "Scimitar",
	  "notes": "Slashing sword, swift to deliver a killing blow. Increases Strength by 3. ",
	  "str": 3,
	  "value": 35,
	  "type": "shield",
	  "key": "shield_rogue_2",
	  "set": "rogue-2",
	  "klass": "rogue",
	  "index": "2",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_rogue_3": {
	  "text": "Kukri",
	  "notes": "Distinctive bush knife, both survival tool and weapon. Increases Strength by 4. ",
	  "str": 4,
	  "value": 50,
	  "type": "shield",
	  "key": "shield_rogue_3",
	  "set": "rogue-3",
	  "klass": "rogue",
	  "index": "3",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_rogue_4": {
	  "text": "Nunchaku",
	  "notes": "Heavy batons whirled about on a length of chain. Increases Strength by 6. ",
	  "str": 6,
	  "value": 70,
	  "type": "shield",
	  "key": "shield_rogue_4",
	  "set": "rogue-4",
	  "klass": "rogue",
	  "index": "4",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_rogue_5": {
	  "text": "Ninja-to",
	  "notes": "Sleek and deadly as the ninja themselves. Increases Strength by 8. ",
	  "str": 8,
	  "value": 90,
	  "type": "shield",
	  "key": "shield_rogue_5",
	  "set": "rogue-5",
	  "klass": "rogue",
	  "index": "5",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_rogue_6": {
	  "text": "Hook Sword",
	  "notes": "Complex weapon adept at ensnaring and disarming opponents. Increases Strength by 10. ",
	  "str": 10,
	  "value": 120,
	  "last": true,
	  "type": "shield",
	  "key": "shield_rogue_6",
	  "set": "rogue-6",
	  "klass": "rogue",
	  "index": "6",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_healer_1": {
	  "text": "Medic Buckler",
	  "notes": "Easy to disengage, freeing a hand for bandaging. Increases Constitution by 2.",
	  "con": 2,
	  "value": 20,
	  "type": "shield",
	  "key": "shield_healer_1",
	  "set": "healer-1",
	  "klass": "healer",
	  "index": "1",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_healer_2": {
	  "text": "Kite Shield",
	  "notes": "Tapered shield with the symbol of healing. Increases Constitution by 4.",
	  "con": 4,
	  "value": 35,
	  "type": "shield",
	  "key": "shield_healer_2",
	  "set": "healer-2",
	  "klass": "healer",
	  "index": "2",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_healer_3": {
	  "text": "Protector Shield",
	  "notes": "Traditional shield of defender knights. Increases Constitution by 6.",
	  "con": 6,
	  "value": 50,
	  "type": "shield",
	  "key": "shield_healer_3",
	  "set": "healer-3",
	  "klass": "healer",
	  "index": "3",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_healer_4": {
	  "text": "Savior Shield",
	  "notes": "Stops blows aimed at nearby innocents as well as those aimed at you. Increases Constitution by 9.",
	  "con": 9,
	  "value": 70,
	  "type": "shield",
	  "key": "shield_healer_4",
	  "set": "healer-4",
	  "klass": "healer",
	  "index": "4",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_healer_5": {
	  "text": "Royal Shield",
	  "notes": "Bestowed upon those most dedicated to the kingdom's defense. Increases Constitution by 12.",
	  "con": 12,
	  "value": 90,
	  "last": true,
	  "type": "shield",
	  "key": "shield_healer_5",
	  "set": "healer-5",
	  "klass": "healer",
	  "index": "5",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_base_0": {
	  "text": "No Off-Hand Equipment",
	  "notes": "No shield or other off-hand item.",
	  "value": 0,
	  "type": "shield",
	  "key": "shield_base_0",
	  "set": "base-0",
	  "klass": "base",
	  "index": "0",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_0": {
	  "text": "Tormented Skull",
	  "notes": "Sees beyond the veil of death, and displays what it finds there for enemies to fear. Increases Perception by 20.",
	  "per": 20,
	  "value": 150,
	  "type": "shield",
	  "key": "shield_special_0",
	  "set": "special-0",
	  "klass": "special",
	  "index": "0",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_special_1": {
	  "text": "Crystal Shield",
	  "notes": "Shatters arrows and deflects the words of naysayers. Increases all Stats by 6.",
	  "con": 6,
	  "str": 6,
	  "per": 6,
	  "int": 6,
	  "value": 170,
	  "type": "shield",
	  "key": "shield_special_1",
	  "set": "special-1",
	  "klass": "special",
	  "index": "1"
	},
	"shield_special_takeThis": {
	  "text": "Take This Shield",
	  "notes": "This shield was earned by participating in a sponsored Challenge made by Take This. Congratulations! Increases all Stats by 5.",
	  "value": 0,
	  "con": 5,
	  "int": 5,
	  "per": 5,
	  "str": 5,
	  "type": "shield",
	  "key": "shield_special_takeThis",
	  "set": "special-takeThis",
	  "klass": "special",
	  "index": "takeThis"
	},
	"shield_special_goldenknight": {
	  "text": "Mustaine's Milestone Mashing Morning Star",
	  "notes": "Meetings, monsters, malaise: managed! Mash! Increases Constitution and Perception by 25 each.",
	  "con": 25,
	  "per": 25,
	  "value": 200,
	  "type": "shield",
	  "key": "shield_special_goldenknight",
	  "set": "special-goldenknight",
	  "klass": "special",
	  "index": "goldenknight",
	  "str": 0,
	  "int": 0
	},
	"shield_special_moonpearlShield": {
	  "text": "Moonpearl Shield",
	  "notes": "Designed for fast swimming, and also some defense. Increases Constitution by 15.",
	  "con": 15,
	  "value": 130,
	  "type": "shield",
	  "key": "shield_special_moonpearlShield",
	  "set": "special-moonpearlShield",
	  "klass": "special",
	  "index": "moonpearlShield",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_mammothRiderHorn": {
	  "text": "Mammoth Rider's Horn",
	  "notes": "One blow on this mighty rose quartz horn and you'll summon powerful magical forces. Increases Strength by 15.",
	  "str": 15,
	  "value": 130,
	  "type": "shield",
	  "key": "shield_special_mammothRiderHorn",
	  "set": "special-mammothRiderHorn",
	  "klass": "special",
	  "index": "mammothRiderHorn",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_roguishRainbowMessage": {
	  "text": "Roguish Rainbow Message",
	  "notes": "This sparkly envelope contains messages of encouragement from Habiticans, and a touch of magic to help speed your deliveries! Increases Intelligence by 15.",
	  "int": 15,
	  "value": 130,
	  "type": "shield",
	  "key": "shield_special_roguishRainbowMessage",
	  "set": "special-roguishRainbowMessage",
	  "klass": "special",
	  "index": "roguishRainbowMessage",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_diamondStave": {
	  "text": "Diamond Stave",
	  "notes": "This valuable stave has mystical powers. Increases Intelligence by 16.",
	  "int": 16,
	  "value": 0,
	  "type": "shield",
	  "key": "shield_special_diamondStave",
	  "set": "special-diamondStave",
	  "klass": "special",
	  "index": "diamondStave",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_lootBag": {
	  "text": "Loot Bag",
	  "notes": "This bag is ideal for storing all the goodies you've stealthily removed from unsuspecting Tasks! Increases Strength by 16.",
	  "str": 16,
	  "value": 0,
	  "type": "shield",
	  "key": "shield_special_lootBag",
	  "set": "special-lootBag",
	  "klass": "special",
	  "index": "lootBag",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_wintryMirror": {
	  "text": "Wintry Mirror",
	  "notes": "How else to best admire your wintry look? Increases Intelligence by 16.",
	  "int": 16,
	  "value": 0,
	  "type": "shield",
	  "key": "shield_special_wintryMirror",
	  "set": "special-wintryMirror",
	  "klass": "special",
	  "index": "wintryMirror",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_wakizashi": {
	  "text": "Wakizashi",
	  "notes": "This short sword is perfect for close-quarters battles with your Dailies! Increases Constitution by 17.",
	  "con": 17,
	  "value": 0,
	  "type": "shield",
	  "key": "shield_special_wakizashi",
	  "set": "special-wakizashi",
	  "klass": "special",
	  "index": "wakizashi",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_yeti": {
	  "specialClass": "warrior",
	  "set": "yetiSet",
	  "text": "Yeti-Tamer Shield",
	  "notes": "This shield reflects light from the snow. Increases Constitution by 7. Limited Edition 2013-2014 Winter Gear.",
	  "con": 7,
	  "value": 70,
	  "type": "shield",
	  "key": "shield_special_yeti",
	  "klass": "special",
	  "index": "yeti",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_ski": {
	  "specialClass": "rogue",
	  "set": "skiSet",
	  "text": "Ski-sassin Pole",
	  "notes": "A weapon capable of destroying hordes of enemies! It also helps the user make very nice parallel turns. Increases Strength by 8. Limited Edition 2013-2014 Winter Gear.",
	  "str": 8,
	  "value": 90,
	  "type": "shield",
	  "key": "shield_special_ski",
	  "klass": "special",
	  "index": "ski",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_snowflake": {
	  "specialClass": "healer",
	  "set": "snowflakeSet",
	  "text": "Snowflake Shield",
	  "notes": "Every shield is unique. Increases Constitution by 9. Limited Edition 2013-2014 Winter Gear.",
	  "con": 9,
	  "value": 70,
	  "type": "shield",
	  "key": "shield_special_snowflake",
	  "klass": "special",
	  "index": "snowflake",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_springRogue": {
	  "set": "stealthyKittySet",
	  "event": {
		"start": "2014-03-21",
		"end": "2014-05-01",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Hook Claws",
	  "notes": "Great for scaling tall buildings, and also for shredding carpets. Increases Strength by 8. Limited Edition 2014 Spring Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_springRogue",
	  "klass": "special",
	  "index": "springRogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_springWarrior": {
	  "set": "mightyBunnySet",
	  "event": {
		"start": "2014-03-21",
		"end": "2014-05-01",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Egg Shield",
	  "notes": "This shield never cracks, no matter how hard you hit it! Increases Constitution by 7. Limited Edition 2014 Spring Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_springWarrior",
	  "klass": "special",
	  "index": "springWarrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_springHealer": {
	  "set": "lovingPupSet",
	  "event": {
		"start": "2014-03-21",
		"end": "2014-05-01",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Squeaky Ball of Ultimate Protection",
	  "notes": "Lets out an obnoxious, continuous squeak when bitten, driving enemies away. Increases Constitution by 9. Limited Edition 2014 Spring Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_springHealer",
	  "klass": "special",
	  "index": "springHealer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summerRogue": {
	  "set": "roguishPirateSet",
	  "event": {
		"start": "2014-06-20",
		"end": "2014-08-01",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Pirate Cutlass",
	  "notes": "Avast! You'll make those Dailies walk the plank! Increases Strength by 8. Limited Edition 2014 Summer Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_summerRogue",
	  "klass": "special",
	  "index": "summerRogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_summerWarrior": {
	  "set": "daringSwashbucklerSet",
	  "event": {
		"start": "2014-06-20",
		"end": "2014-08-01",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Driftwood Shield",
	  "notes": "This shield, made from the wood of wrecked ships, can deter even the stormiest Dailies. Increases Constitution by 7. Limited Edition 2014 Summer Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_summerWarrior",
	  "klass": "special",
	  "index": "summerWarrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summerHealer": {
	  "set": "reefSeahealerSet",
	  "event": {
		"start": "2014-06-20",
		"end": "2014-08-01",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Shield of the Shallows",
	  "notes": "No one will dare to attack the coral reef when faced with this shiny shield! Increases Constitution by 9. Limited Edition 2014 Summer Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_summerHealer",
	  "klass": "special",
	  "index": "summerHealer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fallRogue": {
	  "set": "vampireSmiterSet",
	  "event": {
		"start": "2014-09-21",
		"end": "2014-11-01",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Silver Stake",
	  "notes": "Dispatches undead. Also grants a bonus against werewolves, because you can never be too careful. Increases Strength by 8. Limited Edition 2014 Autumn Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_fallRogue",
	  "klass": "special",
	  "index": "fallRogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_fallWarrior": {
	  "set": "monsterOfScienceSet",
	  "event": {
		"start": "2014-09-21",
		"end": "2014-11-01",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Potent Potion of Science",
	  "notes": "Spills mysteriously on lab coats. Increases Constitution by 7. Limited Edition 2014 Autumn Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_fallWarrior",
	  "klass": "special",
	  "index": "fallWarrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fallHealer": {
	  "set": "mummyMedicSet",
	  "event": {
		"start": "2014-09-21",
		"end": "2014-11-01",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Jeweled Shield",
	  "notes": "This glittery shield was found in an ancient tomb. Increases Constitution by 9. Limited Edition 2014 Autumn Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_fallHealer",
	  "klass": "special",
	  "index": "fallHealer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2015Rogue": {
	  "set": "icicleDrakeSet",
	  "event": {
		"start": "2014-12-21",
		"end": "2015-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Ice Spike",
	  "notes": "You truly, definitely, absolutely just picked these up off of the ground. Increases Strength by 8. Limited Edition 2014-2015 Winter Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_winter2015Rogue",
	  "klass": "special",
	  "index": "winter2015Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_winter2015Warrior": {
	  "set": "gingerbreadSet",
	  "event": {
		"start": "2014-12-21",
		"end": "2015-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Gumdrop Shield",
	  "notes": "This seemingly-sugary shield is actually made of nutritious, gelatinous vegetables. Increases Constitution by 7. Limited Edition 2014-2015 Winter Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_winter2015Warrior",
	  "klass": "special",
	  "index": "winter2015Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2015Healer": {
	  "set": "soothingSkaterSet",
	  "event": {
		"start": "2014-12-21",
		"end": "2015-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Soothing Shield",
	  "notes": "This shield deflects the freezing wind. Increases Constitution by 9. Limited Edition 2014-2015 Winter Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_winter2015Healer",
	  "klass": "special",
	  "index": "winter2015Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2015Rogue": {
	  "set": "sneakySqueakerSet",
	  "event": {
		"start": "2015-03-20",
		"end": "2015-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Exploding Squeak",
	  "notes": "Don't let the sound fool you - these explosives pack a punch. Increases Strength by 8. Limited Edition 2015 Spring Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_spring2015Rogue",
	  "klass": "special",
	  "index": "spring2015Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_spring2015Warrior": {
	  "set": "bewareDogSet",
	  "event": {
		"start": "2015-03-20",
		"end": "2015-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Dish Discus",
	  "notes": "Hurl it at your enemies.... or just hold it, because it will fill up with yummy kibble at dinnertime. Increases Constitution by 7. Limited Edition 2015 Spring Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_spring2015Warrior",
	  "klass": "special",
	  "index": "spring2015Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2015Healer": {
	  "set": "comfortingKittySet",
	  "event": {
		"start": "2015-03-20",
		"end": "2015-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Patterned Pillow",
	  "notes": "You can rest your head on this soft pillow, or you can wrestle it with your fearsome claws. Rawr! Increases Constitution by 9. Limited Edition 2015 Spring Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_spring2015Healer",
	  "klass": "special",
	  "index": "spring2015Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2015Rogue": {
	  "set": "reefRenegadeSet",
	  "event": {
		"start": "2015-06-20",
		"end": "2015-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Firing Coral",
	  "notes": "This relative of fire coral has the ability to propel its venom through the water. Increases Strength by 8. Limited Edition 2015 Summer Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_summer2015Rogue",
	  "klass": "special",
	  "index": "summer2015Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_summer2015Warrior": {
	  "set": "sunfishWarriorSet",
	  "event": {
		"start": "2015-06-20",
		"end": "2015-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Sunfish Shield",
	  "notes": "Crafted of deep-ocean metal by the artisans of Dilatory, this shield shines like the sand and the sea. Increases Constitution by 7. Limited Edition 2015 Summer Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_summer2015Warrior",
	  "klass": "special",
	  "index": "summer2015Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2015Healer": {
	  "set": "strappingSailorSet",
	  "event": {
		"start": "2015-06-20",
		"end": "2015-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Strapping Shield",
	  "notes": "Use this shield to bash away bilge rats. Increases Constitution by 9. Limited Edition 2015 Summer Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_summer2015Healer",
	  "klass": "special",
	  "index": "summer2015Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fall2015Rogue": {
	  "set": "battleRogueSet",
	  "event": {
		"start": "2015-09-21",
		"end": "2015-11-01",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Bat-tle Ax",
	  "notes": "Fearsome To Do's cower before the flapping of this ax. Increases Strength by 8. Limited Edition 2015 Autumn Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_fall2015Rogue",
	  "klass": "special",
	  "index": "fall2015Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_fall2015Warrior": {
	  "set": "scarecrowWarriorSet",
	  "event": {
		"start": "2015-09-21",
		"end": "2015-11-01",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Birdseed Bag",
	  "notes": "It's true that you're supposed to be SCARING the crows, but there's nothing wrong with making friends! Increases Constitution by 7. Limited Edition 2015 Autumn Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_fall2015Warrior",
	  "klass": "special",
	  "index": "fall2015Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fall2015Healer": {
	  "set": "potionerSet",
	  "event": {
		"start": "2015-09-21",
		"end": "2015-11-01",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Stirring Stick",
	  "notes": "This stick can stir anything without melting, dissolving, or bursting into flame! It can also be used to fiercely poke enemy tasks. Increases Constitution by 9. Limited Edition 2015 Autumn Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_fall2015Healer",
	  "klass": "special",
	  "index": "fall2015Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2016Rogue": {
	  "set": "cocoaSet",
	  "event": {
		"start": "2015-12-18",
		"end": "2016-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Cocoa Mug",
	  "notes": "Warming drink, or boiling projectile? You decide... Increases Strength by 8. Limited Edition 2015-2016 Winter Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_winter2016Rogue",
	  "klass": "special",
	  "index": "winter2016Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_winter2016Warrior": {
	  "set": "snowDaySet",
	  "event": {
		"start": "2015-12-18",
		"end": "2016-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Sled Shield",
	  "notes": "Use this sled to block attacks, or ride it triumphantly into battle! Increases Constitution by 7. Limited Edition 2015-2016 Winter Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_winter2016Warrior",
	  "klass": "special",
	  "index": "winter2016Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2016Healer": {
	  "set": "festiveFairySet",
	  "event": {
		"start": "2015-12-18",
		"end": "2016-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Pixie Present",
	  "notes": "Open it open it open it open it open it open it!!!!!!!!! Increases Constitution by 9. Limited Edition 2015-2016 Winter Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_winter2016Healer",
	  "klass": "special",
	  "index": "winter2016Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2016Rogue": {
	  "set": "cleverDogSet",
	  "event": {
		"start": "2016-03-18",
		"end": "2016-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Fire Bolas",
	  "notes": "You've mastered the ball, the club, and the knife. Now you advance to juggling fire! Awoo! Increases Strength by 8. Limited Edition 2016 Spring Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_spring2016Rogue",
	  "klass": "special",
	  "index": "spring2016Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_spring2016Warrior": {
	  "set": "braveMouseSet",
	  "event": {
		"start": "2016-03-18",
		"end": "2016-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Cheese Wheel",
	  "notes": "You braved fiendish traps to procure this defense-boosting food. Increases Constitution by 7. Limited Edition 2016 Spring Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_spring2016Warrior",
	  "klass": "special",
	  "index": "spring2016Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2016Healer": {
	  "set": "springingBunnySet",
	  "event": {
		"start": "2016-03-18",
		"end": "2016-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Floral Buckler",
	  "notes": "The April Fool claims this little shield will block Shiny Seeds. Don't believe him. Increases Constitution by 9. Limited Edition 2016 Spring Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_spring2016Healer",
	  "klass": "special",
	  "index": "spring2016Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2016Rogue": {
	  "set": "summer2016EelSet",
	  "event": {
		"start": "2016-06-21",
		"end": "2016-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Electric Rod",
	  "notes": "Anyone who battles you is in for a shocking surprise... Increases Strength by 8. Limited Edition 2016 Summer Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_summer2016Rogue",
	  "klass": "special",
	  "index": "summer2016Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_summer2016Warrior": {
	  "set": "summer2016SharkWarriorSet",
	  "event": {
		"start": "2016-06-21",
		"end": "2016-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Shark Tooth",
	  "notes": "Bite those tough tasks with this toothy shield! Increases Constitution by 7. Limited Edition 2016 Summer Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_summer2016Warrior",
	  "klass": "special",
	  "index": "summer2016Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2016Healer": {
	  "set": "summer2016SeahorseHealerSet",
	  "event": {
		"start": "2016-06-21",
		"end": "2016-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Sea Star Shield",
	  "notes": "Sometimes mistakenly called a Starfish Shield. Increases Constitution by 9. Limited Edition 2016 Summer Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_summer2016Healer",
	  "klass": "special",
	  "index": "summer2016Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fall2016Rogue": {
	  "set": "fall2016BlackWidowSet",
	  "event": {
		"start": "2016-09-20",
		"end": "2016-11-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Spiderbite Dagger",
	  "notes": "Feel the sting of the spider's bite! Increases Strength by 8. Limited Edition 2016 Autumn Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_fall2016Rogue",
	  "klass": "special",
	  "index": "fall2016Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_fall2016Warrior": {
	  "set": "fall2016SwampThingSet",
	  "event": {
		"start": "2016-09-20",
		"end": "2016-11-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Defensive Roots",
	  "notes": "Defend against Dailies with these writhing roots! Increases Constitution by 7. Limited Edition 2016 Autumn Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_fall2016Warrior",
	  "klass": "special",
	  "index": "fall2016Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fall2016Healer": {
	  "set": "fall2016GorgonHealerSet",
	  "event": {
		"start": "2016-09-20",
		"end": "2016-11-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Gorgon Shield",
	  "notes": "Don't admire your own reflection in this. Increases Constitution by 9. Limited Edition 2016 Autumn Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_fall2016Healer",
	  "klass": "special",
	  "index": "fall2016Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2017Rogue": {
	  "set": "winter2017FrostyRogueSet",
	  "event": {
		"start": "2016-12-16",
		"end": "2017-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Ice Axe",
	  "notes": "This axe is great for attack, defense, and ice-climbing! Increases Strength by 8. Limited Edition 2016-2017 Winter Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_winter2017Rogue",
	  "klass": "special",
	  "index": "winter2017Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_winter2017Warrior": {
	  "set": "winter2017IceHockeySet",
	  "event": {
		"start": "2016-12-16",
		"end": "2017-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Puck Shield",
	  "notes": "Made from a giant hockey puck, this shield can stand up to quite a beating. Increases Constitution by 7. Limited Edition 2016-2017 Winter Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_winter2017Warrior",
	  "klass": "special",
	  "index": "winter2017Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2017Healer": {
	  "set": "winter2017SugarPlumSet",
	  "event": {
		"start": "2016-12-16",
		"end": "2017-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Sugarplum Shield",
	  "notes": "This fibrous armament will help protect you from even the sourest of tasks! Increases Constitution by 9. Limited Edition 2016-2017 Winter Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_winter2017Healer",
	  "klass": "special",
	  "index": "winter2017Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2017Rogue": {
	  "set": "spring2017SneakyBunnySet",
	  "event": {
		"start": "2017-03-21",
		"end": "2017-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Karrotana",
	  "notes": "These blades will make quick work of tasks, but also are handy for slicing vegetables! Yum! Increases Strength by 8. Limited Edition 2017 Spring Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_spring2017Rogue",
	  "klass": "special",
	  "index": "spring2017Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_spring2017Warrior": {
	  "set": "spring2017FelineWarriorSet",
	  "event": {
		"start": "2017-03-21",
		"end": "2017-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Yarn Shield",
	  "notes": "Every fiber of this shield is woven with protective spells! Try not to play with it (too much). Increases Constitution by 7. Limited Edition 2017 Spring Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_spring2017Warrior",
	  "klass": "special",
	  "index": "spring2017Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2017Healer": {
	  "set": "spring2017FloralMouseSet",
	  "event": {
		"start": "2017-03-21",
		"end": "2017-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Basket Shield",
	  "notes": "Protective and also handy for holding your many healing herbs and accoutrements. Increases Constitution by 9. Limited Edition 2017 Spring Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_spring2017Healer",
	  "klass": "special",
	  "index": "spring2017Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2017Rogue": {
	  "set": "summer2017SeaDragonSet",
	  "event": {
		"start": "2017-06-20",
		"end": "2017-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Sea Dragon Fins",
	  "notes": "The edges of these fins are razor-sharp. Increases Strength by 8. Limited Edition 2017 Summer Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_summer2017Rogue",
	  "klass": "special",
	  "index": "summer2017Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_summer2017Warrior": {
	  "set": "summer2017SandcastleWarriorSet",
	  "event": {
		"start": "2017-06-20",
		"end": "2017-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Scallop Shield",
	  "notes": "This shell that you just found is both decorative AND defensive! Increases Constitution by 7. Limited Edition 2017 Summer Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_summer2017Warrior",
	  "klass": "special",
	  "index": "summer2017Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2017Healer": {
	  "set": "summer2017SeashellSeahealerSet",
	  "event": {
		"start": "2017-06-20",
		"end": "2017-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Oyster Shield",
	  "notes": "This magical oyster constantly generates pearls as well as protection. Increases Constitution by 9. Limited Edition 2017 Summer Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_summer2017Healer",
	  "klass": "special",
	  "index": "summer2017Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fall2017Rogue": {
	  "set": "fall2017TrickOrTreatSet",
	  "event": {
		"start": "2017-09-21",
		"end": "2017-11-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Candied Apple Mace",
	  "notes": "Defeat your foes with sweetness! Increases Strength by 8. Limited Edition 2017 Autumn Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_fall2017Rogue",
	  "klass": "special",
	  "index": "fall2017Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_fall2017Warrior": {
	  "set": "fall2017HabitoweenSet",
	  "event": {
		"start": "2017-09-21",
		"end": "2017-11-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Candy Corn Shield",
	  "notes": "This candy shield has mighty protective powers, so try not to nibble on it! Increases Constitution by 7. Limited Edition 2017 Autumn Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_fall2017Warrior",
	  "klass": "special",
	  "index": "fall2017Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fall2017Healer": {
	  "set": "fall2017HauntedHouseSet",
	  "event": {
		"start": "2017-09-21",
		"end": "2017-11-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Haunted Orb",
	  "notes": "This orb occasionally screeches. We're sorry, we're not sure why. But it sure looks nifty! Increases Constitution by 9. Limited Edition 2017 Autumn Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_fall2017Healer",
	  "klass": "special",
	  "index": "fall2017Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2018Rogue": {
	  "set": "winter2018ReindeerSet",
	  "event": {
		"start": "2017-12-19",
		"end": "2018-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Peppermint Hook",
	  "notes": "Perfect for climbing walls or distracting your foes with sweet, sweet candy. Increases Strength by 8. Limited Edition 2017-2018 Winter Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_winter2018Rogue",
	  "klass": "special",
	  "index": "winter2018Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_winter2018Warrior": {
	  "set": "winter2018GiftWrappedSet",
	  "event": {
		"start": "2017-12-19",
		"end": "2018-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Magic Gift Bag",
	  "notes": "Just about any useful thing you need can be found in this sack, if you know the right magic words to whisper. Increases Constitution by 7. Limited Edition 2017-2018 Winter Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_winter2018Warrior",
	  "klass": "special",
	  "index": "winter2018Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2018Healer": {
	  "set": "winter2018MistletoeSet",
	  "event": {
		"start": "2017-12-19",
		"end": "2018-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Mistletoe Bell",
	  "notes": "What's that sound? The sound of warmth and cheer for all to hear! Increases Constitution by 9. Limited Edition 2017-2018 Winter Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_winter2018Healer",
	  "klass": "special",
	  "index": "winter2018Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2018Rogue": {
	  "set": "spring2018DucklingRogueSet",
	  "event": {
		"start": "2018-03-20",
		"end": "2018-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Buoyant Bullrush",
	  "notes": "What might appear to be cute cattails are actually quite effective weapons in the right wings. Increases Strength by 8. Limited Edition 2018 Spring Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_spring2018Rogue",
	  "klass": "special",
	  "index": "spring2018Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_spring2018Warrior": {
	  "set": "spring2018SunriseWarriorSet",
	  "event": {
		"start": "2018-03-20",
		"end": "2018-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Shield of the Morning",
	  "notes": "This sturdy shield glows with the glory of first light. Increases Constitution by 7. Limited Edition 2018 Spring Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_spring2018Warrior",
	  "klass": "special",
	  "index": "spring2018Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2018Healer": {
	  "set": "spring2018GarnetHealerSet",
	  "event": {
		"start": "2018-03-20",
		"end": "2018-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Garnet Shield",
	  "notes": "Despite its fancy appearance, this garnet shield is quite durable! Increases Constitution by 9. Limited Edition 2018 Spring Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_spring2018Healer",
	  "klass": "special",
	  "index": "spring2018Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2018Rogue": {
	  "set": "summer2018FisherRogueSet",
	  "event": {
		"start": "2018-06-19",
		"end": "2018-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Fishing Rod",
	  "notes": "This lightweight, practically unbreakable rod and reel can be dual-wielded to maximize your DPS (Dragonfish Per Summer). Increases Strength by 8. Limited Edition 2018 Summer Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_summer2018Rogue",
	  "klass": "special",
	  "index": "summer2018Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_summer2018Warrior": {
	  "set": "summer2018BettaFishWarriorSet",
	  "event": {
		"start": "2018-06-19",
		"end": "2018-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Betta Skull Shield",
	  "notes": "Fashioned from stone, this fearsome skull-styled shield strikes fear into fish foes while rallying your Skeleton pets and mounts. Increases Constitution by 7. Limited Edition 2018 Summer Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_summer2018Warrior",
	  "klass": "special",
	  "index": "summer2018Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2018Healer": {
	  "set": "summer2018MerfolkMonarchSet",
	  "event": {
		"start": "2018-06-19",
		"end": "2018-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Merfolk Monarch Emblem",
	  "notes": "This shield can produce a dome of air for the benefit of land-dwelling visitors to your watery realm. Increases Constitution by 9. Limited Edition 2018 Summer Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_summer2018Healer",
	  "klass": "special",
	  "index": "summer2018Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fall2018Rogue": {
	  "set": "fall2018AlterEgoSet",
	  "text": "Vial of Temptation",
	  "notes": "This bottle represents all the distractions and troubles that keep you from being your best self. Resist! We're cheering for you! Increases Strength by 8. Limited Edition 2018 Autumn Gear.",
	  "event": {
		"start": "2018-09-20",
		"end": "2018-11-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_fall2018Rogue",
	  "klass": "special",
	  "index": "fall2018Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_fall2018Warrior": {
	  "set": "fall2018MinotaurWarriorSet",
	  "event": {
		"start": "2018-09-20",
		"end": "2018-11-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Brilliant Shield",
	  "notes": "Super shiny to dissuade any troublesome Gorgons from playing peek-a-boo around the corners! Increases Constitution by 7. Limited Edition 2018 Autumn Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_fall2018Warrior",
	  "klass": "special",
	  "index": "fall2018Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fall2018Healer": {
	  "set": "fall2018CarnivorousPlantSet",
	  "event": {
		"start": "2018-09-20",
		"end": "2018-11-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Hungry Shield",
	  "notes": "With its wide-open maw, this shield will absorb all your enemies' blows. Increases Constitution by 9. Limited Edition 2018 Autumn Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_fall2018Healer",
	  "klass": "special",
	  "index": "fall2018Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2019Rogue": {
	  "set": "winter2019PoinsettiaSet",
	  "event": {
		"start": "2018-12-19",
		"end": "2019-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Poinsettia Bouquet",
	  "notes": "Use this festive bouquet to further camouflage yourself, or generously gift it to brighten a friend's day! Increases Strength by 8. Limited Edition 2018-2019 Winter Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_winter2019Rogue",
	  "klass": "special",
	  "index": "winter2019Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_winter2019Warrior": {
	  "set": "winter2019BlizzardSet",
	  "event": {
		"start": "2018-12-19",
		"end": "2019-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Frozen Shield",
	  "notes": "This shield was fashioned using the thickest sheets of ice from the oldest glacier in the Stoïkalm Steppes. Increases Constitution by 7. Limited Edition 2018-2019 Winter Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_winter2019Warrior",
	  "klass": "special",
	  "index": "winter2019Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2019Healer": {
	  "set": "winter2019WinterStarSet",
	  "event": {
		"start": "2018-12-19",
		"end": "2019-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Enchanted Ice Crystals",
	  "notes": "Thin ice may break, but these perfect crystals will turn back any blow before it lands. Increases Constitution by 9. Limited Edition 2018-2019 Winter Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_winter2019Healer",
	  "klass": "special",
	  "index": "winter2019Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_piDay": {
	  "text": "Pi Shield",
	  "notes": "We dare you to calculate the ratio of this shield's circumference to its deliciousness! Confers no benefit.",
	  "value": 0,
	  "type": "shield",
	  "key": "shield_special_piDay",
	  "set": "special-piDay",
	  "klass": "special",
	  "index": "piDay",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_spring2019Rogue": {
	  "set": "spring2019CloudRogueSet",
	  "event": {
		"start": "2019-03-19",
		"end": "2019-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Lightning Bolt",
	  "notes": "These weapons contain the power of the sky and rain. We recommend that you not use them while immersed in water. Increases Strength by 8. Limited Edition 2019 Spring Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_spring2019Rogue",
	  "klass": "special",
	  "index": "spring2019Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_spring2019Warrior": {
	  "set": "spring2019OrchidWarriorSet",
	  "event": {
		"start": "2019-03-19",
		"end": "2019-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Leafy Shield",
	  "notes": "Let the power of chlorophyll keep your enemies at bay! Increases Constitution by 7. Limited Edition 2019 Spring Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_spring2019Warrior",
	  "klass": "special",
	  "index": "spring2019Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2019Healer": {
	  "set": "spring2019RobinHealerSet",
	  "event": {
		"start": "2019-03-19",
		"end": "2019-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Eggshell Shield",
	  "notes": "This bright shield is actually made of candy-coated chocolate. Increases Constitution by 9. Limited Edition 2019 Spring Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_spring2019Healer",
	  "klass": "special",
	  "index": "spring2019Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2019Rogue": {
	  "set": "summer2019HammerheadRogueSet",
	  "event": {
		"start": "2019-06-18",
		"end": "2019-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Antiquated Anchor",
	  "notes": "This ancient and formidable weapon will help you win any undersea battle. Increases Strength by 8. Limited Edition 2019 Summer Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_summer2019Rogue",
	  "klass": "special",
	  "index": "summer2019Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_summer2019Warrior": {
	  "set": "summer2019SeaTurtleWarriorSet",
	  "event": {
		"start": "2019-06-18",
		"end": "2019-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Half-Shell Shield",
	  "notes": "Turtle up behind this hefty round shield, etched in the pattern of your favorite reptile's back. Increases Constitution by 7. Limited Edition 2019 Summer Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_summer2019Warrior",
	  "klass": "special",
	  "index": "summer2019Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2019Healer": {
	  "set": "summer2019ConchHealerSet",
	  "event": {
		"start": "2019-06-18",
		"end": "2019-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Conch Trumpet",
	  "notes": "Let those who need help know you're coming with the loud blast of this shell trumpet. Increases Constitution by 9. Limited Edition 2019 Summer Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_summer2019Healer",
	  "klass": "special",
	  "index": "summer2019Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2019Mage": {
	  "specialClass": "wizard",
	  "set": "summer2019WaterLilyMageSet",
	  "text": "Drops of Pure Water",
	  "notes": "Sweating in the summer sun? No! Performing a simple elemental conjuration to fill the lily pond. Increases Perception by 7. Limited Edition 2019 Summer Gear.",
	  "value": 70,
	  "per": 7,
	  "type": "shield",
	  "key": "shield_special_summer2019Mage",
	  "klass": "special",
	  "index": "summer2019Mage",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_special_fall2019Rogue": {
	  "set": "fall2019OperaticSpecterSet",
	  "event": {
		"start": "2019-09-24",
		"end": "2019-11-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Music Stand",
	  "notes": "Whether you're conducting the orchestra or singing an aria, this helpful device keeps your hands free for dramatic gestures! Increases Strength by 8. Limited Edition 2019 Autumn Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_fall2019Rogue",
	  "klass": "special",
	  "index": "fall2019Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_fall2019Warrior": {
	  "set": "fall2019RavenSet",
	  "event": {
		"start": "2019-09-24",
		"end": "2019-11-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Raven-Dark Shield",
	  "notes": "The dark sheen of a raven's feather made solid, this shield will frustrate all attacks. Increases Constitution by 7. Limited Edition 2019 Autumn Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_fall2019Warrior",
	  "klass": "special",
	  "index": "fall2019Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fall2019Healer": {
	  "set": "fall2019LichSet",
	  "event": {
		"start": "2019-09-24",
		"end": "2019-11-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Grotesque Grimoire",
	  "notes": "Harness the dark side of the Healer's arts with this Grimoire! Increases Constitution by 9. Limited Edition 2019 Autumn Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_fall2019Healer",
	  "klass": "special",
	  "index": "fall2019Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_ks2019": {
	  "text": "Mythic Gryphon Shield",
	  "notes": "Sparkling like the shell of a gryphon egg, this magnificent shield shows you how to stand ready to help when your own burdens are light. Increases Perception by 20.",
	  "value": 0,
	  "per": 20,
	  "type": "shield",
	  "key": "shield_special_ks2019",
	  "set": "special-ks2019",
	  "klass": "special",
	  "index": "ks2019",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_special_winter2020Rogue": {
	  "set": "winter2020LanternSet",
	  "event": {
		"start": "2019-12-19",
		"end": "2020-02-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Lantern Rod",
	  "notes": "Darkness is a Rogue's element. Who better, then, to light the way in the darkest time of year? Increases Strength by 8. Limited Edition 2019-2020 Winter Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_winter2020Rogue",
	  "klass": "special",
	  "index": "winter2020Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_winter2020Warrior": {
	  "set": "winter2020EvergreenSet",
	  "event": {
		"start": "2019-12-19",
		"end": "2020-02-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Round Conifer Cone",
	  "notes": "Use it as a shield until the seeds drop, and then you can put it on a wreath! Increases Constitution by 7. Limited Edition 2019-2020 Winter Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_winter2020Warrior",
	  "klass": "special",
	  "index": "winter2020Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2020Healer": {
	  "set": "winter2020WinterSpiceSet",
	  "event": {
		"start": "2019-12-19",
		"end": "2020-02-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Giant Cinnamon Stick",
	  "notes": "Do you feel you are too good for this world, too pure? Only this beauty of a spice will do. Increases Constitution by 9. Limited Edition 2019-2020 Winter Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_winter2020Healer",
	  "klass": "special",
	  "index": "winter2020Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2020Rogue": {
	  "set": "spring2020LapisLazuliRogueSet",
	  "event": {
		"start": "2020-03-17",
		"end": "2020-05-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Lazurite Blade",
	  "notes": "You'll strike so fast it'll look even MORE blue! Increases Strength by 8. Limited Edition 2020 Spring Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_spring2020Rogue",
	  "klass": "special",
	  "index": "spring2020Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_spring2020Warrior": {
	  "set": "spring2020BeetleWarriorSet",
	  "event": {
		"start": "2020-03-17",
		"end": "2020-05-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Iridescent Shield",
	  "notes": "Don't let the delicate colors fool you. This shield has got you covered! Increases Constitution by 7. Limited Edition 2020 Spring Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_spring2020Warrior",
	  "klass": "special",
	  "index": "spring2020Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2020Healer": {
	  "set": "spring2020IrisHealerSet",
	  "event": {
		"start": "2020-03-17",
		"end": "2020-05-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Perfumed Shield",
	  "notes": "Ward off those musty old To Do's with this sweet-smelling shield. Increases Constitution by 9. Limited Edition 2020 Spring Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_spring2020Healer",
	  "klass": "special",
	  "index": "spring2020Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2020Warrior": {
	  "set": "summer2020RainbowTroutWarriorSet",
	  "event": {
		"start": "2020-06-18",
		"end": "2020-08-02",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Huge Trout Scale",
	  "notes": "This fish you caught one time was SO BIG, a single scale was enough to make a mighty shield! True story! Increases Constitution by 7. Limited Edition 2020 Summer Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_summer2020Warrior",
	  "klass": "special",
	  "index": "summer2020Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2020Healer": {
	  "set": "summer2020SeaGlassHealerSet",
	  "event": {
		"start": "2020-06-18",
		"end": "2020-08-02",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Tumbled Glass Aegis",
	  "notes": "As the motion of sand and water turns trash to treasure, so shall your magic turn wounds to strength. Increases Constitution by 9. Limited Edition 2020 Summer Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_summer2020Healer",
	  "klass": "special",
	  "index": "summer2020Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2020Rogue": {
	  "set": "summer2020CrocodileRogueSet",
	  "event": {
		"start": "2020-06-18",
		"end": "2020-08-02",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Fang Blade",
	  "notes": "Your enemies don't see you coming, but your Fangs are inescapable! Increases Strength by 8. Limited Edition 2020 Summer Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_summer2020Rogue",
	  "klass": "special",
	  "index": "summer2020Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_fall2020Rogue": {
	  "set": "fall2020TwoHeadedRogueSet",
	  "text": "Swift Katar",
	  "notes": "Wielding a katar, you'd better be quick on your feet... This blade will serve you well if you strike fast, but don't over-commit! Increases Strength by 8. Limited Edition 2020 Autumn Gear.",
	  "event": {
		"start": "2020-09-22T08:00-04:00",
		"end": "2020-10-31T20:00-04:00",
		"gear": true,
		"gemsPromo": {
		  "4gems": 5,
		  "21gems": 30,
		  "42gems": 60,
		  "84gems": 125
		}
	  },
	  "specialClass": "rogue",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_fall2020Rogue",
	  "klass": "special",
	  "index": "fall2020Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_fall2020Warrior": {
	  "set": "fall2020WraithWarriorSet",
	  "event": {
		"start": "2020-09-22T08:00-04:00",
		"end": "2020-10-31T20:00-04:00",
		"gear": true,
		"gemsPromo": {
		  "4gems": 5,
		  "21gems": 30,
		  "42gems": 60,
		  "84gems": 125
		}
	  },
	  "specialClass": "warrior",
	  "text": "Spirit's Shield",
	  "notes": "It may look insubstantial, but this spectral shield can keep you safe from all kinds of harm. Increases Constitution by 7. Limited Edition 2020 Autumn Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_fall2020Warrior",
	  "klass": "special",
	  "index": "fall2020Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fall2020Healer": {
	  "set": "fall2020DeathsHeadMothHealerSet",
	  "event": {
		"start": "2020-09-22T08:00-04:00",
		"end": "2020-10-31T20:00-04:00",
		"gear": true,
		"gemsPromo": {
		  "4gems": 5,
		  "21gems": 30,
		  "42gems": 60,
		  "84gems": 125
		}
	  },
	  "specialClass": "healer",
	  "text": "Cocoon Carryall",
	  "notes": "Is it another moth you carry, still undergoing metamorphosis? Or simply a silken handbag, containing your tools of healing and prophecy? Increases Constitution by 9. Limited Edition 2020 Autumn Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_fall2020Healer",
	  "klass": "special",
	  "index": "fall2020Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2021Rogue": {
	  "set": "winter2021HollyIvyRogueSet",
	  "event": {
		"start": "2020-12-17T08:00-05:00",
		"end": "2021-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "winter",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Holly Berry Flail",
	  "notes": "Both disguise and weapon, this holly flail will help you handle the toughest tasks. Increases Strength by 8. Limited Edition 2020-2021 Winter Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_winter2021Rogue",
	  "klass": "special",
	  "index": "winter2021Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_winter2021Warrior": {
	  "set": "winter2021IceFishingWarriorSet",
	  "event": {
		"start": "2020-12-17T08:00-05:00",
		"end": "2021-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "winter",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Big Fish",
	  "notes": "Tell all your friends about the REALLY big fish you've caught! But whether you tell them he's made of plastic and sings songs is up to you. Increases Constitution by 7. Limited Edition 2020-2021 Winter Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_winter2021Warrior",
	  "klass": "special",
	  "index": "winter2021Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2021Healer": {
	  "set": "winter2021ArcticExplorerHealerSet",
	  "event": {
		"start": "2020-12-17T08:00-05:00",
		"end": "2021-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "winter",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Arctic Armguards",
	  "notes": "These mighty mitts stop weapons cold. Increases Constitution by 9. Limited Edition 2020-2021 Winter Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_winter2021Healer",
	  "klass": "special",
	  "index": "winter2021Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2021Rogue": {
	  "set": "spring2021TwinFlowerRogueSet",
	  "event": {
		"start": "2021-03-23T08:00-05:00",
		"end": "2021-04-30T20:00-05:00",
		"npcImageSuffix": "spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Twin Flower Bloom",
	  "notes": "You know what's better than dual-wielding flowers? QUADRUPLE wielding flowers! Increases Strength by 8. Limited Edition 2021 Spring Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_spring2021Rogue",
	  "klass": "special",
	  "index": "spring2021Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_spring2021Warrior": {
	  "set": "spring2021SunstoneWarriorSet",
	  "event": {
		"start": "2021-03-23T08:00-05:00",
		"end": "2021-04-30T20:00-05:00",
		"npcImageSuffix": "spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Shield of the Sun",
	  "notes": "The beauty in this roughly-shaped sunstone will shine even in the deepest caves and darkest dungeons. Hold it high! Increases Constitution by 7. Limited Edition 2021 Spring Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_spring2021Warrior",
	  "klass": "special",
	  "index": "spring2021Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2021Healer": {
	  "set": "spring2021WillowHealerSet",
	  "event": {
		"start": "2021-03-23T08:00-05:00",
		"end": "2021-04-30T20:00-05:00",
		"npcImageSuffix": "spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Salicylic Shield",
	  "notes": "A leafy green bundle that heralds shelter and compassion. Increases Constitution by 9. Limited Edition 2021 Spring Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_spring2021Healer",
	  "klass": "special",
	  "index": "spring2021Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2021Rogue": {
	  "set": "summer2021ClownfishRogueSet",
	  "event": {
		"start": "2021-06-23T08:00-04:00",
		"end": "2021-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "summer",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Anemone Tentacles",
	  "notes": "Any predatory monster that dares approach will feel the sting of your protective friends! Increases Strength by 8. Limited Edition 2021 Summer Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_summer2021Rogue",
	  "klass": "special",
	  "index": "summer2021Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_summer2021Warrior": {
	  "set": "summer2021FlyingFishWarriorSet",
	  "event": {
		"start": "2021-06-23T08:00-04:00",
		"end": "2021-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "summer",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Watery Shield",
	  "notes": "This enchanted water droplet soaks up magic and resists the blows of the reddest Dailies. Increases Constitution by 7. Limited Edition 2021 Summer Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_summer2021Warrior",
	  "klass": "special",
	  "index": "summer2021Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2021Healer": {
	  "set": "summer2021ParrotHealerSet",
	  "event": {
		"start": "2021-06-23T08:00-04:00",
		"end": "2021-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "summer",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Sunflower Seed Shield",
	  "notes": "So much potential in this shield! But for now you can use it to protect your friends. Increases Constitution by 9. Limited Edition 2021 Summer Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_summer2021Healer",
	  "klass": "special",
	  "index": "summer2021Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fall2021Rogue": {
	  "set": "fall2021OozeRogueSet",
	  "event": {
		"start": "2021-09-21T08:00-04:00",
		"end": "2021-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Dripping Goo",
	  "notes": "What on Earth did you get into? When people say Rogues have sticky fingers, this is not what they mean! Increases Strength by 8. Limited Edition 2021 Autumn Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_fall2021Rogue",
	  "klass": "special",
	  "index": "fall2021Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_fall2021Warrior": {
	  "set": "fall2021HeadlessWarriorSet",
	  "event": {
		"start": "2021-09-21T08:00-04:00",
		"end": "2021-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Jack-o-Lantern Shield",
	  "notes": "This festive shield with its crooked smile will both protect you and light your way on a dark night. It nicely doubles for a head, should you need one! Increases Constitution by 7. Limited Edition 2021 Autumn Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_fall2021Warrior",
	  "klass": "special",
	  "index": "fall2021Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fall2021Healer": {
	  "set": "fall2021FlameSummonerHealerSet",
	  "event": {
		"start": "2021-09-21T08:00-04:00",
		"end": "2021-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Summoned Creature",
	  "notes": "An ethereal being rises from your magical flames to grant you extra protection. Increases Constitution by 9. Limited Edition 2021 Autumn Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_fall2021Healer",
	  "klass": "special",
	  "index": "fall2021Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2022Rogue": {
	  "set": "winter2022FireworksRogueSet",
	  "event": {
		"start": "2021-12-21T08:00-05:00",
		"end": "2022-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "_winter",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Shooting Star Firework",
	  "notes": "Silver and gold are beloved of Rogues, right? These are totally on theme. Increases Strength by 8. Limited Edition 2021-2022 Winter Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_winter2022Rogue",
	  "klass": "special",
	  "index": "winter2022Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_winter2022Warrior": {
	  "set": "winter2022StockingWarriorSet",
	  "event": {
		"start": "2021-12-21T08:00-05:00",
		"end": "2022-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "_winter",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Jingle Bell Shield",
	  "notes": "This is a jingle bell, jingle bell, jingle bell shield. Jingle bell protect and jingle bell deflect. Increases Constitution by 7. Limited Edition 2021-2022 Winter Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_winter2022Warrior",
	  "klass": "special",
	  "index": "winter2022Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2022Healer": {
	  "set": "winter2022IceCrystalHealerSet",
	  "event": {
		"start": "2021-12-21T08:00-05:00",
		"end": "2022-01-31T20:00-05:00",
		"season": "winter",
		"npcImageSuffix": "_winter",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Enduring Ice Crystal",
	  "notes": "Though it melts in your hand, the power of elemental ice replenishes it from within. Increases Constitution by 9. Limited Edition 2021-2022 Winter Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_winter2022Healer",
	  "klass": "special",
	  "index": "winter2022Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2022Rogue": {
	  "set": "spring2022MagpieRogueSet",
	  "event": {
		"start": "2022-03-22T08:00-05:00",
		"end": "2022-04-30T20:00-05:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Giant Earring Stud",
	  "notes": "A shiny! It’s so shiny and gleaming and pretty and nice and all yours! Increases Strength by 8. Limited Edition 2022 Spring Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_spring2022Rogue",
	  "klass": "special",
	  "index": "spring2022Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_spring2022Warrior": {
	  "set": "spring2022RainstormWarriorSet",
	  "event": {
		"start": "2022-03-22T08:00-05:00",
		"end": "2022-04-30T20:00-05:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Raincloud",
	  "notes": "Ever had one of those days when it seems like a raincloud is following you around? Well, consider yourself lucky, because the prettiest flowers will soon be growing at your feet! Increases Constitution by 7. Limited Edition 2022 Spring Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_spring2022Warrior",
	  "klass": "special",
	  "index": "spring2022Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2022Healer": {
	  "set": "spring2022PeridotHealerSet",
	  "event": {
		"start": "2022-03-22T08:00-05:00",
		"end": "2022-04-30T20:00-05:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Peridot Shield",
	  "notes": "Formed by molten rock of the upper mantle, this shield can withstand any hit that comes its way. Increases Constitution by 9. Limited Edition 2022 Spring Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_spring2022Healer",
	  "klass": "special",
	  "index": "spring2022Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2022Rogue": {
	  "set": "summer2022CrabRogueSet",
	  "event": {
		"start": "2022-06-21T08:00-04:00",
		"end": "2022-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "_summer",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Crab Claw",
	  "notes": "If you're in a pinch, don't hesitate to show these fearsome claws! Increases Strength by 8. Limited Edition 2022 Summer Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_summer2022Rogue",
	  "klass": "special",
	  "index": "summer2022Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_summer2022Warrior": {
	  "set": "summer2022WaterspoutWarriorSet",
	  "event": {
		"start": "2022-06-21T08:00-04:00",
		"end": "2022-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "_summer",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Feisty Shark",
	  "notes": "It snaps! It bites! And it never, ever stops! Increases Constitution by 7. Limited Edition 2022 Summer Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_summer2022Warrior",
	  "klass": "special",
	  "index": "summer2022Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2022Healer": {
	  "set": "summer2022AngelfishHealerSet",
	  "event": {
		"start": "2022-06-21T08:00-04:00",
		"end": "2022-07-31T20:00-04:00",
		"season": "summer",
		"npcImageSuffix": "_summer",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Remedial Ripples",
	  "notes": "Send out restorative magic in gentle ripples through the reef. Increases Constitution by 9. Limited Edition 2022 Summer Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_summer2022Healer",
	  "klass": "special",
	  "index": "summer2022Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fall2022Rogue": {
	  "set": "fall2022KappaRogueSet",
	  "event": {
		"start": "2022-09-20T08:00-04:00",
		"end": "2022-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Cucumber Blade",
	  "notes": "Not only can you defend yourself with this cucumber, it also makes for a tasty meal. Increases Strength by 8. Limited Edition 2022 Fall Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_fall2022Rogue",
	  "klass": "special",
	  "index": "fall2022Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_fall2022Warrior": {
	  "set": "fall2022OrcWarriorSet",
	  "event": {
		"start": "2022-09-20T08:00-04:00",
		"end": "2022-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Orc Shield",
	  "notes": "RAWR or TREAT! Increases Constitution by 7. Limited Edition 2022 Fall Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_fall2022Warrior",
	  "klass": "special",
	  "index": "fall2022Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fall2022Healer": {
	  "set": "fall2022WatcherHealerSet",
	  "event": {
		"start": "2022-09-20T08:00-04:00",
		"end": "2022-10-31T20:00-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Left Peeker Eye",
	  "notes": "Eye Two, look upon this costume and tremble. Increases Constitution by 9. Limited Edition 2022 Fall Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_fall2022Healer",
	  "klass": "special",
	  "index": "fall2022Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2023Rogue": {
	  "set": "winter2023RibbonRogueSet",
	  "event": {
		"start": "2022-12-20T08:00-05:00",
		"end": "2023-01-31T23:59-05:00",
		"npcImageSuffix": "_winter",
		"season": "winter",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Green Satin Sash",
	  "notes": "Legends tell of Rogues who snare their opponents' weapons, disarm them, then gift the item back just to be cute. Increases Strength by 8. Limited Edition 2022-2023 Winter Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_winter2023Rogue",
	  "klass": "special",
	  "index": "winter2023Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_winter2023Warrior": {
	  "set": "winter2023WalrusWarriorSet",
	  "event": {
		"start": "2022-12-20T08:00-05:00",
		"end": "2023-01-31T23:59-05:00",
		"npcImageSuffix": "_winter",
		"season": "winter",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Oyster Shield",
	  "notes": "The time has come, the Walrus said, to talk of many things: of oyster shells—and winter bells—of songs that someone sings—and where this shield’s pearl has gone—or what the new year brings! Increases Constitution by 7. Limited Edition 2022-2023 Winter Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_winter2023Warrior",
	  "klass": "special",
	  "index": "winter2023Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_winter2023Healer": {
	  "set": "winter2023CardinalHealerSet",
	  "event": {
		"start": "2022-12-20T08:00-05:00",
		"end": "2023-01-31T23:59-05:00",
		"npcImageSuffix": "_winter",
		"season": "winter",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Cool Jams",
	  "notes": "Your song of frost and snow will soothe the spirits of all who hear. Increases Constitution by 9. Limited Edition 2022-2023 Winter Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_winter2023Healer",
	  "klass": "special",
	  "index": "winter2023Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2023Rogue": {
	  "set": "spring2023CaterpillarRogueSet",
	  "event": {
		"start": "2023-03-21T08:00-04:00",
		"end": "2023-04-30T23:59-04:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Nibbled Leaf",
	  "notes": "Slash! Swat! Snack! Get strong and ready for your coming metamorphosis. Increases Strength by 8. Limited Edition 2023 Spring Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_spring2023Rogue",
	  "klass": "special",
	  "index": "spring2023Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_spring2023Warrior": {
	  "set": "spring2023HummingbirdWarriorSet",
	  "event": {
		"start": "2023-03-21T08:00-04:00",
		"end": "2023-04-30T23:59-04:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Flower Bunch",
	  "notes": "Collect the spring’s best flowers into this brightly colored floral bunch. Increases Constitution by 7. Limited Edition 2023 Spring Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_spring2023Warrior",
	  "klass": "special",
	  "index": "spring2023Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_spring2023Healer": {
	  "set": "spring2023LilyHealerSet",
	  "event": {
		"start": "2023-03-21T08:00-04:00",
		"end": "2023-04-30T23:59-04:00",
		"npcImageSuffix": "_spring",
		"season": "spring",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Lily Corsage",
	  "notes": "An accent for a healing visit, or part of a ritual for attending a springtime dance! Increases Constitution by 9. Limited Edition 2023 Spring Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_spring2023Healer",
	  "klass": "special",
	  "index": "spring2023Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2023Rogue": {
	  "set": "summer2023GuppyRogueSet",
	  "event": {
		"start": "2023-06-20T08:00-04:00",
		"end": "2023-07-31T23:59-04:00",
		"npcImageSuffix": "_summer",
		"season": "summer",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "text": "Guppy Fan",
	  "notes": "No gup, these things are tricky to learn. But impressive when you do! Increases Strength by 8. Limited Edition 2023 Summer Gear.",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_summer2023Rogue",
	  "klass": "special",
	  "index": "summer2023Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_summer2023Warrior": {
	  "set": "summer2023GoldfishWarriorSet",
	  "event": {
		"start": "2023-06-20T08:00-04:00",
		"end": "2023-07-31T23:59-04:00",
		"npcImageSuffix": "_summer",
		"season": "summer",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Goldfish Spirit",
	  "notes": "Summon this goldfish spirit for an extra burst of reassurance and companionship during a fight. Increases Constitution by 7. Limited Edition 2023 Summer Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_summer2023Warrior",
	  "klass": "special",
	  "index": "summer2023Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_summer2023Healer": {
	  "set": "summer2023KelpHealerSet",
	  "event": {
		"start": "2023-06-20T08:00-04:00",
		"end": "2023-07-31T23:59-04:00",
		"npcImageSuffix": "_summer",
		"season": "summer",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Sea Urchin",
	  "notes": "You conceal and shelter it. It dissuades nosy monsters from coming too close. Perfect symbiosis! Increases Constitution by 9. Limited Edition 2023 Summer Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_summer2023Healer",
	  "klass": "special",
	  "index": "summer2023Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fall2023Rogue": {
	  "set": "fall2023WitchsBrewRogueSet",
	  "text": "Bewitched Bottle",
	  "notes": "Enchanted with the strongest spells to hold powerful potions. Increases Strength by 8. Limited Edition 2023 Fall Gear.",
	  "event": {
		"start": "2023-09-21T08:00-04:00",
		"end": "2023-10-31T23:59-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "rogue",
	  "value": 80,
	  "str": 8,
	  "type": "shield",
	  "key": "shield_special_fall2023Rogue",
	  "klass": "special",
	  "index": "fall2023Rogue",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_special_fall2023Warrior": {
	  "set": "fall2023ScaryMovieWarriorSet",
	  "event": {
		"start": "2023-09-21T08:00-04:00",
		"end": "2023-10-31T23:59-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "warrior",
	  "text": "Comfy Pillow",
	  "notes": "Perfect for making yourself comfortable while enjoying a scary movie... But we won't tell anyone if you need to hug it during the really spooky scenes! Increases Constitution by 7. Limited Edition 2023 Fall Gear.",
	  "value": 70,
	  "con": 7,
	  "type": "shield",
	  "key": "shield_special_fall2023Warrior",
	  "klass": "special",
	  "index": "fall2023Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_special_fall2023Healer": {
	  "set": "fall2023BogCreatureHealerSet",
	  "event": {
		"start": "2023-09-21T08:00-04:00",
		"end": "2023-10-31T23:59-04:00",
		"npcImageSuffix": "_fall",
		"season": "fall",
		"gear": true
	  },
	  "specialClass": "healer",
	  "text": "Mossy Rock",
	  "notes": "With a firm base and a soft top, this is perfect to hurl at enemies or to sit upon when you need a rest from your adventures. Increases Constitution by 9. Limited Edition 2023 Fall Gear.",
	  "value": 70,
	  "con": 9,
	  "type": "shield",
	  "key": "shield_special_fall2023Healer",
	  "klass": "special",
	  "index": "fall2023Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_mystery_201601": {
	  "text": "Resolution Slayer",
	  "notes": "This blade can be used to parry away all distractions. Confers no benefit. January 2016 Subscriber Item.",
	  "mystery": "201601",
	  "value": 0,
	  "type": "shield",
	  "key": "shield_mystery_201601",
	  "set": "mystery-201601",
	  "klass": "mystery",
	  "index": "201601",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_mystery_201701": {
	  "text": "Time-Freezer Shield",
	  "notes": "Freeze time in its tracks and conquer your tasks! Confers no benefit. January 2017 Subscriber Item.",
	  "mystery": "201701",
	  "value": 0,
	  "type": "shield",
	  "key": "shield_mystery_201701",
	  "set": "mystery-201701",
	  "klass": "mystery",
	  "index": "201701",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_mystery_201708": {
	  "text": "Lava Shield",
	  "notes": "This rugged shield of molten rock protects you from bad Habits but won't singe your hands. Confers no benefit. August 2017 Subscriber Item.",
	  "mystery": "201708",
	  "value": 0,
	  "type": "shield",
	  "key": "shield_mystery_201708",
	  "set": "mystery-201708",
	  "klass": "mystery",
	  "index": "201708",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_mystery_201709": {
	  "text": "Sorcery Handbook",
	  "notes": "This book will guide you through your forays into sorcery. Confers no benefit. September 2017 Subscriber Item.",
	  "mystery": "201709",
	  "value": 0,
	  "type": "shield",
	  "key": "shield_mystery_201709",
	  "set": "mystery-201709",
	  "klass": "mystery",
	  "index": "201709",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_mystery_201802": {
	  "text": "Love Bug Shield",
	  "notes": "Although it may look like brittle candy, this shield is resistant to even the strongest Shattering Heartbreak attacks! Confers no benefit. February 2018 Subscriber Item.",
	  "mystery": "201802",
	  "value": 0,
	  "type": "shield",
	  "key": "shield_mystery_201802",
	  "set": "mystery-201802",
	  "klass": "mystery",
	  "index": "201802",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_mystery_201902": {
	  "text": "Cryptic Confetti",
	  "notes": "This glittery paper forms magic hearts that slowly drift and dance in the air. Confers no benefit. February 2019 Subscriber Item.",
	  "mystery": "201902",
	  "value": 0,
	  "type": "shield",
	  "key": "shield_mystery_201902",
	  "set": "mystery-201902",
	  "klass": "mystery",
	  "index": "201902",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_mystery_202011": {
	  "text": "Foliated Staff",
	  "notes": "Harness the power of the autumn wind with this staff. Use for arcane magic or to make awesome leaf piles, the choice is yours! Confers no benefit. November 2020 Subscriber Item.",
	  "mystery": "202011",
	  "value": 0,
	  "type": "shield",
	  "key": "shield_mystery_202011",
	  "set": "mystery-202011",
	  "klass": "mystery",
	  "index": "202011",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_mystery_202209": {
	  "text": "Mound o' Magic Books",
	  "notes": "Building your sorcery knowledge takes a lot of reading, but you're sure to enjoy your education. Confers no benefit. September 2022 Subscriber Item.",
	  "mystery": "202209",
	  "value": 0,
	  "type": "shield",
	  "key": "shield_mystery_202209",
	  "set": "mystery-202209",
	  "klass": "mystery",
	  "index": "202209",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_mystery_301405": {
	  "text": "Clock Shield",
	  "notes": "Time is on your side with this towering clock shield! Confers no benefit. June 3015 Subscriber Item.",
	  "mystery": "301405",
	  "value": 0,
	  "type": "shield",
	  "key": "shield_mystery_301405",
	  "set": "mystery-301405",
	  "klass": "mystery",
	  "index": "301405",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_mystery_301704": {
	  "text": "Fluttery Fan",
	  "notes": "This fine fan will keep you feeling cool and looking fancy! Confers no benefit. April 3017 Subscriber Item.",
	  "mystery": "301704",
	  "value": 0,
	  "type": "shield",
	  "key": "shield_mystery_301704",
	  "set": "mystery-301704",
	  "klass": "mystery",
	  "index": "301704",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_gladiatorShield": {
	  "notes": "To be a gladiator you must.... eh, whatever, just bash them with your shield. Increases Constitution by 5 and Strength by 5. Enchanted Armoire: Gladiator Set (Item 3 of 3).",
	  "con": 5,
	  "str": 5,
	  "set": "gladiator",
	  "text": "Gladiator Shield",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_gladiatorShield",
	  "klass": "armoire",
	  "index": "gladiatorShield",
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_midnightShield": {
	  "con": 10,
	  "str": 2,
	  "notes": "This shield is most powerful at the stroke of midnight! Increases Constitution by 10 and Strength by 2. Enchanted Armoire: Independent Item.",
	  "text": "Midnight Shield",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_midnightShield",
	  "set": "armoire-midnightShield",
	  "klass": "armoire",
	  "index": "midnightShield",
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_royalCane": {
	  "con": 5,
	  "int": 5,
	  "per": 5,
	  "set": "royal",
	  "notes": "Hooray for the ruler, worthy of song! Increases Constitution, Intelligence, and Perception by 5 each. Enchanted Armoire: Royal Set (Item 2 of 3).",
	  "text": "Royal Cane",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_royalCane",
	  "klass": "armoire",
	  "index": "royalCane",
	  "str": 0
	},
	"shield_armoire_dragonTamerShield": {
	  "per": 15,
	  "set": "dragonTamer",
	  "notes": "Distract enemies with this dragon-shaped shield. Increases Perception by 15. Enchanted Armoire: Dragon Tamer Set (Item 2 of 3).",
	  "text": "Dragon Tamer Shield",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_dragonTamerShield",
	  "klass": "armoire",
	  "index": "dragonTamerShield",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_armoire_mysticLamp": {
	  "per": 15,
	  "notes": "Light the darkest caves with this mystic lamp! Increases Perception by 15. Enchanted Armoire: Independent Item.",
	  "text": "Mystic Lamp",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_mysticLamp",
	  "set": "armoire-mysticLamp",
	  "klass": "armoire",
	  "index": "mysticLamp",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_armoire_floralBouquet": {
	  "con": 3,
	  "notes": "Not much help in battle, but aren't they beautiful? Increases Constitution by 3. Enchanted Armoire: Independent Item.",
	  "text": "Bouquet o' Flowers",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_floralBouquet",
	  "set": "armoire-floralBouquet",
	  "klass": "armoire",
	  "index": "floralBouquet",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_sandyBucket": {
	  "per": 10,
	  "set": "seaside",
	  "notes": "Good for storing all that Gold that you'll earn from completing tasks! Increases Perception by 10. Enchanted Armoire: Seaside Set (Item 3 of 3).",
	  "text": "Sandy Bucket",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_sandyBucket",
	  "klass": "armoire",
	  "index": "sandyBucket",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_armoire_perchingFalcon": {
	  "str": 16,
	  "set": "falconer",
	  "notes": "A falcon friend perches on your arm, prepared to swoop at your enemies. Increases Strength by 16. Enchanted Armoire: Falconer Set (Item 3 of 3).",
	  "text": "Perching Falcon",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_perchingFalcon",
	  "klass": "armoire",
	  "index": "perchingFalcon",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_ramHornShield": {
	  "str": 7,
	  "con": 7,
	  "set": "ramBarbarian",
	  "notes": "Ram this shield into opposing Dailies! Increases Constitution and Strength by 7 each. Enchanted Armoire: Ram Barbarian Set (Item 3 of 3).",
	  "text": "Ram Horn Shield",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_ramHornShield",
	  "klass": "armoire",
	  "index": "ramHornShield",
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_redRose": {
	  "per": 10,
	  "notes": "This deep red rose smells enchanting. It will also sharpen your understanding. Increases Perception by 10. Enchanted Armoire: Independent Item.",
	  "text": "Red Rose",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_redRose",
	  "set": "armoire-redRose",
	  "klass": "armoire",
	  "index": "redRose",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_armoire_mushroomDruidShield": {
	  "con": 9,
	  "str": 8,
	  "set": "mushroomDruid",
	  "notes": "Though made from a mushroom, there's nothing mushy about this tough shield! Increases Constitution by 9 and Strength by 8. Enchanted Armoire: Mushroom Druid Set (Item 3 of 3).",
	  "text": "Mushroom Druid Shield",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_mushroomDruidShield",
	  "klass": "armoire",
	  "index": "mushroomDruidShield",
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_festivalParasol": {
	  "con": 8,
	  "set": "festivalAttire",
	  "notes": "This lightweight parasol will shield you from the glare--whether it's from the sun or from dark red Dailies! Increases Constitution by 8. Enchanted Armoire: Festival Attire Set (Item 2 of 3).",
	  "text": "Festival Parasol",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_festivalParasol",
	  "klass": "armoire",
	  "index": "festivalParasol",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_vikingShield": {
	  "per": 6,
	  "int": 8,
	  "set": "viking",
	  "notes": "This sturdy shield of wood and hide can stand up to the most daunting of foes. Increases Perception by 6 and Intelligence by 8. Enchanted Armoire: Viking Set (Item 3 of 3).",
	  "text": "Viking Shield",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_vikingShield",
	  "klass": "armoire",
	  "index": "vikingShield",
	  "str": 0,
	  "con": 0
	},
	"shield_armoire_swanFeatherFan": {
	  "str": 8,
	  "set": "swanDancer",
	  "notes": "Use this fan to accentuate your movement as you dance like a graceful swan. Increases Strength by 8. Enchanted Armoire: Swan Dancer Set (Item 3 of 3).",
	  "text": "Swan Feather Fan",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_swanFeatherFan",
	  "klass": "armoire",
	  "index": "swanFeatherFan",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_goldenBaton": {
	  "int": 4,
	  "str": 4,
	  "notes": "When you dance into battle waving this baton to the beat, you are unstoppable! Increases Intelligence and Strength by 4 each. Enchanted Armoire: Independent Item.",
	  "text": "Golden Baton",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_goldenBaton",
	  "set": "armoire-goldenBaton",
	  "klass": "armoire",
	  "index": "goldenBaton",
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_antiProcrastinationShield": {
	  "con": 15,
	  "set": "antiProcrastination",
	  "notes": "This strong steel shield will help you block distractions when they approach! Increases Constitution by 15. Enchanted Armoire: Anti-Procrastination Set (Item 3 of 3).",
	  "text": "Anti-Procrastination Shield",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_antiProcrastinationShield",
	  "klass": "armoire",
	  "index": "antiProcrastinationShield",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_horseshoe": {
	  "con": 6,
	  "per": 6,
	  "str": 6,
	  "set": "farrier",
	  "notes": "Help protect the feet of your hooved mounts with this iron shoe. Increases Constitution, Perception, and Strength by 6 each. Enchanted Armoire: Farrier Set (Item 3 of 3).",
	  "text": "Horseshoe",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_horseshoe",
	  "klass": "armoire",
	  "index": "horseshoe",
	  "int": 0
	},
	"shield_armoire_handmadeCandlestick": {
	  "str": 12,
	  "set": "candlestickMaker",
	  "notes": "Your fine wax wares provide light and warmth to grateful Habiticans! Increases Strength by 12. Enchanted Armoire: Candlestick Maker Set (Item 3 of 3).",
	  "text": "Handmade Candlestick",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_handmadeCandlestick",
	  "klass": "armoire",
	  "index": "handmadeCandlestick",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_weaversShuttle": {
	  "per": 9,
	  "int": 8,
	  "set": "weaver",
	  "notes": "This tool passes your weft thread through the warp to make cloth! Increases Intelligence by 8 and Perception by 9. Enchanted Armoire: Weaver Set (Item 3 of 3).",
	  "text": "Weaver's Shuttle",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_weaversShuttle",
	  "klass": "armoire",
	  "index": "weaversShuttle",
	  "str": 0,
	  "con": 0
	},
	"shield_armoire_shieldOfDiamonds": {
	  "con": 10,
	  "set": "kingOfDiamonds",
	  "notes": "This radiant shield not only provides protection, it empowers you with endurance! Increases Constitution by 10. Enchanted Armoire: King of Diamonds Set (Item 4 of 4).",
	  "text": "Shield of Diamonds",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_shieldOfDiamonds",
	  "klass": "armoire",
	  "index": "shieldOfDiamonds",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_flutteryFan": {
	  "con": 5,
	  "int": 5,
	  "per": 5,
	  "set": "fluttery",
	  "notes": "On a hot day, there's nothing quite like a fancy fan to help you look and feel cool. Increases Constitution, Intelligence, and Perception by 5 each. Enchanted Armoire: Fluttery Frock Set (Item 4 of 4).",
	  "text": "Fluttery Fan",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_flutteryFan",
	  "klass": "armoire",
	  "index": "flutteryFan",
	  "str": 0
	},
	"shield_armoire_fancyShoe": {
	  "int": 7,
	  "per": 7,
	  "set": "cobbler",
	  "notes": "A very special shoe you're working on. It's fit for royalty! Increases Intelligence and Perception by 7 each. Enchanted Armoire: Cobbler Set (Item 3 of 3).",
	  "text": "Fancy Shoe",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_fancyShoe",
	  "klass": "armoire",
	  "index": "fancyShoe",
	  "str": 0,
	  "con": 0
	},
	"shield_armoire_fancyBlownGlassVase": {
	  "int": 6,
	  "set": "glassblower",
	  "notes": "What a fancy vase you've made! What will you put inside? Increases Intelligence by 6. Enchanted Armoire: Glassblower Set (Item 4 of 4).",
	  "text": "Fancy Blown Glass Vase",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_fancyBlownGlassVase",
	  "klass": "armoire",
	  "index": "fancyBlownGlassVase",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_piraticalSkullShield": {
	  "per": 4,
	  "int": 4,
	  "set": "piraticalPrincess",
	  "notes": "This enchanted shield will whisper the secret locations of your enemies' treasures- listen closely! Increases Perception and Intelligence by 4 each. Enchanted Armoire: Piratical Princess Set (Item 4 of 4).",
	  "text": "Piratical Skull Shield",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_piraticalSkullShield",
	  "klass": "armoire",
	  "index": "piraticalSkullShield",
	  "str": 0,
	  "con": 0
	},
	"shield_armoire_unfinishedTome": {
	  "int": 10,
	  "set": "bookbinder",
	  "notes": "You simply can't procrastinate when you're holding this! The binding needs to be finished so people can read the book! Increases Intelligence by 10. Enchanted Armoire: Bookbinder Set (Item 4 of 4).",
	  "text": "Unfinished Tome",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_unfinishedTome",
	  "klass": "armoire",
	  "index": "unfinishedTome",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_softBluePillow": {
	  "con": 10,
	  "set": "blueLoungewear",
	  "notes": "The sensible warrior packs a pillow for any expedition. Shield yourself from sharp tasks... even while you nap. Increases Constitution by 10. Enchanted Armoire: Blue Loungewear Set (Item 3 of 3).",
	  "text": "Soft Blue Pillow",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_softBluePillow",
	  "klass": "armoire",
	  "index": "softBluePillow",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_softGreenPillow": {
	  "con": 8,
	  "int": 6,
	  "set": "greenLoungewear",
	  "notes": "The practical warrior packs a pillow for any expedition. Ward off those pesky chores... even while you nap. Increases Constitution by 8 and Intelligence by 6. Enchanted Armoire: Green Loungewear Set (Item 3 of 3).",
	  "text": "Soft Green Pillow",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_softGreenPillow",
	  "klass": "armoire",
	  "index": "softGreenPillow",
	  "str": 0,
	  "per": 0
	},
	"shield_armoire_softRedPillow": {
	  "con": 5,
	  "str": 5,
	  "set": "redLoungewear",
	  "notes": "The prepared warrior packs a pillow for any expedition. Protect yourself from those tough tasks... even while you nap. Increases Constitution and Strength by 5 each. Enchanted Armoire: Red Loungewear Set (Item 3 of 3).",
	  "text": "Soft Red Pillow",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_softRedPillow",
	  "klass": "armoire",
	  "index": "softRedPillow",
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_mightyQuill": {
	  "per": 9,
	  "set": "scribe",
	  "notes": "Mightier than the sword, they say! Increases Perception by 9. Enchanted Armoire: Scribe Set (Item 2 of 3).",
	  "text": "Mighty Quill",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_mightyQuill",
	  "klass": "armoire",
	  "index": "mightyQuill",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_armoire_mightyPizza": {
	  "per": 8,
	  "set": "chef",
	  "notes": "Sure, it's a pretty good shield, but we strongly suggest you eat this fine, fine pizza. Increases Perception by 8. Enchanted Armoire: Chef Set (Item 4 of 4).",
	  "text": "Mighty Pizza",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_mightyPizza",
	  "klass": "armoire",
	  "index": "mightyPizza",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_armoire_trustyUmbrella": {
	  "int": 7,
	  "set": "detective",
	  "notes": "Mysteries are often accompanied by inclement weather, so be prepared! Increases Intelligence by 7. Enchanted Armoire: Detective Set (Item 4 of 4).",
	  "text": "Trusty Umbrella",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_trustyUmbrella",
	  "klass": "armoire",
	  "index": "trustyUmbrella",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_polishedPocketwatch": {
	  "int": 9,
	  "notes": "You've got the time. And it looks very nice on you. Increases Intelligence by 9. Enchanted Armoire: Independent Item.",
	  "text": "Polished Pocketwatch",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_polishedPocketwatch",
	  "set": "armoire-polishedPocketwatch",
	  "klass": "armoire",
	  "index": "polishedPocketwatch",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_masteredShadow": {
	  "per": 5,
	  "con": 5,
	  "set": "shadowMaster",
	  "notes": "Your powers have brought these swirling shadows to your side to do your bidding. Increases Perception and Constitution by 5 each. Enchanted Armoire: Shadow Master Set (Item 4 of 4).",
	  "text": "Mastered Shadow",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_masteredShadow",
	  "klass": "armoire",
	  "index": "masteredShadow",
	  "str": 0,
	  "int": 0
	},
	"shield_armoire_alchemistsScale": {
	  "int": 7,
	  "set": "alchemist",
	  "notes": "Ensure that your mystical ingredients are properly measured using this fine piece of equipment. Increases Intelligence by 7. Enchanted Armoire: Alchemist Set (Item 4 of 4).",
	  "text": "Alchemist's Scale",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_alchemistsScale",
	  "klass": "armoire",
	  "index": "alchemistsScale",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_birthdayBanner": {
	  "str": 7,
	  "set": "birthday",
	  "notes": "Celebrate your special day, the special day of someone you love, or break this out for Habitica's Birthday on January 31! Increases Strength by 7. Enchanted Armoire: Happy Birthday Set (Item 4 of 4).",
	  "text": "Birthday Banner",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_birthdayBanner",
	  "klass": "armoire",
	  "index": "birthdayBanner",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_perfectMatch": {
	  "per": 15,
	  "set": "matchMaker",
	  "notes": "Hot take: we think you look great. Increases Perception by 15. Enchanted Armoire: Match Maker Set (Item 4 of 4).",
	  "text": "The Perfect Match",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_perfectMatch",
	  "klass": "armoire",
	  "index": "perfectMatch",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_armoire_baseballGlove": {
	  "str": 9,
	  "set": "baseball",
	  "notes": "Perfect for the big tournament, or a friendly game of catch between tasks. Increases Strength by 9. Enchanted Armoire: Baseball Set (Item 4 of 4).",
	  "text": "Baseball Glove",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_baseballGlove",
	  "klass": "armoire",
	  "index": "baseballGlove",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_hobbyHorse": {
	  "per": 4,
	  "con": 4,
	  "set": "paperKnight",
	  "notes": "Ride your handsome hobby-horse steed toward your just Rewards! Increases Perception and Constitution by 4 each. Enchanted Armoire: Paper Knight Set (Item 2 of 3).",
	  "text": "Hobby Horse",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_hobbyHorse",
	  "klass": "armoire",
	  "index": "hobbyHorse",
	  "str": 0,
	  "int": 0
	},
	"shield_armoire_fiddle": {
	  "int": 6,
	  "set": "fiddler",
	  "notes": "A perfect instrument that always strikes the right note in company. Increases Intelligence by 6. Enchanted Armoire: Fiddler Set (Item 4 of 4).",
	  "text": "Fiddler's Violin",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_fiddle",
	  "klass": "armoire",
	  "index": "fiddle",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_lifeBuoy": {
	  "con": 12,
	  "set": "lifeguard",
	  "notes": "Oh buoy! This will come in handy if you spot someone struggling in a sea of tasks and responsibilities. Increases Constitution by 12. Enchanted Armoire: Lifeguard Set (Item 2 of 3).",
	  "text": "Life Buoy",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_lifeBuoy",
	  "klass": "armoire",
	  "index": "lifeBuoy",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_piratesCompanion": {
	  "per": 8,
	  "set": "pirate",
	  "notes": "Perfect if you want to talk your enemies to death, this parrot never shuts up. Maybe it'll remind you about your tasks too! Increases Perception by 8. Enchanted Armoire: Pirate Set (Item 3 of 3).",
	  "text": "Pirate's Companion",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_piratesCompanion",
	  "klass": "armoire",
	  "index": "piratesCompanion",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_armoire_mortarAndPestle": {
	  "con": 9,
	  "set": "herbalist",
	  "notes": "The most important equipment in the herbalist's arsenal! Grind up your ingredients for your herbal concoctions, and put your back into it! Increases Constitution by 9. Enchanted Armoire: Heroic Herbalist Set (Item 2 of 3).",
	  "text": "Mortar and Pestle",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_mortarAndPestle",
	  "klass": "armoire",
	  "index": "mortarAndPestle",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_darkAutumnFlame": {
	  "con": 12,
	  "set": "autumnEnchanter",
	  "notes": "These mesmerizing flames dance with lively but foreboding energy even in autumn's chilliest nights. Increases Constitution by 12. Enchanted Armoire: Autumn Enchanter Set (Item 4 of 4).",
	  "text": "Dark Autumn Flame",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_darkAutumnFlame",
	  "klass": "armoire",
	  "index": "darkAutumnFlame",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_blueMoonSai": {
	  "per": 8,
	  "set": "blueMoon",
	  "notes": "This sai is a traditional weapon, imbued with the powers of the light side of the moon. Increases Perception by 8. Enchanted Armoire: Blue Moon Rogue Set (item 2 of 4).",
	  "text": "Light Lunar Sai",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_blueMoonSai",
	  "klass": "armoire",
	  "index": "blueMoonSai",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_armoire_softPinkPillow": {
	  "str": 6,
	  "con": 6,
	  "set": "pinkLoungewear",
	  "notes": "The sensible warrior packs a pillow for any expedition. Soften life's blows... even while you nap. Increases Strength and Constitution by 6 each. Enchanted Armoire: Pink Loungewear Set (item 3 of 3).",
	  "text": "Soft Pink Pillow",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_softPinkPillow",
	  "klass": "armoire",
	  "index": "softPinkPillow",
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_clownsBalloons": {
	  "per": 5,
	  "set": "clown",
	  "notes": "Be careful: replacing these balloons would be a bit expensive... because of the inflation! Increases Perception by 5. Enchanted Armoire: Clown Set (Item 4 of 5).",
	  "text": "Clown's Balloons",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_clownsBalloons",
	  "klass": "armoire",
	  "index": "clownsBalloons",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_armoire_strawberryFood": {
	  "str": 5,
	  "set": "petFood",
	  "notes": "A delicious fresh strawberry to feed to your pets! Do you know which pets like strawberries best? Increases Strength by 5. Enchanted Armoire: Pet Food Set (Item 1 of 10).",
	  "text": "Decorative Strawberry",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_strawberryFood",
	  "klass": "armoire",
	  "index": "strawberryFood",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_rottenMeatFood": {
	  "con": 5,
	  "set": "petFood",
	  "notes": "Hold your nose! This rotten meat might be disgusting to you, but it's perfect for some of your pets! Increases Constitution by 5. Enchanted Armoire: Pet Food Set (Item 2 of 10).",
	  "text": "Decorative Rotten Meat",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_rottenMeatFood",
	  "klass": "armoire",
	  "index": "rottenMeatFood",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_potatoFood": {
	  "per": 5,
	  "set": "petFood",
	  "notes": "Potatoes are a staple of many diets, but some pets would like to live on potatoes alone... Increases Perception by 5. Enchanted Armoire: Pet Food Set (Item 3 of 10).",
	  "text": "Decorative Potato",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_potatoFood",
	  "klass": "armoire",
	  "index": "potatoFood",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_armoire_pinkCottonCandyFood": {
	  "int": 5,
	  "set": "petFood",
	  "notes": "A sweet treat for the pets with a sweet tooth. But who will like it best? Increases Intelligence by 5. Enchanted Armoire: Pet Food Set (Item 4 of 10).",
	  "text": "Decorative Pink Cotton Candy",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_pinkCottonCandyFood",
	  "klass": "armoire",
	  "index": "pinkCottonCandyFood",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_meatFood": {
	  "str": 5,
	  "set": "petFood",
	  "notes": "Sometimes a bit of protein is what you need to grow up big and strong. Some of your pets are more eager for it than others! Increases Strength by 5. Enchanted Armoire: Pet Food Set (Item 5 of 10).",
	  "text": "Decorative Meat",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_meatFood",
	  "klass": "armoire",
	  "index": "meatFood",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_honeyFood": {
	  "int": 3,
	  "per": 3,
	  "set": "petFood",
	  "notes": "Watch out for sticky paws once you've fed your pets this honey! Some pets crave this natural sweetness; can you guess who? Increases Intelligence and Perception by 3 each. Enchanted Armoire: Pet Food Set (Item 6 of 10).",
	  "text": "Decorative Honey",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_honeyFood",
	  "klass": "armoire",
	  "index": "honeyFood",
	  "str": 0,
	  "con": 0
	},
	"shield_armoire_fishFood": {
	  "per": 5,
	  "set": "petFood",
	  "notes": "This fish will help your pets have good bones! But you'll have to guess which of your pets like it the most. Increases Perception by 5. Enchanted Armoire: Pet Food Set (Item 7 of 10).",
	  "text": "Decorative Fish",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_fishFood",
	  "klass": "armoire",
	  "index": "fishFood",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_armoire_chocolateFood": {
	  "int": 5,
	  "set": "petFood",
	  "notes": "Everybody likes a little chocolate, but some of your pets are keener than others... Increases Intelligence by 5. Enchanted Armoire: Pet Food Set (Item 8 of 10).",
	  "text": "Decorative Chocolate",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_chocolateFood",
	  "klass": "armoire",
	  "index": "chocolateFood",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_blueCottonCandyFood": {
	  "con": 5,
	  "set": "petFood",
	  "notes": "A sweet treat for the pets with a sweet tooth. But who will like it best? Increases Constitution by 5. Enchanted Armoire: Pet Food Set (Item 9 of 10).",
	  "text": "Decorative Blue Cotton Candy",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_blueCottonCandyFood",
	  "klass": "armoire",
	  "index": "blueCottonCandyFood",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_milkFood": {
	  "con": 3,
	  "str": 3,
	  "set": "petFood",
	  "notes": "There are many sayings about the health benefits of milk, but the pets who favor it just love its creamy taste. Increases Constitution and Strength by 3 each. Enchanted Armoire: Pet Food Set (Item 10 of 10)",
	  "text": "Decorative Milk",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_milkFood",
	  "klass": "armoire",
	  "index": "milkFood",
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_medievalLaundry": {
	  "per": 6,
	  "set": "medievalLaunderers",
	  "notes": "It's going to be tough to get this clean, but you already know you can do anything. Increases Perception by 6. Enchanted Armoire: Medieval Launderers Set (Item 6 of 6).",
	  "text": "Dirty Laundry",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_medievalLaundry",
	  "klass": "armoire",
	  "index": "medievalLaundry",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_armoire_bouncyBubbles": {
	  "str": 5,
	  "set": "bath",
	  "notes": "Complete your relaxing bath with these exuberant bubbles! Increases Strength by 5. Enchanted Armoire: Bubble Bath Set (Item 4 of 4).",
	  "text": "Bouncy Bubbles",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_bouncyBubbles",
	  "klass": "armoire",
	  "index": "bouncyBubbles",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_bagpipes": {
	  "str": 6,
	  "set": "bonnieBagpiper",
	  "notes": "The uncharitable might say you're planning to wake the dead with these bagpipes -- but you know you're just motivating your Party to success! Increases Strength by 6. Enchanted Armoire: Bagpiper Set (Item 3 of 3).",
	  "text": "Bagpipes",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_bagpipes",
	  "klass": "armoire",
	  "index": "bagpipes",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_heraldsMessageScroll": {
	  "per": 6,
	  "set": "herald",
	  "notes": "What exciting news does this scroll contain? Could it be about a new pet or a long habit streak? Increases Perception by 6. Enchanted Armoire: Herald Set (Item 4 of 4)",
	  "text": "Herald's Message Scroll",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_heraldsMessageScroll",
	  "klass": "armoire",
	  "index": "heraldsMessageScroll",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"shield_armoire_softBlackPillow": {
	  "int": 5,
	  "per": 5,
	  "set": "blackLoungewear",
	  "notes": "The brave warrior packs a pillow for any expedition. Guard yourself from tiresome tasks... even while you nap. Increases Intelligence and Perception by 5 each. Enchanted Armoire: Black Loungewear Set (Item 3 of 3).",
	  "text": "Soft Black Pillow",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_softBlackPillow",
	  "klass": "armoire",
	  "index": "softBlackPillow",
	  "str": 0,
	  "con": 0
	},
	"shield_armoire_softVioletPillow": {
	  "int": 10,
	  "set": "violetLoungewear",
	  "notes": "The clever warrior packs a pillow for any expedition. Protect yourself from procrastination-induced panic... even while you nap. Increases Intelligence by 10. Enchanted Armoire: Violet Loungewear Set (Item 3 of 3).",
	  "text": "Soft Violet Pillow",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_softVioletPillow",
	  "klass": "armoire",
	  "index": "softVioletPillow",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_gardenersSpade": {
	  "str": 8,
	  "set": "gardenerSet",
	  "notes": "Whether you’re digging in the garden, searching for buried treasure, or creating a secret tunnel, this trusty spade is at your side. Increases Strength by 8. Enchanted Armoire: Gardener Set (Item 3 of 4).",
	  "text": "Gardener's Spade",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_gardenersSpade",
	  "klass": "armoire",
	  "index": "gardenersSpade",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_spanishGuitar": {
	  "per": 5,
	  "int": 6,
	  "set": "musicalInstrumentOne",
	  "notes": "Tink! Tink! Thrummm! Gather your party for a concert or celebration by playing this guitar. Increases Perception by 5 and Intelligence by 6. Enchanted Armoire: Musical Instrument Set 1 (Item 2 of 3)",
	  "text": "Spanish Guitar",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_spanishGuitar",
	  "klass": "armoire",
	  "index": "spanishGuitar",
	  "str": 0,
	  "con": 0
	},
	"shield_armoire_snareDrum": {
	  "con": 5,
	  "int": 6,
	  "set": "musicalInstrumentOne",
	  "notes": "Rat-a-tat-tat! Gather your party for a parade or march into battle by playing this drum. Increases Constitution by 5 and Intelligence by 6. Enchanted Armoire: Musical Instrument Set 1 (Item 3 of 3)",
	  "text": "Snare Drum",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_snareDrum",
	  "klass": "armoire",
	  "index": "snareDrum",
	  "str": 0,
	  "per": 0
	},
	"shield_armoire_treasureMap": {
	  "int": 4,
	  "str": 4,
	  "set": "fancyPirate",
	  "notes": "X marks the spot! You never know what you’ll find when you follow this handy map to fabled treasures: gold, jewels, relics, or perhaps a petrified orange? Increases Strength and Intelligence by 4 each. Enchanted Armoire: Fancy Pirate Set (Item 3 of 3).",
	  "text": "Treasure Map",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_treasureMap",
	  "klass": "armoire",
	  "index": "treasureMap",
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_dustpan": {
	  "int": 4,
	  "con": 4,
	  "set": "cleaningSupplies",
	  "notes": "Have this handy handheld dustpan ready every time you clean. A vanishing spell cast on it means you never have to search for a trash can to empty it into. Increases Intelligence and Constitution by 4 each. Enchanted Armoire: Cleaning Supplies Set (Item 3 of 3).",
	  "text": "Dustpan",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_dustpan",
	  "klass": "armoire",
	  "index": "dustpan",
	  "str": 0,
	  "per": 0
	},
	"shield_armoire_bubblingCauldron": {
	  "con": 8,
	  "set": "cookingImplements",
	  "notes": "The perfect cauldron for brewing up a productivity potion or cooking a savory soup. In fact, there is little difference between the two! Increases Constitution by 8. Enchanted Armoire: Cooking Implements Set (Item 2 of 2).",
	  "text": "Bubbling Cauldron",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_bubblingCauldron",
	  "klass": "armoire",
	  "index": "bubblingCauldron",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_jewelersPliers": {
	  "str": 10,
	  "set": "jewelers",
	  "notes": "They cut, twist, pinch, and more. This tool can help you create whatever you can imagine. Increases Strength by 10. Enchanted Armoire: Jeweler Set (Item 3 of 4).",
	  "text": "Jeweler's Pliers",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_jewelersPliers",
	  "klass": "armoire",
	  "index": "jewelersPliers",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_teaKettle": {
	  "con": 10,
	  "set": "teaParty",
	  "notes": "All your favorite, flavorful teas can be brewed in this kettle. Are you in the mood for black tea, green tea, oolong, or perhaps an herbal infusion? Increases Constitution by 10. Enchanted Armoire: Tea Party Set (Item 3 of 3).",
	  "text": "Tea Kettle",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_teaKettle",
	  "klass": "armoire",
	  "index": "teaKettle",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_basketball": {
	  "con": 5,
	  "str": 5,
	  "set": "oldTimeyBasketball",
	  "notes": "Swish! Whenever you shoot this magic basketball, there will be nothing but net. Increases Constitution and Strength by 5 each. Enchanted Armoire: Old Timey Basketball Set (Item 2 of 2).",
	  "text": "Basketball",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_basketball",
	  "klass": "armoire",
	  "index": "basketball",
	  "int": 0,
	  "per": 0
	},
	"shield_armoire_paintersPalette": {
	  "str": 7,
	  "set": "painters",
	  "notes": "Paints in all colors of the rainbow are at your disposal. Is it magic that makes them so vivid when you use them, or is it your talent? Increases Strength by 7. Enchanted Armoire: Painter Set (Item 4 of 4).",
	  "text": "Painter's Palette",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_paintersPalette",
	  "klass": "armoire",
	  "index": "paintersPalette",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"shield_armoire_bucket": {
	  "str": 4,
	  "int": 4,
	  "set": "cleaningSuppliesTwo",
	  "notes": "Though this bucket is helpful in holding a mixture of water and cleaning solution, you could also use it to collect, carry, and cart around just about anything that fits inside! Increases Strength and Intelligence by 4 each. Enchanted Armoire: Cleaning Supplies Set 2 (Item 1 of 3)",
	  "text": "Bucket",
	  "value": 100,
	  "type": "shield",
	  "key": "shield_armoire_bucket",
	  "klass": "armoire",
	  "index": "bucket",
	  "per": 0,
	  "con": 0
	},
	"body_base_0": {
	  "text": "No Body Accessory",
	  "notes": "No Body Accessory.",
	  "value": 0,
	  "type": "body",
	  "key": "body_base_0",
	  "set": "base-0",
	  "klass": "base",
	  "index": "0",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_special_wondercon_red": {
	  "text": "Ruby Collar",
	  "notes": "An attractive ruby collar! Confers no benefit. Special Edition Convention Item.",
	  "value": 0,
	  "mystery": "wondercon",
	  "type": "body",
	  "key": "body_special_wondercon_red",
	  "set": "special-wondercon_red",
	  "klass": "special",
	  "index": "wondercon_red",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_special_wondercon_gold": {
	  "text": "Golden Collar",
	  "notes": "An attractive gold collar! Confers no benefit. Special Edition Convention Item.",
	  "value": 0,
	  "mystery": "wondercon",
	  "type": "body",
	  "key": "body_special_wondercon_gold",
	  "set": "special-wondercon_gold",
	  "klass": "special",
	  "index": "wondercon_gold",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_special_wondercon_black": {
	  "text": "Ebony Collar",
	  "notes": "An attractive ebony collar! Confers no benefit. Special Edition Convention Item.",
	  "value": 0,
	  "mystery": "wondercon",
	  "type": "body",
	  "key": "body_special_wondercon_black",
	  "set": "special-wondercon_black",
	  "klass": "special",
	  "index": "wondercon_black",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_special_takeThis": {
	  "text": "Take This Pauldrons",
	  "notes": "These pauldrons were earned by participating in a sponsored Challenge made by Take This. Congratulations! Increases all Stats by 1.",
	  "value": 0,
	  "con": 1,
	  "int": 1,
	  "per": 1,
	  "str": 1,
	  "type": "body",
	  "key": "body_special_takeThis",
	  "set": "special-takeThis",
	  "klass": "special",
	  "index": "takeThis"
	},
	"body_special_summerHealer": {
	  "specialClass": "healer",
	  "set": "reefSeahealerSet",
	  "text": "Coral Collar",
	  "notes": "A stylish collar of live coral! Confers no benefit. Limited Edition 2014 Summer Gear.",
	  "value": 20,
	  "type": "body",
	  "key": "body_special_summerHealer",
	  "klass": "special",
	  "index": "summerHealer",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_special_summerMage": {
	  "specialClass": "wizard",
	  "set": "emeraldMermageSet",
	  "text": "Shining Capelet",
	  "notes": "Neither salt water nor fresh water can tarnish this metallic capelet. Confers no benefit. Limited Edition 2014 Summer Gear.",
	  "value": 20,
	  "type": "body",
	  "key": "body_special_summerMage",
	  "klass": "special",
	  "index": "summerMage",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_special_summer2015Healer": {
	  "specialClass": "healer",
	  "set": "strappingSailorSet",
	  "text": "Sailor's Neckerchief",
	  "notes": "Yo ho ho? No, no, no! Confers no benefit. Limited Edition 2015 Summer Gear.",
	  "value": 20,
	  "type": "body",
	  "key": "body_special_summer2015Healer",
	  "klass": "special",
	  "index": "summer2015Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_special_summer2015Mage": {
	  "specialClass": "wizard",
	  "set": "shipSoothsayerSet",
	  "text": "Golden Buckle",
	  "notes": "This buckle adds no power at all, but it's shiny. Confers no benefit. Limited Edition 2015 Summer Gear.",
	  "value": 20,
	  "type": "body",
	  "key": "body_special_summer2015Mage",
	  "klass": "special",
	  "index": "summer2015Mage",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_special_summer2015Rogue": {
	  "specialClass": "rogue",
	  "set": "reefRenegadeSet",
	  "text": "Renegade Sash",
	  "notes": "You can't be a true Renegade without panache... and a sash. Confers no benefit. Limited Edition 2015 Summer Gear.",
	  "value": 20,
	  "type": "body",
	  "key": "body_special_summer2015Rogue",
	  "klass": "special",
	  "index": "summer2015Rogue",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_special_summer2015Warrior": {
	  "specialClass": "warrior",
	  "set": "sunfishWarriorSet",
	  "text": "Oceanic Spikes",
	  "notes": "Each spike drips jellyfish venom, defending the wearer. Confers no benefit. Limited Edition 2015 Summer Gear.",
	  "value": 20,
	  "type": "body",
	  "key": "body_special_summer2015Warrior",
	  "klass": "special",
	  "index": "summer2015Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_special_aetherAmulet": {
	  "text": "Aether Amulet",
	  "notes": "This amulet has a mysterious history. Increases Constitution and Strength by 10 each.",
	  "value": 175,
	  "str": 10,
	  "con": 10,
	  "type": "body",
	  "key": "body_special_aetherAmulet",
	  "set": "special-aetherAmulet",
	  "klass": "special",
	  "index": "aetherAmulet",
	  "int": 0,
	  "per": 0
	},
	"body_special_namingDay2018": {
	  "text": "Royal Purple Gryphon Cloak",
	  "notes": "Happy Naming Day! Wear this fancy and feathery cloak as you celebrate Habitica. Confers no benefit.",
	  "value": 0,
	  "type": "body",
	  "key": "body_special_namingDay2018",
	  "set": "special-namingDay2018",
	  "klass": "special",
	  "index": "namingDay2018",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_special_anniversary": {
	  "text": "Habitica Hero Collar",
	  "notes": "Perfectly complement your royal purple ensemble! Confers no benefit. Special Edition 10th Birthday Bash Item.",
	  "value": 0,
	  "type": "body",
	  "key": "body_special_anniversary",
	  "set": "special-anniversary",
	  "klass": "special",
	  "index": "anniversary",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_mystery_201705": {
	  "text": "Folded Feathered Fighter Wings",
	  "notes": "These folded wings don't just look snazzy: they will give you the speed and agility of a gryphon! Confers no benefit. May 2017 Subscriber Item.",
	  "mystery": "201705",
	  "value": 0,
	  "type": "body",
	  "key": "body_mystery_201705",
	  "set": "mystery-201705",
	  "klass": "mystery",
	  "index": "201705",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_mystery_201706": {
	  "text": "Ragged Corsair's Cloak",
	  "notes": "This cloak has secret pockets to hide all the Gold you loot from your Tasks. Confers no benefit. June 2017 Subscriber Item.",
	  "mystery": "201706",
	  "value": 0,
	  "type": "body",
	  "key": "body_mystery_201706",
	  "set": "mystery-201706",
	  "klass": "mystery",
	  "index": "201706",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_mystery_201711": {
	  "text": "Carpet Rider Scarf",
	  "notes": "This soft knitted scarf looks quite majestic blowing in the wind. Confers no benefit. November 2017 Subscriber Item.",
	  "mystery": "201711",
	  "value": 0,
	  "type": "body",
	  "key": "body_mystery_201711",
	  "set": "mystery-201711",
	  "klass": "mystery",
	  "index": "201711",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_mystery_201901": {
	  "text": "Polaris Pauldrons",
	  "notes": "These shimmering pauldrons are strong, but will rest on your shoulders as weightlessly as a ray of dancing light. Confers no benefit. January 2019 Subscriber Item.",
	  "mystery": "201901",
	  "value": 0,
	  "type": "body",
	  "key": "body_mystery_201901",
	  "set": "mystery-201901",
	  "klass": "mystery",
	  "index": "201901",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_mystery_202002": {
	  "text": "Stylish Sweetheart Scarf",
	  "notes": "For when your heart is warm but the breezes of February are brisk. Confers no benefit. February 2020 Subscriber Item.",
	  "mystery": "202002",
	  "value": 0,
	  "type": "body",
	  "key": "body_mystery_202002",
	  "set": "mystery-202002",
	  "klass": "mystery",
	  "index": "202002",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_mystery_202003": {
	  "text": "Barbed Pauldrons",
	  "notes": "They're like shoulder pads that are on a whole other level. Confers no benefit. March 2020 Subscriber Item.",
	  "mystery": "202003",
	  "value": 0,
	  "type": "body",
	  "key": "body_mystery_202003",
	  "set": "mystery-202003",
	  "klass": "mystery",
	  "index": "202003",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_mystery_202008": {
	  "text": "Owlish Oracle Mantle",
	  "notes": "For now, your wings lie furled. But when you have concluded dispensing your wisdom, or you sight your prey in the grass, watch out! Confers no benefit. August 2020 Subscriber Item.",
	  "mystery": "202008",
	  "value": 0,
	  "type": "body",
	  "key": "body_mystery_202008",
	  "set": "mystery-202008",
	  "klass": "mystery",
	  "index": "202008",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_mystery_202107": {
	  "text": "Far-Out Floaty Flamingo",
	  "notes": "This trusty companion will never let you down and will always keep your spirits buoyant! Confers no benefit. July 2021 Subscriber Item.",
	  "mystery": "202107",
	  "value": 0,
	  "type": "body",
	  "key": "body_mystery_202107",
	  "set": "mystery-202107",
	  "klass": "mystery",
	  "index": "202107",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_armoire_cozyScarf": {
	  "con": 5,
	  "per": 5,
	  "set": "lamplighter",
	  "notes": "This fine scarf will keep you warm as you go about your wintry business. Increases Constitution and Perception by 5 each. Enchanted Armoire: Lamplighter's Set (Item 4 of 4).",
	  "text": "Cozy Scarf",
	  "value": 100,
	  "type": "body",
	  "key": "body_armoire_cozyScarf",
	  "klass": "armoire",
	  "index": "cozyScarf",
	  "str": 0,
	  "int": 0
	},
	"body_armoire_lifeguardWhistle": {
	  "int": 12,
	  "set": "lifeguard",
	  "notes": "Call that misbehaving habit to order! It should know the rules! Increases Intelligence by 12. Enchanted Armoire: Lifeguard Set (Item 3 of 3).",
	  "text": "Lifeguard Whistle",
	  "value": 100,
	  "type": "body",
	  "key": "body_armoire_lifeguardWhistle",
	  "klass": "armoire",
	  "index": "lifeguardWhistle",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"body_armoire_clownsBowtie": {
	  "str": 2,
	  "int": 2,
	  "con": 2,
	  "per": 2,
	  "set": "clown",
	  "notes": "A nice bow-tie is no joking matter, even for a clown. Increases Strength, Intelligence, Constitution and Perception by 2 each. Enchanted Armoire: Clown Set (Item 5 of 5).",
	  "text": "Clown's Bow-Tie",
	  "value": 100,
	  "type": "body",
	  "key": "body_armoire_clownsBowtie",
	  "klass": "armoire",
	  "index": "clownsBowtie"
	},
	"body_armoire_karateYellowBelt": {
	  "per": 3,
	  "set": "karateSet",
	  "notes": "This belt is for beginners who have learned the basics. Increases Perception by 3. Enchanted Armoire: Karate Set (Item 3 of 10).",
	  "text": "Yellow Belt",
	  "value": 100,
	  "type": "body",
	  "key": "body_armoire_karateYellowBelt",
	  "klass": "armoire",
	  "index": "karateYellowBelt",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"body_armoire_karateWhiteBelt": {
	  "int": 3,
	  "set": "karateSet",
	  "notes": "This lowest level belt is for those who are just beginning their journey. Increases Intelligence by 3. Enchanted Armoire: Karate Set (Item 2 of 10).",
	  "text": "White Belt",
	  "value": 100,
	  "type": "body",
	  "key": "body_armoire_karateWhiteBelt",
	  "klass": "armoire",
	  "index": "karateWhiteBelt",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"body_armoire_karateRedBelt": {
	  "per": 3,
	  "set": "karateSet",
	  "notes": "This belt is for those who have learned to be cautious in their practice. Increases Perception by 3. Enchanted Armoire: Karate Set (Item 8 of 10).",
	  "text": "Red Belt",
	  "value": 100,
	  "type": "body",
	  "key": "body_armoire_karateRedBelt",
	  "klass": "armoire",
	  "index": "karateRedBelt",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"body_armoire_karatePurpleBelt": {
	  "con": 3,
	  "set": "karateSet",
	  "notes": "This belt is for those ready to embark toward advanced study. Increases Constitution by 3. Enchanted Armoire: Karate Set (Item 7 of 10).",
	  "text": "Purple Belt",
	  "value": 100,
	  "type": "body",
	  "key": "body_armoire_karatePurpleBelt",
	  "klass": "armoire",
	  "index": "karatePurpleBelt",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"body_armoire_karateOrangeBelt": {
	  "con": 3,
	  "set": "karateSet",
	  "notes": "This belt is for those who have grown and mastered the beginner level. Increases Constitution by 3. Enchanted Armoire: Karate Set (Item 4 of 10).",
	  "text": "Orange Belt",
	  "value": 100,
	  "type": "body",
	  "key": "body_armoire_karateOrangeBelt",
	  "klass": "armoire",
	  "index": "karateOrangeBelt",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"body_armoire_karateGreenBelt": {
	  "str": 3,
	  "set": "karateSet",
	  "notes": "This belt is for those at the intermediate level learning to strengthen their skills. Increases Strength by 3. Enchanted Armoire: Karate Set (Item 5 of 10).",
	  "text": "Green Belt",
	  "value": 100,
	  "type": "body",
	  "key": "body_armoire_karateGreenBelt",
	  "klass": "armoire",
	  "index": "karateGreenBelt",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_armoire_karateBrownBelt": {
	  "str": 3,
	  "set": "karateSet",
	  "notes": "This belt is for those whose techniques and skills have matured. Increases Strength by 3. Enchanted Armoire: Karate Set (Item 9 of 10).",
	  "text": "Brown Belt",
	  "value": 100,
	  "type": "body",
	  "key": "body_armoire_karateBrownBelt",
	  "klass": "armoire",
	  "index": "karateBrownBelt",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"body_armoire_karateBlueBelt": {
	  "con": 3,
	  "set": "karateSet",
	  "notes": "This belt is for those who are learning more and developing their minds and bodies. Increases Constitution by 3. Enchanted Armoire: Karate Set (Item 6 of 10).",
	  "text": "Blue Belt",
	  "value": 100,
	  "type": "body",
	  "key": "body_armoire_karateBlueBelt",
	  "klass": "armoire",
	  "index": "karateBlueBelt",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"body_armoire_karateBlackBelt": {
	  "int": 3,
	  "set": "karateSet",
	  "notes": "This highest level belt is for those who seek a deeper understanding and can pass their knowledge on to others. Increases Intelligence by 3. Enchanted Armoire: Karate Set (Item 10 of 10).",
	  "text": "Black Belt",
	  "value": 100,
	  "type": "body",
	  "key": "body_armoire_karateBlackBelt",
	  "klass": "armoire",
	  "index": "karateBlackBelt",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"back_base_0": {
	  "text": "No Back Accessory",
	  "notes": "No Back Accessory.",
	  "value": 0,
	  "type": "back",
	  "key": "back_base_0",
	  "set": "base-0",
	  "klass": "base",
	  "index": "0",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_special_wondercon_red": {
	  "text": "Mighty Cape",
	  "notes": "Swishes with strength and beauty. Confers no benefit. Special Edition Convention Item.",
	  "value": 0,
	  "mystery": "wondercon",
	  "type": "back",
	  "key": "back_special_wondercon_red",
	  "set": "special-wondercon_red",
	  "klass": "special",
	  "index": "wondercon_red",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_special_wondercon_black": {
	  "text": "Sneaky Cape",
	  "notes": "Spun of shadows and whispers. Confers no benefit. Special Edition Convention Item.",
	  "value": 0,
	  "mystery": "wondercon",
	  "type": "back",
	  "key": "back_special_wondercon_black",
	  "set": "special-wondercon_black",
	  "klass": "special",
	  "index": "wondercon_black",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_special_takeThis": {
	  "text": "Take This Wings",
	  "notes": "These wings were earned by participating in a sponsored Challenge made by Take This. Congratulations! Increases all Stats by 1.",
	  "value": 0,
	  "con": 1,
	  "int": 1,
	  "per": 1,
	  "str": 1,
	  "type": "back",
	  "key": "back_special_takeThis",
	  "set": "special-takeThis",
	  "klass": "special",
	  "index": "takeThis"
	},
	"back_special_heroicAureole": {
	  "text": "Heroic Aureole",
	  "notes": "The gems on this aureole glimmer when you tell your tales of glory. Increases all stats by 7.",
	  "con": 7,
	  "str": 7,
	  "per": 7,
	  "int": 7,
	  "value": 175,
	  "type": "back",
	  "key": "back_special_heroicAureole",
	  "set": "special-heroicAureole",
	  "klass": "special",
	  "index": "heroicAureole"
	},
	"back_special_snowdriftVeil": {
	  "text": "Snowdrift Veil",
	  "notes": "This translucent veil makes it appear you are surrounded by an elegant flurry of snow! Confers no benefit.",
	  "value": 0,
	  "type": "back",
	  "key": "back_special_snowdriftVeil",
	  "set": "special-snowdriftVeil",
	  "klass": "special",
	  "index": "snowdriftVeil",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_special_aetherCloak": {
	  "text": "Aether Cloak",
	  "notes": "This cloak once belonged to the Lost Masterclasser herself. Increases Perception by 10.",
	  "value": 175,
	  "per": 10,
	  "type": "back",
	  "key": "back_special_aetherCloak",
	  "set": "special-aetherCloak",
	  "klass": "special",
	  "index": "aetherCloak",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"back_special_turkeyTailBase": {
	  "text": "Turkey Tail",
	  "notes": "Wear your noble Turkey Tail with pride while you celebrate! Confers no benefit.",
	  "value": 0,
	  "type": "back",
	  "key": "back_special_turkeyTailBase",
	  "set": "special-turkeyTailBase",
	  "klass": "special",
	  "index": "turkeyTailBase",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_special_bearTail": {
	  "gearSet": "animal",
	  "text": "Bear Tail",
	  "notes": "This tail makes you look like a brave bear! Confers no benefit.",
	  "value": 20,
	  "type": "back",
	  "key": "back_special_bearTail",
	  "set": "special-bearTail",
	  "klass": "special",
	  "index": "bearTail",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_special_cactusTail": {
	  "gearSet": "animal",
	  "text": "Cactus Tail",
	  "notes": "This tail makes you look like a prickly cactus! Confers no benefit.",
	  "value": 20,
	  "type": "back",
	  "key": "back_special_cactusTail",
	  "set": "special-cactusTail",
	  "klass": "special",
	  "index": "cactusTail",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_special_foxTail": {
	  "gearSet": "animal",
	  "text": "Fox Tail",
	  "notes": "This tail makes you look like a wily fox! Confers no benefit.",
	  "value": 20,
	  "type": "back",
	  "key": "back_special_foxTail",
	  "set": "special-foxTail",
	  "klass": "special",
	  "index": "foxTail",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_special_lionTail": {
	  "gearSet": "animal",
	  "text": "Lion Tail",
	  "notes": "This tail makes you look like a regal lion! Confers no benefit.",
	  "value": 20,
	  "type": "back",
	  "key": "back_special_lionTail",
	  "set": "special-lionTail",
	  "klass": "special",
	  "index": "lionTail",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_special_pandaTail": {
	  "gearSet": "animal",
	  "text": "Panda Tail",
	  "notes": "This tail makes you look like a gentle panda! Confers no benefit.",
	  "value": 20,
	  "type": "back",
	  "key": "back_special_pandaTail",
	  "set": "special-pandaTail",
	  "klass": "special",
	  "index": "pandaTail",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_special_pigTail": {
	  "gearSet": "animal",
	  "text": "Pig Tail",
	  "notes": "This tail makes you look like a whimsical pig! Confers no benefit.",
	  "value": 20,
	  "type": "back",
	  "key": "back_special_pigTail",
	  "set": "special-pigTail",
	  "klass": "special",
	  "index": "pigTail",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_special_tigerTail": {
	  "gearSet": "animal",
	  "text": "Tiger Tail",
	  "notes": "This tail makes you look like a fierce tiger! Confers no benefit.",
	  "value": 20,
	  "type": "back",
	  "key": "back_special_tigerTail",
	  "set": "special-tigerTail",
	  "klass": "special",
	  "index": "tigerTail",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_special_wolfTail": {
	  "gearSet": "animal",
	  "text": "Wolf Tail",
	  "notes": "This tail makes you look like a loyal wolf! Confers no benefit.",
	  "value": 20,
	  "type": "back",
	  "key": "back_special_wolfTail",
	  "set": "special-wolfTail",
	  "klass": "special",
	  "index": "wolfTail",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_special_turkeyTailGilded": {
	  "text": "Gilded Turkey Tail",
	  "notes": "Plumage fit for a parade! Confers no benefit.",
	  "value": 0,
	  "type": "back",
	  "key": "back_special_turkeyTailGilded",
	  "set": "special-turkeyTailGilded",
	  "klass": "special",
	  "index": "turkeyTailGilded",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_special_namingDay2020": {
	  "text": "Royal Purple Gryphon Tail",
	  "notes": "Happy Naming Day! Swish this fiery, pixely tail about as you celebrate Habitica. Confers no benefit.",
	  "value": 0,
	  "type": "back",
	  "key": "back_special_namingDay2020",
	  "set": "special-namingDay2020",
	  "klass": "special",
	  "index": "namingDay2020",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_special_anniversary": {
	  "text": "Habitica Hero Cape",
	  "notes": "Let this proud cape fly in the wind and tell everyone that you're a Habitica Hero. Confers no benefit. Special Edition 10th Birthday Bash Item.",
	  "value": 0,
	  "type": "back",
	  "key": "back_special_anniversary",
	  "set": "special-anniversary",
	  "klass": "special",
	  "index": "anniversary",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201402": {
	  "text": "Golden Wings",
	  "notes": "These shining wings have feathers that glitter in the sun! Confers no benefit. February 2014 Subscriber Item.",
	  "mystery": "201402",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201402",
	  "set": "mystery-201402",
	  "klass": "mystery",
	  "index": "201402",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201404": {
	  "text": "Twilight Butterfly Wings",
	  "notes": "Be a butterfly and flutter by! Confers no benefit. April 2014 Subscriber Item.",
	  "mystery": "201404",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201404",
	  "set": "mystery-201404",
	  "klass": "mystery",
	  "index": "201404",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201410": {
	  "text": "Goblin Wings",
	  "notes": "Swoop through the night on these strong wings. Confers no benefit. October 2014 Subscriber Item.",
	  "mystery": "201410",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201410",
	  "set": "mystery-201410",
	  "klass": "mystery",
	  "index": "201410",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201504": {
	  "text": "Busy Bee Wings",
	  "notes": "Buzz buzz buzz! Flit from task to task. Confers no benefit. April 2015 Subscriber Item.",
	  "mystery": "201504",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201504",
	  "set": "mystery-201504",
	  "klass": "mystery",
	  "index": "201504",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201507": {
	  "text": "Rad Surfboard",
	  "notes": "Surf off the Diligent Docks and ride the waves in Inkomplete Bay! Confers no benefit. July 2015 Subscriber Item.",
	  "mystery": "201507",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201507",
	  "set": "mystery-201507",
	  "klass": "mystery",
	  "index": "201507",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201510": {
	  "text": "Goblin Tail",
	  "notes": "Prehensile and powerful! Confers no benefit. October 2015 Subscriber Item.",
	  "mystery": "201510",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201510",
	  "set": "mystery-201510",
	  "klass": "mystery",
	  "index": "201510",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201602": {
	  "text": "Heartbreaker Cape",
	  "notes": "With a swish of your cape, your enemies fall before you! Confers no benefit. February 2016 Subscriber Item.",
	  "mystery": "201602",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201602",
	  "set": "mystery-201602",
	  "klass": "mystery",
	  "index": "201602",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201608": {
	  "text": "Cape of Thunder",
	  "notes": "Fly through the stormy skies with this billowing cape! Confers no benefit. August 2016 Subscriber Item.",
	  "mystery": "201608",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201608",
	  "set": "mystery-201608",
	  "klass": "mystery",
	  "index": "201608",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201702": {
	  "text": "Heartstealer Cape",
	  "notes": "A swoosh of this cape, and all near you will be swept off their feet by your charm! Confers no benefit. February 2017 Subscriber Item.",
	  "mystery": "201702",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201702",
	  "set": "mystery-201702",
	  "klass": "mystery",
	  "index": "201702",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201704": {
	  "text": "Fairytale Wings",
	  "notes": "These shimmering wings will carry you anywhere, even the hidden realms ruled by magical creatures. Confers no benefit. April 2017 Subscriber Item.",
	  "mystery": "201704",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201704",
	  "set": "mystery-201704",
	  "klass": "mystery",
	  "index": "201704",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201706": {
	  "text": "Tattered Freebooter's Flag",
	  "notes": "The sight of this Jolly Roger-emblazoned flag fills any To Do or Daily with dread! Confers no benefit. June 2017 Subscriber Item.",
	  "mystery": "201706",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201706",
	  "set": "mystery-201706",
	  "klass": "mystery",
	  "index": "201706",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201709": {
	  "text": "Stack o' Sorcery Books",
	  "notes": "Learning magic takes a lot of reading, but you're sure to enjoy your studies! Confers no benefit. September 2017 Subscriber Item.",
	  "mystery": "201709",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201709",
	  "set": "mystery-201709",
	  "klass": "mystery",
	  "index": "201709",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201801": {
	  "text": "Frost Sprite Wings",
	  "notes": "They may look as delicate as snowflakes, but these enchanted wings can carry you anywhere you wish! Confers no benefit. January 2018 Subscriber Item.",
	  "mystery": "201801",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201801",
	  "set": "mystery-201801",
	  "klass": "mystery",
	  "index": "201801",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201803": {
	  "text": "Daring Dragonfly Wings",
	  "notes": "These bright and shiny wings will carry you through soft spring breezes and across lily ponds with ease. Confers no benefit. March 2018 Subscriber Item.",
	  "mystery": "201803",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201803",
	  "set": "mystery-201803",
	  "klass": "mystery",
	  "index": "201803",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201804": {
	  "text": "Squirrel Tail",
	  "notes": "Sure, it helps you balance while you jump on branches, but the most important thing is MAXIMUM FLUFF. Confers no benefit. April 2018 Subscriber Item.",
	  "mystery": "201804",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201804",
	  "set": "mystery-201804",
	  "klass": "mystery",
	  "index": "201804",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201805": {
	  "text": "Phenomenal Peacock Tail",
	  "notes": "This gorgeous feathery tail is perfect for a strut down a lovely garden path! Confers no benefit. May 2018 Subscriber Item.",
	  "mystery": "201805",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201805",
	  "set": "mystery-201805",
	  "klass": "mystery",
	  "index": "201805",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201812": {
	  "text": "Arctic Fox Tail",
	  "notes": "Your luxurious tail shimmers like an icicle, bobbing happily as you pad softly over the snowdrifts. Confers no benefit. December 2018 Subscriber Item.",
	  "mystery": "201812",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201812",
	  "set": "mystery-201812",
	  "klass": "mystery",
	  "index": "201812",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201905": {
	  "text": "Dazzling Dragon Wings",
	  "notes": "Fly to untold realms with these iridescent wings. Confers no benefit. May 2019 Subscriber Item.",
	  "mystery": "201905",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201905",
	  "set": "mystery-201905",
	  "klass": "mystery",
	  "index": "201905",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_201912": {
	  "text": "Polar Pixie Wings",
	  "notes": "Glide silently across sparkling snowfields and shimmering mountains with these icy wings. Confers no benefit. December 2019 Subscriber Item.",
	  "mystery": "201912",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_201912",
	  "set": "mystery-201912",
	  "klass": "mystery",
	  "index": "201912",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_202001": {
	  "text": "Five Tails of Fable",
	  "notes": "These fluffy tails contain celestial power, and also a high level of cuteness! Confers no benefit. January 2020 Subscriber Item.",
	  "mystery": "202001",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_202001",
	  "set": "mystery-202001",
	  "klass": "mystery",
	  "index": "202001",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_202004": {
	  "text": "Mighty Monarch Wings",
	  "notes": "Make a quick flutter to the nearest flowery meadow or migrate across the continent with these beautiful wings! Confers no benefit. April 2020 Subscriber Item.",
	  "mystery": "202004",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_202004",
	  "set": "mystery-202004",
	  "klass": "mystery",
	  "index": "202004",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_202005": {
	  "text": "Wondrous Wyvern Wings",
	  "notes": "Despite their slight tatters, these wings can still carry you wherever you need to travel. Confers no benefit. May 2020 Subscriber Item.",
	  "mystery": "202005",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_202005",
	  "set": "mystery-202005",
	  "klass": "mystery",
	  "index": "202005",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_202009": {
	  "text": "Marvelous Moth Wings",
	  "notes": "Let these huge wings take you to new heights! Confers no benefit. September 2020 Subscriber Item.",
	  "mystery": "202009",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_202009",
	  "set": "mystery-202009",
	  "klass": "mystery",
	  "index": "202009",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_202010": {
	  "text": "Beguiling Bat Wings",
	  "notes": "You are the night! So fly as silently as a midnight cloud with these swift purple wings. Confers no benefit. October 2020 Subscriber Item.",
	  "mystery": "202010",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_202010",
	  "set": "mystery-202010",
	  "klass": "mystery",
	  "index": "202010",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_202012": {
	  "text": "Frostfire Wings",
	  "notes": "The snowy feathers of these wings will grant you the speed of a wintry gale. Confers no benefit. December 2020 Subscriber Item.",
	  "mystery": "202012",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_202012",
	  "set": "mystery-202012",
	  "klass": "mystery",
	  "index": "202012",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_202105": {
	  "text": "Nebula Dragon Wings",
	  "notes": "Glide through the starry sky and place yourself among the constellations! Confers no benefit. May 2021 Subscriber Item.",
	  "mystery": "202105",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_202105",
	  "set": "mystery-202105",
	  "klass": "mystery",
	  "index": "202105",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_202109": {
	  "text": "Lunar Lepidopteran Wings",
	  "notes": "Glide softly through the twilight air without a sound. Confers no benefit. September 2021 Subscriber Item.",
	  "mystery": "202109",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_202109",
	  "set": "mystery-202109",
	  "klass": "mystery",
	  "index": "202109",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_202203": {
	  "text": "Dauntless Dragonfly Wings",
	  "notes": "Outrace all the other creatures of the sky with these shimmering wings. Confers no benefit. March 2022 Subscriber Item.",
	  "mystery": "202203",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_202203",
	  "set": "mystery-202203",
	  "klass": "mystery",
	  "index": "202203",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_202205": {
	  "text": "Dusk Wings",
	  "notes": "The mighty flap of these vast wings can be heard echoing among the dunes. Confers no benefit. May 2022 Subscriber Item.",
	  "mystery": "202205",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_202205",
	  "set": "mystery-202205",
	  "klass": "mystery",
	  "index": "202205",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_202206": {
	  "text": "Sea Sprite Wings",
	  "notes": "Whimsical wings made of water and waves! Confers no benefit. June 2022 Subscriber Item.",
	  "mystery": "202206",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_202206",
	  "set": "mystery-202206",
	  "klass": "mystery",
	  "index": "202206",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_202301": {
	  "text": "Five Tails of Valor",
	  "notes": "These fluffy tails contain ethereal power and also a high level of charm! Confers no benefit. January 2023 Subscriber Item.",
	  "mystery": "202301",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_202301",
	  "set": "mystery-202301",
	  "klass": "mystery",
	  "index": "202301",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_202302": {
	  "text": "Trickster Tabby Tail",
	  "notes": "Anytime you wear this tail it's sure to be a frabjous day! Callooh! Callay! Confers no benefit. February 2023 Subscriber Item.",
	  "mystery": "202302",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_202302",
	  "set": "mystery-202302",
	  "klass": "mystery",
	  "index": "202302",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_202305": {
	  "text": "Eventide Wings",
	  "notes": "Catch the sparkle of the evening star and soar to strange realms on these wings. Confers no benefit. May 2023 Subscriber Item.",
	  "mystery": "202305",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_202305",
	  "set": "mystery-202305",
	  "klass": "mystery",
	  "index": "202305",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"back_mystery_202309": {
	  "text": "Colossal Comet Moth Wings",
	  "notes": "Flutter across forests, glide over mountains, and soar over oceans on these bright and beautiful wings. Confers no benefit. September 2023 Subscriber Item.",
	  "mystery": "202309",
	  "value": 0,
	  "type": "back",
	  "key": "back_mystery_202309",
	  "set": "mystery-202309",
	  "klass": "mystery",
	  "index": "202309",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_base_0": {
	  "text": "No Head Accessory",
	  "notes": "No Head Accessory.",
	  "value": 0,
	  "last": true,
	  "type": "headAccessory",
	  "key": "headAccessory_base_0",
	  "set": "base-0",
	  "klass": "base",
	  "index": "0",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_heroicCirclet": {
	  "text": "Heroic Circlet",
	  "notes": "Heavy is the head that wears the crown, but this circlet is as light as your generous spirit. Increases all stats by 7.",
	  "con": 7,
	  "str": 7,
	  "per": 7,
	  "int": 7,
	  "value": 175,
	  "type": "headAccessory",
	  "key": "headAccessory_special_heroicCirclet",
	  "set": "special-heroicCirclet",
	  "klass": "special",
	  "index": "heroicCirclet"
	},
	"headAccessory_special_springRogue": {
	  "specialClass": "rogue",
	  "set": "stealthyKittySet",
	  "text": "Purple Cat Ears",
	  "notes": "These feline ears twitch to detect incoming threats. Confers no benefit. Limited Edition 2014 Spring Gear.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_springRogue",
	  "klass": "special",
	  "index": "springRogue",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_springWarrior": {
	  "specialClass": "warrior",
	  "set": "mightyBunnySet",
	  "text": "Green Bunny Ears",
	  "notes": "Bunny ears that keenly detect every crunch of a carrot. Confers no benefit. Limited Edition 2014 Spring Gear.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_springWarrior",
	  "klass": "special",
	  "index": "springWarrior",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_springMage": {
	  "specialClass": "wizard",
	  "set": "magicMouseSet",
	  "text": "Blue Mouse Ears",
	  "notes": "These round mouse ears are silky-soft. Confers no benefit. Limited Edition 2014 Spring Gear.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_springMage",
	  "klass": "special",
	  "index": "springMage",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_springHealer": {
	  "specialClass": "healer",
	  "set": "lovingPupSet",
	  "text": "Yellow Dog Ears",
	  "notes": "Floppy but cute. Wanna play? Confers no benefit. Limited Edition 2014 Spring Gear.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_springHealer",
	  "klass": "special",
	  "index": "springHealer",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_spring2015Rogue": {
	  "specialClass": "rogue",
	  "set": "sneakySqueakerSet",
	  "text": "Yellow Mouse Ears",
	  "notes": "These ears steel themselves against the sound of explosions. Confers no benefit. Limited Edition 2015 Spring Gear.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_spring2015Rogue",
	  "klass": "special",
	  "index": "spring2015Rogue",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_spring2015Warrior": {
	  "specialClass": "warrior",
	  "set": "bewareDogSet",
	  "text": "Purple Dog Ears",
	  "notes": "They are purple. They are dog ears. Do not waste your time with further foolishness. Confers no benefit. Limited Edition 2015 Spring Gear.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_spring2015Warrior",
	  "klass": "special",
	  "index": "spring2015Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_spring2015Mage": {
	  "specialClass": "wizard",
	  "set": "magicianBunnySet",
	  "text": "Blue Bunny Ears",
	  "notes": "These ears listen keenly, in case somewhere a magician is revealing secrets. Confers no benefit. Limited Edition 2015 Spring Gear.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_spring2015Mage",
	  "klass": "special",
	  "index": "spring2015Mage",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_spring2015Healer": {
	  "specialClass": "healer",
	  "set": "comfortingKittySet",
	  "text": "Green Kitty Ears",
	  "notes": "These cute kitty ears will make others green with envy. Confers no benefit. Limited Edition 2015 Spring Gear.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_spring2015Healer",
	  "klass": "special",
	  "index": "spring2015Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_bearEars": {
	  "gearSet": "animal",
	  "text": "Bear Ears",
	  "notes": "These ears make you look like a brave bear! Confers no benefit.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_bearEars",
	  "set": "special-bearEars",
	  "klass": "special",
	  "index": "bearEars",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_cactusEars": {
	  "gearSet": "animal",
	  "text": "Cactus Ears",
	  "notes": "These ears make you look like a prickly cactus! Confers no benefit.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_cactusEars",
	  "set": "special-cactusEars",
	  "klass": "special",
	  "index": "cactusEars",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_foxEars": {
	  "gearSet": "animal",
	  "text": "Fox Ears",
	  "notes": "These ears make you look like a wily fox! Confers no benefit.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_foxEars",
	  "set": "special-foxEars",
	  "klass": "special",
	  "index": "foxEars",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_lionEars": {
	  "gearSet": "animal",
	  "text": "Lion Ears",
	  "notes": "These ears make you look like a regal lion! Confers no benefit.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_lionEars",
	  "set": "special-lionEars",
	  "klass": "special",
	  "index": "lionEars",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_pandaEars": {
	  "gearSet": "animal",
	  "text": "Panda Ears",
	  "notes": "These ears make you look like a gentle panda! Confers no benefit.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_pandaEars",
	  "set": "special-pandaEars",
	  "klass": "special",
	  "index": "pandaEars",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_pigEars": {
	  "gearSet": "animal",
	  "text": "Pig Ears",
	  "notes": "These ears make you look like a whimsical pig! Confers no benefit.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_pigEars",
	  "set": "special-pigEars",
	  "klass": "special",
	  "index": "pigEars",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_tigerEars": {
	  "gearSet": "animal",
	  "text": "Tiger Ears",
	  "notes": "These ears make you look like a fierce tiger! Confers no benefit.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_tigerEars",
	  "set": "special-tigerEars",
	  "klass": "special",
	  "index": "tigerEars",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_wolfEars": {
	  "gearSet": "animal",
	  "text": "Wolf Ears",
	  "notes": "These ears make you look like a loyal wolf! Confers no benefit.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_wolfEars",
	  "set": "special-wolfEars",
	  "klass": "special",
	  "index": "wolfEars",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_spring2016Rogue": {
	  "specialClass": "rogue",
	  "set": "cleverDogSet",
	  "text": "Green Dog Ears",
	  "notes": "With these, you can keep track of tricky Mages even if they turn invisible! Confers no benefit. Limited Edition 2016 Spring Gear.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_spring2016Rogue",
	  "klass": "special",
	  "index": "spring2016Rogue",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_spring2016Warrior": {
	  "specialClass": "warrior",
	  "set": "braveMouseSet",
	  "text": "Red Mouse Ears",
	  "notes": "To better hear your theme song across clamorous battlefields. Confers no benefit. Limited Edition 2016 Spring Gear.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_spring2016Warrior",
	  "klass": "special",
	  "index": "spring2016Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_spring2016Mage": {
	  "specialClass": "wizard",
	  "set": "grandMalkinSet",
	  "text": "Yellow Cat Ears",
	  "notes": "These sharp ears can detect the minute hum of ambient Mana, or the muted footfalls of a Rogue. Confers no benefit. Limited Edition 2016 Spring Gear.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_spring2016Mage",
	  "klass": "special",
	  "index": "spring2016Mage",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_spring2016Healer": {
	  "specialClass": "healer",
	  "set": "springingBunnySet",
	  "text": "Purple Bunny Ears",
	  "notes": "They stand like flags above the fray, letting others know where to run for help. Confers no benefit. Limited Edition 2016 Spring Gear.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_spring2016Healer",
	  "klass": "special",
	  "index": "spring2016Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_spring2017Rogue": {
	  "specialClass": "rogue",
	  "set": "spring2017SneakyBunnySet",
	  "text": "Red Bunny Ears",
	  "notes": "No sounds will escape you thanks to these ears. Confers no benefit. Limited Edition 2017 Spring Gear.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_spring2017Rogue",
	  "klass": "special",
	  "index": "spring2017Rogue",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_spring2017Warrior": {
	  "specialClass": "warrior",
	  "set": "spring2017FelineWarriorSet",
	  "text": "Blue Kitty Ears",
	  "notes": "These ears can hear a bag of kitty treats open even in the din of battle! Confers no benefit. Limited Edition 2017 Spring Gear.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_spring2017Warrior",
	  "klass": "special",
	  "index": "spring2017Warrior",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_spring2017Mage": {
	  "specialClass": "wizard",
	  "set": "spring2017CanineConjurorSet",
	  "text": "Teal Dog Ears",
	  "notes": "You can hear the magic in the air! Confers no benefit. Limited Edition 2017 Spring Gear.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_spring2017Mage",
	  "klass": "special",
	  "index": "spring2017Mage",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_spring2017Healer": {
	  "specialClass": "healer",
	  "set": "spring2017FloralMouseSet",
	  "text": "Purple Mouse Ears",
	  "notes": "These ears will help you hear healing secrets. Confers no benefit. Limited Edition 2017 Spring Gear.",
	  "value": 20,
	  "type": "headAccessory",
	  "key": "headAccessory_special_spring2017Healer",
	  "klass": "special",
	  "index": "spring2017Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_blackHeadband": {
	  "gearSet": "headband",
	  "text": "Black Headband",
	  "notes": "A simple black headband. Confers no benefit.",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_special_blackHeadband",
	  "set": "special-blackHeadband",
	  "klass": "special",
	  "index": "blackHeadband",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_blueHeadband": {
	  "gearSet": "headband",
	  "text": "Blue Headband",
	  "notes": "A simple blue headband. Confers no benefit.",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_special_blueHeadband",
	  "set": "special-blueHeadband",
	  "klass": "special",
	  "index": "blueHeadband",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_greenHeadband": {
	  "gearSet": "headband",
	  "text": "Green Headband",
	  "notes": "A simple green headband. Confers no benefit.",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_special_greenHeadband",
	  "set": "special-greenHeadband",
	  "klass": "special",
	  "index": "greenHeadband",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_pinkHeadband": {
	  "gearSet": "headband",
	  "text": "Pink Headband",
	  "notes": "A simple pink headband. Confers no benefit.",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_special_pinkHeadband",
	  "set": "special-pinkHeadband",
	  "klass": "special",
	  "index": "pinkHeadband",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_redHeadband": {
	  "gearSet": "headband",
	  "text": "Red Headband",
	  "notes": "A simple red headband. Confers no benefit.",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_special_redHeadband",
	  "set": "special-redHeadband",
	  "klass": "special",
	  "index": "redHeadband",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_whiteHeadband": {
	  "gearSet": "headband",
	  "text": "White Headband",
	  "notes": "A simple white headband. Confers no benefit.",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_special_whiteHeadband",
	  "set": "special-whiteHeadband",
	  "klass": "special",
	  "index": "whiteHeadband",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_special_yellowHeadband": {
	  "gearSet": "headband",
	  "text": "Yellow Headband",
	  "notes": "A simple yellow headband. Confers no benefit.",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_special_yellowHeadband",
	  "set": "special-yellowHeadband",
	  "klass": "special",
	  "index": "yellowHeadband",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_201403": {
	  "text": "Forest Walker Antlers",
	  "notes": "These antlers shimmer with moss and lichen. Confers no benefit. March 2014 Subscriber Item.",
	  "mystery": "201403",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_201403",
	  "set": "mystery-201403",
	  "klass": "mystery",
	  "index": "201403",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_201404": {
	  "text": "Twilight Butterfly Antennae",
	  "notes": "These antennae help the wearer sense dangerous distractions! Confers no benefit. April 2014 Subscriber Item.",
	  "mystery": "201404",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_201404",
	  "set": "mystery-201404",
	  "klass": "mystery",
	  "index": "201404",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_201409": {
	  "text": "Autumn Antlers",
	  "notes": "These powerful antlers change colors with the leaves. Confers no benefit. September 2014 Subscriber Item.",
	  "mystery": "201409",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_201409",
	  "set": "mystery-201409",
	  "klass": "mystery",
	  "index": "201409",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_201502": {
	  "text": "Wings of Thought",
	  "notes": "Let your imagination take flight! Confers no benefit. February 2015 Subscriber Item.",
	  "mystery": "201502",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_201502",
	  "set": "mystery-201502",
	  "klass": "mystery",
	  "index": "201502",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_201510": {
	  "text": "Goblin Horns",
	  "notes": "These fearsome horns are slightly slimy. Confers no benefit. October 2015 Subscriber Item.",
	  "mystery": "201510",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_201510",
	  "set": "mystery-201510",
	  "klass": "mystery",
	  "index": "201510",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_201801": {
	  "text": "Frost Sprite Antlers",
	  "notes": "These icy antlers shimmer with the glow of winter auroras. Confers no benefit. January 2018 Subscriber Item.",
	  "mystery": "201801",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_201801",
	  "set": "mystery-201801",
	  "klass": "mystery",
	  "index": "201801",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_201804": {
	  "text": "Squirrel Ears",
	  "notes": "These fuzzy sound-catchers will ensure you never miss the rustle of a leaf or the sound of an acorn falling! Confers no benefit. April 2018 Subscriber Item.",
	  "mystery": "201804",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_201804",
	  "set": "mystery-201804",
	  "klass": "mystery",
	  "index": "201804",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_201812": {
	  "text": "Arctic Fox Ears",
	  "notes": "You hear the subtle sound of snowflakes falling upon the landscape. Confers no benefit. December 2018 Subscriber Item.",
	  "mystery": "201812",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_201812",
	  "set": "mystery-201812",
	  "klass": "mystery",
	  "index": "201812",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_201905": {
	  "text": "Dazzling Dragon Horns",
	  "notes": "These horns are as sharp as they are shimmery. Confers no benefit. May 2019 Subscriber Item.",
	  "mystery": "201905",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_201905",
	  "set": "mystery-201905",
	  "klass": "mystery",
	  "index": "201905",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_201906": {
	  "text": "Kindly Koi Ears",
	  "notes": "Legend has it these finny ears help merfolk hear the calls and songs of all the denizens of the deep! Confers no benefit. June 2019 Subscriber Item.",
	  "mystery": "201906",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_201906",
	  "set": "mystery-201906",
	  "klass": "mystery",
	  "index": "201906",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_201908": {
	  "text": "Footloose Faun Horns",
	  "notes": "If wearing horns floats your goat, you're in luck! Confers no benefit. August 2019 Subscriber Item.",
	  "mystery": "201908",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_201908",
	  "set": "mystery-201908",
	  "klass": "mystery",
	  "index": "201908",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_202004": {
	  "text": "Mighty Monarch Antennae",
	  "notes": "They twitch just a bit if the scent of flowers drifts by--use them to find a pretty garden! Confers no benefit. April 2020 Subscriber Item.",
	  "mystery": "202004",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_202004",
	  "set": "mystery-202004",
	  "klass": "mystery",
	  "index": "202004",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_202005": {
	  "text": "Wondrous Wyvern Horns",
	  "notes": "With such mighty horns, what creature dares challenge you? Confers no benefit. May 2020 Subscriber Item.",
	  "mystery": "202005",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_202005",
	  "set": "mystery-202005",
	  "klass": "mystery",
	  "index": "202005",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_202009": {
	  "text": "Marvelous Moth Antennae",
	  "notes": "These feathery appendages will help you find your way even in the dark of night. Confers no benefit. September 2020 Subscriber Item.",
	  "mystery": "202009",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_202009",
	  "set": "mystery-202009",
	  "klass": "mystery",
	  "index": "202009",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_202102": {
	  "text": "Charming Tiara",
	  "notes": "Magnify your empathy and caring to new heights with this ornate golden tiara. Confers no benefit. February 2021 Subscriber Item.",
	  "mystery": "202102",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_202102",
	  "set": "mystery-202102",
	  "klass": "mystery",
	  "index": "202102",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_202105": {
	  "text": "Nebula Dragon Horns",
	  "notes": "Don these iridescent horns and summon the magic of starlight. Confers no benefit. May 2021 Subscriber Item.",
	  "mystery": "202105",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_202105",
	  "set": "mystery-202105",
	  "klass": "mystery",
	  "index": "202105",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_202109": {
	  "text": "Lunar Lepidopteran Antennae",
	  "notes": "Catch the scent of flowers on the breeze or the scent of change on the wind. Confers no benefit. September 2021 Subscriber Item.",
	  "mystery": "202109",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_202109",
	  "set": "mystery-202109",
	  "klass": "mystery",
	  "index": "202109",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_202203": {
	  "text": "Dauntless Dragonfly Circlet",
	  "notes": "Need an extra boost of speed? The tiny decorative wings on this circlet are more powerful than they look! Confers no benefit. March 2022 Subscriber Item.",
	  "mystery": "202203",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_202203",
	  "set": "mystery-202203",
	  "klass": "mystery",
	  "index": "202203",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_202205": {
	  "text": "Dusk-Winged Dragon Horns",
	  "notes": "These dazzling horns are as bright as a desert sunset. Confers no benefit. May 2022 Subscriber Item.",
	  "mystery": "202205",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_202205",
	  "set": "mystery-202205",
	  "klass": "mystery",
	  "index": "202205",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_202212": {
	  "text": "Glacial Tiara",
	  "notes": "Magnify your warmth and friendship to new heights with this ornate golden tiara. Confers no benefit. December 2022 Subscriber Item.",
	  "mystery": "202212",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_202212",
	  "set": "mystery-202212",
	  "klass": "mystery",
	  "index": "202212",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_202302": {
	  "text": "Trickster Tabby Ears",
	  "notes": "The purr-fect accessory to set off your enchanting grin. Confers no benefit. February 2023 Subscriber Item.",
	  "mystery": "202302",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_202302",
	  "set": "mystery-202302",
	  "klass": "mystery",
	  "index": "202302",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_202305": {
	  "text": "Eventide Horns",
	  "notes": "These horns glow with reflected moonlight. Confers no benefit. May 2023 Subscriber Item.",
	  "mystery": "202305",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_202305",
	  "set": "mystery-202305",
	  "klass": "mystery",
	  "index": "202305",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_202307": {
	  "text": "Kraken's Crown",
	  "notes": "This mighty circlet summons cyclones and stormy weather! Confers no benefit. July 2023 Subscriber Item.",
	  "mystery": "202307",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_202307",
	  "set": "mystery-202307",
	  "klass": "mystery",
	  "index": "202307",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_202309": {
	  "text": "Colossal Comet Moth Antennae",
	  "notes": "These antennae are fashionable and feathery, but also help you navigate! Confers no benefit. September 2023 Subscriber Item.",
	  "mystery": "202309",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_202309",
	  "set": "mystery-202309",
	  "klass": "mystery",
	  "index": "202309",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_mystery_301405": {
	  "text": "Headwear Goggles",
	  "notes": "\"Goggles are for your eyes,\" they said. \"Nobody wants goggles that you can only wear on your head,\" they said. Hah! You sure showed them! Confers no benefit. August 3015 Subscriber Item.",
	  "mystery": "301405",
	  "value": 0,
	  "type": "headAccessory",
	  "key": "headAccessory_mystery_301405",
	  "set": "mystery-301405",
	  "klass": "mystery",
	  "index": "301405",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_armoire_comicalArrow": {
	  "str": 10,
	  "notes": "This whimsical item sure is good for a laugh! Increases Strength by 10. Enchanted Armoire: Independent Item.",
	  "text": "Comical Arrow",
	  "value": 100,
	  "type": "headAccessory",
	  "key": "headAccessory_armoire_comicalArrow",
	  "set": "armoire-comicalArrow",
	  "klass": "armoire",
	  "index": "comicalArrow",
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"headAccessory_armoire_gogglesOfBookbinding": {
	  "per": 8,
	  "set": "bookbinder",
	  "notes": "These goggles will help you zero in on any task, large or small! Increases Perception by 8. Enchanted Armoire: Bookbinder Set (Item 1 of 4).",
	  "text": "Goggles of Bookbinding",
	  "value": 100,
	  "type": "headAccessory",
	  "key": "headAccessory_armoire_gogglesOfBookbinding",
	  "klass": "armoire",
	  "index": "gogglesOfBookbinding",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"eyewear_base_0": {
	  "text": "No Eyewear",
	  "notes": "No Eyewear.",
	  "value": 0,
	  "last": true,
	  "type": "eyewear",
	  "key": "eyewear_base_0",
	  "set": "base-0",
	  "klass": "base",
	  "index": "0",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_wondercon_red": {
	  "text": "Mighty Mask",
	  "notes": "What a powerful face accessory! Confers no benefit. Special Edition Convention Item.",
	  "value": 0,
	  "mystery": "wondercon",
	  "type": "eyewear",
	  "key": "eyewear_special_wondercon_red",
	  "set": "special-wondercon_red",
	  "klass": "special",
	  "index": "wondercon_red",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_wondercon_black": {
	  "text": "Sneaky Mask",
	  "notes": "Your motives are definitely legitimate. Confers no benefit. Special Edition Convention Item.",
	  "value": 0,
	  "mystery": "wondercon",
	  "type": "eyewear",
	  "key": "eyewear_special_wondercon_black",
	  "set": "special-wondercon_black",
	  "klass": "special",
	  "index": "wondercon_black",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_summerRogue": {
	  "specialClass": "rogue",
	  "set": "roguishPirateSet",
	  "text": "Roguish Eyepatch",
	  "notes": "It doesn't take a scallywag to see how stylish this is! Confers no benefit. Limited Edition 2014 Summer Gear.",
	  "value": 20,
	  "type": "eyewear",
	  "key": "eyewear_special_summerRogue",
	  "klass": "special",
	  "index": "summerRogue",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_summerWarrior": {
	  "specialClass": "warrior",
	  "set": "daringSwashbucklerSet",
	  "text": "Dashing Eyepatch",
	  "notes": "It doesn't take a rapscallion to see how stylish this is! Confers no benefit. Limited Edition 2014 Summer Gear.",
	  "value": 20,
	  "type": "eyewear",
	  "key": "eyewear_special_summerWarrior",
	  "klass": "special",
	  "index": "summerWarrior",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_blackTopFrame": {
	  "gearSet": "glasses",
	  "text": "Black Standard Eyeglasses",
	  "notes": "Glasses with a black frame above the lenses. Confers no benefit.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_special_blackTopFrame",
	  "set": "special-blackTopFrame",
	  "klass": "special",
	  "index": "blackTopFrame",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_blueTopFrame": {
	  "gearSet": "glasses",
	  "text": "Blue Standard Eyeglasses",
	  "notes": "Glasses with a blue frame above the lenses. Confers no benefit.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_special_blueTopFrame",
	  "set": "special-blueTopFrame",
	  "klass": "special",
	  "index": "blueTopFrame",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_greenTopFrame": {
	  "gearSet": "glasses",
	  "text": "Green Standard Eyeglasses",
	  "notes": "Glasses with a green frame above the lenses. Confers no benefit.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_special_greenTopFrame",
	  "set": "special-greenTopFrame",
	  "klass": "special",
	  "index": "greenTopFrame",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_pinkTopFrame": {
	  "gearSet": "glasses",
	  "text": "Pink Standard Eyeglasses",
	  "notes": "Glasses with a pink frame above the lenses. Confers no benefit.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_special_pinkTopFrame",
	  "set": "special-pinkTopFrame",
	  "klass": "special",
	  "index": "pinkTopFrame",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_redTopFrame": {
	  "gearSet": "glasses",
	  "text": "Red Standard Eyeglasses",
	  "notes": "Glasses with a red frame above the lenses. Confers no benefit.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_special_redTopFrame",
	  "set": "special-redTopFrame",
	  "klass": "special",
	  "index": "redTopFrame",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_whiteTopFrame": {
	  "gearSet": "glasses",
	  "text": "White Standard Eyeglasses",
	  "notes": "Glasses with a white frame above the lenses. Confers no benefit.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_special_whiteTopFrame",
	  "set": "special-whiteTopFrame",
	  "klass": "special",
	  "index": "whiteTopFrame",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_yellowTopFrame": {
	  "gearSet": "glasses",
	  "text": "Yellow Standard Eyeglasses",
	  "notes": "Glasses with a yellow frame above the lenses. Confers no benefit.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_special_yellowTopFrame",
	  "set": "special-yellowTopFrame",
	  "klass": "special",
	  "index": "yellowTopFrame",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_aetherMask": {
	  "text": "Aether Mask",
	  "notes": "This mask has a mysterious history. Increases Intelligence by 10.",
	  "value": 175,
	  "int": 10,
	  "type": "eyewear",
	  "key": "eyewear_special_aetherMask",
	  "set": "special-aetherMask",
	  "klass": "special",
	  "index": "aetherMask",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_blackHalfMoon": {
	  "gearSet": "glasses",
	  "text": "Black Half-Moon Eyeglasses",
	  "notes": "Glasses with a black frame and crescent lenses. Confers no benefit.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_special_blackHalfMoon",
	  "set": "special-blackHalfMoon",
	  "klass": "special",
	  "index": "blackHalfMoon",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_blueHalfMoon": {
	  "gearSet": "glasses",
	  "text": "Blue Half-Moon Eyeglasses",
	  "notes": "Glasses with a blue frame and crescent lenses. Confers no benefit.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_special_blueHalfMoon",
	  "set": "special-blueHalfMoon",
	  "klass": "special",
	  "index": "blueHalfMoon",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_greenHalfMoon": {
	  "gearSet": "glasses",
	  "text": "Green Half-Moon Eyeglasses",
	  "notes": "Glasses with a green frame and crescent lenses. Confers no benefit.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_special_greenHalfMoon",
	  "set": "special-greenHalfMoon",
	  "klass": "special",
	  "index": "greenHalfMoon",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_pinkHalfMoon": {
	  "gearSet": "glasses",
	  "text": "Pink Half-Moon Eyeglasses",
	  "notes": "Glasses with a pink frame and crescent lenses. Confers no benefit.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_special_pinkHalfMoon",
	  "set": "special-pinkHalfMoon",
	  "klass": "special",
	  "index": "pinkHalfMoon",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_redHalfMoon": {
	  "gearSet": "glasses",
	  "text": "Red Half-Moon Eyeglasses",
	  "notes": "Glasses with a red frame and crescent lenses. Confers no benefit.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_special_redHalfMoon",
	  "set": "special-redHalfMoon",
	  "klass": "special",
	  "index": "redHalfMoon",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_whiteHalfMoon": {
	  "gearSet": "glasses",
	  "text": "White Half-Moon Eyeglasses",
	  "notes": "Glasses with a white frame and crescent lenses. Confers no benefit.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_special_whiteHalfMoon",
	  "set": "special-whiteHalfMoon",
	  "klass": "special",
	  "index": "whiteHalfMoon",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_yellowHalfMoon": {
	  "gearSet": "glasses",
	  "text": "Yellow Half-Moon Eyeglasses",
	  "notes": "Glasses with a yellow frame and crescent lenses. Confers no benefit.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_special_yellowHalfMoon",
	  "set": "special-yellowHalfMoon",
	  "klass": "special",
	  "index": "yellowHalfMoon",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_fall2019Rogue": {
	  "specialClass": "rogue",
	  "set": "fall2019OperaticSpecterSet",
	  "text": "Bone-White Half Mask",
	  "notes": "You'd think a full mask would protect your identity better, but people tend to be too awestruck by its stark design to take note of any identifying features left revealed. Confers no benefit. Limited Edition 2019 Autumn Gear.",
	  "value": 20,
	  "type": "eyewear",
	  "key": "eyewear_special_fall2019Rogue",
	  "klass": "special",
	  "index": "fall2019Rogue",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_fall2019Healer": {
	  "specialClass": "healer",
	  "set": "fall2019LichSet",
	  "text": "Dark Visage",
	  "notes": "Steel yourself against the toughest foes with this inscrutable mask. Confers no benefit. Limited Edition 2019 Autumn Gear.",
	  "value": 20,
	  "type": "eyewear",
	  "key": "eyewear_special_fall2019Healer",
	  "klass": "special",
	  "index": "fall2019Healer",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_ks2019": {
	  "text": "Mythic Gryphon Visor",
	  "notes": "Bold as a gryphon's... hmm, gryphons don't have visors. It reminds you to... oh, who are we kidding, it just looks cool! Confers no benefit.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_special_ks2019",
	  "set": "special-ks2019",
	  "klass": "special",
	  "index": "ks2019",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_special_anniversary": {
	  "text": "Habitica Hero Mask",
	  "notes": "Look through the eyes of a Habitica Hero - you! Confers no benefit. Special Edition 10th Birthday Bash Item.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_special_anniversary",
	  "set": "special-anniversary",
	  "klass": "special",
	  "index": "anniversary",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_201503": {
	  "text": "Aquamarine Eyewear",
	  "notes": "Don't get poked in the eye by these shimmering gems! Confers no benefit. March 2015 Subscriber Item.",
	  "mystery": "201503",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_201503",
	  "set": "mystery-201503",
	  "klass": "mystery",
	  "index": "201503",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_201506": {
	  "text": "Neon Snorkel",
	  "notes": "This neon snorkel lets its wearer see underwater. Confers no benefit. June 2015 Subscriber Item.",
	  "mystery": "201506",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_201506",
	  "set": "mystery-201506",
	  "klass": "mystery",
	  "index": "201506",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_201507": {
	  "text": "Rad Sunglasses",
	  "notes": "These sunglasses let you stay cool even when the weather is hot. Confers no benefit. July 2015 Subscriber Item.",
	  "mystery": "201507",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_201507",
	  "set": "mystery-201507",
	  "klass": "mystery",
	  "index": "201507",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_201701": {
	  "text": "Timeless Shades",
	  "notes": "These sunglasses will protect your eyes from harmful rays and will look stylish no matter where you find yourself in time! Confers no benefit. January 2017 Subscriber Item.",
	  "mystery": "201701",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_201701",
	  "set": "mystery-201701",
	  "klass": "mystery",
	  "index": "201701",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_201902": {
	  "text": "Cryptic Crush Mask",
	  "notes": "This mysterious mask hides your identity but not your winning smile. Confers no benefit. February 2019 Subscriber Item.",
	  "mystery": "201902",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_201902",
	  "set": "mystery-201902",
	  "klass": "mystery",
	  "index": "201902",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_201907": {
	  "text": "Sweet Sunglasses",
	  "notes": "Look awesome while protecting your eyes from harmful UV rays! Confers no benefit. July 2019 Subscriber Item.",
	  "mystery": "201907",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_201907",
	  "set": "mystery-201907",
	  "klass": "mystery",
	  "index": "201907",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_202108": {
	  "text": "Fiery Eyes",
	  "notes": "Stare down your enemies (or your biggest tasks!) with these and they don't stand a chance. Confers no benefit. August 2021 Subscriber Item.",
	  "mystery": "202108",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_202108",
	  "set": "mystery-202108",
	  "klass": "mystery",
	  "index": "202108",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_202201": {
	  "text": "Midnight Merrymaker's Mask",
	  "notes": "Ring in the new year with an air of mystery in this stylish feathered mask. Confers no benefit. January 2022 Subscriber Item.",
	  "mystery": "202201",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_202201",
	  "set": "mystery-202201",
	  "klass": "mystery",
	  "index": "202201",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_202202": {
	  "text": "Turquoise Eyes with Blush",
	  "notes": "Cheerful singing brings color to your cheeks. Confers no benefit. February 2022 Subscriber Item",
	  "mystery": "202202",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_202202",
	  "set": "mystery-202202",
	  "klass": "mystery",
	  "index": "202202",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_202208": {
	  "text": "Sparkly Eyes",
	  "notes": "Lull your enemies into a false sense of security with these terrifyingly cute peepers. Confers no benefit. August 2022 Subscriber Item.",
	  "mystery": "202208",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_202208",
	  "set": "mystery-202208",
	  "klass": "mystery",
	  "index": "202208",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_202303": {
	  "text": "Dreamy Eyes",
	  "notes": "Let your nonchalant expression lure your enemies into a false sense of security. Confers no benefit. March 2023 Subscriber Item.",
	  "mystery": "202303",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_202303",
	  "set": "mystery-202303",
	  "klass": "mystery",
	  "index": "202303",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_202308": {
	  "text": "Sleepy Eyes",
	  "notes": "Are you sleepy, or just resting your eyes in anticipation of your next amazing battle? Confers no benefit. August 2023 Subscriber Item.",
	  "mystery": "202308",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_202308",
	  "set": "mystery-202308",
	  "klass": "mystery",
	  "index": "202308",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_301404": {
	  "text": "Eyewear Goggles",
	  "notes": "No eyewear could be fancier than a pair of goggles - except, perhaps, for a monocle. Confers no benefit. April 3015 Subscriber Item.",
	  "mystery": "301404",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_301404",
	  "set": "mystery-301404",
	  "klass": "mystery",
	  "index": "301404",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_301405": {
	  "text": "Monocle",
	  "notes": "No eyewear could be fancier than a monocle - except, perhaps, for a pair of goggles. Confers no benefit. July 3015 Subscriber Item.",
	  "mystery": "301405",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_301405",
	  "set": "mystery-301405",
	  "klass": "mystery",
	  "index": "301405",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_301703": {
	  "text": "Peacock Masquerade Mask",
	  "notes": "Perfect for a fancy masquerade or for stealthily moving through a particularly well-dressed crowd. Confers no benefit. March 3017 Subscriber Item.",
	  "mystery": "301703",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_301703",
	  "set": "mystery-301703",
	  "klass": "mystery",
	  "index": "301703",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_202204A": {
	  "mystery": "202204",
	  "text": "Virtual Face",
	  "notes": "What's your mood today? Express yourself with these fun screens. Confers no benefit. April 2022 Subscriber Item.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_202204A",
	  "set": "mystery-202204A",
	  "klass": "mystery",
	  "index": "202204A",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_mystery_202204B": {
	  "mystery": "202204",
	  "text": "Virtual Face",
	  "notes": "What's your mood today? Express yourself with these fun screens. Confers no benefit. April 2022 Subscriber Item.",
	  "value": 0,
	  "type": "eyewear",
	  "key": "eyewear_mystery_202204B",
	  "set": "mystery-202204B",
	  "klass": "mystery",
	  "index": "202204B",
	  "str": 0,
	  "int": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_armoire_plagueDoctorMask": {
	  "con": 5,
	  "int": 5,
	  "set": "plagueDoctor",
	  "notes": "An authentic mask worn by the doctors who battle the Plague of Procrastination. Increases Constitution and Intelligence by 5 each. Enchanted Armoire: Plague Doctor Set (Item 2 of 3).",
	  "text": "Plague Doctor Mask",
	  "value": 100,
	  "type": "eyewear",
	  "key": "eyewear_armoire_plagueDoctorMask",
	  "klass": "armoire",
	  "index": "plagueDoctorMask",
	  "str": 0,
	  "per": 0
	},
	"eyewear_armoire_goofyGlasses": {
	  "per": 10,
	  "notes": "Perfect for going incognito or just making your partymates giggle. Increases Perception by 10. Enchanted Armoire: Independent Item.",
	  "text": "Goofy Glasses",
	  "value": 100,
	  "type": "eyewear",
	  "key": "eyewear_armoire_goofyGlasses",
	  "set": "armoire-goofyGlasses",
	  "klass": "armoire",
	  "index": "goofyGlasses",
	  "str": 0,
	  "int": 0,
	  "con": 0
	},
	"eyewear_armoire_clownsNose": {
	  "int": 5,
	  "notes": "This accessory will make sure everyone 'nose' you're a clown! Increases Intelligence by 5. Enchanted Armoire: Clown Set (Item 2 of 5).",
	  "text": "Clown's Nose",
	  "value": 100,
	  "type": "eyewear",
	  "key": "eyewear_armoire_clownsNose",
	  "set": "armoire-clownsNose",
	  "klass": "armoire",
	  "index": "clownsNose",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_armoire_tragedyMask": {
	  "int": 10,
	  "notes": "Alas! Here sits a heavy mask for thine poor player, strutting, fretting, and expressing woe and sorrow upon the stage. Increases Intelligence by 10. Enchanted Armoire: Theatre Masks Set (Item 2 of 2).",
	  "text": "Tragedy Mask",
	  "value": 100,
	  "type": "eyewear",
	  "key": "eyewear_armoire_tragedyMask",
	  "set": "armoire-tragedyMask",
	  "klass": "armoire",
	  "index": "tragedyMask",
	  "str": 0,
	  "per": 0,
	  "con": 0
	},
	"eyewear_armoire_comedyMask": {
	  "con": 10,
	  "notes": "Cheerily! Here is a quaint mask for thine happy heart, playing, heralding joy, and expressing merriment and mirth upon the stage. Increases Constitution by 10. Enchanted Armoire: Theatre Masks Set (Item 1 of 2).",
	  "text": "Comedy Mask",
	  "value": 100,
	  "type": "eyewear",
	  "key": "eyewear_armoire_comedyMask",
	  "set": "armoire-comedyMask",
	  "klass": "armoire",
	  "index": "comedyMask",
	  "str": 0,
	  "int": 0,
	  "per": 0
	},
	"eyewear_armoire_jewelersEyeLoupe": {
	  "per": 10,
	  "set": "jewelers",
	  "notes": "This eye loupe magnifies what you’re working on so you can see absolutely every detail. Increases Perception by 10. Enchanted Armoire: Jeweler Set (Item 2 of 4).",
	  "text": "Jeweler's Eye Loupe",
	  "value": 100,
	  "type": "eyewear",
	  "key": "eyewear_armoire_jewelersEyeLoupe",
	  "klass": "armoire",
	  "index": "jewelersEyeLoupe",
	  "str": 0,
	  "int": 0,
	  "con": 0
	}
  };