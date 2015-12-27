// grab text link
var listClick = document.getElementById("list-link");
// grab list element
var list = document.getElementById("see-list");
// hide list element at first so if there's no javascript then site is still useable
list.className += "hide-all";
// when the text link is clicked on
listClick.onclick = function() { showTheList(list) };
// add class which shows the list
function showTheList(el) {
  el.className += "show-all";
};
