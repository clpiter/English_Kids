// "Activity from lesson" for Class 6 (Poorvi): the textbook's questions and activities
// after each lesson, with Hindi. Format: see frontend/src/screens/LessonExercises.jsx.
const exercises = {
  'class6-1': [
    {
      type: 'qa',
      title: ['Let us discuss (part 1)', 'आओ चर्चा करें (भाग 1)'],
      items: [
        { q: ['What did Rama Natha believe?', 'रामनाथ क्या मानता था?'], a: ['He believed there was a magic potion that could turn any object into gold.', 'वह मानता था कि एक जादुई घोल है जो किसी भी चीज़ को सोना बना सकता है।'] },
        { q: ['How did the sage help Rama Natha?', 'साधु ने रामनाथ की मदद कैसे की?'], a: ['He told him to plant banana plants, look after them himself, and collect five litres of dew from their leaves.', 'उसने रामनाथ से केले के पौधे लगाने, ख़ुद उनकी देखभाल करने और उनकी पत्तियों से पाँच लीटर ओस इकट्ठा करने को कहा।'] },
        { q: ['Do you think Rama Natha will be able to collect the dew? Give a reason.', 'क्या रामनाथ ओस इकट्ठा कर पाएगा? कारण दो।'], a: ['Yes, because he never gives up, but it will take him many years.', 'हाँ, क्योंकि वह कभी हार नहीं मानता, पर इसमें उसे कई साल लगेंगे।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Let us discuss (part 2)', 'आओ चर्चा करें (भाग 2)'],
      items: [
        { q: ['Why was Rama Natha angry?', 'रामनाथ नाराज़ क्यों था?'], a: ['The dew did not turn the copper vessel into gold, and he felt he had wasted six precious years.', 'ओस से तांबे का बर्तन सोना नहीं बना, और उसे लगा कि उसके छह क़ीमती साल बर्बाद हो गए।'] },
        { q: ['How did Rama Natha and Madhumati create wealth?', 'रामनाथ और मधुमती ने धन कैसे कमाया?'], a: ['Rama Natha looked after the banana plantation and Madhumati sold the bananas in the market.', 'रामनाथ ने केले के बाग़ की देखभाल की और मधुमती ने बाज़ार में केले बेचे।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Read the extract and answer.', 'अंश पढ़ो और उत्तर दो।'],
      passage: [
        'He spent all his time to learn about the magic potion. People cheated him often, promising to tell him about it, but he did not give up. His wife, Madhumati, was tired of this and also worried because she saw how much money Rama Natha was spending. She was sure that soon they would be without money.',
        'वह अपना सारा समय जादुई घोल के बारे में जानने में लगाता था। लोग उसे इसके बारे में बताने का वादा करके अक्सर ठगते थे, पर उसने हार नहीं मानी। उसकी पत्नी मधुमती इससे थक गई थी और चिंतित भी थी, क्योंकि वह देखती थी कि रामनाथ कितना पैसा ख़र्च कर रहा है। उसे यक़ीन था कि जल्द ही उनके पास पैसे नहीं बचेंगे।',
      ],
      items: [
        { q: ["Rama Natha did not 'give up' because ...", "रामनाथ ने 'हार नहीं मानी' क्योंकि ..."], a: ['he strongly believed that the magic potion existed and wanted to find it.', 'उसे पक्का विश्वास था कि जादुई घोल होता है और वह उसे ढूँढना चाहता था।'] },
        { q: ['What happened: People promised to tell Rama Natha about the magic potion. Outcome?', 'क्या हुआ: लोगों ने रामनाथ को जादुई घोल के बारे में बताने का वादा किया। परिणाम?'], a: ['They cheated him and took his money.', 'उन्होंने उसे ठगा और उसका पैसा ले लिया।'] },
        { q: ['What happened: Rama Natha was spending a lot of money. Outcome?', 'क्या हुआ: रामनाथ बहुत पैसा ख़र्च कर रहा था। परिणाम?'], a: ['Madhumati was worried that they would soon have no money.', 'मधुमती को चिंता थी कि जल्द ही उनके पास पैसा नहीं बचेगा।'] },
      ],
    },
    {
      type: 'tf',
      title: ['True or false?', 'सही या ग़लत?'],
      items: [
        { q: ['Madhumati was troubled about what her husband did.', 'मधुमती अपने पति के कामों से परेशान थी।'], a: true },
        { q: ['Rama Natha was very happy digging his fields.', 'रामनाथ अपने खेत खोदकर बहुत ख़ुश था।'], a: false },
        { q: ['The sage wanted to show the right path to Rama Natha.', 'साधु रामनाथ को सही राह दिखाना चाहता था।'], a: true },
      ],
    },
    {
      type: 'mcq',
      title: ['Read the second extract and choose the correct order.', 'दूसरा अंश पढ़ो और सही क्रम चुनो।'],
      passage: [
        'Carefully, he took the bottle to the sage. The sage smiled and muttered something over the water. Then he returned the bottle and said, "Try it out." Rama Natha sprinkled a few drops on a copper vessel and waited for it to turn to gold. To his surprise nothing happened!',
        'सावधानी से वह बोतल साधु के पास ले गया। साधु मुस्कुराया और पानी पर धीरे से कुछ बुदबुदाया। फिर उसने बोतल लौटाकर कहा, "आज़माकर देखो।" रामनाथ ने तांबे के बर्तन पर कुछ बूँदें छिड़कीं और उसके सोना बनने का इंतज़ार किया। उसे आश्चर्य हुआ कि कुछ नहीं हुआ!',
      ],
      items: [
        { q: ['A. The sage smiled. B. Rama Natha gave the bottle to the sage. C. Rama Natha dropped a few drops on a copper vessel. D. He said something in a low voice over the water. E. Rama Natha waited to see if the magic worked.', 'A. साधु मुस्कुराया। B. रामनाथ ने बोतल साधु को दी। C. रामनाथ ने तांबे के बर्तन पर कुछ बूँदें डालीं। D. उसने पानी पर धीमी आवाज़ में कुछ कहा। E. रामनाथ ने देखा कि जादू चला या नहीं।'], options: [['A, E, D, B, C', 'A, E, D, B, C'], ['B, A, D, C, E', 'B, A, D, C, E'], ['C, D, A, B, E', 'C, D, A, B, E'], ['A, D, B, E, C', 'A, D, B, E, C']], a: 1 },
      ],
    },
    {
      type: 'fill',
      title: ['Fill in the blank with a word from the extract.', 'अंश के शब्द से रिक्त स्थान भरो।'],
      bank: ['sprinkled', 'muttered', 'returned', 'waited'],
      items: [
        { q: ['Seeing that the plant had dried up, the gardener ___ some water on it.', 'पौधा सूखा देखकर माली ने उस पर थोड़ा पानी छिड़का।'], a: 'sprinkled' },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['How might Rama Natha have felt when nothing happened to the copper vessel?', 'जब तांबे के बर्तन को कुछ नहीं हुआ, तो रामनाथ को कैसा लगा होगा?'], a: ['Shocked, disappointed and angry; he felt cheated.', 'हैरान, निराश और नाराज़; उसे लगा कि उसे ठगा गया।'] },
        { q: ['What did the sage ask Rama Natha to do to make the magic potion?', 'जादुई घोल बनाने के लिए साधु ने रामनाथ से क्या करने को कहा?'], a: ['To plant banana plants, water them with his own hands, and collect five litres of morning dew from the leaves in winter.', 'केले के पौधे लगाने, अपने हाथों से उन्हें पानी देने, और सर्दियों में पत्तियों से सुबह की पाँच लीटर ओस इकट्ठा करने को।'] },
        { q: ['Why did the sage ask Rama Natha to do everything himself?', 'साधु ने रामनाथ से सब कुछ ख़ुद करने को क्यों कहा?'], a: ['So that he would work hard on his land and learn that hard work, not magic, creates wealth.', 'ताकि वह अपनी ज़मीन पर मेहनत करे और सीखे कि धन जादू से नहीं, मेहनत से बनता है।'] },
        { q: ['How could Rama Natha have a big banana plantation after six years?', 'छह साल बाद रामनाथ के पास केले का बड़ा बाग़ कैसे हो गया?'], a: ['Every year he planted more and more banana plants on his large fields and looked after them carefully.', 'वह हर साल अपने बड़े खेतों में और ज़्यादा केले के पौधे लगाता गया और उनकी ध्यान से देखभाल करता रहा।'] },
        { q: ['How did the sage make Rama Natha believe that there is no magic potion?', 'साधु ने रामनाथ को कैसे यक़ीन दिलाया कि कोई जादुई घोल नहीं है?'], a: ['The dew did not make gold, but Madhumati showed a box of gold coins earned by selling bananas. The sage explained that their hard work had created this wealth.', 'ओस से सोना नहीं बना, पर मधुमती ने केले बेचकर कमाए सोने के सिक्कों का डिब्बा दिखाया। साधु ने समझाया कि यह धन उनकी मेहनत से बना है।'] },
        { q: ["'Before' and 'after' table: what did Rama Natha do before and after meeting the sage?", "'पहले' और 'बाद' की तालिका: साधु से मिलने से पहले और बाद में रामनाथ ने क्या किया?"], a: ['Before: (i) he searched for a magic potion; (ii) he did not look after his land and wasted money. After: (i) he planted bananas and worked on his land; (ii) he worked even harder on his plantation.', 'पहले: (i) वह जादुई घोल ढूँढता था; (ii) वह अपनी ज़मीन की देखभाल नहीं करता था और पैसा बर्बाद करता था। बाद में: (i) उसने केले लगाए और ज़मीन पर मेहनत की; (ii) वह अपने बाग़ पर और भी ज़्यादा मेहनत करने लगा।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Complete the paragraph with words from the story. (Two words are extra.)', 'कहानी के शब्दों से अनुच्छेद पूरा करो। (दो शब्द फ़ालतू हैं।)'],
      bank: ['huge', 'luck', 'difficult', 'promised', 'cheated', 'remember', 'spending', 'market'],
      items: [
        { q: ['There was a farmer who had a ___ coconut plantation.', 'एक किसान था जिसका नारियल का बहुत बड़ा बाग़ था।'], a: 'huge' },
        { q: ['He worked hard and did not depend on ___.', 'वह मेहनत करता था और क़िस्मत पर निर्भर नहीं रहता था।'], a: 'luck' },
        { q: ['Every day was ___ but he did not give up.', 'हर दिन कठिन था पर उसने हार नहीं मानी।'], a: 'difficult' },
        { q: ['One day, a man bought a bag of coconuts from him, and ___ to pay him the money the next day.', 'एक दिन एक आदमी ने उससे नारियल का थैला ख़रीदा और अगले दिन पैसे देने का वादा किया।'], a: 'promised' },
        { q: ['Days passed and the man did not pay. The farmer felt ___.', 'दिन बीते और आदमी ने पैसे नहीं दिए। किसान को लगा कि उसे ठगा गया।'], a: 'cheated' },
        { q: ['The man said, "Oh! I had forgotten. Now, I ___ buying coconuts from you."', 'आदमी बोला, "अरे! मैं भूल गया था। अब मुझे तुमसे नारियल ख़रीदना याद आया।"'], a: 'remember' },
      ],
    },
    {
      type: 'match',
      title: ['Homophones (same sound, different spelling and meaning): match each word with its meaning.', 'समध्वनि शब्द (एक जैसी आवाज़, अलग वर्तनी और अर्थ): हर शब्द को उसके अर्थ से मिलाओ।'],
      pairs: [
        [['eye (for I)', 'eye (I जैसा)'], ['the part of the body we see with', 'शरीर का अंग जिससे हम देखते हैं']],
        [["you're (for your)", "you're (your जैसा)"], ["short form of 'you are'", "'you are' का छोटा रूप"]],
        [['due (for dew)', 'due (dew जैसा)'], ['expected to happen at some time in the future', 'भविष्य में किसी समय होने वाला']],
        [['sun (for son)', 'sun (son जैसा)'], ['the star that gives us light and heat', 'तारा जो हमें रोशनी और गर्मी देता है']],
        [['won (for one)', 'won (one जैसा)'], ['past tense of win', 'win का भूतकाल']],
        [['eight (for ate)', 'eight (ate जैसा)'], ['the number 8', 'संख्या 8']],
        [['sea (for see)', 'sea (see जैसा)'], ['a large area of salt water', 'खारे पानी का बड़ा क्षेत्र']],
      ],
    },
    {
      type: 'match',
      title: ['Join Column A and Column B with the connecting words to make sentences.', 'कॉलम A और कॉलम B को जोड़ने वाले शब्दों से जोड़कर वाक्य बनाओ।'],
      pairs: [
        [['The children submitted their work', 'बच्चों ने अपना काम जमा किया'], ['before the deadline.', 'समय-सीमा से पहले।']],
        [['He did not want to try rock climbing', 'वह रॉक क्लाइंबिंग नहीं करना चाहता था'], ['because of his fear of heights.', 'ऊँचाई के डर के कारण।']],
        [['The children ran towards the gate', 'बच्चे गेट की ओर दौड़े'], ['as soon as the bell rang.', 'जैसे ही घंटी बजी।']],
        [['Nitin was late to school today', 'नितिन आज स्कूल देर से पहुँचा'], ['as there was a traffic jam.', 'क्योंकि ट्रैफ़िक जाम था।']],
      ],
    },
    {
      type: 'task',
      title: ["Tongue twister: read slowly first, then faster each time. Then make your own with the letter 'b'.", "टंग ट्विस्टर: पहले धीरे पढ़ो, फिर हर बार तेज़। फिर 'b' अक्षर से अपना बनाओ।"],
      items: [
        { q: ['Bunty bhaiya bought a big bunch of bananas.', 'बंटी भैया ने केलों का एक बड़ा गुच्छा ख़रीदा।'] },
        { q: ['A big bunch of bananas was bought by Bunty bhaiya.', 'केलों का एक बड़ा गुच्छा बंटी भैया द्वारा ख़रीदा गया।'] },
        { q: ['Make your own', 'अपना बनाओ'], a: ['Babli baked a batch of brown biscuits for her baby brother.', 'बबली ने अपने छोटे भाई के लिए भूरे बिस्कुटों का एक बैच सेंका।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Let us listen: what does Madhumati do with her bananas? Put the events in order.', 'आओ सुनें: मधुमती अपने केलों का क्या करती है? घटनाओं को क्रम में रखो।'],
      passage: [
        "Madhumati is very happy as she has many big bags of bananas. Firstly, she visits her mother and gives her two dozen bananas. Secondly, she goes to the market to sell the bananas. Next, she meets her old friend Kalawati in the market. Then, she gifts Kalawati a dozen bananas. Later, she decides to go home as she has sold most of the bananas. After that, on the way home, she meets a little boy who is hungry and gives him two bananas. Lastly, she goes to her neighbour's house and gives them a bunch of bananas. She has a smile on her face as she goes home.",
        'मधुमती बहुत ख़ुश है क्योंकि उसके पास केलों के कई बड़े थैले हैं। सबसे पहले, वह अपनी माँ से मिलती है और उन्हें दो दर्जन केले देती है। दूसरे, वह केले बेचने बाज़ार जाती है। फिर, बाज़ार में उसे अपनी पुरानी सहेली कलावती मिलती है। तब वह कलावती को एक दर्जन केले उपहार में देती है। बाद में वह घर जाने का फ़ैसला करती है क्योंकि ज़्यादातर केले बिक चुके हैं। उसके बाद, घर लौटते हुए उसे एक भूखा छोटा लड़का मिलता है और वह उसे दो केले देती है। अंत में, वह अपने पड़ोसी के घर जाकर उन्हें केलों का एक गुच्छा देती है। घर जाते समय उसके चेहरे पर मुस्कान है।',
      ],
      bank: ['visits her mother', 'goes to the market', 'meets Kalawati', 'gives twelve bananas to her friend', 'chooses to go home', 'gives two bananas to a hungry boy', 'gifts her neighbour a bunch'],
      items: [
        { q: ['1. First, she ___ and gives her two dozen bananas.', '1. पहले वह अपनी माँ से मिलती है और उन्हें दो दर्जन केले देती है।'], a: 'visits her mother' },
        { q: ['2. Then she ___ to sell the bananas.', '2. फिर वह केले बेचने बाज़ार जाती है।'], a: 'goes to the market' },
        { q: ['3. In the market, she ___.', '3. बाज़ार में उसे कलावती मिलती है।'], a: 'meets Kalawati' },
        { q: ['4. She ___.', '4. वह अपनी सहेली को बारह केले देती है।'], a: 'gives twelve bananas to her friend' },
        { q: ['5. Only some bananas are left, so she ___.', '5. कुछ ही केले बचे हैं, इसलिए वह घर जाने का फ़ैसला करती है।'], a: 'chooses to go home' },
        { q: ['6. On the way, she ___.', '6. रास्ते में वह एक भूखे लड़के को दो केले देती है।'], a: 'gives two bananas to a hungry boy' },
        { q: ['7. Lastly, she ___ of bananas.', '7. अंत में वह पड़ोसी को केलों का गुच्छा देती है।'], a: 'gifts her neighbour a bunch' },
      ],
    },
    {
      type: 'mcq',
      title: ["Let us speak: does the letter 's' sound like /s/ or /z/? Say each word aloud.", "आओ बोलें: 's' अक्षर /स/ जैसा बोलता है या /ज़/ जैसा? हर शब्द ज़ोर से बोलो।"],
      items: [
        { q: ['beds', 'बेड्ज़'], options: [['/s/', '/स/'], ['/z/', '/ज़/']], a: 1 },
        { q: ['sand', 'सैंड'], options: [['/s/', '/स/'], ['/z/', '/ज़/']], a: 0 },
        { q: ['clothes', 'क्लोद्ज़'], options: [['/s/', '/स/'], ['/z/', '/ज़/']], a: 1 },
        { q: ['sea', 'सी'], options: [['/s/', '/स/'], ['/z/', '/ज़/']], a: 0 },
        { q: ['was', 'वॉज़'], options: [['/s/', '/स/'], ['/z/', '/ज़/']], a: 1 },
        { q: ['keys', 'कीज़'], options: [['/s/', '/स/'], ['/z/', '/ज़/']], a: 1 },
        { q: ['bags', 'बैग्ज़'], options: [['/s/', '/स/'], ['/z/', '/ज़/']], a: 1 },
        { q: ['nose', 'नोज़'], options: [['/s/', '/स/'], ['/z/', '/ज़/']], a: 1 },
      ],
    },
    {
      type: 'task',
      title: ['Pair work: role-play the sage and Rama Natha after Rama Natha became rich.', 'जोड़ी में: अमीर बनने के बाद साधु और रामनाथ की बातचीत का अभिनय करो।'],
      items: [{ q: ['Sample role play', 'नमूना अभिनय'], a: ['Rama Natha: Guruji, thank you! Your trick changed my life.\nSage: I am happy, Rama Natha. What did you learn?\nRama Natha: That hard work is the real magic. My fields are full of bananas now.\nSage: Keep working hard and share your wealth with those in need.\nRama Natha: I will, Guruji.', 'रामनाथ: गुरुजी, धन्यवाद! आपकी तरकीब ने मेरा जीवन बदल दिया।\nसाधु: मुझे ख़ुशी है, रामनाथ। तुमने क्या सीखा?\nरामनाथ: कि मेहनत ही असली जादू है। अब मेरे खेत केलों से भरे हैं।\nसाधु: मेहनत करते रहो और अपना धन ज़रूरतमंदों के साथ बाँटो।\nरामनाथ: ज़रूर, गुरुजी।'] }],
    },
    {
      type: 'task',
      title: ['Let us write: eight sentences about a banana (why it is healthy, taste, smell, colour, how the skin feels, when you like to eat it).', 'आओ लिखें: केले के बारे में आठ वाक्य (क्यों सेहतमंद है, स्वाद, ख़ुशबू, रंग, छिलका छूने में कैसा, कब खाना पसंद है)।'],
      items: [{ q: ['About a banana', 'केले के बारे में'], a: ['A banana is a healthy fruit. It gives us energy and is rich in vitamins. It tastes sweet and creamy. It has a sweet, fruity smell. Its outer covering is green when raw and yellow when ripe. The fruit inside is white. The skin feels smooth and soft. I like to eat a banana at breakfast.', 'केला एक सेहतमंद फल है। यह हमें ऊर्जा देता है और विटामिन से भरपूर है। इसका स्वाद मीठा और मलाईदार है। इसकी ख़ुशबू मीठी और फलों जैसी है। इसका छिलका कच्चा होने पर हरा और पकने पर पीला होता है। अंदर का फल सफ़ेद होता है। छिलका छूने में चिकना और मुलायम लगता है। मुझे नाश्ते में केला खाना पसंद है।'] }],
    },
    {
      type: 'mcq',
      title: ['Let us explore: the Blue Java banana.', 'आओ जानें: ब्लू जावा केला।'],
      passage: [
        'There is a special kind of banana called the Blue Java banana. This banana has got its name from its blue skin. It is also known as Ice Cream banana as it is so creamy and tastes like ice cream. It is grown in South East Asia and Hawaii. These banana plants grow to a height of fifteen to twenty feet.',
        'एक ख़ास तरह का केला है जिसे ब्लू जावा केला कहते हैं। इसका नाम इसके नीले छिलके से पड़ा है। इसे आइसक्रीम केला भी कहते हैं क्योंकि यह बहुत मलाईदार है और आइसक्रीम जैसा स्वाद देता है। यह दक्षिण-पूर्व एशिया और हवाई में उगाया जाता है। इसके पौधे पंद्रह से बीस फ़ीट ऊँचे होते हैं।',
      ],
      items: [
        { q: ['Why is it called the Blue Java banana?', 'इसे ब्लू जावा केला क्यों कहते हैं?'], options: [['because of its blue skin', 'नीले छिलके के कारण'], ['because it grows in Java only', 'क्योंकि यह सिर्फ़ जावा में उगता है'], ['because it is blue inside', 'क्योंकि यह अंदर से नीला है']], a: 0 },
        { q: ['It is also called the Ice Cream banana because ___.', 'इसे आइसक्रीम केला भी कहते हैं क्योंकि ___।'], options: [['it is very cold', 'यह बहुत ठंडा है'], ['it is creamy and tastes like ice cream', 'यह मलाईदार है और आइसक्रीम जैसा स्वाद है'], ['it is sold with ice cream', 'यह आइसक्रीम के साथ बिकता है']], a: 1 },
        { q: ['How tall do these banana plants grow?', 'ये केले के पौधे कितने ऊँचे होते हैं?'], options: [['5 to 10 feet', '5 से 10 फ़ीट'], ['15 to 20 feet', '15 से 20 फ़ीट'], ['50 feet', '50 फ़ीट']], a: 1 },
      ],
    },
  ],
  'class6-2': [
    {
      type: 'mcq',
      title: ['Before we read: which animal is shown to be cunning in stories?', 'पढ़ने से पहले: कहानियों में कौन-सा जानवर चालाक दिखाया जाता है?'],
      items: [
        { q: ['Which animal is cunning in stories?', 'कहानियों में कौन-सा जानवर चालाक होता है?'], options: [['tiger', 'बाघ'], ['fox', 'लोमड़ी'], ['bear', 'भालू']], a: 1 },
      ],
    },
    {
      type: 'fill',
      title: ['Let us discuss: fill in the blanks by choosing the correct option (stanza by stanza).', 'आओ चर्चा करें: सही विकल्प चुनकर रिक्त स्थान भरो (पद के अनुसार)।'],
      items: [
        { q: ['Stanza 1: Mr Raven is a ___.', 'पद 1: मिस्टर रेवन एक पक्षी है।'], a: 'bird', options: ['bird', 'frog'] },
        { q: ['Stanza 1: The name of the fox is ___.', 'पद 1: लोमड़ी का नाम रेनार्ड है।'], a: 'Reynard', options: ['Raven', 'Reynard'] },
        { q: ['Stanza 1: Mr Raven had ___ in his beak.', 'पद 1: मिस्टर रेवन की चोंच में खाने का टुकड़ा था।'], a: 'a piece of food', options: ['a piece of food', 'a bunch of leaves'] },
        { q: ['Stanza 2: The Fox calls the Raven a ___ bird.', 'पद 2: लोमड़ी रेवन को सुंदर पक्षी कहती है।'], a: 'good-looking', options: ['foolish', 'good-looking'] },
        { q: ['Stanza 2: The Fox asks the Raven to ___.', 'पद 2: लोमड़ी रेवन से गाने को कहती है।'], a: 'sing', options: ['dance', 'sing'] },
        { q: ['Stanza 2: The Raven and the Fox live in the ___.', 'पद 2: रेवन और लोमड़ी जंगल में रहते हैं।'], a: 'woods', options: ['trees', 'woods'] },
        { q: ['Stanza 3: The Raven ___ that he croaked.', 'पद 3: रेवन भूल गया कि वह काँव-काँव करता है।'], a: 'forgot', options: ['remembered', 'forgot'] },
        { q: ['Stanza 3: The Raven opened its beak to ___.', 'पद 3: रेवन ने गाने के लिए चोंच खोली।'], a: 'sing', options: ['eat', 'sing'] },
        { q: ['Stanza 3: The ___ fell down.', 'पद 3: खाना नीचे गिर गया।'], a: 'food', options: ['food', 'Raven'] },
        { q: ['Stanza 4: The Fox ___ at the Raven.', 'पद 4: लोमड़ी रेवन पर हँसी।'], a: 'laughed', options: ['laughed', 'looked'] },
        { q: ['Stanza 4: It is not ___ to be too proud of oneself.', 'पद 4: ख़ुद पर बहुत घमंड करना समझदारी नहीं है।'], a: 'wise', options: ['wise', 'unwise'] },
        { q: ['Stanza 4: The Raven learnt a ___.', 'पद 4: रेवन ने एक सबक़ सीखा।'], a: 'lesson', options: ['lesson', 'teaching'] },
      ],
    },
    {
      type: 'match',
      title: ['Match the words from the poem with their meanings.', 'कविता के शब्दों को उनके अर्थ से मिलाओ।'],
      pairs: [
        [['perched', 'बैठा हुआ'], ['sat on a branch', 'डाल पर बैठा']],
        [['morsel', 'कौर'], ['a small piece of food', 'खाने का छोटा टुकड़ा']],
        [['seek', 'खोजना'], ['to look for something', 'कुछ ढूँढना']],
        [['pride', 'घमंड'], ['feeling that you are better than others', 'ख़ुद को दूसरों से बेहतर समझना']],
        [['eyed', 'ताका'], ['looked with interest at something', 'किसी चीज़ को चाव से देखा']],
        [['limb', 'डाल'], ['branch of a tree', 'पेड़ की शाखा']],
        [['woods', 'जंगल'], ['a smaller area of forest with similar trees', 'एक जैसे पेड़ों वाला छोटा जंगल']],
      ],
    },
    {
      type: 'fill',
      title: ['Put the events of the poem in order.', 'कविता की घटनाओं को क्रम में रखो।'],
      bank: ['sits on a branch with food', 'praises his feathers', 'opens his beak to sing', 'falls down', 'laughs and teaches a lesson'],
      items: [
        { q: ['1. Mr Raven ___ in his beak.', '1. मिस्टर रेवन चोंच में खाना लिए डाल पर बैठा है।'], a: 'sits on a branch with food' },
        { q: ['2. The Fox ___ and asks him to sing.', '2. लोमड़ी उसके पंखों की तारीफ़ करती है और गाने को कहती है।'], a: 'praises his feathers' },
        { q: ['3. The proud Raven ___.', '3. घमंडी रेवन गाने के लिए चोंच खोलता है।'], a: 'opens his beak to sing' },
        { q: ['4. The morsel ___ and the Fox gets it.', '4. कौर नीचे गिरता है और लोमड़ी उसे पा लेती है।'], a: 'falls down' },
        { q: ['5. The Fox ___ about pride.', '5. लोमड़ी हँसती है और घमंड के बारे में सबक़ देती है।'], a: 'laughs and teaches a lesson' },
      ],
    },
    {
      type: 'mcq',
      title: ['Read the lines and choose the correct option.', 'पंक्तियाँ पढ़ो और सही विकल्प चुनो।'],
      passage: [
        'Sir Raven, you are a handsome bird. Such feathers! If you would only sing, the birds of these woods would call you King.',
        'सर रेवन, तुम एक सुंदर पक्षी हो। क्या पंख हैं! अगर तुम बस गा दो, तो इन जंगलों के पक्षी तुम्हें राजा कहेंगे।',
      ],
      items: [
        { q: ["'Such feathers' refers to ___ feathers.", "'Such feathers' का मतलब है ___ पंख।"], options: [['shiny and beautiful', 'चमकीले और सुंदर'], ['black and dull', 'काले और फीके'], ['grey and long', 'स्लेटी और लंबे'], ['short and unattractive', 'छोटे और भद्दे']], a: 0 },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ["Why would the birds of the woods call the Raven 'King'?", "जंगल के पक्षी रेवन को 'राजा' क्यों कहेंगे?"], a: ['The Fox says that if the Raven sings as beautifully as he looks, he would be the best of all birds.', 'लोमड़ी कहती है कि अगर रेवन अपने रूप जितना सुंदर गाए, तो वह सब पक्षियों में सबसे अच्छा होगा।'] },
        { q: ["Why does the Fox address the Raven as 'Sir'?", "लोमड़ी रेवन को 'सर' क्यों कहती है?"], a: ['To flatter him and make him feel important, so he would open his beak.', 'उसकी चापलूसी करने और उसे बड़ा महसूस कराने के लिए, ताकि वह चोंच खोले।'] },
        { q: ['Why does the Raven forget that his voice is just a croak?', 'रेवन क्यों भूल जाता है कि उसकी आवाज़ बस काँव-काँव है?'], a: ["The Fox's sweet praise fills him with pride and he does not see the trick.", 'लोमड़ी की मीठी तारीफ़ से वह घमंड से भर जाता है और चाल नहीं समझ पाता।'] },
        { q: ['How does Reynard make the Raven sing?', 'रेनार्ड रेवन को कैसे गवाती है?'], a: ['He praises his looks and feathers and says the birds would call him King if he sang.', 'वह उसके रूप और पंखों की तारीफ़ करती है और कहती है कि गाने पर पक्षी उसे राजा कहेंगे।'] },
        { q: ['Why does Reynard say that pride is not wise?', 'रेनार्ड क्यों कहती है कि घमंड समझदारी नहीं है?'], a: ['Because the Raven lost his food due to his pride.', 'क्योंकि घमंड के कारण रेवन ने अपना खाना खो दिया।'] },
        { q: ['Give one reason why the teaching is quite a surprise.', 'एक कारण दो कि यह सीख आश्चर्यजनक क्यों है।'], a: ['The Raven expected praise and a title, but instead he lost his food and got a lesson from the trickster himself.', 'रेवन को तारीफ़ और उपाधि की उम्मीद थी, पर उसका खाना छिन गया और उसे चालबाज़ से ही सबक़ मिला।'] },
      ],
    },
    {
      type: 'match',
      title: ['Rhyming words from the poem: match each word with its rhyme.', 'कविता के तुकांत शब्द: हर शब्द को उसकी तुक से मिलाओ।'],
      pairs: [
        [['limb', 'limb'], ['him', 'him']],
        [['beak', 'beak'], ['seek', 'seek']],
        [['word', 'word'], ['bird', 'bird']],
        [['sing', 'sing'], ['King', 'King']],
        [['joke', 'joke'], ['croak', 'croak']],
        [['pride', 'pride'], ['eyed', 'eyed']],
        [['know', 'know'], ['glow', 'glow']],
        [['unwise', 'unwise'], ['surprise', 'surprise']],
      ],
    },
    {
      type: 'mcq',
      title: ["Alliteration: words that begin with the same sound, like 'big beak'. Pick another example from Stanza 2.", "अनुप्रास: एक ही ध्वनि से शुरू होने वाले शब्द, जैसे 'big beak'। पद 2 से दूसरा उदाहरण चुनो।"],
      items: [
        { q: ['Which is alliteration from Stanza 2?', 'पद 2 में अनुप्रास कौन-सा है?'], options: [['handsome bird', 'handsome bird'], ['Such feathers! ... sing', 'Such ... sing (s ध्वनि)'], ['woods would', 'woods would (w ध्वनि)']], a: 2 },
      ],
    },
    {
      type: 'match',
      title: ['Opposites: match each word with its opposite.', 'विलोम: हर शब्द को उसके विपरीत से मिलाओ।'],
      pairs: [
        [['perched', 'बैठा'], ['flew', 'उड़ गया']],
        [['forgot', 'भूल गया'], ['remembered', 'याद रखा']],
        [['foolish', 'मूर्ख'], ['wise', 'समझदार']],
        [['pride', 'घमंड'], ['humility', 'विनम्रता']],
        [['laughed', 'हँसा'], ['cried', 'रोया']],
        [['ignore', 'अनदेखा करना'], ['notice', 'ध्यान देना']],
        [['glow', 'चमकना'], ['dim', 'धुँधला']],
      ],
    },
    {
      type: 'tf',
      title: ['Let us listen: what did the crow do after he lost his food? True or false?', 'आओ सुनें: खाना खोने के बाद कौए ने क्या किया? सही या ग़लत?'],
      passage: [
        'Dear students, the crow felt really sad because the fox cheated him. In the quiet night, the crow thought and said to himself, "I was fooled by kind words, but I\'ve learned something important. Even if I don\'t have beautiful feathers, I\'m smart." To share his wisdom, he decided to go on a journey. He wanted to tell all the other animals to be careful with words. He told them, "Do not let pride lose what you have."',
        'प्यारे विद्यार्थियो, कौआ बहुत दुखी था क्योंकि लोमड़ी ने उसे ठग लिया था। शांत रात में कौए ने सोचा और ख़ुद से कहा, "मीठी बातों ने मुझे मूर्ख बनाया, पर मैंने एक ज़रूरी बात सीखी है। भले मेरे पंख सुंदर न हों, मैं समझदार हूँ।" अपनी सीख बाँटने के लिए वह यात्रा पर निकला। वह सब जानवरों को बातों से सावधान रहने को कहना चाहता था। उसने उनसे कहा, "घमंड के कारण अपनी चीज़ मत खोओ।"',
      ],
      items: [
        { q: ['The crow was unhappy that he lost his food.', 'कौआ खाना खोने से दुखी था।'], a: true },
        { q: ['The crow thought that his lovely feathers made him smart.', 'कौए को लगा कि उसके सुंदर पंख उसे समझदार बनाते हैं।'], a: false },
        { q: ['The crow wanted to tell his friends not to be proud.', 'कौआ दोस्तों से कहना चाहता था कि घमंड मत करो।'], a: true },
      ],
    },
    {
      type: 'task',
      title: ['Let us speak and write: narrate the poem as a story with a different ending, then write it as a conversation (the Raven only acts, as his beak is full).', 'आओ बोलें और लिखें: कविता को अलग अंत वाली कहानी की तरह सुनाओ, फिर उसे बातचीत के रूप में लिखो (रेवन सिर्फ़ इशारे करता है, क्योंकि उसकी चोंच भरी है)।'],
      items: [{ q: ['Sample conversation', 'नमूना बातचीत'], a: ["Reynard: Good morning, Mr Raven! You seem to be awake so early!\n(Mr Raven just nods his head.)\nReynard: Oh, Mr Raven, you look so handsome today. Such shiny feathers!\n(Mr Raven puffs up his chest.)\nReynard: If you sing just once, all the birds will call you King!\n(Mr Raven places the food under his claw, then opens his beak.)\nRaven: Caw! Caw! Thank you, Reynard, but my lunch stays with me!\nReynard: (sadly walks away) Hmm, this Raven is wiser than I thought.", 'रेनार्ड: सुप्रभात, मिस्टर रेवन! आज तो बड़ी जल्दी जाग गए!\n(मिस्टर रेवन बस सिर हिलाता है।)\nरेनार्ड: अरे मिस्टर रेवन, आज तो आप बहुत सुंदर लग रहे हैं। क्या चमकीले पंख हैं!\n(मिस्टर रेवन सीना फुलाता है।)\nरेनार्ड: बस एक बार गा दीजिए, सारे पक्षी आपको राजा कहेंगे!\n(मिस्टर रेवन खाना पंजे के नीचे दबाता है, फिर चोंच खोलता है।)\nरेवन: काँव! काँव! धन्यवाद रेनार्ड, पर मेरा खाना मेरे पास ही रहेगा!\nरेनार्ड: (उदास होकर चली जाती है) हम्म, यह रेवन तो मेरी सोच से ज़्यादा समझदार है।'] }],
    },
    {
      type: 'task',
      title: ['Let us explore: make stick puppets (or origami) of the Raven and the Fox and enact the poem.', 'आओ जानें: रेवन और लोमड़ी की डंडी वाली कठपुतलियाँ (या ओरिगामी) बनाओ और कविता का अभिनय करो।'],
      items: [{ q: ['Make the puppets: draw and colour a raven and a fox on card, cut them out and stick each on an ice-cream stick.', 'कठपुतलियाँ बनाओ: कार्ड पर रेवन और लोमड़ी बनाकर रंगो, काटो, और हर एक को आइसक्रीम की डंडी पर चिपकाओ।'] }],
    },
  ],
  'class6-3': [
    {
      type: 'mcq',
      title: ['Before we read', 'पढ़ने से पहले'],
      items: [
        { q: ["The word 'rescue' means to ___.", "'rescue' शब्द का अर्थ है ___।"], options: [['make fun of someone', 'किसी का मज़ाक उड़ाना'], ['save someone', 'किसी को बचाना'], ['ask someone for help', 'किसी से मदद माँगना']], a: 1 },
        { q: ['Imagine you are alone at home and face a problem. What is the best way to deal with it?', 'सोचो तुम घर पर अकेले हो और कोई समस्या आ गई। उससे निपटने का सबसे अच्छा तरीक़ा क्या है?'], options: [['Be worried about the problem and give up.', 'चिंता करके हार मान लो।'], ['Feel angry that only you have the problem.', 'ग़ुस्सा करो कि समस्या सिर्फ़ तुम्हें ही है।'], ['Think quickly about ways to solve the problem.', 'जल्दी से समस्या हल करने के तरीक़े सोचो।']], a: 2 },
      ],
    },
    {
      type: 'pick',
      title: ['Before we read: pick those who need to be rescued.', 'पढ़ने से पहले: जिन्हें बचाने की ज़रूरत है, उन्हें चुनो।'],
      options: [
        ['A man stuck in a building on fire.', 'जलती इमारत में फँसा आदमी।'],
        ['A woman buying vegetables in the market.', 'बाज़ार में सब्ज़ी ख़रीदती महिला।'],
        ['A dog who has hurt its leg.', 'पैर में चोट वाला कुत्ता।'],
        ['A tree being cut down in a forest.', 'जंगल में काटा जा रहा पेड़।'],
      ],
      answers: [0, 2, 3],
    },
    {
      type: 'mcq',
      title: ['Let us discuss: circle the odd one.', 'आओ चर्चा करें: अलग वाला चुनो।'],
      items: [
        { q: ['The characters are: husband, wife, children', 'पात्र हैं: पति, पत्नी, बच्चे'], options: [['husband', 'पति'], ['wife', 'पत्नी'], ['children', 'बच्चे']], a: 2 },
        { q: ['Who entered the house? guest, robber, Kotwal', 'घर में कौन घुसा? मेहमान, चोर, कोतवाल'], options: [['guest', 'मेहमान'], ['robber', 'चोर'], ['Kotwal', 'कोतवाल']], a: 0 },
      ],
    },
    {
      type: 'tf',
      title: ['Let us discuss: true or false?', 'आओ चर्चा करें: सही या ग़लत?'],
      items: [
        { q: ['The man tells his plan to his wife.', 'आदमी अपनी पत्नी को अपनी योजना बताता है।'], a: true },
        { q: ['The thief wants to know where they kept their jewels.', 'चोर जानना चाहता है कि उन्होंने अपने गहने कहाँ रखे हैं।'], a: false },
      ],
    },
    {
      type: 'task',
      title: ["Let us discuss: call out the name 'Rama' softly, loudly and very loudly. What do you think will happen next?", "आओ चर्चा करें: 'राम' नाम धीरे, ज़ोर से और बहुत ज़ोर से पुकारो। तुम्हें क्या लगता है आगे क्या होगा?"],
      items: [{ q: ['Rama! ... Rama! ... RAMA!', 'राम! ... राम! ... राम!'], a: ['Rama the kotwal will hear his name and come to the house and catch the thief.', 'कोतवाल राम अपना नाम सुनकर घर आएगा और चोर को पकड़ लेगा।'] }],
    },
    {
      type: 'match',
      title: ['Match the words with their meanings.', 'शब्दों को उनके अर्थ से मिलाओ।'],
      pairs: [
        [['wonder', 'आश्चर्य'], ['a feeling of surprise', 'हैरानी की भावना']],
        [['yard', 'आँगन'], ['an area outside a building', 'इमारत के बाहर की जगह']],
        [['chatter', 'बकबक'], ['talk for a long time about unimportant things', 'बेकार बातों पर देर तक बोलना']],
        [['instead', 'के बजाय'], ['in place of someone or something', 'किसी की जगह']],
        [['closely', 'ध्यान से'], ['carefully', 'सावधानी से']],
        [['perhaps', 'शायद'], ['maybe', 'हो सकता है']],
      ],
    },
    {
      type: 'qa',
      title: ['Read the lines and answer.', 'पंक्तियाँ पढ़ो और उत्तर दो।'],
      passage: [
        "Man: What's the matter? What are you looking at? Wife: Ssssh! Listen! Wife: Somebody is trying to get in. Man: I... I think he has already got in... the noise has stopped.",
        'आदमी: क्या बात है? तुम क्या देख रही हो? पत्नी: श्श्श! सुनो! पत्नी: कोई अंदर घुसने की कोशिश कर रहा है। आदमी: मुझे... मुझे लगता है वह अंदर आ चुका है... आवाज़ बंद हो गई है।',
      ],
      items: [
        { q: ['What makes the man say the first line?', 'आदमी पहली पंक्ति क्यों बोलता है?'], a: ['His wife suddenly looks worried and is staring at something.', 'उसकी पत्नी अचानक चिंतित दिखती है और किसी चीज़ को घूर रही है।'] },
        { q: ['How can you tell that the wife was listening carefully?', 'कैसे पता चलता है कि पत्नी ध्यान से सुन रही थी?'], a: ['She heard the sound of someone trying to get in and asked her husband to be quiet and listen.', 'उसने किसी के अंदर घुसने की आवाज़ सुनी और पति को चुप रहकर सुनने को कहा।'] },
      ],
    },
    {
      type: 'mcq',
      title: ['Choose the correct option.', 'सही विकल्प चुनो।'],
      items: [
        { q: ["The wife says 'Ssssh! Listen!'. What does 'Ssssh' mean here?", "पत्नी कहती है 'श्श्श! सुनो!'। यहाँ 'श्श्श' का क्या अर्थ है?"], options: [['sleep', 'सो जाओ'], ['help', 'मदद'], ['rest', 'आराम'], ['be silent', 'चुप रहो']], a: 3 },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['Give one reason why the man and his wife were not able to fall asleep.', 'एक कारण बताओ कि आदमी और उसकी पत्नी सो क्यों नहीं पाए।'], a: ['They heard a thief digging his way into their house.', 'उन्होंने एक चोर को सेंध लगाकर घर में घुसते सुना।'] },
        { q: ['What did the thief wish would happen? Did it happen?', 'चोर क्या चाहता था? क्या ऐसा हुआ?'], a: ['He wished they would talk about their money or fall asleep. It did not happen; instead he was arrested.', 'वह चाहता था कि वे अपने पैसों की बात करें या सो जाएँ। ऐसा नहीं हुआ; उल्टा वह गिरफ़्तार हो गया।'] },
        { q: ['How did the man and his wife get help from the kotwal?', 'आदमी और उसकी पत्नी को कोतवाल की मदद कैसे मिली?'], a: ["Pretending to choose a name for their child, the wife called out 'Rama' louder and louder. Rama, the kotwal, heard his name and came running.", "बच्चे का नाम चुनने का बहाना करके, पत्नी ने 'राम' को ज़ोर-ज़ोर से पुकारा। कोतवाल राम ने अपना नाम सुना और दौड़कर आ गया।"] },
        { q: ['Do you think cleverness can help us solve our problems? Why?', 'क्या चतुराई हमारी समस्याएँ हल कर सकती है? क्यों?'], a: ['Yes. If we stay calm and think quickly, we can find a smart way out, like the couple who caught the thief without fighting.', 'हाँ। अगर हम शांत रहें और जल्दी सोचें, तो समझदारी भरा रास्ता मिल जाता है, जैसे उस दंपति ने बिना लड़े चोर पकड़वा दिया।'] },
      ],
    },
    {
      type: 'match',
      title: ["Contractions: an apostrophe (') shows the missing letters. Match each contracted word with its expanded form.", "संक्षिप्त रूप: एपॉस्ट्रॉफ़ी (') छूटे अक्षर दिखाता है। हर संक्षिप्त शब्द को उसके पूरे रूप से मिलाओ।"],
      pairs: [
        [["I'm", "I'm"], ['I am', 'I am']],
        [["it's", "it's"], ['it is', 'it is']],
        [["they're", "they're"], ['they are', 'they are']],
        [["I'll", "I'll"], ['I will', 'I will']],
        [["I'd", "I'd"], ['I would / I had', 'I would / I had']],
        [["we'll", "we'll"], ['we will', 'we will']],
        [["that's", "that's"], ['that is', 'that is']],
        [["we're", "we're"], ['we are', 'we are']],
        [["don't", "don't"], ['do not', 'do not']],
        [["you'll", "you'll"], ['you will', 'you will']],
      ],
    },
    {
      type: 'mcq',
      title: ["Present progressive tense: 'I am feeling so sleepy', 'What are you looking at?'", "वर्तमान अपूर्ण काल: 'I am feeling so sleepy', 'What are you looking at?'"],
      items: [
        { q: ['These sentences refer to actions that ___.', 'ये वाक्य ऐसे कामों के बारे में हैं जो ___।'], options: [['are going on at the time of speaking', 'बोलते समय चल रहे हैं'], ['happened in the past', 'बीते समय में हुए'], ['will take place in the future', 'भविष्य में होंगे']], a: 0 },
      ],
    },
    {
      type: 'fill',
      title: ['Fill in the blanks with the present progressive form.', 'वर्तमान अपूर्ण रूप से रिक्त स्थान भरो।'],
      items: [
        { q: ['I ___ in Grade 6. [study]', 'मैं कक्षा 6 में पढ़ रहा हूँ।'], a: 'am studying', options: ['am studying', 'is studying', 'are studying'] },
        { q: ['My friend ___ a story book. [read]', 'मेरा दोस्त कहानी की किताब पढ़ रहा है।'], a: 'is reading', options: ['am reading', 'is reading', 'are reading'] },
        { q: ['We ___ a board game. [play]', 'हम बोर्ड गेम खेल रहे हैं।'], a: 'are playing', options: ['is playing', 'are playing', 'am playing'] },
        { q: ['I ___ a new language. [learn]', 'मैं नई भाषा सीख रहा हूँ।'], a: 'am learning', options: ['am learning', 'is learning', 'are learning'] },
        { q: ['The teachers ___ in the staff room. [sit]', 'शिक्षक स्टाफ़ रूम में बैठे हैं।'], a: 'are sitting', options: ['are siting', 'are sitting', 'is sitting'] },
        { q: ['My mother ___ food in the kitchen. [cook]', 'मेरी माँ रसोई में खाना बना रही हैं।'], a: 'is cooking', options: ['is cooking', 'are cooking', 'am cooking'] },
        { q: ['Govind and Anu ___ football. [play]', 'गोविंद और अनु फ़ुटबॉल खेल रहे हैं।'], a: 'are playing', options: ['is playing', 'are playing'] },
        { q: ['Pema ___ flowers. [pick]', 'पेमा फूल तोड़ रही है।'], a: 'is picking', options: ['is picking', 'are picking'] },
        { q: ['The birds ___ in the sky. [fly]', 'पक्षी आसमान में उड़ रहे हैं।'], a: 'are flying', options: ['is flying', 'are flying'] },
      ],
    },
    {
      type: 'fill',
      title: ['Adverbs tell how, when or where. Fill in suitable adverbs. (Two are extra.)', 'क्रियाविशेषण बताते हैं कैसे, कब या कहाँ। उचित क्रियाविशेषण भरो। (दो फ़ालतू हैं।)'],
      bank: ['peacefully', 'slowly', 'tirelessly', 'honestly', 'sweetly', 'brightly', 'angrily'],
      items: [
        { q: ['Once upon a time in a small forest, animals lived ___.', 'एक छोटे जंगल में जानवर शांति से रहते थे।'], a: 'peacefully' },
        { q: ['The wise old tortoise moved ___ but always won the race.', 'बूढ़ा समझदार कछुआ धीरे चलता था पर हमेशा दौड़ जीतता था।'], a: 'slowly' },
        { q: ['The ants worked ___, gathering food for the winter.', 'चींटियाँ बिना थके काम करती थीं, सर्दी के लिए खाना जमा करती थीं।'], a: 'tirelessly' },
        { q: ['The kind-hearted lion ruled the jungle ___, giving everyone a chance to speak.', 'दयालु शेर ईमानदारी से जंगल पर राज करता था, सबको बोलने का मौक़ा देता था।'], a: 'honestly' },
        { q: ['The birds sang ___, making everyone in the forest happy.', 'पक्षी मीठा गाते थे, जिससे जंगल में सब ख़ुश रहते थे।'], a: 'sweetly' },
      ],
    },
    {
      type: 'mcq',
      title: ['What does each sentence express?', 'हर वाक्य क्या व्यक्त करता है?'],
      items: [
        { q: ['"Oh, hum! What a hard day it has been!"', '"ओह! कितना कठिन दिन था!"'], options: [['tiredness', 'थकान'], ['joy', 'ख़ुशी']], a: 0 },
        { q: ['"Ah, at last, they\'ve stopped their chatter!"', '"आह, आख़िरकार उनकी बकबक बंद हुई!"'], options: [['wonder', 'आश्चर्य'], ['relief', 'राहत']], a: 1 },
        { q: ['"What should we do?" / "What should we name our child?"', '"हमें क्या करना चाहिए?" / "हम अपने बच्चे का क्या नाम रखें?"'], options: [['answers', 'उत्तर'], ['questions', 'प्रश्न']], a: 1 },
      ],
    },
    {
      type: 'mcq',
      title: ['Exclamatory (!) or interrogative (?) sentence?', 'विस्मयादिबोधक (!) या प्रश्नवाचक (?) वाक्य?'],
      items: [
        { q: ['Wow, what an intelligent man he is', 'वाह, वह कितना समझदार आदमी है'], options: [['Exclamatory: ... he is!', 'विस्मयादिबोधक: ... he is!'], ['Interrogative: ... he is?', 'प्रश्नवाचक: ... he is?']], a: 0 },
        { q: ['Oh how big the hole is', 'ओह, छेद कितना बड़ा है'], options: [['Exclamatory: Oh, how big the hole is!', 'विस्मयादिबोधक: Oh, how big the hole is!'], ['Interrogative: Oh how big the hole is?', 'प्रश्नवाचक: Oh how big the hole is?']], a: 0 },
        { q: ['Do you like to read comic books', 'क्या तुम्हें कॉमिक किताबें पढ़ना पसंद है'], options: [['Exclamatory: ... comic books!', 'विस्मयादिबोधक: ... comic books!'], ['Interrogative: ... comic books?', 'प्रश्नवाचक: ... comic books?']], a: 1 },
        { q: ['What is your favourite story', 'तुम्हारी पसंदीदा कहानी कौन-सी है'], options: [['Exclamatory: ... story!', 'विस्मयादिबोधक: ... story!'], ['Interrogative: ... story?', 'प्रश्नवाचक: ... story?']], a: 1 },
      ],
    },
    {
      type: 'fill',
      title: ["Let us listen: a security guard's announcement. Fill in one word you hear.", 'आओ सुनें: सुरक्षा गार्ड की घोषणा। सुना हुआ एक शब्द भरो।'],
      passage: [
        'Attention, all! There are reports of robbery in our locality. Please be alert and listen to the instructions carefully. Lock all doors and windows at night and also when you leave the house. Children, you must inform any suspicious activity to adults immediately. Do not talk to strangers or get anything from them. Report anything unusual. Always remember that safety is important. Dial 100 in case of emergency.',
        'सब ध्यान दें! हमारे इलाक़े में चोरी की ख़बरें हैं। कृपया सतर्क रहें और निर्देश ध्यान से सुनें। रात में और घर से निकलते समय सारे दरवाज़े और खिड़कियाँ बंद करें। बच्चो, कोई भी संदिग्ध गतिविधि तुरंत बड़ों को बताओ। अजनबियों से बात मत करो और उनसे कुछ मत लो। कुछ भी अजीब हो तो बताओ। हमेशा याद रखो कि सुरक्षा ज़रूरी है। आपात स्थिति में 100 डायल करें।',
      ],
      bank: ['robbery', 'adults', 'safety', '100'],
      items: [
        { q: ['The security guard announced that ___ has been happening in that area.', 'गार्ड ने बताया कि इलाक़े में चोरी हो रही है।'], a: 'robbery' },
        { q: ['He advised the kids to tell the ___ as soon as they find anything different.', 'उसने बच्चों से कहा कि कुछ अलग दिखे तो तुरंत बड़ों को बताएँ।'], a: 'adults' },
        { q: ['They should not forget that ___ is the main thing.', 'उन्हें नहीं भूलना चाहिए कि सुरक्षा सबसे ज़रूरी है।'], a: 'safety' },
        { q: ['He asked them to call ___ when they need immediate help.', 'तुरंत मदद के लिए 100 पर फ़ोन करने को कहा।'], a: '100' },
      ],
    },
    {
      type: 'pick',
      title: ["Let us speak: why is it important to keep our house and ourselves safe? Pick the suitable reasons, then say: I think it's important because...", "आओ बोलें: घर और ख़ुद को सुरक्षित रखना क्यों ज़रूरी है? उचित कारण चुनो, फिर बोलो: I think it's important because..."],
      options: [
        ['To be safe from injury', 'चोट से बचने के लिए'],
        ['To keep family members and pets safe', 'परिवार और पालतू जानवरों को सुरक्षित रखने के लिए'],
        ['To stop accidents from happening', 'दुर्घटनाएँ रोकने के लिए'],
        ['To make sure they visit the doctor regularly', 'नियमित डॉक्टर के पास जाने के लिए'],
        ['To stop robbery', 'चोरी रोकने के लिए'],
        ['To pay the electricity bill', 'बिजली का बिल भरने के लिए'],
        ['To save money', 'पैसे बचाने के लिए'],
      ],
      answers: [0, 1, 2, 4],
    },
    {
      type: 'task',
      title: ['Let us write: as the man, tell your neighbour what happened last night (when, where, what, how, why).', 'आओ लिखें: आदमी बनकर पड़ोसी को बताओ कि कल रात क्या हुआ (कब, कहाँ, क्या, कैसे, क्यों)।'],
      items: [{ q: ['What happened last night', 'कल रात क्या हुआ'], a: ["My wife and I were about to go to sleep last night when we heard someone digging into our house. A thief had got in! We were scared, but I had an idea. We pretended to discuss a name for our baby. My wife said she would call him Rama, softly at first, then louder, and then very loudly. Rama, our kotwal, heard his name and came running. He caught the thief. Our cleverness saved us.", 'कल रात मैं और मेरी पत्नी सोने ही वाले थे कि हमें कोई घर में सेंध लगाता सुनाई दिया। एक चोर अंदर आ गया था! हम डरे हुए थे, पर मुझे एक तरकीब सूझी। हमने बच्चे का नाम चुनने का नाटक किया। पत्नी ने कहा वह उसे राम बुलाएगी, पहले धीरे, फिर ज़ोर से, और फिर बहुत ज़ोर से। हमारे कोतवाल राम ने अपना नाम सुना और दौड़कर आया। उसने चोर को पकड़ लिया। हमारी चतुराई ने हमें बचा लिया।'] }],
    },
    {
      type: 'match',
      title: ['Let us explore: who will you call if...? (India emergency numbers)', 'आओ जानें: किसे फ़ोन करोगे अगर...? (भारत के आपातकालीन नंबर)'],
      pairs: [
        [['you see fire', 'आग दिखे'], ['Fire brigade: 101', 'फ़ायर ब्रिगेड: 101']],
        [['you see someone getting hurt', 'किसी को चोट लगे'], ['Ambulance: 108', 'एम्बुलेंस: 108']],
        [['you see someone suspicious', 'कोई संदिग्ध दिखे'], ['Police: 100 (or 112)', 'पुलिस: 100 (या 112)']],
        [['you find a lost child', 'खोया बच्चा मिले'], ['Childline: 1098', 'चाइल्डलाइन: 1098']],
        [['you see a wounded animal', 'घायल जानवर दिखे'], ['an animal helpline or a vet', 'पशु हेल्पलाइन या पशु-चिकित्सक']],
        [['you get lost', 'तुम खो जाओ'], ['your parents, or a police officer', 'माता-पिता, या पुलिसकर्मी']],
      ],
    },
  ],
  'class6-4': [
    {
      type: 'qa',
      title: ['Let us discuss (part 1)', 'आओ चर्चा करें (भाग 1)'],
      items: [
        { q: ['What things did Gajaraj and Buntee do together?', 'गजराज और बंटी ने साथ में क्या-क्या किया?'], a: ['They shared food, played, went to the pond for a bath, and Buntee rode on Gajaraj\'s back.', 'उन्होंने खाना बाँटा, खेले, तालाब में नहाने गए, और बंटी ने गजराज की पीठ पर सवारी की।'] },
        { q: ['Why did the farmer hug Buntee?', 'किसान ने बंटी को गले क्यों लगाया?'], a: ['Buntee was his lost dog; he had been looking for him and was glad to find him.', 'बंटी उसका खोया हुआ कुत्ता था; वह उसे ढूँढ रहा था और उसे पाकर ख़ुश था।'] },
        { q: ['Do you think Buntee will leave Gajaraj and go home with the farmer?', 'क्या बंटी गजराज को छोड़कर किसान के साथ घर जाएगा?'], a: ['He may go because he is tied with a rope, but he will be sad and miss his friend.', 'रस्सी से बँधा होने के कारण शायद जाएगा, पर वह दुखी होगा और अपने दोस्त को याद करेगा।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Let us discuss (part 2)', 'आओ चर्चा करें (भाग 2)'],
      items: [
        { q: ['Why did Gajaraj not eat his food?', 'गजराज ने खाना क्यों नहीं खाया?'], a: ['He was sad because he was missing his friend Buntee.', 'वह दुखी था क्योंकि उसे अपने दोस्त बंटी की याद आ रही थी।'] },
        { q: ['Who were friends at the end of the story?', 'कहानी के अंत में कौन-कौन दोस्त थे?'], a: ['Gajaraj and Buntee, and also the mahout and the farmer.', 'गजराज और बंटी, और महावत और किसान भी।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Read the extract and answer.', 'अंश पढ़ो और उत्तर दो।'],
      passage: [
        '"Are you missing your friend?" asked the farmer remembering the happy look on Buntee\'s face while sitting on the elephant\'s back. "I cannot see you go hungry," said the farmer, "If you miss your friend so much, go to him." The farmer removed the rope with which he had tied the dog.',
        '"क्या तुम्हें अपने दोस्त की याद आ रही है?" किसान ने पूछा, उसे हाथी की पीठ पर बैठे बंटी का ख़ुश चेहरा याद आया। "मैं तुम्हें भूखा नहीं देख सकता," किसान बोला, "अगर तुम्हें अपने दोस्त की इतनी याद आती है, तो उसके पास जाओ।" किसान ने वह रस्सी खोल दी जिससे उसने कुत्ते को बाँधा था।',
      ],
      items: [
        { q: ['The farmer uses the word ___ to refer to the elephant.', 'किसान हाथी के लिए ___ शब्द का प्रयोग करता है।'], a: ['"friend"', '"दोस्त" (friend)'] },
        { q: ['How did the farmer know that Buntee was hungry?', 'किसान को कैसे पता चला कि बंटी भूखा था?'], a: ['Buntee had not touched his food since he was brought home.', 'घर लाए जाने के बाद से बंटी ने खाना छुआ तक नहीं था।'] },
        { q: ['Why did the farmer remove the rope with which he had tied Buntee?', 'किसान ने बंटी की रस्सी क्यों खोली?'], a: ['He could not see Buntee go hungry and wanted him to go to his friend.', 'वह बंटी को भूखा नहीं देख सकता था और चाहता था कि वह अपने दोस्त के पास जाए।'] },
        { q: ['Complete with one word: Gajaraj : Buntee :: ___ : farmer', 'एक शब्द से पूरा करो: गजराज : बंटी :: ___ : किसान'], a: ['mahout', 'महावत (mahout)'] },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['Give two examples to show that Gajaraj was very happy to have a friend.', 'दो उदाहरण दो कि गजराज को दोस्त मिलने पर बहुत ख़ुशी थी।'], a: ['He playfully splashed water on Buntee, and gave him a ride on his back. When Buntee returned, he gave him a joyous swing.', 'उसने खेल-खेल में बंटी पर पानी उछाला, और उसे अपनी पीठ पर सवारी कराई। बंटी लौटा तो उसने उसे ख़ुशी से झुलाया।'] },
        { q: ['How did the mahout come to know that Gajaraj was sad?', 'महावत को कैसे पता चला कि गजराज दुखी था?'], a: ['Gajaraj stopped eating even his favourite food, though nothing was wrong with his tummy.', 'गजराज ने अपना पसंदीदा खाना भी छोड़ दिया, जबकि उसके पेट में कोई ख़राबी नहीं थी।'] },
        { q: ["Why do you think Buntee licked the farmer's hand?", 'बंटी ने किसान का हाथ क्यों चाटा?'], a: ['To thank him for setting him free to go to his friend.', 'उसे दोस्त के पास जाने के लिए आज़ाद करने का धन्यवाद देने के लिए।'] },
        { q: ["What was 'unlikely' about the friendship of Gajaraj and Buntee?", "गजराज और बंटी की दोस्ती में 'अनोखा' क्या था?"], a: ['A huge royal elephant and a small stray dog are very different, so we do not expect them to become best friends.', 'एक विशाल शाही हाथी और एक छोटा आवारा कुत्ता बहुत अलग हैं, इसलिए उनसे पक्की दोस्ती की उम्मीद नहीं होती।'] },
      ],
    },
    {
      type: 'match',
      title: ['Opposites (from the crossword "We are opposites!"): match each word with its opposite from the story.', 'विलोम (पहेली "We are opposites!" से): हर शब्द को कहानी के विपरीत शब्द से मिलाओ।'],
      pairs: [
        [['started', 'शुरू किया'], ['finished', 'ख़त्म किया']],
        [['appeared', 'दिखाई दिया'], ['disappeared', 'ग़ायब हुआ']],
        [['unkind', 'निर्दयी'], ['kind', 'दयालु']],
        [['sad', 'दुखी'], ['delighted', 'बहुत ख़ुश']],
        [['untouched', 'अछूता'], ['touched', 'छुआ']],
        [['hate', 'नफ़रत करना'], ['like', 'पसंद करना']],
        [['yelped', 'चीखा'], ['laughed', 'हँसा']],
        [['awake', 'जागा'], ['asleep', 'सोया']],
        [['relieved', 'राहत में'], ['worried', 'चिंतित']],
        [['missing', 'खोया'], ['found', 'मिला']],
      ],
    },
    {
      type: 'fill',
      title: ['Complete the paragraph with words from the puzzle.', 'पहेली के शब्दों से अनुच्छेद पूरा करो।'],
      bank: ['missing', 'worried', 'asleep', 'disappeared', 'laughed', 'delighted', 'found'],
      items: [
        { q: ['My pencil was ___.', 'मेरी पेंसिल खो गई थी।'], a: 'missing' },
        { q: ['I was very ___ as it was a gift from my friend.', 'मैं बहुत चिंतित था क्योंकि वह मेरे दोस्त का उपहार थी।'], a: 'worried' },
        { q: ['I woke up my elder brother who was ___ on the bed.', 'मैंने बिस्तर पर सोए बड़े भाई को जगाया।'], a: 'asleep' },
        { q: ['I told him that my pencil seemed to have ___.', 'मैंने बताया कि मेरी पेंसिल ग़ायब हो गई लगती है।'], a: 'disappeared' },
        { q: ['He ___ and told me to look under my pillow.', 'वह हँसा और तकिए के नीचे देखने को कहा।'], a: 'laughed' },
        { q: ['I was ___ ...', 'मैं बहुत ख़ुश हुआ ...'], a: 'delighted' },
        { q: ['... when I ___ the pencil there.', '... जब मुझे वहाँ पेंसिल मिली।'], a: 'found' },
      ],
    },
    {
      type: 'mcq',
      title: ['Past tenses: simple past (looked), past progressive (was looking), or past perfect (had ordered)? Sort the verbs from the story.', 'भूतकाल: सामान्य भूत (looked), अपूर्ण भूत (was looking), या पूर्ण भूत (had ordered)? कहानी की क्रियाएँ छाँटो।'],
      items: [
        { q: ['was looking', 'was looking'], options: [['simple past', 'सामान्य भूत'], ['past progressive', 'अपूर्ण भूत'], ['past perfect', 'पूर्ण भूत']], a: 1 },
        { q: ['gave', 'gave'], options: [['simple past', 'सामान्य भूत'], ['past progressive', 'अपूर्ण भूत'], ['past perfect', 'पूर्ण भूत']], a: 0 },
        { q: ['had ordered', 'had ordered'], options: [['simple past', 'सामान्य भूत'], ['past progressive', 'अपूर्ण भूत'], ['past perfect', 'पूर्ण भूत']], a: 2 },
        { q: ['was munching', 'was munching'], options: [['simple past', 'सामान्य भूत'], ['past progressive', 'अपूर्ण भूत'], ['past perfect', 'पूर्ण भूत']], a: 1 },
        { q: ['had remained', 'had remained'], options: [['simple past', 'सामान्य भूत'], ['past progressive', 'अपूर्ण भूत'], ['past perfect', 'पूर्ण भूत']], a: 2 },
        { q: ['served', 'served'], options: [['simple past', 'सामान्य भूत'], ['past progressive', 'अपूर्ण भूत'], ['past perfect', 'पूर्ण भूत']], a: 0 },
        { q: ['was missing', 'was missing'], options: [['simple past', 'सामान्य भूत'], ['past progressive', 'अपूर्ण भूत'], ['past perfect', 'पूर्ण भूत']], a: 1 },
        { q: ['had tied', 'had tied'], options: [['simple past', 'सामान्य भूत'], ['past progressive', 'अपूर्ण भूत'], ['past perfect', 'पूर्ण भूत']], a: 2 },
        { q: ['threw', 'threw'], options: [['simple past', 'सामान्य भूत'], ['past progressive', 'अपूर्ण भूत'], ['past perfect', 'पूर्ण भूत']], a: 0 },
        { q: ['had followed', 'had followed'], options: [['simple past', 'सामान्य भूत'], ['past progressive', 'अपूर्ण भूत'], ['past perfect', 'पूर्ण भूत']], a: 2 },
      ],
    },
    {
      type: 'fill',
      title: ['Select the correct form of the verb.', 'क्रिया का सही रूप चुनो।'],
      items: [
        { q: ['The farmer came back and ___ that Buntee was sad.', 'किसान वापस आया और उसने देखा कि बंटी दुखी था।'], a: 'noticed', options: ['noticed', 'was noticing', 'had noticed'] },
        { q: ['He ___ Buntee with a rope the day before.', 'उसने एक दिन पहले बंटी को रस्सी से बाँधा था।'], a: 'had tied', options: ['tied', 'was tying', 'had tied'] },
        { q: ['He ___ Buntee why he was sad.', 'उसने बंटी से पूछा कि वह दुखी क्यों है।'], a: 'asked', options: ['asked', 'was asking', 'had asked'] },
        { q: ['The farmer ___ that Buntee ...', 'किसान को लगा कि बंटी ...'], a: 'felt', options: ['felt', 'was feeling', 'had felt'] },
        { q: ['... ___ Gajaraj and set him free.', '... गजराज को याद कर रहा था, और उसे आज़ाद कर दिया।'], a: 'was missing', options: ['missed', 'was missing', 'had missed'] },
      ],
    },
    {
      type: 'fill',
      title: ["'neither ... nor' joins two negatives; 'either ... or' gives a choice between two. Fill in.", "'neither ... nor' दो नकारात्मक बातें जोड़ता है; 'either ... or' दो में से एक चुनने के लिए है। भरो।"],
      items: [
        { q: ['___ the farmer nor the mahout noticed that the two friends were in tears.', 'न किसान ने, न महावत ने देखा कि दोनों दोस्त रो रहे थे।'], a: 'Neither', options: ['Neither', 'Either'] },
        { q: ['Rohit wants to play either cricket ___ kho-kho.', 'रोहित या तो क्रिकेट या खो-खो खेलना चाहता है।'], a: 'or', options: ['or', 'nor'] },
        { q: ['Neither Shikha ___ Anuj like to tell stories.', 'न शिखा, न अनुज को कहानियाँ सुनाना पसंद है।'], a: 'nor', options: ['or', 'nor'] },
        { q: ['___ Bhavesh or Abha made this painting.', 'या तो भावेश ने या आभा ने यह चित्र बनाया।'], a: 'Either', options: ['Neither', 'Either'] },
      ],
    },
    {
      type: 'fill',
      title: ["Let us listen: another story of 'Unlikely Friends'. Fill in the exact words.", "आओ सुनें: 'अनोखे दोस्तों' की एक और कहानी। सटीक शब्द भरो।"],
      passage: [
        'Let me tell you a story of a cow and a leopard from Vadodara in Gujarat who became friends. As you know, a leopard is a wild animal and a cow is a domestic animal. Some people say that the cow took care of the leopard cub like a mother. When the cub became older, it went away from the village. It returned to meet the cow at night. The villagers were worried but they never stopped the leopard. They saw that the leopard just sat beside the cow quietly. The cow and leopard spent time by relaxing and playing with each other. The leopard did not like the villagers and stopped coming regularly. The villagers were surprised that the leopard never attacked the cow but became its friend.',
        'मैं तुम्हें गुजरात के वडोदरा की एक गाय और एक तेंदुए की कहानी सुनाता हूँ जो दोस्त बन गए। तुम जानते हो कि तेंदुआ जंगली जानवर है और गाय पालतू। कुछ लोग कहते हैं कि गाय ने तेंदुए के बच्चे की माँ की तरह देखभाल की। बड़ा होने पर वह गाँव से चला गया। वह रात में गाय से मिलने लौटता था। गाँव वाले चिंतित थे पर उन्होंने तेंदुए को कभी नहीं रोका। उन्होंने देखा कि तेंदुआ बस चुपचाप गाय के पास बैठता था। गाय और तेंदुआ आराम करते और एक-दूसरे के साथ खेलते। तेंदुए को गाँव वाले पसंद नहीं थे और उसने नियमित आना बंद कर दिया। गाँव वाले हैरान थे कि तेंदुए ने कभी गाय पर हमला नहीं किया, बल्कि उसका दोस्त बन गया।',
      ],
      bank: ['wild', 'night', 'beside', 'Villagers'],
      items: [
        { q: ['The leopard is a ___ animal but it became a friend of a cow.', 'तेंदुआ जंगली जानवर है पर गाय का दोस्त बन गया।'], a: 'wild' },
        { q: ['It came in the ___ to meet the cow.', 'वह रात में गाय से मिलने आता था।'], a: 'night' },
        { q: ['The leopard would sit ___ the cow.', 'तेंदुआ गाय के पास बैठता था।'], a: 'beside' },
        { q: ['___ were surprised at their friendship.', 'गाँव वाले उनकी दोस्ती से हैरान थे।'], a: 'Villagers' },
      ],
    },
    {
      type: 'fill',
      title: ['Listen again and put the sentences in order.', 'फिर से सुनो और वाक्यों को क्रम में रखो।'],
      bank: ['took care of the leopard cub', 'left the village', 'came to meet the cow at night', 'stopped coming regularly'],
      items: [
        { q: ['1. The cow ___ as a mother.', '1. गाय ने माँ की तरह तेंदुए के बच्चे की देखभाल की।'], a: 'took care of the leopard cub' },
        { q: ['2. The leopard ___ after growing up.', '2. बड़ा होकर तेंदुआ गाँव छोड़कर चला गया।'], a: 'left the village' },
        { q: ['3. The leopard ___.', '3. तेंदुआ रात में गाय से मिलने आता था।'], a: 'came to meet the cow at night' },
        { q: ['4. The leopard ___.', '4. तेंदुए ने नियमित आना बंद कर दिया।'], a: 'stopped coming regularly' },
      ],
    },
    {
      type: 'task',
      title: ['Let us speak and write: find your common likes and dislikes with a friend, then write six sentences using: same, different, both, but, unlike, neither... nor, either... or.', 'आओ बोलें और लिखें: दोस्त के साथ अपनी साझा पसंद-नापसंद पता करो, फिर छह वाक्य लिखो: same, different, both, but, unlike, neither... nor, either... or का प्रयोग करो।'],
      items: [{ q: ['About my friend', 'मेरे दोस्त के बारे में'], a: ['My friend Sonu and I are in the same class. Both of us like to play cricket. I like to read stories but Sonu likes to draw. Unlike me, he is very quiet. Neither Sonu nor I like spicy food. On Sundays we either fly kites or ride our bicycles.', 'मेरा दोस्त सोनू और मैं एक ही कक्षा में हैं। हम दोनों को क्रिकेट खेलना पसंद है। मुझे कहानियाँ पढ़ना पसंद है पर सोनू को चित्र बनाना। मुझसे अलग, वह बहुत शांत है। न सोनू को, न मुझे तीखा खाना पसंद है। रविवार को हम या तो पतंग उड़ाते हैं या साइकिल चलाते हैं।'] }],
    },
    {
      type: 'tf',
      title: ['Let us explore: Tarra the elephant and Bella the dog (a true story). True or false?', 'आओ जानें: हथिनी टारा और कुत्ती बेला (सच्ची कहानी)। सही या ग़लत?'],
      passage: [
        "The elephant's name is Tarra and the dog's name is Bella. Bella came inside a forest for elephants and became Tarra's friend. Tarra spent most of her time with Bella. One day, Bella had an injury so she could not walk. She was kept inside a building for three weeks. Tarra stood outside for three weeks. Finally, they met and were very happy.",
        'हथिनी का नाम टारा है और कुत्ती का नाम बेला। बेला हाथियों के एक जंगल में आई और टारा की दोस्त बन गई। टारा अपना ज़्यादातर समय बेला के साथ बिताती थी। एक दिन बेला को चोट लगी और वह चल नहीं पाई। उसे तीन हफ़्ते एक इमारत के अंदर रखा गया। टारा तीन हफ़्ते बाहर खड़ी रही। आख़िरकार वे मिले और बहुत ख़ुश हुए।',
      ],
      items: [
        { q: ['Tarra is a dog and Bella is an elephant.', 'टारा कुत्ती है और बेला हथिनी।'], a: false },
        { q: ['Tarra waited outside for three weeks while Bella was hurt.', 'बेला के घायल होने पर टारा तीन हफ़्ते बाहर इंतज़ार करती रही।'], a: true },
        { q: ["The Jataka tales are ancient Buddhist stories of life values.", 'जातक कथाएँ जीवन मूल्यों की प्राचीन बौद्ध कहानियाँ हैं।'], a: true },
      ],
    },
    {
      type: 'qa',
      title: ["Before we read: the title is 'The Unlikely Best Friends'.", "पढ़ने से पहले: शीर्षक है 'The Unlikely Best Friends'।"],
      items: [
        { q: ["What can be the meaning of 'unlikely'?", "'unlikely' का क्या अर्थ हो सकता है?"], a: ['Not expected; something we do not think will happen.', 'जिसकी उम्मीद न हो; जो होने की हम नहीं सोचते।'] },
        { q: ['Can you think of some unlikely friends?', 'क्या तुम कुछ अनोखे दोस्तों के बारे में सोच सकते हो?'], a: ['A cat and a mouse, a dog and a duck, or a very old person and a small child.', 'बिल्ली और चूहा, कुत्ता और बत्तख़, या एक बहुत बूढ़ा व्यक्ति और एक छोटा बच्चा।'] },
        { q: ['With my friend I ... / With my friend I feel ...', 'दोस्त के साथ मैं ... / दोस्त के साथ मुझे ... लगता है'], a: ['With my friend I play, read and share my tiffin. With my friend I feel happy, safe and confident.', 'दोस्त के साथ मैं खेलता हूँ, पढ़ता हूँ और टिफ़िन बाँटता हूँ। दोस्त के साथ मुझे ख़ुशी, सुरक्षा और आत्मविश्वास महसूस होता है।'] },
      ],
    },
  ],
  'class6-5': [
    {
      type: 'mcq',
      title: ['Before we read: which sentence is closest to a prayer?', 'पढ़ने से पहले: कौन-सा वाक्य प्रार्थना के सबसे क़रीब है?'],
      items: [
        { q: ['Choose the prayer.', 'प्रार्थना चुनो।'], options: [['I wish my friend brings idli in her tiffin tomorrow.', 'काश मेरी सहेली कल टिफ़िन में इडली लाए।'], ['I hope my friend and I win the race tomorrow.', 'मुझे उम्मीद है कि कल मैं और मेरा दोस्त दौड़ जीतें।'], ['May my friend get well soon.', 'मेरा दोस्त जल्दी ठीक हो जाए।']], a: 2 },
      ],
    },
    {
      type: 'task',
      title: ['Let us discuss: underline the lines you agree with, and tell your group why you like them.', 'आओ चर्चा करें: जिन पंक्तियों से तुम सहमत हो उन्हें रेखांकित करो, और समूह को बताओ कि वे क्यों पसंद हैं।'],
      items: [{ q: ['A line I like', 'मेरी पसंद की पंक्ति'], a: ['"But love my friends the way they are." I like it because a true friend does not try to change us.', '"पर अपने दोस्तों को वैसे ही प्यार करूँ जैसे वे हैं।" मुझे यह पसंद है क्योंकि सच्चा दोस्त हमें बदलने की कोशिश नहीं करता।'] }],
    },
    {
      type: 'fill',
      title: ['Complete the summary of the poem by choosing the correct words.', 'सही शब्द चुनकर कविता का सारांश पूरा करो।'],
      items: [
        { q: ['The poet says a ___ friendship and friends.', 'कवयित्री दोस्ती और दोस्तों के लिए प्रार्थना करती है।'], a: 'prayer for', options: ['prayer for', 'speech on'] },
        { q: ['Friendship should always be an important part of her ___.', 'दोस्ती हमेशा उसके पूरे जीवन का ज़रूरी हिस्सा रहे।'], a: 'complete life', options: ['complete life', 'school days'] },
        { q: ['Her friendship makes her feel ___.', 'दोस्ती उसे ख़ास महसूस कराती है।'], a: 'special', options: ['brave', 'special'] },
        { q: ['She wants to ___ the wishes of her friends.', 'वह दोस्तों की इच्छाएँ सुनना चाहती है।'], a: 'listen to', options: ['clap for', 'listen to'] },
        { q: ["As a good friend, she ___ that she is able to make her friends' wishes come true.", 'एक अच्छी दोस्त के रूप में वह प्रार्थना करती है कि दोस्तों की इच्छाएँ पूरी कर सके।'], a: 'prays', options: ['prays', 'imagines'] },
        { q: ['She wants her ___ to understand what a true friend is.', 'वह चाहती है कि उसका दिल समझे कि सच्चा दोस्त क्या होता है।'], a: 'heart', options: ['heart', 'mind'] },
        { q: ['She prays that she loves her friends ___.', 'वह प्रार्थना करती है कि दोस्तों को वैसे ही प्यार करे जैसे वे हैं।'], a: 'as they are', options: ['as they are', 'when they are happy'] },
        { q: ['She tells us that ___ friends accept their friends for all their qualities.', 'वह बताती है कि सच्चे दोस्त अपने दोस्तों को उनके सभी गुणों के साथ स्वीकार करते हैं।'], a: 'true', options: ['true', 'correct'] },
      ],
    },
    {
      type: 'qa',
      title: ['Answer in one word only.', 'सिर्फ़ एक शब्द में उत्तर दो।'],
      items: [
        { q: ['How does the poet feel about special friends?', 'कवयित्री ख़ास दोस्तों के बारे में कैसा महसूस करती है?'], a: ['blessed', 'धन्य (blessed)'] },
        { q: ['What does the poet use to realise what friends can be?', 'दोस्त क्या हो सकते हैं, यह समझने के लिए कवयित्री किसका उपयोग करती है?'], a: ['heart', 'दिल (heart)'] },
      ],
    },
    {
      type: 'mcq',
      title: ['Read the lines and choose.', 'पंक्तियाँ पढ़ो और चुनो।'],
      passage: [
        'I want to do much more than share / The hopes and plans of friends who care; / I\'ll try all that a friend can do / To make their wishes come true.',
        'मैं सिर्फ़ बाँटने से कहीं ज़्यादा करना चाहती हूँ / परवाह करने वाले दोस्तों की उम्मीदें और योजनाएँ; / मैं वह सब करूँगी जो एक दोस्त कर सकता है / ताकि उनकी इच्छाएँ पूरी हों।',
      ],
      items: [
        { q: ['These lines tell us that the speaker is ___.', 'ये पंक्तियाँ बताती हैं कि वक्ता ___ है।'], options: [['clever', 'चतुर'], ['caring', 'परवाह करने वाली'], ['curious', 'जिज्ञासु'], ['calm', 'शांत']], a: 1 },
        { q: ["How will the speaker make her friends' wishes come true?", 'वक्ता दोस्तों की इच्छाएँ कैसे पूरी करेगी?'], options: [['by trying hard', 'पूरी कोशिश करके'], ['by working a lot', 'बहुत काम करके']], a: 0 },
      ],
    },
    {
      type: 'fill',
      title: ['Fill in the blank with a suitable word.', 'उचित शब्द से रिक्त स्थान भरो।'],
      bank: ['happy', 'sad', 'angry'],
      items: [
        { q: ['My friends will feel ___ if their wishes come true.', 'अगर इच्छाएँ पूरी हों तो मेरे दोस्त ख़ुश होंगे।'], a: 'happy' },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['Give one reason why we can say that this poem is a prayer.', 'एक कारण दो कि यह कविता प्रार्थना क्यों है।'], a: ['It begins with "May..." and the poet asks to be a good friend, the way we ask God in a prayer.', 'यह "May..." (ऐसा हो...) से शुरू होती है और कवयित्री अच्छी दोस्त बनने की कामना करती है, जैसे हम प्रार्थना में भगवान से माँगते हैं।'] },
        { q: ["Why does the poet 'want to do more' for her friends?", "कवयित्री दोस्तों के लिए 'और ज़्यादा' क्यों करना चाहती है?"], a: ['Her friends are very important to her and she feels blessed, so she wants to help make their wishes come true, not just listen.', 'दोस्त उसके लिए बहुत ज़रूरी हैं और वह धन्य महसूस करती है, इसलिए वह सिर्फ़ सुनना नहीं, उनकी इच्छाएँ पूरी करने में मदद करना चाहती है।'] },
        { q: ["Does the speaker know about her friends' wishes? How can we say so?", 'क्या वक्ता को दोस्तों की इच्छाएँ पता हैं? कैसे कह सकते हैं?'], a: ['Yes. Her friends share their hopes and plans with her, so she knows them.', 'हाँ। दोस्त उससे अपनी उम्मीदें और योजनाएँ बाँटते हैं, इसलिए उसे पता है।'] },
        { q: ['Do you also pray for your friend? What do you wish for?', 'क्या तुम भी अपने दोस्त के लिए प्रार्थना करते हो? क्या कामना करते हो?'], a: ['I pray that my friend stays healthy and happy, and that we stay friends forever.', 'मैं प्रार्थना करता हूँ कि मेरा दोस्त स्वस्थ और ख़ुश रहे, और हम हमेशा दोस्त रहें।'] },
      ],
    },
    {
      type: 'pick',
      title: ["'With special friends I feel I'm blessed.' Pick the words similar in meaning to 'blessed'.", "'With special friends I feel I'm blessed.' 'blessed' से मिलते-जुलते अर्थ वाले शब्द चुनो।"],
      options: [['excited', 'उत्साहित'], ['grateful', 'आभारी'], ['understood', 'समझा गया'], ['thankful', 'धन्यवादी'], ['relaxed', 'तनावमुक्त']],
      answers: [1, 3],
    },
    {
      type: 'fill',
      title: ['Qualities of good friends (loyal, helpful, kind, caring, honest): fill in the blanks.', 'अच्छे दोस्तों के गुण (loyal, helpful, kind, caring, honest): रिक्त स्थान भरो।'],
      bank: ['kind', 'caring', 'loyal', 'honest', 'helpful'],
      items: [
        { q: ['My friend is always ___ to me even when I make a mistake.', 'मेरी ग़लती पर भी मेरा दोस्त मुझसे दयालु रहता है।'], a: 'kind' },
        { q: ['My friend shares things with me. She is very ___.', 'मेरी सहेली मेरे साथ चीज़ें बाँटती है। वह बहुत परवाह करती है।'], a: 'caring' },
        { q: ['My friend is ___ because he always supports me.', 'मेरा दोस्त वफ़ादार है क्योंकि वह हमेशा मेरा साथ देता है।'], a: 'loyal' },
        { q: ['My friend never lies. She is an ___ person.', 'मेरी सहेली कभी झूठ नहीं बोलती। वह ईमानदार है।'], a: 'honest' },
        { q: ['My friend and I believe in being ___ to each other.', 'मैं और मेरा दोस्त एक-दूसरे की मदद करने में विश्वास करते हैं।'], a: 'helpful' },
      ],
    },
    {
      type: 'pick',
      title: ['Let us listen: outdoor activities of Ajay and Dhiraj. Pick the activities they do.', 'आओ सुनें: अजय और धीरज की बाहरी गतिविधियाँ। वे जो करते हैं वे चुनो।'],
      passage: [
        'Hello! Let me tell you what outdoor activities Ajay and Dhiraj enjoy doing. Some days they like playing at the swings in the park. Ajay enjoys slides the most. Dhiraj likes nature, so both take walks in the nearby park, listen to birds and look at the trees. On Saturdays, both go cycling around the neighbourhood. What both truly enjoy is eating ice-cream together. Sometimes they also purchase a comic book, sit on a park bench and read together. They are truly best friends.',
        'नमस्ते! मैं तुम्हें बताता हूँ कि अजय और धीरज को कौन-सी बाहरी गतिविधियाँ पसंद हैं। कुछ दिन वे पार्क में झूले झूलते हैं। अजय को फिसलपट्टी सबसे ज़्यादा पसंद है। धीरज को प्रकृति पसंद है, इसलिए दोनों पास के पार्क में सैर करते हैं, चिड़ियों को सुनते हैं और पेड़ देखते हैं। शनिवार को दोनों मोहल्ले में साइकिल चलाते हैं। दोनों को सबसे ज़्यादा साथ में आइसक्रीम खाना पसंद है। कभी-कभी वे कॉमिक किताब ख़रीदकर पार्क की बेंच पर बैठकर साथ पढ़ते हैं। वे सच में पक्के दोस्त हैं।',
      ],
      options: [['playing on swings and slides', 'झूले और फिसलपट्टी'], ['swimming in a pool', 'पूल में तैरना'], ['walking and listening to birds', 'सैर करना और चिड़ियाँ सुनना'], ['cycling', 'साइकिल चलाना'], ['eating ice-cream', 'आइसक्रीम खाना'], ['flying kites', 'पतंग उड़ाना'], ['reading a comic book on a bench', 'बेंच पर कॉमिक पढ़ना']],
      answers: [0, 2, 3, 4, 6],
    },
    {
      type: 'qa',
      title: ['Answer in one or two words.', 'एक या दो शब्दों में उत्तर दो।'],
      items: [
        { q: ['What do the two friends purchase and use on the park bench?', 'दोनों दोस्त क्या ख़रीदकर पार्क की बेंच पर उपयोग करते हैं?'], a: ['a comic book', 'एक कॉमिक किताब'] },
      ],
    },
    {
      type: 'task',
      title: ['Let us speak: in pairs, act as friends: (1) planning a walk in the park, (2) sharing tiffins at school. Greet, plan, share and thank each other.', 'आओ बोलें: जोड़ी में दोस्त बनकर बात करो: (1) पार्क में सैर की योजना, (2) स्कूल में टिफ़िन बाँटना। अभिवादन करो, योजना बनाओ, बाँटो और धन्यवाद दो।'],
      items: [{ q: ['Sharing tiffins', 'टिफ़िन बाँटना'], a: ['A: Hi Riya! I have brought aloo paratha today. What have you brought?\nB: Hello! I have poha. Shall we share?\nA: Yes! Sharing makes lunch more fun.\nB: Your paratha is delicious! What else do you like?\nA: I love idli too. Thank you for sharing your poha!', 'A: हाय रिया! आज मैं आलू पराठा लाई हूँ। तुम क्या लाई हो?\nB: नमस्ते! मेरे पास पोहा है। बाँटें?\nA: हाँ! बाँटने से खाना और मज़ेदार होता है।\nB: तुम्हारा पराठा बहुत स्वादिष्ट है! तुम्हें और क्या पसंद है?\nA: मुझे इडली भी पसंद है। अपना पोहा बाँटने के लिए धन्यवाद!'] }],
    },
    {
      type: 'task',
      title: ['Let us write: how did your friendship start? (When? Where? How?) Write about 80 words and give it a title.', 'आओ लिखें: तुम्हारी दोस्ती कैसे शुरू हुई? (कब? कहाँ? कैसे?) लगभग 80 शब्द लिखो और शीर्षक दो।'],
      items: [{ q: ['A Friend on the First Day', 'पहले दिन मिला दोस्त'], a: ['I met my best friend Aman on my first day at a new school in Class 3. I was sitting alone and feeling nervous. During lunch, I found that I had forgotten my tiffin. Aman saw me and shared his sandwiches with me. He then showed me around the school and introduced me to his friends. From that day, we sit together, play together and help each other with homework. A small act of kindness began a big friendship.', 'मैं अपने पक्के दोस्त अमन से कक्षा 3 में नए स्कूल के पहले दिन मिला। मैं अकेला बैठा था और घबराया हुआ था। दोपहर के खाने में मैंने देखा कि मैं टिफ़िन भूल गया हूँ। अमन ने मुझे देखा और अपने सैंडविच बाँटे। फिर उसने मुझे स्कूल घुमाया और अपने दोस्तों से मिलवाया। उस दिन से हम साथ बैठते हैं, साथ खेलते हैं और होमवर्क में एक-दूसरे की मदद करते हैं। दयालुता के एक छोटे से काम से बड़ी दोस्ती शुरू हुई।'] }],
    },
    {
      type: 'qa',
      title: ['Let us explore: what do these quotations on friendship mean?', 'आओ जानें: दोस्ती पर इन कथनों का क्या अर्थ है?'],
      items: [
        { q: ['"A friend in need is a friend indeed."', '"ज़रूरत में काम आने वाला ही सच्चा दोस्त है।"'], a: ['A true friend is one who helps you when you are in trouble.', 'सच्चा दोस्त वह है जो मुश्किल में तुम्हारी मदद करे।'] },
        { q: ['"My best friend is the one who brings out the best in me."', '"मेरा सबसे अच्छा दोस्त वह है जो मुझमें सबसे अच्छा बाहर लाता है।"'], a: ['A best friend encourages you to become a better person.', 'सबसे अच्छा दोस्त तुम्हें बेहतर इंसान बनने के लिए प्रेरित करता है।'] },
      ],
    },
  ],
  'class6-6': [
    {
      type: 'qa',
      title: ['Let us discuss (part 1)', 'आओ चर्चा करें (भाग 1)'],
      items: [
        { q: ['Who lived in Jagdalpur?', 'जगदलपुर में कौन रहता था?'], a: ["Sachin's Dadi and Dada, his cousin Rahul and Chachi, and his friend Satyam.", 'सचिन के दादी-दादा, चचेरा भाई राहुल और चाची, और उसका दोस्त सत्यम।'] },
        { q: ['By whom is this diary written? When does he usually write his diary?', 'यह डायरी किसने लिखी है? वह आमतौर पर डायरी कब लिखता है?'], a: ['Sachin writes it, usually at night before going to sleep.', 'सचिन लिखता है, आमतौर पर रात को सोने से पहले।'] },
        { q: ['Who is Moti?', 'मोती कौन है?'], a: ["Moti is Satyam's dog.", 'मोती सत्यम का कुत्ता है।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Let us discuss: put the events in the proper order.', 'आओ चर्चा करें: घटनाओं को सही क्रम में रखो।'],
      bank: ['hugged Satyam', 'sat on a swing', 'sniffed at his feet', "stepped on Moti's tail", 'pushed Sachin', 'did not speak to Dadi'],
      items: [
        { q: ['1. Sachin ___.', '1. सचिन ने सत्यम को गले लगाया।'], a: 'hugged Satyam' },
        { q: ['2. Sachin and Satyam ___.', '2. सचिन और सत्यम झूले पर बैठे।'], a: 'sat on a swing' },
        { q: ['3. A dog ___.', '3. एक कुत्ते ने उसके पैर सूँघे।'], a: 'sniffed at his feet' },
        { q: ['4. Sachin ___.', '4. सचिन ने मोती की पूँछ पर पैर रख दिया।'], a: "stepped on Moti's tail" },
        { q: ['5. Satyam ___.', '5. सत्यम ने सचिन को धक्का दिया।'], a: 'pushed Sachin' },
        { q: ['6. Sachin left and ___.', '6. सचिन चला गया और दादी से बात नहीं की।'], a: 'did not speak to Dadi' },
      ],
    },
    {
      type: 'qa',
      title: ['Let us discuss (part 2)', 'आओ चर्चा करें (भाग 2)'],
      items: [
        { q: ['What was cool and refreshing?', 'क्या ठंडा और ताज़गी भरा था?'], a: ['Playing under the waterfall at Tirathgarh.', 'तीरथगढ़ के झरने के नीचे खेलना।'] },
        { q: ['What were the words which could not be erased?', 'कौन-से शब्द मिटाए नहीं जा सकते थे?'], a: ['"My friend saved my life." (engraved on a rock)', '"मेरे दोस्त ने मेरी जान बचाई।" (पत्थर पर खुदे हुए)'] },
        { q: ["Where do you write about your friends' unpleasant words?", 'दोस्तों की बुरी बातें कहाँ लिखते हैं?'], a: ['On the sand, so that they get erased and forgotten.', 'रेत पर, ताकि वे मिट जाएँ और भूल जाएँ।'] },
      ],
    },
    {
      type: 'match',
      title: ['Find the opposites from the passage.', 'अनुच्छेद से विलोम शब्द ढूँढो।'],
      pairs: [
        [['pulled out', 'बाहर निकाला'], ['fell into', 'अंदर गिरा']],
        [['forget', 'भूलना'], ['remember', 'याद रखना']],
        [['enemy', 'दुश्मन'], ['friend', 'दोस्त']],
      ],
    },
    {
      type: 'mcq',
      title: ['Read the lines and answer.', 'पंक्तियाँ पढ़ो और उत्तर दो।'],
      passage: [
        'We sat talking on the swing under the mango tree. Suddenly a dog came and sniffed my feet. In fright I stepped on the dog\'s tail and it ran away crying. I turned to Satyam. He pushed me angrily and yelled, "Sachin! Why did you step on Moti?"',
        'हम आम के पेड़ के नीचे झूले पर बैठे बातें कर रहे थे। अचानक एक कुत्ता आया और मेरे पैर सूँघने लगा। डर के मारे मैंने कुत्ते की पूँछ पर पैर रख दिया और वह रोता हुआ भाग गया। मैं सत्यम की ओर मुड़ा। उसने मुझे ग़ुस्से से धक्का दिया और चिल्लाया, "सचिन! तुमने मोती पर पैर क्यों रखा?"',
      ],
      items: [
        { q: ['The swing was on a ___.', 'झूला ___ पर था।'], options: [['wooden bar', 'लकड़ी की छड़'], ['mango tree', 'आम का पेड़'], ['iron pole', 'लोहे का खंभा']], a: 1 },
      ],
    },
    {
      type: 'qa',
      title: ['Answer from the lines.', 'पंक्तियों से उत्तर दो।'],
      items: [
        { q: ['Name the animal, tree and parts of the body mentioned here.', 'यहाँ बताए गए जानवर, पेड़ और शरीर के अंगों के नाम लिखो।'], a: ['Animal: dog (Moti); tree: mango tree; parts of the body: feet, tail.', 'जानवर: कुत्ता (मोती); पेड़: आम का पेड़; शरीर के अंग: पैर, पूँछ।'] },
        { q: ['Find two prepositions in the passage.', 'अनुच्छेद में दो पूर्वसर्ग (prepositions) ढूँढो।'], a: ['on (the swing), under (the mango tree), to (Satyam)', 'on (the swing), under (the mango tree), to (Satyam)'] },
      ],
    },
    {
      type: 'match',
      title: ['Suffixes: join each root word with a suffix to make a new word.', 'प्रत्यय: हर मूल शब्द में प्रत्यय जोड़कर नया शब्द बनाओ।'],
      pairs: [
        [['magic + -al', 'magic + -al'], ['magical', 'magical (जादुई)']],
        [['care + -ful', 'care + -ful'], ['careful', 'careful (सावधान)']],
        [['celebrate + -tion', 'celebrate + -tion'], ['celebration', 'celebration (उत्सव)']],
        [['laugh + -ing', 'laugh + -ing'], ['laughing', 'laughing (हँसता हुआ)']],
        [['wonder + -ful', 'wonder + -ful'], ['wonderful', 'wonderful (अद्भुत)']],
        [['help + -ed', 'help + -ed'], ['helped', 'helped (मदद की)']],
        [['friend + -ship', 'friend + -ship'], ['friendship', 'friendship (दोस्ती)']],
        [['courage + -ous', 'courage + -ous'], ['courageous', 'courageous (साहसी)']],
      ],
    },
    {
      type: 'fill',
      title: ['Adjectives describe a person or thing. Choose a word that usually describes each animal or bird.', 'विशेषण किसी व्यक्ति या चीज़ का गुण बताते हैं। हर जानवर या पक्षी के लिए आम तौर पर प्रयोग होने वाला शब्द चुनो।'],
      bank: ['proud', 'cunning', 'wise', 'clever', 'naughty'],
      items: [
        { q: ['a ___ peacock', 'घमंडी मोर'], a: 'proud' },
        { q: ['a ___ fox', 'धूर्त लोमड़ी'], a: 'cunning' },
        { q: ['a ___ owl', 'समझदार उल्लू'], a: 'wise' },
        { q: ['a ___ crow', 'चतुर कौआ'], a: 'clever' },
        { q: ['a ___ monkey', 'नटखट बंदर'], a: 'naughty' },
      ],
    },
    {
      type: 'match',
      title: ['Match each adjective with a suitable noun.', 'हर विशेषण को उचित संज्ञा से मिलाओ।'],
      pairs: [
        [['brave', 'बहादुर'], ['soldier', 'सैनिक']],
        [['clever', 'चतुर'], ['plan', 'योजना']],
        [['tasty', 'स्वादिष्ट'], ['peanuts', 'मूँगफली']],
        [['heavy', 'भारी'], ['rain', 'बारिश']],
        [['slight', 'हल्की'], ['cold', 'सर्दी-ज़ुकाम']],
        [['true', 'सच्चे'], ['friends', 'दोस्त']],
      ],
    },
    {
      type: 'fill',
      title: ['Complete the paragraph with suitable adjective-noun pairs.', 'उचित विशेषण-संज्ञा जोड़ों से अनुच्छेद पूरा करो।'],
      bank: ['happy boy', 'old book', 'amazing stories', 'colourful creatures', 'old castles', 'fantastic adventures', 'magical adventures'],
      items: [
        { q: ['Once upon a time in a little village, a ___ named Abhishek ...', 'एक छोटे गाँव में अभिषेक नाम का एक ख़ुश लड़का ...'], a: 'happy boy' },
        { q: ['... found an ___ in the attic.', '... अटारी में एक पुरानी किताब मिली।'], a: 'old book' },
        { q: ['He read ___ about fairy lands, ...', 'उसने परियों के देश की अद्भुत कहानियाँ पढ़ीं, ...'], a: 'amazing stories' },
        { q: ['... ___ and ...', '... रंग-बिरंगे जीव और ...'], a: 'colourful creatures' },
        { q: ['... ___.', '... पुराने महल।'], a: 'old castles' },
        { q: ["Abhishek's eyes got big as he imagined these ___.", 'इन शानदार कारनामों की कल्पना करके अभिषेक की आँखें बड़ी हो गईं।'], a: 'fantastic adventures' },
        { q: ['They started to have their own ___ when they played together.', 'साथ खेलते हुए वे अपने जादुई कारनामे करने लगे।'], a: 'magical adventures' },
      ],
    },
    {
      type: 'fill',
      title: ['Let us listen: Manu talks about her friend Monika. Fill in the words you hear.', 'आओ सुनें: मनु अपनी सहेली मोनिका के बारे में बताती है। सुने हुए शब्द भरो।'],
      passage: [
        'When I first joined this new school, things were very difficult. There was Monika. She was a supportive friend who guided me, introduced me to others and even shared her notes. That made me comfortable in the school. Since then, Monika and I have been together through difficult times and happy times. She is the kind of friend who is always there for you. I\'m really thankful for her, and how her help and support turned into a really good friendship.',
        'जब मैं पहली बार इस नए स्कूल में आई, तो सब बहुत कठिन था। तब मोनिका थी। वह मददगार सहेली थी जिसने मुझे राह दिखाई, दूसरों से मिलवाया और अपने नोट्स भी बाँटे। इससे मैं स्कूल में सहज हो गई। तब से मोनिका और मैं कठिन और ख़ुशी के समय में साथ रहे हैं। वह ऐसी सहेली है जो हमेशा साथ रहती है। मैं उसकी बहुत आभारी हूँ, और कैसे उसकी मदद और साथ एक बहुत अच्छी दोस्ती में बदल गया।',
      ],
      bank: ['difficult', 'guided', 'happy', 'thankful'],
      items: [
        { q: ['Manu found things very ___ when she took admission in the school.', 'स्कूल में दाख़िला लेने पर मनु को सब बहुत कठिन लगा।'], a: 'difficult' },
        { q: ['Manu was ___ and helped by Monika in many ways.', 'मोनिका ने मनु को कई तरह से राह दिखाई और मदद की।'], a: 'guided' },
        { q: ['So, it was not so ___ for the new girl to adjust in the school.', 'इसलिए नई लड़की को स्कूल में घुलना-मिलना उतना कठिन नहीं रहा।'], a: 'difficult' },
        { q: ['Both friends experienced difficult and ___ moments together.', 'दोनों सहेलियों ने साथ में कठिन और ख़ुशी के पल बिताए।'], a: 'happy' },
        { q: ['Manu is ___ to Monika for making her life easy.', 'मनु अपना जीवन आसान बनाने के लिए मोनिका की आभारी है।'], a: 'thankful' },
      ],
    },
    {
      type: 'task',
      title: ['Let us speak: choose four qualities you want in a friend (loving, honest, kind, caring, loyal, polite, respectful, team-worker, understanding) and give reasons. Use: I feel my friend should be ... because ...', 'आओ बोलें: दोस्त में चाहिए चार गुण चुनो (loving, honest, kind, caring, loyal, polite, respectful, team-worker, understanding) और कारण दो। प्रयोग करो: I feel my friend should be ... because ...'],
      items: [{ q: ['Sample', 'नमूना'], a: ['I feel my friend should be honest because I can trust him. I think the quality I want in my friend is being caring; the reason is that he will help me when I am sad. I believe my friend should be loyal, in order to stand by me always. If my friend is understanding, then we will never fight for long.', 'मुझे लगता है मेरा दोस्त ईमानदार होना चाहिए क्योंकि मैं उस पर भरोसा कर सकूँ। मैं चाहता हूँ कि मेरा दोस्त परवाह करने वाला हो; कारण यह है कि दुखी होने पर वह मेरी मदद करेगा। मेरा मानना है कि दोस्त वफ़ादार होना चाहिए, ताकि हमेशा साथ रहे। अगर दोस्त समझदार हो, तो हम कभी ज़्यादा देर नहीं लड़ेंगे।'] }],
    },
    {
      type: 'fill',
      title: ["Let us write: complete Mario's message to Guneet with the correct words.", 'आओ लिखें: सही शब्दों से गुनीत को मारियो का संदेश पूरा करो।'],
      items: [
        { q: ['Dear Guneet, I am ___ God to have you ...', 'प्रिय गुनीत, मैं भगवान का आभारी हूँ कि तुम ...'], a: 'thankful to', options: ['thankful to', 'requesting'] },
        { q: ['... as a ___ friend for life.', '... जीवन भर के सच्चे दोस्त हो।'], a: 'real', options: ['lucky', 'real'] },
        { q: ['When everyone was ___ me, ...', 'जब सब मुझ पर हँस रहे थे, ...'], a: 'laughing at', options: ['laughing at', 'talking to'] },
        { q: ['... Deepa, Asma and you showed me that you ___ me.', '... दीपा, अस्मा और तुमने दिखाया कि तुम्हें मेरी परवाह है।'], a: 'care for', options: ['will save', 'care for'] },
        { q: ['You are indeed a ___ in my life. Best wishes, Mario', 'तुम सच में मेरे जीवन का वरदान हो। शुभकामनाएँ, मारियो'], a: 'blessing', options: ['blessing', 'loving'] },
      ],
    },
    {
      type: 'task',
      title: ['Write your own message to your best friend, and an acrostic poem on FRIENDS.', 'अपने सबसे अच्छे दोस्त को अपना संदेश लिखो, और FRIENDS पर एक एक्रोस्टिक कविता।'],
      items: [
        { q: ['Message', 'संदेश'], a: ['Dear Riya,\nI feel lucky to have you as my friend. You always listen to me and help me with my studies. I pray that we stay friends forever.\nBest wishes,\nAnu', 'प्रिय रिया,\nमैं ख़ुशक़िस्मत हूँ कि तुम मेरी सहेली हो। तुम हमेशा मेरी बात सुनती हो और पढ़ाई में मदद करती हो। मैं प्रार्थना करती हूँ कि हम हमेशा सहेलियाँ रहें।\nशुभकामनाएँ,\nअनु'] },
        { q: ['Acrostic: FRIENDS', 'एक्रोस्टिक: FRIENDS'], a: ['Faithful and fun\nReady to help\nIn good times and bad\nEver so kind\nNever unfair\nDear to my heart\nSharing everything', 'वफ़ादार और मज़ेदार\nमदद को तैयार\nअच्छे-बुरे समय में साथ\nहमेशा दयालु\nकभी अन्याय नहीं\nदिल के क़रीब\nसब कुछ बाँटने वाले'] },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['At what time of the day is the diary written here and by whom?', 'डायरी दिन के किस समय और किसने लिखी है?'], a: ['At night, before sleeping, by Sachin.', 'रात को सोने से पहले, सचिन ने।'] },
        { q: ['Of the two friends, who had a pet?', 'दोनों दोस्तों में से किसके पास पालतू जानवर था?'], a: ['Satyam; Moti was his dog.', 'सत्यम के पास; मोती उसका कुत्ता था।'] },
        { q: ['Do you agree with what Satyam did? Give your reasons.', 'क्या तुम सत्यम के काम से सहमत हो? कारण दो।'], a: ['No, he should not have pushed Sachin, because Sachin stepped on Moti by mistake out of fright. But Satyam later made up and even saved his life.', 'नहीं, उसे सचिन को धक्का नहीं देना चाहिए था, क्योंकि सचिन ने डर से ग़लती से मोती पर पैर रखा था। पर बाद में सत्यम ने सुलह की और उसकी जान भी बचाई।'] },
        { q: ['What did Sachin write on the sand and why?', 'सचिन ने रेत पर क्या लिखा और क्यों?'], a: ['"My friend pushed me angrily." He wrote it on the sand so that it would be erased and forgotten.', '"मेरे दोस्त ने मुझे ग़ुस्से से धक्का दिया।" उसने रेत पर लिखा ताकि वह मिट जाए और भूल जाए।'] },
      ],
    },
    {
      type: 'mcq',
      title: ['Which words should be engraved and which should be erased?', 'कौन-से शब्द खोदकर रखने चाहिए और कौन-से मिटा देने चाहिए?'],
      items: [
        { q: ['Words of praise', 'तारीफ़ के शब्द'], options: [['to be engraved', 'खोदकर रखें'], ['to be erased', 'मिटा दें']], a: 0 },
        { q: ['Hurtful words', 'चोट पहुँचाने वाले शब्द'], options: [['to be engraved', 'खोदकर रखें'], ['to be erased', 'मिटा दें']], a: 1 },
        { q: ['Abusive words', 'गाली वाले शब्द'], options: [['to be engraved', 'खोदकर रखें'], ['to be erased', 'मिटा दें']], a: 1 },
        { q: ['Glorifying words', 'गौरव बढ़ाने वाले शब्द'], options: [['to be engraved', 'खोदकर रखें'], ['to be erased', 'मिटा दें']], a: 0 },
        { q: ['Encouraging words', 'हौसला बढ़ाने वाले शब्द'], options: [['to be engraved', 'खोदकर रखें'], ['to be erased', 'मिटा दें']], a: 0 },
        { q: ['Teasing words', 'चिढ़ाने वाले शब्द'], options: [['to be engraved', 'खोदकर रखें'], ['to be erased', 'मिटा दें']], a: 1 },
      ],
    },
    {
      type: 'match',
      title: ['Divide each word into its root word and suffix.', 'हर शब्द को मूल शब्द और प्रत्यय में बाँटो।'],
      pairs: [
        [['informed', 'informed'], ['inform + ed', 'inform + ed']],
        [['yelling', 'yelling'], ['yell + ing', 'yell + ing']],
        [['suddenly', 'suddenly'], ['sudden + ly', 'sudden + ly']],
        [['forgiveness', 'forgiveness'], ['forgive + ness', 'forgive + ness']],
        [['pointed', 'pointed'], ['point + ed', 'point + ed']],
        [['annoyed', 'annoyed'], ['annoy + ed', 'annoy + ed']],
      ],
    },
  ],
  'class6-7': [
    {
      type: 'mcq',
      title: ['Let us discuss: who said it?', 'आओ चर्चा करें: यह किसने कहा?'],
      items: [
        { q: ['"I am the king of the forest."', '"मैं जंगल का राजा हूँ।"'], options: [['the boy', 'लड़का'], ['the tree', 'पेड़']], a: 0 },
        { q: ['"Sell them and you will have more than enough money."', '"इन्हें बेचो, तुम्हारे पास ज़रूरत से ज़्यादा पैसा होगा।"'], options: [['the boy', 'लड़का'], ['the tree', 'पेड़']], a: 1 },
      ],
    },
    {
      type: 'qa',
      title: ['Let us discuss', 'आओ चर्चा करें'],
      items: [
        { q: ['Why did the boy need money?', 'लड़के को पैसे क्यों चाहिए थे?'], a: ["He couldn't marry without money.", 'बिना पैसे के वह शादी नहीं कर सकता था।'] },
        { q: ['Why did the boy need a boat?', 'लड़के को नाव क्यों चाहिए थी?'], a: ['He wanted to travel and see something of the world.', 'वह यात्रा करना और दुनिया देखना चाहता था।'] },
        { q: ['Why was the tree happy at the end of the story?', 'कहानी के अंत में पेड़ ख़ुश क्यों था?'], a: ['The boy, now an old man, came back and sat on its stump, so they could be together again.', 'लड़का, जो अब बूढ़ा हो गया था, लौटकर उसके ठूँठ पर बैठा, और वे फिर साथ थे।'] },
      ],
    },
    {
      type: 'match',
      title: ["The boy's problems and the tree's solutions: match.", 'लड़के की समस्याएँ और पेड़ के समाधान: मिलाओ।'],
      pairs: [
        [['The boy needed money.', 'लड़के को पैसे चाहिए थे।'], ['The tree gave him mangoes to sell.', 'पेड़ ने बेचने के लिए आम दिए।']],
        [['The boy needed a house.', 'लड़के को घर चाहिए था।'], ['The tree gave its branches to build a house and furniture.', 'पेड़ ने घर और फ़र्नीचर बनाने के लिए अपनी डालियाँ दीं।']],
        [['The boy needed a boat.', 'लड़के को नाव चाहिए थी।'], ['The tree gave its trunk to make a boat.', 'पेड़ ने नाव बनाने के लिए अपना तना दिया।']],
        [['The boy was a tired old man.', 'लड़का थका हुआ बूढ़ा था।'], ['The tree offered its stump as a seat to rest.', 'पेड़ ने आराम के लिए अपना ठूँठ बैठने को दिया।']],
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['The boy looked sullen and complaining. Why?', 'लड़का उदास और शिकायती क्यों दिख रहा था?'], a: ['He needed a house and had no way to get one.', 'उसे घर चाहिए था और उसके पास उसे पाने का कोई रास्ता नहीं था।'] },
        { q: ['How did the boy spend his time?', 'लड़का अपना समय कैसे बिताता था?'], a: ['As a child he played near the mango tree for hours, made a crown of leaves and played in its branches.', 'बचपन में वह घंटों आम के पेड़ के पास खेलता, पत्तियों का मुकुट बनाता और उसकी डालियों में खेलता था।'] },
        { q: ['Who was more loving, the boy or the tree? Why?', 'कौन ज़्यादा प्यार करने वाला था, लड़का या पेड़? क्यों?'], a: ['The tree. It gave everything, its fruit, branches and trunk, and asked for nothing, while the boy only took.', 'पेड़। उसने अपना सब कुछ दिया, फल, डालियाँ और तना, और बदले में कुछ नहीं माँगा, जबकि लड़का सिर्फ़ लेता रहा।'] },
      ],
    },
    {
      type: 'match',
      title: ["Homonyms (one word, many meanings): match each word with its second meaning.", 'अनेकार्थी शब्द (एक शब्द, कई अर्थ): हर शब्द को उसके दूसरे अर्थ से मिलाओ।'],
      pairs: [
        [['trunk (of a tree / ...)', 'तना / ...'], ['a big box for clothes; an elephant\'s nose', 'कपड़ों का बड़ा बक्सा; हाथी की सूँड']],
        [['sound (a sound boat / ...)', 'मज़बूत / ...'], ['a noise that we hear', 'आवाज़ जो हम सुनते हैं']],
        [['rest (to relax / ...)', 'आराम / ...'], ['the remaining part', 'बाक़ी हिस्सा']],
        [['stump (of a tree / ...)', 'ठूँठ / ...'], ['one of the three sticks in cricket', 'क्रिकेट के तीन डंडों में से एक']],
        [['bank (of a river / ...)', 'किनारा / ...'], ['a place to keep money', 'पैसा रखने की जगह']],
        [['bat (for cricket / ...)', 'बल्ला / ...'], ['an animal that flies at night', 'रात में उड़ने वाला जानवर']],
        [['letter (of the alphabet / ...)', 'अक्षर / ...'], ['a written message sent by post', 'डाक से भेजा गया लिखित संदेश']],
        [['fly (an insect / ...)', 'मक्खी / ...'], ['to move through the air', 'हवा में उड़ना']],
        [['right (correct / ...)', 'सही / ...'], ['the opposite of left', 'बाएँ का उल्टा, दायाँ']],
        [['match (a game / ...)', 'मैच / ...'], ['a stick used to light a fire', 'आग जलाने की तीली']],
      ],
    },
    {
      type: 'match',
      title: ['Verbs: match the present form with the past form.', 'क्रियाएँ: वर्तमान रूप को भूतकाल रूप से मिलाओ।'],
      pairs: [
        [['grow', 'उगाना'], ['grew', 'उगाया']],
        [['spend', 'बिताना'], ['spent', 'बिताया']],
        [['love', 'प्यार करना'], ['loved', 'प्यार किया']],
        [['say', 'कहना'], ['said', 'कहा']],
        [['sell', 'बेचना'], ['sold', 'बेचा']],
        [['get', 'पाना'], ['got', 'पाया']],
      ],
    },
    {
      type: 'mcq',
      title: ['Personification: giving human actions to things, as the mango tree speaks like a person.', 'मानवीकरण: चीज़ों को इंसानों जैसे काम देना, जैसे आम का पेड़ इंसान की तरह बोलता है।'],
      items: [
        { q: ['"The leaves whispered in the wind." Which word shows personification?', '"पत्तियाँ हवा में फुसफुसाईं।" कौन-सा शब्द मानवीकरण दिखाता है?'], options: [['leaves', 'पत्तियाँ'], ['whispered', 'फुसफुसाईं'], ['wind', 'हवा']], a: 1 },
        { q: ['"The flowers danced merrily in the breeze." Which word shows personification?', '"फूल हवा में ख़ुशी से नाचे।" कौन-सा शब्द मानवीकरण दिखाता है?'], options: [['flowers', 'फूल'], ['danced', 'नाचे'], ['breeze', 'हवा']], a: 1 },
        { q: ['Which sentence is an example of personification?', 'कौन-सा वाक्य मानवीकरण का उदाहरण है?'], options: [['The tree is very old.', 'पेड़ बहुत पुराना है।'], ['"Come, boy," called the tree.', '"आओ, बेटा," पेड़ ने पुकारा।'], ['The boy sold the mangoes.', 'लड़के ने आम बेचे।']], a: 1 },
      ],
    },
    {
      type: 'pick',
      title: ['Let us listen: a poem about planting a tree. Pick the words you hear.', 'आओ सुनें: पेड़ लगाने पर एक कविता। जो शब्द सुनाई दें उन्हें चुनो।'],
      passage: [
        'What do we plant when we plant a tree? / We plant a ship which will cross the sea. / We plant the houses for you and me. / A thousand things that we daily see. / We plant the shade from the hot sun to be safe. / We plant all these when we plant a tree.',
        'जब हम पेड़ लगाते हैं तो क्या लगाते हैं? / हम एक जहाज़ लगाते हैं जो समुद्र पार करेगा। / हम तुम्हारे और मेरे लिए घर लगाते हैं। / हज़ारों चीज़ें जो हम रोज़ देखते हैं। / हम गर्म धूप से बचाने वाली छाया लगाते हैं। / जब हम पेड़ लगाते हैं तो ये सब लगाते हैं।',
      ],
      options: [['free', 'free'], ['see', 'see'], ['me', 'me'], ['plant', 'plant'], ['hot', 'hot'], ['tea', 'tea'], ['sea', 'sea'], ['we', 'we'], ['he', 'he'], ['sun', 'sun'], ['key', 'key'], ['she', 'she'], ['cross', 'cross'], ['bee', 'bee'], ['shade', 'shade']],
      answers: [1, 2, 3, 4, 6, 7, 9, 12, 14],
    },
    {
      type: 'qa',
      title: ['Answer from the poem.', 'कविता से उत्तर दो।'],
      items: [
        { q: ['What do we plant when we plant a tree?', 'जब हम पेड़ लगाते हैं तो क्या लगाते हैं?'], a: ['We plant (a) a ship, (b) houses, (c) a thousand things we see daily, (d) shade from the hot sun.', 'हम लगाते हैं (a) जहाज़, (b) घर, (c) रोज़ दिखने वाली हज़ारों चीज़ें, (d) गर्म धूप से छाया।'] },
        { q: ['"A thousand things that we daily see": what does this mean?', '"हज़ारों चीज़ें जो हम रोज़ देखते हैं": इसका क्या अर्थ है?'], a: ['Many things we use every day, like furniture, paper, doors, pencils and boats, come from trees.', 'रोज़ काम आने वाली बहुत-सी चीज़ें, जैसे फ़र्नीचर, काग़ज़, दरवाज़े, पेंसिल और नाव, पेड़ों से आती हैं।'] },
      ],
    },
    {
      type: 'task',
      title: ["Let us speak: collect dry leaves of four trees. Make a card: draw the leaf on top, and inside write the tree's name and one use. Ask classmates to guess the leaf.", 'आओ बोलें: चार पेड़ों की सूखी पत्तियाँ इकट्ठा करो। एक कार्ड बनाओ: ऊपर पत्ती बनाओ, अंदर पेड़ का नाम और एक उपयोग लिखो। सहपाठियों से पत्ती पहचानने को कहो।'],
      items: [{ q: ['Sample card', 'नमूना कार्ड'], a: ['Outside: a long, pointed leaf with jagged edges. Inside: Neem tree. Its twigs are used to clean teeth and its leaves keep insects away.', 'बाहर: दाँतेदार किनारों वाली लंबी, नुकीली पत्ती। अंदर: नीम का पेड़। इसकी टहनी से दाँत साफ़ करते हैं और पत्तियाँ कीड़ों को दूर रखती हैं।'] }],
    },
    {
      type: 'task',
      title: ['Let us write: a paragraph about a tree you like in your neighbourhood: where it is, how it looks, why you like it. Give a title.', 'आओ लिखें: अपने आसपास के किसी पसंदीदा पेड़ पर अनुच्छेद: वह कहाँ है, कैसा दिखता है, तुम्हें क्यों पसंद है। शीर्षक दो।'],
      items: [{ q: ['The Old Peepal Tree', 'पुराना पीपल का पेड़'], a: ['There is a huge peepal tree near our village pond. It is very tall, with a thick grey trunk and heart-shaped leaves that rustle in the wind. Many birds build their nests in its branches. I like it because it gives cool shade on hot afternoons, and the elders sit under it and tell stories. Its leaves are also used in medicines.', 'हमारे गाँव के तालाब के पास एक विशाल पीपल का पेड़ है। वह बहुत ऊँचा है, उसका तना मोटा और स्लेटी है और दिल के आकार की पत्तियाँ हवा में सरसराती हैं। कई पक्षी उसकी डालियों में घोंसले बनाते हैं। मुझे वह पसंद है क्योंकि गर्म दोपहर में वह ठंडी छाया देता है, और बुज़ुर्ग उसके नीचे बैठकर कहानियाँ सुनाते हैं। उसकी पत्तियाँ दवाइयों में भी काम आती हैं।'] }],
    },
    {
      type: 'task',
      title: ['Let us explore: people from Persia called the neem tree Azad Darakhte Hindi, so its Latin name became Azadirachta indica. Neem has different names in Indian languages: Nimb, Nim, Leemba, Nimori, Nimbamond, Nimbe, Nimo. With your teacher, find out which language each name belongs to.', 'आओ जानें: फ़ारस के लोगों ने नीम को आज़ाद दरख़्त-ए-हिंदी कहा, इसलिए इसका लैटिन नाम Azadirachta indica पड़ा। भारतीय भाषाओं में नीम के अलग-अलग नाम हैं: निंब, नीम, लीम्बा, नीमोरी, निंबमंड, निंबे, नीमो। शिक्षक के साथ पता करो कि हर नाम किस भाषा का है।'],
      items: [{ q: ['Example: Nim (नीम) is the Hindi name.', 'उदाहरण: नीम हिंदी नाम है।'] }],
    },
  ],
  'class6-8': [
    {
      type: 'fill',
      title: ['Before we read: replace the underlined words with their meanings.', 'पढ़ने से पहले: रेखांकित शब्दों की जगह उनके अर्थ लगाओ।'],
      bank: ['light', 'fluttered', 'at last', 'labour'],
      items: [
        { q: ['The colour of the feather was not dark but pale (= ___).', 'पंख का रंग गहरा नहीं, हल्का था।'], a: 'light' },
        { q: ['The butterfly moved lightly and quickly (= ___) on to the flower.', 'तितली फुदककर फूल पर गई।'], a: 'fluttered' },
        { q: ['Finally (= ___), I finished my bird painting after trying many times.', 'कई बार कोशिश के बाद आख़िरकार मैंने पक्षी का चित्र पूरा किया।'], a: 'at last' },
        { q: ["The pretty flowers were the prize for the gardener's hard work (= ___).", 'सुंदर फूल माली की मेहनत का इनाम थे।'], a: 'labour' },
      ],
    },
    {
      type: 'pick',
      title: ['Let us discuss: pick the main idea of each stanza. (Two are extra.)', 'आओ चर्चा करें: हर पद का मुख्य विचार चुनो। (दो फ़ालतू हैं।)'],
      options: [
        ['The bird steps out into the world.', 'पक्षी दुनिया में बाहर आता है।'],
        ['The bird lived happily in a small world.', 'पक्षी एक छोटी दुनिया में ख़ुशी से रहा।'],
        ['The bird becomes blind due to leaves.', 'पत्तियों के कारण पक्षी अंधा हो जाता है।'],
        ['The bird flies away as an adult.', 'पक्षी बड़ा होकर उड़ जाता है।'],
        ['The bird is unhappy with the straw nest.', 'पक्षी तिनकों के घोंसले से दुखी है।'],
        ['The bird lived in a cosy nest with its mother.', 'पक्षी माँ के साथ आरामदायक घोंसले में रहा।'],
      ],
      answers: [0, 1, 3, 5],
    },
    {
      type: 'fill',
      title: ['Answer with a word from the poem.', 'कविता के एक शब्द से उत्तर दो।'],
      items: [
        { q: ["The shape of the bird's first house: ___", 'पक्षी के पहले घर का आकार: ___'], a: 'round', options: ['round', 'square', 'small'] },
        { q: ["The bird's second nest was made of: ___", 'पक्षी का दूसरा घोंसला किससे बना था: ___'], a: 'straw', options: ['shell', 'straw', 'leaves'] },
        { q: ['When it came out of its nest, the bird saw: ___', 'घोंसले से बाहर आकर पक्षी ने देखीं: ___'], a: 'leaves', options: ['leaves', 'clouds', 'houses'] },
        { q: ['What did the bird do at the end? ___', 'अंत में पक्षी ने क्या किया? ___'], a: 'flew', options: ['slept', 'flew', 'sang'] },
      ],
    },
    {
      type: 'tf',
      title: ['True or false?', 'सही या ग़लत?'],
      items: [
        { q: ['The bird changed its house two times.', 'पक्षी ने दो बार अपना घर बदला।'], a: true },
        { q: ['The neighbours tell the bird about the world.', 'पड़ोसी पक्षी को दुनिया के बारे में बताते हैं।'], a: false },
      ],
    },
    {
      type: 'mcq',
      title: ['Read the lines and choose.', 'पंक्तियाँ पढ़ो और चुनो।'],
      passage: [
        'I thought the world was made of straw, / And nestled by my mother. ... I said the world is made of leaves, / I have been very blind.',
        'मैंने सोचा दुनिया तिनकों से बनी है, / और माँ से सटकर रहा। ... मैंने कहा दुनिया पत्तियों से बनी है, / मैं कितना अंधा था।',
      ],
      items: [
        { q: ['The bird thought the world was made of straw because ___.', 'पक्षी ने सोचा दुनिया तिनकों से बनी है क्योंकि ___।'], options: [['it lived in a straw hut', 'वह तिनकों की झोपड़ी में रहता था'], ['its nest was made of straw', 'उसका घोंसला तिनकों से बना था'], ['its mother fed straw to it', 'माँ उसे तिनके खिलाती थी'], ['there was straw all around', 'चारों ओर तिनके थे']], a: 1 },
        { q: ["What does 'I said' mean?", "'I said' का क्या अर्थ है?"], options: [['flew', 'उड़ा'], ['shouted', 'चिल्लाया'], ['spoke', 'बोला'], ['cried', 'रोया']], a: 2 },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['Who lived in the nest along with the baby bird?', 'घोंसले में बच्चे पक्षी के साथ कौन रहता था?'], a: ['Its mother.', 'उसकी माँ।'] },
        { q: ['Which word tells us that the baby bird was warm and comfortable?', 'कौन-सा शब्द बताता है कि बच्चा पक्षी गर्म और आरामदायक था?'], a: ['nestled', 'nestled (सटकर रहा)'] },
        { q: ['Why did the bird think the world was made of leaves?', 'पक्षी ने क्यों सोचा कि दुनिया पत्तियों से बनी है?'], a: ['When it came out of the nest, it saw only the leaves of the tree all around.', 'घोंसले से बाहर आने पर उसे चारों ओर सिर्फ़ पेड़ की पत्तियाँ दिखीं।'] },
        { q: ['The bird felt it had been very blind because ...', 'पक्षी को लगा कि वह बहुत अंधा था क्योंकि ...'], a: ['it could not see the leaves from inside the nest.', 'वह घोंसले के अंदर से पत्तियाँ नहीं देख पाता था।'] },
        { q: ['Why did the baby bird think its first world was small, round and blue?', 'बच्चे पक्षी ने क्यों सोचा कि उसकी पहली दुनिया छोटी, गोल और नीली है?'], a: ['Its first home was its egg, which was small, round and pale blue.', 'उसका पहला घर अंडा था, जो छोटा, गोल और हल्का नीला था।'] },
        { q: ['Where did the bird go when it fluttered from its straw nest?', 'तिनकों के घोंसले से फुदककर पक्षी कहाँ गया?'], a: ['Onto the branches and leaves of the tree.', 'पेड़ की डालियों और पत्तियों पर।'] },
        { q: ['What quality did the bird say it had when it flew away?', 'उड़ते समय पक्षी ने अपना कौन-सा गुण बताया?'], a: ['It was "quite fit for grown-up labours": strong and grown up enough to work like an adult.', 'वह "बड़ों के काम के लायक़" था: इतना बड़ा और मज़बूत कि बड़ों की तरह काम कर सके।'] },
        { q: ["Who do you think were the bird's neighbours? Why?", 'पक्षी के पड़ोसी कौन रहे होंगे? क्यों?'], a: ['Other birds and creatures living in nearby trees; they too only know their small part of the world.', 'आसपास के पेड़ों पर रहने वाले दूसरे पक्षी और जीव; वे भी दुनिया का बस अपना छोटा हिस्सा जानते हैं।'] },
      ],
    },
    {
      type: 'match',
      title: ['Rhyming words from the poem.', 'कविता के तुकांत शब्द।'],
      pairs: [
        [['well', 'well'], ['shell', 'shell']],
        [['other', 'other'], ['mother', 'mother']],
        [['find', 'find'], ['blind', 'blind']],
        [['labours', 'labours'], ['neighbours', 'neighbours']],
      ],
    },
    {
      type: 'fill',
      title: ['Complete the new stanza with rhyming words.', 'तुकांत शब्दों से नया पद पूरा करो।'],
      bank: ['know', 'best'],
      items: [
        { q: ['I fly high and I fly low, / But one thing I surely ___,', 'मैं ऊँचा उड़ूँ, मैं नीचा उड़ूँ, / पर एक बात मैं पक्का जानता हूँ,'], a: 'know' },
        { q: ['Whenever I wish to rest, / My little nest is the ___.', 'जब भी आराम करना चाहूँ, / मेरा छोटा घोंसला सबसे अच्छा है।'], a: 'best' },
      ],
    },
    {
      type: 'task',
      title: ['Describing words: make six sentences about a tree with a nest using: pointed, green, thin, brown, small, wooden, hanging, round.', 'वर्णन करने वाले शब्द: घोंसले वाले पेड़ पर छह वाक्य बनाओ: pointed, green, thin, brown, small, wooden, hanging, round।'],
      items: [{ q: ['Sample sentences', 'नमूना वाक्य'], a: ['The leaves are green.\nThe leaves are pointed.\nThe branches are thin and brown.\nA small round nest is hanging from a branch.\nThere is a wooden bench under the tree.\nTwo small birds sit in the nest.', 'पत्तियाँ हरी हैं।\nपत्तियाँ नुकीली हैं।\nडालियाँ पतली और भूरी हैं।\nएक डाल से छोटा गोल घोंसला लटक रहा है।\nपेड़ के नीचे लकड़ी की बेंच है।\nघोंसले में दो छोटे पक्षी बैठे हैं।'] }],
    },
    {
      type: 'fill',
      title: ['Let us listen: a short poem about Paro the parrot. Fill in the missing words.', 'आओ सुनें: तोते पारो की छोटी कविता। छूटे शब्द भरो।'],
      passage: [
        "I'm a parrot, my name is Paro, / My feathers are bright and they glow. / In the morning, I spread my wings, / Fly around and see wonderful things. / Come with me through the skies so blue, / To places old and places new. / Among the trees, where the breeze is light, / Many new stories, oh, what a sight!",
        'मैं एक तोता हूँ, मेरा नाम पारो, / मेरे पंख चमकीले हैं और दमकते हैं। / सुबह मैं अपने पंख फैलाता हूँ, / इधर-उधर उड़कर अद्भुत चीज़ें देखता हूँ। / मेरे साथ चलो इतने नीले आसमान में, / पुरानी और नई जगहों पर। / पेड़ों के बीच, जहाँ हवा हल्की है, / कई नई कहानियाँ, अहा, क्या नज़ारा!',
      ],
      bank: ['bright', 'Fly', 'blue', 'trees', 'stories'],
      items: [
        { q: ['My feathers are ___ and they glow.', 'मेरे पंख चमकीले हैं और दमकते हैं।'], a: 'bright' },
        { q: ['___ around and see wonderful things.', 'इधर-उधर उड़कर अद्भुत चीज़ें देखता हूँ।'], a: 'Fly' },
        { q: ['Come with me through the skies so ___,', 'मेरे साथ चलो इतने नीले आसमान में,'], a: 'blue' },
        { q: ['Among the ___, where the breeze is light,', 'पेड़ों के बीच, जहाँ हवा हल्की है,'], a: 'trees' },
        { q: ['Many new ___, oh, what a sight!', 'कई नई कहानियाँ, अहा, क्या नज़ारा!'], a: 'stories' },
      ],
    },
    {
      type: 'task',
      title: ['Let us speak: which bird would you like to be? (I am a..., I am ... in colour, I live in..., During the day I..., My message for humans is...)', 'आओ बोलें: तुम कौन-सा पक्षी बनना चाहोगे? (I am a..., I am ... in colour, I live in..., During the day I..., My message for humans is...)'],
      items: [{ q: ['Sample', 'नमूना'], a: ['I am a sparrow. I am brown and grey in colour. I am a small bird with a short beak. I live in a nest under the roof of a house. During the day I look for seeds and insects, and I chirp a lot. I want to tell humans: please keep a bowl of water for us in summer and plant more trees.', 'मैं एक गौरैया हूँ। मेरा रंग भूरा और स्लेटी है। मैं छोटी चोंच वाला छोटा पक्षी हूँ। मैं एक घर की छत के नीचे घोंसले में रहती हूँ। दिन में मैं दाने और कीड़े ढूँढती हूँ और ख़ूब चहचहाती हूँ। मैं इंसानों से कहना चाहती हूँ: गर्मी में हमारे लिए पानी का कटोरा रखो और ज़्यादा पेड़ लगाओ।'] }],
    },
    {
      type: 'task',
      title: ['Let us write: how would the world look to (1) a baby and (2) a fish? Write five sentences each.', 'आओ लिखें: (1) एक शिशु और (2) एक मछली को दुनिया कैसी दिखती होगी? हर एक पर पाँच वाक्य लिखो।'],
      items: [
        { q: ['A baby', 'एक शिशु'], a: ["At first my world was my mother's arms. It was warm and soft. Then my world became my cot with toys hanging above it. Later I crawled and found the whole room. Now my world is the house, the garden and all the people who love me.", 'पहले मेरी दुनिया माँ की गोद थी। वह गर्म और मुलायम थी। फिर मेरी दुनिया मेरा पालना बनी, जिसके ऊपर खिलौने लटकते थे। बाद में मैं घुटनों के बल चला और पूरा कमरा देखा। अब मेरी दुनिया घर, बग़ीचा और मुझे प्यार करने वाले सब लोग हैं।'] },
        { q: ['A fish', 'एक मछली'], a: ['My world is made of water. It is cool and blue. I see weeds, stones and other fish around me. Light comes from above the water. I do not know what lies beyond the river.', 'मेरी दुनिया पानी से बनी है। वह ठंडी और नीली है। मुझे अपने आसपास घास, पत्थर और दूसरी मछलियाँ दिखती हैं। रोशनी पानी के ऊपर से आती है। मुझे नहीं पता नदी के आगे क्या है।'] },
      ],
    },
    {
      type: 'match',
      title: ['Let us explore: workers who build houses. Match each worker with their work.', 'आओ जानें: घर बनाने वाले कारीगर। हर कारीगर को उसके काम से मिलाओ।'],
      pairs: [
        [['mason', 'राजमिस्त्री'], ['lays bricks and stones', 'ईंटें और पत्थर जोड़ता है']],
        [['painter', 'पेंटर'], ['paints the walls and doors', 'दीवारें और दरवाज़े रंगता है']],
        [['electrician', 'बिजली मिस्त्री'], ['fits wires, switches and lights', 'तार, स्विच और बत्तियाँ लगाता है']],
        [['plumber', 'नल मिस्त्री'], ['fits water pipes and taps', 'पानी के पाइप और नल लगाता है']],
        [['carpenter', 'बढ़ई'], ['makes doors, windows and furniture from wood', 'लकड़ी से दरवाज़े, खिड़कियाँ और फ़र्नीचर बनाता है']],
        [['architect', 'वास्तुकार'], ['designs and plans the building', 'इमारत का नक़्शा और योजना बनाता है']],
      ],
    },
  ],
  'class6-9': [
    {
      type: 'qa',
      title: ['Before we read', 'पढ़ने से पहले'],
      items: [
        { q: ['What do Mahila Mandals / Women Self-Help Groups do in our village?', 'हमारे गाँव में महिला मंडल / स्वयं सहायता समूह क्या करते हैं?'], a: ['They save money together, give small loans, run small businesses, and work on village problems like water, cleanliness and trees.', 'वे मिलकर बचत करते हैं, छोटे क़र्ज़ देते हैं, छोटे व्यवसाय चलाते हैं, और पानी, सफ़ाई और पेड़ जैसी गाँव की समस्याओं पर काम करते हैं।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Let us discuss (part 1)', 'आओ चर्चा करें (भाग 1)'],
      items: [
        { q: ['What is the name of your village and block?', 'तुम्हारे गाँव और ब्लॉक का नाम क्या है?'], a: ['(Example) My village is Bhalapur and my block is Mohla.', '(उदाहरण) मेरा गाँव भालापुर है और मेरा ब्लॉक मोहला है।'] },
      ],
    },
    {
      type: 'tf',
      title: ['True or false?', 'सही या ग़लत?'],
      items: [
        { q: ['Bhalapur is a deforested land now.', 'भालापुर अब पेड़-रहित ज़मीन है।'], a: false },
        { q: ['We should be thankful to the insensitive people who fell trees.', 'हमें पेड़ काटने वाले असंवेदनशील लोगों का आभारी होना चाहिए।'], a: false },
        { q: ['The women cut the trees for fuel and food.', 'महिलाओं ने ईंधन और भोजन के लिए पेड़ काटे।'], a: false },
        { q: ['The women of the Mahila Mandal got united.', 'महिला मंडल की महिलाएँ एकजुट हुईं।'], a: true },
      ],
    },
    {
      type: 'mcq',
      title: ['Choose the correct option.', 'सही विकल्प चुनो।'],
      items: [
        { q: ["'Village forest is shrinking.' What does 'shrinking' mean?", "'गाँव का जंगल सिकुड़ रहा है।' 'shrinking' का क्या अर्थ है?"], options: [['decreasing', 'घटना'], ['increasing', 'बढ़ना'], ['expanding', 'फैलना'], ['improving', 'सुधरना']], a: 0 },
        { q: ['Timber mafia is a ___.', 'टिम्बर माफ़िया ___ है।'], options: [['group safeguarding trees', 'पेड़ों की रक्षा करने वाला समूह'], ['group illegally cutting trees', 'ग़ैरक़ानूनी ढंग से पेड़ काटने वाला समूह'], ['group of wood traders', 'लकड़ी व्यापारियों का समूह']], a: 1 },
      ],
    },
    {
      type: 'match',
      title: ['Match the words with their meanings.', 'शब्दों को उनके अर्थ से मिलाओ।'],
      pairs: [
        [['stumps', 'ठूँठ'], ['trunks of trees left after cutting', 'काटने के बाद बचे पेड़ के तने']],
        [['trenches', 'खाइयाँ'], ['long narrow cuts dug into the ground', 'ज़मीन में खोदी गई लंबी संकरी नालियाँ']],
        [['poachers', 'शिकारी'], ['those who catch or shoot animals without permission', 'बिना अनुमति जानवर पकड़ने या मारने वाले']],
        [['timber', 'इमारती लकड़ी'], ['wood for building or making things', 'बनाने के काम आने वाली लकड़ी']],
        [['sprout', 'अंकुरित होना'], ['to begin to grow', 'उगना शुरू होना']],
        [['twigs', 'टहनियाँ'], ['very thin branches', 'बहुत पतली डालियाँ']],
        [['biodiversity', 'जैव विविधता'], ['variety of living things', 'जीवों की विविधता']],
      ],
    },
    {
      type: 'qa',
      title: ['Let us discuss (part 2)', 'आओ चर्चा करें (भाग 2)'],
      items: [
        { q: ['What was the situation of the forest land in Bhalapur when Vikram stepped in?', 'जब विक्रम आगे आए तब भालापुर की वन-भूमि की क्या हालत थी?'], a: ['It was a 12-hectare deforested plot full of stumps of felled trees, and the forest was shrinking.', 'वह 12 हेक्टेयर की पेड़-रहित ज़मीन थी जिसमें कटे पेड़ों के ठूँठ भरे थे, और जंगल सिकुड़ रहा था।'] },
        { q: ['What did the women do to protect the forest?', 'जंगल बचाने के लिए महिलाओं ने क्या किया?'], a: ['They dug deep trenches around the area to keep grazing animals out, and stood guard against poachers and the timber mafia.', 'उन्होंने चरने वाले जानवरों को रोकने के लिए चारों ओर गहरी खाइयाँ खोदीं, और शिकारियों व टिम्बर माफ़िया के ख़िलाफ़ पहरा दिया।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Read the lines and answer.', 'पंक्तियाँ पढ़ो और उत्तर दो।'],
      passage: [
        "Soon leaves started to sprout on the stumps. Today, a dense forest stands on the outskirts of the village. The dry twigs fulfil the locals' need for firewood and the biodiversity of the new forest is a reward of their efforts.",
        'जल्द ही ठूँठों पर पत्तियाँ फूटने लगीं। आज गाँव के बाहरी इलाक़े में घना जंगल खड़ा है। सूखी टहनियाँ स्थानीय लोगों की जलाऊ लकड़ी की ज़रूरत पूरी करती हैं और नए जंगल की जैव विविधता उनकी मेहनत का इनाम है।',
      ],
      items: [
        { q: ["Pick out the sentence which means 'trees started growing'.", "वह वाक्य चुनो जिसका अर्थ है 'पेड़ उगने लगे'।"], a: ['"Soon leaves started to sprout on the stumps."', '"जल्द ही ठूँठों पर पत्तियाँ फूटने लगीं।"'] },
        { q: ["'Bhalapur became rich with variety of living beings.' Which word can replace the underlined words?", "'भालापुर जीवों की विविधता से भर गया।' रेखांकित शब्दों की जगह कौन-सा शब्द आ सकता है?"], a: ['biodiversity', 'biodiversity (जैव विविधता)'] },
        { q: ['What are the benefits of the new forest in Bhalapur?', 'भालापुर के नए जंगल के क्या फ़ायदे हैं?'], a: ['The dry twigs give firewood to the villagers, and the forest is home to many plants and animals.', 'सूखी टहनियाँ गाँव वालों को जलाऊ लकड़ी देती हैं, और जंगल कई पौधों और जानवरों का घर है।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['What is the result of the efforts made by the women of Bhalapur?', 'भालापुर की महिलाओं की मेहनत का क्या नतीजा निकला?'], a: ['A dense green forest now stands where there was deforested land.', 'जहाँ पेड़-रहित ज़मीन थी, वहाँ अब घना हरा जंगल है।'] },
        { q: ['Why was the village forest shrinking?', 'गाँव का जंगल क्यों सिकुड़ रहा था?'], a: ['Because insensitive people were cutting down the trees.', 'क्योंकि असंवेदनशील लोग पेड़ काट रहे थे।'] },
        { q: ['Can big projects and money alone protect the forest? Give a reason.', 'क्या सिर्फ़ बड़ी परियोजनाएँ और पैसा जंगल बचा सकते हैं? कारण दो।'], a: ['No. When local needs are given importance, people come forward themselves to protect the forest, as in Bhalapur.', 'नहीं। जब स्थानीय ज़रूरतों को महत्व दिया जाता है, तो लोग ख़ुद जंगल बचाने आगे आते हैं, जैसे भालापुर में।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Let us learn: write sentences about what Ravi, Kusum and Shiva did last week.', 'आओ सीखें: रवि, कुसुम और शिवा ने पिछले हफ़्ते क्या किया, उस पर वाक्य लिखो।'],
      items: [
        { q: ['Ravi: Monday: went to the jungle to collect wood; Tuesday: milked cows; Wednesday: played with his friends.', 'रवि: सोमवार: लकड़ी लेने जंगल गया; मंगलवार: गायें दुहीं; बुधवार: दोस्तों के साथ खेला।'], a: ['Ravi went to the jungle to collect wood on Monday. He milked the cows on Tuesday. On Wednesday, he played with his friends.', 'रवि सोमवार को लकड़ी लेने जंगल गया। मंगलवार को उसने गायें दुहीं। बुधवार को वह दोस्तों के साथ खेला।'] },
        { q: ['Kusum: whitewashed her house; played with her friends; collected vegetables from the field.', 'कुसुम: घर की पुताई की; सहेलियों के साथ खेली; खेत से सब्ज़ियाँ लाई।'], a: ['Kusum whitewashed her house on Monday. She played with her friends on Tuesday. On Wednesday, she collected vegetables from the field.', 'कुसुम ने सोमवार को घर की पुताई की। मंगलवार को वह सहेलियों के साथ खेली। बुधवार को उसने खेत से सब्ज़ियाँ इकट्ठी कीं।'] },
        { q: ['Shiva: worked in the field; watered plants; sowed seeds.', 'शिवा: खेत में काम किया; पौधों को पानी दिया; बीज बोए।'], a: ['Shiva worked in the field on Monday. He watered the plants on Tuesday. On Wednesday, he sowed seeds.', 'शिवा ने सोमवार को खेत में काम किया। मंगलवार को उसने पौधों को पानी दिया। बुधवार को उसने बीज बोए।'] },
      ],
    },
    {
      type: 'pick',
      title: ['Let us listen: Rahul tells his mother about Peepal Baba. Select the correct statements.', 'आओ सुनें: राहुल माँ को पीपल बाबा के बारे में बताता है। सही कथन चुनो।'],
      passage: [
        "Rahul: Maa, have you heard about Peepal Baba? Our teacher told us about him today. Mother: I have not heard about him. Who is he and what does he do? Rahul: He plants trees along with his team. He also started a movement to plant and save trees. Mother: That's wonderful. Where did he get this idea from? Rahul: When he was studying in a school in Pune, his English teacher gave him the idea to plant trees. He was just 11 years old. Mother: How did he plant so many trees all over the country as a child? Rahul: He was born to an army officer's family in Chandigarh and whenever they were moved to a new city, he planted more trees. Mother: But how did he come to be known as Peepal Baba? Rahul: He used to plant Peepal and Neem trees as they have many uses for us and told others to do so. In the beginning, people made fun of him by calling him Peepal Baba, but he was not bothered and continued his work. Now everyone calls him by that name lovingly. Mother: He is really doing great work. We should learn from him and plant more trees. Rahul: Yes, Maa. We must, and tell others to do the same.",
        'राहुल: माँ, क्या आपने पीपल बाबा के बारे में सुना है? आज हमारी शिक्षिका ने उनके बारे में बताया। माँ: मैंने नहीं सुना। वे कौन हैं और क्या करते हैं? राहुल: वे अपनी टीम के साथ पेड़ लगाते हैं। उन्होंने पेड़ लगाने और बचाने का आंदोलन भी शुरू किया। माँ: बहुत बढ़िया। उन्हें यह विचार कहाँ से आया? राहुल: जब वे पुणे के एक स्कूल में पढ़ते थे, तब उनकी अंग्रेज़ी शिक्षिका ने उन्हें पेड़ लगाने का विचार दिया। वे सिर्फ़ 11 साल के थे। माँ: बचपन में उन्होंने पूरे देश में इतने पेड़ कैसे लगाए? राहुल: उनका जन्म चंडीगढ़ में एक सैन्य अधिकारी के परिवार में हुआ, और जब भी उनका तबादला नए शहर में होता, वे और पेड़ लगाते। माँ: पर वे पीपल बाबा कैसे कहलाए? राहुल: वे पीपल और नीम के पेड़ लगाते थे क्योंकि उनके कई उपयोग हैं, और दूसरों को भी ऐसा करने को कहते थे। शुरू में लोग उन्हें पीपल बाबा कहकर चिढ़ाते थे, पर उन्होंने परवाह नहीं की और काम करते रहे। अब सब उन्हें प्यार से इसी नाम से बुलाते हैं। माँ: वे सच में महान काम कर रहे हैं। हमें उनसे सीखकर और पेड़ लगाने चाहिए। राहुल: हाँ माँ। हमें ज़रूर लगाने चाहिए, और दूसरों को भी कहना चाहिए।',
      ],
      options: [
        ['The mother was surprised to know that Peepal Baba had planted trees all over the country.', 'माँ यह जानकर हैरान थीं कि पीपल बाबा ने पूरे देश में पेड़ लगाए।'],
        ['The mother disliked the work being done by Peepal Baba.', 'माँ को पीपल बाबा का काम पसंद नहीं आया।'],
        ['The mother wanted to know more about Peepal Baba.', 'माँ पीपल बाबा के बारे में और जानना चाहती थीं।'],
        ["The boy decided to take care of trees after hearing about Peepal Baba's journey.", 'पीपल बाबा की यात्रा सुनकर लड़के ने पेड़ों की देखभाल का फ़ैसला किया।'],
        ['The boy was worried about what his teacher had told him.', 'लड़का शिक्षिका की बात से चिंतित था।'],
      ],
      answers: [0, 2, 3],
    },
    {
      type: 'task',
      title: ['Let us speak: imagine you are a neem tree and speak about yourself (like the banana tree example: I am..., I have..., My flowers..., My fruits..., People like...).', 'आओ बोलें: कल्पना करो कि तुम नीम का पेड़ हो और अपने बारे में बोलो (केले के पेड़ के उदाहरण की तरह: I am..., I have..., My flowers..., My fruits..., People like...)।'],
      items: [{ q: ['I am a neem tree.', 'मैं नीम का पेड़ हूँ।'], a: ['I am a neem tree. I have a strong, rough trunk and narrow, pointed leaves with jagged edges. My flowers are small, white and sweet-smelling. My fruits are small and green, and turn yellow when ripe. People use my twigs to clean their teeth and my leaves as medicine.', 'मैं नीम का पेड़ हूँ। मेरा तना मज़बूत और खुरदरा है, और मेरी पत्तियाँ पतली, नुकीली और दाँतेदार हैं। मेरे फूल छोटे, सफ़ेद और ख़ुशबूदार हैं। मेरे फल छोटे और हरे हैं, जो पकने पर पीले हो जाते हैं। लोग मेरी टहनी से दाँत साफ़ करते हैं और मेरी पत्तियाँ दवा के काम आती हैं।'] }],
    },
    {
      type: 'fill',
      title: ['Let us write: put the steps for planting a mango tree in the right order.', 'आओ लिखें: आम का पेड़ लगाने के चरण सही क्रम में रखो।'],
      bank: ['Prepare the seed.', 'Collect suitable soil.', 'Plant the seed in the pot.', 'Place the pot in sunlight.', 'Water the plant regularly.', 'Find a proper place for the sapling.', 'Dig a pit, add manure, and plant the sapling.', 'Place a plant guard and take care of it.'],
      items: [
        { q: ['Step 1: ___', 'चरण 1: बीज तैयार करो।'], a: 'Prepare the seed.' },
        { q: ['Step 2: ___', 'चरण 2: उचित मिट्टी इकट्ठा करो।'], a: 'Collect suitable soil.' },
        { q: ['Step 3: ___', 'चरण 3: गमले में बीज बोओ।'], a: 'Plant the seed in the pot.' },
        { q: ['Step 4: ___', 'चरण 4: गमले को धूप वाली जगह रखो।'], a: 'Place the pot in sunlight.' },
        { q: ['Step 5: ___', 'चरण 5: पौधे को नियमित पानी दो।'], a: 'Water the plant regularly.' },
        { q: ['Step 6: ___', 'चरण 6: पौधा लगाने की सही जगह ढूँढो।'], a: 'Find a proper place for the sapling.' },
        { q: ['Step 7: ___', 'चरण 7: गड्ढा खोदो, खाद डालो, और पौधा लगाओ।'], a: 'Dig a pit, add manure, and plant the sapling.' },
        { q: ['Step 8: ___', 'चरण 8: ट्री-गार्ड लगाओ और सीधा खड़ा होने तक देखभाल करो।'], a: 'Place a plant guard and take care of it.' },
      ],
    },
    {
      type: 'mcq',
      title: ['Let us explore: guess the trees from the riddles.', 'आओ जानें: पहेलियों से पेड़ पहचानो।'],
      items: [
        { q: ["I'm a small tree with thorns and small shiny leaves. My fruit is yellow or green. You squeeze me to get my sour juice and mix it with water and sugar to get a refreshing drink. What tree am I?", 'मैं काँटों और छोटी चमकदार पत्तियों वाला छोटा पेड़ हूँ। मेरा फल पीला या हरा है। मुझे निचोड़कर खट्टा रस निकालते हैं और पानी-चीनी मिलाकर ताज़गी भरा शरबत बनाते हैं। मैं कौन-सा पेड़ हूँ?'], options: [['lemon', 'नींबू'], ['mango', 'आम'], ['guava', 'अमरूद']], a: 0 },
        { q: ["I'm a small tree with oval leaves. My fruit is yellow or green outside, white or pink inside, with lots of tiny seeds. What tree am I?", 'मैं अंडाकार पत्तियों वाला छोटा पेड़ हूँ। मेरा फल बाहर से पीला या हरा, अंदर से सफ़ेद या गुलाबी, और ढेर सारे छोटे बीजों वाला है। मैं कौन-सा पेड़ हूँ?'], options: [['papaya', 'पपीता'], ['guava', 'अमरूद'], ['banana', 'केला']], a: 1 },
      ],
    },
    {
      type: 'fill',
      title: ['Complete the papaya riddle. (Hints: branches, black, trunk, white)', 'पपीते की पहेली पूरी करो। (संकेत: branches, black, trunk, white)'],
      bank: ['trunk', 'branches', 'white', 'black'],
      items: [
        { q: ['My ___ is straight.', 'मेरा तना सीधा है।'], a: 'trunk' },
        { q: ['I have no ___. My leaves are large.', 'मेरी डालियाँ नहीं हैं। मेरी पत्तियाँ बड़ी हैं।'], a: 'branches' },
        { q: ['My young fruit is green, with ___ seeds, and is eaten as a vegetable.', 'मेरा कच्चा फल हरा, सफ़ेद बीजों वाला है, और सब्ज़ी की तरह खाया जाता है।'], a: 'white' },
        { q: ['My ripe fruit is sweet and yellow with ___ seeds. I am a papaya tree.', 'मेरा पका फल मीठा और पीला, काले बीजों वाला है। मैं पपीते का पेड़ हूँ।'], a: 'black' },
      ],
    },
  ],
  'class6-10': [
    {
      type: 'mcq',
      title: ['Before we read: tick the correct meaning.', 'पढ़ने से पहले: सही अर्थ चुनो।'],
      items: [
        { q: ['friendly matches', 'दोस्ताना मैच'], options: [['matches played to win a trophy', 'ट्रॉफ़ी जीतने के लिए खेले गए मैच'], ['matches played without competition', 'बिना प्रतियोगिता के खेले गए मैच']], a: 1 },
        { q: ['opponent', 'प्रतिद्वंद्वी'], options: [['someone who you compete with', 'जिससे तुम मुक़ाबला करते हो'], ['someone you want to be a partner with', 'जिसे तुम साथी बनाना चाहते हो']], a: 0 },
        { q: ['tally of marks', 'अंकों का हिसाब'], options: [['final marks on a report card', 'रिपोर्ट कार्ड के अंतिम अंक'], ['record of points in a game/match', 'खेल/मैच में अंकों का रिकॉर्ड']], a: 1 },
        { q: ['sporting spirit', 'खेल भावना'], options: [['following all the rules in a game', 'खेल के सारे नियम मानना'], ['being fair and respecting each player in a game', 'खेल में निष्पक्ष रहना और हर खिलाड़ी का सम्मान करना']], a: 1 },
      ],
    },
    {
      type: 'tf',
      title: ['Let us discuss: true or false?', 'आओ चर्चा करें: सही या ग़लत?'],
      items: [
        { q: ['Prabhat would accept losing to anyone easily.', 'प्रभात किसी से भी आसानी से हार मान लेता था।'], a: false },
      ],
    },
    {
      type: 'qa',
      title: ['Let us discuss', 'आओ चर्चा करें'],
      items: [
        { q: ['What was special about the last Friday of each month?', 'हर महीने का आख़िरी शुक्रवार ख़ास क्यों था?'], a: ['The coach conducted friendly matches in the games period.', 'कोच खेल के पीरियड में दोस्ताना मैच कराते थे।'] },
        { q: ['Who was responsible for maintaining the score for the match?', 'मैच का स्कोर रखने की ज़िम्मेदारी किसकी थी?'], a: ['Prabhat.', 'प्रभात की।'] },
        { q: ['Do you think Prabhat wished to play another match with Surya? Why?', 'क्या प्रभात सूरज के साथ फिर खेलना चाहता था? क्यों?'], a: ['Probably not, because Surya was a better player and Prabhat could win only by cheating.', 'शायद नहीं, क्योंकि सूर्या बेहतर खिलाड़ी था और प्रभात सिर्फ़ धोखे से जीत पाया।'] },
        { q: ['How did Surya feel about playing?', 'सूर्या को खेलना कैसा लगता था?'], a: ['He enjoyed every game, whether he won or lost, and his smile never left his face.', 'वह हर खेल का आनंद लेता था, चाहे जीते या हारे, और उसकी मुस्कान कभी नहीं जाती थी।'] },
        { q: ['What was it about Surya that Prabhat observed?', 'प्रभात ने सूर्या में क्या देखा?'], a: ['Surya was great at some things and terrible at others, but he enjoyed everything equally.', 'सूर्या कुछ चीज़ों में बहुत अच्छा और कुछ में बहुत कमज़ोर था, पर वह हर चीज़ का बराबर आनंद लेता था।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Read the first extract and answer.', 'पहला अंश पढ़ो और उत्तर दो।'],
      passage: [
        'If Prabhat sensed that he would lose a game, he would not play it. He would take part only when he was sure of winning, even if the game lasted only for a minute. You could not stop him from playing the kind of games he was really good at, like badminton.',
        'अगर प्रभात को लगता कि वह हार जाएगा, तो वह खेलता ही नहीं था। वह तभी भाग लेता जब उसे जीतने का यक़ीन होता, चाहे खेल एक मिनट ही चले। जिन खेलों में वह सच में अच्छा था, जैसे बैडमिंटन, उनसे उसे कोई नहीं रोक सकता था।',
      ],
      items: [
        { q: ['Prabhat would play a game only if ...', 'प्रभात कोई खेल तभी खेलता जब ...'], a: ['he was sure of winning.', 'उसे जीतने का यक़ीन होता।'] },
        { q: ['Which game was Prabhat good at playing?', 'प्रभात किस खेल में अच्छा था?'], a: ['Badminton.', 'बैडमिंटन।'] },
      ],
    },
    {
      type: 'mcq',
      title: ['Choose the most suitable option.', 'सबसे उचित विकल्प चुनो।'],
      items: [
        { q: ['This behaviour of Prabhat tells us that he was ___.', 'प्रभात का यह व्यवहार बताता है कि वह ___ था।'], options: [['good at the game', 'खेल में अच्छा'], ['sure to win', 'जीत के प्रति पक्का'], ['afraid of losing', 'हारने से डरता']], a: 2 },
        { q: ['That night, after cheating to win, Prabhat felt ___.', 'उस रात, धोखे से जीतने के बाद प्रभात ___ महसूस कर रहा था।'], options: [['hurt', 'आहत'], ['unhappy', 'दुखी'], ['afraid', 'डरा हुआ'], ['focused', 'एकाग्र']], a: 1 },
        { q: ["Surya's reaction to not winning was ___ Prabhat's.", 'हारने पर सूर्या की प्रतिक्रिया प्रभात से ___ थी।'], options: [['similar to', 'मिलती-जुलती'], ['as serious as', 'उतनी ही गंभीर'], ['different from', 'अलग']], a: 2 },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ["Why does Prabhat find Surya's behaviour 'surprising'?", "प्रभात को सूर्या का व्यवहार 'आश्चर्यजनक' क्यों लगता है?"], a: ['Surya did not feel bad about losing, and the very next day he happily played basketball, a game he was hopeless at.', 'सूर्या को हारने का बुरा नहीं लगा, और अगले ही दिन वह ख़ुशी से बास्केटबॉल खेल रहा था, जिसमें वह बिल्कुल कमज़ोर था।'] },
        { q: ["How did Prabhat's attitude towards winning and losing affect his enjoyment of games in the beginning?", 'शुरू में जीत-हार के प्रति प्रभात के रवैये ने खेलों के आनंद पर क्या असर डाला?'], a: ['He could not enjoy games; he played only to win, avoided games he might lose, and felt terrible when he lost.', 'वह खेलों का आनंद नहीं ले पाता था; वह सिर्फ़ जीतने के लिए खेलता, हारने वाले खेलों से बचता, और हारने पर बहुत बुरा महसूस करता।'] },
        { q: ['Why do you think Prabhat cheated to win the badminton match?', 'प्रभात ने बैडमिंटन मैच जीतने के लिए धोखा क्यों दिया?'], a: ['He could not bear losing, and Surya was winning point after point.', 'वह हार बर्दाश्त नहीं कर सकता था, और सूर्या एक के बाद एक अंक जीत रहा था।'] },
        { q: ["How did Surya's attitude differ from Prabhat's?", 'सूर्या का रवैया प्रभात से कैसे अलग था?'], a: ['Surya played for fun and did not care about winning or losing; Prabhat played only to win.', 'सूर्या मज़े के लिए खेलता था और जीत-हार की परवाह नहीं करता था; प्रभात सिर्फ़ जीतने के लिए खेलता था।'] },
        { q: ["Do you think Prabhat's approach to games was healthy? Why or why not?", 'क्या खेलों के प्रति प्रभात का नज़रिया सही था? क्यों या क्यों नहीं?'], a: ['No. It made him unhappy and even led him to cheat. Games are for fun, fitness and learning.', 'नहीं। इससे वह दुखी रहता और धोखा तक दे बैठा। खेल मज़े, सेहत और सीखने के लिए होते हैं।'] },
        { q: ['Why is sporting spirit important?', 'खेल भावना क्यों ज़रूरी है?'], a: ['It teaches us to play fairly, respect others, accept defeat gracefully and enjoy the game.', 'यह हमें ईमानदारी से खेलना, दूसरों का सम्मान करना, हार को शालीनता से स्वीकारना और खेल का आनंद लेना सिखाती है।'] },
        { q: ["Explain how the title 'Change of Heart' is suitable.", "समझाओ कि शीर्षक 'Change of Heart' क्यों उचित है।"], a: ['Prabhat changes from a boy who must win at any cost to one who enjoys games and has a great sporting spirit.', 'प्रभात हर क़ीमत पर जीतने वाले लड़के से बदलकर खेलों का आनंद लेने वाला और अच्छी खेल भावना वाला बन जाता है।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Make words using consecutive letters (in order) from each word, e.g. BADMINTON: bad, admin, mint, in, ton, on.', 'हर शब्द के लगातार अक्षरों (क्रम में) से शब्द बनाओ, जैसे BADMINTON: bad, admin, mint, in, ton, on।'],
      items: [
        { q: ['PHENOMENON', 'PHENOMENON'], a: ['hen, he, omen, men, no, on, nom', 'hen, he, omen, men, no, on'] },
        { q: ['BASKETBALL', 'BASKETBALL'], a: ['bask, basket, ask, as, ball, all', 'bask, basket, ask, as, ball, all'] },
      ],
    },
    {
      type: 'match',
      title: ['Past perfect shows the first (older) action. Match the first action with the second action.', 'पूर्ण भूतकाल पहले (पुराने) काम को दिखाता है। पहले काम को दूसरे काम से मिलाओ।'],
      pairs: [
        [['had played (first)', 'had played (पहला)'], ['was discussing (second)', 'was discussing (दूसरा)']],
        [['had won (first)', 'had won (पहला)'], ['did not feel (second)', 'did not feel (दूसरा)']],
        [['had not felt (first)', 'had not felt (पहला)'], ['was (second)', 'was (दूसरा)']],
      ],
    },
    {
      type: 'fill',
      title: ['Fill in the blanks with the past perfect form of the verbs.', 'क्रियाओं के पूर्ण भूतकाल रूप से रिक्त स्थान भरो।'],
      items: [
        { q: ['Prabhat ___ his homework before going to the badminton match. (finish)', 'बैडमिंटन मैच से पहले प्रभात ने होमवर्क पूरा कर लिया था।'], a: 'had already finished', options: ['had already finished', 'has finished', 'finished'] },
        { q: ["Surya ___ basketball for years before joining the school's badminton team. (play)", 'स्कूल की बैडमिंटन टीम में आने से पहले सूर्या सालों बास्केटबॉल खेल चुका था।'], a: 'had played', options: ['had played', 'was playing', 'plays'] },
        { q: ['By the time Prabhat arrived, Surya ___ several matches. (win)', 'प्रभात के पहुँचने तक सूर्या कई मैच जीत चुका था।'], a: 'had already won', options: ['has won', 'had already won', 'wins'] },
        { q: ['The new student, Surya, ___ Prabhat before coming to the school. (never meet)', 'नया छात्र सूर्या स्कूल आने से पहले प्रभात से कभी नहीं मिला था।'], a: 'had never met', options: ['had never met', 'never meets', 'has never met'] },
        { q: ['Before the games period, Prabhat ___ badminton extensively. (practise)', 'खेल के पीरियड से पहले प्रभात ने बैडमिंटन का ख़ूब अभ्यास कर लिया था।'], a: 'had practised', options: ['practises', 'had practised', 'is practising'] },
      ],
    },
    {
      type: 'qa',
      title: ['Let us listen: an announcement about the Friday matches.', 'आओ सुनें: शुक्रवार के मैचों की घोषणा।'],
      passage: [
        "Good morning, everyone. I know you all are excited about the Friday friendly matches. This Friday we shall have three matches: one for chess, the next for kho-kho and finally one for badminton. I have put up the kho-kho teams' name list on the sports' notice board. Since this is a team game, your class VI-B shall be playing against the VI-D kho-kho team. The kho-kho match refreshments are being sponsored by Xydium Sports Club. Let me clarify, the spelling is X-Y-D-I-U-M, Xydium. Now the places for the matches: the first one is chess. It'll take place in the 1st floor activity room with Vani as the scorekeeper. Kho-kho will be played in the sports ground where I myself will be the referee. For badminton, we have chosen the multipurpose hall on the ground floor. The net will be put up there. For the chess match, it has been decided that this match shall be played between Sarita and Nupur. Two matches will be played during the regular games period on Friday but kho-kho will be played in the 2nd and 3rd period. Remember the kho-kho team names are up on the Sports' Notice Board. Good luck!",
        'सुप्रभात सबको। मुझे पता है तुम सब शुक्रवार के दोस्ताना मैचों को लेकर उत्साहित हो। इस शुक्रवार तीन मैच होंगे: एक शतरंज, दूसरा खो-खो और आख़िर में बैडमिंटन। मैंने खो-खो टीमों के नामों की सूची खेल सूचना-पट पर लगा दी है। यह टीम का खेल है, इसलिए तुम्हारी कक्षा VI-B, VI-D की खो-खो टीम से खेलेगी। खो-खो मैच का नाश्ता ज़ाइडियम स्पोर्ट्स क्लब की ओर से है। स्पेलिंग है X-Y-D-I-U-M, ज़ाइडियम। अब मैचों की जगह: पहला शतरंज है। यह पहली मंज़िल के गतिविधि कक्ष में होगा, और वाणी स्कोर रखेगी। खो-खो खेल मैदान में होगा जहाँ मैं ख़ुद रेफ़री रहूँगा। बैडमिंटन के लिए भूतल का बहुउद्देशीय हॉल चुना है। नेट वहीं लगेगा। शतरंज का मैच सरिता और नूपुर के बीच होगा। दो मैच शुक्रवार के सामान्य खेल पीरियड में होंगे, पर खो-खो दूसरे और तीसरे पीरियड में होगा। याद रखो, खो-खो टीमों के नाम खेल सूचना-पट पर हैं। शुभकामनाएँ!',
      ],
      items: [
        { q: ['Which pair was chosen to play chess: Rima-Dhiraj, Gita-Hitesh or Sarita-Nupur?', 'शतरंज के लिए कौन-सी जोड़ी चुनी गई: रीमा-धीरज, गीता-हितेश या सरिता-नूपुर?'], a: ['Sarita and Nupur.', 'सरिता और नूपुर।'] },
        { q: ['How many Friday matches will be played?', 'शुक्रवार को कितने मैच होंगे?'], a: ['Three.', 'तीन।'] },
        { q: ["What was put up on the sports' notice board?", 'खेल सूचना-पट पर क्या लगाया गया?'], a: ["The kho-kho teams' name list.", 'खो-खो टीमों के नामों की सूची।'] },
        { q: ["Who will sponsor the kho-kho team's refreshments?", 'खो-खो टीम का नाश्ता कौन देगा?'], a: ['Xydium Sports Club.', 'ज़ाइडियम स्पोर्ट्स क्लब।'] },
        { q: ['Who will be the scorekeeper for chess?', 'शतरंज में स्कोर कौन रखेगा?'], a: ['Vani.', 'वाणी।'] },
        { q: ['Who will be the referee for kho-kho?', 'खो-खो का रेफ़री कौन होगा?'], a: ['The speaker (the sports teacher) himself.', 'वक्ता (खेल शिक्षक) ख़ुद।'] },
        { q: ['Which Friday periods are meant for kho-kho?', 'शुक्रवार के कौन-से पीरियड खो-खो के लिए हैं?'], a: ['The 2nd and 3rd periods.', 'दूसरा और तीसरा पीरियड।'] },
      ],
    },
    {
      type: 'qa',
      title: ["Let us speak: use the magic words 'please', 'thank you' and 'sorry' in these situations.", "आओ बोलें: इन स्थितियों में जादुई शब्द 'please', 'thank you' और 'sorry' का प्रयोग करो।"],
      items: [
        { q: ['Vani wants her friends to take her in their team.', 'वाणी चाहती है कि दोस्त उसे अपनी टीम में लें।'], a: ['Could you please take me in your team during the games period?', 'क्या तुम कृपया खेल के पीरियड में मुझे अपनी टीम में ले सकते हो?'] },
        { q: ['Somiwon wants Hitesh to help clean the classroom cupboard.', 'सोमीवोन चाहती है कि हितेश कक्षा की अलमारी साफ़ करने में मदद करे।'], a: ['Hitesh, please can you help me with cleaning the classroom cupboard?', 'हितेश, क्या तुम कृपया कक्षा की अलमारी साफ़ करने में मेरी मदद कर सकते हो?'] },
        { q: ["Sumit accidentally spilled water on Nupur's desk.", 'सुमित ने ग़लती से नूपुर की डेस्क पर पानी गिरा दिया।'], a: ["I'm sorry, that was my fault. Let me wipe it.", 'माफ़ करना, मेरी ग़लती थी। मैं इसे पोंछ देता हूँ।'] },
        { q: ["Hitesh forgot to bring Simran's Art file.", 'हितेश सिमरन की आर्ट फ़ाइल लाना भूल गया।'], a: ["I'm sorry, Simran. I forgot your file. I will bring it tomorrow.", 'माफ़ करना सिमरन। मैं तुम्हारी फ़ाइल भूल गया। कल ले आऊँगा।'] },
        { q: ['Kriti spoke rudely to Nupur.', 'कृति ने नूपुर से रूखा व्यवहार किया।'], a: ["I'm very sorry for the way I behaved. I was out of line.", 'मुझे अपने व्यवहार के लिए बहुत खेद है। मैंने हद पार कर दी।'] },
        { q: ['Mohan wants to thank Hitesh for helping him practise for the speech competition.', 'मोहन भाषण प्रतियोगिता के अभ्यास में मदद के लिए हितेश को धन्यवाद देना चाहता है।'], a: ['Thank you, Hitesh. It means so much to me that you helped me practise.', 'धन्यवाद हितेश। यह मेरे लिए बहुत मायने रखता है कि तुमने अभ्यास में मदद की।'] },
        { q: ['Meher is grateful that Simran explained a chapter she missed.', 'मेहर आभारी है कि सिमरन ने छूटा हुआ पाठ समझाया।'], a: ['I truly appreciate your help with the chapter. Thank you, Simran.', 'पाठ में तुम्हारी मदद की मैं सच में सराहना करती हूँ। धन्यवाद सिमरन।'] },
        { q: ['Rima thanks Gita for helping collect notebooks from the staff room.', 'रीमा स्टाफ़ रूम से कॉपियाँ लाने में मदद के लिए गीता को धन्यवाद देती है।'], a: ['Thank you so much for helping me carry the notebooks, Gita.', 'कॉपियाँ लाने में मदद के लिए बहुत धन्यवाद, गीता।'] },
      ],
    },
    {
      type: 'fill',
      title: ["Let us write: complete Prabhat's diary with the phrases. (One phrase is extra.)", 'आओ लिखें: वाक्यांशों से प्रभात की डायरी पूरी करो। (एक वाक्यांश फ़ालतू है।)'],
      bank: ['I do not feel happy about it', 'I will lose the match', 'I managed to change the scoreboard', 'Everyone congratulated me after my win', 'He had fun playing with me', 'I won the match', 'Surya did not feel bad', 'I felt very happy'],
      items: [
        { q: ['Today, I defeated Surya in a badminton match but ___.', 'आज मैंने सूर्या को बैडमिंटन में हरा दिया पर मैं इससे ख़ुश नहीं हूँ।'], a: 'I do not feel happy about it' },
        { q: ['He was getting the points easily. I was sure that ___.', 'वह आसानी से अंक जीत रहा था। मुझे यक़ीन था कि मैं मैच हार जाऊँगा।'], a: 'I will lose the match' },
        { q: ['So, when everyone was laughing at a joke he cracked, ___.', 'इसलिए जब सब उसके चुटकुले पर हँस रहे थे, मैंने स्कोरबोर्ड बदल दिया।'], a: 'I managed to change the scoreboard' },
        { q: ['No one noticed the change and ___.', 'किसी ने बदलाव नहीं देखा और जीत के बाद सबने मुझे बधाई दी।'], a: 'Everyone congratulated me after my win' },
        { q: ['What surprised me the most was that he said ___ and we should play again.', 'सबसे हैरानी यह हुई कि उसने कहा उसे मेरे साथ खेलकर मज़ा आया और हमें फिर खेलना चाहिए।'], a: 'He had fun playing with me' },
        { q: ['Though ___, I did not enjoy as I usually do.', 'हालाँकि मैं मैच जीत गया, मुझे हमेशा जैसा आनंद नहीं आया।'], a: 'I won the match' },
        { q: ['It really disturbed me that ___ about losing the match.', 'मुझे यह बात बहुत परेशान कर रही है कि सूर्या को मैच हारने का बुरा नहीं लगा।'], a: 'Surya did not feel bad' },
      ],
    },
    {
      type: 'mcq',
      title: ['Let us explore: Indian sportspersons.', 'आओ जानें: भारतीय खिलाड़ी।'],
      passage: [
        "Deepika Kumari is an archer from Jharkhand. Her father is an auto-rickshaw driver and her mother a nurse. She practised by aiming at mangoes with stones and with homemade bamboo bows and arrows. She joined the Tata Archery Academy and won a gold medal at the 2010 Commonwealth Games. Neeraj Chopra is from Khandra village in Haryana. He was the first Asian athlete to win an Olympic gold medal in javelin throw, and won a silver medal at the 2024 Paris Olympics.",
        'दीपिका कुमारी झारखंड की तीरंदाज़ हैं। उनके पिता ऑटो-रिक्शा चालक और माँ नर्स हैं। उन्होंने पत्थरों से आमों पर निशाना लगाकर और घर के बने बाँस के धनुष-बाण से अभ्यास किया। वे टाटा आर्चरी अकादमी से जुड़ीं और 2010 के राष्ट्रमंडल खेलों में स्वर्ण पदक जीता। नीरज चोपड़ा हरियाणा के खंडरा गाँव से हैं। वे भाला फेंक में ओलंपिक स्वर्ण जीतने वाले पहले एशियाई एथलीट हैं, और 2024 पेरिस ओलंपिक में रजत पदक जीता।',
      ],
      items: [
        { q: ['Deepika Kumari plays which sport?', 'दीपिका कुमारी कौन-सा खेल खेलती हैं?'], options: [['archery', 'तीरंदाज़ी'], ['javelin throw', 'भाला फेंक'], ['badminton', 'बैडमिंटन']], a: 0 },
        { q: ['Neeraj Chopra won an Olympic gold medal in ___.', 'नीरज चोपड़ा ने ___ में ओलंपिक स्वर्ण जीता।'], options: [['archery', 'तीरंदाज़ी'], ['javelin throw', 'भाला फेंक'], ['wrestling', 'कुश्ती']], a: 1 },
      ],
    },
  ],
  'class6-11': [
    {
      type: 'qa',
      title: ['Before we read: talk about your playtime.', 'पढ़ने से पहले: अपने खेलने के समय के बारे में बताओ।'],
      items: [
        { q: ['When do you go to play after school?', 'स्कूल के बाद तुम खेलने कब जाते हो?'], a: ['I go to play at five o\'clock in the evening.', 'मैं शाम पाँच बजे खेलने जाता हूँ।'] },
        { q: ['Who do you play with, and where?', 'तुम किसके साथ और कहाँ खेलते हो?'], a: ['I play with my neighbours in the open ground near our house.', 'मैं अपने पड़ोसियों के साथ घर के पास के खुले मैदान में खेलता हूँ।'] },
        { q: ['Which games do you like playing? When do you come back home?', 'तुम्हें कौन-से खेल पसंद हैं? घर कब लौटते हो?'], a: ['I like playing kabaddi and cricket. Sometimes I come back home after dark.', 'मुझे कबड्डी और क्रिकेट पसंद है। कभी-कभी मैं अँधेरा होने के बाद घर लौटता हूँ।'] },
      ],
    },
    {
      type: 'qa',
      title: ['Let us discuss: write the meaning of the lines.', 'आओ चर्चा करें: पंक्तियों का अर्थ लिखो।'],
      items: [
        { q: ['next to the creek (a creek is a small body of water)', 'next to the creek (creek यानी छोटी जलधारा)'], a: ['The children play near a small stream.', 'बच्चे एक छोटी जलधारा के पास खेलते हैं।'] },
        { q: ["I can't even catch my breath", "I can't even catch my breath"], a: ['The child has been running so fast that she is out of breath.', 'बच्चा इतनी तेज़ दौड़ा है कि उसकी साँस फूल गई है।'] },
        { q: ['When blue dark turns to black', 'When blue dark turns to black'], a: ['Evening is over and it has become night.', 'शाम ख़त्म हो गई है और रात हो गई है।'] },
        { q: ['trees creep close: why do the trees seem close?', 'trees creep close: पेड़ पास क्यों लगते हैं?'], a: ['In the dark, the trees look like shadows that seem to come nearer.', 'अँधेरे में पेड़ परछाइयों जैसे दिखते हैं जो पास आते लगते हैं।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Complete the summary based on the poem.', 'कविता के आधार पर सारांश पूरा करो।'],
      bank: ['ball', 'evening', 'field', 'fast', 'black', 'aching', 'playing'],
      items: [
        { q: ["The children play ___ in the ...", 'बच्चे गेंद खेलते हैं ...'], a: 'ball' },
        { q: ["... in the ___ in the neighbour's ...", '... शाम को, पड़ोसी के ...'], a: 'evening' },
        { q: ["... in the neighbour's ___.", '... पड़ोसी के खेत में।'], a: 'field' },
        { q: ['They run so ___ that they run out of breath.', 'वे इतनी तेज़ दौड़ते हैं कि साँस फूल जाती है।'], a: 'fast' },
        { q: ['They play till the blue sky turns ___.', 'वे तब तक खेलते हैं जब तक नीला आसमान काला न हो जाए।'], a: 'black' },
        { q: ['They can feel their feet ___, now that it is cold.', 'ठंड होने से उन्हें पैरों में दर्द महसूस होता है।'], a: 'aching' },
        { q: ['Finally, they stop ___ and go home as it is night.', 'आख़िर रात होने पर वे खेलना बंद करके घर जाते हैं।'], a: 'playing' },
      ],
    },
    {
      type: 'mcq',
      title: ['Read the lines and choose the correct option.', 'पंक्तियाँ पढ़ो और सही विकल्प चुनो।'],
      passage: [
        "We run so fast / I / can't / even / catch / my / breath. ... When blue dark turns to black, / cold grass aches our feet, / trees creep close-- / game's over. / Night wins!",
        'हम इतनी तेज़ दौड़ते हैं / मैं / साँस / तक / नहीं / ले / पाती। ... जब नीला अँधेरा काला हो जाता है, / ठंडी घास पैरों में चुभती है, / पेड़ पास सरक आते हैं-- / खेल ख़त्म। / रात जीत गई!',
      ],
      items: [
        { q: ['The speaker needs to catch her breath because ___.', 'वक्ता को साँस लेने की ज़रूरत है क्योंकि ___।'], options: [['everyone decides to walk', 'सब चलने का फ़ैसला करते हैं'], ['all the friends wish to go home', 'सब दोस्त घर जाना चाहते हैं'], ['running fast results in being breathless', 'तेज़ दौड़ने से साँस फूल जाती है'], ['they need to do breathing exercises', 'उन्हें साँस के व्यायाम करने हैं']], a: 2 },
        { q: ["Why does 'Night' win? Night wins because the ___.", "'रात' क्यों जीतती है? रात जीतती है क्योंकि ___।"], options: [['time for play has ended', 'खेलने का समय ख़त्म हो गया'], ['children are tired', 'बच्चे थक गए'], ['time to play at home begins', 'घर पर खेलने का समय शुरू होता है'], ['night follows day', 'दिन के बाद रात आती है']], a: 0 },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['Is the speaker alone? Why do you say so?', 'क्या वक्ता अकेली है? ऐसा क्यों कहते हो?'], a: ['No. She says "we play" and "we run", so she is playing with friends.', 'नहीं। वह कहती है "हम खेलते हैं" और "हम दौड़ते हैं", इसलिए वह दोस्तों के साथ खेल रही है।'] },
        { q: ['What does the pattern of one word per line tell us?', 'हर पंक्ति में एक शब्द वाला ढाँचा क्या बताता है?'], a: ['It shows the child is panting and can say only one word at a time, being out of breath.', 'यह दिखाता है कि बच्चा हाँफ रहा है और साँस फूलने से एक बार में एक ही शब्द बोल पा रहा है।'] },
        { q: ['Give one reason why the grass is cold.', 'एक कारण बताओ कि घास ठंडी क्यों है।'], a: ['The sun has set, and dew forms on the grass at night.', 'सूरज डूब गया है, और रात को घास पर ओस जम जाती है।'] },
        { q: ["The children's feet are aching because ...", 'बच्चों के पैरों में दर्द है क्योंकि ...'], a: ['they have been running for a long time and the grass has become cold.', 'वे देर तक दौड़ते रहे हैं और घास ठंडी हो गई है।'] },
      ],
    },
    {
      type: 'task',
      title: ["Let us learn: write your own examples of (1) a pattern of words that shows meaning, like 'The leaves are falling, falling, falling', and (2) personification, like 'Night wins!'.", "आओ सीखें: अपने उदाहरण लिखो (1) ऐसे शब्दों का ढाँचा जो अर्थ दिखाए, जैसे 'The leaves are falling, falling, falling', और (2) मानवीकरण, जैसे 'Night wins!'।"],
      items: [
        { q: ['Pattern', 'ढाँचा'], a: ['The rain is dripping, / dripping, / dripping.', 'बारिश टपक रही है, / टपक रही है, / टपक रही है।'] },
        { q: ['Personification', 'मानवीकरण'], a: ['The wind whistled a song through the trees. The moon smiled at the sleeping village.', 'हवा ने पेड़ों के बीच सीटी बजाकर गाना गाया। चाँद सोते गाँव को देखकर मुस्कुराया।'] },
      ],
    },
    {
      type: 'pick',
      title: ['A creek is a water body. Pick the other water bodies.', 'creek एक जलाशय है। दूसरे जलाशय चुनो।'],
      options: [['river', 'नदी'], ['pond', 'तालाब'], ['mountain', 'पहाड़'], ['lake', 'झील'], ['sea', 'समुद्र'], ['desert', 'रेगिस्तान'], ['waterfall', 'झरना'], ['valley', 'घाटी']],
      answers: [0, 1, 3, 4, 6],
    },
    {
      type: 'mcq',
      title: ['Let us listen: which sport is each riddle about?', 'आओ सुनें: हर पहेली किस खेल के बारे में है?'],
      items: [
        { q: ["Run and pass, run and pass / Kick a black and white ball / Kick it straight into the goal / Watch for mud, don't fall. What sport am I?", 'दौड़ो और पास दो, दौड़ो और पास दो / काली-सफ़ेद गेंद को किक मारो / सीधे गोल में मारो / कीचड़ से बचो, गिरो मत। मैं कौन-सा खेल हूँ?'], options: [['football', 'फ़ुटबॉल'], ['kabaddi', 'कबड्डी'], ['swimming', 'तैराकी'], ['yoga', 'योग']], a: 0 },
        { q: ["Hold your breath, say Hu-tu-tu, / till you touch one or two. / Take care to keep a distance wide / As you run back to your team's side. Which sport am I?", 'साँस रोको, बोलो हू-तू-तू, / जब तक एक-दो को छू न लो। / दूरी बनाए रखना / जब अपनी टीम की ओर वापस भागो। मैं कौन-सा खेल हूँ?'], options: [['football', 'फ़ुटबॉल'], ['kabaddi', 'कबड्डी'], ['swimming', 'तैराकी'], ['yoga', 'योग']], a: 1 },
        { q: ['In the water, hold your breath, / The water is very cool, / Arms turn, legs kick / In the blue pool. Which sport am I?', 'पानी में साँस रोको, / पानी बहुत ठंडा है, / हाथ घूमें, पैर चलें / नीले पूल में। मैं कौन-सा खेल हूँ?'], options: [['football', 'फ़ुटबॉल'], ['kabaddi', 'कबड्डी'], ['swimming', 'तैराकी'], ['yoga', 'योग']], a: 2 },
        { q: ['Breathe in, breathe out! / Practise every day just right, / You will be healthy and fit / Get energy and grow in might. What am I?', 'साँस लो, साँस छोड़ो! / हर दिन सही अभ्यास करो, / तुम स्वस्थ और फ़िट रहोगे / ऊर्जा पाओगे और ताक़तवर बनोगे। मैं क्या हूँ?'], options: [['football', 'फ़ुटबॉल'], ['kabaddi', 'कबड्डी'], ['swimming', 'तैराकी'], ['yoga', 'योग']], a: 3 },
      ],
    },
    {
      type: 'task',
      title: ['Let us speak: enact a parent and a child: (1) coming home late after play, (2) sharing the games you played, (3) bringing a new friend home.', 'आओ बोलें: माता-पिता और बच्चे का अभिनय करो: (1) खेलकर देर से घर आना, (2) खेले गए खेलों के बारे में बताना, (3) नए दोस्त को घर लाना।'],
      items: [{ q: ['Coming home late', 'देर से घर आना'], a: ["Parent: It's already dark! Where were you? I was so worried.\nChild: Sorry, Maa. We were playing a cricket match and it went on longer. I didn't notice the time.\nParent: Next time, come home before it gets dark, or tell me first.\nChild: I promise I will.", 'माँ: अँधेरा हो गया! कहाँ थे तुम? मैं बहुत चिंतित थी।\nबच्चा: माफ़ करना माँ। हम क्रिकेट मैच खेल रहे थे और वह लंबा चल गया। समय का पता नहीं चला।\nमाँ: अगली बार अँधेरा होने से पहले घर आना, या पहले बता देना।\nबच्चा: वादा करता हूँ।'] }],
    },
    {
      type: 'task',
      title: ['Let us write: a paragraph about your playtime (when, with whom, which games, favourite game, what you gain, when you go home). Give a title.', 'आओ लिखें: अपने खेलने के समय पर अनुच्छेद (कब, किसके साथ, कौन-से खेल, पसंदीदा खेल, क्या सीखते हो, घर कब जाते हो)। शीर्षक दो।'],
      items: [{ q: ['My Evening Playtime', 'मेरा शाम का खेल'], a: ['Every day at five o\'clock, I go out to play in the ground near my house. I play with my friends Ravi, Meena and Arif. We play kho-kho, gilli-danda and cricket. My favourite game is kho-kho because it needs speed and teamwork. Playing together keeps us fit and teaches us to share and help each other. We finish playing when it starts getting dark and go home happily.', 'हर दिन पाँच बजे मैं घर के पास के मैदान में खेलने जाता हूँ। मैं अपने दोस्तों रवि, मीना और आरिफ़ के साथ खेलता हूँ। हम खो-खो, गिल्ली-डंडा और क्रिकेट खेलते हैं। मेरा पसंदीदा खेल खो-खो है क्योंकि उसमें तेज़ी और टीमवर्क चाहिए। साथ खेलने से हम फ़िट रहते हैं और बाँटना व एक-दूसरे की मदद करना सीखते हैं। अँधेरा होने लगता है तो हम खेलना बंद करके ख़ुशी-ख़ुशी घर जाते हैं।'] }],
    },
    {
      type: 'task',
      title: ['Let us explore: find native (indigenous) games of Chhattisgarh and other parts of India, like kho-kho, gedi, pitthool and gilli-danda. Learn the rules of one and play it with your class.', 'आओ जानें: छत्तीसगढ़ और भारत के दूसरे हिस्सों के देसी खेल ढूँढो, जैसे खो-खो, गेड़ी, पिट्ठुल और गिल्ली-डंडा। किसी एक के नियम सीखो और कक्षा के साथ खेलो।'],
      items: [{ q: ['Example: Pitthool', 'उदाहरण: पिट्ठुल'], a: ['Two teams. One team knocks down a pile of seven flat stones with a ball, then tries to rebuild it while the other team tries to hit them with the ball.', 'दो टीमें। एक टीम गेंद से सात चपटे पत्थरों का ढेर गिराती है, फिर उसे दोबारा जमाने की कोशिश करती है, जबकि दूसरी टीम उन्हें गेंद से मारने की कोशिश करती है।'] }],
    },
  ],
  'class6-12': [
    {
      type: 'qa',
      title: ['Before we read', 'पढ़ने से पहले'],
      items: [
        { q: ['What do you know about yoga?', 'तुम योग के बारे में क्या जानते हो?'], a: ['Yoga is an ancient Indian practice of postures, breathing and meditation that keeps the body and mind healthy.', 'योग आसन, साँस और ध्यान का एक प्राचीन भारतीय अभ्यास है जो शरीर और मन को स्वस्थ रखता है।'] },
        { q: ['What is 21st June known for? What do we do on this day?', '21 जून किसलिए जाना जाता है? इस दिन हम क्या करते हैं?'], a: ['It is International Yoga Day. People everywhere practise yoga together.', 'यह अंतरराष्ट्रीय योग दिवस है। हर जगह लोग मिलकर योग करते हैं।'] },
        { q: ['List words related to yoga.', 'योग से जुड़े शब्दों की सूची बनाओ।'], a: ['asana, pranayama, meditation, breathing, mat, surya namaskar, balance, stretch', 'आसन, प्राणायाम, ध्यान, साँस, चटाई, सूर्य नमस्कार, संतुलन, खिंचाव'] },
      ],
    },
    {
      type: 'fill',
      title: ['Let us discuss: fill in the blanks with words from the box.', 'आओ चर्चा करें: बॉक्स के शब्दों से रिक्त स्थान भरो।'],
      bank: ['health', 'lifestyle', 'strength', 'balance', 'calm', 'stress', 'sleep'],
      items: [
        { q: ['Yoga improves physical flexibility and also improves mental ___ ...', 'योग शरीर का लचीलापन और मानसिक स्वास्थ्य भी सुधारता है ...'], a: 'health' },
        { q: ['... and leads to a healthier ___.', '... और स्वस्थ जीवनशैली की ओर ले जाता है।'], a: 'lifestyle' },
        { q: ['It involves a series of asanas, which increase muscular ___.', 'इसमें कई आसन होते हैं, जो मांसपेशियों की ताक़त बढ़ाते हैं।'], a: 'strength' },
        { q: ['Practising yoga leads to a better body and mind ___ and reduces body pain.', 'योग से शरीर और मन का संतुलन बेहतर होता है और दर्द घटता है।'], a: 'balance' },
        { q: ['Breathing techniques and meditation make the mind ___, ...', 'साँस की तकनीकें और ध्यान मन को शांत करते हैं, ...'], a: 'calm' },
        { q: ['... lessen ___, ...', '... तनाव घटाते हैं, ...'], a: 'stress' },
        { q: ['... and improve the quality of ___.', '... और नींद की गुणवत्ता सुधारते हैं।'], a: 'sleep' },
      ],
    },
    {
      type: 'qa',
      title: ['Let us think and reflect', 'आओ सोचें और समझें'],
      items: [
        { q: ['What is the aim of yoga?', 'योग का उद्देश्य क्या है?'], a: ['To unite mind and body and make the mind quiet and free from distractions, for overall well-being.', 'मन और शरीर को जोड़ना और मन को शांत व भटकाव से मुक्त करना, ताकि संपूर्ण स्वास्थ्य मिले।'] },
        { q: ['Explain the idea of unity in yoga.', 'योग में एकता का विचार समझाओ।'], a: ["'Yoga' comes from 'yuj', meaning 'to join'. It joins mind and body, thought and action, and brings harmony between humans and nature.", "'योग' 'युज्' से बना है, जिसका अर्थ है 'जोड़ना'। यह मन और शरीर, विचार और कर्म को जोड़ता है, और इंसान व प्रकृति में सामंजस्य लाता है।"] },
        { q: ['What does the launch of the WHO mYoga app tell us about the importance of yoga?', 'WHO mYoga ऐप के लॉन्च से योग के महत्व के बारे में क्या पता चलता है?'], a: ['That yoga is recognised all over the world for its health benefits, and people everywhere are encouraged to practise it.', 'कि योग को उसके स्वास्थ्य लाभों के लिए पूरी दुनिया में माना जाता है, और हर जगह लोगों को इसे करने के लिए प्रोत्साहित किया जाता है।'] },
        { q: ["Describe one long-term effect yoga can have on a person's qualities.", 'योग का किसी व्यक्ति के गुणों पर एक दीर्घकालिक असर बताओ।'], a: ['A person becomes calmer, more patient and better at concentrating.', 'व्यक्ति ज़्यादा शांत, धैर्यवान और एकाग्र हो जाता है।'] },
      ],
    },
    {
      type: 'task',
      title: ["Let us learn: Antakshari of words. Start with 'yoga'; the next word begins with its last letter 'a'.", "आओ सीखें: शब्दों की अंत्याक्षरी। 'yoga' से शुरू करो; अगला शब्द उसके आख़िरी अक्षर 'a' से शुरू होगा।"],
      items: [{ q: ['Example chain', 'उदाहरण'], a: ['yoga → asana → apple → energy → yellow → water → river → rest', 'yoga → asana → apple → energy → yellow → water → river → rest'] }],
    },
    {
      type: 'fill',
      title: ["'practice' is a noun; 'practise' is a verb. Fill in the right word.", "'practice' संज्ञा है; 'practise' क्रिया है। सही शब्द भरो।"],
      bank: ['practice', 'practise'],
      items: [
        { q: ['It is important to have a regular ___ of stretching every morning.', 'हर सुबह खिंचाव का नियमित अभ्यास ज़रूरी है।'], a: 'practice' },
        { q: ['I ___ yoga every day to keep my mind and body healthy.', 'मैं मन और शरीर स्वस्थ रखने के लिए रोज़ योग करता हूँ।'], a: 'practise' },
        { q: ['You can join the hockey team but it requires a lot of ___.', 'तुम हॉकी टीम में आ सकते हो पर उसमें बहुत अभ्यास चाहिए।'], a: 'practice' },
        { q: ['Our coach asked us to ___ running on grass.', 'कोच ने हमें घास पर दौड़ने का अभ्यास करने को कहा।'], a: 'practise' },
        { q: ['I ___ deep breathing exercises when I feel stressed.', 'तनाव होने पर मैं गहरी साँस के व्यायाम करता हूँ।'], a: 'practise' },
        { q: ['Eating fruits and vegetables should be a daily ___.', 'फल और सब्ज़ियाँ खाना रोज़ की आदत होनी चाहिए।'], a: 'practice' },
      ],
    },
    {
      type: 'fill',
      title: ["'advice' is a noun; 'advise' is a verb. Fill in the right word.", "'advice' संज्ञा है; 'advise' क्रिया है। सही शब्द भरो।"],
      bank: ['advice', 'advise'],
      items: [
        { q: ["My grandfather's ___ is to sleep early.", 'दादाजी की सलाह है कि जल्दी सोओ।'], a: 'advice' },
        { q: ['Doctors ___ us to drink plenty of water.', 'डॉक्टर हमें ख़ूब पानी पीने की सलाह देते हैं।'], a: 'advise' },
        { q: ['Thank you for your helpful ___.', 'तुम्हारी उपयोगी सलाह के लिए धन्यवाद।'], a: 'advice' },
        { q: ['I ___ you to warm up before running.', 'मैं तुम्हें दौड़ने से पहले वॉर्म-अप करने की सलाह देता हूँ।'], a: 'advise' },
      ],
    },
    {
      type: 'task',
      title: ["Make as many words as you can with the letters Y, R, E, A, N, G, O. Use 'A' in every word.", "Y, R, E, A, N, G, O अक्षरों से जितने हो सकें शब्द बनाओ। हर शब्द में 'A' हो।"],
      items: [{ q: ['Some words', 'कुछ शब्द'], a: ['yoga, orange, range, anger, organ, groan, year, gear, near, yarn, age, ear, ran, nag', 'yoga, orange, range, anger, organ, groan, year, gear, near, yarn, age, ear, ran, nag'] }],
    },
    {
      type: 'tf',
      title: ['Let us listen: a girl talks about practising yoga. True or false?', 'आओ सुनें: एक लड़की योग के बारे में बताती है। सही या ग़लत?'],
      passage: [
        "Namaste everyone! I wish to share with you all that I do simple yoga exercises with my grandfather. He has been practising yoga since he was 16 years old. My grandfather is fit and strong even at the age of 65. I am sure that this is the result of many good habits. I know that eating a balanced diet regularly and making yoga a part of his life have been hundred per cent effective. When I accompany my grandfather to the park, I see so many people, young and old, doing yogic breathing exercises. I like doing these exercises. Whenever I'm a little worried about an Inter-House competition, I always remember to do some of these exercises early morning that day. It relaxes me and makes me feel focused and calm. I plan on learning some asanas from my grandfather during the summer vacations. Wish me luck!",
        'नमस्ते सबको! मैं बताना चाहती हूँ कि मैं अपने दादाजी के साथ सरल योग व्यायाम करती हूँ। वे 16 साल की उम्र से योग कर रहे हैं। 65 साल की उम्र में भी दादाजी फ़िट और मज़बूत हैं। मुझे यक़ीन है कि यह कई अच्छी आदतों का नतीजा है। मुझे पता है कि नियमित संतुलित आहार और योग को जीवन का हिस्सा बनाना सौ प्रतिशत असरदार रहा है। जब मैं दादाजी के साथ पार्क जाती हूँ, तो बहुत-से लोगों, बच्चों और बड़ों, को योगिक साँस के व्यायाम करते देखती हूँ। मुझे ये व्यायाम पसंद हैं। जब भी मैं इंटर-हाउस प्रतियोगिता को लेकर थोड़ी चिंतित होती हूँ, उस दिन सुबह ये व्यायाम ज़रूर करती हूँ। इससे मुझे आराम मिलता है और मैं एकाग्र और शांत महसूस करती हूँ। मैं गर्मी की छुट्टियों में दादाजी से कुछ आसन सीखने की योजना बना रही हूँ। मुझे शुभकामनाएँ दो!',
      ],
      items: [
        { q: ['The girl sees people at the park doing breathing exercises.', 'लड़की पार्क में लोगों को साँस के व्यायाम करते देखती है।'], a: true },
        { q: ['Her grandfather began practising yoga sixteen years ago.', 'दादाजी ने सोलह साल पहले योग शुरू किया।'], a: false },
        { q: ['The girl practises some easy yoga exercises with her grandfather.', 'लड़की दादाजी के साथ कुछ आसान योग व्यायाम करती है।'], a: true },
        { q: ['The girl practises breathing exercises to relax.', 'लड़की आराम के लिए साँस के व्यायाम करती है।'], a: true },
        { q: ['Her grandfather is fit even though he has untimely meals.', 'दादाजी बेसमय खाना खाने के बावजूद फ़िट हैं।'], a: false },
        { q: ["Her grandfather's regular yoga practice has kept him strong.", 'दादाजी के नियमित योग ने उन्हें मज़बूत रखा है।'], a: true },
        { q: ['The girl wishes to learn asanas over the weekend.', 'लड़की सप्ताहांत में आसन सीखना चाहती है।'], a: false },
      ],
    },
    {
      type: 'task',
      title: ["Let us speak: share your 'yoga thoughts' in groups of four: I practise yoga because..., My favourite thing about yoga is..., I wish to practise yoga because...", "आओ बोलें: चार के समूह में अपने 'योग विचार' बताओ: I practise yoga because..., My favourite thing about yoga is..., I wish to practise yoga because..."],
      items: [{ q: ['Sample', 'नमूना'], a: ['I practise yoga because it makes me feel fresh in the morning. My favourite thing about yoga is the tree pose, because it improves my balance. I feel calm and happy after a yoga session.', 'मैं योग करता हूँ क्योंकि इससे सुबह ताज़गी मिलती है। योग में मुझे वृक्षासन सबसे पसंद है, क्योंकि इससे संतुलन बढ़ता है। योग के बाद मैं शांत और ख़ुश महसूस करता हूँ।'] }],
    },
    {
      type: 'task',
      title: ["Let us write: a short paragraph on 'The Benefits of Yoga'.", "आओ लिखें: 'योग के लाभ' पर छोटा अनुच्छेद।"],
      items: [{ q: ['The Benefits of Yoga', 'योग के लाभ'], a: ['Yoga is important because it keeps both our body and mind healthy. One benefit of yoga that interests me is that it improves concentration, which helps in studies. A popular yoga pose is Surya Namaskar because it exercises the whole body. Yoga is not just physical exercise; it also calms the mind and reduces stress. Practising yoga can help people sleep better and stay fit. Finally, yoga can be a great way to start a happy, healthy day.', 'योग ज़रूरी है क्योंकि यह हमारे शरीर और मन दोनों को स्वस्थ रखता है। योग का एक लाभ जो मुझे अच्छा लगता है वह है एकाग्रता बढ़ना, जो पढ़ाई में मदद करता है। एक लोकप्रिय आसन सूर्य नमस्कार है क्योंकि इससे पूरे शरीर का व्यायाम होता है। योग सिर्फ़ शारीरिक व्यायाम नहीं; यह मन को शांत करता है और तनाव घटाता है। योग से लोग बेहतर सोते हैं और फ़िट रहते हैं। अंत में, योग एक ख़ुश और स्वस्थ दिन की शुरुआत का बढ़िया तरीक़ा है।'] }],
    },
    {
      type: 'mcq',
      title: ['Let us explore: do you know?', 'आओ जानें: क्या तुम जानते हो?'],
      passage: [
        "A few seals of the Sindhu-Sarasvati Civilisation, dating back to 2700 BC, show that yoga was practised in ancient India. On 11th December 2014, the United Nations General Assembly, with 193 members, accepted the proposal to celebrate 21st June as International Yoga Day.",
        'सिंधु-सरस्वती सभ्यता की 2700 ईसा पूर्व की कुछ मुहरें दिखाती हैं कि प्राचीन भारत में योग प्रचलित था। 11 दिसंबर 2014 को संयुक्त राष्ट्र महासभा ने, जिसके 193 सदस्य हैं, 21 जून को अंतरराष्ट्रीय योग दिवस मनाने का प्रस्ताव स्वीकार किया।',
      ],
      items: [
        { q: ['International Yoga Day is celebrated on ___.', 'अंतरराष्ट्रीय योग दिवस ___ को मनाया जाता है।'], options: [['21st June', '21 जून'], ['11th December', '11 दिसंबर'], ['20th June', '20 जून']], a: 0 },
        { q: ["The word 'yoga' comes from the Sanskrit root 'yuj', which means ___.", "'योग' शब्द संस्कृत धातु 'युज्' से बना है, जिसका अर्थ है ___।"], options: [['to stretch', 'खींचना'], ['to join or unite', 'जोड़ना या मिलाना'], ['to breathe', 'साँस लेना']], a: 1 },
        { q: ['Who presented yoga in a systematic way in the Yoga Sutras?', 'योग सूत्र में योग को व्यवस्थित रूप में किसने प्रस्तुत किया?'], options: [['Sage Patanjali', 'महर्षि पतंजलि'], ['Sage Valmiki', 'महर्षि वाल्मीकि'], ['Sage Vyasa', 'महर्षि व्यास']], a: 0 },
      ],
    },
  ],
  'class6-13': [
    {
      type: 'qa',
      title: ['Let us discuss: Hamara Bharat', 'आओ चर्चा करें: हमारा भारत'],
      items: [
        { q: ['What has Bharat always been known for?', 'भारत हमेशा किसलिए जाना गया है?'], a: ['As a land of wise and heroic individuals.', 'बुद्धिमान और वीर लोगों की धरती के रूप में।'] },
        { q: ['What is attractive about Bharat?', 'भारत में आकर्षक क्या है?'], a: ['Its rich and diverse culture, which has attracted travellers since ancient times.', 'इसकी समृद्ध और विविध संस्कृति, जिसने प्राचीन काल से यात्रियों को आकर्षित किया है।'] },
        { q: ['What is special about the fact that the people live here in unison?', 'यहाँ लोगों के मिलजुलकर रहने में ख़ास क्या है?'], a: ['Though different, they live together and show the world unity in diversity.', 'अलग-अलग होकर भी वे साथ रहते हैं और दुनिया को अनेकता में एकता दिखाते हैं।'] },
        { q: ['What geographical features does the passage mention?', 'अनुच्छेद में कौन-सी भौगोलिक विशेषताएँ बताई गई हैं?'], a: ['Rivers, lakes, high mountains and green forests.', 'नदियाँ, झीलें, ऊँचे पहाड़ और हरे जंगल।'] },
        { q: ['What is the advice given to everyone?', 'सबको क्या सलाह दी गई है?'], a: ['To keep working hard and make sure that Bharat prospers.', 'मेहनत करते रहें और सुनिश्चित करें कि भारत समृद्ध हो।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Before we read: complete the words with the correct vowels.', 'पढ़ने से पहले: सही स्वरों से शब्द पूरे करो।'],
      items: [
        { q: ['We like to decorate our homes with our f_lk _rt (= ___).', 'हम अपने घरों को लोक कला से सजाते हैं।'], a: 'folk art', options: ['folk art', 'fork art', 'folk ant'] },
        { q: ['Our c_lt_re (= ___) consists of our ideas, customs, traditions, values, arts and languages.', 'हमारी संस्कृति में हमारे विचार, रीति-रिवाज, परंपराएँ, मूल्य, कलाएँ और भाषाएँ हैं।'], a: 'culture', options: ['culture', 'cultare', 'coltire'] },
        { q: ['All of us celebrate our f_st_v_ls (= ___) together.', 'हम सब अपने त्योहार साथ मनाते हैं।'], a: 'festivals', options: ['festivals', 'fastivals', 'festavels'] },
        { q: ['We tell stories to teach children about our culture, h_st_ry (= ___) and legends.', 'हम बच्चों को संस्कृति, इतिहास और किंवदंतियों के बारे में कहानियाँ सुनाते हैं।'], a: 'history', options: ['history', 'hostery', 'histary'] },
        { q: ['We have our own l_ng_ag_s (= ___) to talk to each other.', 'आपस में बात करने के लिए हमारी अपनी भाषाएँ हैं।'], a: 'languages', options: ['languages', 'lengueges', 'langoages'] },
      ],
    },
    {
      type: 'qa',
      title: ['Let us discuss: Ek Bharat, Shreshtha Bharat', 'आओ चर्चा करें: एक भारत, श्रेष्ठ भारत'],
      items: [
        { q: ['What is the Ek Bharat, Shreshtha Bharat programme all about?', 'एक भारत, श्रेष्ठ भारत कार्यक्रम किस बारे में है?'], a: ['Knowing that we all belong to one nation, and that our unity in diversity makes us a wonderful country.', 'यह जानना कि हम सब एक राष्ट्र के हैं, और हमारी अनेकता में एकता हमें एक अद्भुत देश बनाती है।'] },
        { q: ['Why is this programme being conducted?', 'यह कार्यक्रम क्यों किया जा रहा है?'], a: ['So that children from different states can meet, learn about each other\'s culture and feel a common bond.', 'ताकि अलग-अलग राज्यों के बच्चे मिलें, एक-दूसरे की संस्कृति जानें और एक साझा बंधन महसूस करें।'] },
      ],
    },
    {
      type: 'match',
      title: ['Complete the table: match each child with their state and art form.', 'तालिका पूरी करो: हर बच्चे को उसके राज्य और कला से मिलाओ।'],
      pairs: [
        [['Aakansha', 'आकांक्षा'], ['Uttarakhand: Aipan', 'उत्तराखंड: ऐपण']],
        [['Priya Dhruv', 'प्रिया ध्रुव'], ['Chhattisgarh: Dhokra metal craft', 'छत्तीसगढ़: ढोकरा धातु शिल्प']],
        [['Chitra', 'चित्रा'], ['Kerala: coconut shell craft', 'केरल: नारियल खोल शिल्प']],
        [['Balamurali', 'बालमुरली'], ['Andhra Pradesh: Kondapalli toys', 'आंध्र प्रदेश: कोंडापल्ली खिलौने']],
      ],
    },
    {
      type: 'match',
      title: ['Match each art form with the things needed.', 'हर कला को उसमें लगने वाली चीज़ों से मिलाओ।'],
      pairs: [
        [['Aipan', 'ऐपण'], ['white rice flour paste, geru (red clay)', 'सफ़ेद चावल के आटे का घोल, गेरू']],
        [['Dhokra', 'ढोकरा'], ['clay, wax, brass scrap, fire', 'मिट्टी, मोम, पीतल का कबाड़, आग']],
        [['Coconut shell craft', 'नारियल खोल शिल्प'], ['coconut shell, sandpaper, a base, wood polish', 'नारियल का खोल, रेगमाल, आधार, लकड़ी की पॉलिश']],
        [['Kondapalli toys', 'कोंडापल्ली खिलौने'], ['soft wood, makku paste, colours', 'नरम लकड़ी, मक्कू का लेप, रंग']],
      ],
    },
    {
      type: 'fill',
      title: ['Fill in the blanks.', 'रिक्त स्थान भरो।'],
      items: [
        { q: ['The designs for Aipan are taken from cultural traditions and ___.', 'ऐपण के डिज़ाइन सांस्कृतिक परंपराओं और प्रकृति के अवलोकन से लिए जाते हैं।'], a: 'observations of nature', options: ['observations of nature', 'old books', 'computers'] },
        { q: ['Dhokra metal craft is said to be very old because it is ___ old.', 'ढोकरा धातु शिल्प बहुत पुराना है क्योंकि यह 4000 साल पुराना है।'], a: 'about 4000 years', options: ['about 400 years', 'about 4000 years', 'about 40 years'] },
        { q: ['A base is needed for coconut shell craft to make it ___.', 'नारियल खोल शिल्प को स्थिर बनाने के लिए आधार चाहिए।'], a: 'stable', options: ['shiny', 'stable', 'smooth'] },
        { q: ['Soft wood, ___ and colours are used to make Kondapalli toys.', 'कोंडापल्ली खिलौने नरम लकड़ी, मक्कू और रंगों से बनते हैं।'], a: 'makku', options: ['makku', 'wax', 'geru'] },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ["Why does Aakansha's family make Aipan?", 'आकांक्षा का परिवार ऐपण क्यों बनाता है?'], a: ['It is their folk art, drawn on family functions and festivals.', 'यह उनकी लोक कला है, जो पारिवारिक समारोहों और त्योहारों पर बनाई जाती है।'] },
        { q: ['In Dhokra, why does wax come out of the small openings?', 'ढोकरा में मोम छोटे छेदों से बाहर क्यों आता है?'], a: ['When the clay-covered figure is put in the fire, the wax melts and flows out, leaving an empty space for the melted brass.', 'मिट्टी से ढकी आकृति को आग में रखने पर मोम पिघलकर बाहर बहता है, और पिघले पीतल के लिए ख़ाली जगह छोड़ता है।'] },
        { q: ["What is common in Kondapalli toys and Kerala's coconut shell craft?", 'कोंडापल्ली खिलौनों और केरल के नारियल खोल शिल्प में क्या समान है?'], a: ['Both are handmade from natural materials (wood, coconut shell) found locally, and are shaped and finished step by step.', 'दोनों स्थानीय प्राकृतिक चीज़ों (लकड़ी, नारियल खोल) से हाथ से बनते हैं, और चरण-दर-चरण आकार देकर तैयार किए जाते हैं।'] },
      ],
    },
    {
      type: 'fill',
      title: ['Order words: complete the paragraph. Use each word only once.', 'क्रम बताने वाले शब्द: अनुच्छेद पूरा करो। हर शब्द एक बार।'],
      bank: ['First', 'Then', 'After that', 'Next', 'Finally'],
      items: [
        { q: ['How I Get Ready for School: ___, I get up and go to take a shower.', 'मैं स्कूल के लिए कैसे तैयार होता हूँ: पहले मैं उठकर नहाने जाता हूँ।'], a: 'First' },
        { q: ['___, I wear my school dress.', 'फिर मैं स्कूल ड्रेस पहनता हूँ।'], a: 'Then' },
        { q: ['___, I eat my food.', 'उसके बाद मैं खाना खाता हूँ।'], a: 'After that' },
        { q: ['___, I wear my shoes.', 'अगला, मैं जूते पहनता हूँ।'], a: 'Next' },
        { q: ['___, I pick up my bag and go out of my home.', 'आख़िर में, मैं बैग उठाकर घर से निकलता हूँ।'], a: 'Finally' },
      ],
    },
    {
      type: 'fill',
      title: ['Simple present: with he, she and it, add -s/-es to the verb.', 'सामान्य वर्तमान: he, she और it के साथ क्रिया में -s/-es लगाओ।'],
      items: [
        { q: ['He ___ very loudly.', 'वह बहुत ज़ोर से बोलता है।'], a: 'speaks', options: ['speak', 'speaks'] },
        { q: ['She ___ beautiful flowers.', 'वह सुंदर फूल बनाती है।'], a: 'draws', options: ['draw', 'draws'] },
        { q: ['We ___ paintings in free periods.', 'हम ख़ाली पीरियड में चित्र बनाते हैं।'], a: 'make', options: ['make', 'makes'] },
        { q: ['They ___ spellings on Friday.', 'वे शुक्रवार को वर्तनी का अभ्यास करते हैं।'], a: 'practise', options: ['practise', 'practises'] },
        { q: ['You ___ questions to understand.', 'तुम समझने के लिए प्रश्न पूछते हो।'], a: 'ask', options: ['ask', 'asks'] },
        { q: ['Grandma ___ a story every day.', 'दादी हर दिन कहानी सुनाती हैं।'], a: 'tells', options: ['tell', 'tells'] },
      ],
    },
    {
      type: 'fill',
      title: ['Let us listen: Sushil describes gakkad bharta. Complete the notes.', 'आओ सुनें: सुशील गक्कड़ भरता के बारे में बताता है। नोट्स पूरे करो।'],
      passage: [
        'Namaste! You must be tired and hungry after listening to so many people. I am Sushil from Jabalpur in Madhya Pradesh. Let me tell you a unique dish of my district. It is called gakkad bharta. First, we make gakkad from wheat dough. Then, we make balls with that dough and roast them on high heat. To make bharta, we roast brinjals and tomatoes. Then we garnish the bharta with chopped onions, coriander, green chillis and salt. This food item is made without frying. To eat it, you simply crumble the gakkad and drizzle it with some bharta and a spoonful of ghee. Come to Jabalpur and try it!',
        'नमस्ते! इतने लोगों को सुनकर तुम थक गए होगे और भूख लगी होगी। मैं मध्य प्रदेश के जबलपुर से सुशील हूँ। मैं तुम्हें अपने ज़िले का एक अनोखा व्यंजन बताता हूँ। इसे गक्कड़ भरता कहते हैं। पहले हम गेहूँ के आटे से गक्कड़ बनाते हैं। फिर उस आटे के गोले बनाकर तेज़ आँच पर सेंकते हैं। भरता बनाने के लिए हम बैंगन और टमाटर भूनते हैं। फिर भरते में कटा प्याज़, धनिया, हरी मिर्च और नमक डालते हैं। यह व्यंजन बिना तले बनता है। खाने के लिए गक्कड़ को तोड़ो, उस पर थोड़ा भरता और एक चम्मच घी डालो। जबलपुर आकर इसे ज़रूर चखो!',
      ],
      bank: ['Sushil', 'Jabalpur', 'Madhya Pradesh', 'gakkad bharta', 'brinjals and tomatoes', 'wheat', 'roast', 'chopped', 'bharta'],
      items: [
        { q: ['Name of the speaker: ___', 'वक्ता का नाम: ___'], a: 'Sushil' },
        { q: ['The town of the speaker: ___', 'वक्ता का शहर: ___'], a: 'Jabalpur' },
        { q: ['The state he belongs to: ___', 'उसका राज्य: ___'], a: 'Madhya Pradesh' },
        { q: ['The name of the food item: ___', 'व्यंजन का नाम: ___'], a: 'gakkad bharta' },
        { q: ['Vegetables roasted for bharta: ___', 'भरते के लिए भूनी गई सब्ज़ियाँ: ___'], a: 'brinjals and tomatoes' },
        { q: ['To make gakkad, make balls of ___ dough ...', 'गक्कड़ बनाने के लिए गेहूँ के आटे के गोले बनाओ ...'], a: 'wheat' },
        { q: ['... and ___ them on high heat.', '... और उन्हें तेज़ आँच पर सेंको।'], a: 'roast' },
        { q: ['Garnish the bharta with ___ onions, coriander, green chillies and salt.', 'भरते में कटा प्याज़, धनिया, हरी मिर्च और नमक डालो।'], a: 'chopped' },
        { q: ['To serve, crumble the gakkad, put some ___ on it and add one spoon of ghee.', 'परोसने के लिए गक्कड़ तोड़ो, उस पर भरता डालो और एक चम्मच घी डालो।'], a: 'bharta' },
      ],
    },
    {
      type: 'task',
      title: ['Let us speak and write: speak about a local art form of your region (name, things needed, how it is made). Then write five sentences about the art form you liked most from the lesson.', 'आओ बोलें और लिखें: अपने क्षेत्र की किसी लोक कला के बारे में बोलो (नाम, ज़रूरी चीज़ें, कैसे बनती है)। फिर पाठ की सबसे पसंदीदा कला पर पाँच वाक्य लिखो।'],
      items: [{ q: ['Dhokra (sample)', 'ढोकरा (नमूना)'], a: ['I know about the art form called Dhokra from Bastar. They need clay, wax, brass scrap and fire. To make it, first they shape a clay figure and cover it with wax. After that, they carve fine details and cover it with clay again. Next, they heat it so the wax melts out, then pour in melted brass. At last, they break the clay and polish the metal figure. I like it most because it is 4000 years old and every piece is unique.', 'मैं बस्तर की ढोकरा कला के बारे में जानता हूँ। इसमें मिट्टी, मोम, पीतल का कबाड़ और आग लगती है। बनाने के लिए पहले मिट्टी की आकृति बनाकर उस पर मोम चढ़ाते हैं। उसके बाद बारीक नक़्क़ाशी करके फिर मिट्टी से ढकते हैं। फिर गर्म करते हैं ताकि मोम पिघलकर निकल जाए, और पिघला पीतल डालते हैं। आख़िर में मिट्टी तोड़कर धातु की आकृति चमकाते हैं। मुझे यह सबसे पसंद है क्योंकि यह 4000 साल पुरानी है और हर टुकड़ा अनोखा होता है।'] }],
    },
    {
      type: 'match',
      title: ['Let us explore: natural colours for Madhubani painting (Bihar). Match each colour with its source.', 'आओ जानें: मधुबनी चित्रकला (बिहार) के प्राकृतिक रंग। हर रंग को उसके स्रोत से मिलाओ।'],
      pairs: [
        [['yellow', 'पीला'], ['haldi (turmeric)', 'हल्दी']],
        [['green', 'हरा'], ['leaves', 'पत्तियाँ']],
        [['red', 'लाल'], ['red flowers, geru or sindoor', 'लाल फूल, गेरू या सिंदूर']],
        [['orange', 'नारंगी'], ['flowers', 'फूल']],
        [['blue', 'नीला'], ['neel (indigo powder)', 'नील']],
      ],
    },
    {
      type: 'task',
      title: ['Let us explore: collect pictures of Chhattisgarh handicrafts and fabrics (bamboo craft, terracotta, woodcraft, kosa fabric) and write short notes.', 'आओ जानें: छत्तीसगढ़ के हस्तशिल्प और कपड़ों (बाँस शिल्प, टेराकोटा, काष्ठ शिल्प, कोसा कपड़ा) की तस्वीरें जमा करो और छोटे नोट लिखो।'],
      items: [{ q: ['Kosa fabric (sample note)', 'कोसा कपड़ा (नमूना नोट)'], a: ['Kosa is a natural silk made from silkworms that live on trees like arjun and saja. It is famous in Champa and Raigarh. Kosa sarees have a golden shine and are woven by hand.', 'कोसा एक प्राकृतिक रेशम है जो अर्जुन और साजा जैसे पेड़ों पर रहने वाले रेशम के कीड़ों से बनता है। यह चांपा और रायगढ़ में प्रसिद्ध है। कोसा साड़ियों में सुनहरी चमक होती है और ये हाथ से बुनी जाती हैं।'] }],
    },
  ],
  'class6-14': [
    {
      type: 'fill',
      title: ['Before we read: look at the picture of a child flying a kite and complete the sentences.', 'पढ़ने से पहले: पतंग उड़ाते बच्चे की तस्वीर देखकर वाक्य पूरे करो।'],
      bank: ['windy', 'flying', 'looking', 'has ribbons'],
      items: [
        { q: ['The weather in the picture is ___.', 'तस्वीर में मौसम हवादार है।'], a: 'windy' },
        { q: ['The kite is ___ high in the sky.', 'पतंग आसमान में ऊँची उड़ रही है।'], a: 'flying' },
        { q: ['The child is ___ from below.', 'बच्चा नीचे से देख रहा है।'], a: 'looking' },
        { q: ['The tail of the kite ___.', 'पतंग की पूँछ में रिबन हैं।'], a: 'has ribbons' },
      ],
    },
    {
      type: 'tf',
      title: ['Let us discuss: read the poem and mark true or false.', 'आओ चर्चा करें: कविता पढ़ो और सही या ग़लत बताओ।'],
      items: [
        { q: ['The child is looking at the kites.', 'बच्चा पतंगों को देख रहा है।'], a: true },
        { q: ['The kites look like birds of different colours.', 'पतंगें अलग-अलग रंगों के पक्षियों जैसी दिखती हैं।'], a: true },
        { q: ['It was a rainy day.', 'उस दिन बारिश हो रही थी।'], a: false },
        { q: ['The child wants to be like a kite.', 'बच्चा पतंग जैसा बनना चाहता है।'], a: false },
        { q: ['The child wishes to climb on a kite.', 'बच्चा पतंग पर चढ़ना चाहता है।'], a: true },
        { q: ['The kite is made of cloth and plastic.', 'पतंग कपड़े और प्लास्टिक की बनी है।'], a: false },
        { q: ['The child wants to ride the kite.', 'बच्चा पतंग की सवारी करना चाहता है।'], a: true },
        { q: ['The child knows they would have fun.', 'बच्चा जानता है कि मज़ा आएगा।'], a: true },
        { q: ['The child wants to look at the kite from a rooftop.', 'बच्चा छत से पतंग देखना चाहता है।'], a: false },
        { q: ['The child would like to look at people down below.', 'बच्चा नीचे के लोगों को देखना चाहेगा।'], a: true },
        { q: ['The child knows that the people would stare.', 'बच्चा जानता है कि लोग घूरेंगे।'], a: true },
      ],
    },
    {
      type: 'fill',
      title: ["Simile: comparing with 'like' or 'as'. Complete the sentences.", "उपमा: 'like' या 'as' से तुलना। वाक्य पूरे करो।"],
      items: [
        { q: ['The kites have been compared to ___ because they fly in the sky and are colourful.', 'पतंगों की तुलना पक्षियों से की गई है क्योंकि वे आसमान में उड़ती हैं और रंगीन हैं।'], a: 'birds', options: ['birds', 'clouds', 'flowers'] },
        { q: ['The child wishes to be as ___ as air.', 'बच्चा हवा जितना हल्का होना चाहता है।'], a: 'light', options: ['light', 'fast', 'cold'] },
        { q: ['The child wishes this to be able to ___ on a kite and fly.', 'बच्चा ऐसा इसलिए चाहता है ताकि पतंग पर चढ़कर उड़ सके।'], a: 'climb', options: ['climb', 'sleep', 'sit'] },
      ],
    },
    {
      type: 'qa',
      title: ['Alliteration and repetition', 'अनुप्रास और पुनरावृत्ति'],
      items: [
        { q: ['Stanza 1: which words begin with the same consonant sound?', 'पद 1: कौन-से शब्द एक ही व्यंजन ध्वनि से शुरू होते हैं?'], a: ['"wind-whipped" (the /w/ sound)', '"wind-whipped" (/व/ ध्वनि)'] },
        { q: ['Stanza 3: which words begin with the same consonant sound?', 'पद 3: कौन-से शब्द एक ही व्यंजन ध्वनि से शुरू होते हैं?'], a: ['"wild wind" (the /w/ sound); also "songs ... sings" (/s/)', '"wild wind" (/व/ ध्वनि); साथ ही "songs ... sings" (/स/)'] },
        { q: ['Create 4 other sets of words using alliteration.', 'अनुप्रास वाले शब्दों के 4 और समूह बनाओ।'], a: ['busy buzzing bees; red rose; little lazy lion; silly snake', 'busy buzzing bees; red rose; little lazy lion; silly snake'] },
        { q: ['In the last stanza, which two words does the poet repeat, and why?', 'अंतिम पद में कवयित्री कौन-से दो शब्द दोहराती है, और क्यों?'], a: ['"High, high", to tell us that the kite is flying very high.', '"High, high", यह बताने के लिए कि पतंग बहुत ऊँची उड़ रही है।'] },
      ],
    },
    {
      type: 'match',
      title: ['Rhyming words at the end of the lines.', 'पंक्तियों के अंत के तुकांत शब्द।'],
      pairs: [
        [['fly', 'fly'], ['sky', 'sky']],
        [['air', 'air'], ['there', 'there']],
        [['wings', 'wings'], ['sings', 'sings']],
        [['down', 'down'], ['town', 'town']],
        [['stare', 'stare'], ['air', 'air']],
      ],
    },
    {
      type: 'mcq',
      title: ['Read the lines and choose.', 'पंक्तियाँ पढ़ो और चुनो।'],
      passage: [
        'What fun it would be / To look right down, / Over the park / And the rooftops of town.',
        'कितना मज़ा आएगा / ठीक नीचे देखने में, / पार्क के ऊपर से / और शहर की छतों के ऊपर से।',
      ],
      items: [
        { q: ["Which word does not share the same feeling as 'fun'?", "कौन-सा शब्द 'fun' जैसा भाव नहीं रखता?"], options: [['joy', 'आनंद'], ['excitement', 'उत्साह'], ['care', 'चिंता/परवाह'], ['happiness', 'ख़ुशी']], a: 2 },
        { q: ['Which line tells us that the poet was somewhere above?', 'कौन-सी पंक्ति बताती है कि कवयित्री कहीं ऊपर थी?'], options: [['What fun it would be', 'कितना मज़ा आएगा'], ['To look right down', 'ठीक नीचे देखने में'], ['Over the park', 'पार्क के ऊपर से']], a: 1 },
        { q: ['Which scene did the child see?', 'बच्चे ने कौन-सा दृश्य देखा?'], options: [['a park and the rooftops of a town from above', 'ऊपर से एक पार्क और शहर की छतें'], ['a beach with boats', 'नावों वाला समुद्र तट'], ['a dark forest at night', 'रात में अँधेरा जंगल']], a: 0 },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['How does the poet describe the kites in the first two lines?', 'पहली दो पंक्तियों में कवयित्री पतंगों का वर्णन कैसे करती है?'], a: ['The kites are flying up in the air, like coloured birds.', 'पतंगें हवा में ऊपर उड़ रही हैं, रंग-बिरंगे पक्षियों की तरह।'] },
        { q: ['Why does the child wish to get onto the kite?', 'बच्चा पतंग पर क्यों चढ़ना चाहता है?'], a: ['To sail up in the sky, hear the wind sing, and look down at the park and the town.', 'आसमान में तैरने, हवा का गाना सुनने, और नीचे पार्क व शहर को देखने के लिए।'] },
        { q: ['What are the songs that the child hears when flying on the kite?', 'पतंग पर उड़ते हुए बच्चा कौन-से गाने सुनता है?'], a: ['The whistling, whooshing sounds of the wild wind.', 'तेज़ हवा की सीटी और सरसराहट की आवाज़ें।'] },
        { q: ['Why did the people look up and stare? How would you feel if you saw that?', 'लोग ऊपर देखकर क्यों घूरते? तुम ऐसा देखो तो कैसा लगेगा?'], a: ['They would be amazed to see a child riding a kite, and wish they were up there too. I would feel surprised and a little jealous!', 'वे पतंग पर सवार बच्चे को देखकर हैरान होते, और चाहते कि वे भी ऊपर होते। मुझे आश्चर्य और थोड़ी जलन होती!'] },
        { q: ['If you were the kite carrying the child, what would you tell them?', 'अगर तुम बच्चे को ले जाने वाली पतंग होते, तो उससे क्या कहते?'], a: ['"Hold on tight and enjoy the view! I will bring you down safely."', '"कसकर पकड़ो और नज़ारे का मज़ा लो! मैं तुम्हें सुरक्षित नीचे ले आऊँगी।"'] },
      ],
    },
    {
      type: 'fill',
      title: ['Parts of a kite (nose, spine, cover, kite line, tail, reel): complete the conversation.', 'पतंग के हिस्से (nose, spine, cover, kite line, tail, reel): बातचीत पूरी करो।'],
      bank: ['tail', 'cover', 'spine', 'line', 'reel', 'nose'],
      items: [
        { q: ['Bina: I like the long ___ at the end of my kite.', 'बीना: मुझे अपनी पतंग के अंत की लंबी पूँछ पसंद है।'], a: 'tail' },
        { q: ["Saroj: My kite's ___ is bright.", 'सरोज: मेरी पतंग का ऊपरी काग़ज़ चमकीला है।'], a: 'cover' },
        { q: ['The ___ is black.', 'बीच की तीली काली है।'], a: 'spine' },
        { q: ["Bina: My kite's ___ is attached to ...", 'बीना: मेरी पतंग की डोर जुड़ी है ...'], a: 'line' },
        { q: ['... the ___ that wraps it.', '... उस चरखी से जिस पर वह लिपटी है।'], a: 'reel' },
        { q: ['Saroj: Did you know that the tip of a kite is called a ___?', 'सरोज: क्या तुम जानती हो कि पतंग के सिरे को नोज़ कहते हैं?'], a: 'nose' },
      ],
    },
    {
      type: 'task',
      title: ['Cinquain poem (5 lines): 1 noun; 2 describing words; 3 action words; 2 words describing the action; 1 synonym. Example: Kite / pretty, colourful / flying, floating, soaring / quickly, happily / paper-bird. Now write your own.', 'सिनक्वेन कविता (5 पंक्तियाँ): 1 संज्ञा; 2 विशेषण; 3 क्रिया शब्द; क्रिया बताने वाले 2 शब्द; 1 पर्यायवाची। उदाहरण: Kite / pretty, colourful / flying, floating, soaring / quickly, happily / paper-bird। अब अपनी लिखो।'],
      items: [{ q: ['My cinquain', 'मेरी सिनक्वेन'], a: ['Rain\ncool, gentle\nfalling, dancing, splashing\nsoftly, everywhere\nshower', 'बारिश\nठंडी, कोमल\nगिरती, नाचती, छपछपाती\nधीरे-धीरे, हर जगह\nफुहार'] }],
    },
    {
      type: 'pick',
      title: ["Pick the words that match the 'drift' movement.", "'drift' (बहना) गति से मिलते शब्द चुनो।"],
      options: [['slow', 'धीमा'], ['fast', 'तेज़'], ['quick', 'फुर्तीला'], ['upward', 'ऊपर की ओर'], ['downward', 'नीचे की ओर'], ['round and round', 'गोल-गोल'], ['float', 'तैरना']],
      answers: [0, 6],
    },
    {
      type: 'match',
      title: ["Other words about a kite's movement: match each with its meaning.", 'पतंग की गति के और शब्द: हर एक को उसके अर्थ से मिलाओ।'],
      pairs: [
        [['glide', 'फिसलना'], ['move smoothly and quietly', 'आराम से, चुपचाप चलना']],
        [['dive', 'गोता लगाना'], ['go down quickly, head first', 'सिर के बल तेज़ी से नीचे जाना']],
        [['soar', 'ऊँचा उड़ना'], ['fly high up in the air', 'हवा में बहुत ऊँचा उड़ना']],
        [['swoop', 'झपटना'], ['come down suddenly and fast', 'अचानक और तेज़ी से नीचे आना']],
        [['circle', 'चक्कर लगाना'], ['move round and round', 'गोल-गोल घूमना']],
      ],
    },
    {
      type: 'qa',
      title: ['Listen about the Kite Festival in India and correct the wrong word in each sentence.', 'भारत के पतंग उत्सव के बारे में सुनो और हर वाक्य का ग़लत शब्द सुधारो।'],
      passage: [
        "Hello everyone! I'm happy to share with you some details about the Kite Festival. It is a popular festival in India and it takes place during Makar Sankranti in the month of January. People can even be seen flying kites from their terraces and rooftops and taking part in kite flying competitions. This festival is celebrated as Uttarayan in Western India. The festival gives everyone a chance to look at kites of different shapes, sizes and colours. Gujarat is the main centre of celebrations but Uttarayan is also celebrated in Rajasthan and Telangana. In Karnataka, the Tourism Department has also been organising the Kite Festival once each year. Punjab also celebrates this festival of kites during Baisakhi and Basant Panchami. Kite flying is a tradition that is deep-rooted in Indian culture and the Kite Festival is one that is eagerly awaited. This is also a reason why people across India also fly kites to celebrate Independence Day. Happy kite-flying to all of you!",
        'नमस्ते सबको! मुझे पतंग उत्सव के बारे में बताते हुए ख़ुशी हो रही है। यह भारत का लोकप्रिय त्योहार है और जनवरी में मकर संक्रांति के समय होता है। लोग छतों से पतंग उड़ाते और पतंगबाज़ी प्रतियोगिताओं में भाग लेते दिखते हैं। पश्चिमी भारत में यह त्योहार उत्तरायण के रूप में मनाया जाता है। इसमें अलग-अलग आकार, नाप और रंग की पतंगें देखने को मिलती हैं। गुजरात उत्सव का मुख्य केंद्र है, पर उत्तरायण राजस्थान और तेलंगाना में भी मनाया जाता है। कर्नाटक में पर्यटन विभाग हर साल पतंग उत्सव आयोजित करता है। पंजाब भी बैसाखी और बसंत पंचमी पर पतंग उत्सव मनाता है। पतंगबाज़ी भारतीय संस्कृति में गहरी जड़ें रखती है और पतंग उत्सव का बेसब्री से इंतज़ार होता है। इसीलिए पूरे भारत में लोग स्वतंत्रता दिवस पर भी पतंग उड़ाते हैं। सबको पतंगबाज़ी की शुभकामनाएँ!',
      ],
      items: [
        { q: ['Kite Festival is celebrated during the month of June.', 'पतंग उत्सव जून महीने में मनाया जाता है।'], a: ['June → January', 'June → January (जनवरी)'] },
        { q: ['The festival is named Uttarayan in Eastern India.', 'पूर्वी भारत में इसे उत्तरायण कहते हैं।'], a: ['Eastern → Western', 'Eastern → Western (पश्चिमी)'] },
        { q: ['Uttarayan is mainly celebrated in Gujarat, but also in Maharashtra and Telangana.', 'उत्तरायण मुख्य रूप से गुजरात में, और महाराष्ट्र व तेलंगाना में भी मनता है।'], a: ['Maharashtra → Rajasthan', 'Maharashtra → Rajasthan (राजस्थान)'] },
        { q: ['People of India also enjoy flying kites on Earth Day.', 'भारत के लोग पृथ्वी दिवस पर भी पतंग उड़ाते हैं।'], a: ['Earth Day → Independence Day', 'Earth Day → Independence Day (स्वतंत्रता दिवस)'] },
      ],
    },
    {
      type: 'task',
      title: ["Let us speak and write: share a kite-flying experience (where, when, why, how). Then write about 100 words titled 'I am a Kite'.", "आओ बोलें और लिखें: पतंग उड़ाने का अनुभव बताओ (कहाँ, कब, क्यों, कैसे)। फिर 'I am a Kite' शीर्षक से लगभग 100 शब्द लिखो।"],
      items: [{ q: ['I am a Kite', 'मैं एक पतंग हूँ'], a: ['I am a diamond-shaped kite with red and yellow colours and a long blue tail. I belong to a boy named Raju. Every Makar Sankranti, he takes me to the rooftop and lets me fly high. I dance with the wind and play with the birds, who are my friends. From up here I can see the whole town, the river and the fields. Sometimes other kites try to cut my string, but Raju holds me carefully. My message for humans: please use cotton thread, not glass-coated manja, because it hurts birds.', 'मैं लाल-पीले रंग की, लंबी नीली पूँछ वाली हीरे के आकार की पतंग हूँ। मैं राजू नाम के लड़के की हूँ। हर मकर संक्रांति पर वह मुझे छत पर ले जाकर ऊँचा उड़ाता है। मैं हवा के साथ नाचती हूँ और पक्षियों के साथ खेलती हूँ, जो मेरे दोस्त हैं। यहाँ ऊपर से मुझे पूरा शहर, नदी और खेत दिखते हैं। कभी-कभी दूसरी पतंगें मेरी डोर काटने की कोशिश करती हैं, पर राजू मुझे सावधानी से संभालता है। इंसानों के लिए मेरा संदेश: कृपया काँच वाला मांझा नहीं, सूती धागा इस्तेमाल करो, क्योंकि मांझा पक्षियों को घायल करता है।'] }],
    },
    {
      type: 'mcq',
      title: ['Let us explore: kites in history.', 'आओ जानें: इतिहास में पतंगें।'],
      passage: [
        'Kites are mentioned in ancient Indian texts. In the poems (gathas) of the thirteenth-century Marathi saint and poet Namadeva, a kite is called a gudi, and the kites were made from kaagad (paper).',
        'प्राचीन भारतीय ग्रंथों में पतंगों का उल्लेख है। तेरहवीं सदी के मराठी संत कवि नामदेव की गाथाओं में पतंग को गुड्डी कहा गया है, और पतंगें कागद (काग़ज़) से बनती थीं।',
      ],
      items: [
        { q: ['What did Namadeva call a kite?', 'नामदेव ने पतंग को क्या कहा?'], options: [['gudi', 'गुड्डी'], ['patang', 'पतंग'], ['kaagad', 'कागद']], a: 0 },
        { q: ['Which is the most commonly seen kite shape?', 'सबसे आम पतंग का आकार कौन-सा है?'], options: [['diamond-shaped', 'हीरे के आकार की'], ['box kite', 'बॉक्स पतंग'], ['parafoil', 'पैराफ़ॉइल']], a: 0 },
      ],
    },
  ],
  'class6-15': [
    {
      type: 'qa',
      title: ['Before we read: Pranav M. Balasubramaniam from Palakkad, Kerala, was born without both hands, yet he is an artist, a singer and a para-sportsperson.', 'पढ़ने से पहले: पलक्कड़, केरल के प्रणव एम. बालसुब्रमण्यम बिना दोनों हाथों के जन्मे, फिर भी वे कलाकार, गायक और पैरा-खिलाड़ी हैं।'],
      items: [
        { q: ["Do you think Pranav's task is simple? Why or why not?", 'क्या प्रणव का काम आसान है? क्यों या क्यों नहीं?'], a: ['No. Painting without hands needs a lot of practice, patience and courage.', 'नहीं। बिना हाथों के चित्र बनाने में बहुत अभ्यास, धैर्य और साहस चाहिए।'] },
        { q: ['What qualities were important for Pranav to become successful?', 'सफल होने के लिए प्रणव में कौन-से गुण ज़रूरी थे?'], a: ['Determination, hard work, confidence and a positive attitude.', 'दृढ़ निश्चय, मेहनत, आत्मविश्वास और सकारात्मक सोच।'] },
        { q: ["What message does Pranav's story give us?", 'प्रणव की कहानी हमें क्या संदेश देती है?'], a: ['No challenge can stop us if we work hard and never give up.', 'अगर हम मेहनत करें और हार न मानें तो कोई चुनौती हमें नहीं रोक सकती।'] },
      ],
    },
    {
      type: 'match',
      title: ['Let us discuss: match each paragraph with its main idea.', 'आओ चर्चा करें: हर अनुच्छेद को उसके मुख्य विचार से मिलाओ।'],
      pairs: [
        [['Paragraph 1', 'अनुच्छेद 1'], ["Introduction to Ila Sachani's colourful embroidery", 'इला सचानी की रंगीन कढ़ाई का परिचय']],
        [['Paragraph 2', 'अनुच्छेद 2'], ['Early challenges: born with hands she could not use', 'शुरुआती चुनौतियाँ: ऐसे हाथों के साथ जन्म जिनका उपयोग नहीं हो सकता था']],
        [['Paragraph 3', 'अनुच्छेद 3'], ['Family support: learning embroidery with her feet', 'परिवार का साथ: पैरों से कढ़ाई सीखना']],
        [['Paragraph 4', 'अनुच्छेद 4'], ['Hard work: becoming an expert in many styles', 'मेहनत: कई शैलियों में निपुण बनना']],
        [['Paragraph 5', 'अनुच्छेद 5'], ['Embroidery as self-expression; admiration spreads', 'कढ़ाई अपनी अभिव्यक्ति; प्रशंसा फैलती है']],
        [['Paragraph 6', 'अनुच्छेद 6'], ['Recognition at a state exhibition', 'राज्य प्रदर्शनी में पहचान']],
        [['Paragraph 7', 'अनुच्छेद 7'], ['National fame, awards and the President\'s Medal', 'राष्ट्रीय प्रसिद्धि, पुरस्कार और राष्ट्रपति पदक']],
        [['Paragraph 8', 'अनुच्छेद 8'], ['New independence: income, joy, and the power of art', 'नई आत्मनिर्भरता: आय, ख़ुशी, और कला की शक्ति']],
      ],
    },
    {
      type: 'mcq',
      title: ['Read the lines and choose.', 'पंक्तियाँ पढ़ो और चुनो।'],
      passage: [
        'Unlike other children, she could not use her hands in the usual way. While other small hands drew figures in the sand or plucked wild flowers, she wondered why she could not join them. She too wanted to hold a chalk in her hands and draw figures on a slate.',
        'दूसरे बच्चों से अलग, वह अपने हाथों का सामान्य तरीक़े से उपयोग नहीं कर सकती थी। जब दूसरे छोटे हाथ रेत पर आकृतियाँ बनाते या जंगली फूल तोड़ते, तो वह सोचती कि वह उनके साथ क्यों नहीं जुड़ सकती। वह भी हाथ में चॉक पकड़कर स्लेट पर आकृतियाँ बनाना चाहती थी।',
      ],
      items: [
        { q: ["'Unlike other children' means that Ila was ___.", "'दूसरे बच्चों से अलग' का अर्थ है कि इला ___ थी।"], options: [['unaware', 'अनजान'], ['different', 'अलग'], ['simple', 'सरल']], a: 1 },
      ],
    },
    {
      type: 'qa',
      title: ['Answer the following questions.', 'इन प्रश्नों के उत्तर दो।'],
      items: [
        { q: ['What could Ila have felt when she could not join others?', 'जब इला दूसरों के साथ नहीं खेल पाती थी, तो उसे कैसा लगता होगा?'], a: ['Sad, lonely and left out.', 'दुखी, अकेली और अलग-थलग।'] },
        { q: ['Ila could not draw figures on the slate because ...', 'इला स्लेट पर आकृतियाँ नहीं बना पाती थी क्योंकि ...'], a: ['she could not use her hands to hold the chalk.', 'वह चॉक पकड़ने के लिए अपने हाथों का उपयोग नहीं कर सकती थी।'] },
        { q: ['What creative ways did Ila and her family use to overcome her challenges?', 'चुनौतियों से पार पाने के लिए इला और उसके परिवार ने कौन-से रचनात्मक तरीक़े अपनाए?'], a: ['Her mother and grandmother taught her Kathiawar embroidery with her feet, and her parents helped her eat and comb her hair with her legs.', 'माँ और दादी ने उसे पैरों से काठियावाड़ी कढ़ाई सिखाई, और माता-पिता ने उसे पैरों से खाना खाना और बाल बनाना सिखाया।'] },
        { q: ["How did 'new independence' help Ila?", "'नई आत्मनिर्भरता' ने इला की कैसे मदद की?"], a: ['She earned a regular income and found joy in doing what she loved.', 'उसे नियमित आय मिली और अपनी पसंद का काम करने में ख़ुशी मिली।'] },
        { q: ["Why was the first state exhibition an important event in Ila's life?", 'पहली राज्य प्रदर्शनी इला के जीवन की अहम घटना क्यों थी?'], a: ['It opened new doors: people bought her work, and she became famous instead of a hidden talent.', 'इसने नए रास्ते खोले: लोगों ने उसका काम ख़रीदा, और वह छिपी प्रतिभा के बजाय प्रसिद्ध हो गई।'] },
        { q: ["What does 'art has the power to rise above physical boundaries and touch the soul' tell us about art?", "'कला में शारीरिक सीमाओं से ऊपर उठकर आत्मा को छूने की शक्ति है' कला के बारे में क्या बताता है?"], a: ['Art does not depend on the body; it comes from the heart and can move everyone who sees it.', 'कला शरीर पर निर्भर नहीं; वह दिल से आती है और देखने वाले हर किसी को छू सकती है।'] },
        { q: ["How can we be helpful like Ila's family when someone faces challenges?", 'जब कोई चुनौतियों का सामना करे, तो हम इला के परिवार की तरह मददगार कैसे बन सकते हैं?'], a: ['By encouraging them, being patient, helping them find new ways to do things, and never making fun of them.', 'उनका हौसला बढ़ाकर, धैर्य रखकर, काम करने के नए तरीक़े ढूँढने में मदद करके, और कभी मज़ाक न उड़ाकर।'] },
        { q: ["How can Ila's story help others overcome challenges?", 'इला की कहानी दूसरों को चुनौतियों से पार पाने में कैसे मदद कर सकती है?'], a: ['It shows that with focus, hard work, positivity and never giving up, challenges can be turned into victories.', 'यह दिखाती है कि एकाग्रता, मेहनत, सकारात्मकता और हार न मानने से चुनौतियाँ जीत में बदल सकती हैं।'] },
      ],
    },
    {
      type: 'match',
      title: ['Synonyms: match each word with its synonym. (Two synonyms are extra: happy, dangerous.)', 'पर्यायवाची: हर शब्द को उसके पर्यायवाची से मिलाओ। (दो फ़ालतू: happy, dangerous।)'],
      pairs: [
        [['tiny', 'छोटा'], ['small', 'छोटा']],
        [['wonderful', 'अद्भुत'], ['fantastic', 'शानदार']],
        [['quiet', 'शांत'], ['silent', 'ख़ामोश']],
        [['task', 'काम'], ['work', 'कार्य']],
        [['tough', 'कठिन'], ['difficult', 'मुश्किल']],
      ],
    },
    {
      type: 'fill',
      title: ['Unscramble the antonyms. (Example: display → HIDE)', 'विलोम शब्दों के अक्षर सही करो। (उदाहरण: display → HIDE)'],
      items: [
        { q: ['tiny → EGHU → ___', 'छोटा → बहुत बड़ा'], a: 'huge', options: ['huge', 'hug', 'hue'] },
        { q: ['wonderful → REEBLITR → ___', 'अद्भुत → भयानक'], a: 'terrible', options: ['terrible', 'tribe', 'trouble'] },
        { q: ['quiet → IYNSO → ___', 'शांत → शोरगुल वाला'], a: 'noisy', options: ['noise', 'noisy', 'nosy'] },
        { q: ['task → SIAEMTP → ___', 'काम → शौक़/मनोरंजन'], a: 'pastime', options: ['pastime', 'mistake', 'paste'] },
        { q: ['tough → SEYA → ___', 'कठिन → आसान'], a: 'easy', options: ['easy', 'yes', 'say'] },
      ],
    },
    {
      type: 'fill',
      title: ['Words of quantity: fill in the blanks with some, many, a lot of, more.', 'मात्रा के शब्द: some, many, a lot of, more से रिक्त स्थान भरो।'],
      items: [
        { q: ['How ___ of you speak English?', 'तुममें से कितने अंग्रेज़ी बोलते हैं?'], a: 'many', options: ['many', 'much', 'some'] },
        { q: ['India receives ___ rain during the monsoon.', 'मानसून में भारत में बहुत बारिश होती है।'], a: 'a lot of', options: ['a lot of', 'many', 'few'] },
        { q: ['There were ___ people than I expected.', 'मेरी उम्मीद से ज़्यादा लोग थे।'], a: 'more', options: ['more', 'many', 'some'] },
        { q: ['Please give me ___ more curd.', 'कृपया मुझे थोड़ा और दही दो।'], a: 'some', options: ['some', 'many', 'lots'] },
        { q: ['We saw ___ buses on the road. (countable)', 'हमने सड़क पर कई बसें देखीं।'], a: 'many', options: ['many', 'much'] },
        { q: ['How ___ milk do you want? (uncountable)', 'तुम्हें कितना दूध चाहिए?'], a: 'much', options: ['many', 'much'] },
      ],
    },
    {
      type: 'mcq',
      title: ['Let us listen: a talk about Kathiawar embroidery. Choose the correct option.', 'आओ सुनें: काठियावाड़ी कढ़ाई पर एक बातचीत। सही विकल्प चुनो।'],
      passage: [
        "Hello everyone! I'm here today to share some simple information about Kathiawar embroidery. This is a very old form of embroidery. It uses many bright colours and also uses many types of stitches, like the chain stitch. The embroidery is commonly seen on clothes and home decoration items. On clothes, it is seen on children's caps, ghagra skirts and men's traditional shirts. In this embroidery, a lot of mirror work is done by fitting small mirrors along with the stitches. Most commonly, the designs used are geometric shapes like squares and triangles. The design of flowers is also used. There is much more to share but I'll do that some other time. Thank you!",
        'नमस्ते सबको! आज मैं काठियावाड़ी कढ़ाई के बारे में कुछ सरल जानकारी देना चाहता हूँ। यह कढ़ाई का बहुत पुराना रूप है। इसमें कई चमकीले रंग और कई तरह के टाँके, जैसे चेन टाँका, इस्तेमाल होते हैं। यह कढ़ाई आमतौर पर कपड़ों और घर सजाने की चीज़ों पर दिखती है। कपड़ों में यह बच्चों की टोपियों, घाघरों और पुरुषों की पारंपरिक कमीज़ों पर दिखती है। इस कढ़ाई में टाँकों के साथ छोटे शीशे लगाकर ख़ूब शीशे का काम होता है। ज़्यादातर डिज़ाइन वर्ग और त्रिभुज जैसी ज्यामितीय आकृतियाँ होते हैं। फूलों के डिज़ाइन भी होते हैं। और भी बहुत कुछ है, पर वह फिर कभी बताऊँगा। धन्यवाद!',
      ],
      items: [
        { q: ['Form', 'रूप'], options: [['old', 'पुराना'], ['new', 'नया']], a: 0 },
        { q: ['Colours', 'रंग'], options: [['soft', 'हल्के'], ['bright', 'चमकीले']], a: 1 },
        { q: ['Stitches', 'टाँके'], options: [['running stitch', 'रनिंग टाँका'], ['chain stitch', 'चेन टाँका']], a: 1 },
        { q: ['Seen on', 'कहाँ दिखती है'], options: [["children's caps", 'बच्चों की टोपियाँ'], ['pants', 'पैंट']], a: 0 },
        { q: ['Things used', 'उपयोग की चीज़ें'], options: [['small mirrors', 'छोटे शीशे'], ['shapes of buttons', 'बटनों के आकार']], a: 0 },
        { q: ['Designs', 'डिज़ाइन'], options: [['elephants and horses', 'हाथी और घोड़े'], ['squares and triangles', 'वर्ग और त्रिभुज']], a: 1 },
      ],
    },
    {
      type: 'task',
      title: ['Let us speak: write two questions for Ila Sachani. Yes/No questions use a rising tone at the end (Did you go to school? ↗).', 'आओ बोलें: इला सचानी से पूछने के लिए दो प्रश्न लिखो। हाँ/ना वाले प्रश्नों के अंत में आवाज़ ऊपर उठती है (Did you go to school? ↗)।'],
      items: [
        { q: ['Where were you born?', 'आप कहाँ पैदा हुईं?'] },
        { q: ['Did you go to school? ↗', 'क्या आप स्कूल गईं? ↗'] },
        { q: ['My questions', 'मेरे प्रश्न'], a: ['How long did it take you to learn to thread a needle with your feet? Do you teach embroidery to other children? ↗', 'पैरों से सुई में धागा डालना सीखने में आपको कितना समय लगा? क्या आप दूसरे बच्चों को कढ़ाई सिखाती हैं? ↗'] },
      ],
    },
    {
      type: 'task',
      title: ['Let us write: make an artwork from things like leaves, flowers, straws, twigs or old cards, and write a paragraph describing it. Give a title.', 'आओ लिखें: पत्तियों, फूलों, स्ट्रॉ, टहनियों या पुराने कार्ड जैसी चीज़ों से कलाकृति बनाओ, और उसका वर्णन करते हुए अनुच्छेद लिखो। शीर्षक दो।'],
      items: [{ q: ['My Leaf Peacock', 'मेरा पत्तियों का मोर'], a: ['I made a peacock using leaves, flower petals and an old card. I cut the body from the blue card and stuck it in the middle of a white sheet. For the tail, I arranged green leaves in a fan shape and put a small yellow petal on each leaf as an eye. Twigs became the legs. My peacock looks bright and natural, and it cost nothing to make!', 'मैंने पत्तियों, फूलों की पंखुड़ियों और एक पुराने कार्ड से मोर बनाया। नीले कार्ड से शरीर काटकर सफ़ेद काग़ज़ के बीच चिपकाया। पूँछ के लिए हरी पत्तियाँ पंखे के आकार में लगाईं और हर पत्ती पर आँख की तरह एक छोटी पीली पंखुड़ी लगाई। टहनियाँ पैर बनीं। मेरा मोर चमकीला और प्राकृतिक दिखता है, और इसमें कोई ख़र्च नहीं हुआ!'] }],
    },
    {
      type: 'task',
      title: ['Let us explore: does anyone in your family or neighbourhood do embroidery? Find out the type and how they learnt it. Try a simple stitch with their help.', 'आओ जानें: क्या तुम्हारे परिवार या पड़ोस में कोई कढ़ाई करता है? पता करो किस तरह की और उन्होंने कैसे सीखी। उनकी मदद से एक सरल टाँका आज़माओ।'],
      items: [{ q: ['Indian embroidery styles to explore: Kathiawar (Gujarat), Kachhi (Gujarat), Kashmiri (Kashmir), Lucknawi chikankari (Uttar Pradesh), Phulkari (Punjab), Kantha (West Bengal).', 'जानने लायक़ भारतीय कढ़ाई: काठियावाड़ी (गुजरात), कच्छी (गुजरात), कश्मीरी (कश्मीर), लखनवी चिकनकारी (उत्तर प्रदेश), फुलकारी (पंजाब), कांथा (पश्चिम बंगाल)।'] }],
    },
  ],
  // EXERCISES-END (more lessons are added above this line)
};

module.exports = { exercises };
