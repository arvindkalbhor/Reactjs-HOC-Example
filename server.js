var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname + '/build')));
    
// Routes
app.get('*', function(req, res, err){
    res.sendFile(path.join(__dirname + "/build/index.html"));
});

var server = app.listen(process.env.PORT || 4000, function(){
    var port = this.address().port; 
    console.log ('App server listening on port ' + port);
});