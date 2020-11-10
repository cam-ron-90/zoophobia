const responseCards = [
  {
    text:
      "That’s a common misconception and it’s not true!I promise you I’m not bad luck! Oh...sorry I made assumptions about you, and other black cats too. I’d like to hear more if you still want to talk. You and the bully keep talking and do your shopping together. You are proudof yourself for speaking up.",
    item: 'apple',
    frontImg: 'resp1.png',
    backImg: ''
  },
  {
    text: "You make eye contact with the upset animal who gives you a feather-thumbs up! “No feathers off my back mate!” You shop together and offer to payfor their cricket chips.",
    item: 'banana',
    frontImg: 'resp2.png',
    backImg: ''
  },
  {
    text:
      "You calmly walk up to the bully and tell them what you are seeing... “I heard what you said to the upset animal about their laughter. They look like they are feeling uncomfortable. Maybe you should leave them alone.”",
    item: 'banana',
    frontImg: 'resp3.png',
    backImg: ''
  },
  {
    text:
      "“Those are interesting earrings, but they could be upsetting to some animals... I know I don’t like it when animals wear kangaroo fur coats!” You chat to the bully who agrees with you and takes their earrings off.",
    item: 'grapes',
    frontImg: 'resp4.png',
    backImg: ''
  },
  {
    text: "You take an anonymous photo of the earrings. You post it on InstaPaw with a trending hashtag to support your friends in the upset animal’s communities",
    item: 'grapes',
    frontImg: 'resp5.png',
    backImg: ''
  },
  {
    text:
      "“What you said is species-ist! Goldfish actually have really good memories. Also, isn’t it your cobra cousin’s birthday today?”",
    item: 'cauliflower',
    frontImg: 'resp6.png',
    backImg: ''
  },
  {
    text:
      "“I saw what happened...Is there anything I can do to help you?” You work at the Mega Mart with the upset animal and offer your support. They are happy to have an ally in the workplace.",
    item: 'cauliflower',
    frontImg: 'resp7.png',
    backImg: ''
  },
  {
    text: "“I’m confused. Is that supposedto be me on your t-shirt?” You speak to the bully, who realises their t-shirt is offensive. They apologise and turn their t-shirt inside out. Everyone cheers!",
    item: 'eggplant',
    frontImg: 'resp8.png',
    backImg: ''
  },
  {
    text:
      "“Can I show you our newMega Mart t-shirts? They might be more appropriate for you to wear in the store...” As the store manager you see the upset animal looking at you. You offer to help the bully find anew t-shirt.",
    item: 'eggplant',
    frontImg: 'resp9.png',
    backImg: ''
  },
  {
    text:
      "I don’t get the joke, can you explain please, Tom? What about you, Tom? All Tom Cats are called Tom, right? Haha just kidding...” You ask the bullies to explain themselves and get lots of support from animals nearby. The bullies finally leave you alone.",
    item: 'blueberries',
    frontImg: 'resp10.png',
    backImg: ''
  },
  {
    text:
      "You bark at the bullies to leave the upset animal alone. You stay with the upset animal until the three bullies leave the store.",
    item: 'blueberries',
    frontImg: 'resp11.png',
    backImg: ''
  },
  {
    text:
      "You approach the upset animals and make friends with them. You offer to help them with their shopping list and they agree. The security guard backs off",
    item: 'carrot',
    frontImg: 'resp12.png',
    backImg: ''
  },
  {
    text:
      "You ask the security guard if there are more balloons in the store. They are distracted and the upset animals quickly finish shopping.",
    item: 'carrot',
    frontImg: 'resp13.png',
    backImg: ''
  },
  {
    text: "You have filmed the whole situation on your phone. You send the video to the octopus and delete it from your phone. The octopus shows the store manager who tells the bully to leave the store and be more respectful next time.",
    item: 'milk',
    frontImg: 'resp14.png',
    backImg: ''
  },
  {
    text:
      "You go up to the upset animal and make surethey aresafe. After swapping camouflage stories, you buy them a packet of their favourite fish crackers.",
    item: 'milk',
    frontImg: 'resp15.png',
    backImg: ''
  },
  {
    text:
      "You tell the bully to keep their hooves to themselves. They reflect on what they did and apologise for hurting you. “I’m a cane toad,not a frog...and don’t assume every amphibian you meet is your fairytale come true! Please respect my personal space.     I don’t want to     be kissed by a        stranger.”",
    item: 'water',
    frontImg: 'resp16.png',
    backImg: ''
  },
  {
    text: "You see the upset animal and start chatting with them. The two of you go into the Mega Mart together. “Hey honey! Can you take me to the frozen flies, I hear they’re on special!”",
    item: 'water',
    frontImg: 'resp17.png',
    backImg: ''
  },
  {
    text:
      " You and your community protest for the Mega Mart to build a safe entryway at the front of the store. Many animals join in, and the Mega Mart makes a public apology. They build a new ramp and sliding doors.",
    item: 'toilet paper',
    frontImg: 'resp18.png',
    backImg: ''
  },
  {
    text:
      "You take a photo of the Acknowledgement and banning signs and post it up on Instapaw. You rally animals to sign a petition to hold the Mega Mart accountable.",
    item: 'bread',
    frontImg: 'resp19.png',
    backImg: ''
  },
  {
    text:
      "You team up with David Attenbadger who makes a documentary about bees. This sparks a global movement and bees around the world start selling their own honey.",
    item: 'cheese',
    frontImg: 'resp20.png',
    backImg: ''
  },
  {
    text:
      "You empathise with the upset animals and their campaign and want to support them, even if it means paying a bit extra for honey. You make a list of bee-owned honey shops and share it on Instapaw.",
    item: 'cheese',
    frontImg: 'resp21.png',
    backImg: ''
  },
  {
    text: "You tell off the bully, making fun of their size. Meanwhile the upset animal is ignored and still needs help.",
    item: 'ice cream',
    frontImg: 'resp22.png',
    backImg: ''
  },
  {
    text:
      "You chase the bully for an explanation and they run away from you until they knock over a pyramid of canned beans. The bully blames you for the mess and you get kicked out of the Mega Mart.",
    item: 'ice cream',
    frontImg: 'resp23.png',
    backImg: ''
  },
  {
    text: "'A .",
    item: 'apple',
    frontImg: 'resp2.png',
    backImg: ''
  },
  {
    text: "'logise for making assumptions about you.",
    item: 'apple',
    frontImg: 'resp2.png',
    backImg: ''
  },
  {
    text: "'ou.",
    item: 'apple',
    frontImg: 'resp2.png',
    backImg: ''
  },
  {
    text: "'A ctions about you.",
    item: 'apple',
    frontImg: 'resp2.png',
    backImg: ''
  },
  {
    text:
      "'rue!' You speak to them calmly and they apologise for making assumptions about you.",
    item: 'apple',
    frontImg: 'resp2.png',
    backImg: ''
  },
  {
    text: "'A common .",
    item: 'apple',
    frontImg: 'resp2.png',
    backImg: ''
  },
  {
    text: "' apologise for making assumptions about you.",
    item: 'apple',
    frontImg: 'resp2.png',
    backImg: ''
  },
  {
    text:
      "'A  true!' You speak to them calmly and they apologise for making assumptions about you.",
    item: 'apple',
    frontImg: 'resp2.png',
    backImg: ''
  },
  {
    text: "' them calmly and they apologise for making assumptions about you.",
    item: 'apple',
    frontImg: 'resp2.png',
    backImg: ''
  },
  {
    text:
      "'tually true!' You speak to them calmly and they apologise for making assumptions about you.",
    item: 'apple',
    frontImg: 'resp2.png',
    backImg: ''
  },
  {
    text: 'ssumptions about you.',
    item: 'apple',
    frontImg: 'resp2.png',
    backImg: ''
  },
  {
    text:
      "'hat's not actually true!' You speak to them calmly and they apologise for making assumptions about you.",
    item: 'apple',
    frontImg: 'resp2.png',
    backImg: ''
  },
  {
    text:
      "e bad luck. But that's not actually true!' You speak to them calmly and they apologise for making assumptions about you.",
    item: 'apple',
    frontImg: 'resp2.png',
    backImg: ''
  },
];

module.exports = responseCards;
