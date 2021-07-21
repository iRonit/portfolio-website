import DoughnutChart from "../components/DoughnutChart";

export const aboutMe = {
    id: "about-me",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "About Me...",
    headLine: `Far and away the best prize that life offers
    is the chance to work hard at work worth doing. —Theodore Roosevelt`,
    description: [
        `I am and by heart a technology enthusiast, keen on every crazy stuff
        that technology has come to offer. I try and develop whatever makes life
        easy (and with some style!), and hopefully make people smile - I guess
        that’s the essence of technology!`
        ,
        `Been working as a Software Engineer
        predominantly in Java Backend services and solutions for over 5 years,
        and with professional knowledge on frontend technologies as well, I have
        worked on several websites and web-applications, putting down wireframes
        to implementations.`
        ,
        `I have a really diverse set of skills (owing to my wild interests rampant all 
        over the place), ranging from design, sketching up logos, illustrations, UI,
        backend system designs, scaling up performances, etc.`
    ],
    imgStart: true,
    isImg: true,
    img: require('../assets/images/svg-1.svg').default,
    alt: "Me",
    dark: false,
    primary: true,
    darkText: true
};

export const skills = {
    id: "skills",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "My Skills...",
    headLine: `The true sign of intelligence is not knowledge, but imagination.
        - Albert Einstein`,
    description: [
        `Tap on for more details!`
    ],
    imgStart: false,
    isImg: false,
    img: <DoughnutChart />,
    alt: "Me",
    dark: true,
    primary: true,
    darkText: false
};
