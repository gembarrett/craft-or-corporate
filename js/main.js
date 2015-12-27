// grab text link
var listClick = document.getElementById("list-link");
// grab list element
var list = document.getElementById("see-list");
// hide list element at first so if there's no javascript then site is still useable
list.className += "hide-all";
// when the text link is clicked on
listClick.onclick = function() { showHideTheList(list) };
// add class which shows the list
function showHideTheList(el) {

  // get current classnames
  var className = ' ' + list.className + ' ';

  // if showing, then hide
  if ( ~className.indexOf(' show-all ') ) {
    list.className = className.replace(' show-all ', ' hide-all ');
  } else {
    // else show
    list.className += ' show-all';
  }
};
