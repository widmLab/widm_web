const initState=
{
    Professor:{url:'https://sites.google.com/site/jahuichang/_/rsrc/1526569030394/Home/changchiahui2016.jpg?height=200&width=167'},
    WordCloud:{url:'https://i.imgur.com/5aEBaCo.png'},
    Experience:
    [
        {id:1,name:'Postdoc at Institue of Information Science, Academic Sinica （中央研究院博士後）',time:'1999.2 - 1999.7'},
        {id:2,name:'Assistant Professor at CSIE, NCU, （中央大學資工系助理教授）',time:'1999.8 - 2004.7'},
        {id:3,name:'Associate Professor at CSIE, NCU, （中央大學資工系副教授）',time:'2004.8 - 2010.7 '},
        {id:4,name:'Visiting Faculty at Machine Learning Dept, Carnegie Mellon University （卡內基美濃機器學習系訪問學者）',time:'2007.8 - 2008.7'},
        {id:5,name:'Director of CSIE department, NCU (中央大學資工系主任）',time:'2014.8 - 2017.7 '},
        {id:6,name:'Professor at CSIE department, NCU (中央大學資工系教授）',time:'2011.8 - Now'},
    ]
}

const aboutReducer=(state=initState,action)=>
{
    return state;
}

export default aboutReducer;