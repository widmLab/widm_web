export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call here
        //cuz es6 we can just use project in json without key:value
        dispatch({ type: 'CREATE_PROJECT', project})
    }
}