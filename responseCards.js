const responseCards = [
  {
    text:
      "That’s a common misconception and it’s not true!I promise you I’m not bad luck! Oh...sorry I made assumptions about you, and other black cats too. I’d like to hear more if you still want to talk. You and the bully keep talking and do your shopping together. You are proudof yourself for speaking up.",
    item: 'apple',
    frontImg: 'resp1',
    backImg: 'resp-apple'
  },
  {
    text: "You make eye contact with the upset animal who gives you a feather-thumbs up! “No feathers off my back mate!” You shop together and offer to payfor their cricket chips.",
    item: 'banana',
    frontImg: 'resp2',
    backImg: 'resp-banana'
  },
  {
    text:
      "You calmly walk up to the bully and tell them what you are seeing... “I heard what you said to the upset animal about their laughter. They look like they are feeling uncomfortable. Maybe you should leave them alone.”",
    item: 'banana',
    frontImg: 'resp3',
    backImg: 'resp-banana'
  },
  {
    text:
      "“Those are interesting earrings, but they could be upsetting to some animals... I know I don’t like it when animals wear kangaroo fur coats!” You chat to the bully who agrees with you and takes their earrings off.",
    item: 'grapes',
    frontImg: 'resp4',
    backImg: 'resp-grapes'
  },
  {
    text: "You take an anonymous photo of the earrings. You post it on InstaPaw with a trending hashtag to support your friends in the upset animal’s communities",
    item: 'grapes',
    frontImg: 'resp5',
    backImg: 'resp-grapes'
  },
  {
    text:
      "“What you said is species-ist! Goldfish actually have really good memories. Also, isn’t it your cobra cousin’s birthday today?”",
    item: 'cauliflower',
    frontImg: 'resp6',
    backImg: 'resp-cauliflower'
  },
  {
    text:
      "“I saw what happened...Is there anything I can do to help you?” You work at the Mega Mart with the upset animal and offer your support. They are happy to have an ally in the workplace.",
    item: 'cauliflower',
    frontImg: 'resp7',
    backImg: 'resp-cauliflower'
  },
  {
    text: "“I’m confused. Is that supposedto be me on your t-shirt?” You speak to the bully, who realises their t-shirt is offensive. They apologise and turn their t-shirt inside out. Everyone cheers!",
    item: 'eggplant',
    frontImg: 'resp8',
    backImg: 'resp-eggplant'
  },
  {
    text:
      "“Can I show you our newMega Mart t-shirts? They might be more appropriate for you to wear in the store...” As the store manager you see the upset animal looking at you. You offer to help the bully find anew t-shirt.",
    item: 'eggplant',
    frontImg: 'resp9',
    backImg: 'resp-eggplant'
  },
  {
    text:
      "I don’t get the joke, can you explain please, Tom? What about you, Tom? All Tom Cats are called Tom, right? Haha just kidding...” You ask the bullies to explain themselves and get lots of support from animals nearby. The bullies finally leave you alone.",
    item: 'blueberries',
    frontImg: 'resp10',
    backImg: 'resp-blueberries'
  },
  {
    text:
      "You bark at the bullies to leave the upset animal alone. You stay with the upset animal until the three bullies leave the store.",
    item: 'blueberries',
    frontImg: 'resp11',
    backImg: 'resp-blueberries'
  },
  {
    text:
      "You approach the upset animals and make friends with them. You offer to help them with their shopping list and they agree. The security guard backs off",
    item: 'carrot',
    frontImg: 'resp12',
    backImg: 'resp-carrot'
  },
  {
    text:
      "You ask the security guard if there are more balloons in the store. They are distracted and the upset animals quickly finish shopping.",
    item: 'carrot',
    frontImg: 'resp13',
    backImg: 'resp-carrot'
  },
  {
    text: "You have filmed the whole situation on your phone. You send the video to the octopus and delete it from your phone. The octopus shows the store manager who tells the bully to leave the store and be more respectful next time.",
    item: 'milk',
    frontImg: 'resp14',
    backImg: 'resp-milk'
  },
  {
    text:
      "You go up to the upset animal and make surethey aresafe. After swapping camouflage stories, you buy them a packet of their favourite fish crackers.",
    item: 'milk',
    frontImg: 'resp15',
    backImg: 'resp-milk'
  },
  {
    text:
      "You tell the bully to keep their hooves to themselves. They reflect on what they did and apologise for hurting you. “I’m a cane toad,not a frog...and don’t assume every amphibian you meet is your fairytale come true! Please respect my personal space.     I don’t want to     be kissed by a        stranger.”",
    item: 'water',
    frontImg: 'resp16',
    backImg: 'resp-water'
  },
  {
    text: "You see the upset animal and start chatting with them. The two of you go into the Mega Mart together. “Hey honey! Can you take me to the frozen flies, I hear they’re on special!”",
    item: 'water',
    frontImg: 'resp17',
    backImg: 'resp-water'
  },
  {
    text:
      " You and your community protest for the Mega Mart to build a safe entryway at the front of the store. Many animals join in, and the Mega Mart makes a public apology. They build a new ramp and sliding doors.",
    item: 'toilet paper',
    frontImg: 'resp18',
    backImg: 'resp-toilet-paper'
  },
  {
    text:
      "You take a photo of the Acknowledgement and banning signs and post it up on Instapaw. You rally animals to sign a petition to hold the Mega Mart accountable.",
    item: 'bread',
    frontImg: 'resp19',
    backImg: 'resp-bread'
  },
  {
    text:
      "You team up with David Attenbadger who makes a documentary about bees. This sparks a global movement and bees around the world start selling their own honey.",
    item: 'cheese',
    frontImg: 'resp20',
    backImg: 'resp-cheese'
  },
  {
    text:
      "You empathise with the upset animals and their campaign and want to support them, even if it means paying a bit extra for honey. You make a list of bee-owned honey shops and share it on Instapaw.",
    item: 'cheese',
    frontImg: 'resp21',
    backImg: 'resp-cheese'
  },
  {
    text: "You tell off the bully, making fun of their size. Meanwhile the upset animal is ignored and still needs help.",
    item: 'ice cream',
    frontImg: 'resp22',
    backImg: 'resp-ice-cream'
  },
  {
    text:
      "You chase the bully for an explanation and they run away from you until they knock over a pyramid of canned beans. The bully blames you for the mess and you get kicked out of the Mega Mart.",
    item: 'ice cream',
    frontImg: 'resp23',
    backImg: 'resp-ice-cream'
  },
  {
    text: "You throw tomato sauce on the bully, take their photo and put it on Instapaw. You use the bully as the face of your campaign to get their entire species banned from the Mega Mart",
    item: 'ice cream',
    frontImg: 'resp24',
    backImg: 'resp-ice-cream'
  },
  {
    text: "You try to distract everyoneby spraying them with a big fountain of water. When the wet animals get cranky at you, you tell them to lighten up because they all look silly wet!",
    item: 'lollipop',
    frontImg: 'resp25',
    backImg: 'resp-lollipop'
  },
  {
    text: "“Keep moving everyone, nothing to see here...Ooh apples are on special!” The upset animal makes eye contact with you. You pretend not to notice and quickly forget about them.",
    item: 'lollipop',
    frontImg: 'resp26',
    backImg: 'resp-lollipop'
  },
  {
    text: "As the upset animal you feel overwhelmed. You run home to curl up in bed and cry alone. You promise yourself you will never tell anyone what happened.",
    item: 'lollipop',
    frontImg: 'resp27',
    backImg: 'resp-lollipop'
  },
  {
    text:
      "You go up to the upset animal and try to give them advice. “Don’t be so sensitive, after all it’s a jungle out there!”",
    item: 'chips',
    frontImg: 'resp28',
    backImg: 'resp-chips'
  },
  {
    text: "'You try to make the upset animal feel better. “There there...I mean there is SOME truth to what the bully said...”",
    item: 'chips',
    frontImg: 'resp29',
    backImg: 'resp-chips'
  },
  {
    text: "You laugh uncontrollably at the situation in front of you. Where’s the popcorn?!",
    item: 'chips',
    frontImg: 'resp30',
    backImg: 'resp-chips'
  },
  {
    text:
      "You film an Instapaw live video of the situation for fun, then keep shopping. “This is why I order groceries online. Too much dramaat the Mega Mart!”",
    item: 'chocolate',
    frontImg: 'resp31',
    backImg: 'resp-chocolate'
  },
  {
    text: "You cause a scene, throwing bottles of red cordial at the bully’s feet. Everyonegets splashed and animals must leave the store while staff clean up the mess.",
    item: 'chocolate',
    frontImg: 'resp32',
    backImg: 'resp-chocolate'
  },
  {
    text:
      "You are annoyed with the drama and just want to scuttle past and grab that last box of custard donuts!",
    item: 'chocolate',
    frontImg: 'resp33',
    backImg: 'resp-chocolate'
  },
  {
    text: "You are scared by the situation and hope the bully doesn’t notice you. You quickly finish your shopping so you can go home.",
    item: 'donut',
    frontImg: 'resp34',
    backImg: 'resp-donut'
  },
  {
    text:
      "As the upset animal you are so embarrassed by what happened that you never go back to the Mega Mart again.",
    item: 'donut',
    frontImg: 'resp35',
    backImg: 'resp-donut'
  },
  {
    text:
      "You offer the upset animal ablock of chocolate. When theyrefuse, you tell them they are ungrateful. “What do you mean you don’t eat chocolate? Everyone loves chocolate! Sounds fishy to me...”",
    item: 'donut',
    frontImg: 'resp36',
    backImg: 'resp-donut'
  },
  {
    text:
      "You and your animal friends throw quills, hay, hairballs and cow pats at the Mega Mart in protest.",
    item: 'muffin',
    frontImg: 'resp37',
    backImg: 'resp-muffin'
  },
  {
    text: "“This doesn’t affect me, or my platypus family or friends. It’s probably not my place to get involved.” You are not the same species as the upset animal and you decide it’s best to ‘mind your own business’",
    item: 'muffin',
    frontImg: 'resp38',
    backImg: 'resp-muffin'
  },
  {
    text:
      "You try to fight the bully and they step on you. You go to the animal hospital and miss school for 3 months while you recover.",
    item: 'muffin',
    frontImg: 'resp39',
    backImg: 'resp-muffin'
  },
  {
    text:
      "“Excuse me, were you in the new Puss in Boots movie? Let’s shop together!” You go up to the upset animal and pretend to recognise them. You walk off together and the bully doesn’t know what hit them!",
    item: 'apple',
    frontImg: 'resp40',
    backImg: 'resp-apple'
  }
];

module.exports = responseCards;
