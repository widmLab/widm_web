const initState = {
    // type:[
    //     {type:'Book_Chapters;Patents;Journal_Papers'}
    // ],
    Book_Chapters : [
        {id:1,name : "C.-H. Chang and C.-N. Hsu: Learning Information Extraction Rules for Web Data Mining, Encyclopedia of Data Warehousing and Mining, Idea Group Inc. (April 2005).",date:""},
    ],
    Patents : [
        {id:1,name:"C.-H. Chang and S.-C. Kuo: OnLine Extraction Rule Analysis for Semi-structured Documents” (半結構化文件的資訊擷取方法), no: I 237780, ROC, 2005.",date:""},
    ],
    "International Conference Papers":[
        {id:1,name:"Hsiang-En Cherng, Chia-Hui Chang: Short Text Conversation Based on Deep Neural Network and Analysis on Evaluation Measures. CoRR abs/1907.03070 (2019)",date:""},
        {id:2,name:"Chien-Lung Chou and Chia-Hui Chang “Mining Features for Web NER Model Construction based on Distant Learning”, to appear in The 21th International Conference on Asian Language Processing (IALP2017)",date:""},
        {id:3,name:"Oviliani Yenty Yuliana, Chia-Hui Chang, AFIS: Aligning Detail-Pages for Full Schema Induction, TAAI 2016, pp. 220-227, DOI: 10.1109/TAAI.2016.7880164",date:""},
        {id:4,name:"Hsiu-Min Chuang, Chia-Hui Chang, Chung-Ting Cheng: Improving the effectiveness of POI search by associated information summarization. IALP2016: 336-339",date:""},
        {id:5,name:"C.-H. Chang, T.-S. Chen, M.-C. Chen, J.-L. Ding: Efficient Page-Level Data Extraction ViaSchema Induction and Verification. PAKDD 2016 ",date:""},
        {id:6,name:"H.-M. Chuang, C.-H. Chang: Verification of POI and Location Pairs via Weakly Labeled Web Data. WWW Workshop on Location Web 2015:743-748.",date:""},

    ],
    Journal_Papers:[
        {id:1,name:"M.-L. Wu and C.-H. Chang*: Integrating Content-Based Filtering with Collaborative Filtering using Co-Clustering with Augmented Matrices, Expert Systems With Applications, Vol. 41, Iss. 6, pp. 2754-2761. (May 2014)",date:""},
        {id:2,name:"Q.Chen and C.-H. Chang*: Enhancement of Kernel Dependency Estimation with Information Generalization and Case Study on Skewed Data, Applied Intelligence, Vol. 41, Issue 2, pp. 582-593. (2014). 10.1007/s10489-014-0539-8",date:""},
        {id:3,name:"J.-C. Chen, I.-C. Wu, W.-J. Tseng, B.-H. Lin, C.-H. Chang: Job-Level Alpha-Beta Search, IEEE Transactions on Computational Intelligence and AI in Game, Mar. 2015, 7(1): 28-38, 10.1109/TCIAIG.2014.2316314",date:""},
        {id:4,name:"J.-R. Chang, Y.-H. Jheng, C.-H. Chanag*, C.-Y. Lo: An efficient algorithm for vehicle guidance combining the Dijkstra and A* algorithm with fuzzy inference theory, Journal of Internet Technology, Mar. 2015, 16(2):189-200",date:""},
        {id:5,name:"C.-H. Chang*, H.-M. Chuang, C.-Y. Huang, Y.-S. Su, S.-Y. Li: Enhancing POI Search on Maps via Online Address Extraction and Associated Information Extraction, Applied Intelligence. 44(3): 539-556 (2016)",date:""},
        {id:6,name:"H.-M. Chuang, C.-H. Chang*, Ting-Yao Kao, Chung-Ting Cheng and Ya-Yun Huang, K.-P. Cheong: Enabling Maps/Location Searches on Mobile Devices: Constructing a POI Database via Focused Crawling and Information Extraction, International Journal of Geographical Information Science, 30(7): 1405-1425 (2016)",date:""},
        {id:7,name:"Chien-Lung Chou, Chia-Hui Chang*, Ya-Yun Huang: Boosted Named Entities Recognition via Tri-Training, ACM Transactions on Asian and Low-Resource Language Information Processing 16(2) (2016) ",date:""},
        {id:8,name:"O. Yuliana, C.-H. Chang*, A novel alignment algorithm for effective web data extraction from singleton pages, Applied Intelligence, 48(11), 4355-4370 (2018).",date:""},
        {id:9,name:"-M. Chuang, C.-H. Chang, W.-C. Lee, Detecting Outdated POI Relations via Web-derived Features, Trans. on GIS, 22(5), 1238-1256, 2018.",date:""},
        {id:10,name:"Oviliani Yenty Yuliana and Chia-Hui Chang, DCADE: divide and conquer alignment with dynamic encoding for full page data extraction, Applied Intelligence, (), 1-25, 2019",date:""},

    ]
}

const publicationReducer = (state=initState,action) => {
    return state;
}

export default publicationReducer;