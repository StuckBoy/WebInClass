function cleanUpButtons() {
  var w = 0;
  var h = 0
  console.log("I'm in the buttons thing.");
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
}

$(doTheLegWork);
