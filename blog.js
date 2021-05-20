  function showDiv() {

    

 
  var closePopup = document.getElementById("popupclose");
  var overlay = document.getElementById("overlay");
  var popup = document.getElementById("popup");
  var originalDiv = document.getElementById("originalDiv");
  var something = document.getElementById("something");
  var x = document.getElementsByTagName("BODY")[0];
  var y = window.scrollY;
  var z =260+y;
  var z1 =y;
  overlay.style.top=""+z1+"px";
  popup.style.top=""+z+"px";
  // Close Popup Event
  closePopup.onclick = function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
  };
  // Show Overlay and Popup
 
    overlay.style.display = 'block';
    popup.style.display = 'block';
}