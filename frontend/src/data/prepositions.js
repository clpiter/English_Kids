// 30 most useful prepositions for the Grammar (व्याकरण) tab.
// Each example is { a, b, hi }: the sentence is `${a} ${word} ${b}`, so games can blank out or swap the preposition.
// wrong: prepositions kids often use by mistake in its place (used for wrong answers in the games).

export const PREP_GROUPS = [
  { id: 'place', en: 'Place', hi: 'स्थान (कहाँ?)', icon: '📍' },
  { id: 'time', en: 'Time', hi: 'समय (कब?)', icon: '🕒' },
  { id: 'direction', en: 'Direction & Movement', hi: 'दिशा और गति (किधर?)', icon: '➡️' },
  { id: 'other', en: 'Other useful prepositions', hi: 'अन्य उपयोगी', icon: '🔗' },
]

export const PREPOSITIONS = [
  // ---------- place ----------
  {
    id: 'in', word: 'in', group: 'place', hi: 'में / के अंदर',
    use: { en: 'Inside something: a box, a room, a city, a country.', hi: 'किसी चीज़ के अंदर: डिब्बा, कमरा, शहर, देश।' },
    wrong: ['on', 'at', 'into'],
    examples: [
      { a: 'The milk is', b: 'the glass.', hi: 'दूध गिलास में है।' },
      { a: 'My books are', b: 'my bag.', hi: 'मेरी किताबें मेरे बैग में हैं।' },
      { a: 'We live', b: 'Raipur.', hi: 'हम रायपुर में रहते हैं।' },
      { a: 'The fish swim', b: 'the pond.', hi: 'मछलियाँ तालाब में तैरती हैं।' },
      { a: 'Mother is', b: 'the kitchen.', hi: 'माँ रसोई में हैं।' },
    ],
  },
  {
    id: 'on', word: 'on', group: 'place', hi: 'पर (सतह के ऊपर, छूते हुए)',
    use: { en: 'On top of a surface, touching it.', hi: 'किसी सतह के ऊपर, उसे छूते हुए।' },
    wrong: ['in', 'at', 'above'],
    examples: [
      { a: 'The book is', b: 'the table.', hi: 'किताब मेज़ पर है।' },
      { a: 'A bird is sitting', b: 'the wall.', hi: 'एक चिड़िया दीवार पर बैठी है।' },
      { a: 'There is a clock', b: 'the wall.', hi: 'दीवार पर एक घड़ी है।' },
      { a: 'I write', b: 'the blackboard.', hi: 'मैं श्यामपट्ट पर लिखता हूँ।' },
      { a: 'The cat is sleeping', b: 'the bed.', hi: 'बिल्ली बिस्तर पर सो रही है।' },
    ],
  },
  {
    id: 'at', word: 'at', group: 'place', hi: 'पर (किसी ख़ास जगह / समय पर)',
    use: { en: 'A particular point or place: at the door, at school, at 5 o’clock.', hi: 'किसी ख़ास जगह या समय पर: दरवाज़े पर, स्कूल में, 5 बजे।' },
    wrong: ['in', 'on', 'to'],
    examples: [
      { a: 'Someone is', b: 'the door.', hi: 'दरवाज़े पर कोई है।' },
      { a: 'I wake up', b: 'six o’clock.', hi: 'मैं छह बजे उठता हूँ।' },
      { a: 'She is', b: 'school now.', hi: 'वह अभी स्कूल में है।' },
      { a: 'Wait for me', b: 'the bus stop.', hi: 'बस स्टॉप पर मेरा इंतज़ार करो।' },
      { a: 'We eat dinner', b: 'night.', hi: 'हम रात को खाना खाते हैं।' },
    ],
  },
  {
    id: 'under', word: 'under', group: 'place', hi: 'के नीचे',
    use: { en: 'Lower than something and covered by it.', hi: 'किसी चीज़ से नीचे, उसके तले।' },
    wrong: ['on', 'above', 'over'],
    examples: [
      { a: 'The cat is', b: 'the table.', hi: 'बिल्ली मेज़ के नीचे है।' },
      { a: 'My shoes are', b: 'the bed.', hi: 'मेरे जूते बिस्तर के नीचे हैं।' },
      { a: 'We sat', b: 'the mango tree.', hi: 'हम आम के पेड़ के नीचे बैठे।' },
      { a: 'The ball rolled', b: 'the chair.', hi: 'गेंद कुर्सी के नीचे लुढ़क गई।' },
      { a: 'Fish live', b: 'the water.', hi: 'मछलियाँ पानी के नीचे रहती हैं।' },
    ],
  },
  {
    id: 'above', word: 'above', group: 'place', hi: 'के ऊपर (बिना छुए)',
    use: { en: 'Higher than something, not touching it.', hi: 'किसी चीज़ से ऊँचा, उसे छुए बिना।' },
    wrong: ['on', 'under', 'up'],
    examples: [
      { a: 'The fan is', b: 'the bed.', hi: 'पंखा बिस्तर के ऊपर है।' },
      { a: 'Birds fly', b: 'the trees.', hi: 'पक्षी पेड़ों के ऊपर उड़ते हैं।' },
      { a: 'The sun is', b: 'the clouds.', hi: 'सूरज बादलों के ऊपर है।' },
      { a: 'The picture hangs', b: 'the door.', hi: 'तस्वीर दरवाज़े के ऊपर टँगी है।' },
      { a: 'Our flat is', b: 'a shop.', hi: 'हमारा फ़्लैट एक दुकान के ऊपर है।' },
    ],
  },
  {
    id: 'behind', word: 'behind', group: 'place', hi: 'के पीछे',
    use: { en: 'At the back of something.', hi: 'किसी चीज़ के पीछे की तरफ़।' },
    wrong: ['in front of', 'before', 'after'],
    examples: [
      { a: 'The boy is hiding', b: 'the door.', hi: 'लड़का दरवाज़े के पीछे छिपा है।' },
      { a: 'There is a garden', b: 'our house.', hi: 'हमारे घर के पीछे एक बग़ीचा है।' },
      { a: 'The sun went', b: 'the clouds.', hi: 'सूरज बादलों के पीछे चला गया।' },
      { a: 'Ravi sits', b: 'me in class.', hi: 'रवि कक्षा में मेरे पीछे बैठता है।' },
      { a: 'The dog ran', b: 'the car.', hi: 'कुत्ता कार के पीछे दौड़ा।' },
    ],
  },
  {
    id: 'in-front-of', word: 'in front of', group: 'place', hi: 'के सामने',
    use: { en: 'Facing something, ahead of it.', hi: 'किसी चीज़ के आगे, उसकी ओर मुँह किए हुए।' },
    wrong: ['behind', 'before', 'opposite to'],
    examples: [
      { a: 'The car is', b: 'the house.', hi: 'कार घर के सामने है।' },
      { a: 'She stood', b: 'the mirror.', hi: 'वह आईने के सामने खड़ी थी।' },
      { a: 'There is a tree', b: 'our school.', hi: 'हमारे स्कूल के सामने एक पेड़ है।' },
      { a: 'Do not stand', b: 'the TV.', hi: 'टीवी के सामने मत खड़े हो।' },
      { a: 'The teacher stands', b: 'the class.', hi: 'शिक्षक कक्षा के सामने खड़े होते हैं।' },
    ],
  },
  {
    id: 'next-to', word: 'next to', group: 'place', hi: 'के बग़ल में / के ठीक पास',
    use: { en: 'Right at the side of something.', hi: 'किसी चीज़ के ठीक बग़ल में।' },
    wrong: ['between', 'behind', 'on'],
    examples: [
      { a: 'Sit', b: 'me.', hi: 'मेरे बग़ल में बैठो।' },
      { a: 'The bank is', b: 'the post office.', hi: 'बैंक डाकघर के बग़ल में है।' },
      { a: 'My bed is', b: 'the window.', hi: 'मेरा बिस्तर खिड़की के बग़ल में है।' },
      { a: 'The spoon is', b: 'the plate.', hi: 'चम्मच थाली के बग़ल में है।' },
      { a: 'Our house is', b: 'a temple.', hi: 'हमारा घर एक मंदिर के बग़ल में है।' },
    ],
  },
  {
    id: 'near', word: 'near', group: 'place', hi: 'के पास / के नज़दीक',
    use: { en: 'A short distance from something.', hi: 'किसी चीज़ से थोड़ी ही दूरी पर।' },
    wrong: ['far', 'next', 'at'],
    examples: [
      { a: 'Our school is', b: 'the river.', hi: 'हमारा स्कूल नदी के पास है।' },
      { a: 'Do not go', b: 'the fire.', hi: 'आग के पास मत जाओ।' },
      { a: 'There is a park', b: 'my house.', hi: 'मेरे घर के पास एक पार्क है।' },
      { a: 'The shop is', b: 'the station.', hi: 'दुकान स्टेशन के पास है।' },
      { a: 'The cows are grazing', b: 'the pond.', hi: 'गायें तालाब के पास चर रही हैं।' },
    ],
  },
  {
    id: 'between', word: 'between', group: 'place', hi: '(दो के) बीच में',
    use: { en: 'In the middle of two people or things.', hi: 'दो लोगों या चीज़ों के बीच में।' },
    wrong: ['among', 'next to', 'in'],
    examples: [
      { a: 'I sit', b: 'Ravi and Meena.', hi: 'मैं रवि और मीना के बीच में बैठता हूँ।' },
      { a: 'The ball is', b: 'the two boxes.', hi: 'गेंद दोनों डिब्बों के बीच में है।' },
      { a: 'The shop is open', b: 'nine and five.', hi: 'दुकान नौ से पाँच बजे के बीच खुली रहती है।' },
      { a: 'Share the sweets', b: 'you two.', hi: 'मिठाई तुम दोनों के बीच बाँट लो।' },
      { a: 'Our village is', b: 'two hills.', hi: 'हमारा गाँव दो पहाड़ियों के बीच है।' },
    ],
  },
  // ---------- time ----------
  {
    id: 'before', word: 'before', group: 'time', hi: 'से पहले',
    use: { en: 'Earlier than a time or an event.', hi: 'किसी समय या घटना से पहले।' },
    wrong: ['after', 'since', 'behind'],
    examples: [
      { a: 'Wash your hands', b: 'eating.', hi: 'खाने से पहले हाथ धोओ।' },
      { a: 'I wake up', b: 'sunrise.', hi: 'मैं सूर्योदय से पहले उठता हूँ।' },
      { a: 'Finish your homework', b: 'dinner.', hi: 'रात के खाने से पहले अपना गृहकार्य पूरा करो।' },
      { a: 'We reached', b: 'the bus.', hi: 'हम बस से पहले पहुँच गए।' },
      { a: 'Think', b: 'you speak.', hi: 'बोलने से पहले सोचो।' },
    ],
  },
  {
    id: 'after', word: 'after', group: 'time', hi: 'के बाद',
    use: { en: 'Later than a time or an event.', hi: 'किसी समय या घटना के बाद।' },
    wrong: ['before', 'since', 'behind'],
    examples: [
      { a: 'We play', b: 'school.', hi: 'हम स्कूल के बाद खेलते हैं।' },
      { a: 'Brush your teeth', b: 'dinner.', hi: 'रात के खाने के बाद दाँत साफ़ करो।' },
      { a: 'Monday comes', b: 'Sunday.', hi: 'रविवार के बाद सोमवार आता है।' },
      { a: 'The ground was wet', b: 'the rain.', hi: 'बारिश के बाद मैदान गीला था।' },
      { a: 'Come home', b: 'the match.', hi: 'मैच के बाद घर आना।' },
    ],
  },
  {
    id: 'during', word: 'during', group: 'time', hi: 'के दौरान / के समय',
    use: { en: 'All through a time or while something happens.', hi: 'किसी समय या घटना के चलते रहने के बीच।' },
    wrong: ['for', 'since', 'while'],
    examples: [
      { a: 'Do not talk', b: 'the class.', hi: 'कक्षा के दौरान बात मत करो।' },
      { a: 'We visited Goa', b: 'the holidays.', hi: 'छुट्टियों के दौरान हम गोवा गए।' },
      { a: 'It rained', b: 'the night.', hi: 'रात के दौरान बारिश हुई।' },
      { a: 'He slept', b: 'the film.', hi: 'वह फ़िल्म के दौरान सो गया।' },
      { a: 'Birds come here', b: 'winter.', hi: 'सर्दी के दौरान पक्षी यहाँ आते हैं।' },
    ],
  },
  {
    id: 'since', word: 'since', group: 'time', hi: 'से (किसी समय से अब तक)',
    use: { en: 'From a point of time till now: since Monday, since 2015.', hi: 'किसी समय से अब तक: सोमवार से, 2015 से।' },
    wrong: ['for', 'from', 'during'],
    examples: [
      { a: 'It has been raining', b: 'morning.', hi: 'सुबह से बारिश हो रही है।' },
      { a: 'I have known him', b: '2018.', hi: 'मैं उसे 2018 से जानता हूँ।' },
      { a: 'She has been ill', b: 'Monday.', hi: 'वह सोमवार से बीमार है।' },
      { a: 'We have lived here', b: 'my birth.', hi: 'हम मेरे जन्म से यहाँ रह रहे हैं।' },
      { a: 'He has been waiting', b: 'ten o’clock.', hi: 'वह दस बजे से इंतज़ार कर रहा है।' },
    ],
  },
  {
    id: 'for', word: 'for', group: 'time', hi: 'के लिए / (कितनी देर) तक',
    use: { en: 'How long something goes on (for two hours), or who / what it is for.', hi: 'कितनी देर (दो घंटे तक), या किसके लिए।' },
    wrong: ['since', 'during', 'to'],
    examples: [
      { a: 'I studied', b: 'two hours.', hi: 'मैंने दो घंटे पढ़ाई की।' },
      { a: 'This gift is', b: 'you.', hi: 'यह उपहार तुम्हारे लिए है।' },
      { a: 'We waited', b: 'a long time.', hi: 'हमने बहुत देर तक इंतज़ार किया।' },
      { a: 'She bought milk', b: 'the baby.', hi: 'उसने बच्चे के लिए दूध ख़रीदा।' },
      { a: 'They stayed there', b: 'a week.', hi: 'वे वहाँ एक हफ़्ते तक रहे।' },
    ],
  },
  {
    id: 'until', word: 'until', group: 'time', hi: 'तक (जब तक)',
    use: { en: 'Up to a point of time, then it stops.', hi: 'किसी समय तक, फिर रुक जाना।' },
    wrong: ['since', 'for', 'by'],
    examples: [
      { a: 'Wait here', b: 'I come back.', hi: 'जब तक मैं वापस न आऊँ, यहीं रुको।' },
      { a: 'The shop is open', b: 'nine at night.', hi: 'दुकान रात नौ बजे तक खुली रहती है।' },
      { a: 'We played', b: 'evening.', hi: 'हम शाम तक खेले।' },
      { a: 'She slept', b: 'noon.', hi: 'वह दोपहर तक सोई।' },
      { a: 'Keep trying', b: 'you win.', hi: 'जीतने तक कोशिश करते रहो।' },
    ],
  },
  // ---------- direction & movement ----------
  {
    id: 'to', word: 'to', group: 'direction', hi: 'को / की ओर (कहीं जाना)',
    use: { en: 'Going towards a place or a person.', hi: 'किसी जगह या व्यक्ति की ओर जाना।' },
    wrong: ['at', 'in', 'from'],
    examples: [
      { a: 'We go', b: 'school every day.', hi: 'हम हर दिन स्कूल जाते हैं।' },
      { a: 'Give this book', b: 'Meena.', hi: 'यह किताब मीना को दो।' },
      { a: 'He went', b: 'the market.', hi: 'वह बाज़ार गया।' },
      { a: 'Say hello', b: 'your mother.', hi: 'अपनी माँ को नमस्ते कहना।' },
      { a: 'The train goes', b: 'Delhi.', hi: 'रेलगाड़ी दिल्ली जाती है।' },
    ],
  },
  {
    id: 'from', word: 'from', group: 'direction', hi: 'से (कहाँ से)',
    use: { en: 'The starting point: where someone or something comes from.', hi: 'शुरुआत की जगह: कोई या कुछ कहाँ से आया।' },
    wrong: ['to', 'since', 'of'],
    examples: [
      { a: 'I am', b: 'Chhattisgarh.', hi: 'मैं छत्तीसगढ़ से हूँ।' },
      { a: 'She came back', b: 'school.', hi: 'वह स्कूल से वापस आई।' },
      { a: 'I got a letter', b: 'my uncle.', hi: 'मुझे अपने चाचा से एक चिट्ठी मिली।' },
      { a: 'Milk comes', b: 'cows.', hi: 'दूध गायों से आता है।' },
      { a: 'The bus goes', b: 'Raipur to Bilaspur.', hi: 'बस रायपुर से बिलासपुर जाती है।' },
    ],
  },
  {
    id: 'into', word: 'into', group: 'direction', hi: 'के अंदर (जाना)',
    use: { en: 'Moving from outside to inside.', hi: 'बाहर से अंदर की ओर जाना।' },
    wrong: ['in', 'onto', 'out of'],
    examples: [
      { a: 'The frog jumped', b: 'the pond.', hi: 'मेंढक तालाब में कूद गया।' },
      { a: 'She came', b: 'the room.', hi: 'वह कमरे के अंदर आई।' },
      { a: 'Put the toys', b: 'the box.', hi: 'खिलौने डिब्बे के अंदर रखो।' },
      { a: 'He poured water', b: 'the glass.', hi: 'उसने गिलास में पानी डाला।' },
      { a: 'The children ran', b: 'the classroom.', hi: 'बच्चे दौड़कर कक्षा में गए।' },
    ],
  },
  {
    id: 'out-of', word: 'out of', group: 'direction', hi: 'से बाहर',
    use: { en: 'Moving from inside to outside.', hi: 'अंदर से बाहर की ओर जाना।' },
    wrong: ['into', 'from', 'off'],
    examples: [
      { a: 'The cat jumped', b: 'the box.', hi: 'बिल्ली डिब्बे से बाहर कूद गई।' },
      { a: 'He took a pen', b: 'his bag.', hi: 'उसने अपने बैग से एक पेन निकाला।' },
      { a: 'Get', b: 'the water now.', hi: 'अब पानी से बाहर निकलो।' },
      { a: 'She ran', b: 'the house.', hi: 'वह दौड़कर घर से बाहर गई।' },
      { a: 'The bird flew', b: 'the cage.', hi: 'चिड़िया पिंजरे से बाहर उड़ गई।' },
    ],
  },
  {
    id: 'through', word: 'through', group: 'direction', hi: 'के बीच से / के आर-पार',
    use: { en: 'From one side to the other side, inside something.', hi: 'किसी चीज़ के अंदर से होकर एक तरफ़ से दूसरी तरफ़।' },
    wrong: ['across', 'over', 'into'],
    examples: [
      { a: 'The train went', b: 'the tunnel.', hi: 'रेलगाड़ी सुरंग से होकर गई।' },
      { a: 'We walked', b: 'the forest.', hi: 'हम जंगल के बीच से चले।' },
      { a: 'Light comes', b: 'the window.', hi: 'रोशनी खिड़की से अंदर आती है।' },
      { a: 'The thread goes', b: 'the needle.', hi: 'धागा सुई के आर-पार जाता है।' },
      { a: 'The river flows', b: 'the city.', hi: 'नदी शहर के बीच से बहती है।' },
    ],
  },
  {
    id: 'across', word: 'across', group: 'direction', hi: 'के पार / के उस पार',
    use: { en: 'From one side to the other side, on top of something.', hi: 'किसी चीज़ के ऊपर से एक तरफ़ से दूसरी तरफ़।' },
    wrong: ['through', 'along', 'over'],
    examples: [
      { a: 'We walked', b: 'the road.', hi: 'हम सड़क के पार गए।' },
      { a: 'There is a bridge', b: 'the river.', hi: 'नदी के पार एक पुल है।' },
      { a: 'The boat sailed', b: 'the lake.', hi: 'नाव झील के पार गई।' },
      { a: 'My friend lives', b: 'the street.', hi: 'मेरा दोस्त गली के उस पार रहता है।' },
      { a: 'The cat ran', b: 'the field.', hi: 'बिल्ली मैदान के पार दौड़ गई।' },
    ],
  },
  {
    id: 'around', word: 'around', group: 'direction', hi: 'के चारों ओर',
    use: { en: 'On every side of something, or in a circle.', hi: 'किसी चीज़ के हर तरफ़, या घेरे में।' },
    wrong: ['across', 'between', 'about'],
    examples: [
      { a: 'The earth moves', b: 'the sun.', hi: 'पृथ्वी सूरज के चारों ओर घूमती है।' },
      { a: 'We sat', b: 'the fire.', hi: 'हम आग के चारों ओर बैठे।' },
      { a: 'There is a wall', b: 'the garden.', hi: 'बग़ीचे के चारों ओर एक दीवार है।' },
      { a: 'The children danced', b: 'the tree.', hi: 'बच्चे पेड़ के चारों ओर नाचे।' },
      { a: 'She tied a scarf', b: 'her neck.', hi: 'उसने गले में दुपट्टा बाँधा।' },
    ],
  },
  {
    id: 'towards', word: 'towards', group: 'direction', hi: 'की तरफ़ / की ओर',
    use: { en: 'In the direction of something (not always reaching it).', hi: 'किसी चीज़ की दिशा में (ज़रूरी नहीं कि वहाँ पहुँचें)।' },
    wrong: ['to', 'into', 'from'],
    examples: [
      { a: 'The dog ran', b: 'me.', hi: 'कुत्ता मेरी तरफ़ दौड़ा।' },
      { a: 'We walked', b: 'the river.', hi: 'हम नदी की ओर चले।' },
      { a: 'The plane flew', b: 'the east.', hi: 'विमान पूरब की ओर उड़ा।' },
      { a: 'She turned', b: 'the window.', hi: 'वह खिड़की की तरफ़ मुड़ी।' },
      { a: 'The ball rolled', b: 'the goal.', hi: 'गेंद गोल की ओर लुढ़की।' },
    ],
  },
  // ---------- other ----------
  {
    id: 'with', word: 'with', group: 'other', hi: 'के साथ / से (किसी चीज़ से)',
    use: { en: 'Together with someone, or using something.', hi: 'किसी के साथ, या किसी चीज़ की मदद से।' },
    wrong: ['without', 'by', 'of'],
    examples: [
      { a: 'I go to school', b: 'my brother.', hi: 'मैं अपने भाई के साथ स्कूल जाता हूँ।' },
      { a: 'Write', b: 'a pencil.', hi: 'पेंसिल से लिखो।' },
      { a: 'She lives', b: 'her grandmother.', hi: 'वह अपनी दादी के साथ रहती है।' },
      { a: 'Cut the paper', b: 'scissors.', hi: 'कैंची से काग़ज़ काटो।' },
      { a: 'Play', b: 'your friends.', hi: 'अपने दोस्तों के साथ खेलो।' },
    ],
  },
  {
    id: 'without', word: 'without', group: 'other', hi: 'के बिना',
    use: { en: 'Not having or not using something.', hi: 'किसी चीज़ के न होने पर, उसके बिना।' },
    wrong: ['with', 'except', 'by'],
    examples: [
      { a: 'Do not go out', b: 'an umbrella.', hi: 'छाते के बिना बाहर मत जाओ।' },
      { a: 'Plants cannot live', b: 'water.', hi: 'पौधे पानी के बिना नहीं रह सकते।' },
      { a: 'He left', b: 'his bag.', hi: 'वह अपने बैग के बिना चला गया।' },
      { a: 'I drink tea', b: 'sugar.', hi: 'मैं बिना चीनी की चाय पीता हूँ।' },
      { a: 'She solved it', b: 'any help.', hi: 'उसने बिना किसी मदद के इसे हल किया।' },
    ],
  },
  {
    id: 'about', word: 'about', group: 'other', hi: 'के बारे में',
    use: { en: 'On the subject of something.', hi: 'किसी विषय के बारे में।' },
    wrong: ['of', 'on', 'around'],
    examples: [
      { a: 'Tell me', b: 'your school.', hi: 'मुझे अपने स्कूल के बारे में बताओ।' },
      { a: 'This book is', b: 'animals.', hi: 'यह किताब जानवरों के बारे में है।' },
      { a: 'We talked', b: 'the match.', hi: 'हमने मैच के बारे में बात की।' },
      { a: 'Do not worry', b: 'the test.', hi: 'परीक्षा के बारे में चिंता मत करो।' },
      { a: 'She wrote a story', b: 'a brave girl.', hi: 'उसने एक बहादुर लड़की के बारे में कहानी लिखी।' },
    ],
  },
  {
    id: 'by', word: 'by', group: 'other', hi: 'से / के द्वारा / के पास',
    use: { en: 'How you travel (by bus), who did it (by Tagore), or beside.', hi: 'कैसे जाते हैं (बस से), किसने किया (टैगोर द्वारा), या पास में।' },
    wrong: ['with', 'on', 'from'],
    examples: [
      { a: 'We went to Delhi', b: 'train.', hi: 'हम रेलगाड़ी से दिल्ली गए।' },
      { a: 'This poem was written', b: 'Tagore.', hi: 'यह कविता टैगोर द्वारा लिखी गई थी।' },
      { a: 'Sit', b: 'the window.', hi: 'खिड़की के पास बैठो।' },
      { a: 'She goes to school', b: 'bus.', hi: 'वह बस से स्कूल जाती है।' },
      { a: 'Finish the work', b: 'Friday.', hi: 'शुक्रवार तक काम पूरा करो।' },
    ],
  },
  {
    id: 'of', word: 'of', group: 'other', hi: 'का / की / के',
    use: { en: 'Belonging to, or a part of something.', hi: 'किसी का होना, या किसी चीज़ का हिस्सा।' },
    wrong: ['from', 'for', 'about'],
    examples: [
      { a: 'Delhi is the capital', b: 'India.', hi: 'दिल्ली भारत की राजधानी है।' },
      { a: 'I want a glass', b: 'water.', hi: 'मुझे एक गिलास पानी चाहिए।' },
      { a: 'She is the queen', b: 'the jungle.', hi: 'वह जंगल की रानी है।' },
      { a: 'Give me a piece', b: 'cake.', hi: 'मुझे केक का एक टुकड़ा दो।' },
      { a: 'This is a map', b: 'our village.', hi: 'यह हमारे गाँव का नक्शा है।' },
    ],
  },
  {
    id: 'like', word: 'like', group: 'other', hi: 'की तरह / जैसा',
    use: { en: 'Similar to someone or something.', hi: 'किसी के जैसा, उसकी तरह।' },
    wrong: ['as', 'with', 'of'],
    examples: [
      { a: 'She sings', b: 'a bird.', hi: 'वह चिड़िया की तरह गाती है।' },
      { a: 'He runs', b: 'the wind.', hi: 'वह हवा की तरह दौड़ता है।' },
      { a: 'This flower smells', b: 'a rose.', hi: 'इस फूल की ख़ुशबू गुलाब जैसी है।' },
      { a: 'The baby looks', b: 'her mother.', hi: 'बच्ची अपनी माँ जैसी दिखती है।' },
      { a: 'Do not behave', b: 'a child.', hi: 'बच्चे की तरह बर्ताव मत करो।' },
    ],
  },
]

// shown as the "formula" in games and progress, e.g. "under — के नीचे"
for (const p of PREPOSITIONS) p.formula = p.word

export const prepById = (id) => PREPOSITIONS.find((p) => p.id === id)

// a preposition's wrong answers: the usual mix-ups first, then other prepositions
export function prepWrongKeys(p) {
  const others = PREPOSITIONS.filter((x) => x.id !== p.id && !p.wrong.includes(x.word)).map((x) => x.word)
  return [...p.wrong, ...others.sort(() => Math.random() - 0.5)]
}
