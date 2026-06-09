/* ============================================================
   TIMED EXAM DATA — Cycle 3 English Language Practice Hub
   All exam content for Grades 9–12, General and Advanced.
   Each exam: P1 Vocab (5×2=10) + P2 Grammar (5×2=10) +
              P3A T/F/NG (6×4=24) + P3B MCQ (7×4=28) + P3C MCQ (7×4=28) = 100
   opts arrays are 0-indexed; ans is the index of the correct option.
   For P3A: ans is 'T','F', or 'N' (Not Given).
   ============================================================ */

const timedExamData = {

  /* ── Grade 9 General · B1.1 ─────────────────────────────── */
  g9g: {
    name: 'Grade 9 General', level: 'B1.1',
    p1: [
      { q: 'The festival _____ every year in spring with music and colourful decorations.',
        opts: ['occurs','avoids','cancels'], ans: 0 },
      { q: 'During Eid, families usually exchange _____ as a sign of love and appreciation.',
        opts: ['arguments','gifts','complaints'], ans: 1 },
      { q: 'After sleeping ten hours, she felt completely _____ and ready for the day.',
        opts: ['exhausted','refreshed','confused'], ans: 1 },
      { q: 'The doctor _____ him to sleep earlier every night to improve his health.',
        opts: ['prevented','ignored','advised'], ans: 2 },
      { q: 'He was so _____ that he fell asleep during the lesson.',
        opts: ['excited','tired','energetic'], ans: 1 }
    ],
    p2: [
      { q: 'While she _____ dinner, the phone rang.',
        opts: ['cooks','was cooking','had cooked'], ans: 1 },
      { q: '_____ does the National Day celebration usually take place?',
        opts: ['Who','Why','When'], ans: 2 },
      { q: 'They _____ the festival every year when they were children.',
        opts: ['attend','will attend','attended'], ans: 2 },
      { q: 'The children _____ very excited when they saw the fireworks.',
        opts: ['were','are','be'], ans: 0 },
      { q: 'She _____ to sleep early last night because she had an exam.',
        opts: ['decides','decided','is deciding'], ans: 1 }
    ],
    p3a: {
      title: 'Sleep and the Brain',
      text: 'Sleep is one of the most important activities for the human body and brain. Scientists have discovered that during sleep, the brain organises memories and clears away waste products that build up during the day. Most teenagers need between eight and ten hours of sleep every night; however, many get far less than this recommended amount. A lack of sleep can cause serious problems with concentration, memory, and mood. Research shows that students who sleep well perform better in exams and feel more positive. Some schools have experimented with starting lessons later in the morning to allow students more time to sleep. Studies suggest this change can improve exam results and reduce student absences. Medical experts recommend avoiding screens such as phones and tablets for at least one hour before bed, as the blue light they produce makes it harder to fall asleep.',
      qs: [
        { q: 'The brain is completely inactive during sleep.', ans: 'F' },
        { q: 'Teenagers need between eight and ten hours of sleep per night.', ans: 'T' },
        { q: 'All schools now start lessons later in the morning.', ans: 'N' },
        { q: 'A lack of sleep can affect a student\'s concentration.', ans: 'T' },
        { q: 'Avoiding screens before bed can improve sleep quality.', ans: 'T' },
        { q: 'Students who sleep well tend to feel more positive.', ans: 'T' }
      ]
    },
    p3b: {
      title: 'Cultural Celebrations',
      text: 'Festivals and celebrations bring communities together and reflect the traditions of different cultures. In the United Arab Emirates, National Day is celebrated on the 2nd of December. Streets are decorated with the national flag, and events such as fireworks displays, parades, and cultural shows take place across the country. In Japan, the Cherry Blossom Festival — known as Hanami — takes place each spring when the cherry trees bloom. People gather in parks and open spaces to enjoy the beauty of the blossoms, share food, and spend time with family and friends. In Brazil, the Rio Carnival is one of the most famous celebrations in the world. Held each year in February, it features samba music, elaborate costumes, and dancing in the streets. All of these celebrations serve a similar purpose: they strengthen community bonds, preserve cultural identity, and create shared memories. They also benefit local economies by attracting tourists and encouraging spending in local businesses and restaurants.',
      qs: [
        { q: 'When is UAE National Day celebrated?',
          opts: ['1st November','2nd December','3rd December'], ans: 1 },
        { q: 'What takes place across the UAE on National Day?',
          opts: ['Banks stay open extra hours','Families travel abroad','Fireworks and parades'], ans: 2 },
        { q: 'What is Hanami?',
          opts: ['A Japanese autumn festival','Japan\'s Cherry Blossom Festival','A type of Japanese food'], ans: 1 },
        { q: 'What do people do during Hanami?',
          opts: ['They watch fireworks','They wear elaborate costumes','They enjoy blossoms and share food'], ans: 2 },
        { q: 'When does Rio Carnival take place?',
          opts: ['February','April','December'], ans: 0 },
        { q: 'What type of music is associated with Rio Carnival?',
          opts: ['Jazz','Pop','Samba'], ans: 2 },
        { q: 'How do celebrations benefit the local economy?',
          opts: ['By reducing government spending','By attracting tourists and encouraging local spending','By creating large banks'], ans: 1 }
      ]
    },
    p3c: {
      title: 'Sleep Needs Across Life Stages',
      text: 'The amount of sleep a person needs changes as they grow older. Newborn babies sleep for up to eighteen hours a day, while school-age children typically need nine to eleven hours. Teenagers require more sleep than adults because their brains and bodies are still developing. Adults generally need between seven and nine hours, and older adults may need slightly less. Sleep disorders are more common than many people realise. Insomnia — difficulty falling or staying asleep — affects a large number of people of all ages. Sleep apnoea is another condition in which breathing briefly stops during sleep, which can disrupt the sleep cycle. Both conditions can have serious effects on health if they are not treated by a medical professional. Doctors recommend keeping a regular sleep schedule, avoiding caffeine in the evenings, and keeping the bedroom dark and cool. New technology, such as smart watches and sleep-tracking apps, can monitor sleeping patterns and provide personalised recommendations to help improve sleep quality.',
      qs: [
        { q: 'How many hours do newborn babies sleep each day?',
          opts: ['Nine to eleven hours','Seven to nine hours','Up to eighteen hours'], ans: 2 },
        { q: 'Why do teenagers need more sleep than adults?',
          opts: ['They eat more food','They study longer hours','Their brains and bodies are still developing'], ans: 2 },
        { q: 'How many hours of sleep do adults typically need?',
          opts: ['Five to seven hours','Seven to nine hours','Eleven to thirteen hours'], ans: 1 },
        { q: 'What is insomnia?',
          opts: ['Sleeping too much','Difficulty falling or staying asleep','A type of sleeping pill'], ans: 1 },
        { q: 'What happens during sleep apnoea?',
          opts: ['Breathing becomes faster','The brain is more active','Breathing briefly stops during sleep'], ans: 2 },
        { q: 'What do doctors recommend to improve sleep?',
          opts: ['Watching television before bed','Keeping a regular schedule and cool bedroom','Taking medication every night'], ans: 1 },
        { q: 'What can sleep-tracking apps do?',
          opts: ['Cure sleep disorders completely','Replace doctors for sleep advice','Monitor patterns and give personalised recommendations'], ans: 2 }
      ]
    }
  },

  /* ── Grade 9 Advanced · B1.2 ────────────────────────────── */
  g9a: {
    name: 'Grade 9 Advanced', level: 'B1.2',
    p1: [
      { q: 'The ancient tower was carefully _____ so that future generations could visit it.',
        opts: ['demolished','preserved','abandoned'], ans: 1 },
      { q: 'The architect\'s _____ use of local materials made the building stand out.',
        opts: ['creative','careless','expensive'], ans: 0 },
      { q: 'Dining customs can _____ greatly between different countries and cultures.',
        opts: ['disappear','remain','vary'], ans: 2 },
      { q: 'The tall windows gave the building an _____ appearance that impressed visitors.',
        opts: ['elegant','ordinary','ugly'], ans: 0 },
      { q: 'In some cultures, it is considered _____ to refuse food offered by a host.',
        opts: ['polite','rude','normal'], ans: 1 }
    ],
    p2: [
      { q: 'The famous cathedral _____ in the fourteenth century.',
        opts: ['built','was built','has built'], ans: 1 },
      { q: 'Traditional buildings are often _____ from local stone and wood.',
        opts: ['make','making','made'], ans: 2 },
      { q: 'The new tower is _____ than the old one beside it.',
        opts: ['more tall','tallest','taller'], ans: 2 },
      { q: 'In Japan, shoes _____ before entering a home.',
        opts: ['remove','are removed','removing'], ans: 1 },
      { q: 'By the time the guests arrived, the meal _____ already prepared.',
        opts: ['has been','had been','was being'], ans: 1 }
    ],
    p3a: {
      title: 'Architecture and Culture',
      text: 'Architecture reflects the values and beliefs of the cultures that create it. In the Middle East, traditional buildings called barjeels, or wind towers, were designed to cool homes naturally long before air conditioning was invented. These towers caught cool breezes from above and directed them into the rooms below. In medieval Europe, soaring Gothic cathedrals with pointed arches and magnificent stained-glass windows were built to express faith and inspire a sense of wonder. In Japan, traditional architecture uses natural materials such as wood, bamboo, and paper, emphasising harmony between the building and its surrounding environment. Contemporary architects often draw on these traditions, incorporating local styles into modern designs. This approach, known as critical regionalism, aims to respect cultural heritage while using new technologies and materials. Buildings designed in this way frequently become landmarks that are admired by local residents and international visitors alike.',
      qs: [
        { q: 'Barjeels were designed to heat homes in the Middle East.', ans: 'F' },
        { q: 'Barjeels used air conditioning to keep buildings cool.', ans: 'F' },
        { q: 'Gothic cathedrals were built to inspire religious feelings.', ans: 'T' },
        { q: 'Japanese traditional architecture avoids the use of natural materials.', ans: 'F' },
        { q: 'Critical regionalism completely ignores cultural heritage.', ans: 'F' },
        { q: 'The text states that critical regionalism is used only in Japan.', ans: 'N' }
      ]
    },
    p3b: {
      title: 'Dining Customs Around the World',
      text: 'Dining customs and food etiquette vary enormously from one country to another, reflecting the social values of each culture. In the Arab world, meals are often a shared experience. Dishes are placed in the centre of the table and everyone helps themselves from the same bowls. Guests are always served first as a mark of respect and hospitality. In many East Asian countries, such as China and Vietnam, it is polite to use both hands when offering food to others. In China, finishing everything on your plate may suggest to the host that you were not served enough food, whereas leaving a small amount signals that you are full and satisfied. In Japan, it is very important never to stick chopsticks upright into a bowl of rice, as this is associated with funeral rituals and is considered deeply disrespectful. Across all cultures, dining together strengthens social bonds. Being aware of another culture\'s dining customs shows respect and helps avoid misunderstandings.',
      qs: [
        { q: 'How are meals typically served in Arab culture?',
          opts: ['On individual plates','In shared dishes at the centre of the table','By a professional waiter'], ans: 1 },
        { q: 'Who is served first in Arab dining culture?',
          opts: ['Children','The host','Guests'], ans: 2 },
        { q: 'In China, what does finishing all the food on your plate suggest?',
          opts: ['You enjoyed the food','You were not served enough','You are a polite guest'], ans: 1 },
        { q: 'What does leaving a small amount of food on your plate mean in China?',
          opts: ['You disliked the food','You want to leave','You are full'], ans: 2 },
        { q: 'What must never be done with chopsticks in Japan?',
          opts: ['Using them to stir soup','Placing them on the table side by side','Sticking them upright in rice'], ans: 2 },
        { q: 'Why is sticking chopsticks upright in rice offensive in Japan?',
          opts: ['It makes the food dirty','It is associated with funeral rituals','It is bad for the chopsticks'], ans: 1 },
        { q: 'According to the text, what is the benefit of learning dining customs?',
          opts: ['Finding better restaurants','Showing respect and avoiding misunderstandings','Learning to cook local food'], ans: 1 }
      ]
    },
    p3c: {
      title: 'Modern Architecture in Urban Spaces',
      text: 'Modern cities face the growing challenge of expanding to meet the needs of their populations while protecting their cultural heritage and historical identity. Architects and urban planners in cities such as Dubai, Barcelona, and Singapore have responded to this challenge in creative ways. In Dubai, the Al Fahidi Historical Neighbourhood preserves traditional wind towers and narrow lanes alongside gleaming skyscrapers, creating a striking contrast between past and present. Barcelona\'s urban planners have carefully maintained the city\'s famous Gothic Quarter while developing entirely new modern districts. Green architecture — which incorporates living plants, vertical gardens, and natural ventilation systems into buildings — is becoming increasingly common. Vertical gardens improve air quality, provide natural insulation, and reduce the energy consumption of buildings. Urban planners increasingly recognise that the most successful cities are those that achieve a balance between modernisation and the preservation of cultural and natural heritage.',
      qs: [
        { q: 'What challenge do modern cities face?',
          opts: ['Finding enough food for their populations','Reducing the number of buildings','Expanding while protecting cultural heritage'], ans: 2 },
        { q: 'What does Dubai\'s Al Fahidi district preserve?',
          opts: ['Modern hotels and shopping centres','Traditional wind towers and narrow lanes','Ancient Roman ruins'], ans: 1 },
        { q: 'Which word best describes the contrast between Al Fahidi and Dubai\'s skyscrapers?',
          opts: ['Peaceful','Striking','Disappointing'], ans: 1 },
        { q: 'What does Barcelona\'s urban plan maintain?',
          opts: ['Only modern districts','The historic Gothic Quarter','Ancient Greek temples'], ans: 1 },
        { q: 'What does green architecture incorporate?',
          opts: ['Glass walls and metal structures','Underground parking areas','Living plants and natural ventilation'], ans: 2 },
        { q: 'What are two benefits of vertical gardens mentioned in the text?',
          opts: ['They improve air quality and reduce energy consumption','They attract tourists and create jobs','They make buildings taller and more impressive'], ans: 0 },
        { q: 'What do the most admired cities have in common, according to the text?',
          opts: ['They have the world\'s tallest buildings','They have completely modernised','They balance modernisation with heritage preservation'], ans: 2 }
      ]
    }
  },

  /* ── Grade 10 General · B1.2 ────────────────────────────── */
  g10g: {
    name: 'Grade 10 General', level: 'B1.2',
    p1: [
      { q: 'The Roman _____ was used to move water from mountains to cities.',
        opts: ['aqueduct','cathedral','windmill'], ans: 0 },
      { q: 'Many families cannot _____ to buy a house because prices are too high.',
        opts: ['afford','refuse','avoid'], ans: 0 },
      { q: 'The rapid _____ of cities has led to fewer open green spaces.',
        opts: ['reduction','expansion','improvement'], ans: 1 },
      { q: 'The old factory was _____ to make room for a new shopping centre.',
        opts: ['constructed','preserved','demolished'], ans: 2 },
      { q: 'People in cities often feel _____ from nature because of the concrete environment.',
        opts: ['connected','protected','disconnected'], ans: 2 }
    ],
    p2: [
      { q: 'The Great Wall of China _____ to protect the country from invasion.',
        opts: ['built','was built','builds'], ans: 1 },
      { q: 'These houses _____ from mud bricks, which kept them cool in summer.',
        opts: ['were made','are making','making'], ans: 0 },
      { q: 'Modern apartments are _____ than traditional houses in the old part of the city.',
        opts: ['more expensive','expensiver','most expensive'], ans: 0 },
      { q: 'People _____ in caves long before they built permanent houses.',
        opts: ['lived','live','are living'], ans: 0 },
      { q: 'The new district _____ since the beginning of this year.',
        opts: ['is being built','was built','has been built'], ans: 2 }
    ],
    p3a: {
      title: 'A Brief History of Architecture',
      text: 'Throughout human history, people have built shelters and structures that reflect their needs, beliefs, and available resources. The earliest known human dwellings were simple caves and temporary shelters built from branches and animal skins. As civilisations developed, so did their architecture. The ancient Egyptians constructed enormous pyramids as tombs for their pharaohs, using thousands of workers and millions of stone blocks. The Romans were master engineers who developed the arch, the dome, and the aqueduct — structures that allowed them to build cities across a vast empire. In the medieval period, European builders constructed towering cathedrals with flying buttresses that allowed walls to be thinner and windows to be larger. The Industrial Revolution in the nineteenth century brought new materials such as iron and steel, making it possible to build taller structures than ever before. Today, architects use advanced computer software to design buildings that are both visually stunning and highly efficient in their use of energy.',
      qs: [
        { q: 'The earliest human shelters were built from stone and concrete.', ans: 'F' },
        { q: 'Egyptian pyramids served as tombs for pharaohs.', ans: 'T' },
        { q: 'The Romans developed the arch, dome, and aqueduct.', ans: 'T' },
        { q: 'Flying buttresses allowed Gothic cathedral walls to be thinner.', ans: 'T' },
        { q: 'Steel was first used in construction during ancient Roman times.', ans: 'F' },
        { q: 'The text suggests that all modern buildings use computer design.', ans: 'N' }
      ]
    },
    p3b: {
      title: 'Homes and Society',
      text: 'The way people live in their homes reflects wider social and cultural patterns. In many parts of the world, extended families — including grandparents, parents, and children — traditionally live under one roof. This arrangement allows older family members to help with childcare while younger members support the elderly. However, in many modern urban societies, nuclear families — consisting of just parents and their children — are increasingly common. Rapid urbanisation has led to the growth of large apartment buildings in cities, where space is limited and housing is expensive. In some countries, the cost of housing has risen so dramatically that young people cannot afford to buy their first home, leading many to rent for extended periods or to continue living with their parents into adulthood. Governments in various countries have responded with policies such as subsidised housing, rent controls, and first-time buyer schemes. The design of homes also reflects social values. Open-plan kitchens and living areas encourage family interaction, while individual bedrooms provide personal privacy.',
      qs: [
        { q: 'In extended family arrangements, who helps with childcare?',
          opts: ['Professional carers','Older family members','Neighbours'], ans: 1 },
        { q: 'What has rapid urbanisation led to in cities?',
          opts: ['More open spaces and parks','Smaller cities and towns','Growth of large apartment buildings'], ans: 2 },
        { q: 'What housing problem do young people face in many countries?',
          opts: ['Houses are too large for them','They cannot afford to buy their first home','There are too many empty houses'], ans: 1 },
        { q: 'What do some governments do to help with housing costs?',
          opts: ['Build houses only for wealthy people','Raise rents to increase income','Introduce subsidised housing and first-buyer schemes'], ans: 2 },
        { q: 'What is a nuclear family?',
          opts: ['A family with grandparents, parents, and children','A family with only parents and children','A family with no children'], ans: 1 },
        { q: 'Why do some young people continue living with their parents?',
          opts: ['Because they prefer family life','They cannot afford their own homes','Because governments force them to'], ans: 1 },
        { q: 'What do open-plan kitchens and living areas encourage?',
          opts: ['Greater privacy for family members','More efficient use of energy','Family interaction'], ans: 2 }
      ]
    },
    p3c: {
      title: 'Traditional and Modern Homes',
      text: 'Around the world, traditional homes have been designed to suit the local climate, landscape, and available materials. In the Arabian Peninsula, traditional homes were built around a central courtyard that provided shade and allowed cool air to circulate. High walls protected residents from the desert heat and strong winds. In Scandinavia, homes have traditionally featured steep roofs to prevent heavy snow from accumulating, and thick walls for insulation against extreme cold. In tropical regions, many traditional buildings are elevated on stilts to protect against flooding and allow cool breezes to flow beneath the floor. Contemporary architects study these traditional techniques and incorporate them into modern sustainable design. By using passive cooling, natural light, and local materials, they create buildings that are comfortable to live in without relying heavily on artificial heating or air conditioning. This approach reduces the environmental impact of buildings and lowers the long-term cost of living for residents.',
      qs: [
        { q: 'How were traditional Arabian homes designed to cope with the heat?',
          opts: ['With large glass windows','With air conditioning systems','With a central courtyard and high walls'], ans: 2 },
        { q: 'What feature do traditional Scandinavian homes have?',
          opts: ['Flat roofs for collecting rainwater','Central courtyards for shade','Steep roofs to prevent snow build-up'], ans: 2 },
        { q: 'Why are some tropical homes built on stilts?',
          opts: ['To improve the view','To protect against flooding and allow airflow','To make them easier to build'], ans: 1 },
        { q: 'What do contemporary architects study to improve their designs?',
          opts: ['Traditional building techniques from around the world','Modern computer models only','Ancient paintings and sculptures'], ans: 0 },
        { q: 'What does "passive cooling" mean in this context?',
          opts: ['Using air conditioning at low power','Cooling using mechanical fans','Keeping a building cool using design rather than machines'], ans: 2 },
        { q: 'What benefit does using local materials provide?',
          opts: ['It makes buildings taller','It reduces environmental impact and lowers costs','It makes buildings look more modern'], ans: 1 },
        { q: 'What is the aim of sustainable modern design?',
          opts: ['To make buildings as large as possible','To copy traditional buildings exactly','To be comfortable and environmentally responsible'], ans: 2 }
      ]
    }
  },

  /* ── Grade 10 Advanced · B1.2–B2.1 ─────────────────────── */
  g10a: {
    name: 'Grade 10 Advanced', level: 'B1.2–B2.1',
    p1: [
      { q: '_____ communication involves understanding the customs and values of other cultures.',
        opts: ['Physical','Intercultural','Domestic'], ans: 1 },
      { q: 'He was completely unaware of the cultural _____ that his comment had caused.',
        opts: ['celebration','offence','achievement'], ans: 1 },
      { q: 'Learning a foreign language can enhance your _____ of another culture\'s way of thinking.',
        opts: ['neglect','understanding','criticism'], ans: 1 },
      { q: 'The diplomat worked hard to _____ tensions between the two countries.',
        opts: ['increase','ignore','reduce'], ans: 2 },
      { q: 'A gesture that is considered _____ in one culture may be offensive in another.',
        opts: ['polite','illegal','impossible'], ans: 0 }
    ],
    p2: [
      { q: 'If she _____ harder, she would pass the exam.',
        opts: ['studies','studied','will study'], ans: 1 },
      { q: 'He told me that he _____ the report the following day.',
        opts: ['will finish','would finish','has finished'], ans: 1 },
      { q: 'If they _____ their visa in time, they could have travelled abroad.',
        opts: ['renewed','had renewed','have renewed'], ans: 1 },
      { q: 'She said she _____ that museum before.',
        opts: ['has never visited','had never visited','never visits'], ans: 1 },
      { q: 'If we _____ more renewable energy, we could reduce pollution significantly.',
        opts: ['had used','used','use'], ans: 1 }
    ],
    p3a: {
      title: 'Cross-Cultural Communication',
      text: 'In an increasingly connected world, the ability to communicate across cultural boundaries has never been more important. Intercultural communication involves not only speaking another language but also understanding the non-verbal cues, values, and social norms that vary from one culture to another. Eye contact is one example: in many Western cultures, maintaining eye contact during a conversation is seen as a sign of confidence and honesty. However, in some East Asian and Middle Eastern cultures, prolonged eye contact with a person of authority may be considered disrespectful or aggressive. Personal space is another area of variation. In some Latin American and Southern European cultures, people tend to stand close together when speaking, while in Northern European and North American cultures, a greater physical distance is expected. Misunderstandings arising from these differences are common, particularly in international business settings. Cultural intelligence — the ability to understand and adapt to different cultural contexts — is increasingly seen as an essential skill for professionals working in global industries. Companies that invest in intercultural training for their employees report fewer communication breakdowns and stronger international partnerships.',
      qs: [
        { q: 'Intercultural communication involves only learning another language.', ans: 'F' },
        { q: 'In some East Asian cultures, direct eye contact with authority figures may be considered rude.', ans: 'T' },
        { q: 'People from Latin American cultures tend to stand further apart when speaking.', ans: 'F' },
        { q: 'Cultural intelligence is becoming increasingly valued in global industries.', ans: 'T' },
        { q: 'All Western cultures have identical rules about eye contact.', ans: 'N' },
        { q: 'Companies that train staff in intercultural skills experience fewer communication problems.', ans: 'T' }
      ]
    },
    p3b: {
      title: 'Academic Writing Skills',
      text: 'Academic writing is a formal style of writing used in universities and research institutions. It requires writers to present ideas clearly and logically, to support arguments with evidence, and to acknowledge the sources of the information they use. Unlike personal or creative writing, academic writing avoids informal language, contractions, and personal opinions expressed without evidence. A well-structured academic essay typically begins with an introduction that states the topic and the writer\'s main argument or thesis. The body paragraphs develop this argument, each focusing on a single main idea supported by evidence and analysis. The conclusion summarises the main points and restates the argument in the light of the evidence presented. Referencing is a critical part of academic writing. Writers must acknowledge the work of others by citing sources within the text and providing a full reference list at the end. Plagiarism — using someone else\'s words or ideas without acknowledgement — is a serious academic offence. Universities use specialised software to detect plagiarism, and students found guilty face severe penalties.',
      qs: [
        { q: 'What is the main purpose of academic writing?',
          opts: ['To entertain readers with stories','To express personal opinions freely','To present ideas logically with evidence'], ans: 2 },
        { q: 'What does a thesis statement do in an introduction?',
          opts: ['Summarises all the references','States the topic and the writer\'s main argument','Lists all the evidence'], ans: 1 },
        { q: 'What should each body paragraph focus on?',
          opts: ['Multiple main ideas supported by evidence','Only quotations from other sources','A single main idea supported by evidence'], ans: 2 },
        { q: 'What does the conclusion do?',
          opts: ['Introduces a new argument','Lists all the references','Summarises the main points and restates the argument'], ans: 2 },
        { q: 'What is plagiarism?',
          opts: ['Writing too many references','Using someone else\'s work without acknowledgement','Writing in informal language'], ans: 1 },
        { q: 'How do universities detect plagiarism?',
          opts: ['By interviewing students','By checking with the original author','Using specialised software'], ans: 2 },
        { q: 'What penalty do students who plagiarise face?',
          opts: ['A lower grade on one question','Severe academic penalties','A warning with no consequences'], ans: 1 }
      ]
    },
    p3c: {
      title: 'Formal and Informal Communication',
      text: 'Effective communication depends on choosing the right language and tone for the context. Formal communication is used in professional settings such as job interviews, business meetings, and official written documents. It involves careful vocabulary choices, complete sentences, and adherence to grammar rules. Informal communication, on the other hand, is used among friends and family and may include colloquial expressions, contractions, and abbreviations. The rise of digital communication through social media and instant messaging has blurred the boundary between formal and informal language for many young people. There is growing concern among employers that graduates entering the workforce lack the ability to switch between formal and informal registers appropriately. As a result, many schools and universities now include professional communication skills training in their programmes. Research in sociolinguistics — the study of language in social contexts — has shown that individuals who can adapt their communication style to different audiences are more effective communicators and are more likely to succeed in professional environments.',
      qs: [
        { q: 'When is formal communication typically used?',
          opts: ['When messaging friends','In professional and official settings','Only in written documents'], ans: 1 },
        { q: 'What is a feature of informal communication?',
          opts: ['Grammatically perfect sentences','Official vocabulary and technical terms','Colloquial expressions and contractions'], ans: 2 },
        { q: 'What has blurred the boundary between formal and informal language?',
          opts: ['The increase in book reading','The rise of digital communication through social media','Changes in school curricula'], ans: 1 },
        { q: 'What concern do employers have about graduates?',
          opts: ['They write too formally','They cannot switch between formal and informal registers','They do not use technology'], ans: 1 },
        { q: 'How have schools and universities responded?',
          opts: ['By banning social media','By teaching only grammar rules','By including professional communication training'], ans: 2 },
        { q: 'What does sociolinguistics study?',
          opts: ['The history of the English language','The sounds of different languages','Language in social contexts'], ans: 2 },
        { q: 'Who is most likely to succeed in professional environments?',
          opts: ['Those who speak the most languages','Those who adapt their style to different audiences','Those who write the longest documents'], ans: 1 }
      ]
    }
  },

  /* ── Grade 11 General · B1.2–B2.1 ──────────────────────── */
  general: {
    name: 'Grade 11 General', level: 'B1.2–B2.1',
    p1: [
      { q: 'Academic _____ means being honest and taking responsibility for your own work.',
        opts: ['dishonesty','integrity','confusion'], ans: 1 },
      { q: 'Students who cheat in exams may face serious _____ from their institution.',
        opts: ['rewards','consequences','celebrations'], ans: 1 },
      { q: 'The new student accommodation _____ is located close to the university.',
        opts: ['complex','subject','journey'], ans: 0 },
      { q: 'The city\'s poor air quality was a direct _____ of heavy traffic and industry.',
        opts: ['solution','cause','consequence'], ans: 2 },
      { q: 'Many students _____ from living near their university, as it reduces travel time.',
        opts: ['suffer','benefit','escape'], ans: 1 }
    ],
    p2: [
      { q: 'She said she _____ the assignment already.',
        opts: ['has completed','had completed','completed'], ans: 1 },
      { q: 'If students _____ their teachers for help, they would perform better.',
        opts: ['ask','asked','had asked'], ans: 1 },
      { q: 'The new environmental policy _____ last month to reduce pollution.',
        opts: ['introduced','was introduced','has introduced'], ans: 1 },
      { q: 'The teacher told the students that they _____ submit their work by Friday.',
        opts: ['must','had to','should'], ans: 1 },
      { q: 'Unless students _____ plagiarism, their marks may be cancelled.',
        opts: ['avoid','avoided','avoiding'], ans: 0 }
    ],
    p3a: {
      title: 'Academic Integrity',
      text: 'Academic integrity refers to the ethical principles and values that guide honest and responsible behaviour in educational settings. It encompasses fairness, honesty, respect, and responsibility in all academic work. At its core, academic integrity requires students to submit their own original work, to properly acknowledge the contributions of others, and to avoid any form of dishonest behaviour, including plagiarism, cheating in examinations, and falsifying research data. The consequences of academic dishonesty can be severe, ranging from a failing grade on an assignment to expulsion from an educational institution. Beyond formal penalties, dishonesty can damage a student\'s reputation and professional future. Many universities now use sophisticated plagiarism detection software that can compare submitted work against millions of published documents. However, promoting academic integrity is not only about punishment; it is equally about creating a culture in which students value honesty and understand that their long-term success depends on the genuine development of their skills and knowledge.',
      qs: [
        { q: 'Academic integrity is only concerned with avoiding plagiarism.', ans: 'F' },
        { q: 'Students who are dishonest may be expelled from their institution.', ans: 'T' },
        { q: 'All universities use the same plagiarism detection software.', ans: 'N' },
        { q: 'Academic dishonesty can damage a student\'s professional future.', ans: 'T' },
        { q: 'Plagiarism detection software compares work against published documents.', ans: 'T' },
        { q: 'The text suggests that punishing students is the only way to promote integrity.', ans: 'F' }
      ]
    },
    p3b: {
      title: 'Student Housing Challenges',
      text: 'Finding suitable housing is one of the most significant challenges facing university students today. In cities with large student populations, the demand for affordable accommodation often far exceeds the supply, driving rental prices to levels that many students cannot afford. University-owned halls of residence provide housing for some students, typically offering a balance of convenience, security, and social opportunity. However, not all students can secure a place in university halls, and many must rent privately. Private rented accommodation ranges from shared student houses to individual studio flats, with significant variation in price, quality, and location. Students living far from campus face additional transport costs and often find it harder to participate in campus life. Several surveys have found that housing stress — anxiety caused by difficulty paying rent, poor conditions, or fear of eviction — negatively affects students\' academic performance and mental health. Universities and governments are under growing pressure to provide more affordable housing solutions for students.',
      qs: [
        { q: 'What is a major challenge for university students today?',
          opts: ['Choosing the right course of study','Finding affordable housing near campus','Managing their social life'], ans: 1 },
        { q: 'What drives rental prices up in cities with large student populations?',
          opts: ['Too many available apartments','Demand far exceeding supply','Government rent control policies'], ans: 1 },
        { q: 'What does university-owned accommodation typically offer?',
          opts: ['Luxury facilities at low prices','Housing far from campus','Convenience, security, and social opportunity'], ans: 2 },
        { q: 'What is "housing stress" as described in the text?',
          opts: ['The physical effort of moving furniture','Anxiety caused by housing difficulties','The cost of furniture for a new flat'], ans: 1 },
        { q: 'How does housing stress affect students?',
          opts: ['It motivates them to study harder','It improves their social lives','It negatively affects academic performance and mental health'], ans: 2 },
        { q: 'What range of accommodation do private rentals offer?',
          opts: ['Only luxury apartments','Only shared houses','Shared houses to individual studio flats'], ans: 2 },
        { q: 'Why are universities under pressure to act on housing?',
          opts: ['Because students prefer campus life','To ensure financial barriers don\'t prevent talented students from graduating','Because governments require it by law'], ans: 1 }
      ]
    },
    p3c: {
      title: 'Cities and the Environment',
      text: 'Cities are home to more than half of the world\'s population, and this proportion is rising rapidly. This growth places enormous pressure on natural resources, infrastructure, and the environment. Urban areas account for approximately 70 per cent of global energy consumption and a similar proportion of greenhouse gas emissions. Air pollution from vehicles, factories, and construction is one of the most visible environmental problems in modern cities. However, many cities are taking significant steps to become greener and more sustainable. Cycling lanes and pedestrian zones reduce car use and emissions in city centres. Green roofs and urban parks improve air quality, reduce surface temperatures, and provide habitats for wildlife. Cities such as Copenhagen, Singapore, and Medellín have become international models for urban sustainability, demonstrating that economic growth and environmental responsibility are not mutually exclusive. Smart city technologies, including sensors and data analytics, help cities manage energy use more efficiently and reduce waste. Achieving truly sustainable cities will require cooperation between governments, urban planners, businesses, and individual citizens.',
      qs: [
        { q: 'What proportion of global energy consumption do cities account for?',
          opts: ['Approximately 30 per cent','Approximately 70 per cent','Approximately 90 per cent'], ans: 1 },
        { q: 'What causes air pollution in modern cities?',
          opts: ['Only industrial factories','Only construction projects','Vehicles, factories, and construction'], ans: 2 },
        { q: 'How do cycling lanes help the environment?',
          opts: ['They provide more parking space','They encourage faster journeys','They reduce car use and emissions'], ans: 2 },
        { q: 'What is one benefit of green roofs mentioned in the text?',
          opts: ['They make buildings cheaper to build','They improve air quality and reduce surface temperatures','They increase the number of floors in a building'], ans: 1 },
        { q: 'Which cities are mentioned as models for urban sustainability?',
          opts: ['London, Paris, and New York','Dubai, Tokyo, and Sydney','Copenhagen, Singapore, and Medellín'], ans: 2 },
        { q: 'What does the text say about economic growth and environmental responsibility?',
          opts: ['They are always in conflict','They are never compatible','They are not mutually exclusive'], ans: 2 },
        { q: 'What is needed to achieve truly sustainable cities?',
          opts: ['Only government action','Only individual choices','Cooperation between governments, planners, businesses, and citizens'], ans: 2 }
      ]
    }
  },

  /* ── Grade 11 Advanced · B2.1 ───────────────────────────── */
  advanced: {
    name: 'Grade 11 Advanced', level: 'B2.1',
    p1: [
      { q: 'Online _____ can cause serious psychological harm to its victims.',
        opts: ['commerce','harassment','communication'], ans: 1 },
      { q: 'The Silk Road was a _____ network that connected Asia, the Middle East, and Europe.',
        opts: ['railway','maritime','trade'], ans: 2 },
      { q: 'The architect\'s ability to _____ ancient and contemporary styles made her work distinctive.',
        opts: ['separate','merge','ignore'], ans: 1 },
      { q: 'Language development in children is influenced by both _____ factors and the environment.',
        opts: ['traditional','genetic','cultural'], ans: 1 },
      { q: 'She made a _____ decision that completely changed the direction of her academic career.',
        opts: ['pivotal','ordinary','minor'], ans: 0 }
    ],
    p2: [
      { q: 'If she _____ the warning signs, she could have prevented the conflict.',
        opts: ['recognised','had recognised','recognises'], ans: 1 },
      { q: 'The ruins _____ to be among the most significant in the entire region.',
        opts: ['are considered','considered','considering'], ans: 0 },
      { q: 'He claimed that the discovery _____ by his team six months earlier.',
        opts: ['was made','had been made','has been made'], ans: 1 },
      { q: '_____ the complexity of the issue, a simple solution is unlikely.',
        opts: ['Given','Due','As'], ans: 0 },
      { q: 'The more technology advances, _____ children seem to develop language skills earlier.',
        opts: ['more','the more','much more'], ans: 1 }
    ],
    p3a: {
      title: 'Cyberbullying in the Digital Age',
      text: 'Cyberbullying — the use of digital technology to repeatedly harm or harass an individual — has emerged as a serious concern in contemporary society. Unlike traditional forms of bullying, which are typically limited to physical spaces such as schools or playgrounds, cyberbullying follows its victims wherever they go, making it impossible to escape. Research indicates that victims of cyberbullying are at significantly higher risk of developing anxiety, depression, and in extreme cases, may consider self-harm. Young people between the ages of thirteen and seventeen are particularly vulnerable, as this age group spends a disproportionately large amount of time on social media platforms. Many countries have introduced legislation to criminalise severe cases of online harassment; however, enforcement remains a significant challenge due to the anonymous nature of online interactions and the global reach of social media platforms. Schools play an important role through education, clear reporting mechanisms, and support systems for affected students. Parents are also encouraged to maintain open communication with their children about their online experiences.',
      qs: [
        { q: 'Cyberbullying only takes place in schools.', ans: 'F' },
        { q: 'Victims of cyberbullying are at higher risk of anxiety and depression.', ans: 'T' },
        { q: 'Teenagers between thirteen and seventeen are especially vulnerable to cyberbullying.', ans: 'T' },
        { q: 'All countries have successfully enforced laws against online harassment.', ans: 'F' },
        { q: 'The anonymous nature of online behaviour makes enforcement harder.', ans: 'T' },
        { q: 'The author believes that schools alone can solve the problem of cyberbullying.', ans: 'N' }
      ]
    },
    p3b: {
      title: 'The Silk Road',
      text: 'The Silk Road was one of the most remarkable networks of trade routes in human history. Stretching over 6,000 kilometres, it connected China in the east with the Mediterranean world in the west, passing through Central Asia, Persia, the Arabian Peninsula, and North Africa. Named after the Chinese silk that was among its most valuable commodities, the Silk Road carried far more than goods. It served as a conduit for the exchange of ideas, religions, technologies, languages, and artistic traditions. Buddhism travelled from India to China along these routes, while Islam spread rapidly westward from Arabia. Paper, printing, and gunpowder — all Chinese inventions — reached Europe through the Silk Road, transforming societies in ways that are still felt today. The route was not a single road but a complex network of overland and maritime paths. Trading posts and oasis cities such as Samarkand, Kashgar, and Dunhuang flourished as centres of commerce, culture, and learning. Although the traditional Silk Road declined in importance with the rise of direct sea routes to Asia in the 15th and 16th centuries, its cultural and historical legacy continues to inspire scholars, artists, and policymakers today.',
      qs: [
        { q: 'How long was the Silk Road approximately?',
          opts: ['2,000 kilometres','4,000 kilometres','Over 6,000 kilometres'], ans: 2 },
        { q: 'Why was the route named the "Silk Road"?',
          opts: ['Because it was covered in silk material','Because silk was among its most valuable commodities','Because it was as smooth as silk'], ans: 1 },
        { q: 'What was exchanged along the Silk Road in addition to goods?',
          opts: ['Military weapons only','Only religious texts','Ideas, religions, technologies, and artistic traditions'], ans: 2 },
        { q: 'Which Chinese inventions reached Europe through the Silk Road?',
          opts: ['The compass, telescope, and clock','Paper, printing, and gunpowder','Iron, silver, and copper'], ans: 1 },
        { q: 'What were oasis cities along the Silk Road known for?',
          opts: ['Military fortifications','Commerce, culture, and learning','Food production and farming'], ans: 1 },
        { q: 'When did the traditional Silk Road decline?',
          opts: ['In the 9th and 10th centuries','In the 13th and 14th centuries','In the 15th and 16th centuries'], ans: 2 },
        { q: 'Why did the Silk Road decline in importance?',
          opts: ['Because China closed its borders','Because direct sea routes to Asia opened up','Because goods stopped being traded'], ans: 1 }
      ]
    },
    p3c: {
      title: 'Language Acquisition',
      text: 'Language acquisition — the process by which humans develop the ability to understand and produce language — is one of the most complex areas of developmental psychology. Linguists distinguish between first language acquisition, which occurs naturally in early childhood without formal instruction, and second language acquisition, which typically involves conscious learning and explicit teaching. Infants begin developing language skills from birth, responding to the rhythms and patterns of speech long before they produce their first words. The critical period hypothesis, proposed by linguist Eric Lenneberg, suggests that there is a biologically determined window — generally believed to extend from birth to puberty — during which language acquisition is most effective. After this period, learning a language becomes more difficult and typically results in a lower level of linguistic competence. However, many researchers challenge this view, arguing that motivation, exposure, and quality of instruction can compensate for the effects of age. Bilingual children, who grow up learning two languages simultaneously, often demonstrate advantages in cognitive flexibility, problem-solving, and tasks that require mental switching between different systems.',
      qs: [
        { q: 'What does "language acquisition" refer to?',
          opts: ['Learning to read and write formally','The process of developing the ability to understand and produce language','Studying grammar rules in school'], ans: 1 },
        { q: 'How does first language acquisition differ from second language acquisition?',
          opts: ['First language acquisition requires formal teaching','Second language acquisition occurs naturally in infancy','First language acquisition occurs naturally; second typically involves conscious learning'], ans: 2 },
        { q: 'What does the critical period hypothesis suggest?',
          opts: ['Children learn best when they study languages at school','There is a biological window in which language acquisition is most effective','Adults learn languages faster than children'], ans: 1 },
        { q: 'According to the critical period hypothesis, when does this window typically close?',
          opts: ['At age five','At puberty','At age twenty-five'], ans: 1 },
        { q: 'What factors do some researchers say can compensate for the effects of age?',
          opts: ['Grammar books and dictionaries','Formal qualifications and examinations','Motivation, exposure, and quality of instruction'], ans: 2 },
        { q: 'What advantages do bilingual children often show?',
          opts: ['Higher scores in all subjects','Cognitive flexibility and problem-solving ability','Faster reading and writing skills'], ans: 1 },
        { q: 'Who proposed the critical period hypothesis?',
          opts: ['Noam Chomsky','Sigmund Freud','Eric Lenneberg'], ans: 2 }
      ]
    }
  },

  /* ── Grade 12 General · B2.1 ────────────────────────────── */
  g12g: {
    name: 'Grade 12 General', level: 'B2.1',
    p1: [
      { q: 'Some linguists argue that a universal language could _____ global communication.',
        opts: ['hinder','facilitate','terminate'], ans: 1 },
      { q: 'The concept of linguistic _____ suggests that the language you speak shapes how you think.',
        opts: ['immersion','relativity','acquisition'], ans: 1 },
      { q: 'Cultural _____ occurs when one dominant language causes smaller languages to disappear.',
        opts: ['diversity','homogenisation','innovation'], ans: 1 },
      { q: 'The preservation of _____ languages is important for maintaining cultural identity.',
        opts: ['indigenous','artificial','imported'], ans: 0 },
      { q: 'The architect\'s design was both _____ and functional, earning widespread admiration.',
        opts: ['aesthetically pleasing','technically poor','structurally unstable'], ans: 0 }
    ],
    p2: [
      { q: 'If they _____ the old building, it would still be standing today.',
        opts: ['had protected','protected','have protected'], ans: 0 },
      { q: 'The proposal _____ considerable controversy when it was announced.',
        opts: ['generated','was generating','has generated'], ans: 0 },
      { q: 'Architects argue that heritage buildings _____ at all costs.',
        opts: ['should be preserved','should preserve','should preserving'], ans: 0 },
      { q: 'Had the government invested in infrastructure earlier, the city _____ these problems.',
        opts: ['would not have suffered','will not have suffered','would not suffer'], ans: 0 },
      { q: 'The tower, which _____ in the eighteenth century, has recently been restored.',
        opts: ['is built','was built','built'], ans: 1 }
    ],
    p3a: {
      title: 'The Universal Language Debate',
      text: 'The idea of a universal language — one that all people around the world could use to communicate — has fascinated linguists, philosophers, and policymakers for centuries. Today, English functions as the closest approximation of a global lingua franca, used in international business, diplomacy, science, and aviation. Proponents of English as a global language argue that a shared communication medium reduces barriers to international trade, academic collaboration, and cultural exchange. However, critics argue that the global dominance of English comes at a cost. Languages that receive less institutional support are in danger of extinction; it is estimated that one language disappears every two weeks. With the loss of a language comes the loss of the cultural knowledge, traditions, and unique ways of seeing the world that it encodes. The constructed language Esperanto was created in the nineteenth century as a neutral alternative, designed to be easy to learn and free from the cultural baggage of any particular nation. Despite attracting a dedicated community of speakers, Esperanto has never achieved widespread adoption. The debate continues: should we embrace a single global language for efficiency, or protect linguistic diversity for cultural and cognitive richness?',
      qs: [
        { q: 'English currently functions as a global lingua franca in business and diplomacy.', ans: 'T' },
        { q: 'Critics are concerned that the dominance of English leads to the extinction of other languages.', ans: 'T' },
        { q: 'One language disappears approximately every two months.', ans: 'F' },
        { q: 'Esperanto was created in the twentieth century.', ans: 'F' },
        { q: 'Esperanto has been adopted as an official language by several countries.', ans: 'N' },
        { q: 'The text argues that English should be made the only official global language.', ans: 'N' }
      ]
    },
    p3b: {
      title: 'Architecture Through the Ages',
      text: 'Throughout history, architecture has served as one of humanity\'s most powerful means of expressing cultural identity, political power, and technological achievement. In ancient civilisations, monumental structures such as the Egyptian pyramids, the Greek Parthenon, and the Roman Colosseum demonstrated the reach of engineering capabilities and collective ambition. Medieval Europe saw the rise of Gothic architecture, characterised by pointed arches, ribbed vaults, and flying buttresses — structural innovations that allowed buildings to soar to previously unimaginable heights. The Renaissance brought a return to classical principles of proportion, symmetry, and harmony. The Industrial Revolution transformed architecture by introducing new materials: first cast iron, then steel and reinforced concrete, which made it possible to construct buildings of unprecedented scale. The twentieth century saw the emergence of modernism — a philosophy that rejected historical ornamentation in favour of function, efficiency, and clean geometric forms. Contemporary architecture increasingly emphasises environmental sustainability alongside aesthetic innovation, incorporating solar panels, green roofs, and intelligent building management systems.',
      qs: [
        { q: 'What did ancient monumental structures demonstrate?',
          opts: ['The religious beliefs of ancient peoples','Engineering capabilities and collective ambitions of civilisations','The artistic tastes of ancient rulers'], ans: 1 },
        { q: 'What characterises Gothic architecture?',
          opts: ['Low horizontal structures and flat roofs','Pointed arches, ribbed vaults, and flying buttresses','Classical columns and symmetrical designs'], ans: 1 },
        { q: 'What did the Renaissance return to?',
          opts: ['Gothic structural innovations','Industrial building materials','Classical principles of proportion and harmony'], ans: 2 },
        { q: 'Which materials did the Industrial Revolution introduce to architecture?',
          opts: ['Wood, stone, and marble','Cast iron, steel, and reinforced concrete','Glass and aluminium'], ans: 1 },
        { q: 'What is the main philosophy behind architectural modernism?',
          opts: ['Rejecting historical ornamentation in favour of function and clean forms','Returning to classical Greek and Roman styles','Building as tall as possible'], ans: 0 },
        { q: 'What does contemporary architecture emphasise alongside aesthetic innovation?',
          opts: ['Historical ornamentation','Ancient building techniques','Environmental sustainability'], ans: 2 },
        { q: 'Which feature of Gothic architecture helped buildings reach greater heights?',
          opts: ['Classical columns','Flying buttresses','Reinforced concrete'], ans: 1 }
      ]
    },
    p3c: {
      title: 'Sustainable Architecture',
      text: 'The construction industry is responsible for approximately 40 per cent of global energy consumption and generates a significant proportion of the world\'s carbon emissions. As the effects of climate change become increasingly apparent, pressure on the architecture and construction industries to reduce their environmental impact has intensified. Sustainable architecture — also known as green architecture — seeks to minimise a building\'s negative impact on the environment over its entire life cycle, from initial construction through operation to eventual demolition. Key strategies include passive design, which maximises natural light and ventilation to reduce the need for artificial lighting and air conditioning; the use of recycled or locally sourced materials; and the installation of renewable energy systems. The concept of a "net-zero" building — one that produces as much energy as it consumes — is gaining traction in the construction industry. Certification schemes such as LEED and BREEAM provide internationally recognised standards for sustainable building design. As governments around the world tighten environmental regulations, sustainable architecture is rapidly moving from an optional extra to an industry standard.',
      qs: [
        { q: 'What proportion of global energy consumption does the construction industry account for?',
          opts: ['Approximately 20 per cent','Approximately 40 per cent','Approximately 60 per cent'], ans: 1 },
        { q: 'What does sustainable architecture aim to minimise?',
          opts: ['The cost of construction','The height of buildings','A building\'s negative environmental impact'], ans: 2 },
        { q: 'What is "passive design"?',
          opts: ['Designing buildings using only recycled materials','Maximising natural light and ventilation to reduce energy use','Installing the latest technology in every room'], ans: 1 },
        { q: 'What is a "net-zero" building?',
          opts: ['A building with zero windows','A building that uses no electricity','A building that produces as much energy as it consumes'], ans: 2 },
        { q: 'What do LEED and BREEAM provide?',
          opts: ['Financial support for green building projects','Internationally recognised standards for sustainable building','Training courses for architects'], ans: 1 },
        { q: 'Why is sustainable architecture becoming an industry standard?',
          opts: ['Because it is cheaper than traditional methods','Because governments are tightening environmental regulations','Because all clients demand it'], ans: 1 },
        { q: 'What phases of a building\'s life does sustainable architecture consider?',
          opts: ['Only the construction phase','Only the operation phase','From construction through operation to demolition'], ans: 2 }
      ]
    }
  },

  /* ── Grade 12 Advanced · B2.2 ───────────────────────────── */
  g12a: {
    name: 'Grade 12 Advanced', level: 'B2.2',
    p1: [
      { q: 'The concept of linguistic _____ suggests that the language you speak shapes how you perceive reality.',
        opts: ['immersion','relativity','acquisition'], ans: 1 },
      { q: 'The rapid spread of avian flu across continents _____ global health authorities.',
        opts: ['delighted','alarmed','satisfied'], ans: 1 },
      { q: 'Alternative therapies have been the subject of _____ scientific debate for decades.',
        opts: ['considerable','insignificant','outdated'], ans: 0 },
      { q: 'Researchers found that bilingual individuals showed greater _____ when switching between tasks.',
        opts: ['difficulty','cognitive flexibility','impairment'], ans: 1 },
      { q: 'The government introduced _____ measures to prevent the disease from spreading further.',
        opts: ['precautionary','celebratory','lenient'], ans: 0 }
    ],
    p2: [
      { q: 'By the end of this year, scientists _____ the vaccine for over a decade.',
        opts: ['will develop','will have been developing','are developing'], ans: 1 },
      { q: 'She argued that the hypothesis _____ widely accepted by the academic community.',
        opts: ['should be','should','should have'], ans: 0 },
      { q: 'The researchers _____ their findings before the outbreak was officially declared.',
        opts: ['will have published','had published','published'], ans: 1 },
      { q: 'By 2030, the research team _____ on this project for fifteen years.',
        opts: ['will work','will have worked','work'], ans: 1 },
      { q: 'The doctor told the patient that the treatment _____ for at least three months.',
        opts: ['would have to continue','will have to continue','must continue'], ans: 0 }
    ],
    p3a: {
      title: 'The Sapir-Whorf Hypothesis',
      text: 'The Sapir-Whorf hypothesis, also known as linguistic relativity, is one of the most debated propositions in the field of linguistics. In its strong form — known as linguistic determinism — it proposes that language entirely determines thought: that people who speak different languages perceive and conceive of reality in fundamentally different ways. The weak form of the hypothesis, linguistic relativity, proposes that language influences — but does not entirely determine — the way we think and perceive the world. Research into colour perception has provided some of the most compelling evidence for the weak form. Studies have found that speakers of languages with more precise colour vocabulary are able to distinguish between colours more quickly and accurately than speakers of languages with fewer colour terms. The Pirahã, an indigenous group in the Amazon, speak a language that has no numbers beyond "one" and "many". Research suggests that they experience genuine difficulty with tasks that require precise numerical thought. Critics of the hypothesis argue that human thought is fundamentally universal and that language merely reflects, rather than shapes, the way we think. The debate remains unresolved, but it continues to generate fascinating interdisciplinary research.',
      qs: [
        { q: 'The strong form of the Sapir-Whorf hypothesis suggests language entirely determines thought.', ans: 'T' },
        { q: 'The weak form proposes that language cannot influence thought in any way.', ans: 'F' },
        { q: 'Studies on colour perception support the strong form of the hypothesis.', ans: 'F' },
        { q: 'The Pirahã language has a complex numerical system.', ans: 'F' },
        { q: 'Critics of the hypothesis believe that language shapes how we think.', ans: 'F' },
        { q: 'The author concludes definitively that the hypothesis is either true or false.', ans: 'N' }
      ]
    },
    p3b: {
      title: 'Avian Influenza',
      text: 'Avian influenza, commonly known as bird flu, is an infectious viral disease that primarily affects birds, particularly poultry and wild waterfowl. Caused by influenza A viruses, avian flu strains are classified according to two proteins on the surface of the virus: haemagglutinin (H) and neuraminidase (N). The strain H5N1, first identified in humans in Hong Kong in 1997, is of particular concern to public health authorities due to its high mortality rate in infected individuals. Transmission from birds to humans is possible, but sustained human-to-human transmission has not been observed on a large scale. However, epidemiologists warn that the virus could mutate and acquire the ability to spread efficiently between people, potentially triggering a global pandemic. The 2021–2023 outbreak was the largest in recorded history, resulting in the culling of hundreds of millions of birds across dozens of countries. National and international health authorities coordinate surveillance, vaccination of poultry, and biosecurity measures to contain outbreaks. While antiviral drugs such as oseltamivir can reduce the severity of the illness, no widely available vaccine exists for human use at this time.',
      qs: [
        { q: 'What type of virus causes avian influenza?',
          opts: ['Influenza B viruses','Influenza A viruses','Coronavirus'], ans: 1 },
        { q: 'When was the H5N1 strain first identified in humans?',
          opts: ['In 1987','In 2003','In 1997'], ans: 2 },
        { q: 'What is the main public health concern about H5N1?',
          opts: ['It affects animals only','Its high mortality rate in infected humans','It spreads rapidly between animals'], ans: 1 },
        { q: 'What have epidemiologists warned about?',
          opts: ['The virus could mutate and spread between people','All birds must be eliminated','The virus only affects elderly people'], ans: 0 },
        { q: 'How is the avian flu virus classified?',
          opts: ['By the country where it was first found','By two proteins: haemagglutinin and neuraminidase','By the type of bird it infects'], ans: 1 },
        { q: 'What happened during the 2021–2023 outbreak?',
          opts: ['A human vaccine was successfully developed','The virus disappeared from wild birds','Hundreds of millions of birds were culled'], ans: 2 },
        { q: 'What antiviral treatment is mentioned in the text?',
          opts: ['Penicillin','Oseltamivir','Amoxicillin'], ans: 1 }
      ]
    },
    p3c: {
      title: 'Alternative and Complementary Medicine',
      text: 'Alternative and complementary medicine (CAM) encompasses a broad range of practices that fall outside the scope of conventional Western medicine. These include acupuncture, herbal medicine, homeopathy, chiropractic treatment, meditation, and yoga, among many others. The global market for complementary medicine has grown significantly in recent decades, reflecting both patient dissatisfaction with aspects of conventional medicine and a growing interest in holistic approaches to health that consider the whole person — mind, body, and spirit. Proponents argue that many CAM therapies can alleviate chronic pain, reduce stress, and improve quality of life without the side effects associated with pharmaceutical drugs. However, critics — including many in the mainstream medical community — argue that the majority of CAM therapies lack the rigorous scientific evidence required to establish their efficacy through randomised controlled trials. A complicating factor is that some alternative therapies have been shown to interact dangerously with conventional medications. Patients who use CAM therapies without informing their doctors may inadvertently undermine their conventional treatment. Most medical authorities now advocate for an integrative approach that critically evaluates evidence for CAM therapies and incorporates those with proven benefits into a broader treatment plan.',
      qs: [
        { q: 'What does "CAM" stand for?',
          opts: ['Clinical and Analytical Medicine','Complementary and Alternative Medicine','Controlled and Applied Methods'], ans: 1 },
        { q: 'What factor has driven growth in the CAM market?',
          opts: ['Government mandates requiring its use','Patient dissatisfaction with conventional medicine','The decline of pharmaceutical companies'], ans: 1 },
        { q: 'What do proponents of CAM claim it can do?',
          opts: ['Cure all diseases permanently','Replace all conventional treatments','Alleviate chronic pain and reduce stress'], ans: 2 },
        { q: 'Why do critics argue against many CAM therapies?',
          opts: ['They are too expensive','They are only available in certain countries','They lack rigorous scientific evidence from controlled trials'], ans: 2 },
        { q: 'What risk is associated with using CAM alongside conventional medicine?',
          opts: ['It always improves treatment outcomes','Some therapies can interact dangerously with medications','It always reduces the effectiveness of surgery'], ans: 1 },
        { q: 'What do most medical authorities now advocate?',
          opts: ['Banning all alternative medicine','Using only traditional herbal remedies','An integrative approach incorporating proven CAM benefits'], ans: 2 },
        { q: 'What is described as a "holistic" approach to health?',
          opts: ['One that focuses only on physical symptoms','One that considers mind, body, and spirit as a whole','One that rejects all modern medicine'], ans: 1 }
      ]
    }
  }

}; // end timedExamData
