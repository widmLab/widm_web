const initState = {
    "Member" : [
        {id:1,name : "IEEE Computer society member",date:""},
        {id:2,name : "Association for Computing Machinery",date:""},
        {id:3,name : "Taiwan Association for Artificial Intelligence",date:""},
        {id:4,name : "Association for Computational Linguistics and Chinese Language Processing",date:""},
    ],
    "Conference Organizer" : [
        {id:1,name:"NAACL 2018 Area Co-Chair (Information Extraction) "},
        {id:2,name:"ACL 2017 AREA Co-Chair (Information Extraction and Retrieval Track)"},
    ],
    "Program Committee":[
        {id:1,name:"AAAI 2019 Senior Program Committee"},
        {id:2,name:"ACL 2018 Program Committee"},
        {id:3,name:"PAKDD 2018 Program Committee"},
    ],
    "Recent Talks at Conferences":[
        {id:1,name:"'Web Data Extraction & Its Applications', talk given at Tokyo Metropolitan University, Jan. 22, 2019."},
        {id:2,name:"'Web Information Extraction and Management:  A Road to Message Understanding', Keynote speech given at the 15th Joint conference on Computer Science and Software Engineering (JCSSE 2018), Bangkok, Thailand, July 11-13, 2018."},
        {id:3,name:"'The Road to Smart City: Experience from Taipei and Taoyuan', Talk given to Slovak Delegation, Mar. 21, 2018"},
        {id:4,name:"'Introduction to Artificial Intelligence and Machine Learning', 人工智慧與女姓議題 宜蘭大學微學分工作坊",date:"May 12,2019"},
        {id:5,name:"'Introduction to Artificial Intelligence and Machine Learning', 中壢高中人工智慧與機器學習講座",date:"Mar. 16,2018"},
    ]
}

const activitiesReducer = (state=initState,action) => {
    return state;
}

export default activitiesReducer;