// "Activity from lesson" for the Class 8 English Reader (book8.js): the questions and activities given
// after each lesson in the textbook (SCERT Chhattisgarh), made into tap-to-answer activities, with a
// Hindi translation for every line. Picture, writing and speaking tasks become open tasks with an example.
// Format: see frontend/src/screens/LessonExercises.jsx. Texts are [English, Hindi] pairs.

const exercises = {
  'class8-1': [
    {
      type: 'pick',
      title: ["What's water for, according to the MOTHER? Choose all her answers.", 'माँ के अनुसार पानी किस काम आता है? माँ के सारे जवाब चुनो।'],
      options: [
        ['washing', 'धोना'],
        ['paddling in wellies', 'गमबूट पहनकर पानी में छपछप करना'],
        ['making tea', 'चाय बनाना'],
        ['splashing Dad', 'पापा पर पानी उछालना'],
        ['shining a car', 'कार चमकाना'],
        ['spraying the dog', 'कुत्ते पर पानी छिड़कना'],
        ['rinsing a shirt', 'कमीज़ खँगालना'],
        ['watering tomatoes', 'टमाटरों को पानी देना'],
        ['mixing with mud', 'मिट्टी में मिलाना'],
        ['drinking', 'पीना'],
      ],
      answers: [0, 2, 4, 6, 7, 9],
    },
    {
      type: 'pick',
      title: ["What's water for, according to the CHILD? Choose all the child's answers.", 'बच्चे के अनुसार पानी किस काम आता है? बच्चे के सारे जवाब चुनो।'],
      options: [
        ['scrubbing me', 'मुझे रगड़कर नहलाना'],
        ['squirting at brothers', 'भाइयों पर पानी की धार मारना'],
        ['cleaning the bath', 'बाथटब साफ़ करना'],
        ['soaking my sister', 'बहन को भिगो देना'],
        ['shifting the dirt', 'गंदगी हटाना'],
        ['catching a fly', 'मक्खी पकड़ना'],
        ['mixing with mud to bake a pie', 'मिट्टी मिलाकर पाई बनाना'],
        ['making tea', 'चाय बनाना'],
      ],
      answers: [1, 3, 5, 6],
    },
    {
      type: 'match',
      title: ['Rhyming words: match each word with its rhyming word from the poem.', 'तुकांत शब्द: हर शब्द को कविता के उसके तुक वाले शब्द से मिलाओ।'],
      pairs: [
        [['shirt', 'कमीज़'], ['dirt', 'गंदगी']],
        [['feet', 'पैर'], ['treat', 'मज़ेदार चीज़']],
        [['mad', 'नाराज़'], ['Dad', 'पापा']],
        [['fly', 'मक्खी'], ['pie', 'पाई']],
        [['tea', 'चाय'], ['me', 'मुझे']],
      ],
    },
    {
      type: 'task',
      title: ['Situations: imagine you are a 5 year old child. Which of these would you enjoy doing?', 'कल्पना करो कि तुम 5 साल के बच्चे हो। इनमें से कौन-से काम करने में तुम्हें मज़ा आएगा?'],
      items: [
        { q: ['Waking up someone by pouring water.', 'पानी डालकर किसी को जगाना।'] },
        { q: ['Watering plants.', 'पौधों को पानी देना।'] },
        { q: ['Jumping in rain water.', 'बारिश के पानी में कूदना।'] },
        { q: ['Floating paper boats in a tub or bucket.', 'टब या बाल्टी में काग़ज़ की नाव तैराना।'] },
        { q: ['Pouring out water from one glass to another.', 'एक गिलास से दूसरे गिलास में पानी उड़ेलना।'] },
        { q: ['Playing with water.', 'पानी से खेलना।'], a: ['I would enjoy jumping in rain water and floating paper boats.', 'मुझे बारिश के पानी में कूदने और काग़ज़ की नाव तैराने में मज़ा आएगा।'] },
      ],
    },
    {
      type: 'task',
      title: ['Make a list of hobbies for which water is necessary.', 'उन शौक़ों की सूची बनाओ जिनके लिए पानी ज़रूरी है।'],
      items: [
        {
          q: ['Write four hobbies.', 'चार शौक़ लिखो।'],
          a: ['swimming, gardening, fishing, painting with water colours', 'तैरना, बाग़बानी, मछली पकड़ना, पानी के रंगों से चित्र बनाना'],
        },
      ],
    },
    {
      type: 'pick',
      title: ['Vocabulary: choose the words and phrases that you come across in the poem.', 'शब्दावली: वे शब्द और वाक्यांश चुनो जो कविता में आए हैं।'],
      options: [
        ['scrubbing', 'रगड़ना'],
        ['watering plants', 'पौधों को पानी देना'],
        ['mixing mud', 'मिट्टी मिलाना'],
        ['splashing', 'छींटे उड़ाना'],
        ['shining a car', 'कार चमकाना'],
        ['shifting water', 'पानी हटाना'],
        ['rinsing a shirt', 'कमीज़ खँगालना'],
        ['paddling', 'पानी में छपछप करना'],
        ['drinking', 'पीना'],
        ['taking bath', 'नहाना'],
        ['making tea', 'चाय बनाना'],
        ['washing utensils', 'बर्तन धोना'],
      ],
      answers: [0, 2, 3, 4, 6, 7, 8, 10],
    },
    {
      type: 'task',
      title: ['Complete the word map: what is water used for?', 'शब्द-चित्र पूरा करो: पानी किस काम आता है?'],
      items: [
        {
          q: ['Uses of water: washing, ...', 'पानी के उपयोग: धोना, ...'],
          a: ['washing, drinking, cooking, bathing, watering plants, cleaning, making tea, swimming', 'धोना, पीना, खाना पकाना, नहाना, पौधों को पानी देना, सफ़ाई करना, चाय बनाना, तैरना'],
        },
      ],
    },
    {
      type: 'pick',
      title: ['Listening: listen to the poem and choose the faces that occur in it.', 'सुनना: कविता सुनो और उसमें आए चेहरे चुनो।'],
      passage: [
        'I painted a face that was angry.\nI painted a head, no hair at all.\nI painted a face that was happy.\nI painted the eyes large and bright.\nI painted a face that was sad.\nI painted a head that\'s upside down.',
        'मैंने एक चेहरा बनाया जो ग़ुस्से में था।\nमैंने एक सिर बनाया, जिस पर बिल्कुल बाल नहीं थे।\nमैंने एक चेहरा बनाया जो ख़ुश था।\nमैंने आँखें बनाईं, बड़ी और चमकीली।\nमैंने एक चेहरा बनाया जो उदास था।\nमैंने एक सिर बनाया जो उल्टा था।',
      ],
      options: [
        ['an angry face', 'ग़ुस्से वाला चेहरा'],
        ['a sleepy face', 'नींद भरा चेहरा'],
        ['a happy face', 'ख़ुश चेहरा'],
        ['a crying face', 'रोता चेहरा'],
        ['a sad face', 'उदास चेहरा'],
        ['a head upside down', 'उल्टा सिर'],
        ['a surprised face', 'हैरान चेहरा'],
      ],
      answers: [0, 2, 4, 5],
    },
    {
      type: 'qa',
      title: ['Listening: what did the child paint, and how was it?', 'सुनना: बच्चे ने क्या बनाया, और वह कैसा था?'],
      items: [
        { q: ['a face', 'एक चेहरा'], a: ['angry, happy and sad', 'ग़ुस्से वाला, ख़ुश और उदास'] },
        { q: ['a head', 'एक सिर'], a: ['no hair at all, and upside down', 'बिल्कुल बाल नहीं, और उल्टा'] },
        { q: ['the eyes', 'आँखें'], a: ['large and bright', 'बड़ी और चमकीली'] },
      ],
    },
    {
      type: 'task',
      title: ['Speaking: speak five sentences about your friend.', 'बोलना: अपने दोस्त के बारे में पाँच वाक्य बोलो।'],
      items: [
        {
          q: ['Start with: My friend\'s name is ...', 'ऐसे शुरू करो: मेरे दोस्त का नाम ... है'],
          a: [
            'My friend\'s name is Ravi. He is in my class. He is kind and helpful. He likes playing cricket. We go to school together.',
            'मेरे दोस्त का नाम रवि है। वह मेरी कक्षा में है। वह दयालु और मददगार है। उसे क्रिकेट खेलना पसंद है। हम साथ में स्कूल जाते हैं।',
          ],
        },
      ],
    },
    {
      type: 'task',
      title: ['Proverb: use "Union is strength" in a sentence. (People can get greater things by working together.)', 'कहावत: "एकता में बल है" को वाक्य में प्रयोग करो। (मिलकर काम करने से लोग बड़े काम कर पाते हैं।)'],
      items: [
        {
          q: ['Union is strength.', 'एकता में बल है।'],
          a: ['The villagers cleaned the whole pond in one day, because union is strength.', 'गाँव वालों ने एक ही दिन में पूरा तालाब साफ़ कर दिया, क्योंकि एकता में बल है।'],
        },
      ],
    },
  ],

  'class8-2': [
    {
      type: 'mcq',
      title: ['Tick the correct answer.', 'सही उत्तर पर निशान लगाओ।'],
      items: [
        {
          q: ['The shoemaker wanted to sew shoes -', 'मोची जूते सिलना चाहता था -'],
          options: [['early in the morning', 'सुबह जल्दी'], ['next day', 'अगले दिन'], ['at midnight', 'आधी रात को'], ['previous day', 'पिछले दिन']],
          a: 1,
        },
        {
          q: ['When the shoemaker saw a better pair of shoes, he was -', 'जब मोची ने और अच्छी जोड़ी जूते देखे, तो वह -'],
          options: [['annoyed', 'नाराज़ हुआ'], ['surprised', 'हैरान हुआ'], ['very sad', 'बहुत दुखी हुआ'], ['happy', 'ख़ुश हुआ']],
          a: 1,
        },
        {
          q: ['The elves wore -', 'बौनों ने पहने थे -'],
          options: [['over coat', 'ओवरकोट'], ['rain coat', 'रेनकोट'], ['old and torn clothes', 'पुराने और फटे कपड़े'], ['dress', 'पोशाक']],
          a: 2,
        },
        {
          q: ['The beautiful shoes were made by -', 'सुंदर जूते बनाए थे -'],
          options: [['elves', 'बौनों ने'], ['magician', 'जादूगर ने'], ['joker', 'जोकर ने'], ['fairies', 'परियों ने']],
          a: 0,
        },
        {
          q: ['How many gold pieces were given to the shoemaker?', 'मोची को कितने सोने के सिक्के दिए गए?'],
          options: [['one hundred', 'एक सौ'], ['two hundred', 'दो सौ'], ['three hundred', 'तीन सौ'], ['four hundred', 'चार सौ']],
          a: 0,
        },
      ],
    },
    {
      type: 'tf',
      title: ['Say whether the following statements are true or false.', 'बताओ कि ये कथन सही हैं या ग़लत।'],
      items: [
        { q: ['The shoemaker was very poor.', 'मोची बहुत ग़रीब था।'], a: true },
        { q: ['The shoemaker was surprised when he saw a better pair of shoes.', 'और अच्छी जोड़ी जूते देखकर मोची हैरान हुआ।'], a: true },
        { q: ['The shoes were made by the elves at night.', 'जूते रात में बौनों ने बनाए थे।'], a: true },
        { q: ['The elves wore beautiful clothes.', 'बौने सुंदर कपड़े पहनते थे।'], a: false },
        { q: ['The shoemaker and his wife made little coats and trousers for the elves.', 'मोची और उसकी पत्नी ने बौनों के लिए छोटे कोट और पतलून बनाए।'], a: true },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        {
          q: ['Where did the shoemaker live?', 'मोची कहाँ रहता था?'],
          a: ['The shoemaker lived with his wife in a little house on the edge of a wood.', 'मोची अपनी पत्नी के साथ जंगल के किनारे एक छोटे-से घर में रहता था।'],
        },
        {
          q: ['Why was the shoemaker poor?', 'मोची ग़रीब क्यों था?'],
          a: ['Not many people bought shoes from him, and he had no money to buy more leather.', 'बहुत कम लोग उससे जूते ख़रीदते थे, और उसके पास और चमड़ा ख़रीदने के पैसे नहीं थे।'],
        },
        {
          q: ['What did the shoemaker do when he saw a better pair of shoes?', 'और अच्छी जोड़ी जूते देखकर मोची ने क्या किया?'],
          a: ['He was surprised. He sold the shoes at once and bought leather for two pairs of shoes with the money.', 'वह हैरान हुआ। उसने जूते तुरंत बेच दिए और उन पैसों से दो जोड़ी जूतों का चमड़ा ख़रीदा।'],
        },
        {
          q: ['How did the shoemaker become rich?', 'मोची अमीर कैसे बना?'],
          a: ['Every night the elves made very fine shoes. The shoes sold quickly, everybody wanted his shoes, and the queen gave him one hundred gold pieces.', 'हर रात बौने बहुत बढ़िया जूते बनाते थे। जूते जल्दी बिक जाते, सब उसके जूते चाहते थे, और रानी ने उसे सौ सोने के सिक्के दिए।'],
        },
        {
          q: ['What did the shoemaker and his wife give the little elves?', 'मोची और उसकी पत्नी ने छोटे बौनों को क्या दिया?'],
          a: ['They gave them little coats, trousers and tiny shoes.', 'उन्होंने उन्हें छोटे कोट, पतलून और नन्हे जूते दिए।'],
        },
        {
          q: ['Why did the little elves never come back?', 'छोटे बौने फिर कभी वापस क्यों नहीं आए?'],
          a: ['They got new clothes and shoes and were very happy, so they did not need to come back and work any more.', 'उन्हें नए कपड़े और जूते मिल गए और वे बहुत ख़ुश थे, इसलिए उन्हें लौटकर और काम करने की ज़रूरत नहीं रही।'],
        },
      ],
    },
    {
      type: 'fill',
      title: ['Vocabulary: fill in the blanks choosing words from: stitches, rags, excellent, curtains, elf.', 'शब्दावली: इन शब्दों से रिक्त स्थान भरो: stitches, rags, excellent, curtains, elf.'],
      bank: ['stitches', 'rags', 'excellent', 'Curtains', 'elf'],
      items: [
        { q: ['A fairy-like creature with pointed ears is called an ___.', 'नुकीले कानों वाला परी जैसा जीव ___ कहलाता है।'], a: 'elf' },
        { q: ['Beggars usually wear ___.', 'भिखारी अक्सर ___ पहनते हैं।'], a: 'rags' },
        { q: ['___ are hung at doors and windows.', 'दरवाज़ों और खिड़कियों पर ___ लटकाए जाते हैं।'], a: 'Curtains' },
        { q: ['He is an ___ cricket player.', 'वह एक ___ क्रिकेट खिलाड़ी है।'], a: 'excellent' },
        { q: ['The ___ on these trousers are very fine.', 'इस पतलून की ___ बहुत बारीक है।'], a: 'stitches' },
      ],
    },
    {
      type: 'task',
      title: ['Make sentences using these words: edge, excellent, store, tiny, struck, rag.', 'इन शब्दों से वाक्य बनाओ: edge, excellent, store, tiny, struck, rag.'],
      items: [
        { q: ['edge', 'किनारा'], a: ['There is a hut at the edge of the forest.', 'जंगल के किनारे एक झोपड़ी है।'] },
        { q: ['excellent', 'बहुत बढ़िया'], a: ['She made an excellent drawing.', 'उसने बहुत बढ़िया चित्र बनाया।'] },
        { q: ['store', 'भंडार / जमा करना'], a: ['Ants store food for the winter.', 'चींटियाँ सर्दियों के लिए खाना जमा करती हैं।'] },
        { q: ['tiny', 'नन्हा'], a: ['The baby has tiny hands.', 'बच्चे के नन्हे हाथ हैं।'] },
        { q: ['struck', 'बजाया / टकराया'], a: ['The clock struck twelve.', 'घड़ी ने बारह बजाए।'] },
        { q: ['rag', 'चिथड़ा'], a: ['He cleaned the table with a rag.', 'उसने एक चिथड़े से मेज़ साफ़ की।'] },
      ],
    },
    {
      type: 'qa',
      title: ['These words have more than one meaning. What are their meanings?', 'इन शब्दों के एक से ज़्यादा मतलब हैं। इनके मतलब क्या हैं?'],
      items: [
        { q: ['wood', 'wood'], a: ['(1) a forest  (2) the hard substance of a tree used for fuel', '(1) जंगल  (2) पेड़ का कठोर हिस्सा, लकड़ी, जो जलाने के काम आती है'] },
        { q: ['fine', 'fine'], a: ['(1) very good  (2) very thin  (3) money paid as a punishment', '(1) बहुत अच्छा  (2) बहुत बारीक / पतला  (3) सज़ा के रूप में दिया गया पैसा, जुर्माना'] },
        { q: ['present', 'present'], a: ['(1) a gift  (2) here, not absent  (3) the time now', '(1) उपहार  (2) उपस्थित, ग़ैरहाज़िर नहीं  (3) वर्तमान समय'] },
        { q: ['object', 'object'], a: ['(1) a thing  (2) to disagree or protest', '(1) वस्तु  (2) आपत्ति करना'] },
        { q: ['match', 'match'], a: ['(1) a game  (2) a matchstick  (3) to go well with', '(1) खेल का मुक़ाबला  (2) माचिस की तीली  (3) मेल खाना'] },
      ],
    },
    {
      type: 'mcq',
      title: ['Suffixes: which ending makes a new word? (-ian, -er, -ist)', 'प्रत्यय: कौन-सा अंत लगाकर नया शब्द बनेगा? (-ian, -er, -ist)'],
      items: [
        { q: ['magic', 'जादू'], options: [['-ian (magician)', 'जादूगर'], ['-er', ''], ['-ist', '']], a: 0 },
        { q: ['teach', 'पढ़ाना'], options: [['-ian', ''], ['-er (teacher)', 'शिक्षक'], ['-ist', '']], a: 1 },
        { q: ['science', 'विज्ञान'], options: [['-ian', ''], ['-er', ''], ['-ist (scientist)', 'वैज्ञानिक']], a: 2 },
        { q: ['farm', 'खेत'], options: [['-ian', ''], ['-er (farmer)', 'किसान'], ['-ist', '']], a: 1 },
        { q: ['piano', 'पियानो'], options: [['-ian', ''], ['-er', ''], ['-ist (pianist)', 'पियानो बजाने वाला']], a: 2 },
        { q: ['library', 'पुस्तकालय'], options: [['-ian (librarian)', 'पुस्तकालय अध्यक्ष'], ['-er', ''], ['-ist', '']], a: 0 },
      ],
    },
    {
      type: 'mcq',
      title: ['Listening: listen to the story "The Ant and the Grasshopper". Who said these words?', 'सुनना: "चींटी और टिड्डा" कहानी सुनो। ये शब्द किसने कहे?'],
      passage: [
        'One summer\'s day, a grasshopper was singing and dancing, while an ant was dragging an ear of wheat along to her ant hill. It was so heavy that she could hardly move it. "Why not forget your work and have fun with me instead?" said the Grasshopper.\n"I am storing food for the winter," replied the Ant, "and you should do so too."\n"But I\'ve enough food for today," said the Grasshopper, and off he went.\nIn the winter, the ant had plenty of food in their ant hill, but the grasshopper had no food and was dying of hunger.',
        'गर्मी के एक दिन एक टिड्डा गा रहा था और नाच रहा था, जबकि एक चींटी गेहूँ की एक बाली खींचकर अपनी बाँबी की ओर ले जा रही थी। वह इतनी भारी थी कि वह उसे मुश्किल से हिला पा रही थी। "अपना काम भूलकर मेरे साथ मज़े क्यों नहीं करतीं?" टिड्डे ने कहा।\n"मैं सर्दियों के लिए खाना जमा कर रही हूँ," चींटी ने जवाब दिया, "और तुम्हें भी ऐसा ही करना चाहिए।"\n"पर मेरे पास आज के लिए काफ़ी खाना है," टिड्डे ने कहा, और चला गया।\nसर्दियों में चींटी की बाँबी में ख़ूब खाना था, पर टिड्डे के पास कोई खाना नहीं था और वह भूख से मर रहा था।',
      ],
      items: [
        { q: ['"Why not forget your work and have fun with me instead?"', '"अपना काम भूलकर मेरे साथ मज़े क्यों नहीं करतीं?"'], options: [['the Ant', 'चींटी'], ['the Grasshopper', 'टिड्डा']], a: 1 },
        { q: ['"But I\'ve food for today."', '"पर मेरे पास आज के लिए खाना है।"'], options: [['the Ant', 'चींटी'], ['the Grasshopper', 'टिड्डा']], a: 1 },
        { q: ['"I am storing food for winter."', '"मैं सर्दियों के लिए खाना जमा कर रही हूँ।"'], options: [['the Ant', 'चींटी'], ['the Grasshopper', 'टिड्डा']], a: 0 },
      ],
    },
    {
      type: 'fill',
      title: ['Listening: fill in the blanks from the story.', 'सुनना: कहानी से रिक्त स्थान भरो।'],
      bank: ['singing and dancing', 'an ear of wheat', 'move', 'dying'],
      items: [
        { q: ['One summer\'s day, a grasshopper was ___.', 'गर्मी के एक दिन एक टिड्डा ___ था।'], a: 'singing and dancing' },
        { q: ['An ant was dragging ___.', 'एक चींटी ___ खींच रही थी।'], a: 'an ear of wheat' },
        { q: ['It was so heavy that she could hardly ___ it.', 'वह इतनी भारी थी कि वह उसे मुश्किल से ___ पा रही थी।'], a: 'move' },
        { q: ['The grasshopper had no food and was ___ of hunger.', 'टिड्डे के पास कोई खाना नहीं था और वह भूख से ___ रहा था।'], a: 'dying' },
      ],
    },
    {
      type: 'task',
      title: ['Speaking: imagine you are one of the elves. What would you say if you got a new dress?', 'बोलना: कल्पना करो कि तुम एक बौने हो। नई पोशाक मिलने पर तुम क्या कहोगे?'],
      items: [{ q: ['Say it in a word, a phrase or a sentence.', 'एक शब्द, वाक्यांश या वाक्य में कहो।'], a: ['Wow! How lovely! Thank you so much!', 'वाह! कितनी सुंदर! बहुत-बहुत धन्यवाद!'] }],
    },
    {
      type: 'task',
      title: ['Pair work: one of you is an elf and the other is the shoemaker\'s wife. The elf asks for things she cannot give.', 'जोड़ी में काम: एक बौना बने और दूसरा मोची की पत्नी। बौना ऐसी चीज़ें माँगे जो वह नहीं दे सकती।'],
      items: [
        {
          q: ['The elf: Would you please give me a belt made of gold?', 'बौना: क्या आप मुझे सोने की बनी एक बेल्ट देंगी?'],
          a: ['Shoemaker\'s wife: I am sorry dear. How could I buy so much gold?', 'मोची की पत्नी: माफ़ करना प्यारे। मैं इतना सोना कैसे ख़रीद सकती हूँ?'],
        },
        {
          q: ['The elf: Can I have a crown of diamonds?', 'बौना: क्या मुझे हीरों का एक मुकुट मिल सकता है?'],
          a: ['Shoemaker\'s wife: I am sorry, we are not so rich.', 'मोची की पत्नी: माफ़ करना, हम इतने अमीर नहीं हैं।'],
        },
      ],
    },
    {
      type: 'task',
      title: ['Present the story "The Shoemaker and the Elves" as a skit. Write the dialogues, learn them and practise.', '"मोची और बौने" कहानी को एक छोटे नाटक के रूप में प्रस्तुत करो। संवाद लिखो, याद करो और अभ्यास करो।'],
      items: [
        {
          q: ['Start with the shoemaker and his wife at night.', 'रात के समय मोची और उसकी पत्नी से शुरू करो।'],
          a: ['Shoemaker: Tomorrow I will sew them.\nWife: We must find out who makes the shoes.', 'मोची: कल मैं इन्हें सिलूँगा।\nपत्नी: हमें पता लगाना होगा कि जूते कौन बनाता है।'],
        },
      ],
    },
    {
      type: 'pick',
      title: ['Project: describing words. Choose the words that describe something.', 'परियोजना: विशेषण। वे शब्द चुनो जो किसी चीज़ के बारे में बताते हैं।'],
      options: [
        ['poor', 'ग़रीब'],
        ['shoes', 'जूते'],
        ['little', 'छोटा'],
        ['sew', 'सिलना'],
        ['perfect', 'एकदम सही'],
        ['wife', 'पत्नी'],
        ['fine', 'बढ़िया'],
        ['dancing', 'नाचना'],
        ['tiny', 'नन्हा'],
        ['happy', 'ख़ुश'],
      ],
      answers: [0, 2, 4, 6, 8, 9],
    },
    {
      type: 'task',
      title: ['Proverb: use "Tomorrow never comes" in a sentence. (Don\'t put something off for tomorrow.)', 'कहावत: "कल कभी नहीं आता" को वाक्य में प्रयोग करो। (कोई काम कल पर मत टालो।)'],
      items: [
        {
          q: ['Tomorrow never comes.', 'कल कभी नहीं आता।'],
          a: ['Do your homework today, because tomorrow never comes.', 'अपना गृहकार्य आज ही करो, क्योंकि कल कभी नहीं आता।'],
        },
      ],
    },
  ],
  'class8-3': [
    {
      type: 'mcq',
      title: ['Tick the correct answer.', 'सही उत्तर पर निशान लगाओ।'],
      items: [
        {
          q: ["Who was invited to draw the King's portrait?", 'राजा का चित्र बनाने के लिए किसे बुलाया गया?'],
          options: [['Tenali Raman', 'तेनाली रामन'], ['Carpenter', 'बढ़ई'], ['Raja Varma', 'राजा वर्मा'], ['Elders of the town', 'नगर के बुज़ुर्ग']],
          a: 2,
        },
        {
          q: ['What did the artist get as a reward?', 'चित्रकार को इनाम में क्या मिला?'],
          options: [['Money', 'पैसा'], ['Praise', 'तारीफ़'], ['Chief ministership', 'मुख्यमंत्री का पद'], ['Kingdom', 'राज्य']],
          a: 2,
        },
        {
          q: ["The artist's administration made the people of the kingdom -", 'चित्रकार के शासन ने राज्य के लोगों को -'],
          options: [['Happy', 'ख़ुश'], ['Unhappy', 'दुखी'], ['Satisfied', 'संतुष्ट'], ['Pleased', 'प्रसन्न']],
          a: 1,
        },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        {
          q: ["Why were the people unhappy with Raja Varma's administration?", 'लोग राजा वर्मा के शासन से दुखी क्यों थे?'],
          a: ['He had no experience of administration. His hasty decisions and bad management threw everything into disorder.', 'उसे शासन का कोई अनुभव नहीं था। उसके जल्दबाज़ी के फ़ैसलों और ख़राब प्रबंधन से सब कुछ अव्यवस्थित हो गया।'],
        },
        {
          q: ["What was Tenali Raman's plan to remove the artist from his new job?", 'चित्रकार को नए पद से हटाने के लिए तेनाली रामन की क्या योजना थी?'],
          a: ['He invited the king to a feast cooked by a carpenter, to show that a person should do only the work he is good at.', 'उसने राजा को एक बढ़ई द्वारा पकाए भोज पर बुलाया, ताकि दिखा सके कि इंसान को वही काम करना चाहिए जिसमें वह माहिर हो।'],
        },
        {
          q: ['Why did Tenali Raman ask a carpenter to cook food for his feast?', 'तेनाली रामन ने भोज का खाना पकाने के लिए बढ़ई को क्यों कहा?'],
          a: ['To make the king realise his error: if an artist can be a Chief Minister, a carpenter can be a cook, and both are wrong.', 'ताकि राजा को अपनी ग़लती समझ आए: अगर चित्रकार मुख्यमंत्री बन सकता है तो बढ़ई रसोइया बन सकता है, और दोनों ही ग़लत हैं।'],
        },
        {
          q: ["What does the title 'Measure for Measure' mean?", "शीर्षक 'Measure for Measure' का क्या मतलब है?"],
          a: ['Doing the same thing back: Tenali Raman answered the king\'s mistake with a matching example, a wrong person in a wrong job.', 'जैसे को तैसा: तेनाली रामन ने राजा की ग़लती का जवाब उसी तरह के उदाहरण से दिया, ग़लत काम पर ग़लत व्यक्ति।'],
        },
      ],
    },
    {
      type: 'fill',
      title: ['Vocabulary: choose the most suitable phrase to complete the sentence.', 'शब्दावली: वाक्य पूरा करने के लिए सबसे सही वाक्यांश चुनो।'],
      bank: ['close and dear', 'unbearably hot', 'suffer and die', 'come across', 'all sense'],
      items: [
        { q: ['Raja Varma became ___ to the king.', 'राजा वर्मा राजा का ___ बन गया।'], a: 'close and dear' },
        { q: ['The food was ___.', 'खाना ___ था।'], a: 'unbearably hot' },
        { q: ['Do you want us to ___ by eating this horrible food?', 'क्या तुम चाहते हो कि हम यह भयानक खाना खाकर ___?'], a: 'suffer and die' },
        { q: ['I have never ___ such an excellent carpenter.', 'मुझे कभी इतना बढ़िया बढ़ई ___।'], a: 'come across' },
        { q: ['The king asked Raman whether he had lost ___.', 'राजा ने रामन से पूछा कि क्या उसने ___ खो दी है।'], a: 'all sense' },
      ],
    },
    {
      type: 'match',
      title: ['Match the meaning with the word.', 'मतलब को सही शब्द से मिलाओ।'],
      pairs: [
        [["A king's support to someone.", 'किसी को राजा का सहारा।'], ['patronage', 'संरक्षण']],
        [['Things are in a mess.', 'चीज़ें बिगड़ी हुई हैं।'], ['disorder', 'अव्यवस्था']],
        [['A person who is not doing his job well.', 'जो अपना काम ठीक से नहीं करता।'], ['incompetent', 'अयोग्य']],
        [['Something you want when you are hungry.', 'भूख लगने पर जो चाहिए।'], ['morsel', 'कौर']],
        [['Someone who is very good at studies.', 'जो पढ़ाई में बहुत अच्छा हो।'], ['brilliant', 'प्रतिभाशाली']],
        [['A person who looks after the administration of a state.', 'जो राज्य का शासन चलाता है।'], ['chief minister', 'मुख्यमंत्री']],
      ],
    },
    {
      type: 'task',
      title: ['Frame your own sentences using these words.', 'इन शब्दों से अपने वाक्य बनाओ।'],
      items: [
        { q: ['brilliant', 'प्रतिभाशाली'], a: ['Meena is a brilliant student.', 'मीना एक प्रतिभाशाली छात्रा है।'] },
        { q: ['prominent', 'प्रमुख'], a: ['He is a prominent leader of our town.', 'वह हमारे शहर के प्रमुख नेता हैं।'] },
        { q: ['horrible', 'भयानक'], a: ['The food tasted horrible.', 'खाने का स्वाद भयानक था।'] },
        { q: ['portrait', 'चित्र'], a: ['The artist drew a portrait of the king.', 'चित्रकार ने राजा का चित्र बनाया।'] },
        { q: ['reward', 'इनाम'], a: ['She got a reward for her honesty.', 'उसे अपनी ईमानदारी के लिए इनाम मिला।'] },
        { q: ['grand', 'भव्य'], a: ['They gave a grand party.', 'उन्होंने एक भव्य दावत दी।'] },
      ],
    },
    {
      type: 'tf',
      title: ['Listening: listen to the passage and say true or false.', 'सुनना: अनुच्छेद सुनो और बताओ सही या ग़लत।'],
      passage: [
        "Shaikh Mohammad Hanif, a peon at Mumbai Churchgate Railway Station, saw a bag lying at a gate outside his workplace. For ten minutes, Hanif waited to see if anyone would claim it. He then took the bag to his office and opened it. Inside was a veritable treasure - a cellphone, a camcorder, three watches, traveller's cheques worth $25,000 and $40,000 in cash. There was also the Saudi passport of a man called Ashraf.\nHanif immediately took the bag to his boss. Shortly thereafter, the two men informed the station master's office, and an announcement about the find was made on the station's public address system. Half an hour later, Ashraf, the bag's owner, came to claim it and pressed Hanif to accept $4000 as a reward. But Hanif refused. \"I won't take anything that doesn't belong to me,\" he said, \"or else, how will I face Allah?\"",
        'शेख़ मोहम्मद हनीफ़, मुंबई चर्चगेट रेलवे स्टेशन का एक चपरासी, ने अपने काम की जगह के बाहर एक गेट पर पड़ा एक बैग देखा। दस मिनट तक हनीफ़ इंतज़ार करता रहा कि कोई उसे लेने आए। फिर वह बैग अपने दफ़्तर ले गया और खोला। अंदर सचमुच ख़ज़ाना था - एक मोबाइल फ़ोन, एक कैमकॉर्डर, तीन घड़ियाँ, 25,000 डॉलर के ट्रैवलर चेक और 40,000 डॉलर नक़द। अशरफ़ नाम के एक आदमी का सऊदी पासपोर्ट भी था।\nहनीफ़ तुरंत बैग अपने बॉस के पास ले गया। थोड़ी देर बाद दोनों ने स्टेशन मास्टर के दफ़्तर को बताया, और स्टेशन के लाउडस्पीकर पर इसकी घोषणा की गई। आधे घंटे बाद बैग का मालिक अशरफ़ उसे लेने आया और हनीफ़ से 4000 डॉलर इनाम लेने की ज़िद की। पर हनीफ़ ने मना कर दिया। "जो चीज़ मेरी नहीं है, मैं वह नहीं लूँगा," उसने कहा, "वरना मैं अल्लाह को क्या मुँह दिखाऊँगा?"',
      ],
      items: [
        { q: ['Shaikh Mohammad was a clerk at the Mumbai Churchgate railway station.', 'शेख़ मोहम्मद मुंबई चर्चगेट रेलवे स्टेशन पर क्लर्क था।'], a: false },
        { q: ['Hanif saw a purse lying at the gate.', 'हनीफ़ ने गेट पर एक बटुआ पड़ा देखा।'], a: false },
        { q: ['He opened the bag in his house.', 'उसने बैग अपने घर में खोला।'], a: false },
        { q: ["The bag had traveller's cheques worth $25,000.", 'बैग में 25,000 डॉलर के ट्रैवलर चेक थे।'], a: true },
        { q: ['The bag had $50,000 in cash.', 'बैग में 50,000 डॉलर नक़द थे।'], a: false },
        { q: ['The bag had a Dubai passport.', 'बैग में दुबई का पासपोर्ट था।'], a: false },
        { q: ['The bag had a camcorder and a cellphone.', 'बैग में एक कैमकॉर्डर और एक मोबाइल फ़ोन था।'], a: true },
        { q: ['The bag had two watches.', 'बैग में दो घड़ियाँ थीं।'], a: false },
        { q: ['Ashraf wanted to give a reward of $40,000.', 'अशरफ़ 40,000 डॉलर का इनाम देना चाहता था।'], a: false },
      ],
    },
    {
      type: 'qa',
      title: ['Listening: write the names of the places that you heard.', 'सुनना: जिन जगहों के नाम सुने, वे लिखो।'],
      items: [{ q: ['Two places', 'दो जगहें'], a: ['Mumbai, and Churchgate Railway Station', 'मुंबई, और चर्चगेट रेलवे स्टेशन'] }],
    },
    {
      type: 'task',
      title: ['Group work: complete the dialogue. Use: Why not / Sure! / I am sorry! / Me? / Oh! / No! / Wow! / I can\'t believe it!', 'समूह में: संवाद पूरा करो। इनका प्रयोग करो: Why not / Sure! / I am sorry! / Me? / Oh! / No! / Wow! / I can\'t believe it!'],
      items: [
        {
          q: ['Tenali Raman: Somu, you are indeed a very good carpenter. I am sure you will cook equally well. I want you to prepare a great feast for the king.', 'तेनाली रामन: सोमू, तुम सचमुच बहुत अच्छे बढ़ई हो। मुझे यक़ीन है कि तुम उतना ही अच्छा खाना भी पकाओगे। मैं चाहता हूँ कि तुम राजा के लिए एक बड़ा भोज बनाओ।'],
          a: ['Somu: Me? Cook for the king? I can\'t believe it! Pardon me, sir, I have never cooked in my life. But if you say so, I will try.', 'सोमू: मैं? राजा के लिए खाना पकाऊँ? मुझे यक़ीन नहीं हो रहा! माफ़ कीजिए, साहब, मैंने ज़िंदगी में कभी खाना नहीं पकाया। पर आप कहते हैं तो मैं कोशिश करूँगा।'],
        },
      ],
    },
  ],

  'class8-4': [
    {
      type: 'mcq',
      title: ['Tick the correct answer.', 'सही उत्तर पर निशान लगाओ।'],
      items: [
        { q: ['The boy made a crown -', 'लड़के ने मुकुट बनाया -'], options: [["of the tree's bark", 'पेड़ की छाल का'], ["of the tree's leaves", 'पेड़ की पत्तियों का'], ["of the tree's flowers", 'पेड़ के फूलों का'], ["of the tree's stump", 'पेड़ के ठूँठ का']], a: 1 },
        { q: ['Every day, the boy spent hours -', 'हर दिन लड़का घंटों बिताता था -'], options: [['near the big and tall mango tree', 'बड़े और ऊँचे आम के पेड़ के पास'], ['near the large and huge mango tree', 'बड़े और विशाल आम के पेड़ के पास'], ['near the large and old mango tree', 'बड़े और पुराने आम के पेड़ के पास'], ['near the long and huge mango tree', 'लंबे और विशाल आम के पेड़ के पास']], a: 2 },
        { q: ['The boy stripped the tree of every single mango and sold them to -', 'लड़के ने पेड़ का हर आम तोड़कर बेचा, ताकि -'], options: [['get married', 'शादी कर सके'], ['make a house', 'घर बना सके'], ['travel', 'यात्रा कर सके'], ['buy a car', 'कार ख़रीद सके']], a: 0 },
        { q: ['The boy who came back after a lapse of time was -', 'कुछ समय बाद लौटा लड़का था -'], options: [['very sad and worried', 'बहुत दुखी और चिंतित'], ['injured and defeated', 'घायल और हारा हुआ'], ['very happy and delighted', 'बहुत ख़ुश'], ['very bad tempered', 'बहुत चिड़चिड़ा']], a: 0 },
        { q: ['The boy came back -', 'लड़का लौटकर आया -'], options: [['playing and singing', 'खेलते और गाते हुए'], ['happy and satisfied', 'ख़ुश और संतुष्ट'], ['sullen and complaining', 'उदास और शिकायत करते हुए'], ['running and dancing', 'दौड़ते और नाचते हुए']], a: 2 },
        { q: ['Finally, the boy became -', 'आख़िर में लड़का बन गया -'], options: [['a young and handsome man', 'एक जवान और सुंदर आदमी'], ['a thoughtful person', 'एक विचारशील व्यक्ति'], ['a tired old man', 'एक थका हुआ बूढ़ा आदमी'], ['a generous old man', 'एक दयालु बूढ़ा आदमी']], a: 2 },
        { q: ['The boy sat down in the warm sunshine on -', 'लड़का गुनगुनी धूप में बैठा -'], options: [['grassy ground', 'घास वाली ज़मीन पर'], ['the tree stump', 'पेड़ के ठूँठ पर'], ['a bench', 'एक बेंच पर'], ['the branch of the tree', 'पेड़ की डाली पर']], a: 1 },
      ],
    },
    {
      type: 'match',
      title: ["The boy's problems and the tree's solutions: match them.", 'लड़के की समस्याएँ और पेड़ के हल: इन्हें मिलाओ।'],
      pairs: [
        [['The boy needed money to marry.', 'लड़के को शादी के लिए पैसे चाहिए थे।'], ['The tree gave its mangoes to sell.', 'पेड़ ने बेचने के लिए अपने आम दिए।']],
        [['The boy needed a house.', 'लड़के को घर चाहिए था।'], ['The tree gave its branches for a house and furniture.', 'पेड़ ने घर और फ़र्नीचर के लिए अपनी डालियाँ दीं।']],
        [['The boy wanted a boat to travel.', 'लड़के को यात्रा के लिए नाव चाहिए थी।'], ['The tree gave its trunk to make a boat.', 'पेड़ ने नाव बनाने के लिए अपना तना दिया।']],
        [['The old man was tired.', 'बूढ़ा आदमी थका हुआ था।'], ['The tree gave its stump as a seat to rest.', 'पेड़ ने आराम के लिए अपना ठूँठ बैठने को दिया।']],
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['Make a list of the things that help a tree to live.', 'उन चीज़ों की सूची बनाओ जो पेड़ को जीने में मदद करती हैं।'], a: ['water, sunlight, air, soil and care', 'पानी, धूप, हवा, मिट्टी और देखभाल'] },
        { q: ['List all the things the boy said he needed.', 'लड़के ने जो-जो चीज़ें माँगीं, उनकी सूची बनाओ।'], a: ['money, a house, a boat, and at last a place to rest', 'पैसा, एक घर, एक नाव, और आख़िर में आराम की जगह'] },
        { q: ['The boy looked sullen and complaining. Why?', 'लड़का उदास और शिकायती क्यों दिखता था?'], a: ['He was not happy with what he had and always wanted something more, like a house.', 'वह जो उसके पास था उससे ख़ुश नहीं था और हमेशा कुछ और चाहता था, जैसे एक घर।'] },
        { q: ['What happened at last?', 'आख़िर में क्या हुआ?'], a: ['The boy became a tired old man. He came back and sat on the tree stump, and the tree was happy.', 'लड़का एक थका हुआ बूढ़ा आदमी बन गया। वह लौटकर पेड़ के ठूँठ पर बैठा, और पेड़ ख़ुश हो गया।'] },
        { q: ['How did the boy spend his time?', 'लड़का अपना समय कैसे बिताता था?'], a: ['He played near the mango tree, made a crown of its leaves and played in its branches.', 'वह आम के पेड़ के पास खेलता, उसकी पत्तियों का मुकुट बनाता और उसकी डालियों में खेलता।'] },
        { q: ['Who was more loving - the boy or the tree? Why?', 'कौन ज़्यादा प्यार करने वाला था - लड़का या पेड़? क्यों?'], a: ['The tree. It gave the boy everything it had and asked for nothing in return.', 'पेड़। उसने लड़के को अपना सब कुछ दे दिया और बदले में कुछ नहीं माँगा।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Vocabulary: find the word from the clue.', 'शब्दावली: संकेत से शब्द पहचानो।'],
      bank: ['shade', 'tree', 'fruit', 'root', 'water', 'stump'],
      items: [
        { q: ['People and animals rest under trees. It is cool during the day: ___', 'लोग और जानवर पेड़ों के नीचे आराम करते हैं। दिन में ठंडक रहती है: ___'], a: 'shade' },
        { q: ['We get wood for furniture from it: ___', 'इससे हमें फ़र्नीचर के लिए लकड़ी मिलती है: ___'], a: 'tree' },
        { q: ['It is a stage after flowering. People eat it: ___', 'फूल आने के बाद की अवस्था। लोग इसे खाते हैं: ___'], a: 'fruit' },
        { q: ['The part of the tree that helps it to stand firmly: ___', 'पेड़ का वह हिस्सा जो उसे मज़बूती से खड़ा रखता है: ___'], a: 'root' },
        { q: ['We can\'t live without it. It helps plants grow: ___', 'इसके बिना हम जी नहीं सकते। यह पौधों को बढ़ने में मदद करता है: ___'], a: 'water' },
        { q: ['The part of the tree that remains after cutting it down: ___', 'पेड़ काटने के बाद बचा हिस्सा: ___'], a: 'stump' },
      ],
    },
    {
      type: 'fill',
      title: ['Arrange the letters and make meaningful words.', 'अक्षरों को सही क्रम में लगाकर शब्द बनाओ।'],
      bank: ['crown', 'forest', 'delight', 'single', 'stump'],
      items: [
        { q: ['nwroc (the king wears it) = ___', 'nwroc (राजा इसे पहनता है) = ___'], a: 'crown' },
        { q: ['tsofer (where wild animals live) = ___', 'tsofer (जहाँ जंगली जानवर रहते हैं) = ___'], a: 'forest' },
        { q: ['lgitedh (very happy) = ___', 'lgitedh (बहुत ख़ुशी) = ___'], a: 'delight' },
        { q: ['nsilge (one, only) = ___', 'nsilge (एक, अकेला) = ___'], a: 'single' },
        { q: ['mupts (what remains after the trunk of a tree is cut) = ___', 'mupts (तना कटने के बाद जो बचता है) = ___'], a: 'stump' },
      ],
    },
    {
      type: 'fill',
      title: ['Give one word related to each family of words.', 'हर शब्द-परिवार के लिए एक जुड़ा हुआ शब्द दो।'],
      bank: ['TREE', 'KING', 'SADNESS', 'BOAT', 'TIME'],
      items: [
        { q: ['leaves, fruit, branches, trunk: ___', 'पत्तियाँ, फल, डालियाँ, तना: ___'], a: 'TREE' },
        { q: ['crown, rule, kingdom, palace: ___', 'मुकुट, शासन, राज्य, महल: ___'], a: 'KING' },
        { q: ['tears, worry, cry, sorrow: ___', 'आँसू, चिंता, रोना, दुख: ___'], a: 'SADNESS' },
        { q: ['sailor, across, river, travel: ___', 'नाविक, पार, नदी, यात्रा: ___'], a: 'BOAT' },
        { q: ['hour, day, week, month: ___', 'घंटा, दिन, हफ़्ता, महीना: ___'], a: 'TIME' },
      ],
    },
    {
      type: 'qa',
      title: ['Arrange these words in alphabetical order: Grow, Great, Generous, Gradually, Crown, Complain, Courage, Declare, Delight, Approach, Aged, Stump, Enough, Sullen, Trunk', 'इन शब्दों को वर्णमाला के क्रम में लगाओ।'],
      items: [
        {
          q: ['Alphabetical order', 'वर्णमाला क्रम'],
          a: ['Aged, Approach, Complain, Courage, Crown, Declare, Delight, Enough, Generous, Gradually, Great, Grow, Stump, Sullen, Trunk', 'Aged, Approach, Complain, Courage, Crown, Declare, Delight, Enough, Generous, Gradually, Great, Grow, Stump, Sullen, Trunk'],
        },
      ],
    },
    {
      type: 'pick',
      title: ['Listening: listen to the poem and choose the words you hear.', 'सुनना: कविता सुनो और जो शब्द सुनाई दें, वे चुनो।'],
      passage: [
        'What do we plant when we plant the tree?\nWe plant a ship which will cross the sea.\nWe plant the houses for you and me.\nA thousand things that we daily see.\nWe plant the shade from the hot sun to be safe.\nWe plant all these when we plant a tree.',
        'जब हम पेड़ लगाते हैं, तो क्या लगाते हैं?\nहम एक जहाज़ लगाते हैं जो समुद्र पार करेगा।\nहम तुम्हारे और मेरे लिए घर लगाते हैं।\nहज़ारों चीज़ें जो हम रोज़ देखते हैं।\nहम गर्म धूप से बचने के लिए छाया लगाते हैं।\nजब हम पेड़ लगाते हैं, तो ये सब लगाते हैं।',
      ],
      options: [['free', ''], ['see', ''], ['me', ''], ['plant', ''], ['hot', ''], ['tea', ''], ['sea', ''], ['we', ''], ['he', ''], ['sun', ''], ['key', ''], ['she', ''], ['cross', ''], ['bee', ''], ['shade', '']],
      answers: [1, 2, 3, 4, 6, 7, 9, 12, 14],
    },
    {
      type: 'qa',
      title: ['Listening: answer from the poem.', 'सुनना: कविता से उत्तर दो।'],
      items: [
        { q: ['What do we plant when we plant a tree?', 'जब हम पेड़ लगाते हैं, तो क्या लगाते हैं?'], a: ['a ship, houses, shade, and a thousand things', 'एक जहाज़, घर, छाया, और हज़ारों चीज़ें'] },
        { q: ['"A thousand things that we daily see" - what does this mean?', '"हज़ारों चीज़ें जो हम रोज़ देखते हैं" - इसका क्या मतलब है?'], a: ['Many things we use every day, like paper, furniture, doors and pencils, come from trees.', 'बहुत-सी चीज़ें जो हम रोज़ इस्तेमाल करते हैं, जैसे काग़ज़, फ़र्नीचर, दरवाज़े और पेंसिल, पेड़ों से आती हैं।'] },
      ],
    },
    {
      type: 'task',
      title: ['Pair work: three year old Pappu does not like anybody\'s help. One of you is Pappu, the other wants to help.', 'जोड़ी में: तीन साल का पप्पू किसी की मदद नहीं लेना चाहता। एक पप्पू बने, दूसरा मदद करना चाहे।'],
      items: [
        { q: ['A: May I help you with your homework?', 'A: क्या मैं तुम्हारे गृहकार्य में मदद करूँ?'], a: ['B: No, thank you. I will do it myself.', 'B: नहीं, धन्यवाद। मैं ख़ुद कर लूँगा।'] },
        { q: ['Pappu is not able to open the door.', 'पप्पू दरवाज़ा नहीं खोल पा रहा।'], a: ['A: Shall I open the door for you?\nB: No, thank you. I can open it myself.', 'A: क्या मैं तुम्हारे लिए दरवाज़ा खोल दूँ?\nB: नहीं, धन्यवाद। मैं ख़ुद खोल सकता हूँ।'] },
        { q: ['Pappu has fallen down and hurt himself.', 'पप्पू गिर गया और उसे चोट लगी।'], a: ['A: Let me help you get up.\nB: No, thanks. I am fine, I can get up myself.', 'A: मुझे तुम्हें उठाने दो।\nB: नहीं, धन्यवाद। मैं ठीक हूँ, ख़ुद उठ सकता हूँ।'] },
      ],
    },
    {
      type: 'task',
      title: ['Proverb: use "Early to bed and early to rise makes a man healthy, wealthy and wise" in a sentence.', 'कहावत: "जल्दी सोना और जल्दी उठना इंसान को स्वस्थ, धनी और बुद्धिमान बनाता है" को वाक्य में प्रयोग करो।'],
      items: [{ q: ['Always be punctual in your work.', 'अपने काम में हमेशा समय के पाबंद रहो।'], a: ['My grandfather wakes up at five every day; he says early to bed and early to rise makes a man healthy, wealthy and wise.', 'मेरे दादाजी रोज़ पाँच बजे उठते हैं; वे कहते हैं कि जल्दी सोना और जल्दी उठना इंसान को स्वस्थ, धनी और बुद्धिमान बनाता है।'] }],
    },
  ],

  'class8-5': [
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['Why was the Knave of Hearts taken as a prisoner?', 'हुकुम के गुलाम (Knave of Hearts) को क़ैदी क्यों बनाया गया?'], a: ['Because of a little song which said that he had stolen the tarts made by the Queen of Hearts.', 'एक छोटे गीत की वजह से, जिसमें कहा गया था कि उसने रानी के बनाए टार्ट चुरा लिए।'] },
        { q: ['Why did the King wear the wig and the crown?', 'राजा ने विग और मुकुट क्यों पहना?'], a: ['So that people might know he was a judge as well as a king.', 'ताकि लोग जानें कि वह राजा होने के साथ-साथ न्यायाधीश भी है।'] },
        { q: ['How many members were there in the jury?', 'जूरी में कितने सदस्य थे?'], a: ['The lesson does not give the number; in the original story there were twelve jurors.', 'पाठ में संख्या नहीं दी गई; मूल कहानी में बारह जूरी सदस्य थे।'] },
        { q: ['What did the Queen say when she was angry?', 'रानी ग़ुस्से में क्या कहती थी?'], a: ['"Off with her head!"', '"इसका सिर काट दो!"'] },
        { q: ['Is this a real story or a dream?', 'यह सच्ची कहानी है या सपना?'], a: ['It is a dream: "Alice woke up out of her curious dream."', 'यह सपना है: "ऐलिस अपने अनोखे सपने से जाग गई।"'] },
        { q: ['Why did the cards become angry?', 'ताश के पत्ते नाराज़ क्यों हुए?'], a: ['Because Alice said, "You are nothing but a pack of cards!"', 'क्योंकि ऐलिस ने कहा, "तुम ताश की गड्डी के सिवा कुछ नहीं हो!"'] },
        { q: ['Did the cards really tumble down on Alice?', 'क्या ताश के पत्ते सच में ऐलिस पर गिरे?'], a: ['No. "The cards were only some leaves of the tree that the wind had blown down upon her face."', 'नहीं। "पत्ते असल में पेड़ की कुछ पत्तियाँ थीं जिन्हें हवा ने उसके चेहरे पर उड़ा दिया था।"'] },
      ],
    },
    {
      type: 'pick',
      title: ['Vocabulary: choose the words from the story that are related to a trial.', 'शब्दावली: कहानी के वे शब्द चुनो जो मुक़दमे (trial) से जुड़े हैं।'],
      options: [['prisoner', 'क़ैदी'], ['tarts', 'टार्ट'], ['trial', 'मुक़दमा'], ['judge', 'न्यायाधीश'], ['skirt', 'स्कर्ट'], ['jury', 'जूरी'], ['witness', 'गवाह'], ['trumpet', 'तुरही'], ['guilty', 'दोषी'], ['chains', 'ज़ंजीरें'], ['punish', 'सज़ा देना'], ['leaves', 'पत्तियाँ']],
      answers: [0, 2, 3, 5, 6, 8, 9, 10],
    },
    {
      type: 'pick',
      title: ['Listening: listen and choose the words you hear.', 'सुनना: सुनो और जो शब्द सुनाई दें, वे चुनो।'],
      passage: [
        'ice-cream, jalebi, cricket, football, kheer, nadi-pahad, potato, musical chair, gilli-danda, noodles, paratha, roti, volleyball, rasgulla, hockey, cream-roll, samosa, alu-poha, kabaddi, basketball, antakshari, puri',
        'आइसक्रीम, जलेबी, क्रिकेट, फ़ुटबॉल, खीर, नदी-पहाड़, आलू, म्यूज़िकल चेयर, गिल्ली-डंडा, नूडल्स, पराठा, रोटी, वॉलीबॉल, रसगुल्ला, हॉकी, क्रीम-रोल, समोसा, आलू-पोहा, कबड्डी, बास्केटबॉल, अंताक्षरी, पूरी',
      ],
      options: [['antakshari', ''], ['cricket', ''], ['chess', ''], ['ice-cream', ''], ['puri', ''], ['basketball', ''], ['rasgulla', ''], ['halwa', ''], ['jalebi', ''], ['tennis', ''], ['noodles', ''], ['samosa', ''], ['carroms', ''], ['gilli-danda', ''], ['kabaddi', ''], ['badminton', '']],
      answers: [0, 1, 3, 4, 5, 6, 8, 10, 11, 13, 14],
    },
    {
      type: 'pick',
      title: ['Categorise: choose only the GAMES.', 'वर्गीकरण: सिर्फ़ खेल चुनो।'],
      options: [['cricket', 'क्रिकेट'], ['jalebi', 'जलेबी'], ['hockey', 'हॉकी'], ['noodles', 'नूडल्स'], ['kabaddi', 'कबड्डी'], ['samosa', 'समोसा'], ['antakshari', 'अंताक्षरी'], ['paratha', 'पराठा'], ['gilli-danda', 'गिल्ली-डंडा'], ['rasgulla', 'रसगुल्ला'], ['volleyball', 'वॉलीबॉल'], ['puri', 'पूरी']],
      answers: [0, 2, 4, 6, 8, 10],
    },
    {
      type: 'task',
      title: ['Speaking (whole class): Which game do you like the most? Why do you like it?', 'बोलना (पूरी कक्षा): तुम्हें कौन-सा खेल सबसे ज़्यादा पसंद है? क्यों?'],
      items: [{ q: ['Which game do you like the most? Why?', 'कौन-सा खेल सबसे ज़्यादा पसंद है? क्यों?'], a: ['I like kabaddi the most because it makes me strong and quick, and we play it as a team.', 'मुझे कबड्डी सबसे ज़्यादा पसंद है क्योंकि इससे मैं मज़बूत और फुर्तीला बनता हूँ, और हम इसे टीम में खेलते हैं।'] }],
    },
  ],

  'class8-6': [
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['What does the railway carriage (train) move faster than?', 'रेल का डिब्बा (रेलगाड़ी) किससे तेज़ चलता है?'], a: ['Faster than fairies and faster than witches.', 'परियों से तेज़ और चुड़ैलों से तेज़।'] },
        { q: ['What do the fast moving bogies look like?', 'तेज़ चलते डिब्बे कैसे लगते हैं?'], a: ['Like troops charging along in a battle.', 'जैसे लड़ाई में आगे बढ़ती सेना की टुकड़ियाँ।'] },
        { q: ['What does the train pass through?', 'रेलगाड़ी किन चीज़ों से होकर गुज़रती है?'], a: ['Bridges, houses, hedges, ditches, meadows, hills, plains, stations, a mill and a river.', 'पुल, घर, बाड़, खाइयाँ, घास के मैदान, पहाड़ियाँ, मैदान, स्टेशन, एक चक्की और एक नदी।'] },
        { q: ['What do the sights of the hill and plain look like from the fast moving carriage?', 'तेज़ चलते डिब्बे से पहाड़ और मैदान के दृश्य कैसे लगते हैं?'], a: ['They fly past as thick as driving rain.', 'वे तेज़ बारिश की बौछार की तरह घने होकर उड़ते हुए निकल जाते हैं।'] },
        { q: ['Make a list of things that you see from a fast moving train.', 'तेज़ चलती रेलगाड़ी से दिखने वाली चीज़ों की सूची बनाओ।'], a: ['fields, trees, villages, cattle, rivers, bridges, stations, hills and people', 'खेत, पेड़, गाँव, मवेशी, नदियाँ, पुल, स्टेशन, पहाड़ियाँ और लोग'] },
      ],
    },
    {
      type: 'tf',
      title: ['Say true or false.', 'बताओ सही या ग़लत।'],
      items: [
        { q: ['The train is faster than fairies and witches.', 'रेलगाड़ी परियों और चुड़ैलों से तेज़ है।'], a: true },
        { q: ['There is no bridge or river on its way.', 'इसके रास्ते में कोई पुल या नदी नहीं है।'], a: false },
        { q: ['The child clambers and scrambles.', 'बच्चा चढ़ता और हाथ-पैर से रेंगता है।'], a: true },
      ],
    },
    {
      type: 'match',
      title: ['Rhyming words: match each word with its rhyming word from the poem.', 'तुकांत शब्द: हर शब्द को कविता के तुक वाले शब्द से मिलाओ।'],
      pairs: [
        [['road', 'सड़क'], ['load', 'बोझ']],
        [['river', 'नदी'], ['ever', 'हमेशा']],
        [['witches', 'चुड़ैलें'], ['ditches', 'खाइयाँ']],
        [['cattle', 'मवेशी'], ['battle', 'लड़ाई']],
        [['rain', 'बारिश'], ['plain', 'मैदान']],
      ],
    },
    {
      type: 'pick',
      title: ['Describing words: choose the words that describe something in the poem (example: painted).', 'विशेषण: कविता में किसी चीज़ के बारे में बताने वाले शब्द चुनो (जैसे: painted)।'],
      options: [['painted', 'रंगे हुए'], ['bridges', 'पुल'], ['green', 'हरा'], ['whistle', 'सीटी बजाना'], ['thick', 'घना'], ['tramp', 'आवारा'], ['driving', 'तेज़ (बारिश)'], ['mill', 'चक्की']],
      answers: [0, 2, 4, 6],
    },
    {
      type: 'fill',
      title: ['Fill in the blanks with the given words: wink, battle, fairies, glimpse, through.', 'दिए गए शब्दों से रिक्त स्थान भरो: wink, battle, fairies, glimpse, through.'],
      bank: ['Fairies', 'through', 'battle', 'wink', 'glimpse'],
      items: [
        { q: ['___ are imaginary things or persons.', '___ काल्पनिक चीज़ें या प्राणी हैं।'], a: 'Fairies' },
        { q: ['Once I was passing ___ the dense forest.', 'एक बार मैं घने जंगल ___ गुज़र रहा था।'], a: 'through' },
        { q: ['After a long ___ we got freedom.', 'एक लंबी ___ के बाद हमें आज़ादी मिली।'], a: 'battle' },
        { q: ['The thief went out of sight in the ___ of an eye.', 'चोर पलक ___ में आँखों से ओझल हो गया।'], a: 'wink' },
        { q: ['We saw a ___ of the moon on a cloudy night.', 'बादलों वाली रात में हमें चाँद की एक ___ दिखी।'], a: 'glimpse' },
      ],
    },
    {
      type: 'mcq',
      title: ['Add "ing": choose the right spelling.', '"ing" जोड़ो: सही वर्तनी चुनो।'],
      items: [
        { q: ['swim + ing', 'तैरना'], options: [['swiming', ''], ['swimming', '']], a: 1 },
        { q: ['cut + ing', 'काटना'], options: [['cutting', ''], ['cuting', '']], a: 0 },
        { q: ['run + ing', 'दौड़ना'], options: [['runing', ''], ['running', '']], a: 1 },
        { q: ['get + ing', 'पाना'], options: [['getting', ''], ['geting', '']], a: 0 },
        { q: ['sit + ing', 'बैठना'], options: [['siting', ''], ['sitting', '']], a: 1 },
        { q: ['put + ing', 'रखना'], options: [['putting', ''], ['puting', '']], a: 0 },
      ],
    },
    {
      type: 'match',
      title: ['Separate the root word: match each word with its root word.', 'मूल शब्द अलग करो: हर शब्द को उसके मूल शब्द से मिलाओ।'],
      pairs: [
        [['charging', ''], ['charge', 'चार्ज करना / धावा बोलना']],
        [['fairies', ''], ['fairy', 'परी']],
        [['driving', ''], ['drive', 'चलाना']],
        [['stringing', ''], ['string', 'पिरोना']],
        [['daisies', ''], ['daisy', 'डेज़ी फूल']],
        [['gathering', ''], ['gather', 'इकट्ठा करना']],
      ],
    },
    {
      type: 'fill',
      title: ['Choose the word that matches the description: sew, darted, toured, lead, frozen.', 'वर्णन से मेल खाता शब्द चुनो: sew, darted, toured, lead, frozen.'],
      bank: ['darted', 'frozen', 'lead', 'sew', 'toured'],
      items: [
        { q: ['A cat suddenly crossed the road in front of me: ___', 'एक बिल्ली अचानक मेरे सामने से सड़क पार कर गई: ___'], a: 'darted' },
        { q: ["It's so cold that even the water has become solid: ___", 'इतनी ठंड है कि पानी भी जम गया है: ___'], a: 'frozen' },
        { q: ["If you show the way, I'll follow: ___", 'अगर तुम रास्ता दिखाओ, तो मैं पीछे चलूँगा: ___'], a: 'lead' },
        { q: ["Leela's mother taught her how to use a needle and thread to make stitches: ___", 'लीला की माँ ने उसे सुई-धागे से टाँके लगाना सिखाया: ___'], a: 'sew' },
        { q: ['She travelled around the country promoting her book: ___', 'वह अपनी किताब के प्रचार के लिए पूरे देश में घूमी: ___'], a: 'toured' },
      ],
    },
    {
      type: 'task',
      title: ['From the poem, write words that are living, non-living, moving and stationary.', 'कविता से सजीव, निर्जीव, चलने वाली और स्थिर चीज़ों के शब्द लिखो।'],
      items: [
        {
          q: ['living / non-living / moving / stationary', 'सजीव / निर्जीव / चलने वाली / स्थिर'],
          a: ['living: horses, cattle, child, tramp, daisies\nnon-living: bridges, houses, stations, mill, road\nmoving: train, cart, horses, river\nstationary: bridges, houses, hedges, mill', 'सजीव: घोड़े, मवेशी, बच्चा, आवारा आदमी, डेज़ी फूल\nनिर्जीव: पुल, घर, स्टेशन, चक्की, सड़क\nचलने वाली: रेलगाड़ी, गाड़ी, घोड़े, नदी\nस्थिर: पुल, घर, बाड़, चक्की'],
        },
      ],
    },
    {
      type: 'pick',
      title: ['Vehicles: choose the words that go with a TRAIN.', 'वाहन: वे शब्द चुनो जो रेलगाड़ी से जुड़े हैं।'],
      options: [['compartment', 'डिब्बा'], ['runway', 'हवाई पट्टी'], ['berth', 'सोने की सीट'], ['steering wheel', 'स्टीयरिंग'], ['platform', 'प्लेटफ़ॉर्म'], ['cock-pit', 'कॉकपिट'], ['pantry-car', 'भोजन यान'], ['bonnet', 'बोनट'], ['bogies', 'डिब्बे'], ['wings', 'पंख'], ['whistle', 'सीटी'], ['sleeper', 'स्लीपर']],
      answers: [0, 2, 4, 6, 8, 10, 11],
    },
    {
      type: 'pick',
      title: ['Vehicles: choose the words that go with an AEROPLANE.', 'वाहन: वे शब्द चुनो जो हवाई जहाज़ से जुड़े हैं।'],
      options: [['runway', 'हवाई पट्टी'], ['platform', 'प्लेटफ़ॉर्म'], ['cock-pit', 'कॉकपिट'], ['bonnet', 'बोनट'], ['nose', 'आगे का हिस्सा'], ['airport', 'हवाई अड्डा'], ['gears', 'गियर'], ['tail', 'पूँछ'], ['wings', 'पंख'], ['berth', 'सोने की सीट']],
      answers: [0, 2, 4, 5, 7, 8],
    },
    {
      type: 'pick',
      title: ['Vehicles: choose the words that go with a CAR or BUS.', 'वाहन: वे शब्द चुनो जो कार या बस से जुड़े हैं।'],
      options: [['gears', 'गियर'], ['runway', 'हवाई पट्टी'], ['steering wheel', 'स्टीयरिंग'], ['tyres', 'टायर'], ['wings', 'पंख'], ['bonnet', 'बोनट'], ['pantry-car', 'भोजन यान'], ['petrol', 'पेट्रोल'], ['brakes', 'ब्रेक'], ['platform', 'प्लेटफ़ॉर्म']],
      answers: [0, 2, 3, 5, 7, 8],
    },
    {
      type: 'mcq',
      title: ['Grammar: Shiny, Timmy and Tricky\'s nests. Choose the right word (clean - cleaner - cleanest).', 'व्याकरण: शाइनी, टिमी और ट्रिकी के घोंसले। सही शब्द चुनो (clean - cleaner - cleanest)।'],
      items: [
        { q: ['Shiny has a big nest, but Timmy\'s nest is ___.', 'शाइनी का घोंसला बड़ा है, पर टिमी का घोंसला ___ है।'], options: [['big', ''], ['bigger', ''], ['biggest', '']], a: 1 },
        { q: ['Tricky has the ___ nest of them all. (soft)', 'ट्रिकी का घोंसला सबमें ___ है। (soft)'], options: [['soft', ''], ['softer', ''], ['softest', '']], a: 2 },
        { q: ['Timmy\'s nest is ___ than Shiny\'s. (warm)', 'टिमी का घोंसला शाइनी से ___ है। (warm)'], options: [['warmer', ''], ['warmest', ''], ['more warm', '']], a: 0 },
        { q: ['Tricky has the ___ nest. (beautiful)', 'ट्रिकी का घोंसला ___ है। (beautiful)'], options: [['beautifuller', ''], ['more beautiful', ''], ['most beautiful', '']], a: 2 },
        { q: ['Shiny has a strange nest, but Timmy\'s is ___.', 'शाइनी का घोंसला अजीब है, पर टिमी का ___ है।'], options: [['stranger', ''], ['strangest', ''], ['more strange', '']], a: 0 },
      ],
    },
    {
      type: 'task',
      title: ['Frame sentences comparing transport and animals. Example: A bicycle is faster than a bullock cart.', 'वाहनों और जानवरों की तुलना करते वाक्य बनाओ। उदाहरण: साइकिल बैलगाड़ी से तेज़ है।'],
      items: [
        { q: ['a train, a bullock cart, a bicycle, a plane (fast)', 'रेलगाड़ी, बैलगाड़ी, साइकिल, हवाई जहाज़ (तेज़)'], a: ['A train is faster than a bicycle. A plane is the fastest of all.', 'रेलगाड़ी साइकिल से तेज़ है। हवाई जहाज़ सबसे तेज़ है।'] },
        { q: ['a dog, a horse, an elephant, a whale (big)', 'कुत्ता, घोड़ा, हाथी, व्हेल (बड़ा)'], a: ['A horse is bigger than a dog. A whale is the biggest of all.', 'घोड़ा कुत्ते से बड़ा है। व्हेल सबसे बड़ी है।'] },
      ],
    },
    {
      type: 'task',
      title: ['Writing: write a letter to your friend describing the preparation for your picnic to Chitrakoot waterfall.', 'लेखन: चित्रकोट जलप्रपात की पिकनिक की तैयारी के बारे में अपने दोस्त को पत्र लिखो।'],
      items: [
        {
          q: ['Dear friend, ...', 'प्रिय मित्र, ...'],
          a: ['Dear Raju,\nWe are going for a picnic to Chitrakoot waterfall on Sunday. I have packed food, water bottles and a camera. Our teacher has booked a bus. Please come with us.\nYours lovingly,\nAmit', 'प्रिय राजू,\nहम रविवार को चित्रकोट जलप्रपात पिकनिक पर जा रहे हैं। मैंने खाना, पानी की बोतलें और कैमरा रख लिया है। हमारे शिक्षक ने एक बस बुक की है। कृपया हमारे साथ चलो।\nतुम्हारा प्यारा,\nअमित'],
        },
      ],
    },
    {
      type: 'task',
      title: ['Writing: describe three small plants near you (name, height, shape and colour of leaf, flowers, use).', 'लेखन: अपने आसपास के तीन छोटे पौधों का वर्णन करो (नाम, ऊँचाई, पत्ती का आकार और रंग, फूल, उपयोग)।'],
      items: [{ q: ['Tulsi', 'तुलसी'], a: ['Tulsi: about one foot high, small oval green leaves, tiny purple flowers; the leaves are used as medicine.', 'तुलसी: लगभग एक फ़ुट ऊँची, छोटी अंडाकार हरी पत्तियाँ, नन्हे बैंगनी फूल; पत्तियाँ दवा के काम आती हैं।'] }],
    },
    {
      type: 'qa',
      title: ['Listening: listen to the passage. In what order did Sheela see things on her way?', 'सुनना: अनुच्छेद सुनो। शीला ने रास्ते में चीज़ें किस क्रम में देखीं?'],
      passage: [
        "Sheela is going to her grandparents' house with her mother in a train. On her way she crossed many places. First of all she saw a train and then she saw many farms. As the train moved further she saw a small village and many cows and buffaloes. Then came a pond with many ducks. She saw children playing and some women carrying water. After that, she saw a school and a small bridge. And after that they came across a grove of mango trees. And before they reached the railway station she saw a bazaar.",
        'शीला अपनी माँ के साथ रेलगाड़ी से अपने दादा-दादी के घर जा रही है। रास्ते में वह कई जगहों से गुज़री। सबसे पहले उसने एक रेलगाड़ी देखी और फिर बहुत-से खेत देखे। रेलगाड़ी आगे बढ़ी तो उसने एक छोटा गाँव और कई गायें और भैंसें देखीं। फिर बहुत-सी बत्तखों वाला एक तालाब आया। उसने बच्चों को खेलते और कुछ औरतों को पानी ले जाते देखा। उसके बाद उसने एक स्कूल और एक छोटा पुल देखा। फिर वे आमों के एक बाग़ के पास से गुज़रे। और रेलवे स्टेशन पहुँचने से पहले उसने एक बाज़ार देखा।',
      ],
      items: [
        {
          q: ['Order of the things Sheela saw', 'शीला ने जो देखा उसका क्रम'],
          a: ['a train, farms, a village, cows and buffaloes, a pond with ducks, children playing, women carrying water, a school, a small bridge, a grove of mango trees, a bazaar', 'एक रेलगाड़ी, खेत, एक गाँव, गायें और भैंसें, बत्तखों वाला तालाब, खेलते बच्चे, पानी ले जाती औरतें, एक स्कूल, एक छोटा पुल, आमों का बाग़, एक बाज़ार'],
        },
      ],
    },
    {
      type: 'task',
      title: ['Role play (pair work): A asks for information, B answers. Use Where, When, How, Which, Why, What.', 'रोल प्ले (जोड़ी में): A जानकारी माँगे, B जवाब दे। Where, When, How, Which, Why, What का प्रयोग करो।'],
      items: [
        { q: ['A: May I know where you come from?', 'A: क्या मैं जान सकता हूँ कि तुम कहाँ से हो?'], a: ['B: Oh! Yes, I am from Bilaspur.', 'B: अरे हाँ, मैं बिलासपुर से हूँ।'] },
        { q: ['A: How do you come to school?', 'A: तुम स्कूल कैसे आते हो?'], a: ['B: I come to school by bicycle.', 'B: मैं साइकिल से स्कूल आता हूँ।'] },
      ],
    },
    {
      type: 'task',
      title: ['Project: make a list of words describing places. Proverb: "A bird in the hand is worth two in the bush."', 'परियोजना: जगहों का वर्णन करने वाले शब्दों की सूची बनाओ। कहावत: "हाथ की एक चिड़िया झाड़ी की दो चिड़ियों से बेहतर है।"'],
      items: [
        { q: ['Words describing places', 'जगहों का वर्णन करने वाले शब्द'], a: ['crowded, quiet, beautiful, green, dusty, busy, peaceful', 'भीड़-भरा, शांत, सुंदर, हरा-भरा, धूल भरा, व्यस्त, सुकून भरा'] },
        { q: ['Use the proverb in a sentence.', 'कहावत को वाक्य में प्रयोग करो।'], a: ['Take the job you have been offered; a bird in the hand is worth two in the bush.', 'जो नौकरी मिल रही है वह ले लो; हाथ की एक चिड़िया झाड़ी की दो चिड़ियों से बेहतर है।'] },
      ],
    },
  ],
  'class8-7': [
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['Why is Naranbhai Karangia called the "Peacock Doctor"?', 'नारनभाई करंगिया को "मोर डॉक्टर" क्यों कहा जाता है?'], a: ['He rushes to ill or injured peacocks with medicines and bandages, treats them, and feeds them when food is scarce.', 'वह बीमार या घायल मोरों के पास दवाइयाँ और पट्टियाँ लेकर दौड़ता है, उनका इलाज करता है, और खाने की कमी में उन्हें खिलाता है।'] },
        { q: ['What is the Advanced Locality Management Programme?', 'एडवांस्ड लोकैलिटी मैनेजमेंट कार्यक्रम क्या है?'], a: ['A Mumbai municipality programme in which residents separate wet and dry garbage; wet garbage becomes compost and ragpickers take the dry garbage.', 'मुंबई नगर पालिका का एक कार्यक्रम, जिसमें निवासी गीला और सूखा कचरा अलग करते हैं; गीले कचरे से खाद बनती है और कूड़ा बीनने वाले सूखा कचरा ले जाते हैं।'] },
        { q: ['How has Sharma helped clean up his street?', 'शर्मा ने अपनी गली साफ़ करने में कैसे मदद की?'], a: ['He implemented the Advanced Locality Management programme with about 600 residents, and his lane became green and lovely.', 'उसने लगभग 600 निवासियों के साथ यह कार्यक्रम लागू किया, और उसकी गली हरी-भरी और सुंदर बन गई।'] },
        { q: ["How did the singer Abhijeet help the couple and the accident victim?", 'गायक अभिजीत ने दंपति और दुर्घटना के शिकार व्यक्ति की मदद कैसे की?'], a: ['He sent the couple to the hospital with his driver, took the injured man there, and made the doctors admit him.', 'उसने दंपति को अपने ड्राइवर के साथ अस्पताल भेजा, घायल आदमी को वहाँ ले गया, और डॉक्टरों से उसे भर्ती करवाया।'] },
        { q: ['What message do you get from "The Noteworthy Singer"?', '"द नोटवर्दी सिंगर" से क्या संदेश मिलता है?'], a: ["Don't hesitate to help road accident victims; you can save a life.", 'सड़क दुर्घटना के शिकार लोगों की मदद करने में मत हिचकिचाओ; तुम एक जान बचा सकते हो।'] },
        { q: ["Why does Vasant Kalbag promote kindness among people?", 'वसंत कालबाग लोगों में दयालुता क्यों फैलाते हैं?'], a: ['He believes small kind acts help others and also improve our own health; if people were kind, the world would be a better place.', 'उनका मानना है कि छोटे-छोटे भले काम दूसरों की मदद करते हैं और हमारी अपनी सेहत भी सुधारते हैं; लोग दयालु हों तो दुनिया बेहतर बनेगी।'] },
        { q: ['How was Amala Mary able to prevent the rail tragedy?', 'अमला मैरी रेल दुर्घटना कैसे रोक पाई?'], a: ['She ran towards the train waving her red sari, so the driver slowed down and stopped before the landslide.', 'वह अपनी लाल साड़ी लहराते हुए रेलगाड़ी की ओर दौड़ी, जिससे ड्राइवर ने गाड़ी धीमी की और भूस्खलन से पहले रोक दी।'] },
        { q: ['What is the Kalpana Chawla award given for?', 'कल्पना चावला पुरस्कार किसके लिए दिया जाता है?'], a: ['For courage and daring enterprise.', 'साहस और हिम्मत भरे काम के लिए।'] },
      ],
    },
    {
      type: 'match',
      title: ["The heroes' timely actions: match each step with its result.", 'नायकों के समय पर किए काम: हर क़दम को उसके नतीजे से मिलाओ।'],
      pairs: [
        [['Set up centres in villages for birds', 'गाँवों में पक्षियों के लिए केंद्र बनाए'], ['Peacocks were fed and looked after', 'मोरों को खाना और देखभाल मिली']],
        [['Told the driver to take the injured man to hospital', 'घायल को अस्पताल ले जाने को कहा'], ["The injured man's life was saved", 'घायल आदमी की जान बची']],
        [['Encouraged people to be kind', 'लोगों को दयालु बनने को प्रेरित किया'], ['A network of kind members grew', 'दयालु लोगों का एक नेटवर्क बना']],
        [['Implemented Advanced Locality Management', 'एडवांस्ड लोकैलिटी मैनेजमेंट लागू किया'], ['The lane became green and clean', 'गली हरी-भरी और साफ़ बन गई']],
        [['Stopped the train', 'रेलगाड़ी रुकवाई'], ['Many passengers were saved', 'कई यात्री बच गए']],
      ],
    },
    {
      type: 'fill',
      title: ['Complete the sentences with the words in brackets.', 'कोष्ठक के शब्दों से वाक्य पूरे करो।'],
      bank: ['learnt', 'rushed', 'returning', 'gathered', 'attended', 'leave', 'better', 'Inspired', 'overflowed', 'worked', 'running', 'scrambled'],
      items: [
        { q: ['When Karangia ___ that a peacock was ill, he rushed to the bird on his motorcycle.', 'जब करंगिया को ___ कि एक मोर बीमार है, वह मोटरसाइकिल से उसके पास दौड़ा।'], a: 'learnt' },
        { q: ['Abhijeet was ___ home when he saw people gathered around a man.', 'अभिजीत घर ___ रहा था जब उसने एक आदमी के आसपास लोगों को इकट्ठा देखा।'], a: 'returning' },
        { q: ['After making sure the man was being ___ to, he took leave for home at 1 am.', 'यह पक्का करने के बाद कि आदमी का इलाज ___ रहा है, वह रात 1 बजे घर के लिए निकला।'], a: 'attended' },
        { q: ['If only people were kind to one another, the world would be a ___ place.', 'अगर लोग एक-दूसरे पर दयालु होते, तो दुनिया एक ___ जगह होती।'], a: 'better' },
        { q: ['___ by this simple but powerful idea, he started his own organisation.', 'इस सरल पर ताक़तवर विचार से ___ होकर उसने अपनी संस्था शुरू की।'], a: 'Inspired' },
        { q: ['The garbage bins ___; street lights never worked.', 'कूड़ेदान ___ रहते थे; स्ट्रीट लाइटें कभी नहीं जलती थीं।'], a: 'overflowed' },
        { q: ['Amala started ___ on the embankment towards the train.', 'अमला तटबंध पर रेलगाड़ी की ओर ___ लगी।'], a: 'running' },
        { q: ['Then, ___ down a muddy path onto the tracks, she continued to run.', 'फिर कीचड़ भरे रास्ते से पटरियों पर ___ उतरकर वह दौड़ती रही।'], a: 'scrambled' },
      ],
    },
    {
      type: 'match',
      title: ['Professions: match the clue with the word.', 'व्यवसाय: संकेत को सही शब्द से मिलाओ।'],
      pairs: [
        [['One who heals', 'जो इलाज करे'], ['doctor', 'डॉक्टर']],
        [['One who runs a business', 'जो व्यापार चलाए'], ['businessman', 'व्यापारी']],
        [['One who takes care of a business', 'जो व्यापार की देखरेख करे'], ['manager', 'प्रबंधक']],
        [['One who sings for films', 'जो फ़िल्मों के लिए गाए'], ['playback singer', 'पार्श्व गायक']],
        [['One who designs an internet site', 'जो वेबसाइट बनाए'], ['webmaster', 'वेबमास्टर']],
        [['One who cooks in a hotel', 'जो होटल में खाना पकाए'], ['chef', 'रसोइया']],
        [['One who collects waste', 'जो कचरा इकट्ठा करे'], ['rag-picker', 'कूड़ा बीनने वाला']],
      ],
    },
    {
      type: 'task',
      title: ['Grammar: write what you enjoy / do not enjoy doing. Example: I enjoy playing with dolls.', 'व्याकरण: लिखो तुम्हें क्या करना अच्छा लगता है / नहीं लगता। उदाहरण: I enjoy playing with dolls.'],
      items: [
        { q: ['making kites, flying paper planes, climbing up trees, teasing puppies, studying, cooking food...', 'पतंग बनाना, काग़ज़ के हवाई जहाज़ उड़ाना, पेड़ पर चढ़ना, पिल्लों को छेड़ना, पढ़ना, खाना पकाना...'], a: ['I enjoy making kites. I enjoy flying paper planes. I do not enjoy teasing puppies.', 'मुझे पतंग बनाना अच्छा लगता है। मुझे काग़ज़ के हवाई जहाज़ उड़ाना अच्छा लगता है। मुझे पिल्लों को छेड़ना अच्छा नहीं लगता।'] },
        { q: ['Change it: I enjoy playing with dolls. → I enjoy to play with dolls?', 'बदलो: I enjoy playing with dolls. → I enjoy to play with dolls?'], a: ['After "enjoy" we use the -ing form: "I enjoy playing" is correct; "I enjoy to play" is not used. We can say "I like to play" or "I like playing".', '"enjoy" के बाद -ing रूप आता है: "I enjoy playing" सही है; "I enjoy to play" नहीं बोला जाता। "I like to play" या "I like playing" कह सकते हैं।'] },
      ],
    },
    {
      type: 'task',
      title: ['Writing: in groups, write a story from these details and give it a title: Charu (10) and Chinmay (6) stop a thief on a Mumbai local train.', 'लेखन: समूह में इन बातों से एक कहानी लिखो और शीर्षक दो: चारु (10) और चिन्मय (6) मुंबई लोकल ट्रेन में एक चोर को रोकते हैं।'],
      items: [
        {
          q: ['Title and story', 'शीर्षक और कहानी'],
          a: ['Brave Little Heroes\nCharu, Chinmay and their mother Neha boarded the ladies compartment of a Mumbai local train. Two stations later, some men entered, and one of them threatened their mother with a knife and tried to take her handbag. The children had learnt karate, so they did not let the thief take the bag. Charu bit the thief, and he hurt Chinmay on the face. When the train slowed down, the thieves jumped out without the bag. Charu and Chinmay received bravery awards.', 'नन्हे बहादुर\nचारु, चिन्मय और उनकी माँ नेहा मुंबई लोकल ट्रेन के महिला डिब्बे में चढ़े। दो स्टेशन बाद कुछ आदमी अंदर आए, और उनमें से एक ने चाकू दिखाकर उनकी माँ का हैंडबैग छीनने की कोशिश की। बच्चों ने कराटे सीखा था, इसलिए उन्होंने चोर को बैग नहीं ले जाने दिया। चारु ने चोर को काट लिया, और उसने चिन्मय के चेहरे पर चोट पहुँचाई। ट्रेन धीमी हुई तो चोर बिना बैग के कूद गए। चारु और चिन्मय को वीरता पुरस्कार मिले।'],
        },
      ],
    },
    {
      type: 'task',
      title: ['Writing: write a formal letter to the editor pointing out the errors in the news "India Wins the World Cup" (India scored 183, not 217; Kapil Dev was the captain, not Amarnath).', 'लेखन: "भारत ने विश्व कप जीता" समाचार की ग़लतियाँ बताते हुए संपादक को औपचारिक पत्र लिखो (भारत ने 217 नहीं, 183 रन बनाए; कप्तान अमरनाथ नहीं, कपिल देव थे)।'],
      items: [
        {
          q: ['The Editor, Chhattisgarh Daily, Raipur', 'संपादक, छत्तीसगढ़ डेली, रायपुर'],
          a: ['Sir/Madam,\nThrough your readers\' opinions page, I would like to point out errors in the news "India Wins the World Cup". India was bowled out for 183 runs, not 217. Also, the Indian captain was Kapil Dev, not Amarnath. Please correct these errors.\nYours truly,\nRahul', 'महोदय/महोदया,\nआपके पाठकों के विचार वाले पन्ने के ज़रिए मैं "भारत ने विश्व कप जीता" समाचार की ग़लतियाँ बताना चाहता हूँ। भारत 217 नहीं, 183 रन पर आउट हुआ था। साथ ही, भारतीय कप्तान अमरनाथ नहीं, कपिल देव थे। कृपया ये ग़लतियाँ सुधारें।\nभवदीय,\nराहुल'],
        },
      ],
    },
    {
      type: 'qa',
      title: ['Listening: listen to the passage about Walter Hudson and answer.', 'सुनना: वॉल्टर हडसन के बारे में अनुच्छेद सुनो और उत्तर दो।'],
      passage: [
        'Walter Hudson, who had died at Hampstead, New York aged 46, was once listed in the Guinness Book of World Records as the heaviest man on earth. Walter Hudson was born at Brooklyn in 1945. In 1970 when his family moved to Hampstead, he was transported by motor-car. He then weighed 266 kg and broke the seat. He could not come out of it.\nHe generally started his day with a breakfast of two pounds of meat, a dozen eggs, a loaf of bread, jam and coffee. For lunch, Hudson favoured four very big bowls of rice, 8 boxes of fried potatoes, six large bottles of cola and four double cheese burgers. For dinner, he would eat six roasted corns and another six or seven baked potatoes. Between these meals he would eat a chicken or two, followed by noodles, six bottles of soda, sandwiches and ice-cream.',
        'वॉल्टर हडसन, जिनकी 46 साल की उम्र में हैम्पस्टेड, न्यूयॉर्क में मृत्यु हुई, एक समय गिनीज़ बुक ऑफ़ वर्ल्ड रिकॉर्ड्स में धरती के सबसे भारी आदमी के रूप में दर्ज थे। वॉल्टर हडसन का जन्म 1945 में ब्रुकलिन में हुआ। 1970 में जब उनका परिवार हैम्पस्टेड गया, तो उन्हें मोटरकार से ले जाया गया। तब उनका वज़न 266 किलो था और उन्होंने सीट तोड़ दी। वे उसमें से बाहर नहीं निकल पाए।\nवे आमतौर पर दिन की शुरुआत दो पाउंड मांस, एक दर्जन अंडे, एक डबलरोटी, जैम और कॉफ़ी के नाश्ते से करते थे। दोपहर के खाने में हडसन को चावल के चार बहुत बड़े कटोरे, तली आलू के 8 डिब्बे, कोला की छह बड़ी बोतलें और चार डबल चीज़ बर्गर पसंद थे। रात के खाने में वे छह भुने भुट्टे और छह-सात बेक किए आलू खाते थे। इन खानों के बीच वे एक-दो मुर्गे, फिर नूडल्स, सोडा की छह बोतलें, सैंडविच और आइसक्रीम खाते थे।',
      ],
      items: [
        { q: ["Hudson's breakfast", 'हडसन का नाश्ता'], a: ['two pounds of meat, a dozen eggs, a loaf of bread, jam and coffee', 'दो पाउंड मांस, एक दर्जन अंडे, एक डबलरोटी, जैम और कॉफ़ी'] },
        { q: ["Hudson's lunch", 'हडसन का दोपहर का खाना'], a: ['four big bowls of rice, 8 boxes of fried potatoes, six bottles of cola and four double cheese burgers', 'चावल के चार बड़े कटोरे, तली आलू के 8 डिब्बे, कोला की छह बोतलें और चार डबल चीज़ बर्गर'] },
        { q: ["Hudson's dinner", 'हडसन का रात का खाना'], a: ['six roasted corns and six or seven baked potatoes', 'छह भुने भुट्टे और छह-सात बेक किए आलू'] },
        { q: ['When was Walter Hudson born?', 'वॉल्टर हडसन का जन्म कब हुआ?'], a: ['In 1945, at Brooklyn.', '1945 में, ब्रुकलिन में।'] },
        { q: ['What is special about Hudson?', 'हडसन में क्या ख़ास है?'], a: ['He was once listed in the Guinness Book as the heaviest man on earth.', 'वे एक समय गिनीज़ बुक में धरती के सबसे भारी आदमी के रूप में दर्ज थे।'] },
        { q: ['At what age did Hudson die?', 'हडसन की मृत्यु किस उम्र में हुई?'], a: ['At the age of 46.', '46 साल की उम्र में।'] },
        { q: ['What happened to Hudson and the motor car when the family moved to Hampstead?', 'परिवार के हैम्पस्टेड जाने पर हडसन और मोटरकार के साथ क्या हुआ?'], a: ['He weighed 266 kg, broke the seat and could not come out of it.', 'उनका वज़न 266 किलो था, उन्होंने सीट तोड़ दी और उसमें से बाहर नहीं निकल पाए।'] },
      ],
    },
    {
      type: 'mcq',
      title: ['Speaking: guess from the clues. Who or what am I?', 'बोलना: संकेतों से पहचानो। मैं कौन / क्या हूँ?'],
      items: [
        { q: ['White colour, long tail, eats mice. What am I?', 'सफ़ेद रंग, लंबी पूँछ, चूहे खाती हूँ। मैं क्या हूँ?'], options: [['a cat', 'बिल्ली'], ['a dog', 'कुत्ता'], ['a cow', 'गाय']], a: 0 },
        { q: ['Tallest mountain, very cold, situated in Nepal. Who am I?', 'सबसे ऊँचा पहाड़, बहुत ठंडा, नेपाल में। मैं कौन हूँ?'], options: [['Mount Abu', 'माउंट आबू'], ['Mount Everest', 'माउंट एवरेस्ट'], ['Kanchenjunga', 'कंचनजंगा']], a: 1 },
        { q: ['Ship of the desert, can live without water for up to a month. Who am I?', 'रेगिस्तान का जहाज़, महीने भर बिना पानी रह सकता हूँ। मैं कौन हूँ?'], options: [['a horse', 'घोड़ा'], ['a camel', 'ऊँट'], ['an elephant', 'हाथी']], a: 1 },
        { q: ['Small in size, music comes out of it, children like listening to it. What is it?', 'आकार में छोटा, इससे संगीत निकलता है, बच्चों को सुनना पसंद है। यह क्या है?'], options: [['a radio', 'रेडियो'], ['a clock', 'घड़ी'], ['a lamp', 'लैंप']], a: 0 },
        { q: ['I go from house to house and deliver letters. Who am I?', 'मैं घर-घर जाकर चिट्ठियाँ बाँटता हूँ। मैं कौन हूँ?'], options: [['a milkman', 'दूधवाला'], ['a postman', 'डाकिया'], ['a teacher', 'शिक्षक']], a: 1 },
        { q: ['I cure animals and wear a white coat. Who am I?', 'मैं जानवरों का इलाज करता हूँ और सफ़ेद कोट पहनता हूँ। मैं कौन हूँ?'], options: [['a vet (animal doctor)', 'पशु चिकित्सक'], ['a farmer', 'किसान'], ['a cook', 'रसोइया']], a: 0 },
      ],
    },
    {
      type: 'task',
      title: ['Project: find a student in your school with qualities you read about in the lesson, and write about her/him.', 'परियोजना: अपने स्कूल में पाठ में पढ़े गुणों वाला कोई विद्यार्थी ढूँढो और उसके बारे में लिखो।'],
      items: [{ q: ['A kind or brave student', 'एक दयालु या बहादुर विद्यार्थी'], a: ['Sunita of class 8 helps younger children cross the road every day after school. She is kind and responsible.', 'कक्षा 8 की सुनीता रोज़ स्कूल के बाद छोटे बच्चों को सड़क पार कराती है। वह दयालु और ज़िम्मेदार है।'] }],
    },
  ],

  'class8-8': [
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ["Gandhiji's sole companions at high school were his books and lessons. Why?", 'हाई स्कूल में गांधीजी के एकमात्र साथी उनकी किताबें और पाठ क्यों थे?'], a: ['He was very shy and avoided all company; he could not bear to talk to anybody.', 'वे बहुत शर्मीले थे और सबसे दूर रहते थे; वे किसी से बात करना सहन नहीं कर पाते थे।'] },
        { q: ['What made Gandhiji do his lessons though his mind was not on them?', 'मन न लगने पर भी गांधीजी अपने पाठ क्यों करते थे?'], a: ['He disliked being taken to task by his teacher as much as he disliked deceiving him.', 'उन्हें शिक्षक की डाँट उतनी ही नापसंद थी जितना उन्हें धोखा देना।'] },
        { q: ['How did the book and pictures of Shravana affect Gandhiji?', 'श्रवण की किताब और चित्रों का गांधीजी पर क्या असर पड़ा?'], a: ['They left an indelible impression; he felt Shravana\'s devotion to his parents was an example to copy.', 'उन्होंने गहरी छाप छोड़ी; उन्हें लगा कि माता-पिता के प्रति श्रवण की भक्ति अपनाने लायक़ उदाहरण है।'] },
        { q: ['Which ideal did the play Harischandra inspire in him?', 'हरिश्चंद्र नाटक ने उनमें कौन-सा आदर्श जगाया?'], a: ['To follow truth and go through all the ordeals that Harischandra went through.', 'सच का पालन करना और हरिश्चंद्र की तरह सारी कठिनाइयाँ सहना।'] },
        { q: ['Why did Gandhiji weep piteously?', 'गांधीजी फूट-फूटकर क्यों रोते थे?'], a: ['The thought of Harischandra\'s sufferings for truth made him weep.', 'सच के लिए हरिश्चंद्र के कष्टों के बारे में सोचकर वे रो पड़ते थे।'] },
        { q: ['What was the wrong notion that he had?', 'उनकी कौन-सी ग़लत धारणा थी?'], a: ['That gymnastics had nothing to do with education, and that good handwriting was not a necessary part of education.', 'कि व्यायाम का शिक्षा से कोई लेना-देना नहीं, और अच्छी लिखावट शिक्षा का ज़रूरी हिस्सा नहीं।'] },
        { q: ['What is the importance of good handwriting?', 'अच्छी लिखावट का क्या महत्व है?'], a: ['Good handwriting is a necessary part of education; bad handwriting is a sign of an imperfect education.', 'अच्छी लिखावट शिक्षा का ज़रूरी हिस्सा है; ख़राब लिखावट अधूरी शिक्षा की निशानी है।'] },
      ],
    },
    {
      type: 'pick',
      title: ["Think of the name 'Mahatma Gandhi'. Which words come to your mind? Choose them.", "'महात्मा गांधी' नाम सोचो। कौन-से शब्द मन में आते हैं? उन्हें चुनो।"],
      options: [['non-violence', 'अहिंसा'], ['truth', 'सत्य'], ['war', 'युद्ध'], ['charkha', 'चरखा'], ['freedom', 'आज़ादी'], ['greed', 'लालच'], ['simplicity', 'सादगी'], ['Bapu', 'बापू']],
      answers: [0, 1, 3, 4, 6, 7],
    },
    {
      type: 'match',
      title: ['Prefix, root word and suffix: match the word with its parts (re + collect + ion = recollection).', 'उपसर्ग, मूल शब्द और प्रत्यय: शब्द को उसके हिस्सों से मिलाओ (re + collect + ion = recollection)।'],
      pairs: [
        [['recollection', 'याद'], ['re + collect + ion', '']],
        [['unhappiness', 'दुख'], ['un + happy + ness', '']],
        [['disagreement', 'असहमति'], ['dis + agree + ment', '']],
        [['impossible', 'असंभव'], ['im + possible', '']],
        [['teacher', 'शिक्षक'], ['teach + er', '']],
      ],
    },
    {
      type: 'task',
      title: ['Use a dictionary and frame sentences: suburban, mediocre, pilgrimage, rebuke, indelible, false notion.', 'शब्दकोश देखकर वाक्य बनाओ: suburban, mediocre, pilgrimage, rebuke, indelible, false notion.'],
      items: [
        { q: ['suburban', 'उपनगरीय'], a: ['He lives in a suburban area of Raipur.', 'वह रायपुर के एक उपनगरीय इलाक़े में रहता है।'] },
        { q: ['mediocre', 'साधारण'], a: ['He was a mediocre student but worked hard.', 'वह एक साधारण छात्र था पर मेहनत करता था।'] },
        { q: ['pilgrimage', 'तीर्थयात्रा'], a: ['My grandparents went on a pilgrimage to Puri.', 'मेरे दादा-दादी पुरी की तीर्थयात्रा पर गए।'] },
        { q: ['rebuke', 'डाँटना'], a: ['The teacher did not rebuke him for coming late.', 'शिक्षक ने देर से आने पर उसे नहीं डाँटा।'] },
        { q: ['indelible', 'अमिट'], a: ['The trip left an indelible mark on my mind.', 'उस यात्रा ने मेरे मन पर अमिट छाप छोड़ी।'] },
        { q: ['false notion', 'ग़लत धारणा'], a: ['It is a false notion that girls cannot play cricket.', 'यह एक ग़लत धारणा है कि लड़कियाँ क्रिकेट नहीं खेल सकतीं।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Grammar: fill in the blanks with "used to" and the word in brackets.', 'व्याकरण: कोष्ठक के शब्द के साथ "used to" से रिक्त स्थान भरो।'],
      bank: ['used to come', 'used to play', 'used to go', 'used to drink', 'used to learn'],
      items: [
        { q: ['Govinda ___ late to class. (come)', 'गोविंदा कक्षा में देर से ___ था। (come)'], a: 'used to come' },
        { q: ['Last year, we ___ cricket every Saturday, but now we have classes on Saturdays. (play)', 'पिछले साल हम हर शनिवार क्रिकेट ___ थे, पर अब शनिवार को कक्षाएँ होती हैं। (play)'], a: 'used to play' },
        { q: ['In the past, people ___ to theatres for watching movies. (go)', 'पहले लोग फ़िल्म देखने सिनेमाघर ___ थे। (go)'], a: 'used to go' },
        { q: ['When I was a child, I never ___ tea or coffee, but now I like both. (drink)', 'बचपन में मैं कभी चाय या कॉफ़ी नहीं ___ था, पर अब दोनों पसंद हैं। (drink)'], a: 'used to drink' },
        { q: ['He ___ music when he was young. (learn)', 'जवानी में वह संगीत ___ था। (learn)'], a: 'used to learn' },
      ],
    },
    {
      type: 'task',
      title: ['Grammar: write sentences with "used to" about things you did in your childhood but don\'t do now.', 'व्याकरण: बचपन में किए पर अब न किए जाने वाले कामों पर "used to" वाले वाक्य लिखो।'],
      items: [{ q: ['used to ...', 'used to ...'], a: ['I used to cry for toys. I used to sleep with my grandmother.', 'मैं खिलौनों के लिए रोता था। मैं दादी के साथ सोता था।'] }],
    },
    {
      type: 'qa',
      title: ['Grammar: frame questions using What, Where, When, Why, How.', 'व्याकरण: What, Where, When, Why, How से प्रश्न बनाओ।'],
      items: [
        { q: ['Gandhiji enjoyed the affection of his teachers.', 'गांधीजी को अपने शिक्षकों का स्नेह मिला।'], a: ['What did Gandhiji enjoy?', 'गांधीजी को क्या मिला?'] },
        { q: ['I left home at 8 pm.', 'मैं रात 8 बजे घर से निकला।'], a: ['When did you leave home?', 'तुम घर से कब निकले?'] },
        { q: ['I arrived at Bastar at 9 am.', 'मैं सुबह 9 बजे बस्तर पहुँचा।'], a: ['Where did you arrive at 9 am?', 'तुम सुबह 9 बजे कहाँ पहुँचे?'] },
        { q: ['The match began at 11 am.', 'मैच सुबह 11 बजे शुरू हुआ।'], a: ['When did the match begin?', 'मैच कब शुरू हुआ?'] },
        { q: ['The class for the day ended at 5.30 pm.', 'दिन की कक्षा शाम 5.30 बजे ख़त्म हुई।'], a: ['When did the class end?', 'कक्षा कब ख़त्म हुई?'] },
        { q: ["We bought a gift for my friend's birthday at 6 pm.", 'हमने शाम 6 बजे दोस्त के जन्मदिन का उपहार ख़रीदा।'], a: ['Why did you buy a gift?', 'तुमने उपहार क्यों ख़रीदा?'] },
        { q: ['We went to the market by taxi.', 'हम टैक्सी से बाज़ार गए।'], a: ['How did you go to the market?', 'तुम बाज़ार कैसे गए?'] },
        { q: ['The taxi-man charged Rs 1000 for finding a hotel.', 'टैक्सी वाले ने होटल ढूँढने के 1000 रुपये लिए।'], a: ['How much did the taxi-man charge for finding a hotel?', 'टैक्सी वाले ने होटल ढूँढने के कितने पैसे लिए?'] },
      ],
    },
    {
      type: 'task',
      title: ['Writing: prepare a write-up on the extract "School Life" (Swaminathan and his father): its main thoughts and your opinion.', 'लेखन: "School Life" अंश (स्वामीनाथन और उसके पिता) पर लेख लिखो: मुख्य बातें और तुम्हारी राय।'],
      passage: [
        "'How many days is it since you have touched your book?' father asked as he blew off the fine layer of dust on Swaminathan's books, and cleared the web that an industrious spider was weaving between a corner of the table and the pile of books.\nSwaminathan viewed this question as a gross breach of promise. 'Should I read even when I have no school?'\n'Do you think you have passed B.A.?' Father asked.\n'I mean, father, when the school is closed, when there is no exam, even then should I read?'\n'What a question! You must read.'\n'But father, you said before the examinations that I needn't read after they were over. Even Rajam does not read.'",
        "'तुम्हें अपनी किताब छुए कितने दिन हो गए?' पिता ने स्वामीनाथन की किताबों पर जमी धूल की पतली परत फूँकते हुए और मेज़ के कोने और किताबों के ढेर के बीच एक मेहनती मकड़ी के बुने जाले को हटाते हुए पूछा।\nस्वामीनाथन को यह सवाल वादे का बड़ा उल्लंघन लगा। 'क्या स्कूल न हो तब भी मुझे पढ़ना चाहिए?'\n'क्या तुम्हें लगता है कि तुमने बी.ए. पास कर लिया?' पिता ने पूछा।\n'मेरा मतलब है, पिताजी, जब स्कूल बंद हो, कोई परीक्षा न हो, तब भी क्या मुझे पढ़ना चाहिए?'\n'यह भी कोई सवाल है! तुम्हें पढ़ना ही चाहिए।'\n'पर पिताजी, आपने परीक्षा से पहले कहा था कि उनके ख़त्म होने के बाद मुझे पढ़ने की ज़रूरत नहीं। राजम भी नहीं पढ़ता।'",
      ],
      items: [
        {
          q: ['Write-up', 'लेख'],
          a: ['Swaminathan has not touched his books for many days during his holidays, and his father wants him to read. Swaminathan feels that he need not read when there is no school or exam. In my opinion, reading should be a daily habit, not just for exams, because it keeps our mind active.', 'छुट्टियों में स्वामीनाथन ने कई दिनों से अपनी किताबें नहीं छुईं, और उसके पिता चाहते हैं कि वह पढ़े। स्वामीनाथन को लगता है कि स्कूल या परीक्षा न हो तो पढ़ने की ज़रूरत नहीं। मेरी राय में पढ़ना रोज़ की आदत होनी चाहिए, सिर्फ़ परीक्षा के लिए नहीं, क्योंकि इससे दिमाग़ सक्रिय रहता है।'],
        },
      ],
    },
    {
      type: 'qa',
      title: ['Listening: listen to the passage about Subhash Chandra Bose and complete the facts.', 'सुनना: सुभाष चंद्र बोस के बारे में अनुच्छेद सुनो और तथ्य पूरे करो।'],
      passage: [
        'Subhash Chandra Bose, popularly known as Netaji, was one of the greatest freedom fighters of India. He was born in Cuttack (Orissa) in 1897. Bose was educated at the universities of Calcutta and Cambridge. He returned to India in 1920 and became active in the non-co-operation movement of Gandhiji. In 1924 he was arrested by the British and he spent most of the next few years in jail. In 1938 he was elected the president of the Indian National Congress. He was again arrested in 1940, but this time he escaped to Germany. Then he raised his Indian National Army. In 1943, with the support of the Japanese his army advanced from Rangoon into India but was defeated. Nothing is known for certain about how Netaji met his end, but it is reported that in 1945 he was killed in a plane crash in Taiwan.',
        'सुभाष चंद्र बोस, जिन्हें नेताजी के नाम से जाना जाता है, भारत के सबसे महान स्वतंत्रता सेनानियों में से एक थे। उनका जन्म 1897 में कटक (उड़ीसा) में हुआ। बोस ने कलकत्ता और कैम्ब्रिज विश्वविद्यालयों में पढ़ाई की। वे 1920 में भारत लौटे और गांधीजी के असहयोग आंदोलन में सक्रिय हो गए। 1924 में अंग्रेज़ों ने उन्हें गिरफ़्तार किया और अगले कुछ साल ज़्यादातर उन्होंने जेल में बिताए। 1938 में वे भारतीय राष्ट्रीय कांग्रेस के अध्यक्ष चुने गए। 1940 में वे फिर गिरफ़्तार हुए, पर इस बार वे जर्मनी भाग गए। फिर उन्होंने अपनी आज़ाद हिंद फ़ौज बनाई। 1943 में जापानियों की मदद से उनकी सेना रंगून से भारत की ओर बढ़ी पर हार गई। नेताजी का अंत कैसे हुआ, यह पक्का पता नहीं, पर बताया जाता है कि 1945 में ताइवान में एक विमान दुर्घटना में उनकी मृत्यु हुई।',
      ],
      items: [
        { q: ['Birth: place and year', 'जन्म: जगह और साल'], a: ['Cuttack (Orissa), 1897', 'कटक (उड़ीसा), 1897'] },
        { q: ['Educated in universities', 'किन विश्वविद्यालयों में पढ़े'], a: ['Calcutta and Cambridge', 'कलकत्ता और कैम्ब्रिज'] },
        { q: ['1920', '1920'], a: ['Returned to India and joined the non-co-operation movement', 'भारत लौटे और असहयोग आंदोलन से जुड़े'] },
        { q: ['Arrested by the British', 'अंग्रेज़ों ने गिरफ़्तार किया'], a: ['1924, and again in 1940', '1924, और फिर 1940 में'] },
        { q: ['1938', '1938'], a: ['Elected president of the Indian National Congress', 'भारतीय राष्ट्रीय कांग्रेस के अध्यक्ष चुने गए'] },
        { q: ['1943', '1943'], a: ['Advanced from Rangoon to India with Japanese support but was defeated', 'जापानी मदद से रंगून से भारत की ओर बढ़े पर हार गए'] },
        { q: ['Believed to be killed in a plane crash', 'माना जाता है कि विमान दुर्घटना में मारे गए'], a: ['1945, in Taiwan', '1945, ताइवान में'] },
        { q: ['Popularly known as', 'लोकप्रिय नाम'], a: ['Netaji', 'नेताजी'] },
      ],
    },
    {
      type: 'task',
      title: ['Speaking: narrate an interesting incident from your school life. Use then, after that, suddenly, so, finally, in the end.', 'बोलना: अपने स्कूल जीवन की कोई रोचक घटना सुनाओ। then, after that, suddenly, so, finally, in the end का प्रयोग करो।'],
      items: [{ q: ['My school incident', 'मेरे स्कूल की घटना'], a: ['One day it was raining heavily. Suddenly the lights went off in our class. Then our teacher told us a ghost story. After that the lights came back and we all laughed. In the end it was the best day.', 'एक दिन तेज़ बारिश हो रही थी। अचानक हमारी कक्षा की बत्ती चली गई। फिर हमारे शिक्षक ने हमें भूत की कहानी सुनाई। उसके बाद बत्ती आ गई और हम सब हँस पड़े। आख़िर में वह सबसे अच्छा दिन रहा।'] }],
    },
    {
      type: 'task',
      title: ['Project: frame phrases with bright, beautiful, huge, little (example: clear stream, clear sky, clear voice). Proverb: "An apple a day keeps the doctor away."', 'परियोजना: bright, beautiful, huge, little से वाक्यांश बनाओ (जैसे: clear stream, clear sky, clear voice)। कहावत: "रोज़ एक सेब डॉक्टर को दूर रखता है।"'],
      items: [
        { q: ['Phrases', 'वाक्यांश'], a: ['bright sun, bright colours; beautiful flower, beautiful song; huge elephant, huge building; little baby, little bird', 'चमकता सूरज, चटक रंग; सुंदर फूल, सुंदर गीत; विशाल हाथी, विशाल इमारत; नन्हा बच्चा, नन्ही चिड़िया'] },
        { q: ['Use the proverb in a sentence.', 'कहावत को वाक्य में प्रयोग करो।'], a: ['My mother gives me a fruit every day, because an apple a day keeps the doctor away.', 'मेरी माँ मुझे रोज़ एक फल देती हैं, क्योंकि रोज़ एक सेब डॉक्टर को दूर रखता है।'] },
      ],
    },
  ],
  'class8-9': [
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['What is Devdas Banjare famous for?', 'देवदास बंजारे किस लिए प्रसिद्ध हैं?'], a: ["For making Chhattisgarh's Panthi dance famous all over the world.", 'छत्तीसगढ़ के पंथी नृत्य को पूरी दुनिया में प्रसिद्ध करने के लिए।'] },
        { q: ['How did Banjare get exposed to Panthi?', 'बंजारे पंथी नृत्य की ओर कैसे आए?'], a: ['By a twist of fate: he was a Kabaddi player, but an injury in a match stopped him, so he turned to Panthi dance.', 'क़िस्मत के मोड़ से: वे कबड्डी खिलाड़ी थे, पर मैच में लगी चोट से खेलना छूट गया, तो वे पंथी नृत्य की ओर मुड़े।'] },
        { q: ['Which community is famous for its Panthi tradition?', 'कौन-सा समुदाय पंथी परंपरा के लिए प्रसिद्ध है?'], a: ['The Satnami community of Chhattisgarh.', 'छत्तीसगढ़ का सतनामी समुदाय।'] },
        { q: ['Why does the community cherish the dance form so much?', 'समुदाय इस नृत्य को इतना प्यार क्यों करता है?'], a: ['Panthi is the medium through which they honour their Guru, Guru Ghasidasji.', 'पंथी वह माध्यम है जिससे वे अपने गुरु, गुरु घासीदासजी का सम्मान करते हैं।'] },
        { q: ["Name some popular 'Mudras' in Panthi.", 'पंथी की कुछ लोकप्रिय मुद्राओं के नाम बताओ।'], a: ["'Jai Sthamb', 'Dharti Pranam' and 'Phool Arpan'.", "'जय स्तंभ', 'धरती प्रणाम' और 'फूल अर्पण'।"] },
        { q: ['Explain the costume of a Panthi dancer.', 'पंथी नर्तक की वेशभूषा बताओ।'], a: ['Ghungroo, a dhoti and kurta, and a kanthi (a garland made of tulsi).', 'घुँघरू, धोती और कुर्ता, और कंठी (तुलसी की माला)।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Complete the table in phrases (two or three words).', 'तालिका वाक्यांशों (दो-तीन शब्दों) में पूरी करो।'],
      items: [
        { q: ['What is Panthi?', 'पंथी क्या है?'], a: ['a folk dance of Chhattisgarh', 'छत्तीसगढ़ का लोकनृत्य'] },
        { q: ['Who was Devdas Banjare?', 'देवदास बंजारे कौन थे?'], a: ['a famous Panthi dancer', 'प्रसिद्ध पंथी नर्तक'] },
        { q: ["What is a 'Mudra'?", "'मुद्रा' क्या है?"], a: ['a dance pose or gesture', 'नृत्य की एक भंगिमा'] },
        { q: ['To which community does Panthi belong?', 'पंथी किस समुदाय का है?'], a: ['the Satnami community', 'सतनामी समुदाय'] },
        { q: ['Which film did Banjare act in?', 'बंजारे ने किस फ़िल्म में अभिनय किया?'], a: ["'Charandas Chor' by Shyam Benegal", "श्याम बेनेगल की 'चरणदास चोर'"] },
      ],
    },
    {
      type: 'match',
      title: ["Add '-d', '-ed', '-n' or '-en': match each word with its new form.", "'-d', '-ed', '-n' या '-en' जोड़ो: हर शब्द को उसके नए रूप से मिलाओ।"],
      pairs: [
        [['acknowledge', 'मानना'], ['acknowledged', '']],
        [['sustain', 'सहना'], ['sustained', '']],
        [['strength', 'ताक़त'], ['strengthen', 'मज़बूत करना']],
        [['enthrall', 'मोहित करना'], ['enthralled', '']],
        [['fright', 'डर'], ['frighten', 'डराना']],
        [['haste', 'जल्दी'], ['hasten', 'जल्दी करना']],
        [['awake', 'जागा हुआ'], ['awaken', 'जगाना']],
        [['surprise', 'हैरानी'], ['surprised', '']],
      ],
    },
    {
      type: 'task',
      title: ['Make five sentences using words from the table above.', 'ऊपर की तालिका के शब्दों से पाँच वाक्य बनाओ।'],
      items: [{ q: ['Five sentences', 'पाँच वाक्य'], a: ['Exercise will strengthen your body. The loud noise frightened the baby. We were surprised by the gift. The dancer enthralled the audience. He acknowledged his mistake.', 'व्यायाम तुम्हारे शरीर को मज़बूत करेगा। तेज़ आवाज़ ने बच्चे को डरा दिया। हम उपहार से हैरान हुए। नर्तक ने दर्शकों को मोहित कर दिया। उसने अपनी ग़लती मानी।'] }],
    },
    {
      type: 'fill',
      title: ['Fill in the blanks with words from the box.', 'बॉक्स के शब्दों से रिक्त स्थान भरो।'],
      bank: ['Charandas Chor', 'Shyam Benegal', 'mandar', 'energy', 'Guru Ghasidasji', 'Phool Singh Banjare'],
      items: [
        { q: ['Devdas Banjare acted in the film ___.', 'देवदास बंजारे ने फ़िल्म ___ में अभिनय किया।'], a: 'Charandas Chor' },
        { q: ['The film "Charandas Chor" is by ___.', 'फ़िल्म "चरणदास चोर" ___ की है।'], a: 'Shyam Benegal' },
        { q: ['Instruments such as the ___ accompany the artistes in their performance.', '___ जैसे वाद्य कलाकारों के साथ बजते हैं।'], a: 'mandar' },
        { q: ["The dancers' ___ is very important in Panthi.", 'पंथी में नर्तकों की ___ बहुत ज़रूरी है।'], a: 'energy' },
        { q: ['The Satnamis regard ___ as their Guru.', 'सतनामी ___ को अपना गुरु मानते हैं।'], a: 'Guru Ghasidasji' },
        { q: ['___ raised Banjare as a child.', '___ ने बचपन में बंजारे को पाला।'], a: 'Phool Singh Banjare' },
      ],
    },
    {
      type: 'task',
      title: ['Grammar: challenges in childhood. Frame sentences with "had to". Example: When I was a child I had to help my father in the fields.', 'व्याकरण: बचपन की चुनौतियाँ। "had to" से वाक्य बनाओ। उदाहरण: बचपन में मुझे खेतों में पिता की मदद करनी पड़ती थी।'],
      items: [
        { q: ['... go on foot for six km to get to school.', '... स्कूल जाने के लिए छह किलोमीटर पैदल जाना।'], a: ['When I was a child I had to go on foot for six km to get to school.', 'बचपन में मुझे स्कूल जाने के लिए छह किलोमीटर पैदल चलना पड़ता था।'] },
        { q: ['... fetch water from a long distance.', '... दूर से पानी लाना।'], a: ['When I was a child I had to fetch water from a long distance.', 'बचपन में मुझे दूर से पानी लाना पड़ता था।'] },
        { q: ['... study in the dim light of an earthen lamp in my hut.', '... झोपड़ी में मिट्टी के दीये की मद्धम रोशनी में पढ़ना।'], a: ['When I was a child I had to study in the dim light of an earthen lamp in my hut.', 'बचपन में मुझे अपनी झोपड़ी में मिट्टी के दीये की मद्धम रोशनी में पढ़ना पड़ता था।'] },
      ],
    },
    {
      type: 'task',
      title: ['Writing: list some qualities of a good dancer, then write a paragraph about them.', 'लेखन: एक अच्छे नर्तक के गुण लिखो, फिर उन पर एक अनुच्छेद लिखो।'],
      items: [{ q: ['Qualities of a good dancer', 'अच्छे नर्तक के गुण'], a: ['A good dancer has a strong and healthy body, a good sense of rhythm and a lot of energy. He practises every day, loves his art and expresses feelings through his face and mudras.', 'एक अच्छे नर्तक का शरीर मज़बूत और स्वस्थ होता है, उसमें लय की अच्छी समझ और ख़ूब ऊर्जा होती है। वह रोज़ अभ्यास करता है, अपनी कला से प्यार करता है और चेहरे व मुद्राओं से भाव दिखाता है।'] }],
    },
    {
      type: 'qa',
      title: ['Writing: complete the bio-data of Devdas Banjare.', 'लेखन: देवदास बंजारे का जीवन-परिचय पूरा करो।'],
      items: [
        { q: ['Name', 'नाम'], a: ['Devdas Banjare', 'देवदास बंजारे'] },
        { q: ["Father's name", 'पिता का नाम'], a: ['Bodhram (raised by Phool Singh Banjare)', 'बोधराम (पालन-पोषण फूल सिंह बंजारे ने किया)'] },
        { q: ['Date of birth', 'जन्म तिथि'], a: ['1st January 1937', '1 जनवरी 1937'] },
        { q: ['Place of birth', 'जन्म स्थान'], a: ['Sakra village, Dhamtari district', 'सकरा गाँव, धमतरी ज़िला'] },
        { q: ['Work experience', 'कार्य अनुभव'], a: ["Dance teacher at the Bhilai Steel Plant; worked with Habib Tanvir's New Theatre; toured over 60 countries", 'भिलाई इस्पात संयंत्र में नृत्य शिक्षक; हबीब तनवीर के नया थियेटर के साथ काम; 60 से ज़्यादा देशों का दौरा'] },
        { q: ['Awards received', 'मिले पुरस्कार'], a: ["Chief Minister's gold medal (1972), President's gold medal (1975)", 'मुख्यमंत्री स्वर्ण पदक (1972), राष्ट्रपति स्वर्ण पदक (1975)'] },
      ],
    },
    {
      type: 'fill',
      title: ['Listening: listen to the passage about Albert Einstein and fill in the blanks.', 'सुनना: अल्बर्ट आइंस्टीन के बारे में अनुच्छेद सुनो और रिक्त स्थान भरो।'],
      passage: [
        "Albert Einstein was born on March 14, 1879 in the German city of Ulm. There was nothing great about Einstein as a child. Children found him boring and he played by himself much of the time. The young Einstein loved playing with mechanical toys. In fact, when his sister Maya was born, he was supposed to have asked \"where are her wheels?\"\nThe world knows Einstein as a physics legend. When young, he was a good student but did not like the strictness of his school. This is why people considered him to be a bad boy.\nAlbert Einstein's first job was as a teacher. He also gave private tuitions. He later secured a job in a private company in Bern. It was here that he started developing his ideas in secret. This boy later on developed the 'Theory of Relativity' and 'The Photo Electric Effect'. He won the Nobel Prize for Physics for his achievements.",
        'अल्बर्ट आइंस्टीन का जन्म 14 मार्च 1879 को जर्मनी के उल्म शहर में हुआ। बचपन में आइंस्टीन में कुछ ख़ास नहीं था। बच्चों को वे उबाऊ लगते थे और वे ज़्यादातर अकेले खेलते थे। नन्हे आइंस्टीन को मशीनी खिलौनों से खेलना बहुत पसंद था। कहते हैं कि जब उनकी बहन माया पैदा हुई, तो उन्होंने पूछा था, "इसके पहिए कहाँ हैं?"\nदुनिया आइंस्टीन को भौतिकी के महान वैज्ञानिक के रूप में जानती है। छोटी उम्र में वे अच्छे छात्र थे पर उन्हें स्कूल की सख़्ती पसंद नहीं थी। इसीलिए लोग उन्हें बुरा लड़का समझते थे।\nअल्बर्ट आइंस्टीन की पहली नौकरी शिक्षक की थी। वे निजी ट्यूशन भी देते थे। बाद में उन्हें बर्न की एक निजी कंपनी में नौकरी मिली। यहीं उन्होंने चुपचाप अपने विचार विकसित करने शुरू किए। इसी लड़के ने आगे चलकर \'सापेक्षता का सिद्धांत\' और \'प्रकाश-विद्युत प्रभाव\' विकसित किया। अपनी उपलब्धियों के लिए उन्हें भौतिकी का नोबेल पुरस्कार मिला।',
      ],
      bank: ['March 14, 1879', 'Ulm', 'boring', 'by himself', 'the strictness', 'a teacher', 'private', 'Theory of Relativity', 'Nobel'],
      items: [
        { q: ['Albert Einstein was born on ___ in Ulm, Germany.', 'अल्बर्ट आइंस्टीन का जन्म ___ को उल्म, जर्मनी में हुआ।'], a: 'March 14, 1879' },
        { q: ['Children found Einstein ___ as a child.', 'बचपन में बच्चों को आइंस्टीन ___ लगते थे।'], a: 'boring' },
        { q: ['He preferred to play ___.', 'वे ___ खेलना पसंद करते थे।'], a: 'by himself' },
        { q: ['Einstein did not like ___ of his school.', 'आइंस्टीन को स्कूल की ___ पसंद नहीं थी।'], a: 'the strictness' },
        { q: ['His first job was as ___.', 'उनकी पहली नौकरी ___ की थी।'], a: 'a teacher' },
        { q: ['He later secured a job in a ___ company.', 'बाद में उन्हें एक ___ कंपनी में नौकरी मिली।'], a: 'private' },
        { q: ['He developed the ___ and the Photo Electric Effect.', 'उन्होंने ___ और प्रकाश-विद्युत प्रभाव विकसित किया।'], a: 'Theory of Relativity' },
        { q: ['He won the ___ Prize for Physics.', 'उन्होंने भौतिकी का ___ पुरस्कार जीता।'], a: 'Nobel' },
      ],
    },
    {
      type: 'qa',
      title: ['Read about Teejan Bai. What is similar and different between Teejan Bai and Devdas Banjare?', 'तीजन बाई के बारे में पढ़ो। तीजन बाई और देवदास बंजारे में क्या समान है और क्या अलग?'],
      passage: [
        'Teejan Bai belongs to the Pardhi adivasi community. She could hardly get two meals a day. As a child, her grandfather\'s music fascinated her. But her mother was ashamed, because it was not considered good for a girl to sing and dance in that community. She often beat Teejan to stop her from singing. But this only made her more adamant. However, her father supported her. Her first concert was at Chandrakhuri. Later she gave performances all over the world. She was honoured with the Padmashri and the Sangeet Natak Academy Award. She is employed in the Bhilai Steel Plant. She hopes that her students will spread Pandvani to all corners of the world.',
        'तीजन बाई पारधी आदिवासी समुदाय से हैं। उन्हें मुश्किल से दो वक़्त की रोटी मिलती थी। बचपन में उनके दादा का संगीत उन्हें मोह लेता था। पर उनकी माँ को शर्म आती थी, क्योंकि उस समुदाय में लड़की का गाना-नाचना अच्छा नहीं माना जाता था। वे अक्सर तीजन को गाने से रोकने के लिए मारती थीं। पर इससे वे और ज़िद्दी हो गईं। फिर भी उनके पिता ने उनका साथ दिया। उनका पहला कार्यक्रम चंद्रखुरी में हुआ। बाद में उन्होंने पूरी दुनिया में प्रस्तुतियाँ दीं। उन्हें पद्मश्री और संगीत नाटक अकादमी पुरस्कार से सम्मानित किया गया। वे भिलाई इस्पात संयंत्र में काम करती हैं। उन्हें उम्मीद है कि उनके विद्यार्थी पंडवानी को दुनिया के हर कोने तक पहुँचाएँगे।',
      ],
      items: [
        { q: ['Similar', 'समान'], a: ['Both are folk artists of Chhattisgarh, both worked at the Bhilai Steel Plant, both performed all over the world and trained students.', 'दोनों छत्तीसगढ़ के लोक कलाकार हैं, दोनों भिलाई इस्पात संयंत्र में काम करते थे, दोनों ने पूरी दुनिया में प्रस्तुतियाँ दीं और विद्यार्थियों को सिखाया।'] },
        { q: ['Different', 'अलग'], a: ['Teejan Bai sings Pandvani while Banjare danced Panthi; Teejan Bai\'s mother opposed her, while Banjare came to dance after a Kabaddi injury.', 'तीजन बाई पंडवानी गाती हैं जबकि बंजारे पंथी नाचते थे; तीजन बाई की माँ ने विरोध किया, जबकि बंजारे कबड्डी की चोट के बाद नृत्य में आए।'] },
      ],
    },
    {
      type: 'task',
      title: ['Project: describe a dance form of your area: costume, mudras and musical instruments.', 'परियोजना: अपने क्षेत्र के एक नृत्य का वर्णन करो: वेशभूषा, मुद्राएँ और वाद्य यंत्र।'],
      items: [{ q: ['Karma dance', 'करमा नृत्य'], a: ['Costume: colourful saris, dhotis and turbans with feathers. Mudras: dancers hold hands and move in a circle, bending forward and back. Instruments: mandar, timki and jhanjh.', 'वेशभूषा: रंग-बिरंगी साड़ियाँ, धोती और पंखों वाली पगड़ी। मुद्राएँ: नर्तक हाथ पकड़कर गोल घेरे में आगे-पीछे झुकते हुए नाचते हैं। वाद्य: मांदर, टिमकी और झाँझ।'] }],
    },
  ],

  'class8-10': [
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['What was Madurai earlier known as?', 'मदुरै पहले किस नाम से जाना जाता था?'], a: ["Madhurapuri, 'The City of Nectar'.", "मधुरापुरी, 'अमृत का नगर'।"] },
        { q: ['Why is Madurai called the city of nectar?', 'मदुरै को अमृत का नगर क्यों कहा जाता है?'], a: ['Lord Shiva put nectar from his crescent moon on it; also its melodious sounds, jasmine, temples and polite people make it a city of sweetness.', 'भगवान शिव ने अपने अर्धचंद्र से उस पर अमृत डाला; साथ ही उसकी मधुर ध्वनियाँ, चमेली, मंदिर और विनम्र लोग उसे मिठास का नगर बनाते हैं।'] },
        { q: ['Why did Shiva put nectar on Madurai?', 'शिव ने मदुरै पर अमृत क्यों डाला?'], a: ["To neutralize the venom that had fallen on Madurai from his snake.", 'उनके साँप से मदुरै पर गिरे विष को बेअसर करने के लिए।'] },
        { q: ['How many legends about Madurai have you read in the lesson?', 'पाठ में मदुरै की कितनी किंवदंतियाँ पढ़ीं?'], a: ['Three: the nectar on the venom, the snake around the city, and the wedding of Meenakshi and Sundareswara.', 'तीन: विष पर अमृत, नगर को घेरे साँप, और मीनाक्षी व सुंदरेश्वर का विवाह।'] },
        { q: ['Which legend do you find the most interesting? Why?', 'कौन-सी किंवदंती सबसे रोचक लगी? क्यों?'], a: ['The snake with its tail in its mouth, because it turns attackers into stone and protects the city.', 'मुँह में पूँछ दबाए साँप वाली, क्योंकि वह हमलावरों को पत्थर बनाकर नगर की रक्षा करता है।'] },
        { q: ['What do you like most about Madurai?', 'मदुरै में तुम्हें सबसे ज़्यादा क्या पसंद है?'], a: ['The Meenakshi temple with its wonderful sculptures and musical pillars.', 'अद्भुत मूर्तियों और संगीत वाले खंभों वाला मीनाक्षी मंदिर।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Fill in the blanks.', 'रिक्त स्थान भरो।'],
      bank: ['palanquin', 'silver elephant', 'Lord Sundareswara', 'Tamil', 'Tamil Nadu', 'crescent'],
      items: [
        { q: ['After the wedding Meenakshi is taken out in a ___.', 'विवाह के बाद मीनाक्षी को ___ में निकाला जाता है।'], a: 'palanquin' },
        { q: ['Lord Sundareswara is carried on a ___.', 'भगवान सुंदरेश्वर को ___ पर ले जाया जाता है।'], a: 'silver elephant' },
        { q: ["Goddess Meenakshi's husband is ___.", 'देवी मीनाक्षी के पति ___ हैं।'], a: 'Lord Sundareswara' },
        { q: ['The people of Madurai speak the ___ language.', 'मदुरै के लोग ___ भाषा बोलते हैं।'], a: 'Tamil' },
        { q: ['Madurai is in ___ state.', 'मदुरै ___ राज्य में है।'], a: 'Tamil Nadu' },
        { q: ["The moon on Shiva's head is ___ shaped.", 'शिव के सिर पर चाँद ___ आकार का है।'], a: 'crescent' },
      ],
    },
    {
      type: 'mcq',
      title: ['Vocabulary: tick the meaning used in the text.', 'शब्दावली: पाठ में प्रयुक्त मतलब चुनो।'],
      items: [
        { q: ['melodious', 'melodious'], options: [['sad', 'उदास'], ['musical', 'मधुर / संगीतमय'], ['merry', 'मस्त'], ['happy', 'ख़ुश']], a: 1 },
        { q: ['neutralize', 'neutralize'], options: [['to be filled with nectar', 'अमृत से भरना'], ['to make something harmless', 'किसी चीज़ को बेअसर करना'], ['finish the value', 'मूल्य ख़त्म करना'], ['to make something look beautiful', 'सुंदर बनाना']], a: 1 },
        { q: ['venom', 'venom'], options: [['poison', 'विष'], ['blessing', 'आशीर्वाद'], ['money', 'पैसा'], ['honey', 'शहद']], a: 0 },
        { q: ['nectar', 'nectar'], options: [['beauty', 'सुंदरता'], ['bright light from heaven', 'स्वर्ग की रोशनी'], ['poison', 'विष'], ['drink of Gods', 'देवताओं का पेय, अमृत']], a: 3 },
        { q: ['attack', 'attack'], options: [['to harm someone', 'किसी को नुक़सान पहुँचाना'], ['to argue with someone', 'बहस करना'], ['to be friendly with someone', 'दोस्ती करना'], ['to be angry with someone', 'नाराज़ होना']], a: 0 },
        { q: ['ancient', 'ancient'], options: [['attractive', 'आकर्षक'], ['huge', 'विशाल'], ['new', 'नया'], ['old', 'पुराना']], a: 3 },
        { q: ['summon', 'summon'], options: [['tell someone to come', 'किसी को बुलाना'], ['tell someone to salute', 'सलाम करने को कहना'], ['tell someone to speak', 'बोलने को कहना'], ['tell someone to sum up', 'सार बताने को कहना']], a: 0 },
        { q: ['magnificent', 'magnificent'], options: [['grand', 'भव्य'], ['interesting', 'रोचक'], ['ordinary', 'साधारण'], ['bright', 'चमकीला']], a: 0 },
        { q: ['sculpture', 'sculpture'], options: [['statue', 'मूर्ति'], ['tombs', 'मक़बरे'], ['design', 'डिज़ाइन'], ['pillars', 'खंभे']], a: 0 },
      ],
    },
    {
      type: 'match',
      title: ["Adjectives to nouns: add '-ness'.", "विशेषण से संज्ञा: '-ness' जोड़ो।"],
      pairs: [
        [['sweet', 'मीठा'], ['sweetness', 'मिठास']],
        [['polite', 'विनम्र'], ['politeness', 'विनम्रता']],
        [['huge', 'विशाल'], ['hugeness', 'विशालता']],
        [['great', 'महान'], ['greatness', 'महानता']],
        [['kind', 'दयालु'], ['kindness', 'दयालुता']],
      ],
    },
    {
      type: 'match',
      title: ['Match the adjectives with their opposites.', 'विशेषणों को उनके विलोम से मिलाओ।'],
      pairs: [
        [['polite', 'विनम्र'], ['rude', 'असभ्य']],
        [['sweet', 'मीठा'], ['bitter', 'कड़वा']],
        [['bright', 'चमकीला'], ['dull', 'फीका']],
        [['neat', 'साफ़-सुथरा'], ['dirty', 'गंदा']],
        [['white', 'सफ़ेद'], ['black', 'काला']],
        [['ugly', 'बदसूरत'], ['beautiful', 'सुंदर']],
      ],
    },
    {
      type: 'mcq',
      title: ['Grammar: study the prices. bat Rs.200, hockey Rs.120, racquet Rs.120, football Rs.120, ludo Rs.55, chess-board Rs.70.', 'व्याकरण: दाम देखो। बल्ला 200, हॉकी 120, रैकेट 120, फ़ुटबॉल 120, लूडो 55, शतरंज 70 रुपये।'],
      items: [
        { q: ['Which item is the cheapest?', 'सबसे सस्ती चीज़ कौन-सी है?'], options: [['the ludo', 'लूडो'], ['the chess-board', 'शतरंज'], ['the football', 'फ़ुटबॉल']], a: 0 },
        { q: ['Which is the costliest item?', 'सबसे महँगी चीज़ कौन-सी है?'], options: [['the racquet', 'रैकेट'], ['the bat', 'बल्ला'], ['the hockey stick', 'हॉकी']], a: 1 },
        { q: ['Which item is cheaper than the chess-board?', 'शतरंज से सस्ती चीज़ कौन-सी है?'], options: [['the ludo', 'लूडो'], ['the football', 'फ़ुटबॉल'], ['the bat', 'बल्ला']], a: 0 },
        { q: ['Which items are as costly as the racquet?', 'कौन-सी चीज़ें रैकेट जितनी महँगी हैं?'], options: [['the hockey stick and the football', 'हॉकी और फ़ुटबॉल'], ['the bat and the ludo', 'बल्ला और लूडो'], ['the chess-board', 'शतरंज']], a: 0 },
      ],
    },
    {
      type: 'task',
      title: ['Writing: create an imaginary city. Write a name for each: city, famous building, river, park, mountain, temple. Then describe it.', 'लेखन: एक काल्पनिक नगर बनाओ। हर चीज़ का नाम लिखो: नगर, प्रसिद्ध इमारत, नदी, उद्यान, पहाड़, मंदिर। फिर उसका वर्णन करो।'],
      items: [{ q: ['The name of the city is ...', 'नगर का नाम ... है।'], a: ['The name of the city is Sundarpur. It has a famous building called Sun Tower, a beautiful river called Neelganga, a big park called Rose Garden, the highest mountain called Megh Parvat and an old temple called Shiv Mandir.', 'नगर का नाम सुंदरपुर है। इसमें सन टावर नाम की प्रसिद्ध इमारत, नीलगंगा नाम की सुंदर नदी, रोज़ गार्डन नाम का बड़ा उद्यान, मेघ पर्वत नाम का सबसे ऊँचा पहाड़ और शिव मंदिर नाम का पुराना मंदिर है।'] }],
    },
    {
      type: 'qa',
      title: ['Listening: listen to the announcement and complete the Madai Mela programme.', 'सुनना: घोषणा सुनो और मड़ई मेला कार्यक्रम पूरा करो।'],
      passage: [
        "Welcome to the 3-day Madai Mela at Baloda. Enjoy the Chhattisgarhi folk songs by D.K. orchestra group on the first day from 07:00 p.m. onwards. On 17th August there will be a dance performance by Sweta group from 08:00 p.m. onwards. On the last day we will have a Pandavani by 'Kavita Pandavani Music Mandali' from 09:00 p.m. onwards. Have a nice time.\nThe Madai Mela organizers request all visitors to use dustbins to keep the venue neat. Please park your vehicles in the parking space only.",
        "बलौदा में 3 दिन के मड़ई मेले में आपका स्वागत है। पहले दिन शाम 7 बजे से डी.के. ऑर्केस्ट्रा ग्रुप के छत्तीसगढ़ी लोकगीतों का आनंद लीजिए। 17 अगस्त को रात 8 बजे से श्वेता ग्रुप का नृत्य होगा। आख़िरी दिन रात 9 बजे से 'कविता पंडवानी म्यूज़िक मंडली' की पंडवानी होगी। आपका समय अच्छा बीते।\nमड़ई मेले के आयोजक सभी आगंतुकों से अनुरोध करते हैं कि जगह साफ़ रखने के लिए कूड़ेदान का इस्तेमाल करें। कृपया अपने वाहन सिर्फ़ पार्किंग की जगह पर खड़े करें।",
      ],
      items: [
        { q: ['Day 1 (16th August)', 'पहला दिन (16 अगस्त)'], a: ['Chhattisgarhi folk songs, 7:00 p.m., D.K. orchestra group', 'छत्तीसगढ़ी लोकगीत, शाम 7 बजे, डी.के. ऑर्केस्ट्रा ग्रुप'] },
        { q: ['Day 2 (17th August)', 'दूसरा दिन (17 अगस्त)'], a: ['Dance performance, 8:00 p.m., Sweta group', 'नृत्य, रात 8 बजे, श्वेता ग्रुप'] },
        { q: ['Day 3 (18th August)', 'तीसरा दिन (18 अगस्त)'], a: ["Pandavani, 9:00 p.m., Kavita Pandavani Music Mandali", 'पंडवानी, रात 9 बजे, कविता पंडवानी म्यूज़िक मंडली'] },
      ],
    },
    {
      type: 'mcq',
      title: ['Listening: tick the right option.', 'सुनना: सही विकल्प चुनो।'],
      items: [
        { q: ['Visitors at the mela should use dustbins for -', 'मेले में आगंतुकों को कूड़ेदान का इस्तेमाल करना चाहिए -'], options: [['keeping the venue neat', 'जगह साफ़ रखने के लिए'], ['throwing the waste', 'कचरा फेंकने के लिए'], ['both of these', 'दोनों के लिए'], ['only keeping the venue neat', 'सिर्फ़ जगह साफ़ रखने के लिए']], a: 2 },
        { q: ['The vehicles should be parked at the -', 'वाहन खड़े करने चाहिए -'], options: [['parking street', 'पार्किंग गली में'], ['shed', 'शेड में'], ['parking space', 'पार्किंग की जगह पर'], ['outside the mela ground', 'मेले के मैदान के बाहर']], a: 2 },
      ],
    },
    {
      type: 'task',
      title: ['Pair work: describe pictures with beautiful, tall, strange, huge, sweet, wonderful... Example: How beautiful it is! What a beautiful flower it is!', 'जोड़ी में: beautiful, tall, strange, huge, sweet, wonderful... से चित्रों का वर्णन करो। उदाहरण: How beautiful it is! What a beautiful flower it is!'],
      items: [
        { q: ['an elephant', 'एक हाथी'], a: ['What a huge elephant it is!', 'कितना विशाल हाथी है!'] },
        { q: ['a tower', 'एक मीनार'], a: ['How tall it is!', 'यह कितनी ऊँची है!'] },
      ],
    },
    {
      type: 'task',
      title: ['Project: make a list of old temples and tourist places of your area and collect their pictures.', 'परियोजना: अपने क्षेत्र के पुराने मंदिरों और पर्यटन स्थलों की सूची बनाओ और उनके चित्र इकट्ठा करो।'],
      items: [{ q: ['Chhattisgarh', 'छत्तीसगढ़'], a: ['Bhoramdeo temple, Sirpur, Rajim, Chitrakoot waterfall, Dantewada Danteshwari temple', 'भोरमदेव मंदिर, सिरपुर, राजिम, चित्रकोट जलप्रपात, दंतेवाड़ा दंतेश्वरी मंदिर'] }],
    },
  ],
  'class8-11': [
    {
      type: 'tf',
      title: ['Which sentences are correct? Say true or false.', 'कौन-से वाक्य सही हैं? बताओ सही या ग़लत।'],
      items: [
        { q: ['The little bird was covered with feathers.', 'छोटी चिड़िया पंखों से ढकी थी।'], a: true },
        { q: ['They shivered due to the cold weather.', 'वे ठंडे मौसम की वजह से काँपे।'], a: false },
        { q: ['The weather was rainy and cloudy.', 'मौसम बारिश वाला और बादलों भरा था।'], a: false },
        { q: ['The girl is thin and the bird is plump.', 'लड़की दुबली है और चिड़िया मोटी।'], a: false },
        { q: ['The little girl and the little bird were out in the meadows.', 'छोटी लड़की और छोटी चिड़िया घास के मैदान में थीं।'], a: true },
      ],
    },
    {
      type: 'qa',
      title: ['Complete the table about the little girl and the bird, then explain.', 'छोटी लड़की और चिड़िया के बारे में तालिका पूरी करो, फिर समझाओ।'],
      items: [
        { q: ['The girl: dress, description, feelings', 'लड़की: पहनावा, वर्णन, भावनाएँ'], a: ['Dress: clothes. Description: plump, little, nice. Feelings: she felt sorry for the bird and thought it must be cold without clothes.', 'पहनावा: कपड़े। वर्णन: गोल-मटोल, छोटी, प्यारी। भावनाएँ: उसे चिड़िया पर तरस आया और लगा कि बिना कपड़ों के उसे ठंड लगती होगी।'] },
        { q: ['The bird: dress, description, feelings', 'चिड़िया: पहनावा, वर्णन, भावनाएँ'], a: ['Dress: feathers. Description: thin, little, poor. Feelings: he felt sorry for the girl and thought she must be cold without a single feather.', 'पहनावा: पंख। वर्णन: दुबली, छोटी, बेचारी। भावनाएँ: उसे लड़की पर तरस आया और लगा कि बिना एक भी पंख के उसे ठंड लगती होगी।'] },
        { q: ["What was the little girl's feeling about the little bird?", 'छोटी लड़की को छोटी चिड़िया के बारे में कैसा लगा?'], a: ['She felt sympathy; she thought the bird was cold because it had no clothes like hers.', 'उसे हमदर्दी हुई; उसे लगा कि चिड़िया को ठंड लग रही होगी क्योंकि उसके पास उसके जैसे कपड़े नहीं हैं।'] },
        { q: ['What did the little bird feel about the little girl?', 'छोटी चिड़िया को छोटी लड़की के बारे में कैसा लगा?'], a: ['He felt sympathy too; he thought the girl was cold because she did not have a single feather.', 'उसे भी हमदर्दी हुई; उसे लगा कि लड़की को ठंड लग रही होगी क्योंकि उसके पास एक भी पंख नहीं है।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Vocabulary: climb the steps to the house. Find the word from each clue.', 'शब्दावली: सीढ़ियाँ चढ़कर घर तक पहुँचो। हर संकेत से शब्द पहचानो।'],
      bank: ['poor', 'girl', 'here', 'bird', 'cold', 'clothes', 'thin', 'feathers'],
      items: [
        { q: ['(1) opposite of rich: ___', '(1) अमीर का विलोम: ___'], a: 'poor' },
        { q: ['(2) first character in the poem: ___', '(2) कविता का पहला पात्र: ___'], a: 'girl' },
        { q: ["(3) remove the first letter of 'THERE': ___", "(3) 'THERE' का पहला अक्षर हटाओ: ___"], a: 'here' },
        { q: ['(4) second character in the poem: ___', '(4) कविता का दूसरा पात्र: ___'], a: 'bird' },
        { q: ['(5) people use woollen clothes when it is ___', '(5) जब ___ होती है तो लोग ऊनी कपड़े पहनते हैं'], a: 'cold' },
        { q: ['(6) we wear them to cover our bodies: ___', '(6) शरीर ढकने के लिए हम इन्हें पहनते हैं: ___'], a: 'clothes' },
        { q: ["(7) opposite of 'fat': ___", "(7) 'मोटा' का विलोम: ___"], a: 'thin' },
        { q: ['(8) birds have them: ___', '(8) चिड़ियों के पास ये होते हैं: ___'], a: 'feathers' },
      ],
    },
    {
      type: 'task',
      title: ['Use these words in your own sentences: plump, thin, poor, sunshine, nice.', 'इन शब्दों को अपने वाक्यों में प्रयोग करो: plump, thin, poor, sunshine, nice.'],
      items: [
        { q: ['plump', 'गोल-मटोल'], a: ['The baby has plump cheeks.', 'बच्चे के गाल गोल-मटोल हैं।'] },
        { q: ['thin', 'दुबला'], a: ['The old dog is very thin.', 'बूढ़ा कुत्ता बहुत दुबला है।'] },
        { q: ['poor', 'ग़रीब / बेचारा'], a: ['We should help poor people.', 'हमें ग़रीब लोगों की मदद करनी चाहिए।'] },
        { q: ['sunshine', 'धूप'], a: ['Plants need sunshine to grow.', 'पौधों को बढ़ने के लिए धूप चाहिए।'] },
        { q: ['nice', 'अच्छा'], a: ['She is a nice girl.', 'वह एक अच्छी लड़की है।'] },
      ],
    },
    {
      type: 'pick',
      title: ['Grammar: choose the describing words from the poem.', 'व्याकरण: कविता के विशेषण (वर्णन करने वाले शब्द) चुनो।'],
      options: [['plump', 'गोल-मटोल'], ['girl', 'लड़की'], ['little', 'छोटा'], ['thin', 'दुबला'], ['meadows', 'घास के मैदान'], ['cold', 'ठंडा'], ['poor', 'बेचारा'], ['said', 'कहा'], ['nice', 'प्यारा'], ['single', 'एक भी'], ['sunshiny', 'धूप वाला']],
      answers: [0, 2, 3, 5, 6, 8, 9, 10],
    },
    {
      type: 'mcq',
      title: ['Grammar: choose the phrase with the words in the right order (age, quality, size, shape, colour...).', 'व्याकरण: सही क्रम वाले शब्दों का वाक्यांश चुनो।'],
      items: [
        { q: ['hill: big, green', 'पहाड़: बड़ा, हरा'], options: [['a big green hill', ''], ['a green big hill', '']], a: 0 },
        { q: ['sky: beautiful, blue, wide', 'आकाश: सुंदर, नीला, चौड़ा'], options: [['the blue wide beautiful sky', ''], ['the beautiful wide blue sky', '']], a: 1 },
        { q: ['aeroplane: new, white', 'हवाई जहाज़: नया, सफ़ेद'], options: [['a new white aeroplane', ''], ['a white new aeroplane', '']], a: 0 },
        { q: ['frock: red, new', 'फ़्रॉक: लाल, नई'], options: [['a red new frock', ''], ['a new red frock', '']], a: 1 },
        { q: ['girl: black, little, nice', 'लड़की: काली, छोटी, प्यारी'], options: [['a nice little black girl', ''], ['a black little nice girl', '']], a: 0 },
        { q: ['woman: little, poor, old', 'औरत: छोटी, बेचारी, बूढ़ी'], options: [['a poor little old woman', ''], ['an old poor little woman', '']], a: 0 },
        { q: ['packet: brown, beautiful, small', 'पैकेट: भूरा, सुंदर, छोटा'], options: [['a brown small beautiful packet', ''], ['a beautiful small brown packet', '']], a: 1 },
      ],
    },
    {
      type: 'task',
      title: ['Writing: describe a food item (kheer, jalebi, gulab jamun, samosa, dahi bada): shape, taste, look, colour, like/dislike.', 'लेखन: किसी खाने का वर्णन करो (खीर, जलेबी, गुलाब जामुन, समोसा, दही बड़ा): आकार, स्वाद, रूप, रंग, पसंद/नापसंद।'],
      items: [{ q: ['Jalebi', 'जलेबी'], a: ['Jalebi is round and curly in shape. It is crisp, juicy and very sweet. It looks shiny and is orange in colour. I like it very much, especially when it is hot.', 'जलेबी गोल और घुमावदार होती है। वह कुरकुरी, रसीली और बहुत मीठी होती है। वह चमकीली दिखती है और नारंगी रंग की होती है। मुझे यह बहुत पसंद है, ख़ासकर गरम-गरम।'] }],
    },
    {
      type: 'qa',
      title: ['Arrange in alphabetical order: meadows, sunshine, single, feather, plump, weather.', 'वर्णमाला के क्रम में लगाओ: meadows, sunshine, single, feather, plump, weather.'],
      items: [{ q: ['Alphabetical order', 'वर्णमाला क्रम'], a: ['feather, meadows, plump, single, sunshine, weather', 'feather, meadows, plump, single, sunshine, weather'] }],
    },
    {
      type: 'qa',
      title: ["Listening: listen to Bholu's routine. What does Bholu do, in order?", 'सुनना: भोलू की दिनचर्या सुनो। भोलू क्रम से क्या-क्या करता है?'],
      passage: [
        "Bholu is a small dog. In the morning, Bholu goes for a long walk with Shalu. He accompanies Shalu and her friends to school. Shalu's friends bring rotis for Bholu. On his way back from school, Bholu stops at the hotel at the street corner. Mohan Lal, the hotel manager, gives Bholu something to eat every day. Bholu sleeps there for some time. When the children return from school, Bholu follows them back home. In the afternoon, he sits in Shalu's garden and watches people and birds. In the evening, Bholu, Shalu and her sister Anu play with a ball in the garden. Bholu sleeps on the chair in Shalu's home.",
        'भोलू एक छोटा कुत्ता है। सुबह भोलू शालू के साथ लंबी सैर पर जाता है। वह शालू और उसकी सहेलियों के साथ स्कूल तक जाता है। शालू की सहेलियाँ भोलू के लिए रोटियाँ लाती हैं। स्कूल से लौटते हुए भोलू गली के कोने वाले होटल पर रुकता है। होटल के मैनेजर मोहन लाल रोज़ भोलू को कुछ खाने को देते हैं। भोलू वहाँ कुछ देर सोता है। जब बच्चे स्कूल से लौटते हैं, तो भोलू उनके पीछे-पीछे घर आता है। दोपहर में वह शालू के बगीचे में बैठकर लोगों और चिड़ियों को देखता है। शाम को भोलू, शालू और उसकी बहन अनु बगीचे में गेंद से खेलते हैं। भोलू शालू के घर में कुर्सी पर सोता है।',
      ],
      items: [
        {
          q: ["Bholu's day in order", 'भोलू का दिन, क्रम से'],
          a: ['1. a morning walk with Shalu  2. goes to school with the children  3. eats rotis from her friends  4. eats and sleeps at the hotel  5. follows the children home  6. watches people and birds in the garden  7. plays ball in the evening  8. sleeps on the chair', '1. शालू के साथ सुबह की सैर  2. बच्चों के साथ स्कूल जाता है  3. सहेलियों की रोटियाँ खाता है  4. होटल पर खाता और सोता है  5. बच्चों के पीछे घर आता है  6. बगीचे में लोगों और चिड़ियों को देखता है  7. शाम को गेंद खेलता है  8. कुर्सी पर सोता है'],
        },
      ],
    },
    {
      type: 'task',
      title: ['Class survey: find out who likes what. Ask: Do you like ...?', 'कक्षा सर्वे: पता करो किसे क्या पसंद है। पूछो: Do you like ...?'],
      items: [{ q: ['Do you like kheer?', 'क्या तुम्हें खीर पसंद है?'], a: ['Yes, I do. I like kheer. / No, I do not like kheer.', 'हाँ, मुझे खीर पसंद है। / नहीं, मुझे खीर पसंद नहीं।'] }],
    },
    {
      type: 'task',
      title: ['Project: things you find interesting to see when it is raining. Proverb: "Actions speak louder than words."', 'परियोजना: बारिश में देखने लायक़ रोचक चीज़ें। कहावत: "काम शब्दों से ज़्यादा बोलते हैं।"'],
      items: [
        { q: ['When it rains', 'जब बारिश होती है'], a: ['a rainbow, paper boats, frogs, peacocks dancing, puddles, umbrellas', 'इंद्रधनुष, काग़ज़ की नावें, मेंढक, नाचते मोर, पानी के गड्ढे, छाते'] },
        { q: ['Use the proverb in a sentence.', 'कहावत को वाक्य में प्रयोग करो।'], a: ['Do not just promise to help; actions speak louder than words.', 'सिर्फ़ मदद का वादा मत करो; काम शब्दों से ज़्यादा बोलते हैं।'] },
      ],
    },
  ],

  'class8-12': [
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['What suggestion does President Kalam give to children for remembering formulas of science?', 'विज्ञान के सूत्र याद रखने के लिए राष्ट्रपति कलाम बच्चों को क्या सुझाव देते हैं?'], a: ['By constant application, that is, by using them again and again.', 'लगातार प्रयोग से, यानी उन्हें बार-बार इस्तेमाल करके।'] },
        { q: ["Describe Kalam's happiest day.", 'कलाम के सबसे ख़ुशी वाले दिन का वर्णन करो।'], a: ['When polio-affected children were fitted with light Floor Reaction Orthosis and started running, walking and cycling, and their parents cried with joy.', 'जब पोलियो से प्रभावित बच्चों को हल्के फ़्लोर रिएक्शन ऑर्थोसिस लगाए गए और वे दौड़ने, चलने और साइकिल चलाने लगे, और उनके माता-पिता ख़ुशी से रो पड़े।'] },
        { q: ['Why does the President remember his class teacher so much?', 'राष्ट्रपति अपने कक्षा शिक्षक को इतना याद क्यों करते हैं?'], a: ['Shri Sivasubramania Iyer showed him how birds fly with real examples at the seashore; it made him take up the study of science.', 'श्री शिवसुब्रमण्य अय्यर ने समुद्र तट पर असली उदाहरणों से दिखाया कि चिड़ियाँ कैसे उड़ती हैं; इसी से उन्होंने विज्ञान पढ़ना चुना।'] },
        { q: ["What is 'courage' according to Dr. Kalam?", "डॉ. कलाम के अनुसार 'साहस' क्या है?"], a: ['Saving others from disaster without minding your own safety.', 'अपनी सुरक्षा की परवाह किए बिना दूसरों को मुसीबत से बचाना।'] },
        { q: ['Which point do you like most in the ten-point oath? Why?', 'दस-सूत्री शपथ का कौन-सा सूत्र सबसे अच्छा लगा? क्यों?'], a: ['"I will plant at least ten saplings and care for them", because trees give us clean air and keep the earth green.', '"मैं कम से कम दस पौधे लगाऊँगा और उनकी देखभाल करूँगा", क्योंकि पेड़ हमें साफ़ हवा देते हैं और धरती हरी रखते हैं।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Look at the lesson and complete the sentences.', 'पाठ देखकर वाक्य पूरे करो।'],
      bank: ['Avul Pakir Jainulabdeen Abdul Kalam', 'Pakshi Ramanatha Sastry', 'Shri Sivasubramania Iyer', 'polio-affected', 'saving others from disaster'],
      items: [
        { q: ["Kalam's full name is ___.", 'कलाम का पूरा नाम ___ है।'], a: 'Avul Pakir Jainulabdeen Abdul Kalam' },
        { q: ['His best friend in school was ___.', 'स्कूल में उनके सबसे अच्छे दोस्त ___ थे।'], a: 'Pakshi Ramanatha Sastry' },
        { q: ['His favourite teacher was ___.', 'उनके प्रिय शिक्षक ___ थे।'], a: 'Shri Sivasubramania Iyer' },
        { q: ["FROs help ___ persons.", 'एफ़.आर.ओ. ___ लोगों की मदद करते हैं।'], a: 'polio-affected' },
        { q: ['Courage according to Kalam is ___.', 'कलाम के अनुसार साहस ___ है।'], a: 'saving others from disaster' },
      ],
    },
    {
      type: 'match',
      title: ['Match to complete the proverbs.', 'मिलाकर कहावतें पूरी करो।'],
      pairs: [
        [['Tiny drops make', 'नन्ही बूँदें बनाती हैं'], ['a mighty ocean.', 'विशाल सागर।']],
        [['A stitch in time', 'समय पर एक टाँका'], ['saves nine.', 'नौ बचाता है।']],
        [['An apple a day', 'रोज़ एक सेब'], ['keeps the doctor away.', 'डॉक्टर को दूर रखता है।']],
        [['Empty vessels', 'ख़ाली बर्तन'], ['make more noise.', 'ज़्यादा शोर करते हैं।']],
        [['The pen is', 'क़लम'], ['mightier than the sword.', 'तलवार से ज़्यादा ताक़तवर है।']],
        [['Failure is the', 'असफलता'], ['stepping stone to success.', 'सफलता की सीढ़ी है।']],
        [['Barking dogs', 'भौंकने वाले कुत्ते'], ['do not bite.', 'काटते नहीं।']],
        [['Make hay', 'घास सुखा लो'], ['while the sun shines.', 'जब तक धूप है।']],
        [['Honesty', 'ईमानदारी'], ['is the best policy.', 'सबसे अच्छी नीति है।']],
        [['A friend in need', 'ज़रूरत में काम आने वाला दोस्त'], ['is a friend indeed.', 'ही सच्चा दोस्त है।']],
      ],
    },
    {
      type: 'task',
      title: ['Make sentences using the proverbs. Example: Shyam falls sick often; his mother says "An apple a day keeps the doctor away".', 'कहावतों से वाक्य बनाओ। उदाहरण: श्याम अक्सर बीमार पड़ता है; उसकी माँ कहती हैं "रोज़ एक सेब डॉक्टर को दूर रखता है"।'],
      items: [
        { q: ['Honesty is the best policy.', 'ईमानदारी सबसे अच्छी नीति है।'], a: ['Ravi returned the lost purse, because honesty is the best policy.', 'रवि ने खोया बटुआ लौटा दिया, क्योंकि ईमानदारी सबसे अच्छी नीति है।'] },
        { q: ['A friend in need is a friend indeed.', 'ज़रूरत में काम आने वाला दोस्त ही सच्चा दोस्त है।'], a: ['Mohan helped me when I was ill; a friend in need is a friend indeed.', 'जब मैं बीमार था तब मोहन ने मेरी मदद की; ज़रूरत में काम आने वाला दोस्त ही सच्चा दोस्त है।'] },
      ],
    },
    {
      type: 'mcq',
      title: ['Select the appropriate word to complete the sentence.', 'वाक्य पूरा करने के लिए सही शब्द चुनो।'],
      items: [
        { q: ['Abdul Kalam is an ___ to young people.', 'अब्दुल कलाम युवाओं के लिए ___ हैं।'], options: [['achievement', 'उपलब्धि'], ['inspiration', 'प्रेरणा']], a: 1 },
        { q: ["Teachers play an important part in ___ children's interest in subjects.", 'विषयों में बच्चों की रुचि ___ में शिक्षकों की बड़ी भूमिका है।'], options: [['forcing', 'ज़बरदस्ती करना'], ['shaping', 'आकार देना']], a: 1 },
        { q: ['The Defence Research and Development Organisation ___ a lot of scientists.', 'रक्षा अनुसंधान और विकास संगठन बहुत-से वैज्ञानिकों को ___ है।'], options: [['employs', 'नौकरी देता'], ['arrests', 'गिरफ़्तार करता']], a: 0 },
        { q: ['Kalam believes that children will help ___ a strong nation.', 'कलाम मानते हैं कि बच्चे एक मज़बूत देश ___ में मदद करेंगे।'], options: [['citizens', 'नागरिक'], ['build', 'बनाने']], a: 1 },
        { q: ['It is important for children to develop their ___.', 'बच्चों के लिए अपना ___ विकसित करना ज़रूरी है।'], options: [['personalities', 'व्यक्तित्व'], ['brains', 'दिमाग़']], a: 0 },
      ],
    },
    {
      type: 'task',
      title: ['Grammar (pair work): "What will you do for society when you grow up?" Answer with "I will ...".', 'व्याकरण (जोड़ी में): "बड़े होकर तुम समाज के लिए क्या करोगे?" "I will ..." से जवाब दो।'],
      items: [
        { q: ['What will you do for society when you grow up?', 'बड़े होकर तुम समाज के लिए क्या करोगे?'], a: ['I will take care of old people. I will work for the education of girls. I will encourage people to plant more trees.', 'मैं बुज़ुर्गों की देखभाल करूँगा। मैं लड़कियों की शिक्षा के लिए काम करूँगा। मैं लोगों को और पेड़ लगाने के लिए प्रेरित करूँगा।'] },
      ],
    },
    {
      type: 'task',
      title: ['Writing: if you could ask President Kalam three questions, what would they be? Write the answers he might give.', 'लेखन: अगर तुम राष्ट्रपति कलाम से तीन प्रश्न पूछ सकते, तो क्या पूछते? उनके संभावित उत्तर भी लिखो।'],
      items: [
        { q: ['How can I become a scientist?', 'मैं वैज्ञानिक कैसे बन सकता हूँ?'], a: ['Ask questions, read a lot, and work hard with patience.', 'सवाल पूछो, ख़ूब पढ़ो, और धैर्य से मेहनत करो।'] },
        { q: ['What should I do when I fail?', 'असफल होने पर मुझे क्या करना चाहिए?'], a: ['Learn from it and try again; failure is a stepping stone to success.', 'उससे सीखो और फिर कोशिश करो; असफलता सफलता की सीढ़ी है।'] },
      ],
    },
    {
      type: 'task',
      title: ['Writing: complete the story of the man and the girl from the dialogue, then present it as a skit.', 'लेखन: संवाद से आदमी और लड़की की कहानी पूरी करो, फिर उसे नाटक के रूप में प्रस्तुत करो।'],
      passage: [
        'The man: Where are you going?\nThe girl: I am going to the super market.\nThe man: Please allow me to come with you.\nThe girl: I don\'t mind.\nThe man: What is your father?\nThe girl: My father is a businessman.\nThe man: What is your fortune?\nThe girl: My talent is my fortune.\nThe man: Then I can\'t marry you.\nThe girl: I didn\'t ask you to marry me.',
        'आदमी: तुम कहाँ जा रही हो?\nलड़की: मैं सुपर मार्केट जा रही हूँ।\nआदमी: कृपया मुझे अपने साथ चलने दो।\nलड़की: मुझे कोई आपत्ति नहीं।\nआदमी: तुम्हारे पिता क्या करते हैं?\nलड़की: मेरे पिता व्यापारी हैं।\nआदमी: तुम्हारी दौलत क्या है?\nलड़की: मेरी प्रतिभा ही मेरी दौलत है।\nआदमी: तब मैं तुमसे शादी नहीं कर सकता।\nलड़की: मैंने तुमसे शादी करने को कहा ही नहीं।',
      ],
      items: [
        {
          q: ['A man met a girl on the road. He asked her if he could ...', 'सड़क पर एक आदमी एक लड़की से मिला। उसने पूछा कि क्या वह ...'],
          a: ['A man met a girl on the road. He asked her if he could come with her. The girl agreed. So he walked along with her and asked what her father was and what her fortune was. She replied that her father was a businessman and that her talent was her fortune. The man said that he could not marry her. She replied that she had never asked him to.', 'सड़क पर एक आदमी एक लड़की से मिला। उसने पूछा कि क्या वह उसके साथ चल सकता है। लड़की मान गई। तो वह उसके साथ चलने लगा और पूछा कि उसके पिता क्या करते हैं और उसकी दौलत क्या है। उसने बताया कि उसके पिता व्यापारी हैं और उसकी प्रतिभा ही उसकी दौलत है। आदमी ने कहा कि वह उससे शादी नहीं कर सकता। उसने जवाब दिया कि उसने तो कभी कहा ही नहीं था।'],
        },
      ],
    },
    {
      type: 'qa',
      title: ['Listening: "Kitchen Cures". Listen and complete the table.', 'सुनना: "रसोई के इलाज"। सुनो और तालिका पूरी करो।'],
      passage: [
        'Plants, spices and fruits have good healing properties. They have been used by people over hundreds of years. Let us look at some common items used in the kitchen that can help you feel better.\nGinger: Ginger is known to reduce vomiting sensation. If you suffer from travel sickness, it would be good to take a one cm slice of fresh ginger at least 20 minutes before you start your travel.\nMustard: Mustard is known to help those suffering from a cold or slight fever. Soaking your feet in hot water with a little mustard powder can treat a cold, reduce a fever and soothe a headache.\nLemon: The vitamin C in lemons boosts the capacity of the body to heal wounds. It might hurt a bit, but squeezing lemon juice on a wound helps to heal it faster. Also lemons help in erasing scar marks. Applying it on pimples makes them heal faster.',
        'पौधों, मसालों और फलों में अच्छे औषधीय गुण होते हैं। लोग सैकड़ों सालों से इनका इस्तेमाल करते आए हैं। आइए रसोई की कुछ आम चीज़ें देखें जो तुम्हें बेहतर महसूस करा सकती हैं।\nअदरक: अदरक उल्टी जैसा मन होना कम करता है। अगर सफ़र में जी मिचलाता है, तो यात्रा शुरू करने से कम से कम 20 मिनट पहले ताज़ी अदरक का एक सेंटीमीटर टुकड़ा लेना अच्छा रहेगा।\nसरसों: सरसों सर्दी-ज़ुकाम या हल्के बुख़ार में मदद करती है। थोड़ी सरसों पाउडर डले गर्म पानी में पैर डुबोने से ज़ुकाम ठीक होता है, बुख़ार कम होता है और सिरदर्द में आराम मिलता है।\nनींबू: नींबू का विटामिन सी शरीर की घाव भरने की ताक़त बढ़ाता है। थोड़ा चुभ सकता है, पर घाव पर नींबू का रस निचोड़ने से वह जल्दी भरता है। नींबू दाग़ मिटाने में भी मदद करता है। मुहाँसों पर लगाने से वे जल्दी ठीक होते हैं।',
      ],
      items: [
        { q: ['lemon: ailment and process', 'नींबू: बीमारी और तरीक़ा'], a: ['wounds, scars and pimples: squeeze lemon juice on the wound or apply it on pimples', 'घाव, दाग़ और मुहाँसे: घाव पर नींबू का रस निचोड़ो या मुहाँसों पर लगाओ'] },
        { q: ['cold / slight fever: which spice and process?', 'ज़ुकाम / हल्का बुख़ार: कौन-सा मसाला और तरीक़ा?'], a: ['mustard: soak your feet in hot water with a little mustard powder', 'सरसों: थोड़े सरसों पाउडर वाले गर्म पानी में पैर डुबोओ'] },
        { q: ['one centimetre of fresh ginger before travelling: for which ailment?', 'यात्रा से पहले एक सेंटीमीटर ताज़ी अदरक: किस बीमारी के लिए?'], a: ['ginger: travel sickness and vomiting sensation', 'अदरक: सफ़र में जी मिचलाना और उल्टी जैसा लगना'] },
      ],
    },
    {
      type: 'task',
      title: ['Project: identify proverbs in your local language with their meanings. Proverb: "Cut your coat according to your cloth."', 'परियोजना: अपनी स्थानीय भाषा की कहावतें अर्थ सहित लिखो। कहावत: "जितनी चादर हो, उतने पैर फैलाओ।"'],
      items: [
        { q: ['A local proverb', 'एक स्थानीय कहावत'], a: ['"Jitni chadar ho, utne pair phailao" - don\'t try to live beyond your means.', '"जितनी चादर हो, उतने पैर फैलाओ" - अपनी हैसियत से ज़्यादा ख़र्च मत करो।'] },
        { q: ['Use "Cut your coat according to your cloth" in a sentence.', '"Cut your coat according to your cloth" को वाक्य में प्रयोग करो।'], a: ['Don\'t buy an expensive phone with a small salary; cut your coat according to your cloth.', 'कम तनख़्वाह में महँगा फ़ोन मत ख़रीदो; जितनी चादर हो, उतने पैर फैलाओ।'] },
      ],
    },
  ],
  'class8-13': [
    {
      type: 'qa',
      title: ['Answer the following questions about the advertisements.', 'विज्ञापनों के बारे में इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['What has the prize been given for?', 'पुरस्कार किस लिए दिया गया है?'], a: ['For winning the Jago Grahak Jago TV quiz, for being an aware consumer.', 'जागो ग्राहक जागो टीवी प्रश्नोत्तरी जीतने के लिए, यानी जागरूक उपभोक्ता होने के लिए।'] },
        { q: ['What is the ISI mark used for?', 'ISI चिह्न किस काम आता है?'], a: ['It shows that a product is safe and of good quality.', 'यह बताता है कि उत्पाद सुरक्षित और अच्छी गुणवत्ता का है।'] },
        { q: ['Why should we buy packaged spice?', 'हमें पैक किए मसाले क्यों ख़रीदने चाहिए?'], a: ['Loose spices may contain synthetic colours and additives which could be harmful to health.', 'खुले मसालों में नक़ली रंग और मिलावट हो सकती है जो सेहत के लिए हानिकारक है।'] },
        { q: ['How can you know that the gold you are buying is pure?', 'कैसे पता करें कि ख़रीदा जा रहा सोना शुद्ध है?'], a: ['Look for the BIS hallmark symbol on the gold.', 'सोने पर बी.आई.एस. हॉलमार्क चिह्न देखो।'] },
        { q: ['What punishment is given to manufacturers who use a fake ISI mark?', 'नक़ली ISI चिह्न लगाने वाले निर्माताओं को क्या सज़ा मिलती है?'], a: ['Imprisonment up to one year, or a fine up to fifty thousand rupees, or both, and their property can be seized.', 'एक साल तक की जेल, या पचास हज़ार रुपये तक जुर्माना, या दोनों, और उनकी संपत्ति ज़ब्त हो सकती है।'] },
        { q: ["Why is the slogan 'Jago Grahak Jago' used?", "'जागो ग्राहक जागो' नारा क्यों इस्तेमाल होता है?"], a: ['To make consumers aware of their rights so that they are not cheated.', 'उपभोक्ताओं को उनके अधिकारों के बारे में जागरूक करने के लिए, ताकि वे ठगे न जाएँ।'] },
        { q: ['What are the benefits of buying products with the ISI mark?', 'ISI चिह्न वाले उत्पाद ख़रीदने के क्या फ़ायदे हैं?'], a: ['We get safe, good quality products and we are protected from fakes.', 'हमें सुरक्षित, अच्छी गुणवत्ता के उत्पाद मिलते हैं और हम नक़ली चीज़ों से बचते हैं।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Complete the sentences from the lesson.', 'पाठ से वाक्य पूरे करो।'],
      bank: ['one thousand rupees', 'ISI', 'packaged and labelled', 'synthetic colours', 'the purity of gold', 'BIS hallmark', '1800-11-4000'],
      items: [
        { q: ['The winners of the Jago Grahak Jago TV quiz were given a cash prize of ___.', 'जागो ग्राहक जागो टीवी प्रश्नोत्तरी के विजेताओं को ___ का नक़द पुरस्कार मिला।'], a: 'one thousand rupees' },
        { q: ['Sayani Rani asks consumers to recognise the right ___ mark for safety\'s sake.', 'सयानी रानी उपभोक्ताओं से सुरक्षा के लिए सही ___ चिह्न पहचानने को कहती है।'], a: 'ISI' },
        { q: ['Spices can be sold only in ___ form.', 'मसाले सिर्फ़ ___ रूप में बेचे जा सकते हैं।'], a: 'packaged and labelled' },
        { q: ['Loose spices may contain ___ which may be harmful to health.', 'खुले मसालों में ___ हो सकते हैं जो सेहत के लिए हानिकारक हैं।'], a: 'synthetic colours' },
        { q: ['A caratmeter is used for measuring ___.', 'कैरेटमीटर ___ मापने के काम आता है।'], a: 'the purity of gold' },
        { q: ['Always look for the ___ symbol on gold.', 'सोने पर हमेशा ___ चिह्न देखो।'], a: 'BIS hallmark' },
        { q: ['For consumer complaints, the new helpline number is ___.', 'उपभोक्ता शिकायतों के लिए नया हेल्पलाइन नंबर ___ है।'], a: '1800-11-4000' },
      ],
    },
    {
      type: 'match',
      title: ["Add '-ity': match each word with its new form (suitable - suitability).", "'-ity' जोड़ो: हर शब्द को उसके नए रूप से मिलाओ (suitable - suitability)।"],
      pairs: [
        [['pure', 'शुद्ध'], ['purity', 'शुद्धता']],
        [['sure', 'पक्का'], ['surety', 'ज़मानत / निश्चितता']],
        [['grave', 'गंभीर'], ['gravity', 'गंभीरता / गुरुत्व']],
        [['able', 'योग्य'], ['ability', 'योग्यता']],
        [['capable', 'सक्षम'], ['capability', 'क्षमता']],
        [['accountable', 'जवाबदेह'], ['accountability', 'जवाबदेही']],
        [['acceptable', 'स्वीकार्य'], ['acceptability', 'स्वीकार्यता']],
      ],
    },
    {
      type: 'task',
      title: ['Use any five of these words in your own sentences.', 'इनमें से कोई पाँच शब्द अपने वाक्यों में प्रयोग करो।'],
      items: [{ q: ['purity, ability, capability...', 'purity, ability, capability...'], a: ['Check the purity of gold before buying it. She has the ability to sing well. We must understand the gravity of the problem.', 'सोना ख़रीदने से पहले उसकी शुद्धता जाँचो। उसमें अच्छा गाने की योग्यता है। हमें समस्या की गंभीरता समझनी चाहिए।'] }],
    },
    {
      type: 'qa',
      title: ['Grammar: rewrite as advice with "You should". Example: For safety\'s sake, recognise the right ISI mark → You should recognise the ISI mark for your safety.', 'व्याकरण: "You should" से सलाह के रूप में फिर लिखो।'],
      items: [
        { q: ['Be wise, always insist on buying packaged spice.', 'समझदार बनो, हमेशा पैक मसाले ही ख़रीदो।'], a: ['You should be wise and always insist on buying packaged spice.', 'तुम्हें समझदार बनना चाहिए और हमेशा पैक मसाले ख़रीदने चाहिए।'] },
        { q: ['Always remember our new toll free helpline number.', 'हमारा नया टोल फ़्री हेल्पलाइन नंबर हमेशा याद रखो।'], a: ['You should always remember our new toll free helpline number.', 'तुम्हें हमारा नया टोल फ़्री हेल्पलाइन नंबर हमेशा याद रखना चाहिए।'] },
        { q: ['Buy only pure gold.', 'सिर्फ़ शुद्ध सोना ख़रीदो।'], a: ['You should buy only pure gold.', 'तुम्हें सिर्फ़ शुद्ध सोना ख़रीदना चाहिए।'] },
        { q: ["Don't use fake marks.", 'नक़ली चिह्न मत लगाओ।'], a: ['You should not use fake marks.', 'तुम्हें नक़ली चिह्न नहीं लगाने चाहिए।'] },
      ],
    },
    {
      type: 'task',
      title: ['Your friend has a headache. Give some advice. Example: You should take rest.', 'तुम्हारे दोस्त के सिर में दर्द है। कुछ सलाह दो। उदाहरण: तुम्हें आराम करना चाहिए।'],
      items: [{ q: ['Advice', 'सलाह'], a: ['You should drink some water. You should sleep early. You should not watch TV for long.', 'तुम्हें थोड़ा पानी पीना चाहिए। तुम्हें जल्दी सोना चाहिए। तुम्हें देर तक टीवी नहीं देखना चाहिए।'] }],
    },
    {
      type: 'qa',
      title: ['Grammar: rewrite in the passive voice.', 'व्याकरण: कर्मवाच्य (passive voice) में फिर लिखो।'],
      items: [
        { q: ['Someone will penalize you.', 'कोई तुम्हें सज़ा देगा।'], a: ['You will be penalized.', 'तुम्हें सज़ा दी जाएगी।'] },
        { q: ['Somebody will feed the cows.', 'कोई गायों को खिलाएगा।'], a: ['The cows will be fed.', 'गायों को खिलाया जाएगा।'] },
        { q: ['They found 10,000 year old tools in Tarrighat, Chhattisgarh.', 'उन्हें तर्रीघाट, छत्तीसगढ़ में 10,000 साल पुराने औज़ार मिले।'], a: ['10,000 year old tools were found in Tarrighat, Chhattisgarh.', 'तर्रीघाट, छत्तीसगढ़ में 10,000 साल पुराने औज़ार मिले।'] },
        { q: ['The Education Minister gave me this certificate.', 'शिक्षा मंत्री ने मुझे यह प्रमाण-पत्र दिया।'], a: ['I was given this certificate by the Education Minister.', 'मुझे यह प्रमाण-पत्र शिक्षा मंत्री द्वारा दिया गया।'] },
        { q: ['They will serve food in time.', 'वे समय पर खाना परोसेंगे।'], a: ['Food will be served in time.', 'समय पर खाना परोसा जाएगा।'] },
        { q: ['Doordarshan will relay the event.', 'दूरदर्शन कार्यक्रम का प्रसारण करेगा।'], a: ['The event will be relayed by Doordarshan.', 'कार्यक्रम का प्रसारण दूरदर्शन द्वारा किया जाएगा।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Independence Day in our school: complete the passive sentences.', 'हमारे स्कूल में स्वतंत्रता दिवस: कर्मवाच्य वाक्य पूरे करो।'],
      bank: ['hoisted', 'made', 'sung', 'performed', 'given', 'distributed'],
      items: [
        { q: ['The flag will be ___. (hoist)', 'झंडा ___ जाएगा। (hoist)'], a: 'hoisted' },
        { q: ['Speeches will be ___. (make)', 'भाषण ___ जाएँगे। (make)'], a: 'made' },
        { q: ['Songs will be ___. (sing)', 'गीत ___ जाएँगे। (sing)'], a: 'sung' },
        { q: ['Dances will be ___. (perform)', 'नृत्य ___ जाएँगे। (perform)'], a: 'performed' },
        { q: ['Prizes will be ___. (give)', 'पुरस्कार ___ जाएँगे। (give)'], a: 'given' },
        { q: ['Sweets will be ___. (distribute)', 'मिठाइयाँ ___ जाएँगी। (distribute)'], a: 'distributed' },
      ],
    },
    {
      type: 'qa',
      title: ['Writing: arrange the sentences about rains in the right order.', 'लेखन: बारिश के बारे में वाक्यों को सही क्रम में लगाओ।'],
      items: [
        {
          q: ['Firstly... / Lastly... / I like rains for many reasons. / Secondly... / Thirdly...', 'Firstly... / Lastly... / I like rains for many reasons. / Secondly... / Thirdly...'],
          a: ['I like rains for many reasons. Firstly, I love to see water droplets falling on the leaves. Secondly, I enjoy putting paper boats in rushing water. Thirdly, I wait to see the rainbow during the rainy season. Lastly, it is fun to get wet in the rain.', 'मुझे कई कारणों से बारिश पसंद है। पहला, मुझे पत्तियों पर गिरती पानी की बूँदें देखना अच्छा लगता है। दूसरा, बहते पानी में काग़ज़ की नावें छोड़ने में मज़ा आता है। तीसरा, बरसात में मैं इंद्रधनुष का इंतज़ार करता हूँ। आख़िर में, बारिश में भीगना मज़ेदार है।'],
        },
      ],
    },
    {
      type: 'task',
      title: ["Writing: write a paragraph on 'Summer Season' using firstly, secondly, lastly.", "लेखन: firstly, secondly, lastly का प्रयोग करते हुए 'गर्मी का मौसम' पर अनुच्छेद लिखो।"],
      items: [{ q: ['Summer Season', 'गर्मी का मौसम'], a: ['I like summer for many reasons. Firstly, we get long holidays. Secondly, I enjoy eating mangoes and ice-cream. Lastly, I can visit my grandparents in the village.', 'मुझे कई कारणों से गर्मी पसंद है। पहला, हमें लंबी छुट्टियाँ मिलती हैं। दूसरा, मुझे आम और आइसक्रीम खाना अच्छा लगता है। आख़िर में, मैं गाँव में दादा-दादी से मिलने जा सकता हूँ।'] }],
    },
    {
      type: 'fill',
      title: ['Use a dictionary and fill in the blanks (measurements).', 'शब्दकोश देखकर रिक्त स्थान भरो (माप)।'],
      bank: ['0.39', '0.62', '2.2', '0.035', '1000', '1.76', '2.47', '1', '16'],
      items: [
        { q: ['1 centimetre = ___ inch', '1 सेंटीमीटर = ___ इंच'], a: '0.39' },
        { q: ['1 kilometre = ___ mile', '1 किलोमीटर = ___ मील'], a: '0.62' },
        { q: ['1 kilogram = ___ pounds', '1 किलोग्राम = ___ पाउंड'], a: '2.2' },
        { q: ['1 gram = ___ ounce', '1 ग्राम = ___ औंस'], a: '0.035' },
        { q: ['1 tonne = ___ kg', '1 टन = ___ किलो'], a: '1000' },
        { q: ['1 litre = ___ pints', '1 लीटर = ___ पिंट'], a: '1.76' },
        { q: ['1 hectare = ___ acres', '1 हेक्टेयर = ___ एकड़'], a: '2.47' },
        { q: ['12 inches = ___ foot; 3 feet = 1 yard', '12 इंच = ___ फ़ुट; 3 फ़ुट = 1 गज़'], a: '1' },
        { q: ['___ ounces = 1 pound', '___ औंस = 1 पाउंड'], a: '16' },
      ],
    },
    {
      type: 'task',
      title: ['Speaking: ask who can help, then report it. Example: Who could help me to stitch a frock? - I can stitch a frock. - He said that he could stitch a frock.', 'बोलना: पूछो कौन मदद कर सकता है, फिर बताओ। उदाहरण: कौन फ़्रॉक सिलने में मदद कर सकता है? - मैं फ़्रॉक सिल सकता हूँ। - उसने कहा कि वह फ़्रॉक सिल सकता है।'],
      items: [
        { q: ['Who could help me to mend my shoes?', 'मेरे जूते ठीक करने में कौन मदद कर सकता है?'], a: ['Ramu: I can mend your shoes.\nRamu said that he could mend my shoes.', 'रामू: मैं तुम्हारे जूते ठीक कर सकता हूँ।\nरामू ने कहा कि वह मेरे जूते ठीक कर सकता है।'] },
        { q: ['Who could help me to paint the wall?', 'दीवार रंगने में कौन मदद कर सकता है?'], a: ['Sita: I can paint the wall.\nSita said that she could paint the wall.', 'सीता: मैं दीवार रंग सकती हूँ।\nसीता ने कहा कि वह दीवार रंग सकती है।'] },
      ],
    },
    {
      type: 'task',
      title: ['Project: a short class debate on "T.V. is a Blessing". Use: I agree / I don\'t think so / Well, in my opinion...', 'परियोजना: "टीवी एक वरदान है" पर कक्षा में छोटी बहस। प्रयोग करो: I agree / I don\'t think so / Well, in my opinion...'],
      items: [
        { q: ['For', 'पक्ष में'], a: ['I watch T.V. because I get knowledge and news from it, and I can watch live cricket matches.', 'मैं टीवी देखता हूँ क्योंकि इससे ज्ञान और समाचार मिलते हैं, और मैं लाइव क्रिकेट मैच देख सकता हूँ।'] },
        { q: ['Against', 'विपक्ष में'], a: ['I would like to differ, because it wastes much time, affects our eyes and our studies.', 'मैं असहमत हूँ, क्योंकि यह बहुत समय बर्बाद करता है, आँखों और पढ़ाई पर असर डालता है।'] },
      ],
    },
    {
      type: 'mcq',
      title: ['Consumer awareness quiz.', 'उपभोक्ता जागरूकता प्रश्नोत्तरी।'],
      items: [
        { q: ['A caratmeter is used to check the purity of -', 'कैरेटमीटर से किसकी शुद्धता जाँची जाती है -'], options: [['spices', 'मसाले'], ['gold', 'सोना'], ['clothes', 'कपड़े'], ['packed goods', 'पैक सामान']], a: 1 },
        { q: ['The colour of the symbol for vegetarian food on food packets is -', 'खाने के पैकेट पर शाकाहारी भोजन के चिह्न का रंग होता है -'], options: [['blue', 'नीला'], ['green', 'हरा'], ['red', 'लाल'], ['yellow', 'पीला']], a: 1 },
        { q: ['The mark of safety is -', 'सुरक्षा का चिह्न है -'], options: [['ISI', ''], ['SIS', ''], ['ISS', ''], ['SSI', '']], a: 0 },
      ],
    },
    {
      type: 'task',
      title: ['Proverb: use "Health is wealth" in a sentence. (Good health is the greatest wealth.)', 'कहावत: "स्वास्थ्य ही धन है" को वाक्य में प्रयोग करो।'],
      items: [{ q: ['Health is wealth.', 'स्वास्थ्य ही धन है।'], a: ['I exercise every morning, because health is wealth.', 'मैं रोज़ सुबह व्यायाम करता हूँ, क्योंकि स्वास्थ्य ही धन है।'] }],
    },
  ],
  'class8-14': [
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ["What is 'Travelia'?", "'ट्रैवेलिया' क्या है?"], a: ['A new age "disease" caused by the travel bug: a strong urge to travel.', 'घूमने के कीड़े से होने वाली एक नए ज़माने की "बीमारी": घूमने की तेज़ इच्छा।'] },
        { q: ['Who falls prey to it?', 'इसका शिकार कौन होता है?'], a: ['Wealthy people, and especially the urban population.', 'अमीर लोग, और ख़ासकर शहरों में रहने वाले।'] },
        { q: ['Why do people feel anxious to contact travel agents?', 'लोग ट्रैवल एजेंटों से मिलने को बेचैन क्यों होते हैं?'], a: ['They become restless and eager for information about tourist places.', 'वे बेचैन हो जाते हैं और पर्यटन स्थलों की जानकारी के लिए उत्सुक रहते हैं।'] },
        { q: ['When do we see the seasonal outburst?', 'मौसमी उछाल कब दिखता है?'], a: ['Around the time of the summer vacation.', 'गर्मी की छुट्टियों के आसपास।'] },
        { q: ['Research is still required on two things. What are they?', 'दो बातों पर अभी शोध बाक़ी है। वे क्या हैं?'], a: ["Firstly, that one's neighbours are interesting people; secondly, that you do not have to travel far to satisfy your curiosity.", 'पहली, कि हमारे पड़ोसी भी दिलचस्प लोग हैं; दूसरी, कि जिज्ञासा पूरी करने के लिए बहुत दूर जाने की ज़रूरत नहीं।'] },
      ],
    },
    {
      type: 'tf',
      title: ['Write true or false.', 'सही या ग़लत लिखो।'],
      items: [
        { q: ['The patient grows restless and starts rushing to the travel agent.', 'रोगी बेचैन होकर ट्रैवल एजेंट के पास दौड़ने लगता है।'], a: true },
        { q: ['Travelling increases knowledge.', 'यात्रा से ज्ञान बढ़ता है।'], a: true },
        { q: ["'Travelia' is a modern disease of the rich.", "'ट्रैवेलिया' अमीरों की आधुनिक बीमारी है।"], a: true },
        { q: ['The people living in rural areas easily fall prey to it.', 'गाँवों में रहने वाले लोग आसानी से इसके शिकार होते हैं।'], a: false },
        { q: ['The disease mentioned in the lesson is not infectious.', 'पाठ में बताई बीमारी संक्रामक नहीं है।'], a: false },
        { q: ['The seasonal outburst can be seen during the summer vacations.', 'मौसमी उछाल गर्मी की छुट्टियों में दिखता है।'], a: true },
        { q: ['The Germans are fond of taking photographs of themselves before places of historical interest.', 'जर्मन लोगों को ऐतिहासिक जगहों के सामने अपनी तस्वीरें खींचना पसंद है।'], a: false },
      ],
    },
    {
      type: 'qa',
      title: ['Complete the table with information from the lesson.', 'पाठ की जानकारी से तालिका पूरी करो।'],
      items: [
        { q: ['Places in Delhi', 'दिल्ली की जगहें'], a: ['Jantar Mantar, the Mughal Garden', 'जंतर मंतर, मुग़ल गार्डन'] },
        { q: ['Agra', 'आगरा'], a: ['the Taj Mahal', 'ताजमहल'] },
        { q: ['Museum', 'संग्रहालय'], a: ['the Salar Jung Museum, with the big clock', 'बड़ी घड़ी वाला सालार जंग संग्रहालय'] },
      ],
    },
    {
      type: 'pick',
      title: ['Vocabulary: choose the INFECTIOUS diseases (they spread from person to person).', 'शब्दावली: संक्रामक बीमारियाँ चुनो (जो एक से दूसरे में फैलती हैं)।'],
      options: [['Malaria', 'मलेरिया'], ['Cancer', 'कैंसर'], ['Paralysis', 'लकवा'], ['Small-pox', 'चेचक'], ['Cholera', 'हैज़ा'], ['Typhoid', 'टाइफ़ाइड'], ['Pneumonia', 'निमोनिया'], ['AIDS', 'एड्स'], ['Jaundice', 'पीलिया'], ['T.B.', 'तपेदिक'], ['Polio', 'पोलियो'], ['Diarrhoea', 'दस्त']],
      answers: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    },
    {
      type: 'mcq',
      title: ['Complete the sentences with one of the words in brackets.', 'कोष्ठक के किसी एक शब्द से वाक्य पूरे करो।'],
      items: [
        { q: ['Our ___ in the staff made a plan to visit Agra this week.', 'स्टाफ़ में हमारे ___ ने इस हफ़्ते आगरा जाने की योजना बनाई।'], options: [['colleague', 'सहकर्मी'], ['neighbour', 'पड़ोसी']], a: 0 },
        { q: ['Scientists are trying to discover a vaccine for a ___ called AIDS.', 'वैज्ञानिक एड्स नाम की ___ का टीका खोजने की कोशिश कर रहे हैं।'], options: [['disease', 'बीमारी'], ['pneumonia', 'निमोनिया']], a: 0 },
        { q: ['The Red Fort, Jantar Mantar and the Taj Mahal are ___.', 'लाल क़िला, जंतर मंतर और ताजमहल ___ हैं।'], options: [['monuments', 'स्मारक'], ['museums', 'संग्रहालय']], a: 0 },
        { q: ["'Travelia' is a modern disease. People living in ___ fall prey to it.", "'ट्रैवेलिया' आधुनिक बीमारी है। ___ में रहने वाले इसके शिकार होते हैं।"], options: [['urban areas', 'शहरों'], ['rural areas', 'गाँवों']], a: 0 },
        { q: ['The disease mentioned in the lesson is ___.', 'पाठ में बताई बीमारी ___ है।'], options: [['infectious', 'संक्रामक'], ['serious', 'गंभीर']], a: 0 },
      ],
    },
    {
      type: 'fill',
      title: ['Give one word for the following expressions.', 'इन बातों के लिए एक शब्द दो।'],
      bank: ['patient', 'news', 'museum', 'unfamiliar', 'symptom'],
      items: [
        { q: ['One who is sick: ___', 'जो बीमार है: ___'], a: 'patient' },
        { q: ['We can get it from a newspaper, radio and T.V.: ___', 'यह हमें अख़बार, रेडियो और टीवी से मिलती है: ___'], a: 'news' },
        { q: ['The place where we can see old things: ___', 'जहाँ पुरानी चीज़ें देख सकते हैं: ___'], a: 'museum' },
        { q: ["The opposite of 'familiar': ___", "'जाना-पहचाना' का विलोम: ___"], a: 'unfamiliar' },
        { q: ['A sign of change in your body or mind that shows you are not healthy: ___', 'शरीर या मन में बदलाव का संकेत जो बताए कि तुम स्वस्थ नहीं: ___'], a: 'symptom' },
      ],
    },
    {
      type: 'task',
      title: ['Grammar (pair work): ask about places of Chhattisgarh. Example: Have you ever seen Kutumsar Caves? - Yes, I have. When did you go there?', 'व्याकरण (जोड़ी में): छत्तीसगढ़ की जगहों के बारे में पूछो। उदाहरण: क्या तुमने कभी कुटुमसर गुफाएँ देखी हैं? - हाँ। तुम वहाँ कब गए?'],
      items: [
        { q: ['A: Have you ever seen Chitrakoot fall?', 'A: क्या तुमने कभी चित्रकोट जलप्रपात देखा है?'], a: ['B: Yes, I have. I went there in the summer vacations. / No, I haven\'t.', 'B: हाँ, देखा है। मैं गर्मी की छुट्टियों में वहाँ गया था। / नहीं, नहीं देखा।'] },
        { q: ['Make sentences: I / we / you / they / he / she + have / has seen + Sirpur, Mainpat...', 'वाक्य बनाओ: I / we / you / they / he / she + have / has seen + सिरपुर, मैनपाट...'], a: ['I have seen Sirpur. She has seen Mainpat. They have seen Bhoram Dev.', 'मैंने सिरपुर देखा है। उसने मैनपाट देखा है। उन्होंने भोरमदेव देखा है।'] },
      ],
    },
    {
      type: 'task',
      title: ['Writing: would you like to visit the desert, the mountains, the beach and historical places? Say why.', 'लेखन: क्या तुम रेगिस्तान, पहाड़, समुद्र तट और ऐतिहासिक जगहें घूमना चाहोगे? कारण बताओ।'],
      items: [
        { q: ['the mountains', 'पहाड़'], a: ['I would like to visit the mountains because the weather is cool and the views are beautiful.', 'मैं पहाड़ घूमना चाहूँगा क्योंकि वहाँ मौसम ठंडा और नज़ारे सुंदर होते हैं।'] },
        { q: ['the desert', 'रेगिस्तान'], a: ['I would not like to visit the desert because it is very hot and there is little water.', 'मैं रेगिस्तान नहीं जाना चाहूँगा क्योंकि वहाँ बहुत गर्मी होती है और पानी कम होता है।'] },
      ],
    },
    {
      type: 'task',
      title: ['Writing: you have to travel from Raipur to Delhi by train. Explain the steps to fill in the railway reservation form.', 'लेखन: तुम्हें रायपुर से दिल्ली रेल से जाना है। रेल आरक्षण फ़ॉर्म भरने के क़दम बताओ।'],
      items: [{ q: ['Steps', 'क़दम'], a: ['1. Find the train number and name in the time table. 2. Write the date of journey, from Raipur to Delhi. 3. Choose the class (sleeper or AC). 4. Write each passenger\'s name, age and gender. 5. Sign the form and pay the fare.', '1. समय सारणी में ट्रेन का नंबर और नाम देखो। 2. यात्रा की तारीख़ और रायपुर से दिल्ली लिखो। 3. श्रेणी चुनो (स्लीपर या एसी)। 4. हर यात्री का नाम, उम्र और लिंग लिखो। 5. फ़ॉर्म पर हस्ताक्षर करो और किराया दो।'] }],
    },
    {
      type: 'qa',
      title: ["Listening: listen to Satish's travel diary. Where did they stay and how many days?", 'सुनना: सतीश की यात्रा डायरी सुनो। वे कहाँ, किसके साथ और कितने दिन रुके?'],
      passage: [
        "We reached India on 2nd of December. We landed at Bombay at 3.30 early in the morning. We stayed with my aunt in Bombay for two days, and visited the Elephanta caves, Gateway of India and Juhu Beach. Early in the morning on the 4th we drove to Poona where my mother's parents live. We stayed with them for three days and on the night of 6th we took a train to Hyderabad. We reached Hyderabad early in the morning on the 7th. We spent nearly a week in Hyderabad. On 12th afternoon we went to Bangalore, where my father's eldest brother lives. We spent three days in Bangalore. On the 16th, early in the morning, all of us started off for Cochin. The next day we went to Chennai. We reached Chennai on 18th morning. My mother's brother lives in Chennai. We spent three days with them. We took an early morning flight to Delhi on the 22nd. In Delhi we stayed in a hotel. Then on 23rd we went to Agra. On 24th morning we returned to Delhi. Our tickets back to New York were booked for 26th. We took the flight from Delhi on the 26th.",
        'हम 2 दिसंबर को भारत पहुँचे। हम सुबह-सुबह 3.30 बजे बंबई उतरे। हम बंबई में दो दिन अपनी चाची के साथ रुके, और एलिफ़ेंटा गुफाएँ, गेटवे ऑफ़ इंडिया और जुहू बीच देखे। 4 तारीख़ की सुबह हम पूना गए जहाँ मेरी माँ के माता-पिता रहते हैं। हम उनके साथ तीन दिन रुके और 6 की रात हैदराबाद की ट्रेन ली। हम 7 की सुबह हैदराबाद पहुँचे। हमने हैदराबाद में लगभग एक हफ़्ता बिताया। 12 की दोपहर हम बैंगलोर गए, जहाँ मेरे पिता के सबसे बड़े भाई रहते हैं। हमने बैंगलोर में तीन दिन बिताए। 16 की सुबह हम सब कोचीन के लिए निकले। अगले दिन हम चेन्नई गए। हम 18 की सुबह चेन्नई पहुँचे। मेरी माँ के भाई चेन्नई में रहते हैं। हम उनके साथ तीन दिन रहे। 22 की सुबह हमने दिल्ली की फ़्लाइट ली। दिल्ली में हम एक होटल में रुके। फिर 23 को हम आगरा गए। 24 की सुबह हम दिल्ली लौटे। न्यूयॉर्क वापसी के हमारे टिकट 26 के थे। हमने 26 को दिल्ली से फ़्लाइट ली।',
      ],
      items: [
        { q: ['Bombay', 'बंबई'], a: ['with his aunt, two days (visited Elephanta caves, Gateway of India, Juhu Beach)', 'चाची के साथ, दो दिन (एलिफ़ेंटा गुफाएँ, गेटवे ऑफ़ इंडिया, जुहू बीच देखे)'] },
        { q: ['Poona', 'पूना'], a: ["with his mother's parents, three days", 'माँ के माता-पिता के साथ, तीन दिन'] },
        { q: ['Hyderabad', 'हैदराबाद'], a: ['nearly a week', 'लगभग एक हफ़्ता'] },
        { q: ['Bangalore', 'बैंगलोर'], a: ["with his father's eldest brother, three days", 'पिता के सबसे बड़े भाई के साथ, तीन दिन'] },
        { q: ['Chennai', 'चेन्नई'], a: ["with his mother's brother, three days", 'माँ के भाई के साथ, तीन दिन'] },
        { q: ['Delhi and Agra', 'दिल्ली और आगरा'], a: ['in a hotel in Delhi; a day trip to Agra; flew back to New York on the 26th', 'दिल्ली में होटल में; आगरा एक दिन; 26 को न्यूयॉर्क लौटे'] },
      ],
    },
    {
      type: 'task',
      title: ['Group work: on a train, a co-passenger is visiting your home town. Greet, introduce yourselves and tell them about your town.', 'समूह में: रेलगाड़ी में एक सहयात्री तुम्हारे शहर जा रहा है। अभिवादन करो, परिचय दो और अपने शहर के बारे में बताओ।'],
      items: [
        {
          q: ['Hi! I\'m Ronita. Could you tell me about your home town?', 'नमस्ते! मैं रोनिता हूँ। क्या तुम मुझे अपने शहर के बारे में बता सकते हो?'],
          a: ['Hello! My name is Rahul. Nice to meet you. Yes, of course. I am from Raipur. You can see the Purkhauti Muktangan and the Mahant Ghasidas Museum there. Bye, it was good company!', 'नमस्ते! मेरा नाम राहुल है। आपसे मिलकर अच्छा लगा। हाँ, ज़रूर। मैं रायपुर से हूँ। वहाँ आप पुरखौती मुक्तांगन और महंत घासीदास संग्रहालय देख सकती हैं। अलविदा, आपके साथ अच्छा लगा!'],
        },
      ],
    },
    {
      type: 'task',
      title: ['Project: maintain a diary (write the date and the events in order, every day). Proverb: "Many hands make light work."', 'परियोजना: डायरी लिखो (हर दिन तारीख़ और घटनाएँ क्रम से)। कहावत: "कई हाथ मिलकर काम आसान कर देते हैं।"'],
      items: [
        { q: ['A diary entry', 'डायरी का एक पन्ना'], a: ['12 March. Today I got up at six and went to school. We had a drawing class. In the evening I played kabaddi with my friends.', '12 मार्च। आज मैं छह बजे उठा और स्कूल गया। हमारी चित्रकला की कक्षा हुई। शाम को मैंने दोस्तों के साथ कबड्डी खेली।'] },
        { q: ['Use the proverb in a sentence.', 'कहावत को वाक्य में प्रयोग करो।'], a: ['We all cleaned the classroom together in ten minutes; many hands make light work.', 'हम सबने मिलकर दस मिनट में कक्षा साफ़ कर दी; कई हाथ काम आसान कर देते हैं।'] },
      ],
    },
  ],
  'class8-15': [
    {
      type: 'qa',
      title: ['Read the lesson again and complete the table: names of birds, persons and awards.', 'पाठ फिर पढ़ो और तालिका पूरी करो: पक्षियों, व्यक्तियों और पुरस्कारों के नाम।'],
      items: [
        { q: ['Names of birds', 'पक्षियों के नाम'], a: ['humming bird, ostrich, eagle, hawk, vulture, emu, kiwi, yellow-throated sparrow', 'हमिंग बर्ड, शुतुरमुर्ग, बाज़ (ईगल), बाज़ (हॉक), गिद्ध, एमू, कीवी, पीले गले वाली गौरैया'] },
        { q: ['Names of persons', 'व्यक्तियों के नाम'], a: ['Salim Ali, Amiruddin Tyabji, Dr. W. S. Millard', 'सालिम अली, अमीरुद्दीन तैयबजी, डॉ. डब्ल्यू. एस. मिलार्ड'] },
        { q: ['Names of awards', 'पुरस्कारों के नाम'], a: ['Padma Bhushan, Padma Vibhushan', 'पद्म भूषण, पद्म विभूषण'] },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['Why is Salim Ali called the Bird-man of India?', 'सालिम अली को भारत का पक्षी-पुरुष क्यों कहा जाता है?'], a: ['He opened up the world of birds to India; he was India\'s best ornithologist and studied birds in their natural homes.', 'उन्होंने भारत को पक्षियों की दुनिया से परिचित कराया; वे भारत के सबसे अच्छे पक्षी विज्ञानी थे और पक्षियों को उनके प्राकृतिक घर में देखते थे।'] },
        { q: ["What do the feathers of birds tell us?", 'पक्षियों के पंख हमें क्या बताते हैं?'], a: ['Observing the feathers gives us an idea about the life that the bird leads.', 'पंख देखकर पता चलता है कि पक्षी कैसा जीवन जीता है।'] },
        { q: ['"Looking at the beak of a bird, it is possible to understand its life cycle." Explain.', '"पक्षी की चोंच देखकर उसका जीवन समझा जा सकता है।" समझाओ।'], a: ['The shape of the beak shows what the bird eats and how it gets food, for example a hooked beak for flesh and a short strong beak for grains.', 'चोंच के आकार से पता चलता है कि पक्षी क्या खाता है और खाना कैसे पाता है, जैसे मांस के लिए मुड़ी चोंच और दानों के लिए छोटी मज़बूत चोंच।'] },
        { q: ['What influenced Salim Ali to become an ornithologist?', 'सालिम अली को पक्षी विज्ञानी बनने की प्रेरणा कहाँ से मिली?'], a: ['As a child he shot a bird with a yellow streak; Dr. Millard identified it as a yellow-throated sparrow and showed him the society\'s collection of birds. This changed his life.', 'बचपन में उन्होंने पीली धारी वाली एक चिड़िया मारी; डॉ. मिलार्ड ने उसे पीले गले वाली गौरैया बताया और उन्हें सोसाइटी का पक्षी संग्रह दिखाया। इसी से उनका जीवन बदल गया।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Vocabulary: fill in the blanks with: winged bipeds, reptiles, ornithology, budding, intervention, laboratory, identified.', 'शब्दावली: इन शब्दों से रिक्त स्थान भरो।'],
      bank: ['intervention', 'laboratory', 'ornithology', 'identified', 'reptiles', 'budding', 'winged bipeds'],
      items: [
        { q: ['His ___ saved the Bharatpur bird sanctuary.', 'उनके ___ ने भरतपुर पक्षी अभयारण्य को बचाया।'], a: 'intervention' },
        { q: ['Dr. Salim Ali studied birds in natural conditions, not in the ___.', 'डॉ. सालिम अली ने पक्षियों को प्राकृतिक हालात में देखा, ___ में नहीं।'], a: 'laboratory' },
        { q: ['The science of studying birds is known as ___.', 'पक्षियों के अध्ययन का विज्ञान ___ कहलाता है।'], a: 'ornithology' },
        { q: ['The secretary ___ the sparrow as the yellow-throated sparrow.', 'सचिव ने गौरैया को पीले गले वाली गौरैया के रूप में ___।'], a: 'identified' },
        { q: ['Like birds, ___ also lay eggs.', 'पक्षियों की तरह ___ भी अंडे देते हैं।'], a: 'reptiles' },
        { q: ['"The Book of Indian Birds" is a bible for ___ ornithologists.', '"द बुक ऑफ़ इंडियन बर्ड्स" ___ पक्षी विज्ञानियों के लिए धर्मग्रंथ जैसी है।'], a: 'budding' },
        { q: ['Birds are called ___.', 'पक्षियों को ___ कहा जाता है।'], a: 'winged bipeds' },
      ],
    },
    {
      type: 'match',
      title: ['Match the words with their meanings.', 'शब्दों को उनके मतलब से मिलाओ।'],
      pairs: [
        [['ecology', 'पारिस्थितिकी'], ['flowers, animals, birds in the environment', 'पर्यावरण में फूल, जानवर, पक्षी']],
        [['deities', 'देवता'], ['images that we worship', 'जिन मूर्तियों की हम पूजा करते हैं']],
        [['conservation', 'संरक्षण'], ['an attempt to save natural resources', 'प्राकृतिक संसाधन बचाने की कोशिश']],
        [['amateur', 'शौक़िया'], ['those who are not experts', 'जो विशेषज्ञ नहीं हैं']],
        [['honorary', 'मानद'], ['given as an honour, not by the usual rules', 'सम्मान में दिया गया, सामान्य नियमों से नहीं']],
      ],
    },
    {
      type: 'task',
      title: ['Frame your own sentences: high altitudes, distant objects, nature lover, life history.', 'अपने वाक्य बनाओ: high altitudes, distant objects, nature lover, life history.'],
      items: [
        { q: ['high altitudes', 'ऊँचाइयाँ'], a: ['Vultures can fly at high altitudes.', 'गिद्ध बहुत ऊँचाई पर उड़ सकते हैं।'] },
        { q: ['distant objects', 'दूर की चीज़ें'], a: ['Binoculars help us see distant objects.', 'दूरबीन से हमें दूर की चीज़ें दिखती हैं।'] },
        { q: ['nature lover', 'प्रकृति प्रेमी'], a: ['My uncle is a nature lover and plants many trees.', 'मेरे चाचा प्रकृति प्रेमी हैं और बहुत पेड़ लगाते हैं।'] },
        { q: ['life history', 'जीवन वृत्त'], a: ['We read the life history of Salim Ali.', 'हमने सालिम अली का जीवन वृत्त पढ़ा।'] },
      ],
    },
    {
      type: 'task',
      title: ['Grammar: from the Lost and Found box, make sentences. Example: I lost my pen which is red.', 'व्याकरण: खोया-पाया बॉक्स से वाक्य बनाओ। उदाहरण: I lost my pen which is red.'],
      items: [
        { q: ['blue pencil, small purse, black book, green lunch box, yellow bag', 'नीली पेंसिल, छोटा पर्स, काली किताब, हरा टिफ़िन, पीला बैग'], a: ['I lost my pencil which is blue. I lost my purse which is small. I lost my lunch box which is green.', 'मेरी पेंसिल खो गई जो नीली है। मेरा पर्स खो गया जो छोटा है। मेरा टिफ़िन खो गया जो हरा है।'] },
      ],
    },
    {
      type: 'task',
      title: ['Writing: why does an ornithologist need these tools? Binoculars, tape-recorder and mike, sample feathers, bird-tag.', 'लेखन: पक्षी विज्ञानी को ये उपकरण क्यों चाहिए? दूरबीन, टेप रिकॉर्डर और माइक, पंखों के नमूने, बर्ड-टैग।'],
      items: [
        { q: ['Binoculars', 'दूरबीन'], a: ['To watch birds from far away without disturbing them.', 'पक्षियों को परेशान किए बिना दूर से देखने के लिए।'] },
        { q: ['Tape-recorder and mike', 'टेप रिकॉर्डर और माइक'], a: ['To record the calls and songs of birds.', 'पक्षियों की आवाज़ें और गीत रिकॉर्ड करने के लिए।'] },
        { q: ['Sample of bird feathers', 'पंखों के नमूने'], a: ['To compare and identify birds.', 'पक्षियों की तुलना और पहचान के लिए।'] },
        { q: ['Bird-tag', 'बर्ड-टैग'], a: ['To mark a bird and follow where it travels.', 'पक्षी पर निशान लगाकर उसकी यात्रा जानने के लिए।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Read about feathers and complete the notes.', 'पंखों के बारे में पढ़ो और नोट्स पूरे करो।'],
      passage: [
        'The feather is the one thing that makes a bird unique from all other animals - not flight, not eggs. All an animal needs is one feather and it is considered a bird. Feathers not only help birds fly, they also keep birds warm and dry. Feathers are excellent for birds to hide from enemies. Most birds use them to attract and select a mate. Some other roles that feathers serve are balancing on the ground, in flight and as lining inside nests for incubation. There are many kinds of feathers. They can be broadly divided into two types - body feathers and flight feathers.',
        'पंख ही वह चीज़ है जो पक्षी को बाक़ी सभी जानवरों से अलग बनाती है - उड़ना नहीं, अंडे नहीं। किसी जानवर के पास एक भी पंख हो, तो उसे पक्षी माना जाता है। पंख पक्षियों को उड़ने में ही मदद नहीं करते, उन्हें गर्म और सूखा भी रखते हैं। पंख दुश्मनों से छिपने के लिए बहुत अच्छे हैं। ज़्यादातर पक्षी साथी को आकर्षित करने और चुनने में इनका इस्तेमाल करते हैं। पंखों के कुछ और काम हैं - ज़मीन पर और उड़ान में संतुलन, और अंडे सेने के लिए घोंसले के अंदर बिछावन। पंख कई तरह के होते हैं। मोटे तौर पर इन्हें दो तरह में बाँटा जा सकता है - शरीर के पंख और उड़ान के पंख।',
      ],
      items: [
        { q: ['Identity of a bird', 'पक्षी की पहचान'], a: ['the feather: one feather makes an animal a bird', 'पंख: एक पंख होने से जानवर पक्षी माना जाता है'] },
        { q: ['Uses of feathers', 'पंखों के उपयोग'], a: ['flying, keeping warm, keeping dry, hiding from enemies, attracting a mate, balancing, lining nests for incubation', 'उड़ना, गर्म रहना, सूखा रहना, दुश्मनों से छिपना, साथी को आकर्षित करना, संतुलन, अंडे सेने के लिए घोंसले में बिछावन'] },
        { q: ['Kinds of feathers', 'पंखों के प्रकार'], a: ['body feathers and flight feathers', 'शरीर के पंख और उड़ान के पंख'] },
      ],
    },
    {
      type: 'match',
      title: ['Listening: listen about nests and match each bird with its nest.', 'सुनना: घोंसलों के बारे में सुनो और हर पक्षी को उसके घोंसले से मिलाओ।'],
      passage: [
        "All birds make soft nests to lay their eggs. They build them in safe places, away from enemies. The swallows build cup-shaped mud nests on the walls. The Indian tailor bird makes its nest by sewing leaves together with silk. The silk is obtained from a spider's web. Crows build big, untidy nests on tree tops. The nests are made of sticks bound together with mud and moss. The nests are lined with soft wool or hair.",
        'सभी पक्षी अंडे देने के लिए नरम घोंसले बनाते हैं। वे इन्हें दुश्मनों से दूर, सुरक्षित जगहों पर बनाते हैं। अबाबील दीवारों पर कटोरी जैसे मिट्टी के घोंसले बनाती है। भारतीय दर्ज़िन चिड़िया पत्तियों को रेशम से सिलकर घोंसला बनाती है। रेशम मकड़ी के जाले से मिलता है। कौए पेड़ों की चोटियों पर बड़े, बेतरतीब घोंसले बनाते हैं। घोंसले मिट्टी और काई से बँधी डंडियों से बने होते हैं। अंदर नरम ऊन या बाल बिछे होते हैं।',
      ],
      pairs: [
        [['Swallow', 'अबाबील'], ['cup-shaped mud nest on walls', 'दीवार पर कटोरी जैसा मिट्टी का घोंसला']],
        [['Tailor bird', 'दर्ज़िन चिड़िया'], ['leaves sewn together with silk', 'रेशम से सिली पत्तियाँ']],
        [['Crow', 'कौआ'], ['sticks bound by mud, lined with wool', 'मिट्टी से बँधी डंडियाँ, अंदर ऊन']],
      ],
    },
    {
      type: 'task',
      title: ['Describe your favourite bird: name, colour, sound, tail, special features. Then tell the class.', 'अपने प्रिय पक्षी का वर्णन करो: नाम, रंग, आवाज़, पूँछ, विशेषताएँ। फिर कक्षा को बताओ।'],
      items: [{ q: ['My favourite bird', 'मेरा प्रिय पक्षी'], a: ['My favourite bird is the peacock. It is blue and green. It calls "meow-meow". It has a long, beautiful tail with eye-like spots. It dances when clouds gather.', 'मेरा प्रिय पक्षी मोर है। वह नीला और हरा है। वह "म्याऊँ-म्याऊँ" बोलता है। उसकी आँख जैसे धब्बों वाली लंबी, सुंदर पूँछ है। बादल छाने पर वह नाचता है।'] }],
    },
    {
      type: 'task',
      title: ['Project: write about the Chhattisgarh Myna. Proverb: "A rose is a rose is a rose." (People are what they are.)', 'परियोजना: छत्तीसगढ़ की पहाड़ी मैना के बारे में लिखो। कहावत: "गुलाब तो गुलाब ही है।" (लोग जैसे हैं वैसे ही रहते हैं।)'],
      items: [
        { q: ['Chhattisgarh Myna', 'पहाड़ी मैना'], a: ['The hill myna is the state bird of Chhattisgarh. It is shiny black with yellow patches on its head and a bright orange beak. It can copy human voices. It lives in the forests of Bastar.', 'पहाड़ी मैना छत्तीसगढ़ का राजकीय पक्षी है। वह चमकदार काली होती है, सिर पर पीले धब्बे और चटक नारंगी चोंच होती है। वह इंसानों की आवाज़ की नक़ल कर सकती है। वह बस्तर के जंगलों में रहती है।'] },
        { q: ['Use the proverb in a sentence.', 'कहावत को वाक्य में प्रयोग करो।'], a: ['Even after becoming rich he is still kind and simple; a rose is a rose is a rose.', 'अमीर होने के बाद भी वह उतना ही दयालु और सीधा है; गुलाब तो गुलाब ही है।'] },
      ],
    },
  ],
  'class8-16': [
    {
      type: 'mcq',
      title: ['Tick the correct answer.', 'सही उत्तर पर निशान लगाओ।'],
      items: [
        { q: ['The quarrel between the mountain and the squirrel was about -', 'पहाड़ और गिलहरी का झगड़ा किस बारे में था -'], options: [['length', 'लंबाई'], ['size', 'आकार'], ['ability', 'योग्यता'], ['strength', 'ताक़त']], a: 1 },
        { q: ['The mountain is able to -', 'पहाड़ कर सकता है -'], options: [['carry a forest', 'जंगल ढो सकता है'], ['crack a nut', 'अखरोट तोड़ सकता है'], ['make a spry movement', 'फुर्ती से हिल सकता है'], ['make up a year', 'साल बना सकता है']], a: 0 },
        { q: ['The squirrel is able to -', 'गिलहरी कर सकती है -'], options: [['make a sphere', 'गोला बना सकती है'], ['crack a nut', 'अखरोट तोड़ सकती है'], ['make up a year', 'साल बना सकती है'], ['carry forests', 'जंगल ढो सकती है']], a: 1 },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ["Why does the mountain call the squirrel 'little prig'?", "पहाड़ गिलहरी को 'छोटी घमंडी' क्यों कहता है?"], a: ['Because the mountain is proud of its huge size and looks down on the tiny squirrel.', 'क्योंकि पहाड़ को अपने बड़े आकार पर घमंड है और वह नन्ही गिलहरी को छोटा समझता है।'] },
        { q: ['What qualities of the mountain does the squirrel appreciate?', 'गिलहरी पहाड़ के कौन-से गुणों की तारीफ़ करती है?'], a: ['It is very big, it makes a pretty squirrel track, and it can carry forests on its back.', 'वह बहुत बड़ा है, वह गिलहरी के लिए सुंदर रास्ता बनाता है, और अपनी पीठ पर जंगल ढो सकता है।'] },
        { q: ['What tasks is the mountain unable to perform?', 'पहाड़ कौन-से काम नहीं कर सकता?'], a: ['It cannot crack a nut, and it is not small and spry like the squirrel.', 'वह अखरोट नहीं तोड़ सकता, और गिलहरी जैसा छोटा और फुर्तीला नहीं है।'] },
        { q: ["Do you like the squirrel's reasoning? Why?", 'क्या तुम्हें गिलहरी का तर्क अच्छा लगा? क्यों?'], a: ['Yes. Talents differ; everyone, big or small, has a place and a use in the world.', 'हाँ। सबकी प्रतिभा अलग होती है; बड़ा हो या छोटा, दुनिया में सबकी जगह और उपयोग है।'] },
      ],
    },
    {
      type: 'task',
      title: ['Find the meaning of these phrases and make sentences.', 'इन वाक्यांशों का मतलब जानो और वाक्य बनाओ।'],
      items: [
        { q: ['little prig', 'छोटा घमंडी'], a: ['(a small person who thinks too well of himself) Stop showing off, you little prig!', '(ख़ुद को बहुत बड़ा समझने वाला छोटा व्यक्ति) दिखावा बंद करो, छोटे घमंडी!'] },
        { q: ['all sorts of things', 'हर तरह की चीज़ें'], a: ['The shop sells all sorts of things.', 'दुकान में हर तरह की चीज़ें मिलती हैं।'] },
        { q: ['make up a year', 'मिलकर साल बनाना'], a: ['Twelve months make up a year.', 'बारह महीने मिलकर एक साल बनाते हैं।'] },
        { q: ['occupy my place', 'अपनी जगह पर होना'], a: ['Everyone should occupy their place in the line.', 'सबको पंक्ति में अपनी जगह पर रहना चाहिए।'] },
        { q: ['all is well', 'सब ठीक है'], a: ['The doctor said all is well with the baby.', 'डॉक्टर ने कहा कि बच्चे के साथ सब ठीक है।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Words and phrases that describe the mountain and the squirrel.', 'पहाड़ और गिलहरी का वर्णन करने वाले शब्द और वाक्यांश।'],
      items: [
        { q: ['Mountain', 'पहाड़'], a: ['big, very big, large, strong (carries forests on its back), proud', 'बड़ा, बहुत बड़ा, विशाल, ताक़तवर (पीठ पर जंगल ढोता है), घमंडी'] },
        { q: ['Squirrel', 'गिलहरी'], a: ['little, small, spry (quick), clever, can crack a nut', 'छोटी, नन्ही, फुर्तीली, चतुर, अखरोट तोड़ सकती है'] },
      ],
    },
    {
      type: 'qa',
      title: ["Grammar: join the sentences with 'and' or 'but'.", "व्याकरण: वाक्यों को 'and' या 'but' से जोड़ो।"],
      items: [
        { q: ['He read the text book. He made notes from it.', 'उसने पाठ्यपुस्तक पढ़ी। उसने उससे नोट्स बनाए।'], a: ['He read the text book and made notes from it.', 'उसने पाठ्यपुस्तक पढ़ी और उससे नोट्स बनाए।'] },
        { q: ['The average life span of a crocodile in the wild is 45 years. In captivity, they live up to 80 years.', 'जंगल में मगरमच्छ की औसत उम्र 45 साल होती है। क़ैद में वे 80 साल तक जीते हैं।'], a: ['The average life span of a crocodile in the wild is 45 years, but in captivity they live up to 80 years.', 'जंगल में मगरमच्छ की औसत उम्र 45 साल है, पर क़ैद में वे 80 साल तक जीते हैं।'] },
        { q: ['A cricket is an insect from 0.1 to 2 inches long. It has hind legs for jumping.', 'झींगुर 0.1 से 2 इंच लंबा कीड़ा है। उसकी कूदने के लिए पिछली टाँगें होती हैं।'], a: ['A cricket is an insect from 0.1 to 2 inches long and it has hind legs for jumping.', 'झींगुर 0.1 से 2 इंच लंबा कीड़ा है और उसकी कूदने के लिए पिछली टाँगें होती हैं।'] },
        { q: ['You can pay your bill with cash. You also have the option of paying by cheque.', 'तुम बिल नक़द दे सकते हो। चेक से देने का विकल्प भी है।'], a: ['You can pay your bill with cash, and you also have the option of paying by cheque.', 'तुम बिल नक़द दे सकते हो, और चेक से देने का विकल्प भी है।'] },
      ],
    },
    {
      type: 'task',
      title: ['Grammar: compare animals using heavy, big, tall, intelligent, long, slow, small. Example: The giraffe is taller than the elephant.', 'व्याकरण: heavy, big, tall, intelligent, long, slow, small से जानवरों की तुलना करो। उदाहरण: जिराफ़ हाथी से ऊँचा है।'],
      items: [{ q: ['Compare', 'तुलना करो'], a: ['The elephant is heavier than the horse. The tortoise is slower than the rabbit. The snake is longer than the lizard. The monkey is more intelligent than the goat.', 'हाथी घोड़े से भारी है। कछुआ खरगोश से धीमा है। साँप छिपकली से लंबा है। बंदर बकरी से ज़्यादा समझदार है।'] }],
    },
    {
      type: 'task',
      title: ['Writing: write a paragraph about an animal or bird that you find attractive.', 'लेखन: किसी आकर्षक लगने वाले जानवर या पक्षी पर अनुच्छेद लिखो।'],
      items: [{ q: ['The squirrel', 'गिलहरी'], a: ['The squirrel is a small, quick animal with a bushy tail and three stripes on its back. It runs up and down trees and holds nuts in its tiny paws. I love to watch it play.', 'गिलहरी एक छोटा, फुर्तीला जानवर है जिसकी झबरीली पूँछ और पीठ पर तीन धारियाँ होती हैं। वह पेड़ों पर ऊपर-नीचे दौड़ती है और नन्हे पंजों में मेवे पकड़ती है। मुझे उसे खेलते देखना अच्छा लगता है।'] }],
    },
    {
      type: 'qa',
      title: ['Listening: listen about Chilika lake and put the statements in the order you hear them.', 'सुनना: चिल्का झील के बारे में सुनो और कथनों को सुने गए क्रम में लगाओ।'],
      passage: [
        'The Chilika lagoon is on the Eastern Coast of India covering an area of 1100 sq. km. A 35 km long outer channel connects the lagoon to the Bay of Bengal. 215 species of fish and 350 species of plants are found here. Chilika has been designated as a wetland of international importance. Chilika supports some of the largest flocks of migratory birds in the country during winter. Migratory birds arrive from as far away as the Caspian Sea, Lake Baikal, the Aral Sea and Mongolia.',
        'चिल्का लैगून भारत के पूर्वी तट पर 1100 वर्ग किलोमीटर में फैला है। 35 किलोमीटर लंबी एक बाहरी नहर लैगून को बंगाल की खाड़ी से जोड़ती है। यहाँ मछलियों की 215 और पौधों की 350 प्रजातियाँ पाई जाती हैं। चिल्का को अंतरराष्ट्रीय महत्व की आर्द्रभूमि घोषित किया गया है। सर्दियों में चिल्का में देश के सबसे बड़े प्रवासी पक्षियों के झुंड आते हैं। प्रवासी पक्षी कैस्पियन सागर, बैकाल झील, अरल सागर और मंगोलिया जैसी दूर-दूर की जगहों से आते हैं।',
      ],
      items: [
        {
          q: ['Order of the statements', 'कथनों का क्रम'],
          a: ['1. Chilika is a lagoon.  2. It is located on the Eastern Coast of India.  3. A long outer channel connects the lagoon to the Bay of Bengal.  4. Chilika has been designated as a wetland of international importance.  5. Birds arrive from Baikal, the Caspian Sea etc.', '1. चिल्का एक लैगून है।  2. यह भारत के पूर्वी तट पर है।  3. एक लंबी बाहरी नहर लैगून को बंगाल की खाड़ी से जोड़ती है।  4. चिल्का अंतरराष्ट्रीय महत्व की आर्द्रभूमि है।  5. पक्षी बैकाल, कैस्पियन सागर आदि से आते हैं।'],
        },
      ],
    },
    {
      type: 'qa',
      title: ["Pair work: use 'can, may, would, could' to ask politely.", "जोड़ी में: 'can, may, would, could' से विनम्रता से पूछो।"],
      items: [
        { q: ['You are in a new city and want to reach the market.', 'तुम नए शहर में हो और बाज़ार जाना है।'], a: ['Could you please tell me the way to the market?', 'क्या आप मुझे बाज़ार का रास्ता बता सकते हैं?'] },
        { q: ['You want to take part in the Republic Day Parade.', 'तुम गणतंत्र दिवस परेड में भाग लेना चाहते हो।'], a: ['May I take part in the Republic Day Parade, Sir?', 'सर, क्या मैं गणतंत्र दिवस परेड में भाग ले सकता हूँ?'] },
        { q: ['Your brother is playing the tape recorder very loudly.', 'तुम्हारा भाई टेप रिकॉर्डर बहुत तेज़ बजा रहा है।'], a: ['Would you please turn down the volume?', 'क्या तुम आवाज़ थोड़ी कम कर दोगे?'] },
        { q: ['It is cold and your friend has no sweater.', 'ठंड है और तुम्हारे दोस्त के पास स्वेटर नहीं है।'], a: ['Would you like to wear my sweater?', 'क्या तुम मेरा स्वेटर पहनना चाहोगे?'] },
        { q: ['You need your parents\' permission for a school trip.', 'स्कूल यात्रा के लिए माता-पिता की अनुमति चाहिए।'], a: ['Can I go on the school trip, please?', 'क्या मैं स्कूल यात्रा पर जा सकता हूँ?'] },
      ],
    },
    {
      type: 'task',
      title: ['Project: describe the poem in your own language.', 'परियोजना: कविता को अपनी भाषा में बताओ।'],
      items: [{ q: ['The poem in Hindi', 'कविता हिंदी में'], a: ['A mountain called a squirrel a little show-off. The squirrel said that it takes all kinds of things to make the world; the mountain is big, but it is not small and quick, and it cannot crack a nut.', 'एक पहाड़ ने गिलहरी को छोटी घमंडी कहा। गिलहरी बोली कि दुनिया हर तरह की चीज़ों से मिलकर बनती है; पहाड़ बड़ा है, पर छोटा और फुर्तीला नहीं, और वह अखरोट नहीं तोड़ सकता।'] }],
    },
  ],
  'class8-17': [
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['What is special about Rajyavardhan Singh Rathore winning the silver medal in shooting?', 'राज्यवर्धन सिंह राठौर के निशानेबाज़ी में रजत पदक जीतने में क्या ख़ास है?'], a: ["It was India's first individual silver medal in Olympic history.", 'यह ओलंपिक इतिहास में भारत का पहला व्यक्तिगत रजत पदक था।'] },
        { q: ['What makes the country feel proud?', 'देश को किस बात पर गर्व होता है?'], a: ['When someone wins a medal for the country.', 'जब कोई देश के लिए पदक जीतता है।'] },
        { q: ["Why did he wrap the country's flag around himself at the presentation?", 'पदक मिलते समय उन्होंने देश का झंडा अपने चारों ओर क्यों लपेटा?'], a: ['He wanted something close to the symbol which represents the country, and the flag was the best thing.', 'वे देश के प्रतीक के क़रीब कुछ चाहते थे, और झंडा सबसे अच्छी चीज़ थी।'] },
        { q: ['What would he do whenever he needed to focus on the sport?', 'खेल पर ध्यान लगाने के लिए वे क्या करते थे?'], a: ['He would close his eyes and think of the target, his emotions and his game plan for the match.', 'वे आँखें बंद करके निशाने, अपनी भावनाओं और मैच की योजना के बारे में सोचते थे।'] },
        { q: ['Why is aggression important in a sport?', 'खेल में आक्रामकता क्यों ज़रूरी है?'], a: ['When you lose your aggression, you lose your natural way of playing; it keeps you focused and hard at the target.', 'आक्रामकता खोने से खेलने का स्वाभाविक तरीक़ा खो जाता है; यह ध्यान और निशाने पर ज़ोर बनाए रखती है।'] },
      ],
    },
    {
      type: 'mcq',
      title: ['Choose the correct alternative.', 'सही विकल्प चुनो।'],
      items: [
        { q: ['The 28th Olympic Games were held in -', '28वें ओलंपिक खेल कहाँ हुए -'], options: [['Sydney', 'सिडनी'], ['Seoul', 'सियोल'], ['Athens', 'एथेंस'], ['London', 'लंदन']], a: 2 },
        { q: ['How did he feel when he received the silver medal?', 'रजत पदक मिलने पर उन्हें कैसा लगा?'], options: [['absolutely great', 'बहुत ही शानदार'], ['happy', 'ख़ुश'], ['a sense of relief', 'राहत'], ['a sense of pride', 'गर्व']], a: 0 },
        { q: ['Whenever I felt that I was getting anxious, I would -', 'जब भी मुझे घबराहट होती, मैं -'], options: [['sing a song', 'गाना गाता'], ['smile a bit', 'थोड़ा मुस्कुराता'], ['think of the target', 'निशाने के बारे में सोचता'], ['relax, crack a joke and talk to somebody', 'आराम करता, मज़ाक करता और किसी से बात करता']], a: 3 },
      ],
    },
    {
      type: 'task',
      title: ['Vocabulary: use these words in your sentences: accomplish, aggression, target, draped.', 'शब्दावली: इन शब्दों को वाक्यों में प्रयोग करो: accomplish, aggression, target, draped.'],
      items: [
        { q: ['accomplish', 'पूरा करना'], a: ['You can accomplish anything with hard work.', 'मेहनत से तुम कुछ भी पूरा कर सकते हो।'] },
        { q: ['aggression', 'आक्रामकता'], a: ['The team played with aggression and won.', 'टीम ने आक्रामकता से खेलकर जीत हासिल की।'] },
        { q: ['target', 'निशाना / लक्ष्य'], a: ['My target is to score full marks in maths.', 'मेरा लक्ष्य गणित में पूरे अंक लाना है।'] },
        { q: ['draped', 'लपेटा हुआ'], a: ['The coffin was draped in the national flag.', 'ताबूत राष्ट्रीय ध्वज में लिपटा था।'] },
      ],
    },
    {
      type: 'match',
      title: ['Grammar: Who knows what these places are famous for? Match them. (I know that Kawardha is famous for Bhoramdev temple.)', 'व्याकरण: ये जगहें किसलिए प्रसिद्ध हैं? मिलाओ। (मैं जानता हूँ कि कवर्धा भोरमदेव मंदिर के लिए प्रसिद्ध है।)'],
      pairs: [
        [['Kawardha', 'कवर्धा'], ['Bhoramdev temple', 'भोरमदेव मंदिर']],
        [['Rajim', 'राजिम'], ['Rajiv Lochan temple', 'राजीव लोचन मंदिर']],
        [['Kutumsar', 'कुटुमसर'], ['caves', 'गुफाएँ']],
        [['Chitrakoot', 'चित्रकोट'], ['waterfall', 'जलप्रपात']],
        [['Bailadila', 'बैलाडीला'], ['iron ore', 'लौह अयस्क']],
        [['Bhilai', 'भिलाई'], ['steel plant', 'इस्पात संयंत्र']],
        [['Raipur', 'रायपुर'], ['Mana Airport', 'माना हवाई अड्डा']],
        [['Dantewada', 'दंतेवाड़ा'], ['Danteshwari temple', 'दंतेश्वरी मंदिर']],
        [['Dhamtari', 'धमतरी'], ['Gangrel Dam', 'गंगरेल बाँध']],
        [['Khairagarh', 'खैरागढ़'], ['University of Music and Arts', 'संगीत एवं कला विश्वविद्यालय']],
      ],
    },
    {
      type: 'match',
      title: ["Grammar: match the sports person with the game. (I know that Sania Mirza is famous for tennis.)", 'व्याकरण: खिलाड़ी को उसके खेल से मिलाओ। (मैं जानता हूँ कि सानिया मिर्ज़ा टेनिस के लिए प्रसिद्ध हैं।)'],
      pairs: [
        [['Dhanraj Pillay', 'धनराज पिल्लै'], ['hockey', 'हॉकी']],
        [['Anju George', 'अंजू जॉर्ज'], ['long jump', 'लंबी कूद']],
        [['Bhaichung Bhutia', 'बाइचुंग भूटिया'], ['football', 'फ़ुटबॉल']],
        [['Mahendra Singh Dhoni', 'महेंद्र सिंह धोनी'], ['cricket', 'क्रिकेट']],
        [['Sania Mirza', 'सानिया मिर्ज़ा'], ['tennis', 'टेनिस']],
        [['Viswanathan Anand', 'विश्वनाथन आनंद'], ['chess', 'शतरंज']],
        [['Prakash Padukone', 'प्रकाश पादुकोण'], ['badminton', 'बैडमिंटन']],
        [['P.T. Usha', 'पी.टी. उषा'], ['athletics', 'दौड़ (एथलेटिक्स)']],
      ],
    },
    {
      type: 'task',
      title: ["Writing: choose a game, name a famous player, and write what you like in that person's game.", 'लेखन: एक खेल चुनो, एक प्रसिद्ध खिलाड़ी का नाम लो, और लिखो कि उसके खेल में तुम्हें क्या पसंद है।'],
      items: [{ q: ['Cricket', 'क्रिकेट'], a: ['I like Mahendra Singh Dhoni. He stays calm even in difficult moments, finishes matches with big shots and is a very quick wicket-keeper.', 'मुझे महेंद्र सिंह धोनी पसंद हैं। वे मुश्किल समय में भी शांत रहते हैं, बड़े शॉट से मैच ख़त्म करते हैं और बहुत फुर्तीले विकेटकीपर हैं।'] }],
    },
    {
      type: 'qa',
      title: ['Use a dictionary: find the parts of speech (some words have more than one).', 'शब्दकोश देखकर शब्द-भेद बताओ (कुछ शब्दों के एक से ज़्यादा हैं)।'],
      items: [
        { q: ['armyman', 'armyman'], a: ['noun', 'संज्ञा'] },
        { q: ['shooting', 'shooting'], a: ['noun, verb (-ing form), adjective', 'संज्ञा, क्रिया (-ing रूप), विशेषण'] },
        { q: ['proud', 'proud'], a: ['adjective', 'विशेषण'] },
        { q: ['accomplish', 'accomplish'], a: ['verb', 'क्रिया'] },
        { q: ['automatically', 'automatically'], a: ['adverb', 'क्रियाविशेषण'] },
        { q: ['right', 'right'], a: ['adjective, noun, adverb', 'विशेषण, संज्ञा, क्रियाविशेषण'] },
      ],
    },
    {
      type: 'qa',
      title: ['Listening: listen about Sania Mirza and complete the information.', 'सुनना: सानिया मिर्ज़ा के बारे में सुनो और जानकारी पूरी करो।'],
      passage: [
        "On 12 Feb 2005, the tennis sensation from Hyderabad, Sania Mirza, became the first Indian woman to win a WTA tour event in Hyderabad. Daughter of Imran Mirza, who played cricket for Bombay and Hyderabad, and grand niece of Ghulam Ahmed, former Indian cricket captain, she has sports in her blood. Mr. K.K. Birla, president of the Birla Foundation and former president of the All India Tennis Association, announced a cash prize of Rs 2 lakh apart from her $22,000 match award. She is also the first woman to make it to the third round in a grand slam, in the Australian Open 2005, against Serena Williams. She has the 2004 ITK women's singles and doubles titles to her name. Recently she has jumped up to 34th place in the WTA ranking; we wish her many more titles and hope that she makes India proud.",
        '12 फ़रवरी 2005 को हैदराबाद की टेनिस सनसनी सानिया मिर्ज़ा हैदराबाद में डब्ल्यू.टी.ए. टूर प्रतियोगिता जीतने वाली पहली भारतीय महिला बनीं। बंबई और हैदराबाद के लिए क्रिकेट खेलने वाले इमरान मिर्ज़ा की बेटी और भारत के पूर्व क्रिकेट कप्तान ग़ुलाम अहमद की पोती (भतीजी की बेटी), खेल उनके ख़ून में है। बिड़ला फ़ाउंडेशन के अध्यक्ष और अखिल भारतीय टेनिस संघ के पूर्व अध्यक्ष श्री के.के. बिड़ला ने उनके 22,000 डॉलर के मैच पुरस्कार के अलावा 2 लाख रुपये के नक़द इनाम की घोषणा की। वे ऑस्ट्रेलियन ओपन 2005 में सेरेना विलियम्स के ख़िलाफ़ ग्रैंड स्लैम के तीसरे दौर में पहुँचने वाली पहली महिला भी हैं। 2004 के आई.टी.के. महिला एकल और युगल ख़िताब उनके नाम हैं। हाल ही में वे डब्ल्यू.टी.ए. रैंकिंग में 34वें स्थान पर पहुँचीं; हम उन्हें और ख़िताबों की शुभकामनाएँ देते हैं।',
      ],
      items: [
        { q: ['Daughter of', 'किसकी बेटी'], a: ['Imran Mirza', 'इमरान मिर्ज़ा'] },
        { q: ['Grand niece of', 'किसकी पोती (भतीजी की बेटी)'], a: ['Ghulam Ahmed', 'ग़ुलाम अहमद'] },
        { q: ['Opponent in the Australian Open (2005), third round', 'ऑस्ट्रेलियन ओपन (2005) तीसरे दौर की प्रतिद्वंद्वी'], a: ['Serena Williams', 'सेरेना विलियम्स'] },
        { q: ['Received a cash prize of Rs 2 lakh from', 'किससे 2 लाख रुपये का इनाम मिला'], a: ['K.K. Birla', 'के.के. बिड़ला'] },
        { q: ["Sania's achievements and years", 'सानिया की उपलब्धियाँ और साल'], a: ["Won ITK women's singles and doubles: 2004. Third round of the Australian Open: 2005. Won a WTA tour event: 2005.", 'आई.टी.के. महिला एकल और युगल जीते: 2004। ऑस्ट्रेलियन ओपन का तीसरा दौर: 2005। डब्ल्यू.टी.ए. टूर प्रतियोगिता जीती: 2005।'] },
      ],
    },
    {
      type: 'task',
      title: ['Role play: a sports journalist interviews Rajyavardhan Singh Rathore on the day he won the silver medal.', 'रोल प्ले: एक खेल पत्रकार रजत पदक जीतने के दिन राज्यवर्धन सिंह राठौर का साक्षात्कार लेता है।'],
      items: [
        { q: ['Journalist: How do you feel today?', 'पत्रकार: आज आपको कैसा लग रहा है?'], a: ['Rathore: It feels absolutely great to win a medal for my country.', 'राठौर: देश के लिए पदक जीतकर बहुत ही शानदार लग रहा है।'] },
        { q: ['Journalist: What is your message for young shooters?', 'पत्रकार: युवा निशानेबाज़ों के लिए आपका क्या संदेश है?'], a: ['Rathore: Practise hard, stay calm and keep your eyes on nothing but the target.', 'राठौर: ख़ूब अभ्यास करो, शांत रहो और नज़र सिर्फ़ निशाने पर रखो।'] },
      ],
    },
    {
      type: 'task',
      title: ['Project: list famous sports persons of your locality and say why you admire them. Proverb: "Better safe than sorry."', 'परियोजना: अपने इलाक़े के प्रसिद्ध खिलाड़ियों की सूची बनाओ और बताओ तुम उन्हें क्यों पसंद करते हो। कहावत: "पछताने से सावधानी भली।"'],
      items: [{ q: ['Use the proverb in a sentence.', 'कहावत को वाक्य में प्रयोग करो।'], a: ['Wear a helmet when you ride a bike; better safe than sorry.', 'बाइक चलाते समय हेलमेट पहनो; पछताने से सावधानी भली।'] }],
    },
  ],
  'class8-18': [
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['What were the strange words introduced to the audience in Washington?', 'वॉशिंगटन में दर्शकों को कौन-से अनोखे शब्द बताए गए?'], a: ['Alarippu, shabdam, varnam and padam (items of Bharatanatyam).', 'अलारिप्पु, शब्दम, वर्णम और पदम (भरतनाट्यम के अंग)।'] },
        { q: ['What did Sudha always do before her performances?', 'सुधा अपनी प्रस्तुति से पहले हमेशा क्या करती थीं?'], a: ['She explained each item to the audience before she began her dance.', 'नृत्य शुरू करने से पहले वे दर्शकों को हर अंग समझाती थीं।'] },
        { q: ['How did Sudha lose her leg?', 'सुधा ने अपना पैर कैसे खोया?'], a: ['She was injured in a road accident; the injury became infected, and the doctors had to amputate her right leg.', 'वे एक सड़क दुर्घटना में घायल हुईं; चोट में संक्रमण हो गया, और डॉक्टरों को उनका दायाँ पैर काटना पड़ा।'] },
        { q: ['Why did Sudha say "my dream would come true" when she met Dr. Pramod Sethi?', 'डॉ. प्रमोद सेठी से मिलकर सुधा ने क्यों कहा कि उनका सपना पूरा होगा?'], a: ['He had developed the "Jaipur Foot", an artificial leg that could help her dance again.', 'उन्होंने "जयपुर फ़ुट" बनाया था, एक नक़ली पैर जिससे वे फिर नाच सकती थीं।'] },
        { q: ["What was the turning point in Sudha's life?", 'सुधा के जीवन का निर्णायक मोड़ क्या था?'], a: ['Getting the Jaipur Foot, which made her comeback as a dancer possible.', 'जयपुर फ़ुट मिलना, जिससे नर्तकी के रूप में उनकी वापसी संभव हुई।'] },
        { q: ['Why does Sudha feel thrilled?', 'सुधा रोमांचित क्यों होती हैं?'], a: ['Because people wrote that her story inspired them and gave them new hope.', 'क्योंकि लोगों ने लिखा कि उनकी कहानी ने उन्हें प्रेरणा और नई उम्मीद दी।'] },
        { q: ['How did Sudha get the opportunity to act in films?', 'सुधा को फ़िल्मों में अभिनय का मौक़ा कैसे मिला?'], a: ['A producer made the Telugu film Mayuri on her life with her in the lead, and remade it in Hindi as Nache Mayuri.', 'एक निर्माता ने उनके जीवन पर तेलुगु फ़िल्म मयूरी बनाई जिसमें वे मुख्य भूमिका में थीं, और फिर हिंदी में नाचे मयूरी बनाई।'] },
      ],
    },
    {
      type: 'tf',
      title: ['Write true or false.', 'सही या ग़लत लिखो।'],
      items: [
        { q: ['In a road accident Sudha lost her right hand.', 'सड़क दुर्घटना में सुधा ने अपना दायाँ हाथ खोया।'], a: false },
        { q: ['She came back again with her dance.', 'वे अपने नृत्य के साथ फिर लौटीं।'], a: true },
        { q: ["She hasn't worked in any film.", 'उन्होंने किसी फ़िल्म में काम नहीं किया।'], a: false },
        { q: ['She has given performances only in foreign countries.', 'उन्होंने सिर्फ़ विदेशों में प्रस्तुतियाँ दीं।'], a: false },
        { q: ['People wrote that they were not inspired by her success story.', 'लोगों ने लिखा कि उनकी सफलता की कहानी से वे प्रेरित नहीं हुए।'], a: false },
      ],
    },
    {
      type: 'mcq',
      title: ['Choose the correct answer.', 'सही उत्तर चुनो।'],
      items: [
        { q: ['While performing, Sudha wore a -', 'प्रस्तुति के समय सुधा पहनती थीं -'], options: [['modern costume', 'आधुनिक पोशाक'], ['traditional costume', 'पारंपरिक पोशाक'], ['western costume', 'पश्चिमी पोशाक']], a: 1 },
        { q: ['She worked in the film -', 'उन्होंने किस फ़िल्म में काम किया -'], options: [['Nache Mayuri', 'नाचे मयूरी'], ['Arunima', 'अरुणिमा'], ['Gajagamini', 'गजगामिनी']], a: 0 },
        { q: ['Before Sudha was 17 years of age, she had given -', '17 साल की उम्र तक सुधा दे चुकी थीं -'], options: [['more than 70 performances', '70 से ज़्यादा प्रस्तुतियाँ'], ['less than 80 performances', '80 से कम प्रस्तुतियाँ'], ['more than 80 performances', '80 से ज़्यादा प्रस्तुतियाँ']], a: 2 },
        { q: ['Sudha made a historic comeback on -', 'सुधा ने ऐतिहासिक वापसी की -'], options: [['15 October 1983', '15 अक्टूबर 1983'], ['1 January 1982', '1 जनवरी 1982'], ['28 January 1984', '28 जनवरी 1984']], a: 2 },
        { q: ['Sudha Chandran was inspired by -', 'सुधा चंद्रन किससे प्रेरित थीं -'], options: [['Helen Keller', 'हेलन केलर'], ['Elena John', 'एलेना जॉन'], ['Valentina Tereshkova', 'वेलेंटीना तेरेश्कोवा']], a: 0 },
      ],
    },
    {
      type: 'qa',
      title: ['Arrange the sentences in the order they appear in the lesson.', 'वाक्यों को पाठ में आए क्रम में लगाओ।'],
      items: [
        {
          q: ['(a) leg amputated (b) explains each item (c) Jaipur foot (d) comeback recital in Mumbai (e) note from a girl in Washington (f) Nache Mayuri (g) father touched her feet', '(a) पैर कटा (b) हर अंग समझाती हैं (c) जयपुर फ़ुट (d) मुंबई में वापसी (e) वॉशिंगटन में बच्ची का संदेश (f) नाचे मयूरी (g) पिता ने पैर छुए'],
          a: ['(b) Sudha explains each item before her dance (in Washington) → (a) her right leg was amputated after the accident → (c) she gets a Jaipur Foot and starts her comeback → (d) first comeback recital in Mumbai → (g) her father touched her feet → (f) she acts in Nache Mayuri → (e) people write that she inspired them', '(b) सुधा नृत्य से पहले हर अंग समझाती हैं (वॉशिंगटन में) → (a) दुर्घटना के बाद दायाँ पैर कटा → (c) जयपुर फ़ुट लेकर वापसी शुरू → (d) मुंबई में पहली वापसी प्रस्तुति → (g) पिता ने उनके पैर छुए → (f) नाचे मयूरी में अभिनय → (e) लोग लिखते हैं कि उन्होंने प्रेरणा दी'],
        },
      ],
    },
    {
      type: 'fill',
      title: ['Fill in the blanks with: defeats, amputate, historical, miracle, costume.', 'इनसे रिक्त स्थान भरो: defeats, amputate, historical, miracle, costume.'],
      bank: ['costume', 'amputate', 'historical', 'defeated', 'miracle'],
      items: [
        { q: ['Rashmi wore a new ___ for the party.', 'रश्मि ने पार्टी के लिए नई ___ पहनी।'], a: 'costume' },
        { q: ['Rahim was injured and the doctors were forced to ___ his right hand.', 'रहीम घायल हुआ और डॉक्टरों को उसका दायाँ हाथ ___ पड़ा।'], a: 'amputate' },
        { q: ['I visited many ___ places in India.', 'मैंने भारत की कई ___ जगहें देखीं।'], a: 'historical' },
        { q: ['The Indian team ___ the South African team in the hockey match.', 'भारतीय टीम ने हॉकी मैच में दक्षिण अफ़्रीकी टीम को ___।'], a: 'defeated' },
        { q: ['It is only a ___ that Seema once again is able to see this beautiful world.', 'यह एक ___ ही है कि सीमा फिर से यह सुंदर दुनिया देख पा रही है।'], a: 'miracle' },
      ],
    },
    {
      type: 'fill',
      title: ['Crossword: find the words from the clues.', 'पहेली: संकेतों से शब्द पहचानो।'],
      bank: ['dancer', 'miracle', 'accomplished', 'amputate', 'audience', 'tribute', 'amazing'],
      items: [
        { q: ['One who performs a dance on the stage (6 letters): ___', 'जो मंच पर नाचता है (6 अक्षर): ___'], a: 'dancer' },
        { q: ['An act that does not follow the laws of nature (7 letters): ___', 'ऐसी घटना जो प्रकृति के नियमों से परे हो (7 अक्षर): ___'], a: 'miracle' },
        { q: ['Completed successfully (12 letters): ___', 'सफलतापूर्वक पूरा किया (12 अक्षर): ___'], a: 'accomplished' },
        { q: ['To cut off a part of the body (8 letters): ___', 'शरीर का कोई अंग काटना (8 अक्षर): ___'], a: 'amputate' },
        { q: ['People who come to see a performance (8 letters): ___', 'प्रस्तुति देखने आए लोग (8 अक्षर): ___'], a: 'audience' },
        { q: ['Showing respect (7 letters): ___', 'सम्मान दिखाना (7 अक्षर): ___'], a: 'tribute' },
        { q: ['Surprising (7 letters): ___', 'हैरान करने वाला (7 अक्षर): ___'], a: 'amazing' },
      ],
    },
    {
      type: 'match',
      title: ['Make a correct match.', 'सही जोड़ी मिलाओ।'],
      pairs: [
        [['modified', 'संशोधित'], ['to improve', 'सुधारना']],
        [['clarified', 'स्पष्ट किया'], ['to make clear', 'साफ़ करना / समझाना']],
        [['simplified', 'सरल किया'], ['to make simple', 'आसान बनाना']],
        [['rectified', 'ठीक किया'], ['to correct', 'ग़लती सुधारना']],
        [['certified', 'प्रमाणित'], ['to attest formally', 'औपचारिक रूप से प्रमाणित करना']],
        [['purified', 'शुद्ध किया'], ['to make pure', 'शुद्ध करना']],
      ],
    },
    {
      type: 'qa',
      title: ["Grammar: Raju's questions to a new boy. Change them into indirect speech. Example: Raju said to the boy, \"What is your name?\" → Raju asked the boy what his name was.", 'व्याकरण: राजू के प्रश्न। इन्हें अप्रत्यक्ष कथन में बदलो। उदाहरण: Raju asked the boy what his name was.'],
      items: [
        { q: ['Raju said to the boy, "Where do you live?"', 'राजू ने लड़के से कहा, "तुम कहाँ रहते हो?"'], a: ['Raju asked the boy where he lived.', 'राजू ने लड़के से पूछा कि वह कहाँ रहता है।'] },
        { q: ['Raju said to the boy, "Which class do you study in?"', 'राजू ने लड़के से कहा, "तुम किस कक्षा में पढ़ते हो?"'], a: ['Raju asked the boy which class he studied in.', 'राजू ने लड़के से पूछा कि वह किस कक्षा में पढ़ता है।'] },
        { q: ['Raju said to the boy, "Where is your school?"', 'राजू ने लड़के से कहा, "तुम्हारा स्कूल कहाँ है?"'], a: ['Raju asked the boy where his school was.', 'राजू ने लड़के से पूछा कि उसका स्कूल कहाँ है।'] },
        { q: ['Raju said to the boy, "How do you go to school?"', 'राजू ने लड़के से कहा, "तुम स्कूल कैसे जाते हो?"'], a: ['Raju asked the boy how he went to school.', 'राजू ने लड़के से पूछा कि वह स्कूल कैसे जाता है।'] },
      ],
    },
    {
      type: 'task',
      title: ["Writing: complete Teejan Bai's bio-data and write the qualities that made her successful.", 'लेखन: तीजन बाई का जीवन-परिचय पूरा करो और वे गुण लिखो जिनसे वे सफल हुईं।'],
      items: [
        { q: ['Bio-data', 'जीवन-परिचय'], a: ['Name: Teejan Bai. Community: Pardhi adivasi. Specialisation: Pandvani singing. Awards: Padmashri, Sangeet Natak Academy Award. Work: Bhilai Steel Plant.', 'नाम: तीजन बाई। समुदाय: पारधी आदिवासी। विशेषज्ञता: पंडवानी गायन। पुरस्कार: पद्मश्री, संगीत नाटक अकादमी पुरस्कार। काम: भिलाई इस्पात संयंत्र।'] },
        { q: ['Character sketch', 'चरित्र-चित्रण'], a: ['Teejan Bai is brave and determined. She did not give up her dream even when her mother beat her. She worked hard, loved her art and now teaches many students.', 'तीजन बाई बहादुर और दृढ़ निश्चयी हैं। माँ की मार के बावजूद उन्होंने अपना सपना नहीं छोड़ा। उन्होंने मेहनत की, अपनी कला से प्यार किया और अब कई विद्यार्थियों को सिखाती हैं।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Listening: listen to the story of the boy and the puppy and answer in one word or a few words.', 'सुनना: लड़के और पिल्ले की कहानी सुनो और एक-दो शब्दों में उत्तर दो।'],
      passage: [
        "A boy went to a pet shop to buy a puppy. There were four puppies sitting together. The price of each of them was Rs. 50. There was one white puppy sitting alone in a corner.\nBoy: Is that white puppy for sale?\nShopkeeper: It is lame, it's not for sale.\nBoy: What will you do with this one?\nShopkeeper: Nothing.\nBoy: Can I play with the puppy?\nShopkeeper: Sure.\nThe boy played with the puppy for some time. The puppy licked the boy and played with him and both of them became friends.\nBoy: Sir, I want to buy this puppy.\nShopkeeper: But that is not for sale.\nBut the boy kept on repeating the same question. Finally the shopkeeper agreed. The boy checked his pockets. He had only Rs. 40. He ran to his mother to get the rest of the money.\nShopkeeper: But, why don't you want to buy a good one for the same price?\nThe boy didn't say anything. He lifted his left pant leg and showed it to the shopkeeper. He was wearing a brace.",
        'एक लड़का पिल्ला ख़रीदने पालतू जानवरों की दुकान पर गया। चार पिल्ले साथ बैठे थे। हर एक का दाम 50 रुपये था। एक सफ़ेद पिल्ला कोने में अकेला बैठा था।\nलड़का: क्या वह सफ़ेद पिल्ला बिकाऊ है?\nदुकानदार: वह लँगड़ा है, बिकाऊ नहीं है।\nलड़का: आप इसका क्या करेंगे?\nदुकानदार: कुछ नहीं।\nलड़का: क्या मैं पिल्ले के साथ खेल सकता हूँ?\nदुकानदार: ज़रूर।\nलड़का कुछ देर पिल्ले के साथ खेला। पिल्ले ने उसे चाटा और उसके साथ खेला, और दोनों दोस्त बन गए।\nलड़का: साहब, मैं यह पिल्ला ख़रीदना चाहता हूँ।\nदुकानदार: पर वह बिकाऊ नहीं है।\nपर लड़का वही बात दोहराता रहा। आख़िरकार दुकानदार मान गया। लड़के ने अपनी जेबें देखीं। उसके पास सिर्फ़ 40 रुपये थे। बाक़ी पैसे लाने वह अपनी माँ के पास दौड़ा।\nदुकानदार: पर उसी दाम में अच्छा पिल्ला क्यों नहीं ख़रीदते?\nलड़का कुछ नहीं बोला। उसने अपनी बाईं पतलून ऊपर उठाकर दुकानदार को दिखाई। उसने पैर में लोहे का सहारा (ब्रेस) पहना था।',
      ],
      items: [
        { q: ['What was the colour of the puppy sitting in the corner?', 'कोने में बैठे पिल्ले का रंग क्या था?'], a: ['white', 'सफ़ेद'] },
        { q: ['How many puppies were there in the shop?', 'दुकान में कितने पिल्ले थे?'], a: ['five (four together and one in the corner)', 'पाँच (चार साथ और एक कोने में)'] },
        { q: ['Why did the shopkeeper say the white puppy was not for sale?', 'दुकानदार ने सफ़ेद पिल्ले को बिकाऊ क्यों नहीं बताया?'], a: ['because it was lame', 'क्योंकि वह लँगड़ा था'] },
        { q: ['For how much money did the boy buy the lame puppy?', 'लड़के ने लँगड़ा पिल्ला कितने में ख़रीदा?'], a: ['Rs. 50 - "for the same price"', '50 रुपये - "उसी दाम में"'] },
        { q: ['How much money did the boy bring from his mother?', 'लड़का माँ से कितने पैसे लाया?'], a: ['Rs. 10', '10 रुपये'] },
        { q: ['Why do you think the boy bought the lame puppy?', 'तुम्हारे विचार से लड़के ने लँगड़ा पिल्ला क्यों ख़रीदा?'], a: ['He also had a weak leg and wore a brace, so he understood the puppy and loved it.', 'उसका भी एक पैर कमज़ोर था और वह ब्रेस पहनता था, इसलिए वह पिल्ले का दर्द समझता था और उससे प्यार करता था।'] },
      ],
    },
    {
      type: 'task',
      title: ['Project: collect pictures of famous artists of your area and list their names and their art.', 'परियोजना: अपने क्षेत्र के प्रसिद्ध कलाकारों के चित्र इकट्ठा करो और उनके नाम और कला की सूची बनाओ।'],
      items: [{ q: ['Artists of Chhattisgarh', 'छत्तीसगढ़ के कलाकार'], a: ['Teejan Bai - Pandvani; Devdas Banjare - Panthi dance; Habib Tanvir - theatre', 'तीजन बाई - पंडवानी; देवदास बंजारे - पंथी नृत्य; हबीब तनवीर - रंगमंच'] }],
    },
  ],
  'class8-19': [
    {
      type: 'mcq',
      title: ['Tick the correct answer.', 'सही उत्तर पर निशान लगाओ।'],
      items: [
        { q: ['J.A. is used for -', 'J.A. किसके लिए लिखा गया है -'], options: [['Jerusha and Abbott', 'जेरूशा और एबट'], ['Jerusha Abbott', 'जेरूशा एबट'], ['Jean Abbott', 'जीन एबट'], ['Jean L. Jerusha', 'जीन एल. जेरूशा']], a: 1 },
        { q: ['Jerusha Abbott is -', 'जेरूशा एबट है -'], options: [['a bald man', 'एक गंजा आदमी'], ['a naughty boy', 'एक शरारती लड़का'], ['an orphan student', 'एक अनाथ छात्रा'], ['a farm girl', 'खेत की लड़की']], a: 2 },
        { q: ['Mrs. Lippett may be -', 'श्रीमती लिपेट हो सकती हैं -'], options: [["Jerusha's mother", 'जेरूशा की माँ'], ['in charge of the John Grier Home', 'जॉन ग्रियर होम की प्रभारी'], ['teacher of Jerusha', 'जेरूशा की शिक्षिका'], ['wife of Daddy-Long-Legs', 'डैडी-लॉन्ग-लेग्स की पत्नी']], a: 1 },
        { q: ["'Are you bald?' is written to -", "'क्या आप गंजे हैं?' किसे लिखा गया -"], options: [['John Grier', 'जॉन ग्रियर'], ['Mrs. Lippett', 'श्रीमती लिपेट'], ['Daddy-Long-Legs', 'डैडी-लॉन्ग-लेग्स'], ['Jerusha Abbott', 'जेरूशा एबट']], a: 2 },
      ],
    },
    {
      type: 'tf',
      title: ['Answer Yes (True) or No (False).', 'हाँ (सही) या नहीं (ग़लत) में उत्तर दो।'],
      items: [
        { q: ['Is the writer happy to go on a trip to a farm?', 'क्या लेखिका खेत की यात्रा से ख़ुश है?'], a: true },
        { q: ['Is the home in the lesson the same as your home?', 'क्या पाठ का घर तुम्हारे घर जैसा है?'], a: false },
        { q: ['Does the writer love Daddy-Long-Legs?', 'क्या लेखिका डैडी-लॉन्ग-लेग्स से प्यार करती है?'], a: true },
        { q: ['Has she finished her examination?', 'क्या उसकी परीक्षा ख़त्म हो गई है?'], a: true },
        { q: ['Has Daddy-Long-Legs answered her questions?', 'क्या डैडी-लॉन्ग-लेग्स ने उसके सवालों का जवाब दिया है?'], a: false },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions in short.', 'इन प्रश्नों के छोटे उत्तर दो।'],
      items: [
        { q: ['What is the promise made in the first letter?', 'पहले पत्र में क्या वादा किया गया है?'], a: ['That she will write a letter soon, when the examinations are over.', 'कि परीक्षा ख़त्म होने पर वह जल्द ही पत्र लिखेगी।'] },
        { q: ['Why does the writer say that this is not a letter?', 'लेखिका क्यों कहती है कि यह पत्र नहीं है?'], a: ['Because it is just a short line; she is busy studying for her examinations.', 'क्योंकि यह बस एक छोटी लाइन है; वह परीक्षा की पढ़ाई में व्यस्त है।'] },
        { q: ['Why is the writer happy to go on a trip?', 'लेखिका यात्रा से ख़ुश क्यों है?'], a: ['She has never been on a farm, and she will be free for three months.', 'वह कभी खेत पर नहीं गई, और तीन महीने आज़ाद रहेगी।'] },
        { q: ["Why does the writer say 'I am going to love being free'?", "लेखिका क्यों कहती है 'मुझे आज़ाद रहना बहुत अच्छा लगेगा'?"], a: ['She has always lived under the strict rules of the John Grier Home.', 'वह हमेशा जॉन ग्रियर होम के सख़्त नियमों में रही है।'] },
        { q: ['What is the name of the home the writer lives in?', 'लेखिका जिस घर में रहती है उसका नाम क्या है?'], a: ['The John Grier Home.', 'जॉन ग्रियर होम।'] },
        { q: ['What is the feeling you have for the writer?', 'लेखिका के लिए तुम्हें कैसा लगता है?'], a: ['I like her; she is cheerful, hard-working and full of fun, though she is an orphan.', 'मुझे वह अच्छी लगती है; अनाथ होकर भी वह ख़ुशमिज़ाज, मेहनती और मज़ेदार है।'] },
      ],
    },
    {
      type: 'mcq',
      title: ['Vocabulary: choose the feeling (happy, sad, smiling, shy, angry, satisfied, confused).', 'शब्दावली: भावना चुनो (happy, sad, smiling, shy, angry, satisfied, confused)।'],
      items: [
        { q: ['Jerusha has just finished her last examination. She feels -', 'जेरूशा की आख़िरी परीक्षा ख़त्म हुई। वह महसूस करती है -'], options: [['happy', 'ख़ुश'], ['angry', 'नाराज़'], ['sad', 'उदास']], a: 0 },
        { q: ["She can't decide what colour Daddy's hair is. She is -", 'वह तय नहीं कर पा रही कि डैडी के बाल किस रंग के हैं। वह है -'], options: [['satisfied', 'संतुष्ट'], ['confused', 'उलझन में'], ['shy', 'शर्मीली']], a: 1 },
        { q: ['A child does not want to speak in front of new people. The child is -', 'एक बच्चा नए लोगों के सामने बोलना नहीं चाहता। बच्चा है -'], options: [['shy', 'शर्मीला'], ['angry', 'नाराज़'], ['smiling', 'मुस्कुराता']], a: 0 },
      ],
    },
    {
      type: 'task',
      title: ["Grammar: the gram panchayat's plans for the next five years. Use 'going to'. Example: Our gram panchayat is going to open two new schools.", "व्याकरण: अगले पाँच साल की ग्राम पंचायत की योजनाएँ। 'going to' का प्रयोग करो।"],
      items: [{ q: ['build roads, dig tube wells, start a health centre, open a public library...', 'सड़कें बनाना, नलकूप खोदना, स्वास्थ्य केंद्र शुरू करना, सार्वजनिक पुस्तकालय खोलना...'], a: ['Our gram panchayat is going to build roads. It is going to dig tube wells. It is going to start a health centre and open a public library.', 'हमारी ग्राम पंचायत सड़कें बनाने जा रही है। वह नलकूप खोदने जा रही है। वह स्वास्थ्य केंद्र शुरू करने और सार्वजनिक पुस्तकालय खोलने जा रही है।'] }],
    },
    {
      type: 'fill',
      title: ["Grammar: Raju wants to meet a busy doctor. Complete the doctor's replies with 'going to'.", "व्याकरण: राजू एक व्यस्त डॉक्टर से मिलना चाहता है। डॉक्टर के जवाब 'going to' से पूरे करो।"],
      bank: ['am going to attend', 'am going to operate', 'am going to have', 'am going to work', 'am going to teach'],
      items: [
        { q: ['Monday: Sorry, I ___ a health conference.', 'सोमवार: माफ़ करना, मैं एक स्वास्थ्य सम्मेलन में ___।'], a: 'am going to attend' },
        { q: ['Tuesday: I ___ on a patient for heart disease.', 'मंगलवार: मैं दिल के एक मरीज़ का ___।'], a: 'am going to operate' },
        { q: ['Wednesday: Sorry, I ___ a hospital inspection.', 'बुधवार: माफ़ करना, मेरा अस्पताल निरीक्षण ___।'], a: 'am going to have' },
        { q: ['Thursday: I ___ in an eye camp.', 'गुरुवार: मैं आँखों के शिविर में ___।'], a: 'am going to work' },
        { q: ['Friday: Sorry, that day I ___ a marriage.', 'शुक्रवार: माफ़ करना, उस दिन मैं एक शादी में ___।'], a: 'am going to attend' },
        { q: ['Saturday: I ___ medical students at the medical college.', 'शनिवार: मैं मेडिकल कॉलेज में छात्रों को ___।'], a: 'am going to teach' },
      ],
    },
    {
      type: 'task',
      title: ['Writing: describe a friend (like the description of Fizza): age, hair, eyes, height, build, dress.', 'लेखन: किसी दोस्त का वर्णन करो (फ़िज़ा के वर्णन की तरह): उम्र, बाल, आँखें, ऊँचाई, कद-काठी, पहनावा।'],
      items: [{ q: ['My friend', 'मेरा दोस्त'], a: ['My friend Rohan is 13 years old. He has short black hair and brown eyes. He is tall and slim. He wears a school uniform and goes to school by bicycle.', 'मेरा दोस्त रोहन 13 साल का है। उसके छोटे काले बाल और भूरी आँखें हैं। वह लंबा और दुबला है। वह स्कूल यूनिफ़ॉर्म पहनता है और साइकिल से स्कूल जाता है।'] }],
    },
    {
      type: 'qa',
      title: ["Writing: read Chelsi's birthday e-mail to her father and answer.", 'लेखन: चेल्सी का अपने पिता को भेजा जन्मदिन का ई-मेल पढ़ो और उत्तर दो।'],
      items: [
        { q: ['Who is the sender of this e-mail?', 'इस ई-मेल को किसने भेजा?'], a: ['Chelsi, the loving daughter.', 'चेल्सी, प्यारी बेटी।'] },
        { q: ['Who is the receiver of this e-mail?', 'यह ई-मेल किसे मिला?'], a: ['Her Daddy (Kamlesh Sahu).', 'उसके पापा (कमलेश साहू)।'] },
        { q: ['What is the subject of the e-mail?', 'ई-मेल का विषय क्या है?'], a: ['Happy Birthday', 'जन्मदिन की शुभकामनाएँ'] },
        { q: ['Write an e-mail to your friend wishing a happy new year.', 'दोस्त को नए साल की शुभकामना का ई-मेल लिखो।'], a: ['Subject: Happy New Year\nDear Asha,\nWish you a very happy and bright new year!\nYour friend,\nMeena', 'विषय: नया साल मुबारक\nप्रिय आशा,\nतुम्हें नए साल की बहुत-बहुत शुभकामनाएँ!\nतुम्हारी सहेली,\nमीना'] },
      ],
    },
    {
      type: 'mcq',
      title: ['Listening: listen to the descriptions. Who is it?', 'सुनना: वर्णन सुनो। यह कौन है?'],
      passage: [
        "(i) He is the oldest member of Deepu's family. He is bald. He wears glasses with a square frame. He doesn't wear a hat, but puts on a coat and tie.\n(ii) Nimmi has curly hair and is tall. She looks smart with her yellow T-shirt and blue jeans. She is very quick in solving puzzles.\n(iii) Pradeep is a thoughtful boy in a dotted shirt and grey trousers. He has neat hair and enjoys sitting in lonely places.\n(iv) Anuj is a naughty young boy. His elder sister gives him lessons in mathematics. He wears brown half pants, a white shirt and black shoes as his school uniform.",
        '(i) वे दीपू के परिवार के सबसे बुज़ुर्ग सदस्य हैं। वे गंजे हैं। वे चौकोर फ़्रेम का चश्मा पहनते हैं। वे टोपी नहीं पहनते, पर कोट और टाई पहनते हैं।\n(ii) निम्मी के घुँघराले बाल हैं और वह लंबी है। पीली टी-शर्ट और नीली जींस में वह स्मार्ट दिखती है। वह पहेलियाँ बहुत जल्दी सुलझाती है।\n(iii) प्रदीप बिंदीदार कमीज़ और भूरे पतलून में एक विचारशील लड़का है। उसके बाल सँवरे हैं और उसे अकेली जगहों पर बैठना पसंद है।\n(iv) अनुज एक शरारती छोटा लड़का है। उसकी बड़ी बहन उसे गणित पढ़ाती है। वह स्कूल यूनिफ़ॉर्म में भूरा हाफ़-पैंट, सफ़ेद कमीज़ और काले जूते पहनता है।',
      ],
      items: [
        { q: ['Who is bald and wears glasses with a square frame?', 'कौन गंजा है और चौकोर फ़्रेम का चश्मा पहनता है?'], options: [["Deepu's grandfather", 'दीपू के दादाजी'], ['Pradeep', 'प्रदीप'], ['Anuj', 'अनुज']], a: 0 },
        { q: ['Who has curly hair and is quick in solving puzzles?', 'किसके घुँघराले बाल हैं और वह पहेलियाँ जल्दी सुलझाती है?'], options: [['Nimmi', 'निम्मी'], ['Anuj', 'अनुज'], ['Pradeep', 'प्रदीप']], a: 0 },
        { q: ['Who wears a dotted shirt and enjoys sitting in lonely places?', 'कौन बिंदीदार कमीज़ पहनता है और अकेले बैठना पसंद करता है?'], options: [['Anuj', 'अनुज'], ['Pradeep', 'प्रदीप'], ['Nimmi', 'निम्मी']], a: 1 },
        { q: ['Who is naughty and wears brown half pants?', 'कौन शरारती है और भूरा हाफ़-पैंट पहनता है?'], options: [['Pradeep', 'प्रदीप'], ["Deepu's grandfather", 'दीपू के दादाजी'], ['Anuj', 'अनुज']], a: 2 },
      ],
    },
    {
      type: 'task',
      title: ['Pair work: Have you ever ...? (given a speech, visited Bastar mela, climbed a mountain, won a race, cooked food...)', 'जोड़ी में: क्या तुमने कभी ...? (भाषण दिया, बस्तर मेला देखा, पहाड़ चढ़ा, दौड़ जीती, खाना पकाया...)'],
      items: [
        { q: ['Have you ever given a speech?', 'क्या तुमने कभी भाषण दिया है?'], a: ['Yes, I have. / No, I have not.', 'हाँ, दिया है। / नहीं, नहीं दिया।'] },
        { q: ['Have you ever climbed a mountain?', 'क्या तुम कभी पहाड़ पर चढ़े हो?'], a: ['Yes, I have. I climbed Mainpat last year.', 'हाँ, चढ़ा हूँ। पिछले साल मैं मैनपाट चढ़ा था।'] },
      ],
    },
    {
      type: 'task',
      title: ['Project: prepare a character sketch of an interesting person you like the most and say why they are special.', 'परियोजना: अपने सबसे पसंदीदा व्यक्ति का चरित्र-चित्रण करो और बताओ वे ख़ास क्यों हैं।'],
      items: [{ q: ['My grandmother', 'मेरी दादी'], a: ['My grandmother is 70 years old but very active. She tells us wonderful stories, cooks tasty food and helps everyone in the village. She is special because she is always cheerful and kind.', 'मेरी दादी 70 साल की हैं पर बहुत सक्रिय हैं। वे हमें बढ़िया कहानियाँ सुनाती हैं, स्वादिष्ट खाना बनाती हैं और गाँव में सबकी मदद करती हैं। वे ख़ास हैं क्योंकि वे हमेशा ख़ुश और दयालु रहती हैं।'] }],
    },
  ],
  'class8-20': [
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ["Whom does 'I' refer to in the poem?", "कविता में 'मैं' कौन है?"], a: ['The poet, W. H. Davies.', 'कवि, डब्ल्यू. एच. डेविस।'] },
        { q: ["What do the poet's eyes look like in the fog?", 'कोहरे में कवि की आँखें कैसी लगती हैं?'], a: ['Like balls of burning lead.', 'जलते सीसे की गेंदों जैसी।'] },
        { q: ['Why did the poet lose his judgement?', 'कवि ने अपना अंदाज़ा क्यों खो दिया?'], a: ['The fog grew so black that he could not see or know any place, so he lost his sense of distance and space.', 'कोहरा इतना काला हो गया कि उसे कोई जगह न दिखी न समझ आई, इसलिए दूरी और जगह का अंदाज़ा खो गया।'] },
        { q: ['Who was the man who passed by the poet?', 'कवि के पास से गुज़रने वाला आदमी कौन था?'], a: ['A blind man.', 'एक अंधा आदमी।'] },
        { q: ['How did the poet reach home?', 'कवि घर कैसे पहुँचा?'], a: ['He followed the blind man like a child, and the blind man led him home.', 'वह बच्चे की तरह अंधे आदमी के पीछे चला, और अंधा आदमी उसे घर ले गया।'] },
        { q: ['Which word tells us that the second man was blind?', 'कौन-सा शब्द बताता है कि दूसरा आदमी अंधा था?'], a: ['"rapped" - he rapped the stones in front with his stick to find the way.', '"rapped" - वह रास्ता पहचानने के लिए छड़ी से सामने के पत्थर ठकठकाता था।'] },
        { q: ['What message do you get from this poem?', 'इस कविता से क्या संदेश मिलता है?'], a: ['A person who cannot see is not always helpless; sometimes he can help those who can see.', 'जो देख नहीं सकता, वह हमेशा लाचार नहीं होता; कभी-कभी वह देखने वालों की मदद कर सकता है।'] },
      ],
    },
    {
      type: 'tf',
      title: ['Write true or false.', 'सही या ग़लत लिखो।'],
      items: [
        { q: ['The man was able to see everything in the fog.', 'आदमी कोहरे में सब कुछ देख पा रहा था।'], a: false },
        { q: ['In the fog, his eyes looked like burning lead.', 'कोहरे में उसकी आँखें जलते सीसे जैसी लगीं।'], a: true },
        { q: ['He imagines that the lamps, lights and cars are heavenly stars.', 'वह सोचता है कि लैंप, रोशनी और गाड़ियाँ आसमान के तारे हैं।'], a: true },
        { q: ['The blind man helped him to cross the road.', 'अंधे आदमी ने उसे सड़क पार करने में मदद की।'], a: false },
        { q: ['The poet reached his home safely.', 'कवि सुरक्षित घर पहुँच गया।'], a: true },
      ],
    },
    {
      type: 'mcq',
      title: ['Which stanza (1 to 6) gives this sense?', 'यह भाव किस पद (1 से 6) में है?'],
      items: [
        { q: ['The person reached his home safely with the help of a blind man.', 'व्यक्ति एक अंधे आदमी की मदद से सुरक्षित घर पहुँचा।'], options: [['stanza 1', ''], ['stanza 3', ''], ['stanza 5', ''], ['stanza 6', '']], a: 3 },
        { q: ['The man was helpless and not able to decide where he was.', 'आदमी लाचार था और तय नहीं कर पा रहा था कि वह कहाँ है।'], options: [['stanza 2', ''], ['stanza 3', ''], ['stanza 4', ''], ['stanza 6', '']], a: 1 },
        { q: ['It is not possible to see anything during fog.', 'कोहरे में कुछ भी देख पाना संभव नहीं।'], options: [['stanza 1', ''], ['stanza 4', ''], ['stanza 5', ''], ['stanza 6', '']], a: 0 },
        { q: ['He imagines the lights to be like stars.', 'वह रोशनियों को तारों जैसा सोचता है।'], options: [['stanza 2', ''], ['stanza 3', ''], ['stanza 4', ''], ['stanza 5', '']], a: 2 },
        { q: ['The person compares his eyes with burning lead.', 'व्यक्ति अपनी आँखों की तुलना जलते सीसे से करता है।'], options: [['stanza 1', ''], ['stanza 2', ''], ['stanza 4', ''], ['stanza 6', '']], a: 1 },
      ],
    },
    {
      type: 'qa',
      title: ['Vocabulary: word web and seasons.', 'शब्दावली: शब्द-जाल और मौसम।'],
      items: [
        { q: ['Situations when you cough', 'जब खाँसी आती है'], a: ['in smoke, in dust, in fog, when you have a cold, when food goes down the wrong way', 'धुएँ में, धूल में, कोहरे में, ज़ुकाम होने पर, खाना ग़लत नली में जाने पर'] },
        { q: ['Two seasons in which you can see fog', 'दो मौसम जिनमें कोहरा दिखता है'], a: ['winter and the rainy season', 'सर्दी और बरसात'] },
      ],
    },
    {
      type: 'qa',
      title: ['Give three rhyming words for each word.', 'हर शब्द के लिए तीन तुकांत शब्द दो।'],
      items: [
        { q: ['head', 'head'], a: ['lead, bed, red', 'lead, bed, red'] },
        { q: ['place', 'place'], a: ['space, face, race', 'space, face, race'] },
        { q: ['cars', 'cars'], a: ['stars, jars, bars', 'stars, jars, bars'] },
      ],
    },
    {
      type: 'task',
      title: ['Use these words in sentences, in a situation: rap, lead, judgement.', 'इन शब्दों को किसी स्थिति में वाक्यों में प्रयोग करो: rap, lead, judgement.'],
      items: [
        { q: ['rap', 'खटखटाना'], a: ['The teacher rapped on the table to make the class quiet.', 'कक्षा को शांत करने के लिए शिक्षक ने मेज़ खटखटाई।'] },
        { q: ['lead', 'राह दिखाना / सीसा'], a: ['The guide will lead us to the top of the hill. Pencils are not really made of lead.', 'गाइड हमें पहाड़ी की चोटी तक ले जाएगा। पेंसिलें असल में सीसे से नहीं बनतीं।'] },
        { q: ['judgement', 'निर्णय / अंदाज़ा'], a: ['In the dark I lost my judgement of distance and fell.', 'अँधेरे में मैंने दूरी का अंदाज़ा खो दिया और गिर पड़ा।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Grammar: tell your mother what your teacher told you to do. Example: The teacher said, "Write your name on the board." → The teacher ordered me to write my name on the board.', 'व्याकरण: माँ को बताओ कि शिक्षक ने क्या करने को कहा। उदाहरण: The teacher ordered me to write my name on the board.'],
      items: [
        { q: ['The teacher said, "Come here."', 'शिक्षक ने कहा, "यहाँ आओ।"'], a: ['The teacher ordered me to come there.', 'शिक्षक ने मुझे वहाँ आने का आदेश दिया।'] },
        { q: ['The teacher said, "Please, give me your pen."', 'शिक्षक ने कहा, "कृपया अपना पेन दो।"'], a: ['The teacher requested me to give him my pen.', 'शिक्षक ने मुझसे अपना पेन देने का अनुरोध किया।'] },
        { q: ['The teacher said, "Please, take your seat."', 'शिक्षक ने कहा, "कृपया बैठ जाओ।"'], a: ['The teacher requested me to take my seat.', 'शिक्षक ने मुझसे बैठने का अनुरोध किया।'] },
        { q: ['The teacher said, "Clean the board."', 'शिक्षक ने कहा, "बोर्ड साफ़ करो।"'], a: ['The teacher ordered me to clean the board.', 'शिक्षक ने मुझे बोर्ड साफ़ करने का आदेश दिया।'] },
        { q: ['The teacher said, "Don\'t be late."', 'शिक्षक ने कहा, "देर मत करना।"'], a: ['The teacher ordered me not to be late.', 'शिक्षक ने मुझे देर न करने का आदेश दिया।'] },
      ],
    },
    {
      type: 'task',
      title: ['Give directions to your friend Ramesh, new to the city, from Raipur Railway Station to the BTI campus.', 'शहर में नए दोस्त रमेश को रायपुर रेलवे स्टेशन से बी.टी.आई. परिसर का रास्ता बताओ।'],
      items: [{ q: ['Directions', 'रास्ता'], a: ['Come out of the station and turn left. Go straight till the main square. Then turn right and walk for five minutes. The BTI campus is on your left.', 'स्टेशन से बाहर निकलकर बाएँ मुड़ो। मुख्य चौक तक सीधे जाओ। फिर दाएँ मुड़कर पाँच मिनट चलो। बी.टी.आई. परिसर तुम्हारे बाईं ओर है।'] }],
    },
    {
      type: 'qa',
      title: ['Writing: why are these aids necessary for visually impaired people?', 'लेखन: दृष्टिहीन लोगों के लिए ये सहायक चीज़ें क्यों ज़रूरी हैं?'],
      items: [
        { q: ['a cane or walking stick', 'छड़ी'], a: ['To feel the way and find steps, stones and holes in front.', 'रास्ता टटोलने और सामने की सीढ़ियाँ, पत्थर और गड्ढे पहचानने के लिए।'] },
        { q: ['dark glasses', 'काला चश्मा'], a: ['To protect the eyes from dust and bright light, and to show others that the person cannot see.', 'आँखों को धूल और तेज़ रोशनी से बचाने के लिए, और दूसरों को बताने के लिए कि व्यक्ति देख नहीं सकता।'] },
        { q: ['a tape recorder', 'टेप रिकॉर्डर'], a: ['To listen to lessons, books and messages.', 'पाठ, किताबें और संदेश सुनने के लिए।'] },
        { q: ['Other tools', 'और उपकरण'], a: ['Braille books, talking watches, guide dogs, screen-reading phones', 'ब्रेल किताबें, बोलने वाली घड़ियाँ, गाइड कुत्ते, स्क्रीन पढ़ने वाले फ़ोन'] },
      ],
    },
    {
      type: 'task',
      title: ['Writing: fog affects visibility and causes accidents. Why? Write about an incident you have read or heard.', 'लेखन: कोहरे से दिखना कम हो जाता है और दुर्घटनाएँ होती हैं। क्यों? सुनी या पढ़ी किसी घटना के बारे में लिखो।'],
      items: [{ q: ['A foggy morning', 'कोहरे वाली सुबह'], a: ['In fog, drivers cannot see the road or other vehicles clearly. Last winter, on a foggy morning, two buses collided on the highway because the drivers could not see each other. Many people were hurt.', 'कोहरे में ड्राइवर सड़क या दूसरी गाड़ियाँ साफ़ नहीं देख पाते। पिछली सर्दियों में एक कोहरे वाली सुबह हाईवे पर दो बसें टकरा गईं क्योंकि ड्राइवर एक-दूसरे को देख नहीं पाए। कई लोग घायल हुए।'] }],
    },
    {
      type: 'qa',
      title: ['Use a dictionary: find two meanings for each word.', 'शब्दकोश देखकर हर शब्द के दो मतलब लिखो।'],
      items: [
        { q: ['lead', 'lead'], a: ['(1) to show the way  (2) a soft grey metal', '(1) राह दिखाना  (2) एक नरम भूरी धातु, सीसा'] },
        { q: ['pan', 'pan'], a: ['(1) a cooking vessel  (2) to move a camera slowly', '(1) खाना पकाने का बर्तन  (2) कैमरे को धीरे घुमाना'] },
        { q: ['fog', 'fog'], a: ['(1) thick cloud near the ground  (2) confusion of the mind', '(1) ज़मीन के पास घना बादल, कोहरा  (2) मन की उलझन'] },
        { q: ['place', 'place'], a: ['(1) a particular area  (2) to put something somewhere', '(1) कोई जगह  (2) कहीं कुछ रखना'] },
        { q: ['judgement', 'judgement'], a: ['(1) a decision of a court  (2) the ability to decide well', '(1) अदालत का फ़ैसला  (2) अच्छा निर्णय लेने की क्षमता'] },
        { q: ['follow', 'follow'], a: ['(1) to go after someone  (2) to obey (rules)', '(1) किसी के पीछे जाना  (2) (नियमों का) पालन करना'] },
        { q: ['trust', 'trust'], a: ['(1) to believe in someone  (2) an organisation that manages money for a purpose', '(1) किसी पर भरोसा करना  (2) किसी उद्देश्य के लिए पैसा सँभालने वाली संस्था, न्यास'] },
        { q: ['blind', 'blind'], a: ['(1) unable to see  (2) a cover for a window', '(1) जो देख न सके  (2) खिड़की का परदा'] },
        { q: ['dumb', 'dumb'], a: ['(1) unable to speak  (2) silly', '(1) जो बोल न सके  (2) बेवक़ूफ़'] },
        { q: ['patient', 'patient'], a: ['(1) a sick person  (2) able to wait calmly', '(1) बीमार व्यक्ति, मरीज़  (2) धैर्यवान'] },
      ],
    },
    {
      type: 'fill',
      title: ['Listening: listen to the story of Lucy and fill in the blanks.', 'सुनना: लूसी की कहानी सुनो और रिक्त स्थान भरो।'],
      passage: [
        'One day, when I was five, I went to a local park with my mom. While I was playing in the sand box, I noticed a boy about my age in a wheel chair. I went over to him and asked if he could play with me. Since I was only five, I couldn\'t understand why he couldn\'t just get in the sand box and play with me. He told me he couldn\'t. I talked to him for a while longer, then I took my large bucket, filled up as much as I could and dumped it into his lap. Then I grabbed some toys and put them in his lap, too.\nMy mom rushed over and said, "Lucy, why did you do that?"\nI looked at her and replied, "He couldn\'t play in the sand with me, so I brought the sand to him. Now we can play in the sand together."',
        'एक दिन, जब मैं पाँच साल की थी, मैं अपनी माँ के साथ पास के पार्क गई। रेत के गड्ढे में खेलते हुए मैंने अपनी उम्र के एक लड़के को व्हीलचेयर पर देखा। मैं उसके पास गई और पूछा कि क्या वह मेरे साथ खेल सकता है। पाँच साल की होने के कारण मैं समझ नहीं पाई कि वह रेत के गड्ढे में आकर मेरे साथ क्यों नहीं खेल सकता। उसने कहा कि वह नहीं खेल सकता। मैंने उससे कुछ देर और बात की, फिर अपनी बड़ी बाल्टी ली, जितनी रेत भर सकती थी भरी और उसकी गोद में उड़ेल दी। फिर कुछ खिलौने उठाकर उसकी गोद में भी रख दिए।\nमेरी माँ दौड़कर आईं और बोलीं, "लूसी, तुमने ऐसा क्यों किया?"\nमैंने उनकी ओर देखा और कहा, "वह मेरे साथ रेत में नहीं खेल सकता था, इसलिए मैं रेत उसके पास ले आई। अब हम साथ में रेत में खेल सकते हैं।"',
      ],
      bank: ['wheel chair', 'park', 'sand box', 'sand', 'lap', 'girl', 'boy'],
      items: [
        { q: ['The girl noticed a boy in a ___.', 'लड़की ने एक लड़के को ___ में देखा।'], a: 'wheel chair' },
        { q: ['The girl went to a local ___.', 'लड़की पास के ___ में गई।'], a: 'park' },
        { q: ['The girl played in the ___.', 'लड़की ___ में खेली।'], a: 'sand box' },
        { q: ['The girl filled the bucket with ___.', 'लड़की ने बाल्टी ___ से भरी।'], a: 'sand' },
        { q: ["The girl dumped the sand in the boy's ___.", 'लड़की ने रेत लड़के की ___ में उड़ेली।'], a: 'lap' },
        { q: ["The ___ put some toys in the boy's lap.", '___ ने लड़के की गोद में कुछ खिलौने रखे।'], a: 'girl' },
        { q: ["The ___ said he couldn't play.", '___ ने कहा कि वह नहीं खेल सकता।'], a: 'boy' },
      ],
    },
    {
      type: 'task',
      title: ['Language game: one student is blindfolded. The other describes one of two similar boxes (shape, material, size); the blindfolded student touches and guesses.', 'भाषा खेल: एक विद्यार्थी की आँखों पर पट्टी हो। दूसरा दो मिलते-जुलते डिब्बों में से एक का वर्णन करे (आकार, सामग्री, नाप); पट्टी वाला छूकर पहचाने।'],
      items: [{ q: ['Describe a pencil box', 'पेंसिल बॉक्स का वर्णन करो'], a: ['It is long and thin. It is made of metal. It is small and has a smooth lid.', 'यह लंबा और पतला है। यह धातु का बना है। यह छोटा है और इसका ढक्कन चिकना है।'] }],
    },
    {
      type: 'qa',
      title: ['Project: what difficulties do people with these disabilities face? Proverb: "A stitch in time saves nine."', 'परियोजना: इन विकलांगताओं वाले लोगों को क्या कठिनाइयाँ होती हैं? कहावत: "समय पर एक टाँका नौ टाँकों को बचाता है।"'],
      items: [
        { q: ['visually impaired', 'दृष्टिहीन'], a: ['cannot read normal books or find the way easily', 'सामान्य किताबें नहीं पढ़ पाते, रास्ता आसानी से नहीं ढूँढ पाते'] },
        { q: ['hearing impaired', 'श्रवण-बाधित'], a: ['cannot hear warnings, horns or what people say', 'चेतावनी, हॉर्न या लोगों की बात नहीं सुन पाते'] },
        { q: ['polio affected', 'पोलियो प्रभावित'], a: ['find it hard to walk, climb stairs or use buses', 'चलने, सीढ़ियाँ चढ़ने या बस में चढ़ने में कठिनाई'] },
        { q: ['Use the proverb in a sentence.', 'कहावत को वाक्य में प्रयोग करो।'], a: ['Fix the small leak in the roof now; a stitch in time saves nine.', 'छत का छोटा रिसाव अभी ठीक करो; समय पर एक टाँका नौ टाँकों को बचाता है।'] },
      ],
    },
  ],
  'class8-21': [
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['Where is Thailand situated?', 'थाईलैंड कहाँ स्थित है?'], a: ['In South East Asia, with Laos and Cambodia on the east, the Gulf of Thailand and Malaysia on the south, and the Andaman Sea on the west.', 'दक्षिण-पूर्व एशिया में; पूर्व में लाओस और कंबोडिया, दक्षिण में थाईलैंड की खाड़ी और मलेशिया, और पश्चिम में अंडमान सागर।'] },
        { q: ['What is interesting about the Thai calendar?', 'थाई कैलेंडर में क्या दिलचस्प है?'], a: ['It is based on the Buddhist era and is 543 years ahead of the western calendar (2005 = 2548).', 'यह बौद्ध युग पर आधारित है और पश्चिमी कैलेंडर से 543 साल आगे है (2005 = 2548)।'] },
        { q: ['Write about some famous places in Thailand.', 'थाईलैंड की कुछ प्रसिद्ध जगहों के बारे में लिखो।'], a: ['Bangkok, the capital; the Khorat Plateau; Doi Inthanon, the highest peak; the Mekong and Chao Phraya rivers; Surin, famous for the Elephant Round Up.', 'राजधानी बैंकॉक; खोरात पठार; सबसे ऊँची चोटी दोई इंथानोन; मेकांग और चाओ फ्राया नदियाँ; हाथी राउंड-अप के लिए प्रसिद्ध सुरिन।'] },
        { q: ["What is unique about Thai food?", 'थाई खाने में क्या अनोखा है?'], a: ['Every dish balances five basic flavours: hot, sour, sweet, salty and bitter.', 'हर व्यंजन में पाँच मूल स्वादों का संतुलन होता है: तीखा, खट्टा, मीठा, नमकीन और कड़वा।'] },
        { q: ['What does a Thai meal consist of?', 'थाई भोजन में क्या होता है?'], a: ['Jasmine rice, curries, stir-fried items and dishes cooked with chilli, lime juice and lemon grass, with nam pla (fish sauce).', 'चमेली चावल, करी, तले हुए व्यंजन और मिर्च, नींबू रस और लेमन ग्रास से बने पकवान, साथ में नाम प्ला (मछली की चटनी)।'] },
        { q: ['Name some of the important towns in Thailand.', 'थाईलैंड के कुछ प्रमुख शहरों के नाम बताओ।'], a: ['Bangkok, Surin, Sukhothai', 'बैंकॉक, सुरिन, सुखोथाई'] },
        { q: ['What happens during the Elephant Round Up?', 'हाथी राउंड-अप में क्या होता है?'], a: ['Elephants play football in Surin.', 'सुरिन में हाथी फ़ुटबॉल खेलते हैं।'] },
        { q: ['Who was Little Doi Swan?', 'नन्ही दोई स्वान कौन थी?'], a: ['A little girl who welcomed them at the gate of the guesthouse with folded hands (the Wai).', 'एक छोटी लड़की जिसने अतिथि गृह के गेट पर हाथ जोड़कर (वाई करके) उनका स्वागत किया।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Solve the quiz.', 'प्रश्नोत्तरी हल करो।'],
      bank: ['Thai', 'Wai', '2549', 'Chao Phraya', 'Doi Inthanon', 'Malay', 'football'],
      items: [
        { q: ["A four letter word which means 'freedom' in Thai: ___", "थाई भाषा में 'आज़ादी' का चार अक्षर का शब्द: ___"], a: 'Thai' },
        { q: ['The Thai greeting: ___', 'थाई अभिवादन: ___'], a: 'Wai' },
        { q: ['The year 2006 in the Buddhist calendar = 2006 + 543 = ___', 'बौद्ध कैलेंडर में साल 2006 = 2006 + 543 = ___'], a: '2549' },
        { q: ['The river that runs into the Gulf of Thailand: ___', 'थाईलैंड की खाड़ी में गिरने वाली नदी: ___'], a: 'Chao Phraya' },
        { q: ['The highest peak of Thailand: ___', 'थाईलैंड की सबसे ऊँची चोटी: ___'], a: 'Doi Inthanon' },
        { q: ['The Kra Isthmus joins Thailand to the ___ peninsula.', 'क्रा स्थलडमरूमध्य थाईलैंड को ___ प्रायद्वीप से जोड़ता है।'], a: 'Malay' },
        { q: ['In Surin, elephants play ___.', 'सुरिन में हाथी ___ खेलते हैं।'], a: 'football' },
      ],
    },
    {
      type: 'task',
      title: ['Vocabulary: frame more phrases like "neat looking guesthouse", "ever smiling nature". Use in sentences: courteous, managed, riverbanks, disappointed, aromatic, museum.', 'शब्दावली: "neat looking guesthouse", "ever smiling nature" जैसे और वाक्यांश बनाओ। वाक्यों में प्रयोग करो: courteous, managed, riverbanks, disappointed, aromatic, museum.'],
      items: [
        { q: ['Phrases', 'वाक्यांश'], a: ['warm-hearted people, colourful dresses, beautiful statues, delicious food, sweet-smelling rice, candle-lit floats', 'दिलदार लोग, रंग-बिरंगी पोशाकें, सुंदर मूर्तियाँ, स्वादिष्ट खाना, ख़ुशबूदार चावल, मोमबत्ती वाली तैरती नावें'] },
        { q: ['Sentences', 'वाक्य'], a: ['The shopkeeper was very courteous. We managed to catch the bus. We walked along the riverbanks. I was disappointed when the match was cancelled. The kitchen was full of aromatic spices. We saw old coins in the museum.', 'दुकानदार बहुत विनम्र था। हम किसी तरह बस पकड़ पाए। हम नदी के किनारे-किनारे चले। मैच रद्द होने पर मैं निराश हुआ। रसोई ख़ुशबूदार मसालों से भरी थी। हमने संग्रहालय में पुराने सिक्के देखे।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Grammar: complete the sentences with "had" + third form of the verb.', 'व्याकरण: "had" + क्रिया के तीसरे रूप से वाक्य पूरे करो।'],
      bank: ['had left', 'had finished', 'had made', 'had taken', 'had set', 'had cut', 'had stolen', 'had torn'],
      items: [
        { q: ['The children ___ the classroom before the teacher came.', 'शिक्षक के आने से पहले बच्चे कक्षा ___ थे।'], a: 'had left' },
        { q: ['The train ___ the station before we arrived there.', 'हमारे पहुँचने से पहले ट्रेन स्टेशन ___ थी।'], a: 'had left' },
        { q: ['We ___ our work before our father came home.', 'पिताजी के घर आने से पहले हमने अपना काम ___ था।'], a: 'had finished' },
        { q: ['My daughter ___ a doll before we came back home.', 'हमारे घर लौटने से पहले मेरी बेटी ने एक गुड़िया ___ थी।'], a: 'had made' },
        { q: ['They ___ lunch before we joined them.', 'हमारे आने से पहले उन्होंने खाना ___ था।'], a: 'had taken' },
        { q: ['The sun ___ before she returned home.', 'उसके घर लौटने से पहले सूरज ___ था।'], a: 'had set' },
        { q: ['Someone ___ the trees before the forest guard arrived.', 'वनरक्षक के आने से पहले किसी ने पेड़ ___ थे।'], a: 'had cut' },
        { q: ['Someone ___ the purse before the passenger came back.', 'यात्री के लौटने से पहले किसी ने पर्स ___ था।'], a: 'had stolen' },
        { q: ['The baby ___ the newspaper before his grandfather read it.', 'दादाजी के पढ़ने से पहले बच्चे ने अख़बार ___ था।'], a: 'had torn' },
      ],
    },
    {
      type: 'match',
      title: ['Irregular verbs: match the first form with its second and third forms.', 'अनियमित क्रियाएँ: पहले रूप को उसके दूसरे और तीसरे रूप से मिलाओ।'],
      pairs: [
        [['make', 'बनाना'], ['made - made', '']],
        [['steal', 'चुराना'], ['stole - stolen', '']],
        [['tear', 'फाड़ना'], ['tore - torn', '']],
        [['eat', 'खाना'], ['ate - eaten', '']],
        [['weep', 'रोना'], ['wept - wept', '']],
        [['fall', 'गिरना'], ['fell - fallen', '']],
        [['drink', 'पीना'], ['drank - drunk', '']],
        [['speak', 'बोलना'], ['spoke - spoken', '']],
        [['see', 'देखना'], ['saw - seen', '']],
        [['rise', 'उठना'], ['rose - risen', '']],
      ],
    },
    {
      type: 'qa',
      title: ['Writing: which dish needs this ingredient?', 'लेखन: किस व्यंजन में यह सामग्री लगती है?'],
      items: [
        { q: ['Basil', 'तुलसी'], a: ['Thai basil curry; tulsi tea', 'थाई तुलसी करी; तुलसी की चाय'] },
        { q: ['Eggplant', 'बैंगन'], a: ['baingan bharta; Thai green curry', 'बैंगन का भरता; थाई हरी करी'] },
        { q: ['Tamarind', 'इमली'], a: ['sambar, imli chutney', 'सांभर, इमली की चटनी'] },
        { q: ['Ginger', 'अदरक'], a: ['ginger tea, curries', 'अदरक की चाय, सब्ज़ियाँ'] },
      ],
    },
    {
      type: 'task',
      title: ['Writing: your favourite dish. List the ingredients and the steps to prepare it.', 'लेखन: तुम्हारा पसंदीदा व्यंजन। सामग्री और बनाने के क़दम लिखो।'],
      items: [{ q: ['Poha', 'पोहा'], a: ['Ingredients: poha, onion, potato, green chilli, mustard seeds, turmeric, salt, oil, lemon.\nStep 1: Wash the poha and keep it aside.\nStep 2: Heat oil and add mustard seeds.\nStep 3: Fry onion, potato and green chilli.\nStep 4: Add turmeric, salt and the poha, and mix well.\nStep 5: Cook for two minutes and add lemon juice.', 'सामग्री: पोहा, प्याज़, आलू, हरी मिर्च, राई, हल्दी, नमक, तेल, नींबू।\nक़दम 1: पोहा धोकर अलग रखो।\nक़दम 2: तेल गरम करके राई डालो।\nक़दम 3: प्याज़, आलू और हरी मिर्च भूनो।\nक़दम 4: हल्दी, नमक और पोहा डालकर अच्छे से मिलाओ।\nक़दम 5: दो मिनट पकाकर नींबू का रस डालो।'] }],
    },
    {
      type: 'match',
      title: ['Match the English word with its Hindi word.', 'अंग्रेज़ी शब्द को उसके हिंदी शब्द से मिलाओ।'],
      pairs: [
        [['cucumber', ''], ['खीरा', 'kheera']],
        [['garlic', ''], ['लहसुन', 'lahsun']],
        [['ginger', ''], ['अदरक', 'adrak']],
        [['brinjal', ''], ['बैंगन', 'baingan']],
        [['coconut', ''], ['नारियल', 'nariyal']],
        [['fig', ''], ['अंजीर', 'anjeer']],
        [['chillies', ''], ['मिर्च', 'mirch']],
        [['lime', ''], ['नींबू', 'neembu']],
        [['cumin seeds', ''], ['जीरा', 'jeera']],
        [['tomato', ''], ['टमाटर', 'tamatar']],
      ],
    },
    {
      type: 'match',
      title: ['Find the English word for these Hindi words (spices).', 'इन हिंदी शब्दों (मसालों) के अंग्रेज़ी शब्द खोजो।'],
      pairs: [
        [['jeera', 'जीरा'], ['cumin', '']],
        [['haldi', 'हल्दी'], ['turmeric', '']],
        [['dhaniya', 'धनिया'], ['coriander', '']],
        [['kali mirch', 'काली मिर्च'], ['black pepper', '']],
        [['methi', 'मेथी'], ['fenugreek', '']],
        [['rai / sarson', 'राई / सरसों'], ['mustard', '']],
        [['chhoti elaichi', 'छोटी इलायची'], ['cardamom', '']],
        [['laung', 'लौंग'], ['clove', '']],
        [['kesar', 'केसर'], ['saffron', '']],
        [['dalchini', 'दालचीनी'], ['cinnamon', '']],
      ],
    },
    {
      type: 'qa',
      title: ['Listening: listen to the passage about Marie Curie. What happened in each year?', 'सुनना: मैरी क्यूरी के बारे में अनुच्छेद सुनो। किस साल क्या हुआ?'],
      passage: [
        "For more than four exhausting years, the Polish-born Marie Curie and her husband, Pierre, worked in a large wooden shed near their Paris lodgings. It was there, on a September night in 1902, that they finally discovered the radioactive element which they named Radium, meaning 'a ray'. Radium provided the first effective treatment for some types of cancer, destroying the diseased human cells by bombarding them with radioactive particles.\nThe Curies had met in 1894 when Marie (who was born in Warsaw on Nov. 7, 1867) was studying in Paris. She had little money to spend on food. Unable to afford a laboratory of her own, she was invited by Pierre to share his workshop with him. They were married in July 1895.\nAfter the discovery of Radium, Marie was convinced that by destroying diseased cells, the powerful rays could cure cancerous growth. In 1903 the Curies shared the Nobel Prize for physics. In April 1906 Pierre was knocked down and killed by a horse-drawn wagon in Paris. Five years later Marie was awarded the Nobel Prize for chemistry for the discovery of radium and polonium and the isolation of pure radium. Partly as a result of her long exposure to radiation she died on July 4, 1934.",
        'चार से ज़्यादा थका देने वाले सालों तक पोलैंड में जन्मी मैरी क्यूरी और उनके पति पियरे ने पेरिस में अपने घर के पास एक बड़े लकड़ी के शेड में काम किया। वहीं 1902 में सितंबर की एक रात उन्होंने आख़िरकार उस रेडियोधर्मी तत्व की खोज की जिसे उन्होंने रेडियम नाम दिया, जिसका अर्थ है \'किरण\'। रेडियम ने कुछ तरह के कैंसर का पहला असरदार इलाज दिया, जो बीमार कोशिकाओं पर रेडियोधर्मी कणों की बौछार करके उन्हें नष्ट करता है।\nक्यूरी दंपति 1894 में मिले थे जब मैरी (जिनका जन्म 7 नवंबर 1867 को वारसॉ में हुआ) पेरिस में पढ़ रही थीं। उनके पास खाने के लिए भी कम पैसे थे। अपनी प्रयोगशाला न होने के कारण पियरे ने उन्हें अपनी कार्यशाला में साथ काम करने बुलाया। जुलाई 1895 में उनकी शादी हुई।\nरेडियम की खोज के बाद मैरी को भरोसा था कि बीमार कोशिकाओं को नष्ट करके ये शक्तिशाली किरणें कैंसर ठीक कर सकती हैं। 1903 में क्यूरी दंपति को भौतिकी का नोबेल पुरस्कार मिला। अप्रैल 1906 में पेरिस में एक घोड़ागाड़ी से कुचलकर पियरे की मृत्यु हो गई। पाँच साल बाद मैरी को रेडियम और पोलोनियम की खोज और शुद्ध रेडियम अलग करने के लिए रसायन का नोबेल पुरस्कार मिला। विकिरण के लंबे संपर्क के कारण 4 जुलाई 1934 को उनकी मृत्यु हो गई।',
      ],
      items: [
        { q: ['1867', '1867'], a: ['Marie was born in Warsaw (7 November).', 'मैरी का जन्म वारसॉ में हुआ (7 नवंबर)।'] },
        { q: ['1894', '1894'], a: ['Marie and Pierre met in Paris.', 'मैरी और पियरे पेरिस में मिले।'] },
        { q: ['1895', '1895'], a: ['They were married (July).', 'उनकी शादी हुई (जुलाई)।'] },
        { q: ['1902', '1902'], a: ['They discovered Radium.', 'उन्होंने रेडियम की खोज की।'] },
        { q: ['1903', '1903'], a: ['They shared the Nobel Prize for physics.', 'उन्हें भौतिकी का नोबेल पुरस्कार मिला।'] },
        { q: ['1906', '1906'], a: ['Pierre was killed by a horse-drawn wagon.', 'घोड़ागाड़ी से पियरे की मृत्यु हुई।'] },
        { q: ['1911', '1911'], a: ['Marie won the Nobel Prize for chemistry.', 'मैरी को रसायन का नोबेल पुरस्कार मिला।'] },
        { q: ['1934', '1934'], a: ['Marie died (4 July).', 'मैरी की मृत्यु हुई (4 जुलाई)।'] },
      ],
    },
    {
      type: 'task',
      title: ['Speaking: tell the class what you like the most about Thailand.', 'बोलना: कक्षा को बताओ कि थाईलैंड की कौन-सी बात सबसे अच्छी लगी।'],
      items: [{ q: ['I like ... the most.', 'मुझे ... सबसे अच्छा लगा।'], a: ['What I like the most is the Elephant Round Up, where elephants play football!', 'मुझे सबसे अच्छा हाथी राउंड-अप लगा, जहाँ हाथी फ़ुटबॉल खेलते हैं!'] }],
    },
    {
      type: 'pick',
      title: ['Project: choose the describing words that occur in the lesson (example: neat).', 'परियोजना: पाठ में आए विशेषण चुनो (जैसे: neat)।'],
      options: [['neat', 'साफ़-सुथरा'], ['guesthouse', 'अतिथि गृह'], ['colourful', 'रंग-बिरंगा'], ['warm-hearted', 'दिलदार'], ['temple', 'मंदिर'], ['courteous', 'विनम्र'], ['delicious', 'स्वादिष्ट'], ['river', 'नदी'], ['aromatic', 'ख़ुशबूदार'], ['beautiful', 'सुंदर']],
      answers: [0, 2, 3, 5, 6, 8, 9],
    },
  ],
  'class8-22': [
    {
      type: 'tf',
      title: ['Tick the correct sentences and cross the wrong ones (true or false).', 'सही वाक्यों पर सही और ग़लत पर ग़लत का निशान लगाओ।'],
      items: [
        { q: ['The grandmother sat on the flower bed.', 'दादी फूलों की क्यारी पर बैठी थीं।'], a: false },
        { q: ['The boy was ten years old.', 'लड़का दस साल का था।'], a: true },
        { q: ['The grandmother was not very old.', 'दादी बहुत बूढ़ी नहीं थीं।'], a: false },
        { q: ['She had grey hair.', 'उनके बाल भूरे-सफ़ेद (ग्रे) थे।'], a: false },
        { q: ['The boy was interested in a book with colourful pictures of birds and butterflies.', 'लड़के को चिड़ियों और तितलियों के रंगीन चित्रों वाली किताब में रुचि थी।'], a: true },
        { q: ['The small photograph was lying loose in the box.', 'छोटी तस्वीर बक्से में यूँ ही पड़ी थी।'], a: false },
        { q: ['The photograph was taken about 40 years ago.', 'तस्वीर लगभग 40 साल पहले खींची गई थी।'], a: false },
        { q: ["A lemon-coloured butterfly settled on the grandmother's knitting needle.", 'एक नींबू रंग की तितली दादी की सलाई पर बैठी।'], a: true },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['What was the boy doing after taking his meal?', 'खाना खाने के बाद लड़का क्या कर रहा था?'], a: ['He was rummaging in a box of old books and family heirlooms brought down from the attic.', 'वह अटारी से उतारे गए पुरानी किताबों और ख़ानदानी चीज़ों के बक्से में खोजबीन कर रहा था।'] },
        { q: ['How was the photograph?', 'तस्वीर कैसी थी?'], a: ['It was small, faded, a little yellow and foggy.', 'वह छोटी, धुँधली, थोड़ी पीली और धूमिल थी।'] },
        { q: ['Who was in the photograph?', 'तस्वीर में कौन था?'], a: ['A little girl standing against a wall; she was really the grandmother as a child.', 'दीवार के पास खड़ी एक छोटी लड़की; असल में वह बचपन की दादी थीं।'] },
        { q: ['How can you say that the photograph was not a colour photograph?', 'कैसे कह सकते हो कि तस्वीर रंगीन नहीं थी?'], a: ['It was old (about sixty years ago), faded, yellow and foggy.', 'वह पुरानी (लगभग साठ साल पहले की), धुँधली, पीली और धूमिल थी।'] },
        { q: ['Did the boy know who was in the photograph?', 'क्या लड़का जानता था कि तस्वीर में कौन है?'], a: ['No. He tried to find points in common between his grandmother and the little girl.', 'नहीं। वह दादी और छोटी लड़की में समानताएँ ढूँढने की कोशिश करता रहा।'] },
      ],
    },
    {
      type: 'mcq',
      title: ['Vocabulary: choose the correct spelling.', 'शब्दावली: सही वर्तनी चुनो।'],
      items: [
        { q: ['___ a woollen scarf requires patience.', 'ऊनी स्कार्फ़ ___ में धैर्य चाहिए।'], options: [['Kniting', ''], ['Knitting', '']], a: 1 },
        { q: ["The ring was part of the family's ___.", 'अँगूठी परिवार की ___ का हिस्सा थी।'], options: [['hirlooms', ''], ['heirlooms', '']], a: 1 },
        { q: ['The money plant is a ___ which needs support to grow.', 'मनी प्लांट एक ___ है जिसे बढ़ने के लिए सहारा चाहिए।'], options: [['creeper', ''], ['criper', '']], a: 0 },
        { q: ['It was a good attempt for keeping me out of ___.', 'यह मुझे ___ से दूर रखने की अच्छी कोशिश थी।'], options: [['mischeaf', ''], ['mischief', '']], a: 1 },
        { q: ['Tapan had to ___ his eyes to look at the ripe mangoes.', 'पके आम देखने के लिए तपन को आँखें ___ पड़ीं।'], options: [['squint', ''], ['skwint', '']], a: 0 },
      ],
    },
    {
      type: 'task',
      title: ["Grammar: on Raju's sister's birthday, who made Raju do what? (make cake, call friends, decorate room, arrange plates) Example: His mother made him clean the room.", 'व्याकरण: राजू की बहन के जन्मदिन पर किसने राजू से क्या करवाया? उदाहरण: His mother made him clean the room.'],
      items: [
        { q: ['Who asked Raju to do what?', 'किसने राजू से क्या करवाया?'], a: ['His aunt made him make the cake. His brother made him call friends. His father made him decorate the room. His grandmother made him arrange the plates.', 'चाची ने उससे केक बनवाया। भाई ने उससे दोस्तों को बुलवाया। पिता ने उससे कमरा सजवाया। दादी ने उससे प्लेटें लगवाईं।'] },
        { q: ['Write about yourself. Example: My father made me sow seeds in the field.', 'अपने बारे में लिखो। उदाहरण: मेरे पिता ने मुझसे खेत में बीज बुवाए।'], a: ['My mother made me tidy my room. My grandfather made me water the plants.', 'मेरी माँ ने मुझसे अपना कमरा साफ़ करवाया। दादाजी ने मुझसे पौधों को पानी दिलवाया।'] },
      ],
    },
    {
      type: 'task',
      title: ['Writing: describe your grandmother or an old person you know: how she/he looks and what she/he does.', 'लेखन: अपनी दादी या किसी बुज़ुर्ग का वर्णन करो: वे कैसे दिखते हैं और क्या करते हैं।'],
      items: [{ q: ['My grandmother', 'मेरी दादी'], a: ['My grandmother is seventy-five years old. She has white hair and wears glasses. She wears a cotton sari. Every morning she prays and then waters the tulsi plant. In the afternoon she knits and tells us stories.', 'मेरी दादी पचहत्तर साल की हैं। उनके बाल सफ़ेद हैं और वे चश्मा पहनती हैं। वे सूती साड़ी पहनती हैं। हर सुबह वे पूजा करके तुलसी को पानी देती हैं। दोपहर में वे बुनाई करती हैं और हमें कहानियाँ सुनाती हैं।'] }],
    },
    {
      type: 'qa',
      title: ['Arrange these words as you find them in the dictionary: wrinkles, heirlooms, creeper, deterrent, drapery, attic.', 'इन शब्दों को शब्दकोश के क्रम में लगाओ: wrinkles, heirlooms, creeper, deterrent, drapery, attic.'],
      items: [{ q: ['Dictionary order', 'शब्दकोश क्रम'], a: ['attic, creeper, deterrent, drapery, heirlooms, wrinkles', 'attic, creeper, deterrent, drapery, heirlooms, wrinkles'] }],
    },
    {
      type: 'mcq',
      title: ["Listening: listen to the passage on 'Camera' and choose the right answers.", "सुनना: 'कैमरा' पर अनुच्छेद सुनो और सही उत्तर चुनो।"],
      passage: [
        'A camera is a device used to take still photographs. Photographs are images of persons, things and scenes that are captured on photographic film. The most important parts of a camera are its lens, shutter and film roll. The lens gathers rays of light from the scene that the camera is pointed at and bends them so that all the rays meet at the same place at the back of the camera. By this method, a small copy of the scene is made. The shutter opens to allow light from the lens to reach the film. When the film is exposed to the right amount of light, a clear image on the film is created. The earliest photograph was taken in France in 1827. Louis Daguerre and William Fox improved the process of taking photographs later.',
        'कैमरा स्थिर तस्वीरें खींचने का एक उपकरण है। तस्वीरें लोगों, चीज़ों और दृश्यों की छवियाँ होती हैं जो फ़ोटोग्राफ़िक फ़िल्म पर उतारी जाती हैं। कैमरे के सबसे ज़रूरी हिस्से हैं लेंस, शटर और फ़िल्म रोल। लेंस उस दृश्य की प्रकाश किरणों को इकट्ठा करता है जिसकी ओर कैमरा है, और उन्हें ऐसे मोड़ता है कि सारी किरणें कैमरे के पीछे एक ही जगह मिलें। इस तरह दृश्य की एक छोटी प्रति बनती है। शटर खुलकर लेंस से आने वाली रोशनी को फ़िल्म तक पहुँचने देता है। जब फ़िल्म को सही मात्रा में रोशनी मिलती है, तो फ़िल्म पर साफ़ छवि बनती है। पहली तस्वीर 1827 में फ़्रांस में खींची गई थी। बाद में लुई डागेर और विलियम फ़ॉक्स ने तस्वीर खींचने का तरीक़ा बेहतर बनाया।',
      ],
      items: [
        { q: ['A camera is a device that captures -', 'कैमरा एक उपकरण है जो उतारता है -'], options: [['still pictures', 'स्थिर तस्वीरें'], ['moving pictures', 'चलती तस्वीरें']], a: 0 },
        { q: ['A camera captures images on -', 'कैमरा छवियाँ उतारता है -'], options: [['video film', 'वीडियो फ़िल्म पर'], ['photographic film', 'फ़ोटोग्राफ़िक फ़िल्म पर']], a: 1 },
        { q: ['The most important parts of a camera are -', 'कैमरे के सबसे ज़रूरी हिस्से हैं -'], options: [['batteries and autofocus', 'बैटरी और ऑटोफ़ोकस'], ['lens, shutter and film roll', 'लेंस, शटर और फ़िल्म रोल']], a: 1 },
        { q: ['The scene is captured at the -', 'दृश्य कहाँ उतरता है -'], options: [['front of the camera', 'कैमरे के आगे'], ['back of the camera', 'कैमरे के पीछे']], a: 1 },
        { q: ['The people who improved the process of making photographs are -', 'तस्वीर बनाने का तरीक़ा बेहतर करने वाले थे -'], options: [['Max Knoll and Louis Pasteur', 'मैक्स नॉल और लुई पाश्चर'], ['Louis Daguerre and William Fox', 'लुई डागेर और विलियम फ़ॉक्स']], a: 1 },
      ],
    },
    {
      type: 'task',
      title: ['Speaking: look at a picture and explain to your friend what is happening in it, in four sentences.', 'बोलना: एक चित्र देखो और दोस्त को चार वाक्यों में बताओ कि उसमें क्या हो रहा है।'],
      items: [{ q: ['In a bus', 'बस में'], a: ['A woman is sitting in the bus. She is wearing a saree. A man with long hair is sitting across her. He is reading a newspaper.', 'एक औरत बस में बैठी है। उसने साड़ी पहनी है। लंबे बालों वाला एक आदमी उसके सामने बैठा है। वह अख़बार पढ़ रहा है।'] }],
    },
    {
      type: 'task',
      title: ['Project: narrate the story in your own words. Proverb: "Well begun is half done."', 'परियोजना: कहानी अपने शब्दों में सुनाओ। कहावत: "अच्छी शुरुआत आधा काम है।"'],
      items: [
        { q: ['The story in short', 'संक्षेप में कहानी'], a: ['A ten-year-old boy finds an old photograph of a girl in a box of family things. He shows it to his grandmother, who is knitting. She tells him it was taken sixty years ago in his grandfather\'s house. The girl was really his grandmother, and she wonders whose hands are reaching over the wall.', 'दस साल के एक लड़के को परिवार की चीज़ों के बक्से में एक लड़की की पुरानी तस्वीर मिलती है। वह उसे बुनाई करती दादी को दिखाता है। दादी बताती हैं कि यह साठ साल पहले दादाजी के घर में खींची गई थी। वह लड़की असल में दादी ही थीं, और वे सोचती हैं कि दीवार के पार से आते हाथ किसके थे।'] },
        { q: ['Use the proverb in a sentence.', 'कहावत को वाक्य में प्रयोग करो।'], a: ['Start your project today with a good plan; well begun is half done.', 'आज ही अच्छी योजना से अपना प्रोजेक्ट शुरू करो; अच्छी शुरुआत आधा काम है।'] },
      ],
    },
  ],

  'class8-23': [
    {
      type: 'match',
      title: ['Match the expressions from the poem with their meanings.', 'कविता के भावों को उनके अर्थ से मिलाओ।'],
      pairs: [
        [['the mind is without fear', 'मन भय-रहित है'], ['a feeling of freedom', 'आज़ादी का एहसास']],
        [['the head is held high', 'सिर ऊँचा है'], ['we feel proud', 'हमें गर्व होता है']],
        [['knowledge is free', 'ज्ञान मुक्त है'], ['everyone can get knowledge as per his or her interest', 'हर कोई अपनी रुचि से ज्ञान पा सकता है']],
        [['broken up into fragments by narrow domestic walls', 'संकीर्ण घरेलू दीवारों से टुकड़ों में बँटा'], ['a society divided by caste, creed and religion, not united', 'जाति, पंथ और धर्म में बँटा, एकजुट न होने वाला समाज']],
        [['words come out from the depth of truth', 'शब्द सच्चाई की गहराई से निकलते हैं'], ['to be truthful, honest and sincere', 'सच्चा, ईमानदार और निष्ठावान होना']],
        [['the clear stream of reason', 'तर्क की स्वच्छ धारा'], ['to think logically', 'तर्क से सोचना']],
        [['the dreary desert sand of dead habit', 'मृत आदतों की सूनी रेगिस्तानी रेत'], ['following bad customs and traditions', 'बुरे रीति-रिवाज़ों पर चलना']],
        [['let my country awake', 'मेरा देश जाग उठे'], ['let my country be free', 'मेरा देश आज़ाद हो']],
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ["Make a list of the qualities found in the 'heaven of freedom'.", "'आज़ादी के स्वर्ग' के गुणों की सूची बनाओ।"], a: ['no fear, self-respect, free knowledge, unity, truthfulness, hard work towards perfection, clear reasoning, broad thinking and action', 'भय नहीं, आत्मसम्मान, मुक्त ज्ञान, एकता, सच्चाई, पूर्णता के लिए मेहनत, साफ़ तर्क, व्यापक सोच और कर्म'] },
        { q: ["Who does the poet address when he says 'my Father'?", "'मेरे पिता' कहकर कवि किसे संबोधित करता है?"], a: ['God.', 'ईश्वर को।'] },
        { q: ['What type of society does the poet dream about?', 'कवि किस तरह के समाज का सपना देखता है?'], a: ['A society without fear, united, truthful and free, where knowledge is open to all.', 'भय-रहित, एकजुट, सच्चा और आज़ाद समाज, जहाँ ज्ञान सबके लिए खुला हो।'] },
        { q: ['Where should the mind be led?', 'मन को कहाँ ले जाना चाहिए?'], a: ['Into ever-widening thought and action.', 'हमेशा फैलते विचार और कर्म की ओर।'] },
        { q: ['How can people move towards perfection?', 'लोग पूर्णता की ओर कैसे बढ़ सकते हैं?'], a: ['By tireless striving, that is, by working hard without getting tired.', 'अथक प्रयास से, यानी बिना थके मेहनत करके।'] },
        { q: ['What does the poet mean by "let my country awake"?', '"मेरा देश जाग उठे" से कवि का क्या मतलब है?'], a: ['He wants his country to wake up into true freedom, free in mind as well as from foreign rule.', 'वह चाहता है कि उसका देश सच्ची आज़ादी में जागे, विदेशी शासन से भी और मन से भी आज़ाद।'] },
        { q: ['What are the barriers to a good society?', 'अच्छे समाज की बाधाएँ क्या हैं?'], a: ['fear, narrow walls of caste and religion, lies, laziness and dead habits (bad customs)', 'भय, जाति-धर्म की संकीर्ण दीवारें, झूठ, आलस्य और मृत आदतें (बुरे रिवाज़)'] },
        { q: ["In what sense is 'heaven of freedom' used?", "'आज़ादी का स्वर्ग' किस अर्थ में प्रयोग हुआ है?"], a: ['A perfect, ideal country where people are free in body and mind.', 'एक आदर्श देश जहाँ लोग तन और मन से आज़ाद हों।'] },
        { q: ['What type of freedom helps us make our country a heaven?', 'कैसी आज़ादी हमारे देश को स्वर्ग बनाती है?'], a: ['Freedom of the mind: freedom from fear, from narrow thinking and from bad habits.', 'मन की आज़ादी: भय से, संकीर्ण सोच से और बुरी आदतों से आज़ादी।'] },
        { q: ['Make a list of bad customs you find in society.', 'समाज के बुरे रिवाज़ों की सूची बनाओ।'], a: ['child marriage, dowry, superstition, caste discrimination', 'बाल विवाह, दहेज, अंधविश्वास, जाति-भेद'] },
      ],
    },
    {
      type: 'task',
      title: ['Vocabulary: frame sentences with free - freedom, high - height, know - knowledge, deep - depth, perfect - perfection, act - action.', 'शब्दावली: free - freedom, high - height, know - knowledge, deep - depth, perfect - perfection, act - action से वाक्य बनाओ।'],
      items: [
        { q: ['free - freedom', 'free - freedom'], a: ['Birds are free in the sky. India got freedom in 1947.', 'आकाश में चिड़ियाँ आज़ाद हैं। भारत को 1947 में आज़ादी मिली।'] },
        { q: ['deep - depth', 'deep - depth'], a: ['The well is very deep. What is the depth of the river?', 'कुआँ बहुत गहरा है। नदी की गहराई कितनी है?'] },
        { q: ['act - action', 'act - action'], a: ['We must act quickly. His action saved many lives.', 'हमें जल्दी कदम उठाना चाहिए। उसके काम से कई जानें बचीं।'] },
      ],
    },
    {
      type: 'match',
      title: ['Match the words with their opposites.', 'शब्दों को उनके विलोम से मिलाओ।'],
      pairs: [
        [['ever', 'हमेशा'], ['never', 'कभी नहीं']],
        [['high', 'ऊँचा'], ['low', 'नीचा']],
        [['fragments', 'टुकड़े'], ['whole', 'पूरा']],
        [['narrow', 'संकरा'], ['broad', 'चौड़ा']],
        [['deep', 'गहरा'], ['shallow', 'उथला']],
        [['stretch', 'फैलाना'], ['fold', 'मोड़ना']],
        [['lost', 'खोया'], ['found', 'पाया']],
        [['dreary', 'नीरस'], ['cheerful', 'ख़ुशनुमा']],
        [['desert', 'रेगिस्तान'], ['greenery', 'हरियाली']],
        [['heaven', 'स्वर्ग'], ['hell', 'नरक']],
      ],
    },
    {
      type: 'task',
      title: ['Use these phrases in your own sentences: broken up, depth of truth, lost its way, dreary desert.', 'इन वाक्यांशों को अपने वाक्यों में प्रयोग करो: broken up, depth of truth, lost its way, dreary desert.'],
      items: [
        { q: ['broken up', 'टूटा हुआ'], a: ['The old wall was broken up by the storm.', 'पुरानी दीवार तूफ़ान से टूट गई।'] },
        { q: ['depth of truth', 'सच्चाई की गहराई'], a: ['His words came from the depth of truth.', 'उसके शब्द सच्चाई की गहराई से निकले।'] },
        { q: ['lost its way', 'रास्ता भटक गया'], a: ['The little calf lost its way in the forest.', 'बछड़ा जंगल में रास्ता भटक गया।'] },
        { q: ['dreary desert', 'सूना रेगिस्तान'], a: ['The travellers walked for days across the dreary desert.', 'यात्री कई दिन सूने रेगिस्तान में चलते रहे।'] },
      ],
    },
    {
      type: 'task',
      title: ["Grammar: Where would you like to go in the summer vacation? Example: I would like to go to a place where there is a lot of greenery.", 'व्याकरण: गर्मी की छुट्टियों में तुम कहाँ जाना चाहोगे? उदाहरण: I would like to go to a place where there is a lot of greenery.'],
      items: [{ q: ['peace, cool water, waterfall, dense forest, beautiful mountains, gentle people...', 'शांति, ठंडा पानी, झरना, घना जंगल, सुंदर पहाड़, भले लोग...'], a: ['I would like to go to a place where there is a waterfall. I would like to go to a place where people are gentle and there is peace.', 'मैं ऐसी जगह जाना चाहूँगा जहाँ झरना हो। मैं ऐसी जगह जाना चाहूँगा जहाँ लोग भले हों और शांति हो।'] }],
    },
    {
      type: 'task',
      title: ['Writing: answer for yourself. When is your mind free from fear? When do you feel proud of your actions? When do you feel satisfied with your work?', 'लेखन: अपने लिए उत्तर दो। तुम्हारा मन कब भय-रहित होता है? तुम्हें अपने काम पर कब गर्व होता है? तुम्हें अपने काम से कब संतोष होता है?'],
      items: [{ q: ['My answers', 'मेरे उत्तर'], a: ['My mind is free from fear when I speak the truth. I feel proud when I help someone. I feel satisfied when I finish my work on time and do it well.', 'जब मैं सच बोलता हूँ तो मेरा मन भय-रहित होता है। किसी की मदद करके मुझे गर्व होता है। काम समय पर और अच्छे से पूरा करके मुझे संतोष होता है।'] }],
    },
    {
      type: 'match',
      title: ['Listening: listen to the story of three friends and match each man with what he did.', 'सुनना: तीन दोस्तों की कहानी सुनो और हर व्यक्ति को उसके काम से मिलाओ।'],
      passage: [
        'There once lived three men who were good friends. However, they were very different in their thinking. One was wise; he took action after careful thought. Another was intelligent; he used his brains to come up with solutions to problems. The third person relied on fate; he believed no one could stop things from happening. All of them had houses on a river bank near which a dam was being built. One day, the wise man overheard a dam worker say that the gates were weak and the houses on the river bank would be washed away. Hearing this, the wise man immediately informed his friends. The wise man said, "I am leaving this place. It is better to go elsewhere than lose my life." The intelligent man said, "I will find a way to deal with the problem." The third man said, "I have lived here all my life. I leave it all to fate." The gates of the dam broke. The wise man had left his house, so he was saved. The intelligent man had removed all his belongings, so he had nothing to lose. The man who believed in fate remained, hoping that the gates would not break. He was swept away.',
        'एक बार तीन आदमी थे जो अच्छे दोस्त थे। पर उनकी सोच बहुत अलग थी। एक समझदार था; वह सोच-समझकर क़दम उठाता था। दूसरा बुद्धिमान था; वह दिमाग़ लगाकर समस्याओं के हल निकालता था। तीसरा क़िस्मत पर भरोसा करता था; उसका मानना था कि होनी को कोई नहीं टाल सकता। तीनों के घर एक नदी किनारे थे जहाँ पास में एक बाँध बन रहा था। एक दिन समझदार आदमी ने बाँध के एक मज़दूर को कहते सुना कि फाटक कमज़ोर हैं और नदी किनारे के घर बह जाएँगे। यह सुनकर समझदार आदमी ने तुरंत अपने दोस्तों को बताया। समझदार आदमी ने कहा, "मैं यह जगह छोड़ रहा हूँ। जान गँवाने से अच्छा है कहीं और चले जाना।" बुद्धिमान आदमी ने कहा, "मैं इस समस्या का कोई हल निकाल लूँगा।" तीसरे आदमी ने कहा, "मैं ज़िंदगी भर यहीं रहा हूँ। मैं सब क़िस्मत पर छोड़ता हूँ।" बाँध के फाटक टूट गए। समझदार आदमी घर छोड़ चुका था, इसलिए बच गया। बुद्धिमान आदमी ने अपना सारा सामान हटा लिया था, इसलिए उसका कुछ नुक़सान नहीं हुआ। क़िस्मत पर भरोसा करने वाला आदमी इस उम्मीद में रुका रहा कि फाटक नहीं टूटेंगे। वह बह गया।',
      ],
      pairs: [
        [['the wise man', 'समझदार आदमी'], ['took action after careful thought and left the place', 'सोच-समझकर क़दम उठाया और जगह छोड़ दी']],
        [['the intelligent man', 'बुद्धिमान आदमी'], ['came up with a solution and removed his belongings', 'हल निकाला और अपना सामान हटा लिया']],
        [['the man who believed in fate', 'क़िस्मत पर भरोसा करने वाला'], ['thought no one can stop things and continued to stay', 'सोचा कि होनी नहीं टलती और वहीं रुका रहा']],
      ],
    },
    {
      type: 'task',
      title: ["Think of five things you could do to fulfil Tagore's dream for India. Begin with: I am determined to... / I've decided to... / I'm going to... / I intend to... / I'm planning to...", 'टैगोर के भारत के सपने को पूरा करने के लिए तुम कौन-सी पाँच बातें कर सकते हो? ऐसे शुरू करो: I am determined to... / I\'ve decided to... / I\'m going to... / I intend to... / I\'m planning to...'],
      items: [{ q: ['Five things', 'पाँच बातें'], a: ['I am determined to always speak the truth. I\'ve decided to treat everyone equally. I\'m going to teach my neighbour\'s child to read. I intend to work hard in my studies. I\'m planning to fight superstition in my village.', 'मैं हमेशा सच बोलने के लिए दृढ़ हूँ। मैंने सबसे बराबरी का व्यवहार करने का फ़ैसला किया है। मैं पड़ोसी के बच्चे को पढ़ना सिखाने जा रहा हूँ। मेरा इरादा पढ़ाई में मेहनत करने का है। मैं अपने गाँव में अंधविश्वास से लड़ने की योजना बना रहा हूँ।'] }],
    },
    {
      type: 'task',
      title: ['Project: frame phrases with bright, beautiful, huge, little (example: clear stream, clear sky, clear voice). Proverb: "The first step is the hardest."', 'परियोजना: bright, beautiful, huge, little से वाक्यांश बनाओ (जैसे: clear stream, clear sky, clear voice)। कहावत: "पहला क़दम सबसे कठिन होता है।"'],
      items: [
        { q: ['Phrases', 'वाक्यांश'], a: ['bright future, bright star; beautiful dream, beautiful country; huge crowd, huge rock; little effort, little lamp', 'उज्ज्वल भविष्य, चमकता तारा; सुंदर सपना, सुंदर देश; भारी भीड़, विशाल चट्टान; थोड़ी कोशिश, छोटा दीया'] },
        { q: ['Use the proverb in a sentence.', 'कहावत को वाक्य में प्रयोग करो।'], a: ['Learning to swim was scary at first, but the first step is the hardest.', 'तैरना सीखना पहले डरावना लगा, पर पहला क़दम ही सबसे कठिन होता है।'] },
      ],
    },
  ],
  // EXERCISES-END (more lessons are added above this line)
};

module.exports = { exercises };
