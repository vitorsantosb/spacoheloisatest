const homeController = require('./src/controllers/home');
const teamController = require('./src/controllers/team');
const spacoController = require('./src/controllers/spaco');
const clippingControle = require('./src/controllers/clipping');
const contactController = require('./src/controllers/contact');
const newsControllerOne = require('./src/controllers/newsOne');
const newsControllerTwo = require('./src/controllers/newsTwo');
const newsControllerTree = require('./src/controllers/newsTree');
const treatmentsController = require('./src/controllers/treatments');
const newsController = require('./src/controllers/news');

const express = require('express');
const router = express.Router();

router.get('/', homeController.home);
router.get('/team', teamController.team);
router.get('/ospaco', spacoController.spaco);
router.get('/clipping', clippingControle.clipping);
router.get('/contact', contactController.contact);
router.get('/newsOne', newsControllerOne.newsOne);
router.get('/newsTwo', newsControllerTwo.newsTwo);
router.get('/newsTree', newsControllerTree.newsTree);
router.get('/treatments', treatmentsController.treatments);
router.get('/news', newsController.news);

module.exports = router;