
interface SurveyPage {
    id: number,
    question:string,
    aswer1:string,
    aswer2:string,
    aswer3:string,
    aswer4:string,
}
const SurveyPages: SurveyPage[] = [
    {
        id: 1,
        question:"1. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        aswer1:"Lorem ipsum dolor sit amet.",
        aswer2:"Lorem ipsum dolor sit amet.",
        aswer3:"Lorem ipsum dolor sit amet.",
        aswer4:"Lorem ipsum dolor sit amet.",
    },
    {
        id: 2,
        question:"2. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        aswer1:"Lorem ipsum dolor sit amet.",
        aswer2:"Lorem ipsum dolor sit amet.",
        aswer3:"Lorem ipsum dolor sit amet.",
        aswer4:"Lorem ipsum dolor sit amet.",
    },
    {
        id: 3,
        question:"3. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        aswer1:"Lorem ipsum dolor sit amet.",
        aswer2:"Lorem ipsum dolor sit amet.",
        aswer3:"Lorem ipsum dolor sit amet.",
        aswer4:"Lorem ipsum dolor sit amet.",
    },
    {
        id: 4,
        question:"4. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        aswer1:"Lorem ipsum dolor sit amet.",
        aswer2:"Lorem ipsum dolor sit amet.",
        aswer3:"Lorem ipsum dolor sit amet.",
        aswer4:"Lorem ipsum dolor sit amet.",
    },

];

export { SurveyPage, SurveyPages }; 