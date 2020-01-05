

$(".submit").on("click", function(event) {
    event.preventDefault();
    //var selectElement = document.getElementsByClassName("selectScore")
    // Here we grab the form elements
    
     
    var newSurvey = {
      friendsName: $("#survey-name").val().trim(),
      friendsPhoto: $("#survey-url").val(),
      friendsScoreArr: [
        $("#q1").val()[0].trim(),
        $("#q2").val()[0].trim(),
        $("#q3").val()[0].trim(),
        $("#q4").val()[0].trim(),
        $("#q5").val()[0].trim(),
        $("#q6").val()[0].trim(),
        $("#q7").val()[0].trim(),
        $("#q8").val()[0].trim(),
        $("#q9").val()[0].trim(),
        $("#q10").val()[0].trim()
      ]
    };
  

    console.log(newSurvey);


    // This line is the magic. It"s very similar to the standard ajax function we used.
    // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
    // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
    // depending on if a tables is available or not.


  if ( newSurvey.friendsScoreArr === "S" || $("#survey-name").val() === "" || $("#survey-url").val() === ""){
    alert("You must fill in all forms")
  }
else {

    $.post("/api/friends", newSurvey,
      function(data) {
        $("#matchFriend").text(data.friendsName);
				$("#matchFriendPhoto").attr("src", data.friendsPhoto);
				$("#matchFriendModal").modal("toggle");

        //alert("Your best match friend")

        // Clear the form when submitting
        $("#survey-name").val("");
        $("#survey-url").val("");
        $(".selectScore").val("Select an Option");
      
      });
    
}
  });
