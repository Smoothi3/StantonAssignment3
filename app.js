var express = require('express')
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')
var app = express()

var appRouter = require('./app_server/routes/index')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.engine('hbs', exphbs.engine({
    defaultLayout:'main',
    extname:'hbs',
    helpers:{
        generateColorTable(amount){
            var tableSet = ""
            tableSet += `<table class="colors"> <tbody>`
            for(let i = 0; i < amount; i++){
                tableSet += `<tr>`
                for(let j = 0; j < amount; j++){
                    var color = ((1<<24)*Math.random()|0).toString(16);
                    var backColor = "#" + color
                    tableSet += `<td style="background-color:${backColor}">${color}<br/><span style="color:#ffffff;">${color}</span></td>`
                }
                tableSet += `</tr>`
            }
            tableSet += `</tbody> </table>`
            return tableSet
        }
    }
}))

app.set('view engine', 'hbs')

app.use('/', appRouter)

app.post('/testData', function(req, res){
    console.log(req.body)
    res.render(200, '/colorTables', req.body)
})

app.listen(3000, function(){
    console.log("Listening on port 3000")
})