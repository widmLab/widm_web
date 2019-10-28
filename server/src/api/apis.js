var express = require('express');

var api_router = express.Router();
var userRouter = require('./routes/user');
var aboutRouter = require('./routes/About');
var experienceRouter = require('./routes/Experience');
var activitiesRouter = require('./routes/Activities');
var activitiestypeRouter = require('./routes/ActivitiesType');
var publicationtypeRouter = require('./routes/PublicationType');
var publicationRouter = require('./routes/Publication');
api_router.use('/user',userRouter);
api_router.use('/about',aboutRouter);
api_router.use('/experience',experienceRouter);
api_router.use('/activities',activitiesRouter);
api_router.use('/activitiestype',activitiestypeRouter);
api_router.use('/publicationtype',publicationtypeRouter);
api_router.use('/publication',publicationRouter);

module.exports = api_router;