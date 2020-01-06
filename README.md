# FriendFinder

#### The friend finder is a simple version of facebook. As you answer 10 questions and the backend will find the most matching friend for you and pop on the screen.

#### Please find the overview of the app.
![friendfinder](1.gif);

#### I have set 3 subfolders in app folder.
- The data folder has a friends.js file which handle all the hard code friends information
- The public folder has 2 html files. The home.html file is the main home page, and the survey.html is the page handle all the survey.
- The routing folder handle all the api routes.

#### Challange I overcomes during this project
- I need to find out the most matching friend by calculating every question's score difference with all the existing friends list.

This is most updated verson of code handle the calculation. The code was very long at the beginning, but after couple of times update, the code was much more short. The running time for this step is O(n^2)

``` javascript
 app.post("/api/friends", function (req, res) {
        
        friendsData.push(req.body);
        scoreDiffArr = [];
        
        for (var i = 0; i < friendsData.length - 1; i++) {          
            var friDataScore = friendsData[i].friendsScoreArr         
            var scoreNumArr = friDataScore.map(Number);        
            var surveyNumArr = req.body.friendsScoreArr.map(Number);
            var scoreDiffSum = 0;
            for (var j = 0; j < 10; j++) {
                var qScoreDiff = Math.abs(scoreNumArr[j] - surveyNumArr[j]);
                scoreDiffSum += qScoreDiff;
            }
            scoreDiffArr.push(scoreDiffSum);
        }
        var minQS = Math.min(...scoreDiffArr);
        var mostMatchIndex = scoreDiffArr.indexOf(minQS);
        res.json(friendsData[mostMatchIndex]);
    });
}
```

- Next challenging part I think is the new helper I learned from this project, " Modal". A modal is a dialog box/popup window that displays on the top of the current page. I use Modal in this project to display the most matching friend. Below is the Bootstrap handle the Modal.

``` html
<div class="modal" id = "matchFriendModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">The most match friend</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3 id = "matchFriend"></h3>
            <img id = "matchFriendPhoto" src = "#" style = "height: 100px; width: 100px;"></img>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
```
#### Once I click the "Submit" button and meet certain criteria, the Modal with matching friend's information will be popup on the current window.
-  Alert window for missing required fill in fields. A lot of times, people may forget to input some part of the form, so the information we gather will not be accurate. It is very important to let the user knows that the form they are filling in is not completed. I used the Aler method to remind the user that they need to fill in all empty fields.

``` javascript

if ($("#q1").val()[0] === "S" || $("#q2").val()[0] === "S" || $("#q3").val()[0] === "S" || $("#q4").val()[0] === "S" || $("#q5").val()[0] === "S" || $("#q6").val()[0] === "S" || $("#q7").val()[0] === "S" || $("#q8").val()[0] === "S" || $("#q9").val()[0] === "S" || $("#q10").val()[0] === "S" || $("#survey-name").val() === "" || $("#survey-url").val() === "") {
    alert("You must fill in all forms")
  }
```
#### Technologies I used in this project
- HTML
- CSS
- Bootstrap
- Javascript
- Node Express
- Font Awesome 
- JSON

## **_Let's having fun with playing this app :)_**