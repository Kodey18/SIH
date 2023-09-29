// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to our website!',
      aboutUs: 'About Us',
      contact: 'Contact',
      homepg: {
        playLearnAdvocate: 'Play, Learn, and Advocate.',
        empoweringKids: 'Empowering Kids for a Just Tomorrow!',
        startLearning: 'Start Learning',
        ourActivities: 'Our Features',
        challenges: 'Challenges',
        challengesDescription: 'Word Scramble, Quiz, Memory-Game and others',
        modulesAndStories: 'Modules and Stories',
        modulesAndStoriesDescription: 'Learning along with visuals and stories',
        games: '3D Games',
        gamesDescription: 'Interactive 3d gameplay based-on real-life scenarios',
        expertsWebinar: 'Experts Webinar',
        expertsWebinarDescription: 'Get lessons from experts and chat with them',
        aboutUs: 'About Us',
        ourMission: 'Our Mission',
        missionDescription: `
        Our platform's mission is to transform the learning experience for children aged 8-16 by combining the power of gamification with a profound exploration of child rights. Through interactive gameplay, we invite children into a captivating world where they can discover, understand, and appreciate the importance of their own rights. We're on a quest to raise awareness about these fundamental rights, providing an immersive journey that not only educates but also inspires action and advocacy. Our vision is to nurture a generation that possesses not only legal literacy but also the passion and tools to stand up for their rights and those of their peers, contributing to a brighter future where every child's rights are respected and upheld. Together, we're building a world where young minds are empowered to shape a fair and just society.`,
        activities: 'Activities',
        learningModules: 'Learning Modules',
        learningModulesDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Aliquid molestias dolores dolore dicta. Enim voluptatum
      quam vero tempora laboriosam aut ratione sint architecto.
      Excepturi facilis molestias numquam reiciendis? Quisquam,
      ipsum.`,
        gamesActivity: 'Games',
        gamesActivityDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Aliquid molestias dolores dolore dicta. Enim voluptatum
      quam vero tempora laboriosam aut ratione sint architecto.
      Excepturi facilis molestias numquam reiciendis? Quisquam,
      ipsum.`,
        specialEvents: 'Special Events',
        specialEventsDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Aliquid molestias dolores dolore dicta. Enim voluptatum
      quam vero tempora laboriosam aut ratione sint architecto.
      Excepturi facilis molestias numquam reiciendis? Quisquam,
      ipsum.`,
        quizzes: 'Quizzes',
        quizesDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Aliquid molestias dolores dolore dicta. Enim voluptatum
      quam vero tempora laboriosam aut ratione sint architecto.
      Excepturi facilis molestias numquam reiciendis? Quisquam,
      ipsum.`,
        blogs: 'Blogs',
        experts: 'Experts',
      }
    },
    // Assuming 'home' is the key for your Home component translations


  },
  hi: {
    translation: {
      welcome: 'हमारी वेबसाइट पर आपका स्वागत है!',
      aboutUs: 'हमारे बारे में',
      contact: 'संपर्क करें',
      vighnesh: 'विघ्नेश',
      helloEveryone: 'नमस्ते सभी को!!',
      badgesEarned: 'अर्जित बैज:',
      bio: 'जीवनी:',
      bioContent: 'लोरेम इप्सम डोलर सिट, अमेत कॉन्सेक्टेतुर अदिपिसिंग एलित. एस्से एरर एक्सप्लिकाबो फाकेरे दोलोरुम पोर्रो एओस एत मोल्लितिया, मोलेस्तिआस तेनेतुर रेपेल्लात. रेपुदिअंदाए एयुस ऑफ्फिचिय इद नोस्त्रुम! फुगित नाम सेद अद इप्साम?',
      coursesCompleted: 'पूरा किए गए कोर्सेज:',
      course1: 'कोर्स 1',
      course2: 'कोर्स 2',
      course3: 'कोर्स 3',
      course4: 'कोर्स 4',
      Home: "होम",
      Videos: "कोर्सेज",
      Blogs: "ब्लॉग्स",
      Challenges: "प्रश्नोत्तरी",
      Games: "खेल",
      Events: "घटनाएँ",
      Chat: "चैट",
      Profile: "प्रोफाइल",
      english: "अंग्रेज़ी",
      hindi: "हिंदी",
      Login: "लॉग इन",
      homepg: {
        playLearnAdvocate: 'खेलें, सीखें और समर्थन करें।',
        empoweringKids: 'एक न्यायिक भविष्य के लिए बच्चों को सशक्त करना!',
        startLearning: 'शुरू करें अध्ययन',
        ourFeatures: 'हमारी गतिविधियाँ',
        challenges: 'चुनौतियाँ',
        challengesDescription: 'शब्द स्क्रैम्बल, क्विज़, मेमोरी गेम और अन्य',
        modulesAndStories: 'मॉड्यूल और कहानियाँ',
        modulesAndStoriesDescription: 'दृश्यों और कहानियों के साथ शिक्षा',
        games: '3D खेल',
        gamesDescription: 'वास्तविक जीवन के स्थितियों पर आधारित इंटरैक्टिव 3D गेमप्ले ',
        expertsWebinar: 'विशेषज्ञ वेबिनार',
        expertsWebinarDescription: 'विशेषज्ञों से सीखें और उनके साथ चैट करें',
        aboutUs: 'हमारे बारे में',
        ourMission: 'हमारा उद्देश्य',
        missionDescription: ' लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है।  लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है।  लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। ',
        learningModules: 'शिक्षाओं के मॉड्यूल',
        learningModulesDescription: ' लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है।  लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है।  लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। ',
        specialEvents: 'विशेष घटनाएँ',
        specialEventsDescription:' लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है।  लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है।  लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। ',
        quizes: 'प्रश्नोत्तरी',
        quizesDescription: ' लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है।  लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है।  लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। '
      }
    }


  }

};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language in case translation files are missing
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
