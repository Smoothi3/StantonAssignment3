var dataEntry = function(req, res){
    res.render('dataEntry')
}

var testData = function(req, res){
    res.render('/colorTables', req.body)
}

var colorTables = function(req, res){
    console.log(req.body)
    res.render('colorTables', {
        selection:req.body.selection
    })
}

module.exports = {
    dataEntry,
    testData,
    colorTables
}