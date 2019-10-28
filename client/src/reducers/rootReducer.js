import userReducer from './userReducer';
import {combineReducers} from 'redux'
import projectReducer from './projectReducer';
import contactReducer from './contactReducer';
import publicationReducer from './publicationReducer';
import activitiesReducer from './activitiesReducer';
import aboutReducer from './aboutReducer';
const rootReducer = combineReducers({
    userReducer,
    projectReducer,
    contactReducer,
    publicationReducer,
    activitiesReducer,
    aboutReducer,
})

export default rootReducer;