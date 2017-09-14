var ThreeCupLevel = 0;
var FiveCupLevel = 0;

function cleanUpButtons() {
  var w = 0;
  var h = 0
  $("button").each(
      function() {
        w = Math.max(w, $(this).width());
        h = Math.max(h, $(this).height());
      }
  );
  $("button").width(w);
  $("button").height(h);
  console.log("width: " + w + ", height: " + h);
}

function doTheLegWork() {
  cleanUpButtons();
  linkUpButtons();
}

function linkUpButtons() {
  $('.F3').click(
    function() {
      $("#3Cup").attr("src", "img/3OutOf3.jpg");
      ThreeCupLevel = 3;
      haveIWonYet();
    }
  );
  $('.E3').click(
    function() {
      $("#3Cup").attr("src", "img/0OutOf3.jpg");
      ThreeCupLevel = 0;
      haveIWonYet();
    }
  );
  $('.D3t5').click(
    function() {
      FiveCupLevel = ThreeCupLevel + FiveCupLevel;
      ThreeCupLevel = ThreeCupLevel - ThreeCupLevel;
      $("#5Cup").attr("src", "img/"+FiveCupLevel+"OutOf5.jpg");
      $("#3Cup").attr("src", "img/0OutOf3.jpg");
      haveIWonYet();
    }
  );
  $('.F5').click(
    function() {
      $("#5Cup").attr("src", "img/5OutOf5.jpg");
      FiveCupLevel = 5;
      haveIWonYet();
    }
  );
  $('.E5').click(
    function() {
      $("#5Cup").attr("src", "img/0OutOf5.jpg");
      FiveCupLevel = 0;
      haveIWonYet();
    }
  );
  $('.D5t3').click(
    function() {
      if(FiveCupLevel > 3) {
        tcDifference = 3 - ThreeCupLevel;
        FiveCupLevel = FiveCupLevel - tcDifference;
        ThreeCupLevel = 3;
      }
      else {
        ThreeCupLevel = ThreeCupLevel + FiveCupLevel;
        FiveCupLevel = FiveCupLevel - FiveCupLevel;
      }
      $("#3Cup").attr("src", "img/"+ThreeCupLevel+"OutOf3.jpg");
      $("#5Cup").attr("src", "img/"+FiveCupLevel+"OutOf5.jpg");
      haveIWonYet();
    }
  );
}

function haveIWonYet() {
  if(FiveCupLevel == 4) {
    console.log("Win achieved!");
    $("#5Cup").css("border", '5px solid gold');
    window.alert("YOU WIN!!")
  }
}

$(doTheLegWork);
