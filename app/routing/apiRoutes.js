//=============================================================
//LOAD DATA
//We are linking our routes to a series of "data" sources.
//These data sources hold arrays of information on friends-data
//=============================================================

var friendsData = require ("../data/friends");

//==============================================================
//
//ROUTING
//
//==============================================================

module.exports = function(app) {
    // API GET Requests
    //Below code handles when users "visit" a page,
    //In each of the below cases when a user visits a link
    // (ex: localhost:  port/api/admin.. they are shown a JAON of the data in the table)
    //----------------------------------------------------------------------------------
    app.get("api/friends", function(req, res){
        res.json(friendsData);
    });

    //API POST Requests
    //Below code handles when a user submits form data ( a JSON object)
    //... the JSON is pushed to the appropriate Javascript array
    //(ex. User fills out the survey... this data is then sent to the server...
    //Then the server saves the data to the friends Array)
    //
    //-------------------------------------------------------------------------------------

    app.post("/api/friends", function(req, res){
        // Note the code here. Our "server" will response to requests and let users know their matching friend.
        // req.body is available since we're using the body parsing middleware
        
        friendsData.push(req.body);
        res.json(true);

    });  

}