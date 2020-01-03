//=============================================================
//LOAD DATA
//We are linking our routes to a series of "data" sources.
//These data sources hold arrays of information on friends-data
//=============================================================
var friendsData = require ("../data/friends");
//console.log(friendsData);

//==============================================================
//
//ROUTING
//
//==============================================================
module.exports = function(app) {
    // API GET Requests
    //Below code handles when users "visit" a page,
    //In each of the below cases when a user visits a link
    // (ex: localhost:  port/api/admin.. they are shown a JASON of the data in the table)
    //----------------------------------------------------------------------------------
    app.get("/api/friends", function(req, res){
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
    
        scoreDiffArr = [];
   // app.get("/api/match", function(req, res){
        for (var i = 0; i < friendsData.length-1; i++){
          //  console.log(friendsData)
           var friDataScore = friendsData[i].friendsScoreArr
           console.log(friDataScore)
           var scoreNumArr = friDataScore.map(Number);
           //console.log(scoreNumArr);
           var surveyNumArr = req.body.friendsScoreArr.map(Number);
           console.log(surveyNumArr)

           var scoreDiffSum = 0;
            for (var j = 0; j < 10; j++){
                
                var qScoreDiff = Math.abs(scoreNumArr[j] - surveyNumArr[j]);
                scoreDiffSum += qScoreDiff;
            }
            scoreDiffArr.push(scoreDiffSum);
                
        }
        console.log(scoreDiffArr)
                //console.log(qScoreDiff)
                var minQS = Math.min(...scoreDiffArr);
        console.log(minQS)
                var mostMatchIndex = scoreDiffArr.indexOf(minQS);
                console.log(mostMatchIndex)
                res.json(friendsData[mostMatchIndex]);                    
       
        });
   //     });
    }



