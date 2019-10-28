const initState = {
    project_data : [
        {id : 0,name : "EventGo!",url : 'project/eventgo',intro:"this is widm_web",img : 'EventGo.png'},
        {id : 1,name : "PowerPOI",url : 'project/powerpoi',intro:"this is widm_web",img : 'PowerPOI.png'},
        {id : 2,name : "NCUFree",url : 'project/ncufree-mobileadvertisingplatformbasedoncampuswirelessnetwork',intro:"this is widm_web",img : 'NCUFree.png'},
        {id : 3,name : "WiFiLoginPass",url : 'projects/wifipass',intro:"this is widm_web",img : 'WifiPass.png'},
        {id : 4,name : "Web NER ToolKit",url : 'projects/web-ner-tool',intro:"this is widm_web",img : 'nlp.png'}
    ],
}

const projectReducer = (state=initState,action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('create project', action.project)
            break
        default:
    }
    return state;
}

export default projectReducer;