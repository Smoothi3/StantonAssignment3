var express = require('express')
var router = express.Router()
var ctrlLocations = require('../controllers/locations')

router.get('/', ctrlLocations.dataEntry)
router.get('/formEntry', ctrlLocations.dataEntry)
router.post('/colorTables', ctrlLocations.colorTables)

router.get('/testData', ctrlLocations.testData)

module.exports = router