// The 12 English tenses for the "Tenses" (काल) tab.
// Each example is stored as subject + verb + rest, so the app can build its negative and question
// forms and the same sentence in the other tenses (utils/tense.js). `hi` = Hindi of the ✅ sentence.
// p: 'i' (I), '3' (he / she / it / one person or thing), 'pl' (we / you / they / many)

export const TIMES = [
  { id: 'present', en: 'Present', hi: 'वर्तमान काल', icon: '🕐', color: '#43a047' },
  { id: 'past', en: 'Past', hi: 'भूतकाल', icon: '⏪', color: '#8e24aa' },
  { id: 'future', en: 'Future', hi: 'भविष्य काल', icon: '⏩', color: '#1e88e5' },
]

export const TENSES = [
  {
    id: 'present-simple',
    time: 'present',
    en: 'Present Simple',
    hi: 'सामान्य वर्तमान काल',
    use: {
      en: 'Habits, daily work and facts that are always true.',
      hi: 'आदतें, रोज़ के काम और हमेशा सच रहने वाली बातें।',
    },
    hindiSign: 'ता है / ती है / ते हैं',
    // Hindi of the first example's ❌ and ❓ forms
    formsHi: { neg: 'मैं हर दिन स्कूल नहीं जाता हूँ।', q: 'क्या मैं हर दिन स्कूल जाता हूँ?' },
    signals: ['every day', 'always', 'usually', 'often', 'sometimes', 'never'],
    structure: {
      aff: 'Subject + V1 (he / she / it: V1 + s / es)',
      neg: 'Subject + do not / does not + V1',
      q: 'Do / Does + Subject + V1 ?',
    },
    examples: [
      { s: 'I', p: 'i', v: 'go', rest: 'to school every day', hi: 'मैं हर दिन स्कूल जाता हूँ।' },
      { s: 'She', p: '3', v: 'play', rest: 'football every evening', hi: 'वह हर शाम फ़ुटबॉल खेलती है।' },
      { s: 'We', p: 'pl', v: 'drink', rest: 'milk in the morning', hi: 'हम सुबह दूध पीते हैं।' },
      { s: 'My father', p: '3', v: 'read', rest: 'the newspaper daily', hi: 'मेरे पिताजी रोज़ अख़बार पढ़ते हैं।' },
      { s: 'They', p: 'pl', v: 'help', rest: 'their mother at home', hi: 'वे घर पर अपनी माँ की मदद करते हैं।' },
      { s: 'The sun', p: '3', v: 'rise', rest: 'in the east', hi: 'सूरज पूरब में उगता है।' },
    ],
  },
  {
    id: 'present-continuous',
    time: 'present',
    en: 'Present Continuous',
    hi: 'अपूर्ण वर्तमान काल',
    use: {
      en: 'Something happening right now, at this moment.',
      hi: 'जो काम अभी, इसी समय चल रहा है।',
    },
    hindiSign: 'रहा है / रही है / रहे हैं',
    // Hindi of the first example's ❌ and ❓ forms
    formsHi: { neg: 'मैं अभी चिट्ठी नहीं लिख रहा हूँ।', q: 'क्या मैं अभी चिट्ठी लिख रहा हूँ?' },
    signals: ['now', 'right now', 'at the moment', 'today', 'look!', 'listen!'],
    structure: {
      aff: 'Subject + am / is / are + V1 + ing',
      neg: 'Subject + am / is / are + not + V1 + ing',
      q: 'Am / Is / Are + Subject + V1 + ing ?',
    },
    examples: [
      { s: 'I', p: 'i', v: 'write', rest: 'a letter now', hi: 'मैं अभी एक चिट्ठी लिख रहा हूँ।' },
      { s: 'The baby', p: '3', v: 'sleep', rest: 'in the cradle', hi: 'बच्चा झूले में सो रहा है।' },
      { s: 'They', p: 'pl', v: 'watch', rest: 'a cartoon at the moment', hi: 'वे इस समय कार्टून देख रहे हैं।' },
      { s: 'Mother', p: '3', v: 'cook', rest: 'food in the kitchen', hi: 'माँ रसोई में खाना बना रही हैं।' },
      { s: 'We', p: 'pl', v: 'learn', rest: 'English today', hi: 'हम आज अंग्रेज़ी सीख रहे हैं।' },
      { s: 'It', p: '3', v: 'rain', rest: 'outside right now', hi: 'बाहर अभी बारिश हो रही है।' },
    ],
  },
  {
    id: 'present-perfect',
    time: 'present',
    en: 'Present Perfect',
    hi: 'पूर्ण वर्तमान काल',
    use: {
      en: 'A work that has just finished, and we see its result now.',
      hi: 'जो काम अभी-अभी पूरा हुआ है और उसका असर अभी दिखता है।',
    },
    hindiSign: 'चुका है / चुकी है / चुके हैं',
    // Hindi of the first example's ❌ and ❓ forms
    formsHi: { neg: 'मैंने अभी तक अपना गृहकार्य पूरा नहीं किया है।', q: 'क्या मैं अपना गृहकार्य पूरा कर चुका हूँ?' },
    signals: ['just', 'already', 'yet', 'ever', 'never', 'recently'],
    structure: {
      aff: 'Subject + has / have + V3',
      neg: 'Subject + has not / have not + V3',
      q: 'Has / Have + Subject + V3 ?',
    },
    examples: [
      { s: 'I', p: 'i', v: 'finish', rest: 'my homework', hi: 'मैं अपना गृहकार्य पूरा कर चुका हूँ।' },
      { s: 'She', p: '3', v: 'eat', rest: 'her lunch', hi: 'वह दोपहर का खाना खा चुकी है।' },
      { s: 'We', p: 'pl', v: 'see', rest: 'the Taj Mahal', hi: 'हम ताजमहल देख चुके हैं।' },
      { s: 'Ravi', p: '3', v: 'buy', rest: 'a new bicycle', hi: 'रवि एक नई साइकिल ख़रीद चुका है।' },
      { s: 'They', p: 'pl', v: 'clean', rest: 'the classroom', hi: 'वे कक्षा साफ़ कर चुके हैं।' },
      { s: 'The train', p: '3', v: 'leave', rest: 'the station just now', hi: 'रेलगाड़ी अभी-अभी स्टेशन से जा चुकी है।' },
    ],
  },
  {
    id: 'present-perfect-continuous',
    time: 'present',
    en: 'Present Perfect Continuous',
    hi: 'पूर्ण अपूर्ण वर्तमान काल',
    use: {
      en: 'A work that started in the past and is still going on.',
      hi: 'जो काम पहले शुरू हुआ और अब तक चल रहा है।',
    },
    hindiSign: 'से ... रहा है / रही है / रहे हैं',
    // Hindi of the first example's ❌ and ❓ forms
    formsHi: { neg: 'मैं दो घंटे से नहीं पढ़ रहा हूँ।', q: 'क्या मैं दो घंटे से पढ़ रहा हूँ?' },
    signals: ['for (two hours)', 'since (morning)', 'all day', 'how long'],
    structure: {
      aff: 'Subject + has been / have been + V1 + ing',
      neg: 'Subject + has not been / have not been + V1 + ing',
      q: 'Has / Have + Subject + been + V1 + ing ?',
    },
    examples: [
      { s: 'I', p: 'i', v: 'study', rest: 'for two hours', hi: 'मैं दो घंटे से पढ़ रहा हूँ।' },
      { s: 'She', p: '3', v: 'wait', rest: 'for the bus since morning', hi: 'वह सुबह से बस का इंतज़ार कर रही है।' },
      { s: 'They', p: 'pl', v: 'play', rest: 'cricket since four o\'clock', hi: 'वे चार बजे से क्रिकेट खेल रहे हैं।' },
      { s: 'It', p: '3', v: 'rain', rest: 'for three days', hi: 'तीन दिन से बारिश हो रही है।' },
      { s: 'We', p: 'pl', v: 'live', rest: 'in this village for ten years', hi: 'हम दस साल से इस गाँव में रह रहे हैं।' },
      { s: 'The farmer', p: '3', v: 'work', rest: 'in the field since dawn', hi: 'किसान भोर से खेत में काम कर रहा है।' },
    ],
  },
  {
    id: 'past-simple',
    time: 'past',
    en: 'Past Simple',
    hi: 'सामान्य भूतकाल',
    use: {
      en: 'A work that happened and finished in the past.',
      hi: 'जो काम बीते समय में हुआ और ख़त्म हो गया।',
    },
    hindiSign: 'आ / ई / ए (गया, खाया, देखा)',
    // Hindi of the first example's ❌ and ❓ forms
    formsHi: { neg: 'मैं कल बाज़ार नहीं गया।', q: 'क्या मैं कल बाज़ार गया?' },
    signals: ['yesterday', 'last week', 'ago', 'in 2020', 'last night'],
    structure: {
      aff: 'Subject + V2',
      neg: 'Subject + did not + V1',
      q: 'Did + Subject + V1 ?',
    },
    examples: [
      { s: 'I', p: 'i', v: 'go', rest: 'to the market yesterday', hi: 'मैं कल बाज़ार गया।' },
      { s: 'She', p: '3', v: 'write', rest: 'a poem last week', hi: 'उसने पिछले हफ़्ते एक कविता लिखी।' },
      { s: 'We', p: 'pl', v: 'watch', rest: 'a film last night', hi: 'हमने कल रात एक फ़िल्म देखी।' },
      { s: 'The cat', p: '3', v: 'drink', rest: 'all the milk', hi: 'बिल्ली सारा दूध पी गई।' },
      { s: 'They', p: 'pl', v: 'visit', rest: 'Delhi two years ago', hi: 'वे दो साल पहले दिल्ली गए थे।' },
      { s: 'Grandmother', p: '3', v: 'tell', rest: 'us a story', hi: 'दादी ने हमें एक कहानी सुनाई।' },
    ],
  },
  {
    id: 'past-continuous',
    time: 'past',
    en: 'Past Continuous',
    hi: 'अपूर्ण भूतकाल',
    use: {
      en: 'Something that was going on at a time in the past.',
      hi: 'बीते समय में कोई काम चल रहा था।',
    },
    hindiSign: 'रहा था / रही थी / रहे थे',
    // Hindi of the first example's ❌ and ❓ forms
    formsHi: { neg: 'मैं उस समय किताब नहीं पढ़ रहा था।', q: 'क्या मैं उस समय किताब पढ़ रहा था?' },
    signals: ['at that time', 'when', 'while', 'at 8 o\'clock last night'],
    structure: {
      aff: 'Subject + was / were + V1 + ing',
      neg: 'Subject + was not / were not + V1 + ing',
      q: 'Was / Were + Subject + V1 + ing ?',
    },
    examples: [
      { s: 'I', p: 'i', v: 'read', rest: 'a book at that time', hi: 'मैं उस समय एक किताब पढ़ रहा था।' },
      { s: 'She', p: '3', v: 'sing', rest: 'a song in the morning', hi: 'वह सुबह एक गाना गा रही थी।' },
      { s: 'The children', p: 'pl', v: 'swim', rest: 'in the river', hi: 'बच्चे नदी में तैर रहे थे।' },
      { s: 'Father', p: '3', v: 'drive', rest: 'the car slowly', hi: 'पिताजी धीरे-धीरे गाड़ी चला रहे थे।' },
      { s: 'We', p: 'pl', v: 'dance', rest: 'at the wedding', hi: 'हम शादी में नाच रहे थे।' },
      { s: 'The dog', p: '3', v: 'bark', rest: 'loudly all night', hi: 'कुत्ता रात भर ज़ोर से भौंक रहा था।' },
    ],
  },
  {
    id: 'past-perfect',
    time: 'past',
    en: 'Past Perfect',
    hi: 'पूर्ण भूतकाल',
    use: {
      en: 'A work that had finished before another work in the past.',
      hi: 'बीते समय में किसी दूसरे काम से पहले जो काम पूरा हो चुका था।',
    },
    hindiSign: 'चुका था / चुकी थी / चुके थे',
    // Hindi of the first example's ❌ and ❓ forms
    formsHi: { neg: 'मैं नौ बजे से पहले खाना नहीं खा चुका था।', q: 'क्या मैं नौ बजे से पहले खाना खा चुका था?' },
    signals: ['before', 'after', 'already', 'by the time', 'when'],
    structure: {
      aff: 'Subject + had + V3',
      neg: 'Subject + had not + V3',
      q: 'Had + Subject + V3 ?',
    },
    examples: [
      { s: 'I', p: 'i', v: 'eat', rest: 'my dinner before nine', hi: 'मैं नौ बजे से पहले खाना खा चुका था।' },
      { s: 'The train', p: '3', v: 'leave', rest: 'before we reached', hi: 'हमारे पहुँचने से पहले रेलगाड़ी जा चुकी थी।' },
      { s: 'She', p: '3', v: 'finish', rest: 'her work by evening', hi: 'वह शाम तक अपना काम पूरा कर चुकी थी।' },
      { s: 'They', p: 'pl', v: 'go', rest: 'home when it rained', hi: 'जब बारिश हुई तब तक वे घर जा चुके थे।' },
      { s: 'We', p: 'pl', v: 'see', rest: 'that film before', hi: 'हम वह फ़िल्म पहले देख चुके थे।' },
      { s: 'The thief', p: '3', v: 'run', rest: 'away before the police came', hi: 'पुलिस के आने से पहले चोर भाग चुका था।' },
    ],
  },
  {
    id: 'past-perfect-continuous',
    time: 'past',
    en: 'Past Perfect Continuous',
    hi: 'पूर्ण अपूर्ण भूतकाल',
    use: {
      en: 'A work that had been going on for some time in the past.',
      hi: 'बीते समय में कोई काम कुछ समय से चल रहा था।',
    },
    hindiSign: 'से ... रहा था / रही थी / रहे थे',
    // Hindi of the first example's ❌ and ❓ forms
    formsHi: { neg: 'जब वह आया तब मैं एक घंटे से इंतज़ार नहीं कर रहा था।', q: 'क्या जब वह आया तब मैं एक घंटे से इंतज़ार कर रहा था?' },
    signals: ['for (an hour)', 'since (morning)', 'before', 'when'],
    structure: {
      aff: 'Subject + had been + V1 + ing',
      neg: 'Subject + had not been + V1 + ing',
      q: 'Had + Subject + been + V1 + ing ?',
    },
    examples: [
      { s: 'I', p: 'i', v: 'wait', rest: 'for an hour when he came', hi: 'जब वह आया तब मैं एक घंटे से इंतज़ार कर रहा था।' },
      { s: 'She', p: '3', v: 'cry', rest: 'since morning', hi: 'वह सुबह से रो रही थी।' },
      { s: 'They', p: 'pl', v: 'play', rest: 'for two hours before the rain', hi: 'बारिश से पहले वे दो घंटे से खेल रहे थे।' },
      { s: 'It', p: '3', v: 'rain', rest: 'for a week', hi: 'एक हफ़्ते से बारिश हो रही थी।' },
      { s: 'We', p: 'pl', v: 'live', rest: 'in Raipur since 2015', hi: 'हम 2015 से रायपुर में रह रहे थे।' },
      { s: 'The boy', p: '3', v: 'run', rest: 'for a long time', hi: 'लड़का बहुत देर से दौड़ रहा था।' },
    ],
  },
  {
    id: 'future-simple',
    time: 'future',
    en: 'Future Simple',
    hi: 'सामान्य भविष्य काल',
    use: {
      en: 'A work that will happen in the future.',
      hi: 'जो काम आने वाले समय में होगा।',
    },
    hindiSign: 'गा / गी / गे',
    // Hindi of the first example's ❌ and ❓ forms
    formsHi: { neg: 'मैं कल रायपुर नहीं जाऊँगा।', q: 'क्या मैं कल रायपुर जाऊँगा?' },
    signals: ['tomorrow', 'next week', 'soon', 'later', 'in 2030'],
    structure: {
      aff: 'Subject + will + V1',
      neg: 'Subject + will not + V1',
      q: 'Will + Subject + V1 ?',
    },
    examples: [
      { s: 'I', p: 'i', v: 'go', rest: 'to Raipur tomorrow', hi: 'मैं कल रायपुर जाऊँगा।' },
      { s: 'She', p: '3', v: 'sing', rest: 'a song at the function', hi: 'वह समारोह में एक गाना गाएगी।' },
      { s: 'We', p: 'pl', v: 'plant', rest: 'trees next week', hi: 'हम अगले हफ़्ते पेड़ लगाएँगे।' },
      { s: 'The teacher', p: '3', v: 'teach', rest: 'a new lesson', hi: 'शिक्षक एक नया पाठ पढ़ाएँगे।' },
      { s: 'They', p: 'pl', v: 'come', rest: 'to our house soon', hi: 'वे जल्द ही हमारे घर आएँगे।' },
      { s: 'It', p: '3', v: 'rain', rest: 'in the evening', hi: 'शाम को बारिश होगी।' },
    ],
  },
  {
    id: 'future-continuous',
    time: 'future',
    en: 'Future Continuous',
    hi: 'अपूर्ण भविष्य काल',
    use: {
      en: 'Something that will be going on at a time in the future.',
      hi: 'आने वाले समय में कोई काम चल रहा होगा।',
    },
    hindiSign: 'रहा होगा / रही होगी / रहे होंगे',
    // Hindi of the first example's ❌ and ❓ forms
    formsHi: { neg: 'कल इस समय मैं यात्रा नहीं कर रहा होऊँगा।', q: 'क्या कल इस समय मैं यात्रा कर रहा होऊँगा?' },
    signals: ['at this time tomorrow', 'at 10 o\'clock tomorrow', 'next week'],
    structure: {
      aff: 'Subject + will be + V1 + ing',
      neg: 'Subject + will not be + V1 + ing',
      q: 'Will + Subject + be + V1 + ing ?',
    },
    examples: [
      { s: 'I', p: 'i', v: 'travel', rest: 'at this time tomorrow', hi: 'कल इस समय मैं यात्रा कर रहा होऊँगा।' },
      { s: 'She', p: '3', v: 'write', rest: 'her exam at ten', hi: 'दस बजे वह अपनी परीक्षा लिख रही होगी।' },
      { s: 'They', p: 'pl', v: 'play', rest: 'a match in the evening', hi: 'शाम को वे एक मैच खेल रहे होंगे।' },
      { s: 'Mother', p: '3', v: 'wait', rest: 'for us at the station', hi: 'माँ स्टेशन पर हमारा इंतज़ार कर रही होंगी।' },
      { s: 'We', p: 'pl', v: 'watch', rest: 'the show tonight', hi: 'आज रात हम शो देख रहे होंगे।' },
      { s: 'The farmers', p: 'pl', v: 'sow', rest: 'seeds next month', hi: 'अगले महीने किसान बीज बो रहे होंगे।' },
    ],
  },
  {
    id: 'future-perfect',
    time: 'future',
    en: 'Future Perfect',
    hi: 'पूर्ण भविष्य काल',
    use: {
      en: 'A work that will have finished before a time in the future.',
      hi: 'आने वाले किसी समय से पहले जो काम पूरा हो चुका होगा।',
    },
    hindiSign: 'चुका होगा / चुकी होगी / चुके होंगे',
    // Hindi of the first example's ❌ and ❓ forms
    formsHi: { neg: 'रविवार तक मैं किताब पूरी नहीं कर चुका होऊँगा।', q: 'क्या रविवार तक मैं किताब पूरी कर चुका होऊँगा?' },
    signals: ['by tomorrow', 'by next year', 'before', 'by then'],
    structure: {
      aff: 'Subject + will have + V3',
      neg: 'Subject + will not have + V3',
      q: 'Will + Subject + have + V3 ?',
    },
    examples: [
      { s: 'I', p: 'i', v: 'finish', rest: 'the book by Sunday', hi: 'रविवार तक मैं किताब पूरी कर चुका होऊँगा।' },
      { s: 'She', p: '3', v: 'reach', rest: 'home by eight', hi: 'आठ बजे तक वह घर पहुँच चुकी होगी।' },
      { s: 'They', p: 'pl', v: 'build', rest: 'the bridge by next year', hi: 'अगले साल तक वे पुल बना चुके होंगे।' },
      { s: 'The film', p: '3', v: 'start', rest: 'before we reach', hi: 'हमारे पहुँचने से पहले फ़िल्म शुरू हो चुकी होगी।' },
      { s: 'We', p: 'pl', v: 'learn', rest: 'all the tenses by then', hi: 'तब तक हम सारे काल सीख चुके होंगे।' },
      { s: 'Father', p: '3', v: 'leave', rest: 'for office by nine', hi: 'नौ बजे तक पिताजी दफ़्तर के लिए निकल चुके होंगे।' },
    ],
  },
  {
    id: 'future-perfect-continuous',
    time: 'future',
    en: 'Future Perfect Continuous',
    hi: 'पूर्ण अपूर्ण भविष्य काल',
    use: {
      en: 'A work that will have been going on for some time in the future.',
      hi: 'आने वाले समय में कोई काम कुछ समय से चल रहा होगा।',
    },
    hindiSign: 'से ... रहा होगा / रही होगी / रहे होंगे',
    // Hindi of the first example's ❌ and ❓ forms
    formsHi: { neg: 'जून तक मैं दस साल से यहाँ नहीं पढ़ा रहा होऊँगा।', q: 'क्या जून तक मैं दस साल से यहाँ पढ़ा रहा होऊँगा?' },
    signals: ['for (two years)', 'since (morning)', 'by next month'],
    structure: {
      aff: 'Subject + will have been + V1 + ing',
      neg: 'Subject + will not have been + V1 + ing',
      q: 'Will + Subject + have been + V1 + ing ?',
    },
    examples: [
      { s: 'I', p: 'i', v: 'teach', rest: 'here for ten years by June', hi: 'जून तक मैं दस साल से यहाँ पढ़ा रहा होऊँगा।' },
      { s: 'She', p: '3', v: 'study', rest: 'for three hours by noon', hi: 'दोपहर तक वह तीन घंटे से पढ़ रही होगी।' },
      { s: 'They', p: 'pl', v: 'work', rest: 'on the farm since morning', hi: 'वे सुबह से खेत पर काम कर रहे होंगे।' },
      { s: 'It', p: '3', v: 'rain', rest: 'for two days by Monday', hi: 'सोमवार तक दो दिन से बारिश हो रही होगी।' },
      { s: 'We', p: 'pl', v: 'live', rest: 'here for five years next month', hi: 'अगले महीने तक हम पाँच साल से यहाँ रह रहे होंगे।' },
      { s: 'The baby', p: '3', v: 'sleep', rest: 'for two hours by then', hi: 'तब तक बच्चा दो घंटे से सो रहा होगा।' },
    ],
  },
]

export const tenseById = (id) => TENSES.find((t) => t.id === id)
