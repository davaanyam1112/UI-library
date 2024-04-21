document.addEventListener("DOMContentLoaded", function () {
  var btnContainer = document.getElementById("myDIV");

  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = btnContainer.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace("active", "");
      }
      this.className += " active";
    });
  }
});
