// "Activity from lesson" for Santoor, Class 3 (book.js): the questions and activities given after each
// lesson in the NCERT textbook, made into tap-to-answer activities, with a Hindi translation for every line.
// Drawing, colouring and speaking tasks become open tasks with an example.
// Format: see frontend/src/screens/LessonExercises.jsx. Texts are [English, Hindi] pairs.

const exercises = {
  'santoor-1': [
    {
      type: 'qa',
      title: ['Answer the questions.', 'प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['How many children are there in the poem?', 'कविता में कितने बच्चे हैं?'], a: ['Two children: "you" and "I".', 'दो बच्चे: "तुम" और "मैं"।'] },
        { q: ['Why did the children want to share the crayons?', 'बच्चे क्रेयॉन क्यों बाँटना चाहते थे?'], a: ['Each child had only a few colours; one needed red and the other needed black.', 'हर बच्चे के पास कुछ ही रंग थे; एक को लाल चाहिए था और दूसरे को काला।'] },
        { q: ['How can the children in the poem have a full pack?', 'कविता के बच्चों के पास पूरा डिब्बा कैसे हो सकता है?'], a: ['If they share their crayons, they will have a full pack.', 'अगर वे अपने क्रेयॉन बाँट लें, तो उनके पास पूरा डिब्बा होगा।'] },
      ],
    },
    {
      type: 'task',
      title: ['Think and say.', 'सोचो और बोलो।'],
      items: [
        { q: ['The children in the poem shared their crayons. Do you share anything with your friends? What do you share?', 'कविता के बच्चों ने क्रेयॉन बाँटे। क्या तुम अपने दोस्तों के साथ कुछ बाँटते हो? क्या बाँटते हो?'], a: ['Yes, I share my lunch, my pencils and my toys with my friends.', 'हाँ, मैं अपने दोस्तों के साथ अपना खाना, पेंसिलें और खिलौने बाँटता हूँ।'] },
        { q: ['You have only green, blue and red crayons. What would you draw?', 'तुम्हारे पास सिर्फ़ हरा, नीला और लाल क्रेयॉन है। तुम क्या बनाओगे?'], a: ['I would draw a tree (green), the sky and a river (blue) and red flowers.', 'मैं एक पेड़ (हरा), आसमान और नदी (नीला) और लाल फूल बनाऊँगा।'] },
        { q: ['Now you have blue, green, red, yellow, brown and orange crayons. What can you draw?', 'अब तुम्हारे पास नीला, हरा, लाल, पीला, भूरा और नारंगी क्रेयॉन है। तुम क्या बना सकते हो?'], a: ['A garden with a brown tree trunk, green leaves, orange and red fruits, a yellow sun and a blue sky.', 'एक बगीचा: भूरा तना, हरी पत्तियाँ, नारंगी और लाल फल, पीला सूरज और नीला आसमान।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Rearrange the letters to find the hidden colour.', 'अक्षरों को सही क्रम में लगाकर छिपा हुआ रंग खोजो।'],
      bank: ['BLUE', 'YELLOW', 'GREEN', 'PURPLE', 'BROWN'],
      items: [
        { q: ['LEBU = ___', 'LEBU = ___'], a: 'BLUE' },
        { q: ['LYLEWO = ___', 'LYLEWO = ___'], a: 'YELLOW' },
        { q: ['RENEG = ___', 'RENEG = ___'], a: 'GREEN' },
        { q: ['RUPPEL = ___', 'RUPPEL = ___'], a: 'PURPLE' },
        { q: ['NROBW = ___', 'NROBW = ___'], a: 'BROWN' },
      ],
    },
    {
      type: 'task',
      title: ["Say aloud: gr, cr, dr, pr words. Then make a sentence with each word.", "ज़ोर से बोलो: gr, cr, dr, pr वाले शब्द। फिर हर शब्द से एक वाक्य बनाओ।"],
      items: [
        { q: ['gr: green, grey, grass, grapes, grandmother', 'gr: हरा, धूसर, घास, अंगूर, दादी/नानी'], a: ['The grass is green.', 'घास हरी है।'] },
        { q: ['cr: crayon, crab, crane, crow, cradle', 'cr: क्रेयॉन, केकड़ा, सारस, कौआ, पालना'], a: ['The crow is black.', 'कौआ काला है।'] },
        { q: ['dr: draw, drum, dress, drop, dragon', 'dr: चित्र बनाना, ढोल, पोशाक, बूँद, ड्रैगन'], a: ['I like to draw.', 'मुझे चित्र बनाना पसंद है।'] },
        { q: ['pr: prince, princess, prize, pray, present', 'pr: राजकुमार, राजकुमारी, इनाम, प्रार्थना करना, उपहार'], a: ['She won a prize.', 'उसने इनाम जीता।'] },
      ],
    },
    {
      type: 'task',
      title: ['Have fun! In the book, colour words are printed in a different colour. Read out the COLOUR you see, not the word.', 'मज़ा करो! किताब में रंगों के नाम दूसरे रंग में छपे हैं। शब्द नहीं, जो रंग दिखे वह बोलो।'],
      items: [{ q: ['The word YELLOW is written in green.', 'YELLOW शब्द हरे रंग में लिखा है।'], a: ['Say "GREEN", not "YELLOW".', '"YELLOW" नहीं, "GREEN" बोलो।'] }],
    },
    {
      type: 'pick',
      title: ['Words used to show actions are called action words. Choose the action words.', 'काम बताने वाले शब्द क्रिया शब्द कहलाते हैं। क्रिया शब्द चुनो।'],
      options: [['carrot', 'गाजर'], ['laugh', 'हँसना'], ['dance', 'नाचना'], ['leg', 'टाँग'], ['eat', 'खाना'], ['cry', 'रोना'], ['swim', 'तैरना'], ['potato', 'आलू'], ['sleep', 'सोना'], ['play', 'खेलना'], ['sun', 'सूरज'], ['dig', 'खोदना'], ['jump', 'कूदना'], ['run', 'दौड़ना'], ['book', 'किताब'], ['face', 'चेहरा'], ['write', 'लिखना'], ['cat', 'बिल्ली'], ['smile', 'मुस्कुराना'], ['push', 'धकेलना']],
      answers: [1, 2, 4, 5, 6, 8, 9, 11, 12, 13, 16, 18, 19],
    },
    {
      type: 'pick',
      title: ['Find the action words: walk, yawn, pour, cough, give, see, open, help. Choose the words that are action words.', 'क्रिया शब्द खोजो: walk, yawn, pour, cough, give, see, open, help. जो क्रिया शब्द हैं उन्हें चुनो।'],
      options: [['walk', 'चलना'], ['puppy', 'पिल्ला'], ['yawn', 'जम्हाई लेना'], ['pour', 'उड़ेलना'], ['nose', 'नाक'], ['cough', 'खाँसना'], ['give', 'देना'], ['egg', 'अंडा'], ['see', 'देखना'], ['open', 'खोलना'], ['help', 'मदद करना']],
      answers: [0, 2, 3, 5, 6, 8, 9, 10],
    },
    {
      type: 'task',
      title: ['The 26 letters of the English alphabet. Read the sentences aloud and notice the repeated letter.', 'अंग्रेज़ी वर्णमाला के 26 अक्षर। वाक्य ज़ोर से पढ़ो और दोहराए गए अक्षर पर ध्यान दो।'],
      items: [
        { q: ['A: Anu eats an apple. B: Basu has a bat and a ball. C: Chandu likes cabbage and carrots.', 'A: अनु सेब खाती है। B: बसु के पास बल्ला और गेंद है। C: चंदू को पत्तागोभी और गाजर पसंद है।'] },
        { q: ['D: Dinesh dances day and night. E: Esha enjoys an elephant ride. F: Faiz feeds a fish.', 'D: दिनेश दिन-रात नाचता है। E: ईशा को हाथी की सवारी अच्छी लगती है। F: फ़ैज़ मछली को खाना खिलाता है।'] },
        { q: ['M: Madhav mixes milk and mango pulp. S: Six sparrows sit on a sack. Z: Zebras graze in the zoo.', 'M: माधव दूध और आम का गूदा मिलाता है। S: छह गौरैया एक बोरी पर बैठी हैं। Z: ज़ेबरा चिड़ियाघर में घास चरते हैं।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Write these colours in alphabetical order: YELLOW, BLUE, PURPLE, GREEN, RED.', 'इन रंगों को वर्णमाला के क्रम में लिखो: YELLOW, BLUE, PURPLE, GREEN, RED.'],
      items: [{ q: ['Alphabetical order (look at the first letter)', 'वर्णमाला क्रम (पहला अक्षर देखो)'], a: ['BLUE, GREEN, PURPLE, RED, YELLOW', 'BLUE, GREEN, PURPLE, RED, YELLOW'] }],
    },
    {
      type: 'match',
      title: ['Words have friends too! Match each word with its friend-word to make a new word (news + paper = newspaper).', 'शब्दों के भी दोस्त होते हैं! हर शब्द को उसके दोस्त-शब्द से मिलाकर नया शब्द बनाओ (news + paper = newspaper)।'],
      pairs: [
        [['rain', 'बारिश'], ['bow = rainbow', 'इंद्रधनुष']],
        [['news', 'समाचार'], ['paper = newspaper', 'अख़बार']],
        [['blue', 'नीला'], ['berry = blueberry', 'ब्लूबेरी']],
        [['basket', 'टोकरी'], ['ball = basketball', 'बास्केटबॉल']],
        [['earth', 'धरती'], ['worm = earthworm', 'केंचुआ']],
      ],
    },
  ],

  'santoor-2': [
    {
      type: 'qa',
      title: ['Answer the following.', 'इनके उत्तर दो।'],
      items: [
        { q: ['What did Badal come across on his way home from school?', 'स्कूल से घर लौटते समय बादल को क्या मिला?'], a: ['A puppy shivering in the cold.', 'ठंड में काँपता हुआ एक पिल्ला।'] },
        { q: ['What did Badal and his mother name the puppy?', 'बादल और उसकी माँ ने पिल्ले का क्या नाम रखा?'], a: ['Moti.', 'मोती।'] },
        { q: ['What did Badal fall into?', 'बादल किसमें गिर गया?'], a: ['A deep pit.', 'एक गहरे गड्ढे में।'] },
        { q: ['How did Moti find Badal?', 'मोती ने बादल को कैसे ढूँढा?'], a: ["Moti caught Badal's scent, followed it to the pit and started barking.", 'मोती ने बादल की गंध पहचानी, उसके पीछे-पीछे गड्ढे तक गया और भौंकने लगा।'] },
      ],
    },
    {
      type: 'tf',
      title: ["Write 'T' for true and 'F' for false.", "सही के लिए 'T' और ग़लत के लिए 'F' लिखो।"],
      items: [
        { q: ['Badal lived with his grandmother.', 'बादल अपनी दादी के साथ रहता था।'], a: false },
        { q: ['Moti grew up and loved Badal.', 'मोती बड़ा हुआ और बादल से प्यार करने लगा।'], a: true },
        { q: ["Badal's mother was worried when he did not come home in time.", 'बादल समय पर घर नहीं आया तो उसकी माँ चिंतित हो गई।'], a: true },
        { q: ["Moti caught Badal's photo.", 'मोती ने बादल की तस्वीर पकड़ी।'], a: false },
        { q: ['Badal hugged his puppy Moti and thanked him.', 'बादल ने अपने पिल्ले मोती को गले लगाया और धन्यवाद दिया।'], a: true },
      ],
    },
    {
      type: 'task',
      title: ['Think and discuss in pairs.', 'जोड़ी में सोचो और बात करो।'],
      items: [
        { q: ['When did you fall down last time? Who picked you up?', 'तुम पिछली बार कब गिरे थे? तुम्हें किसने उठाया?'], a: ['I fell down while running in the playground. My friend Raju picked me up.', 'मैं खेल के मैदान में दौड़ते हुए गिर गया था। मेरे दोस्त राजू ने मुझे उठाया।'] },
        { q: ['Do you have a pet? Do you know someone who has a pet?', 'क्या तुम्हारे पास कोई पालतू जानवर है? क्या तुम किसी ऐसे को जानते हो?'], a: ['My neighbour has a dog named Sheru.', 'मेरे पड़ोसी के पास शेरू नाम का कुत्ता है।'] },
        { q: ['If you could keep any animal as a pet, which would you choose? Why?', 'अगर तुम कोई भी जानवर पाल सको, तो कौन-सा चुनोगे? क्यों?'], a: ['I would choose a rabbit, because it is soft and gentle.', 'मैं खरगोश चुनूँगा, क्योंकि वह मुलायम और सीधा होता है।'] },
      ],
    },
    {
      type: 'fill',
      title: ["Add 'ed' and write. (lived, loved, played: these actions have already happened.)", "'ed' जोड़कर लिखो। (lived, loved, played: ये काम पहले ही हो चुके हैं।)"],
      bank: ['walked', 'played', 'talked', 'asked', 'touched'],
      items: [
        { q: ['walk + ed = ___', 'चलना → चला = ___'], a: 'walked' },
        { q: ['play + ed = ___', 'खेलना → खेला = ___'], a: 'played' },
        { q: ['talk + ed = ___', 'बात करना → बात की = ___'], a: 'talked' },
        { q: ['ask + ed = ___', 'पूछना → पूछा = ___'], a: 'asked' },
        { q: ['touch + ed = ___', 'छूना → छुआ = ___'], a: 'touched' },
      ],
    },
    {
      type: 'match',
      title: ["Match the words to make pairs ('paper and pencil').", "शब्दों को मिलाकर जोड़े बनाओ ('paper and pencil')।"],
      pairs: [
        [['paper', 'काग़ज़'], ['pencil', 'पेंसिल']],
        [['chair', 'कुर्सी'], ['table', 'मेज़']],
        [['bat', 'बल्ला'], ['ball', 'गेंद']],
        [['needle', 'सुई'], ['thread', 'धागा']],
        [['lock', 'ताला'], ['key', 'चाबी']],
        [['idli', 'इडली'], ['sambar', 'सांभर']],
      ],
    },
    {
      type: 'qa',
      title: ['Listening: number the sentences in the order of the story.', 'सुनना: वाक्यों को कहानी के क्रम में लगाओ।'],
      passage: [
        "There was a boy called Badal. He lived with his mother in a village. One evening, when Badal was returning from school, he saw a puppy shivering in the cold. Badal brought him home. Badal and his mother named the puppy Moti. Moti grew up and loved Badal. One rainy day, Badal slipped and fell into a deep pit. Moti accompanied Badal's mother to search for him. Moti followed Badal's scent, went near the pit and started barking. The neighbours pulled Badal out with a rope. Badal hugged and thanked Moti.",
        'बादल नाम का एक लड़का था। वह अपनी माँ के साथ एक गाँव में रहता था। एक शाम, जब बादल स्कूल से लौट रहा था, उसने ठंड में काँपता एक पिल्ला देखा। बादल उसे घर ले आया। बादल और उसकी माँ ने पिल्ले का नाम मोती रखा। मोती बड़ा हुआ और बादल से प्यार करने लगा। एक बरसात के दिन बादल फिसलकर एक गहरे गड्ढे में गिर गया। मोती बादल की माँ के साथ उसे ढूँढने गया। मोती बादल की गंध के पीछे गड्ढे तक गया और भौंकने लगा। पड़ोसियों ने रस्सी से बादल को बाहर निकाला। बादल ने मोती को गले लगाया और धन्यवाद दिया।',
      ],
      items: [
        {
          q: ['Put the sentences in order.', 'वाक्यों को क्रम में लगाओ।'],
          a: ['1. Badal came across a puppy.  2. Badal and his mother named the puppy Moti.  3. One rainy day, he slipped and fell into a deep pit.  4. Moti accompanied Badal\'s mother to search for him.  5. Moti followed Badal\'s scent, went near the pit and started barking.  6. Badal hugged Moti.', '1. बादल को एक पिल्ला मिला।  2. बादल और उसकी माँ ने पिल्ले का नाम मोती रखा।  3. एक बरसात के दिन वह फिसलकर गहरे गड्ढे में गिर गया।  4. मोती बादल की माँ के साथ उसे ढूँढने गया।  5. मोती गंध के पीछे गड्ढे तक गया और भौंकने लगा।  6. बादल ने मोती को गले लगाया।'],
        },
      ],
    },
    {
      type: 'task',
      title: ['Talk in pairs about what you do every day: before school, during school and after going home.', 'जोड़ी में बात करो कि तुम रोज़ क्या करते हो: स्कूल से पहले, स्कूल में और घर लौटकर।'],
      items: [
        { q: ['Before school', 'स्कूल से पहले'], a: ['Every day I get up at six in the morning. Then I brush my teeth and go to the toilet. After that, I take a bath and dress up for school. I eat breakfast and I go to school.', 'मैं रोज़ सुबह छह बजे उठता हूँ। फिर दाँत ब्रश करता हूँ और शौचालय जाता हूँ। उसके बाद नहाकर स्कूल के लिए तैयार होता हूँ। नाश्ता करके स्कूल जाता हूँ।'] },
        { q: ['During school hours', 'स्कूल के समय'], a: ['I study, eat my lunch with my friends and play in the break.', 'मैं पढ़ता हूँ, दोस्तों के साथ खाना खाता हूँ और छुट्टी में खेलता हूँ।'] },
        { q: ['After going back home', 'घर लौटकर'], a: ['I eat, do my homework, play outside and sleep early.', 'मैं खाना खाता हूँ, गृहकार्य करता हूँ, बाहर खेलता हूँ और जल्दी सोता हूँ।'] },
      ],
    },
    {
      type: 'fill',
      title: ['The dove and the ant: fill in the blanks to complete the story.', 'कबूतर और चींटी: कहानी पूरी करने के लिए रिक्त स्थान भरो।'],
      bank: ['branch', 'stream', 'fell', 'leaf', 'climbed', 'hunter', 'flew'],
      items: [
        { q: ['A dove was resting on a ___ of a tree near a stream.', 'एक कबूतर नदी के पास एक पेड़ की ___ पर आराम कर रहा था।'], a: 'branch' },
        { q: ['The tree was near a ___.', 'पेड़ एक ___ के पास था।'], a: 'stream' },
        { q: ['An ant ___ into the stream and cried for help.', 'एक चींटी नदी में ___ गई और मदद के लिए पुकारने लगी।'], a: 'fell' },
        { q: ['The dove dropped a ___ into the stream.', 'कबूतर ने नदी में एक ___ गिरा दिया।'], a: 'leaf' },
        { q: ['The ant ___ on the leaf and landed safely.', 'चींटी पत्ते पर ___ और सुरक्षित किनारे पहुँच गई।'], a: 'climbed' },
        { q: ['Another day the ant saw a ___ aiming at the dove.', 'एक दिन चींटी ने एक ___ को कबूतर पर निशाना लगाते देखा।'], a: 'hunter' },
        { q: ['She bit the hunter\'s hand. The dove ___ away unhurt.', 'उसने शिकारी के हाथ पर काट लिया। कबूतर बिना चोट के ___ गया।'], a: 'flew' },
      ],
    },
    {
      type: 'mcq',
      title: ['Add a question mark (?) or a full stop (.).', 'प्रश्नवाचक चिह्न (?) या पूर्ण विराम (.) लगाओ।'],
      items: [
        { q: ['The sun rises in the east', 'सूरज पूर्व में उगता है'], options: [['.', 'पूर्ण विराम'], ['?', 'प्रश्नवाचक']], a: 0 },
        { q: ['What is your name', 'तुम्हारा नाम क्या है'], options: [['.', 'पूर्ण विराम'], ['?', 'प्रश्नवाचक']], a: 1 },
        { q: ['I like to eat mangoes', 'मुझे आम खाना पसंद है'], options: [['.', 'पूर्ण विराम'], ['?', 'प्रश्नवाचक']], a: 0 },
        { q: ['May I borrow your English textbook', 'क्या मैं तुम्हारी अंग्रेज़ी की किताब ले सकता हूँ'], options: [['.', 'पूर्ण विराम'], ['?', 'प्रश्नवाचक']], a: 1 },
        { q: ['Brinda and Namrata are good friends', 'बृंदा और नम्रता अच्छी सहेलियाँ हैं'], options: [['.', 'पूर्ण विराम'], ['?', 'प्रश्नवाचक']], a: 0 },
        { q: ['Whose shoes are these', 'ये किसके जूते हैं'], options: [['.', 'पूर्ण विराम'], ['?', 'प्रश्नवाचक']], a: 1 },
      ],
    },
    {
      type: 'task',
      title: ['Complete the conversation between two children.', 'दो बच्चों के बीच की बातचीत पूरी करो।'],
      items: [
        {
          q: ['Namaste! I am Anandi. What is your name?', 'नमस्ते! मैं आनंदी हूँ। तुम्हारा नाम क्या है?'],
          a: ['Namaste! I am Ravi. I live in Raipur. Where do you study? - I go to the Government School. - Yes, I study in that school too! Which class are you in? - I am in class 3. - I am in class 3 too. Nice meeting you! See you in school tomorrow.', 'नमस्ते! मैं रवि हूँ। मैं रायपुर में रहता हूँ। तुम कहाँ पढ़ती हो? - मैं सरकारी स्कूल जाती हूँ। - हाँ, मैं भी उसी स्कूल में पढ़ता हूँ! तुम किस कक्षा में हो? - मैं कक्षा 3 में हूँ। - मैं भी कक्षा 3 में हूँ। तुमसे मिलकर अच्छा लगा! कल स्कूल में मिलेंगे।'],
        },
      ],
    },
    {
      type: 'task',
      title: ['Let us do: three children are playing in a picture. Add something to the picture with your crayons.', 'आओ करें: चित्र में तीन बच्चे खेल रहे हैं। अपने क्रेयॉन से चित्र में कुछ जोड़ो।'],
      items: [{ q: ['What will you add?', 'तुम क्या जोड़ोगे?'], a: ['I will add a puppy, a tree and a ball.', 'मैं एक पिल्ला, एक पेड़ और एक गेंद जोड़ूँगा।'] }],
    },
  ],

  'santoor-3': [
    {
      type: 'qa',
      title: ['Answer the following.', 'इनके उत्तर दो।'],
      items: [
        { q: ['Who were the four friends?', 'चार दोस्त कौन थे?'], a: ['Circle, Square, Triangle and Rectangle.', 'वृत्त, वर्ग, त्रिभुज और आयत।'] },
        { q: ['Why were they fighting?', 'वे क्यों लड़ रहे थे?'], a: ['Each of them said that they were the best.', 'हर एक कहता था कि वही सबसे अच्छा है।'] },
        { q: ['Who helped them to end their fight?', 'उनका झगड़ा ख़त्म करने में किसने मदद की?'], a: ['A wise star.', 'एक समझदार तारे ने।'] },
        { q: ['What lesson did the friends learn in the end?', 'आख़िर में दोस्तों ने क्या सीखा?'], a: ['Friends should not fight; together they can create wonders.', 'दोस्तों को लड़ना नहीं चाहिए; साथ मिलकर वे कमाल कर सकते हैं।'] },
      ],
    },
    {
      type: 'tf',
      title: ["Write 'T' for true and 'F' for false.", "सही के लिए 'T' और ग़लत के लिए 'F' लिखो।"],
      items: [
        { q: ['The circle does not have sharp edges.', 'वृत्त के नुकीले किनारे नहीं होते।'], a: true },
        { q: ['A square has four sides but not all of them are equal in size.', 'वर्ग की चार भुजाएँ होती हैं पर सब बराबर नहीं होतीं।'], a: false },
        { q: ['The triangle has two sides.', 'त्रिभुज की दो भुजाएँ होती हैं।'], a: false },
        { q: ['The friends could decide who was the best among them.', 'दोस्त तय कर पाए कि उनमें सबसे अच्छा कौन है।'], a: false },
      ],
    },
    {
      type: 'task',
      title: ['Think and say.', 'सोचो और बोलो।'],
      items: [
        { q: ['Who is your friend? What can you do when your friend helps you?', 'तुम्हारा दोस्त कौन है? जब दोस्त मदद करता है तो तुम क्या कर पाते हो?'], a: ['My friend is Meena. When she helps me, I can finish my drawing and learn new games.', 'मेरी सहेली मीना है। जब वह मदद करती है, तो मैं अपना चित्र पूरा कर पाती हूँ और नए खेल सीखती हूँ।'] },
        { q: ['Look around you. Talk about the shapes of what you see.', 'अपने आसपास देखो। जो दिखे उसके आकार के बारे में बात करो।'], a: ['The clock is a circle. The blackboard is a rectangle. The window is a square.', 'घड़ी गोल (वृत्त) है। श्यामपट आयत है। खिड़की वर्ग है।'] },
      ],
    },
    {
      type: 'task',
      title: ['Let us speak: in groups of five, each of you is one character (circle, square, triangle, rectangle, star). Read the story aloud with actions.', 'आओ बोलें: पाँच के समूह में हर कोई एक पात्र बने (वृत्त, वर्ग, त्रिभुज, आयत, तारा)। कहानी हाव-भाव के साथ ज़ोर से पढ़ो।'],
      items: [{ q: ['Circle', 'वृत्त'], a: ['"I am the best! I am round and beautiful. I have no sharp edges."', '"मैं सबसे अच्छा हूँ! मैं गोल और सुंदर हूँ। मेरे नुकीले किनारे नहीं हैं।"'] }],
    },
    {
      type: 'fill',
      title: ["Fill in the blanks using 'a' (before consonant sounds).", "'a' से रिक्त स्थान भरो (व्यंजन ध्वनि से पहले)।"],
      bank: ['A', 'a'],
      items: [
        { q: ['___ dog is barking at the postman.', '___ कुत्ता डाकिए पर भौंक रहा है।'], a: 'A' },
        { q: ['My mother gives chapattis to ___ cow every day.', 'मेरी माँ रोज़ ___ गाय को रोटी देती हैं।'], a: 'a' },
        { q: ['In summers, ___ sparrow builds its nest on the mango tree.', 'गर्मियों में ___ गौरैया आम के पेड़ पर घोंसला बनाती है।'], a: 'a' },
      ],
    },
    {
      type: 'fill',
      title: ["Fill in the blanks using 'an' (before vowel sounds a, e, i, o, u).", "'an' से रिक्त स्थान भरो (स्वर ध्वनि a, e, i, o, u से पहले)।"],
      bank: ['an', 'An'],
      items: [
        { q: ['I saw ___ eagle yesterday.', 'मैंने कल ___ चील देखी।'], a: 'an' },
        { q: ['Maya bought ___ umbrella for the monsoon.', 'माया ने बरसात के लिए ___ छाता ख़रीदा।'], a: 'an' },
        { q: ['___ ice-cream man brings his cart in the evenings.', '___ आइसक्रीम वाला शाम को अपना ठेला लाता है।'], a: 'An' },
      ],
    },
    {
      type: 'mcq',
      title: ["Fill in the blanks using 'a' or 'an'.", "'a' या 'an' से रिक्त स्थान भरो।"],
      items: [
        { q: ['___ brown hen ...', '___ भूरी मुर्गी ...'], options: [['A', ''], ['An', '']], a: 0 },
        { q: ['... laid ___ egg.', '... ने ___ अंडा दिया।'], options: [['a', ''], ['an', '']], a: 1 },
        { q: ['___ eagle sat on a building.', '___ चील एक इमारत पर बैठी।'], options: [['A', ''], ['An', '']], a: 1 },
        { q: ['An eagle sat on ___ building.', 'एक चील ___ इमारत पर बैठी।'], options: [['a', ''], ['an', '']], a: 0 },
        { q: ['Mary ate ___ apricot.', 'मैरी ने ___ ख़ुबानी खाई।'], options: [['a', ''], ['an', '']], a: 1 },
        { q: ['Mary ate ___ chikoo.', 'मैरी ने ___ चीकू खाया।'], options: [['a', ''], ['an', '']], a: 0 },
        { q: ['Mary ate ___ orange.', 'मैरी ने ___ संतरा खाया।'], options: [['a', ''], ['an', '']], a: 1 },
      ],
    },
    {
      type: 'task',
      title: ['Let us write: paste a picture of your friend and write a few lines about your friend.', 'आओ लिखें: अपने दोस्त का चित्र चिपकाओ और उसके बारे में कुछ पंक्तियाँ लिखो।'],
      items: [{ q: ['My Friend', 'मेरा दोस्त'], a: ["My friend's name is Sonu. He is a boy. He is 8 years old. His favourite colour is blue. He likes to play cricket. He wants to become a doctor. I love my friend.", 'मेरे दोस्त का नाम सोनू है। वह एक लड़का है। वह 8 साल का है। उसका पसंदीदा रंग नीला है। उसे क्रिकेट खेलना पसंद है। वह डॉक्टर बनना चाहता है। मैं अपने दोस्त से प्यार करता हूँ।'] }],
    },
    {
      type: 'task',
      title: ['Let us do and explore: draw the four friends, and make pictures using the four shapes.', 'आओ करें और खोजें: चारों दोस्तों को बनाओ, और चारों आकारों से चित्र बनाओ।'],
      items: [{ q: ['A house', 'एक घर'], a: ['A square for the house, a triangle for the roof, a rectangle for the door and a circle for the sun.', 'घर के लिए वर्ग, छत के लिए त्रिभुज, दरवाज़े के लिए आयत और सूरज के लिए वृत्त।'] }],
    },
  ],
  'santoor-4': [
    {
      type: 'qa',
      title: ['Answer the following.', 'इनके उत्तर दो।'],
      items: [
        { q: ['What are the children doing with the ball?', 'बच्चे गेंद के साथ क्या कर रहे हैं?'], a: ['They bounce, throw and catch the ball.', 'वे गेंद उछालते, फेंकते और पकड़ते हैं।'] },
        { q: ['How are the children playing with the kite?', 'बच्चे पतंग के साथ कैसे खेल रहे हैं?'], a: ['They tug, pull and fly the kite.', 'वे पतंग को झटका देते, खींचते और उड़ाते हैं।'] },
        { q: ['Where are the children playing?', 'बच्चे कहाँ खेल रहे हैं?'], a: ['Out in the garden.', 'बाहर बगीचे में।'] },
      ],
    },
    {
      type: 'task',
      title: ['Think and answer.', 'सोचो और उत्तर दो।'],
      items: [
        { q: ['Where do you play?', 'तुम कहाँ खेलते हो?'], a: ['I play in the park near my house.', 'मैं अपने घर के पास वाले पार्क में खेलता हूँ।'] },
        { q: ['What games do you play outside?', 'तुम बाहर कौन-से खेल खेलते हो?'], a: ['I play kabaddi, cricket and hide-and-seek.', 'मैं कबड्डी, क्रिकेट और छुपन-छुपाई खेलता हूँ।'] },
        { q: ['What happens if we are not careful while playing outside?', 'बाहर खेलते समय सावधान न रहें तो क्या होता है?'], a: ['We can fall down and get hurt.', 'हम गिर सकते हैं और चोट लग सकती है।'] },
      ],
    },
    {
      type: 'task',
      title: ['Let us speak: look at some more games. Do you know them? What do you call them in your mother tongue?', 'आओ बोलें: कुछ और खेल देखो। क्या तुम इन्हें जानते हो? अपनी मातृभाषा में इन्हें क्या कहते हो?'],
      items: [{ q: ['hide-and-seek, hopscotch, marbles', 'छुपन-छुपाई, स्टापू (लंगड़ी), कंचे'], a: ['Hide-and-seek is "chhupan-chhupai", hopscotch is "stapu" and marbles are "kanche".', 'हाइड-एंड-सीक को "छुपन-छुपाई", हॉपस्कॉच को "स्टापू" और मार्बल्स को "कंचे" कहते हैं।'] }],
    },
    {
      type: 'fill',
      title: ["Combine the words using 'and' (give, take = give and take).", "'and' से शब्दों को जोड़ो (give, take = give and take)।"],
      bank: ['sing and dance', 'eat and drink', 'catch and throw', 'run and catch'],
      items: [
        { q: ['sing, dance = ___', 'गाना, नाचना = ___'], a: 'sing and dance' },
        { q: ['eat, drink = ___', 'खाना, पीना = ___'], a: 'eat and drink' },
        { q: ['catch, throw = ___', 'पकड़ना, फेंकना = ___'], a: 'catch and throw' },
        { q: ['run, catch = ___', 'दौड़ना, पकड़ना = ___'], a: 'run and catch' },
      ],
    },
    {
      type: 'task',
      title: ['Can you think of two more word pairs?', 'क्या तुम दो और शब्द-जोड़े सोच सकते हो?'],
      items: [{ q: ['Two word pairs', 'दो शब्द-जोड़े'], a: ['read and write; come and go', 'पढ़ना और लिखना; आना और जाना'] }],
    },
    {
      type: 'task',
      title: ['Let us do: make a paper bag puppet.', 'आओ करें: काग़ज़ के थैले की कठपुतली बनाओ।'],
      items: [{ q: ['Materials and steps', 'सामग्री और क़दम'], a: ['Take a used paper bag. Fold the base upward and hold it upside down. Draw the upper lip on the flap and the lower lip below it. Draw the face, colour and decorate it. Slide your hand in and bend your fingers to make the puppet talk.', 'एक पुराना काग़ज़ का थैला लो। तली को ऊपर मोड़ो और उल्टा पकड़ो। तह पर ऊपर का होंठ और उसके नीचे निचला होंठ बनाओ। चेहरा बनाकर रंग भरो और सजाओ। हाथ अंदर डालकर उँगलियाँ मोड़ो और कठपुतली को बुलवाओ।'] }],
    },
  ],

  'santoor-5': [
    {
      type: 'qa',
      title: ['Answer the following.', 'इनके उत्तर दो।'],
      items: [
        { q: ['Name the toys in the toy shop.', 'खिलौनों की दुकान के खिलौनों के नाम बताओ।'], a: ['wooden toys, soft toys, board games, bats and balls, a toy kitten, a talking doll, a toy elephant, a train, an aeroplane, a toy phone, marbles, a spinning top and dancing dolls', 'लकड़ी के खिलौने, नरम खिलौने, बोर्ड गेम, बल्ले और गेंदें, खिलौना बिल्ली, बोलने वाली गुड़िया, खिलौना हाथी, रेलगाड़ी, हवाई जहाज़, खिलौना फ़ोन, कंचे, लट्टू और नाचने वाली गुड़ियाँ'] },
        { q: ['What toy did the little boy ask his mother to buy him?', 'छोटे लड़के ने माँ से कौन-सा खिलौना ख़रीदने को कहा?'], a: ['The Vande Bharat toy train.', 'वंदे भारत खिलौना रेलगाड़ी।'] },
      ],
    },
    {
      type: 'task',
      title: ['Think and answer in pairs.', 'जोड़ी में सोचो और उत्तर दो।'],
      items: [
        { q: ['How do you feel when someone buys or gives a toy to you?', 'जब कोई तुम्हें खिलौना ख़रीदकर या देता है तो कैसा लगता है?'], a: ['I feel very happy and I say thank you.', 'मुझे बहुत ख़ुशी होती है और मैं धन्यवाद कहता हूँ।'] },
        { q: ["Have you seen the 'Jaadui Pitara'?", "क्या तुमने 'जादुई पिटारा' देखा है?"], a: ['Yes, it is a box full of toys, games and puppets for learning in class.', 'हाँ, यह कक्षा में सीखने के लिए खिलौनों, खेलों और कठपुतलियों से भरा डिब्बा है।'] },
      ],
    },
    {
      type: 'match',
      title: ['Describing words: add a word from the help box (brown, clean, cold, white, cotton, large) to each naming word.', 'वर्णन करने वाले शब्द: हर नाम वाले शब्द के साथ सहायता बॉक्स (brown, clean, cold, white, cotton, large) से एक शब्द जोड़ो।'],
      pairs: [
        [['food', 'खाना'], ['clean food', 'साफ़ खाना']],
        [['kurta', 'कुर्ता'], ['cotton kurta', 'सूती कुर्ता']],
        [['water', 'पानी'], ['cold water', 'ठंडा पानी']],
        [['paper', 'काग़ज़'], ['white paper', 'सफ़ेद काग़ज़']],
        [['tree', 'पेड़'], ['large tree', 'बड़ा पेड़']],
      ],
    },
    {
      type: 'fill',
      title: ["Plurals: add 's' for more than one thing.", "बहुवचन: एक से ज़्यादा के लिए 's' जोड़ो।"],
      bank: ['cats', 'cups', 'dolls', 'shops', 'trains'],
      items: [
        { q: ['cat → ___', 'बिल्ली → ___'], a: 'cats' },
        { q: ['cup → ___', 'कप → ___'], a: 'cups' },
        { q: ['doll → ___', 'गुड़िया → ___'], a: 'dolls' },
        { q: ['shop → ___', 'दुकान → ___'], a: 'shops' },
        { q: ['train → ___', 'रेलगाड़ी → ___'], a: 'trains' },
      ],
    },
    {
      type: 'fill',
      title: ["Plurals: for some words we add 'es' (box → boxes).", "बहुवचन: कुछ शब्दों में 'es' जोड़ते हैं (box → boxes)।"],
      bank: ['classes', 'buses', 'pouches', 'brushes', 'mangoes'],
      items: [
        { q: ['class → ___', 'कक्षा → ___'], a: 'classes' },
        { q: ['bus → ___', 'बस → ___'], a: 'buses' },
        { q: ['pouch → ___', 'थैली → ___'], a: 'pouches' },
        { q: ['brush → ___', 'ब्रश → ___'], a: 'brushes' },
        { q: ['mango → ___', 'आम → ___'], a: 'mangoes' },
      ],
    },
    {
      type: 'pick',
      title: ['Listening: listen to the poem "My Top" and choose the colours used in it.', 'सुनना: कविता "मेरा लट्टू" सुनो और उसमें आए रंग चुनो।'],
      passage: [
        'Red and green,\nYellow and brown,\nMy top goes round and round.\nI play with it every day\nSeeing it go round and round,\nAlong with it, I jump around.',
        'लाल और हरा,\nपीला और भूरा,\nमेरा लट्टू गोल-गोल घूमता।\nमैं रोज़ इससे खेलता हूँ\nइसे गोल-गोल घूमते देखकर,\nइसके साथ मैं भी उछलता-कूदता।',
      ],
      options: [['red', 'लाल'], ['pink', 'गुलाबी'], ['green', 'हरा'], ['blue', 'नीला'], ['yellow', 'पीला'], ['white', 'सफ़ेद'], ['brown', 'भूरा'], ['purple', 'बैंगनी']],
      answers: [0, 2, 4, 6],
    },
    {
      type: 'fill',
      title: ['Making a kite: the mother bird made a kite for her baby bird. Complete the sentences.', 'पतंग बनाना: माँ चिड़िया ने अपने बच्चे के लिए पतंग बनाई। वाक्य पूरे करो।'],
      bank: ['onion peel', 'leaf blade from the palm tree', 'gum from a tree', 'thread from a spider web'],
      items: [
        { q: ['The mother bird brought ___ from onions.', 'माँ चिड़िया प्याज़ से ___ लाई।'], a: 'onion peel' },
        { q: ['Then, she took a ___ to make the frame.', 'फिर उसने ढाँचे के लिए ___ लिया।'], a: 'leaf blade from the palm tree' },
        { q: ['Next, she stuck them together with ___.', 'फिर उसने उन्हें ___ से चिपकाया।'], a: 'gum from a tree' },
        { q: ['Finally, she tied the kite with ___ and the little chick flew it.', 'आख़िर में उसने पतंग को ___ से बाँधा और नन्हे चूज़े ने उसे उड़ाया।'], a: 'thread from a spider web' },
      ],
    },
    {
      type: 'task',
      title: ["Draw a bird using the letter 'B', then draw a picture using any other letter.", "अक्षर 'B' से एक चिड़िया बनाओ, फिर किसी और अक्षर से चित्र बनाओ।"],
      items: [{ q: ['Steps', 'क़दम'], a: ["Write a capital B. Draw a sleeping v (>) for the beak. Draw a circle with a dot in the upper loop for the eye. Draw a w in the lower loop for the wing. Add a tail, feet and a branch. Colour the bird!", 'बड़ा B लिखो। चोंच के लिए सोता हुआ v (>) बनाओ। आँख के लिए ऊपर के घेरे में बिंदु वाला गोला बनाओ। पंख के लिए नीचे के घेरे में w बनाओ। पूँछ, पैर और एक डाली बनाओ। चिड़िया में रंग भरो!'] }],
    },
    {
      type: 'task',
      title: ['Let us do: make jute or cardboard puppets.', 'आओ करें: जूट या गत्ते की कठपुतलियाँ बनाओ।'],
      items: [{ q: ['Steps', 'क़दम'], a: ['Take a jute or cardboard sheet. Draw a face and cut it out. Draw the eyes, nose and mouth and colour them. Stick woollen thread for hair and attach a handle at the back. Your puppet is ready.', 'जूट या गत्ते की शीट लो। चेहरा बनाकर काटो। आँखें, नाक और मुँह बनाकर रंग भरो। बालों के लिए ऊन चिपकाओ और पीछे एक डंडी लगाओ। तुम्हारी कठपुतली तैयार है।'] }],
    },
  ],
  'santoor-6': [
    {
      type: 'qa',
      title: ['Answer the following.', 'इनके उत्तर दो।'],
      items: [
        { q: ['What was Meena doing near the stream?', 'मीना नदी के पास क्या कर रही थी?'], a: ['She was putting paper boats in the stream.', 'वह नदी में काग़ज़ की नावें छोड़ रही थी।'] },
        { q: ['Meena was angry. Why?', 'मीना नाराज़ थी। क्यों?'], a: ['A naughty boy was overturning her paper boats.', 'एक शरारती लड़का उसकी काग़ज़ की नावें पलट रहा था।'] },
        { q: ['How did Meena help the boy?', 'मीना ने लड़के की मदद कैसे की?'], a: ['She gave him paper and showed him how to fold it to make boats.', 'उसने उसे काग़ज़ दिया और दिखाया कि मोड़कर नाव कैसे बनाते हैं।'] },
      ],
    },
    {
      type: 'task',
      title: ['Think and answer.', 'सोचो और उत्तर दो।'],
      items: [
        { q: ['Meena made paper boats. What else can you make with paper?', 'मीना ने काग़ज़ की नावें बनाईं। काग़ज़ से और क्या बना सकते हो?'], a: ['A paper plane, a hat, a fan, a flower and a kite.', 'काग़ज़ का हवाई जहाज़, टोपी, पंखा, फूल और पतंग।'] },
        { q: ['What games do you play with your friends? Which one do you like the most? Why?', 'तुम दोस्तों के साथ कौन-से खेल खेलते हो? कौन-सा सबसे पसंद है? क्यों?'], a: ['I play kho-kho and cricket. I like kho-kho the most because we run a lot.', 'मैं खो-खो और क्रिकेट खेलता हूँ। मुझे खो-खो सबसे पसंद है क्योंकि इसमें ख़ूब दौड़ते हैं।'] },
      ],
    },
    {
      type: 'tf',
      title: ['Say whether true or false.', 'बताओ सही या ग़लत।'],
      items: [
        { q: ['The boy thought it was fun to overturn paper boats.', 'लड़के को काग़ज़ की नावें पलटना मज़ेदार लगता था।'], a: true },
        { q: ['Meena ran home to complain about the boy.', 'मीना लड़के की शिकायत करने घर दौड़ी।'], a: false },
        { q: ['The boy did not know how to make paper boats.', 'लड़के को काग़ज़ की नाव बनाना नहीं आता था।'], a: true },
        { q: ['Meena had only white paper.', 'मीना के पास सिर्फ़ सफ़ेद काग़ज़ था।'], a: false },
      ],
    },
    {
      type: 'task',
      title: ["Let us speak: tell the story 'Manish saves the ant' to the class (from the pictures in the book).", "आओ बोलें: कक्षा को 'मनीष ने चींटी को बचाया' कहानी सुनाओ (किताब के चित्रों से)।"],
      items: [{ q: ['Manish saves the ant', 'मनीष ने चींटी को बचाया'], a: ['Manish saw an ant fall into a bucket of water. The ant was trying hard to come out. Manish put a leaf into the water. The ant climbed on the leaf, and Manish took it out safely. The ant was happy.', 'मनीष ने एक चींटी को पानी की बाल्टी में गिरते देखा। चींटी बाहर आने की बहुत कोशिश कर रही थी। मनीष ने पानी में एक पत्ता डाला। चींटी पत्ते पर चढ़ गई, और मनीष ने उसे सुरक्षित बाहर निकाला। चींटी ख़ुश हो गई।'] }],
    },
    {
      type: 'mcq',
      title: ["Fill in the blanks using 'he' or 'she'.", "'he' या 'she' से रिक्त स्थान भरो।"],
      items: [
        { q: ['Rani likes playing outside. ___ likes flying kites.', 'रानी को बाहर खेलना पसंद है। ___ को पतंग उड़ाना पसंद है।'], options: [['He', 'वह (लड़का)'], ['She', 'वह (लड़की)']], a: 1 },
        { q: ['Sahil has a top. ___ plays with it every day.', 'साहिल के पास लट्टू है। ___ रोज़ उससे खेलता है।'], options: [['He', 'वह (लड़का)'], ['She', 'वह (लड़की)']], a: 0 },
        { q: ['Durga is five years old. ___ is going to school.', 'दुर्गा पाँच साल की है। ___ स्कूल जा रही है।'], options: [['He', 'वह (लड़का)'], ['She', 'वह (लड़की)']], a: 1 },
        { q: ['Ranjit goes to school regularly. ___ likes reading stories.', 'रणजीत रोज़ स्कूल जाता है। ___ को कहानियाँ पढ़ना पसंद है।'], options: [['He', 'वह (लड़का)'], ['She', 'वह (लड़की)']], a: 0 },
      ],
    },
    {
      type: 'mcq',
      title: ['Write where each thing is. Choose the correct word (on / under / in).', 'हर चीज़ कहाँ है, लिखो। सही शब्द चुनो (on / under / in)।'],
      items: [
        { q: ['The bat is ___ the bed.', 'बल्ला पलंग के ___ है।'], options: [['on', 'ऊपर'], ['under', 'नीचे']], a: 1 },
        { q: ['The bag is ___ the chair.', 'बस्ता कुर्सी ___ है।'], options: [['in', 'में'], ['on', 'पर']], a: 1 },
        { q: ['The ball is ___ the box.', 'गेंद डिब्बे ___ है।'], options: [['in', 'में'], ['under', 'के नीचे']], a: 0 },
        { q: ['The car is ___ the table.', 'खिलौना कार मेज़ के ___ है।'], options: [['in', 'अंदर'], ['under', 'नीचे']], a: 1 },
        { q: ['The books are ___ the shelves.', 'किताबें अलमारी के ख़ानों ___ हैं।'], options: [['in', 'में'], ['on', 'पर']], a: 1 },
      ],
    },
    {
      type: 'task',
      title: ['Let us do: follow the steps in the book to draw a rangoli.', 'आओ करें: किताब के क़दमों से रंगोली बनाओ।'],
      items: [{ q: ['Rangoli', 'रंगोली'], a: ['Start with dots in rows, join them with lines to make a pattern, then fill it with bright colours.', 'पंक्तियों में बिंदु बनाओ, उन्हें रेखाओं से जोड़कर नमूना बनाओ, फिर चटक रंग भरो।'] }],
    },
    {
      type: 'task',
      title: ['Let us write: write a few lines about the picture using: park, children, playing, see-saw, swings, slide, enjoying, happy.', 'आओ लिखें: इन शब्दों से चित्र के बारे में कुछ पंक्तियाँ लिखो: park, children, playing, see-saw, swings, slide, enjoying, happy.'],
      items: [{ q: ['In the park', 'पार्क में'], a: ['The children are playing in the park. Some are on the swings and the see-saw. Two children are going down the slide. They are enjoying a lot. They look very happy.', 'बच्चे पार्क में खेल रहे हैं। कुछ झूलों और सी-सॉ पर हैं। दो बच्चे फिसलपट्टी से फिसल रहे हैं। वे बहुत मज़े कर रहे हैं। वे बहुत ख़ुश दिख रहे हैं।'] }],
    },
    {
      type: 'fill',
      title: ['Crossword: all the answers are toys and games.', 'पहेली: सारे उत्तर खिलौने और खेल हैं।'],
      bank: ['top', 'bat', 'marble', 'football', 'ball', 'swing'],
      items: [
        { q: ['A round object that spins on a needle: ___', 'एक गोल चीज़ जो कील पर घूमती है: ___'], a: 'top' },
        { q: ['An object used to hit a ball: ___', 'गेंद मारने की चीज़: ___'], a: 'bat' },
        { q: ['A round glass ball used for playing: ___', 'खेलने की काँच की गोली: ___'], a: 'marble' },
        { q: ['A game played using a ball and your foot: ___', 'गेंद और पैर से खेला जाने वाला खेल: ___'], a: 'football' },
        { q: ['A round object used to play: ___', 'खेलने की एक गोल चीज़: ___'], a: 'ball' },
        { q: ['A seat tied by ropes that moves front and back: ___', 'रस्सियों से बँधी सीट जो आगे-पीछे झूलती है: ___'], a: 'swing' },
      ],
    },
    {
      type: 'task',
      title: ['Let us explore: ask your elders what games they played when they were young. Learn one and share it with your friends.', 'आओ खोजें: बड़ों से पूछो कि बचपन में वे कौन-से खेल खेलते थे। एक सीखो और दोस्तों को सिखाओ।'],
      items: [{ q: ["Grandfather's game", 'दादाजी का खेल'], a: ['My grandfather played gilli-danda. You hit a small stick (gilli) with a big stick (danda) and run.', 'मेरे दादाजी गिल्ली-डंडा खेलते थे। बड़ी लकड़ी (डंडा) से छोटी लकड़ी (गिल्ली) को मारकर दौड़ते हैं।'] }],
    },
  ],
  'santoor-7': [
    {
      type: 'task',
      title: ['Let us think: talk about it.', 'आओ सोचें: इसके बारे में बात करो।'],
      items: [
        { q: ['Have you seen a big laddoo? How big was it? Did you eat it all by yourself?', 'क्या तुमने बड़ा लड्डू देखा है? वह कितना बड़ा था? क्या तुमने अकेले पूरा खाया?'], a: ['Yes, at a wedding I saw a laddoo as big as my fist. I shared it with my sister.', 'हाँ, एक शादी में मैंने अपनी मुट्ठी जितना बड़ा लड्डू देखा। मैंने उसे अपनी बहन के साथ बाँटा।'] },
        { q: ['Have you eaten anything that is very big? What was it?', 'क्या तुमने कोई बहुत बड़ी चीज़ खाई है? वह क्या थी?'], a: ['Yes, a big watermelon with my whole family.', 'हाँ, पूरे परिवार के साथ एक बड़ा तरबूज़।'] },
        { q: ['What different kinds of laddoos have you eaten?', 'तुमने किस-किस तरह के लड्डू खाए हैं?'], a: ['besan laddoo, motichoor laddoo, coconut laddoo and til laddoo', 'बेसन के लड्डू, मोतीचूर के लड्डू, नारियल के लड्डू और तिल के लड्डू'] },
        { q: ['The child threw the Big Laddoo into the sea. What do you think happened to the laddoo?', 'बच्चे ने बड़ा लड्डू समुद्र में फेंक दिया। तुम्हें क्या लगता है, लड्डू का क्या हुआ?'], a: ['It made a big splish-splash and then it got wet and broke into pieces. Maybe the fish ate it!', 'उससे बड़ी छपाक हुई और फिर वह भीगकर टुकड़े-टुकड़े हो गया। शायद मछलियों ने उसे खा लिया!'] },
      ],
    },
    {
      type: 'pick',
      title: ['Round things: choose the ones that CAN be eaten.', 'गोल चीज़ें: जो खाई जा सकती हैं, वे चुनो।'],
      options: [['laddoo', 'लड्डू'], ['ball', 'गेंद'], ['orange', 'संतरा'], ['coin', 'सिक्का'], ['roti', 'रोटी'], ['wheel', 'पहिया'], ['grapes', 'अंगूर'], ['bangle', 'चूड़ी'], ['watermelon', 'तरबूज़'], ['plate', 'थाली']],
      answers: [0, 2, 4, 6, 8],
    },
    {
      type: 'task',
      title: ['Let us speak: Meena cannot see properly. She felt the sweets and picked up the laddoo. Jithu asked, "How did you know it was a laddoo?" What did Meena answer?', 'आओ बोलें: मीना ठीक से देख नहीं सकती। उसने मिठाइयाँ छूकर लड्डू उठाया। जीतू ने पूछा, "तुम्हें कैसे पता चला कि यह लड्डू है?" मीना ने क्या जवाब दिया?'],
      items: [{ q: ["Meena's answer", 'मीना का जवाब'], a: ['"I touched it. It is round and soft, and it smells sweet. So I knew it was a laddoo!"', '"मैंने इसे छुआ। यह गोल और नरम है, और इसकी ख़ुशबू मीठी है। इसलिए मुझे पता चल गया कि यह लड्डू है!"'] }],
    },
    {
      type: 'pick',
      title: ['Let us learn: choose the words that tell us about a laddoo.', 'आओ सीखें: वे शब्द चुनो जो लड्डू के बारे में बताते हैं।'],
      options: [['round', 'गोल'], ['sweet', 'मीठा'], ['sour', 'खट्टा'], ['yellow', 'पीला'], ['soft', 'नरम'], ['tasty', 'स्वादिष्ट'], ['square', 'चौकोर'], ['big', 'बड़ा']],
      answers: [0, 1, 3, 4, 5, 7],
    },
    {
      type: 'task',
      title: ["Let us write: frame sentences with these words (notice 'pl', 'cl' and 'bl').", "आओ लिखें: इन शब्दों से वाक्य बनाओ ('pl', 'cl' और 'bl' पर ध्यान दो)।"],
      items: [
        { q: ['play', 'खेलना'], a: ['We play in the park.', 'हम पार्क में खेलते हैं।'] },
        { q: ['plum', 'आलूबुख़ारा'], a: ['The plum is sweet.', 'आलूबुख़ारा मीठा है।'] },
        { q: ['cloud', 'बादल'], a: ['A black cloud is in the sky.', 'आसमान में काला बादल है।'] },
        { q: ['clock', 'घड़ी'], a: ['The clock shows nine.', 'घड़ी में नौ बजे हैं।'] },
        { q: ['blue', 'नीला'], a: ['The sky is blue.', 'आसमान नीला है।'] },
        { q: ['blanket', 'कंबल'], a: ['I sleep under a warm blanket.', 'मैं गरम कंबल ओढ़कर सोता हूँ।'] },
      ],
    },
    {
      type: 'match',
      title: ['Match each animal with its partner.', 'हर जानवर को उसके जोड़ीदार से मिलाओ।'],
      pairs: [
        [['cock', 'मुर्गा'], ['hen', 'मुर्गी']],
        [['lion', 'शेर'], ['lioness', 'शेरनी']],
        [['peacock', 'मोर'], ['peahen', 'मोरनी']],
        [['mare', 'घोड़ी'], ['horse', 'घोड़ा']],
        [['bull', 'बैल'], ['cow', 'गाय']],
        [['drake', 'बत्तख़ (नर)'], ['duck', 'बत्तख़']],
      ],
    },
    {
      type: 'pick',
      title: ['Let us explore: put these things into a tub of water. Choose the ones that FLOAT.', 'आओ खोजें: इन चीज़ों को पानी के टब में डालो। जो तैरती हैं, उन्हें चुनो।'],
      options: [['a piece of paper', 'काग़ज़ का टुकड़ा'], ['a small stone', 'छोटा पत्थर'], ['a green leaf', 'हरा पत्ता'], ['a pencil', 'पेंसिल'], ['an eraser', 'रबर'], ['a feather', 'पंख'], ['a spoon', 'चम्मच']],
      answers: [0, 2, 3, 5],
    },
    {
      type: 'qa',
      title: ['Let us learn: khichdi and the harvest festival.', 'आओ सीखें: खिचड़ी और फ़सल का त्योहार।'],
      passage: [
        'Khichdi is a popular dish. It is usually cooked with rice and lentils together. It is prepared during festivals and also eaten as a meal. Khichdi is a traditional dish prepared especially during the Sankranti festival. This festival is also known as the Harvest Festival. It is celebrated to thank the Sun God for a good harvest. It is known by different names like Sankranti, Pongal, Lohri, Bihu and Makara Sankranti across the country. Flying kites during this festival is also very popular.',
        'खिचड़ी एक लोकप्रिय व्यंजन है। यह आमतौर पर चावल और दाल को साथ पकाकर बनती है। यह त्योहारों पर बनती है और भोजन में भी खाई जाती है। खिचड़ी ख़ास तौर पर संक्रांति के त्योहार पर बनने वाला पारंपरिक व्यंजन है। इस त्योहार को फ़सल का त्योहार भी कहते हैं। यह अच्छी फ़सल के लिए सूर्य देव को धन्यवाद देने के लिए मनाया जाता है। देश भर में इसे संक्रांति, पोंगल, लोहड़ी, बिहू और मकर संक्रांति जैसे अलग-अलग नामों से जाना जाता है। इस त्योहार पर पतंग उड़ाना भी बहुत लोकप्रिय है।',
      ],
      items: [
        { q: ['What is khichdi cooked with?', 'खिचड़ी किससे बनती है?'], a: ['rice and lentils', 'चावल और दाल'] },
        { q: ['Why is the harvest festival celebrated?', 'फ़सल का त्योहार क्यों मनाया जाता है?'], a: ['To thank the Sun God for a good harvest.', 'अच्छी फ़सल के लिए सूर्य देव को धन्यवाद देने के लिए।'] },
        { q: ['What is khichdi called in Tamil Nadu and West Bengal?', 'तमिलनाडु और पश्चिम बंगाल में खिचड़ी को क्या कहते हैं?'], a: ['Pongal in Tamil Nadu, and Kichuri in West Bengal.', 'तमिलनाडु में पोंगल, और पश्चिम बंगाल में किचुरी।'] },
      ],
    },
    {
      type: 'task',
      title: ['Let us write: which is your favourite festival? Write the names of sweets and dishes made on that day.', 'आओ लिखें: तुम्हारा पसंदीदा त्योहार कौन-सा है? उस दिन बनने वाली मिठाइयों और पकवानों के नाम लिखो।'],
      items: [{ q: ['My favourite festival', 'मेरा पसंदीदा त्योहार'], a: ['My favourite festival is Diwali. We make laddoos, kheer, puris and gujiyas.', 'मेरा पसंदीदा त्योहार दिवाली है। हम लड्डू, खीर, पूरी और गुझिया बनाते हैं।'] }],
    },
  ],
  'santoor-8': [
    {
      type: 'qa',
      title: ['Answer the following.', 'इनके उत्तर दो।'],
      items: [
        { q: ['What did the farmer grow on his farm?', 'किसान ने अपने खेत में क्या उगाया?'], a: ['A variety of fruits, especially grapes and watermelons.', 'तरह-तरह के फल, ख़ास तौर पर अंगूर और तरबूज़।'] },
        { q: ['What did his wife say?', 'उसकी पत्नी ने क्या कहा?'], a: ['"This year, the best fruits on our farm are the watermelons and the grapes."', '"इस साल हमारे खेत के सबसे अच्छे फल तरबूज़ और अंगूर हैं।"'] },
        { q: ['Why did the farmer decide to take the grapes?', 'किसान ने अंगूर ले जाने का फ़ैसला क्यों किया?'], a: ['It was a long journey to the palace and watermelons are too heavy.', 'महल का रास्ता लंबा था और तरबूज़ बहुत भारी होते हैं।'] },
        { q: ['What did the King do playfully?', 'राजा ने मज़ाक में क्या किया?'], a: ['He threw grapes at the farmer.', 'उसने किसान पर अंगूर फेंके।'] },
        { q: ["Why did the farmer say 'Thank God!'?", "किसान ने 'भगवान का शुक्र है!' क्यों कहा?"], a: ['He was glad he had brought grapes and not watermelons; a watermelon would have hurt him badly!', 'वह ख़ुश था कि वह अंगूर लाया, तरबूज़ नहीं; तरबूज़ लगता तो बहुत चोट लगती!'] },
      ],
    },
    {
      type: 'task',
      title: ['Think and say.', 'सोचो और बोलो।'],
      items: [
        { q: ['The farmer grew fruits. What else can a farmer grow?', 'किसान ने फल उगाए। किसान और क्या उगा सकता है?'], a: ['rice, wheat, vegetables, pulses, cotton and flowers', 'धान, गेहूँ, सब्ज़ियाँ, दालें, कपास और फूल'] },
        { q: ['Are there women farmers? Do you know any?', 'क्या महिला किसान होती हैं? क्या तुम किसी को जानते हो?'], a: ['Yes. My grandmother grows vegetables in our village.', 'हाँ। मेरी दादी हमारे गाँव में सब्ज़ियाँ उगाती हैं।'] },
        { q: ['If you meet a farmer, what would you say to them?', 'अगर तुम किसी किसान से मिलो, तो उनसे क्या कहोगे?'], a: ['Thank you for growing the food we eat!', 'हमारे खाने का अनाज उगाने के लिए धन्यवाद!'] },
      ],
    },
    {
      type: 'match',
      title: ['Opposites: heavy and light are opposite in meaning. Match each word with its opposite.', 'विलोम: heavy और light के अर्थ उल्टे हैं। हर शब्द को उसके विलोम से मिलाओ।'],
      pairs: [
        [['thick book', 'मोटी किताब'], ['thin book', 'पतली किताब']],
        [['long journey', 'लंबी यात्रा'], ['short journey', 'छोटी यात्रा']],
        [['soft cotton', 'नरम रुई'], ['hard rock', 'कठोर चट्टान']],
        [['slow tortoise', 'धीमा कछुआ'], ['fast rabbit', 'तेज़ खरगोश']],
        [['heavy watermelon', 'भारी तरबूज़'], ['light grapes', 'हल्के अंगूर']],
      ],
    },
    {
      type: 'mcq',
      title: ["Fill in the blanks with 'is' (one) or 'are' (more than one).", "'is' (एक) या 'are' (एक से ज़्यादा) से रिक्त स्थान भरो।"],
      items: [
        { q: ['There ___ animals in the jungle.', 'जंगल में जानवर ___।'], options: [['is', ''], ['are', '']], a: 1 },
        { q: ['The table ___ made of wood.', 'मेज़ लकड़ी की बनी ___।'], options: [['is', ''], ['are', '']], a: 0 },
        { q: ['These mangoes ___ sweet.', 'ये आम मीठे ___।'], options: [['is', ''], ['are', '']], a: 1 },
        { q: ['Raghuram ___ a tall boy.', 'रघुराम एक लंबा लड़का ___।'], options: [['is', ''], ['are', '']], a: 0 },
        { q: ['The toys ___ on the shelf.', 'खिलौने अलमारी पर ___।'], options: [['is', ''], ['are', '']], a: 1 },
        { q: ['The book ___ on the table.', 'किताब मेज़ पर ___।'], options: [['is', ''], ['are', '']], a: 0 },
        { q: ['The girls ___ at the shop.', 'लड़कियाँ दुकान पर ___।'], options: [['is', ''], ['are', '']], a: 1 },
        { q: ['The car ___ on the road.', 'कार सड़क पर ___।'], options: [['is', ''], ['are', '']], a: 0 },
      ],
    },
    {
      type: 'qa',
      title: ['Listening: listen to the poem "Aachoo!" and answer.', 'सुनना: कविता "आछू!" सुनो और उत्तर दो।'],
      passage: [
        'Once a mighty elephant,\nGot a mighty cold.\nIt went to buy a handkerchief,\nWhere handkerchiefs were sold.\n"A hanky for an elephant?"\nThe sales girl was surprised,\n"Sorry sir but we don\'t have\nA handkerchief that size."\n"AACHOO!" said the elephant.\nAnd shook its mighty head,\n"Forget about the handkerchief\nGive me a sheet instead."',
        'एक बार एक बड़े हाथी को,\nहो गया बड़ा ज़ुकाम।\nवह रूमाल ख़रीदने गया,\nजहाँ बिकते थे रूमाल।\n"हाथी के लिए रूमाल?"\nदुकान वाली हैरान हुई,\n"माफ़ कीजिए साहब, हमारे पास\nइतना बड़ा रूमाल नहीं।"\n"आछू!" हाथी ने कहा।\nऔर अपना बड़ा सिर हिलाया,\n"रूमाल को भूल जाओ\nउसकी जगह मुझे चादर दे दो।"',
      ],
      items: [
        { q: ['What did the elephant go to buy?', 'हाथी क्या ख़रीदने गया?'], a: ['A handkerchief.', 'एक रूमाल।'] },
        { q: ['Why was the sales girl surprised?', 'दुकान वाली हैरान क्यों हुई?'], a: ['An elephant wanted a hanky, and they did not have one that big.', 'एक हाथी रूमाल माँग रहा था, और उनके पास इतना बड़ा रूमाल नहीं था।'] },
        { q: ['What did the elephant ask for instead?', 'हाथी ने उसकी जगह क्या माँगा?'], a: ['A sheet.', 'एक चादर।'] },
      ],
    },
    {
      type: 'task',
      title: ['Let us speak: you are visiting the Big Elephant, who has a cold. What food items will you take with you? Say them aloud.', 'आओ बोलें: तुम ज़ुकाम वाले बड़े हाथी से मिलने जा रहे हो। साथ में कौन-सी खाने की चीज़ें ले जाओगे? ज़ोर से बोलो।'],
      items: [{ q: ['Food for the elephant', 'हाथी के लिए खाना'], a: ['bananas, sugarcane, warm soup, ginger tea and jaggery', 'केले, गन्ना, गरम सूप, अदरक की चाय और गुड़'] }],
    },
    {
      type: 'qa',
      title: ["Let us write: Chandu's fruit salad. Put the steps in the proper order.", 'आओ लिखें: चंदू का फ्रूट सलाद। क़दमों को सही क्रम में लगाओ।'],
      items: [
        {
          q: ['Next, papaya... / Mother cuts fruits... / First, banana... / Finally, lemon... / Then apple... / Then mix... / After that, grapes...', 'फिर पपीता... / माँ फल काटती हैं... / पहले केला... / आख़िर में नींबू... / फिर सेब... / फिर मिलाओ... / उसके बाद अंगूर...'],
          a: ['1. Mother cuts some fruits for me.  2. First I take some banana slices.  3. Next, I put in papaya cubes.  4. Then I add the apple slices.  5. After that I add some grapes from a bunch.  6. Then I mix them all.  7. Finally, I squeeze a lemon on it, adding a pinch of salt.', '1. माँ मेरे लिए कुछ फल काटती हैं।  2. पहले मैं केले के टुकड़े लेता हूँ।  3. फिर पपीते के टुकड़े डालता हूँ।  4. फिर सेब के टुकड़े डालता हूँ।  5. उसके बाद गुच्छे से कुछ अंगूर डालता हूँ।  6. फिर सबको मिलाता हूँ।  7. आख़िर में चुटकी भर नमक डालकर नींबू निचोड़ता हूँ।'],
        },
      ],
    },
    {
      type: 'pick',
      title: ['Let us explore: find the fruits hidden in the word grid. Choose the fruits from this list.', 'आओ खोजें: शब्द-जाल में छिपे फल खोजो। इस सूची से फल चुनो।'],
      options: [['MANGO', 'आम'], ['CHAIR', 'कुर्सी'], ['PAPAYA', 'पपीता'], ['GRAPES', 'अंगूर'], ['PENCIL', 'पेंसिल'], ['BANANA', 'केला'], ['GUAVA', 'अमरूद'], ['PLUM', 'आलूबुख़ारा'], ['PEACH', 'आड़ू'], ['PEAR', 'नाशपाती']],
      answers: [0, 2, 3, 5, 6, 7, 8, 9],
    },
  ],
  'santoor-9': [
    {
      type: 'qa',
      title: ['Answer the following.', 'इनके उत्तर दो।'],
      items: [
        { q: ['What did Madhu enjoy?', 'मधु को किसमें मज़ा आता था?'], a: ['He enjoyed eating different kinds of food and snacks.', 'उसे तरह-तरह का खाना और नाश्ता खाने में मज़ा आता था।'] },
        { q: ['Do you think the old man had magical powers? How do you know?', 'क्या तुम्हें लगता है बूढ़े आदमी के पास जादुई शक्ति थी? कैसे पता?'], a: ['Yes. He said that the tree would grant any wish, and it really did.', 'हाँ। उसने कहा कि पेड़ कोई भी इच्छा पूरी करेगा, और सच में ऐसा हुआ।'] },
        { q: ["Why did the tree ask Madhu to 'think over' his wish?", "पेड़ ने मधु से अपनी इच्छा पर 'फिर से सोचने' को क्यों कहा?"], a: ['Because Madhu asked for only food and nothing else, not even water.', 'क्योंकि मधु ने सिर्फ़ खाना माँगा और कुछ नहीं, पानी भी नहीं।'] },
        { q: ['Name some of the things that Madhu ate.', 'मधु ने जो चीज़ें खाईं उनमें से कुछ के नाम बताओ।'], a: ['laddoos, grapes, mangoes, apples, bananas, samosas, kachori, potato chips and vada', 'लड्डू, अंगूर, आम, सेब, केले, समोसे, कचौरी, आलू के चिप्स और वड़ा'] },
      ],
    },
    {
      type: 'task',
      title: ['Think and say.', 'सोचो और बोलो।'],
      items: [
        { q: ['Have you had hiccups? What do you do when you get hiccups?', 'क्या तुम्हें हिचकी आई है? हिचकी आने पर तुम क्या करते हो?'], a: ['Yes. I drink some water slowly and hold my breath for a few seconds.', 'हाँ। मैं धीरे-धीरे थोड़ा पानी पीता हूँ और कुछ पल साँस रोकता हूँ।'] },
        { q: ['Do you think water is important? Why?', 'क्या पानी ज़रूरी है? क्यों?'], a: ['Yes. We cannot live without water; no other drink can replace it.', 'हाँ। पानी के बिना हम जी नहीं सकते; कोई और पेय उसकी जगह नहीं ले सकता।'] },
        { q: ["If you were in Madhu's place, what would you wish for and why?", 'अगर तुम मधु की जगह होते, तो क्या माँगते और क्यों?'], a: ['I would wish for clean water and food for everyone, so that nobody stays hungry or thirsty.', 'मैं सबके लिए साफ़ पानी और खाना माँगता, ताकि कोई भूखा-प्यासा न रहे।'] },
      ],
    },
    {
      type: 'pick',
      title: ['Madhu enjoyed these items. Choose only the FRUITS.', 'मधु को ये चीज़ें पसंद आईं। सिर्फ़ फल चुनो।'],
      options: [['banana', 'केला'], ['kheer', 'खीर'], ['melon', 'ख़रबूज़ा'], ['guava', 'अमरूद'], ['kachori', 'कचौरी'], ['potato chips', 'आलू के चिप्स'], ['laddoo', 'लड्डू'], ['vada', 'वड़ा'], ['jackfruit', 'कटहल'], ['samosa', 'समोसा']],
      answers: [0, 2, 3, 8],
    },
    {
      type: 'pick',
      title: ['Now choose only the SALTY SNACKS.', 'अब सिर्फ़ नमकीन नाश्ते चुनो।'],
      options: [['banana', 'केला'], ['kheer', 'खीर'], ['kachori', 'कचौरी'], ['potato chips', 'आलू के चिप्स'], ['laddoo', 'लड्डू'], ['vada', 'वड़ा'], ['samosa', 'समोसा'], ['guava', 'अमरूद']],
      answers: [2, 3, 5, 6],
    },
    {
      type: 'fill',
      title: ['Choose a word to describe the people: brave, polite, selfish, lazy.', 'लोगों का वर्णन करने के लिए शब्द चुनो: brave, polite, selfish, lazy.'],
      bank: ['selfish', 'brave', 'lazy', 'polite'],
      items: [
        { q: ["Pramod doesn't share his toys with anyone. He is ___.", 'प्रमोद अपने खिलौने किसी से नहीं बाँटता। वह ___ है।'], a: 'selfish' },
        { q: ['The woman saved the boy from the robber. She is ___.', 'औरत ने लड़के को लुटेरे से बचाया। वह ___ है।'], a: 'brave' },
        { q: ['Advait is always lying in bed and doing nothing. He is ___.', 'अद्वैत हमेशा बिस्तर पर लेटा रहता है और कुछ नहीं करता। वह ___ है।'], a: 'lazy' },
        { q: ['Prerna always wishes everyone in the morning. She is ___.', 'प्रेरणा हर सुबह सबको नमस्ते करती है। वह ___ है।'], a: 'polite' },
      ],
    },
    {
      type: 'qa',
      title: ["Rewrite the sentences using 'and' or 'but'.", "'and' या 'but' से वाक्य फिर लिखो।"],
      items: [
        { q: ['I eat an apple. I eat an orange. I eat a peach. (and)', 'मैं सेब खाता हूँ। मैं संतरा खाता हूँ। मैं आड़ू खाता हूँ। (and)'], a: ['I eat an apple, an orange and a peach.', 'मैं सेब, संतरा और आड़ू खाता हूँ।'] },
        { q: ['I like to watch cartoons. My sister likes to watch movies. (but)', 'मुझे कार्टून देखना पसंद है। मेरी बहन को फ़िल्में देखना पसंद है। (but)'], a: ['I like to watch cartoons but my sister likes to watch movies.', 'मुझे कार्टून देखना पसंद है पर मेरी बहन को फ़िल्में।'] },
        { q: ['Anita plays volleyball. Anju plays volleyball. (and)', 'अनीता वॉलीबॉल खेलती है। अंजू वॉलीबॉल खेलती है। (and)'], a: ['Anita and Anju play volleyball.', 'अनीता और अंजू वॉलीबॉल खेलती हैं।'] },
        { q: ['Dolma wants a new comic book. She has spent all her pocket money on sweets. (but)', 'डोल्मा को नई कॉमिक किताब चाहिए। उसने सारे जेब-ख़र्च मिठाई पर ख़र्च कर दिए। (but)'], a: ['Dolma wants a new comic book but she has spent all her pocket money on sweets.', 'डोल्मा को नई कॉमिक किताब चाहिए पर उसने सारा जेब-ख़र्च मिठाई पर ख़र्च कर दिया।'] },
        { q: ['Rajesh wants to go to the park. He has not finished his homework. (but)', 'राजेश पार्क जाना चाहता है। उसने गृहकार्य पूरा नहीं किया। (but)'], a: ['Rajesh wants to go to the park but he has not finished his homework.', 'राजेश पार्क जाना चाहता है पर उसने गृहकार्य पूरा नहीं किया।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Listening: listen to these parts of the story and say what happened after that.', 'सुनना: कहानी के ये हिस्से सुनो और बताओ उसके बाद क्या हुआ।'],
      items: [
        { q: ['Madhu said, "Oh tree, let me have different types of food. Nothing else."', 'मधु ने कहा, "हे पेड़, मुझे तरह-तरह का खाना दो। और कुछ नहीं।"'], a: ['The tree asked him to think it over, but he said "Nothing else". Then a basket full of laddoos appeared.', 'पेड़ ने उससे फिर सोचने को कहा, पर उसने कहा "और कुछ नहीं"। फिर लड्डुओं से भरी टोकरी आ गई।'] },
        { q: ['As he was eating, he suddenly got hiccups. He wanted water.', 'खाते-खाते उसे अचानक हिचकी आने लगी। उसे पानी चाहिए था।'], a: ['There was no water, only food and drinks. At last he asked the tree to take away the food and give him water, and his hiccups stopped.', 'पानी नहीं था, सिर्फ़ खाना और पेय थे। आख़िर में उसने पेड़ से खाना हटाकर पानी माँगा, और उसकी हिचकी रुक गई।'] },
      ],
    },
    {
      type: 'task',
      title: ['Let us write: complete the story. "Vijaya is a young girl. She lives with her father, mother, grandmother and grandfather in a small village. Each day..."', 'आओ लिखें: कहानी पूरी करो। "विजया एक छोटी लड़की है। वह अपने माता-पिता, दादी और दादा के साथ एक छोटे गाँव में रहती है। हर दिन..."'],
      items: [{ q: ['Each day ...', 'हर दिन ...'], a: ['Each day Vijaya gets up early and helps her grandmother water the plants. Then she walks to school with her friends. In the evening she plays with her calf and listens to stories from her grandfather.', 'हर दिन विजया जल्दी उठकर दादी के साथ पौधों को पानी देती है। फिर दोस्तों के साथ पैदल स्कूल जाती है। शाम को वह अपने बछड़े के साथ खेलती है और दादाजी से कहानियाँ सुनती है।'] }],
    },
    {
      type: 'task',
      title: ['Fun with words: Carrots, Cut Carrots, Chandu Cut Carrots. Make one like this with your name.', 'शब्दों का खेल: Carrots, Cut Carrots, Chandu Cut Carrots. अपने नाम से ऐसा ही बनाओ।'],
      items: [
        { q: ['What is the first letter in "Chandu Cut Carrots"? And in "Anu Ate Apples"?', '"Chandu Cut Carrots" में पहला अक्षर क्या है? और "Anu Ate Apples" में?'], a: ['C, and A', 'C, और A'] },
        { q: ['With your name', 'अपने नाम से'], a: ['Mangoes - Many Mangoes - Meena Made Many Mangoes (M)', 'Mangoes - Many Mangoes - Meena Made Many Mangoes (M)'] },
      ],
    },
    {
      type: 'qa',
      title: ["Let us write: complete the sentences with 'because'.", "आओ लिखें: 'because' से वाक्य पूरे करो।"],
      items: [
        { q: ['Madhu shared his food with the old man because ...', 'मधु ने बूढ़े आदमी के साथ खाना बाँटा क्योंकि ...'], a: ['he felt sorry for him.', 'उसे उस पर तरस आया।'] },
        { q: ['Madhu was happy because ...', 'मधु ख़ुश था क्योंकि ...'], a: ['the tree would grant his wish.', 'पेड़ उसकी इच्छा पूरी करने वाला था।'] },
        { q: ['After eating fruits, Madhu asked for savouries because ...', 'फल खाने के बाद मधु ने नमकीन माँगा क्योंकि ...'], a: ['he got bored of eating only fruits.', 'वह सिर्फ़ फल खाकर ऊब गया था।'] },
        { q: ['Madhu asked for water because ...', 'मधु ने पानी माँगा क्योंकि ...'], a: ['he got hiccups and no other drink could stop them.', 'उसे हिचकी आ गई थी और कोई और पेय उसे रोक नहीं पाया।'] },
      ],
    },
    {
      type: 'task',
      title: ['Let us do: make a table mat with pictures of fruits and torn bits of coloured paper.', 'आओ करें: फलों के चित्र और रंगीन काग़ज़ के टुकड़ों से टेबल मैट बनाओ।'],
      items: [{ q: ['Steps', 'क़दम'], a: ['Draw an apple and a mango on an A4 sheet. Tear red paper into small bits and stick them on the apple. Stick yellow bits on the mango. Cover it with a plastic sheet. Your table mat is ready!', 'A4 काग़ज़ पर सेब और आम बनाओ। लाल काग़ज़ के छोटे टुकड़े फाड़कर सेब पर चिपकाओ। आम पर पीले टुकड़े चिपकाओ। उसे प्लास्टिक शीट से ढक दो। तुम्हारा टेबल मैट तैयार है!'] }],
    },
  ],
  'santoor-10': [
    {
      type: 'qa',
      title: ['Answer the following.', 'इनके उत्तर दो।'],
      items: [
        { q: ['Where does the Sun go after the end of the day?', 'दिन ख़त्म होने के बाद सूरज कहाँ जाता है?'], a: ['It sinks behind a distant hill.', 'वह दूर की एक पहाड़ी के पीछे डूब जाता है।'] },
        { q: ['The poem talks about the Sun in the sky. What else do you see when you look up at the sky?', 'कविता आसमान के सूरज की बात करती है। आसमान में ऊपर देखने पर तुम्हें और क्या दिखता है?'], a: ['clouds, birds, aeroplanes, the moon, stars and sometimes a rainbow', 'बादल, चिड़ियाँ, हवाई जहाज़, चाँद, तारे और कभी-कभी इंद्रधनुष'] },
      ],
    },
    {
      type: 'pick',
      title: ['Which of these need the Sun? (Living things need sunlight to grow.)', 'इनमें से किन्हें सूरज की ज़रूरत है? (जीवित चीज़ों को बढ़ने के लिए धूप चाहिए।)'],
      options: [['sunflower', 'सूरजमुखी'], ['toys', 'खिलौने'], ['plants', 'पौधे'], ['table', 'मेज़'], ['children', 'बच्चे']],
      answers: [0, 2, 4],
    },
    {
      type: 'task',
      title: ['Think and answer.', 'सोचो और उत्तर दो।'],
      items: [
        { q: ['What colours do we see during sunrise and sunset?', 'सूर्योदय और सूर्यास्त के समय कौन-से रंग दिखते हैं?'], a: ['orange, red, yellow, pink and purple', 'नारंगी, लाल, पीला, गुलाबी और बैंगनी'] },
        { q: ['What do you see when you look at the sky at night?', 'रात को आसमान देखने पर क्या दिखता है?'], a: ['the moon and many stars', 'चाँद और बहुत-से तारे'] },
        { q: ['How do you feel when you open your eyes in the morning?', 'सुबह आँखें खोलने पर तुम्हें कैसा लगता है?'], a: ['I feel fresh and happy to see the bright sun.', 'चमकता सूरज देखकर मैं ताज़ा और ख़ुश महसूस करता हूँ।'] },
        { q: ["Imagine a day when the Sun doesn't come out. How would the day be?", 'सोचो कि एक दिन सूरज न निकले। वह दिन कैसा होगा?'], a: ['It would be dark and cold. Plants would not grow and we could not play outside.', 'अँधेरा और ठंड होगी। पौधे नहीं बढ़ेंगे और हम बाहर नहीं खेल पाएँगे।'] },
      ],
    },
    {
      type: 'task',
      title: ['Let us do: play "I Spy". Say "I spy with my little eye something that is ..." and give a clue. Others guess.', 'आओ करें: "आई स्पाई" खेलो। कहो "मैं अपनी नन्ही आँख से कुछ देख रहा हूँ जो ... है" और संकेत दो। बाक़ी अंदाज़ा लगाएँ।'],
      items: [{ q: ['I spy with my little eye something that is blue!', 'मैं अपनी नन्ही आँख से कुछ नीला देख रहा हूँ!'], a: ['Is it the sky? Is it your shirt? Is it the pen?', 'क्या वह आसमान है? क्या वह तुम्हारी कमीज़ है? क्या वह पेन है?'] }],
    },
    {
      type: 'task',
      title: ["Let us speak: 'I spy a few stars in the sky.' Say these sp, st, sk words aloud.", "आओ बोलें: 'I spy a few stars in the sky.' ये sp, st, sk वाले शब्द ज़ोर से बोलो।"],
      items: [
        { q: ['st: star, storm, store, stain, stick, stair', 'st: तारा, तूफ़ान, दुकान, दाग़, छड़ी, सीढ़ी'], a: ['The stars shine at night.', 'रात में तारे चमकते हैं।'] },
        { q: ['sp: spoon, splash, spin', 'sp: चम्मच, छपाक, घूमना'], a: ['I eat with a spoon.', 'मैं चम्मच से खाता हूँ।'] },
        { q: ['sk: skin, skate, sky', 'sk: त्वचा, स्केट करना, आसमान'], a: ['The sky is blue.', 'आसमान नीला है।'] },
      ],
    },
    {
      type: 'pick',
      title: ['Choose the words that are found in the sky.', 'वे शब्द चुनो जो आसमान में मिलते हैं।'],
      options: [['stars', 'तारे'], ['storm', 'तूफ़ान'], ['store', 'दुकान'], ['stain', 'दाग़'], ['sun', 'सूरज'], ['bicycle', 'साइकिल'], ['moon', 'चाँद'], ['rain', 'बारिश'], ['clouds', 'बादल'], ['flowers', 'फूल'], ['rainbow', 'इंद्रधनुष'], ['monkeys', 'बंदर'], ['computer', 'कंप्यूटर'], ['shoes', 'जूते']],
      answers: [0, 1, 4, 6, 7, 8, 10],
    },
    {
      type: 'fill',
      title: ["Add 'Sun' to make new words (light → Sunlight).", "'Sun' जोड़कर नए शब्द बनाओ (light → Sunlight)।"],
      bank: ['Sunlight', 'Sunflower', 'Sunrays', 'Sunset', 'Sunrise', 'Sunglasses', 'Sunday'],
      items: [
        { q: ['Sun + light = ___', 'धूप = ___'], a: 'Sunlight' },
        { q: ['Sun + flower = ___', 'सूरजमुखी = ___'], a: 'Sunflower' },
        { q: ['Sun + rays = ___', 'सूरज की किरणें = ___'], a: 'Sunrays' },
        { q: ['Sun + set = ___', 'सूर्यास्त = ___'], a: 'Sunset' },
        { q: ['Sun + rise = ___', 'सूर्योदय = ___'], a: 'Sunrise' },
        { q: ['Sun + glasses = ___', 'धूप का चश्मा = ___'], a: 'Sunglasses' },
        { q: ['Sun + day = ___', 'रविवार = ___'], a: 'Sunday' },
      ],
    },
  ],
  'santoor-11': [
    {
      type: 'qa',
      title: ['Answer the following.', 'इनके उत्तर दो।'],
      items: [
        { q: ['Does the Moon look the same every night?', 'क्या चाँद हर रात एक जैसा दिखता है?'], a: ['No. At times it is round as a circle and at times different.', 'नहीं। कभी वह गोल होता है और कभी अलग।'] },
        { q: ['What did Chanda Mama try to count?', 'चंदा मामा ने क्या गिनने की कोशिश की?'], a: ['The stars in the sky.', 'आसमान के तारे।'] },
        { q: ['Why did Chanda Mama fall asleep?', 'चंदा मामा सो क्यों गए?'], a: ['There were so many stars that he got tired of counting and started yawning.', 'तारे इतने ज़्यादा थे कि गिनते-गिनते वे थक गए और जम्हाई लेने लगे।'] },
        { q: ['Who helped Chanda Mama?', 'चंदा मामा की मदद किसने की?'], a: ['The Sun.', 'सूरज ने।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Complete the sentence.', 'वाक्य पूरा करो।'],
      bank: ['the number of lovely children', 'the number of trees', 'one hundred'],
      items: [{ q: ['The number of stars in the sky is the same as ___.', 'आसमान में तारों की संख्या ___ के बराबर है।'], a: 'the number of lovely children' }],
    },
    {
      type: 'task',
      title: ['Think and say.', 'सोचो और बोलो।'],
      items: [
        { q: ['I call the Moon, Chanda Mama. What do you call him in your language?', 'मैं चाँद को चंदा मामा कहता हूँ। तुम अपनी भाषा में उसे क्या कहते हो?'], a: ['In Chhattisgarhi we also say "Chanda Mama".', 'छत्तीसगढ़ी में भी हम "चंदा मामा" कहते हैं।'] },
        { q: ['Chanda Mama could not count the stars. What things can you not count?', 'चंदा मामा तारे नहीं गिन पाए। तुम कौन-सी चीज़ें नहीं गिन सकते?'], a: ['grains of sand, drops of rain, hairs on my head and leaves on a tree', 'रेत के कण, बारिश की बूँदें, सिर के बाल और पेड़ की पत्तियाँ'] },
        { q: ['What can you see in the night sky?', 'रात के आसमान में तुम्हें क्या दिखता है?'], a: ['the moon, stars and sometimes clouds', 'चाँद, तारे और कभी-कभी बादल'] },
      ],
    },
    {
      type: 'mcq',
      title: ["Fill in the blanks with 'here' (near us) or 'there' (far from us).", "'here' (पास) या 'there' (दूर) से रिक्त स्थान भरो।"],
      items: [
        { q: ['The students are playing kabaddi ___. (far away)', 'विद्यार्थी ___ कबड्डी खेल रहे हैं। (दूर)'], options: [['here', 'यहाँ'], ['there', 'वहाँ']], a: 1 },
        { q: ['___ is your shirt. (in my hand)', '___ तुम्हारी कमीज़ है। (मेरे हाथ में)'], options: [['Here', 'यहाँ'], ['There', 'वहाँ']], a: 0 },
        { q: ['___ is my bicycle. (across the road)', '___ मेरी साइकिल है। (सड़क के उस पार)'], options: [['Here', 'यहाँ'], ['There', 'वहाँ']], a: 1 },
        { q: ['I went to Chandigarh last year. My brother lives ___.', 'मैं पिछले साल चंडीगढ़ गया था। मेरा भाई ___ रहता है।'], options: [['here', 'यहाँ'], ['there', 'वहाँ']], a: 1 },
        { q: ['This is my bench. I sit ___ with my friends.', 'यह मेरी बेंच है। मैं ___ अपने दोस्तों के साथ बैठता हूँ।'], options: [['here', 'यहाँ'], ['there', 'वहाँ']], a: 0 },
      ],
    },
    {
      type: 'pick',
      title: ['Listening: choose the things that are TOO MANY TO BE COUNTED.', 'सुनना: वे चीज़ें चुनो जो गिनी नहीं जा सकतीं (बहुत ज़्यादा हैं)।'],
      passage: [
        '1. Children in the classroom. 2. Flowers in a garden. 3. Books in the library. 4. Pencils in your pencil box. 5. Fingers on your right hand. 6. Children in your city or town. 7. Pages in your English notebook. 8. The hairs on your head.',
        '1. कक्षा में बच्चे। 2. बगीचे में फूल। 3. पुस्तकालय में किताबें। 4. पेंसिल बॉक्स में पेंसिलें। 5. दाएँ हाथ की उँगलियाँ। 6. तुम्हारे शहर या क़स्बे के बच्चे। 7. अंग्रेज़ी कॉपी के पन्ने। 8. सिर के बाल।',
      ],
      options: [['children in the classroom', 'कक्षा में बच्चे'], ['flowers in a garden', 'बगीचे में फूल'], ['books in the library', 'पुस्तकालय की किताबें'], ['pencils in your pencil box', 'पेंसिल बॉक्स की पेंसिलें'], ['fingers on your right hand', 'दाएँ हाथ की उँगलियाँ'], ['children in your city or town', 'शहर के बच्चे'], ['pages in your English notebook', 'अंग्रेज़ी कॉपी के पन्ने'], ['the hairs on your head', 'सिर के बाल']],
      answers: [1, 2, 5, 7],
    },
    {
      type: 'fill',
      title: ['Let us write: a full moon night. Complete the conversation with words from the help box.', 'आओ लिखें: पूर्णिमा की रात। सहायता बॉक्स के शब्दों से बातचीत पूरी करो।'],
      bank: ['says the full moon looks very beautiful', 'a camera for the picture', "let's take a picture", 'so bright and big'],
      items: [
        { q: ['Dhruv: My grandfather ___.', 'ध्रुव: मेरे दादाजी ___।'], a: 'says the full moon looks very beautiful' },
        { q: ['Safura: My mother has ___.', 'सफ़ूरा: मेरी माँ के पास ___ है।'], a: 'a camera for the picture' },
        { q: ['Dhruv: Come. Stand here and ___.', 'ध्रुव: आओ। यहाँ खड़े होकर ___।'], a: "let's take a picture" },
        { q: ['Govind: The moon is ___.', 'गोविंद: चाँद ___ है।'], a: 'so bright and big' },
      ],
    },
    {
      type: 'task',
      title: ['Project work: make wind chimes with the shapes of the moon and the stars.', 'परियोजना: चाँद और तारों के आकार की विंड चाइम बनाओ।'],
      items: [{ q: ['Steps', 'क़दम'], a: ['Cut a crescent moon from a cardboard sheet. Draw stars on cardboard and cut them out. Decorate them with coloured paper. Tie all the shapes with thread and glue. Your wind chimes are ready.', 'गत्ते से अर्धचंद्र काटो। गत्ते पर तारे बनाकर काटो। रंगीन काग़ज़ से सजाओ। सभी आकारों को धागे और गोंद से बाँधो। तुम्हारी विंड चाइम तैयार है।'] }],
    },
  ],
  'santoor-12': [
    {
      type: 'qa',
      title: ['Answer the following.', 'इनके उत्तर दो।'],
      items: [
        { q: ['Rani was very curious. How do you know?', 'रानी बहुत जिज्ञासु थी। कैसे पता?'], a: ['She asked many questions, like "Why is the sky blue?" and "How far is the Moon?"', 'वह बहुत सवाल पूछती थी, जैसे "आसमान नीला क्यों है?" और "चाँद कितनी दूर है?"'] },
        { q: ['What did Pratik say in excitement?', 'प्रतीक ने उत्साह में क्या कहा?'], a: ['"Look Rani, India is on the Moon!"', '"देखो रानी, भारत चाँद पर है!"'] },
        { q: ['Who was Nandini Aunty?', 'नंदिनी आंटी कौन थीं?'], a: ["Vivaan's mother, a scientist.", 'विवान की माँ, एक वैज्ञानिक।'] },
        { q: ['What do the words Chandra and Yaan mean?', 'चंद्र और यान का क्या मतलब है?'], a: ['Chandra means Moon and Yaan means vehicle.', 'चंद्र का मतलब चाँद और यान का मतलब वाहन।'] },
        { q: ['Complete the sentence: Chandrayaan-3 landed on the Moon on ___.', 'वाक्य पूरा करो: चंद्रयान-3 चाँद पर ___ को उतरा।'], a: ['23 August 2023, near the south pole of the Moon. (It was launched on 14 July 2023.)', '23 अगस्त 2023 को, चाँद के दक्षिणी ध्रुव के पास। (इसे 14 जुलाई 2023 को छोड़ा गया था।)'] },
      ],
    },
    {
      type: 'task',
      title: ['Think and say: scientists invite you to spend 10 days on the Moon. List the things you would take.', 'सोचो और बोलो: वैज्ञानिक तुम्हें 10 दिन चाँद पर रहने बुलाते हैं। जो चीज़ें ले जाओगे उनकी सूची बनाओ।'],
      items: [{ q: ['10 things', '10 चीज़ें'], a: ['a space suit, oxygen, water, food, a torch, a blanket, a camera, a notebook, a pencil and medicines', 'अंतरिक्ष पोशाक, ऑक्सीजन, पानी, खाना, टॉर्च, कंबल, कैमरा, कॉपी, पेंसिल और दवाइयाँ'] }],
    },
    {
      type: 'task',
      title: ['Let us speak: ask elders about travelling to far places. Have you travelled far? Share your experience.', 'आओ बोलें: बड़ों से दूर की यात्राओं के बारे में पूछो। क्या तुमने लंबी यात्रा की है? अपना अनुभव बताओ।'],
      items: [{ q: ['My journey', 'मेरी यात्रा'], a: ['Last year I went to Delhi by train with my parents. The journey took a whole night. I saw many rivers and fields from the window.', 'पिछले साल मैं माता-पिता के साथ रेल से दिल्ली गया। यात्रा पूरी रात की थी। खिड़की से मैंने कई नदियाँ और खेत देखे।'] }],
    },
    {
      type: 'mcq',
      title: ["Fill in the blanks using 'a' or 'an'. (a: before consonant sounds; an: before vowel sounds)", "'a' या 'an' से रिक्त स्थान भरो। (a: व्यंजन ध्वनि से पहले; an: स्वर ध्वनि से पहले)"],
      items: [
        { q: ['___ dog is barking at the postman.', '___ कुत्ता डाकिए पर भौंक रहा है।'], options: [['A', ''], ['An', '']], a: 0 },
        { q: ['I saw ___ eagle yesterday.', 'मैंने कल ___ चील देखी।'], options: [['a', ''], ['an', '']], a: 1 },
        { q: ['Maya bought ___ umbrella for the monsoon.', 'माया ने बरसात के लिए ___ छाता ख़रीदा।'], options: [['a', ''], ['an', '']], a: 1 },
        { q: ['___ brown hen laid an egg.', '___ भूरी मुर्गी ने एक अंडा दिया।'], options: [['A', ''], ['An', '']], a: 0 },
        { q: ['Mary ate ___ orange.', 'मैरी ने ___ संतरा खाया।'], options: [['a', ''], ['an', '']], a: 1 },
        { q: ['There was ___ girl named Rani.', 'रानी नाम की ___ लड़की थी।'], options: [['a', ''], ['an', '']], a: 0 },
      ],
    },
    {
      type: 'fill',
      title: ["Let us write: form words using 'sk', 'sw', 'sp' and 'st'.", "आओ लिखें: 'sk', 'sw', 'sp' और 'st' से शब्द बनाओ।"],
      bank: ['swings', 'stones', 'spoon', 'story', 'skirt'],
      items: [
        { q: ['There are ___ in the park.', 'पार्क में ___ हैं।'], a: 'swings' },
        { q: ['The children throw ___ in the river.', 'बच्चे नदी में ___ फेंकते हैं।'], a: 'stones' },
        { q: ['I need a ___ and a bowl for soup.', 'सूप के लिए मुझे एक ___ और कटोरा चाहिए।'], a: 'spoon' },
        { q: ['Have you heard the ___ of the boy who cried wolf?', 'क्या तुमने भेड़िया आया चिल्लाने वाले लड़के की ___ सुनी है?'], a: 'story' },
        { q: ['The blue ___ matched with the pink shirt.', 'नीली ___ गुलाबी कमीज़ से मेल खाती थी।'], a: 'skirt' },
      ],
    },
    {
      type: 'task',
      title: ['Describing the Moon: draw the Moon and write a few lines about it.', 'चाँद का वर्णन: चाँद बनाओ और उसके बारे में कुछ पंक्तियाँ लिखो।'],
      items: [{ q: ['The Moon', 'चाँद'], a: ['The Moon shines in the night sky. It looks white and bright. Sometimes it is round and sometimes it looks like a curved line. We call it Chanda Mama. India has sent Chandrayaan to the Moon.', 'चाँद रात के आसमान में चमकता है। वह सफ़ेद और चमकीला दिखता है। कभी वह गोल होता है और कभी मुड़ी हुई रेखा जैसा। हम उसे चंदा मामा कहते हैं। भारत ने चाँद पर चंद्रयान भेजा है।'] }],
    },
    {
      type: 'fill',
      title: ['Fun with words: find the position of each day in the week (Sunday is the first day).', 'शब्दों का खेल: हफ़्ते में हर दिन का स्थान बताओ (रविवार पहला दिन है)।'],
      bank: ['second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'],
      items: [
        { q: ['Monday: ___', 'सोमवार: ___'], a: 'second' },
        { q: ['Tuesday: ___', 'मंगलवार: ___'], a: 'third' },
        { q: ['Wednesday: ___', 'बुधवार: ___'], a: 'fourth' },
        { q: ['Thursday: ___', 'गुरुवार: ___'], a: 'fifth' },
        { q: ['Friday: ___', 'शुक्रवार: ___'], a: 'sixth' },
        { q: ['Saturday: ___', 'शनिवार: ___'], a: 'seventh' },
      ],
    },
    {
      type: 'task',
      title: ['Let us do and explore: collect news clippings about Chandrayaan-3 for a class chart. Find a song or story about the moon in your mother tongue.', 'आओ करें और खोजें: कक्षा के चार्ट के लिए चंद्रयान-3 की ख़बरों की कतरनें इकट्ठा करो। अपनी मातृभाषा में चाँद पर कोई गीत या कहानी खोजो।'],
      items: [{ q: ['A song about the moon', 'चाँद पर एक गीत'], a: ['"Chanda mama door ke, pue pakaye boor ke..." - a lullaby about Chanda Mama.', '"चंदा मामा दूर के, पुए पकाएँ बूर के..." - चंदा मामा पर एक लोरी।'] }],
    },
  ],
  // EXERCISES-END (more lessons are added above this line)
};

module.exports = { exercises };
